// assets__sim-Dw8jCQAI 03 — math
// Lines 559-588 of readable/assets__sim-Dw8jCQAI.pretty.js (statement-aligned).
function j(e, t, n = null) {
  let r = [],
    i = (t * 2.399963229728653) % (Math.PI * 2);
  if (Number.isFinite(n)) {
    r.push([e[0], e[1], e[2]]);
    for (let t = 4; t <= n + 1e-6; t += 4) {
      let n = Math.max(8, Math.round((Math.PI * 2 * t) / 3));
      for (let a = 0; a < n; a++) {
        let o = i + (a * Math.PI * 2) / n;
        r.push([e[0] + Math.cos(o) * t, e[1], e[2] + Math.sin(o) * t]);
      }
    }
    return r;
  }
  for (let t = 0; t < 11; t++) {
    let n = t === 0 ? 0 : 5 + t * 10,
      a = t === 0 ? 1 : 20;
    for (let t = 0; t < a; t++) {
      let o = i + (t * Math.PI * 2) / a;
      r.push([e[0] + Math.cos(o) * n, e[1], e[2] + Math.sin(o) * n]);
    }
  }
  return r;
}
function M(e) {
  return Math.atan2(e[0], e[2]) + Math.PI;
}
function N(e = p.respawnSeconds) {
  return Math.max(1, Math.ceil(e * 60));
}
