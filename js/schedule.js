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

build();
