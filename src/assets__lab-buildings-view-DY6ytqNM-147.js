// assets__lab-buildings-view-DY6ytqNM 147 — box
// Lines 47368-47574 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Tp() {
  let e = (e, t) =>
      e === 0
        ? t === 1
          ? `door`
          : `window`
        : e === 1 && t === 1
          ? `solid`
          : `window`,
    t = (e) => (t, n, r) => {
      let i = r.grid[0][1],
        a = r.L / 2;
      ep(t, n, i, a, 4.4, 1.5, 0.55, `euGranite`, `euGateStone`);
      for (let e = a - 1.3; e <= a + 1.31; e += 0.26)
        for (let r = 0.4; r < 4.3; r += 0.45)
          t.box(U, n, i, e - 0.03, e + 0.03, r - 0.03, r + 0.03, -0.46, -0.41);
      t.box(U, n, i, a - 1.5, a + 1.5, 4.2, 4.4, -0.2, -0.1);
      for (let e = a - 1.4; e <= a + 1.41; e += 0.35)
        t.add(
          U,
          new d(0.05, 0.25, 4).rotateX(Math.PI).translate(e, 4.1, -0.15),
          n,
          i,
        );
      if (!e) return;
      let o = r.grid[1][1];
      jf(t, n, o, a, r.ys[1] + 2.3, 0.95, 0);
      let s = [
        [a - 0.6, 6.4],
        [a + 0.6, 6.4],
        [a + 0.6, 5.6],
        [a, 5.05],
        [a - 0.6, 5.6],
      ];
      (bf(t, `euPaintRed`, n, r.grid[0][1], s, 0, 0.08),
        bf(
          t,
          `euGilt`,
          n,
          r.grid[0][1],
          [
            [a - 0.25, 5.5],
            [a + 0.3, 5.55],
            [a + 0.35, 6.05],
            [a + 0.15, 6.2],
            [a - 0.05, 6],
            [a - 0.35, 5.95],
          ],
          0.08,
          0.11,
        ));
    },
    n = (e, t, n) => {
      for (let r = 0.3; r < n.L; r += 0.75) {
        let i = n.grid[n.top][W(n, r)];
        e.box(
          `euGateStone`,
          t,
          i,
          r - 0.18,
          r + 0.18,
          n.H - 1.1,
          n.H - 0.2,
          0,
          0.35,
        );
      }
      for (let r = 0; r < n.nb; r++)
        e.box(
          `euGateStone`,
          t,
          n.grid[n.top][r],
          r === 0 ? -0.35 : r * n.bw,
          r === n.nb - 1 ? n.L + 0.35 : (r + 1) * n.bw,
          n.H - 0.2,
          n.H + 0.1,
          -0.1,
          0.4,
        );
    },
    r = (e, t, n) => {
      let r = n.grid[0][W(n, n.L / 2)],
        i = n.L / 2 - 1.3,
        a = n.L / 2 + 1.3;
      e.box(`euRubble`, t, r, i, a, 0, 7, 0, 2.6);
      for (let n = i + 0.1; n < a; n += 0.9)
        e.box(`euRubble`, t, r, n, n + 0.5, 7, 7.8, 2.2, 2.6);
      for (let n = i; n < a - 0.1; n += 0.6)
        e.box(`euHole`, t, r, n + 0.2, n + 0.3, 3, 4.2, 2.6, 2.61);
    };
  return {
    key: `euGateTower`,
    name: `Löwentor`,
    plain: 9209724,
    desc: `Medieval city gate tower: thick grey rubble-and-ashlar walls pierced by an arched gate with studded doors and a raised portcullis, arrow slits, clock and lion arms, machicolated top, four corbelled bartizans with cones round a tall slate spire, town-wall stubs.`,
    W: 11,
    D: 9,
    style: {
      wall: `euGateStone`,
      t: 0.9,
      bay: 11 / 3,
      floors: [6, 4, 4, 3.6],
      win: {
        w: 0.8,
        h: 1.3,
        sill: 1.1,
        type: `grid`,
        lites: [1, 2],
        frame: `woodDark`,
        arch: 0.4,
        archMat: `euGranite`,
        ringW: 0.2,
        rec: 0.5,
        curtains: 0.2,
      },
      win0: {
        w: 0.25,
        h: 1.6,
        sill: 2.2,
        type: `grid`,
        lites: [1, 1],
        frame: `euHole`,
        rec: 0.6,
        curtains: 0,
      },
      door: {
        w: 3,
        h: 4.4,
        transom: 0,
        frame: `euGranite`,
        mat: `euDoorOak`,
        rec: 0.55,
        step: `euGranite`,
      },
      base: { mat: `euGranite`, h: 0.8, out: 0.08 },
      belt: { mat: `euGranite`, h: 0.2, out: 0.08 },
      roof: Df,
    },
    front: { kinds: e, extra: A(t(!0), n) },
    back: { kinds: e, extra: A(t(!1), n) },
    right: { kinds: (e) => (e === 0 ? `solid` : `window`), extra: A(n, r) },
    left: { kinds: (e) => (e === 0 ? `solid` : `window`), extra: A(n, r) },
    extra: (e, t, n) => {
      let r = n.H,
        a = 4.8;
      (Tf(e, t, 0, `euSlate`, 5.8, a, r + 0.05, 0.25, 0.25, r + 11),
        e.add(
          `euLead`,
          new C(0.04, 0.08, 2.2, 6).translate(0, r + 12, 0),
          t,
          0,
        ),
        e.add(`euGilt`, new i(0.22, 10, 8).translate(0, r + 11.4, 0), t, 0),
        e.box(`euGilt`, t, 0, 0, 0.8, r + 12.4, r + 12.9, -0.02, 0.02),
        Bf(e, t, {
          x: 0,
          w: 1.1,
          h: 1.1,
          H: r + 0.05,
          span: 2 * a - 0.6,
          pitch: Math.atan2(10.95, 4.55),
          rt: 0,
          zf: 3.3,
          mat: `euSlate`,
          roof: `euSlate`,
          trim: `woodDark`,
        }));
      for (let [n, a] of [
        [-1, -1],
        [1, -1],
        [-1, 1],
        [1, 1],
      ]) {
        let o = n * (11 / 2 - 0.1),
          s = a * (9 / 2 - 0.1),
          c = 0.9;
        (e.add(
          `euGateStone`,
          new d(c, 1.6, 12).rotateX(Math.PI).translate(o, r - 2.6 - 0.8, s),
          t,
          0,
        ),
          Sf(e, `euGateStone`, t, 0, o, s, r - 2.6, r + 1.4, c, c, 12),
          Sf(e, `euGranite`, t, 0, o, s, r + 1.4, r + 1.6, 1.02, 1.02, 12),
          e.add(
            `euSlate`,
            new d(1.1, 3.4, 12).translate(o, r + 1.6 + 1.7, s),
            t,
            0,
          ),
          e.add(`euGilt`, new i(0.1, 8, 6).translate(o, r + 5.1, s), t, 0));
        for (let n of [0, Math.PI / 2, Math.PI, -Math.PI / 2])
          e.box(
            `euHole`,
            af(t, o, s, n),
            0,
            -0.06,
            0.06,
            r - 1.6,
            r + 0.3,
            0.88,
            0.91,
          );
      }
    },
  };
}
