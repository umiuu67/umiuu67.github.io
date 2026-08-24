const KEY = 'my_schedule_cells';
const DAYS = ['时间', '周一', '周二', '周三', '周四', '周五'];
const TIMES = ['08:00-08:45', '08:55-09:40', '10:00-10:45', '10:55-11:40',
               '14:00-14:45', '14:55-15:40', '16:00-16:45', '16:55-17:40'];
let cells = JSON.parse(localStorage.getItem(KEY) || '{}');

const table = document.getElementById('scheduleTable');

function build() {
    table.innerHTML = '';
    const head = table.insertRow();
    DAYS.forEach(d => {
        const th = document.createElement('th');
        th.textContent = d;
        head.appendChild(th);
    });
    TIMES.forEach((t, r) => {
        const tr = table.insertRow();
        const tdT = tr.insertCell();
        tdT.className = 'time';
        tdT.textContent = `${r + 1} ${t}`;
        for (let c = 0; c < 5; c++) {
            const td = tr.insertCell();
            const inp = document.createElement('input');
            inp.type = 'text';
            inp.value = cells[`${r}-${c}`] || '';
            inp.placeholder = '点击输入';
            inp.addEventListener('input', () => {
                cells[`${r}-${c}`] = inp.value.trim();
                localStorage.setItem(KEY, JSON.stringify(cells));
            });
            td.appendChild(inp);
        }
    });
}

document.getElementById('clearSchedule').addEventListener('click', () => {
    if (!confirm('确定清空整个课表吗？')) return;
    cells = {};
    localStorage.removeItem(KEY);
    build();
});

/* ---- import & export ---- */
const panel = document.getElementById('importPanel');
const importText = document.getElementById('importText');
const importMsg = document.getElementById('importMsg');

document.getElementById('importBtn').addEventListener('click', () => {
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
});
document.getElementById('cancelImport').addEventListener('click', () => {
    panel.style.display = 'none';
});

document.getElementById('exportBtn').addEventListener('click', async () => {
    const json = JSON.stringify(cells);
    try {
        await navigator.clipboard.writeText(json);
        alert('备份JSON已复制到剪贴板，可粘贴保存到备忘录或任意文件');
    } catch (e) {
        prompt('请手动全选复制：', json);
    }
});

const DAYMAP = {
    '周一': 0, '周二': 1, '周三': 2, '周四': 3, '周五': 4, '周六': 5, '周日': 6, '周天': 6,
    '星期一': 0, '星期二': 1, '星期三': 2, '星期四': 3, '星期五': 4, '星期六': 5, '星期日': 6, '星期天': 6
};

function parseText(text) {
    const items = [];
    const lines = text.split(/[\n;；]+/);
    for (const raw of lines) {
        const line = raw.trim();
        if (!line) continue;
        let day = -1, dKey = '';
        for (const k of Object.keys(DAYMAP)) {
            if (line.includes(k)) { day = DAYMAP[k]; dKey = k; break; }
        }
        if (day < 0) continue;
        const range = line.match(/第?\s*(\d+)\s*[-–~]\s*(\d+)\s*节/);
        const single = line.match(/第?\s*(\d+)\s*节/);
        let start, end;
        if (range) { start = +range[1]; end = +range[2]; }
        else if (single) { start = end = +single[1]; }
        else continue;
        if (!/节/.test(line) && !single && !range) continue;
        let name = line
            .replace(dKey, ' ')
            .replace(/第?\s*\d+\s*[-–~]\s*\d+\s*节|第?\s*\d+\s*节/g, ' ')
            .replace(/\d{1,2}\s*[-–~]\s*\d{1,2}\s*周|\d{1,2}\s*-\s*\d{1,2}周|[单双]周|\d{1,2}周/g, ' ')
            .trim();
        name = name.split(/\s+/).filter(Boolean)[0] || '课程';
        items.push({ name, day, start, end });
    }
    return items;
}

function applyItems(items) {
    let n = 0, skipped = 0;
    for (const it of items) {
        if (it.day < 0 || it.day > 4) { skipped++; continue; }
        for (let p = Math.max(1, it.start); p <= Math.min(8, it.end); p++) {
            const k = (p - 1) + '-' + it.day;
            cells[k] = cells[k] ? cells[k] + '\n' + it.name : it.name;
            n++;
        }
    }
    localStorage.setItem(KEY, JSON.stringify(cells));
    build();
    return { n, skipped };
}

document.getElementById('doImport').addEventListener('click', () => {
    const t = importText.value.trim();
    if (!t) { importMsg.textContent = '⚠️ 内容为空'; return; }

    try {
        const j = JSON.parse(t);
        if (Array.isArray(j)) {
            const items = j.map(x => ({
                name: x.name || x.course || '课程',
                day: ((x.day ?? x.weekday ?? 1) | 0) - 1,
                start: (x.start ?? x.section ?? 1) | 0,
                end: (x.end ?? x.start ?? x.section ?? 1) | 0
            }));
            const r = applyItems(items);
            importMsg.textContent = `✓ JSON导入成功：写入 ${r.n} 格，跳过 ${r.skipped} 条（仅支持周一~周五、第1~8节）`;
            return;
        }
        if (j && typeof j === 'object') {
            cells = j;
            localStorage.setItem(KEY, JSON.stringify(cells));
            build();
            importMsg.textContent = `✓ 备份格式导入成功：${Object.keys(j).length} 格`;
            return;
        }
    } catch (e) { /* not json */ }

    const items = parseText(t);
    if (!items.length) {
        importMsg.textContent = '❌ 未识别到任何课程。请确保每行含「周X」和「第X-X节」字样';
        return;
    }
    const r = applyItems(items);
    importMsg.textContent = `✓ 文本导入成功：识别 ${items.length} 门课，写入 ${r.n} 格，跳过周末等 ${r.skipped} 条`;
});

build();
