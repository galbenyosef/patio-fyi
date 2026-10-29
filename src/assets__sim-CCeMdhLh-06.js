// assets__sim-CCeMdhLh 06 — box
// Lines 1521-1860 of readable/assets__sim-CCeMdhLh.pretty.js (statement-aligned).
function Xt() {
  let e = Jt(),
    t = Jt(),
    n = Jt(),
    r = [
      [-17.3, 0.28, 3.4, 4.4],
      [-13.5, 1.15, 2.1, 4.55],
      [-8, 1.75, 0.6, 4.55],
      [7.8, 1.75, 0.6, 4.55],
      [10.5, 1.35, 1.05, 3.8],
      [12.5, 0.18, 1.75, 2.25],
    ];
  for (let t = 1; t < r.length; t++)
    e.loft(Yt(...r[t - 1]), Yt(...r[t]), t === r.length - 1 ? z.dark : z.skin);
  for (let t of [-1, 1])
    (e.loft(
      [
        [3.2, 5.5, t * 1.4],
        [-1.7, 5.5, t * 1.4],
        [-1.7, 6.05, t * 1.4],
        [2.6, 6.25, t * 1.4],
      ],
      [
        [2, 5.5, t * 20.2],
        [-0.5, 5.5, t * 20.2],
        [-0.5, 5.75, t * 20.2],
        [1.8, 5.85, t * 20.2],
      ],
      z.wing,
    ),
      e.loft(
        [
          [-13, 4.4, t * 0.3],
          [-17, 4.4, t * 0.3],
          [-17, 4.7, t * 0.3],
          [-13, 4.7, t * 0.3],
        ],
        [
          [-15, 4.5, t * 8],
          [-17, 4.5, t * 8],
          [-17, 4.67, t * 8],
          [-15, 4.67, t * 8],
        ],
        z.wing,
      ),
      e.quad(
        [8.1, 2.65, t * 1.77],
        [9.8, 2.65, t * 1.51],
        [9.8, 3.32, t * 1.51],
        [8.1, 3.55, t * 1.77],
        z.glass,
        5,
      ),
      e.box(
        [-8, 0.9, t > 0 ? 1.6 : -2.3, 2.5, 3.1, t > 0 ? 2.3 : -1.6],
        z.dark,
      ),
      e.box(
        [-16.4, 8.6, t * 0.24 - 0.008, -14.6, 9.15, t * 0.24 + 0.008],
        z.white,
      ),
      e.box(
        [-15.7, 9.45, t * 0.24 - 0.009, -15.05, 10.7, t * 0.24 + 0.009],
        z.white,
      ));
  (e.loft(
    [
      [-11, 4.45, -0.22],
      [-15.2, 11.6, -0.22],
      [-17.3, 11.6, -0.22],
      [-17, 4.45, -0.22],
    ],
    [
      [-11, 4.45, 0.22],
      [-15.2, 11.6, 0.22],
      [-17.3, 11.6, 0.22],
      [-17, 4.45, 0.22],
    ],
    z.navy,
  ),
    e.box([-2, 4.3, -1.4, 2.8, 5.65, 1.4], z.skin));
  for (let t of f.engines)
    (e.cyl(2.7, 5.43, t, 0.67, 6.6, `x`, z.dark),
      e.cyl(6.02, 5.43, t, 0.33, 0.55, `x`, z.skin));
  for (let e of [-0.8, 0.8])
    for (let n of [-2.05, 2.05])
      (t.cyl(e, 0.55, n, 0.55, 0.48, `z`, z.black, 12),
        t.cyl(e, 0.55, n, 0.25, 0.5, `z`, z.metal));
  for (let e of [-0.26, 0.26]) t.cyl(9, 0.36, e, 0.36, 0.22, `z`, z.black);
  for (let e of [-2.05, 2.05])
    t.box([-0.12, 0.55, e - 0.07, 0.12, 1.6, e + 0.07], z.metal);
  (t.box([8.92, 0.36, -0.07, 9.08, 1.35, 0.07], z.metal),
    n.cyl(0, 0, 0, 0.3, 0.4, `x`, z.skin));
  for (let e = 0; e < 4; e++) {
    let t = (e * Math.PI) / 2,
      r = Math.cos(t),
      i = Math.sin(t),
      a = (e, t) => [
        [-0.055, e * r - t * i, e * i + t * r],
        [-0.055, e * r + t * i, e * i - t * r],
        [0.055, e * r + t * i, e * i - t * r],
        [0.055, e * r - t * i, e * i + t * r],
      ];
    (n.loft(a(0.27, 0.13), a(1.83, 0.19), z.black),
      n.loft(a(1.83, 0.19), a(2.05, 0.15), z.yellow));
  }
  return { body: e.finish(), gear: t.finish(), prop: n.finish() };
}
function Zt(e) {
  let t = Jt(),
    n = Jt(),
    r = Jt(),
    i = (n, r, i, a, o, s = e.surfaceY) => t.box([n, 12, r, i, s, a], o, 0),
    a = e.runwayZ,
    o = e.taxiZ,
    s = o + 15,
    c = a - 34;
  (i(-700, a - 34, 700, a + 34, 6580579, e.surfaceY - 0.06),
    i(-660, a - 23, 660, a + 23, 3423034),
    i(-430, o - 15, 550, s, 5002064),
    i(322, s, 410, e.standZ + 28, 6910314),
    i(467, a + 23, 553, s, 5002064),
    i(-403, a + 23, -317, s, 5002064));
  let l = (t, r, i, a, o = 14539974) =>
    n.box([t, e.surfaceY + 0.018, r, i, e.surfaceY + 0.019, a], o, 0);
  for (let e of [a - 21.5, a + 21.5]) l(-650, e - 0.12, 650, e + 0.12);
  for (let e = -610; e < 620; e += 40) l(e, a - 0.35, e + 20, a + 0.35);
  for (let e of [-613, 573])
    for (let t = a - 18; t < a + 18; t += 4.4) l(e, t, e + 22, t + 2.2);
  for (let e of [-440, 405])
    for (let t of [a - 12, a + 11]) l(e, t, e + 28, t + 3);
  (l(-350, o - 0.13, 510, o + 0.13, 12954708),
    l(509.87, a, 510.13, o, 12954708),
    l(-360.13, a, -359.87, o, 12954708),
    l(359.87, o, 360.13, e.standZ, 12954708),
    l(53.87, o, 54.13, s - 2, 12954708));
  for (let e of [-200, 200]) l(e - 0.13, c - 4, e + 0.13, a - 23, 12954708);
  for (let [e, t] of [
    [467, 553],
    [-403, -317],
  ])
    for (let n of [0, 1.2]) l(e, a + 34.4 + n, t, a + 34.7 + n, 12954708);
  let u = {
      0: [0, 1, 2, 3, 4, 5],
      1: [1, 2],
      2: [0, 1, 6, 4, 3],
      3: [0, 1, 2, 3, 6],
      6: [0, 2, 3, 4, 5, 6],
      7: [0, 1, 2],
      8: [0, 1, 2, 3, 4, 5, 6],
      9: [0, 1, 2, 3, 5, 6],
    },
    d = [
      [0, 0, 1, 5],
      [0, 4, 6, 5],
      [6, 4, 12, 5],
      [11, 0, 12, 5],
      [6, 0, 12, 1],
      [0, 0, 6, 1],
      [5.5, 0, 6.5, 5],
    ];
  for (let [e, t] of [
    [535, [3, 6]],
    [-550, [1, 8]],
  ])
    for (let n = 0; n < 2; n++)
      for (let r of u[t[n]]) {
        let [t, i, o, s] = d[r];
        l(e + t, a - 7 + n * 9 + i, e + o, a - 7 + n * 9 + s);
      }
  for (let t = -650; t <= 650; t += 50)
    for (let n of [a - 23, a + 23])
      r.box(
        [
          t - 0.3,
          e.surfaceY + 0.025,
          n - 0.3,
          t + 0.3,
          e.surfaceY + 0.055,
          n + 0.3,
        ],
        16769955,
      );
  for (let t = 680; t <= 940; t += 40)
    for (let n of [a - 5, a, a + 5])
      r.box(
        [
          t - 0.35,
          e.surfaceY + 0.025,
          n - 0.35,
          t + 0.35,
          e.surfaceY + 0.055,
          n + 0.35,
        ],
        16772545,
      );
  return { pavement: t.finish(), paint: n.finish(), lights: r.finish() };
}
function Qt(e, t, n, r = 0, i = !1) {
  let [a, o, s] = e,
    c = Math.cos(t),
    l = Math.sin(t),
    u = Math.cos(n),
    d = Math.sin(n),
    f = Math.cos(r),
    p = Math.sin(r);
  return (
    i
      ? (([a, s] = [c * a - l * s, l * a + c * s]),
        ([a, o] = [u * a + d * o, -d * a + u * o]),
        ([o, s] = [f * o + p * s, -p * o + f * s]))
      : (([o, s] = [f * o - p * s, p * o + f * s]),
        ([a, o] = [u * a - d * o, d * a + u * o]),
        ([a, s] = [c * a + l * s, -l * a + c * s])),
    [a, o, s]
  );
}
function $t(e) {
  return [
    { part: `body`, offset: [0, 0, 0], spin: 0 },
    { part: `gear`, offset: [0, (1 - e.gear) * 1.8, 0], spin: 0 },
    ...f.engines.map((t, n) => ({
      part: `prop`,
      offset: [f.prop.x, f.prop.y, t],
      spin: e.propAngle + n * 0.4,
    })),
  ];
}
var en;
function tn() {
  if (!en) {
    let e = Xt(),
      t = Zt(I);
    en = {};
    for (let [n, r] of Object.entries({ ...e, ...t })) {
      let e = i(r.positions, r.mats);
      for (let t = 0; t < e.nodes.length; t += 8)
        for (let n = 0; n < 3; n++)
          ((e.nodes[t + n] -= 2e-4), (e.nodes[t + n + 3] += 2e-4));
      en[n] = e;
    }
  }
  return en;
}
function nn(e, t, n, r) {
  if (!e.visible) return null;
  let i = tn(),
    o = [e.x, e.y, e.z],
    s = e.scale ?? 1,
    c = Qt(
      t.map((e, t) => (e - o[t]) / s),
      e.yaw,
      e.pitch,
      0,
      !0,
    ),
    l = Qt(n, e.yaw, e.pitch, 0, !0),
    u = null;
  for (let o of $t(e)) {
    let d = Qt(
        c.map((e, t) => e - o.offset[t]),
        0,
        0,
        o.spin,
        !0,
      ),
      f = Qt(l, 0, 0, o.spin, !0),
      p = a(i[o.part], ...d, ...f, 0, (u?.dist ?? r) / s);
    if (p) {
      let i = p.dist * s;
      if (i > r) continue;
      u = {
        dist: i,
        point: t.map((e, t) => e + n[t] * i),
        normal: Qt(p.normal, e.yaw, e.pitch, o.spin),
        surface: p.mat === 5 ? `glass` : `metal`,
        pen: p.mat === 5 ? `glass` : `metal`,
        exact: !0,
        part: o.part,
      };
    }
  }
  return u;
}
function rn(e, t, n) {
  let r = null;
  for (let i of [`pavement`, `lights`]) {
    let o = a(tn()[i], ...e, ...t, 0, r?.dist ?? n);
    o &&
      (r = {
        ...o,
        point: e.map((e, n) => e + t[n] * o.dist),
        surface: `concrete`,
        pen: `concrete`,
        exact: !0,
      });
  }
  return r;
}
function an(e, t, n) {
  tn();
  let r = null,
    i = null,
    a = () => {
      let e = n();
      return (
        (e !== r || i?.epoch !== t.epoch) &&
          ((r = e), (i = { ...qt(e, t.epoch), epoch: t.epoch })),
        i
      );
    },
    o = {
      id: `hangar-runway-aircraft`,
      mask: `static`,
      solid: !1,
      rayIndexBounds: [-2600, 0, -300, 2600, 900, 10],
      get aabb() {
        let e = a(),
          t = I.aircraftRadius + 1;
        return [e.x - t, e.y - t, e.z - t, e.x + t, e.y + t, e.z + t];
      },
      raycast(e, t, n) {
        return nn(a(), e, t, n);
      },
    },
    s = {
      id: `hangar-runway-pavement`,
      mask: `static`,
      solid: !1,
      aabb: [-710, 10, -300, 950, 13, 0],
      raycast: rn,
    };
  return (
    e.map.addCollider(o),
    e.map.addCollider(s),
    () => {
      (e.map.removeCollider(o.id), e.map.removeCollider(s.id));
    }
  );
}
