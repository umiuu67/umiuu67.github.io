const KEY = 'my_memo_items';
let items = JSON.parse(localStorage.getItem(KEY) || '[]');
let filter = 'all';

const list = document.getElementById('memoList');
const form = document.getElementById('memoForm');
const input = document.getElementById('memoInput');
const countEl = document.getElementById('memoCount');

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

        li.append(cb, span, del);
        list.appendChild(li);
    }
    const doneN = items.filter(i => i.done).length;
    countEl.textContent = `共 ${items.length} 条，完成 ${doneN} 条`;
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    items.unshift({ id: Date.now(), text, done: false });
    input.value = '';
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

render();
