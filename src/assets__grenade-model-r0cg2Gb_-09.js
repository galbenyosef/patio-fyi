// assets__grenade-model-r0cg2Gb_ 09 — math
// Lines 10181-10331 of readable/assets__grenade-model-r0cg2Gb_.pretty.js (statement-aligned).
function tr(e, t, r = !1) {
  let o = r === `mid`;
  r = r === !0;
  let s = r ? 10 : o ? 14 : 28,
    l = r ? 3 : o ? 4 : 10,
    u = o ? 1 : 2;
  function d(r, i, a = 0, o = 0, s = 0) {
    let c = new n(r, typeof i == `string` ? t[i] : i);
    return (
      c.position.set(a, o, s),
      (c.castShadow = c.receiveShadow = !0),
      e.add(c),
      c
    );
  }
  function f(e, t, n, i = 0, a = 0.0012, o = []) {
    let s = new ce(t.map(([e, t]) => new y(e, t)));
    for (let e of o) s.holes.push(new M(e.map(([e, t]) => new y(e, t))));
    let c = r ? 0 : Math.min(a, n * 0.3),
      f = new ie(s, {
        depth: n - 2 * c,
        bevelEnabled: c > 0,
        bevelThickness: c,
        bevelSize: c * 0.8,
        bevelSegments: r ? 1 : u,
        curveSegments: l,
        steps: 1,
      });
    return (f.translate(0, 0, i - n / 2 + c), d(f, e));
  }
  function p(e, t, n, i = 0, a = 0.003, s = []) {
    let l = (e, t) =>
        new v(
          e.map(([e, t]) => new c(e, t, 0)),
          !0,
          `centripetal`,
          0.5,
        )
          .getPoints(t)
          .map((e) => [e.x, e.y]),
      u = r ? 14 : o ? 26 : 48;
    return f(
      e,
      l(t, u),
      n,
      i,
      a,
      s.map((e) => l(e, Math.max(12, u >> 1))),
    );
  }
  function m(e, t, n, a, o, s, c, l = 0.0012) {
    if (((l = r ? 0 : Math.min(l, o / 3, s / 3, c / 3)), !l))
      return d(new i(o, s, c), e, t, n, a);
    let f = new ce(),
      p = -o / 2 + l,
      m = o / 2 - l,
      h = -s / 2 + l,
      g = s / 2 - l;
    (f.moveTo(p, h),
      f.lineTo(m, h),
      f.lineTo(m, g),
      f.lineTo(p, g),
      f.lineTo(p, h));
    let _ = new ie(f, {
      depth: c - 2 * l,
      bevelEnabled: !0,
      bevelThickness: l,
      bevelSize: l,
      bevelSegments: u,
      curveSegments: 2,
      steps: 1,
    });
    return (_.translate(0, 0, -c / 2 + l), d(_, e, t, n, a));
  }
  let h = (e, t) => (
    t === `x`
      ? (e.rotation.z = -Math.PI / 2)
      : t === `z` && (e.rotation.x = Math.PI / 2),
    e
  );
  function _(e, t, n, r, i, a, o = `x`, c = i, l = s) {
    return h(d(new I(c, i, a, Math.min(l, s)), e, t, n, r), o);
  }
  function b(e, t, n, r, i, a = `x`, o = s) {
    let c = new g(
      i.map(([e, t]) => new y(Math.max(t, 1e-5), e)),
      Math.min(o, s),
    );
    return h(d(c, e, t, n, r), a);
  }
  function x(e, t, n, i, s, c, l = `x`) {
    let u = d(new a(s, c, r ? 4 : o ? 5 : 8, r ? 10 : o ? 14 : 24), e, t, n, i);
    return (
      l === `x`
        ? (u.rotation.y = Math.PI / 2)
        : l === `y` && (u.rotation.x = Math.PI / 2),
      u
    );
  }
  function S(e, t, n, i) {
    let a = new c(...t),
      s = new c(...n),
      l = s.clone().sub(a),
      u = d(
        new I(i, i, l.length(), r ? 6 : o ? 8 : 12),
        e,
        ...a.add(s).multiplyScalar(0.5).toArray(),
      );
    return (u.quaternion.setFromUnitVectors(new c(0, 1, 0), l.normalize()), u);
  }
  function C(e, t, n, i = 0.0022, a = `steel`) {
    r || _(a, e, t, n, i, 0.0014, `z`, i, o ? 6 : 10);
  }
  function w(n, i, a, s = 0, c = `up`, l = `anod`) {
    let u = new j();
    (e.add(u),
      u.position.set(0, a, s),
      c === `down` && (u.rotation.x = Math.PI),
      c === `right` && (u.rotation.x = Math.PI / 2),
      c === `left` && (u.rotation.x = -Math.PI / 2));
    let d = tr(u, t, o ? `mid` : r),
      f = i - n;
    d.rbox(l, (n + i) / 2, 0.003, 0, f, 0.006, 0.0156, 6e-4);
    let p = Math.floor(f / 0.01);
    for (let e = 0; e < p; e++)
      d.rbox(
        l,
        n + 0.0025 + e * 0.01 + 0.0024,
        0.0074,
        0,
        0.0048,
        0.0029,
        0.0212,
        r || o ? 0 : 5e-4,
      );
    return u;
  }
  return {
    mesh: d,
    slab: f,
    sculpt: p,
    rbox: m,
    tube: _,
    lathe: b,
    ring: x,
    beam: S,
    pin: C,
    pic: w,
    SEG: s,
  };
}
