// assets__ui-D46k2G3Q 05 — math
// Lines 1428-1602 of readable/assets__ui-D46k2G3Q.pretty.js (statement-aligned).
function hn(e = {}) {
  return {
    scale: Math.max(0.75, Math.min(1.75, Number(e.scale) || 1)),
    opacity: Math.max(0.5, Math.min(1, Number(e.opacity) || 1)),
    palette: e.palette === `accessible` ? `accessible` : `standard`,
  };
}
var gn = null;
function _n() {
  if (!gn)
    try {
      gn = hn(JSON.parse(localStorage.getItem(`salient.iff`)) ?? {});
    } catch {
      gn = { ...mn };
    }
  return gn;
}
function vn(e) {
  gn = hn({ ..._n(), ...e });
  try {
    localStorage.setItem(`salient.iff`, JSON.stringify(gn));
  } catch {}
  return gn;
}
function yn() {
  return pn[_n().palette];
}
function bn(e, t, n = !1, r = !1) {
  return e < 0 ? `neutral` : r || e !== t ? `enemy` : n ? `squad` : `ally`;
}
function xn(e, t, n, r, i) {
  let a = r.stance === 2 ? 1.05 : 0.38,
    o = 0,
    s = n - 0.3;
  for (let n = 0; n < 3; n++) {
    let c = r.pos[n] - (n === 1 ? 0 : a),
      l = r.pos[n] + (n === 1 ? i : a);
    if (Math.abs(t[n]) < 1e-8) {
      if (e[n] < c || e[n] > l) return !1;
      continue;
    }
    let u = (c - e[n]) / t[n],
      d = (l - e[n]) / t[n];
    if (
      (u > d && ([u, d] = [d, u]),
      (o = Math.max(o, u)),
      (s = Math.min(s, d)),
      o > s)
    )
      return !1;
  }
  return s >= 0;
}
var Sn = (e, t) =>
  e.x < t.x + t.w && e.x + e.w > t.x && e.y < t.y + t.h && e.y + e.h > t.y;
function Cn(e, t, n, r, i, a, o) {
  for (let s of [24, 48, 72, 100, 132])
    for (let [c, l] of [
      [1, -1],
      [1, 1],
      [-1, -1],
      [-1, 1],
      [0, -1],
      [0, 1],
    ]) {
      let u = {
        x: e + c * s - (c < 0 ? n : c === 0 ? n / 2 : 0),
        y: t + l * s - r / 2,
        w: n,
        h: r,
      };
      if (!(
        u.x < 10 ||
        u.y < 24 ||
        u.x + n > a - 10 ||
        u.y + r > o - 36 ||
        i.some((e) => Sn(u, e))
      ))
        return (
          i.push({ ...u, x: u.x - 5, y: u.y - 4, w: n + 10, h: r + 8 }),
          u
        );
    }
  return null;
}
var wn = {
  grass: [96, 118, 76],
  dirt: [128, 112, 84],
  rock: [118, 118, 112],
  sand: [166, 150, 112],
  road: [86, 84, 80],
  water: [58, 86, 110],
  snow: [190, 194, 196],
};
function Tn(e, t) {
  return Math.abs((e || 0) - (t || 0)) > 3 ? (e > t ? `▲` : `▼`) : null;
}
function En(e, t, n, r, i = !1, a = !1) {
  let o = i ? 11 : 7;
  (e.save(),
    e.beginPath(),
    e.arc(t, n, o, 0, Math.PI * 2),
    (e.fillStyle = `rgba(10,12,14,0.86)`),
    e.fill(),
    (e.lineWidth = i ? 2 : 1.5),
    (e.strokeStyle = r),
    e.stroke(),
    (e.lineCap = `round`),
    e.beginPath(),
    e.moveTo(t, n + o * 0.55),
    e.lineTo(t, n - o * 0.25),
    e.stroke(),
    (e.fillStyle = r),
    e.beginPath(),
    e.arc(t, n - o * 0.3, o * 0.16, 0, Math.PI * 2),
    e.fill());
  for (let r of [0.45, 0.75])
    (e.beginPath(),
      e.arc(t, n - o * 0.3, o * r, -Math.PI * 0.8, -Math.PI * 0.2),
      e.stroke());
  (a &&
    (e.beginPath(),
    e.arc(t, n, o + 6, 0, Math.PI * 2),
    (e.strokeStyle = `#ECEAE3`),
    (e.lineWidth = 2),
    e.stroke()),
    e.restore());
}
function Dn(e, t, n, r, i, a = !1, o = !1, s = !1) {
  let c = a ? 17 : 12,
    l = a ? 18 : 12,
    u = r + c * 0.62;
  (e.save(),
    (e.font = `800 ${c}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.lineJoin = `round`),
    (e.lineWidth = a ? 3.5 : 3),
    (e.strokeStyle = `rgba(9,11,13,0.9)`),
    e.strokeText(t.letter || `?`, n, r + 0.5),
    (e.fillStyle = i),
    e.fillText(t.letter || `?`, n, r + 0.5));
  let d = Math.max(0, Math.min(1, +t.progress || 0));
  if (t.contested || (d > 0 && d < 1)) {
    let r = t.contested
      ? 0.65 +
        0.35 *
          Math.sin(
            (typeof performance < `u` ? performance.now() : Date.now()) / 160,
          )
      : 1;
    ((e.fillStyle = `rgba(9,11,13,0.8)`),
      e.fillRect(n - l / 2 - 1, u - 1, l + 2, 4),
      (e.fillStyle = `rgba(236,234,227,0.28)`),
      e.fillRect(n - l / 2, u, l, 2),
      (e.globalAlpha = r),
      (e.fillStyle = t.contested ? `#E2553F` : `#ECEAE3`),
      e.fillRect(n - l / 2, u, t.contested ? l : l * d, 2));
  }
  (o &&
    ((e.globalAlpha = 1),
    (e.fillStyle = `#ECEAE3`),
    e.beginPath(),
    e.moveTo(n, r - c * 0.72),
    e.lineTo(n - 5, r - c * 0.72 - 6),
    e.lineTo(n + 5, r - c * 0.72 - 6),
    e.closePath(),
    e.fill()),
    s &&
      ((e.globalAlpha = 1),
      (e.strokeStyle = `#89edac`),
      (e.lineWidth = 2),
      e.strokeRect(n - c * 0.7, r - c * 0.7, c * 1.4, c * 1.4)),
    e.restore());
}
