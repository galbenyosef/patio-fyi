// assets__terrain-C3lt_eD1 20 — key
// Lines 6792-7513 of readable/assets__terrain-C3lt_eD1.pretty.js (statement-aligned).
var yr = [
    {
      key: `banana`,
      name: `Banana Plant`,
      note: `Blotched pseudostem, tattered paddle leaves and a hanging hand-by-hand bunch with its purple bell.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t);
        return (
          sr(n, new K()),
          sr(n, new K(0.75, 0, 0.35), 0.4, !1, 5),
          sr(n, new K(-0.5, 0, 0.55), 0.3, !1, 4),
          Z(n)
        );
      },
    },
    {
      key: `birdpara`,
      name: `Bird of Paradise`,
      note: `Clump of stiff blue-green paddle leaves with orange-and-blue crane-head flowers.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t);
        return (
          cr(n, {
            n: 24,
            rad: 0.45,
            lean: [0.1, 0.45],
            pet: [0.6, 1],
            petR: 0.018,
            petCol: 5929562,
            len: 0.55,
            w: 0.2,
            droop: 0.2,
            tile: q.PADDLE,
            keel: 0.35,
            stops: [4614744, 5536354, 4087374],
            cy: 1,
          }),
          lr(n),
          Z(n)
        );
      },
    },
    {
      key: `strangler`,
      name: `Strangler Fig`,
      note: `Rainforest giant: a lattice of fused fig roots around a vanished host, flared into plank buttresses.`,
      litter: null,
      build: (e, t) => {
        let n = {
          trunkH: 7,
          trunkR: 0.95,
          lean: 0.2,
          wobble: 0.03,
          roots: 0,
          limbs: 7,
          limbStart: 0.6,
          spread: 0.95,
          limbLen: 6,
          rise: 0.2,
          gnarl: 0.25,
          clumpR: 2.4,
          cards: 26,
          cardSize: 1.9,
          core: 0.6,
          tile: q.GLOSSY,
          barkColor: er(8024676, 10130046, 4867128),
          leafColor: Qn([1718290, 2641432, 3828258, 5933620], { core: 0.55 }),
        };
        return tr(n, e, t, (e) => {
          (ar(e, 7, 0.95, 3.4, 2.6, 0.3, n.barkColor),
            or(e, n, t ? 5 : 10, 7.5, 0.13, er(7235672, 9340530, 4078128)));
        });
      },
    },
    {
      key: `kapok`,
      name: `Kapok Tree`,
      note: `Emergent ceiba: huge plank buttresses, a clean grey column and a flat, tiered crown above the canopy.`,
      litter: null,
      build: (e, t) => {
        let n = {
          trunkH: 20,
          trunkR: 0.95,
          lean: 0.15,
          wobble: 0.03,
          roots: 0,
          limbs: 7,
          limbStart: 0.9,
          spread: 1.36,
          limbLen: 7.5,
          rise: 0.06,
          gnarl: 0.16,
          fork: 0.6,
          lenFalloff: 0.6,
          clumpR: 2.4,
          cards: 18,
          cardSize: 1.7,
          shell: 0.3,
          tile: q.GLOSSY,
          barkColor: er(9081474, 11054746, 5922384),
          leafColor: Qn([4090402, 5933614, 8038466, 10141786], { core: 0.45 }),
        };
        return tr(n, e, t, (e) => ar(e, 6, 0.95, 5, 5, 0.4, n.barkColor));
      },
    },
    {
      key: `banyan`,
      name: `Banyan`,
      note: `Low, enormously wide crown on braided trunks, curtained with aerial roots that thicken into pillars.`,
      litter: null,
      build: (e, t) => {
        let n = {
          trunkH: 3.2,
          trunkR: 1,
          lean: 0.1,
          wobble: 0.03,
          roots: 0,
          limbs: 8,
          limbStart: 0.5,
          spread: 1.32,
          rise: 0.08,
          limbLen: 8.5,
          gnarl: 0.2,
          clumpR: 2.3,
          cards: 22,
          cardSize: 1.7,
          tile: q.GLOSSY,
          barkColor: er(8025190, 10130562, 4867642),
          leafColor: Qn([1980948, 3036184, 4616228, 6458420], { core: 0.55 }),
        };
        return tr(n, e, t, (e, r) => {
          or(e, n, t ? 4 : 8, 3.6, 0.2, n.barkColor);
          let i = r.filter((e) => e.y > 2.8 && Math.hypot(e.x, e.z) > 2.5);
          i.forEach((r, a) => {
            if (!(a % Math.max(1, Math.floor(i.length / (t ? 20 : 48))))) {
              if (Math.hypot(r.x, r.z) > 4 && e.r() < 0.22) {
                let i = [];
                for (let e = 0; e <= 6; e++)
                  i.push(
                    r
                      .clone()
                      .setY(r.y * (1 - e / 6) - (e === 6 ? 0.1 : 0))
                      .add(
                        new K(
                          Math.sin(e * 1.7) * 0.05,
                          0,
                          Math.cos(e * 1.3) * 0.05,
                        ),
                      ),
                  );
                e.wood.push(
                  bn(
                    i,
                    (e) => 0.13 + 0.08 * e * e,
                    t ? 5 : 7,
                    (e, t, r, i) => n.barkColor(e, i.x, i.y, i.z),
                  ),
                );
              } else {
                let t = r
                    .clone()
                    .setY(
                      Math.max(
                        0.02,
                        r.y * (e.r() < 0.4 ? 0 : 0.2 + 0.5 * e.r()),
                      ),
                    ),
                  n = r
                    .clone()
                    .lerp(t, 0.5)
                    .add(
                      new K(e.r() - 0.5, 0, e.r() - 0.5).multiplyScalar(0.15),
                    );
                Dn(e.wood, [r, n, t], 0.028, 0.016, 3, J(8022610));
              }
            }
          });
        });
      },
    },
    {
      key: `mahogany`,
      name: `Mahogany`,
      note: `Tall clean reddish bole with low buttresses and a dark, dense, upright crown holding woody pear-shaped pods.`,
      litter: null,
      build: (e, t) => {
        let n = {
          trunkH: 6.5,
          trunkR: 0.5,
          lean: 0.2,
          roots: 0,
          limbs: 6,
          limbStart: 0.7,
          spread: 0.55,
          limbLen: 4.2,
          rise: 0.36,
          gnarl: 0.2,
          clumpR: 1.9,
          cards: 24,
          cardSize: 1.3,
          tile: q.GLOSSY,
          barkColor: $n(4860444, 8014386, 3021844),
          leafColor: Qn([1058830, 1849876, 2772506, 4088868], { core: 0.55 }),
          accent: { tile: q.GLOSSY, colors: [9058850, 10113064], share: 0.08 },
        };
        return tr(n, e, t, (e, t, r) => {
          (ar(e, 5, 0.5, 1.4, 1.2, 0.18, n.barkColor),
            ir(e, r, 10, 0.07, 1.6, [6965802, 8018482], 0.05, 0.5));
        });
      },
    },
    {
      key: `teak`,
      name: `Teak`,
      note: `Straight fluted trunk and a crown of huge, dull-green, sandpapery leaves with cream flower sprays.`,
      litter: [9071162, 11043914, 723e4],
      build: (e, t) =>
        tr(
          {
            trunkH: 7.5,
            trunkR: 0.42,
            lean: 0.2,
            limbs: 5,
            limbStart: 0.65,
            spread: 0.6,
            rise: 0.3,
            limbLen: 4,
            clumpR: 1.9,
            cards: 16,
            cardSize: 2.2,
            tile: q.ROUND,
            barkColor: $n(5917242, 9075300, 3812900),
            leafColor: Qn([3824158, 5403690, 7245880, 9087050], { core: 0.45 }),
            accent: {
              tile: q.BLOSSOM,
              colors: [15788752, 15129792],
              share: 0.14,
              size: 0.8,
            },
          },
          e,
          t,
        ),
    },
    {
      key: `raintree`,
      name: `Rain Tree`,
      note: `Monkeypod: a vast low umbrella of feathery leaves on massive spreading limbs, pink puff flowers.`,
      litter: null,
      build: (e, t) =>
        tr(
          {
            trunkH: 3.6,
            trunkR: 0.75,
            lean: 0.2,
            roots: 6,
            limbs: 7,
            limbStart: 0.6,
            spread: 1.12,
            rise: 0.17,
            limbLen: 7.5,
            gnarl: 0.22,
            clumpR: 2.3,
            cards: 30,
            cardSize: 1.6,
            tile: q.FEATHER,
            barkColor: $n(3814440, 6971470, 2499098),
            leafColor: Qn([2771480, 4089376, 5933612, 8038462]),
            accent: {
              tile: q.BLOSSOM,
              colors: [15241392, 15771844],
              share: 0.06,
              size: 0.7,
            },
          },
          e,
          t,
        ),
    },
    {
      key: `flame`,
      name: `Flame Tree`,
      note: `Royal poinciana: a flat umbrella of scarlet blossom over fern-like leaves, long dark pods hanging.`,
      litter: [13639706, 15747610, 15228958],
      build: (e, t) =>
        tr(
          {
            trunkH: 3.4,
            trunkR: 0.42,
            lean: 0.3,
            roots: 6,
            limbs: 6,
            spread: 1.12,
            rise: 0.14,
            limbLen: 5.2,
            gnarl: 0.2,
            clumpR: 1.7,
            cards: 26,
            cardSize: 1.3,
            tile: q.BLOSSOM,
            barkColor: $n(5919816, 9077360, 3814956),
            leafColor: Qn([11015180, 13642258, 15747610, 16742954], {
              core: 0.4,
            }),
            accent: {
              tile: q.FEATHER,
              colors: [4880930, 5933610],
              share: 0.32,
            },
          },
          e,
          t,
          (e, t) => {
            t.filter((e) => e.y > 2.4 && Math.hypot(e.x, e.z) > 1.2).forEach(
              (t, n) => {
                if (n % 7) return;
                let r = t
                  .clone()
                  .add(new K((e.r() - 0.5) * 0.1, -0.5, (e.r() - 0.5) * 0.1));
                Dn(
                  e.wood,
                  [
                    t,
                    t
                      .clone()
                      .lerp(r, 0.5)
                      .add(new K(0.04, 0, 0)),
                    r,
                  ],
                  0.03,
                  0.022,
                  3,
                  J(3810328),
                );
              },
            );
          },
        ),
    },
    {
      key: `jacaranda`,
      name: `Jacaranda`,
      note: `Open, leaning vase of branches drowned in lavender-blue trumpet flowers.`,
      litter: [9071304, 10520792, 8018104],
      build: (e, t) =>
        tr(
          {
            trunkH: 3.2,
            trunkR: 0.34,
            lean: 0.5,
            leanA: 2.3,
            limbs: 5,
            spread: 0.85,
            rise: 0.32,
            limbLen: 4.2,
            gnarl: 0.32,
            clumpR: 1.6,
            cards: 24,
            cardSize: 1.25,
            tile: q.BLOSSOM,
            barkColor: $n(4077104, 6971478, 2761760),
            leafColor: Qn([5913248, 8018112, 10123992, 12098280], {
              core: 0.4,
            }),
            accent: { tile: q.FEATHER, colors: [5933614, 6986294], share: 0.2 },
          },
          e,
          t,
        ),
    },
    {
      key: `frangipani`,
      name: `Frangipani`,
      note: `Candelabra of thick, blunt grey branches with leaf rosettes and waxy white flowers at each tip.`,
      litter: [16774364, 16312488, 16777215],
      build: (e, t) => {
        let n = X(e, t);
        return (fr(n), Z(n));
      },
    },
    {
      key: `breadfruit`,
      name: `Breadfruit`,
      note: `Dense dome of giant, deeply lobed glossy leaves hung with round, knobbly green fruit.`,
      litter: null,
      build: (e, t) =>
        tr(
          {
            trunkH: 3.5,
            trunkR: 0.4,
            limbs: 6,
            limbStart: 0.55,
            spread: 0.7,
            rise: 0.3,
            limbLen: 4,
            clumpR: 1.9,
            cards: 16,
            cardSize: 1.7,
            shell: 0.35,
            tile: q.LOBED,
            barkColor: er(6972504, 9077874, 4078128),
            leafColor: Qn([1980948, 3036184, 4485151, 6195756]),
          },
          e,
          t,
          (e, t, n) =>
            ir(e, n, 16, 0.13, 1.05, [10139706, 9087026, 11059264], 0.08),
        ),
    },
    {
      key: `mango`,
      name: `Mango Tree`,
      note: `Big, dense dark-green dome with bronze new growth and ripening mangoes on long stalks.`,
      litter: null,
      build: (e, t) =>
        tr(
          {
            trunkH: 2.4,
            trunkR: 0.5,
            limbs: 6,
            spread: 0.95,
            rise: 0.2,
            limbLen: 4.2,
            clumpR: 2.2,
            cards: 30,
            cardSize: 1.25,
            tile: q.GLOSSY,
            barkColor: $n(3813416, 6181444, 2367e3),
            leafColor: Qn([1190416, 1849876, 2772506, 4088868], { core: 0.55 }),
            accent: {
              tile: q.GLOSSY,
              colors: [9058858, 10508858, 8014378],
              share: 0.1,
            },
          },
          e,
          t,
          (e, t, n) =>
            ir(
              e,
              n,
              18,
              0.07,
              1.4,
              [14712862, 13651994, 9084976, 15249450],
              0.3,
            ),
        ),
    },
    {
      key: `papaya`,
      name: `Papaya`,
      note: `Single scarred stem topped by an umbrella of long-stalked lobed leaves over a ring of fruit.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t);
        return (pr(n), Z(n));
      },
    },
    {
      key: `cacao`,
      name: `Cacao`,
      note: `Small shade-loving understorey tree with red new leaves and ribbed pods growing straight off the trunk.`,
      litter: null,
      build: (e, t) =>
        tr(
          {
            trunkH: 1.2,
            trunkR: 0.14,
            lean: 0.2,
            roots: 3,
            limbs: 4,
            limbStart: 0.9,
            spread: 0.9,
            rise: 0.2,
            limbLen: 2.4,
            clumpR: 1.2,
            cards: 16,
            cardSize: 1.3,
            tile: q.GLOSSY,
            barkColor: er(5918272, 8023642, 3813928),
            leafColor: Qn([1718290, 2641432, 3828258, 5144106]),
            accent: {
              tile: q.GLOSSY,
              colors: [11024954, 13130314, 9056320],
              share: 0.12,
            },
          },
          e,
          t,
          (e, n) => {
            n.filter((e) => e.y > 0.35 && e.y < 2.2).forEach((n, r) => {
              if (r % 5 || e.r() < 0.3) return;
              let i = new K(n.x, 0, n.z).normalize();
              e.wood.push(
                xn(
                  n.clone().addScaledVector(i, 0.05).addScaledVector(V, -0.12),
                  0.06,
                  vn(e.r, [14196766, 13132826, 8006186, 11055152]),
                  +!t,
                  2,
                ),
              );
            });
          },
        ),
    },
    {
      key: `rubber`,
      name: `Rubber Tree`,
      note: `Straight, mottled grey plantation tree with a spiral tapping cut and a latex cup on the trunk.`,
      litter: null,
      build: (e, t) => vr(e, t),
    },
    {
      key: `mangrove`,
      name: `Red Mangrove`,
      note: `Leathery dark crown lifted over the tidal mud on a tangle of arching prop roots.`,
      litter: null,
      build: (e, t) => _r(e, t),
    },
    {
      key: `bamboo`,
      name: `Giant Bamboo`,
      note: `Dense clump of towering jointed green culms arching outward under plumes of narrow leaves.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t);
        return (dr(n), Z(n));
      },
    },
    {
      key: `heliconia`,
      name: `Heliconia`,
      note: `Banana-leaved clump sending up zig-zag lobster-claw bracts in red and yellow.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t);
        return (
          cr(n, {
            n: 18,
            rad: 0.6,
            lean: [0.1, 0.4],
            pet: [0.7, 1.3],
            petR: 0.022,
            petCol: 4880938,
            len: 1.4,
            w: 0.4,
            droop: 0.45,
            tile: q.PADDLE,
            keel: 0.2,
            stops: [4091430, 5144624, 5933622],
            cy: 1.2,
          }),
          ur(n),
          Z(n)
        );
      },
    },
    {
      key: `taro`,
      name: `Elephant Ear`,
      note: `Taro clump: huge heart-shaped leaves hanging tip-down from tall succulent stalks.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t);
        return (
          cr(n, {
            n: 12,
            rad: 0.3,
            lean: [0.15, 0.65],
            pet: [0.9, 1.5],
            petR: 0.03,
            petCol: 5925434,
            card: !0,
            size: 1.15,
            tile: q.HEART,
            stops: [3037726, 4091430, 4880938],
            cy: 1,
          }),
          Z(n)
        );
      },
    },
    {
      key: `monstera`,
      name: `Monstera-draped Trunk`,
      note: `Rainforest trunk climbed by a monstera vine: shingle leaves low, huge split leaves and aerial roots higher up.`,
      litter: null,
      build: (e, t) => gr(e, t),
    },
    {
      key: `treefern`,
      name: `Tree Fern`,
      note: `Shaggy fibrous trunk under a lacy parasol of arching bipinnate fronds and new fiddleheads.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t);
        return (hr(n), Z(n));
      },
    },
    {
      key: `cecropia`,
      name: `Cecropia`,
      note: `Pioneer tree: pale ringed trunk, a few candelabra branches ending in umbrellas of silvery hand-shaped leaves.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t);
        return (mr(n), Z(n));
      },
    },
    {
      key: `seagrape`,
      name: `Sea Grape`,
      note: `Sprawling beach tree of round leathery leaves with red veins and hanging grape-like clusters.`,
      litter: null,
      build: (e, t) =>
        tr(
          {
            trunkH: 0.8,
            trunkR: 0.2,
            lean: 0.7,
            roots: 3,
            limbs: 6,
            limbStart: 0.3,
            spread: 1.05,
            rise: 0.3,
            gnarl: 0.4,
            limbLen: 3.2,
            clumpR: 1.4,
            cards: 20,
            cardSize: 1.25,
            tile: q.ROUND,
            barkColor: er(6970960, 9339504, 4077100),
            leafColor: Qn([4086306, 5796904, 7639086, 9742398]),
            accent: {
              tile: q.ROUND,
              colors: [11026474, 9056288, 12081712],
              share: 0.12,
            },
          },
          e,
          t,
          (e, n, r) => {
            for (let n of rr(
              r.leaves,
              t ? 5 : 10,
              e.r,
              (e) =>
                e.y > 0.9 &&
                Math.hypot(e.x - r.crown.c.x, e.z - r.crown.c.z) >
                  r.crown.r * 0.6,
            ))
              Le(
                e.sink,
                n.clone().addScaledVector(V, -0.22),
                Y(e.r() * 6),
                V,
                0.28,
                0.46,
                q.FRUIT,
                new v(vn(e.r, [5909066, 8034874, 4857402])),
                () => V,
              );
          },
        ),
    },
    {
      key: `bougain`,
      name: `Bougainvillea Tree`,
      note: `Gnarled standard smothered in cascading magenta paper bracts.`,
      litter: [13115018, 14695072, 11016816],
      build: (e, t) =>
        tr(
          {
            trunkH: 1.8,
            trunkR: 0.2,
            lean: 0.4,
            roots: 3,
            wobble: 0.1,
            limbs: 5,
            spread: 0.95,
            rise: 0.25,
            gnarl: 0.42,
            limbLen: 2.6,
            clumpR: 1.3,
            cards: 26,
            cardSize: 1.1,
            tile: q.BLOSSOM,
            barkColor: $n(4865588, 7233618, 3024416),
            leafColor: Qn([9048160, 12066434, 14170784, 15753400], {
              core: 0.4,
            }),
            accent: { tile: q.GLOSSY, colors: [3828260, 4880938], share: 0.2 },
            weep: { strands: 9, len: 2.4, card: 0.7, tile: q.BLOSSOM },
          },
          e,
          t,
        ),
    },
  ],
  br = (e, t) =>
    e.map((e, n) => {
      let r = e.build,
        i = t + n * 17;
      return { ...e, key: `ft` + e.key, build: (e = i, t = 0) => r(e, t) };
    }),
  xr = [
    { name: `Palms`, list: br(Xn, 7001), atlas: gn, spacing: 13 },
    { name: `Jungle & island`, list: br(yr, 7501), atlas: gn, spacing: 16 },
  ].flatMap((e) => e.list),
  Sr = (e) => {
    let t = xr.find((t) => t.key === `ft` + e);
    if (!t) throw Error(`tropical species ${e}`);
    return t;
  },
  Cr = 0.62,
  wr = 700,
  Tr = (e) =>
    e ? (e.index ? e.index.count : e.attributes.position.count) / 3 : 0;
