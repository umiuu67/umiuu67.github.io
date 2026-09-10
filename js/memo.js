const KEY = 'my_memo_items';
let items = loadItems(localStorage.getItem(KEY));
let filter = 'all';

const list = document.getElementById('memoList');
const form = document.getElementById('memoForm');
const input = document.getElementById('memoInput');
const countEl = document.getElementById('memoCount');
const importFile = document.getElementById('memoImportFile');

function loadItems(raw) {
    try {
        const parsed = JSON.parse(raw || '[]');
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        return [];
    }
}

function save() {
    localStorage.setItem(KEY, JSON.stringify(items));
}

function render() {
    list.innerHTML = '';
    const shown = items.filter(it =>
        filter === 'all' ? true : filter === 'done' ? it.done : !it.done
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
        if (it.date) {
            dBadge = document.createElement('span');
            const todayStr = new Date().toLocaleDateString('sv-SE');
            dBadge.className = 'date-badge' + (!it.done && it.date < todayStr ? ' overdue' : '');
            dBadge.textContent = it.date.slice(5);
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
    const dateVal = document.getElementById('memoDate').value || '';
    items.unshift({ id: Date.now() + Math.random(), text, done: false, date: dateVal });
    input.value = '';
    document.getElementById('memoDate').value = '';
    save();
    render();
});

document.querySelectorAll('.filters .chip').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filters .active').classList.remove('active');
        btn.classList.add('active');
        filter = btn.dataset.f;
        render();
    });
});

document.getElementById('clearDone').addEventListener('click', () => {
    items = items.filter(i => !i.done);
    save();
    render();
});

document.getElementById('exportMemo').addEventListener('click', () => {
    const payload = {
        version: 1,
        exportedAt: new Date().toISOString(),
        items
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `umiuu-memo-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 0);
});

document.getElementById('importMemo').addEventListener('click', () => importFile.click());
importFile.addEventListener('change', () => {
    const file = importFile.files && importFile.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
        try {
            const parsed = JSON.parse(reader.result);
            const incoming = Array.isArray(parsed) ? parsed : parsed.items;
            if (!Array.isArray(incoming)) throw new Error('invalid backup');
            const next = incoming
                .filter(item => item && typeof item.text === 'string')
                .map((item, index) => ({
                    id: Number.isFinite(Number(item.id)) ? Number(item.id) : Date.now() + index,
                    text: item.text,
                    done: Boolean(item.done),
                    date: typeof item.date === 'string' ? item.date : ''
                }));
            if (!confirm(`导入 ${next.length} 条备忘录并覆盖当前数据？`)) return;
            items = next;
            save();
            render();
        } catch (error) {
            alert('备份文件无法识别，请选择由本站导出的 JSON 文件。');
        } finally {
            importFile.value = '';
        }
    };
    reader.readAsText(file);
});

window.addEventListener('storage', event => {
    if (event.key !== KEY) return;
    items = loadItems(event.newValue);
    render();
});

render();
