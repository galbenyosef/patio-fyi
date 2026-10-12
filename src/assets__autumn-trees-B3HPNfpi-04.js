// assets__autumn-trees-B3HPNfpi 04 — core
// Lines 788-1021 of readable/assets__autumn-trees-B3HPNfpi.pretty.js (statement-aligned).
var z = (e) => (n, r) => {
    r = t.clamp(r, 0, 1) * (e.length - 1);
    let i = Math.min(e.length - 2, Math.floor(r));
    return n.copy(e[i]).lerp(e[i + 1], r - i);
  },
  B =
    (e, n, r, i = 0.5) =>
    (a, o, s, c) => {
      let l = 0.5 + 0.5 * Math.sin(Math.atan2(c, o) * 7 + s * 1.3);
      (a.copy(e).lerp(n, 0.35 + 0.45 * l),
        a.lerp(r, t.clamp(1 - s / 1.1, 0, 1) * i));
    },
  V = (e, n, r, i) => {
    let a = Math.atan2(i, n),
      o =
        Math.sin(r * 4.3 + Math.sin(a * 2) * 0.8) > 0.82 &&
        Math.cos(a * 3 + r) > -0.2;
    (e.copy(_(15328214)).lerp(_(13616821), 0.5 + 0.5 * Math.sin(a * 5)),
      o && e.lerp(_(3090982), 0.85),
      e.lerp(_(4932411), t.clamp(1 - r / 0.9, 0, 1) * 0.8));
  },
  H = (e, { core: t = 0.45, jitter: n = 0.08, pick: r = null } = {}) => {
    let i = z(e.map(_));
    return (e, a, o, s) => {
      (i(e, a * 0.75 + 0.25 * s()),
        r && r(e, a, o, s),
        e.multiplyScalar(1 - t * (1 - o) * 0.9 + (s() - 0.5) * n * 2),
        e.offsetHSL((s() - 0.5) * 0.025, 0, 0));
    };
  },
  U = [
    {
      key: `maple`,
      name: `Ember Maple`,
      note: `Red sugar maple: broad dome, many forks, maple-leaf clusters.`,
      litter: [9313554, 12858138, 14832938, 15759930, 7027228],
      build: (e = 11, t = 0) =>
        F(
          {
            trunkH: 3.4,
            trunkR: 0.34,
            lean: 0.25,
            leanA: 0.6,
            wobble: 0.08,
            roots: 5,
            limbs: 5,
            spread: 0.72,
            limbLen: 3.1,
            rise: 0.22,
            gnarl: 0.22,
            fork: 0.75,
            kids: 2,
            depth: 2,
            lenFalloff: 0.62,
            leader: !0,
            clumpR: 1.6,
            cards: 25,
            cardSize: 1.45,
            core: 0.72,
            sideClump: 0.35,
            tile: b.MAPLE,
            barkColor: B(_(3877408), _(6966328), _(2760729)),
            leafColor: H([7214093, 10887962, 13974815, 15754797, 16748614], {
              core: 0.55,
            }),
          },
          e,
          t,
        ),
    },
    {
      key: `linden`,
      name: `Golden Linden`,
      note: `Tall yellow shade tree: upright oval crown on a thick, curving trunk.`,
      litter: [11035149, 14258202, 15906858, 16767317, 9067038],
      build: (e = 23, t = 0) =>
        F(
          {
            trunkH: 4.6,
            trunkR: 0.42,
            lean: 0.3,
            leanA: 2.2,
            wobble: 0.12,
            roots: 6,
            limbStart: 0.4,
            limbs: 6,
            spread: 0.85,
            limbLen: 3,
            rise: 0.3,
            gnarl: 0.2,
            fork: 0.7,
            kids: 2,
            depth: 2,
            lenFalloff: 0.6,
            leader: !0,
            clumpR: 1.65,
            cards: 20,
            cardSize: 1.5,
            core: 0.72,
            sideClump: 0.3,
            tile: b.BROAD,
            barkColor: B(_(4863270), _(8807754), _(3023643)),
            leafColor: H([9064204, 12614162, 15246623, 16763706, 16770167], {
              core: 0.5,
            }),
          },
          e,
          t,
        ),
    },
    {
      key: `birch`,
      name: `Copper Birch`,
      note: `Slender white-barked birch with a loose, airy orange crown.`,
      litter: [10698512, 14181405, 15764012, 16757575, 15254106],
      build: (e = 37, t = 0) =>
        F(
          {
            trunkH: 5.2,
            trunkR: 0.2,
            lean: 0.3,
            leanA: 4,
            wobble: 0.1,
            roots: 3,
            limbs: 5,
            spread: 0.5,
            limbLen: 2.2,
            rise: 0.25,
            gnarl: 0.28,
            fork: 0.8,
            kids: 2,
            depth: 2,
            lenFalloff: 0.66,
            leader: !0,
            clumpR: 1.2,
            cards: 18,
            cardSize: 1.15,
            core: 0.65,
            sideClump: 0.35,
            tile: b.BROAD,
            barkColor: V,
            leafColor: H([9384720, 13194778, 15695656, 16753980, 16762714], {
              core: 0.4,
              jitter: 0.1,
            }),
          },
          e,
          t,
        ),
    },
    {
      key: `spruce`,
      name: `Ridge Spruce`,
      note: `Evergreen with drooping, layered sprig branches: replaces the cone stack.`,
      litter: [5913122, 8015920, 4600863],
      build: (e = 51, t = 0) =>
        L(
          {
            h: 11.5,
            trunkR: 0.3,
            skirt: 1.3,
            whorls: 15,
            perWhorl: 8,
            baseLen: 3.3,
            droop: 0.42,
            cardsPerM: 3.4,
            cardSize: 1.1,
            cross: 0.5,
            barkColor: B(_(3810328), _(7028777), _(2365200), 0.3),
            leafColor: (e, t, n, r) => {
              (e
                .copy(_(1323036))
                .lerp(_(2906673), 0.25 + 0.5 * n + 0.25 * t)
                .lerp(_(7248458), 0.25 * n * n),
                e.multiplyScalar(0.9 + 0.2 * r()));
            },
          },
          e,
          t,
        ),
    },
    {
      key: `beech`,
      name: `Turning Beech`,
      note: `Mid-turn beech: green heart going amber and rust at the edges.`,
      litter: [12076827, 14256671, 10721838, 9067038, 7309870],
      build: (e = 64, t = 0) =>
        F(
          {
            trunkH: 2.8,
            trunkR: 0.42,
            lean: 0.25,
            leanA: 5.2,
            wobble: 0.06,
            roots: 6,
            limbs: 5,
            spread: 0.95,
            limbLen: 3.6,
            rise: 0.12,
            gnarl: 0.2,
            fork: 0.8,
            kids: 2,
            depth: 2,
            lenFalloff: 0.6,
            leader: !1,
            clumpR: 1.6,
            cards: 34,
            cardSize: 1.3,
            core: 0.55,
            sideClump: 0.35,
            tile: b.BROAD,
            barkColor: B(_(7038560), _(10196364), _(3814960), 0.6),
            leafColor: H([5205538, 8227626, 12031274, 14453282, 13128736], {
              core: 0.45,
              pick: (e, t, n, r) => {
                n > 0.7 &&
                  r() < 0.6 &&
                  e.lerp(_(r() < 0.5 ? 13919774 : 15115562), 0.6);
              },
            }),
          },
          e,
          t,
        ),
    },
  ];
for (let e of U) e.grow = e.build;
function W(e = null, { valley: t = !1 } = {}) {
  let n = G(e, { valley: t }),
    r;
  do r = n.next();
  while (!r.done);
  return r.value;
}
