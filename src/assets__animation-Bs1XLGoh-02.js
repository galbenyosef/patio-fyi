// assets__animation-Bs1XLGoh 02 — keep
// Lines 340-424 of readable/assets__animation-Bs1XLGoh.pretty.js (statement-aligned).
var jn = Object.freeze({
  0: { keep: 0.45, from: 0.07 },
  15: { keep: 0.45, from: 0.07 },
  14: { keep: 0.5, from: 0.07 },
  11: { keep: 0.5, from: 0.07 },
  35: { keep: 0.5, from: 0.07 },
  38: { keep: 0.5, from: 0.07 },
  1: { keep: 0.4, from: 0.07 },
  51: { keep: 0.3, from: 0.06 },
  54: { keep: 0.3, from: 0.06 },
  55: { keep: 0.45, from: 0.06 },
  56: { keep: 0.45, from: 0.05 },
  57: { keep: 0.4, from: 0.06 },
  58: { keep: 0.5, from: 0.05 },
});
function Mn(e, t, n) {
  if (!n) return;
  let r = e.attributes.position,
    i = t + n.from;
  for (let e = 0; e < r.count; e++) {
    let t = r.getZ(e);
    t > i && r.setZ(e, i + (t - i) * n.keep);
  }
  ((r.needsUpdate = !0), e.computeBoundingBox(), e.computeBoundingSphere());
}
var R = [
    0,
    1,
    2,
    3,
    4,
    11,
    12,
    13,
    14,
    15,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    ...Gt,
    ...Wt,
  ],
  Nn = 16,
  Pn = R.reduce(
    (e, t) =>
      e +
      Bt(t, `optic`).length * Bt(t, `muzzle`).length * Bt(t, `grip`).length +
      5,
    19,
  );
function Fn(e, t, n) {
  e.updateMatrixWorld(!0);
  let r = new f();
  for (let n of e.children.slice(t)) r.expandByObject(n);
  if (r.isEmpty()) return null;
  let i = n?.aim;
  return [
    Number.isFinite(i?.x) ? i.x : (r.min.x + r.max.x) / 2,
    Number.isFinite(i?.y) ? i.y : (r.min.y + r.max.y) / 2,
    r.min.z,
  ];
}
