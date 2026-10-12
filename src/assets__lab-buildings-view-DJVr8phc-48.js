// assets__lab-buildings-view-DJVr8phc 48 — math
// Lines 15090-15144 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function Si() {
  return (
    Mr(),
    xi(),
    [
      Yr(),
      Xr(),
      Zr(),
      Qr(),
      $r(),
      ei(),
      ti(),
      ni(),
      ri(),
      ii(),
      ai(),
      oi(),
      si(),
      ci(),
      li(),
      ui(),
      di(),
      pi(),
      mi(),
      hi(),
      gi(),
      _i(),
      vi(),
      yi(),
      bi(),
    ]
  );
}
var Ci = Math.PI / 180,
  wi = `ironDark`,
  Ti = (e, t) => Array(e).fill(t),
  Ei = (e, t) => (t < e.top ? e.ys[t + 1] : e.H) - e.ys[t],
  Di = (e, t) => Math.min(e.nb - 1, Math.max(0, Math.floor(t / e.bw))),
  Oi = (e) => {
    let t = e.toNonIndexed();
    return (t.computeVertexNormals(), t);
  },
  ki = (e, t = 1) =>
    `rgb(${[(e >> 16) & 255, (e >> 8) & 255, e & 255].map((e) => Math.max(0, Math.min(255, Math.round(e * t)))).join(`,`)})`;
function Ai(e) {
  let t = e >>> 0;
  return () => (
    (t = (Math.imul(t, 1664525) + 1013904223) >>> 0),
    t / 4294967296
  );
}
var ji = [];
function Mi(e, t, n) {
  return He(e, t, n);
}
