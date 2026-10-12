// assets__lab-buildings-view-DJVr8phc 191 — box
// Lines 60468-60749 of readable/assets__lab-buildings-view-DJVr8phc.pretty.js (statement-aligned).
function kv() {
  return {
    key: `miHQ`,
    name: `Regimental Headquarters`,
    plain: 9325112,
    desc: `Georgian-revival regimental HQ: red brick with limestone lintels and keystones, full-height pedimented portico on a stepped podium with the regimental crest, slate hip roof, cupola and flag.`,
    W: 26,
    D: 14,
    style: {
      wall: `miBrickRed`,
      t: 0.35,
      bay: 26 / 7,
      floors: [4, 3.6],
      win: {
        w: 1.3,
        h: 2.2,
        sill: 0.9,
        type: `sash`,
        lites: [2, 3],
        frame: `trimWhite`,
        header: `limestone`,
        headerH: 0.28,
        keystone: !0,
        sillMat: `limestone`,
        rec: 0.14,
        curtains: 0.6,
      },
      door: {
        w: 1.6,
        h: 2.6,
        transom: 0.7,
        frame: `trimWhite`,
        mat: `miDoorGreen`,
        rec: 0.25,
      },
      base: { mat: `limestone`, h: 0.9, out: 0.05 },
      belt: { mat: `limestone`, h: 0.22, out: 0.05 },
      corners: `limestone`,
      cornice: { mat: `limestone`, h: 0.3, out: 0.3, dentils: !0 },
      roof: Sv,
    },
    front: {
      kinds: (e, t) => (e === 0 && t === 3 ? `door` : `window`),
      extra: Ov,
    },
    back: { kinds: (e, t) => (e === 0 && t === 3 ? `door` : `window`) },
    left: { kinds: () => `window` },
    right: { kinds: () => `window` },
    extra: (e, t, n) => {
      let r = xv(e, t, n, `miSlate`, 28 * C_, 0.5, `limestone`);
      for (let i of [-8.5, 8.5])
        A(e, t, `miBrickRed`, i, -2.4, n.H - 0.5, r - 0.2, 1.1, 0.7);
      (e.box(`trimWhite`, t, 0, -1.2, 1.2, r - 1.2, r + 1.1, -1.2, 1.2),
        e.box(`trimWhite`, t, 0, -1.35, 1.35, r + 1.1, r + 1.3, -1.35, 1.35),
        X(e, `louver`, t, 0, 0, 0, r + 1.3, r + 2.6, 0.85, 0.85, 8));
      for (let n = 0; n < 8; n++) {
        let i = (n / 8) * Math.PI * 2 + Math.PI / 8;
        e.box(
          `trimWhite`,
          t,
          0,
          Math.cos(i) * 0.86 - 0.06,
          Math.cos(i) * 0.86 + 0.06,
          r + 1.3,
          r + 2.6,
          Math.sin(i) * 0.86 - 0.06,
          Math.sin(i) * 0.86 + 0.06,
        );
      }
      (X(e, `trimWhite`, t, 0, 0, 0, r + 2.6, r + 2.8, 1.05, 1.05, 8),
        e.add(
          `miCopper`,
          new w(1, 16, 6, 0, Math.PI * 2, 0, Math.PI / 2).translate(
            0,
            r + 2.8,
            0,
          ),
          t,
          0,
        ),
        sv(e, t, 0, 0, r + 3.7, 0, 5),
        O_(n, r + 8.8));
    },
  };
}
function Av(e, t, n) {
  let r = n.grid[0][3];
  (U_(e, `miConcrete`, t, n, 3.2, 12.3, 3.2, 3.5, 0, 3.6, void 0, 2.5),
    U_(e, `miHazard`, t, n, 3.2, 12.3, 3.05, 3.2, 3.45, 3.6, void 0, 2.5));
  for (let r of [3.6, 11.9]) {
    let i = Y(n, r, 1);
    (e.box(`miConcrete`, t, i, r - 0.2, r + 0.2, 0, 3.05, 3.1, 3.5),
      e.box(`miHazard`, t, i, r - 0.21, r + 0.21, 0, 1.2, 3.09, 3.51));
  }
  (e.box(`miYellow`, t, r, 10.8, 11.3, 0, 1.15, 2, 2.5),
    e.box(`miSteelDark`, t, r, 11.3, 11.9, 0.9, 1.2, 2.1, 2.4),
    e.box(
      `miBoom`,
      t,
      r,
      4.2,
      10.8,
      0.98,
      1.1,
      2.19,
      2.31,
      W_(4.2, 10.8, 0.98, 1.1),
    ),
    e.box(`miYellow`, t, Y(n, 4.5, 1), 4.4, 4.5, 0, 0.98, 2.2, 2.3),
    U_(e, `miHazard`, t, n, 3.4, 12, 0, 0.07, 1, 1.4));
  let i = 2.4,
    a = Y(n, i, 1);
  (X(e, `miSteel`, t, a, i, 3.5, 0, 2.3, 0.04, 0.04, 8),
    e.add(
      `miSgStop`,
      new s(0.42, 0.42, 0.03, 8)
        .rotateX(Math.PI / 2)
        .rotateZ(Math.PI / 8)
        .translate(i, 2.05, 3.55),
      t,
      a,
      W_(1.98, 2.82, 1.63, 2.47),
    ),
    tv(e, t, n, -0.4, 0.8, 0.9, 5));
}
function jv() {
  return {
    key: `miGatehouse`,
    name: `Main Gate Guardhouse`,
    plain: 14605266,
    desc: `Base main-gate guardhouse: whitewashed block with armoured windows, lane canopy with hazard striping, boom barrier and stop sign, razor wire on the parapet and a sandbagged guard post with a searchlight on the roof.`,
    W: 12,
    D: 7,
    style: {
      wall: `miCmuWhite`,
      t: 0.3,
      bay: 3,
      floors: [3.2],
      parapet: 0.6,
      parapetMat: `miConcrete`,
      win: {
        w: 2.2,
        h: 1.3,
        sill: 1,
        type: `grid`,
        lites: [2, 1],
        frame: `miSteelDark`,
        frameW: 0.1,
        rec: 0.1,
        curtains: 0.2,
      },
      door: {
        w: 1,
        h: 2.1,
        transom: 0,
        frame: `miSteelDark`,
        mat: `miDoorSteel`,
        rec: 0.15,
      },
      base: { mat: `miConcreteDark`, h: 0.4, out: 0.04 },
    },
    front: {
      kinds: (e, t) => (t === 0 ? `door` : `window`),
      signs: [
        { mat: `miSgGate`, rect: [3.3, 11.9, 3.27, 3.75], z0: 0.01, z1: 0.02 },
      ],
      extra: Av,
    },
    back: { kinds: (e, t) => (t === 1 ? `window` : `solid`) },
    left: { kinds: () => `solid` },
    right: { kinds: (e, t) => (t === 0 ? `window` : `solid`) },
    extra: (e, t, n) => {
      let i = n.H,
        a = i + 3;
      for (let n of [-5.300000000000001, -2.7])
        for (let r of [-0.30000000000000004, 2.3])
          e.box(
            `miSteel`,
            t,
            0,
            n - 0.08,
            n + 0.08,
            i,
            a + 2.5,
            r - 0.08,
            r + 0.08,
          );
      for (let n of [-0.30000000000000004, 2.3])
        D(
          e,
          `miSteel`,
          t,
          0,
          [-5.300000000000001, i + 0.2, n],
          [-2.7, a - 0.2, n],
          0.06,
        );
      (e.box(
        `miConcrete`,
        t,
        0,
        -5.6000000000000005,
        -2.4,
        a - 0.15,
        a,
        -0.6000000000000001,
        2.6,
      ),
        nv(e, t, 0, -5.6000000000000005, -2.4, 2.4, 6, a),
        nv(e, t, 0, -5.6000000000000005, -2.4, -0.4, 6, a));
      let o = D_(t, 0, 0, Math.PI / 2);
      for (let t of [-5.4, -2.6]) nv(e, o, 0, -2.4 + 0.2, 0.2, t, 6, a);
      (e.add(
        `miCorrOlive`,
        new r(3.8000000000000003, 0.08, 3.8)
          .rotateX(0.12)
          .translate(-4, a + 2.6, 1),
        t,
        0,
      ),
        dv(e, t, 0, -2.8000000000000003, a + 2.7, 2.1999999999999997, 0.5),
        iv(e, t, 0, -4, -0.75, i, a + 1.2, 1, 0));
      for (let r = -5.8; r <= 5.8; r += 0.32)
        e.add(
          `miSteel`,
          new u(0.24, 0.014, 3, 10)
            .rotateY(Math.PI / 2)
            .translate(r, i + 0.85, n.D / 2 - 0.15),
          t,
          0,
        );
      for (let r of [-2.8, 0.4])
        fv(e, t, 0, -n.W / 2 - 0.7, r + 1.2, 3, Math.PI / 2);
      (sv(e, t, 0, 5.3, i + 0.6, -2.8, 4.5), O_(n, a + 3.2));
    },
  };
}
var Mv = (e, t, n, r) => (i, a, o) => {
  for (let s = 0; s < o.nb; s++)
    if (e(0, s, o.nb) === `window`) {
      let e = (s + 0.5) * o.bw,
        c = o.grid[0][s],
        l = t + n;
      i.box(
        `miConcrete`,
        a,
        c,
        e - r / 2 - 0.3,
        e + r / 2 + 0.3,
        l + 0.05,
        l + 0.3,
        0,
        0.45,
      );
      for (let n of [-1, 1])
        i.box(
          `miConcrete`,
          a,
          c,
          e + n * (r / 2 + 0.15) - 0.15,
          e + n * (r / 2 + 0.15) + 0.15,
          t - 0.1,
          l + 0.05,
          0,
          0.3,
        );
    }
};
function Nv(e, t, n, r) {
  return new C(
    A_([
      [-e / 2 - r, -(t / 2 + r) + n],
      [-e / 2 - r + n, -(t / 2 + r)],
      [e / 2 + r - n, -(t / 2 + r)],
      [e / 2 + r, -(t / 2 + r) + n],
      [e / 2 + r, t / 2 + r - n],
      [e / 2 + r - n, t / 2 + r],
      [-e / 2 - r + n, t / 2 + r],
      [-e / 2 - r, t / 2 + r - n],
    ]).map((e) => new h(e.x, -e.y)),
  );
}
