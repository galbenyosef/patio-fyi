// assets__ui-hhE6L1u7 11 — math
// Lines 3588-3808 of readable/assets__ui-hhE6L1u7.pretty.js (statement-aligned).
function _r(e) {
  let [t, n, r, i] = hr[e.finish],
    o = (e, t, n, r = {}) =>
      new a({ color: e, metalness: t, roughness: n, ...r }),
    s = {
      paint: o(t, 0.48, 0.36),
      dark: o(n, 0.65, 0.3),
      accent: o(r, 0.6, 0.3),
      steel: o(i, 0.82, 0.25),
      rubber: o(1513756, 0.03, 0.92),
      inset: o(791064, 0.35, 0.62),
      wood: o(e.finish === `ivory` ? 8410168 : 10051126, 0.05, 0.6),
      grain: o(5124133, 0.02, 0.85),
      glass: o(2713210, 0.65, 0.16),
      glow: o(r, 0.4, 0.2, { emissive: r, emissiveIntensity: 0.7 }),
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
      let a = new ie(t);
      return (
        (a.wrapS = a.wrapT = T),
        (a.colorSpace = x),
        a.repeat.set(1, 1),
        a
      );
    }
    let i = r(!0),
      a = r();
    ((s.wood.map = i), (s.wood.bumpMap = i), (s.wood.bumpScale = 0.007));
    for (let e of [`paint`, `dark`, `rubber`])
      ((s[e].map = a),
        (s[e].bumpMap = a),
        (s[e].bumpScale = e === `rubber` ? 0.013 : 0.002));
  }
  return s;
}
function vr(t, n, s = !1) {
  function c(r, i, a = 0, o = 0, s = 0) {
    let c = new e(r, n[i] || i);
    return (
      c.position.set(a, o, s),
      (c.castShadow = !0),
      (c.receiveShadow = !0),
      t.add(c),
      c
    );
  }
  function l(e, t, n, r = 0) {
    let i = new z(t.map(([e, t]) => new h(e, t)));
    if (s)
      return c(
        new te(i, { depth: n, bevelEnabled: !1, steps: 1, curveSegments: 2 }),
        e,
        0,
        0,
        r - n / 2,
      );
    let a = Math.min(n * 0.12, 0.024);
    return c(
      new te(i, {
        depth: n - 2 * a,
        bevelEnabled: !0,
        bevelThickness: a,
        bevelSize: a,
        bevelSegments: 2,
        steps: 1,
        curveSegments: 12,
      }),
      e,
      0,
      0,
      r - n / 2 + a,
    );
  }
  function u(e, t, n, i, a, o, l, u = 0.025) {
    if (s) return c(new r(a, o, l), e, t, n, i);
    let d = Math.min(u, a / 5, o / 5, l / 5),
      f = new z(),
      p = t - a / 2 + d,
      m = t + a / 2 - d,
      h = n - o / 2 + d,
      g = n + o / 2 - d;
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
      c(
        new te(f, {
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
        i - l / 2 + d,
      )
    );
  }
  function d(e, t, n, r, i, a, o = `x`, l = i, u = 20) {
    let d = c(new P(l, i, a, s ? Math.min(u, 8) : u), e, t, n, r);
    return (
      o === `x` && (d.rotation.z = -Math.PI / 2),
      o === `z` && (d.rotation.x = Math.PI / 2),
      d
    );
  }
  function f(e, t, n, r, a, o, l = `x`) {
    let u = c(s ? new i(a, o, 4, 10) : new i(a, o, 8, 32), e, t, n, r);
    return (
      l === `x` && (u.rotation.y = Math.PI / 2),
      l === `y` && (u.rotation.x = Math.PI / 2),
      u
    );
  }
  function p(e, t, n, r = 0.04) {
    let i = new o(...t),
      a = new o(...n),
      l = a.clone().sub(i),
      u = c(
        new P(r, r, l.length(), s ? 6 : 10),
        e,
        ...i.add(a).multiplyScalar(0.5).toArray(),
      );
    return (u.quaternion.setFromUnitVectors(new o(0, 1, 0), l.normalize()), u);
  }
  function m(e, t, n, r = 0.042) {
    s ||
      (d(`steel`, e, t, n, r, 0.019, `z`, r, 12),
      u(
        `inset`,
        e,
        t,
        n + Math.sign(n || 1) * 0.012,
        r * 1.15,
        r * 0.21,
        0.009,
        0.002,
      ));
  }
  function g(e, t, n, r, i, a = 7) {
    if (!s)
      for (let o = 0; o < a; o++)
        u(
          `inset`,
          e - r / 2 + (r * (o + 0.5)) / a,
          t,
          n,
          (r / a) * 0.4,
          i,
          0.018,
          0.005,
        );
  }
  function _(e, t, n, r, i = 0.5, o = 0.12) {
    if (s || typeof document > `u`) return;
    let l = document.createElement(`canvas`);
    ((l.width = 512), (l.height = 128));
    let u = l.getContext(`2d`);
    ((u.fillStyle = `#dfd9c4`),
      (u.font = `bold 60px monospace`),
      (u.textAlign = `center`),
      (u.textBaseline = `middle`),
      u.fillText(e, 256, 64));
    let d = new ie(l);
    d.colorSpace = x;
    let f = new a({
        map: d,
        transparent: !0,
        roughness: 0.6,
        metalness: 0.15,
        depthWrite: !1,
        polygonOffset: !0,
        polygonOffsetFactor: -2,
      }),
      p = c(new k(i, o), f, t, n, r);
    return (r < 0 && (p.rotation.y = Math.PI), p);
  }
  return {
    mesh: c,
    profile: l,
    box: u,
    cyl: d,
    ring: f,
    beam: p,
    bolt: m,
    grooves: g,
    label: _,
  };
}
