// assets__hangar-view--r_UA7k- 13 — gain
// Lines 12344-12685 of readable/assets__hangar-view--r_UA7k-.pretty.js (statement-aligned).
function hn(e, t, n) {
  let r = [],
    i = [],
    a = [],
    o = [],
    s = new m({
      vertexColors: !0,
      roughness: 0.7,
      metalness: 0.15,
      flatShading: !0,
    }),
    c = new m({
      vertexColors: !0,
      roughness: 0.1,
      metalness: 0.1,
      transparent: !0,
      opacity: 0.45,
    });
  if ((a.push(s, c), t.helos?.length)) {
    let a = mn();
    (i.push(a.body, a.glass, a.rotor, a.tail),
      t.helos.forEach((i, o) => {
        let l = new y(),
          u = new y();
        ((l.name = `helo-${o}`),
          l.scale.setScalar(pe.bg),
          l.add(u),
          u.add(new d(a.body, s), new d(a.glass, c)));
        let f = new y();
        (f.position.copy(a.rotorAt.p), f.quaternion.copy(a.rotorAt.q));
        let p = new d(a.rotor, s);
        (f.add(p), u.add(f));
        let m = new y();
        (m.position.copy(a.tailAt.p), m.quaternion.copy(a.tailAt.q));
        let h = new d(a.tail, s);
        (m.add(h),
          u.add(m),
          (l.userData.dynamicShadow = !0),
          l.traverse((e) => {
            e.isMesh && ((e.castShadow = !0), (e.receiveShadow = !0));
          }),
          e.add(l),
          r.push(l),
          n.push((e) => {
            let n = xe(t, o, e);
            (l.position.set(n.x, n.y, n.z),
              (l.rotation.y = n.yaw),
              u.rotation.set(n.bank, 0, n.pitch, `YXZ`),
              (p.rotation.y = n.rotor),
              (h.rotation.x = n.tail));
          }));
      }));
  }
  for (let i = 0; i < 2; i++) {
    let a = Ft?.();
    if (!a) break;
    let o = new y(),
      s = new y();
    ((o.name = `chinook-pass-${i}`),
      o.scale.setScalar(pe.bg),
      s.add(a.root),
      o.add(s),
      (o.userData.dynamicShadow = !0),
      o.traverse((e) => {
        e.isMesh && (e.castShadow = !0);
      }),
      e.add(o),
      r.push(o),
      n.push((e) => {
        let n = Oe(t, i, e);
        ((o.visible = n.visible),
          n.visible &&
            (o.position.set(n.x, n.y, n.z),
            (o.rotation.y = n.yaw),
            (s.rotation.z = n.pitch),
            a.spin?.(n.rotor)));
      }));
  }
  {
    let i = dn({ variant: `c` });
    if (i) {
      o.push(i);
      let a = new y(),
        s = new y();
      ((a.name = `c5-flight`),
        a.scale.setScalar(pe.bg),
        s.add(i.root),
        a.add(s),
        (a.userData.dynamicShadow = !0),
        a.traverse((e) => {
          e.isMesh && ((e.castShadow = !0), (e.receiveShadow = !0));
        }),
        e.add(a),
        r.push(a),
        n.push((e) => {
          let n = De(t, e);
          ((a.visible = n.visible),
            n.visible &&
              (a.position.set(n.x, n.y, n.z),
              (a.rotation.y = n.yaw),
              (s.rotation.z = n.pitch)));
        }));
    }
  }
  return {
    dispose() {
      for (let t of r) e.remove(t);
      (o.forEach((e) => e.dispose()),
        i.forEach((e) => e.dispose()),
        a.forEach((e) => e.dispose()));
    },
  };
}
var Z = (e, t, n) => (e < t ? t : e > n ? n : e),
  Q = (e, t, n, r = 0.06) => e.setTargetAtTime(t, n, r);
function gn(e, t) {
  let n = new Float32Array(48),
    r = new Float32Array(48);
  for (let e = 1; e < 48; e++) n[e] = Math.exp(-((e * t) ** 2));
  return e.createPeriodicWave(n, r);
}
function _n(e) {
  let t = [],
    n = Xe(e),
    r = e.createConstantSource();
  ((r.offset.value = 0), r.start(), t.push(r));
  let i = {
    ac: e,
    N: n,
    pitch: r,
    osc(n, i) {
      let a = e.createOscillator();
      return (
        typeof n == `string` ? (a.type = n) : a.setPeriodicWave(n),
        (a.frequency.value = i),
        r.connect(a.detune),
        a.start(),
        t.push(a),
        a
      );
    },
    noise(i, a = 1) {
      let o = e.createBufferSource();
      return (
        (o.buffer = n[i]),
        (o.loop = !0),
        (o.playbackRate.value = a),
        r.connect(o.detune),
        o.start(e.currentTime, Math.random() * 1.9),
        t.push(o),
        o
      );
    },
    filt(t, n, r = 0.7) {
      let i = e.createBiquadFilter();
      return ((i.type = t), (i.frequency.value = n), (i.Q.value = r), i);
    },
    gain(t = 0) {
      let n = e.createGain();
      return ((n.gain.value = t), n);
    },
    chain(...e) {
      for (let t = 0; t < e.length - 1; t++) e[t].connect(e[t + 1]);
      return e.at(-1);
    },
    am(e, t = 0) {
      let n = i.gain(t),
        r = i.gain(0);
      return (e.connect(r), r.connect(n.gain), { g: n, depth: r.gain });
    },
    stop(e) {
      for (let n of t)
        try {
          n.stop(e);
        } catch {}
    },
  };
  return i;
}
function vn(
  e,
  t,
  {
    blades: n = 4,
    rev: r = 4.3,
    band: i = 820,
    thump: a = 68,
    whine: o = [5600, 8150],
    skew: s = 1,
    level: c = 1,
    turbines: l = 1,
  },
) {
  let u = e.osc(gn(e.ac, 0.11), 0.01),
    d = e.osc(gn(e.ac, 0.045), 0.01),
    f = e.gain(c);
  f.connect(t);
  let p = e.am(u);
  e.chain(e.noise(`pink`), e.filt(`bandpass`, i, 0.6), p.g, f);
  let m = e.osc(`sine`, a),
    h = e.am(u);
  e.chain(m, e.filt(`lowpass`, 190), h.g, f);
  let g = e.am(d);
  e.chain(e.noise(`white`), e.filt(`bandpass`, 2300, 0.9), g.g, f);
  let _ = e.gain(0),
    v = o.map((t, n) => {
      let r = e.osc(`sine`, t * 0.2);
      return (e.chain(r, e.gain(n ? 0.45 : 1), _), r);
    });
  _.connect(f);
  let y = e.gain(0);
  e.chain(e.noise(`white`), e.filt(`highpass`, 3200), y, f);
  let b = e.osc(`triangle`, 40),
    x = e.gain(0);
  return (
    e.chain(b, e.filt(`bandpass`, 420, 3), x, f),
    {
      set(e, t) {
        let i = Z(e.rpm ?? 0, 0, 1),
          c = Z(e.power ?? 0, 0, 1),
          f = Z(e.turb ?? i, 0, 1),
          ee = Math.max(0.01, n * r * i * s),
          S = i ** 1.5;
        (Q(u.frequency, ee, t, 0.25),
          Q(d.frequency, ee, t, 0.25),
          Q(p.g.gain, 0.04 * S, t),
          Q(p.depth, 0.2 * S * (0.6 + 0.5 * c), t),
          Q(m.frequency, a * (0.55 + 0.45 * i), t, 0.25),
          Q(h.g.gain, 0.06 * i * i, t),
          Q(h.depth, 0.42 * i * i * (0.7 + 0.6 * c), t),
          Q(g.depth, 0.3 * c ** 2 * i ** 3, t),
          v.forEach((e, n) => Q(e.frequency, o[n] * (0.18 + 0.82 * f), t, 0.4)),
          Q(_.gain, 0.022 * f ** 1.2 * l, t, 0.3),
          Q(y.gain, 0.045 * f * l, t, 0.3),
          Q(b.frequency, 410 * i, t, 0.25),
          Q(x.gain, 0.03 * i, t));
      },
    }
  );
}
function yn(e, t, { level: n = 1 }) {
  let { ac: r } = e,
    i = e.gain(n);
  i.connect(t);
  let a = (t, n) => {
      let i = new Float32Array(48),
        a = new Float32Array(48),
        o = 0;
      for (let e = 1; e < 48; e++)
        ((i[e] = Math.exp(-((e * t) ** 2))), (o += i[e]));
      let s = r.createOscillator();
      return (
        s.setPeriodicWave(
          r.createPeriodicWave(i, a, { disableNormalization: !0 }),
        ),
        (s.frequency.value = 11.25),
        e.pitch.connect(s.detune),
        s.start(r.currentTime + n),
        { o: s, peak: o }
      );
    },
    o = (t, n) => {
      let r = e.gain(0),
        i = e.gain(0);
      return (
        t.o.connect(i),
        i.connect(r.gain),
        e.chain(n, r),
        {
          g: r,
          set(e, n) {
            (Q(r.gain, (e * 0.5) / (t.peak + 0.5), n, 0.08),
              Q(i.gain, e / (t.peak + 0.5), n, 0.08));
          },
        }
      );
    },
    s = [0, 1 / 22.5].map((t, n) => {
      let r = a(0.075, t),
        s = a(0.032, t),
        c = e.gain(1);
      c.connect(i);
      let l = o(
          r,
          e.chain(e.noise(`brown`), e.filt(`lowpass`, n ? 210 : 240, 0.7)),
        ),
        u = o(
          r,
          e.chain(e.noise(`pink`), e.filt(`bandpass`, n ? 135 : 150, 0.9)),
        ),
        d = o(
          s,
          e.chain(e.noise(`white`), e.filt(`bandpass`, n ? 1050 : 1200, 0.8)),
        );
      for (let e of [l, u, d]) e.g.connect(c);
      return { thud: r, crack: s, whop: l, body: u, slap: d };
    }),
    c = e.gain(0);
  e.chain(e.noise(`brown`), e.filt(`lowpass`, 85), c, i);
  let l = e.gain(0),
    u = [3150, 4720].map((t, n) => {
      let r = e.osc(`sine`, t);
      return (e.chain(r, e.gain(n ? 0.5 : 1), l), r);
    });
  l.connect(i);
  let d = e.gain(0);
  e.chain(e.noise(`white`), e.filt(`highpass`, 2800), d, i);
  let f = e.osc(`triangle`, 640),
    p = e.gain(0);
  return (
    e.chain(f, e.filt(`bandpass`, 640, 4), p, i),
    {
      set(e, t) {
        let n = Z(e.rpm ?? 0, 0, 1),
          r = Z(e.power ?? 0, 0, 1),
          i = Z(e.turb ?? n, 0, 1),
          a = (Z(e.front ?? 0, -1, 1) + 1) / 2,
          o = 1 - a,
          m = Math.max(0.01, 11.25 * n);
        (s.forEach((e, i) => {
          (Q(e.thud.o.frequency, m, t, 0.25),
            Q(e.crack.o.frequency, m, t, 0.25));
          let s = i ? 0.85 + 0.3 * o : 0.85 + 0.3 * a;
          (e.whop.set(0.9 * n * n * (0.65 + 0.35 * a) * s, t),
            e.body.set(0.45 * n * n * (0.6 + 0.5 * r) * s, t),
            e.slap.set(
              0.55 * n ** 3 * (0.15 + 0.85 * a ** 1.5) * (0.45 + 0.75 * r) * s,
              t,
            ));
        }),
          Q(c.gain, 0.14 * n * n, t, 0.3),
          u.forEach((e, n) =>
            Q(e.frequency, [3150, 4720][n] * (0.2 + 0.8 * i), t, 0.4),
          ),
          Q(l.gain, 0.02 * i ** 1.2 * (0.4 + 1.1 * o), t, 0.3),
          Q(d.gain, 0.05 * i * (0.35 + 1 * o), t, 0.3),
          Q(f.frequency, 640 * n, t, 0.25),
          Q(p.gain, 0.02 * n, t));
      },
    }
  );
}
