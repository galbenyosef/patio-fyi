// assets__meridian-D04s7Lgf 05 — math
// Lines 2019-2969 of readable/assets__meridian-D04s7Lgf.pretty.js (statement-aligned).
function C(e, t, n, r, i, a) {
  let o = Math.PI,
    l = Math.PI / 2,
    u = (e) => {
      let t = Math.imul(Math.round(e * 1e3) | 0, 2654435761) >>> 0;
      return (
        (t ^= t >>> 15),
        (t = Math.imul(t, 2246822519) >>> 0),
        (t ^= t >>> 13),
        (t >>> 0) / 4294967296
      );
    },
    d = (e, t) => e[Math.floor(u(t) * e.length) % e.length],
    f = (e, t) => e > 22.6 && t < 16,
    p = e.colliderDefs.filter(
      (e) =>
        e.aabb &&
        !/ceiling|l33-/.test(e.id) &&
        e.aabb[1] < 140 &&
        e.aabb[4] > 138.05,
    ),
    m = e.objects.filter(
      (e) => /-head/.test(e.id) && Math.abs(e.y - 140.2) < 0.05,
    ),
    h = [...w.map(([e, t]) => [e, t]), ...T.map((e) => e.pos)],
    g = t.decor
      .filter((e) => e.y < 138.1 && e.k !== `rug`)
      .map((e) => [e.x, e.z, 0.5]),
    _ = (e, t, n, r) => {
      let i = r[0] - n[0],
        a = r[1] - n[1],
        o = Math.max(
          0,
          Math.min(1, ((e - n[0]) * i + (t - n[1]) * a) / (i * i + a * a || 1)),
        );
      return Math.hypot(e - n[0] - i * o, t - n[1] - a * o);
    },
    v = (e, n, r, { farm: i = !1, room: a = 0.8 } = {}) => {
      if (
        e < s.x0 + r + 0.05 ||
        e > s.x1 - r - 0.05 ||
        n < s.z0 + r + 0.05 ||
        n > s.z1 - r - 0.05 ||
        (e > c.x0 - 0.1 &&
          e < c.x1 + 0.1 &&
          n > c.z0 - 0.1 &&
          n < c.z1 + 0.1) ||
        (!i && f(e, n))
      )
        return !1;
      for (let t of p) {
        let i = t.aabb;
        if (e + r > i[0] && e - r < i[3] && n + r > i[2] && n - r < i[5])
          return !1;
      }
      for (let i of t.panes)
        if (!i.ext && _(e, n, i.a, i.b) < r + 0.08) return !1;
      for (let t of m)
        if (
          Math.abs(e - t.x) < t.sx / 2 + r + 0.35 &&
          Math.abs(n - t.z) < t.sz / 2 + r + 0.35
        )
          return !1;
      for (let [t, i] of h) if (Math.hypot(e - t, n - i) < r + a) return !1;
      for (let [t, i, a] of g) if (Math.hypot(e - t, n - i) < r + a) return !1;
      return !0;
    },
    y = (e, t, r, i) => {
      let [a, o] = d(S.plant, r),
        s = a === `monstera` || a === `lily` ? 0.62 : a === `palm` ? 0.5 : 0.4;
      return v(e, t, s, i)
        ? (n(a, d(o, r + 0.5), e, t, u(r + 0.7) * 6.28), g.push([e, t, s]), !0)
        : !1;
    },
    b = (e, t, n, r, a) => {
      if (!v(t, n, 0.5)) return !1;
      let o = d([2, 8, 9, 10, 13, 14, 18, 20, 22, 24, 27, 28, 30], a);
      return (
        i(
          e,
          `armchair`,
          o,
          t,
          n,
          r,
          ...([2, 8, 9, 10, 13, 18, 20, 24].includes(o)
            ? [0.86, 0.86, 0.75]
            : [0.71, 0.74, 0.88]),
        ),
        g.push([t, n, 0.5]),
        !0
      );
    },
    x = e.objects.filter(
      (e) =>
        e.kind === `box` &&
        /^(drywall|coreWall)$/.test(e.material) &&
        Math.abs(e.y - 138) < 0.01 &&
        e.sy >= 2.4 &&
        !/^l33-/.test(e.id),
    ),
    C = t.decor
      .filter((e) => e.y > 139 && e.y < 142.7)
      .map((e) => [e.x, e.y, e.z, Math.sin(e.r), Math.cos(e.r)]),
    E = e.objects.filter(
      (e) =>
        e.kind === `box` &&
        !/^(drywall|coreWall|carpet|carpetBand|lobbyStone)$/.test(e.material) &&
        !/^(carpet|band-|lobby-floor)/.test(e.id) &&
        Math.abs(e.y - 138) < 3,
    ),
    D = {
      exec: [
        { k: `dresser`, s: 5, size: [1.22, 0.5, 0.93] },
        { k: `dresser`, s: 24, size: [1.04, 0.51, 0.83] },
        { k: `bookcase`, s: 44, size: [0.9, 0.32, 2] },
        { k: `dresser`, s: 36, size: [1.22, 0.5, 0.83] },
        { k: `bookcase`, s: 40, size: [1.2, 0.32, 1.8] },
      ],
      bullpen: [
        { k: `filing`, s: 13, size: [0.9, 0.5, 0.7] },
        { k: `filing`, s: 16, size: [0.9, 0.5, 1.03] },
        { k: `bookcase`, s: 15, size: [1.2, 0.32, 1.2] },
        { k: `filing`, s: 42, size: [0.9, 0.5, 0.95] },
        { k: `filing`, s: 24, size: [0.9, 0.5, 0.7] },
      ],
      room: [
        { k: `filing`, s: 47, size: [0.9, 0.5, 1.03] },
        { k: `filing`, s: 20, size: [0.9, 0.5, 0.7] },
        { k: `bookcase`, s: 30, size: [0.9, 0.32, 1.2] },
      ],
    },
    O = (e, n, r, i) => {
      if (e < s.x0 + 0.1 || r > s.x1 - 0.1 || n < s.z0 + 0.1 || i > s.z1 - 0.1)
        return !1;
      for (let t of p) {
        let a = t.aabb;
        if (
          r > a[0] + 0.01 &&
          e < a[3] - 0.01 &&
          i > a[2] + 0.01 &&
          n < a[5] - 0.01
        )
          return !1;
      }
      for (let a of t.panes)
        if (
          !a.ext &&
          _((e + r) / 2, (n + i) / 2, a.a, a.b) <
            Math.max(r - e, i - n) / 2 + 0.1
        )
          return !1;
      for (let t of m)
        if (
          r > t.x - t.sx / 2 - 0.4 &&
          e < t.x + t.sx / 2 + 0.4 &&
          i > t.z - t.sz / 2 - 0.4 &&
          n < t.z + t.sz / 2 + 0.4
        )
          return !1;
      for (let [t, a] of h)
        if (t > e - 0.9 && t < r + 0.9 && a > n - 0.9 && a < i + 0.9) return !1;
      for (let [t, a, o] of g)
        if (t + o > e && t - o < r && a + o > n && a - o < i) return !1;
      for (let a of t.props)
        if (
          a.y < 138.3 &&
          a.x > e - 0.4 &&
          a.x < r + 0.4 &&
          a.z > n - 0.4 &&
          a.z < i + 0.4
        )
          return !1;
      return !0;
    },
    k = (e, t) =>
      e < -23 || (e < -11 && Math.abs(t) < 8.4)
        ? `exec`
        : (t < -8.4 && t > -22 && e < 12) || (t > 14.4 && e < 11.5 && e > -9)
          ? `bullpen`
          : Math.abs(t) < 8.4 && Math.abs(e) < 13.5
            ? `corridor`
            : e > 22.6
              ? `exec`
              : `room`,
    A = {
      exec: [
        `canvas`,
        `print`,
        `print`,
        `gallery`,
        `canvas`,
        `print`,
        `mirror`,
      ],
      corridor: [`print`, `canvas`, `print`, `print`, `gallery`],
      bullpen: [
        `poster`,
        `print`,
        `cork`,
        `calendar`,
        `print`,
        `whiteboard`,
        `clock`,
        `poster`,
      ],
      room: [`poster`, `calendar`, `print`, `clock`, `cork`, `certificate`],
    },
    j = 0;
  for (let e of x) {
    let a = [],
      o = e.sx <= 0.3;
    if (!(e.sz <= 0.3))
      for (let t of [-1, 1])
        a.push({
          nx: t,
          nz: 0,
          fx: e.x + (t * e.sx) / 2,
          fz: e.z,
          len: e.sz,
          alongX: !1,
        });
    if (!o)
      for (let t of [-1, 1])
        a.push({
          nx: 0,
          nz: t,
          fx: e.x,
          fz: e.z + (t * e.sz) / 2,
          len: e.sx,
          alongX: !0,
        });
    for (let o of a) {
      if (o.len < 1.7) continue;
      let a = Math.max(1, Math.floor((o.len - 1.1) / 2.6) + 1),
        l = o.len / a;
      for (let m = 0; m < a; m++) {
        let a = -o.len / 2 + l * (m + 0.5),
          h = o.alongX ? o.fx + a : o.fx + o.nx * 0.005,
          _ = o.alongX ? o.fz + o.nz * 0.005 : o.fz + a,
          v = h + o.nx * 0.3,
          y = _ + o.nz * 0.3;
        if (
          v < s.x0 + 0.2 ||
          v > s.x1 - 0.2 ||
          y < s.z0 + 0.2 ||
          y > s.z1 - 0.2 ||
          f(v, y) ||
          (v > c.x0 && v < c.x1 && y > c.z0 && y < c.z1 && Math.abs(y) < 2.2) ||
          p.some((e) => {
            let t = e.aabb;
            return v > t[0] && v < t[3] && y > t[2] && y < t[5] && t[4] > 140.4;
          })
        )
          continue;
        let b = (e, t) => {
            let n = [
                e.x - e.sx / 2,
                e.z - e.sz / 2,
                e.x + e.sx / 2,
                e.z + e.sz / 2,
              ],
              r = Math.min(h, h + o.nx * 0.9),
              i = Math.max(h, h + o.nx * 0.9),
              a = Math.min(_, _ + o.nz * 0.9),
              s = Math.max(_, _ + o.nz * 0.9);
            return o.alongX
              ? n[0] < h + t && n[2] > h - t && n[1] < s && n[3] > a
              : n[1] < _ + t && n[3] > _ - t && n[0] < i && n[2] > r;
          },
          x = 138,
          w = !1;
        for (let t of p) {
          if (t.id === `demo-` + e.id) continue;
          let n = t.aabb;
          b(
            {
              x: (n[0] + n[3]) / 2,
              z: (n[2] + n[5]) / 2,
              sx: n[3] - n[0],
              sz: n[5] - n[2],
            },
            0.75,
          ) && (n[4] > 140.1 ? (w = !0) : (x = Math.max(x, n[4])));
        }
        for (let e of E)
          b(e, 0.9) &&
            /door|lift|panel|directory|head|bulkhead|logo|exit|frame/.test(
              e.id,
            ) &&
            (w = !0);
        for (let e of t.props)
          Math.hypot(e.x - h, e.z - _) < 1.1 &&
            /whiteboard|noticeboard|extinguisher|logo|sign|tv/.test(e.kind) &&
            (w = !0);
        if (
          w ||
          C.some(
            ([e, t, n, r, i]) =>
              r * o.nx + i * o.nz > 0.5 &&
              Math.hypot(e - h, n - _) < 1.9 &&
              Math.abs(t - 138 - 1.7) < 1.4,
          )
        )
          continue;
        let T = k(v, y),
          M = h * 7.3 + _ * 3.1;
        if (x === 138 && T !== `corridor` && u(M + 9) < 0.34) {
          let e = d(D[T], M + 5),
            [t, r, a] = e.size,
            s = Math.atan2(o.nx, o.nz),
            c = h + o.nx * (r / 2 + 0.02),
            l = _ + o.nz * (r / 2 + 0.02),
            f = o.alongX ? t / 2 : r / 2,
            p = o.alongX ? r / 2 : t / 2;
          if (
            O(c - f, l - p, c + f, l + p) &&
            (i(
              `wallpiece-${e.k}-${h.toFixed(1)}-${_.toFixed(1)}`,
              e.k,
              e.s,
              c,
              l,
              s,
              t,
              r,
              a,
              e.k === `filing` ? `metal` : `wood`,
            ),
            g.push([c, l, Math.max(t, r) / 2]),
            (x = 138 + a),
            e.k !== `bookcase`)
          ) {
            let e = d(
                [`vase`, `plantpot`, `candles`, `vase`, `globe`, `fruit`],
                M + 6,
              ),
              r = o.alongX ? t * 0.25 : 0,
              i = o.alongX ? 0 : t * 0.25;
            e === `plantpot`
              ? n(`snake`, d([1, 3, 6, 8, 11, 13], M), c + r, l + i, 0, x)
              : n(e, 1 + Math.floor(u(M + 7) * 8), c + r, l + i, s, x);
          }
        }
        let N = d(A[T], M);
        (N === `whiteboard` && (o.len < 2.8 || x > 138.2) && (N = `poster`),
          N === `gallery` && x > 138.2 && (N = `print`));
        let P =
          N === `clock`
            ? Math.max(2.4, x - 138 + 0.5)
            : x > 138.2
              ? x - 138 + 0.75
              : N === `whiteboard`
                ? 1.45
                : N === `calendar`
                  ? 1.5
                  : 1.65 + u(M + 3) * 0.15;
        P > 3.2 ||
          (r(N, d(S[N], M + 1), h, _, Math.atan2(o.nx, o.nz), P),
          C.push([h, 138 + P, _, o.nx, o.nz]),
          j++);
      }
    }
  }
  let M = 0;
  for (let e of x) {
    let t = Math.max(e.sx, e.sz);
    if (t < 3) continue;
    let n = e.sx > e.sz;
    for (let r of [-1, 1])
      for (let i of [-1, 1]) {
        let a = i * (t / 2 - 0.6),
          o = r * (Math.min(e.sx, e.sz) / 2 + 0.48),
          s = n ? e.x + a : e.x + o,
          c = n ? e.z + o : e.z + a;
        u(s * 3 + c * 5) < 0.72 && y(s, c, s * 11 + c * 17) && M++;
      }
  }
  for (let e of [-36, -24, -12, 0, 12, 24, 36])
    for (let t of [-1, 1])
      for (let n of [-1, 1]) {
        let r = t * (s.z1 - 0.5),
          i = e + n * 0.95;
        u(i * 5 + r) < 0.8 && y(i, r, i * 13 + r * 7) && M++;
      }
  for (let e of [-20, -10, 0, 10, 20])
    for (let t of [-1, 1]) {
      let n = e + t * 0.95,
        r = s.x0 + 0.5;
      u(n * 5 + r) < 0.8 && y(r, n, n * 13 + r) && M++;
    }
  for (let [e, t, r, i] of [
    [`bay-nw`, -27.5, -29.05, 0],
    [`bay-sw`, -27.5, 29.05, o],
    [`bay-s`, -1.7, 29.05, o],
    [`bay-w-n`, -39.05, -8.4, l],
    [`bay-w-s`, -39.05, 8.4, l],
  ]) {
    let a = Math.abs(Math.sin(i)) > 0.5,
      o = a ? 0 : 0.9,
      s = a ? 0.9 : 0;
    v(t, r, 0.3) &&
      v(t - o, r - s, 0.5) &&
      v(t + o, r + s, 0.5) &&
      (b(`${e}-a`, t - o, r - s, i, t * 3),
      b(`${e}-b`, t + o, r + s, i, t * 5 + 1),
      n(`sidetable`, d([1, 3, 4, 6, 11, 12, 16], t), t, r, i),
      n(`tablelamp`, d([3, 5, 11, 13, 16, 19, 24], r), t, r, i, 138.52),
      g.push([t, r, 0.3]));
  }
  let N = [
    `desklamp`,
    `deskset`,
    `trophy`,
    `figurine`,
    `desklamp`,
    `deskframe`,
  ];
  for (let [e, t, r] of [
    [-19, -12, -13],
    [2, 9, -13],
    [-6, 1, 21],
  ])
    for (let i = e + 0.8; i < t - 0.3; i += 1.6)
      for (let e of [-1, 1]) {
        let t = i * 17 + r * 3 + e;
        n(
          d(N, t),
          1 + Math.floor(u(t) * 6),
          i + 0.66,
          r + e * 0.62,
          e < 0 ? o : 0,
          138.77,
        );
      }
  for (let e of [-12, 12])
    (n(`vase`, d([3, 6, 8, 9, 12], e), -28, e - 0.5, 0, 138.74),
      n(`deskset`, 4, -28, e + 0.6, 0, 138.74));
  (n(`fruit`, d([3, 4, 6], 1), -13, 11.4, 0, 138.74),
    i(`se-sofa`, `sofa`, 41, 26, 29.02, o, 2.46, 0.97, 0.96),
    n(`rug`, 51, 26, 27.6, 0),
    i(`se-table`, `coffeetable`, 10, 26, 27.7, 0, 1.26, 0.58, 0.45),
    b(`se-chair-w`, 24.15, 27.7, l, 11),
    b(`se-chair-e`, 27.85, 27.7, -l, 23),
    n(`floorlamp`, 24, 23.35, 29.35),
    y(31.35, 29.35, 77),
    y(23.3, 20.4, 78),
    i(`se-books`, `bookcase`, 17, 22.82, 20.8, l, 0.9, 0.32, 1.8),
    r(`canvas`, 27, 22.665, 18.3, l, 1.75));
  for (let e of t.decor) e.x > 22.6 && e.z > 16 && g.push([e.x, e.z, 0.5]);
  let P = 0;
  for (let [e, r] of t.pods) {
    let t = `pod:${e}:${r}`;
    for (let i of [-1, 1])
      for (let a of [-1, 1]) {
        let s = e * 5 + r * 7 + i * 3 + a * 11;
        (n(
          d([`deskset`, `figurine`, `trophy`, `deskset`, `newton`], s),
          1 + Math.floor(u(s) * 5),
          e + i * 0.85,
          r + a * 0.4,
          a < 0 ? o : 0,
          138.77,
          t,
        ),
          n(
            d(
              [`deskframe`, `desklamp`, `globe`, `deskframe`, `succulent`],
              s + 1,
            ),
            1 + Math.floor(u(s + 1) * 5),
            e + i * 2,
            r + a * 2,
            i < 0 ? l : -l,
            138.77,
            t,
          ),
          n(
            `calendar`,
            d(S.calendar, s + 2),
            e + i * 1.35,
            r + a * 0.041,
            a < 0 ? o : 0,
            139.12,
            t,
          ),
          n(
            u(s + 3) < 0.5 ? `certificate` : `print`,
            d(u(s + 3) < 0.5 ? S.certificate : S.smallprint, s + 4),
            e + i * (2.4 - 0.07 / 2 - 0.006),
            r + a * 1.25,
            i < 0 ? l : -l,
            139.1,
            t,
          ),
          (P += 4));
      }
  }
  let F = {
      canvas: [34, 33, 22, 15, 35, 53, 55, 45],
      gallery: [31, 41, 12, 28, 36, 26],
      print: [1, 12, 4, 33],
      poster: [5, 31, 22, 14],
      clock: S.clock,
    },
    I = {
      exec: [`shelf`, `print`, `canvas`, `mirror`, `certificate`, `print`],
      corridor: [`print`, `shelf`, `canvas`, `gallery`, `print`],
      bullpen: [
        `whiteboard`,
        `cork`,
        `calendar`,
        `poster`,
        `shelf`,
        `clock`,
        `cork`,
      ],
      room: [`cork`, `calendar`, `poster`, `shelf`, `certificate`, `poster`],
    },
    L = {
      exec: [`canvas`, `canvas`, `gallery`, `print`],
      corridor: [`canvas`, `print`, `clock`, `canvas`],
      bullpen: [`poster`, `clock`, `canvas`, `poster`],
      room: [`poster`, `clock`, `print`, `poster`],
    },
    R = [19, 7, 35, 29, 55, 53, 57, 15, 59, 5],
    z = 0,
    B = 0,
    V = 0;
  for (let e of x) {
    let n = [],
      i = e.sx <= 0.3;
    if (!(e.sz <= 0.3))
      for (let t of [-1, 1])
        n.push({
          nx: t,
          nz: 0,
          fx: e.x + (t * e.sx) / 2,
          fz: e.z,
          len: e.sz,
          alongX: !1,
        });
    if (!i)
      for (let t of [-1, 1])
        n.push({
          nx: 0,
          nz: t,
          fx: e.x,
          fz: e.z + (t * e.sz) / 2,
          len: e.sx,
          alongX: !0,
        });
    for (let i of n) {
      if (i.len < 1.2) continue;
      let n = Math.max(1, Math.floor(i.len / 1.4)),
        a = i.len / n,
        o = Math.atan2(i.nx, i.nz);
      for (let l = 0; l < n; l++) {
        let n = -i.len / 2 + a * (l + 0.5),
          m = i.alongX ? i.fx + n : i.fx + i.nx * 0.005,
          h = i.alongX ? i.fz + i.nz * 0.005 : i.fz + n,
          g = m + i.nx * 0.3,
          _ = h + i.nz * 0.3;
        if (
          g < s.x0 + 0.2 ||
          g > s.x1 - 0.2 ||
          _ < s.z0 + 0.2 ||
          _ > s.z1 - 0.2 ||
          f(g, _) ||
          (g > c.x0 && g < c.x1 && _ > c.z0 && _ < c.z1 && Math.abs(_) < 2.2) ||
          p.some((e) => {
            let t = e.aabb;
            return g > t[0] && g < t[3] && _ > t[2] && _ < t[5] && t[4] > 140.4;
          })
        )
          continue;
        let v = (e, t) => {
            let n = [
                e.x - e.sx / 2,
                e.z - e.sz / 2,
                e.x + e.sx / 2,
                e.z + e.sz / 2,
              ],
              r = Math.min(m, m + i.nx * 0.9),
              a = Math.max(m, m + i.nx * 0.9),
              o = Math.min(h, h + i.nz * 0.9),
              s = Math.max(h, h + i.nz * 0.9);
            return i.alongX
              ? n[0] < m + t && n[2] > m - t && n[1] < s && n[3] > o
              : n[1] < h + t && n[3] > h - t && n[0] < a && n[2] > r;
          },
          y = 138,
          b = !1;
        for (let t of p) {
          if (t.id === `demo-` + e.id) continue;
          let n = t.aabb;
          v(
            {
              x: (n[0] + n[3]) / 2,
              z: (n[2] + n[5]) / 2,
              sx: n[3] - n[0],
              sz: n[5] - n[2],
            },
            0.6,
          ) && (n[4] > 140.1 ? (b = !0) : (y = Math.max(y, n[4])));
        }
        for (let e of E)
          v(e, 0.9) &&
            /door|lift|panel|directory|head|bulkhead|logo|exit|frame/.test(
              e.id,
            ) &&
            (b = !0);
        for (let e of t.props)
          Math.hypot(e.x - m, e.z - h) < 1.1 &&
            /whiteboard|noticeboard|extinguisher|logo|sign|tv/.test(e.kind) &&
            (b = !0);
        if (b) continue;
        let x = k(g, _),
          w = m * 5.9 + h * 4.3 + 7,
          T = (e, t, n = 0.8) =>
            C.some(
              ([r, a, o, s, c]) =>
                s * i.nx + c * i.nz > 0.5 &&
                Math.hypot(r - m, o - h) < t &&
                Math.abs(a - (138 + e)) < n,
            );
        if (!T(1.7, 1.2, 1.1)) {
          let e = d(I[x], w);
          (e === `whiteboard` && (a < 2.5 || y > 138.2) && (e = `cork`),
            e === `gallery` && y > 138.2 && (e = `print`));
          let t =
            y > 138.2
              ? y - 138 + (e === `shelf` ? 0.55 : 0.75)
              : e === `whiteboard`
                ? 1.45
                : e === `shelf`
                  ? 1.5
                  : e === `clock`
                    ? 2.2
                    : e === `calendar`
                      ? 1.5
                      : 1.6 + u(w + 3) * 0.2;
          t <= 2.9 &&
            (r(e, d(e === `shelf` ? R : S[e], w + 1), m, h, o, t),
            C.push([m, 138 + t, h, i.nx, i.nz]),
            z++);
        }
        let D = 3.3 + u(w + 4) * 0.3;
        if (i.len >= 2.2 && !T(D, 1.7, 0.9)) {
          let e = d(L[x], w + 2);
          (r(e, d(F[e] ?? S[e], w + 3), m, h, o, D),
            C.push([m, 138 + D, h, i.nx, i.nz]),
            z++);
        }
      }
    }
  }
  let H = [];
  for (let e of t.panes) {
    if (e.ext || e.y0 > 139) continue;
    let t = e.b[0] - e.a[0],
      n = e.b[1] - e.a[1],
      r = Math.hypot(t, n);
    if (!(r < 1))
      for (let i of [-1, 1])
        H.push({
          x: (e.a[0] + e.b[0]) / 2,
          z: (e.a[1] + e.b[1]) / 2,
          nx: (-n / r) * i,
          nz: (t / r) * i,
          len: r,
          glass: !0,
          pane: e,
        });
  }
  let U = [];
  for (let e of x) {
    let t = e.sx <= 0.3;
    if (!(e.sz <= 0.3))
      for (let t of [-1, 1])
        for (let n = -e.sz / 2 + 1; n <= e.sz / 2 - 1; n += 1.8)
          U.push({
            x: e.x + (t * e.sx) / 2,
            z: e.z + n,
            nx: t,
            nz: 0,
            len: 1.8,
            glass: !1,
          });
    if (!t)
      for (let t of [-1, 1])
        for (let n = -e.sx / 2 + 1; n <= e.sx / 2 - 1; n += 1.8)
          U.push({
            x: e.x + n,
            z: e.z + (t * e.sz) / 2,
            nx: 0,
            nz: t,
            len: 1.8,
            glass: !1,
          });
  }
  let W = (e, n, r, i, a) =>
      t.panes.every((t) => {
        if (t.ext || t === a) return !0;
        let o = _(e, n, t.a, t.b);
        return t.y0 > 140
          ? o > 1.3
          : o >
              (a &&
              Math.abs(
                (t.b[0] - t.a[0]) * (a.b[1] - a.a[1]) -
                  (t.b[1] - t.a[1]) * (a.b[0] - a.a[0]),
              ) < 0.001
                ? Math.min(r, i)
                : Math.max(r, i)) +
                0.06;
      }),
    G = [
      [`copier`, 0.7, 0.75, 1.12, !1],
      [`printer`, 0.9, 0.5, 0.7, !0],
      [`coffee`, 0.9, 0.5, 0.7, !0],
      [`files`, 0.9, 0.75, 1.63, !1],
      [`printer`, 0.9, 0.5, 0.7, !0],
      [`files`, 0.9, 0.75, 1.63, !1],
      [`printer`, 0.9, 0.5, 0.7, !0],
    ],
    K = [],
    q = (e, t) => {
      let [r, o, s, c] = d(
          G.filter((t) => !e.glass || t[4]),
          t,
        ),
        l = Math.atan2(e.nx, e.nz),
        p = Math.abs(e.nz) > 0.5,
        m = e.x + e.nx * (s / 2 + 0.06),
        h = e.z + e.nz * (s / 2 + 0.06),
        _ = p ? o / 2 : s / 2,
        y = p ? s / 2 : o / 2;
      if (
        K.some(([e, t]) => Math.hypot(e - m, t - h) < 4.5) ||
        f(m, h) ||
        !J(m - _, h - y, m + _, h + y) ||
        !W(m, h, _, y, e.pane)
      )
        return !1;
      let b = `kit-${r}-${m.toFixed(1)}-${h.toFixed(1)}`,
        x = [-e.nz, e.nx],
        S = (e) => [m + x[0] * e, h + x[1] * e];
      if (r === `copier`) {
        (i(
          b,
          `copier`,
          d([12, 7, 9, 30, 41], t),
          m,
          h,
          l,
          0.7,
          0.75,
          1.12,
          `metal`,
        ),
          a(`paper`, m, 139.13, h, l));
        let [e, r] = S(0.62);
        v(e, r, 0.26, { room: 0.6 }) &&
          (n(`shredder`, d([33, 7, 35, 22, 34], t + 1), e, r, l),
          g.push([e, r, 0.26]));
        let [o, s] = S(-0.62);
        (v(o, s, 0.3, { room: 0.6 }) &&
          (a(`paper-pile`, o, 138, s, l), g.push([o, s, 0.3]), V++),
          V++);
      } else if (r === `printer` || r === `coffee`) {
        if (
          (i(b, `filing`, d([13, 24, 20], t), m, h, l, 0.9, 0.5, 0.7, `metal`),
          r === `printer`)
        ) {
          n(
            `printer`,
            d([30, 22, 41, 10, 15], t + 1),
            m - x[0] * 0.12,
            h - x[1] * 0.12,
            l,
            138.71,
          );
          let [e, r] = S(0.3);
          (a(u(t + 2) < 0.5 ? `paper` : `magazines`, e, 138.71, r, l), V++);
        } else {
          n(
            `coffee`,
            d([3, 11, 16, 17, 23], t + 1),
            m - x[0] * 0.2,
            h - x[1] * 0.2,
            l,
            138.71,
          );
          let [e, r] = S(0.25);
          a(`mug`, e, 138.71, r, 0);
        }
      } else if (r === `cooler`)
        i(
          b,
          `cooler`,
          d([7, 11, 14, 16, 19], t),
          m,
          h,
          l,
          0.42,
          0.4,
          1.4,
          `metal`,
        );
      else {
        (i(b, `filing`, d([40, 26, 31], t), m, h, l, 0.9, 0.75, 1.63, `metal`),
          a(`paper`, m, 139.64, h, l),
          V++);
        let [e, n] = S(0.75);
        v(e, n, 0.3, { room: 0.6 }) &&
          (a(`paper-pile`, e, 138, n, l), g.push([e, n, 0.3]), V++);
      }
      g.push([m, h, Math.max(o, s) / 2]);
      let [C, w] = S(-(o / 2 + 0.28));
      return (
        u(t + 9) < 0.7 &&
          v(C, w, 0.2, { room: 0.6 }) &&
          (n(`bin`, d([5, 7, 15, 19, 21, 26], t + 3), C, w, l),
          g.push([C, w, 0.2])),
        K.push([m, h]),
        B++,
        !0
      );
    };
  function J(e, n, r, i) {
    if (
      e < s.x0 + 0.1 ||
      r > s.x1 - 0.1 ||
      n < s.z0 + 0.1 ||
      i > s.z1 - 0.1 ||
      (r > c.x0 - 0.1 &&
        e < c.x1 + 0.1 &&
        i > c.z0 - 0.1 &&
        n < c.z1 + 0.1 &&
        !(r < c.x0 || e > c.x1 || i < c.z0 || n > c.z1))
    )
      return !1;
    for (let t of p) {
      let a = t.aabb;
      if (
        r > a[0] + 0.01 &&
        e < a[3] - 0.01 &&
        i > a[2] + 0.01 &&
        n < a[5] - 0.01
      )
        return !1;
    }
    for (let t of m)
      if (
        r > t.x - t.sx / 2 - 0.5 &&
        e < t.x + t.sx / 2 + 0.5 &&
        i > t.z - t.sz / 2 - 0.5 &&
        n < t.z + t.sz / 2 + 0.5
      )
        return !1;
    for (let [t, a] of h)
      if (t > e - 1 && t < r + 1 && a > n - 1 && a < i + 1) return !1;
    for (let [t, a, o] of g)
      if (t + o > e && t - o < r && a + o > n && a - o < i) return !1;
    for (let a of t.props)
      if (
        a.y < 138.3 &&
        a.x > e - 0.4 &&
        a.x < r + 0.4 &&
        a.z > n - 0.4 &&
        a.z < i + 0.4
      )
        return !1;
    return !0;
  }
  for (let [e, t] of [...U, ...H].entries()) {
    let n = t.x * 13.1 + t.z * 7.7 + e * 0.013;
    u(n) < (t.glass ? 0.12 : 0.45) && q(t, n);
  }
  for (let [e, t, n] of [
    [-19, -12, -13],
    [2, 9, -13],
    [-6, 1, 21],
  ])
    for (let r = e + 0.8; r < t - 0.3; r += 1.6)
      for (let e of [-1, 1]) {
        let t = r * 29 + n * 5 + e;
        (a(
          u(t) < 0.75 ? `paper` : `magazines`,
          r - 0.45,
          138.77,
          n + e * 0.5,
          u(t + 1) * 0.6 - 0.3,
        ),
          V++);
      }
  for (let [e, t, n] of [
    [-19, -12, -13],
    [2, 9, -13],
    [-6, 1, 21],
  ])
    for (let [r, i] of [
      [e - 0.35, 1],
      [t + 0.35, -1],
    ])
      v(r, n, 0.3, { room: 0.5 }) &&
        (a(`paper-pile`, r, 138, n + (u(r) - 0.5), 0),
        g.push([r, n, 0.3]),
        V++);
  for (let [e, n] of t.pods)
    for (let t of [-1, 1])
      for (let r of [-1, 1]) {
        let i = e * 3 + n * 5 + t + r * 2;
        (a(
          u(i) < 0.8 ? `paper` : `magazines`,
          e + t * 2,
          138.77,
          n + r * 1.75,
          u(i + 1),
        ),
          V++,
          u(i + 2) < 0.5 &&
            (a(`paper`, e + t * 0.45, 138.77, n + r * 1.95, u(i + 3) * 2),
            V++));
      }
  for (let e of [-12, 12])
    (a(`paper`, -27.8, 138.74, e + 0.1, 0.4),
      a(`magazines`, -28.2, 138.74, e - 0.9, 1),
      (V += 2));
  (a(`paper`, -12.8, 138.74, 10.8, 0.2),
    a(`paper-pile`, -11.9, 138, 13.4, 0),
    (V += 2));
  for (let [e, t] of [
    [-37.9, -15.5],
    [-37.9, 15.5],
    [-18, 27.7],
    [-12, 27.7],
    [36.2, 27.95],
    [-36, -26.9],
  ])
    (a(`paper`, e, 138.77, t, u(e + t) * 2), V++);
  t.decorStats = {
    art: j,
    plants: M,
    farm: P,
    art3: z,
    equipment: B,
    paper3: V,
  };
}
