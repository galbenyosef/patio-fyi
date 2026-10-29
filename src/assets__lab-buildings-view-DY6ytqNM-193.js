// assets__lab-buildings-view-DY6ytqNM 193 — box
// Lines 60760-61007 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Pv() {
  let e = 1.35,
    t = 0.3,
    n = 1.5,
    r = (e, t, n) => `window`,
    a = (e, t) => (t === 0 ? `window` : `solid`),
    o = (e, t) => (t === 2 ? `door` : t === 0 ? `window` : `solid`);
  return {
    key: `miPillbox`,
    name: `Hardpoint 4 Bunker Entrance`,
    plain: 10328462,
    desc: `Reinforced-concrete bunker entrance: board-marked walls with chamfered corners and hooded gun embrasures, blast baffle wall with sandbags before the steel door, thick roof slab with a sod cap, periscope and camouflage netting on poles.`,
    W: 12,
    D: 10,
    chamfer: { l: 3, r: 3 },
    style: {
      wall: `miBoard`,
      t: 0.8,
      bay: 3.1,
      floors: [3],
      win: {
        w: n,
        h: t,
        sill: e,
        type: `grid`,
        lites: [1, 1],
        frame: `miConcreteDark`,
        frameW: 0.08,
        rec: 0.55,
        open: !0,
        curtains: 0,
      },
      door: {
        w: 1.3,
        h: 2.2,
        transom: 0,
        frame: `miSteelDark`,
        mat: `miDoorSteel`,
        rec: 0.6,
        step: `miConcrete`,
      },
    },
    front: {
      bay: 6,
      kinds: () => `door`,
      extra: (e, t, n) => {
        let r = n.grid[0][0];
        (e.box(`miBoard`, t, r, 1.4, 5.4, 0, 2.3, 1.8, 2.4),
          e.box(`miBoard`, t, r, 4.8, 5.4, 0, 2.3, 0, 1.8),
          nv(e, t, r, 1.4, 5.4, 2.1, 2, 2.3),
          e.box(`miHazard`, t, r, 1.4, 1.7, 0.4, 2.3, 2.4, 2.42),
          e.box(`miLamp`, t, r, 2.8, 3.2, 2.45, 2.6, -0.1, 0.1),
          G_(e, `miSgPlacard`, t, r, 3.9, 4.6, 1.2, 1.9, 2.4, 2.42));
      },
    },
    corner: { kinds: r, extra: Mv(r, e, t, n) },
    right: { kinds: a, extra: Mv(a, e, t, n) },
    left: { kinds: a, extra: Mv(a, e, t, n) },
    back: {
      kinds: o,
      extra: A(Mv(o, e, t, n), (e, t, n) => tv(e, t, n, 3.2, 5.6, 1.4, 5)),
    },
    extra: (e, t, n) => {
      let r = n.H,
        a = n.W,
        o = n.D;
      (e.add(
        `miConcrete`,
        new w(Nv(a, o, 3, 0.45), { depth: 0.6, bevelEnabled: !1 })
          .rotateX(-Math.PI / 2)
          .translate(0, r, 0),
        t,
        0,
      ),
        e.add(
          `miGrass`,
          new w(Nv(a - 1.2, o - 1.2, 2.6, 0), {
            depth: 0.35,
            bevelEnabled: !0,
            bevelThickness: 0.35,
            bevelSize: 0.5,
            bevelSegments: 2,
          })
            .rotateX(-Math.PI / 2)
            .translate(0, r + 0.95, 0),
          t,
          0,
        ));
      let s = r + 1.65;
      (X(e, `miSteelDark`, t, 0, 2.5, -1.5, s - 0.3, s + 1.2, 0.14, 0.14, 10),
        e.box(`miSteelDark`, t, 0, 2.3, 2.7, s + 1.1, s + 1.4, -1.6, -1.1),
        e.box(`glassGrey`, t, 0, 2.35, 2.65, s + 1.18, s + 1.32, -1.1, -1.08),
        X(e, `miSteel`, t, 0, -2.5, -2, s - 0.3, s + 0.8, 0.2, 0.2, 10),
        e.add(
          `miSteel`,
          new i(0.45, 12, 5, 0, Math.PI * 2, 0, Math.PI / 2).translate(
            -2.5,
            s + 0.75,
            -2,
          ),
          t,
          0,
        ));
      let c = new se(a + 3, o + 3, 12, 10).rotateX(-Math.PI / 2),
        l = c.attributes.position;
      for (let e = 0; e < l.count; e++) {
        let t = l.getX(e),
          n = l.getZ(e),
          r = Math.max(
            Math.abs(t) / ((a + 3) / 2),
            Math.abs(n) / ((o + 3) / 2),
          ),
          i = Math.min(
            ...[
              [-3.5, -2.5],
              [3.5, -2.5],
              [-3.5, 2.5],
              [3.5, 2.5],
            ].map(([e, r]) => Math.hypot(t - e, n - r)),
          );
        l.setY(
          e,
          s + 1.25 - 2.3 * r ** 1.6 - 0.45 * Math.min(1, i / 2.5) + 0.35,
        );
      }
      (c.computeVertexNormals(), e.add(`miNet`, c, t, 0));
      for (let [n, r] of [
        [-3.5, -2.5],
        [3.5, -2.5],
        [-3.5, 2.5],
        [3.5, 2.5],
      ])
        X(e, `timber`, t, 0, n, r, s - 0.4, s + 1.55, 0.06, 0.05, 6);
      O_(n, s + 1.6);
    },
  };
}
var Fv = { rise: 7, segs: 6 },
  Iv = (e, t) => {
    let n = ((e / 2) ** 2 + Fv.rise ** 2) / (2 * Fv.rise);
    return { R: n, cy: t + Fv.rise - n, a: Math.asin(e / 2 / n) };
  },
  Lv = (e) => (t, n, r) => {
    let i = r.L,
      a = r.H,
      { R: o, cy: s, a: c } = Iv(i, a),
      l = t.cell(n, [i / 2, a + 3, -0.15], `miCorrOlive`),
      u = new T();
    (u.moveTo(0, a),
      u.lineTo(i, a),
      u.absarc(i / 2, s, o, Math.PI / 2 - c, Math.PI / 2 + c, !1),
      u.closePath(),
      t.add(
        `miCorrOlive`,
        new w(u, { depth: r.t, bevelEnabled: !1, curveSegments: 40 }).translate(
          0,
          0,
          -r.t,
        ),
        n,
        l,
      ));
    let d = a + 0.8,
      f = a + 1.9;
    for (let e = 0; e < 8; e++) {
      let r = i / 2 - 14 + e * 3.5 + 0.15,
        a = r + 3.2;
      t.box(`glassGrey`, n, l, r, a, d, f, 0, 0.02);
      for (let [e, i, o, s] of [
        [r, a, d - 0.08, d],
        [r, a, f, f + 0.08],
        [r - 0.08, r, d, f],
        [a, a + 0.08, d, f],
        [(r + a) / 2 - 0.03, (r + a) / 2 + 0.03, d, f],
      ])
        t.box(`miSteelDark`, n, l, e, i, o, s, 0, 0.06);
    }
    if ((t.box(`miSteelDark`, n, l, 0, i, a - 0.05, a + 0.15, 0, 0.12), e)) {
      G_(
        t,
        `miSgHangar`,
        n,
        l,
        i / 2 - 8,
        i / 2 + 8,
        a + 2.7,
        a + 5.3,
        0.01,
        0.02,
      );
      for (let e = 1; e <= 6; e++) {
        let i = r.grid[0][e],
          a = e * r.bw - 0.08,
          o = (e + 1) * r.bw + 0.08,
          s = e % 2 ? 0.06 : 0.28;
        (t.box(`miCorrGrey`, n, i, a, o, 0.06, 7.35, s, s + 0.14),
          t.box(
            `glassGrey`,
            n,
            i,
            a + 0.3,
            o - 0.3,
            5.5,
            6.3,
            s + 0.14,
            s + 0.16,
          ));
        for (let [e, r, c, l] of [
          [a + 0.22, o - 0.22, 5.42, 5.5],
          [a + 0.22, o - 0.22, 6.3, 6.38],
          [a + 0.22, a + 0.3, 5.5, 6.3],
          [o - 0.3, o - 0.22, 5.5, 6.3],
          [(a + o) / 2 - 0.03, (a + o) / 2 + 0.03, 5.5, 6.3],
        ])
          t.box(`miSteelDark`, n, i, e, r, c, l, s + 0.14, s + 0.19);
        (t.box(`miSteelDark`, n, i, a, o, 0.06, 0.45, s + 0.14, s + 0.18),
          t.box(
            `miSteelDark`,
            n,
            i,
            a,
            a + 0.12,
            0.06,
            7.35,
            s + 0.14,
            s + 0.18,
          ),
          t.box(
            `miHazard`,
            n,
            i,
            o - 0.3,
            o - 0.12,
            0.45,
            2.2,
            s + 0.14,
            s + 0.16,
          ));
      }
      (U_(t, `miSteelDark`, n, r, 0, i, 7.35, 7.95, 0, 0.55),
        U_(t, `miSteel`, n, r, 0, i, 0, 0.06, 0, 0.55));
      for (let e of [2.5, i - 2.5]) {
        let i = Y(r, e, 1);
        (t.box(w_, n, i, e - 0.12, e + 0.12, 5.2, 5.45, 0, 0.5),
          t.box(`miLamp`, n, i, e - 0.22, e + 0.22, 5.05, 5.2, 0.2, 0.55));
      }
    }
  };
