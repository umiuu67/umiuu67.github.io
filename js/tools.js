const $ = id => document.getElementById(id);

/* ---- calculator ---- */
const screen = $('calcScreen');
let expr = '';

function showCalc() {
    screen.textContent = expr || '0';
}

function calcResult() {
    try {
        const safe = expr.replace(/[^0-9+\-*/().]/g, '');
        if (!safe) return;
        const val = Function('"use strict";return (' + safe + ')')();
        if (val === undefined || Number.isNaN(val) || !Number.isFinite(val)) {
            screen.textContent = '错误';
            expr = '';
        } else {
            expr = String(Math.round(val * 1e10) / 1e10);
            screen.textContent = expr;
        }
    } catch {
        screen.textContent = '错误';
        expr = '';
    }
}

document.querySelectorAll('.calc-keys button').forEach(btn => {
    btn.addEventListener('click', () => {
        const k = btn.dataset.k;
        if (k === 'C') expr = '';
        else if (k === 'back') expr = expr.slice(0, -1);
        else if (k === '=') { calcResult(); return; }
        else {
            if ('+-*/.'.includes(k) && !expr && k !== '(' ) return;
            expr += k;
        }
        showCalc();
    });
});

/* ---- word count ---- */
const wcInput = $('wcInput');
wcInput.addEventListener('input', () => {
    const t = wcInput.value;
    $('wcChars').textContent = t.length;
    $('wcNoSpace').textContent = t.replace(/\s/g, '').length;
    $('wcWords').textContent = t.trim() ? t.trim().split(/\s+/).length : 0;
    $('wcLines').textContent = t ? t.split('\n').length : 0;
});

/* ---- random numbers ---- */
$('randGo').addEventListener('click', () => {
    const min = Math.ceil(Number($('randMin').value));
    const max = Math.floor(Number($('randMax').value));
    const n = Math.min(Math.max(1, Number($('randCount').value) || 1), 100);
    if (!Number.isFinite(min) || !Number.isFinite(max) || min > max) {
        $('randOut').textContent = '范围无效';
        return;
    }
    const out = [];
    for (let i = 0; i < n; i++) out.push(Math.floor(Math.random() * (max - min + 1)) + min);
    $('randOut').textContent = out.join(' , ');
});

/* ---- countdown timer ---- */
let timerId = null;
let remain = 0;

function fmt(s) {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    const core = String(m).padStart(2, '0') + ':' + String(sec).padStart(2, '0');
    return h > 0 ? h + ':' + core : core;
}

function readTimer() {
    remain = Math.max(0, Number($('timerMin').value) * 60 + Number($('timerSec').value));
    $('timerShow').textContent = fmt(remain);
}
['timerMin', 'timerSec'].forEach(id => $(id).addEventListener('input', () => {
    if (!timerId) readTimer();
}));

function beep() {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        [0, 300, 600].forEach(d => {
            const o = ctx.createOscillator();
            const g = ctx.createGain();
            o.frequency.value = 880;
            o.connect(g);
            g.connect(ctx.destination);
            g.gain.setValueAtTime(0.3, ctx.currentTime + d / 1000);
            o.start(ctx.currentTime + d / 1000);
            o.stop(ctx.currentTime + d / 1000 + 0.2);
        });
    } catch {}
}

$('timerStart').addEventListener('click', function () {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
        this.textContent = '继续';
        return;
    }
    if (remain <= 0) readTimer();
    this.textContent = '暂停';
    timerId = setInterval(() => {
        remain--;
        $('timerShow').textContent = fmt(Math.max(0, remain));
        if (remain <= 0) {
            clearInterval(timerId);
            timerId = null;
            $('timerStart').textContent = '开始';
            beep();
            alert('⏰ 时间到！');
        }
    }, 1000);
});

$('timerReset').addEventListener('click', () => {
    if (timerId) clearInterval(timerId);
    timerId = null;
    $('timerStart').textContent = '开始';
    readTimer();
});
readTimer();

/* ---- unit converter ---- */
const UNITS = {
    len: {
        mm: ['毫米', 0.001], cm: ['厘米', 0.01], m: ['米', 1],
        km: ['千米', 1000], in: ['英寸', 0.0254], ft: ['英尺', 0.3048]
    },
    weight: {
        g: ['克', 1], kg: ['千克', 1000], t: ['吨', 1e6],
        oz: ['盎司', 28.3495], lb: ['磅', 453.592]
    },
    data: {
        KB: ['KB', 1], MB: ['MB', 1024], GB: ['GB', 1048576], TB: ['TB', 1073741824]
    }
};

const catSel = $('convCat'), fromSel = $('convFrom'), toSel = $('convTo');

function fillUnits() {
    const units = UNITS[catSel.value];
    fromSel.innerHTML = '';
    toSel.innerHTML = '';
    Object.keys(units).forEach(k => {
        fromSel.add(new Option(units[k][0] + ` (${k})`, k));
        toSel.add(new Option(units[k][0] + ` (${k})`, k));
    });
    toSel.selectedIndex = Math.min(1, toSel.options.length - 1);
    convert();
}

function convert() {
    const v = Number($('convIn').value);
    const u = UNITS[catSel.value];
    const base = v * u[fromSel.value][1];
    const res = base / u[toSel.value][1];
    $('convOut').value = Number.isFinite(res) ? Math.round(res * 1e8) / 1e8 : '';
}

catSel.addEventListener('change', fillUnits);
[fromSel, toSel].forEach(s => s.addEventListener('change', convert));
$('convIn').addEventListener('input', convert);
fillUnits();
