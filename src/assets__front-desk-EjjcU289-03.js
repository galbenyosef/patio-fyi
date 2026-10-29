// assets__front-desk-EjjcU289 03 — math
// Lines 409-695 of readable/assets__front-desk-EjjcU289.pretty.js (statement-aligned).
function he() {
  let e = null,
    t = null,
    n = !0,
    r = null;
  try {
    n = localStorage.getItem(k) !== `0`;
  } catch {}
  let i = () => {
      if (!n) return null;
      if (!e)
        try {
          ((e = new (window.AudioContext || window.webkitAudioContext)()),
            (t = e.createGain()),
            (t.gain.value = 0.7),
            t.connect(e.destination));
        } catch {
          return null;
        }
      return (e.state === `suspended` && e.resume?.(), e);
    },
    a = (t, n) => {
      let r = (e.sampleRate * t) | 0,
        i = e.createBuffer(1, r, e.sampleRate),
        a = i.getChannelData(0),
        o = 0;
      for (let e = 0; e < r; e++) {
        let t = Math.random() * 2 - 1;
        n ? ((o = (o + 0.02 * t) / 1.02), (a[e] = o * 3.5)) : (a[e] = t);
      }
      return i;
    },
    o = (
      n,
      r,
      {
        type: i = `bandpass`,
        f: o = 2e3,
        q: s = 1,
        level: c = 0.05,
        attack: l = 0.003,
      },
    ) => {
      let u = e.createBufferSource();
      u.buffer = a(r + 0.05, !1);
      let d = e.createBiquadFilter();
      ((d.type = i), (d.frequency.value = o), (d.Q.value = s));
      let f = e.createGain();
      (f.gain.setValueAtTime(0, n),
        f.gain.linearRampToValueAtTime(c, n + l),
        f.gain.exponentialRampToValueAtTime(1e-4, n + r),
        u.connect(d).connect(f).connect(t),
        u.start(n),
        u.stop(n + r + 0.05));
    },
    s = (n, r) => {
      for (let [i, a, o] of r) {
        let r = e.createOscillator(),
          s = e.createGain();
        ((r.type = `sine`),
          (r.frequency.value = i),
          s.gain.setValueAtTime(0, n),
          s.gain.linearRampToValueAtTime(a, n + 0.004),
          s.gain.exponentialRampToValueAtTime(1e-5, n + o),
          r.connect(s).connect(t),
          r.start(n),
          r.stop(n + o + 0.05));
      }
    },
    c = {
      get on() {
        return n;
      },
      set(e) {
        n = e;
        try {
          localStorage.setItem(k, e ? `1` : `0`);
        } catch {}
        e ? c.start() : c.stop();
      },
      start() {
        let e = i();
        if (!e || r) return;
        let n = e.createGain();
        ((n.gain.value = 0),
          n.connect(t),
          n.gain.setTargetAtTime(1, e.currentTime, 0.8));
        let o = e.createBufferSource();
        ((o.buffer = a(5, !0)), (o.loop = !0));
        let s = e.createBiquadFilter();
        ((s.type = `lowpass`), (s.frequency.value = 300));
        let c = e.createGain();
        ((c.gain.value = 0.045), o.connect(s).connect(c).connect(n), o.start());
        let l = e.createBufferSource();
        ((l.buffer = a(5, !1)), (l.loop = !0));
        let u = e.createBiquadFilter();
        ((u.type = `bandpass`), (u.frequency.value = 420), (u.Q.value = 1.1));
        let d = e.createBiquadFilter();
        ((d.type = `lowpass`), (d.frequency.value = 700));
        let f = e.createGain();
        ((f.gain.value = 0),
          l.connect(u).connect(d).connect(f).connect(n),
          l.start());
        let p = setInterval(() => {
          let t = Math.random();
          (f.gain.setTargetAtTime(
            t < 0.3 ? 0.001 : 0.003 + t * 0.007,
            e.currentTime,
            0.1 + Math.random() * 0.12,
          ),
            u.frequency.setTargetAtTime(
              330 + Math.random() * 260,
              e.currentTime,
              0.1,
            ));
        }, 180);
        r = { g: n, srcs: [o, l], timer: p };
      },
      stop() {
        if (!r || !e) return;
        let { g: t, srcs: n, timer: i } = r;
        ((r = null),
          clearInterval(i),
          t.gain.setTargetAtTime(0, e.currentTime, 0.2),
          setTimeout(() => {
            for (let e of n)
              try {
                e.stop();
              } catch {}
            t.disconnect();
          }, 1200));
      },
      scratch() {
        let e = i();
        if (!e) return;
        let t = e.currentTime;
        (o(t, 0.05 + Math.random() * 0.05, {
          f: 2600 + Math.random() * 1800,
          q: 2.5,
          level: 0.035,
        }),
          o(t + 0.03, 0.04, { f: 5200, q: 3, level: 0.012 }));
      },
      coin() {
        let e = i();
        if (!e) return;
        let t = e.currentTime + 0.02;
        (o(t, 0.25, { type: `lowpass`, f: 900, level: 0.05, attack: 0.02 }),
          s(t + 0.24, [
            [3150, 0.03, 0.5],
            [4870, 0.018, 0.35],
            [6230, 0.01, 0.25],
          ]));
      },
      stamp() {
        let e = i();
        if (!e) return;
        let t = e.currentTime;
        (o(t, 0.12, { type: `lowpass`, f: 260, q: 0.6, level: 0.35 }),
          s(t, [[140, 0.12, 0.12]]));
      },
      key() {
        let e = i();
        if (!e) return;
        let t = e.currentTime;
        for (let e = 0; e < 4; e++)
          s(t + e * 0.045 + Math.random() * 0.02, [
            [3600 + Math.random() * 1500, 0.012, 0.18],
            [6100 + Math.random() * 900, 0.006, 0.12],
          ]);
        o(t + 0.2, 0.35, {
          type: `lowpass`,
          f: 700,
          level: 0.03,
          attack: 0.03,
        });
      },
      bell() {
        let e = i();
        if (!e) return;
        let t = e.currentTime;
        s(t, [
          [1568, 0.09, 2.4],
          [1568 * 2.76, 0.03, 1.2],
          [8467.2, 0.012, 0.6],
          [1571, 0.05, 2.2],
        ]);
      },
      door() {
        let e = i();
        if (!e) return;
        let t = e.currentTime;
        o(t, 1.2, { type: `lowpass`, f: 380, level: 0.05, attack: 0.4 });
      },
    };
  return c;
}
function ge(e, t, n) {
  ((e.fillStyle = `#1b1816`), e.fillRect(0, 0, t, n));
  let r = E(9);
  for (let i = 0; i < 6e3; i++)
    ((e.fillStyle =
      r() < 0.5
        ? `rgba(0,0,0,${r() * 0.05})`
        : `rgba(255,245,230,${r() * 0.018})`),
      e.fillRect(r() * t, r() * n, 2 + r() * 7, 2 + r() * 7));
}
function _e(e, t) {
  ((e.fillStyle = `#161413`), e.fillRect(0, 0, t, t));
  let n = E(4);
  for (let r = 0; r < 5e3; r++)
    ((e.fillStyle = `rgba(255,248,236,${n() * 0.02})`),
      e.fillRect(n() * t, n() * t, 1 + n() * 3, 1 + n() * 3));
  ((e.strokeStyle = `rgba(0,0,0,.6)`),
    (e.lineWidth = 2),
    e.strokeRect(1, 1, t - 2, t - 2));
}
function ve(e, t, n) {
  ((e.fillStyle = `#211d1a`), e.fillRect(0, 0, t, n));
  let r = E(6);
  for (let i = 0; i < 9e3; i++)
    ((e.fillStyle = `rgba(${r() < 0.5 ? 0 : 255},${r() < 0.5 ? 0 : 240},${r() < 0.5 ? 0 : 220},${r() * 0.035})`),
      e.fillRect(r() * t, r() * n, 1, 2));
}
function ye(t, n) {
  let { x0: r, x1: i, z0: s, z1: c, h: l } = M,
    u = i - r,
    d = c - s,
    f = (r + i) / 2,
    p = (s + c) / 2,
    m = new e(new g(u, d), n.stone);
  ((m.rotation.x = -Math.PI / 2),
    m.position.set(f, 0, p),
    (m.receiveShadow = !0),
    t.add(m),
    n.stone.map.repeat.set(u / 1.2, d / 1.2));
  let h = (r, i, a, o) => {
    let s = new e(new g(r, l), n.plaster);
    (s.position.set(i, l / 2, a), (s.rotation.y = o), t.add(s));
  };
  (h(u, f, s, 0),
    h(u, f, c, Math.PI),
    h(d, r, p, Math.PI / 2),
    h(d, i, p, -Math.PI / 2),
    n.plaster.map.repeat.set(3, 1.2));
  let _ = new e(new g(u, d), n.ceiling);
  ((_.rotation.x = Math.PI / 2), _.position.set(f, l, p), t.add(_));
  let v = new a({ color: 1709844, emissive: 16769720, emissiveIntensity: 2 });
  for (let [n, r] of R) {
    let i = new e(new o(0.06, 24), v);
    ((i.rotation.x = Math.PI / 2), i.position.set(n, l - 0.002, r), t.add(i));
  }
  let y = new e(new g(3.4, 1.9), n.rug);
  ((y.rotation.x = -Math.PI / 2),
    y.position.set(0.2, 0.004, 1.55),
    (y.receiveShadow = !0),
    t.add(y));
}
function be(e, t) {
  let n = new m();
  e.add(n);
  let { w: r, d: i, h: o } = N,
    s = D(r, o - 0.135, i, t.wood, 0, 0.08 + (o - 0.135) / 2, 0, n);
  ((s.castShadow = s.receiveShadow = !0),
    D(
      r - 0.12,
      0.08,
      i - 0.12,
      new a({ color: 526087, roughness: 0.9 }),
      0,
      0.04,
      0,
      n,
    ),
    D(
      r - 0.04,
      0.015,
      i - 0.04,
      new a({ color: 526087, roughness: 0.9 }),
      0,
      o - 0.0475,
      0,
      n,
    ));
  let c = D(r + 0.04, 0.04, i + 0.04, t.wood, 0, o - 0.02, 0, n);
  return ((c.castShadow = c.receiveShadow = !0), n);
}
