import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const canvasHost = document.querySelector(".stage-panel");
const sourceCanvas = document.querySelector("#scene");
if (!canvasHost || !sourceCanvas) throw new Error("Enigma scene host not found");
sourceCanvas.style.display = "none";

const canvas = document.createElement("canvas");
canvas.id = "modelFixCanvas";
canvas.style.cssText = "display:block;position:absolute;inset:0;width:100%;height:100%;min-height:700px";
canvasHost.insertBefore(canvas, sourceCanvas);

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x10191b, 12, 25);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x10191b, 1);
renderer.shadowMap.enabled = true;
const camera = new THREE.PerspectiveCamera(34, 1, .1, 100);
camera.position.set(8.4, 5.8, 10.6);
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = .08;
controls.minDistance = 6;
controls.maxDistance = 16;
controls.target.set(0, .25, 0);
scene.add(new THREE.HemisphereLight(0xdbe2dc, 0x182326, 2.2));
const keyLight = new THREE.DirectionalLight(0xf2d6a3, 3.2);
keyLight.position.set(4, 8, 7);
keyLight.castShadow = true;
scene.add(keyLight);
const rimLight = new THREE.DirectionalLight(0x70d1c4, 1.5);
rimLight.position.set(-6, 3, -5);
scene.add(rimLight);

const mat = (color, roughness = .5, metalness = .2) => new THREE.MeshStandardMaterial({ color, roughness, metalness });
const wood = mat(0x6d452d, .8, .08);
const woodTop = mat(0xa26d42, .72, .1);
const bakelite = mat(0x142023, .38, .28);
const dark = mat(0x0e1719, .42, .34);
const brass = mat(0xd0ad69, .3, .82);
const brassDark = mat(0x95703f, .4, .68);
const teal = mat(0x67b8ae, .38, .42);

function labelSprite(text, color = "#f0d79c", scale = [.36, .18]) {
  const c = document.createElement("canvas"); c.width = 128; c.height = 64;
  const x = c.getContext("2d"); x.clearRect(0, 0, 128, 64); x.fillStyle = color;
  x.font = "700 30px monospace"; x.textAlign = "center"; x.textBaseline = "middle"; x.fillText(text, 64, 34);
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthTest: false }));
  s.scale.set(scale[0], scale[1], 1); s.userData.canvas = c; s.userData.ctx = x; return s;
}

function updateSprite(sprite, text) {
  if (!sprite?.userData?.ctx) return;
  const c = sprite.userData.canvas, x = sprite.userData.ctx;
  x.clearRect(0, 0, c.width, c.height); x.fillStyle = "#f0d79c"; x.font = "700 30px monospace"; x.textAlign = "center"; x.textBaseline = "middle"; x.fillText(text, 64, 34);
  sprite.material.map.needsUpdate = true;
}

const root = new THREE.Group(); root.rotation.y = -.12; scene.add(root);
const outer = new THREE.Group(); root.add(outer);
const inner = new THREE.Group(); root.add(inner); inner.visible = false;

// Wooden body and the black bakelite deck.
const body = new THREE.Mesh(new THREE.BoxGeometry(8, 2.25, 4.25), wood); body.position.y = -.25; body.castShadow = true; outer.add(body);
const deck = new THREE.Mesh(new THREE.BoxGeometry(7.55, .14, 3.62), bakelite); deck.position.set(0, .96, .05); outer.add(deck);
const deckEdge = new THREE.Mesh(new THREE.BoxGeometry(7.68, .11, .16), brass); deckEdge.position.set(0, 1.06, 1.82); outer.add(deckEdge);
const lowerTrim = new THREE.Mesh(new THREE.BoxGeometry(7.72, .12, .18), brassDark); lowerTrim.position.set(0, -.95, 1.98); outer.add(lowerTrim);

// Hinged lid: it is attached at the rear instead of floating above the body.
const lid = new THREE.Group(); lid.position.set(0, 1.02, -1.78); lid.rotation.x = -.78; outer.add(lid);
const lidWood = new THREE.Mesh(new THREE.BoxGeometry(7.75, .14, 3.58), woodTop); lidWood.position.z = 1.78; lid.add(lidWood);
const lidInset = new THREE.Mesh(new THREE.BoxGeometry(7.32, .06, 3.14), dark); lidInset.position.set(0, -.1, 1.78); lid.add(lidInset);
const lidMark = labelSprite("ENIGMA I", "#d8b978", [1.2, .28]); lidMark.position.set(0, -.03, 1.78); lid.add(lidMark);

// Three rotor viewing windows at the rear of the deck.
const windowLabels = [];
["Ⅰ", "Ⅱ", "Ⅲ"].forEach((text, i) => {
  const x = -1.65 + i * 1.65;
  const rim = new THREE.Mesh(new THREE.TorusGeometry(.47, .07, 14, 40), brass); rim.rotation.x = Math.PI / 2; rim.position.set(x, 1.15, -1.12); outer.add(rim);
  const face = new THREE.Mesh(new THREE.CylinderGeometry(.39, .39, .04, 40), dark); face.position.set(x, 1.15, -1.12); outer.add(face);
  const letter = labelSprite("A", "#f0d79c", [.3, .17]); letter.position.set(x, 1.2, -1.12); outer.add(letter); windowLabels.push(letter);
  const indexLabel = labelSprite(text, "#b9985e", [.2, .1]); indexLabel.position.set(x, 1.08, -1.12); outer.add(indexLabel);
});

// Lampboard, QWERTZ keyboard, and front plugboard sockets.
const lampLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for (let i = 0; i < 26; i += 1) {
  const x = -3.02 + (i % 13) * .5, z = -.38 + Math.floor(i / 13) * .33;
  const lamp = new THREE.Mesh(new THREE.CylinderGeometry(.095, .095, .06, 20), brass); lamp.position.set(x, 1.12, z); outer.add(lamp);
  const label = labelSprite(lampLetters[i], "#ad986e", [.12, .07]); label.position.set(x, 1.17, z); outer.add(label);
}
const keyRows = ["QWERTZUIOP", "ASDFGHJKL", "YXCVBNM"];
keyRows.forEach((row, rowIndex) => [...row].forEach((letter, column) => {
  const x = -2.42 + column * .54 + (10 - row.length) * .27, z = .48 + rowIndex * .42;
  const key = new THREE.Mesh(new THREE.CylinderGeometry(.145, .17, .13, 24), dark); key.position.set(x, 1.11, z); outer.add(key);
  const label = labelSprite(letter, "#ded7bd", [.16, .08]); label.position.set(x, 1.2, z); outer.add(label);
}));
const plugPanel = new THREE.Mesh(new THREE.BoxGeometry(6.9, 1.02, .16), bakelite); plugPanel.position.set(0, -.48, 2.08); outer.add(plugPanel);
const plugMap = new Map();
keyRows.forEach((row, rowIndex) => [...row].forEach((letter, column) => {
  const p = new THREE.Vector3(-2.9 + column * .64 + (10 - row.length) * .32, -.24 - rowIndex * .28, 2.2); plugMap.set(letter, p);
  const socket = new THREE.Mesh(new THREE.CylinderGeometry(.1, .1, .07, 20), brassDark); socket.rotation.x = Math.PI / 2; socket.position.copy(p); outer.add(socket);
}));
const plugMaterial = new THREE.LineBasicMaterial({ color: 0xd19c5a, transparent: true, opacity: .85 });
const plugLines = [];
function renderPlugLines(pairs = []) {
  plugLines.forEach((line) => outer.remove(line)); plugLines.length = 0;
  pairs.forEach((pair) => { const a = plugMap.get(pair[0]), b = plugMap.get(pair[1]); if (!a || !b) return;
    const points = [a.clone().setZ(2.3), new THREE.Vector3((a.x + b.x) / 2, .12, 2.58), b.clone().setZ(2.3)];
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), plugMaterial); outer.add(line); plugLines.push(line);
  });
}

// Internal exploded view.
const innerBase = new THREE.Mesh(new THREE.BoxGeometry(7.45, .22, 3.45), mat(0x2b3a3c, .62, .3)); innerBase.position.y = -.8; inner.add(innerBase);
const innerRotors = ["I", "II", "III"].map((name, i) => {
  const g = new THREE.Group(); g.position.set((i - 1) * 1.65, .35, .08);
  const drum = new THREE.Mesh(new THREE.CylinderGeometry(.73, .73, .46, 40), mat(0x9f7745, .3, .7)); drum.rotation.x = Math.PI / 2; g.add(drum);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(.71, .05, 12, 40), brass); ring.position.z = .25; g.add(ring);
  const label = labelSprite(name === "I" ? "Ⅰ" : name === "II" ? "Ⅱ" : "Ⅲ", "#f0d79c", [.38, .2]); label.position.z = .3; g.add(label);
  const notch = new THREE.Mesh(new THREE.BoxGeometry(.14, .1, .05), teal); notch.position.set(0, .67, .3); g.add(notch); inner.add(g); return g;
});
const etw = new THREE.Mesh(new THREE.CylinderGeometry(.58, .58, .18, 32), brass); etw.rotation.x = Math.PI / 2; etw.position.set(-3, .35, .08); inner.add(etw);
const reflector = new THREE.Mesh(new THREE.TorusGeometry(.74, .16, 18, 48), teal); reflector.position.set(3, .35, .08); inner.add(reflector);
const battery = new THREE.Mesh(new THREE.BoxGeometry(.9, .62, 1.1), dark); battery.position.set(-3.15, -.2, -.75); inner.add(battery);
const batteryLabel = labelSprite("电池", "#7cd2c8", [.5, .2]); batteryLabel.position.set(-3.15, .18, -.75); inner.add(batteryLabel);

const resize = () => { const w = canvas.clientWidth, h = canvas.clientHeight; camera.aspect = w / h; camera.updateProjectionMatrix(); renderer.setSize(w, h, false); };
window.addEventListener("resize", resize); resize();
function syncMode() { const innerMode = document.querySelector(".mode-btn.active")?.dataset.mode === "inner"; outer.visible = !innerMode; inner.visible = innerMode; }
function syncRotorState() {
  const windows = [...document.querySelectorAll(".window")].map((e) => e.textContent);
  innerRotors.forEach((rotor, i) => { const position = Math.max(0, "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(windows[i] || "A")); rotor.rotation.z += (-position * Math.PI * 2 / 26 - rotor.rotation.z) * .18; });
  const pairs = (document.querySelector("#plugboardInput")?.value || "").toUpperCase().replace(/[^A-Z]/g, "").match(/../g) || []; renderPlugLines(pairs);
  ["A", "A", "A"].forEach((letter, i) => updateSprite(windowLabels[i], windows[i] || letter));
}
window.setInterval(syncMode, 120); window.setInterval(syncRotorState, 120);
renderer.setAnimationLoop(() => { syncMode(); controls.update(); renderer.render(scene, camera); });
