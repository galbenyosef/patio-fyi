// assets__shaders-Sr63fOMj 02 — math
// Lines 350-682 of readable/assets__shaders-Sr63fOMj.pretty.js (statement-aligned).
function D(e) {
  let { P: t, r: n, range: r, pixel: i } = e,
    a = n() * b;
  for (let e = 0; e < t; e++)
    for (let n = 0; n < t; n++) {
      let o = (n / t) * b,
        s = (e / t) * b,
        c =
          Math.sin(o * 5 + Math.sin(s * 2) * 1.5 + a) * Math.cos(s * 4) * 5 +
          Math.sin(o * 13 + s * 3 + a) * Math.cos(s * 11 + o * 2) * 1.7,
        l = r(-3, 3);
      i(
        n,
        e,
        [222 + c * 1.3 + l, 231 + c + l, 237 + c * 0.65 + l],
        133 + c * 1.2 + l,
      );
    }
  w(e, 14e3, [16053746, 13161953, 15068144], 0.75, 0.27);
}
function O(e) {
  let { P: t, range: n, pixel: r } = e,
    i = t / 13,
    a = Array.from({ length: 169 }, () => n(-12, 12));
  for (let e = 0; e < t; e++)
    for (let o = 0; o < t; o++) {
      let t = Math.floor(o / i),
        s = Math.floor(e / i),
        c = o % i,
        l = e % i,
        u = Math.min(c, l, i - c, i - l),
        d = x((u - 0.35) / 0.95),
        f = n(-7, 7),
        p = a[s * 13 + t] + f + Math.min(2, u * 0.3);
      r(
        o,
        e,
        S([79 + f, 79 + f, 70 + f], [167 + p, 165 + p, 153 + p], d),
        93 + d * 32 + f * 0.4,
      );
    }
  w(e, 15e3, [12105388, 8488056, 13158073], 0.8, 0.35);
}
function k(e) {
  let { P: t, r: n, range: r, rgb: i, pixel: a, line: o } = e,
    s = t / 4,
    c = Array.from({ length: 16 }, () => r(-10, 10));
  for (let e = 0; e < t; e++)
    for (let n = 0; n < t; n++) {
      let i = Math.floor(n / s),
        o = Math.floor(e / s),
        l = n % s,
        u = e % s,
        d = x((Math.min(l, u, s - l, s - u) - 0.75) / 1.35),
        f = r(-8, 8),
        p = Math.sin((n / t) * b * 7) * Math.cos((e / t) * b * 5) * 3,
        m = c[o * 4 + i] + f + p;
      a(
        n,
        e,
        S([48, 53, 37], [139 + m, 142 + m, 129 + m], d),
        82 + d * 43 + f * 0.5,
      );
    }
  w(e, 17e3, [11448736, 6975842, 12764081], 0.85, 0.32);
  for (let e = 0; e < 330; e++) {
    let e = n() < 0.5,
      a = Math.floor(n() * 4) * s,
      c = e ? a + r(-1.1, 1.1) : n() * t,
      l = e ? n() * t : a + r(-1.1, 1.1);
    for (let e = 0; e < 3; e++) {
      let e = n() * b,
        t = r(1, 3.5);
      o(
        c,
        l,
        c + Math.cos(e) * t,
        l + Math.sin(e) * t,
        0.35,
        i(n() < 0.5 ? 6714184 : 4873272),
        r(129, 140),
        0.8,
      );
    }
  }
}
function A(e) {
  let { P: t, range: n, pixel: r } = e;
  for (let e = 0; e < t; e++)
    for (let i = 0; i < t; i++) {
      let t = n(-7, 7);
      r(i, e, [62 + t, 103 + t, 83 + t], 123 + t * 0.55);
    }
  w(e, 26e3, [7374707, 4021064, 5403745, 8886148], 0.55, 0.22);
}
function j(e) {
  let { P: t, range: n, r, rgb: i, pixel: a, polygon: o, line: s } = e,
    c = t / 26,
    l = Array.from({ length: 676 }, () => n(-5, 5));
  for (let e = 0; e < t; e++)
    for (let r = 0; r < t; r++) {
      let t = Math.floor(r / c),
        i = Math.floor(e / c),
        o = r % c,
        s = e % c,
        u = Math.min(o, s, c - o, c - s),
        d = x((u - 0.16) / 0.6),
        f = (t + i) % 2,
        p = n(-2.3, 2.3) + l[i * 26 + t],
        m = Math.max(0, 1 - Math.abs(u - 1.3)) * (f ? 8 : 3);
      a(
        r,
        e,
        S(
          [117, 117, 105],
          (f ? [41, 44, 42] : [220, 218, 204]).map((e) => e + p + m),
          d,
        ),
        102 + d * 24 + p * 0.25,
      );
    }
  for (let e = 0; e < 13; e++) {
    let e = Math.floor(r() * 26),
      t = Math.floor(r() * 26),
      a = e * c + 0.5,
      l = t * c + n(1, c - 4);
    (o(
      [
        [a, l],
        [a + n(0.5, 1.3), l + 0.5],
        [a + n(0.4, 1), l + 1.7],
        [a, l + 2.1],
      ],
      i(10194803),
      106,
    ),
      s(a + 0.3, l + 0.3, a + 0.8, l + 1, 0.3, i(12958884), 114, 0.7));
  }
}
function M(e) {
  let { P: t, range: n, r, rgb: i, pixel: a, ellipse: o } = e,
    s = t / 16,
    c = Array.from({ length: 256 }, () => n(-3, 3));
  for (let e = 0; e < t; e++)
    for (let r = 0; r < t; r++) {
      let t = Math.floor(r / s),
        i = Math.floor(e / s),
        o = r % s,
        l = e % s,
        u = (t + i) % 2,
        d = x(Math.min(o, l, s - o, s - l) / 0.8),
        f = u ? o : l,
        p = Math.sin(f * Math.PI * 1.6) * 4 + Math.sin(f * Math.PI * 0.7) * 2,
        m = n(-8, 8),
        h = u ? 5 : -5,
        g = c[i * 16 + t] + p + m + h;
      a(
        r,
        e,
        [78 + g, 86 + g, 90 + g].map((e) => e * (0.88 + d * 0.12)),
        122 + p * 0.55 + m * 0.4 - (1 - d) * 7,
      );
    }
  for (let e = 0; e < 28e3; e++) {
    let e = r() * t,
      a = r() * t,
      c = (Math.floor(e / s) + Math.floor(a / s)) % 2;
    o(
      e,
      a,
      c ? 0.35 : 0.85,
      c ? 0.85 : 0.35,
      i(r() < 0.5 ? 7831684 : 3818571),
      n(116, 133),
      0.26,
    );
  }
}
var N = {
  "dirt-path": T,
  "beach-sand": E,
  "trampled-snow": D,
  "flagstone-sidewalk": O,
  "overgrown-concrete": k,
  "sports-court": A,
  "checker-tile": j,
  "carpet-tile": M,
};
function P(e, t = 1, n = {}) {
  if (e === `cracked-clay`) return _(t, n);
  if (!v.includes(e)) throw Error(`No batch-2 ground texture: ${e}`);
  let r = f(e, t, C[e], { broad: 5, fine: 2, noise: 5 });
  return (N[e](r), r.finish());
}
var F = [`park-lawn`, `woodland-floor`, `gravel-yard`, `worn-asphalt`, ...v],
  I = (e) => y[e] ?? 8;
function L(e, t = 1, n = {}) {
  if (!F.includes(e)) throw Error(`No ground texture: ${e}`);
  if (e === `cracked-clay`) return _(t, n);
  if (v.includes(e)) return P(e, t);
  let r = {
      "park-lawn": 5333818,
      "woodland-floor": 4471084,
      "gravel-yard": 8946807,
      "worn-asphalt": 3948609,
    }[e],
    i = f(e, t, r, { broad: 0, fine: 0, noise: 8 }),
    {
      P: a,
      rng: o,
      r: s,
      range: c,
      rgb: l,
      clamp: u,
      pixel: d,
      ellipse: p,
      line: m,
    } = i;
  if (e === `park-lawn`) {
    for (let e = 0; e < a; e++)
      for (let t = 0; t < a; t++) {
        let n =
          5 *
          Math.sin((t / a) * 30 * Math.PI) *
          Math.cos((e / a) * 26 * Math.PI);
        d(t, e, [77 + n, 99 + n, 46 + n], 125 + n, 0.6);
      }
    for (let e = 0; e < 6e4; e++) {
      let e = s() * a,
        t = s() * a;
      m(
        e,
        t,
        e + c(-1.1, 1.1),
        t + c(1, 3.8),
        0.7,
        l(o.pick([6715463, 4874290, 7700811, 4084781])),
        c(113, 143),
        0.38,
      );
    }
  } else if (e === `woodland-floor`) {
    for (let e = 0; e < 14e3; e++) {
      let t = s() * a,
        n = s() * a,
        r = s() * 6.28;
      (p(
        t,
        n,
        c(0.5, 1.6),
        c(1, 3.4),
        l(o.pick([8086078, 6115380, 9729609, 6773051, 8678472])),
        c(118, 147),
        0.7,
        r,
      ),
        e % 3 == 0 &&
          m(
            t,
            n,
            t + Math.sin(r) * 2,
            n + Math.cos(r) * 2,
            0.35,
            l(4406568),
            126,
            0.55,
          ));
    }
    for (let e = 0; e < 5500; e++) {
      let e = s() * a,
        t = s() * a;
      m(
        e,
        t,
        e + c(1.5, 4.5),
        t + c(-3, 3),
        0.35,
        l(o.pick([10125654, 7826242, 5786672])),
        133,
        0.6,
      );
    }
  } else if (e === `gravel-yard`)
    for (let e = 0; e < 16500; e++) {
      let e = s() * a,
        t = s() * a,
        n = c(0.7, 2.5),
        r = s() * 6.28,
        i = l(o.pick([10066316, 11643541, 8093816, 12762282, 9670788])),
        d = c(0.85, 1.12),
        f = i.map((e) => e * d);
      (p(e + 0.5, t + 0.6, n + 0.5, n * 0.72 + 0.5, l(6448733), 88, 0.7, r),
        p(e, t, n, n * 0.72, f, 151, 1, r),
        p(
          e - 0.6,
          t - 0.6,
          n * 0.55,
          n * 0.36,
          f.map((e) => u(e + 12)),
          160,
          0.7,
          r,
        ));
    }
  else
    for (let e = 0; e < 43e3; e++) {
      let e = s() * a,
        t = s() * a,
        n = c(40, 95);
      p(e, t, 0.8, 0.65, [n, n + 2, n + 2], c(108, 137), 0.5);
    }
  return i.finish();
}
var R = new Map();
function z(t, n, r) {
  let i;
  if (typeof document < `u`) {
    let e = document.createElement(`canvas`);
    ((e.width = e.height = n),
      e.getContext(`2d`).putImageData(new ImageData(t, n, n), 0, 0),
      (i = new l(e)));
  } else ((i = new a(t, n, n)), (i.flipY = !0));
  return (
    (i.colorSpace = r),
    (i.wrapS = i.wrapT = s),
    (i.minFilter = c),
    (i.magFilter = e),
    (i.generateMipmaps = !0),
    (i.anisotropy = 8),
    (i.needsUpdate = !0),
    i
  );
}
