// assets__cube-soldier-DMHrHkZL 18 — quaternion
// Lines 5306-5442 of readable/assets__cube-soldier-DMHrHkZL.pretty.js (statement-aligned).
function to() {
  let e = (e, t, n = 0, r = 0, i = 0, a = `XYZ`) => {
      let o = new m();
      return (
        (o.name = e),
        o.position.set(n, r, i),
        (o.rotation.order = a),
        t?.add(o),
        o
      );
    },
    t = e(`root`, null, 0, 0, 0, `YXZ`),
    n = e(`hips`, t, 0, ye, 0, `YXZ`),
    r = e(`torso`, n, 0, 0, 0, `YXZ`);
  r.scale.setScalar(be);
  let i = e(`head`, r, 0, G.neck, 0.01, `YXZ`);
  i.scale.setScalar(1 / be);
  let a = e(`armL`, r, -he, me, 0),
    o = e(`armR`, r, he, me, 0),
    s = e(`foreL`, a, 0, -ve, 0),
    c = e(`foreR`, o, 0, -ve, 0),
    l = e(`legL`, n, -ge, 0, 0),
    u = e(`legR`, n, ge, 0, 0),
    d = e(`shinL`, l, 0, -fe, 0),
    f = e(`shinR`, u, 0, -fe, 0),
    p = e(`footL`, d, 0, -pe, 0),
    h = e(`footR`, f, 0, -pe, 0),
    g = e(`weapon`, r, 0, 0, 0, `YXZ`);
  return (
    g.scale.setScalar(Ce),
    {
      root: t,
      hips: n,
      torso: r,
      head: i,
      armL: a,
      armR: o,
      foreL: s,
      foreR: c,
      legL: l,
      legR: u,
      shinL: d,
      shinR: f,
      footL: p,
      footR: h,
      weapon: g,
    }
  );
}
var no = new o(0, -0.1, -0.3),
  ro = new o(0, -0.04, -0.62),
  io = new o(-0.02, -0.14, -0.46),
  ao = new o(-0.14, -0.4, -0.3),
  oo = new o(),
  so = new o(),
  co = new o(),
  lo = new o(),
  uo = new _(),
  fo = new _(),
  po = {
    wpnX: 0.05,
    wpnY: 0.28,
    wpnZ: -0.12,
    wpnPitch: -0.55,
    wpnYaw: 0.35,
    wpnRoll: 0.1,
  },
  mo = {
    wpnX: 0.02,
    wpnY: 0.22,
    wpnZ: -0.14,
    wpnPitch: -0.9,
    wpnYaw: 0.5,
    wpnRoll: 0.3,
  },
  ho = {
    wpnX: 0.24,
    wpnY: 0.6,
    wpnZ: -0.19,
    wpnPitch: -0.7,
    wpnYaw: 0.95,
    wpnRoll: 0.2,
  },
  go = 0.3,
  _o = new o(0, -1, 0),
  vo = {
    t: new o(),
    ax: new o(),
    pole: new o(),
    el: new o(),
    lo: new o(),
    q: new _(),
  },
  yo = new _().setFromEuler(new C(0.12, 0.12, -0.35, `YXZ`)),
  bo = new o(),
  xo = new m(),
  So = new _(),
  Co = new _(),
  wo = new _();
function To(e, t) {
  t.w < 0.001 ||
    (Co.copy(e.armR.quaternion),
    wo.copy(e.foreR.quaternion),
    Oo(e.armR, e.foreR, bo.set(t.x, t.y, t.z), xo),
    e.armR.quaternion.slerpQuaternions(Co, e.armR.quaternion.clone(), t.w),
    e.foreR.quaternion.slerpQuaternions(wo, e.foreR.quaternion.clone(), t.w));
}
function Eo(e, t) {
  return t
    .multiplyQuaternions(e.armR.quaternion, e.foreR.quaternion)
    .invert()
    .multiply(yo);
}
var Do = { pos: new o(0, -0.3, -0.01), scale: 1.5 / be };
function Oo(e, t, n, r, i = 0) {
  let { t: a, ax: o, pole: s, el: c, lo: l, q: u } = vo,
    d = e.position.x < 0 ? -1 : 1;
  (a.copy(n).applyMatrix4(r.matrix), o.subVectors(a, e.position));
  let f = Math.max(0.001, Math.min(go * 2 - 0.001, o.length()));
  (o.normalize(),
    s
      .set(d * (0.35 + 0.55 * i), -1 + 0.45 * i, 0.15)
      .addScaledVector(o, -s.dot(o))
      .normalize(),
    c
      .copy(o)
      .multiplyScalar(f / 2)
      .addScaledVector(s, Math.sqrt(go * go - (f * f) / 4)),
    e.quaternion.setFromUnitVectors(_o, l.copy(c).normalize()),
    l
      .copy(o)
      .multiplyScalar(f)
      .sub(c)
      .normalize()
      .applyQuaternion(u.copy(e.quaternion).invert()),
    t.quaternion.setFromUnitVectors(_o, l));
}
