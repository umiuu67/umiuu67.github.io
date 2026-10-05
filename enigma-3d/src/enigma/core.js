export const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export const ETW_WIRING = "QWERTZUIOASDFGHJKPYXCVBNML";
export const ROTOR_SPECS = Object.freeze({
  I: Object.freeze({ wiring: "EKMFLGDQVZNTOWYHXUSPAIBRCJ", notch: "Q" }),
  II: Object.freeze({ wiring: "AJDKSIRUXBLHWTMCQGZNPYFVOE", notch: "E" }),
  III: Object.freeze({ wiring: "BDFHJLCPRTXVZNYEIWGAKMUSQO", notch: "V" }),
  IV: Object.freeze({ wiring: "ESOVPZJAYQUIRHXLNFTGKDCMWB", notch: "J" }),
  V: Object.freeze({ wiring: "VZBRGITYUPSDNHLXAWMJQOFECK", notch: "Z" })
});
export const REFLECTORS = Object.freeze({
  B: "YRUHQSLDPXNGOKMIEBFZCWVJAT",
  C: "FVPJIAOYEDRZXWGCTKUQSBNMHL"
});

const mod = (value, size = 26) => ((value % size) + size) % size;
const index = (letter) => ALPHABET.indexOf(letter);

function inversePermutation(wiring) {
  const inverse = Array(26);
  [...wiring].forEach((letter, position) => { inverse[index(letter)] = position; });
  return inverse;
}

const FRAME_WIRINGS = Object.fromEntries(
  Object.entries(ROTOR_SPECS).map(([name, spec]) => [name, spec.wiring])
);
const FRAME_INVERSES = Object.fromEntries(
  Object.entries(FRAME_WIRINGS).map(([name, wiring]) => [name, inversePermutation(wiring)])
);
const FRAME_REFLECTORS = REFLECTORS;

export function normalizeLetter(value) {
  const letter = String(value ?? "").toUpperCase();
  return letter.length === 1 && ALPHABET.includes(letter) ? letter : "";
}

export function parsePlugboard(value) {
  const compact = String(value ?? "").toUpperCase().replace(/[^A-Z]/g, "");
  if (compact.length % 2 !== 0) throw new Error("插线板必须由成对字母组成，例如 AB CD EF");
  if (compact.length > 20) throw new Error("插线板最多支持 10 对字母");
  const used = new Set();
  const pairs = [];
  for (let i = 0; i < compact.length; i += 2) {
    const a = compact[i];
    const b = compact[i + 1];
    if (a === b) throw new Error(`插线板不能把 ${a} 接到自身`);
    if (used.has(a) || used.has(b)) throw new Error(`插线板端点 ${used.has(a) ? a : b} 重复`);
    used.add(a); used.add(b); pairs.push(`${a}${b}`);
  }
  return pairs;
}

function makePlugboard(pairs) {
  const mapping = new Map(ALPHABET.split("").map((letter) => [letter, letter]));
  for (const pair of pairs) {
    const [a, b] = pair;
    mapping.set(a, b); mapping.set(b, a);
  }
  return mapping;
}

function rotorState(name, ring = 0, position = 0) {
  if (!ROTOR_SPECS[name]) throw new Error(`未知转子 ${name}`);
  return { name, ring: mod(Number(ring)), position: mod(Number(position)) };
}

export class EnigmaMachine {
  constructor(config = {}) {
    this.reflectorName = config.reflector ?? "B";
    this.plugboardPairs = parsePlugboard(config.plugboard ?? []);
    this.rotors = (config.rotors ?? ["I", "II", "III"]).map((name, i) =>
      rotorState(name, config.rings?.[i] ?? 0, config.positions?.[i] ?? 0)
    );
    this._validateRotors();
    this.plugboard = makePlugboard(this.plugboardPairs);
    this.initial = this.snapshot();
    this.lastTrace = null;
  }

  _validateRotors() {
    if (this.rotors.length !== 3) throw new Error("Enigma I 必须使用 3 个转子");
    if (new Set(this.rotors.map((rotor) => rotor.name)).size !== 3) throw new Error("三个转子不能重复");
    if (!REFLECTORS[this.reflectorName]) throw new Error(`未知反射器 ${this.reflectorName}`);
  }

  snapshot() {
    return {
      rotors: this.rotors.map(({ name, ring, position }) => ({ name, ring, position })),
      reflector: this.reflectorName,
      plugboard: [...this.plugboardPairs]
    };
  }

  reset() {
    this.rotors = this.initial.rotors.map((rotor) => ({ ...rotor }));
    this.reflectorName = this.initial.reflector;
    this.plugboardPairs = [...this.initial.plugboard];
    this.plugboard = makePlugboard(this.plugboardPairs);
    this.lastTrace = null;
  }

  applyConfiguration(config = {}) {
    const next = {
      rotors: config.rotors ?? this.rotors.map((rotor) => rotor.name),
      rings: config.rings ?? this.rotors.map((rotor) => rotor.ring),
      positions: config.positions ?? this.rotors.map((rotor) => rotor.position),
      reflector: config.reflector ?? this.reflectorName,
      plugboard: config.plugboard ?? this.plugboardPairs
    };
    this.reflectorName = next.reflector;
    this.rotors = next.rotors.map((name, i) => rotorState(name, next.rings[i], next.positions[i]));
    this.plugboardPairs = parsePlugboard(next.plugboard);
    this.plugboard = makePlugboard(this.plugboardPairs);
    this._validateRotors();
    this.initial = this.snapshot();
    this.lastTrace = null;
  }

  setPositions(positions) {
    const source = Array.isArray(positions) ? positions : [...String(positions).toUpperCase()];
    if (source.length !== 3) throw new Error("窗口位置需要 3 个字母");
    this.rotors.forEach((rotor, i) => { rotor.position = index(source[i]); });
    this.initial = this.snapshot();
  }

  setRings(rings) {
    if (!Array.isArray(rings) || rings.length !== 3) throw new Error("环设置需要 3 个值");
    this.rotors.forEach((rotor, i) => { rotor.ring = mod(Number(rings[i])); });
    this.initial = this.snapshot();
  }

  atNotch(rotor) {
    const notch = mod(index(ROTOR_SPECS[rotor.name].notch) - rotor.ring);
    return rotor.position === notch;
  }

  step() {
    const [left, middle, right] = this.rotors;
    const middleAtNotch = this.atNotch(middle);
    const rightAtNotch = this.atNotch(right);
    if (middleAtNotch) left.position = mod(left.position + 1);
    if (middleAtNotch || rightAtNotch) middle.position = mod(middle.position + 1);
    right.position = mod(right.position + 1);
  }

  _mapThroughRotor(letter, rotor, reverse = false) {
    const wiring = FRAME_WIRINGS[rotor.name];
    const inverse = FRAME_INVERSES[rotor.name];
    const shifted = mod(index(letter) + rotor.position - rotor.ring);
    const mapped = reverse ? inverse[shifted] : index(wiring[shifted]);
    return ALPHABET[mod(mapped - rotor.position + rotor.ring)];
  }

  _mapETW(letter, reverse = false) {
    return reverse
      ? ALPHABET[ETW_WIRING.indexOf(letter)]
      : ETW_WIRING[index(letter)];
  }

  _mapPhysicalRotor(letter, rotor, reverse = false) {
    const alphabetSignal = this._mapETW(letter, true);
    const mapped = this._mapThroughRotor(alphabetSignal, rotor, reverse);
    return this._mapETW(mapped, false);
  }

  encryptLetter(value) {
    const input = normalizeLetter(value);
    if (!input) return "";
    this.step();
    const [left, middle, right] = this.rotors;
    const plugIn = this.plugboard.get(input);
    const etwIn = this._mapETW(plugIn);
    let signal = etwIn;
    const forward = [];
    for (const rotor of [right, middle, left]) {
      signal = this._mapPhysicalRotor(signal, rotor);
      forward.push(signal);
    }
    const reflector = FRAME_REFLECTORS[this.reflectorName];
    signal = this._mapETW(reflector[index(this._mapETW(signal, true))], false);
    const reflected = signal;
    const reverse = [];
    for (const rotor of [left, middle, right]) {
      signal = this._mapPhysicalRotor(signal, rotor, true);
      reverse.push(signal);
    }
    const etwOut = this._mapETW(signal, true);
    const output = this.plugboard.get(etwOut);
    this.lastTrace = {
      input, plugboardIn: plugIn, etwIn, forward, reflected, reverse, etwOut, output,
      positions: this.rotors.map((rotor) => rotor.position)
    };
    return output;
  }

  encryptText(text) {
    return [...String(text ?? "").toUpperCase()]
      .map((character) => this.encryptLetter(character) || character)
      .join("");
  }

  decryptText(text) {
    this.reset();
    return this.encryptText(text);
  }

  getDisplayPositions() {
    return this.rotors.map((rotor) => ALPHABET[rotor.position]).join("");
  }
}

export function randomConfiguration(random = Math.random) {
  const names = Object.keys(ROTOR_SPECS);
  const shuffled = [...names].sort(() => random() - 0.5).slice(0, 3);
  return {
    rotors: shuffled,
    rings: shuffled.map(() => Math.floor(random() * 26)),
    positions: shuffled.map(() => Math.floor(random() * 26)),
    reflector: random() > .5 ? "B" : "C",
    plugboard: []
  };
}
