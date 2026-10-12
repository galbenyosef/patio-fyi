// assets__sim-D8F3HPJq 19 — math
// Lines 5608-5789 of readable/assets__sim-D8F3HPJq.pretty.js (statement-aligned).
function zo(e, t, n, r, i, a, o) {
  let s = 0,
    c = 0;
  for (let o = 0; o < 4; o++) {
    let o = !1;
    for (let l = 0; l < i.length; l++) {
      let u = i[l];
      if (u.solid === !1) continue;
      let d = u.movementAabb ?? u.aabb;
      if (d[4] <= e[1] + 0.001 || d[1] >= e[1] + n - 0.001) continue;
      let f = Math.min(Ra, (d[3] - d[0]) * 0.5, (d[5] - d[2]) * 0.5),
        p = r + f,
        m = Z(e[0], d[0] + f, d[3] - f),
        h = Z(e[2], d[2] + f, d[5] - f),
        g = e[0] - m,
        _ = e[2] - h,
        v = g * g + _ * _;
      if (v >= p * p) continue;
      let y = d[4];
      if (u.floorHeight) {
        if (((y = u.floorHeight(m, h)), y <= e[1] + 0.001)) continue;
        let r = Co(u, y);
        if (r >= e[1] + n - 0.001 || y - e[1] <= 0.5) continue;
        if (v <= 1e-10 && u.floorThickness > 0 && e[1] < r - 0.05) {
          Ao(u, e[0], e[2], Q);
          let i = Math.hypot(Q[0], Q[2]);
          if (i > 1e-6 && Q[1] > 1e-6) {
            let a = i / Q[1],
              s = -Q[0] / i,
              l = -Q[2] / i,
              u = Math.min((e[1] + n - r + 0.001) / a, La - c);
            if (u > 0) {
              ((c += u), (e[0] += s * u), (e[2] += l * u));
              let n = t[0] * s + t[2] * l;
              (n < 0 && ((t[0] -= s * n), (t[2] -= l * n)), (o = !0));
            }
          }
          continue;
        }
        if (v <= 1e-10) {
          let n = y - e[1];
          (n > s && (s = n), (e[1] = y), t[1] < 0 && (t[1] = 0), (o = !0));
          continue;
        }
      } else if (
        y - e[1] <= 0.5 &&
        a &&
        (wo(i, e[0], y, e[2], n, r) || e[1] >= y - 0.001)
      ) {
        let t = y - e[1];
        (t > s && (s = t), (e[1] = y), (o = !0));
        continue;
      }
      let b, x;
      if (v > 1e-10) {
        let t = Math.sqrt(v);
        ((b = g / t), (x = _ / t), (e[0] = m + b * p), (e[2] = h + x * p));
      } else {
        if (d[1] > e[1] + 0.35) continue;
        let t = e[0] - (d[0] + f),
          n = d[3] - f - e[0],
          r = e[2] - (d[2] + f),
          i = d[5] - f - e[2],
          a = t;
        ((b = -1),
          (x = 0),
          n < a && ((a = n), (b = 1), (x = 0)),
          r < a && ((a = r), (b = 0), (x = -1)),
          i < a && ((a = i), (b = 0), (x = 1)));
        let o = Math.min(a + p, La - c);
        if (o <= 0) continue;
        ((c += o), (e[0] += b * o), (e[2] += x * o));
      }
      let S = t[0] * b + t[2] * x;
      if (S < 0) {
        let e = Math.hypot(t[0], t[2]);
        ((t[0] -= b * S), (t[2] -= x * S));
        let n = Math.hypot(t[0], t[2]);
        if (n > 0.15 && e > n) {
          let r = (n + (e - n) * Ya) / n;
          ((t[0] *= r), (t[2] *= r));
        }
      }
      o = !0;
    }
    if (!o) break;
  }
  return s;
}
function Bo(e, t) {
  return !t || !(e > 0.05)
    ? Pa
    : Pa + (Y * Math.sqrt(Math.max(0, 1 - e * e))) / e;
}
var Vo = { y: 0, nx: 0, ny: 1, nz: 0 };
function Ho(e, t, n, r, i) {
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
  let u = e[1] + Oa + 0.001,
    d = (t + 0.01) * (t + 0.01);
  for (let t = 0; t < r.length; t++) {
    let n = r[t];
    n.overrideGround &&
      n.floorHeight &&
      bo(e[0], e[2], n.movementAabb ?? n.aabb) &&
      ((o = n.floorHeight(e[0], e[2])), (s = 0), (c = 1), (l = 0));
  }
  for (let i = 0; i < r.length; i++) {
    let a = r[i];
    if (a.overrideGround) continue;
    let f = a.movementAabb ?? a.aabb;
    if (a.floorHeight) {
      if (!bo(e[0], e[2], f)) continue;
      let t = a.floorHeight(e[0], e[2]),
        n =
          e[1] < t - 0.001 && !(a.floorThickness > 0 && e[1] < Co(a, t) - 0.05);
      t > o &&
        (t <= u || n) &&
        ((o = t), Ao(a, e[0], e[2], Q), (s = Q[0]), (c = Q[1]), (l = Q[2]));
    } else if (a.solid !== !1) {
      let i = f[4];
      if (i > o && i <= u && yo(e[0], e[2], f) < d) {
        if (i > e[1] + 0.02 && !wo(r, e[0], i, e[2], n, t)) continue;
        ((o = i), (s = 0), (c = 1), (l = 0));
      }
    }
  }
  return ((Vo.y = o), (Vo.nx = s), (Vo.ny = c), (Vo.nz = l), Vo);
}
function Uo(e, t, n, r, i, a) {
  let o = r * 0.9 * (r * 0.9);
  for (let s = 0; s < i.length; s++) {
    let c = i[s];
    if (c.solid === !1) continue;
    let l = c.movementAabb ?? c.aabb;
    if (c.floorHeight) {
      if (!(c.floorThickness > 0) || !bo(e[0], e[2], l, r * 0.9)) continue;
      let i = Co(c, c.floorHeight(Z(e[0], l[0], l[3]), Z(e[2], l[2], l[5])));
      if (e[1] >= i - 0.05 || e[1] + n <= i) continue;
      let o = i - n;
      (o < e[1] && (e[1] = o > a ? o : a), t[1] > 0 && (t[1] = 0));
      continue;
    }
    if (
      l[1] >= e[1] + n ||
      l[1] < e[1] + n * 0.5 ||
      l[4] <= e[1] + n * 0.5 ||
      yo(e[0], e[2], l) >= o
    )
      continue;
    let u = l[1] - n;
    (u < e[1] && (e[1] = u > a ? u : a), t[1] > 0 && (t[1] = 0));
  }
}
var Wo = [0, 0, 0],
  Go = [0, 0, 0];
function Ko(e, t) {
  let [n, r] = ma(e),
    i = X[0],
    a =
      Number.isFinite(e.landingOffset) && e.landingOffset > 0
        ? [e.landingOffset, 0.5, 0.7, 0.9, -da]
        : [0.5, 0.7, 0.9, -da];
  for (let o of a) {
    let a = e.x + n * o,
      s = e.z + r * o,
      c = So(t, a, e.y1, s, Y, i);
    ((Go[0] = a), (Go[1] = e.y1 + 0.1), (Go[2] = s));
    let l = Ho(Go, Y, i, c, t);
    if (!(Math.abs(l.y - e.y1) > 0.45 || !wo(c, a, l.y, s, i, 0.4)))
      return ((Wo[0] = a), (Wo[1] = l.y), (Wo[2] = s), Wo);
  }
  return null;
}
