// assets__animation-DTvaGqA- 02 — min
// Lines 313-370 of readable/assets__animation-DTvaGqA-.pretty.js (statement-aligned).
var ln = [
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
    ...At,
  ],
  un = ln.reduce(
    (e, t) =>
      e +
      jt(t, `optic`).length * jt(t, `muzzle`).length * jt(t, `grip`).length +
      4,
    3,
  );
function dn(e, t, n) {
  e.updateMatrixWorld(!0);
  let r = new p();
  for (let n of e.children.slice(t)) r.expandByObject(n);
  if (r.isEmpty()) return null;
  let i = n?.aim;
  return [
    Number.isFinite(i?.x) ? i.x : (r.min.x + r.max.x) / 2,
    Number.isFinite(i?.y) ? i.y : (r.min.y + r.max.y) / 2,
    r.min.z,
  ];
}
