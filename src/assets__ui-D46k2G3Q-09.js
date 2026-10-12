// assets__ui-D46k2G3Q 09 — math
// Lines 3450-3670 of readable/assets__ui-D46k2G3Q.pretty.js (statement-aligned).
function Qn(e) {
  let [t, n, r, i] = Xn[e.finish],
    a = (e, t, n, r = {}) =>
      new y({ color: e, metalness: t, roughness: n, ...r }),
    o = {
      paint: a(t, 0.48, 0.36),
      dark: a(n, 0.65, 0.3),
      accent: a(r, 0.6, 0.3),
      steel: a(i, 0.82, 0.25),
      rubber: a(1513756, 0.03, 0.92),
      inset: a(791064, 0.35, 0.62),
      wood: a(e.finish === `ivory` ? 8410168 : 10051126, 0.05, 0.6),
      grain: a(5124133, 0.02, 0.85),
      glass: a(2713210, 0.65, 0.16),
      glow: a(r, 0.4, 0.2, { emissive: r, emissiveIntensity: 0.7 }),
    };
  if (typeof document < `u`) {
    let t = Number(e.id) * 673 + 17,
      n = () => (
        (t = (Math.imul(t, 1664525) + 1013904223) >>> 0),
        t / 4294967296
      );
    function r(e = !1) {
      let t = document.createElement(`canvas`);
      t.width = t.height = 256;
      let r = t.getContext(`2d`),
        i = r.createImageData(256, 256);
      for (let t = 0; t < 256; t++)
        for (let r = 0; r < 256; r++) {
          let a = (t * 256 + r) * 4,
            o = e
              ? 175 +
                24 * Math.sin(t * 0.7 + Math.sin(r * 0.028) * 2) +
                10 * Math.sin(t * 2.4 + Math.sin(r * 0.043) * 3)
              : 215 + n() * 40;
          ((i.data[a] = i.data[a + 1] = i.data[a + 2] = o),
            (i.data[a + 3] = 255));
        }
      r.putImageData(i, 0, 0);
      let a = new p(t);
      return (
        (a.wrapS = a.wrapT = O),
        (a.colorSpace = N),
        a.repeat.set(1, 1),
        a
      );
    }
    let i = r(!0),
      a = r();
    ((o.wood.map = i), (o.wood.bumpMap = i), (o.wood.bumpScale = 0.007));
    for (let e of [`paint`, `dark`, `rubber`])
      ((o[e].map = a),
        (o[e].bumpMap = a),
        (o[e].bumpScale = e === `rubber` ? 0.013 : 0.002));
  }
  return o;
}
function $n(e, t, n = !1) {
  function i(n, r, i = 0, a = 0, o = 0) {
    let s = new h(n, t[r] || r);
    return (
      s.position.set(i, a, o),
      (s.castShadow = !0),
      (s.receiveShadow = !0),
      e.add(s),
      s
    );
  }
  function a(e, t, r, a = 0) {
    let o = new ae(t.map(([e, t]) => new m(e, t)));
    if (n)
      return i(
        new ne(o, { depth: r, bevelEnabled: !1, steps: 1, curveSegments: 2 }),
        e,
        0,
        0,
        a - r / 2,
      );
    let s = Math.min(r * 0.12, 0.024);
    return i(
      new ne(o, {
        depth: r - 2 * s,
        bevelEnabled: !0,
        bevelThickness: s,
        bevelSize: s,
        bevelSegments: 2,
        steps: 1,
        curveSegments: 12,
      }),
      e,
      0,
      0,
      a - r / 2 + s,
    );
  }
  function o(e, t, a, o, s, c, l, u = 0.025) {
    if (n) return i(new r(s, c, l), e, t, a, o);
    let d = Math.min(u, s / 5, c / 5, l / 5),
      f = new ae(),
      p = t - s / 2 + d,
      m = t + s / 2 - d,
      h = a - c / 2 + d,
      g = a + c / 2 - d;
    return (
      f.moveTo(p + d, h),
      f.lineTo(m - d, h),
      f.quadraticCurveTo(m, h, m, h + d),
      f.lineTo(m, g - d),
      f.quadraticCurveTo(m, g, m - d, g),
      f.lineTo(p + d, g),
      f.quadraticCurveTo(p, g, p, g - d),
      f.lineTo(p, h + d),
      f.quadraticCurveTo(p, h, p + d, h),
      i(
        new ne(f, {
          depth: l - 2 * d,
          bevelEnabled: d > 0,
          bevelThickness: d,
          bevelSize: d,
          bevelSegments: 2,
          steps: 1,
          curveSegments: 3,
        }),
        e,
        0,
        0,
        o - l / 2 + d,
      )
    );
  }
  function c(e, t, r, a, o, c, l = `x`, u = o, d = 20) {
    let f = i(new s(u, o, c, n ? Math.min(d, 8) : d), e, t, r, a);
    return (
      l === `x` && (f.rotation.z = -Math.PI / 2),
      l === `z` && (f.rotation.x = Math.PI / 2),
      f
    );
  }
  function l(e, t, r, a, o, s, c = `x`) {
    let l = i(n ? new u(o, s, 4, 10) : new u(o, s, 8, 32), e, t, r, a);
    return (
      c === `x` && (l.rotation.y = Math.PI / 2),
      c === `y` && (l.rotation.x = Math.PI / 2),
      l
    );
  }
  function d(e, t, r, a = 0.04) {
    let o = new L(...t),
      c = new L(...r),
      l = c.clone().sub(o),
      u = i(
        new s(a, a, l.length(), n ? 6 : 10),
        e,
        ...o.add(c).multiplyScalar(0.5).toArray(),
      );
    return (u.quaternion.setFromUnitVectors(new L(0, 1, 0), l.normalize()), u);
  }
  function f(e, t, r, i = 0.042) {
    n ||
      (c(`steel`, e, t, r, i, 0.019, `z`, i, 12),
      o(
        `inset`,
        e,
        t,
        r + Math.sign(r || 1) * 0.012,
        i * 1.15,
        i * 0.21,
        0.009,
        0.002,
      ));
  }
  function g(e, t, r, i, a, s = 7) {
    if (!n)
      for (let n = 0; n < s; n++)
        o(
          `inset`,
          e - i / 2 + (i * (n + 0.5)) / s,
          t,
          r,
          (i / s) * 0.4,
          a,
          0.018,
          0.005,
        );
  }
  function _(e, t, r, a, o = 0.5, s = 0.12) {
    if (n || typeof document > `u`) return;
    let c = document.createElement(`canvas`);
    ((c.width = 512), (c.height = 128));
    let l = c.getContext(`2d`);
    ((l.fillStyle = `#dfd9c4`),
      (l.font = `bold 60px monospace`),
      (l.textAlign = `center`),
      (l.textBaseline = `middle`),
      l.fillText(e, 256, 64));
    let u = new p(c);
    u.colorSpace = N;
    let d = new y({
        map: u,
        transparent: !0,
        roughness: 0.6,
        metalness: 0.15,
        depthWrite: !1,
        polygonOffset: !0,
        polygonOffsetFactor: -2,
      }),
      f = i(new E(o, s), d, t, r, a);
    return (a < 0 && (f.rotation.y = Math.PI), f);
  }
  return {
    mesh: i,
    profile: a,
    box: o,
    cyl: c,
    ring: l,
    beam: d,
    bolt: f,
    grooves: g,
    label: _,
  };
}
