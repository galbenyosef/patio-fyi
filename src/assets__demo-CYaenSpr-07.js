// assets__demo-CYaenSpr 07 — dispose
// Lines 1626-1901 of readable/assets__demo-CYaenSpr.pretty.js (statement-aligned).
function Ze(e, t, n, { gain: r = 1, roofGain: a = r } = {}) {
  if (!n?.length) return null;
  let c = 2048,
    d = document.createElement(`canvas`);
  d.width = d.height = c;
  let f = d.getContext(`2d`),
    p = Ye(n, c);
  for (let [e, t] of n.entries()) {
    let { x: n, y: r, w: i, h: a } = p[e],
      o =
        t.style === `painted`
          ? [`'Segoe UI',Arial,sans-serif`]
          : Xe[t.style] || Xe.neon,
      s = o[(t.font ?? 0) % o.length];
    (f.save(),
      f.beginPath(),
      f.rect(n, r, i, a),
      f.clip(),
      f.clearRect(n, r, i, a));
    let c = `#` + t.col.toString(16).padStart(6, `0`);
    t.style === `fascia` &&
      ((f.fillStyle = `#101214`),
      f.fillRect(n, r, i, a),
      (f.fillStyle = `#1a1d20`),
      f.fillRect(n + 4, r + 4, i - 8, a - 8));
    let l = a * 0.72;
    f.font = `bold ${l}px ${s}`;
    let u = f.measureText(t.text).width;
    (u > i - 24 && ((l *= (i - 24) / u), (f.font = `bold ${l}px ${s}`)),
      (f.textAlign = `center`),
      (f.textBaseline = `middle`));
    let d = n + i / 2,
      m = r + a / 2 + l * 0.06;
    if (t.style === `painted`) ((f.fillStyle = c), f.fillText(t.text, d, m));
    else if (t.style === `fascia`)
      ((f.shadowColor = c),
        (f.shadowBlur = 14),
        (f.fillStyle = c),
        f.fillText(t.text, d, m),
        (f.shadowBlur = 0),
        (f.fillStyle = `#ffffff`),
        (f.globalAlpha = 0.55),
        f.fillText(t.text, d, m),
        (f.globalAlpha = 1));
    else {
      ((f.lineJoin = `round`), (f.lineCap = `round`), (f.shadowColor = c));
      for (let [e, n, r] of [
        [28, l * 0.16, 0.55],
        [14, l * 0.11, 0.8],
        [4, l * 0.07, 1],
      ])
        ((f.shadowBlur = e),
          (f.strokeStyle = c),
          (f.lineWidth = n),
          (f.globalAlpha = r),
          f.strokeText(t.text, d, m));
      ((f.shadowBlur = 0),
        (f.globalAlpha = 1),
        (f.strokeStyle = `#ffffff`),
        (f.lineWidth = l * 0.035),
        f.strokeText(t.text, d, m));
    }
    f.restore();
  }
  let m = new l(d);
  ((m.colorSpace = C),
    (m.anisotropy = Math.min(8, e.renderer.capabilities.getMaxAnisotropy())),
    (m.generateMipmaps = !0),
    (m.minFilter = x));
  let h = { neon: [], fascia: [], roof: [], painted: [] };
  n.forEach((e, t) => {
    p[t] && h[e.style in h ? e.style : `neon`].push([e, p[t]]);
  });
  let g = (e) =>
      e === `painted`
        ? 0.35
        : e === `fascia`
          ? 1.5
          : e === `roof`
            ? 2.6 * a
            : 2.2 * r,
    v = [],
    y = new s(),
    b = new _(),
    S = new k();
  for (let [e, n] of Object.entries(h)) {
    if (!n.length) continue;
    let r = n.length,
      a = new Float32Array(r * 12),
      s = new Float32Array(r * 8),
      l = new Uint32Array(r * 6);
    n.forEach(([e, t], n) => {
      (b.set(0, e.ry || 0, 0),
        y.makeRotationFromEuler(b),
        y.setPosition(e.x, e.y, e.z));
      let r = e.w / 2,
        i = e.h / 2,
        o = [
          [-r, -i],
          [r, -i],
          [r, i],
          [-r, i],
        ];
      for (let e = 0; e < 4; e++)
        (S.set(o[e][0], o[e][1], 0).applyMatrix4(y),
          a.set([S.x, S.y, S.z], n * 12 + e * 3));
      let u = t.x / c,
        d = (t.x + t.w) / c,
        f = 1 - t.y / c,
        p = 1 - (t.y + t.h) / c;
      (s.set([u, p, d, p, d, f, u, f], n * 8),
        l.set(
          [n * 4, n * 4 + 1, n * 4 + 2, n * 4, n * 4 + 2, n * 4 + 3],
          n * 6,
        ));
    });
    let d = new o();
    (d.setAttribute(`position`, new i(a, 3)),
      d.setAttribute(`uv`, new i(s, 2)),
      d.setIndex(new i(l, 1)));
    let f = new A({
      map: m,
      transparent: e !== `fascia`,
      alphaTest: e === `fascia` ? 0 : 0.08,
      side: 2,
      toneMapped: !0,
      depthWrite: e === `fascia`,
    });
    f.color.setScalar(g(e));
    let p = new u(d, f);
    ((p.name = `signs-` + e),
      (p.frustumCulled = !1),
      (p.renderOrder = 3),
      t.add(p),
      v.push(p));
  }
  let w = -1,
    T = () => {
      let t = e.modules.get(`environment`)?.getAtmosphere?.()?.elevation;
      if (!Number.isFinite(t)) return 1;
      let n = Math.min(1, Math.max(0, (7 - t) / 5));
      return n * n * (3 - 2 * n);
    };
  return {
    count: n.length,
    update() {
      let e = T();
      if (!(Math.abs(e - w) < 0.01)) {
        w = e;
        for (let t of v)
          t.name !== `signs-painted` &&
            t.material.color.setScalar(0.15 + g(t.name.slice(6)) * e);
      }
    },
    dispose() {
      for (let e of v)
        (t.remove(e), e.geometry.dispose(), e.material.dispose());
      m.dispose();
    },
  };
}
function Qe(e, t, n) {
  if (!n?.length) return null;
  let r = document.createElement(`canvas`);
  r.width = r.height = 128;
  let a = r.getContext(`2d`),
    c = a.createRadialGradient(64, 64, 0, 64, 64, 64);
  for (let [e, t] of [
    [0, 1],
    [0.25, 0.55],
    [0.5, 0.22],
    [0.75, 0.06],
    [1, 0],
  ])
    c.addColorStop(e, `rgba(255,255,255,${t})`);
  ((a.fillStyle = c), a.fillRect(0, 0, 128, 128));
  let d = new l(r);
  d.colorSpace = C;
  let p = n.length,
    m = new Float32Array(p * 12),
    h = new Float32Array(p * 8),
    g = new Float32Array(p * 12),
    v = new Uint32Array(p * 6),
    y = new s(),
    b = new _(),
    x = new k(),
    S = new f();
  n.forEach((e, t) => {
    (e.flat
      ? b.set(-Math.PI / 2 + (e.tilt || 0), e.ry || 0, 0, `YXZ`)
      : b.set(0, e.ry || 0, 0, `YXZ`),
      y.makeRotationFromEuler(b),
      y.setPosition(e.x, e.y, e.z));
    let n = e.w / 2,
      r = e.h / 2;
    ([
      [-n, -r],
      [n, -r],
      [n, r],
      [-n, r],
    ].forEach(([e, n], r) => {
      (x.set(e, n, 0).applyMatrix4(y), m.set([x.x, x.y, x.z], t * 12 + r * 3));
    }),
      h.set([0, 0, 1, 0, 1, 1, 0, 1], t * 8),
      S.setHex(e.col).multiplyScalar(e.gain ?? 1));
    for (let e = 0; e < 4; e++) g.set([S.r, S.g, S.b], t * 12 + e * 3);
    v.set([t * 4, t * 4 + 1, t * 4 + 2, t * 4, t * 4 + 2, t * 4 + 3], t * 6);
  });
  let w = new o();
  (w.setAttribute(`position`, new i(m, 3)),
    w.setAttribute(`uv`, new i(h, 2)),
    w.setAttribute(`color`, new i(g, 3)),
    w.setIndex(new i(v, 1)));
  let T = new A({
      map: d,
      vertexColors: !0,
      transparent: !0,
      blending: 2,
      depthWrite: !1,
      side: 2,
      toneMapped: !0,
    }),
    E = new u(w, T);
  ((E.name = `neon-wash`),
    (E.frustumCulled = !1),
    (E.renderOrder = 1),
    t.add(E));
  let D = -1,
    O = () => {
      let t = e.modules.get(`environment`)?.getAtmosphere?.()?.elevation;
      if (!Number.isFinite(t)) return 1;
      let n = Math.min(1, Math.max(0, (7 - t) / 5));
      return n * n * (3 - 2 * n);
    };
  return {
    count: p,
    update() {
      let e = O();
      Math.abs(e - D) < 0.01 ||
        ((D = e), T.color.setScalar(e), (E.visible = e > 0.01));
    },
    dispose() {
      (t.remove(E), w.dispose(), T.dispose(), d.dispose());
    },
  };
}
function $e(e = `concrete`) {
  let t = new n(1, 1, 1),
    r = t.getAttribute(`normal`),
    i = new f(R[e]),
    a = new f(13223352),
    o = new Float32Array(r.count * 3);
  for (let e = 0; e < r.count; e++) {
    let t = r.getY(e) < -0.5;
    ((o[e * 3] = t ? a.r / i.r : 1),
      (o[e * 3 + 1] = t ? a.g / i.g : 1),
      (o[e * 3 + 2] = t ? a.b / i.b : 1));
  }
  return (t.setAttribute(`color`, new E(o, 3)), t);
}
var J = 11571042,
  et = 7032888,
  tt = 10199461;
function nt(e, t) {
  return {
    dispose() {
      (e.removeFromParent(),
        e.traverse((e) => {
          e.isMesh && e.geometry.dispose();
        }),
        e.clear());
      for (let e of t) e.dispose();
      t.length = 0;
    },
  };
}
