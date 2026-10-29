// assets__lab-buildings-view-DY6ytqNM 209 — box
// Lines 65680-65976 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
var pb =
    (e, t, n = 0.45) =>
    (r, i, a) => {
      for (let [o, s] of [
        [-0.05, 1],
        [a.L + 0.05, -1],
      ])
        for (let c = n, l = 0; c < t - 0.2; c += 0.42, l++) {
          let t = l % 2 ? 0.45 : 0.75,
            n = Wy(a, o + s * 0.2, c + 0.2);
          r.box(
            e,
            i,
            n,
            s > 0 ? o : o - t,
            s > 0 ? o + t : o,
            c,
            c + 0.36,
            -0.02,
            0.05,
          );
        }
    },
  mb = (e) => (t, n, r) => {
    let { a0: i, a1: o, d: s, y0: c = 0, h: l, mat: u, roof: d } = e,
      f = 0.14,
      p = e.f ?? 0,
      m = e.fall ?? 0.5;
    for (let [h, g, _] of Gy(r, i, o)) {
      let v = r.grid[p][_];
      (t.box(u, n, v, h, g, c, c + l - m, s - f, s),
        c > 0 && t.box(e.baseMat || `concrete`, n, v, h, g, 0, c - 0.1, 0, s),
        t.box(e.floor || `concrete`, n, v, h, g, c - 0.1, c + 0.02, 0, s),
        t.add(
          d,
          new a(
            g - h + (h === i ? 0.15 : 0) + (g === o ? 0.15 : 0),
            0.08,
            Math.hypot(s + 0.35, m),
          )
            .rotateX(Math.atan2(m, s + 0.35))
            .translate(
              (h + g) / 2 + (h === i ? -0.075 : 0) + (g === o ? 0.075 : 0),
              c + l - m / 2 + 0.06,
              (s + 0.35) / 2,
            ),
          n,
          v,
        ));
    }
    for (let [e, a] of [
      [i, 1],
      [o, -1],
    ]) {
      let i = r.grid[p][Q(r, e + a * 0.1)],
        o = a > 0 ? e : e - f;
      Qy(
        t,
        u,
        n,
        i,
        new T([Dy(0, c), Dy(s, c), Dy(s, c + l - m), Dy(0, c + l)]),
        o,
        f,
      );
    }
    if (e.door) {
      let i = e.door,
        a = r.grid[p][Q(r, i)];
      (t.box(
        e.doorMat || `trDoorGreen`,
        n,
        a,
        i - 0.45,
        i + 0.45,
        c + 0.02,
        c + 2,
        s,
        s + 0.04,
      ),
        t.box(
          `woodDark`,
          n,
          a,
          i - 0.52,
          i + 0.52,
          c + 2,
          c + 2.1,
          s - 0.02,
          s + 0.06,
        ));
    }
    if (e.win) {
      let i = e.win,
        a = r.grid[p][Q(r, i)];
      (t.box(`glass`, n, a, i - 0.35, i + 0.35, c + 1, c + 1.7, s, s + 0.02),
        t.box(
          e.trim || `trimWhite`,
          n,
          a,
          i - 0.43,
          i + 0.43,
          c + 0.94,
          c + 1,
          s - 0.02,
          s + 0.08,
        ));
    }
  };
function hb(e, t, n, r, i) {
  let a = (e + t) / 2,
    o = new T();
  return (
    o.moveTo(e, 0),
    o.lineTo(a - n, 0),
    o.lineTo(a - n, r),
    o.absarc(a, r, n, Math.PI, 0, !0),
    o.lineTo(a + n, 0),
    o.lineTo(t, 0),
    o.lineTo(t, i),
    o.lineTo(e, i),
    o.closePath(),
    o
  );
}
function gb(e, t, n, r, i, a, o, s, c, l) {
  let u = new T();
  (u.moveTo(i + s, a),
    u.absarc(i, a, s, 0, Math.PI, !1),
    u.lineTo(i - o, a),
    u.absarc(i, a, o, Math.PI, 0, !0),
    u.closePath(),
    Zy(e, t, n, r, u, c, l, 12));
}
var _b = (e, t, n, r, i, a, o, s) =>
    e.add(t, new c(o, 16, 0, Math.PI).translate(i, a, s), n, r, {
      planar: (e, t) => [(e - i + o) / (2 * o), (t - a) / o],
    }),
  vb = (e, t, n, r, i, a, o, s, l = 20) =>
    e.add(t, new c(o, l).translate(i, a, s), n, r, {
      planar: (e, t) => [(e - i + o) / (2 * o), (t - a + o) / (2 * o)],
    });
function yb() {
  let e = {
      win0: {
        w: 1,
        h: 1.9,
        sill: 0.8,
        type: `sash`,
        lites: [2, 3],
        frame: `trimWhite`,
        arch: 0.5,
        archMat: `limestone`,
        keystone: !0,
        sillMat: `limestone`,
        rec: 0.3,
        curtains: 0.4,
      },
      win: {
        w: 1,
        h: 2.3,
        sill: 0.25,
        type: `sash`,
        lites: [2, 3],
        frame: `trimWhite`,
        shutter: `trJalGreen`,
        casing: `trimWhite`,
        rec: 0.1,
        curtains: 0.5,
      },
    },
    t = (e, t) => (e === 0 && t === 2 ? `door` : `window`),
    n = pb(`limestone`, 3.6);
  return {
    key: `trGeorgian`,
    name: `Brimstone Street House`,
    plain: 15651690,
    desc: `Caribbean Georgian town house: coral-stone ground floor with arched sashes and quoins, lemon clapboard upper storey, green jalousies, fretwork gallery on brackets, red tin hip roof.`,
    W: 13,
    D: 10,
    style: {
      wall: `trLapLemon`,
      floorMat: [`trCoral`],
      t: 0.3,
      bay: 2.6,
      floors: [3.6, 3.4],
      ...e,
      door: {
        w: 1.5,
        h: 2.5,
        transom: 0.6,
        frame: `limestone`,
        mat: `trDoorGreen`,
        rec: 0.3,
        step: `limestone`,
      },
      base: { mat: `limestone`, h: 0.4, out: 0.04 },
      belt: { mat: `trimWhite`, h: 0.3, out: 0.08 },
      eaveTrim: `trimWhite`,
      roof: ub(0.3),
    },
    front: {
      kinds: t,
      extra: A(
        n,
        ob({
          f: 1,
          y: 3.62,
          top: 6.25,
          beam: 0.2,
          rise: 0.45,
          d: 2,
          roof: `trTinRed`,
          trim: `trimWhite`,
          col: `post`,
          colW: 0.07,
          rail: !0,
          fret: !0,
          brackets: !0,
          hang: !0,
          gap: 2.6,
        }),
      ),
    },
    right: { kinds: () => `window`, extra: n },
    left: { kinds: (e, t) => (t === 1 ? `solid` : `window`), extra: n },
    back: { kinds: t, extra: n },
    extra: (e, t, n) => {
      let r = cb(e, t, n, `trTinRed`, 30 * Ey, 0.5, `trimWhite`);
      for (let n of [-1, 1])
        ($(e, `trimWhite`, t, 0, n * r.rx, r.yr + 0.1, r.yr + 0.6, 0, 0.05),
          e.add(
            `trGold`,
            new i(0.12, 8, 6).translate(n * r.rx, r.yr + 0.68, 0),
            t,
            0,
          ));
    },
  };
}
var bb =
  (e, t = {}) =>
  (n, r, a) => {
    let o = a.gableCell,
      s = a.L / 2,
      c = a.H + (t.y ?? 0.45),
      l = t.hw ?? 0.55,
      u = c + l * (t.tn ?? 0.78);
    if (
      (Zy(n, e, r, o, new T([Dy(s - l, c), Dy(s + l, c), Dy(s, u)]), 0, 0.04),
      n.box(
        `trimWhite`,
        r,
        o,
        s - l - 0.08,
        s + l + 0.08,
        c - 0.08,
        c,
        0,
        0.07,
      ),
      t.drop !== !1)
    ) {
      let e = a.H + t.gh;
      (n.box(
        `trimWhite`,
        r,
        o,
        s - 0.06,
        s + 0.06,
        e - 0.8,
        e + 0.2,
        t.over - 0.06,
        t.over + 0.02,
      ),
        n.add(
          `trimWhite`,
          new i(0.08, 8, 6).translate(s, e - 0.86, t.over - 0.02),
          r,
          o,
        ));
    }
  };
function xb(e, t, n) {
  let r = 1.5 * n.bw;
  ib(e, t, n.grid[0][1], r, 0, 0.6, 0, 1.2, `concrete`, { solid: !0 });
  for (let [r, i, a] of Gy(n, 0, n.L))
    e.box(`trFret`, t, n.grid[n.top][a], r, i, 2.84, 3.14, 0.29, 0.3, {
      planar: (e, t) => [e / 0.7, (t - 2.84) / 0.3],
    });
  e.add(
    `trPaintBlue`,
    new C(0.33, 0.3, 0.9, 12).translate(0.45, 0.45, 0.45),
    t,
    n.grid[0][0],
  );
}
