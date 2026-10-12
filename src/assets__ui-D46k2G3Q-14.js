// assets__ui-D46k2G3Q 14 — math
// Lines 5586-5845 of readable/assets__ui-D46k2G3Q.pretty.js (statement-aligned).
function Ir(e, t, n, r, i) {
  let a = new M();
  (a.position.set(n, 0, r),
    (a.rotation.y = i),
    e.add(a),
    B(1.6, 0.05, 0.5, t.wood, 0, 0.9, 0.25, a),
    B(1.62, 0.03, 0.52, t.gold, 0, 0.865, 0.25, a));
  let o = B(1.5, 0.16, 0.45, t.gold, 0, 0.77, 0.24, a);
  o.material = t.gold;
  for (let e of [-1, 1]) {
    let n = ge(
      [
        [0, 0],
        [0.06, 0],
        [0.04, 0.2],
        [0.07, 0.5],
        [0.05, 0.7],
        [0, 0.7],
      ],
      t.gold,
      10,
    );
    (n.position.set(e * 0.68, 0, 0.3), a.add(n));
  }
  B(1.3, 0.03, 0.3, t.gold, 0, 0.12, 0.25, a);
  let c = ge(
    [
      [0, 0],
      [0.042, 0],
      [0.043, 0.2],
      [0.038, 0.24],
      [0.015, 0.29],
      [0.013, 0.34],
      [0.016, 0.35],
      [0, 0.35],
    ],
    t.bottle,
    20,
  );
  (c.position.set(0.3, 0.925, 0.28), a.add(c));
  let l = new h(new s(0.0435, 0.0435, 0.07, 20, 1, !0), t.label);
  (l.position.set(0.3, 1.045, 0.28), a.add(l));
  let u = new h(new s(0.0165, 0.014, 0.05, 12), t.gold);
  (u.position.set(0.3, 0.925 + 0.33, 0.28), a.add(u));
  let d = ge(
    [
      [0, 0],
      [0.035, 0],
      [0.035, 0.004],
      [0.004, 0.012],
      [0.004, 0.09],
      [0.028, 0.11],
      [0.038, 0.15],
      [0.036, 0.19],
      [0.034, 0.2],
    ],
    t.glass,
    20,
  );
  (d.position.set(0.12, 0.925, 0.34), (d.renderOrder = 3), a.add(d));
  let f = ge(
    [
      [0, 0],
      [0.026, 0.005],
      [0.032, 0.03],
      [0, 0.03],
    ],
    t.wine,
    20,
  );
  (f.position.set(0.12, 0.925 + 0.11, 0.34), a.add(f));
  let p = ge(
    [
      [0, 0],
      [0.07, 0],
      [0.07, 0.02],
      [0.02, 0.05],
      [0.015, 0.35],
      [0, 0.35],
    ],
    t.brass,
    16,
  );
  (p.position.set(-0.45, 0.925, 0.2), a.add(p));
  let m = new h(
    new s(0.09, 0.16, 0.18, 12, 1, !0),
    new y({
      color: 15784104,
      emissive: 16758630,
      emissiveIntensity: 0.9,
      side: 2,
      roughness: 0.8,
    }),
  );
  (m.position.set(-0.45, 0.925 + 0.4, 0.2), a.add(m));
  let g = new I(16758630, 2.2, 4, 2);
  (g.position.set(-0.45, 1.3, 0.25),
    a.add(g),
    B(1.1, 0.8, 0.04, t.gold, 0, 1.85, 0.02, a));
  let _ = B(0.94, 0.64, 0.02, t.painting, 0, 1.85, 0.045, a);
  _.material = t.painting;
}
function Lr(e, t, n, r, i) {
  let a = new M();
  (a.position.set(n, 0, r),
    (a.rotation.y = i),
    e.add(a),
    B(1.5, 0.8, 0.45, t.darkWood, 0, 0.4, 0.225, a),
    B(1.54, 0.03, 0.48, t.wood, 0, 0.815, 0.24, a),
    B(1.3, 1.1, 0.05, t.gold, 0, 1.95, 0.03, a),
    B(1.14, 0.94, 0.02, t.painting, 0, 1.95, 0.065, a));
  let o = new I(16762762, 0.9, 2.5, 2);
  (o.position.set(0, 2.7, 0.5), a.add(o));
}
function Rr(e) {
  let { s: t, base: n, dispose: r } = pe();
  e.add(t.root);
  let i = 0,
    a = -9,
    o = 0;
  return {
    root: t.root,
    present() {
      i - a > 2.2 && (a = i);
    },
    update(e, r) {
      i += e;
      let s = i - a,
        c =
          s < 0 || s > 2.4
            ? 0
            : Math.sin(Math.min(1, s / 2.4) * Math.PI) ** 0.7,
        l = (e, t) => e + (t - e) * c,
        u = { ...n },
        d = Math.sin(i * 1.25);
      ((u.torsoTilt = (n.torsoTilt ?? 0) - 0.03 + 0.01 * d),
        (u.torsoYaw = 0),
        (u.torsoRoll = 0),
        (u.hipYaw = 0),
        (u.armLx = -0.2),
        (u.armLy = -2.3),
        (u.armLz = -0.08),
        (u.foreL = 1.7),
        (u.armRx = l(-0.2, 0.95)),
        (u.armRy = l(2.3, 0)),
        (u.armRz = l(0.08, 0.32)),
        (u.foreR = l(1.7, 0.3)));
      let f = t.root.worldToLocal(r.position.clone()),
        p = Math.max(-0.55, Math.min(0.55, Math.atan2(-f.x, -f.z)));
      ((o += (p * (1 - c) - 0.35 * c - o) * Math.min(1, e * 2)),
        (u.headYaw = o),
        (u.headPitch = 0.02 + 0.06 * c),
        t.apply(u));
    },
    dispose: r,
  };
}
function zr(e) {
  let t = null,
    n = null,
    r = () => {
      try {
        return e.modules?.get?.(`audio`)?.busses?.ui ?? null;
      } catch {
        return null;
      }
    },
    i = (e, t, n) => {
      let r = (e.sampleRate * t) | 0,
        i = e.createBuffer(1, r, e.sampleRate),
        a = i.getChannelData(0),
        o = 0;
      for (let e = 0; e < r; e++) {
        let t = Math.random() * 2 - 1;
        n ? ((o = (o + 0.02 * t) / 1.02), (a[e] = o * 3.5)) : (a[e] = t);
      }
      let s = 2048;
      for (let e = 0; e < s; e++) {
        let t = e / s;
        a[e] = a[e] * t + a[r - s + e] * (1 - t);
      }
      return i;
    };
  return {
    start() {
      let e = r();
      if (!e || t) return;
      let a = e.context;
      a.state === `suspended` && a.resume?.();
      let o = a.createGain();
      ((o.gain.value = 0),
        o.connect(e),
        o.gain.setTargetAtTime(1, a.currentTime, 0.6));
      let s = a.createBufferSource();
      ((s.buffer = i(a, 5, !0)), (s.loop = !0));
      let c = a.createBiquadFilter();
      ((c.type = `lowpass`), (c.frequency.value = 320));
      let l = a.createGain();
      ((l.gain.value = 0.05), s.connect(c).connect(l).connect(o), s.start());
      let u = a.createBufferSource();
      ((u.buffer = i(a, 5, !1)), (u.loop = !0));
      let d = a.createBiquadFilter();
      ((d.type = `bandpass`), (d.frequency.value = 420), (d.Q.value = 1.1));
      let f = a.createBiquadFilter();
      ((f.type = `lowpass`), (f.frequency.value = 700));
      let p = a.createGain();
      ((p.gain.value = 0),
        u.connect(d).connect(f).connect(p).connect(o),
        u.start(),
        (n = setInterval(() => {
          let e = Math.random();
          (p.gain.setTargetAtTime(
            e < 0.25 ? 0.002 : 0.004 + e * 0.009,
            a.currentTime,
            0.09 + Math.random() * 0.12,
          ),
            d.frequency.setTargetAtTime(
              330 + Math.random() * 260,
              a.currentTime,
              0.1,
            ));
        }, 170)),
        (t = { ac: a, gain: o, srcs: [s, u] }));
    },
    stop() {
      if (!t) return;
      let { ac: e, gain: r, srcs: i } = t;
      ((t = null),
        clearInterval(n),
        r.gain.setTargetAtTime(0, e.currentTime, 0.25),
        setTimeout(() => {
          for (let e of i)
            try {
              e.stop();
            } catch {}
          r.disconnect();
        }, 1400));
    },
    clack() {
      let e = r();
      if (!e) return;
      let t = e.context,
        n = t.currentTime + 0.01,
        i = t.createBufferSource(),
        a = (t.sampleRate * 0.16) | 0,
        o = t.createBuffer(1, a, t.sampleRate),
        s = o.getChannelData(0);
      for (let e = 0; e < a; e++) {
        let n = Math.min(1, e / (t.sampleRate * 0.006));
        s[e] =
          (Math.random() * 2 - 1) * n * Math.exp(-e / (t.sampleRate * 0.035));
      }
      i.buffer = o;
      let c = t.createBiquadFilter();
      ((c.type = `lowpass`), (c.frequency.value = 520), (c.Q.value = 0.4));
      let l = t.createGain();
      ((l.gain.value = 0.16), i.connect(c).connect(l).connect(e), i.start(n));
    },
  };
}
