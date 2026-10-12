// assets__ui-D46k2G3Q 26 — math
// Lines 10931-11014 of readable/assets__ui-D46k2G3Q.pretty.js (statement-aligned).
var Li = x(),
  Ri = 64,
  zi = 2,
  Bi = 1,
  Vi = 4,
  Hi = 8,
  Ui = 620,
  Wi = {
    0: `AUTO`,
    1: `SEMI`,
    2: `BURST`,
    auto: `AUTO`,
    semi: `SEMI`,
    burst: `BURST`,
    single: `SEMI`,
    bolt: `BOLT`,
  },
  Gi = [
    `crosshair`,
    `health`,
    `ammo`,
    `compass`,
    `match`,
    `minimap`,
    `markers`,
    `killfeed`,
    `players`,
    `messages`,
    `scoreboard`,
    `spawn`,
    `netstats`,
    `modules`,
    `vignette`,
  ],
  Ki = [
    3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 22, 24, 26, 28,
    30, 32, 34, 36, 38, 39, 44, 46, 48, 54, 56, 64, 66, 70, 72, 76, 78, 92, 96,
    104, 110, 150, 158, 184, 238, 268, 600, 690, 1240,
  ],
  qi = {
    safe: 28,
    map: 232,
    ammoW: 300,
    ammoH: 88,
    msgY: 236,
    laneY: 92,
    dbgW: 238,
  },
  Q = (e, t, n) => {
    let r = document.createElement(e);
    return (t && (r.className = t), n != null && (r.textContent = n), r);
  },
  Ji = (e, t = [`tl`, `tr`, `bl`, `br`]) => {
    for (let n of t) e.appendChild(Q(`i`, `sl-c ${n}`));
    return e;
  },
  Yi = (e, t, n) => (e < t ? t : e > n ? n : e),
  Xi = (e, t, n) => e + (t - e) * n,
  Zi = (e) =>
    W(e)
      ? `—`
      : ((e = Math.max(0, Math.floor(+e || 0))),
        `${Math.floor(e / 60)}:${String(e % 60).padStart(2, `0`)}`),
  Qi = (e) => (e === 0 ? `t0` : e === 1 ? `t1` : ``);
function $i(e) {
  let t = /^#?([0-9a-f]{6})$/i.exec(String(e || ``));
  if (!t) return `#ECEAE3`;
  let n = parseInt(t[1], 16),
    r = (n >> 16) & 255,
    i = (n >> 8) & 255,
    a = n & 255,
    o = (e) => (
      (e /= 255),
      e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4
    ),
    s = () => 0.2126 * o(r) + 0.7152 * o(i) + 0.0722 * o(a);
  for (let e = 0; e < 24 && s() < 0.31156; e++)
    ((r += (255 - r) * 0.12), (i += (255 - i) * 0.12), (a += (255 - a) * 0.12));
  let c = (e) =>
    Math.round(Yi(e, 0, 255))
      .toString(16)
      .padStart(2, `0`);
  return `#${c(r)}${c(i)}${c(a)}`;
}
