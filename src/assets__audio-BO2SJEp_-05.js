// assets__audio-BO2SJEp_ 05 — attributes
// Lines 1416-1425 of readable/assets__audio-BO2SJEp_.pretty.js (statement-aligned).
function J(e, t, n = 0) {
  let r = new p(t),
    i = e.attributes.position.count,
    a = new Float32Array(i * 3);
  for (let e = 0; e < i; e++) {
    let t = 1 - n * ((e % 7) / 7) * 0.5;
    ((a[e * 3] = r.r * t), (a[e * 3 + 1] = r.g * t), (a[e * 3 + 2] = r.b * t));
  }
  return (e.setAttribute(`color`, new s(a, 3)), e);
}
