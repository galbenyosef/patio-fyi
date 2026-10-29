// assets__lab-buildings-view-DY6ytqNM 48 — math
// Lines 15090-15144 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function xi() {
  return (
    jr(),
    bi(),
    [
      Jr(),
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
      fi(),
      pi(),
      mi(),
      hi(),
      gi(),
      _i(),
      vi(),
      yi(),
    ]
  );
}
var Si = Math.PI / 180,
  Ci = `ironDark`,
  wi = (e, t) => Array(e).fill(t),
  Ti = (e, t) => (t < e.top ? e.ys[t + 1] : e.H) - e.ys[t],
  Ei = (e, t) => Math.min(e.nb - 1, Math.max(0, Math.floor(t / e.bw))),
  Di = (e) => {
    let t = e.toNonIndexed();
    return (t.computeVertexNormals(), t);
  },
  Oi = (e, t = 1) =>
    `rgb(${[(e >> 16) & 255, (e >> 8) & 255, e & 255].map((e) => Math.max(0, Math.min(255, Math.round(e * t)))).join(`,`)})`;
function ki(e) {
  let t = e >>> 0;
  return () => (
    (t = (Math.imul(t, 1664525) + 1013904223) >>> 0),
    t / 4294967296
  );
}
var Ai = [];
function ji(e, t, n) {
  return Be(e, t, n);
}
