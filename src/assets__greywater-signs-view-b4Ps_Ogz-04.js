// assets__greywater-signs-view-b4Ps_Ogz 04 — math
// Lines 865-1175 of readable/assets__greywater-signs-view-b4Ps_Ogz.pretty.js (statement-aligned).
function re(e, t = null, n = 0.04) {
  let r = new a(),
    i = t?.scale ?? 1;
  t &&
    r.compose(
      N(t.pos ?? [0, 0, 0]),
      new p().setFromEuler(new g(0, t.yaw ?? 0, 0)),
      new w().setScalar(i),
    );
  let o = [],
    c = (e, t, r, i, l) => {
      let u = r.elements,
        d = [0, 1, 2].map((e) => new w(u[e * 4], u[e * 4 + 1], u[e * 4 + 2])),
        f = d.map((e) => e.length());
      d.forEach((e) => e.normalize());
      let p = N(e).applyMatrix4(r),
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
            source: l,
          });
        };
      if (h >= 0) {
        let n = [0, 1, 2].filter((e) => e !== h),
          a = d[n[0]],
          c = Math.atan2(-a.z, a.x);
        if (Math.abs(Math.sin(c * 2)) < 1e-8) {
          let n = new s().setFromCenterAndSize(N(e), N(t)).applyMatrix4(r);
          o.push({
            aabb: [...n.min.toArray(), ...n.max.toArray()],
            surface: i.surface,
            role: i.role,
            source: l,
          });
        } else
          g({
            x: p.x,
            z: p.z,
            hx: m[n[0]] / 2,
            hz: m[n[1]] / 2,
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
          r = new w(Math.sin(t), 0, Math.cos(t)),
          i = [0, 1, 2].filter((e) => e !== _),
          a = [];
        for (let e of [-1, 1])
          for (let t of [-1, 1]) {
            let n = d[i[0]]
              .clone()
              .multiplyScalar((m[i[0]] / 2) * e)
              .addScaledVector(d[i[1]], (m[i[1]] / 2) * t);
            a.push([n.dot(r), n.y]);
          }
        let o = [a[0], a[1], a[3], a[2]],
          s = [...new Set(a.map((e) => e[0]))].sort((e, t) => e - t),
          c = (e) => {
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
        for (let e = 1; e < s.length; e++) {
          let i = s[e - 1],
            a = s[e];
          if (a - i < 1e-7) continue;
          let o = c(i),
            l = c(a),
            u = Math.abs(l[1] - l[0] - (o[1] - o[0])),
            d = Math.max(1, Math.ceil(Math.min(u, a - i) / n));
          for (let e = 0; e < d; e++) {
            let n = i + ((a - i) * e) / d,
              o = i + ((a - i) * (e + 1)) / d,
              s = c(n),
              l = c(o),
              u = (n + o) / 2;
            g({
              x: p.x + r.x * u,
              z: p.z + r.z * u,
              hx: m[_] / 2,
              hz: (o - n) / 2,
              y0: p.y + Math.min(s[0], l[0]),
              y1: p.y + Math.max(s[1], l[1]),
              yaw: t,
              ramp: {
                z0: -(o - n) / 2,
                z1: (o - n) / 2,
                y: p.y + s[1],
                rise: l[1] - s[1],
              },
              thickness: Math.max(s[1] - s[0], l[1] - l[0], 1e-6),
            });
          }
        }
        return;
      }
      if (i.beam) {
        let e = d[1],
          t = new w(e.z, 0, -e.x).normalize(),
          n = new w().crossVectors(t, e).normalize(),
          r = Math.max(1, Math.ceil(Math.max(m[0], m[2]) / 0.18)),
          o = m[0] / r,
          s = m[2] / r;
        for (let u = 0; u < r; u++)
          for (let f = 0; f < r; f++) {
            let r = p
                .clone()
                .addScaledVector(d[0], -m[0] / 2 + o * (u + 0.5))
                .addScaledVector(d[2], -m[2] / 2 + s * (f + 0.5)),
              h = new a().makeBasis(t, e, n).setPosition(r);
            c(
              [0, 0, 0],
              [
                Math.abs(d[0].dot(t)) * o + Math.abs(d[2].dot(t)) * s,
                m[1],
                Math.abs(d[0].dot(n)) * o + Math.abs(d[2].dot(n)) * s,
              ],
              h,
              { ...i, beam: !1 },
              l,
            );
          }
        return;
      }
      let v = t.map((e, t) => {
          let r = [
            Math.abs(u[t * 4] * e),
            Math.abs(u[t * 4 + 1] * e),
            Math.abs(u[t * 4 + 2] * e),
          ].sort((e, t) => t - e);
          return Math.max(1, Math.ceil((r[1] - 1e-7) / n));
        }),
        y = t.map((e, t) => e / v[t]);
      for (let n = 0; n < v[0]; n++)
        for (let a = 0; a < v[1]; a++)
          for (let c = 0; c < v[2]; c++) {
            let u = e.map((e, r) => e - t[r] / 2 + y[r] * ([n, a, c][r] + 0.5)),
              d = new s().setFromCenterAndSize(N(u), N(y)).applyMatrix4(r);
            o.push({
              aabb: [...d.min.toArray(), ...d.max.toArray()],
              surface: i.surface,
              role: i.role,
              source: l,
            });
          }
    };
  for (let [t, o] of e.entries()) {
    let e = new a().fromArray(o.matrix).premultiply(r);
    if (o.type === `box`) {
      c([0, 0, 0], o.size, e, o, t);
      continue;
    }
    if (o.type === `cylinder`) {
      let r = Math.max(1, Math.ceil((Math.abs(o.rt - o.rb) * i) / n));
      for (let a = 0; a < r; a++) {
        let s = o.rb + ((o.rt - o.rb) * a) / r,
          l = o.rb + ((o.rt - o.rb) * (a + 1)) / r,
          u = Math.max(s, l),
          d = o.height / r,
          f = -o.height / 2 + d * (a + 0.5);
        if (u * i < 0.09) {
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
              a = Math.max(...n.map((e) => e[1]));
            return {
              z0: r,
              z1: a,
              error:
                Math.max(...[e, t].flatMap((e) => [r, a].map((t) => g(e, t)))) *
                i,
            };
          };
        for (let r = m; r < h - 1e-7;) {
          let i = h;
          if (_(r, i).error > n) {
            let e = r,
              t = h;
            for (let i = 0; i < 24; i++) {
              let i = (e + t) / 2;
              _(r, i).error <= n ? (e = i) : (t = i);
            }
            i = Math.max(r + 1e-7, e);
          }
          let { z0: a, z1: s } = _(r, i);
          (s - a > 1e-7 &&
            c([(r + i) / 2, f, (a + s) / 2], [i - r, d, s - a], e, o, t),
            (r = i));
        }
      }
      continue;
    }
    let s = o.points.map((e) => new l(...e)),
      u = m.triangulateShape(s, []);
    for (let r of u) {
      let a = r.map((e) => o.points[e]),
        s = [0, 1].map((e) => Math.min(...a.map((t) => t[e]))),
        l = [0, 1].map((e) => Math.max(...a.map((t) => t[e]))),
        u = l[0] - s[0] < l[1] - s[1] ? 0 : 1,
        d = Math.max(1, Math.ceil(((l[u] - s[u]) * i) / n));
      for (let n = 0; n < d; n++) {
        let r = s[u] + ((l[u] - s[u]) * n) / d,
          i = s[u] + ((l[u] - s[u]) * (n + 1)) / d,
          f = P(P(a, u, r, !0), u, i, !1);
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
