// assets__terrain-D4VU5r38 15 — len
// Lines 4917-5795 of readable/assets__terrain-D4VU5r38.pretty.js (statement-aligned).
var Xn = [
    {
      key: `coconut`,
      name: `Coconut Palm`,
      note: `Leaning, curving ringed trunk under drooping feather fronds and a cluster of green coconuts.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t);
        return (Mn(n, Hn), Z(n));
      },
    },
    {
      key: `royal`,
      name: `Royal Palm`,
      note: `Smooth grey concrete-like column swelling mid-height, topped by a glossy green crownshaft.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t);
        return (
          Mn(n, {
            h: 14,
            r0: 0.3,
            r1: 0.24,
            flare: 0.3,
            lean: 0.3,
            rings: 50,
            radial: 12,
            bulge: (e) => 1 + 0.2 * Math.exp(-(((e - 0.55) / 0.2) ** 2)),
            bark: In(12894388, 11052184, 0.7, 6973022, 0.3),
            shaft: { len: 2.6, r: 1.1, cols: [5208628, 6984770] },
            crown: {
              n: 16,
              len: 4.3,
              w: 1.6,
              tile: q.PINNATE,
              eTop: 1.35,
              eBot: -0.3,
              droop: 0.6,
              keel: -0.2,
              twist: 1.2,
              stops: [4880938, 3828260, 3037726],
            },
            bunches: {
              n: 2,
              w: 0.9,
              h: 1.3,
              drop: 2.5,
              cols: [6961738, 9067082],
              stalk: 10127962,
            },
          }),
          Z(n)
        );
      },
    },
    {
      key: `date`,
      name: `Date Palm`,
      note: `Straight trunk armoured with diamond leaf bases, stiff grey-green fronds and amber date bunches.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t);
        return (
          Mn(n, {
            h: 11,
            r0: 0.3,
            r1: 0.27,
            flare: 0.25,
            lean: 0.6,
            leanA: 2.5,
            rings: 110,
            radial: 14,
            bump: Rn(6, 16, 0.07),
            bark: Ln(10124374, 5915696),
            crown: {
              n: 34,
              len: 4.2,
              w: 1.3,
              tile: q.PINNATE,
              eTop: 1.35,
              eBot: -0.25,
              droop: 0.32,
              keel: 0.6,
              stops: [10005640, 8033390, 6453338],
              dead: 0.1,
            },
            bunches: {
              n: 6,
              w: 0.8,
              h: 1.1,
              drop: 0.5,
              reach: 0.45,
              cols: [13666858, 12084254, 13138468],
            },
          }),
          Z(n)
        );
      },
    },
    {
      key: `canary`,
      name: `Canary Island Date Palm`,
      note: `Fat pineapple-textured trunk carrying a huge dense ball of arching bright-green fronds.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t);
        return (
          Mn(n, {
            h: 6.5,
            r0: 0.55,
            r1: 0.6,
            flare: 0.15,
            lean: 0.2,
            rings: 80,
            radial: 18,
            bulge: (e) => 1 + 0.28 * u.smoothstep(e, 0.75, 1),
            bump: Rn(7, 13, 0.09),
            bark: Ln(10518616, 5126696, 7, 13),
            crown: {
              n: 64,
              len: 5.6,
              w: 1.5,
              tile: q.PINNATE,
              eTop: 1.3,
              eBot: -0.45,
              droop: 0.6,
              keel: 0.45,
              stops: [6986294, 5145128, 4091426],
              dead: 0.04,
              drop: 0.5,
            },
            bunches: {
              n: 4,
              w: 0.8,
              h: 1,
              drop: 0.6,
              reach: 0.6,
              cols: [14711326, 13657626],
            },
          }),
          Z(n)
        );
      },
    },
    {
      key: `washrob`,
      name: `Mexican Fan Palm`,
      note: `Very tall, skinny trunk with a small head of glossy fans over a skirt of dead fronds.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t);
        return (
          Mn(n, {
            h: 20,
            r0: 0.2,
            r1: 0.16,
            flare: 1.1,
            lean: 0.9,
            leanA: 1.2,
            rings: 100,
            radial: 8,
            bark: In(9075818, 6970960, 0.3),
            crown: {
              n: 18,
              len: 1.5,
              w: 1.5,
              tile: q.FAN,
              segs: 3,
              eTop: 1.2,
              eBot: -0.15,
              droop: 0.35,
              keel: 0.45,
              petiole: 1.2,
              petR: 0.03,
              petCol: 9079370,
              stops: [5937710, 4883496, 4092450],
            },
            skirt: {
              len: 2.8,
              size: 1.3,
              per: 9,
              cols: [11045466, 9072196, 12624496],
            },
          }),
          Z(n)
        );
      },
    },
    {
      key: `washfil`,
      name: `California Fan Palm`,
      note: `Stout column hidden under a long straw petticoat, crowned with big grey-green fans.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t);
        return (
          Mn(n, {
            h: 10.5,
            r0: 0.45,
            r1: 0.42,
            flare: 0.3,
            lean: 0.2,
            rings: 50,
            radial: 12,
            bark: In(10129022, 8023648, 0.35),
            crown: {
              n: 24,
              len: 2.1,
              w: 2.1,
              tile: q.FAN,
              segs: 3,
              eTop: 1.15,
              eBot: -0.3,
              droop: 0.4,
              keel: 0.4,
              petiole: 1.5,
              petR: 0.045,
              petCol: 9081952,
              stops: [8822896, 7244384, 6191702],
            },
            skirt: {
              len: 7.2,
              size: 1.8,
              per: 12,
              cols: [13151866, 11572320, 14205068],
            },
          }),
          Z(n)
        );
      },
    },
    {
      key: `windmill`,
      name: `Windmill Palm`,
      note: `Hardy little fan palm on a thin trunk wrapped in shaggy brown fibre.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t);
        return (
          Mn(n, {
            h: 4.4,
            r0: 0.13,
            r1: 0.11,
            flare: 0.3,
            lean: 0.35,
            leanA: 3.4,
            rings: 44,
            radial: 9,
            bump: Bn(0.14),
            bark: zn(3811870, 6966836),
            crown: {
              n: 18,
              len: 0.95,
              w: 0.95,
              tile: q.FAN,
              segs: 3,
              eTop: 1.25,
              eBot: -0.2,
              droop: 0.4,
              keel: 0.3,
              petiole: 0.75,
              petR: 0.018,
              petCol: 5925434,
              stops: [3828266, 3037732, 2510366],
              dead: 0.1,
            },
            skirt: { len: 0.9, size: 0.8, per: 6, cols: [6967862, 9072200] },
          }),
          Z(n)
        );
      },
    },
    {
      key: `sago`,
      name: `Sago Palm`,
      note: `Cycad, not a true palm: a stubby scaly trunk with a rosette of stiff, glossy, feather leaves.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t),
          r = Mn(n, {
            h: 0.7,
            r0: 0.28,
            r1: 0.25,
            flare: 0.1,
            rings: 16,
            radial: 14,
            bump: Rn(8, 30, 0.12),
            bark: Ln(9071176, 4863524, 8, 30),
            crown: {
              n: 24,
              len: 1.4,
              w: 0.42,
              tile: q.STIFF,
              eTop: 1,
              eBot: 0.05,
              droop: 0.42,
              keel: 0.5,
              stops: [3037726, 2247192, 1981972],
              drop: 0.05,
              cy: 0.1,
            },
          });
        return (
          n.wood.push(
            xn(r.top.clone().addScaledVector(V, 0.06), 0.14, 10123834, 1, 1.3),
          ),
          Z(n)
        );
      },
    },
    {
      key: `foxtail`,
      name: `Foxtail Palm`,
      note: `Smooth grey trunk and crownshaft under bushy fronds whose leaflets bristle all round like a fox tail.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t);
        return (
          Mn(n, {
            h: 7.5,
            r0: 0.25,
            r1: 0.16,
            flare: 0.3,
            lean: 0.4,
            leanA: 5,
            rings: 40,
            radial: 10,
            bulge: (e) => 1 + 0.18 * Math.exp(-((e / 0.3) ** 2)),
            bark: In(11841702, 9341568, 0.25, 5920334, 0.4),
            shaft: { len: 1.3, r: 1.15, cols: [5933626, 8826446] },
            crown: {
              n: 10,
              len: 3.3,
              w: 1.25,
              tile: q.PINNATE,
              eTop: 1.25,
              eBot: -0.15,
              droop: 0.6,
              keel: -0.1,
              twist: 0.8,
              cross: !0,
              stops: [6986294, 5933614, 4880934],
            },
            bunches: {
              n: 2,
              w: 0.7,
              h: 0.9,
              drop: 1.2,
              reach: 0.3,
              cols: [14172190, 14703134],
            },
          }),
          Z(n)
        );
      },
    },
    {
      key: `bottle`,
      name: `Bottle Palm`,
      note: `Squat trunk swollen like a bottle, a short green crownshaft and a few strongly recurved fronds.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t);
        return (
          Mn(n, {
            h: 3,
            r0: 0.22,
            r1: 0.12,
            flare: 0.1,
            lean: 0.1,
            rings: 34,
            radial: 14,
            bulge: (e) => 1 + 1.15 * Math.exp(-(((e - 0.32) / 0.24) ** 2)),
            bark: In(11052184, 8288880, 0.12, 5920334, 0.35),
            shaft: { len: 0.9, r: 1.3, cols: [6982202, 9087058] },
            crown: {
              n: 6,
              len: 2.6,
              w: 1,
              tile: q.PINNATE,
              eTop: 1.4,
              eBot: 0.7,
              droop: 1.15,
              keel: 0.55,
              stops: [4880938, 4090404],
              even: !0,
            },
          }),
          Z(n)
        );
      },
    },
    {
      key: `traveller`,
      name: `Traveller's Palm`,
      note: `Banana-like paddle leaves on long stalks, all held in one flat vertical fan.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t);
        return (
          Mn(n, {
            h: 3.4,
            r0: 0.22,
            r1: 0.2,
            flare: 0.3,
            rings: 30,
            radial: 10,
            bark: In(9077876, 6182988, 0.2),
            crown: {
              n: 18,
              plane: 0.3,
              len: 2.6,
              w: 0.75,
              tile: q.PADDLE,
              segs: 6,
              eTop: 1.5,
              eBot: 0.3,
              droop: 0.22,
              keel: 0.12,
              petiole: 1.6,
              petR: 0.05,
              petCol: 6982202,
              stops: [5933618, 4880938, 3828260],
              dead: 0.11,
              drop: 0.3,
            },
          }),
          Z(n)
        );
      },
    },
    {
      key: `areca`,
      name: `Areca Palm Clump`,
      note: `Clump of slender golden-green canes with feathery, arching yellow-green fronds.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t);
        return (
          Yn(
            n,
            {
              h: 4,
              r0: 0.06,
              r1: 0.05,
              flare: 0.3,
              rings: 30,
              radial: 6,
              wob: 0.08,
              bark: In(11053130, 6187562, 0.22, 5921322, 0.7),
              shaft: { len: 0.5, r: 1.3, cols: [10135626, 11843674] },
              crown: {
                n: 6,
                len: 2,
                w: 0.8,
                tile: q.PINNATE,
                eTop: 1.25,
                eBot: 0.1,
                droop: 0.85,
                keel: 0.35,
                stops: [10137150, 8298034, 6983212],
              },
            },
            7,
            0.45,
            [2.4, 5.4],
            [0.2, 1.3],
          ),
          Z(n)
        );
      },
    },
    {
      key: `pygmy`,
      name: `Pygmy Date Palm`,
      note: `Three knobbly little trunks, each under a dense round mop of fine, soft dark fronds.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t);
        return (
          Yn(
            n,
            {
              h: 1.9,
              r0: 0.1,
              r1: 0.09,
              flare: 0.3,
              rings: 30,
              radial: 9,
              bump: Rn(5, 26, 0.15),
              bark: Ln(8021064, 4075556, 5, 26),
              crown: {
                n: 28,
                len: 1.25,
                w: 0.55,
                tile: q.PINNATE,
                eTop: 1.3,
                eBot: -0.55,
                droop: 0.9,
                keel: 0.2,
                stops: [3039780, 2510366, 1983e3],
              },
            },
            3,
            0.3,
            [1.5, 2.2],
            [0.3, 0.6],
          ),
          Z(n)
        );
      },
    },
    {
      key: `sabal`,
      name: `Cabbage Palm`,
      note: `Trunk criss-crossed with split leaf-base boots under a dense globe of recurved olive fans.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t);
        return (
          Mn(n, {
            h: 8,
            r0: 0.24,
            r1: 0.24,
            flare: 0.3,
            lean: 0.5,
            leanA: 4.2,
            rings: 60,
            radial: 10,
            bark: Ln(9075296, 5917754, 4, 9),
            boots: {
              n: 70,
              t0: 0.35,
              t1: 0.96,
              len: 0.32,
              r: 0.06,
              col: 8021064,
              out: 0.8,
            },
            crown: {
              n: 36,
              len: 1.4,
              w: 1.4,
              tile: q.FAN,
              segs: 3,
              eTop: 1.3,
              eBot: -0.6,
              droop: 0.8,
              keel: 0.55,
              petiole: 1,
              petR: 0.025,
              petCol: 6978116,
              stops: [5929526, 5140016, 4087336],
              dead: 0.08,
            },
          }),
          Z(n)
        );
      },
    },
    {
      key: `bismarck`,
      name: `Bismarck Palm`,
      note: `Massive silver-blue fans, three metres across, on a thick ringed grey trunk.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t);
        return (
          Mn(n, {
            h: 6.5,
            r0: 0.45,
            r1: 0.42,
            flare: 0.25,
            rings: 44,
            radial: 12,
            bark: In(11052186, 8815226, 0.28, 5920334, 0.4),
            crown: {
              n: 22,
              len: 2.7,
              w: 2.7,
              tile: q.FAN,
              segs: 4,
              eTop: 1.2,
              eBot: -0.1,
              droop: 0.3,
              keel: 0.35,
              petiole: 1.7,
              petR: 0.07,
              petCol: 11056304,
              stops: [11059398, 9744570, 8823468],
              dead: 0.07,
            },
          }),
          Z(n)
        );
      },
    },
    {
      key: `fishtail`,
      name: `Fishtail Palm`,
      note: `Huge twice-divided fronds of jagged fishtail leaflets and long hanging fruit strands.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t);
        return (
          Mn(n, {
            h: 8,
            r0: 0.2,
            r1: 0.18,
            flare: 0.3,
            lean: 0.3,
            rings: 50,
            radial: 9,
            bark: In(10131082, 7236192, 0.3, 4867646, 0.6),
            crown: {
              n: 9,
              len: 4.4,
              w: 2.4,
              tile: q.FISHTAIL,
              eTop: 1.25,
              eBot: 0,
              droop: 0.5,
              keel: 0.25,
              twist: 0.4,
              stops: [4091432, 3301922, 2774048],
            },
            bunches: {
              n: 4,
              w: 0.6,
              h: 2.2,
              drop: 1.8,
              reach: 0.25,
              cols: [6954538, 8006186, 5909050],
              stalk: 6974010,
            },
          }),
          Z(n)
        );
      },
    },
    {
      key: `oilpalm`,
      name: `Oil Palm`,
      note: `Rough trunk bristling with old frond stubs, a heavy dark crown and red-black fruit bunches.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t),
          r = Mn(n, {
            h: 6.5,
            r0: 0.38,
            r1: 0.36,
            flare: 0.25,
            lean: 0.4,
            leanA: 0.8,
            rings: 50,
            radial: 12,
            bump: Bn(0.06),
            bark: zn(4864554, 7232064),
            boots: {
              n: 110,
              t0: 0.12,
              t1: 0.97,
              len: 0.42,
              r: 0.07,
              col: 5917236,
              out: 0.9,
            },
            crown: {
              n: 40,
              len: 5,
              w: 1.2,
              tile: q.PINNATE,
              eTop: 1.25,
              eBot: -0.3,
              droop: 0.5,
              keel: 0.3,
              twist: 1.1,
              stops: [3036704, 2509338, 1981974],
              dead: 0.08,
            },
          });
        for (let e = 0; e < 4; e++) {
          let i = Y(e * 1.6 + 0.4),
            a = r.top
              .clone()
              .addScaledVector(V, -0.5)
              .addScaledVector(i, r.topR + 0.25);
          n.wood.push(xn(a, 0.28, e % 2 ? 8003088 : 5904912, +!t, 1.2));
          for (let e = 0; e < (t ? 0 : 6); e++)
            n.wood.push(
              xn(
                a
                  .clone()
                  .add(
                    new K(n.r() - 0.5, n.r() - 0.5, n.r() - 0.5)
                      .normalize()
                      .multiplyScalar(0.27),
                  ),
                0.06,
                14704666,
                0,
              ),
            );
        }
        return Z(n);
      },
    },
    {
      key: `nipa`,
      name: `Nipa Palm`,
      note: `Mangrove palm with no trunk: tall erect fronds rise straight out of the tidal mud around a round fruit head.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t);
        return (Jn(n), Z(n));
      },
    },
    {
      key: `ponytail`,
      name: `Ponytail Palm`,
      note: `Swollen elephant-foot base and a few stems ending in fountains of thin, curling leaves.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t);
        return (Kn(n), Z(n));
      },
    },
    {
      key: `pandanus`,
      name: `Pandanus Screwpine`,
      note: `Leaning trunk on stilt prop roots, forking into spiral tufts of saw-edged strap leaves.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t);
        return (qn(n), Z(n));
      },
    },
    {
      key: `sprout`,
      name: `Coconut Sprout`,
      note: `A husked coconut in the grass putting up its first few undivided, pleated leaves.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t);
        return (Un(n, new K()), Z(n));
      },
    },
    {
      key: `broken`,
      name: `Storm-broken Palm`,
      note: `Coconut trunk snapped by a hurricane, a few dead fronds hanging, its crown lying in the grass.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t);
        return (Wn(n), Z(n));
      },
    },
    {
      key: `twin`,
      name: `Double-trunk Coconut`,
      note: `Two coconut trunks from one base, leaning apart in a wide V, each with its own crown.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t);
        return (
          Mn(n, Hn, new K(0.13, 0, 0), { h: 12, lean: 3, leanA: 0.1 }),
          Mn(n, Hn, new K(-0.13, 0, 0), {
            h: 9.5,
            lean: 2.4,
            leanA: 2.7,
            crown: { ...Hn.crown, n: 20 },
          }),
          Z(n)
        );
      },
    },
    {
      key: `palmetto`,
      name: `Saw Palmetto Thicket`,
      note: `Knee-high thicket of creeping stems and stiff yellow-green fans.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t);
        return (Gn(n), Z(n));
      },
    },
    {
      key: `raffia`,
      name: `Raffia Palm`,
      note: `Shaggy trunk holding up the largest leaves in the plant world: erect fronds ten metres long.`,
      litter: null,
      build: (e, t) => {
        let n = X(e, t);
        return (
          Mn(n, {
            h: 4.5,
            r0: 0.4,
            r1: 0.36,
            flare: 0.3,
            rings: 36,
            radial: 12,
            bump: Bn(0.12),
            bark: zn(3812384, 6178352),
            crown: {
              n: 13,
              len: 10,
              w: 2.4,
              tile: q.PINNATE,
              segs: 10,
              eTop: 1.42,
              eBot: 0.6,
              droop: 0.34,
              keel: 0.35,
              stops: [5933614, 4880936, 4090404],
              dead: 0.08,
            },
            bunches: {
              n: 2,
              w: 1,
              h: 1.7,
              drop: 0.5,
              reach: 0.4,
              cols: [6961694, 8014372],
            },
          }),
          Z(n)
        );
      },
    },
  ],
  Zn = {
    trunkH: 3.2,
    trunkR: 0.34,
    lean: 0.25,
    leanA: 0.6,
    wobble: 0.05,
    roots: 5,
    limbs: 5,
    spread: 0.75,
    limbLen: 3,
    rise: 0.22,
    gnarl: 0.22,
    fork: 0.75,
    kids: 2,
    depth: 2,
    lenFalloff: 0.62,
    leader: !0,
    clumpR: 1.5,
    cards: 22,
    cardSize: 1.35,
    core: 0.65,
    sideClump: 0.35,
    tile: q.GLOSSY,
  },
  Qn = (e, { core: t = 0.5, jitter: n = 0.08, pick: r = null } = {}) => {
    let i = _n(e);
    return (e, a, o, s) => {
      (i(a * 0.75 + 0.25 * s(), e),
        r && r(e, a, o, s),
        e.multiplyScalar(1 - t * (1 - o) * 0.9 + (s() - 0.5) * n * 2),
        e.offsetHSL((s() - 0.5) * 0.025, 0, 0));
    };
  },
  $n =
    (e, t, n, r = 0.5) =>
    (i, a, o, s) => {
      let c = 0.5 + 0.5 * Math.sin(Math.atan2(s, a) * 7 + o * 1.3);
      i.set(e)
        .lerp(fn.set(t), 0.35 + 0.45 * c)
        .lerp(fn.set(n), mn(1 - o / 1.1, 0, 1) * r);
    },
  er = (e, t, n) => (r, i, a, o) => {
    let s =
      Math.sin(i * 7.1 + a * 2.3) * Math.sin(o * 6.7 - a * 1.9) +
      0.4 * Math.sin(a * 5.3 + i * 4);
    r.set(e)
      .lerp(fn.set(t), mn(s * 0.7 + 0.5, 0, 1))
      .lerp(fn.set(n), mn(1 - a / 0.8, 0, 1) * 0.5);
  };
