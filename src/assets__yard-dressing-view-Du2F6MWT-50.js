// assets__yard-dressing-view-Du2F6MWT 50 — pick
// Lines 13977-14100 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function Qa(e, t) {
  let n = U(e),
    r = new D(),
    i = Yi(t),
    a = Za(
      r,
      n.pick([0.2, 0.25]),
      n.pick([13117986, 2771640, 15223450, 2787898, 1710618, 9058984, 2799816]),
      n,
    );
  (a.rotation.set(-0.12, n.range(-0.4, 0.4), 0),
    a.position.set(-0.6, 0, -0.2),
    N(
      a,
      [-0.05, 0.18, -0.03],
      [-0.2, 0.022, -0.18],
      0.007,
      H(13159632, 0.3, 0.9),
      5,
    ),
    oa(a, r));
  let o = Za(
    r,
    n.pick([0.2, 0.25]),
    n.pick([15253536, 2787994, 12069410, 3816104, 15755802, 15223450]),
    n,
  );
  if (
    (o.rotation.set(Q / 2 - 0.08, n.range(-1, 1), 0),
    o.position.set(0.7, 0, 0.35),
    oa(o, r),
    n.chance(0.7))
  ) {
    let e = aa(r, n.range(-0.4, 0.6), 0, 1, n() * $),
      t = H(n.pick(za), 0.4);
    M(e, 0.55, 0.03, 0.12, 0.012, t, 0, 0.04, 0);
    for (let t of [-0.3, 0.3])
      da(e, 0.06, 0.025, t, 0.06, 0, {
        axis: `z`,
        tyre: H(n.pick([2799816, 15253536, 15223450, 1710618]), 0.5),
        rim: H(13159632, 0.4, 0.8),
      });
    (N(e, [0.3, 0.06, 0], [0.26, 0.8, 0], 0.014, H(13159632, 0.3, 0.9), 8),
      ra(e, 0.012, 0.36, H(13159632, 0.3, 0.9), 0.26, 0.8, 0, 8));
    for (let t of [-1, 1])
      ra(e, 0.017, 0.09, H(1710618, 0.7), 0.26, 0.8, t * 0.14, 10);
    ((e.rotation.x = Q / 2 - 0.05), oa(e, r));
  }
  if (n.chance(0.8)) {
    let e = n.range(-1.2, 1.2),
      t = n.range(0.6, 1.4);
    if (n.chance(0.5)) {
      j(r, 0.11, H(16053488, 0.5), e, 0.11, t, 20);
      let n = ca(Xi),
        i = new T(0.108, 0).attributes.position;
      for (let r = 0; r < i.count; r += 5)
        n.add(e + i.getX(r), 0.11 + i.getY(r), t + i.getZ(r), 0.025, 1710618);
      n.flush(r, H(16777215, 0.5));
    } else
      j(
        r,
        0.1,
        H(n.pick([13117986, 2779848, 15253536, 9058984]), 0.45),
        e,
        0.1,
        t,
        18,
      );
  }
  if (n.chance(0.5)) {
    let e = aa(r, n.range(-1, 0), 0, 0.8, n() * $);
    (P(
      e,
      [
        [0.13, 0],
        [0.12, 0.08],
        [0.08, 0.14],
        [0, 0.16],
      ],
      H(n.pick(za), 0.3),
      0,
      0.001,
      0,
      18,
    ),
      e.scale.set(1, 1, 1.25));
  }
  return (ha(r, i, 3.4, 2.6, e + 1, 60), R(r, { keepGrass: !0 }));
}
var $a = new ae(1, 20, 8, 0, $, 0, Q / 2),
  eo = (e, t, n, r, i, a, o, s) => {
    let c = I(e, $a, t, n, r, i);
    return (c.scale.set(a, o, s), c);
  },
  to = [3828266, 4880944, 3103268, 5933626, 4885050],
  no = [6969898, 8022586, 5917218, 9075274, 4872746],
  ro = new Map();
function io(e, t, n, r, i, a = 14708762, o = 0.78) {
  let s = o.toFixed(2);
  if (!ro.has(s)) {
    let e = new ae(1, 20, 12),
      t = e.attributes.position;
    for (let e = 0; e < t.count; e++) {
      let n = t.getX(e),
        r = t.getZ(e),
        i = 1 + 0.07 * Math.cos(Math.atan2(r, n) * 10);
      t.setXYZ(e, n * i, t.getY(e) * o, r * i);
    }
    (e.computeVertexNormals(), ro.set(s, e));
  }
  let c = I(e, ro.get(s), H(a, 0.55), t, n + i * o, r);
  return (
    c.scale.setScalar(i),
    N(
      e,
      [t, n + i * o * 1.8, r],
      [t + i * 0.12, n + i * o * 2.2, r],
      i * 0.09,
      H(5925418, 0.8),
      6,
    ),
    c
  );
}
