// assets__demo-BF8qQ4c6 07 — dispose
// Lines 1650-1925 of readable/assets__demo-BF8qQ4c6.pretty.js (statement-aligned).
function Qe(e, t, r, { gain: i = 1, roofGain: s = i } = {}) {
  if (!r?.length) return null;
  let l = 2048,
    u = document.createElement(`canvas`);
  u.width = u.height = l;
  let d = u.getContext(`2d`),
    p = Xe(r, l);
  for (let [e, t] of r.entries()) {
    let { x: n, y: r, w: i, h: a } = p[e],
      o =
        t.style === `painted`
          ? [`'Segoe UI',Arial,sans-serif`]
          : Ze[t.style] || Ze.neon,
      s = o[(t.font ?? 0) % o.length];
    (d.save(),
      d.beginPath(),
      d.rect(n, r, i, a),
      d.clip(),
      d.clearRect(n, r, i, a));
    let c = `#` + t.col.toString(16).padStart(6, `0`);
    t.style === `fascia` &&
      ((d.fillStyle = `#101214`),
      d.fillRect(n, r, i, a),
      (d.fillStyle = `#1a1d20`),
      d.fillRect(n + 4, r + 4, i - 8, a - 8));
    let l = a * 0.72;
    d.font = `bold ${l}px ${s}`;
    let u = d.measureText(t.text).width;
    (u > i - 24 && ((l *= (i - 24) / u), (d.font = `bold ${l}px ${s}`)),
      (d.textAlign = `center`),
      (d.textBaseline = `middle`));
    let f = n + i / 2,
      m = r + a / 2 + l * 0.06;
    if (t.style === `painted`) ((d.fillStyle = c), d.fillText(t.text, f, m));
    else if (t.style === `fascia`)
      ((d.shadowColor = c),
        (d.shadowBlur = 14),
        (d.fillStyle = c),
        d.fillText(t.text, f, m),
        (d.shadowBlur = 0),
        (d.fillStyle = `#ffffff`),
        (d.globalAlpha = 0.55),
        d.fillText(t.text, f, m),
        (d.globalAlpha = 1));
    else {
      ((d.lineJoin = `round`), (d.lineCap = `round`), (d.shadowColor = c));
      for (let [e, n, r] of [
        [28, l * 0.16, 0.55],
        [14, l * 0.11, 0.8],
        [4, l * 0.07, 1],
      ])
        ((d.shadowBlur = e),
          (d.strokeStyle = c),
          (d.lineWidth = n),
          (d.globalAlpha = r),
          d.strokeText(t.text, f, m));
      ((d.shadowBlur = 0),
        (d.globalAlpha = 1),
        (d.strokeStyle = `#ffffff`),
        (d.lineWidth = l * 0.035),
        d.strokeText(t.text, f, m));
    }
    d.restore();
  }
  let h = new k(u);
  ((h.colorSpace = m),
    (h.anisotropy = Math.min(8, e.renderer.capabilities.getMaxAnisotropy())),
    (h.generateMipmaps = !0),
    (h.minFilter = b));
  let g = { neon: [], fascia: [], roof: [], painted: [] };
  r.forEach((e, t) => {
    p[t] && g[e.style in g ? e.style : `neon`].push([e, p[t]]);
  });
  let _ = (e) =>
      e === `painted`
        ? 0.35
        : e === `fascia`
          ? 1.5
          : e === `roof`
            ? 2.6 * s
            : 2.2 * i,
    v = [],
    y = new A(),
    x = new w(),
    S = new a();
  for (let [e, r] of Object.entries(g)) {
    if (!r.length) continue;
    let i = r.length,
      a = new Float32Array(i * 12),
      s = new Float32Array(i * 8),
      u = new Uint32Array(i * 6);
    r.forEach(([e, t], n) => {
      (x.set(0, e.ry || 0, 0),
        y.makeRotationFromEuler(x),
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
      let c = t.x / l,
        d = (t.x + t.w) / l,
        f = 1 - t.y / l,
        p = 1 - (t.y + t.h) / l;
      (s.set([c, p, d, p, d, f, c, f], n * 8),
        u.set(
          [n * 4, n * 4 + 1, n * 4 + 2, n * 4, n * 4 + 2, n * 4 + 3],
          n * 6,
        ));
    });
    let d = new c();
    (d.setAttribute(`position`, new o(a, 3)),
      d.setAttribute(`uv`, new o(s, 2)),
      d.setIndex(new o(u, 1)));
    let p = new f({
      map: h,
      transparent: e !== `fascia`,
      alphaTest: e === `fascia` ? 0 : 0.08,
      side: 2,
      toneMapped: !0,
      depthWrite: e === `fascia`,
    });
    p.color.setScalar(_(e));
    let m = new n(d, p);
    ((m.name = `signs-` + e),
      (m.frustumCulled = !1),
      (m.renderOrder = 3),
      t.add(m),
      v.push(m));
  }
  let C = -1,
    T = () => {
      let t = e.modules.get(`environment`)?.getAtmosphere?.()?.elevation;
      if (!Number.isFinite(t)) return 1;
      let n = Math.min(1, Math.max(0, (7 - t) / 5));
      return n * n * (3 - 2 * n);
    };
  return {
    count: r.length,
    update() {
      let e = T();
      if (!(Math.abs(e - C) < 0.01)) {
        C = e;
        for (let t of v)
          t.name !== `signs-painted` &&
            t.material.color.setScalar(0.15 + _(t.name.slice(6)) * e);
      }
    },
    dispose() {
      for (let e of v)
        (t.remove(e), e.geometry.dispose(), e.material.dispose());
      h.dispose();
    },
  };
}
function $e(e, t, r) {
  if (!r?.length) return null;
  let i = document.createElement(`canvas`);
  i.width = i.height = 128;
  let s = i.getContext(`2d`),
    l = s.createRadialGradient(64, 64, 0, 64, 64, 64);
  for (let [e, t] of [
    [0, 1],
    [0.25, 0.55],
    [0.5, 0.22],
    [0.75, 0.06],
    [1, 0],
  ])
    l.addColorStop(e, `rgba(255,255,255,${t})`);
  ((s.fillStyle = l), s.fillRect(0, 0, 128, 128));
  let u = new k(i);
  u.colorSpace = m;
  let d = r.length,
    h = new Float32Array(d * 12),
    g = new Float32Array(d * 8),
    _ = new Float32Array(d * 12),
    v = new Uint32Array(d * 6),
    y = new A(),
    b = new w(),
    x = new a(),
    S = new p();
  r.forEach((e, t) => {
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
      (x.set(e, n, 0).applyMatrix4(y), h.set([x.x, x.y, x.z], t * 12 + r * 3));
    }),
      g.set([0, 0, 1, 0, 1, 1, 0, 1], t * 8),
      S.setHex(e.col).multiplyScalar(e.gain ?? 1));
    for (let e = 0; e < 4; e++) _.set([S.r, S.g, S.b], t * 12 + e * 3);
    v.set([t * 4, t * 4 + 1, t * 4 + 2, t * 4, t * 4 + 2, t * 4 + 3], t * 6);
  });
  let C = new c();
  (C.setAttribute(`position`, new o(h, 3)),
    C.setAttribute(`uv`, new o(g, 2)),
    C.setAttribute(`color`, new o(_, 3)),
    C.setIndex(new o(v, 1)));
  let T = new f({
      map: u,
      vertexColors: !0,
      transparent: !0,
      blending: 2,
      depthWrite: !1,
      side: 2,
      toneMapped: !0,
    }),
    E = new n(C, T);
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
    count: d,
    update() {
      let e = O();
      Math.abs(e - D) < 0.01 ||
        ((D = e), T.color.setScalar(e), (E.visible = e > 0.01));
    },
    dispose() {
      (t.remove(E), C.dispose(), T.dispose(), u.dispose());
    },
  };
}
function et(e = `concrete`) {
  let t = new r(1, 1, 1),
    n = t.getAttribute(`normal`),
    i = new p(R[e]),
    a = new p(13223352),
    o = new Float32Array(n.count * 3);
  for (let e = 0; e < n.count; e++) {
    let t = n.getY(e) < -0.5;
    ((o[e * 3] = t ? a.r / i.r : 1),
      (o[e * 3 + 1] = t ? a.g / i.g : 1),
      (o[e * 3 + 2] = t ? a.b / i.b : 1));
  }
  return (t.setAttribute(`color`, new g(o, 3)), t);
}
var J = 11571042,
  tt = 7032888,
  nt = 10199461;
function rt(e, t) {
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
