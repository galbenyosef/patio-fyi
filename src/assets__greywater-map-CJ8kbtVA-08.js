// assets__greywater-map-CJ8kbtVA 08 — aabb
// Lines 169834-170099 of readable/assets__greywater-map-CJ8kbtVA.pretty.js (statement-aligned).
function Ze(e) {
  ((e.colliderDefs ??= []),
    (e.ladders ??= []),
    (e.advertisingSigns = qe.map((e) => ({ ...e, pos: [...e.pos] }))));
  for (let t of qe) {
    let n = Je[t.id];
    if (!n) continue;
    let r = `sign-${t.id}`;
    if (!n.bounds || !n.movement)
      throw Error(`Stale sign movement data: ${t.id}`);
    let i = Xe(t, [...n.bounds[0], ...n.bounds[1]]).map(
      (e, t) => e + (t < 3 ? -0.002 : 0.002),
    );
    e.colliderDefs.push({
      id: `${r}-shot-broadphase`,
      aabb: i,
      surface: `metal`,
      shotOnly: !0,
    });
    let a = {};
    for (let t of n.movement) {
      let n =
          t.role === `platform`
            ? `platform`
            : t.role === `rail`
              ? `rail`
              : `solid`,
        i = a[n] ?? 0;
      a[n] = i + 1;
      let { source: o, role: s, ...c } = t;
      e.colliderDefs.push({
        ...c,
        id: `${r}-${n}-${i}`,
        ...(n === `platform` ? { walkable: !0 } : {}),
        ...(n === `rail` ? { rail: !0 } : {}),
      });
    }
    for (let [i, a] of n.access.ladders.entries()) {
      let [n, o] = Ye(
        t.yaw,
        a.bottom[0] * (t.scale ?? 1),
        a.bottom[2] * (t.scale ?? 1),
      );
      e.ladders.push({
        sign: t.id,
        x: q(t.pos[0] + n),
        z: q(t.pos[2] + o),
        y0: q(t.pos[1] + a.bottom[1] * (t.scale ?? 1)),
        y1: q(t.pos[1] + a.top[1] * (t.scale ?? 1)),
        facing: q(t.yaw + Math.PI),
        width: a.width * (t.scale ?? 1),
        landingOffset: (a.bottom[2] - a.landing[2]) * (t.scale ?? 1),
        id: `${r}-ladder-${i}`,
      });
    }
  }
  let t = e.labBuildings?.find(
    (e) => e.id === `tower-4` && e.key === `meridian`,
  );
  return (
    t &&
      ((t.clearRooftop = !0),
      (e.colliderDefs = e.colliderDefs.filter((e) => {
        let t = /^demo-tower-4-lab-x(\d+)$/.exec(e.id);
        if (!t) return !0;
        let n = Number(t[1]);
        return n >= 4 && n <= 18
          ? !1
          : (n >= 54 &&
              ((e.aabb = [...e.aabb]), (e.aabb[1] -= 5), (e.aabb[4] -= 5)),
            !0);
      }))),
    e
  );
}
var Qe = {
    revision: 2,
    source: `Original SALIENT Blender equipment; generator tools/blender/build-workshop-mesh.py`,
    triangles: 9036,
    bytes: 665068,
    colliders: [
      {
        id: `lift-base--1-0`,
        aabb: [1.825, 0, 3.35, 2.475, 0.11, 4.05],
        surface: `metal`,
      },
      {
        id: `lift-column--1-1`,
        aabb: [2, 0.06000000000000005, 3.5300000000000002, 2.3, 2.66, 3.87],
        surface: `metal`,
      },
      {
        id: `lift-carriage-2`,
        aabb: [2.21, 0.32500000000000007, 3.5, 2.41, 0.775, 3.9000000000000004],
        surface: `metal`,
      },
      {
        id: `lift-arm--1-2.45-3`,
        aabb: [2.3699999999999997, 0.24, 2.3000000000000003, 2.53, 0.36, 3.85],
        surface: `metal`,
      },
      {
        id: `pad-carrier-4`,
        aabb: [2.375, 0.25, 2.3600000000000003, 3.0250000000000004, 0.37, 2.54],
        surface: `metal`,
      },
      {
        id: `lift-arm--1-4.95-5`,
        aabb: [
          2.3699999999999997, 0.24, 3.5500000000000003, 2.53, 0.36,
          5.1000000000000005,
        ],
        surface: `metal`,
      },
      {
        id: `pad-carrier-6`,
        aabb: [2.375, 0.25, 4.86, 3.0250000000000004, 0.37, 5.04],
        surface: `metal`,
      },
      {
        id: `lift-base-1-7`,
        aabb: [4.5249999999999995, 0, 3.35, 5.175, 0.11, 4.05],
        surface: `metal`,
      },
      {
        id: `lift-column-1-8`,
        aabb: [
          4.699999999999999, 0.06000000000000005, 3.5300000000000002, 5, 2.66,
          3.87,
        ],
        surface: `metal`,
      },
      {
        id: `lift-carriage-9`,
        aabb: [
          4.59, 0.32500000000000007, 3.5, 4.789999999999999, 0.775,
          3.9000000000000004,
        ],
        surface: `metal`,
      },
      {
        id: `lift-arm-1-2.45-10`,
        aabb: [4.47, 0.24, 2.3000000000000003, 4.63, 0.36, 3.85],
        surface: `metal`,
      },
      {
        id: `pad-carrier-11`,
        aabb: [3.9749999999999996, 0.25, 2.3600000000000003, 4.625, 0.37, 2.54],
        surface: `metal`,
      },
      {
        id: `lift-arm-1-4.95-12`,
        aabb: [4.47, 0.24, 3.5500000000000003, 4.63, 0.36, 5.1000000000000005],
        surface: `metal`,
      },
      {
        id: `pad-carrier-13`,
        aabb: [3.9749999999999996, 0.25, 4.86, 4.625, 0.37, 5.04],
        surface: `metal`,
      },
      {
        id: `lift-overhead-14`,
        aabb: [
          1.975, 2.5100000000000002, 3.52, 5.025, 2.73, 3.8800000000000003,
        ],
        surface: `metal`,
      },
      {
        id: `bench-top-15`,
        aabb: [-9, 0.8200000000000001, -4.65, -5, 0.94, -3.35],
        surface: `wood`,
      },
      {
        id: `bench-leg--8.8--4.5-16`,
        aabb: [-8.860000000000001, 0, -4.56, -8.74, 0.82, -4.44],
        surface: `metal`,
      },
      {
        id: `bench-leg--8.8--3.5-17`,
        aabb: [-8.860000000000001, 0, -3.56, -8.74, 0.82, -3.44],
        surface: `metal`,
      },
      {
        id: `bench-leg--5.2--4.5-18`,
        aabb: [-5.26, 0, -4.56, -5.140000000000001, 0.82, -4.44],
        surface: `metal`,
      },
      {
        id: `bench-leg--5.2--3.5-19`,
        aabb: [-5.26, 0, -3.56, -5.140000000000001, 0.82, -3.44],
        surface: `metal`,
      },
      {
        id: `bench-lower-shelf-20`,
        aabb: [-8.85, 0.18, -4.525, -5.15, 0.28, -3.475],
        surface: `metal`,
      },
      {
        id: `toolboard-21`,
        aabb: [-9, 0.9500000000000001, -4.58, -5, 2.13, -4.48],
        surface: `metal`,
      },
      {
        id: `vise-base-22`,
        aabb: [-6.05, 0.94, -4.1, -5.55, 1.05, -3.6999999999999997],
        surface: `metal`,
      },
      {
        id: `vise-jaw--5.98-23`,
        aabb: [
          -6.04, 1.035, -4.1, -5.920000000000001, 1.2449999999999999,
          -3.6999999999999997,
        ],
        surface: `metal`,
      },
      {
        id: `vise-jaw--5.64-24`,
        aabb: [
          -5.699999999999999, 1.035, -4.1, -5.58, 1.2449999999999999,
          -3.6999999999999997,
        ],
        surface: `metal`,
      },
      {
        id: `engine-cradle-25`,
        aabb: [2.6, 0.09, -4.525, 4.4, 0.27, -2.875],
        surface: `metal`,
      },
      {
        id: `engine-block-26`,
        aabb: [
          2.95, 0.27499999999999997, -4.3500000000000005, 4.05, 1.125,
          -3.0500000000000003,
        ],
        surface: `metal`,
      },
    ],
  },
  $e = {
    revision: 1,
    source: `Original SALIENT; tools/blender/build-workshop-roof.py; no external assets`,
    triangles: 1944,
    bytes: 140316,
    colliders: [
      {
        id: `monitor-housing`,
        aabb: [-2.9, 6.47, -7.8, 2.9, 7.87, 7.8],
        surface: `metal`,
      },
      {
        id: `monitor-cap`,
        aabb: [-3.15, 7.87, -8.1, 3.15, 8.03, 8.1],
        surface: `metal`,
      },
      {
        id: `wing-deck--1`,
        aabb: [-11.2, 6.470000000000001, -9.3, -3.05, 6.51, 9.3],
        surface: `metal`,
      },
      {
        id: `wing-deck-1`,
        aabb: [3.05, 6.470000000000001, -9.3, 11.2, 6.51, 9.3],
        surface: `metal`,
      },
    ],
  };
