const KEY = 'my_memo_items';
let items = [];
let filter = { status: 'all', kind: 'all' };

const list = document.getElementById('memoList');
const form = document.getElementById('memoForm');
const input = document.getElementById('memoInput');
const dateInput = document.getElementById('memoDate');
const timeInput = document.getElementById('memoTime');
const countEl = document.getElementById('memoCount');

function loadItems() {
    let raw = [];
    try {
        raw = JSON.parse(localStorage.getItem(KEY) || '[]');
    } catch {
        raw = [];
    }
    return raw.map(it => {
        const kind = it.kind === 'event' || it.kind === 'goal'
            ? it.kind
            : (it.date ? 'event' : 'goal');
        return {
            ...it,
            id: it.id ?? Date.now(),
            text: String(it.text || ''),
            done: !!it.done,
            kind,
            date: kind === 'event' ? (it.date || '') : '',
            time: kind === 'event' ? (it.time || '') : ''
        };
    });
}

function save() {
    localStorage.setItem(KEY, JSON.stringify(items));
}

function render() {
    list.innerHTML = '';
    const shown = items.filter(it =>
        (filter.status === 'all' || (filter.status === 'done' ? it.done : !it.done)) &&
        (filter.kind === 'all' || it.kind === filter.kind)
    );
    for (const it of shown) {
        const li = document.createElement('li');
        li.className = 'memo-item' + (it.done ? ' done' : '');
        li.dataset.id = it.id;

        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.checked = it.done;
        cb.addEventListener('change', () => {
            it.done = cb.checked;
            save();
            render();
        });

        const span = document.createElement('span');
        span.className = 'text';
        span.textContent = it.text;

        let dBadge = null;
        if (it.kind === 'event' && it.date) {
            dBadge = document.createElement('span');
            const todayStr = new Date().toLocaleDateString('sv-SE');
            dBadge.className = 'date-badge' + (!it.done && it.date < todayStr ? ' overdue' : '');
            dBadge.textContent = it.date.slice(5);
        } else if (it.kind === 'goal') {
            dBadge = document.createElement('span');
            dBadge.className = 'date-badge goal-badge';
            dBadge.textContent = '长期目标';
        }
        span.addEventListener('dblclick', () => {
            const t = prompt('修改内容：', it.text);
            if (t !== null && t.trim()) {
                it.text = t.trim();
                save();
                render();
            }
        });

        const del = document.createElement('button');
        del.className = 'del';
        del.textContent = '✕';
        del.addEventListener('click', () => {
            items = items.filter(x => x.id !== it.id);
            save();
            render();
        });

        li.append(cb, span);
        if (dBadge) li.appendChild(dBadge);
        li.appendChild(del);
        list.appendChild(li);
    }
    const doneN = items.filter(i => i.done).length;
    countEl.textContent = `共 ${items.length} 条，完成 ${doneN} 条`;
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    const kind = form.classList.contains('mode-goal') ? 'goal' : 'event';
    const dateVal = kind === 'event' ? dateInput.value : '';
    if (kind === 'event' && !dateVal) {
        dateInput.reportValidity();
        return;
    }
    const timeVal = kind === 'event' ? timeInput.value : '';
    items.unshift({ id: Date.now(), text, done: false, kind, date: dateVal, time: timeVal });
    input.value = '';
    dateInput.value = '';
    timeInput.value = '';
    save();
    render();
});

document.querySelectorAll('.type-switch button').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.type-switch .active').classList.remove('active');
        btn.classList.add('active');
        form.classList.toggle('mode-goal', btn.dataset.kind === 'goal');
        dateInput.disabled = btn.dataset.kind === 'goal';
        timeInput.disabled = btn.dataset.kind === 'goal';
        if (btn.dataset.kind === 'goal') {
            dateInput.value = '';
            timeInput.value = '';
        }
    });
});

document.querySelectorAll('.filters .chip').forEach(btn => {
    btn.addEventListener('click', () => {
        const group = btn.dataset.filter;
        filter[group] = btn.dataset.value;
        document.querySelectorAll(`.filters .chip[data-filter="${group}"]`).forEach(item => {
            item.classList.remove('active');
        });
        btn.classList.add('active');
        render();
    });
});

document.getElementById('clearDone').addEventListener('click', () => {
    items = items.filter(i => !i.done);
    save();
    render();
});

render();
