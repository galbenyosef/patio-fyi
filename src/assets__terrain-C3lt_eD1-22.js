// assets__terrain-C3lt_eD1 22 — math
// Lines 7750-7999 of readable/assets__terrain-C3lt_eD1.pretty.js (statement-aligned).
function Fr({
  hf: t,
  trees: n,
  species: r,
  mic: i,
  excluded: a,
  U: o,
  injectSurface: s,
  seed: c,
}) {
  let l = re();
  l
    ? ((Ar = l.litter.r), (jr = l.litter.cap), (Mr = l.litter.perM2))
    : ((Ar = 46), (jr = 36e3), (Mr = 7));
  let u = n.slice(),
    f = u.length,
    p = new te();
  p.name = `leaf-litter`;
  let m = new E(1, 1);
  {
    let e = m.attributes.uv;
    for (let t = 0; t < e.count; t++)
      e.setXY(t, 0.5 + e.getX(t) * 0.5, e.getY(t) * 0.5);
  }
  let h = Ae(o, s, {
      wind: !1,
      glow: 0.15,
      key: `terrain-autumn-litter-v1`,
      vertexColors: !1,
    }),
    g = Ae(o, s, {
      wind: !1,
      glow: 0.55,
      key: `terrain-autumn-fall-v1`,
      vertexColors: !1,
    }),
    _ = (e) => (
      (e.instanceColor = new A(
        new Float32Array(e.instanceMatrix.count * 3).fill(1),
        3,
      )),
      e
    ),
    y = _(new ee(m, h, jr));
  ((y.frustumCulled = !1),
    (y.receiveShadow = !0),
    (y.castShadow = !1),
    (y.count = 0),
    (y.name = `leaf_litter`),
    y.instanceMatrix.setUsage(e));
  let b = _(new ee(m, g, Nr));
  ((b.frustumCulled = !1),
    (b.castShadow = !1),
    (b.count = 0),
    (b.name = `leaf_fall`),
    b.instanceMatrix.setUsage(e),
    p.add(y, b));
  let x = new d(),
    S = new C(),
    w = new D(),
    T = new oe(),
    O = new oe(),
    k = new v(),
    ne = (e) => r[e.sp]?.litter?.[Math.min(e.v, r[e.sp].litter.length - 1)],
    j = new Map();
  function M(e) {
    let n = j.get(e);
    if (n) return n;
    let r = u[e],
      o = ne(r),
      s = Pr[r.sp] * r.s * r.sxz * 1.15,
      l = Math.min(kr, Math.round(Math.PI * s * s * Mr * 0.55)),
      d = [],
      f = a();
    for (let n = 0; n < l; n++) {
      let a = F(e, n, c + 401),
        u = F(e, n, c + 402),
        p = F(e, n, c + 403),
        m = F(e, n, c + 404),
        h = a * 6.2832,
        g = n < l * 0.08,
        _ = g ? 0.35 + 1.2 * u : s * Math.sqrt(u) * (p < 0.2 ? 1.5 : 1),
        v = r.x + Math.cos(h) * _,
        y = r.z + Math.sin(h) * _;
      if (f(v - 0.3, y - 0.3, v + 0.3, y + 0.3)) continue;
      let b = t.cellIndex(v, y);
      if (t.material[b] === pe.WATER) continue;
      let x = t.getHeight(v, y) + i(v, y);
      x < t.waterLevel + 0.3 ||
        Math.abs(x - t.sampleSmooth(v, y)) > 0.5 ||
        (k.set(o[(m * o.length) | 0]).multiplyScalar(0.72 + 0.3 * p),
        d.push(
          v,
          x + 0.025 + (g ? 0.1 * p * (1 - _ / 1.6) : 0.02 * m),
          y,
          m * 6.2832,
          (u - 0.5) * 0.5,
          0.26 + 0.18 * p,
          k.r,
          k.g,
          k.b,
        ));
    }
    return (
      (n = new Float32Array(d)),
      j.size > 3e3 && j.clear(),
      j.set(e, n),
      n
    );
  }
  let ie = [],
    ae = () => {
      ((ie = []),
        u.forEach((e, t) => {
          Pr[e.sp] && ne(e) && ie.push(t);
        }));
    };
  ae();
  let se = null,
    ce = [];
  function le(e) {
    let t = 0;
    ce = [];
    let n = (Ar + 6) * (Ar + 6);
    for (let r of ie) {
      let i = u[r];
      if (i.excluded) continue;
      let a = i.x - e.x,
        o = i.z - e.z,
        s = a * a + o * o;
      if (s > n) continue;
      s < 1024 && ce.push(i);
      let c = M(r);
      for (let n = 0; n < c.length && t < jr; n += 9) {
        let r = c[n] - e.x,
          i = c[n + 2] - e.z;
        r * r + i * i > Ar * Ar ||
          (w.set(-Math.PI / 2 + c[n + 4], 0, c[n + 3], `XZY`),
          S.setFromEuler(w),
          y.setMatrixAt(
            t,
            x.compose(
              T.set(c[n], c[n + 1], c[n + 2]),
              S,
              O.setScalar(c[n + 5]),
            ),
          ),
          y.setColorAt(t, k.setRGB(c[n + 6], c[n + 7], c[n + 8])),
          t++);
      }
    }
    ((y.count = t),
      (y.instanceMatrix.needsUpdate = !0),
      (y.instanceColor.needsUpdate = !0));
  }
  let ue = Array.from({ length: Nr }, (e, t) => ({
      t: null,
      p: new oe(),
      v: 0,
      i: t,
      ph: t * 1.7,
      rot: new D(),
      spin: new oe(),
      floor: 0,
      sc: 0.3,
    })),
    N = (e, t) => {
      let n = ce.length ? ce[(Math.random() * ce.length) | 0] : null;
      if (((e.t = n), !n)) return;
      let i = ne(n),
        a = Pr[n.sp] * n.s * n.sxz * 0.8,
        o = Math.random() * 6.2832,
        s = a * Math.sqrt(Math.random()),
        c = n.y0 + r[n.sp].height * n.s * n.sy * 0.75;
      ((e.floor = n.y0),
        e.p.set(
          n.x + Math.cos(o) * s,
          t ? e.floor + Math.random() * (c - e.floor) : c - Math.random() * 2,
          n.z + Math.sin(o) * s,
        ),
        (e.v = 0.55 + Math.random() * 0.5),
        e.spin.set(
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 3,
          (Math.random() - 0.5) * 4,
        ),
        (e.sc = 0.28 + Math.random() * 0.14),
        b.setColorAt(e.i, k.set(i[(Math.random() * i.length) | 0])),
        (b.instanceColor.needsUpdate = !0));
    },
    P = performance.now(),
    de = !1;
  function I(e, t) {
    for (let n of ue) {
      if (((!n.t || n.p.y < n.floor + 0.05) && N(n, !de), !n.t)) {
        b.setMatrixAt(n.i, x.makeScale(0, 0, 0));
        continue;
      }
      ((n.p.y -= n.v * t),
        (n.p.x += (Math.sin(e * 1.3 + n.ph) * 0.9 + 0.35) * t),
        (n.p.z += Math.cos(e * 1.1 + n.ph * 1.7) * 0.6 * t),
        (n.rot.x += n.spin.x * t),
        (n.rot.y += n.spin.y * t),
        (n.rot.z += n.spin.z * t),
        S.setFromEuler(n.rot),
        b.setMatrixAt(n.i, x.compose(n.p, S, O.setScalar(n.sc))));
    }
    ((de = ce.length > 0), (b.count = Nr), (b.instanceMatrix.needsUpdate = !0));
  }
  return {
    group: p,
    update(e, t) {
      let n = performance.now(),
        r = Math.min(0.1, (n - P) / 1e3);
      if (((P = n), t)) {
        ((y.count = 0), (b.count = 0), (se = null));
        return;
      }
      ((!se || e.distanceToSquared(se) > 25) &&
        (le(e), (se = se ? se.copy(e) : e.clone())),
        I(n / 1e3, r));
    },
    reset() {
      (j.clear(), (se = null));
    },
    setExtra(e) {
      ((u = n.concat(e.map((e) => ({ ...e, excluded: !1 })))),
        (f = n.length),
        ae(),
        j.clear(),
        (se = null));
    },
    setExtraVisible(e, t) {
      let n = u[f + e];
      n && ((n.excluded = !t), (se = null));
    },
    setNight(e) {
      (h.color.copy(e), g.color.copy(e));
    },
    dispose() {
      (y.dispose(), b.dispose(), m.dispose(), h.dispose(), g.dispose());
    },
  };
}
var Ir = {
    rust: [4855570, 8267288, 11550751, 14051882],
    gold: [6044942, 9397268, 12882218, 15187786],
  },
  Lr = [9316892, 12076330, 14250542, 15246641],
  Rr = [10235418, 12865567, 14711340, 15378741, 9067046, 7226662];
