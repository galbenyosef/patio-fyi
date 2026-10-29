// assets__observatory-view-BtP2mjUr 03 — math
// Lines 888-1003 of readable/assets__observatory-view-BtP2mjUr.pretty.js (statement-aligned).
var W = (1 + Math.sqrt(5)) / 2,
  Oe = [
    -1,
    W,
    0,
    1,
    W,
    0,
    -1,
    -W,
    0,
    1,
    -W,
    0,
    0,
    -1,
    W,
    0,
    1,
    W,
    0,
    -1,
    -W,
    0,
    1,
    -W,
    W,
    0,
    -1,
    W,
    0,
    1,
    -W,
    0,
    -1,
    -W,
    0,
    1,
  ],
  ke = [
    0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10,
    2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5,
    2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1,
  ],
  Ae = (() => {
    let e = [],
      t = (e, t, n) => [
        e[0] + (t[0] - e[0]) * n,
        e[1] + (t[1] - e[1]) * n,
        e[2] + (t[2] - e[2]) * n,
      ];
    for (let n = 0; n < ke.length; n += 3) {
      let r = Oe.slice(ke[n] * 3, ke[n] * 3 + 3),
        i = Oe.slice(ke[n + 1] * 3, ke[n + 1] * 3 + 3),
        a = Oe.slice(ke[n + 2] * 3, ke[n + 2] * 3 + 3),
        o = [];
      for (let e = 0; e <= 2; e++) {
        o[e] = [];
        let n = t(r, a, e / 2),
          s = t(i, a, e / 2),
          c = 2 - e;
        for (let r = 0; r <= c; r++)
          o[e][r] = r === 0 && e === 2 ? n : t(n, s, r / c);
      }
      for (let t = 0; t < 2; t++)
        for (let n = 0; n < 2 * (2 - t) - 1; n++) {
          let r = Math.floor(n / 2);
          n % 2 == 0
            ? e.push(o[t][r + 1], o[t + 1][r], o[t][r])
            : e.push(o[t][r + 1], o[t + 1][r + 1], o[t + 1][r]);
        }
    }
    let n = new Float32Array(e.length * 3);
    return (
      e.forEach((e, t) => {
        let r = 1 / Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]),
          i = Math.fround(e[0] * r),
          a = Math.fround(e[1] * r),
          o = Math.fround(e[2] * r),
          s =
            0.78 +
            0.42 * Math.abs(Math.sin(i * 3.1 + a * 2.3) * Math.cos(o * 2.7));
        ((n[t * 3] = i * s), (n[t * 3 + 1] = a * s), (n[t * 3 + 2] = o * s));
      }),
      n
    );
  })(),
  je = (e) => ({
    x: e.x,
    y: e.y + e.h * 0.42,
    z: e.z,
    sx: e.w / 2,
    sy: e.h / 2,
    sz: e.d / 2,
    ry: e.ry,
  }),
  Me = (e, t, n) => Math.max(t, Math.min(n, e)),
  G = (e, t, n) => {
    let r = Me((n - e) / (t - e), 0, 1);
    return r * r * (3 - 2 * r);
  };
function Ne() {
  try {
    let e = new URLSearchParams(location.search),
      t = (t) => (e.has(t) ? parseFloat(e.get(t)) : void 0);
    return {
      SIZE: t(`ufoSize`),
      DISTANCE: t(`ufoDist`),
      LIFT: t(`ufoLift`),
      SHADOW: t(`ufoShadow`),
      BEAMS: e.has(`ufoBeams`) ? e.get(`ufoBeams`) !== `0` : null,
    };
  } catch {
    return null;
  }
}
