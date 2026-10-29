// assets__greywater-map-Q51CbCv- 21 — math
// Lines 173749-174171 of readable/assets__greywater-map-Q51CbCv-.pretty.js (statement-aligned).
function kt(e, t, n = 23) {
  let r = f(e, t, n),
    { rnd: i, chance: a, pick: o, range: s, prop: c, H: l } = r,
    u = [],
    d = (e, t, n, r) =>
      u.push([Math.min(e, n), Math.min(t, r), Math.max(e, n), Math.max(t, r)]);
  for (let t of e.buildings)
    d(
      t.x - t.w / 2 - 1.5,
      t.z - t.d / 2 - 1.5,
      t.x + t.w / 2 + 1.5,
      t.z + t.d / 2 + 1.5,
    );
  for (let t of e.objectives)
    d(t.pos[0] - 24, t.pos[2] - 22, t.pos[0] + 24, t.pos[2] + 22);
  for (let t of e.colliderDefs) {
    let e = t.aabb;
    e[4] - e[1] < 0.6 || d(e[0] - 0.5, e[2] - 0.5, e[3] + 0.5, e[5] + 0.5);
  }
  for (let e of [-1, 1])
    (d(e * 145, -32, e * 210, 32), d(e * 158, 32, e * 200, 54));
  for (let e of [-16, 16]) d(e - 5, -44, e + 5, 44);
  for (let e of Dt) d(-150, e - X, 150, e + X);
  for (let e of Ot) d(e - X, -100, e + X, 100);
  let p = (e, t, n, r) =>
      u.some((i) => i[0] < n && i[2] > e && i[1] < r && i[3] > t),
    m = 100,
    h = [];
  function g(e, t, n, r, i, o) {
    let c = t + n * X,
      l = t + n * (X + o),
      f =
        e === `z`
          ? [r, Math.min(c, l), i, Math.max(c, l)]
          : [Math.min(c, l), r, Math.max(c, l), i],
      p = u
        .filter((e) => e[0] < f[2] && e[2] > f[0] && e[1] < f[3] && e[3] > f[1])
        .map((t) => (e === `z` ? [t[0], t[2]] : [t[1], t[3]]))
        .sort((e, t) => e[0] - t[0]),
      g = [],
      _ = r;
    for (let [e, t] of p)
      if (
        (e > _ + 8 && g.push([_, Math.min(e, i)]), (_ = Math.max(_, t)), _ >= i)
      )
        break;
    i > _ + 8 && g.push([_, i]);
    for (let [r, i] of g) {
      let c = r + 1;
      for (; i - c >= 8;) {
        let r = Math.min(i - c - 1, s(9, 22)),
          l = a(0.25) ? 5 : a(0.4) ? 4 : a(0.5) ? 3 : 2,
          u = Math.min(o, s(12, 16)),
          f = c + r / 2,
          p = e === `z` ? f : t + n * (X + u / 2),
          g = e === `z` ? t + n * (X + u / 2) : f,
          _ = e === `z` ? r : u,
          v = e === `z` ? u : r;
        (h.push({
          id: `infill-${m++}`,
          x: p,
          z: g,
          w: _,
          d: v,
          floors: l,
          front: e === `z` ? [0, -n] : [-n, 0],
        }),
          d(p - _ / 2 - 1.5, g - v / 2 - 1.5, p + _ / 2 + 1.5, g + v / 2 + 1.5),
          (c += r + 1.5));
      }
    }
  }
  for (let e of Dt)
    for (let t of [-1, 1])
      Math.abs(e + t * X) > 118 || g(`z`, e, t, -134, 134, 16);
  for (let e of Ot)
    (g(`x`, e, Math.sign(e), 30, 96, 14),
      g(`x`, e, Math.sign(e), -96, -30, 14),
      g(`x`, e, -Math.sign(e), -96, 96, 14));
  let _ = new Set();
  for (let t of e.objects)
    /^district-tree-\d+-trunk$/.test(t.id) &&
      h.some(
        (e) =>
          Math.abs(t.x - e.x) < e.w / 2 + 1 &&
          Math.abs(t.z - e.z) < e.d / 2 + 1,
      ) &&
      _.add(t.id.replace(`-trunk`, ``));
  _.size &&
    ((e.objects = e.objects.filter(
      (e) => ![..._].some((t) => e.id.startsWith(t + `-`)),
    )),
    (e.colliderDefs = e.colliderDefs.filter(
      (e) => ![..._].some((t) => e.id === `demo-` + t + `-trunk`),
    )));
  for (let n of h) {
    let { id: r, x: i, z: a, w: s, d: c, floors: l } = n,
      u = t(i, a),
      d = l * 3.2,
      f = o([`plaster`, `plasterRed`, `plaster`, `concrete`]),
      p = (t, n, o, s, c, l, d, f, p = !1) => {
        let m = `${r}-${t}`;
        (e.objects.push({
          id: m,
          kind: `box`,
          x: i + n,
          y: u + o,
          z: a + s,
          sx: c,
          sy: l,
          sz: d,
          material: f,
          cast: !0,
        }),
          p &&
            e.colliderDefs.push({
              id: `demo-${m}`,
              aabb: [
                i + n - c / 2,
                u + o,
                a + s - d / 2,
                i + n + c / 2,
                u + o + l,
                a + s + d / 2,
              ],
              surface: `concrete`,
            }));
      };
    (p(`body`, 0, 0, 0, s, d, c, f, !0),
      p(`roof`, 0, d, 0, s + 0.4, 0.22, c + 0.4, `roof`, !0),
      p(`parapet`, 0, d + 0.22, 0, s + 0.4, 0.5, c + 0.4, `concreteDark`, !1));
    let m = n.front[0],
      h = n.front[1];
    for (let e = 0; e < l; e++) {
      for (let t of [-1, 1]) {
        let n = (h !== 0 && t === h) || !1,
          r = s,
          i = Math.max(1, Math.floor(r / 4.5));
        if (
          (p(
            `band-${e}-${t}`,
            0,
            e * 3.2 + 3,
            t * (c / 2 + 0.05),
            s,
            0.18,
            0.15,
            `concreteDark`,
          ),
          e === 0 && n)
        ) {
          p(
            `shop-${t}`,
            0,
            0.15,
            t * (c / 2 + 0.08),
            s - 2.2,
            2.7,
            0.1,
            `glass`,
          );
          continue;
        }
        for (let n = 0; n < i; n++)
          p(
            `window-${e}-${t}-${n}`,
            (n - (i - 1) / 2) * (r / i),
            e * 3.2 + 0.8,
            t * (c / 2 + 0.1),
            Math.min(2.6, r / i - 1),
            1.7,
            0.08,
            `glass`,
          );
      }
      for (let t of [-1, 1]) {
        let n = m !== 0 && t === m,
          r = Math.max(1, Math.floor(c / 4.5));
        if (e === 0 && n) {
          p(
            `shop-x-${t}`,
            t * ((c / 2) * 0 + s / 2 + 0.08),
            0.15,
            0,
            0.1,
            2.7,
            c - 2.2,
            `glass`,
          );
          continue;
        }
        for (let n = 0; n < r; n++)
          p(
            `end-window-${e}-${t}-${n}`,
            t * (s / 2 + 0.1),
            e * 3.2 + 0.8,
            (n - (r - 1) / 2) * (c / r),
            0.08,
            1.7,
            Math.min(2.4, c / r - 1),
            `glass`,
          );
      }
    }
    (e.buildings.push({
      id: r,
      x: i,
      y: u,
      z: a,
      w: s,
      d: c,
      h: d,
      exteriorOnly: !0,
    }),
      e.infill.push({ id: r, x: i, z: a, w: s, d: c, floors: l }));
  }
  let v = [],
    y = [
      [24, 16],
      [18, 14],
      [14, 12],
    ],
    b = 0;
  for (let t = -96; t <= 96; t += 6)
    for (let n = -132; n <= 132; n += 6)
      for (let [r, i] of y) {
        let a = n,
          o = t,
          s = n + r,
          c = t + i;
        if (s > 134 || c > 100 || p(a - 1.5, o - 1.5, s + 1.5, c + 1.5))
          continue;
        let l = (a + s) / 2,
          u = (o + c) / 2;
        if (
          !e.objectives.every(
            (e) => Math.hypot(e.pos[0] - l, e.pos[2] - u) > 30,
          )
        )
          break;
        (v.push({
          x: l,
          z: u,
          w: r,
          d: i,
          type: [`parking`, `construction`, `park`, `parking`][b++ % 4],
        }),
          d(a - 1.5, o - 1.5, s + 1.5, c + 1.5));
        break;
      }
  for (let [t, n] of v.entries()) {
    let { x: u, z: d, w: f, d: p, type: m } = n,
      h = l(u, d),
      g = `lot-${t}`;
    if (m === `parking`) {
      e.objects.push({
        id: g + `-asphalt`,
        kind: `box`,
        x: u,
        y: h + 0.005,
        z: d,
        sx: f,
        sy: 0.02,
        sz: p,
        material: `concreteDark`,
        cast: !1,
      });
      let t = f >= p,
        n = Math.floor((t ? f : p) / 3.1);
      for (let e = 0; e < 2; e++)
        for (let i = 0; i < n; i++) {
          if (!a(0.6)) continue;
          let n = -(t ? f : p) / 2 + 1.6 + i * 3.1,
            o = (e - 0.5) * ((t ? p : f) * 0.45);
          r.car(
            `${g}-car-${e}-${i}`,
            t ? u + n : u + o,
            t ? d + o : d + n,
            !t,
            null,
            !1,
            !1,
          );
        }
      (e.objects.push({
        id: g + `-line`,
        kind: `box`,
        x: u,
        y: h + 0.02,
        z: d,
        sx: t ? f - 2 : 0.15,
        sy: 0.006,
        sz: t ? 0.15 : p - 2,
        material: `plaster`,
        cast: !1,
      }),
        r.shortPost(
          g + `-lamp`,
          u + (t ? f / 2 - 1 : 0),
          d + (t ? 0 : p / 2 - 1),
        ),
        c(
          `${g}-bar`,
          `cp_barrier`,
          u - (t ? f / 2 - 2 : 0),
          d - (t ? 0 : p / 2 - 2),
          t ? Math.PI / 2 : 0,
        ));
    } else if (m === `construction`) {
      for (let e = -f / 2 + 1.2; e < f / 2 - 1; e += 2.6)
        (c(`${g}-b-n-${e}`, `mh_roadban`, u + e + 1.2, d - p / 2, Math.PI / 2, {
          solid: !0,
        }),
          c(
            `${g}-b-s-${e}`,
            `mh_roadban`,
            u + e + 1.2,
            d + p / 2,
            Math.PI / 2,
            { solid: !0 },
          ));
      for (let e = -p / 2 + 2.5; e < p / 2 - 2.5; e += 2.6)
        (c(`${g}-b-w-${e}`, `mh_roadban`, u - f / 2, d + e + 1.2, 0, {
          solid: !0,
        }),
          c(`${g}-b-e-${e}`, `mh_roadban`, u + f / 2, d + e + 1.2, 0, {
            solid: !0,
          }));
      (r.crates(g + `-crates`, u - f / 4, d),
        r.dumpster(g + `-dump`, u + f / 4, d - p / 4, !0),
        r.generator(g + `-light`, u + f / 4, d + p / 4),
        c(`${g}-police`, `mh_policeline`, u, d - p / 2 + 1.2, Math.PI / 2, {
          solid: !1,
        }),
        c(`${g}-ban`, `mh_roadban`, u - f / 2 + 2, d + p / 2 - 1.5, 0));
      for (let e = 0; e < 4; e++)
        c(
          `${g}-cone-${e}`,
          `mh_separator`,
          u + s(-f / 3, f / 3),
          d + s(-p / 3, p / 3),
          i() * 3,
          { solid: !1 },
        );
      for (let e = 0; e < 3; e++)
        c(
          `${g}-tyre-${e}`,
          `mh_garbage`,
          u + s(-f / 3, f / 3),
          d + s(-p / 3, p / 3),
          i() * 3,
          { solid: !1 },
        );
      e.objects.push({
        id: g + `-dirt`,
        kind: `box`,
        x: u,
        y: h + 0.004,
        z: d,
        sx: f - 1,
        sy: 0.02,
        sz: p - 1,
        material: `timberDark`,
        cast: !1,
      });
    } else {
      e.objects.push({
        id: g + `-grass`,
        kind: `box`,
        x: u,
        y: h + 0.005,
        z: d,
        sx: f,
        sy: 0.02,
        sz: p,
        material: `orchard`,
        cast: !1,
      });
      for (let [e, t] of [
        [-f / 2 + 3, -p / 2 + 3],
        [f / 2 - 3, p / 2 - 3],
        [f / 2 - 3, -p / 2 + 3],
        [-f / 2 + 3, p / 2 - 3],
      ])
        c(
          `${g}-tree-${e}-${t}`,
          o([`mh_tree1`, `mh_tree2`]),
          u + e,
          d + t,
          i() * Math.PI * 2,
        );
      (c(`${g}-centre`, t % 2 ? `mh_fountain` : `mh_gazebo`, u, d, 0),
        r.planter(g + `-pl-n`, u, d - p / 2 + 1.2, f - 6, 1),
        r.planter(g + `-pl-s`, u, d + p / 2 - 1.2, f - 6, 1),
        r.bench(g + `-b1`, u - 3, d, !0),
        r.bench(g + `-b2`, u + 3, d, !0),
        r.shortPost(g + `-lamp1`, u - f / 2 + 1.5, d),
        r.shortPost(g + `-lamp2`, u + f / 2 - 1.5, d),
        r.stringLights(
          g + `-string`,
          u - f / 2 + 1.5,
          h + 3.1,
          d,
          u + f / 2 - 1.5,
          h + 3.1,
          d,
          0.4,
        ));
    }
  }
  let x = 0;
  for (let t of e.infill) {
    t.floors >= 3 && x < 18 && a(0.7) && (a(0.5), s(-t.d / 4, t.d / 4), x++);
    for (let n of e.objects)
      (n.id.startsWith(t.id + `-window-0-`) ||
        n.id.startsWith(t.id + `-window-1-`)) &&
        !(n.id.includes(`-window-0-`) && a(0.35)) &&
        n.id.includes(`-window-1-`) &&
        a(0.18) &&
        s(-0.6, 0.6);
  }
  return ((e.lots = v), (e.fills = h.length), e);
}
