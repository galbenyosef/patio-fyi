// assets__lab-buildings-view-DJVr8phc 108 — math
// Lines 36490-36815 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function fu(e, t, n) {
  if (n >= e.H - 0.001 && e.gableCell) return e.gableCell;
  let r = 0;
  for (; r < e.top && e.ys[r + 1] <= n;) r++;
  return e.grid[r][z(e, t)];
}
function pu(e, t, n, r, i, a, o, s, c, l, u) {
  let d = o;
  for (let f of [...r.ys.slice(1), r.H]
    .filter((e) => e > o + 0.001 && e < s - 0.001)
    .concat([s]))
    (f > d + 0.001 &&
      e.box(t, n, fu(r, (i + a) / 2, (d + f) / 2), i, a, d, f, c, l, u),
      (d = f));
}
function mu(e, t, n) {
  let r = [];
  for (let i = 0; i < e.nb; i++) {
    let a = i === 0 ? t : Math.max(t, i * e.bw),
      o = i === e.nb - 1 ? n : Math.min(n, (i + 1) * e.bw);
    o - a > 0.001 && r.push([a, o, i]);
  }
  return r;
}
var hu = (e) => e.map(([e, t]) => new h(e, t));
function gu(e, t, n, r, i, a, o, s) {
  e.add(
    r,
    new S(new C(hu(i)), {
      depth: o - a,
      bevelEnabled: !1,
      curveSegments: 8,
    }).translate(0, 0, a),
    t,
    n,
    s,
  );
}
function _u(e, t, n, r, i = 16) {
  let a = [];
  if (e === `horse`) {
    let e = r * 1.15,
      o = Math.sqrt(e * e - r * r),
      s = Math.PI + Math.atan2(o, r),
      c = -Math.atan2(o, r);
    for (let r = 0; r <= i; r++) {
      let l = s + ((c - s) * r) / i;
      a.push([t + e * Math.cos(l), n + o + e * Math.sin(l)]);
    }
  } else if (e === `pointed`) {
    let e = r * 1.7,
      o = t - r + e,
      s = Math.acos((r - e) / e),
      c = i / 2,
      l = (t) => {
        let r = Math.PI + ((s - Math.PI) * t) / c;
        return [o + e * Math.cos(r), n + e * Math.sin(r)];
      };
    for (let e = 0; e <= i; e++)
      if (e <= c) a.push(l(e));
      else {
        let [n, r] = l(i - e);
        a.push([2 * t - n, r]);
      }
  } else {
    let o = e === `seg` ? r * 0.45 : r,
      s = (r * r + o * o) / (2 * o),
      c = n + o - s,
      l = Math.max(0, n - c),
      u = Math.atan2(l, -r),
      d = Math.atan2(l, r);
    for (let e = 0; e <= i; e++) {
      let n = u + ((d - u) * e) / i;
      a.push([t + s * Math.cos(n), c + s * Math.sin(n)]);
    }
  }
  return a;
}
var vu = (e, t) =>
  e === `horse`
    ? t * (1.15 + Math.sqrt(1.15 * 1.15 - 1))
    : e === `pointed`
      ? t * Math.sqrt(1.7 * 1.7 - 0.7 * 0.7)
      : e === `seg`
        ? t * 0.45
        : t;
function yu(e, t, n, r, i, a, o, s, c, l, u, d) {
  let f = _u(i, a, s, c);
  o < s - 0.001 && (f.unshift([a - c, o]), f.push([a + c, o]));
  let p = s + vu(i, c);
  gu(
    e,
    t,
    n,
    r,
    f,
    l,
    u,
    d
      ? { planar: (e, t) => [(e - a + c) / (2 * c), (t - o) / (p - o)] }
      : void 0,
  );
}
function bu(e, t, n, r, i, a, o, s, c, l, u, d, f) {
  let p = _u(i, a, s, c, 16),
    m = _u(i, a, s, c + l, 16);
  for (let i = 0; i < 16; i++)
    gu(e, t, n, f ? f[i % 2] : r, [p[i], p[i + 1], m[i + 1], m[i]], u, d);
  if (o < s - 0.001)
    for (let i of [-1, 1])
      e.box(
        f ? f[1] : r,
        t,
        n,
        i < 0 ? a - c - l : a + c,
        i < 0 ? a - c : a + c + l,
        o,
        s,
        u,
        d,
      );
}
function xu(e, t, n, r) {
  for (let i = 0; i <= e.top; i++)
    for (let a = 0; a < e.nb; a++) {
      if (t(i, a, e.nb) !== `window`) continue;
      let o = (i === 0 && n.win0) || n.win,
        s = Gl(e, i),
        c = (a + 0.5) * e.bw,
        l = Math.min(o.w, e.bw - 0.5),
        u = Math.min(o.h, s - o.sill - 0.35),
        d = e.ys[i] + o.sill;
      r(e.grid[i][a], c, l, d, d + u, i, a);
    }
}
var Su = (e) => (t, n, r) =>
    xu(r, e.kinds, e.S, (r, i, a, o, s, c) => {
      if (e.floors && !e.floors.includes(c)) return;
      let l = a / 2 + (e.pad ?? 0.05),
        u = e.kind || `round`;
      if (
        (e.fill && yu(t, n, r, e.fill, u, i, s, s, l, 0, 0.03, !0),
        e.ring &&
          bu(t, n, r, e.ring, u, i, s, s, l, e.rw ?? 0.12, 0, e.rz ?? 0.06),
        e.surround)
      ) {
        let a = e.sw ?? 0.12,
          c = e.surround;
        (t.box(c, n, r, i - l - a, i - l, o - a, s, 0, 0.05),
          t.box(c, n, r, i + l, i + l + a, o - a, s, 0, 0.05),
          t.box(c, n, r, i - l - a, i + l + a, o - a, o, 0, 0.07));
      }
    }),
  Cu = (e) => (t, n, r) =>
    xu(r, e.kinds, e.S, (r, i, a, o, s, c) => {
      if (e.floors && !e.floors.includes(c)) return;
      let l = i - a / 2 - 0.1,
        u = i + a / 2 + 0.1,
        d = o - 0.1,
        f = s + 0.1,
        p = e.d ?? 0.14,
        m = e.mat || `deReja`,
        h = e.frame || R;
      if (
        (t.box(m, n, r, l, u, d, f, p - 0.02, p, {
          planar: (e, t) => [(e - l) / 0.5, (t - d) / 0.5],
        }),
        p > 0.1)
      )
        for (let e of [l, u - 0.02])
          t.box(m, n, r, e, e + 0.02, d, f, 0, p - 0.02, {
            planar: (e, t, n) => [n / 0.5, (t - d) / 0.5],
          });
      if (
        (t.box(h, n, r, l - 0.03, u + 0.03, f, f + 0.05, 0, p + 0.02),
        t.box(h, n, r, l - 0.03, u + 0.03, d - 0.05, d, 0, p + 0.02),
        e.crown)
      )
        for (let e of [-1, 1])
          O(
            t,
            h,
            n,
            r,
            i + (a / 2) * e,
            f + 0.05,
            i,
            f + 0.3,
            0.04,
            p - 0.03,
            p,
          );
      if (e.pots)
        for (let e of [l + 0.2, (l + u) / 2, u - 0.2])
          (t.add(
            `dePot`,
            B(0.11, 0.08, 0.2, 8).translate(e, d + 0.1, p * 0.55),
            n,
            r,
          ),
            t.add(
              `deGeranium`,
              new w(0.15, 8, 6).translate(e, d + 0.28, p * 0.55),
              n,
              r,
            ));
    }),
  wu = (e) => (t, n, r) => {
    for (let [i, a] of e.at) {
      let o = r.grid[i][a],
        s = r.ys[i],
        c = (a + 0.5) * r.bw,
        l = c - e.w / 2,
        u = c + e.w / 2,
        d = s + (e.sill ?? 0.6),
        f = d + e.h,
        p = e.d ?? 0.6,
        m = e.frame,
        h = e.lat;
      (t.box(m, n, o, l, u, d - 0.16, d, 0, p),
        t.box(m, n, o, l - 0.05, u + 0.05, f, f + 0.12, 0, p + 0.08),
        t.box(h, n, o, l + 0.05, u - 0.05, d, f, p - 0.04, p - 0.02, {
          planar: (e, t) => [(e - l) / 0.5, (t - d) / 0.5],
        }));
      for (let e of [l, u - 0.02])
        t.box(h, n, o, e, e + 0.02, d, f, 0, p - 0.04, {
          planar: (e, t, n) => [n / 0.5, (t - d) / 0.5],
        });
      for (let e of [l, u - 0.06])
        t.box(m, n, o, e, e + 0.06, d, f, p - 0.06, p);
      (t.box(
        m,
        n,
        o,
        l,
        u,
        d + (f - d) * 0.36 - 0.04,
        d + (f - d) * 0.36 + 0.04,
        p - 0.07,
        p,
      ),
        e.apron &&
          t.box(
            e.apron,
            n,
            o,
            l + 0.05,
            u - 0.05,
            d - 0.5,
            d - 0.16,
            0.02,
            p - 0.05,
          ));
      for (let e of [l + 0.2, u - 0.2])
        D(t, m, n, o, [e, d - 0.75, 0.02], [e, d - 0.17, p * 0.8], 0.08);
      e.dome &&
        t.add(
          e.dome,
          B(p * 0.55, p * 0.55, u - l + 0.1, 12)
            .rotateZ(Math.PI / 2)
            .scale(1, 0.7, 1)
            .translate(c, f + 0.12, p / 2),
          n,
          o,
        );
    }
  };
function Tu(e, t, n, r, i, a, o, s, c, l, u) {
  if (r === `step`)
    for (let r = 0; r < 3; r++) {
      let d = (o * (1 - r * 0.3)) / 2;
      e.box(
        i,
        t,
        n,
        a - d,
        a + d,
        s + (r * c) / 3,
        s + ((r + 1) * c) / 3,
        l,
        u,
      );
    }
  else
    r === `tri`
      ? gu(
          e,
          t,
          n,
          i,
          [
            [a - o / 2, s],
            [a + o / 2, s],
            [a, s + c],
          ],
          l,
          u,
        )
      : r === `horn`
        ? (e.box(i, t, n, a - o / 2, a + o / 2, s, s + c * 0.4, l, u),
          gu(
            e,
            t,
            n,
            i,
            [
              [a - o / 2, s + c * 0.4],
              [a + o / 2, s + c * 0.4],
              [a + o * 0.12, s + c],
              [a - o * 0.12, s + c],
            ],
            l,
            u,
          ))
        : e.box(i, t, n, a - o / 2, a + o / 2, s, s + c, l, u);
}
function Eu(e, t, n, r, i, a, o, s, c) {
  let l = r.w ?? 0.5,
    u = r.gap ?? 0.45,
    d = Math.max(1, Math.round((a - i) / (l + u))),
    f = (a - i) / d;
  for (let a = 0; a < d; a++) {
    let u = i + (a + 0.5) * f;
    Tu(e, t, n(u), r.type, r.mat, u, l, o, r.h ?? 0.55, s, c);
  }
}
