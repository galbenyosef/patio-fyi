// assets__greywater-map-Q51CbCv- 25 — math
// Lines 174863-175129 of readable/assets__greywater-map-Q51CbCv-.pretty.js (statement-aligned).
function Bt(e, { collision: t = !0 } = {}) {
  let n = {
      id: `greywater-compact-v17`,
      name: `Greywater Compact — interwoven district`,
      size: 440,
      bounds: [-220, -220, 220, 220],
      objects: [],
      colliderDefs: [],
      buildings: [],
      observationRooms: [],
      routes: Ft,
      focus: [0, e(0, 0) + 4, 0],
      compact: !0,
      flatDeploy: !0,
      vistaDeploy: {
        pos: [0, 96, -140],
        look: [0, 110, -2700],
        fov: 62,
        drift: 14,
      },
      canopy: !0,
      homeBases: [-1, 1].map((t) => {
        let n = t * 185;
        return {
          id: `hq-` + (t < 0 ? 0 : 1),
          pos: [n, e(n, 0), 0],
          yaw: (t * Math.PI) / 2,
        };
      }),
      objectives: de
        .map(([e, t, n, r]) => [n, r, e, t])
        .map(([t, n, r, i]) => ({
          id: `conquest-` + r.toLowerCase(),
          letter: r,
          name: i,
          pos: [t, e(t, n), n],
          radius: 12,
        })),
      yards: [
        [-175, 0, 27, 0],
        [175, 0, 27, 1],
        [-95, -12, 22, 2],
        [95, 12, 22, 4],
      ],
      plotFit: ve,
      keepOut: oe(Mt)
        .filter(([e, t]) => !_e(e, t, 3))
        .map(([e, t, n, r]) => [e, t, [2.35, 3.1, 1.8][n] * r + 0.5]),
      boards: [],
      vehicleSpawns: [],
    },
    r = (t, r, i, a, o, s, c = `concrete`, l = 0, u = !0) => {
      let d = e(r, i) + l;
      (n.objects.push({
        id: t,
        kind: `box`,
        x: r,
        y: d,
        z: i,
        sx: a,
        sy: o,
        sz: s,
        material: c,
        cast: !0,
      }),
        u &&
          n.colliderDefs.push({
            id: `demo-` + t,
            aabb: [r - a / 2, d, i - s / 2, r + a / 2, d + o, i + s / 2],
            surface: c === `metal` ? `metal` : `concrete`,
          }));
    },
    i = d(n, e);
  for (let e of n.objectives) {
    let [t, , n] = e.pos,
      i = `capture-canopy-${e.letter}`;
    r(`${i}-roof`, t, n, 20, 0.3, 18, `roof`, 5.2);
    for (let e of [-9.5, 9.5])
      for (let a of [-8.5, 8.5])
        r(`${i}-post-${e}-${a}`, t + e, n + a, 0.3, 5.2, 0.3, `metal`);
    r(`${i}-trim`, t, n - 9, 20, 0.3, 0.15, `plasterRed`, 5, !1);
  }
  for (let e of [-102, 0, 102]) {
    r(`avenue-${e}`, 0, e, 292, 0.018, 12, `roof`, 0.014, !1);
    for (let t of [-1, 1]) {
      let n = e + t * 7,
        i = Math.abs(n) < 97 && Math.abs(n) > 5;
      for (let [n, a] of i ? [[-134, 134]] : [[-146, 146]])
        (r(
          `avenue-walk-${e}-${t}-${n}`,
          (n + a) / 2,
          e + t * 8.25,
          a - n,
          0.03,
          4.5,
          `pavement`,
          0.012,
          !1,
        ),
          r(
            `avenue-kerb-${e}-${t}-${n}`,
            (n + a) / 2,
            e + t * 6.15,
            a - n,
            0.05,
            0.3,
            `concreteDark`,
            0.012,
            !1,
          ));
    }
    for (let t = -124; t <= 124; t += 12)
      r(`avenue-dash-${e}-${t}`, t, e, 4, 0.008, 0.16, `plaster`, 0.035, !1);
  }
  for (let e of [-140, 140]) {
    for (let t of [-51, 51])
      r(`cross-street-${e}-${t}`, e, t, 12, 0.018, 90, `roof`, 0.014, !1);
    for (let t of [-51, 51])
      for (let n of [-1, 1])
        (r(
          `cross-walk-${e}-${t}-${n}`,
          e + n * 8.25,
          t,
          4.5,
          0.03,
          78,
          `pavement`,
          0.012,
          !1,
        ),
          r(
            `cross-kerb-${e}-${t}-${n}`,
            e + n * 6.15,
            t,
            0.3,
            0.05,
            78,
            `concreteDark`,
            0.012,
            !1,
          ));
    for (let t = -84; t <= 84; t += 12)
      Math.abs(t) > 12 &&
        r(`cross-dash-${e}-${t}`, e, t, 0.16, 0.008, 4, `plaster`, 0.035, !1);
  }
  for (let t = 0; t < 2; t++) {
    let r = t ? 1 : -1;
    (i.sandbags(`compact-hq-bags-` + t, r * 151, 0, 1.6, 28),
      i.generator(`compact-hq-gen-` + t, r * 156, r * -12),
      i.crates(`compact-hq-crates-` + t, r * 155, r * 12),
      i.sandbags(`compact-hq-wing-` + t, r * 161, r * 22, 18, 1.4),
      i.van(`compact-hq-van-` + t, r * 163, r * 29, !0));
    for (let [e, i] of [
      [0, -18],
      [1, -9],
      [2, 0],
      [3, 9],
    ].values())
      n.vehicleSpawns.push({
        team: t,
        type: 0,
        x: r * (170 + (e % 2 ? 7 : 0)),
        z: r * i,
      });
    (n.vehicleSpawns.push({ team: t, type: 1, x: r * 181, z: r * -16 }),
      n.vehicleSpawns.push({ team: t, type: 2, x: r * 181, z: 0 }));
    for (let [i, o, s] of Nt(r))
      a(n, {
        id: `helipad-${t}-${i}`,
        x: o,
        z: s,
        type: i,
        team: t,
        heading: t ? Math.PI / 2 : -Math.PI / 2,
        toward: -r,
        ground: e,
        marks: `plaster`,
      });
  }
  for (let e of [-16, 16]) {
    r(`viaduct-${e}-deck`, e, 0, 8, 1, 84, `concreteDark`, 6.2);
    for (let t of [-1, 1])
      r(
        `viaduct-${e}-parapet-${+(t > 0)}`,
        e + t * 3.8,
        0,
        0.3,
        1.1,
        84,
        `concrete`,
        7.2,
        !1,
      );
    for (let t = -35; t <= 35; t += 10)
      if (
        (r(`viaduct-${e}-pier-${t}`, e, t, 1.3, 6.2, 1.3, `concreteDark`),
        !(Math.abs(t + 5) < 7 || Math.abs(Math.abs(t + 5) - 30) < 6) && t < 35)
      ) {
        let n = Math.abs(t + 5) !== 20 || `fire`;
        (i.car(
          `viaduct-${e}-wreck-${t}`,
          e + (t % 20 ? 1.2 : -1.2),
          t + 5,
          !1,
          null,
          n,
        ),
          i.rubble(`viaduct-${e}-rubble-${t}`, e, t + 5, 3));
      }
  }
  for (let [e, t, n] of [
    [0, -58, 4],
    [1, 58, -4],
  ])
    (i.van(`compact-van-` + e + `a`, t - 3.2, n, !0),
      i.van(`compact-van-` + e + `b`, t + 3.2, n, !0),
      i.planter(
        `compact-planter-` + e + `a`,
        t - 5,
        -Math.sign(t) * 19,
        4,
        1.2,
      ),
      i.planter(
        `compact-planter-` + e + `b`,
        t + 5,
        -Math.sign(t) * 19,
        4,
        1.2,
      ),
      i.bench(`compact-bench-` + e, t, -Math.sign(t) * 19, !0));
  i.van(`compact-loading-van-west`, -32, -12, !1);
  for (let e of [-3.5, -1.5, 0.5])
    i.dumpster(`compact-dumpster-west-` + e, -32, -9 + e + 8, !1);
  i.van(`compact-loading-van-east`, 32, 12, !1);
  for (let e of [-3.5, -1.5, 0.5])
    i.dumpster(`compact-dumpster-east-` + e, 32, 9 + e - 8 + 0.5, !1);
  for (let [e, t, n] of [
    [0, -120, -18],
    [1, -70, 22],
    [2, -18, -12],
    [3, 18, 12],
    [4, 70, -22],
    [5, 120, 18],
  ])
    i.car(`compact-street-car-` + e, t, n, !0, void 0, e % 3 == 1);
  for (let e of [-1, 1])
    for (let t of [-110, -50, 50, 110])
      (t + 110) % 120 == 0
        ? i.shelter(`compact-shelter-` + e + `-` + t, t, e * 90, !0)
        : (i.planter(
            `compact-flank-planter-` + e + `-` + t,
            t - 2.6,
            e * 90,
            3,
            1.1,
          ),
          i.planter(
            `compact-flank-planter2-` + e + `-` + t,
            t + 2.6,
            e * 90,
            3,
            1.1,
          ));
  let o = Et(bt(ct(p(lt(kt(st(ot(et(s(n, e, It)), e), e), e)), e), e), e));
  return (jt(o), t ? m(o) : o);
}
