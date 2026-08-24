const MEMO_KEY = 'my_memo_items';

function loadMemos() {
    try { return JSON.parse(localStorage.getItem(MEMO_KEY) || '[]') || []; } catch (e) { return []; }
}
function saveMemos(list) {
    localStorage.setItem(MEMO_KEY, JSON.stringify(list));
}

let termData = null;
fetch('schedule.json?t=' + Date.now())
    .then(r => r.json())
    .then(d => { if (d && d.terms) { termData = d; render(); renderPanel(); } })
    .catch(() => {});

function firstMonday(y, m, minDay) {
    const d = new Date(y, m - 1, minDay);
    while (d.getDay() !== 1) d.setDate(d.getDate() + 1);
    return d.toLocaleDateString('sv-SE');
}

function ensureTerms() {
    const today = new Date().toLocaleDateString('sv-SE');
    let guard = 0;
    while (guard++ < 10) {
        const t = termData.terms[termData.terms.length - 1];
        const e = new Date(t.start); e.setDate(e.getDate() + t.weeks * 7 - 1);
        if (e.toLocaleDateString('sv-SE') >= today) break;
        const m = t.name.match(/(\d{4})年(秋|春)季/);
        if (!m) break;
        const y = +m[1];
        let name, start;
        if (m[2] === '秋') { start = firstMonday(y + 1, 3, 1); name = (y + 1) + '年春季学期'; }
        else { start = firstMonday(y, 9, 7); name = y + '年秋季学期'; }
        termData.terms.push({ name, start, weeks: 16, courses: [], auto: true });
    }
}

function coursesOfDay(dateStr) {
    if (!termData || !termData.terms) return [];
    ensureTerms();
    const parts = dateStr.split('-').map(Number);
    const date = new Date(parts[0], parts[1] - 1, parts[2]);
    const wd = (date.getDay() + 6) % 7 + 1;
    for (const term of termData.terms) {
        const sp = term.start.split('-').map(Number);
        const start = new Date(sp[0], sp[1] - 1, sp[2]);
        const diff = Math.floor((date - start) / 86400000);
        if (diff < 0 || diff >= term.weeks * 7) continue;
        const week = Math.floor(diff / 7) + 1;
        const out = [];
        for (const c of term.courses || []) {
            if (c.day !== wd) continue;
            const active = (c.weeks || []).some(r => week >= r[0] && week <= r[1]);
            if (active) out.push({ name: c.name, room: c.room || '', start: c.start, end: c.end });
        }
        out.sort((a, b) => a.start - b.start);
        return out;
    }
    return [];
}

function fmtDate(y, m, d) {
    return `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
}

const grid = document.getElementById('calGrid');
const titleEl = document.getElementById('calTitle');
const now = new Date();
let viewY = now.getFullYear(), viewM = now.getMonth();
let selected = fmtDate(now.getFullYear(), now.getMonth(), now.getDate());

document.getElementById('calPrev').addEventListener('click', () => {
    viewM--; if (viewM < 0) { viewM = 11; viewY--; } render(); renderPanel();
});
document.getElementById('calNext').addEventListener('click', () => {
    viewM++; if (viewM > 11) { viewM = 0; viewY++; } render(); renderPanel();
});
document.getElementById('calToday').addEventListener('click', () => {
    viewY = now.getFullYear(); viewM = now.getMonth();
    selected = fmtDate(viewY, viewM, now.getDate());
    render(); renderPanel();
});

function weekdayOfDateStr(s) {
    const [y, m, d] = s.split('-').map(Number);
    return (new Date(y, m - 1, d).getDay() + 6) % 7;
}

function render() {
    titleEl.textContent = `${viewY}年${viewM + 1}月`;
    grid.innerHTML = '';
    const first = new Date(viewY, viewM, 1);
    const startOffset = (first.getDay() + 6) % 7;
    const daysInMonth = new Date(viewY, viewM + 1, 0).getDate();
    const todayStr = fmtDate(now.getFullYear(), now.getMonth(), now.getDate());
    const memos = loadMemos();

    for (let i = 0; i < startOffset; i++) {
        const blank = document.createElement('div');
        blank.className = 'cal-cell out';
        grid.appendChild(blank);
    }
    for (let d = 1; d <= daysInMonth; d++) {
        const ds = fmtDate(viewY, viewM, d);
        const cell = document.createElement('div');
        cell.className = 'cal-cell' + (ds === todayStr ? ' today' : '') + (ds === selected ? ' sel' : '');

        const num = document.createElement('div');
        num.className = 'cal-num';
        num.textContent = d;
        cell.appendChild(num);

        const courses = coursesOfDay(ds);
        if (courses.length) {
            const b = document.createElement('span');
            b.className = 'cal-badge course';
            b.textContent = `课${courses.length}`;
            cell.appendChild(b);
        }

        const dayMemos = memos.filter(m => m.date === ds);
        if (dayMemos.length) {
            const b = document.createElement('span');
            const undone = dayMemos.filter(m => !m.done).length;
            b.className = 'cal-badge memo' + (undone === 0 ? ' alldone' : '');
            b.textContent = undone > 0 ? `记${undone}` : '✓';
            cell.appendChild(b);
        }

        cell.addEventListener('click', () => {
            selected = ds;
            render();
            renderPanel();
        });
        grid.appendChild(cell);
    }
}

function renderPanel() {
    document.getElementById('panelCourseTitle').textContent = `${selected.slice(5)} 课程`;
    document.getElementById('panelMemoTitle').textContent = `${selected.slice(5)} 备忘`;

    const cList = document.getElementById('panelCourses');
    cList.innerHTML = '';
    const courses = coursesOfDay(selected);
    if (!courses.length) {
        cList.innerHTML = '<li class="empty">这天没有课 🎉</li>';
    } else {
        courses.forEach(c => {
            const li = document.createElement('li');
            const span = c.start === c.end ? `第${c.start}节` : `第${c.start}-${c.end}节`;
            li.innerHTML = `<span class="p-tag">${span}</span>${c.name}<span class="rm-tag">${c.room}</span>`;
            cList.appendChild(li);
        });
    }

    const mList = document.getElementById('panelMemos');
    mList.innerHTML = '';
    const dayMemos = loadMemos().filter(m => m.date === selected);
    if (!dayMemos.length) {
        mList.innerHTML = '<li class="empty">暂无备忘</li>';
    } else {
        dayMemos.forEach(m => {
            const li = document.createElement('li');
            li.className = 'memo-item' + (m.done ? ' done' : '');
            const cb = document.createElement('input');
            cb.type = 'checkbox';
            cb.checked = m.done;
            cb.addEventListener('change', () => {
                const all = loadMemos();
                const t = all.find(x => x.id === m.id);
                if (t) { t.done = cb.checked; saveMemos(all); }
                render(); renderPanel();
            });
            const span = document.createElement('span');
            span.className = 'text';
            span.textContent = m.text;
            const del = document.createElement('button');
            del.className = 'del';
            del.textContent = '✕';
            del.addEventListener('click', () => {
                saveMemos(loadMemos().filter(x => x.id !== m.id));
                render(); renderPanel();
            });
            li.append(cb, span, del);
            mList.appendChild(li);
        });
    }
}

document.getElementById('panelAddForm').addEventListener('submit', e => {
    e.preventDefault();
    const input = document.getElementById('panelAddInput');
    const text = input.value.trim();
    if (!text) return;
    const list = loadMemos();
    list.unshift({ id: Date.now(), text, done: false, date: selected });
    saveMemos(list);
    input.value = '';
    render(); renderPanel();
});

render();
renderPanel();
