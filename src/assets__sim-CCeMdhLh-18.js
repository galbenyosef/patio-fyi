// assets__sim-CCeMdhLh 18 — math
// Lines 5186-5423 of readable/assets__sim-CCeMdhLh.pretty.js (statement-aligned).
function fo(e, t, n, r, i, a, o) {
  let s = e[1],
    c = 0,
    l = 0;
  for (let o = 0; o < 4; o++) {
    let o = !1;
    for (let u = 0; u < i.length; u++) {
      let d = i[u];
      if (d.solid === !1) continue;
      let f = d.movementAabb ?? d.aabb;
      if (f[4] <= e[1] + 0.001 || f[1] >= e[1] + n - 0.001) continue;
      let p = Math.min(ra, (f[3] - f[0]) * 0.5, (f[5] - f[2]) * 0.5),
        m = r + p,
        h,
        g;
      d.closestXZ
        ? (d.closestXZ(e[0], e[2], p, Ga), (h = Ga[0]), (g = Ga[1]))
        : ((h = X(e[0], f[0] + p, f[3] - p)),
          (g = X(e[2], f[2] + p, f[5] - p)));
      let _ = e[0] - h,
        v = e[2] - g,
        y = _ * _ + v * v;
      if (y >= m * m) continue;
      let b = f[4];
      if (d.floorHeight) {
        if (((b = d.floorHeight(h, g)), b <= e[1] + 0.001)) continue;
        let r = Xa(d, b);
        if (r >= e[1] + n - 0.001 || b - e[1] <= 0.5) continue;
        if (y <= 1e-10 && d.floorThickness > 0 && e[1] < r - 0.05) {
          no(d, e[0], e[2], Q);
          let i = Math.hypot(Q[0], Q[2]);
          if (i > 1e-6 && Q[1] > 1e-6) {
            let a = i / Q[1],
              s = -Q[0] / i,
              c = -Q[2] / i,
              u = Math.min((e[1] + n - r + 0.001) / a, na - l);
            if (u > 0) {
              ((l += u), (e[0] += s * u), (e[2] += c * u));
              let n = t[0] * s + t[2] * c;
              (n < 0 && ((t[0] -= s * n), (t[2] -= c * n)), (o = !0));
            }
          }
          continue;
        }
        if (y <= 1e-10 && d.exitXZ) {
          d.exitXZ(e[0], e[2], Ka);
          let n = Math.min(Ka[2] + m, na - l);
          if (n <= 0) continue;
          ((l += n), (e[0] += Ka[0] * n), (e[2] += Ka[1] * n));
          let r = t[0] * Ka[0] + t[2] * Ka[1];
          (r < 0 && ((t[0] -= Ka[0] * r), (t[2] -= Ka[1] * r)), (o = !0));
          continue;
        }
        if (y <= 1e-10) {
          let n = b - e[1];
          (n > c && (c = n), (e[1] = b), t[1] < 0 && (t[1] = 0), (o = !0));
          continue;
        }
      } else if (
        b - s <= 0.5 &&
        a &&
        (Z(i, e[0], b, e[2], n, (r + 0.01) / 0.95) || e[1] >= b - 0.001)
      ) {
        let t = b - e[1];
        (t > c && (c = t), (e[1] = b), (o = !0));
        continue;
      }
      let x, S;
      if (y > 1e-10) {
        let t = Math.sqrt(y);
        ((x = _ / t), (S = v / t), (e[0] = h + x * m), (e[2] = g + S * m));
      } else {
        if (f[1] > e[1] + 0.35) continue;
        let t = e[0] - (f[0] + p),
          n = f[3] - p - e[0],
          r = e[2] - (f[2] + p),
          i = f[5] - p - e[2],
          a = t;
        ((x = -1),
          (S = 0),
          n < a && ((a = n), (x = 1), (S = 0)),
          r < a && ((a = r), (x = 0), (S = -1)),
          i < a && ((a = i), (x = 0), (S = 1)));
        let o = Math.min(a + m, na - l);
        if (o <= 0) continue;
        ((l += o), (e[0] += x * o), (e[2] += S * o));
      }
      let C = t[0] * x + t[2] * S;
      if (C < 0) {
        let e = Math.hypot(t[0], t[2]);
        ((t[0] -= x * C), (t[2] -= S * C));
        let n = Math.hypot(t[0], t[2]);
        if (n > 0.15 && e > n) {
          let r = (n + (e - n) * ma) / n;
          ((t[0] *= r), (t[2] *= r));
        }
      }
      o = !0;
    }
    if (!o) break;
  }
  return c;
}
var po = Object.freeze([
    { f: 0.68, r: 0.32 },
    { f: -0.5, r: 0.3 },
  ]),
  mo = 0.3;
function ho(e, t, n, r, i) {
  let a = -Math.sin(n),
    o = -Math.cos(n);
  for (let n = 0; n < 3; n++) {
    let n = !1;
    for (let s of po) {
      let c = e[0] + a * s.f,
        l = e[2] + o * s.f,
        u = s.r * s.r;
      for (let d = 0; d < i.length; d++) {
        let f = i[d];
        if (f.solid === !1 || f.floorHeight) continue;
        let p = f.movementAabb ?? f.aabb;
        if (p[4] <= e[1] + mo || p[1] >= e[1] + r - 0.001) continue;
        let m = X(c, p[0], p[3]),
          h = X(l, p[2], p[5]),
          g = c - m,
          _ = l - h,
          v = g * g + _ * _;
        if (v >= u) continue;
        let y, b, x;
        if (v > 1e-8) {
          let e = Math.sqrt(v);
          ((y = g / e), (b = _ / e), (x = s.r - e));
        } else
          ((y = -a * Math.sign(s.f)), (b = -o * Math.sign(s.f)), (x = s.r));
        ((x = Math.min(x, 0.25)), (e[0] += y * x), (e[2] += b * x));
        let S = t[0] * y + t[2] * b;
        (S < 0 && ((t[0] -= y * S), (t[2] -= b * S)), (n = !0));
      }
    }
    if (!n) return;
  }
}
function go(e, t) {
  return !t || !(e > 0.05)
    ? $i
    : $i + (J * Math.sqrt(Math.max(0, 1 - e * e))) / e;
}
var _o = { y: 0, nx: 0, ny: 1, nz: 0 };
function vo(e, t, n, r, i) {
  let a = i.map,
    o = a.getHeight(e[0], e[2]);
  ((Q[0] = 0),
    (Q[1] = 1),
    (Q[2] = 0),
    a.getNormal && a.getNormal(e[0], e[2], Q));
  let s = Q[0],
    c = Q[1],
    l = Q[2];
  c > 0 || ((s = 0), (c = 1), (l = 0));
  let u = e[1] + qi + 0.001,
    d = (t + 0.01) * (t + 0.01);
  for (let t = 0; t < r.length; t++) {
    let n = r[t];
    n.overrideGround &&
      n.floorHeight &&
      qa(e[0], e[2], n.movementAabb ?? n.aabb) &&
      ((o = n.floorHeight(e[0], e[2])), (s = 0), (c = 1), (l = 0));
  }
  for (let i = 0; i < r.length; i++) {
    let a = r[i];
    if (a.overrideGround) continue;
    let f = a.movementAabb ?? a.aabb;
    if (a.floorHeight) {
      if (!qa(e[0], e[2], f)) continue;
      let t = a.floorHeight(e[0], e[2]),
        n =
          e[1] < t - 0.001 &&
          e[1] >= f[1] - 0.05 &&
          !(a.floorThickness > 0 && e[1] < Xa(a, t) - 0.05);
      t > o &&
        (t <= u || n) &&
        ((o = t), no(a, e[0], e[2], Q), (s = Q[0]), (c = Q[1]), (l = Q[2]));
    } else if (a.solid !== !1) {
      let i = f[4];
      if (i > o && i <= u && Wa(e[0], e[2], f) < d) {
        if (i > e[1] + 0.02 && !Z(r, e[0], i, e[2], n, (t + 0.01) / 0.95))
          continue;
        ((o = i), (s = 0), (c = 1), (l = 0));
      }
    }
  }
  return ((_o.y = o), (_o.nx = s), (_o.ny = c), (_o.nz = l), _o);
}
function yo(e, t, n, r, i, a) {
  let o = r * 0.9 * (r * 0.9);
  for (let s = 0; s < i.length; s++) {
    let c = i[s];
    if (c.solid === !1) continue;
    let l = c.movementAabb ?? c.aabb;
    if (c.floorHeight) {
      if (!(c.floorThickness > 0) || !qa(e[0], e[2], l, r * 0.9)) continue;
      let i = Xa(c, c.floorHeight(X(e[0], l[0], l[3]), X(e[2], l[2], l[5])));
      if (e[1] >= i - 0.05 || e[1] + n <= i) continue;
      let o = i - n;
      (o < e[1] && (e[1] = o > a ? o : a), t[1] > 0 && (t[1] = 0));
      continue;
    }
    if (
      l[1] >= e[1] + n ||
      l[1] < e[1] + n * 0.5 ||
      l[4] <= e[1] + n * 0.5 ||
      Wa(e[0], e[2], l) >= o
    )
      continue;
    let u = l[1] - n;
    (u < e[1] && (e[1] = u > a ? u : a), t[1] > 0 && (t[1] = 0));
  }
}
var bo = [0, 0, 0],
  xo = [0, 0, 0];
function So(e, t) {
  let [n, r] = Ni(e),
    i = Y[0],
    a =
      Number.isFinite(e.landingOffset) && e.landingOffset > 0
        ? [e.landingOffset, 0.5, 0.7, 0.9, -Ai]
        : [0.5, 0.7, 0.9, -Ai];
  for (let o of a) {
    let a = e.x + n * o,
      s = e.z + r * o,
      c = Ya(t, a, e.y1, s, J, i);
    ((xo[0] = a), (xo[1] = e.y1 + 0.1), (xo[2] = s));
    let l = vo(xo, J, i, c, t);
    if (!(Math.abs(l.y - e.y1) > 0.45 || !Z(c, a, l.y, s, i, 0.4)))
      return ((bo[0] = a), (bo[1] = l.y), (bo[2] = s), bo);
  }
  return null;
}
