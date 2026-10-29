// assets__greywater-signs-view-D86rZqNX 04 — math
// Lines 865-1175 of readable/assets__greywater-signs-view-D86rZqNX.pretty.js (statement-aligned).
function re(e, t = null, r = 0.04) {
  let i = new w(),
    a = t?.scale ?? 1;
  t &&
    i.compose(
      N(t.pos ?? [0, 0, 0]),
      new m().setFromEuler(new v(0, t.yaw ?? 0, 0)),
      new s().setScalar(a),
    );
  let o = [],
    c = (e, t, n, i, a) => {
      let l = n.elements,
        d = [0, 1, 2].map((e) => new s(l[e * 4], l[e * 4 + 1], l[e * 4 + 2])),
        f = d.map((e) => e.length());
      d.forEach((e) => e.normalize());
      let p = N(e).applyMatrix4(n),
        m = t.map((e, t) => e * f[t]),
        h = d.findIndex((e) => Math.abs(e.y) > 1 - 1e-8),
        g = (e) => {
          let t = Math.cos(e.yaw),
            n = Math.sin(e.yaw),
            r = [1 / 0, e.y0, 1 / 0, -1 / 0, e.y1, -1 / 0];
          for (let i of [-e.hx, e.hx])
            for (let a of [-e.hz, e.hz]) {
              let o = e.x + t * i + n * a,
                s = e.z - n * i + t * a;
              ((r[0] = Math.min(r[0], o)),
                (r[3] = Math.max(r[3], o)),
                (r[2] = Math.min(r[2], s)),
                (r[5] = Math.max(r[5], s)));
            }
          o.push({
            aabb: r,
            obb: e,
            surface: i.surface,
            role: i.role,
            source: a,
          });
        };
      if (h >= 0) {
        let r = [0, 1, 2].filter((e) => e !== h),
          s = d[r[0]],
          c = Math.atan2(-s.z, s.x);
        if (Math.abs(Math.sin(c * 2)) < 1e-8) {
          let r = new u().setFromCenterAndSize(N(e), N(t)).applyMatrix4(n);
          o.push({
            aabb: [...r.min.toArray(), ...r.max.toArray()],
            surface: i.surface,
            role: i.role,
            source: a,
          });
        } else
          g({
            x: p.x,
            z: p.z,
            hx: m[r[0]] / 2,
            hz: m[r[1]] / 2,
            y0: p.y - m[h] / 2,
            y1: p.y + m[h] / 2,
            yaw: c,
            thickness: m[h],
          });
        return;
      }
      let _ = d.findIndex((e) => Math.abs(e.y) < 1e-8);
      if (_ >= 0) {
        let e = d[_],
          t = Math.atan2(-e.z, e.x),
          n = new s(Math.sin(t), 0, Math.cos(t)),
          i = [0, 1, 2].filter((e) => e !== _),
          a = [];
        for (let e of [-1, 1])
          for (let t of [-1, 1]) {
            let r = d[i[0]]
              .clone()
              .multiplyScalar((m[i[0]] / 2) * e)
              .addScaledVector(d[i[1]], (m[i[1]] / 2) * t);
            a.push([r.dot(n), r.y]);
          }
        let o = [a[0], a[1], a[3], a[2]],
          c = [...new Set(a.map((e) => e[0]))].sort((e, t) => e - t),
          l = (e) => {
            let t = [];
            for (let n = 0; n < 4; n++) {
              let r = o[n],
                i = o[(n + 1) % 4];
              e < Math.min(r[0], i[0]) - 1e-7 ||
                e > Math.max(r[0], i[0]) + 1e-7 ||
                (Math.abs(r[0] - i[0]) < 1e-8
                  ? t.push(r[1], i[1])
                  : t.push(
                      r[1] + ((i[1] - r[1]) * (e - r[0])) / (i[0] - r[0]),
                    ));
            }
            return [Math.min(...t), Math.max(...t)];
          };
        for (let e = 1; e < c.length; e++) {
          let i = c[e - 1],
            a = c[e];
          if (a - i < 1e-7) continue;
          let o = l(i),
            s = l(a),
            u = Math.abs(s[1] - s[0] - (o[1] - o[0])),
            d = Math.max(1, Math.ceil(Math.min(u, a - i) / r));
          for (let e = 0; e < d; e++) {
            let r = i + ((a - i) * e) / d,
              o = i + ((a - i) * (e + 1)) / d,
              s = l(r),
              c = l(o),
              u = (r + o) / 2;
            g({
              x: p.x + n.x * u,
              z: p.z + n.z * u,
              hx: m[_] / 2,
              hz: (o - r) / 2,
              y0: p.y + Math.min(s[0], c[0]),
              y1: p.y + Math.max(s[1], c[1]),
              yaw: t,
              ramp: {
                z0: -(o - r) / 2,
                z1: (o - r) / 2,
                y: p.y + s[1],
                rise: c[1] - s[1],
              },
              thickness: Math.max(s[1] - s[0], c[1] - c[0], 1e-6),
            });
          }
        }
        return;
      }
      if (i.beam) {
        let e = d[1],
          t = new s(e.z, 0, -e.x).normalize(),
          n = new s().crossVectors(t, e).normalize(),
          r = Math.max(1, Math.ceil(Math.max(m[0], m[2]) / 0.18)),
          o = m[0] / r,
          l = m[2] / r;
        for (let s = 0; s < r; s++)
          for (let u = 0; u < r; u++) {
            let r = p
                .clone()
                .addScaledVector(d[0], -m[0] / 2 + o * (s + 0.5))
                .addScaledVector(d[2], -m[2] / 2 + l * (u + 0.5)),
              f = new w().makeBasis(t, e, n).setPosition(r);
            c(
              [0, 0, 0],
              [
                Math.abs(d[0].dot(t)) * o + Math.abs(d[2].dot(t)) * l,
                m[1],
                Math.abs(d[0].dot(n)) * o + Math.abs(d[2].dot(n)) * l,
              ],
              f,
              { ...i, beam: !1 },
              a,
            );
          }
        return;
      }
      let v = t.map((e, t) => {
          let n = [
            Math.abs(l[t * 4] * e),
            Math.abs(l[t * 4 + 1] * e),
            Math.abs(l[t * 4 + 2] * e),
          ].sort((e, t) => t - e);
          return Math.max(1, Math.ceil((n[1] - 1e-7) / r));
        }),
        y = t.map((e, t) => e / v[t]);
      for (let r = 0; r < v[0]; r++)
        for (let s = 0; s < v[1]; s++)
          for (let c = 0; c < v[2]; c++) {
            let l = e.map((e, n) => e - t[n] / 2 + y[n] * ([r, s, c][n] + 0.5)),
              d = new u().setFromCenterAndSize(N(l), N(y)).applyMatrix4(n);
            o.push({
              aabb: [...d.min.toArray(), ...d.max.toArray()],
              surface: i.surface,
              role: i.role,
              source: a,
            });
          }
    };
  for (let [t, o] of e.entries()) {
    let e = new w().fromArray(o.matrix).premultiply(i);
    if (o.type === `box`) {
      c([0, 0, 0], o.size, e, o, t);
      continue;
    }
    if (o.type === `cylinder`) {
      let n = Math.max(1, Math.ceil((Math.abs(o.rt - o.rb) * a) / r));
      for (let i = 0; i < n; i++) {
        let s = o.rb + ((o.rt - o.rb) * i) / n,
          l = o.rb + ((o.rt - o.rb) * (i + 1)) / n,
          u = Math.max(s, l),
          d = o.height / n,
          f = -o.height / 2 + d * (i + 0.5);
        if (u * a < 0.09) {
          c([0, f, 0], [u * 2, d, u * 2], e, o, t);
          continue;
        }
        let p = Array.from({ length: o.sides }, (e, t) => [
            Math.sin((t / o.sides) * Math.PI * 2) * u,
            Math.cos((t / o.sides) * Math.PI * 2) * u,
          ]),
          m = Math.min(...p.map((e) => e[0])),
          h = Math.max(...p.map((e) => e[0])),
          g = (e, t) => {
            let n = !1,
              r = 1 / 0;
            for (let i = 0, a = p.length - 1; i < p.length; a = i++) {
              let o = p[i],
                s = p[a];
              o[1] > t != s[1] > t &&
                e < ((s[0] - o[0]) * (t - o[1])) / (s[1] - o[1]) + o[0] &&
                (n = !n);
              let c = s[0] - o[0],
                l = s[1] - o[1],
                u = Math.max(
                  0,
                  Math.min(
                    1,
                    ((e - o[0]) * c + (t - o[1]) * l) / (c * c + l * l),
                  ),
                );
              r = Math.min(r, Math.hypot(e - o[0] - u * c, t - o[1] - u * l));
            }
            return n ? 0 : r;
          },
          _ = (e, t) => {
            let n = P(P(p, 0, e, !0), 0, t, !1),
              r = Math.min(...n.map((e) => e[1])),
              i = Math.max(...n.map((e) => e[1]));
            return {
              z0: r,
              z1: i,
              error:
                Math.max(...[e, t].flatMap((e) => [r, i].map((t) => g(e, t)))) *
                a,
            };
          };
        for (let n = m; n < h - 1e-7;) {
          let i = h;
          if (_(n, i).error > r) {
            let e = n,
              t = h;
            for (let i = 0; i < 24; i++) {
              let i = (e + t) / 2;
              _(n, i).error <= r ? (e = i) : (t = i);
            }
            i = Math.max(n + 1e-7, e);
          }
          let { z0: a, z1: s } = _(n, i);
          (s - a > 1e-7 &&
            c([(n + i) / 2, f, (a + s) / 2], [i - n, d, s - a], e, o, t),
            (n = i));
        }
      }
      continue;
    }
    let s = o.points.map((e) => new d(...e)),
      l = n.triangulateShape(s, []);
    for (let n of l) {
      let i = n.map((e) => o.points[e]),
        s = [0, 1].map((e) => Math.min(...i.map((t) => t[e]))),
        l = [0, 1].map((e) => Math.max(...i.map((t) => t[e]))),
        u = l[0] - s[0] < l[1] - s[1] ? 0 : 1,
        d = Math.max(1, Math.ceil(((l[u] - s[u]) * a) / r));
      for (let n = 0; n < d; n++) {
        let r = s[u] + ((l[u] - s[u]) * n) / d,
          a = s[u] + ((l[u] - s[u]) * (n + 1)) / d,
          f = P(P(i, u, r, !0), u, a, !1);
        if (!f.length) continue;
        let p = [0, 1].map((e) => Math.min(...f.map((t) => t[e]))),
          m = [0, 1].map((e) => Math.max(...f.map((t) => t[e])));
        m[0] - p[0] > 1e-7 &&
          m[1] - p[1] > 1e-7 &&
          c(
            [(p[0] + m[0]) / 2, (p[1] + m[1]) / 2, o.depth / 2],
            [m[0] - p[0], m[1] - p[1], o.depth],
            e,
            o,
            t,
          );
      }
    }
  }
  for (let e = 0; e < 3; e++) {
    let t = new Map();
    for (let [n, r] of o.entries()) {
      let i = r.obb
        ? `obb-${n}`
        : [
            r.role,
            r.surface,
            r.source,
            ...r.aabb
              .filter((t, n) => n !== e && n !== e + 3)
              .map((e) => e.toFixed(8)),
          ].join(`|`);
      (t.has(i) || t.set(i, []), t.get(i).push(r));
    }
    o.length = 0;
    for (let n of t.values()) {
      n.sort((t, n) => t.aabb[e] - n.aabb[e]);
      let t;
      for (let r of n)
        t && r.aabb[e] <= t.aabb[e + 3] + 1e-8
          ? (t.aabb[e + 3] = Math.max(t.aabb[e + 3], r.aabb[e + 3]))
          : ((t = { ...r, aabb: [...r.aabb] }), o.push(t));
    }
  }
  return o;
}
