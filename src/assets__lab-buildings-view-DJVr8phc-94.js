// assets__lab-buildings-view-DJVr8phc 94 — math
// Lines 28838-28889 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function zc() {
  return (
    is(),
    Rc(),
    [
      zs(),
      Us(),
      Ks(),
      Js(),
      Ys(),
      Xs(),
      $s(),
      tc(),
      rc(),
      ac(),
      cc(),
      lc(),
      dc(),
      pc(),
      mc(),
      gc(),
      vc(),
      xc(),
      Cc(),
      Ec(),
      kc(),
      jc(),
      Nc(),
      Fc(),
      Lc(),
    ]
  );
}
var Bc = Math.PI / 180,
  I = `ironDark`,
  Vc = (e, t) => Array(e).fill(t),
  Hc = (e, t) => new h(e, t),
  Uc = (e, t) => Math.min(e.nb - 1, Math.max(0, Math.floor(t / e.bw))),
  Wc = (e, t) => (t < e.top ? e.ys[t + 1] : e.H) - e.ys[t],
  Gc = (e, t = 1, n = 1) =>
    `rgba(${[(e >> 16) & 255, (e >> 8) & 255, e & 255].map((e) => Math.max(0, Math.min(255, Math.round(e * t)))).join(`,`)},${n})`;
function Kc(e) {
  let t = e >>> 0;
  return () => (
    (t = (Math.imul(t, 1664525) + 1013904223) >>> 0),
    t / 4294967296
  );
}
var qc = (e) => Math.abs(e.elements[0]) < 0.5;
function Jc(e, t, n) {
  return He(e, t, n);
}
