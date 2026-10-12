// assets__greywater-map-CJ8kbtVA 05 — push
// Lines 52509-52763 of readable/assets__greywater-map-CJ8kbtVA.pretty.js (statement-aligned).
function Me() {
  let e = [];
  for (let t of [-1, 1])
    for (let n of [-1, 1])
      e.push(
        [
          t * 1.6 - 0.55,
          0,
          n * 1.6 - 0.55,
          t * 1.6 + 0.55,
          0.5,
          n * 1.6 + 0.55,
        ],
        [
          t * 1.6 - 0.25,
          0.5,
          n * 1.6 - 0.25,
          t * 1.6 + 0.25,
          9,
          n * 1.6 + 0.25,
          `metal`,
        ],
      );
  (e.push([-10, 0, 1.7, -5, 3.3, 5.4]),
    e.push(
      [6.9, 0, 0, 9.1, 2.8, 1.75, `metal`],
      [6.9, 0, 2.8, 9.1, 2.8, 4.55, `metal`],
    ));
  let t = (t, n, r, i) =>
    e.push([
      Math.min(t, r) - 0.05,
      0,
      Math.min(n, i) - 0.05,
      Math.max(t, r) + 0.05,
      2.5,
      Math.max(n, i) + 0.05,
      `metal`,
    ]);
  return (
    t(4.2, -1.3, 11.8, -1.3),
    t(11.8, -1.3, 11.8, 5.3),
    t(4.2, -1.3, 4.2, 5.3),
    t(4.2, 5.3, 6.8, 5.3),
    t(9.2, 5.3, 11.8, 5.3),
    e
  );
}
function Ne() {
  let e = [[-9, 0, -15, 9, 0.25, 15]];
  for (let t = -14; t <= 14.01; t += 4)
    for (let n of [-8, 8])
      e.push([n - 0.22, 0.25, t - 0.22, n + 0.22, 6, t + 0.22, `metal`]);
  for (let [t, n] of [
    [14.1, 14.6],
    [-14.3, -13.8],
  ])
    e.push([-8.3, 6, t, 8.3, 8.4, n], [-4.2, 8.4, t, 4.2, 10.5, n]);
  e.push([-8.4, 5.1, 14.02, 8.4, 6, 14.58]);
  for (let t = 0; t < 3; t++) {
    let n = (8 * t) / 3,
      r = (8 * (t + 1)) / 3,
      i = (e) => 6.4 + 4.1 * (1 - e / 8);
    for (let t of [-1, 1])
      e.push([
        t > 0 ? n : -r,
        i(r),
        -14.6,
        t > 0 ? r : -n,
        i(n) + 0.25,
        14.6,
        `metal`,
      ]);
  }
  for (let t of [-1, 1])
    for (let n = -11; n <= 11; n += 4.2)
      e.push([
        t < 0 ? -6.2 : 4.1,
        0.25,
        n - 1.6,
        t < 0 ? -4.1 : 6.2,
        1.3,
        n + 1.6,
        `wood`,
      ]);
  return e;
}
function Pe() {
  let e = 1.5,
    t = [[-12, 0, -8.5, 12, e, 7.5]];
  for (let n = 0; n < 6; n++) {
    let r = (27 - n * 0.2) / 2,
      i = (4.2 - n * 0.55) / 2,
      a = 9.1 - n * 0.28;
    t.push([-r, 0, a - i, r, ((n + 1) * e) / 6, a + i]);
  }
  t.push([-12, e, -8.5, 12, 13.9, 4.5]);
  for (let n = 0; n < 6; n++) {
    let r = -9.5 + (19 / 5) * n;
    t.push([r - 0.75, e, 6.05, r + 0.75, 11, 7.55]);
  }
  return (
    t.push([-12.3, 11, 4.4, 12.3, 16, 8]),
    t.push(
      [-3.4, 0, 13.8, 3.4, 1.1, 17.2, `stone`],
      [-2.8, 1.1, 13.9, 2.8, 4.5, 17.1, `metal`],
    ),
    t
  );
}
function Fe(e = Ae) {
  let { W: t, D: n, H: r } = e,
    i = t / 2,
    a = t / 3,
    o = r - 1.2,
    s = [];
  for (let e of [-1, 1])
    s.push([e * i - 0.2, 0, -n / 2, e * i + 0.2, r, n / 2, `metal`]);
  s.push([-i, 0, -n / 2 - 0.15, i, r, -n / 2 + 0.15, `metal`]);
  let c = t * 0.62,
    l = r - c * Math.cos(0.95) + 0.1 + c;
  s.push([-i, r, -n / 2 - 0.15, i, l, n / 2 + 0.1, `metal`]);
  for (let e = 0; e <= 3; e++) {
    let t = -i + e * a;
    s.push([t - 0.25, 0, n / 2 - 0.3, t + 0.25, r, n / 2 + 0.3, `metal`]);
  }
  (s.push([-i - 0.2, o - 0.7, n / 2 - 0.45, i + 0.2, r, n / 2 + 0.4, `metal`]),
    s.push([-i, 0, n / 2 - 0.2, -i + a, o - 0.7, n / 2 + 0.05, `metal`]),
    s.push([
      -i + a,
      o - 0.7 - (o * 0.45 - 0.7),
      n / 2 - 0.2,
      -i + 2 * a,
      o - 0.7,
      n / 2 + 0.05,
      `metal`,
    ]));
  for (let [t, n] of e.buses)
    s.push([t - 1.3, 0, n - 5.8, t + 1.3, 3.1, n + 5.8, `metal`]);
  return (
    s.push([
      e.yard[0] - 0.7,
      0,
      e.yard[1] - 1.35,
      e.yard[0] + 0.7,
      1,
      e.yard[1] + 1.45,
      `metal`,
    ]),
    s
  );
}
var Ie = { relay: Me, market: Ne, exchange: Pe, depot: Fe };
function Le(e, t, n) {
  let r = ((e.q % 4) + 4) % 4,
    i = [1, 0, -1, 0][r],
    a = [0, 1, 0, -1][r],
    o = [
      [n[0], n[2]],
      [n[3], n[5]],
    ].map(([e, t]) => [e * i + t * a, -e * a + t * i]);
  return [
    e.x + Math.min(o[0][0], o[1][0]),
    t + n[1],
    e.z + Math.min(o[0][1], o[1][1]),
    e.x + Math.max(o[0][0], o[1][0]),
    t + n[4],
    e.z + Math.max(o[0][1], o[1][1]),
  ];
}
function Re(e) {
  return Ie[e.key](e.opts);
}
function ze(e, t = 0) {
  let n = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  for (let t of Re(e)) {
    let r = Le(e, 0, t);
    ((n[0] = Math.min(n[0], r[0])),
      (n[1] = Math.min(n[1], r[2])),
      (n[2] = Math.max(n[2], r[3])),
      (n[3] = Math.max(n[3], r[5])));
  }
  if (e.opts?.apron) {
    let [t, r, i, a] = e.opts.apron,
      o = Le(e, 0, [t, 0, r, i, 0, a]);
    ((n[0] = Math.min(n[0], o[0])),
      (n[1] = Math.min(n[1], o[2])),
      (n[2] = Math.max(n[2], o[3])),
      (n[3] = Math.max(n[3], o[5])));
  }
  return [n[0] - t, n[1] - t, n[2] + t, n[3] + t];
}
var Be = (e, t, n) => t > e[0] && t < e[2] && n > e[1] && n < e[3],
  Ve = () =>
    je.map((e) => {
      let t = ze(e, 1.5);
      return {
        x: (t[0] + t[2]) / 2,
        z: (t[1] + t[3]) / 2,
        r: Math.hypot(t[2] - t[0], t[3] - t[1]) / 2,
      };
    }),
  He = (e, t, n = 2.5) => !je.some((r) => Be(ze(r, n), e, t));
function Ue(e, t) {
  ((e.baseLandmarks = []), (e.noSpawn ??= []));
  for (let n of je) {
    let r = t(n.x, n.z),
      i = ze(n, 0.8),
      a = (e, t) => Be(i, e, t),
      o = (e) =>
        /^(demo-)?(district-tree|combat-tree|combat-canopy|lamp|compact-flank|forest-trunk|town-bed)/.test(
          String(e),
        );
    ((e.objects = e.objects.filter((e) => !(o(e.id) && a(e.x, e.z)))),
      (e.colliderDefs = e.colliderDefs.filter(
        (e) =>
          !(
            e.aabb &&
            o(e.id) &&
            a((e.aabb[0] + e.aabb[3]) / 2, (e.aabb[2] + e.aabb[5]) / 2)
          ),
      )),
      (e.props = (e.props ?? []).filter((e) => !a(e.x, e.z))),
      (e.lights = (e.lights ?? []).filter((e) => {
        let t = Array.isArray(e.pos) ? [e.pos[0], e.pos[2]] : [e.x, e.z];
        return !a(t[0], t[1]);
      })),
      Re(n).forEach((t, i) => {
        let a = Le(n, r, t).map((e) => Math.round(e * 1e3) / 1e3);
        (e.colliderDefs.push({
          id: `landmark-${n.key}-${i}`,
          aabb: a,
          surface: t[6] ?? `concrete`,
        }),
          t[1] < 0.3 &&
            t[4] - t[1] > 1 &&
            e.noSpawn.push([a[0], a[2], a[3], a[5]]));
      }),
      e.baseLandmarks.push({
        key: n.key,
        letter: n.letter,
        x: n.x,
        y: r,
        z: n.z,
        rotY: (n.q * Math.PI) / 2,
        opts: n.opts ?? null,
      }));
  }
  return e;
}
var W = E.pad,
  G = (e, t) => Math.abs(e) < 134 && Math.abs(t) < 96,
  We = D.filter((e) => /^street-/.test(e.id)),
  K = (e) => Math.round(e * 1e3) / 1e3,
  Ge = (e, t, n, r = 0) =>
    t > e[0] - r && t < e[2] + r && n > e[1] - r && n < e[3] + r;
