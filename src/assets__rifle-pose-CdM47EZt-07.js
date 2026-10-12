// assets__rifle-pose-CdM47EZt 07 — math
// Lines 9720-9870 of readable/assets__rifle-pose-CdM47EZt.pretty.js (statement-aligned).
function dn(e, n, a = !1) {
  let o = a === `mid`;
  a = a === !0;
  let c = a ? 10 : o ? 14 : 28,
    l = a ? 3 : o ? 4 : 10,
    d = o ? 1 : 2;
  function f(t, r, i = 0, a = 0, o = 0) {
    let s = new _(t, typeof r == `string` ? n[r] : r);
    return (
      s.position.set(i, a, o),
      (s.castShadow = s.receiveShadow = !0),
      e.add(s),
      s
    );
  }
  function p(e, t, n, r = 0, i = 0.0012, o = []) {
    let s = new re(t.map(([e, t]) => new g(e, t)));
    for (let e of o) s.holes.push(new m(e.map(([e, t]) => new g(e, t))));
    let c = a ? 0 : Math.min(i, n * 0.3),
      u = new F(s, {
        depth: n - 2 * c,
        bevelEnabled: c > 0,
        bevelThickness: c,
        bevelSize: c * 0.8,
        bevelSegments: a ? 1 : d,
        curveSegments: l,
        steps: 1,
      });
    return (u.translate(0, 0, r - n / 2 + c), f(u, e));
  }
  function h(e, n, r, i = 0, s = 0.003, c = []) {
    let l = (e, n) =>
        new t(
          e.map(([e, t]) => new L(e, t, 0)),
          !0,
          `centripetal`,
          0.5,
        )
          .getPoints(n)
          .map((e) => [e.x, e.y]),
      u = a ? 14 : o ? 26 : 48;
    return p(
      e,
      l(n, u),
      r,
      i,
      s,
      c.map((e) => l(e, Math.max(12, u >> 1))),
    );
  }
  function v(e, t, n, r, o, s, c, l = 0.0012) {
    if (((l = a ? 0 : Math.min(l, o / 3, s / 3, c / 3)), !l))
      return f(new i(o, s, c), e, t, n, r);
    let u = new re(),
      p = -o / 2 + l,
      m = o / 2 - l,
      h = -s / 2 + l,
      g = s / 2 - l;
    (u.moveTo(p, h),
      u.lineTo(m, h),
      u.lineTo(m, g),
      u.lineTo(p, g),
      u.lineTo(p, h));
    let _ = new F(u, {
      depth: c - 2 * l,
      bevelEnabled: !0,
      bevelThickness: l,
      bevelSize: l,
      bevelSegments: d,
      curveSegments: 2,
      steps: 1,
    });
    return (_.translate(0, 0, -c / 2 + l), f(_, e, t, n, r));
  }
  let y = (e, t) => (
    t === `x`
      ? (e.rotation.z = -Math.PI / 2)
      : t === `z` && (e.rotation.x = Math.PI / 2),
    e
  );
  function b(e, t, n, r, i, a, o = `x`, l = i, u = c) {
    return y(f(new s(l, i, a, Math.min(u, c)), e, t, n, r), o);
  }
  function x(e, t, n, i, a, o = `x`, s = c) {
    let l = new r(
      a.map(([e, t]) => new g(Math.max(t, 1e-5), e)),
      Math.min(s, c),
    );
    return y(f(l, e, t, n, i), o);
  }
  function S(e, t, n, r, i, s, c = `x`) {
    let l = f(new u(i, s, a ? 4 : o ? 5 : 8, a ? 10 : o ? 14 : 24), e, t, n, r);
    return (
      c === `x`
        ? (l.rotation.y = Math.PI / 2)
        : c === `y` && (l.rotation.x = Math.PI / 2),
      l
    );
  }
  function C(e, t, n, r) {
    let i = new L(...t),
      c = new L(...n),
      l = c.clone().sub(i),
      u = f(
        new s(r, r, l.length(), a ? 6 : o ? 8 : 12),
        e,
        ...i.add(c).multiplyScalar(0.5).toArray(),
      );
    return (u.quaternion.setFromUnitVectors(new L(0, 1, 0), l.normalize()), u);
  }
  function w(e, t, n, r = 0.0022, i = `steel`) {
    a || b(i, e, t, n, r, 0.0014, `z`, r, o ? 6 : 10);
  }
  function T(t, r, i, s = 0, c = `up`, l = `anod`) {
    let u = new M();
    (e.add(u),
      u.position.set(0, i, s),
      c === `down` && (u.rotation.x = Math.PI),
      c === `right` && (u.rotation.x = Math.PI / 2),
      c === `left` && (u.rotation.x = -Math.PI / 2));
    let d = dn(u, n, o ? `mid` : a),
      f = r - t;
    d.rbox(l, (t + r) / 2, 0.003, 0, f, 0.006, 0.0156, 6e-4);
    let p = Math.floor(f / 0.01);
    for (let e = 0; e < p; e++)
      d.rbox(
        l,
        t + 0.0025 + e * 0.01 + 0.0024,
        0.0074,
        0,
        0.0048,
        0.0029,
        0.0212,
        a || o ? 0 : 5e-4,
      );
    return u;
  }
  return {
    mesh: f,
    slab: p,
    sculpt: h,
    rbox: v,
    tube: b,
    lathe: x,
    ring: S,
    beam: C,
    pin: w,
    pic: T,
    SEG: c,
  };
}
