// assets__terrain-D4VU5r38 22 — math
// Lines 7753-8002 of readable/assets__terrain-D4VU5r38.pretty.js (statement-aligned).
function Fr({
  hf: e,
  trees: t,
  species: n,
  mic: r,
  excluded: i,
  U: a,
  injectSurface: o,
  seed: c,
}) {
  let l = j();
  l
    ? ((Ar = l.litter.r), (jr = l.litter.cap), (Mr = l.litter.perM2))
    : ((Ar = 46), (jr = 36e3), (Mr = 7));
  let u = t.slice(),
    d = u.length,
    f = new T();
  f.name = `leaf-litter`;
  let p = new ee(1, 1);
  {
    let e = p.attributes.uv;
    for (let t = 0; t < e.count; t++)
      e.setXY(t, 0.5 + e.getX(t) * 0.5, e.getY(t) * 0.5);
  }
  let m = Ae(a, o, {
      wind: !1,
      glow: 0.15,
      key: `terrain-autumn-litter-v1`,
      vertexColors: !1,
    }),
    h = Ae(a, o, {
      wind: !1,
      glow: 0.55,
      key: `terrain-autumn-fall-v1`,
      vertexColors: !1,
    }),
    g = (e) => (
      (e.instanceColor = new E(
        new Float32Array(e.instanceMatrix.count * 3).fill(1),
        3,
      )),
      e
    ),
    v = g(new re(p, m, jr));
  ((v.frustumCulled = !1),
    (v.receiveShadow = !0),
    (v.castShadow = !1),
    (v.count = 0),
    (v.name = `leaf_litter`),
    v.instanceMatrix.setUsage(N));
  let y = g(new re(p, h, Nr));
  ((y.frustumCulled = !1),
    (y.castShadow = !1),
    (y.count = 0),
    (y.name = `leaf_fall`),
    y.instanceMatrix.setUsage(N),
    f.add(v, y));
  let b = new oe(),
    x = new C(),
    S = new A(),
    w = new s(),
    D = new s(),
    O = new _(),
    k = (e) => n[e.sp]?.litter?.[Math.min(e.v, n[e.sp].litter.length - 1)],
    M = new Map();
  function te(t) {
    let n = M.get(t);
    if (n) return n;
    let a = u[t],
      o = k(a),
      s = Pr[a.sp] * a.s * a.sxz * 1.15,
      l = Math.min(kr, Math.round(Math.PI * s * s * Mr * 0.55)),
      d = [],
      f = i();
    for (let n = 0; n < l; n++) {
      let i = I(t, n, c + 401),
        u = I(t, n, c + 402),
        p = I(t, n, c + 403),
        m = I(t, n, c + 404),
        h = i * 6.2832,
        g = n < l * 0.08,
        _ = g ? 0.35 + 1.2 * u : s * Math.sqrt(u) * (p < 0.2 ? 1.5 : 1),
        v = a.x + Math.cos(h) * _,
        y = a.z + Math.sin(h) * _;
      if (f(v - 0.3, y - 0.3, v + 0.3, y + 0.3)) continue;
      let b = e.cellIndex(v, y);
      if (e.material[b] === fe.WATER) continue;
      let x = e.getHeight(v, y) + r(v, y);
      x < e.waterLevel + 0.3 ||
        Math.abs(x - e.sampleSmooth(v, y)) > 0.5 ||
        (O.set(o[(m * o.length) | 0]).multiplyScalar(0.72 + 0.3 * p),
        d.push(
          v,
          x + 0.025 + (g ? 0.1 * p * (1 - _ / 1.6) : 0.02 * m),
          y,
          m * 6.2832,
          (u - 0.5) * 0.5,
          0.26 + 0.18 * p,
          O.r,
          O.g,
          O.b,
        ));
    }
    return (
      (n = new Float32Array(d)),
      M.size > 3e3 && M.clear(),
      M.set(t, n),
      n
    );
  }
  let ne = [],
    ie = () => {
      ((ne = []),
        u.forEach((e, t) => {
          Pr[e.sp] && k(e) && ne.push(t);
        }));
    };
  ie();
  let ae = null,
    se = [];
  function ce(e) {
    let t = 0;
    se = [];
    let n = (Ar + 6) * (Ar + 6);
    for (let r of ne) {
      let i = u[r];
      if (i.excluded) continue;
      let a = i.x - e.x,
        o = i.z - e.z,
        s = a * a + o * o;
      if (s > n) continue;
      s < 1024 && se.push(i);
      let c = te(r);
      for (let n = 0; n < c.length && t < jr; n += 9) {
        let r = c[n] - e.x,
          i = c[n + 2] - e.z;
        r * r + i * i > Ar * Ar ||
          (S.set(-Math.PI / 2 + c[n + 4], 0, c[n + 3], `XZY`),
          x.setFromEuler(S),
          v.setMatrixAt(
            t,
            b.compose(
              w.set(c[n], c[n + 1], c[n + 2]),
              x,
              D.setScalar(c[n + 5]),
            ),
          ),
          v.setColorAt(t, O.setRGB(c[n + 6], c[n + 7], c[n + 8])),
          t++);
      }
    }
    ((v.count = t),
      (v.instanceMatrix.needsUpdate = !0),
      (v.instanceColor.needsUpdate = !0));
  }
  let le = Array.from({ length: Nr }, (e, t) => ({
      t: null,
      p: new s(),
      v: 0,
      i: t,
      ph: t * 1.7,
      rot: new A(),
      spin: new s(),
      floor: 0,
      sc: 0.3,
    })),
    P = (e, t) => {
      let r = se.length ? se[(Math.random() * se.length) | 0] : null;
      if (((e.t = r), !r)) return;
      let i = k(r),
        a = Pr[r.sp] * r.s * r.sxz * 0.8,
        o = Math.random() * 6.2832,
        s = a * Math.sqrt(Math.random()),
        c = r.y0 + n[r.sp].height * r.s * r.sy * 0.75;
      ((e.floor = r.y0),
        e.p.set(
          r.x + Math.cos(o) * s,
          t ? e.floor + Math.random() * (c - e.floor) : c - Math.random() * 2,
          r.z + Math.sin(o) * s,
        ),
        (e.v = 0.55 + Math.random() * 0.5),
        e.spin.set(
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 3,
          (Math.random() - 0.5) * 4,
        ),
        (e.sc = 0.28 + Math.random() * 0.14),
        y.setColorAt(e.i, O.set(i[(Math.random() * i.length) | 0])),
        (y.instanceColor.needsUpdate = !0));
    },
    F = performance.now(),
    ue = !1;
  function L(e, t) {
    for (let n of le) {
      if (((!n.t || n.p.y < n.floor + 0.05) && P(n, !ue), !n.t)) {
        y.setMatrixAt(n.i, b.makeScale(0, 0, 0));
        continue;
      }
      ((n.p.y -= n.v * t),
        (n.p.x += (Math.sin(e * 1.3 + n.ph) * 0.9 + 0.35) * t),
        (n.p.z += Math.cos(e * 1.1 + n.ph * 1.7) * 0.6 * t),
        (n.rot.x += n.spin.x * t),
        (n.rot.y += n.spin.y * t),
        (n.rot.z += n.spin.z * t),
        x.setFromEuler(n.rot),
        y.setMatrixAt(n.i, b.compose(n.p, x, D.setScalar(n.sc))));
    }
    ((ue = se.length > 0), (y.count = Nr), (y.instanceMatrix.needsUpdate = !0));
  }
  return {
    group: f,
    update(e, t) {
      let n = performance.now(),
        r = Math.min(0.1, (n - F) / 1e3);
      if (((F = n), t)) {
        ((v.count = 0), (y.count = 0), (ae = null));
        return;
      }
      ((!ae || e.distanceToSquared(ae) > 25) &&
        (ce(e), (ae = ae ? ae.copy(e) : e.clone())),
        L(n / 1e3, r));
    },
    reset() {
      (M.clear(), (ae = null));
    },
    setExtra(e) {
      ((u = t.concat(e.map((e) => ({ ...e, excluded: !1 })))),
        (d = t.length),
        ie(),
        M.clear(),
        (ae = null));
    },
    setExtraVisible(e, t) {
      let n = u[d + e];
      n && ((n.excluded = !t), (ae = null));
    },
    setNight(e) {
      (m.color.copy(e), h.color.copy(e));
    },
    dispose() {
      (v.dispose(), y.dispose(), p.dispose(), m.dispose(), h.dispose());
    },
  };
}
var Ir = {
    rust: [4855570, 8267288, 11550751, 14051882],
    gold: [6044942, 9397268, 12882218, 15187786],
  },
  Lr = [9316892, 12076330, 14250542, 15246641],
  Rr = [10235418, 12865567, 14711340, 15378741, 9067046, 7226662];
