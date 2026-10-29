// assets__greywater-map-Q51CbCv- 12 — aabb
// Lines 171329-171676 of readable/assets__greywater-map-Q51CbCv-.pretty.js (statement-aligned).
function st(e, t) {
  let n = [];
  for (let e of [-1, 1])
    for (let [t, r] of [-114, -76, -38, 0, 38, 76, 114].entries())
      n.push([
        r,
        e * (124 + [0, 3, -2, 2, -2, 3, 0][t]),
        [3, 5, 2, 6, 4, 3, 5][t],
        [28, 26, 30, 24, 30, 26, 28][t],
        20,
      ]);
  for (let e of [-42, 42])
    for (let t of [-65, 0, 65]) n.push([t, e, 4 + (n.length % 3)]);
  for (let e of [-25, 25])
    for (let t of [-43, -20, 20, 43])
      n.push([t, e, 3 + (n.length % 3), Math.abs(t) === 43 ? 14 : 12, 14]);
  ((n[21] = [-20, -70, 4, 12, 14]), (n[23][3] = 12), (e.infill = []));
  for (let [r, [i, a, o, s = 22, c = 18]] of n.entries()) {
    if (
      [
        ...e.highrises,
        ...(e.facadeBuildings ?? []).map((e) => ({
          ...e,
          width: e.w,
          depth: e.d,
        })),
      ].some(
        (e) =>
          Math.abs(e.x - i) < (e.width + s) / 2 + 7 &&
          Math.abs(e.z - a) < (e.depth + c) / 2 + 4,
      ) ||
      e.objectives.some(
        (e) =>
          Math.abs(e.pos[0] - i) < s / 2 + 12 &&
          Math.abs(e.pos[2] - a) < c / 2 + 11,
      )
    )
      continue;
    let n = `infill-${r}`,
      l = t(i, a),
      u = o * 3.2,
      d = r % 2 ? `plasterRed` : `plaster`,
      f = (t, r, o, s, c, u, d, f, p = !1) => {
        let m = `${n}-${t}`;
        (e.objects.push({
          id: m,
          kind: `box`,
          x: i + r,
          y: l + o,
          z: a + s,
          sx: c,
          sy: u,
          sz: d,
          material: f,
          cast: !0,
        }),
          p &&
            e.colliderDefs.push({
              id: `demo-${m}`,
              aabb: [
                i + r - c / 2,
                l + o,
                a + s - d / 2,
                i + r + c / 2,
                l + o + u,
                a + s + d / 2,
              ],
              surface: `concrete`,
            }));
      };
    (f(`body`, 0, 0, 0, s, u, c, d, !0),
      f(`roof`, 0, u, 0, s + 0.4, 0.22, c + 0.4, `roof`, !0));
    for (let e = 0; e < o; e++)
      for (let t of [-1, 1]) {
        f(
          `band-${e}-${t}`,
          0,
          e * 3.2 + 3,
          t * (c / 2 + 0.05),
          s,
          0.18,
          0.15,
          `concreteDark`,
        );
        let n = Math.floor(s / 5);
        for (let r = 0; r < n; r++)
          f(
            `window-${e}-${t}-${r}`,
            (r - (n - 1) / 2) * (s / n),
            e * 3.2 + 0.8,
            t * (c / 2 + 0.1),
            3,
            1.7,
            0.08,
            `glass`,
          );
        for (let n = 0; n < 3; n++)
          f(
            `end-window-${e}-${t}-${n}`,
            t * (s / 2 + 0.1),
            e * 3.2 + 0.8,
            (n - 1) * (c / 4),
            0.08,
            1.7,
            2.4,
            `glass`,
          );
      }
    if (Math.abs(a) === 25) {
      let e = -Math.sign(a),
        t = e * (c / 2 + 4);
      f(`arcade-roof`, 0, 3.6, t, s, 0.24, 8, `roof`, !0);
      for (let n of [-1, 1])
        f(
          `arcade-post-${n}`,
          n * (s / 2 - 0.3),
          0,
          t + e * 3.7,
          0.25,
          3.6,
          0.25,
          `metal`,
          !0,
        );
      f(`arcade-fascia`, 0, 3.4, t + e * 4, s, 0.35, 0.12, `concreteDark`);
    }
    (e.buildings.push({
      id: n,
      x: i,
      y: l,
      z: a,
      w: s,
      d: c,
      h: u,
      exteriorOnly: !0,
    }),
      e.infill.push({ id: n, x: i, z: a, w: s, d: c, floors: o }));
  }
  let r = new Set();
  for (let t of e.colliderDefs)
    /^demo-urban-\d+-frontage-(gate|approach)/.test(t.id) &&
      e.infill.some(
        (e) =>
          e.x - e.w / 2 < t.aabb[3] &&
          e.x + e.w / 2 > t.aabb[0] &&
          e.z - e.d / 2 < t.aabb[5] &&
          e.z + e.d / 2 > t.aabb[2],
      ) &&
      r.add(t.id.slice(5));
  ((e.colliderDefs = e.colliderDefs.filter((e) => !r.has(e.id.slice(5)))),
    (e.objects = e.objects.filter(
      (e) => ![...r].some((t) => e.id === t || e.id === t + `-cap`),
    )));
  let i = [];
  for (let e of [-1, 1]) {
    for (let t of [-95, -57, -19, 19, 57, 95]) i.push([t, e * 111]);
    for (let t of [-82.5, -27.5, 27.5, 82.5]) i.push([t, e * 78]);
  }
  for (let [n, [r, a]] of i.entries()) {
    let i = t(r, a),
      o = `district-tree-${n}`;
    (e.objects.push({
      id: o + `-trunk`,
      kind: `cylinder`,
      x: r,
      y: i,
      z: a,
      sx: 0.22,
      sy: 4.8,
      sz: 0.22,
      material: `timberDark`,
      cast: !0,
    }),
      e.colliderDefs.push({
        id: `demo-${o}-trunk`,
        aabb: [r - 0.22, i, a - 0.22, r + 0.22, i + 4.8, a + 0.22],
        surface: `wood`,
      }),
      e.objects.push({
        id: o + `-crown`,
        kind: `canopy`,
        x: r,
        y: i + 3.8,
        z: a,
        sx: 6.5,
        sy: 5.5,
        sz: 6.5,
        material: `orchard`,
        cast: !0,
      }));
  }
  return e;
}
function ct(e, t) {
  let n = f(e, t, 162),
    r = new Set(),
    i = new Set(),
    a = [];
  for (let t of e.infill) {
    let i = e.buildings.find((e) => e.id === t.id),
      { id: o, x: s, z: c, w: l, d: u } = t,
      d = i.y,
      f = e.objects.find((e) => e.id === o + `-body`);
    if (!f) continue;
    ((f.y = d + 3.2), (f.sy = i.h - 3.2));
    let p = e.colliderDefs.find((e) => e.id === `demo-` + o + `-body`);
    p.aabb[1] = d + 3.2;
    for (let t of e.objects)
      t.id.startsWith(o + `-`) &&
        /^(window-0-|end-window-0-|shop-)/.test(t.id.slice(o.length + 1)) &&
        r.add(t.id);
    let m = (t, n, r, i, a, l, u, f) => {
      let p = o + `-` + t;
      (e.objects.push({
        id: p,
        kind: `box`,
        x: s + n,
        y: d + r,
        z: c + i,
        sx: a,
        sy: l,
        sz: u,
        material: f,
        cast: !0,
      }),
        e.colliderDefs.push({
          id: `demo-` + p,
          aabb: [
            s + n - a / 2,
            d + r,
            c + i - u / 2,
            s + n + a / 2,
            d + r + l,
            c + i + u / 2,
          ],
          surface: `concrete`,
        }));
    };
    m(`demo-floor`, 0, -0.3, 0, l, 0.38, u, `concrete`);
    for (let e of [`x`, `z`])
      for (let t of [-1, 1]) {
        let n = e === `x` ? u : l,
          r = (e === `x` ? l : u) / 2 - 0.18,
          a = 2.8,
          o = Math.abs(s) === 20 && Math.abs(c) === 25 ? 3 : 0;
        e === `x` ? (i.crossOffset = o) : (i.longOffset = o);
        let d = (n, i, a, o, s, c) =>
          m(
            n,
            e === `x` ? t * r : i,
            a,
            e === `x` ? i : t * r,
            e === `x` ? 0.36 : o,
            s,
            e === `x` ? o : 0.36,
            c,
          );
        d(`portal-${e}-${t}-header`, 0, 2.65, n, 0.55, f.material);
        for (let r of [-1, 1]) {
          let i = (n - a) / 2 - r * o,
            s = o + r * (a / 2 + i / 2);
          if (e === `x` && r === 1) {
            let n = Math.min(2.4, i);
            (d(`breach-${t}`, o + a / 2 + n / 2, 0.08, n, 2.57, `plasterRed`),
              i > n &&
                d(
                  `pier-${e}-${t}-${r}`,
                  o + a / 2 + n + (i - n) / 2,
                  0.08,
                  i - n,
                  2.57,
                  f.material,
                ));
          } else d(`pier-${e}-${t}-${r}`, s, 0.08, i, 2.57, f.material);
        }
      }
    (n.prop(o + `-inside-crate`, `cp_crate2`, s - l * 0.28, c - u * 0.28, 0, {
      y: d + 0.08,
    }),
      i.crossOffset ||
        n.prop(o + `-inside-pallet`, `cp_tarp`, s + l * 0.28, c + u * 0.28, 0, {
          y: d + 0.08,
        }),
      (i.exteriorOnly = !1),
      (i.infillInterior = !0),
      (t.enterable = !0));
    for (let e of [-1, 1])
      (a.push([
        s + (i.longOffset || 0) - 1.4,
        c + (e * u) / 2 - 1.5,
        s + (i.longOffset || 0) + 1.4,
        c + (e * u) / 2 + 1.5,
        d,
      ]),
        a.push([
          s + (e * l) / 2 - 1.5,
          c + (i.crossOffset || 0) - 1.4,
          s + (e * l) / 2 + 1.5,
          c + (i.crossOffset || 0) + 1.4,
          d,
        ]));
  }
  ((e.objects = e.objects.filter((e) => !r.has(e.id))),
    (e.props = e.props.filter(
      (e) => !e.id.startsWith(`sh-`) || !r.has(e.id.slice(3)),
    )));
  let o = new Set(e.props.map((e) => `demo-` + e.id));
  for (let t of e.colliderDefs)
    t.id.includes(`-workshop-freight-crate-`) &&
      a.some(
        (e) =>
          t.aabb[0] < e[2] &&
          t.aabb[3] > e[0] &&
          t.aabb[2] < e[3] &&
          t.aabb[5] > e[1],
      ) &&
      i.add(t.id.slice(5));
  for (let n of e.colliderDefs)
    o.has(n.id) &&
      !n.id.includes(`-inside-`) &&
      e.infill.some(
        (e) =>
          n.aabb[0] < e.x + e.w / 2 &&
          n.aabb[3] > e.x - e.w / 2 &&
          n.aabb[2] < e.z + e.d / 2 &&
          n.aabb[5] > e.z - e.d / 2 &&
          n.aabb[1] < t(e.x, e.z) + 2.6,
      ) &&
      i.add(n.id.slice(5));
  for (let t of e.colliderDefs)
    o.has(t.id) &&
      a.some(
        (e) =>
          t.aabb[0] < e[2] &&
          t.aabb[3] > e[0] &&
          t.aabb[2] < e[3] &&
          t.aabb[5] > e[1] &&
          t.aabb[1] < e[4] + 2.5 &&
          t.aabb[4] > e[4] + 0.3,
      ) &&
      i.add(t.id.slice(5));
  return (
    (e.props = e.props.filter((e) => !i.has(e.id))),
    (e.colliderDefs = e.colliderDefs.filter((e) => !i.has(e.id.slice(5)))),
    (e.objects = e.objects.filter((e) => !i.has(e.id))),
    e
  );
}
