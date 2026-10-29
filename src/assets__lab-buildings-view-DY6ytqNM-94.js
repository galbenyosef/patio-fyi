// assets__lab-buildings-view-DY6ytqNM 94 — math
// Lines 28838-28889 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Rc() {
  return (
    rs(),
    Lc(),
    [
      Rs(),
      Hs(),
      Gs(),
      qs(),
      Js(),
      Ys(),
      Qs(),
      ec(),
      nc(),
      ic(),
      sc(),
      cc(),
      uc(),
      fc(),
      pc(),
      hc(),
      _c(),
      bc(),
      Sc(),
      Tc(),
      Oc(),
      Ac(),
      Mc(),
      Pc(),
      Ic(),
    ]
  );
}
var zc = Math.PI / 180,
  L = `ironDark`,
  Bc = (e, t) => Array(e).fill(t),
  Vc = (e, t) => new y(e, t),
  Hc = (e, t) => Math.min(e.nb - 1, Math.max(0, Math.floor(t / e.bw))),
  Uc = (e, t) => (t < e.top ? e.ys[t + 1] : e.H) - e.ys[t],
  Wc = (e, t = 1, n = 1) =>
    `rgba(${[(e >> 16) & 255, (e >> 8) & 255, e & 255].map((e) => Math.max(0, Math.min(255, Math.round(e * t)))).join(`,`)},${n})`;
function Gc(e) {
  let t = e >>> 0;
  return () => (
    (t = (Math.imul(t, 1664525) + 1013904223) >>> 0),
    t / 4294967296
  );
}
var Kc = (e) => Math.abs(e.elements[0]) < 0.5;
function qc(e, t, n) {
  return Be(e, t, n);
}
