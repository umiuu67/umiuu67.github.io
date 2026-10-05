import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/controls/OrbitControls.js";
import { ALPHABET, ROTOR_SPECS, EnigmaMachine, parsePlugboard, randomConfiguration } from "./enigma/core.js";

const $ = (s) => document.querySelector(s), $$ = (s) => [...document.querySelectorAll(s)];
const names = Object.keys(ROTOR_SPECS), roman = { I: "Ⅰ", II: "Ⅱ", III: "Ⅲ", IV: "Ⅳ", V: "Ⅴ" };
const machine = new EnigmaMachine();
const state = { input: "", output: "", logs: [], operation: "encode", mode: "outer", pressed: new Set(), scene: null };

function options() { return names.map((n) => `<option value="${n}">${roman[n]} 号</option>`).join(""); }
function letters() { return [...ALPHABET].map((l, i) => `<option value="${i}">${l} / ${String(i + 1).padStart(2, "0")}</option>`).join(""); }
function status(text, error = false) { $("#statusText").textContent = text; $(".status i").style.background = error ? "var(--red)" : "var(--green)"; }
function config() {
  return { rotors: $$(".rotor-choice").map((e) => e.value), rings: $$(".ring-choice").map((e) => +e.value),
    positions: machine.rotors.map((r) => r.position), reflector: $("#reflectorSelect").value, plugboard: machine.plugboardPairs };
}
function resetSession(clearInput = true) {
  state.input = ""; state.output = ""; state.logs = []; state.pressed.clear();
  if (clearInput) $("#textInput").value = "";
  $$(".key").forEach((e) => e.classList.remove("pressed"));
  $$(".lamp").forEach((e) => e.classList.remove("on"));
  update(); logs();
}
function update() {
  const decode = state.operation === "decode", il = decode ? "密文" : "明文", ol = decode ? "明文" : "密文";
  $("#textInputLabel").textContent = `输入${il}`; $("#textInput").placeholder = `粘贴${il}，仅处理英文字母 A–Z`;
  $("#textInput").setAttribute("aria-label", `输入${il}`); $("#inputReadoutLabel").textContent = il; $("#outputReadoutLabel").textContent = ol;
  $("#inputReadout").textContent = state.input || "—"; $("#outputReadout").textContent = state.output || "—";
  $("#signalCount").textContent = `${String([...state.input].filter((x) => ALPHABET.includes(x)).length).padStart(2, "0")} 个字母`;
  $("#operationNote").textContent = decode ? "解码：输入密文，使用当前转子设置还原明文" : "编码：输入明文，使用当前转子设置生成密文";
  $("#pathDirection").textContent = decode ? "密文输入 / 同路径逆运算" : "明文输入 / 正向加密";
}
function syncRotors() {
  machine.rotors.forEach((r, i) => { const row = $(`.rotor-row[data-index="${i}"]`); if (!row) return;
    row.querySelector(".rotor-choice").value = r.name; row.querySelector(".ring-choice").value = String(r.ring);
    row.querySelector(".window").textContent = ALPHABET[r.position]; if (state.scene?.rotors[i]) state.scene.rotors[i].rotation.z = -r.position * Math.PI * 2 / 26;
  });
}
function logs() {
  const panel = $("#logPanel"); if (!$("#logToggle").checked) { panel.innerHTML = '<div class="log-empty">日志已隐藏</div>'; return; }
  panel.innerHTML = state.logs.length ? state.logs.slice(-16).reverse().map((e) => `<div class="log-entry"><strong>${e.index}</strong><span>${e.window}</span><span>${e.input} → ${e.output}</span><span>${e.reflector}</span></div>`).join("") : '<div class="log-empty">输入字母后显示逐键记录</div>';
}
function lamp(letter) { $$(".lamp").forEach((e) => e.classList.toggle("on", e.dataset.letter === letter)); }
function trace(t) {
  $$(".path-node").forEach((e) => e.classList.remove("active")); if (!t) { $(".path-node").classList.add("active"); $("#pathCaption").textContent = "等待按键"; return; }
  $$(".path-node").forEach((e, i) => setTimeout(() => e.classList.add("active"), i * 45)); $("#pathCaption").textContent = `${t.input} → ${t.output} · ${machine.getDisplayPositions()}`;
}
function press(letter) {
  letter = letter.toUpperCase(); if (!ALPHABET.includes(letter) || state.pressed.has(letter)) return; state.pressed.add(letter);
  $(`.key[data-letter="${letter}"]`)?.classList.add("pressed"); const output = machine.encryptLetter(letter);
  state.input += letter; state.output += output; $("#textInput").value = state.input; lamp(output);
  state.logs.push({ index: state.logs.length + 1, input: letter, output, window: machine.getDisplayPositions(), reflector: machine.reflectorName });
  update(); syncRotors(); trace(machine.lastTrace); logs(); status("信号通过");
}
function release(letter) { state.pressed.delete(letter.toUpperCase()); $(`.key[data-letter="${letter.toUpperCase()}"]`)?.classList.remove("pressed"); if (!state.pressed.size) $$(".lamp").forEach((e) => e.classList.remove("on")); }
function processText() {
  const text = $("#textInput").value.toUpperCase(); machine.reset(); resetSession(false);
  for (const ch of text) { if (ALPHABET.includes(ch)) { const out = machine.encryptLetter(ch); state.input += ch; state.output += out; state.logs.push({ index: state.logs.length + 1, input: ch, output: out, window: machine.getDisplayPositions(), reflector: machine.reflectorName }); } else { state.input += ch; state.output += ch; } }
  update(); syncRotors(); logs(); trace(machine.lastTrace); status(state.operation === "decode" ? "解码完成" : "编码完成");
}
function operation(mode) { state.operation = mode; machine.reset(); resetSession(); $$(".operation-btn").forEach((e) => { const active = e.dataset.operation === mode; e.classList.toggle("active", active); e.setAttribute("aria-selected", active); }); update(); status(mode === "decode" ? "解码模式" : "编码模式"); }
function buildUI() {
  $("#rotorRows").innerHTML = ["左", "中", "右"].map((slot, i) => `<div class="rotor-row" data-index="${i}"><span class="rotor-slot">${slot}</span><select class="rotor-choice" aria-label="${slot}转子">${options()}</select><select class="ring-choice" aria-label="${slot}环设置">${letters()}</select><span class="window">${"AAA"[i]}</span><div class="stepper"><button type="button" data-step="-1">−</button><button type="button" data-step="1">＋</button></div></div>`).join("");
  $("#keyboard").innerHTML = ["QWERTZUIOP", "ASDFGHJKL", "YXCVBNM"].map((r) => `<div class="key-row">${[...r].map((l) => `<button class="key" type="button" data-letter="${l}">${l}</button>`).join("")}</div>`).join("");
  $("#lamps").innerHTML = [...ALPHABET].map((l) => `<div class="lamp" data-letter="${l}">${l}</div>`).join("");
  syncRotors();
}
function bind() {
  $$(".rotor-choice,.ring-choice").forEach((e) => e.addEventListener("change", () => { const c = config(); if (new Set(c.rotors).size !== 3) return status("三个转子不能重复", true); machine.applyConfiguration(c); resetSession(); syncRotors(); status("设置已更新"); }));
  $$(".stepper button").forEach((e) => e.addEventListener("click", () => { const i = +e.closest(".rotor-row").dataset.index, p = machine.rotors.map((r) => r.position); p[i] = (p[i] + +e.dataset.step + 26) % 26; machine.setPositions(p); resetSession(); syncRotors(); }));
  $$(".key").forEach((e) => { const l = e.dataset.letter; e.addEventListener("pointerdown", (x) => { x.preventDefault(); press(l); }); e.addEventListener("pointerup", () => release(l)); e.addEventListener("pointerleave", () => release(l)); });
  window.addEventListener("keydown", (e) => { if (!e.target.matches("input,select,button") && /^[a-zA-Z]$/.test(e.key)) { e.preventDefault(); press(e.key); } });
  window.addEventListener("keyup", (e) => { if (/^[a-zA-Z]$/.test(e.key)) release(e.key); }); window.addEventListener("blur", () => [...state.pressed].forEach(release));
  $("#encodeModeBtn").addEventListener("click", () => operation("encode")); $("#decodeModeBtn").addEventListener("click", () => operation("decode"));
  $("#processTextBtn").addEventListener("click", processText); $("#textInput").addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); processText(); } });
  $("#clearTextBtn").addEventListener("click", () => { machine.reset(); resetSession(); syncRotors(); status("文本已清空"); }); $("#logToggle").addEventListener("change", logs);
  $("#reflectorSelect").addEventListener("change", () => { machine.applyConfiguration({ ...config(), reflector: $("#reflectorSelect").value }); resetSession(); status("反射器已更新"); });
  $("#plugboardApply").addEventListener("click", () => { try { const pairs = parsePlugboard($("#plugboardInput").value); machine.applyConfiguration({ ...config(), plugboard: pairs }); $("#plugboardInput").value = pairs.join(" "); $("#plugboardError").textContent = ""; resetSession(); renderPlugs(); status("插线板已更新"); } catch (e) { $("#plugboardError").textContent = e.message; status("插线板设置有误", true); } });
  $("#resetBtn").addEventListener("click", () => { machine.reset(); resetSession(); syncRotors(); status("已恢复当前设置"); });
  $("#presetBtn").addEventListener("click", () => { machine.applyConfiguration({ rotors: ["II", "IV", "V"], rings: [1, 10, 2], positions: [0, 3, 19], reflector: "B", plugboard: ["AV", "BS", "CG", "DL", "FU"] }); $("#reflectorSelect").value = "B"; $("#plugboardInput").value = machine.plugboardPairs.join(" "); resetSession(); syncRotors(); renderPlugs(); status("示例日钥已载入"); });
  $("#randomBtn").addEventListener("click", () => { const c = randomConfiguration(); machine.applyConfiguration(c); $("#reflectorSelect").value = c.reflector; $("#plugboardInput").value = ""; resetSession(); syncRotors(); renderPlugs(); status("随机密钥已生成"); });
  $$(".mode-btn").forEach((e) => e.addEventListener("click", () => { const inner = e.dataset.mode === "inner"; state.mode = e.dataset.mode; $$(".mode-btn").forEach((b) => { const a = b.dataset.mode === state.mode; b.classList.toggle("active", a); b.setAttribute("aria-selected", a); }); $("#modeCaption").textContent = inner ? "内部视图 / INTERNAL" : "外观视图 / MACHINE VIEW"; state.scene?.inner && (state.scene.inner.visible = inner); status(inner ? "内部模式" : "外观模式"); }));
}
function renderPlugs() { const pairs = machine.plugboardPairs; $("#plugboardChips").innerHTML = pairs.length ? pairs.map((p) => `<span class="plug-chip">${p[0]} ↔ ${p[1]}</span>`).join("") : '<span class="empty-chip">未连接</span>'; }
function sprite(text, color = "#efd49a") { const c = document.createElement("canvas"); c.width = 128; c.height = 64; const x = c.getContext("2d"); x.fillStyle = color; x.font = "700 28px monospace"; x.textAlign = "center"; x.fillText(text, 64, 38); const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true })); s.scale.set(.55, .28, 1); return s; }
function scene() {
  const canvas = $("#scene"), renderer = new THREE.WebGLRenderer({ canvas, antialias: true }); renderer.setPixelRatio(Math.min(devicePixelRatio, 2)); renderer.setClearColor(0x10191b);
  const world = new THREE.Scene(), camera = new THREE.PerspectiveCamera(34, 1, .1, 100); camera.position.set(8, 5.6, 10.6); const controls = new OrbitControls(camera, canvas); controls.enableDamping = true; controls.target.set(0, .2, 0);
  world.add(new THREE.HemisphereLight(0xdbe2dc, 0x182326, 2.2)); const light = new THREE.DirectionalLight(0xf2d6a3, 3); light.position.set(4, 8, 7); world.add(light);
  const root = new THREE.Group(); world.add(root); const outer = new THREE.Group(); root.add(outer); const inner = new THREE.Group(); root.add(inner);
  const m = (color, roughness = .5, metalness = .2) => new THREE.MeshStandardMaterial({ color, roughness, metalness });
  const body = new THREE.Mesh(new THREE.BoxGeometry(7.9, 2.25, 4.2), m(0x5b3c27, .82, .08)); body.position.y = -.15; outer.add(body);
  const panel = new THREE.Mesh(new THREE.BoxGeometry(7.25, .08, 3.58), m(0x151e20, .38, .3)); panel.position.y = 1.12; outer.add(panel);
  const lid = new THREE.Mesh(new THREE.BoxGeometry(7.75, .14, 3.55), m(0x795037, .76, .08)); lid.position.set(0, 1.15, -1.1); outer.add(lid);
  const rots = ["I", "II", "III"].map((n, i) => { const g = new THREE.Group(); const r = new THREE.Mesh(new THREE.CylinderGeometry(.72, .72, .46, 40), m(0x9f7745, .3, .7)); r.rotation.x = Math.PI / 2; g.add(r); const ring = new THREE.Mesh(new THREE.TorusGeometry(.71, .05, 12, 40), m(0xd3b172, .28, .8)); ring.position.z = .25; g.add(ring); const t = sprite(roman[n]); t.position.z = .3; g.add(t); g.position.set((i - 1) * 1.65, .35, .15); inner.add(g); return g; });
  const etw = new THREE.Mesh(new THREE.CylinderGeometry(.58, .58, .18, 32), m(0xc1a26c, .3, .75)); etw.rotation.x = Math.PI / 2; etw.position.set(-2.9, .35, .15); inner.add(etw);
  const ukw = new THREE.Mesh(new THREE.TorusGeometry(.72, .16, 18, 40), m(0x668f86, .34, .52)); ukw.position.set(2.9, .35, .15); inner.add(ukw);
  const resize = () => { const w = canvas.clientWidth, h = canvas.clientHeight; camera.aspect = w / h; camera.updateProjectionMatrix(); renderer.setSize(w, h, false); }; window.addEventListener("resize", resize); resize();
  inner.visible = false; state.scene = { inner, rotors: rots }; renderer.setAnimationLoop(() => { rots.forEach((r, i) => r.rotation.z += (-(machine.rotors[i]?.position || 0) * Math.PI * 2 / 26 - r.rotation.z) * .15); controls.update(); renderer.render(world, camera); });
}
function runChecks() {
  const checks = [["T1", new EnigmaMachine().encryptText("AAAAA") === "BDZGO"], ["D1", (() => { const c = { rotors: ["II", "IV", "V"], rings: [1, 10, 2], positions: [0, 3, 19], reflector: "B", plugboard: ["AV", "BS", "CG", "DL", "FU"] }, p = "THEEAGLEHASLANDED"; return new EnigmaMachine(c).decryptText(new EnigmaMachine(c).encryptText(p)) === p; })()]];
  $("#testSummary").innerHTML = checks.map(([id, pass]) => `<span class="test-pill${pass ? "" : " fail"}">${id} ${pass ? "通过" : "失败"}</span>`).join("");
}
buildUI(); bind(); renderPlugs(); update(); scene(); runChecks();