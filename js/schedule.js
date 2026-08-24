const DAYS = ['时间', '周一', '周二', '周三', '周四', '周五', '周六', '周日'];

let data = null;
let termIdx = 0;
let weekIdx = 1;

const table = document.getElementById('scheduleTable');
const termSel = document.getElementById('termSel');
const weekSel = document.getElementById('weekSel');
const panel = document.getElementById('importPanel');
const importText = document.getElementById('importText');
const importMsg = document.getElementById('importMsg');

function fetchCloud() {
    return fetch('schedule.json?t=' + Date.now())
        .then(r => r.json())
        .catch(() => null);
}

function term() {
    return data && data.terms ? data.terms[termIdx] : null;
}

function weekActive(c, w) {
    return (c.weeks || []).some(r => w >= r[0] && w <= r[1]);
}

function build() {
    const t = term();
    table.innerHTML = '';
    if (!t) return;
    const head = table.insertRow();
    ['时间', '周一', '周二', '周三', '周四', '周五', '周六', '周日'].forEach(d => {
        const th = document.createElement('th');
        th.textContent = d;
        head.appendChild(th);
    });
    const times = data.times || [];
    for (let p = 1; p <= times.length; p++) {
        const tr = table.insertRow();
        const tdT = tr.insertCell();
        tdT.className = 'time';
        tdT.textContent = p + ' ' + (times[p - 1] || '');
        for (let d = 1; d <= 7; d++) {
            const td = tr.insertCell();
            const hits = t.courses.filter(c => c.day === d && c.start <= p && p <= c.end && weekActive(c, weekIdx));
            if (hits.length) {
                td.classList.add('hascls');
                hits.forEach(c => {
                    const div = document.createElement('div');
                    div.className = 'cls';
                    div.textContent = c.name;
                    const rm = document.createElement('span');
                    rm.className = 'rm';
                    rm.textContent = (c.room || '') + ' ·' + c.weeks.map(r => r[0] === r[1] ? r[0] + '周' : r[0] + '-' + r[1] + '周').join(',');
                    div.appendChild(rm);
                    td.appendChild(div);
                });
            }
        }
    }
}

function fillSelectors(keepTerm, keepWeek) {
    termSel.innerHTML = '';
    data.terms.forEach((t, i) => termSel.add(new Option(t.name, i)));
    termIdx = keepTerm !== undefined ? keepTerm : defaultTerm();
    termSel.value = termIdx;
    fillWeeks(keepWeek);
}

function fillWeeks(keep) {
    const t = term();
    weekSel.innerHTML = '';
    for (let w = 1; w <= (t.weeks || 16); w++) weekSel.add(new Option('第' + w + '周', w));
    weekIdx = keep !== undefined ? keep : defaultWeek();
    weekSel.value = weekIdx;
}

function defaultTerm() {
    const today = new Date().toLocaleDateString('sv-SE');
    const idx = data.terms.findIndex(t => today >= t.start && today <= addDays(t.start, t.weeks * 7 - 1));
    return idx >= 0 ? idx : data.terms.length - 1;
}

function defaultWeek() {
    const t = term();
    const today = new Date().toLocaleDateString('sv-SE');
    if (today >= t.start && today <= addDays(t.start, t.weeks * 7 - 1)) {
        const diff = Math.floor((new Date(today) - new Date(t.start)) / 86400000);
        return Math.floor(diff / 7) + 1;
    }
    return 1;
}

function addDays(dateStr, n) {
    const d = new Date(dateStr);
    d.setDate(d.getDate() + n);
    return d.toLocaleDateString('sv-SE');
}

termSel.addEventListener('change', () => {
    termIdx = +termSel.value;
    fillWeeks();
    build();
});
weekSel.addEventListener('change', () => {
    weekIdx = +weekSel.value;
    build();
});

document.getElementById('exportBtn').addEventListener('click', async () => {
    const json = JSON.stringify(data);
    try {
        await navigator.clipboard.writeText(json);
        alert('课表JSON已复制到剪贴板，发给站长即可更新云端');
    } catch (e) {
        prompt('请手动全选复制：', json);
    }
});

document.getElementById('importBtn').addEventListener('click', () => {
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
});
document.getElementById('cancelImport').addEventListener('click', () => {
    panel.style.display = 'none';
});

const DAYMAP = {
    '周一': 1, '周二': 2, '周三': 3, '周四': 4, '周五': 5, '周六': 6, '周日': 7, '周天': 7,
    '星期一': 1, '星期二': 2, '星期三': 3, '星期四': 4, '星期五': 5, '星期六': 6, '星期日': 7, '星期天': 7
};

function parseText(text) {
    const items = [];
    text.split(/[\n;；]+/).forEach(raw => {
        const line = raw.trim();
        if (!line) return;
        let day = 0, dKey = '';
        for (const k of Object.keys(DAYMAP)) {
            if (line.includes(k)) { day = DAYMAP[k]; dKey = k; break; }
        }
        if (!day) return;
        const range = line.match(/第?\s*(\d+)\s*[-–~]\s*(\d+)\s*节/);
        const single = line.match(/第?\s*(\d+)\s*节/);
        let start, end;
        if (range) { start = +range[1]; end = +range[2]; }
        else if (single) { start = end = +single[1]; }
        else return;
        const wk = line.match(/(\d+)\s*[-–~]\s*(\d+)周/);
        const wSingle = line.match(/(\d+)周/);
        let weeks = [[1, term().weeks || 16]];
        if (wk) weeks = [[+wk[1], +wk[2]]];
        else if (wSingle) weeks = [[+wSingle[1], +wSingle[1]]];
        let name = line
            .replace(dKey, ' ')
            .replace(/第?\s*\d+\s*[-–~]\s*\d+\s*节|第?\s*\d+\s*节/g, ' ')
            .replace(/\d{1,2}\s*[-–~]\s*\d{1,2}\s*周|[单双]周|\d{1,2}周/g, ' ')
            .trim();
        name = name.split(/\s+/).filter(Boolean)[0] || '课程';
        items.push({ name, day, start, end, weeks });
    });
    return items;
}

document.getElementById('doImport').addEventListener('click', () => {
    const t = importText.value.trim();
    if (!t) { importMsg.textContent = '⚠️ 内容为空'; return; }
    try {
        const j = JSON.parse(t);
        if (j && j.terms) {
            data = j;
            fillSelectors();
            build();
            importMsg.textContent = '✓ 已按完整课表JSON预览（仅本页生效，更新云端请把JSON发给站长）';
            return;
        }
    } catch (e) { /* not json */ }
    const items = parseText(t);
    if (!items.length) {
        importMsg.textContent = '❌ 未识别到课程。每行需含「周X」「第X-X节」，可选「X-Y周」';
        return;
    }
    const t0 = term();
    items.forEach(it => {
        it.room = '';
        t0.courses.push(it);
    });
    build();
    importMsg.textContent = `✓ 已向「${t0.name}」加入 ${items.length} 条（仅本页预览，导出后发站长可更新云端）`;
});

fetchCloud().then(d => {
    if (d && d.terms) {
        data = d;
        fillSelectors();
        build();
    }
});
