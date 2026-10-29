// assets__greywater-grounds-BnVxfPOG 03 — math
// Lines 626-966 of readable/assets__greywater-grounds-BnVxfPOG.pretty.js (statement-aligned).
function de(e, t) {
  let n = j(t ? 7834518 : 8878172),
    r = j(t ? 10991551 : 11115385),
    i = j(t ? 15331054 : 13548689);
  for (let t = 0; t < 8; t++) {
    let a = t % 2 ? 1 : -1,
      o = a * 0.105 + e.rng.range(-0.025, 0.025),
      s = -2.04 + t * 0.57,
      c = a * e.rng.range(0.05, 0.16),
      l = Math.cos(c),
      u = Math.sin(c),
      d = e.rng.range(0.58, 0.86),
      f = (e, t) => [o + e * l - t * u, s + e * u + t * l];
    (e.ellipse(...f(0, -0.012), 0.058, 0.144, i, 134, d * 0.6, c, 0.35),
      e.ellipse(...f(0, -0.049), 0.0525, 0.085, n, 102, d, c, 0.15),
      e.ellipse(...f(0.001, 0.101), 0.043, 0.04, n, 99, d, c, 0.18),
      e.ellipse(...f(0, -0.048), 0.04, 0.074, r, 109, d * 0.7, c, 0.15));
    for (let t of [-0.105, -0.073, -0.04, -0.007, 0.088, 0.114])
      for (let r of [-1, 1])
        e.line(
          ...f(r * 0.009, t),
          ...f(r * 0.038, t + 0.012),
          0.0035,
          n,
          90,
          d,
        );
  }
}
function fe(e) {
  e.field((t, n, r) => {
    let i = e.noise(t, n, 0.016),
      a = e.noise(t, n, 0.0025),
      o = A((0.0605 - Math.abs(t) + i * 0.002) / 0.0015) * I(e, n, 0.98),
      s = A((i + 0.49) * 3) * (0.77 + a * 0.18);
    r(M([213, 212, 192], a * 14), 129 + a * 2, o * s);
  });
}
function pe(e) {
  e.field((t, n, r) => {
    let i = Math.abs(t),
      a = (((n + 2.7) % 0.6) + 0.6) % 0.6,
      o = Math.min(a, 0.6 - a),
      s = e.noise(t, n, 0.01),
      c = A((0.293 - i) / 0.003),
      l = 1 - A(o / 0.005),
      u = ((((t + 0.27) % 0.06) + 0.06) % 0.06) - 0.03,
      d = ((((n + 2.67) % 0.06) + 0.06) % 0.06) - 0.03,
      f = A((1 - Math.hypot(u, d) / 0.014) / 0.28) * A((o - 0.023) / 0.005),
      p = f * ((-u / 0.014) * 12 - (d / 0.014) * 7);
    r(
      M([180, 140, 28], s * 10 - l * 37 + f * 12 + p),
      126 - l * 9 + f * 21,
      c * 0.98,
    );
  });
}
function me(e) {
  e.field((t, n, r) => {
    let i = Math.max(Math.abs(t), Math.abs(n)),
      a = A((0.318 - i) / 0.002);
    if (!a) return;
    let o = e.noise(t, n, 0.003),
      s = A((i - 0.275) / 0.008),
      c = Math.exp(-1 * ((i - 0.275) / 0.003) ** 2),
      l = +(
        Math.abs(Math.sin(((t + n) * Math.PI) / 0.026)) < 0.16 && i < 0.257
      );
    r(
      M(
        e.noise(t, n, 0.035) > 0.3 ? [64, 56, 43] : [49, 52, 49],
        o * 10 + s * 11 - c * 22 + l * 14,
      ),
      125 + s * 4 - c * 16 + l * 5,
      a,
    );
  });
  for (let t of [-0.205, 0.205])
    (e.line(-0.034, t, 0.034, t, 0.011, j(2238755), 96, 0.98),
      e.line(-0.026, t + 0.005, 0.026, t + 0.005, 0.003, j(8750970), 130, 0.7));
  for (let t of [-0.292, 0.292])
    for (let n of [-0.292, 0.292])
      e.ellipse(t, n, 0.005, 0.005, j(2501671), 108, 0.9);
}
function he(e) {
  e.field((t, n, r) => {
    let i = 0.014 + (e.noise(t, n, 0.065) + 1) * 0.026;
    r(
      M([48, 54, 29], e.noise(t, n, 0.008) * 12),
      126,
      A((i - Math.abs(t)) / 0.026) * L(e, t, n) * 0.8,
    );
  });
  for (let t = 0; t < 145; t++) {
    let t = e.rng.range(-1.2, 1.2),
      n = e.rng.range(-0.027, 0.027),
      r = e.rng.range(0.016, 0.084);
    if (e.noise(0, t, 0.09) < -0.33) continue;
    let i = j(e.rng.pick([4873257, 7569987, 5598256, 9144144]));
    e.line(
      n,
      t,
      n + e.rng.range(-r, r),
      t + e.rng.range(-r, r),
      0.0018,
      i,
      131,
      0.78,
    );
  }
}
function ge(e) {
  e.field((t, n, r) => {
    let i = (t + 0.012) / 0.255,
      a = (n + 0.012) / 0.24,
      o = Math.hypot(i, a),
      s = Math.atan2(a, i),
      c = 0.16 * Math.exp(-1 * ((s - 0.7) / 0.42) ** 2),
      l =
        0.91 +
        0.075 * Math.sin(s * 3 + 0.8) +
        0.045 * Math.sin(s * 7 - 0.4) +
        e.noise(t, n, 0.035) * 0.06 -
        c,
      u = A((l - o) / 0.19),
      d = e.noise(t, n, 0.009),
      f =
        Math.exp(-1 * ((o - l + 0.09) / 0.075) ** 2) *
        A(e.noise(t, n, 0.028) + 0.65);
    r(
      N(M([89, 78, 62], d * 8), M([131, 129, 116], d * 11), f),
      124 + d * 3 + f * 2,
      u * 0.85,
    );
  });
}
function _e(e) {
  e.field((t, n, r) => {
    let i = e.noise(t, n, 0.027),
      a = e.noise(t, n, 0.8),
      o = A((3.92 - Math.max(Math.abs(t), Math.abs(n))) / 0.035),
      s = A(
        (0.028 -
          Math.min(
            Math.abs(Math.abs(t) - 3.45),
            Math.abs(n),
            Math.abs(Math.hypot(t, n) - 1.8),
          )) /
          0.007,
      ),
      c = 0.78 + e.noise(t, n, 0.016) * 0.13,
      l = A((Math.abs(t) - 3.42) / 0.08);
    r(
      N(M([133, 62, 48], i * 8 + a * 7), M([220, 215, 191], i * 7), s * c),
      128 + i * 2,
      o * Math.max(l * 0.87, s * c),
    );
  });
}
function ve(e) {
  for (let t = 0; t < 24; t++) {
    let t = e.rng.range(-0.48, 0.48),
      n = e.rng.range(-1.3, 1.3),
      r = e.rng.range(-0.8, 0.8),
      i = j(e.rng.pick([4803913, 6643791, 6712161]));
    e.ellipse(
      t,
      n,
      e.rng.range(0.018, 0.045),
      e.rng.range(0.03, 0.095),
      i,
      127,
      e.rng.range(0.08, 0.22),
      r,
      0.6,
    );
    for (let a = 0; a < 5; a++) {
      let a = e.rng.range(-0.025, 0.025),
        o = e.rng.range(-0.04, 0.04);
      e.line(
        t + a,
        n + o,
        t + a + Math.sin(r) * 0.025,
        n + o + Math.cos(r) * 0.025,
        0.0014,
        i,
        127,
        0.08,
      );
    }
  }
}
function ye(e, t = 1) {
  if (!Object.hasOwn(E, e)) throw RangeError(`Unknown ground detail: ${e}`);
  let n = P(e, t);
  switch (e) {
    case `asphalt-patch`:
      se(n);
      break;
    case `asphalt-crack`:
      R(n);
      break;
    case `slab-crack`:
      R(n, !0);
      break;
    case `parking-line`:
      fe(n);
      break;
    case `oil-stain`:
      z(n);
      break;
    case `carpet-stain`:
      z(n, !0);
      break;
    case `moss-patch`:
      ce(n);
      break;
    case `buried-root`:
      le(n);
      break;
    case `dried-puddle`:
      ue(n);
      break;
    case `snow-trail`:
      de(n, !0);
      break;
    case `sand-trail`:
      de(n, !1);
      break;
    case `tactile-strip`:
      pe(n);
      break;
    case `utility-cover`:
      me(n);
      break;
    case `joint-weeds`:
      he(n);
      break;
    case `spalled-corner`:
      ge(n);
      break;
    case `court-markings`:
      _e(n);
      break;
    case `tile-scuffs`:
      ve(n);
      break;
    default:
      B(n, e);
  }
  return n.finish();
}
Object.freeze(
  Object.fromEntries(
    Object.entries({
      "park-lawn": [
        [`mower-band`, -2],
        [`mower-band`, 0.6],
      ],
      "woodland-floor": [
        [`moss-patch`, -2, -1, 20],
        [`moss-patch`, 1.4, 2, 110],
        [`buried-root`, -0.6, 0.4, 35],
        [`buried-root`, 2, -2, -45],
      ],
      "gravel-yard": [
        [`tyre-rut`, -0.9],
        [`tyre-rut`, 0.9],
      ],
      "worn-asphalt": [
        [`asphalt-patch`, -1.4, -0.8, -12],
        [`asphalt-crack`, 0.2, 0.6, 24],
        [`parking-line`, -2.8],
        [`parking-line`, 2.8],
        [`oil-stain`, 1.6, 1.8],
      ],
      "dirt-path": [
        [`dirt-wear`, 0],
        [`dried-puddle`, 0.6, 1.1, 15],
      ],
      "beach-sand": [
        [`damp-sand`, -2],
        [`sand-trail`, 0.9, 0, -12],
      ],
      "trampled-snow": [
        [`snow-trail`, -1.7, 0, 12],
        [`slush-rut`, 0.4],
        [`slush-rut`, 1.9],
      ],
      "flagstone-sidewalk": [
        [`tactile-strip`, -2.4],
        [`utility-cover`, 1.2, -1.2],
        [`slab-crack`, 0.6, 1.2, 20],
      ],
      "overgrown-concrete": [
        [`joint-weeds`, -2, 0.3],
        [`joint-weeds`, 0.5, 2, 90],
        [`moss-patch`, 2.8, -2.7, 40],
        [`spalled-corner`, 0, 0],
      ],
      "sports-court": [[`court-markings`, 0]],
      "checker-tile": [[`tile-scuffs`, 0.2, 0, 8]],
      "carpet-tile": [
        [`carpet-wear`, -0.7],
        [`carpet-stain`, 1.2, 1.3],
      ],
    }).map(([e, t]) => [e, [...new Set(t.map(([e]) => e))]]),
  ),
);
var be = new Map();
function xe(t, n) {
  let r = `${t}:${n}`,
    i = be.get(r);
  if (!i) {
    let a = ye(t, n),
      l = (t, n) => {
        let r = new s(t, a.size, a.size, u);
        return (
          (r.colorSpace = n),
          (r.wrapS = r.wrapT = o),
          (r.magFilter = e),
          (r.minFilter = d),
          (r.generateMipmaps = !0),
          (r.anisotropy = 8),
          (r.needsUpdate = !0),
          r
        );
      };
    ((i = { refs: 0, map: l(a.color, c), bumpMap: l(a.height, ``) }),
      be.set(r, i));
  }
  return (
    i.refs++,
    {
      ...i,
      release() {
        --i.refs === 0 && (i.map.dispose(), i.bumpMap.dispose(), be.delete(r));
      },
    }
  );
}
