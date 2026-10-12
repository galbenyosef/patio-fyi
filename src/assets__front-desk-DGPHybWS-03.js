// assets__front-desk-DGPHybWS 03 — math
// Lines 409-695 of readable/assets__front-desk-DGPHybWS.pretty.js (statement-aligned).
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
function ye(e, t) {
  let { x0: n, x1: r, z0: i, z1: a, h: o } = M,
    c = r - n,
    l = a - i,
    u = (n + r) / 2,
    p = (i + a) / 2,
    m = new s(new g(c, l), t.stone);
  ((m.rotation.x = -Math.PI / 2),
    m.position.set(u, 0, p),
    (m.receiveShadow = !0),
    e.add(m),
    t.stone.map.repeat.set(c / 1.2, l / 1.2));
  let h = (n, r, i, a) => {
    let c = new s(new g(n, o), t.plaster);
    (c.position.set(r, o / 2, i), (c.rotation.y = a), e.add(c));
  };
  (h(c, u, i, 0),
    h(c, u, a, Math.PI),
    h(l, n, p, Math.PI / 2),
    h(l, r, p, -Math.PI / 2),
    t.plaster.map.repeat.set(3, 1.2));
  let _ = new s(new g(c, l), t.ceiling);
  ((_.rotation.x = Math.PI / 2), _.position.set(u, o, p), e.add(_));
  let v = new d({ color: 1709844, emissive: 16769720, emissiveIntensity: 2 });
  for (let [t, n] of R) {
    let r = new s(new f(0.06, 24), v);
    ((r.rotation.x = Math.PI / 2), r.position.set(t, o - 0.002, n), e.add(r));
  }
  let y = new s(new g(3.4, 1.9), t.rug);
  ((y.rotation.x = -Math.PI / 2),
    y.position.set(0.2, 0.004, 1.55),
    (y.receiveShadow = !0),
    e.add(y));
}
function be(e, t) {
  let n = new v();
  e.add(n);
  let { w: r, d: i, h: a } = N,
    o = D(r, a - 0.135, i, t.wood, 0, 0.08 + (a - 0.135) / 2, 0, n);
  ((o.castShadow = o.receiveShadow = !0),
    D(
      r - 0.12,
      0.08,
      i - 0.12,
      new d({ color: 526087, roughness: 0.9 }),
      0,
      0.04,
      0,
      n,
    ),
    D(
      r - 0.04,
      0.015,
      i - 0.04,
      new d({ color: 526087, roughness: 0.9 }),
      0,
      a - 0.0475,
      0,
      n,
    ));
  let s = D(r + 0.04, 0.04, i + 0.04, t.wood, 0, a - 0.02, 0, n);
  return ((s.castShadow = s.receiveShadow = !0), n);
}
