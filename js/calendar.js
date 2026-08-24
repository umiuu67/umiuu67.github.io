const MEMO_KEY = 'my_memo_items';
const SCHED_KEY = 'my_schedule_cells';

function loadMemos() {
    try { return JSON.parse(localStorage.getItem(MEMO_KEY) || '[]') || []; } catch (e) { return []; }
}
function saveMemos(list) {
    localStorage.setItem(MEMO_KEY, JSON.stringify(list));
}
function loadLocalSchedule() {
    try { return JSON.parse(localStorage.getItem(SCHED_KEY) || '{}') || {}; } catch (e) { return {}; }
}

let cloudSchedule = null;
fetch('schedule.json?t=' + Date.now())
    .then(r => (r.ok ? r.json() : {}))
    .then(d => { if (d && typeof d === 'object' && !Array.isArray(d)) { cloudSchedule = d; render(); renderPanel(); } })
    .catch(() => {});

function scheduleCells() {
    const local = loadLocalSchedule();
    if (Object.keys(local).length > 0) return local;
    return cloudSchedule || {};
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

function coursesOfDay(dateStr) {
    const wd = weekdayOfDateStr(dateStr);
    if (wd > 4) return [];
    const cells = scheduleCells();
    const out = [];
    for (let p = 0; p < 8; p++) {
        const v = cells[`${p}-${wd}`];
        if (v) v.split('\n').forEach(name => out.push({ period: p + 1, name }));
    }
    return out;
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
        if (ds === selected) cell.classList.add('sel');

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
    document.getElementById('panelCourseTitle').textContent = `📚 ${selected.slice(5)} 课程`;
    document.getElementById('panelMemoTitle').textContent = `📝 ${selected.slice(5)} 备忘`;

    const cList = document.getElementById('panelCourses');
    cList.innerHTML = '';
    const courses = coursesOfDay(selected).sort((a, b) => a.period - b.period);
    if (!courses.length) {
        cList.innerHTML = '<li class="empty">这天没有课 🎉</li>';
    } else {
        courses.forEach(c => {
            const li = document.createElement('li');
            li.innerHTML = `<span class="p-tag">第${c.period}节</span>${c.name}`;
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
