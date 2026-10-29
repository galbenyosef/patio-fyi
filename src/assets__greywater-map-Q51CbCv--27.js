// assets__greywater-map-Q51CbCv- 27 — push
// Lines 175414-176096 of readable/assets__greywater-map-Q51CbCv-.pretty.js (statement-aligned).
function $t(e, t = {}) {
  let { release: n = !1, urban: r = !1 } = t,
    i = [],
    a = [],
    o = [],
    c = [],
    l = 0,
    u = (t, n) => +e(t, n) || 0,
    d = (e, t) => {
      for (let n of [0, -6, 6, -12, 12, -18, 18, -24, 24, -30, 30])
        for (let r of [0, -6, 6]) {
          let i = e + n,
            a = t + r;
          if (
            [
              [-4, -4],
              [-4, 4],
              [4, -4],
              [4, 4],
              [0, 0],
            ].every(([e, t]) => u(i + e, a + t) > $.waterLevel + 0.6)
          )
            return [i, a];
        }
      return null;
    },
    f = (e, t, n, r, o, s, c, l = {}) => {
      let d = l.y ?? u(t, n) + (l.raise ?? 0),
        f = {
          id: e,
          kind: `box`,
          x: t,
          y: d,
          z: n,
          sx: r,
          sy: o,
          sz: s,
          material: c,
          cast: l.cast !== !1,
        };
      if ((i.push(f), l.solid !== !1)) {
        let i = [t - r / 2, d, n - s / 2, t + r / 2, d + o, n + s / 2];
        a.push({
          id: `demo-${e}`,
          aabb: i,
          surface:
            l.surface ??
            (c.includes(`timber`) || c === `crate` ? `wood` : `concrete`),
        });
      }
      return f;
    },
    p = (e, t, n, r, o, s, c = {}) => {
      let l = c.y ?? u(t, n) + (c.raise ?? 0);
      (i.push({
        id: e,
        kind: `cylinder`,
        x: t,
        y: l,
        z: n,
        sx: r,
        sy: o,
        sz: r,
        material: s,
        cast: c.cast !== !1,
      }),
        c.solid !== !1 &&
          a.push(
            ...S(
              e,
              t,
              l,
              n,
              r,
              o,
              c.surface ?? (/metal|amber/.test(s) ? `metal` : `wood`),
            ),
          ));
    },
    m = (e, t, n, r, a, o, s, c) =>
      i.push({
        id: e,
        kind: `gable`,
        x: t,
        y: s,
        z: n,
        sx: r,
        sy: a,
        sz: o,
        material: c,
        cast: !0,
      }),
    h = (e, t, n, r, a, o, s, c) =>
      i.push({
        id: e,
        kind: `box`,
        x: t,
        y: n,
        z: r,
        sx: a,
        sy: o,
        sz: s,
        material: c,
        cast: !1,
      }),
    g = (e, t, n, r, i = 0.72, a = 1.15, o = `concrete`) => {
      let s = f(e, t, n, r, a, i, o);
      return (
        h(`${e}-cap`, t, s.y + a, n, r + 0.1, 0.08, i + 0.1, `concreteDark`),
        s
      );
    },
    _ = (e, t, n, r = 1) =>
      f(e, t, n, 1.45 * r, 1.25 * r, 1.45 * r, `crate`, { surface: `wood` }),
    v = (e, t, n, r, i = !0) => {
      let o = Math.max(2, Math.round(r / 1.25)),
        s = u(t, n);
      for (let r = 0; r < o; r++) {
        let a = r - (o - 1) / 2,
          c = t + (i ? a * 1.15 : 0),
          l = n + (i ? 0 : a * 1.15);
        f(
          `${e}-${r}`,
          c,
          l,
          i ? 1.28 : 0.72,
          0.58 + (r % 2) * 0.06,
          i ? 0.72 : 1.28,
          `sandbag`,
          { solid: !1, y: s },
        );
      }
      a.push({
        id: `demo-${e}`,
        aabb: [
          t - (i ? r / 2 : 0.42),
          s,
          n - (i ? 0.42 : r / 2),
          t + (i ? r / 2 : 0.42),
          s + 0.64,
          n + (i ? 0.42 : r / 2),
        ],
        surface: `sand`,
      });
    },
    y = (e, t, n, r, i, s, c = `plaster`, l = `roof`, d = `south`, p = !1) => {
      let g = u(t, n),
        _ = 0.48,
        v = (t, n, r, i, a) =>
          f(`${e}-${t}`, n, r, i, s, a, c, { y: g, solid: p });
      (v(`west`, t - r / 2 + _ / 2, n, _, i),
        v(`east`, t + r / 2 - _ / 2, n, _, i));
      let y = (n, i) => {
        let a = (r - 3) / 2;
        (v(`${n}-l`, t - (3 + a) / 2, i, a, _),
          v(`${n}-r`, t + (3 + a) / 2, i, a, _),
          h(`${e}-${n}-lintel`, t, g + 2.62, i, 3, s - 2.62, _, c));
      };
      (d === `north`
        ? y(`north`, n - i / 2 + _ / 2)
        : v(`north`, t, n - i / 2 + _ / 2, r - _ * 2, _),
        d === `south`
          ? y(`south`, n + i / 2 - _ / 2)
          : v(`south`, t, n + i / 2 - _ / 2, r - _ * 2, _));
      let b = g + s;
      (m(`${e}-roof`, t, n, r + 0.9, 2.2, i + 1.1, b, l),
        p ||
          a.push({
            id: `demo-${e}`,
            aabb: [t - r / 2, g, n - i / 2, t + r / 2, b + 1.2, n + i / 2],
            surface: `concrete`,
          }));
      let x = d === `north` ? n - i / 2 - 0.012 : n + i / 2 + 0.012;
      h(`${e}-door`, t, g + 0.04, x, 2.55, 2.52, 0.08, `timberDark`);
      for (let n of [-1, 1])
        h(
          `${e}-window-${n}`,
          t + n * r * 0.28,
          g + 2.05,
          x,
          2.15,
          1.35,
          0.09,
          `glass`,
        );
      (h(
        `${e}-plinth`,
        t,
        g - 0.02,
        n,
        r + 0.24,
        0.22,
        i + 0.24,
        `concreteDark`,
      ),
        o.push({ id: e, x: t, y: g, z: n, w: r, d: i, h: s }));
    },
    b = (e, t, n, r, a = !1) => {
      let s = u(t, n),
        l = 3.6,
        d = 0.4;
      (f(`${e}-core`, t, n, 10, 3.4, 8, `concreteDark`, { y: s }),
        f(`${e}-floor`, t, n, 10, 0.2, 8, `concrete`, { y: s + l - 0.2 }));
      for (let i of [-1, 1]) {
        let o = t + i * (5 - d / 2),
          c = n + i * (4 - d / 2);
        (f(`${e}-side-sill-${i}`, o, n, d, 0.95, 8, r, { y: s + l }),
          f(`${e}-side-lintel-${i}`, o, n, d, 0.55, 8, r, { y: s + l + 2.45 }));
        for (let t of [-3.25, 0, 3.25])
          f(`${e}-side-pier-${i}-${t}`, o, n + t, d, 1.5, 0.65, r, {
            y: s + l + 0.95,
          });
        if (i === -1) {
          (f(`${e}-north-sill`, t, c, 9.2, 0.95, d, r, { y: s + l }),
            f(`${e}-north-lintel`, t, c, 9.2, 0.55, d, r, { y: s + l + 2.45 }));
          for (let n of [-3.7, 0, 3.7])
            f(`${e}-north-pier-${n}`, t + n, c, 0.7, 1.5, d, r, {
              y: s + l + 0.95,
            });
        } else {
          for (let n of [-3.2, 3.2])
            if (
              (f(`${e}-door-side-${n}`, t + n, c, 3.6, a ? 0.95 : 3, d, r, {
                y: s + l,
              }),
              a)
            ) {
              f(`${e}-south-lintel-${n}`, t + n, c, 3.6, 0.55, d, r, {
                y: s + l + 2.45,
              });
              for (let i of [-1.6, 1.6])
                f(`${e}-south-pier-${n}-${i}`, t + n + i, c, 0.4, 1.5, d, r, {
                  y: s + l + 0.95,
                });
            }
          f(`${e}-door-head`, t, c, 2.8, 0.55, d, r, { y: s + l + 2.45 });
        }
      }
      (f(`${e}-roof`, t, n, 10.5, 0.28, 8.5, `roof`, { y: s + l + 3 }),
        f(`${e}-landing`, t, n + 5, 3, 0.2, 2.4, `concrete`, {
          y: s + l - 0.2,
        }));
      let m = n + 16;
      for (let n = 0; n < 20; n++) {
        let r = m - n * 0.5,
          i = s + (n + 1) * 0.18,
          a = Math.min(s - 0.2, u(t, r) - 0.2);
        (f(`${e}-stair-${n}`, t, r, 2.8, i - a, 0.5, `concrete`, { y: a }),
          h(
            `${e}-nosing-${n}`,
            t,
            i + 0.005,
            r + 0.2,
            2.8,
            0.025,
            0.09,
            `metal`,
          ));
        for (let a of [-1, 1])
          n % 4 == 0 &&
            h(
              `${e}-stair-post-${n}-${a}`,
              t + a * 1.5,
              i,
              r,
              0.1,
              0.9,
              0.1,
              `metalDark`,
            );
      }
      for (let n of [-1, 1])
        i.push({
          id: `${e}-handrail-${n}`,
          kind: `box`,
          x: t + n * 1.5,
          y: s + 2.75,
          z: m - 4.75,
          sx: 0.1,
          sy: 0.08,
          sz: 10.62,
          rotX: Math.atan(0.36),
          material: `metalDark`,
          cast: !0,
        });
      for (let r of [-1, 1])
        f(
          `${e}-landing-rail-${r}`,
          t + r * 1.5,
          n + 5,
          0.16,
          1,
          2.4,
          `metalDark`,
          { y: s + l },
        );
      p(`${e}-antenna`, t + 3, n - 2, 0.12, 5, `metalDark`, {
        y: s + l + 3 + 0.28,
      });
      for (let r = 0; r < 3; r++)
        h(
          `${e}-aerial-${r}`,
          t + 3,
          s + 9 + r * 0.7,
          n - 2,
          2.4 - r * 0.5,
          0.1,
          0.1,
          `metal`,
        );
      (f(`${e}-console`, t - 3, n - 2, 1.4, 0.85, 0.65, `metal`, {
        y: s + l,
        surface: `metal`,
      }),
        h(
          `${e}-service-door`,
          t + 3.2,
          s + 0.08,
          n + 4.015,
          1.6,
          2.4,
          0.05,
          `metal`,
        ),
        h(
          `${e}-service-handle`,
          t + 2.65,
          s + 1.15,
          n + 4.05,
          0.08,
          0.28,
          0.06,
          `metalDark`,
        ));
      for (let r = 0; r < 5; r++)
        h(
          `${e}-vent-${r}`,
          t - 3.1,
          s + 1.3 + r * 0.16,
          n + 4.02,
          1.5,
          0.055,
          0.06,
          `metalDark`,
        );
      (o.push({ id: e, x: t, y: s, z: n, w: 10, d: 8, h: 6.6 }),
        c.push({
          id: e,
          x: t,
          y: s,
          z: n,
          southWindows: a,
          floor: s + l,
          stairStart: [t, u(t, m + 0.8), m + 0.8],
          entry: [t, s + l, n + 3],
          view: [t + 4, s + l + 1.62, n - 1.5],
        }));
    };
  for (let e = 0; e < 2; e++) {
    let t = Jt[e],
      n = e ? 1 : -1,
      r = e ? `cobalt` : `amber`;
    (y(
      `hq${e}-ops`,
      t.x - n * 8,
      t.z - 15,
      18,
      11,
      4.6,
      `plaster`,
      `roof`,
      e ? `south` : `north`,
      e === 0,
    ),
      g(`hq${e}-wall-n`, t.x, t.z - 27, 28, 0.8, 1.35),
      g(`hq${e}-wall-s`, t.x, t.z + 27, 28, 0.8, 1.35),
      g(`hq${e}-wall-o`, t.x + n * 14, t.z, 0.8, 24, 1.35));
    for (let r = 0; r < 4; r++)
      _(
        `hq${e}-crate-${r}`,
        t.x - n * (4 + (r % 2) * 1.7),
        t.z + 5 + Math.floor(r / 2) * 1.65,
        0.9,
      );
    (p(`hq${e}-mast`, t.x, t.z - 4, 0.16, 8.5, `metalDark`),
      h(
        `hq${e}-banner`,
        t.x - 0.02,
        u(t.x, t.z - 4) + 5.4,
        t.z - 4,
        0.08,
        1.4,
        2.5,
        r,
      ));
  }
  (b(`relay-observation`, -221, -34, `plaster`),
    g(`relay-retain-n1`, -218, -55, 22),
    g(`relay-retain-n2`, -189, -53, 18),
    g(`relay-retain-s1`, -227, 5, 20),
    g(`relay-retain-s2`, -184, 4, 18),
    g(`relay-cross-w`, -243, -18, 0.8, 19, 1.35),
    g(`relay-cross-e`, -167, -18, 0.8, 18, 1.35),
    p(`relay-mast`, -199, -32, 0.22, 18, `metalDark`));
  for (let e = 0; e < 3; e++) {
    let t = u(-199, -32) + 6 + e * 4.2;
    h(`relay-arm-${e}`, -199, t, -32, 5.8 - e * 0.7, 0.16, 0.16, `metal`);
  }
  (_(`relay-crate-0`, -190, -3, 1),
    _(`relay-crate-1`, -187, -4, 0.85),
    v(`relay-bags-n`, -180, -35, 8, !0),
    v(`relay-bags-e`, -172, -9, 7, !1),
    y(`mill-store`, -31, -35, 31, 17, 7, `plasterRed`, `roofRed`, `south`, !0),
    y(`mill-office`, 34, 30, 23, 15, 5.5, `plaster`, `roof`, `north`, !0),
    y(`mill-workshop`, 41, -33, 18, 12, 4.6, `concreteDark`, `roof`, `south`),
    n && b(`mill-control`, 3, -32, `plaster`, !0),
    g(`mill-nw`, -44, -59, 22),
    g(`mill-ne`, 28, -58, 24),
    g(`mill-sw`, -36, 57, 25),
    g(`mill-se`, 35, 56, 20),
    g(`mill-west-n`, -59, -39, 0.8, 18, 1.45),
    g(`mill-west-s`, -59, 36, 0.8, 19, 1.45),
    g(`mill-east-n`, 61, -36, 0.8, 17, 1.45),
    g(`mill-east-s`, 61, 37, 0.8, 18, 1.45));
  for (let [e, t, n, r] of [
    [0, -14, 18, 1],
    [1, -11, 20, 0.82],
    [2, 15, -11, 1.05],
    [3, 18, -13, 0.85],
    [4, 48, 9, 0.95],
    [5, -48, -6, 0.95],
  ])
    _(`mill-crate-${e}`, t, n, r);
  (f(`mill-container-west`, -22, 21, 6.4, 2.55, 2.5, `metal`, {
    surface: `metal`,
  }),
    f(`mill-container-east`, 23, -21, 6.4, 2.55, 2.5, `concreteDark`, {
      surface: `metal`,
    }),
    h(
      `mill-container-west-door`,
      -18.77,
      u(-22, 21) + 0.12,
      21,
      0.08,
      2.28,
      2.25,
      `metalDark`,
    ),
    h(
      `mill-container-east-door`,
      19.77,
      u(23, -21) + 0.12,
      -21,
      0.08,
      2.28,
      2.25,
      `metalDark`,
    ),
    v(`mill-bags-w`, -27, 8, 8, !1),
    v(`mill-bags-e`, 27, -2, 8, !1),
    p(`mill-silo`, 53, 13, 4.2, 8.5, `metal`, { solid: !0, surface: `metal` }),
    p(`mill-silo-cap`, 53, 13, 4.4, 0.55, `metalDark`, {
      y: u(53, 13) + 8.5,
      solid: !1,
    }),
    y(`orchard-barn`, 218, 52, 28, 17, 6.4, `plasterRed`, `roofRed`, `north`),
    y(`orchard-depot`, 239, 1, 19, 13, 5, `plaster`, `roof`, `south`, !0),
    b(`depot-dispatch`, 186, 10, `plasterRed`),
    g(`orchard-nw`, 171, -5, 23),
    g(`orchard-ne`, 218, -8, 18),
    g(`orchard-sw`, 176, 62, 18),
    g(`orchard-se`, 251, 61, 22),
    v(`orchard-bags-w`, 174, 30, 9, !1),
    v(`orchard-bags-e`, 234, 27, 8, !1),
    _(`orchard-crate-0`, 191, 43, 1),
    _(`orchard-crate-1`, 194, 44, 0.82),
    _(`orchard-crate-2`, 244, 29, 0.9),
    f(`orchard-container`, 227, 31, 6.2, 2.5, 2.45, `metalDark`, {
      surface: `metal`,
    }));
  let x = 0;
  for (let e of [151, 166, 181])
    for (let t of [45, 59, 73, 87])
      (p(`orchard-trunk-${x}`, e, t, 0.32, 2.6, `bark`),
        p(`orchard-crown-${x++}`, e, t, 2.25, 3.4, `orchard`, {
          y: u(e, t) + 2.15,
          solid: !1,
        }));
  (y(`north-pump`, -70, -120, 18, 12, 4.4, `concreteDark`, `roof`, `south`),
    p(`north-tank`, -46, -119, 4.6, 6.8, `metal`, {
      solid: !0,
      surface: `metal`,
    }),
    g(`north-wall-0`, -139, -111, 14),
    g(`north-wall-1`, -112, -119, 12),
    g(`north-wall-2`, 2, -106, 16),
    g(`north-wall-3`, 68, -112, 13),
    g(`north-wall-4`, 121, -112, 15),
    g(`north-wall-5`, 166, -100, 11),
    _(`north-crate-0`, -17, -112, 1),
    _(`north-crate-1`, 92, -116, 1),
    g(`south-ruin-n`, 73, 95, 24, 0.85, 2.25, `plaster`),
    g(`south-ruin-s`, 87, 120, 19, 0.85, 1.55, `plasterRed`),
    g(`south-ruin-w`, 61, 110, 0.85, 18, 2, `plaster`),
    g(`south-wall-0`, -207, 102, 14),
    g(`south-wall-1`, -150, 116, 13),
    g(`south-wall-2`, -102, 123, 12),
    g(`south-wall-3`, -31, 111, 15),
    g(`south-wall-4`, 137, 118, 14),
    g(`south-wall-5`, 175, 101, 12),
    _(`south-crate-0`, 38, 103, 1),
    _(`south-crate-1`, 119, 119, 0.95));
  for (let [e, t, n, r] of [
    [-287, -1, 12, 0],
    [-261, -21, 9, 1],
    [-147, -5, 11, 0],
    [-121, 17, 9, 1],
    [-84, -2, 10, 0],
    [82, -2, 10, 0],
    [116, -20, 9, 1],
    [145, 9, 11, 0],
    [269, 18, 12, 0],
    [294, -2, 9, 1],
  ])
    g(`main-cover-${l++}`, e, t, r ? 0.75 : n, r ? n : 0.75, 1.2);
  for (let [e, t] of [
    [-309, 18],
    [-238, 24],
    [-101, -27],
    [103, 25],
    [155, -25],
    [277, 39],
  ])
    (_(`lane-crate-${l++}`, e, t, 0.9),
      _(`lane-crate-${l++}`, e + 1.5, t + 0.8, 0.72));
  for (let [e, t, n] of [
    [0, -139, 5],
    [1, -106, 6],
    [2, -77, -12],
    [3, 78, 12],
    [4, 108, -9],
    [5, 140, 0],
  ]) {
    let r = d(t, n);
    if (!r) continue;
    let [i, a] = r;
    (g(`maintenance-${e}-back`, i, a, 0.7, 7.5, 1.95, `concrete`),
      g(
        `maintenance-${e}-wing`,
        i + (e % 2 ? 2 : -2),
        a + 3.5,
        4.7,
        0.7,
        1.15,
        `concreteDark`,
      ),
      _(`maintenance-${e}-stock`, i + (e % 2 ? -2 : 2), a - 1, 1.1));
  }
  for (let [e, t, n] of [
    [0, -152, 17],
    [1, -128, -13],
    [2, -107, 26],
    [3, -80, 22],
    [4, 80, -23],
    [5, 104, 16],
    [6, 131, -25],
    [7, 151, 33],
  ]) {
    let r = d(t, n);
    if (!r) continue;
    let [a, o] = r;
    (p(`combat-tree-${e}`, a, o, 0.32, 4.1, `bark`, { solid: !0 }),
      i.push({
        id: `combat-canopy-${e}`,
        kind: `canopy`,
        x: a,
        y: u(a, o) + 3,
        z: o,
        sx: 3.1,
        sy: 3.8,
        sz: 2.8,
        material: `orchard`,
        cast: !0,
      }));
    for (let t = 0; t < 3; t++) {
      let n = a + (t - 1) * 2.2,
        r = o + 2 + (t % 2) * 1.2;
      i.push({
        id: `combat-shrub-${e}-${t}`,
        kind: `canopy`,
        x: n,
        y: u(n, r) - 0.08,
        z: r,
        sx: 1.8,
        sy: 0.9 + t * 0.12,
        sz: 1.5,
        material: `orchard`,
        cast: !0,
      });
    }
  }
  let C = (e, t, n, r, i) => {
    let a = u(t, n);
    for (let i = 0; i < 3; i++)
      p(
        `${e}-barrel-${i}`,
        t + r * 0.52 + (i % 2) * 0.85,
        n - r * 0.3 + Math.floor(i / 2) * 0.9 + i * 0.2,
        0.36,
        0.92,
        i === 1 ? `amber` : `metalDark`,
      );
    for (let i = 0; i < 2; i++)
      f(
        `${e}-pallet-${i}`,
        t - r * 0.48 + i * 1.45,
        n + r * 0.42 + i * 0.3,
        1.25,
        0.14,
        1,
        `timber`,
        { solid: !1 },
      );
    for (let i = 0; i < 5; i++) {
      let a = i * 1.7 + e.length * 0.4;
      f(
        `${e}-rubble-${i}`,
        t + Math.cos(a) * r * (0.3 + (i % 3) * 0.1),
        n + Math.sin(a) * r * (0.36 + (i % 2) * 0.08),
        0.5 + (i % 3) * 0.15,
        0.2 + (i % 2) * 0.08,
        0.4 + (i % 2) * 0.1,
        `concreteDark`,
        { solid: !1 },
      );
    }
    for (let i = 0; i < 3; i++) {
      let o = i * 2.3 + 0.5 + e.length * 0.2;
      h(
        `${e}-stain-${i}`,
        t + Math.cos(o) * r * 0.28,
        a + 0.032,
        n + Math.sin(o) * r * 0.28,
        2.6 + i * 0.5,
        0.02,
        1.9 + i * 0.35,
        `timberDark`,
      );
    }
    for (let o of [-1, 1])
      h(
        `${e}-rut-${o > 0 ? `r` : `l`}`,
        t + (i ? 0 : o * 0.95),
        a + 0.036,
        n + (i ? o * 0.95 : 0),
        i ? r * 1.15 : 0.32,
        0.02,
        i ? 0.32 : r * 1.15,
        `timberDark`,
      );
  };
  (C(`hq0`, -338, -2, 30, !0),
    C(`hq1`, 338, 9, 30, !0),
    C(`relay`, -205, -18, 34, !0),
    C(`mill`, 0, 0, 38, !0),
    C(`orchard`, 205, 24, 36, !0));
  let w = a,
    T = {
      id: Gt,
      name: Kt,
      size: $.size,
      bounds: [-400, -400, 400, 400],
      objects: i,
      colliderDefs: w,
      buildings: o,
      observationRooms: c,
      objectives: Yt(e),
      routes: Q,
      focus: [0, u(0, 0) + 4, 0],
    };
  return r ? s(T, e) : T;
}
