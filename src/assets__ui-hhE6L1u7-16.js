// assets__ui-hhE6L1u7 16 — math
// Lines 5724-5983 of readable/assets__ui-hhE6L1u7.pretty.js (statement-aligned).
function ti(t, n, r, i, o) {
  let s = new w();
  (s.position.set(r, 0, i),
    (s.rotation.y = o),
    t.add(s),
    H(1.6, 0.05, 0.5, n.wood, 0, 0.9, 0.25, s),
    H(1.62, 0.03, 0.52, n.gold, 0, 0.865, 0.25, s));
  let c = H(1.5, 0.16, 0.45, n.gold, 0, 0.77, 0.24, s);
  c.material = n.gold;
  for (let e of [-1, 1]) {
    let t = me(
      [
        [0, 0],
        [0.06, 0],
        [0.04, 0.2],
        [0.07, 0.5],
        [0.05, 0.7],
        [0, 0.7],
      ],
      n.gold,
      10,
    );
    (t.position.set(e * 0.68, 0, 0.3), s.add(t));
  }
  H(1.3, 0.03, 0.3, n.gold, 0, 0.12, 0.25, s);
  let l = me(
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
    n.bottle,
    20,
  );
  (l.position.set(0.3, 0.925, 0.28), s.add(l));
  let u = new e(new P(0.0435, 0.0435, 0.07, 20, 1, !0), n.label);
  (u.position.set(0.3, 1.045, 0.28), s.add(u));
  let d = new e(new P(0.0165, 0.014, 0.05, 12), n.gold);
  (d.position.set(0.3, 0.925 + 0.33, 0.28), s.add(d));
  let f = me(
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
    n.glass,
    20,
  );
  (f.position.set(0.12, 0.925, 0.34), (f.renderOrder = 3), s.add(f));
  let p = me(
    [
      [0, 0],
      [0.026, 0.005],
      [0.032, 0.03],
      [0, 0.03],
    ],
    n.wine,
    20,
  );
  (p.position.set(0.12, 0.925 + 0.11, 0.34), s.add(p));
  let m = me(
    [
      [0, 0],
      [0.07, 0],
      [0.07, 0.02],
      [0.02, 0.05],
      [0.015, 0.35],
      [0, 0.35],
    ],
    n.brass,
    16,
  );
  (m.position.set(-0.45, 0.925, 0.2), s.add(m));
  let h = new e(
    new P(0.09, 0.16, 0.18, 12, 1, !0),
    new a({
      color: 15784104,
      emissive: 16758630,
      emissiveIntensity: 0.9,
      side: 2,
      roughness: 0.8,
    }),
  );
  (h.position.set(-0.45, 0.925 + 0.4, 0.2), s.add(h));
  let g = new ee(16758630, 2.2, 4, 2);
  (g.position.set(-0.45, 1.3, 0.25),
    s.add(g),
    H(1.1, 0.8, 0.04, n.gold, 0, 1.85, 0.02, s));
  let _ = H(0.94, 0.64, 0.02, n.painting, 0, 1.85, 0.045, s);
  _.material = n.painting;
}
function ni(e, t, n, r, i) {
  let a = new w();
  (a.position.set(n, 0, r),
    (a.rotation.y = i),
    e.add(a),
    H(1.5, 0.8, 0.45, t.darkWood, 0, 0.4, 0.225, a),
    H(1.54, 0.03, 0.48, t.wood, 0, 0.815, 0.24, a),
    H(1.3, 1.1, 0.05, t.gold, 0, 1.95, 0.03, a),
    H(1.14, 0.94, 0.02, t.painting, 0, 1.95, 0.065, a));
  let o = new ee(16762762, 0.9, 2.5, 2);
  (o.position.set(0, 2.7, 0.5), a.add(o));
}
function ri(e) {
  let { s: t, base: n, dispose: r } = de();
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
function ii(e) {
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
