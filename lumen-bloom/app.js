/* Lumen Bloom - interactive aurora particle canvas */
(function () {
  "use strict";

  var TAU = Math.PI * 2;
  var canvas = document.getElementById("stage");
  var ctx = canvas.getContext("2d", { alpha: false });
  var hint = document.getElementById("hint");
  var auroraCanvas = document.createElement("canvas");
  var auroraCtx = auroraCanvas.getContext("2d");
  var vignetteCanvas = document.createElement("canvas");
  var vignetteCtx = vignetteCanvas.getContext("2d");

  /* deterministic RNG for reproducible QA runs */
  var rand = Math.random;
  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  var W = 0, H = 0, dpr = 1;
  var particles = [];
  var dust = [];
  var waves = [];
  var sparks = [];

  var mouse = { x: -9999, y: -9999, down: false, active: false };
  var mR = 240, mR2 = mR * mR;
  var dampNow = 0.955;
  var time = 0;          // seconds, drives hue cycle
  var flowT = 0;         // noise field time
  var lastT = 0;
  var raf = 0;
  var warmed = false;
  var auroraTick = false;
  var diagMode = false, diagFrames = 0, diagEl = null;

  /* ---- palette anchors, smoothly cycled ---- */
  var HUES = [188, 42, 330, 150, 26];
  var HUE_CYCLE = 10000; // ms per full segment
  var COMPLEMENT = [330, 188, 42, 26, 188];

  function shortestHue(a, b, t) {
    var d = ((b - a + 540) % 360) - 180;
    return (a + d * t + 360) % 360;
  }
  function smooth(t) { return t * t * (3 - 2 * t); }
  function themeHue() {
    var ph = (time * 1000 / HUE_CYCLE) % HUES.length;
    var i = Math.floor(ph);
    var f = smooth(ph - i);
    return shortestHue(HUES[i], HUES[(i + 1) % HUES.length], f);
  }
  function themeComplement() {
    var ph = (time * 1000 / HUE_CYCLE) % HUES.length;
    var i = Math.floor(ph);
    var f = smooth(ph - i);
    return shortestHue(COMPLEMENT[i], COMPLEMENT[(i + 1) % COMPLEMENT.length], f);
  }

  /* ---- Perlin noise (3D, compact) ---- */
  var PERM = new Uint8Array(512);
  (function () {
    var p = new Uint8Array(256), i, j, t, s = 1337;
    for (i = 0; i < 256; i++) p[i] = i;
    for (i = 255; i > 0; i--) {
      s = (s * 1664525 + 1013904223) >>> 0;
      j = s % (i + 1);
      t = p[i]; p[i] = p[j]; p[j] = t;
    }
    for (i = 0; i < 512; i++) PERM[i] = p[i & 255];
  })();
  function fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function grad(h, x, y, z) {
    switch (h & 15) {
      case 0: return x + y;      case 1: return -x + y;
      case 2: return x - y;      case 3: return -x - y;
      case 4: return x + z;      case 5: return -x + z;
      case 6: return x - z;      case 7: return -x - z;
      case 8: return y + z;      case 9: return -y + z;
      case 10: return y - z;     case 11: return -y - z;
      case 12: return y + x;     case 13: return -y + z;
      case 14: return y - x;     case 15: return -y - z;
    }
    return 0;
  }
  function noise3(x, y, z) {
    var X = Math.floor(x) & 255, Y = Math.floor(y) & 255, Z = Math.floor(z) & 255;
    x -= Math.floor(x); y -= Math.floor(y); z -= Math.floor(z);
    var u = fade(x), v = fade(y), w = fade(z);
    var A = PERM[X] + Y, AA = PERM[A] + Z, AB = PERM[A + 1] + Z;
    var B = PERM[X + 1] + Y, BA = PERM[B] + Z, BB = PERM[B + 1] + Z;
    return lerp(
      lerp(lerp(grad(PERM[AA], x, y, z), grad(PERM[BA], x - 1, y, z), u),
           lerp(grad(PERM[AB], x, y - 1, z), grad(PERM[BB], x - 1, y - 1, z), u), v),
      lerp(lerp(grad(PERM[AA + 1], x, y, z - 1), grad(PERM[BA + 1], x - 1, y, z - 1), u),
           lerp(grad(PERM[AB + 1], x, y - 1, z - 1), grad(PERM[BB + 1], x - 1, y - 1, z - 1), u), v),
      w);
  }

  /* ---- particles ---- */
  function seedParticle(p) {
    var va = rand() * TAU;
    var vs = 0.3 + rand() * 1.0;
    p.x = rand() * W;
    p.y = rand() * H;
    p.px = p.x;
    p.py = p.y;
    p.vx = Math.cos(va) * vs;
    p.vy = Math.sin(va) * vs;
    p.hueOff = (rand() - 0.5) * 36;
    p.size = 0.8 + rand() * 1.4;
    p.life = 120 + rand() * 480;
    p.age = rand() * 100;
    return p;
  }

  function makeParticle() {
    return seedParticle({});
  }
  function buildParticles() {
  var n = Math.round(Math.min(2800, Math.max(1200, W * H / 800)));
    particles.length = 0;
    for (var i = 0; i < n; i++) particles.push(makeParticle());
  }
  function buildDust() {
    dust.length = 0;
    var n = Math.round(W * H / 22000);
    for (var i = 0; i < n; i++) {
      dust.push({
        x: rand() * W,
        y: rand() * H,
        r: 0.4 + rand() * 1.1,
        sp: 0.3 + rand() * 0.9,
        ph: rand() * TAU
      });
    }
  }

  function buildLayers() {
    auroraCanvas.width = Math.max(72, Math.ceil(W / 8));
    auroraCanvas.height = Math.max(46, Math.ceil(H / 8));
    vignetteCanvas.width = Math.max(72, Math.ceil(W / 6));
    vignetteCanvas.height = Math.max(46, Math.ceil(H / 6));

    var vw = vignetteCanvas.width, vh = vignetteCanvas.height;
    vignetteCtx.setTransform(1, 0, 0, 1, 0, 0);
    vignetteCtx.clearRect(0, 0, vw, vh);
    var vg = vignetteCtx.createRadialGradient(
      vw * 0.5, vh * 0.5, Math.min(vw, vh) * 0.36,
      vw * 0.5, vh * 0.5, Math.max(vw, vh) * 0.74
    );
    vg.addColorStop(0, "rgba(6, 7, 9, 0)");
    vg.addColorStop(1, "rgba(6, 7, 9, 0.035)");
    vignetteCtx.fillStyle = vg;
    vignetteCtx.fillRect(0, 0, vw, vh);
  }

  function makeSpark(x, y, hue, fast) {
    var a = rand() * TAU;
    var s = (fast ? 3.2 : 1.1) + rand() * (fast ? 9.5 : 4.2);
    return {
      x: x, y: y,
      vx: Math.cos(a) * s,
      vy: Math.sin(a) * s,
      size: 0.7 + rand() * 2.1,
      hue: hue + (rand() - 0.5) * 72,
      life: 32 + rand() * 52,
      age: 0
    };
  }

  function stepSpark(s, hue, ds) {
    s.age += ds;
    var damp = 1 - 0.06 * ds;
    s.vx *= damp;
    s.vy *= damp;
    s.vy += 0.025 * ds;
    var ox = s.x, oy = s.y;
    s.x += s.vx * ds;
    s.y += s.vy * ds;
    var k = Math.max(0, 1 - s.age / s.life);
    var a = k * k * 0.75;
    if (a < 0.01) return;
    var ph = (s.hue + hue * 0.28 + 360) % 360;
    ctx.strokeStyle = "hsla(" + ph.toFixed(1) + ", 100%, " + (58 + 28 * k).toFixed(1) + "%, " + a.toFixed(3) + ")";
    ctx.lineWidth = s.size * k + 0.25;
    ctx.beginPath();
    ctx.moveTo(ox, oy);
    ctx.lineTo(s.x, s.y);
    ctx.stroke();
  }

  function resize() {
    dpr = Math.min(1.5, window.devicePixelRatio || 1);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.lineCap = "round";
    ctx.fillStyle = "#060709";
    ctx.fillRect(0, 0, W, H);
    buildParticles();
    buildLayers();
    if (!warmed) {
      warmed = true;
      warmup();
    }
    buildDust();
    sparks.length = 0;
  }

  /* render one particle: physics + stroke; returns nothing */
  function stepParticle(p, hue, ds) {
    p.px = p.x; p.py = p.y;

    var a = noise3(p.x * FLOW_SCALE, p.y * FLOW_SCALE, flowT) * TAU * 1.7;
    var lume = noise3(p.x * FLOW_SCALE * 0.6 + 100, p.y * FLOW_SCALE * 0.6, flowT * 0.8) * 0.7 + 0.5;
    p.vx += Math.cos(a) * FLOW_FORCE * ds;
    p.vy += Math.sin(a) * FLOW_FORCE * ds;

    /* mouse vortex: swirl + push (or suck while pressed) */
    var dx = p.x - mouse.x, dy = p.y - mouse.y;
    var d2 = dx * dx + dy * dy;
    if (d2 < mR2 && d2 > 0.01) {
      var dist = Math.sqrt(d2);
      var fall = 1 - dist / mR;
      var nx = dx / dist, ny = dy / dist;
      var tang = mouse.down ? 3.2 : 1.35;
      var rad = mouse.down ? -0.55 : 0.6;
      p.vx += (-ny * tang + nx * rad) * fall * ds * 1.5;
      p.vy += (nx * tang + ny * rad) * fall * ds * 1.5;
    }

    /* shockwave impulses */
    for (var wv = 0; wv < waves.length; wv++) {
      var w = waves[wv];
      var wdx = p.x - w.x, wdy = p.y - w.y;
      var wd = Math.sqrt(wdx * wdx + wdy * wdy);
      var band = Math.abs(wd - w.r);
      if (band < 70 && wd > 0.01) {
        var imp = (1 - band / 70) * w.life * 2.4;
        p.vx += (wdx / wd) * imp * ds;
        p.vy += (wdy / wd) * imp * ds;
      }
    }

    /* damping + integrate */
    p.vx *= dampNow; p.vy *= dampNow;
    p.x += p.vx * ds;
    p.y += p.vy * ds;
    p.age += ds;

    /* respawn */
    if (p.age > p.life || p.x < -30 || p.x > W + 30 || p.y < -30 || p.y > H + 30) {
      seedParticle(p);
      p.age = 0;
      return;
    }

    /* draw as velocity streak */
    var speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
    var fadeIn = Math.min(1, p.age / 40);
    var fadeOut = Math.min(1, (p.life - p.age) / 60);
    var band = lume * lume;
    var alpha = Math.min(fadeIn, fadeOut) * (0.78 + Math.min(1.12, speed * 0.14)) * (0.25 + 0.75 * band);
    if (alpha < 0.01) return;
    var ph = (hue + p.hueOff + 360) % 360;
    ctx.strokeStyle = "hsla(" + ph.toFixed(1) + ", 100%, 64%, " + alpha.toFixed(3) + ")";
    ctx.lineWidth = p.size;
    ctx.beginPath();
    ctx.moveTo(p.px, p.py);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    if (speed > 2.35 && alpha > 0.06) {
      ctx.strokeStyle = "hsla(" + ((ph + 24) % 360).toFixed(1) + ", 100%, 86%, " + (alpha * 0.42).toFixed(3) + ")";
      ctx.lineWidth = p.size * 0.52;
      ctx.beginPath();
      ctx.moveTo(p.px, p.py);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    }
  }

  /* pre-run the field so the first frame is alive without delaying startup */
  function warmup() {
    var hue = themeHue();
    ctx.globalCompositeOperation = "lighter";
    for (var s = 0; s < 8; s++) {
      for (var i = 0; i < particles.length; i++) {
        stepParticle(particles[i], hue, 1);
      }
      flowT += 0.00075;
    }
  }

  /* ---- interaction ---- */
  function burst(x, y) {
    waves.push({ x: x, y: y, r: 6, life: 1 });
    var base = themeHue();
    for (var i = 0; i < 90; i++) sparks.push(makeSpark(x, y, base, i % 4 === 0));
    if (sparks.length > 460) sparks.splice(0, sparks.length - 460);
    if (waves.length > 6) waves.shift();
    dismissHint();
  }
  function dismissHint() { hint.classList.add("gone"); }

  window.addEventListener("pointermove", function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  }, { passive: true });
  window.addEventListener("pointerdown", function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.down = true;
    mouse.active = true;
    burst(e.clientX, e.clientY);
  });
  window.addEventListener("pointerup", function () { mouse.down = false; });
  window.addEventListener("pointerleave", function () {
    mouse.active = false;
    mouse.x = -9999; mouse.y = -9999;
  });
  window.addEventListener("blur", function () { mouse.down = false; });

  window.addEventListener("resize", resize);
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      cancelAnimationFrame(raf);
    } else {
      lastT = performance.now();
      raf = requestAnimationFrame(frame);
    }
  });

  /* ---- main loop ---- */
  var FLOW_SCALE = 0.0011;
  var FLOW_SPEED = 0.05;
  var FLOW_FORCE = 0.16;

  function renderFrame(dt) {
    var ds = dt / 16.667; // normalized to 60fps steps
    time += dt / 1000;
    flowT += dt * 0.000045 * FLOW_SPEED * 20;
    dampNow = Math.pow(0.955, ds);

    var hue = themeHue();
    var comp = themeComplement();

    /* drifting aurora fields behind the light trails */
    var aw = auroraCanvas.width, ah = auroraCanvas.height;
    var ax1 = W * (0.5 + Math.sin(time * 0.14) * 0.31);
    var ay1 = H * (0.42 + Math.cos(time * 0.11) * 0.26);
    var ax2 = W * (0.45 + Math.cos(time * 0.09 + 1.6) * 0.34);
    var ay2 = H * (0.58 + Math.sin(time * 0.13 + 2.1) * 0.28);
    var ar = Math.max(W, H) * (0.53 + Math.sin(time * 0.07) * 0.08);
    ax1 *= aw / W; ay1 *= ah / H; ax2 *= aw / W; ay2 *= ah / H; ar *= aw / W;
    auroraTick = !auroraTick;
    if (auroraTick) {
      auroraCtx.setTransform(1, 0, 0, 1, 0, 0);
      auroraCtx.clearRect(0, 0, aw, ah);
      var ag1 = auroraCtx.createRadialGradient(ax1, ay1, 0, ax1, ay1, ar);
      ag1.addColorStop(0, "hsla(" + hue.toFixed(1) + ", 90%, 52%, 0.002)");
      ag1.addColorStop(1, "hsla(" + hue.toFixed(1) + ", 90%, 52%, 0)");
      auroraCtx.fillStyle = ag1;
      auroraCtx.fillRect(0, 0, aw, ah);
      var ag2 = auroraCtx.createRadialGradient(ax2, ay2, 0, ax2, ay2, ar * 0.78);
      ag2.addColorStop(0, "hsla(" + comp.toFixed(1) + ", 92%, 54%, 0.0016)");
      ag2.addColorStop(1, "hsla(" + comp.toFixed(1) + ", 92%, 54%, 0)");
      auroraCtx.fillStyle = ag2;
      auroraCtx.fillRect(0, 0, aw, ah);
    }

    /* fade previous frame -> silky trails */
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(6, 7, 9, 0.012)";
    ctx.fillRect(0, 0, W, H);

    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(auroraCanvas, 0, 0, W, H);

    /* star dust */
    for (var d = 0; d < dust.length; d++) {
      var st = dust[d];
      var tw = 0.05 + 0.055 * (0.5 + 0.5 * Math.sin(time * st.sp * 2 + st.ph));
      ctx.fillStyle = "rgba(255, 244, 224, " + tw.toFixed(3) + ")";
      ctx.beginPath();
      ctx.arc(st.x, st.y, st.r, 0, TAU);
      ctx.fill();
    }

    /* flow field particles */
    mR = mouse.down ? 300 : 240;
    mR2 = mR * mR;
    for (var i = 0; i < particles.length; i++) {
    stepParticle(particles[i], hue, ds);
    }

    /* click sparks */
    for (var sp = sparks.length - 1; sp >= 0; sp--) {
      var spark = sparks[sp];
      stepSpark(spark, hue, ds);
      if (spark.age >= spark.life) {
        sparks[sp] = sparks[sparks.length - 1];
        sparks.pop();
      }
    }

    /* update + draw shockwave rings */
    for (var q = waves.length - 1; q >= 0; q--) {
    var wv2 = waves[q];
      wv2.r += (14 - wv2.r * 0.05) * ds * 2.2;
      wv2.life -= 0.014 * ds;
      if (wv2.life <= 0) { waves.splice(q, 1); continue; }
      var wa = Math.max(0, wv2.life);
      ctx.strokeStyle = "hsla(" + comp.toFixed(1) + ", 100%, 70%, " + (wa * 0.11).toFixed(3) + ")";
      ctx.lineWidth = 30 * wa + 1;
      ctx.beginPath();
      ctx.arc(wv2.x, wv2.y, wv2.r * 0.92, 0, TAU);
      ctx.stroke();
      ctx.strokeStyle = "hsla(" + hue.toFixed(1) + ", 95%, 68%, " + (wa * 0.45).toFixed(3) + ")";
      ctx.lineWidth = 2.8 * wa + 0.5;
      ctx.beginPath();
      ctx.arc(wv2.x, wv2.y, wv2.r, 0, TAU);
      ctx.stroke();
      ctx.strokeStyle = "hsla(" + hue.toFixed(1) + ", 100%, 90%, " + (wa * 0.2).toFixed(3) + ")";
      ctx.lineWidth = 1.2 * wa + 0.25;
      ctx.beginPath();
      ctx.arc(wv2.x, wv2.y, wv2.r, 0, TAU);
      ctx.stroke();
    }

    /* mouse glow */
    if (mouse.active) {
      var gr = mouse.down ? 170 : 120;
      var g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, gr);
      var ga = mouse.down ? 0.24 : 0.12;
      g.addColorStop(0, "hsla(" + hue.toFixed(1) + ", 100%, 76%, " + ga + ")");
      g.addColorStop(1, "hsla(" + hue.toFixed(1) + ", 100%, 72%, 0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, gr, 0, TAU);
      ctx.fill();
      var halo = ctx.createRadialGradient(mouse.x, mouse.y, gr * 0.18, mouse.x, mouse.y, gr);
      halo.addColorStop(0, "hsla(" + comp.toFixed(1) + ", 100%, 68%, " + (ga * 0.35).toFixed(3) + ")");
      halo.addColorStop(1, "hsla(" + comp.toFixed(1) + ", 100%, 68%, 0)");
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, gr, 0, TAU);
      ctx.fill();
    }

    /* cinematic edge falloff so the light streaks keep more contrast */
    ctx.globalCompositeOperation = "source-over";
    ctx.drawImage(vignetteCanvas, 0, 0, W, H);

    if (diagMode) {
      diagFrames++;
      if (diagFrames <= 25) {
        var dd = ctx.getImageData(0, 0, 96, 96).data;
        var dsum = 0;
        for (var dk = 0; dk < dd.length; dk += 4) dsum += (dd[dk] + dd[dk + 1] + dd[dk + 2]) / 3;
        if (!diagEl) {
          diagEl = document.createElement("div");
          diagEl.id = "diag-log";
          diagEl.style.cssText = "position:fixed;top:0;left:0;color:#fff;background:#000;font-size:11px;z-index:99;white-space:pre-wrap";
          document.body.appendChild(diagEl);
        }
        diagEl.textContent += "[f" + diagFrames + "=" + (dsum / (96 * 96)).toFixed(1) + "]";
      }
    }

  }

  function frame(now) {
    var dt = Math.min(50, now - lastT);
    lastT = now;
    renderFrame(dt);
    raf = requestAnimationFrame(frame);
  }

  /* boot */
  var qaMode = window.location.search.indexOf("qa=1") !== -1 ||
    window.location.search.indexOf("qa2=1") !== -1;
  if (window.location.search.indexOf("qa3=1") !== -1) qaMode = true;
  diagMode = window.location.search.indexOf("diag=1") !== -1;
  if (diagMode) {
    window.onerror = function (msg, src, line, col) {
      var el = document.createElement("div");
      el.id = "diag-err";
      el.textContent = "ERR " + msg + " @" + line + ":" + col;
      el.style.cssText = "position:fixed;top:120px;left:0;color:#f66;background:#000;font-size:12px;z-index:99";
      document.body.appendChild(el);
    };
  }
  if (qaMode) rand = mulberry32(20260828);
  flowT = rand() * 100;
  resize();
  setTimeout(dismissHint, 9000);

  /* deterministic self-check: render fixed frames, measure canvas, print stats */
  if (qaMode) {
    if (window.location.search.indexOf("qa2=1") === -1) {
      for (var q = 0; q < 120; q++) renderFrame(16.667);
    }
    var data = ctx.getImageData(0, 0, W, H).data;
    var total = W * H, lit = 0, vivid = 0, sum = 0;
    for (var di = 0; di < data.length; di += 4) {
      var r = data[di], g2 = data[di + 1], b = data[di + 2];
      var lum = (r + g2 + b) / 3;
      sum += lum;
      if (lum > 24) lit++;
      var mx = Math.max(r, g2, b), mn = Math.min(r, g2, b);
      if (mx > 40 && mx - mn > 18) vivid++;
    }
    var out = "QA avg=" + (sum / total).toFixed(2) +
      " lit=" + (100 * lit / total).toFixed(2) + "%" +
      " vivid=" + (100 * vivid / total).toFixed(2) + "%";
    document.title = out;
    var qaEl = document.createElement("div");
    qaEl.id = "qa-result";
    qaEl.textContent = out;
    qaEl.style.cssText = "position:fixed;top:0;left:0;color:#fff;background:#000;padding:4px;font-size:12px;z-index:99";
    document.body.appendChild(qaEl);
    if (window.location.search.indexOf("qa3=1") !== -1) {
      var shot = document.createElement("img");
      shot.id = "qa-shot";
      shot.src = canvas.toDataURL("image/png");
      document.body.appendChild(shot);
    }
  } else {
    lastT = performance.now();
    raf = requestAnimationFrame(frame);
  }
})();
