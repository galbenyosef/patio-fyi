// assets__facade-kit-DPPNwSDt 02 — fillrect
// Lines 121-369 of readable/assets__facade-kit-DPPNwSDt.pretty.js (statement-aligned).
var ie = {
  brick(e, t, n, r) {
    let i = P(r.seed),
      a = F(r.base),
      o = t / 6,
      s = t / 16,
      c = Math.max(3, t / 150);
    ((e.fillStyle = n ? L(40) : I(F(r.mortar))),
      e.fillRect(0, 0, t, t),
      n || R(e, t, P(r.seed + 50), 0.03));
    for (let t = 0; t < 16; t++) {
      let l = ((t % 2) * o) / 2;
      for (let u = -1; u <= 6; u++) {
        let d = i(),
          f = i() < r.burnt,
          p = (1 + (d - 0.5) * r.vary) * (f ? 0.62 : 1);
        ((e.fillStyle = n ? L(185 + d * 55) : I(a, p)),
          e.fillRect(u * o + l + c / 2, t * s + c / 2, o - c, s - c));
      }
    }
    n || (R(e, t, P(r.seed + 99), 0.06, 0.16), z(e, t, P(r.seed + 7), 14, 0.1));
  },
  lap(e, t, n, r) {
    let i = P(r.seed),
      a = r.rows || 8,
      o = t / a,
      s = F(r.base);
    for (let r = 0; r < a; r++) {
      let a = r * o,
        c = e.createLinearGradient(0, a, 0, a + o),
        l = 1 + (i() - 0.5) * 0.05;
      (n
        ? (c.addColorStop(0, L(50)),
          c.addColorStop(0.93, L(225)),
          c.addColorStop(1, L(40)))
        : (c.addColorStop(0, I(s, l * 0.68)),
          c.addColorStop(0.14, I(s, l * 0.96)),
          c.addColorStop(0.9, I(s, l * 1.05)),
          c.addColorStop(0.96, I(s, l * 0.8)),
          c.addColorStop(1, I(s, l * 0.5))),
        (e.fillStyle = c),
        e.fillRect(0, a, t, o));
    }
    if (!n) {
      let n = P(r.seed + 3);
      for (let r = 0; r < 220; r++)
        ((e.fillStyle = `rgba(0,0,0,${n() * 0.05})`),
          e.fillRect(n() * t, n() * t, 20 + n() * 90, 1));
      (R(e, t, n, 0.02), z(e, t, n, 8, 0.06));
    }
  },
  batten(e, t, n, r) {
    let i = F(r.base),
      a = t / 4,
      o = a * 0.16,
      s = P(r.seed);
    if (((e.fillStyle = n ? L(90) : I(i)), e.fillRect(0, 0, t, t), !n))
      for (let n = 0; n < t / 2; n++)
        ((e.fillStyle = `rgba(0,0,0,${s() * 0.07})`),
          e.fillRect(s() * t, s() * t, 1, 30 + s() * 140));
    for (let r = 0; r < 4; r++) {
      let s = r * a;
      ((e.fillStyle = n ? L(30) : I(i, 0.55)),
        e.fillRect(s + a / 2, 0, 2, t),
        (e.fillStyle = n ? L(230) : I(i, 1.1)),
        e.fillRect(s, 0, o, t),
        n ||
          ((e.fillStyle = I(i, 0.5)),
          e.fillRect(s + o, 0, 3, t),
          (e.fillStyle = I(i, 1.28)),
          e.fillRect(s, 0, 2, t)));
    }
    n || (R(e, t, s, 0.02), z(e, t, s, 10, 0.08));
  },
  shingle(e, t, n, r) {
    let i = P(r.seed),
      a = F(r.base),
      o = t / 10;
    ((e.fillStyle = n ? L(20) : I(a, 0.35)), e.fillRect(0, 0, t, t));
    for (let r = 0; r < 10; r++) {
      let s = -i() * t * 0.08;
      for (; s < t;) {
        let c = t * (0.05 + i() * 0.06),
          l = i(),
          u = (t) => {
            let i = e.createLinearGradient(0, r * o, 0, (r + 1) * o);
            if (n) (i.addColorStop(0, L(70)), i.addColorStop(1, L(235)));
            else {
              let e = 0.78 + l * 0.42;
              (i.addColorStop(0, I(a, e * 0.72)),
                i.addColorStop(1, I(a, e * 1.04)));
            }
            ((e.fillStyle = i), e.fillRect(t + 1.5, r * o, c - 3, o - 2));
          };
        (u(s), s + c > t && u(s - t), s < 0 && u(s + t), (s += c));
      }
    }
    n || (R(e, t, P(r.seed + 9), 0.05), z(e, t, P(r.seed + 4), 10, 0.12));
  },
  corrugated(e, t, n, r) {
    let i = F(r.base),
      a = P(r.seed);
    for (let r = 0; r < t; r++) {
      let a = Math.sin((r / t) * 12 * Math.PI * 2);
      ((e.fillStyle = n ? L(128 + a * 110) : I(i, 0.8 + 0.24 * a)),
        e.fillRect(r, 0, 1, t));
    }
    if (!n) {
      for (let n = 0; n < 50; n++) {
        let n = a() * t,
          r = 2 + a() * 12,
          i = a() * t,
          o = a() * t * 0.5,
          s = e.createLinearGradient(0, i, 0, i + o);
        (s.addColorStop(0, `rgba(125,62,24,${0.15 + a() * 0.3})`),
          s.addColorStop(1, `rgba(125,62,24,0)`),
          (e.fillStyle = s),
          e.fillRect(n, i, r, o));
      }
      (R(e, t, a, 0.02), z(e, t, a, 10, 0.1));
    }
  },
  stucco(e, t, n, r) {
    let i = P(r.seed),
      a = F(r.base);
    ((e.fillStyle = n ? L(128) : I(a)), e.fillRect(0, 0, t, t));
    for (let r = 0; r < t * t * 0.12; r++) {
      let r = i() > 0.5;
      ((e.fillStyle = n
        ? r
          ? `rgba(255,255,255,.25)`
          : `rgba(0,0,0,.25)`
        : r
          ? `rgba(255,255,255,.05)`
          : `rgba(0,0,0,.06)`),
        e.fillRect(i() * t, i() * t, 1 + i() * 2, 1 + i() * 2));
    }
    if ((n || z(e, t, i, r.blotch ?? 26, 0.07), r.lines)) {
      e.fillStyle = n ? L(60) : I(a, 0.8);
      for (let n = 0; n < r.lines; n++) e.fillRect(0, (n / r.lines) * t, t, 2);
    }
    r.joints &&
      ((e.fillStyle = n ? L(20) : I(a, 0.62)),
      e.fillRect(0, 0, t, 4),
      e.fillRect(0, 0, 4, t));
  },
  ashlar(e, t, n, r) {
    let i = P(r.seed),
      a = F(r.base),
      o = r.rows || 4,
      s = t / o,
      c = r.joint || 4;
    ((e.fillStyle = n ? L(20) : I(a, r.jointK || 0.72)),
      e.fillRect(0, 0, t, t));
    for (let l = 0; l < o; l++) {
      let o = -i() * t * 0.3;
      for (; o < t;) {
        let u = t * (0.24 + i() * 0.22),
          d = 0.9 + i() * 0.16,
          f = (t) => {
            ((e.fillStyle = n ? L(r.rustic ? 150 : 200) : I(a, d)),
              e.fillRect(t + c / 2, l * s + c / 2, u - c, s - c),
              r.rustic &&
                n &&
                ((e.fillStyle = L(225)),
                e.fillRect(
                  t + c * 1.6,
                  l * s + c * 1.6,
                  u - c * 3.2,
                  s - c * 3.2,
                )));
          };
        (f(o), o + u > t && f(o - t), (o += u));
      }
    }
    (R(e, t, P(r.seed + 11), n ? 0.02 : 0.05),
      n || z(e, t, P(r.seed + 12), 10, 0.08));
  },
  planks(e, t, n, r) {
    let i = P(r.seed),
      a = F(r.base),
      o = r.n || 6,
      s = t / o;
    for (let r = 0; r < o; r++) {
      if (
        ((e.fillStyle = n ? L(190) : I(a, 0.85 + i() * 0.25)),
        e.fillRect(r * s, 0, s, t),
        !n)
      )
        for (let n = 0; n < 26; n++)
          ((e.fillStyle = `rgba(0,0,0,${i() * 0.09})`),
            e.fillRect(r * s + i() * s, 0, 1, t));
      ((e.fillStyle = n ? L(20) : I(a, 0.42)),
        e.fillRect(r * s, 0, Math.max(2, t / 200), t));
    }
    n || R(e, t, P(r.seed + 5), 0.02);
  },
  boardform(e, t, n, r) {
    ie.stucco(e, t, n, { ...r, blotch: 20 });
    let i = P(r.seed + 1),
      a = t / r.n;
    for (let o = 0; o < r.n; o++)
      if (
        ((e.fillStyle = n ? `rgba(0,0,0,.5)` : I(F(r.base), 0.8, 0.8)),
        e.fillRect(o * a, 0, 2, t),
        !n)
      ) {
        ((e.fillStyle = `rgba(0,0,0,${i() * 0.05})`),
          e.fillRect(o * a, 0, a, t));
        for (let n = 0; n < 14; n++)
          ((e.fillStyle = `rgba(0,0,0,${i() * 0.05})`),
            e.fillRect(o * a + i() * a, 0, 1, t));
      }
  },
  paint(e, t, n, r) {
    ((e.fillStyle = n ? L(128) : I(F(r.base))),
      e.fillRect(0, 0, t, t),
      R(e, t, P(r.seed || 3), 0.04, n ? 0.2 : 0.05));
  },
  stripes(e, t, n, r) {
    let i = F(r.base),
      a = F(r.alt);
    for (let n = 0; n < 4; n++)
      ((e.fillStyle = I(n % 2 ? a : i)), e.fillRect((n / 4) * t, 0, t / 4, t));
    (R(e, t, P(5), 0.04, 0.08), z(e, t, P(6), 8, 0.08));
  },
  asphalt(e, t, n, r) {
    let i = P(r.seed),
      a = F(r.base);
    ((e.fillStyle = n ? L(128) : I(a)), e.fillRect(0, 0, t, t));
    for (let r = 0; r < t * t * 0.2; r++) {
      let r = i();
      ((e.fillStyle = n ? L(r * 255) : I(a, 0.7 + r * 0.7, 0.5)),
        e.fillRect(i() * t, i() * t, 1 + i() * 2, 1 + i() * 2));
    }
    n || z(e, t, i, 16, 0.1);
  },
};
function B(e, t, n, r, i = !0) {
  let a = document.createElement(`canvas`);
  ((a.width = e), (a.height = t), n(a.getContext(`2d`), e, t));
  let o = new b(a);
  return (
    (o.wrapS = o.wrapT = i ? m : c),
    (o.anisotropy = 8),
    (o.colorSpace = r ? d : ``),
    o
  );
}
