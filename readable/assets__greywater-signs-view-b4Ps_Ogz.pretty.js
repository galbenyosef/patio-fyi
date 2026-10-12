/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  D as e,
  F as t,
  Ft as n,
  I as r,
  K as i,
  Lt as a,
  Ot as o,
  P as s,
  R as c,
  Rn as l,
  Rt as u,
  U as d,
  Ut as f,
  an as p,
  bn as m,
  en as h,
  et as g,
  kt as _,
  lt as v,
  mn as y,
  tt as b,
  v as x,
  vn as S,
  wn as C,
  zn as w,
} from "./graphics-quality-BsjABS0s.js";
import { i as ee, l as T } from "./map-collider-Bdq_bUeN.js";
import { n as E } from "./static-bake-DEfkgcUk.js";
import { n as D, t as O } from "./placement-build-C0quzNjY.js";
var k = (e, t, n, r, i) => ({
    bg: e,
    ink: t,
    accent: n,
    secondary: r,
    metal: i,
  }),
  A = {
    motel: k(`#14372f`, `#fff1bd`, `#fa5268`, `#55e8bd`, `#426b60`),
    space: k(`#162b45`, `#f3edda`, `#f0753d`, `#6bdded`, `#60768a`),
    rose: k(`#3e173d`, `#fff1cd`, `#fc6bbe`, `#6de8d3`, `#805976`),
    red: k(`#6d242a`, `#fff0d2`, `#ff6851`, `#eab354`, `#583b3c`),
    teal: k(`#0e464e`, `#fff4d8`, `#56d9d0`, `#f4a952`, `#547c80`),
    gold: k(`#2c2922`, `#ffebc2`, `#ffd064`, `#ed7650`, `#706556`),
    blue: k(`#203c70`, `#edf8ea`, `#58c4ff`, `#f1b455`, `#607993`),
    cream: k(`#f0e5c4`, `#233d47`, `#e06845`, `#48a69a`, `#526970`),
    green: k(`#244c32`, `#fff2c9`, `#bacd5c`, `#dc8951`, `#5c6653`),
    black: k(`#1d292d`, `#f1e5c8`, `#d85b41`, `#a9bdbe`, `#586366`),
  };
function j(e, t, n, r, i, a, o, s, c = {}) {
  return {
    key: e,
    name: t,
    description: ``,
    lighting: o,
    family: `street`,
    mount: `ground`,
    shape: `rectangle`,
    width: r,
    height: i,
    elevation: a,
    palette: { ...s },
    brand: t.toUpperCase(),
    icon: `star`,
    defaultMessageId: 1,
    faceStyle: `poster`,
    construction: n,
    ...c,
  };
}
var M = [
    j(
      `mercury-motel`,
      `Mercury Motel`,
      `motel`,
      3.25,
      2.1,
      3.6,
      `neon`,
      A.motel,
      {
        description: `A crooked 1950s motel pylon: folded chevron wings, eight-point starburst, pine cut-outs and an offset steel mast.`,
        family: `roadside`,
        shape: `angular`,
        icon: `tree`,
        defaultMessageId: 1,
      },
    ),
    j(
      `starlite-bowl`,
      `Starlite Bowl`,
      `bowling`,
      4.6,
      2.1,
      4.2,
      `neon`,
      A.space,
      {
        description: `Twin leaning legs carry a bowling-hall cabinet below a huge open diamond and three trailing neon arrows.`,
        family: `roadside`,
        shape: `diamond`,
        icon: `star`,
        defaultMessageId: 7,
      },
    ),
    j(`pixel-palace`, `Pixel Palace`, `blade`, 1.05, 3.1, 2.6, `neon`, A.rose, {
      description: `Narrow arcade blade with three triangular wall outriggers, exposed conduit and a stepped electric-blue spine.`,
      mount: `wall`,
      shape: `stepped`,
      icon: `bolt`,
      defaultMessageId: 13,
    }),
    j(
      `lucky-lantern`,
      `Lucky Lantern`,
      `pagodaRoof`,
      10,
      2.3,
      5.2,
      `neon`,
      A.red,
      {
        description: `Channel-letter restaurant roof sign on crossed steel trestles, under a swept pagoda crown and glowing lantern ends.`,
        family: `rooftop`,
        mount: `roof`,
        faceStyle: `letters`,
        icon: `glass`,
        defaultMessageId: 19,
      },
    ),
    j(
      `night-market`,
      `Night Market`,
      `marketLattice`,
      15.8,
      3.15,
      5.8,
      `neon`,
      A.teal,
      {
        description: `Broad market roof lattice with a deep double truss, raised central sun disc, diagonal rear stays and individual tube rails.`,
        family: `rooftop`,
        mount: `roof`,
        faceStyle: `letters`,
        icon: `star`,
        defaultMessageId: 25,
      },
    ),
    j(
      `nightjar-cinema`,
      `Nightjar Cinema`,
      `cinema`,
      6.3,
      1.7,
      3.35,
      `neon`,
      A.rose,
      {
        description: `Projecting cinema canopy with chamfered corners, striped soffit, hanging pearl lamps and three swept neon eyebrows.`,
        mount: `wall`,
        shape: `marquee`,
        icon: `eye`,
        defaultMessageId: 31,
      },
    ),
    j(
      `moonrise-diner`,
      `Moonrise Diner`,
      `diner`,
      4.1,
      1.6,
      2.65,
      `neon`,
      A.cream,
      {
        description: `Long round-ended enamel diner cabinet on chrome twin tubes, backed by an oversized crescent and chrome speed strips.`,
        family: `roadside`,
        shape: `capsule`,
        icon: `burger`,
        defaultMessageId: 37,
      },
    ),
    j(`palm-cove`, `Palm Cove`, `palmPylon`, 1.8, 3.8, 1.9, `neon`, A.teal, {
      description: `Resort pylon with a tall finned backbone, splayed concrete foot and a sculpted palm crown above its upright advertising panel.`,
      family: `roadside`,
      shape: `fin`,
      icon: `tree`,
      defaultMessageId: 43,
    }),
    j(`orbit-fuel`, `Orbit Fuel`, `orbit`, 3.6, 1.55, 5.6, `neon`, A.space, {
      description: `Atomic filling-station oval: tilted elliptical rings wrap a deep round cabinet on a tapering fluted pedestal.`,
      family: `roadside`,
      shape: `orbit`,
      icon: `rocket`,
      defaultMessageId: 49,
    }),
    j(
      `electric-records`,
      `Electric Records`,
      `record`,
      2.25,
      1.15,
      2.7,
      `neon`,
      A.black,
      {
        description: `Projecting circular record-shop blade with recessed concentric grooves, brass spindle and a tubular fork bracket.`,
        mount: `wall`,
        shape: `disc`,
        icon: `bolt`,
        defaultMessageId: 55,
      },
    ),
    j(
      `heartline-pharmacy`,
      `Heartline Pharmacy`,
      `cross`,
      1.6,
      1.2,
      2.85,
      `neon`,
      A.green,
      {
        description: `Volumetric pharmacy cross mounted in a forged yoke, with rounded tube outlines and a ribbed central enamel box.`,
        mount: `wall`,
        shape: `cross`,
        icon: `cross`,
        defaultMessageId: 61,
      },
    ),
    j(`red-comet`, `Red Comet`, `comet`, 8.4, 1.85, 5.8, `neon`, A.red, {
      description: `Rooftop arrow cabinet with a long swept spearhead, three luminous exhaust tails and triangular raked trestles.`,
      family: `rooftop`,
      mount: `roof`,
      shape: `arrow`,
      icon: `rocket`,
      defaultMessageId: 67,
    }),
    j(`velvet-room`, `Velvet Room`, `velvet`, 3.3, 1.4, 2.6, `neon`, A.rose, {
      description: `Cabaret sign suspended on chains from a scrolling wrought-iron arch, with a scalloped valance and pendant tassels.`,
      mount: `suspended`,
      shape: `scalloped`,
      icon: `glass`,
      defaultMessageId: 73,
    }),
    j(`wonder-wheel`, `Wonder Wheel`, `wheel`, 3.4, 1.45, 3.5, `neon`, A.gold, {
      description: `Seaside amusement sign across an illuminated spoked wheel, braced by a broad four-foot A-frame.`,
      family: `roadside`,
      shape: `wheel`,
      icon: `star`,
      defaultMessageId: 79,
    }),
    j(
      `after-hours`,
      `After Hours`,
      `letters`,
      12.2,
      2.65,
      6.5,
      `neon`,
      A.rose,
      {
        description: `Open rooftop channel-letter array: individual vertical letter supports, horizontal raceways, deep rear outriggers and service decking.`,
        family: `rooftop`,
        mount: `roof`,
        faceStyle: `letters`,
        icon: `glass`,
        defaultMessageId: 85,
      },
    ),
    j(
      `loop-drive-in`,
      `Loop Drive-In`,
      `drivein`,
      5.1,
      2.25,
      2.8,
      `neon`,
      A.space,
      {
        description: `Asymmetric drive-in boomerang with open wing tips, pinstriped folds, a freestanding starburst and bifurcated mast.`,
        family: `roadside`,
        shape: `boomerang`,
        icon: `car`,
        defaultMessageId: 91,
      },
    ),
    j(`tiger-wok`, `Tiger Wok`, `lanternGate`, 3.8, 1.8, 3.4, `neon`, A.red, {
      description: `Twin-post restaurant gate with a gently upturned roof, suspended ribbed lanterns and three neon cloud scrolls.`,
      shape: `pagoda`,
      icon: `burger`,
      defaultMessageId: 97,
    }),
    j(`bluefin-fish`, `Bluefin Fish`, `fish`, 4.2, 1.6, 3, `neon`, A.blue, {
      description: `Fish-shaped seafood cabinet with corrugated tail, dorsal fin, mouth hoop and glowing waves on three slim masts.`,
      family: `roadside`,
      shape: `fish`,
      icon: `glass`,
      defaultMessageId: 103,
    }),
    j(
      `apollo-motors`,
      `Apollo Motors`,
      `apollo`,
      5.6,
      2.1,
      4.9,
      `neon`,
      A.cream,
      {
        description: `Tall splayed car-lot A-frame with a rocket nose crown, polished structural knees and a red perimeter raceway.`,
        family: `roadside`,
        shape: `trapezoid`,
        icon: `car`,
        defaultMessageId: 109,
      },
    ),
    j(
      `silver-dollar`,
      `Silver Dollar`,
      `coin`,
      3.7,
      1.65,
      2.9,
      `neon`,
      A.gold,
      {
        description: `Saloon canopy blade with a huge milled coin medallion, curved side brackets and a deep pressed-metal hood.`,
        mount: `wall`,
        shape: `coin`,
        icon: `glass`,
        defaultMessageId: 115,
      },
    ),
    j(`crown-club`, `Crown Club`, `deco`, 1.65, 4.1, 2.3, `neon`, A.gold, {
      description: `Art-deco tower with stepped gilded shoulders, vertical flutes, three radiating crown blades and a massive tapered base.`,
      family: `roadside`,
      shape: `stepped`,
      icon: `star`,
      defaultMessageId: 121,
    }),
    j(`speed-queen`, `Speed Queen`, `speed`, 4.8, 1.55, 4.7, `neon`, A.teal, {
      description: `Cantilevered laundromat arrow on a swept single mast, with three streamlined rails and an open circular spin halo.`,
      family: `roadside`,
      shape: `speedwing`,
      icon: `bolt`,
      defaultMessageId: 127,
    }),
    j(`cherry-soda`, `Cherry Soda`, `bottle`, 1.6, 2.6, 1.75, `neon`, A.red, {
      description: `Tall bottle silhouette with rolled shoulder, crimped cap, raised label cabinet and concentric neon bubbles.`,
      family: `roadside`,
      shape: `bottle`,
      icon: `glass`,
      defaultMessageId: 133,
    }),
    j(
      `lunaris-radio`,
      `Lunaris Radio`,
      `antenna`,
      5.7,
      1.8,
      6.1,
      `neon`,
      A.blue,
      {
        description: `Roof-mounted radio sign on a tapered transmission lattice, framed by orbital waves and a crowned antenna mast.`,
        family: `rooftop`,
        mount: `roof`,
        faceStyle: `letters`,
        icon: `bolt`,
        defaultMessageId: 139,
      },
    ),
    j(
      `hideout-billiards`,
      `Hideout Billiards`,
      `billiards`,
      3.4,
      1.1,
      2.5,
      `neon`,
      A.green,
      {
        description: `Billiard-hall hanging cabinet with an open triangular rack crown, crossed cues, tension rods and bright corner diamonds.`,
        mount: `suspended`,
        shape: `triangle`,
        icon: `eye`,
        defaultMessageId: 145,
      },
    ),
    j(
      `atlas-finance`,
      `Atlas Finance`,
      `monopole`,
      14,
      4.6,
      10.2,
      `flood`,
      A.blue,
      {
        description: `Interstate-scale billboard on one heavy tapered steel monopole, with long overhead floodlight arms, rear ribs and ground-to-catwalk ladder.`,
        family: `billboard`,
        icon: `bank`,
        defaultMessageId: 151,
      },
    ),
    j(
      `harbor-lager`,
      `Harbor Lager`,
      `highway`,
      17,
      4.1,
      7.8,
      `flood`,
      A.cream,
      {
        description: `Extra-wide highway board on twin I-section uprights, a deep open rear truss, front maintenance walkway and underhung floodlight arms.`,
        family: `billboard`,
        icon: `glass`,
        defaultMessageId: 157,
      },
    ),
    j(
      `sunset-mutual`,
      `Sunset Mutual`,
      `trestle`,
      11.5,
      4,
      5.4,
      `flood`,
      A.teal,
      {
        description: `Weathered rooftop board on five raking trestles with horizontal girts, full-length rear bracing, gooseneck lights and a service catwalk.`,
        family: `billboard`,
        mount: `roof`,
        icon: `heart`,
        defaultMessageId: 163,
      },
    ),
    j(
      `borough-hardware`,
      `Borough Hardware`,
      `awning`,
      3.4,
      0.82,
      2.35,
      `bulb`,
      A.green,
      {
        description: `Slanted striped shop awning with curved support ribs, scalloped hem, valance advertising and warm soffit bulbs.`,
        mount: `wall`,
        shape: `awning`,
        icon: `bolt`,
        defaultMessageId: 169,
      },
    ),
    j(
      `grand-opening`,
      `Grand Opening`,
      `banner`,
      4.5,
      1.7,
      1.4,
      `flood`,
      A.red,
      {
        description: `Temporary vinyl banner lashed through grommets to twin timber posts, with folded feet, rear guy ropes and portable floodlight heads.`,
        family: `portable`,
        mount: `portable`,
        shape: `banner`,
        icon: `star`,
        defaultMessageId: 175,
      },
    ),
    j(
      `summit-trails`,
      `Summit Trails`,
      `timberGate`,
      4.4,
      2,
      2.7,
      `flood`,
      A.green,
      {
        description: `Heavy trailhead timber gantry with mortised braces, a cedar shelter cap and twin shepherd-hook luminaires.`,
        family: `roadside`,
        shape: `gable`,
        icon: `tree`,
        defaultMessageId: 181,
      },
    ),
    j(
      `field-kitchen`,
      `Field Kitchen`,
      `farm`,
      2.3,
      1.6,
      1.1,
      `bulb`,
      A.cream,
      {
        description: `Low farm-kitchen board of framed painted planks, bolted square timber legs, braced side feet and a scalloped festoon string.`,
        family: `roadside`,
        shape: `plank`,
        icon: `burger`,
        defaultMessageId: 187,
      },
    ),
    j(
      `lincoln-theatre`,
      `Lincoln Theatre`,
      `theatre`,
      5.6,
      1.9,
      3.1,
      `bulb`,
      A.gold,
      {
        description: `Broad fan-shaped theatre marquee, folded art-deco shoulders, deep stepped soffit and dense rows of exposed warm marquee bulbs.`,
        mount: `wall`,
        shape: `fan`,
        icon: `eye`,
        defaultMessageId: 193,
      },
    ),
    j(`fairground`, `Fairground`, `fair`, 8, 2.2, 3.5, `bulb`, A.red, {
      description: `Transportable fair entrance truss with pitched crest, pennant string, festoon lamps and four diagonal outriggers.`,
      family: `portable`,
      shape: `arch`,
      icon: `star`,
      defaultMessageId: 199,
    }),
    j(
      `westline-transit`,
      `Westline Transit`,
      `kiosk`,
      1.3,
      2.2,
      0.45,
      `backlit`,
      A.blue,
      {
        description: `Low urban advertising kiosk with a thick rolled aluminium case, inset luminous face, rain hood, rear vent slots and service door.`,
        family: `civic`,
        shape: `kiosk`,
        icon: `car`,
        defaultMessageId: 205,
      },
    ),
    j(
      `civic-centre`,
      `Civic Centre`,
      `totem`,
      1.15,
      3.6,
      1.15,
      `backlit`,
      A.cream,
      {
        description: `Upright wayfinding totem with a chamfered folded-metal spine, separate horizontal fins, inset light box and low concrete shoe.`,
        family: `civic`,
        shape: `totem`,
        icon: `bank`,
        defaultMessageId: 211,
      },
    ),
    j(
      `metro-line`,
      `Metro Line`,
      `station`,
      4.7,
      0.95,
      3.65,
      `backlit`,
      A.green,
      {
        description: `Suspended station light box on two stout hanging rods and an exposed overhead portal; stainless edge channels and end-cap vents.`,
        family: `civic`,
        mount: `suspended`,
        shape: `lightbox`,
        icon: `car`,
        defaultMessageId: 217,
      },
    ),
    j(
      `quay-market`,
      `Quay Market`,
      `nautical`,
      3.1,
      1.85,
      3.1,
      `flood`,
      A.teal,
      {
        description: `Harbourside board slung beneath a timber yardarm, with rope stays, pulley wheels, anchor plates and shaded brass lamps.`,
        family: `roadside`,
        shape: `yardarm`,
        icon: `glass`,
        defaultMessageId: 223,
      },
    ),
    j(
      `north-pine-mill`,
      `North Pine Mill`,
      `logs`,
      3.5,
      1.85,
      2.5,
      `flood`,
      A.green,
      {
        description: `Sawmill sign carried by peeled round logs with a pitched roof, exposed end grain, bolted knee braces and barn goosenecks.`,
        family: `roadside`,
        shape: `gable`,
        icon: `tree`,
        defaultMessageId: 229,
      },
    ),
    j(
      `rutherford-tools`,
      `Rutherford Tools`,
      `industrial`,
      7.1,
      2.5,
      4.2,
      `flood`,
      A.black,
      {
        description: `Factory gate sign on an industrial sawtooth space truss with substantial I-beam legs, cross-bracing and caged maintenance lamps.`,
        family: `billboard`,
        shape: `sawtooth`,
        icon: `bolt`,
        defaultMessageId: 235,
      },
    ),
    j(
      `beacon-optical`,
      `Beacon Optical`,
      `spectacles`,
      2.9,
      1.25,
      2.5,
      `backlit`,
      A.cream,
      {
        description: `Optician sign with giant tubular spectacles above a slim light box, delicate bridge, paired outriggers and a polished forked stem.`,
        shape: `spectacles`,
        icon: `eye`,
        defaultMessageId: 241,
      },
    ),
    j(
      `penny-saver`,
      `Penny Saver`,
      `sandwich`,
      1.05,
      1.5,
      0.28,
      `bulb`,
      A.red,
      {
        description: `Human-scale hinged pavement A-board with folding side chains, worn timber frame and small replaceable perimeter bulbs.`,
        family: `portable`,
        mount: `portable`,
        shape: `sandwich`,
        icon: `heart`,
        defaultMessageId: 247,
      },
    ),
    j(
      `tunnel-taxi`,
      `Tunnel Taxi`,
      `prism`,
      1.65,
      2.5,
      2.6,
      `backlit`,
      A.gold,
      {
        description: `Four-sided taxi stand lantern on a fluted cast-metal column, projecting cornice, deep square light-box body and ventilation crown.`,
        family: `civic`,
        shape: `prism`,
        icon: `car`,
        defaultMessageId: 253,
      },
    ),
    j(
      `panorama-air`,
      `Panorama Air`,
      `vboard`,
      11.8,
      3.8,
      7.8,
      `flood`,
      A.blue,
      {
        description: `Two full billboard faces diverge around one thick mast; a triangular rear space frame, continuous service catwalk and paired light banks serve both.`,
        family: `billboard`,
        shape: `vboard`,
        icon: `rocket`,
        defaultMessageId: 259,
      },
    ),
    j(
      `blackwatch-security`,
      `Blackwatch Security`,
      `tower`,
      8,
      3.4,
      9.2,
      `flood`,
      A.black,
      {
        description: `Tall four-leg lattice-tower billboard with alternating diagonal bays, large floodlight cages, inspection ladder and ground-connected maintenance deck.`,
        family: `billboard`,
        shape: `tower`,
        icon: `eye`,
        defaultMessageId: 265,
      },
    ),
    j(
      `honeysuckle-honey`,
      `Honeysuckle Honey`,
      `wagon`,
      3.2,
      1.7,
      1.3,
      `bulb`,
      A.gold,
      {
        description: `Farm-event sign on a towable low wagon: open-spoke wheels, hitch, timber bed, support jacks and a bowed string of warm lamps.`,
        family: `portable`,
        mount: `portable`,
        shape: `wagon`,
        icon: `tree`,
        defaultMessageId: 271,
      },
    ),
    j(
      `boulder-quarry`,
      `Boulder Quarry`,
      `concrete`,
      6.2,
      2.6,
      1.65,
      `flood`,
      A.black,
      {
        description: `Low quarry monument with flared concrete buttresses, recessed steel cabinet, raised plinth and industrial floor-mounted spotlights.`,
        family: `roadside`,
        shape: `monument`,
        icon: `bolt`,
        defaultMessageId: 277,
      },
    ),
    j(`last-stop`, `Last Stop`, `sail`, 2.8, 4.8, 1.6, `backlit`, A.teal, {
      description: `Tall roadside sail cabinet, curved external ribs, a swept mast and broad aerodynamic base; exposed rear light-box seams.`,
      family: `roadside`,
      shape: `sail`,
      icon: `car`,
      defaultMessageId: 283,
    }),
    j(
      `hearth-bakery`,
      `Hearth Bakery`,
      `bakery`,
      2.8,
      1.1,
      2.6,
      `bulb`,
      A.cream,
      {
        description: `Timber bakery fascia under a pitched copper hood, curved wrought-iron hanging brackets, round bread seal and warm gooseneck-like bulb shades.`,
        mount: `wall`,
        shape: `hood`,
        icon: `heart`,
        defaultMessageId: 289,
      },
    ),
    j(`city-watch`, `City Watch`, `scaffold`, 5, 2.8, 2.7, `flood`, A.blue, {
      description: `Modular municipal event board built on four scaffold standards with ring clamps, diagonal braces, adjustable screw jacks and a broad service deck.`,
      family: `portable`,
      mount: `portable`,
      shape: `scaffold`,
      icon: `bank`,
      defaultMessageId: 295,
    }),
  ],
  te = [
    219, 8, 287, 46, 45, 112, 42, 255, 265, 197, 126, 120, 115, 137, 133, 48,
    27, 274, 252, 33, 64, 239, 41, 281, 300, 169, 32, 142, 204, 235, 262, 43,
    198, 288, 87, 92, 191, 35, 187, 190, 211, 158, 277, 267, 243, 29, 270, 80,
    39, 250,
  ];
for (let [e, t] of M.entries())
  ((t.defaultMessageId = te[e]),
    (t.serviceAccess =
      t.width >= 5 || t.height + t.elevation >= 5 || t.mount === `roof`),
    Object.freeze(t.palette),
    Object.freeze(t));
Object.freeze(M);
var N = (e) => new w(...e);
function ne(e, t, n, r) {
  if (n === `detail` || [`neon`, `neon2`, `lamp`].includes(r)) return null;
  let i = e.parameters,
    o = t.clone();
  e.userData.signRotation &&
    o.multiply(
      new a().makeRotationFromQuaternion(new p(...e.userData.signRotation)),
    );
  let s = {
    matrix: o.toArray(),
    role: n,
    beam: !!e.userData.signRotation,
    surface:
      r === `wood`
        ? `wood`
        : r === `concrete`
          ? `concrete`
          : r === `canvas`
            ? `cloth`
            : `metal`,
  };
  if (e.type === `BoxGeometry`) {
    let e = [i.width, i.height, i.depth];
    return n === `solid` && [...e].sort((e, t) => e - t)[1] < 0.06
      ? null
      : { ...s, type: `box`, size: e };
  }
  return e.type === `CylinderGeometry`
    ? n === `solid` && Math.max(i.radiusTop, i.radiusBottom) < 0.04
      ? null
      : {
          ...s,
          type: `cylinder`,
          rt: i.radiusTop,
          rb: i.radiusBottom,
          height: i.height,
          sides: i.radialSegments,
        }
    : e.type === `ExtrudeGeometry` && e.userData.signOutline
      ? {
          ...s,
          type: `outline`,
          points: e.userData.signOutline,
          depth: i.options.depth,
        }
      : null;
}
var P = (e, t, n, r) => {
  let i = [];
  for (let a = 0; a < e.length; a++) {
    let o = e[a],
      s = e[(a + 1) % e.length],
      c = r ? o[t] >= n : o[t] <= n,
      l = r ? s[t] >= n : s[t] <= n;
    if ((c && i.push(o), c !== l)) {
      let e = (n - o[t]) / (s[t] - o[t]);
      i.push(o.map((t, n) => t + (s[n] - t) * e));
    }
  }
  return i;
};
function re(e, t = null, n = 0.04) {
  let r = new a(),
    i = t?.scale ?? 1;
  t &&
    r.compose(
      N(t.pos ?? [0, 0, 0]),
      new p().setFromEuler(new g(0, t.yaw ?? 0, 0)),
      new w().setScalar(i),
    );
  let o = [],
    c = (e, t, r, i, l) => {
      let u = r.elements,
        d = [0, 1, 2].map((e) => new w(u[e * 4], u[e * 4 + 1], u[e * 4 + 2])),
        f = d.map((e) => e.length());
      d.forEach((e) => e.normalize());
      let p = N(e).applyMatrix4(r),
        m = t.map((e, t) => e * f[t]),
        h = d.findIndex((e) => Math.abs(e.y) > 1 - 1e-8),
        g = (e) => {
          let t = Math.cos(e.yaw),
            n = Math.sin(e.yaw),
            r = [1 / 0, e.y0, 1 / 0, -1 / 0, e.y1, -1 / 0];
          for (let i of [-e.hx, e.hx])
            for (let a of [-e.hz, e.hz]) {
              let o = e.x + t * i + n * a,
                s = e.z - n * i + t * a;
              ((r[0] = Math.min(r[0], o)),
                (r[3] = Math.max(r[3], o)),
                (r[2] = Math.min(r[2], s)),
                (r[5] = Math.max(r[5], s)));
            }
          o.push({
            aabb: r,
            obb: e,
            surface: i.surface,
            role: i.role,
            source: l,
          });
        };
      if (h >= 0) {
        let n = [0, 1, 2].filter((e) => e !== h),
          a = d[n[0]],
          c = Math.atan2(-a.z, a.x);
        if (Math.abs(Math.sin(c * 2)) < 1e-8) {
          let n = new s().setFromCenterAndSize(N(e), N(t)).applyMatrix4(r);
          o.push({
            aabb: [...n.min.toArray(), ...n.max.toArray()],
            surface: i.surface,
            role: i.role,
            source: l,
          });
        } else
          g({
            x: p.x,
            z: p.z,
            hx: m[n[0]] / 2,
            hz: m[n[1]] / 2,
            y0: p.y - m[h] / 2,
            y1: p.y + m[h] / 2,
            yaw: c,
            thickness: m[h],
          });
        return;
      }
      let _ = d.findIndex((e) => Math.abs(e.y) < 1e-8);
      if (_ >= 0) {
        let e = d[_],
          t = Math.atan2(-e.z, e.x),
          r = new w(Math.sin(t), 0, Math.cos(t)),
          i = [0, 1, 2].filter((e) => e !== _),
          a = [];
        for (let e of [-1, 1])
          for (let t of [-1, 1]) {
            let n = d[i[0]]
              .clone()
              .multiplyScalar((m[i[0]] / 2) * e)
              .addScaledVector(d[i[1]], (m[i[1]] / 2) * t);
            a.push([n.dot(r), n.y]);
          }
        let o = [a[0], a[1], a[3], a[2]],
          s = [...new Set(a.map((e) => e[0]))].sort((e, t) => e - t),
          c = (e) => {
            let t = [];
            for (let n = 0; n < 4; n++) {
              let r = o[n],
                i = o[(n + 1) % 4];
              e < Math.min(r[0], i[0]) - 1e-7 ||
                e > Math.max(r[0], i[0]) + 1e-7 ||
                (Math.abs(r[0] - i[0]) < 1e-8
                  ? t.push(r[1], i[1])
                  : t.push(
                      r[1] + ((i[1] - r[1]) * (e - r[0])) / (i[0] - r[0]),
                    ));
            }
            return [Math.min(...t), Math.max(...t)];
          };
        for (let e = 1; e < s.length; e++) {
          let i = s[e - 1],
            a = s[e];
          if (a - i < 1e-7) continue;
          let o = c(i),
            l = c(a),
            u = Math.abs(l[1] - l[0] - (o[1] - o[0])),
            d = Math.max(1, Math.ceil(Math.min(u, a - i) / n));
          for (let e = 0; e < d; e++) {
            let n = i + ((a - i) * e) / d,
              o = i + ((a - i) * (e + 1)) / d,
              s = c(n),
              l = c(o),
              u = (n + o) / 2;
            g({
              x: p.x + r.x * u,
              z: p.z + r.z * u,
              hx: m[_] / 2,
              hz: (o - n) / 2,
              y0: p.y + Math.min(s[0], l[0]),
              y1: p.y + Math.max(s[1], l[1]),
              yaw: t,
              ramp: {
                z0: -(o - n) / 2,
                z1: (o - n) / 2,
                y: p.y + s[1],
                rise: l[1] - s[1],
              },
              thickness: Math.max(s[1] - s[0], l[1] - l[0], 1e-6),
            });
          }
        }
        return;
      }
      if (i.beam) {
        let e = d[1],
          t = new w(e.z, 0, -e.x).normalize(),
          n = new w().crossVectors(t, e).normalize(),
          r = Math.max(1, Math.ceil(Math.max(m[0], m[2]) / 0.18)),
          o = m[0] / r,
          s = m[2] / r;
        for (let u = 0; u < r; u++)
          for (let f = 0; f < r; f++) {
            let r = p
                .clone()
                .addScaledVector(d[0], -m[0] / 2 + o * (u + 0.5))
                .addScaledVector(d[2], -m[2] / 2 + s * (f + 0.5)),
              h = new a().makeBasis(t, e, n).setPosition(r);
            c(
              [0, 0, 0],
              [
                Math.abs(d[0].dot(t)) * o + Math.abs(d[2].dot(t)) * s,
                m[1],
                Math.abs(d[0].dot(n)) * o + Math.abs(d[2].dot(n)) * s,
              ],
              h,
              { ...i, beam: !1 },
              l,
            );
          }
        return;
      }
      let v = t.map((e, t) => {
          let r = [
            Math.abs(u[t * 4] * e),
            Math.abs(u[t * 4 + 1] * e),
            Math.abs(u[t * 4 + 2] * e),
          ].sort((e, t) => t - e);
          return Math.max(1, Math.ceil((r[1] - 1e-7) / n));
        }),
        y = t.map((e, t) => e / v[t]);
      for (let n = 0; n < v[0]; n++)
        for (let a = 0; a < v[1]; a++)
          for (let c = 0; c < v[2]; c++) {
            let u = e.map((e, r) => e - t[r] / 2 + y[r] * ([n, a, c][r] + 0.5)),
              d = new s().setFromCenterAndSize(N(u), N(y)).applyMatrix4(r);
            o.push({
              aabb: [...d.min.toArray(), ...d.max.toArray()],
              surface: i.surface,
              role: i.role,
              source: l,
            });
          }
    };
  for (let [t, o] of e.entries()) {
    let e = new a().fromArray(o.matrix).premultiply(r);
    if (o.type === `box`) {
      c([0, 0, 0], o.size, e, o, t);
      continue;
    }
    if (o.type === `cylinder`) {
      let r = Math.max(1, Math.ceil((Math.abs(o.rt - o.rb) * i) / n));
      for (let a = 0; a < r; a++) {
        let s = o.rb + ((o.rt - o.rb) * a) / r,
          l = o.rb + ((o.rt - o.rb) * (a + 1)) / r,
          u = Math.max(s, l),
          d = o.height / r,
          f = -o.height / 2 + d * (a + 0.5);
        if (u * i < 0.09) {
          c([0, f, 0], [u * 2, d, u * 2], e, o, t);
          continue;
        }
        let p = Array.from({ length: o.sides }, (e, t) => [
            Math.sin((t / o.sides) * Math.PI * 2) * u,
            Math.cos((t / o.sides) * Math.PI * 2) * u,
          ]),
          m = Math.min(...p.map((e) => e[0])),
          h = Math.max(...p.map((e) => e[0])),
          g = (e, t) => {
            let n = !1,
              r = 1 / 0;
            for (let i = 0, a = p.length - 1; i < p.length; a = i++) {
              let o = p[i],
                s = p[a];
              o[1] > t != s[1] > t &&
                e < ((s[0] - o[0]) * (t - o[1])) / (s[1] - o[1]) + o[0] &&
                (n = !n);
              let c = s[0] - o[0],
                l = s[1] - o[1],
                u = Math.max(
                  0,
                  Math.min(
                    1,
                    ((e - o[0]) * c + (t - o[1]) * l) / (c * c + l * l),
                  ),
                );
              r = Math.min(r, Math.hypot(e - o[0] - u * c, t - o[1] - u * l));
            }
            return n ? 0 : r;
          },
          _ = (e, t) => {
            let n = P(P(p, 0, e, !0), 0, t, !1),
              r = Math.min(...n.map((e) => e[1])),
              a = Math.max(...n.map((e) => e[1]));
            return {
              z0: r,
              z1: a,
              error:
                Math.max(...[e, t].flatMap((e) => [r, a].map((t) => g(e, t)))) *
                i,
            };
          };
        for (let r = m; r < h - 1e-7;) {
          let i = h;
          if (_(r, i).error > n) {
            let e = r,
              t = h;
            for (let i = 0; i < 24; i++) {
              let i = (e + t) / 2;
              _(r, i).error <= n ? (e = i) : (t = i);
            }
            i = Math.max(r + 1e-7, e);
          }
          let { z0: a, z1: s } = _(r, i);
          (s - a > 1e-7 &&
            c([(r + i) / 2, f, (a + s) / 2], [i - r, d, s - a], e, o, t),
            (r = i));
        }
      }
      continue;
    }
    let s = o.points.map((e) => new l(...e)),
      u = m.triangulateShape(s, []);
    for (let r of u) {
      let a = r.map((e) => o.points[e]),
        s = [0, 1].map((e) => Math.min(...a.map((t) => t[e]))),
        l = [0, 1].map((e) => Math.max(...a.map((t) => t[e]))),
        u = l[0] - s[0] < l[1] - s[1] ? 0 : 1,
        d = Math.max(1, Math.ceil(((l[u] - s[u]) * i) / n));
      for (let n = 0; n < d; n++) {
        let r = s[u] + ((l[u] - s[u]) * n) / d,
          i = s[u] + ((l[u] - s[u]) * (n + 1)) / d,
          f = P(P(a, u, r, !0), u, i, !1);
        if (!f.length) continue;
        let p = [0, 1].map((e) => Math.min(...f.map((t) => t[e]))),
          m = [0, 1].map((e) => Math.max(...f.map((t) => t[e])));
        m[0] - p[0] > 1e-7 &&
          m[1] - p[1] > 1e-7 &&
          c(
            [(p[0] + m[0]) / 2, (p[1] + m[1]) / 2, o.depth / 2],
            [m[0] - p[0], m[1] - p[1], o.depth],
            e,
            o,
            t,
          );
      }
    }
  }
  for (let e = 0; e < 3; e++) {
    let t = new Map();
    for (let [n, r] of o.entries()) {
      let i = r.obb
        ? `obb-${n}`
        : [
            r.role,
            r.surface,
            r.source,
            ...r.aabb
              .filter((t, n) => n !== e && n !== e + 3)
              .map((e) => e.toFixed(8)),
          ].join(`|`);
      (t.has(i) || t.set(i, []), t.get(i).push(r));
    }
    o.length = 0;
    for (let n of t.values()) {
      n.sort((t, n) => t.aabb[e] - n.aabb[e]);
      let t;
      for (let r of n)
        t && r.aabb[e] <= t.aabb[e + 3] + 1e-8
          ? (t.aabb[e + 3] = Math.max(t.aabb[e + 3], r.aabb[e + 3]))
          : ((t = { ...r, aabb: [...r.aabb] }), o.push(t));
    }
  }
  return o;
}
var ie = new w(0, 1, 0),
  F = (e) => new w(...e),
  I = (e, t, n) => Math.max(t, Math.min(n, e)),
  L = `#596269`,
  R = `#252e33`,
  z = `#929187`,
  B = `#70503a`,
  V = `#b2bac0`,
  ae = new WeakMap(),
  oe = 0.04,
  se = class {
    constructor(e) {
      ((this.spec = e),
        (this.parts = new Map()),
        (this.frame = new a()),
        (this.faces = []),
        (this.fixtures = []),
        (this.movementParts = []),
        (this.collisionRole = `solid`),
        (this.access = {
          groundY: 0,
          ladders: [],
          platforms: [],
          rails: [],
          entryGaps: [],
          solids: [],
        }));
    }
    add(e, t = `paint`, n = L, i = [0, 0, 0], o = [0, 0, 0]) {
      let s = new a()
          .compose(F(i), new p().setFromEuler(new g(...o)), new w(1, 1, 1))
          .premultiply(this.frame),
        c = ne(e, s, this.collisionRole, t);
      if ((c && this.movementParts.push(c), e.index)) {
        let t = e.toNonIndexed();
        (e.dispose(), (e = t));
      }
      (e.deleteAttribute(`uv`), e.applyMatrix4(s));
      let l = new d(n),
        u = new Float32Array(e.attributes.position.count * 3);
      for (let e = 0; e < u.length; e += 3)
        ((u[e] = l.r), (u[e + 1] = l.g), (u[e + 2] = l.b));
      (e.setAttribute(`color`, new r(u, 3)),
        this.parts.has(t) || this.parts.set(t, []),
        this.parts.get(t).push(e));
    }
    box(e, n, r, i, a, o, s = `paint`, c = L, l = [0, 0, 0]) {
      this.add(new t(e, n, r), s, c, [i, a, o], l);
    }
    cyl(e, t, n, r, a, o, s = `metal`, c = L, l = [0, 0, 0], u = 12) {
      this.add(new i(e, t, n, u), s, c, [r, a, o], l);
    }
    ball(e, t, n, r, i = `lamp`, a = `#ffe5a2`) {
      this.add(new C(e, 8, 6), i, a, [t, n, r]);
    }
    beam(e, n, r = 0.08, a = `metal`, o = L, s = !1) {
      let c = F(e),
        l = F(n),
        u = l.clone().sub(c),
        d = u.length();
      if (d < 1e-4) return;
      let f = s ? new i(r / 2, r / 2, d, 8) : new t(r, d, r),
        m = new p().setFromUnitVectors(ie, u.normalize());
      (f.applyQuaternion(m),
        (f.userData.signRotation = m.toArray()),
        this.add(f, a, o, c.add(l).multiplyScalar(0.5).toArray()));
    }
    line(e, t = 0.045, n = `neon`, r = this.spec.palette.accent, i = !1) {
      let a = this.collisionRole;
      a === `solid` &&
        e.length > 8 &&
        t < 0.12 &&
        Math.min(...e.map((e) => e[1])) > 2 &&
        (this.collisionRole = `detail`);
      for (let i = 1; i < e.length; i++) this.beam(e[i - 1], e[i], t, n, r, !0);
      (i && this.beam(e.at(-1), e[0], t, n, r, !0), (this.collisionRole = a));
    }
    arc(
      e,
      t,
      n,
      r,
      i,
      a = 0,
      o = Math.PI * 2,
      s = 0.04,
      c = `neon`,
      l = this.spec.palette.accent,
      u = `xy`,
    ) {
      let d = Math.max(12, Math.ceil(Math.abs(o - a) * 9)),
        f = [];
      for (let s = 0; s <= d; s++) {
        let c = a + ((o - a) * s) / d;
        f.push(
          u === `xz`
            ? [e + Math.cos(c) * r, t, n + Math.sin(c) * i]
            : [e + Math.cos(c) * r, t + Math.sin(c) * i, n],
        );
      }
      let p = this.collisionRole;
      (p === `solid` &&
        s < 0.12 &&
        t - Math.abs(i) > 2 &&
        (this.collisionRole = `detail`),
        this.line(f, s, c, l),
        (this.collisionRole = p));
    }
    poly(e, t, n = 0, r = `paint`, i = L) {
      let a = new S();
      a.moveTo(...e[0]);
      for (let t = 1; t < e.length; t++) a.lineTo(...e[t]);
      a.closePath();
      let o = new b(a, {
        depth: t,
        bevelEnabled: !0,
        bevelSize: 0.018,
        bevelThickness: 0.015,
        bevelSegments: 1,
        steps: 1,
      });
      ((o.userData.signOutline = e.map((e) => [...e])),
        this.add(o, r, i, [0, 0, n - t / 2]));
    }
    point(e) {
      return F(e).applyMatrix4(this.frame).toArray();
    }
    solid() {}
    withFrame(e, t, n) {
      let r = this.frame.clone();
      (this.frame.multiply(
        new a().compose(
          F(e),
          new p().setFromEuler(new g(...t)),
          new w(1, 1, 1),
        ),
      ),
        n(),
        this.frame.copy(r));
    }
    finish() {
      let e = new v();
      e.name = this.spec.key;
      for (let [t, n] of this.parts) {
        let r = x(n, !1);
        if ((n.forEach((e) => e.dispose()), !r))
          throw Error(`Cannot merge ${this.spec.key}/${t}`);
        let i = t === `neon` || t === `neon2` || t === `lamp`,
          a = new f({
            vertexColors: !0,
            roughness: t === `metal` ? 0.46 : 0.78,
            metalness: t === `metal` ? 0.76 : 0.08,
            emissive: i
              ? t === `lamp`
                ? `#ffe4ad`
                : t === `neon2`
                  ? this.spec.palette.secondary
                  : this.spec.palette.accent
              : `#000000`,
            emissiveIntensity: i ? (t === `lamp` ? 1.4 : 2.2) : 0,
          });
        (i && (a.userData.signEmission = a.emissiveIntensity),
          (a.name = `${this.spec.key}:${t}`),
          (a.userData.pen =
            t === `wood`
              ? `wood`
              : t === `concrete`
                ? `concrete`
                : t === `canvas`
                  ? `fabric`
                  : `metal`));
        let o = new u(r, a);
        ((o.name = t), (o.castShadow = !i), (o.receiveShadow = !0), e.add(o));
      }
      let t = new s().setFromObject(e);
      return (
        (e.userData = {
          key: this.spec.key,
          faces: this.faces,
          fixtures: this.fixtures,
          access: this.access,
          size: t.getSize(new w()).toArray(),
          bounds: [t.min.toArray(), t.max.toArray()],
          construction: this.spec.construction,
        }),
        ae.set(e, this.movementParts),
        le(e),
        e
      );
    }
  };
function ce(e, t = null) {
  let n = ae.get(e);
  if (!n) throw Error(`Sign movement authoring parts are unavailable`);
  return re(n, t, oe);
}
function le(e) {
  let t = e.userData.access;
  ((t.solids = []), (t.rails = []), (t.platforms = []));
  for (let n of ce(e)) {
    let e = n.aabb,
      r = {
        center: [0, 1, 2].map((t) => (e[t] + e[t + 3]) / 2),
        size: [0, 1, 2].map((t) => e[t + 3] - e[t]),
        role: n.role,
        surface: n.surface,
        ...(n.obb ? { obb: n.obb } : {}),
      };
    (n.role === `platform`
      ? t.platforms
      : n.role === `rail`
        ? t.rails
        : t.solids
    ).push(r);
  }
  t.geometryVersion = 2;
  let n = new s().setFromObject(e);
  ((e.userData.bounds = [n.min.toArray(), n.max.toArray()]),
    (e.userData.size = n.getSize(new w()).toArray()));
}
function ue(e, t, n = `solid`) {
  t.updateMatrix();
  let r = ne(t.geometry, t.matrix, n, `metal`);
  r && ae.get(e).push(r);
}
function H(e, t, n, r = 0.65, i = 0.65, a = `metal`) {
  e.box(r, 0.09, i, t, 0.08, n, a, a === `wood` ? B : R);
  for (let a of [-1, 1])
    for (let o of [-1, 1])
      e.cyl(
        0.025,
        0.025,
        0.055,
        t + a * r * 0.35,
        0.15,
        n + o * i * 0.35,
        `metal`,
        V,
        [0, 0, 0],
        6,
      );
}
function U(e, t, n, r = -0.38, i = 0.2, a = `metal`, o = e.spec.palette.metal) {
  (H(e, t, r, Math.max(0.55, i * 2.4), Math.max(0.6, i * 2.4), a),
    e.box(i, n, i, t, n / 2 + 0.1, r, a, o),
    e.solid([t, n / 2 + 0.1, r], [i, n, i]));
  for (let a = 0.55; a < n; a += 2.5)
    e.box(i + 0.035, 0.09, i + 0.035, t, a, r, `metal`, R);
}
function de(e, t = 0.34, n = `metal`, r = 0.22) {
  let { width: i, height: a, elevation: o, palette: s } = e.spec;
  for (let c of [-i * t, i * t])
    U(e, c, o + a * 0.62, -0.4, r, n, n === `wood` ? B : s.metal);
  e.beam(
    [-i * t, o * 0.45, -0.4],
    [i * t, o + a * 0.45, -0.4],
    r * 0.55,
    n,
    n === `wood` ? B : R,
  );
}
function W(e, t, n, r, i, a, o = 6, s = L) {
  let c = I((n - t) / 100, 0.06, 0.17);
  (e.beam([t, r, a], [n, r, a], c, `metal`, s),
    e.beam([t, i, a], [n, i, a], c, `metal`, s));
  for (let l = 0; l <= o; l++) {
    let u = t + ((n - t) * l) / o;
    (e.beam([u, r, a], [u, i, a], c * 0.72, `metal`, s),
      l < o &&
        e.beam(
          [u, l % 2 ? i : r, a],
          [u + (n - t) / o, l % 2 ? r : i, a],
          c * 0.7,
          `metal`,
          s,
        ));
  }
}
function G(e, t = 4, n = 2.8) {
  let { width: r, height: i, elevation: a } = e.spec;
  for (let o = 0; o < t; o++) {
    let s = -r * 0.43 + (o * r * 0.86) / Math.max(1, t - 1);
    (U(e, s, a + i * 0.8, -0.4, 0.14),
      H(e, s, -n, 0.65, 0.8),
      e.beam([s, 0.17, -n], [s, a + i * 0.77, -0.4], 0.14),
      e.beam([s, a * 0.35, -0.4], [s, a * 0.35, -n * 0.73], 0.1));
  }
  W(e, -r * 0.45, r * 0.45, 0.5, a * 0.7, -1.3, Math.max(3, t));
}
function K(e, t = 1.25) {
  let { width: n, height: r, elevation: i } = e.spec;
  for (let a of [-n * 0.33, n * 0.33]) {
    e.box(0.22, r + 0.6, 0.11, a, i + r / 2, -t, `metal`, R);
    for (let n of [i + 0.08, i + r - 0.08]) {
      (e.beam([a, n, -t], [a, n, -0.15], 0.1),
        e.beam([a, n - 0.35, -t], [a, n, -0.15], 0.07));
      for (let r of [-0.06, 0.06])
        e.cyl(
          0.02,
          0.02,
          0.03,
          a + r,
          n,
          -t + 0.075,
          `metal`,
          V,
          [Math.PI / 2, 0, 0],
          6,
        );
    }
  }
}
function fe(e, t, n, r, i, a = 8) {
  let o = [];
  for (let e = 0; e < a * 2; e++) {
    let r = (e * Math.PI) / a,
      s = e % 2 ? i * 0.24 : i;
    o.push([t + Math.sin(r) * s, n + Math.cos(r) * s]);
  }
  (e.poly(o, 0.11, r, `paint`, e.spec.palette.secondary),
    e.line(
      o.map((e) => [...e, r + 0.09]),
      0.032,
      `neon2`,
      e.spec.palette.secondary,
      !0,
    ));
}
function pe(e, t, n, r, i, a = 0.5, o = `paint`, s = e.spec.palette.metal) {
  let c = Math.atan2(a, r / 2),
    l = Math.hypot(r / 2, a);
  (e.box(l, 0.11, i, t - r / 4, n + a / 2, -0.1, o, s, [0, 0, c]),
    e.box(l, 0.11, i, t + r / 4, n + a / 2, -0.1, o, s, [0, 0, -c]),
    e.beam([t - r / 2, n, 0.7], [t, n + a, 0.7], 0.065, `metal`, R),
    e.beam([t, n + a, 0.7], [t + r / 2, n, 0.7], 0.065, `metal`, R));
}
function me(e, { position: t = [0, 0, 0], rotation: n = [0, 0, 0] } = {}) {
  let r = e.spec,
    { width: i, height: a, elevation: o, palette: s } = r,
    c = I(i * 0.024, 0.16, 0.42),
    l = I(i * 0.013, 0.055, 0.14),
    u = o + a / 2;
  e.withFrame(t, n, () => {
    if (r.faceStyle !== `letters`) {
      (e.box(
        i + l * 2,
        a + l * 2,
        c,
        0,
        u,
        0,
        r.construction === `banner` ? `canvas` : `paint`,
        s.bg,
      ),
        e.solid([0, u, 0], [i + l * 2, a + l * 2, c]));
      for (let t of [-1, 1])
        e.box(
          l,
          a + l * 3,
          c + 0.055,
          t * (i / 2 + l),
          u,
          0.015,
          `metal`,
          s.metal,
        );
      for (let t of [-1, 1])
        e.box(
          i + l * 2,
          l,
          c + 0.055,
          0,
          u + t * (a / 2 + l),
          0.015,
          `metal`,
          s.metal,
        );
      for (let t = -i / 2 + 0.2; t < i / 2; t += Math.max(0.8, i / 8))
        e.box(0.06, a + l, 0.09, t, u, -c / 2 - 0.07, `metal`, L);
    } else {
      W(
        e,
        -i / 2,
        i / 2,
        o - 0.08,
        o + 0.25,
        -0.16,
        Math.max(5, Math.ceil(i)),
        R,
      );
      for (let t = -i / 2; t <= i / 2; t += i / Math.ceil(i / 0.75))
        (e.box(0.045, a + 0.25, 0.07, t, u, -0.18, `metal`, s.metal),
          e.beam(
            [t, o - 0.15, -0.2],
            [t, o + a * 0.9, -0.65],
            0.05,
            `metal`,
            R,
          ));
      e.box(i, 0.09, 0.12, 0, o + a * 0.68, -0.35, `metal`, s.metal);
    }
    let t = e.point([0, u, c / 2 + 0.04]),
      n = new p().setFromRotationMatrix(e.frame),
      d = new g().setFromQuaternion(n);
    if (
      (e.faces.push({
        width: i,
        height: a,
        position: t,
        rotation: [d.x, d.y, d.z],
      }),
      r.lighting === `neon` &&
        r.faceStyle !== `letters` &&
        e.line(
          [
            [-i / 2 - l, o - l, c / 2 + 0.07],
            [i / 2 + l, o - l, c / 2 + 0.07],
            [i / 2 + l, o + a + l, c / 2 + 0.07],
            [-i / 2 - l, o + a + l, c / 2 + 0.07],
          ],
          0.036,
          `neon`,
          s.accent,
          !0,
        ),
      r.lighting === `backlit`)
    )
      for (let t of [-1, 1])
        e.box(
          0.023,
          a - 0.08,
          0.015,
          t * (i / 2 + l * 0.3),
          u,
          c / 2 + 0.04,
          `lamp`,
          `#e6f4d9`,
        );
    (e.box(0.25, 0.34, 0.13, i * 0.35, o + 0.3, -c / 2 - 0.16, `metal`, R),
      e.line(
        [
          [i * 0.35, o + 0.25, -0.3],
          [i * 0.35, o - 0.2, -0.3],
          [0, o - 0.2, -0.3],
        ],
        0.025,
        `metal`,
        R,
      ));
  });
}
function q(e, t = 3, { top: n = !0, reach: r = 0.8, goose: i = !1 } = {}) {
  let { width: a, height: o, elevation: s } = e.spec;
  for (let c = 0; c < t; c++) {
    let l = t === 1 ? 0 : -a * 0.4 + (c * a * 0.8) / (t - 1),
      u = n ? s + o + 0.22 : s - 1.14;
    if (i) {
      let t = [
        [l, u - 0.15, -0.3],
        [l, u + 0.3, -0.3],
        [l, u + 0.52, 0.1],
        [l, u + 0.48, r],
        [l, u + 0.24, r + 0.15],
      ];
      (e.line(t, 0.07, `metal`, R),
        e.cyl(
          0.08,
          0.24,
          0.13,
          l,
          u + 0.15,
          r + 0.15,
          `metal`,
          e.spec.palette.metal,
        ),
        e.cyl(0.2, 0.2, 0.02, l, u + 0.078, r + 0.15, `lamp`, `#ffe4ad`));
    } else
      (e.beam([l, u, -0.3], [l, u + (n ? 0.45 : -0.14), r], 0.075),
        e.beam(
          [l, u - 0.3, -0.3],
          [l, u + (n ? 0.45 : -0.14), r * 0.65],
          0.045,
        ),
        e.box(0.38, 0.19, 0.28, l, u + (n ? 0.4 : -0.08), r, `metal`, R, [
          n ? -0.62 : 0.62,
          0,
          0,
        ]),
        e.box(
          0.3,
          0.025,
          0.21,
          l,
          u + (n ? 0.33 : 0.03),
          r + 0.015,
          `lamp`,
          `#fff0c4`,
          [n ? -0.62 : 0.62, 0, 0],
        ));
    e.fixtures.push({
      position: e.point([l, u + (i ? 0.12 : n ? 0.34 : 0.02), r]),
      target: e.point([l * 0.7, s + o * 0.5, 0.2]),
      color: `#ffe6bb`,
    });
  }
}
function J(e, t, n, r = 0.22, i = 0) {
  let a = Math.max(2, Math.ceil(F(t).distanceTo(F(n)) / r)),
    o = [];
  for (let r = 0; r <= a; r++) {
    let s = r / a,
      c = F(t).lerp(F(n), s);
    ((c.y -= Math.sin(s * Math.PI) * i),
      o.push(c.toArray()),
      e.cyl(0.038, 0.038, 0.07, c.x, c.y - 0.04, c.z, `metal`, R),
      e.ball(0.05, c.x, c.y - 0.105, c.z));
  }
  e.line(o, 0.025, `metal`, R);
}
function he(e) {
  let t = e.spec;
  if (!t.serviceAccess) return;
  let n = t.width + 1.15,
    r = Math.max(0.32, t.elevation - 0.94),
    i = 0.09,
    a = 0.52,
    o = 1.82,
    s = 1.3,
    c = -n / 2 + 0.58;
  ((e.collisionRole = `platform`),
    e.box(n, i, s, 0, r - i / 2, 2.34 / 2, `metal`, R),
    (e.collisionRole = `detail`));
  for (let t = -n / 2 + 0.06; t < n / 2; t += 0.14)
    e.box(0.035, 0.025, 1.22, t, r + 0.014, 2.34 / 2, `metal`, L);
  (e.access.platforms.push({
    center: e.point([0, r - i / 2, 2.34 / 2]),
    size: [n, i, s],
    kind: `catwalk`,
  }),
    (e.collisionRole = `rail`));
  let l = (t, n, i) => {
    if (n - t < 0.05) return;
    for (let a of [r + 0.52, r + 1.02])
      e.beam([t, a, i], [n, a, i], 0.047, `metal`, L, !0);
    let a = Math.max(1, Math.ceil((n - t) / 1.35));
    for (let o = 0; o <= a; o++)
      e.beam(
        [t + ((n - t) * o) / a, r, i],
        [t + ((n - t) * o) / a, r + 1.02, i],
        0.045,
        `metal`,
        L,
        !0,
      );
    e.box(n - t, 0.1, 0.035, (t + n) / 2, r + 0.07, i, `metal`, R);
  };
  (l(-n / 2, c - 0.44, o), l(c + 0.44, n / 2, o));
  for (let t of [-n / 2, n / 2]) {
    for (let n of [r + 0.52, r + 1.02])
      e.beam([t, n, a], [t, n, o], 0.047, `metal`, L, !0);
    for (let n of [a, o])
      e.beam([t, r, n], [t, r + 1.02, n], 0.045, `metal`, L, !0);
  }
  (l(-n / 2, n / 2, a), (e.collisionRole = `solid`));
  for (let t = -n / 2 + 0.25; t < n / 2; t += Math.min(2, n / 2))
    (e.beam([t, r - 0.07, o], [t, Math.max(0.13, r - 0.85), -0.32], 0.085),
      e.beam([t, r - 0.07, o], [t, r - 0.07, -0.35], 0.09));
  let u = 1.94;
  e.collisionRole = `ladder`;
  for (let t of [-0.36, 0.36])
    (e.beam([c + t, 0.12, u], [c + t, r + 0.97, u], 0.075, `metal`, L),
      e.beam(
        [c + t, r + 0.97, u],
        [c + t, r + 0.97, 1.57],
        0.07,
        `metal`,
        L,
        !0,
      ));
  for (let t = 0.21; t <= r; t += 0.28)
    e.beam([c - 0.36, t, u], [c + 0.36, t, u], 0.037, `metal`, V, !0);
  if (
    (e.beam(
      [c - 0.36, r - 0.025, u],
      [c + 0.36, r - 0.025, u],
      0.04,
      `metal`,
      V,
      !0,
    ),
    r > 4.5)
  ) {
    for (let t = 2.3; t < r - 0.5; t += 1.3)
      e.arc(c, t, 1.98, 0.51, 0.62, 0, Math.PI, 0.027, `metal`, L, `xz`);
    for (let t of [-0.51, 0, 0.51])
      e.beam(
        [c + t, 2.3, u + (t ? 0.04 : 0.66)],
        [c + t, r - 0.55, u + (t ? 0.04 : 0.66)],
        0.027,
        `metal`,
        L,
        !0,
      );
  }
  (e.access.ladders.push({
    bottom: e.point([c, 0, 2.12]),
    top: e.point([c, r, 2.12]),
    landing: e.point([c, r, 1.29]),
    width: 0.68,
    rungSpacing: 0.28,
  }),
    e.access.entryGaps.push({ center: e.point([c, r, o]), width: 0.88 }),
    (e.collisionRole = `solid`));
}
var Y = {
  motel(e) {
    let { width: t, height: n, elevation: r, palette: i } = e.spec,
      a = r + n;
    (U(e, -0.3, a + 0.65, -0.42, 0.28, `metal`, i.metal),
      e.poly(
        [
          [-1.25, 0.16],
          [0.45, 0.16],
          [0.1, r],
          [-0.75, r],
        ],
        0.55,
        -0.45,
        `paint`,
        i.metal,
      ),
      e.poly(
        [
          [-t / 2 - 0.65, r - 0.55],
          [-t / 2 - 0.38, a + 0.2],
          [t / 2 + 0.72, a + 0.57],
          [t / 2 + 0.36, a + 0.15],
          [-t / 2 - 0.08, a - 0.1],
          [-t / 2 - 0.22, r],
        ],
        0.19,
        -0.07,
        `paint`,
        i.secondary,
      ),
      e.line(
        [
          [-t / 2 - 0.51, r - 0.25, 0.1],
          [-t / 2 - 0.3, a + 0.1, 0.1],
          [t / 2 + 0.51, a + 0.41, 0.1],
        ],
        0.045,
        `neon2`,
        i.secondary,
      ),
      e.beam([-0.3, a - 0.15, -0.4], [0.85, a + 1.2, -0.2], 0.1, `metal`, R),
      fe(e, 0.88, a + 1.35, -0.1, 0.8));
    for (let t = 0; t < 3; t++) {
      let n = -0.75 + t * 0.62,
        a = r - 0.3,
        o = 0.65 + (t % 2) * 0.3;
      (e.poly(
        [
          [n - 0.29, a - o],
          [n - 0.13, a - o * 0.57],
          [n - 0.23, a - o * 0.57],
          [n, a],
          [n + 0.23, a - o * 0.57],
          [n + 0.13, a - o * 0.57],
          [n + 0.29, a - o],
        ],
        0.055,
        0.15,
        `paint`,
        i.secondary,
      ),
        e.box(0.06, 0.18, 0.06, n, a - o - 0.07, 0.15, `metal`, i.secondary));
    }
  },
};
(Object.assign(Y, {
  bowling(e) {
    let { width: t, height: n, elevation: r, palette: i } = e.spec,
      a = r + n;
    for (let t of [-1, 1])
      (H(e, t * 1.4, -0.4),
        e.beam(
          [t * 1.4, 0.1, -0.4],
          [t * 0.6, a, -0.4],
          0.25,
          `metal`,
          i.metal,
        ));
    let o = [
      [0, a + 2.1, -0.1],
      [t * 0.51, a + 0.1, -0.1],
      [0, r - 0.6, -0.1],
      [-t * 0.51, a + 0.1, -0.1],
    ];
    (e.line(o, 0.18, `metal`, i.secondary, !0),
      e.line(
        o.map((e) => [e[0], e[1], 0.04]),
        0.05,
        `neon2`,
        i.secondary,
        !0,
      ));
    for (let o = 0; o < 3; o++)
      e.line(
        [
          [t / 2 + 0.3 + o * 0.35, a - 0.2, 0],
          [t / 2 + 0.9 + o * 0.35, r + n / 2, 0],
          [t / 2 + 0.3 + o * 0.35, r + 0.2, 0],
        ],
        0.06,
        `neon`,
        i.accent,
      );
    e.arc(0, a + 0.7, 0.08, 0.32, 0.32, 0, Math.PI * 2, 0.06, `neon`, i.accent);
  },
  blade(e) {
    let { width: t, height: n, elevation: r, palette: i } = e.spec;
    K(e, 1.65);
    for (let a = 0; a < 4; a++) {
      let o = -t / 2 - 0.12 - a * 0.1,
        s = r + n / 2 + (a - 1.5) * 0.07;
      (e.box(0.06, n + 0.3 - a * 0.14, 0.24, o, s, -0.02, `metal`, i.secondary),
        e.beam(
          [o, r + 0.1 + a * 0.06, 0.15],
          [o, r + n + 0.12 - a * 0.1, 0.15],
          0.026,
          `neon2`,
          i.secondary,
          !0,
        ));
    }
    for (let a of [r + 0.4, r + n / 2, r + n - 0.4])
      e.poly(
        [
          [t / 2 + 0.08, a - 0.18],
          [t / 2 + 0.43, a],
          [t / 2 + 0.08, a + 0.18],
        ],
        0.22,
        0,
        `paint`,
        i.accent,
      );
    e.line(
      [
        [t / 2 + 0.15, r, -0.3],
        [t / 2 + 0.15, r + n, -0.3],
        [t / 2 - 0.1, r + n + 0.4, -1.6],
      ],
      0.04,
      `metal`,
      R,
    );
  },
  pagodaRoof(e) {
    let { width: t, height: n, elevation: r, palette: i } = e.spec,
      a = r + n;
    G(e, 4, 3.2);
    let o = [
      [-t / 2 - 0.8, a + 0.9],
      [-t / 2 - 0.35, a + 0.54],
      [0, a + 1.1],
      [t / 2 + 0.35, a + 0.54],
      [t / 2 + 0.8, a + 0.9],
      [t / 2 + 0.4, a + 0.26],
      [0, a + 0.72],
      [-t / 2 - 0.4, a + 0.26],
    ];
    (e.poly(o, 1.1, -0.35, `paint`, i.metal),
      e.line(
        o.slice(0, 5).map((e) => [...e, 0.26]),
        0.06,
        `neon`,
        i.accent,
      ));
    for (let n of [-t / 2 - 0.25, t / 2 + 0.25]) {
      (e.beam([n, a + 0.42, -0.15], [n, a - 0.12, -0.15], 0.045),
        e.cyl(0.18, 0.18, 0.5, n, a - 0.37, -0.15, `neon2`, i.secondary));
      for (let t of [a - 0.65, a - 0.09])
        e.cyl(0.23, 0.23, 0.07, n, t, -0.15, `metal`, R);
    }
  },
  marketLattice(e) {
    let { width: t, height: n, elevation: r, palette: i } = e.spec;
    G(e, 5, 3.8);
    for (let n of [-0.7, -2])
      W(e, -t / 2, t / 2, r - 0.6, r + 0.25, n, 12, i.metal);
    for (let n = -t / 2; n <= t / 2; n += t / 10)
      (e.beam([n, r - 0.6, -0.7], [n, r + 0.25, -2], 0.08),
        e.beam([n, r + 0.25, -0.7], [n, r - 0.6, -2], 0.08));
    e.arc(
      0,
      r + n + 0.35,
      -0.15,
      1.3,
      1.3,
      0,
      Math.PI,
      0.08,
      `neon2`,
      i.secondary,
    );
    for (let t = 0; t <= 8; t++) {
      let a = (t * Math.PI) / 8;
      e.beam(
        [Math.cos(a) * 1.55, r + n + 0.35 + Math.sin(a) * 1.55, -0.15],
        [Math.cos(a) * 1.87, r + n + 0.35 + Math.sin(a) * 1.87, -0.15],
        0.065,
        `neon2`,
        i.secondary,
        !0,
      );
    }
    e.line(
      [
        [-t / 2, r - 0.16, 0.14],
        [t / 2, r - 0.16, 0.14],
      ],
      0.05,
      `neon`,
      i.accent,
    );
  },
  cinema(e) {
    let { width: t, height: n, elevation: r, palette: i } = e.spec;
    (K(e, 2.3), e.box(t + 0.8, 0.33, 2.8, 0, r - 0.22, -0.9, `paint`, i.metal));
    for (let n = -t / 2; n < t / 2; n += 0.32)
      e.box(0.055, 0.05, 2.55, n, r - 0.41, -0.9, `metal`, i.secondary);
    for (let a = 0; a < 3; a++)
      e.line(
        [
          [-t / 2 - 0.35 + a * 0.12, r + n + 0.12 + a * 0.14, 0.22],
          [0, r + n + 0.6 + a * 0.14, 0.22],
          [t / 2 + 0.35 - a * 0.12, r + n + 0.12 + a * 0.14, 0.22],
        ],
        0.045,
        `neon`,
        i.accent,
      );
    J(e, [-t / 2, r - 0.4, 0.3], [t / 2, r - 0.4, 0.3], 0.27);
    for (let n of [-t * 0.3, 0, t * 0.3])
      (e.beam([n, r - 0.39, -1.3], [n, r - 0.6, -1.3], 0.04),
        e.ball(0.1, n, r - 0.68, -1.3));
  },
  diner(e) {
    let { width: t, height: n, elevation: r, palette: i } = e.spec;
    for (let n of [-t * 0.3, t * 0.3])
      (H(e, n, -0.35),
        e.cyl(0.105, 0.105, r + 0.4, n, (r + 0.4) / 2, -0.35, `metal`, V));
    for (let a of [-1, 1])
      (e.cyl(
        n * 0.55,
        n * 0.55,
        0.22,
        (a * t) / 2,
        r + n / 2,
        -0.02,
        `paint`,
        i.bg,
        [Math.PI / 2, 0, 0],
        32,
      ),
        e.arc(
          (a * t) / 2,
          r + n / 2,
          0.15,
          n * 0.55,
          n * 0.55,
          a < 0 ? Math.PI / 2 : -Math.PI / 2,
          a < 0 ? Math.PI * 1.5 : Math.PI / 2,
          0.05,
          `neon`,
          i.accent,
        ));
    e.arc(
      -t * 0.25,
      r + n + 0.48,
      -0.18,
      0.9,
      0.9,
      0.2,
      Math.PI * 1.72,
      0.16,
      `metal`,
      V,
    );
    for (let n = 0; n < 3; n++)
      e.box(
        t + 0.6 - n * 0.25,
        0.05,
        0.08,
        0,
        r - 0.18 - n * 0.15,
        0.1,
        `metal`,
        V,
      );
  },
  palmPylon(e) {
    let { width: t, height: n, elevation: r, palette: i } = e.spec,
      a = r + n;
    (e.poly(
      [
        [-1.25, 0.08],
        [1.25, 0.08],
        [0.35, 1.35],
        [-0.35, 1.35],
      ],
      0.9,
      -0.25,
      `concrete`,
      z,
    ),
      U(e, 0, a + 0.6, -0.3, 0.33));
    for (let n = 0; n < 3; n++)
      e.poly(
        [
          [t / 2 + 0.1 + n * 0.16, 0.8],
          [t / 2 + 0.21 + n * 0.16, 0.8],
          [t / 2 + 0.27 + n * 0.16, a + 0.65 - n * 0.27],
          [t / 2 + 0.1 + n * 0.16, a + 0.5 - n * 0.27],
        ],
        0.21,
        -0.12,
        `paint`,
        n % 2 ? i.accent : i.secondary,
      );
    let o = -0.45,
      s = a + 1;
    e.beam([-0.25, a - 0.2, -0.2], [o, s, -0.2], 0.1, `metal`, i.secondary);
    for (let t = 0; t < 7; t++) {
      let n = (t * Math.PI) / 6,
        r = o + Math.cos(n) * 1.15,
        a = s + Math.sin(n) * 0.65;
      (e.poly(
        [
          [o, s],
          [(o + r) / 2, a + 0.18],
          [r, a - 0.3],
          [(o + r) / 2, a - 0.05],
        ],
        0.05,
        -0.15,
        `paint`,
        i.secondary,
      ),
        e.line(
          [
            [o, s, -0.06],
            [(o + r) / 2, a + 0.06, -0.06],
            [r, a - 0.3, -0.06],
          ],
          0.03,
          `neon2`,
          i.secondary,
        ));
    }
  },
  orbit(e) {
    let { width: t, height: n, elevation: r, palette: i } = e.spec,
      a = r + n / 2;
    (e.cyl(0.16, 0.52, r, 0, r / 2, -0.4, `metal`, i.metal, [0, 0, 0], 12),
      H(e, 0, -0.4, 1.4, 1.4));
    for (let t = 0; t < 8; t++) {
      let n = (t * Math.PI) / 4;
      e.beam(
        [Math.cos(n) * 0.5, 0.2, -0.4 + Math.sin(n) * 0.5],
        [Math.cos(n) * 0.18, r, -0.4 + Math.sin(n) * 0.18],
        0.045,
        `metal`,
        i.secondary,
      );
    }
    for (let r of [-1, 1]) {
      let o = [];
      for (let e = 0; e <= 48; e++) {
        let i = (e * Math.PI) / 24;
        o.push([
          Math.cos(i) * (t / 2 + 0.5),
          a + Math.sin(i) * (n / 2 + 0.5) + Math.cos(i) * 0.4 * r,
          -0.25,
        ]);
      }
      (e.line(o, 0.1, `metal`, i.metal),
        e.line(
          o.map((e) => [e[0], e[1], -0.16]),
          0.04,
          r > 0 ? `neon` : `neon2`,
          r > 0 ? i.accent : i.secondary,
        ));
    }
    e.ball(0.16, t * 0.54, a + 0.4, -0.17, `neon2`, i.secondary);
  },
  record(e) {
    let { width: t, height: n, elevation: r, palette: i } = e.spec,
      a = r + n / 2,
      o = t * 0.66;
    (K(e, 1.25),
      e.cyl(o, o, 0.22, 0, a, -0.16, `paint`, R, [Math.PI / 2, 0, 0], 48));
    for (let t = 0; t < 4; t++)
      e.arc(
        0,
        a,
        -0.025,
        o - t * 0.11,
        o - t * 0.11,
        0,
        Math.PI * 2,
        0.022,
        t === 0 ? `neon` : `metal`,
        t === 0 ? i.accent : L,
      );
    (e.arc(
      0,
      a,
      -0.005,
      0.31,
      0.31,
      0,
      Math.PI * 2,
      0.035,
      `neon2`,
      i.secondary,
    ),
      e.line(
        [
          [-o * 0.8, a + o * 0.68, -0.1],
          [-o * 0.3, a + o + 0.35, -0.6],
          [o * 0.65, a + o * 0.7, -0.2],
        ],
        0.1,
        `metal`,
        i.metal,
      ));
  },
  cross(e) {
    let { width: t, height: n, elevation: r, palette: i } = e.spec,
      a = r + n / 2;
    K(e, 1.25);
    let o = [
      [-0.4, a + 1.3],
      [0.4, a + 1.3],
      [0.4, a + n / 2],
      [t / 2 + 0.42, a + n / 2],
      [t / 2 + 0.42, a - n / 2],
      [0.4, a - n / 2],
      [0.4, a - 1.3],
      [-0.4, a - 1.3],
      [-0.4, a - n / 2],
      [-t / 2 - 0.42, a - n / 2],
      [-t / 2 - 0.42, a + n / 2],
      [-0.4, a + n / 2],
    ];
    (e.poly(o, 0.28, -0.07, `paint`, i.bg),
      e.line(
        o.map((e) => [...e, 0.11]),
        0.052,
        `neon2`,
        i.secondary,
        !0,
      ));
    for (let n of [-1, 1])
      e.line(
        [
          [n * (t / 2 + 0.6), a - 0.9, -0.4],
          [n * (t / 2 + 0.6), a + 0.9, -0.4],
          [n * 0.48, a + 1.45, -0.4],
        ],
        0.09,
        `metal`,
        i.metal,
      );
  },
  comet(e) {
    let { width: t, height: n, elevation: r, palette: i } = e.spec,
      a = r + n / 2;
    G(e, 3, 3.2);
    let o = [
      [t / 2 - 0.06, r - 0.48],
      [t / 2 + 2.1, a + 0.15],
      [t / 2 - 0.06, r + n + 0.68],
    ];
    (e.poly(o, 0.28, 0, `paint`, i.secondary),
      e.line(
        o.map((e) => [...e, 0.18]),
        0.055,
        `neon2`,
        i.secondary,
        !0,
      ));
    for (let n = 0; n < 3; n++)
      e.line(
        [
          [-t / 2 - 2.1 + n * 0.22, r + 0.18 + n * 0.67, 0.08],
          [-t / 2 - 0.25, r + 0.13 + n * 0.67, 0.08],
        ],
        0.08,
        `neon`,
        i.accent,
      );
    e.beam(
      [-t / 2 - 1.8, a, -0.15],
      [-t / 2 + 1, a, -0.15],
      0.15,
      `metal`,
      i.metal,
    );
  },
  velvet(e) {
    let { width: t, height: n, elevation: r, palette: i } = e.spec,
      a = r + n;
    for (let n of [-t * 0.6, t * 0.6]) U(e, n, a + 1.1, -0.4, 0.09);
    e.arc(0, a + 0.6, -0.4, t * 0.6, 0.6, 0, Math.PI, 0.095, `metal`, R);
    for (let n of [-t * 0.33, t * 0.33])
      for (let t = a + 0.12; t < a + 0.95; t += 0.1)
        e.arc(
          n,
          t,
          -0.08,
          0.045,
          0.07,
          0,
          Math.PI * 2,
          0.02,
          `metal`,
          i.secondary,
        );
    for (let n = -t / 2 + 0.23; n < t / 2; n += 0.46)
      (e.arc(
        n,
        r - 0.1,
        0.1,
        0.23,
        0.23,
        Math.PI,
        Math.PI * 2,
        0.05,
        `neon`,
        i.accent,
      ),
        e.cyl(0.015, 0.06, 0.24, n, r - 0.47, 0.1, `metal`, i.secondary));
    for (let n of [-1, 1])
      e.arc(
        n * (t / 2 + 0.12),
        a + 0.37,
        -0.15,
        0.26,
        0.24,
        -0.5,
        Math.PI * 1.7,
        0.05,
        `metal`,
        i.secondary,
      );
  },
}),
  Object.assign(Y, {
    wheel(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n / 2,
        o = 2.45;
      for (let t of [-1.8, 1.8])
        for (let n of [-1.3, -0.3])
          (H(e, t, n),
            e.beam([t, 0.1, n], [0, a, -0.4], 0.16, `metal`, i.metal));
      (e.arc(0, a, -0.27, o, o, 0, Math.PI * 2, 0.13, `metal`, i.metal),
        e.arc(0, a, -0.16, o, o, 0, Math.PI * 2, 0.045, `neon2`, i.secondary));
      for (let t = 0; t < 16; t++) {
        let n = (t * Math.PI) / 8,
          r = Math.cos(n) * o,
          s = a + Math.sin(n) * o;
        (e.beam([0, a, -0.29], [r, s, -0.29], 0.05, `metal`, i.secondary),
          e.box(
            0.28,
            0.32,
            0.26,
            r,
            s,
            -0.17,
            `paint`,
            t % 2 ? i.accent : i.secondary,
          ),
          e.ball(0.07, r, s + 0.2, 0.02, `neon`, i.accent));
      }
    },
    letters(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec;
      G(e, 6, 3.8);
      for (let n of [-0.7, -1.5])
        W(e, -t / 2 - 0.2, t / 2 + 0.2, r - 0.45, r + 0.15, n, 10, i.metal);
      for (let i = -t / 2; i <= t / 2; i += 1.22)
        (e.beam([i, r + n * 0.85, -0.25], [i, r - 0.4, -1.8], 0.08),
          e.box(0.19, 0.25, 0.14, i, r + 0.2, -0.6, `metal`, R));
      e.line(
        [
          [-t / 2, r - 0.16, 0.19],
          [t / 2, r - 0.16, 0.19],
        ],
        0.05,
        `neon2`,
        i.secondary,
      );
      for (let a of [-t / 2 - 0.4, t / 2 + 0.4])
        (e.arc(
          a,
          r + n * 0.5,
          -0.12,
          0.23,
          0.5,
          0,
          Math.PI * 2,
          0.045,
          `neon`,
          i.accent,
        ),
          e.beam([a, r - 0.3, -0.2], [a, r + n * 0.5, -0.2], 0.065));
    },
    drivein(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      for (let n of [-1, 1])
        (H(e, n * 0.75, -0.35),
          e.beam(
            [n * 0.75, 0.1, -0.35],
            [n * t * 0.3, a, -0.35],
            0.23,
            `metal`,
            i.metal,
          ));
      let o = [
        [-t / 2 - 1.4, r + 0.5],
        [-t / 2 - 0.6, a + 0.8],
        [t / 2 + 1.05, a + 0.2],
        [t / 2 + 0.1, a - 0.04],
        [-t / 2 - 0.3, a + 0.29],
        [-t / 2 - 0.65, r + 0.2],
      ];
      (e.poly(o, 0.2, -0.12, `paint`, i.secondary),
        e.line(
          o.map((e) => [...e, 0.025]),
          0.05,
          `neon2`,
          i.secondary,
          !0,
        ),
        e.line(
          [
            [-t / 2 - 0.84, r + 0.85, 0.05],
            [-t / 2 - 0.45, a + 0.58, 0.05],
            [t / 2 + 0.45, a + 0.21, 0.05],
          ],
          0.045,
          `neon`,
          i.accent,
        ),
        e.beam([t / 2 - 0.5, a - 0.1, -0.2], [t / 2 + 0.7, a + 1, -0.2], 0.085),
        fe(e, t / 2 + 0.7, a + 1.1, -0.12, 0.7));
    },
    lanternGate(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      for (let n of [-t * 0.59, t * 0.59])
        (U(e, n, a + 0.45, -0.38, 0.22, `paint`, i.metal),
          e.box(0.44, 0.16, 0.44, n, 0.32, -0.38, `paint`, i.secondary));
      e.poly(
        [
          [-t / 2 - 0.8, a + 0.8],
          [-t / 2 - 0.4, a + 0.45],
          [0, a + 0.72],
          [t / 2 + 0.4, a + 0.45],
          [t / 2 + 0.8, a + 0.8],
          [t / 2 + 0.47, a + 0.13],
          [0, a + 0.4],
          [-t / 2 - 0.47, a + 0.13],
        ],
        1,
        -0.33,
        `paint`,
        i.metal,
      );
      for (let n of [-t * 0.64, t * 0.64]) {
        (e.beam([n, a + 0.24, -0.12], [n, a - 0.15, -0.12], 0.035),
          e.cyl(
            0.2,
            0.2,
            0.57,
            n,
            a - 0.44,
            -0.12,
            `neon`,
            i.accent,
            [0, 0, 0],
            16,
          ));
        for (let t = 0; t < 8; t++) {
          let r = (t * Math.PI) / 4;
          e.beam(
            [n + Math.cos(r) * 0.21, a - 0.72, -0.12 + Math.sin(r) * 0.21],
            [n + Math.cos(r) * 0.21, a - 0.16, -0.12 + Math.sin(r) * 0.21],
            0.025,
            `metal`,
            R,
          );
        }
        for (let t of [a - 0.77, a - 0.1])
          e.cyl(0.24, 0.24, 0.06, n, t, -0.12, `metal`, i.secondary);
      }
      for (let t = 0; t < 3; t++)
        e.arc(
          -0.65 + t * 0.65,
          a + 0.36,
          0.24,
          0.25,
          0.12,
          0,
          Math.PI,
          0.035,
          `neon2`,
          i.secondary,
        );
    },
    fish(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n / 2;
      for (let i of [-t * 0.37, 0, t * 0.37]) U(e, i, r + n * 0.6, -0.38, 0.13);
      let o = [
        [-t / 2 - 0.1, a],
        [-t / 2 - 1.2, a + 1.1],
        [-t / 2 - 0.9, a],
        [-t / 2 - 1.2, a - 1.1],
      ];
      (e.poly(o, 0.22, -0.1, `paint`, i.secondary),
        e.line(
          o.map((e) => [...e, 0.05]),
          0.05,
          `neon2`,
          i.secondary,
          !0,
        ),
        e.poly(
          [
            [-0.5, r + n],
            [0.25, r + n + 0.8],
            [1.2, r + n],
          ],
          0.18,
          -0.1,
          `paint`,
          i.metal,
        ),
        e.arc(
          t / 2 + 0.16,
          a,
          -0.02,
          0.44,
          n * 0.51,
          -Math.PI / 2,
          Math.PI / 2,
          0.09,
          `metal`,
          i.metal,
        ),
        e.arc(
          t / 2 + 0.16,
          a,
          0.08,
          0.44,
          n * 0.51,
          -Math.PI / 2,
          Math.PI / 2,
          0.035,
          `neon`,
          i.accent,
        ));
      for (let n = 0; n < 3; n++) {
        let a = [];
        for (let e = 0; e <= 24; e++) {
          let i = -t / 2 + (e * t) / 24;
          a.push([
            i,
            r - 0.23 - n * 0.16 + Math.sin((e * Math.PI) / 6) * 0.09,
            0.07,
          ]);
        }
        e.line(a, 0.035, `neon`, i.accent);
      }
    },
    apollo(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      for (let n of [-t * 0.38, t * 0.38])
        (H(e, n, -0.4, 0.9, 1),
          e.beam([n, 0.14, -0.4], [0, a + 1.2, -0.4], 0.25, `metal`, i.metal));
      (e.poly(
        [
          [-0.65, a + 0.1],
          [0, a + 1.55],
          [0.65, a + 0.1],
        ],
        0.27,
        -0.05,
        `paint`,
        i.accent,
      ),
        e.line(
          [
            [-0.65, a + 0.1, 0.13],
            [0, a + 1.55, 0.13],
            [0.65, a + 0.1, 0.13],
          ],
          0.05,
          `neon`,
          i.accent,
        ));
      for (let n of [-1, 1])
        e.line(
          [
            [n * t * 0.4, 0.55, -0.22],
            [n * t * 0.18, r - 0.25, -0.22],
          ],
          0.07,
          `neon2`,
          i.secondary,
        );
      e.beam(
        [-t * 0.33, r * 0.55, -0.4],
        [t * 0.33, r * 0.55, -0.4],
        0.14,
        `metal`,
        V,
      );
      for (let o of [-1, 1])
        e.poly(
          [
            [o * t * 0.5, r - 0.1],
            [o * (t * 0.5 + 0.7), r + n * 0.6],
            [o * t * 0.5, a + 0.1],
          ],
          0.18,
          -0.02,
          `paint`,
          i.secondary,
        );
    },
    coin(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = t / 2 + 0.35,
        o = r + n / 2;
      (K(e, 1.9),
        e.box(t + 0.6, 0.23, 1.8, 0, r - 0.21, -0.65, `paint`, i.metal),
        e.cyl(
          1.03,
          1.03,
          0.23,
          a,
          o,
          -0.2,
          `metal`,
          i.secondary,
          [Math.PI / 2, 0, 0],
          48,
        ),
        e.arc(
          a,
          o,
          -0.06,
          0.93,
          0.93,
          0,
          Math.PI * 2,
          0.045,
          `neon2`,
          i.secondary,
        ));
      for (let t = 0; t < 32; t++) {
        let n = (t * Math.PI) / 16;
        e.beam(
          [a + Math.cos(n) * 0.94, o + Math.sin(n) * 0.94, -0.045],
          [a + Math.cos(n) * 1.01, o + Math.sin(n) * 1.01, -0.045],
          0.025,
          `metal`,
          V,
        );
      }
      for (let n of [-t * 0.33, t * 0.33])
        e.arc(
          n,
          r - 0.18,
          -0.65,
          0.01,
          0.75,
          Math.PI,
          Math.PI * 1.5,
          0.09,
          `metal`,
          i.secondary,
        );
      e.arc(
        0,
        r + n + 0.08,
        -0.05,
        t * 0.54,
        0.44,
        0,
        Math.PI,
        0.07,
        `neon`,
        i.accent,
      );
    },
    deco(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      e.poly(
        [
          [-1.25, 0.1],
          [1.25, 0.1],
          [0.55, r + 0.3],
          [-0.55, r + 0.3],
        ],
        0.88,
        -0.23,
        `paint`,
        i.metal,
      );
      for (let n of [-1, 1])
        for (let o = 0; o < 3; o++) {
          let s = n * (t / 2 + 0.13 + o * 0.13),
            c = a + 0.55 - o * 0.27;
          (e.box(
            0.1,
            c - 0.3,
            0.33,
            s,
            (c + 0.3) / 2,
            -0.06,
            `metal`,
            i.secondary,
          ),
            e.beam(
              [s, r - 0.3, 0.15],
              [s, c - 0.1, 0.15],
              0.028,
              `neon2`,
              i.secondary,
              !0,
            ));
        }
      for (let t = -1; t <= 1; t++)
        e.poly(
          [
            [t * 0.34 - 0.09, a + 0.12],
            [t * 0.54, a + 1.32 - Math.abs(t) * 0.33],
            [t * 0.34 + 0.09, a + 0.12],
          ],
          0.17,
          -0.02,
          `paint`,
          i.accent,
        );
      e.line(
        [
          [-t / 2, r - 0.2, 0.2],
          [0, r - 0.6, 0.2],
          [t / 2, r - 0.2, 0.2],
        ],
        0.05,
        `neon`,
        i.accent,
      );
    },
    speed(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      (H(e, -1.3, -0.5, 1.3, 1.25),
        e.poly(
          [
            [-1.65, 0.15],
            [-0.98, 0.15],
            [0.14, r + 0.2],
            [1, a + 0.14],
            [0.52, a + 0.23],
            [-0.38, r + 0.18],
          ],
          0.43,
          -0.48,
          `paint`,
          i.metal,
        ),
        e.arc(
          -t / 2 - 0.15,
          r + n / 2,
          -0.13,
          1.05,
          1.05,
          0,
          Math.PI * 2,
          0.07,
          `neon2`,
          i.secondary,
        ));
      for (let a = 0; a < 3; a++)
        e.line(
          [
            [-t / 2 - 0.5, r - 0.15 - a * 0.14, 0.1],
            [t / 2 + 0.35 - a * 0.23, r - 0.15 - a * 0.14, 0.1],
            [t / 2 + 0.96 - a * 0.23, r + n / 2 - a * 0.14, 0.1],
          ],
          0.05,
          `neon`,
          i.accent,
        );
      e.poly(
        [
          [t / 2, r - 0.1],
          [t / 2 + 1.15, r + n / 2],
          [t / 2, a + 0.1],
        ],
        0.22,
        -0.06,
        `paint`,
        i.secondary,
      );
    },
    bottle(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      U(e, 0, a + 0.8, -0.34, 0.21);
      let o = [
        [-t * 0.58, 0.6],
        [t * 0.58, 0.6],
        [t * 0.62, a - 0.15],
        [0.4, a + 0.42],
        [0.35, a + 1.15],
        [-0.35, a + 1.15],
        [-0.4, a + 0.42],
        [-t * 0.62, a - 0.15],
      ];
      (e.poly(o, 0.36, -0.14, `paint`, i.metal),
        e.line(
          o.map((e) => [...e, 0.09]),
          0.05,
          `neon`,
          i.accent,
          !0,
        ),
        e.box(0.82, 0.19, 0.44, 0, a + 1.18, -0.12, `metal`, i.secondary));
      for (let t = -0.36; t <= 0.37; t += 0.09)
        e.box(0.028, 0.2, 0.025, t, a + 1.18, 0.12, `metal`, V);
      for (let n = 0; n < 3; n++)
        e.arc(
          t * 0.65 + 0.22 + n * 0.18,
          a + 0.08 + n * 0.45,
          -0.04,
          0.13 + n * 0.04,
          0.13 + n * 0.04,
          0,
          Math.PI * 2,
          0.034,
          `neon2`,
          i.secondary,
        );
    },
    antenna(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      for (let t of [-1.7, 1.7])
        for (let n of [-1.6, -0.35])
          (H(e, t, n), e.beam([t, 0.12, n], [t * 0.23, a + 1.15, -0.65], 0.12));
      for (let t = 0.6; t < a; t += 1.2) {
        let n = 3.4 * (1 - t / (a + 1.8));
        W(e, -n / 2, n / 2, t, t + 1.1, -0.45, 1, i.metal);
      }
      e.beam([0, a - 0.3, -0.65], [0, a + 3, -0.65], 0.08, `metal`, V);
      for (let t = 0; t < 4; t++)
        e.beam(
          [-0.75 + t * 0.12, a + 1 + t * 0.45, -0.65],
          [0.75 - t * 0.12, a + 1 + t * 0.45, -0.65],
          0.04,
          `metal`,
          V,
        );
      for (let a = 0; a < 3; a++)
        for (let o of [-1, 1])
          e.arc(
            o * t * 0.5,
            r + n / 2,
            -0.1,
            0.35 + a * 0.22,
            0.7 + a * 0.22,
            o < 0 ? Math.PI * 0.55 : -Math.PI * 0.45,
            o < 0 ? Math.PI * 1.45 : Math.PI * 0.45,
            0.04,
            `neon`,
            i.accent,
          );
    },
    billiards(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      for (let n of [-t * 0.57, t * 0.57])
        (U(e, n, a + 0.95, -0.6, 0.075),
          e.beam([n, a + 0.95, -0.6], [n * 0.6, a, -0.08], 0.04));
      e.line(
        [
          [-t * 0.6, a + 0.95, -0.6],
          [t * 0.6, a + 0.95, -0.6],
        ],
        0.08,
        `metal`,
        R,
      );
      let o = [
        [-0.72, a + 0.14, 0],
        [0, a + 1.25, 0],
        [0.72, a + 0.14, 0],
      ];
      (e.line(o, 0.12, `metal`, i.secondary, !0),
        e.line(
          o.map((e) => [e[0], e[1], 0.08]),
          0.04,
          `neon2`,
          i.secondary,
          !0,
        ),
        e.beam(
          [-1.1, a + 0.15, -0.1],
          [1, a + 0.94, -0.1],
          0.035,
          `wood`,
          `#c8a26f`,
          !0,
        ),
        e.beam(
          [1.1, a + 0.15, -0.1],
          [-1, a + 0.94, -0.1],
          0.035,
          `wood`,
          `#c8a26f`,
          !0,
        ));
      for (let o of [-t / 2 - 0.25, t / 2 + 0.25])
        e.line(
          [
            [o, r + 0.12, 0],
            [o + 0.14, r + n / 2, 0],
            [o, a - 0.12, 0],
            [o - 0.14, r + n / 2, 0],
          ],
          0.04,
          `neon`,
          i.accent,
          !0,
        );
    },
  }),
  Object.assign(Y, {
    monopole(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec;
      (H(e, 0, -1.3, 2.7, 2.7),
        e.cyl(
          0.62,
          0.85,
          r + n * 0.63,
          0,
          (r + n * 0.63) / 2,
          -1.3,
          `metal`,
          i.metal,
          [0, 0, 0],
          20,
        ),
        e.solid([0, (r + n * 0.6) / 2, -1.3], [1.7, r + n * 0.6, 1.7]));
      for (let t of [0.45, r - 0.5, r + n * 0.65])
        e.cyl(0.87, 0.87, 0.12, 0, t, -1.3, `metal`, R, [0, 0, 0], 20);
      (e.box(t * 0.82, 0.5, 0.55, 0, r + n * 0.26, -1, `metal`, i.metal),
        e.box(t * 0.86, 0.3, 0.4, 0, r + n * 0.78, -0.8, `metal`, i.metal));
      for (let i = -t * 0.44; i <= t * 0.45; i += t / 7)
        (e.beam([i, r - 0.13, -0.4], [i, r + n + 0.1, -0.4], 0.13),
          e.beam([0, r + n * 0.1, -1.3], [i, r + n * 0.74, -0.7], 0.11));
      (q(e, 5, { top: !0, reach: 2.25 }),
        e.box(0.52, 0.75, 0.25, 0.7, 1.6, -1.5, `metal`, R),
        e.line(
          [
            [0.7, 1.6, -1.5],
            [0.65, r + 1, -1.5],
            [0, r + n * 0.28, -0.7],
          ],
          0.035,
          `metal`,
          R,
        ));
    },
    highway(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec;
      for (let a of [-t * 0.3, t * 0.3]) {
        U(e, a, r + n * 0.84, -1.2, 0.48);
        for (let t of [-1.5, -0.9])
          e.box(
            0.82,
            r + n * 0.82,
            0.09,
            a,
            (r + n * 0.82) / 2,
            t,
            `metal`,
            i.metal,
          );
      }
      for (let a of [-0.5, -1.5])
        W(e, -t / 2, t / 2, r + 0.25, r + n - 0.25, a, 10, i.metal);
      for (let i = -t / 2; i < t / 2; i += t / 8)
        for (let a of [r + 0.3, r + n - 0.3])
          e.beam([i, a, -0.5], [i + t / 8, a, -1.5], 0.1);
      q(e, 6, { top: !1, reach: 2.3 });
    },
    trestle(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec;
      G(e, 5, 4.4);
      for (let a = r + 0.3; a < r + n; a += 0.72)
        e.box(t + 0.25, 0.1, 0.16, 0, a, -0.38, `metal`, i.metal);
      for (let i = -t / 2 + 0.45; i < t / 2; i += 1.1)
        e.box(0.1, n + 0.35, 0.15, i, r + n / 2, -0.36, `metal`, L);
      q(e, 5, { goose: !0, reach: 0.95 });
    },
    awning(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      K(e, 1.6);
      for (let n = 0; n < 12; n++)
        e.box(
          t / 12 + 0.003,
          0.075,
          1.9,
          -t / 2 + t / 24 + (n * t) / 12,
          a + 0.34,
          -0.8,
          `canvas`,
          n % 2 ? i.bg : i.ink,
          [0.31, 0, 0],
        );
      for (let n of [-t * 0.47, 0, t * 0.47])
        (e.beam([n, r, -1.6], [n, a - 0.04, 0.08], 0.07),
          e.beam([n, a + 0.61, -1.65], [n, a + 0.02, 0.07], 0.06));
      for (let n = -t / 2 + 0.16; n < t / 2; n += 0.32)
        e.cyl(
          0.16,
          0.16,
          0.04,
          n,
          r + 0.03,
          -0.05,
          `canvas`,
          i.bg,
          [Math.PI / 2, 0, 0],
          12,
        );
      for (let n of [-t * 0.35, 0, t * 0.35]) e.ball(0.055, n, a - 0.13, -0.65);
    },
    banner(e) {
      let { width: t, height: n, elevation: r } = e.spec,
        i = r + n;
      for (let n of [-t / 2 - 0.3, t / 2 + 0.3])
        (U(e, n, i + 0.3, -0.1, 0.12, `wood`, `#8d6946`),
          e.box(0.14, 0.11, 1.65, n, 0.12, -0.1, `wood`, B),
          e.beam([n, 0.19, -0.85], [n, 0.85, -0.1], 0.07, `wood`, B),
          e.line(
            [
              [n, i + 0.12, -0.1],
              [n + Math.sign(n) * 0.55, 0.05, -1.9],
            ],
            0.018,
            `metal`,
            `#aa9b7b`,
          ),
          e.beam(
            [n + Math.sign(n) * 0.55, 0.02, -1.9],
            [n + Math.sign(n) * 0.55, 0.25, -1.9],
            0.03,
            `metal`,
            R,
          ));
      for (let n = -t / 2 + 0.12; n < t / 2; n += 0.38)
        for (let t of [r + 0.055, i - 0.055])
          e.arc(n, t, 0.105, 0.028, 0.028, 0, Math.PI * 2, 0.009, `metal`, V);
      for (let a of [-t / 2, t / 2])
        for (let t of [r + 0.1, r + n / 2, i - 0.1])
          e.line(
            [
              [a, t, 0.1],
              [a + Math.sign(a) * 0.3, t + 0.05, -0.1],
              [a, t + 0.07, 0.1],
            ],
            0.018,
            `metal`,
            `#c3b8a4`,
          );
      q(e, 2, { top: !0, reach: 0.55 });
    },
    timberGate(e) {
      let { width: t, height: n, elevation: r } = e.spec,
        i = r + n;
      (de(e, 0.59, `wood`, 0.28),
        e.box(t + 1.1, 0.32, 0.45, 0, i + 0.28, -0.28, `wood`, B));
      for (let n of [-1, 1])
        e.beam(
          [n * t * 0.59, i - 1, -0.3],
          [n * t * 0.34, i + 0.25, -0.3],
          0.19,
          `wood`,
          `#916d46`,
        );
      pe(e, 0, i + 0.36, t + 1.35, 1.5, 0.5, `wood`, `#5c4b39`);
      for (let n of [-t * 0.59, t * 0.59])
        for (let t of [r + 0.25, i + 0.25])
          e.cyl(
            0.055,
            0.055,
            0.025,
            n,
            t,
            -0.06,
            `metal`,
            R,
            [Math.PI / 2, 0, 0],
            6,
          );
      q(e, 2, { goose: !0, reach: 1.02 });
    },
    farm(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec;
      de(e, 0.42, `wood`, 0.15);
      for (let n of [-t * 0.42, t * 0.42])
        (e.box(0.18, 0.14, 1.25, n, 0.13, -0.3, `wood`, B),
          e.beam([n, 0.15, -0.85], [n, r + 0.1, -0.3], 0.09, `wood`, B));
      for (let i = r + 0.13; i < r + n; i += 0.24)
        e.box(
          t + 0.13,
          0.2,
          0.075,
          0,
          i,
          -0.16,
          `wood`,
          i % 0.5 < 0.25 ? `#7f6040` : `#9b7950`,
        );
      for (let i of [-1, 1])
        e.box(
          0.12,
          n + 0.4,
          0.3,
          i * (t / 2 + 0.09),
          r + n / 2,
          -0.035,
          `wood`,
          B,
        );
      (J(
        e,
        [-t / 2 - 0.17, r + n + 0.45, 0.05],
        [t / 2 + 0.17, r + n + 0.45, 0.05],
        0.28,
        0.22,
      ),
        e.box(t + 0.5, 0.13, 0.45, 0, r + n + 0.29, -0.03, `paint`, i.metal));
    },
    theatre(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      (K(e, 2.2),
        e.box(t + 0.8, 0.38, 2.5, 0, r - 0.26, -0.85, `paint`, i.metal));
      for (let n = 0; n < 3; n++)
        e.box(
          t + 0.85 - n * 0.25,
          0.08,
          2.55 - n * 0.2,
          0,
          r - 0.48 - n * 0.12,
          -0.85,
          `metal`,
          i.secondary,
        );
      e.poly(
        [
          [-t / 2 - 0.35, a],
          [-t * 0.4, a + 0.35],
          [-t * 0.23, a + 0.35],
          [-t * 0.23, a + 0.67],
          [0, a + 1.1],
          [t * 0.23, a + 0.67],
          [t * 0.23, a + 0.35],
          [t * 0.4, a + 0.35],
          [t / 2 + 0.35, a],
        ],
        0.24,
        -0.05,
        `metal`,
        i.secondary,
      );
      for (let t = -4; t <= 4; t++)
        e.beam(
          [t * 0.42, a + 0.08, 0.105],
          [t * 0.26, a + 0.74 - Math.abs(t) * 0.07, 0.105],
          0.035,
          `metal`,
          R,
        );
      for (let n of [r - 0.31, r - 0.49])
        J(e, [-t / 2 - 0.25, n, 0.45], [t / 2 + 0.25, n, 0.45], 0.19);
      for (let n of [-t / 2 - 0.17, t / 2 + 0.17])
        J(e, [n, r + 0.1, 0.21], [n, a - 0.1, 0.21], 0.2);
    },
    fair(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      for (let n of [-t * 0.55, t * 0.55]) {
        for (let t of [-0.3, -1.1]) U(e, n, a + 0.5, t, 0.1);
        for (let t = 0.2; t < a; t += 0.8)
          (e.beam([n, t, -0.3], [n, t + 0.75, -1.1], 0.045),
            e.beam([n, t, -1.1], [n, t + 0.75, -0.3], 0.045));
        for (let t of [-2, 0.2])
          (H(e, n + Math.sign(n) * 0.65, t, 0.45, 0.5),
            e.beam(
              [n + Math.sign(n) * 0.65, 0.1, t],
              [n, r * 0.7, -0.5],
              0.09,
            ));
      }
      W(e, -t * 0.57, t * 0.57, a + 0.17, a + 0.63, -0.6, 10);
      let o = [
        [-t * 0.57, a + 0.68, -0.2],
        [0, a + 1.65, -0.2],
        [t * 0.57, a + 0.68, -0.2],
      ];
      e.line(o, 0.1, `metal`, i.metal);
      for (let n = 0; n < 15; n++) {
        let r = -t * 0.5 + (t * n) / 14,
          o = a + 1.1 + Math.abs(r) * 0.08;
        e.poly(
          [
            [r - 0.16, o],
            [r + 0.16, o],
            [r, o - 0.36],
          ],
          0.025,
          -0.03,
          `canvas`,
          n % 2 ? i.accent : i.secondary,
        );
      }
      J(e, [-t / 2, a + 1.17, 0.08], [t / 2, a + 1.17, 0.08], 0.42, 0.26);
    },
    kiosk(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec;
      e.box(t + 0.35, 0.22, 0.95, 0, 0.15, -0.08, `concrete`, z);
      for (let i of [-1, 1])
        e.cyl(
          0.1,
          0.1,
          r + n + 0.18,
          i * (t / 2 + 0.12),
          (r + n + 0.18) / 2,
          -0.08,
          `metal`,
          V,
        );
      (e.box(t + 0.44, 0.14, 0.72, 0, r + n + 0.16, -0.16, `metal`, i.metal),
        e.box(t - 0.14, n - 0.2, 0.04, 0, r + n / 2, -0.2, `metal`, i.metal));
      for (let n = r + 0.15; n < r + 0.7; n += 0.075)
        e.box(t * 0.7, 0.025, 0.028, 0, n, -0.235, `metal`, R);
      e.box(0.075, 0.14, 0.06, t * 0.33, r + n * 0.5, -0.24, `metal`, V);
    },
    totem(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec;
      (e.box(1.7, 0.34, 1.05, 0, 0.2, -0.05, `concrete`, z),
        e.poly(
          [
            [-t * 0.65, 0.3],
            [t * 0.65, 0.3],
            [t * 0.65, r + n + 0.38],
            [-t * 0.65, r + n + 0.6],
          ],
          0.46,
          -0.22,
          `metal`,
          i.metal,
        ));
      for (let n = 0; n < 4; n++)
        e.box(
          t + 0.5,
          0.055,
          0.38,
          0,
          r + 0.45 + n * 0.81,
          -0.11,
          `metal`,
          i.secondary,
        );
      e.box(t + 0.42, 0.18, 0.5, 0, r + n + 0.32, -0.1, `paint`, i.accent);
      for (let i of [-1, 1])
        e.box(
          0.025,
          n + 0.75,
          0.02,
          i * (t / 2 + 0.18),
          r + n / 2,
          0.025,
          `lamp`,
          `#ecedce`,
        );
    },
    station(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      for (let n of [-t * 0.6, t * 0.6]) U(e, n, a + 1.25, -1.2, 0.12);
      e.box(t + 1.35, 0.16, 0.2, 0, a + 1.24, -1.2, `metal`, i.metal);
      for (let n of [-t * 0.34, t * 0.34])
        (e.beam([n, a + 1.2, -1.2], [n, a + 1.2, -0.05], 0.07),
          e.beam([n, a + 1.2, -0.05], [n, a + 0.04, -0.05], 0.07, `metal`, V));
      for (let i of [-1, 1]) {
        e.box(
          0.17,
          n + 0.16,
          0.33,
          i * (t / 2 + 0.13),
          r + n / 2,
          -0.01,
          `metal`,
          V,
        );
        for (let n = r + 0.1; n < a; n += 0.11)
          e.box(0.012, 0.035, 0.18, i * (t / 2 + 0.221), n, -0.01, `metal`, R);
      }
    },
  }),
  Object.assign(Y, {
    nautical(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      (U(e, 0, a + 1.35, -0.6, 0.26, `wood`, B),
        e.cyl(
          0.16,
          0.21,
          t + 1.5,
          0,
          a + 0.48,
          -0.3,
          `wood`,
          `#90724c`,
          [0, 0, Math.PI / 2],
          12,
        ));
      for (let n of [-t * 0.43, t * 0.43])
        (e.arc(
          n,
          a + 0.47,
          -0.13,
          0.12,
          0.12,
          0,
          Math.PI * 2,
          0.055,
          `metal`,
          R,
        ),
          e.line(
            [
              [0, a + 1.22, -0.58],
              [n * 1.38, a + 0.5, -0.3],
              [n, a + 0.03, -0.04],
            ],
            0.023,
            `wood`,
            `#c1ac80`,
          ),
          e.line(
            [
              [n, r + 0.05, -0.18],
              [0, 0.65, -0.59],
            ],
            0.023,
            `wood`,
            `#c1ac80`,
          ),
          e.box(0.26, 0.17, 0.08, n, r + 0.05, -0.09, `metal`, R));
      (e.cyl(0.29, 0.29, 0.24, 0, 0.45, -0.6, `metal`, i.metal),
        q(e, 2, { goose: !0, reach: 0.92 }));
    },
    logs(e) {
      let { width: t, height: n, elevation: r } = e.spec,
        i = r + n;
      for (let n of [-t * 0.58, t * 0.58]) {
        (e.cyl(
          0.18,
          0.23,
          i + 0.53,
          n,
          (i + 0.53) / 2,
          -0.4,
          `wood`,
          `#826240`,
          [0, 0, 0],
          12,
        ),
          e.cyl(
            0.2,
            0.2,
            0.025,
            n,
            i + 0.548,
            -0.4,
            `wood`,
            `#b99259`,
            [0, 0, 0],
            12,
          ));
        for (let t = 0.6; t < i; t += 0.6)
          e.arc(n, t, -0.17, 0.15, 0.035, 0, Math.PI, 0.01, `wood`, `#58422c`);
        e.beam(
          [n, i - 0.85, -0.38],
          [n * 0.55, i + 0.2, -0.38],
          0.14,
          `wood`,
          B,
          !0,
        );
      }
      (e.cyl(
        0.15,
        0.15,
        t + 1.4,
        0,
        i + 0.28,
        -0.34,
        `wood`,
        B,
        [0, 0, Math.PI / 2],
        12,
      ),
        pe(e, 0, i + 0.37, t + 1.5, 1.55, 0.75, `wood`, `#554836`));
      for (let n = -t * 0.66; n < t * 0.66; n += 0.28)
        e.box(
          0.03,
          0.08,
          1.54,
          n,
          i + 0.5 + (1 - Math.abs(n) / (t * 0.66)) * 0.6,
          -0.1,
          `wood`,
          `#7f6a49`,
        );
      q(e, 2, { goose: !0, reach: 1 });
    },
    industrial(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      for (let n of [-t * 0.45, t * 0.45]) {
        U(e, n, a + 0.28, -0.7, 0.32);
        for (let t of [-0.94, -0.46])
          e.box(0.55, a + 0.2, 0.07, n, (a + 0.2) / 2, t, `metal`, i.metal);
      }
      W(e, -t / 2 - 0.35, t / 2 + 0.35, a + 0.1, a + 0.72, -0.6, 7, i.metal);
      for (let n = 0; n < 5; n++) {
        let r = -t / 2 + (n * t) / 5;
        e.poly(
          [
            [r, a + 0.72],
            [r + t / 5, a + 0.72],
            [r + t / 5, a + 1.2],
          ],
          0.2,
          -0.5,
          `metal`,
          i.secondary,
        );
      }
      (W(e, -t * 0.42, t * 0.42, 0.5, r * 0.75, -0.72, 4, R),
        q(e, 3, { top: !0, reach: 1.2 }));
      for (let n of [-t * 0.4, 0, t * 0.4])
        e.line(
          [
            [n - 0.25, a + 0.45, 1.36],
            [n - 0.25, a + 0.82, 1.36],
            [n + 0.25, a + 0.82, 1.36],
            [n + 0.25, a + 0.45, 1.36],
          ],
          0.028,
          `metal`,
          R,
        );
    },
    spectacles(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      U(e, 0, r + 0.2, -0.3, 0.15, `metal`, V);
      for (let n of [-1, 1])
        (e.beam(
          [0, r * 0.57, -0.3],
          [n * t * 0.38, r + 0.1, -0.25],
          0.09,
          `metal`,
          V,
        ),
          e.arc(
            n * 0.76,
            a + 0.6,
            -0.07,
            0.68,
            0.46,
            0,
            Math.PI * 2,
            0.085,
            `metal`,
            i.secondary,
          ),
          e.arc(
            n * 0.76,
            a + 0.6,
            -0.015,
            0.6,
            0.39,
            0,
            Math.PI * 2,
            0.025,
            `lamp`,
            `#fff0d4`,
          ),
          e.beam(
            [n * 1.45, a + 0.7, -0.07],
            [n * 1.8, a + 0.9, -0.7],
            0.06,
            `metal`,
            i.metal,
          ));
      (e.arc(
        0,
        a + 0.51,
        -0.07,
        0.17,
        0.14,
        0,
        Math.PI,
        0.07,
        `metal`,
        i.secondary,
      ),
        e.box(t + 0.25, 0.12, 0.45, 0, r - 0.17, -0.05, `metal`, V));
    },
    sandwich(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      for (let n of [-t / 2 - 0.08, t / 2 + 0.08])
        (e.beam([n, 0.04, 0.18], [n, a + 0.08, -0.12], 0.095, `wood`, B),
          e.beam([n, 0.04, -0.96], [n, a + 0.08, -0.12], 0.095, `wood`, B),
          e.cyl(0.065, 0.065, 0.15, n, a + 0.055, -0.12, `metal`, R, [
            0,
            0,
            Math.PI / 2,
          ]),
          e.line(
            [
              [n, 0.72, 0.065],
              [n, 0.6, -0.39],
              [n, 0.72, -0.59],
            ],
            0.015,
            `metal`,
            V,
          ));
      (e.box(t + 0.2, 0.11, 0.17, 0, a + 0.04, -0.12, `wood`, B),
        e.box(t, 0.11, 0.12, 0, 0.18, -0.88, `wood`, B),
        e.box(
          t - 0.05,
          n * 0.86,
          0.055,
          0,
          r + n * 0.48,
          -0.57,
          `paint`,
          i.metal,
          [-0.4, 0, 0],
        ));
      for (let n of [-t / 2 - 0.055, t / 2 + 0.055])
        J(e, [n, r + 0.1, 0.13], [n, a - 0.1, 0.13], 0.23);
    },
    prism(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      (H(e, 0, -0.52, 1.1, 1.1),
        e.cyl(0.16, 0.29, r, 0, r / 2, -0.52, `metal`, i.metal, [0, 0, 0], 12));
      for (let t = 0; t < 12; t++) {
        let n = (t * Math.PI) / 6;
        e.beam(
          [Math.cos(n) * 0.25, 0.3, -0.52 + Math.sin(n) * 0.25],
          [Math.cos(n) * 0.16, r - 0.1, -0.52 + Math.sin(n) * 0.16],
          0.025,
          `metal`,
          i.secondary,
        );
      }
      e.box(t + 0.14, n + 0.14, 1.22, 0, r + n / 2, -0.61, `paint`, i.metal);
      for (let o of [-t / 2, t / 2]) {
        e.box(0.035, n - 0.12, 1.02, o, r + n / 2, -0.61, `lamp`, `#ecdbab`);
        for (let t = r + 0.22; t < a; t += 0.42)
          e.box(0.045, 0.035, 1.06, o, t, -0.61, `metal`, i.metal);
      }
      (e.box(t + 0.48, 0.17, 1.62, 0, a + 0.18, -0.58, `metal`, i.secondary),
        e.box(t + 0.3, 0.13, 1.46, 0, r - 0.15, -0.58, `metal`, i.secondary),
        e.cyl(
          0.28,
          0.6,
          0.52,
          0,
          a + 0.54,
          -0.58,
          `metal`,
          i.metal,
          [0, 0, 0],
          4,
        ));
      for (let t = 0; t < 4; t++)
        e.box(0.8, 0.027, 0.03, 0, a + 0.29 + t * 0.095, 0.06, `metal`, R);
    },
    vboard(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = t * 1.99;
      (H(e, 0, -1.75, 3.1, 3.1),
        e.cyl(
          0.85,
          1.04,
          r + n * 0.72,
          0,
          (r + n * 0.72) / 2,
          -1.75,
          `metal`,
          i.metal,
          [0, 0, 0],
          20,
        ),
        e.solid([0, (r + n * 0.7) / 2, -1.75], [2.08, r + n * 0.7, 2.08]),
        e.box(a * 0.8, 0.65, 0.75, 0, r + n * 0.3, -1.4, `metal`, i.metal));
      for (let t of [-1, -2.5])
        W(e, -a * 0.47, a * 0.47, r + 0.4, r + n * 0.8, t, 14, i.metal);
      for (let t of [-a * 0.43, -a * 0.22, a * 0.22, a * 0.43])
        e.beam([0, r + 0.2, -1.75], [t, r + n * 0.75, -1.3], 0.17);
      for (let n of [-1, 1])
        e.withFrame([n * (t / 2 + 0.03), 0, -0.48], [0, n * 0.075, 0], () =>
          q(e, 4, { top: !0, reach: 1.6 }),
        );
    },
    tower(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      for (let t of [-1.8, 1.8])
        for (let n of [-0.6, -3.1])
          (H(e, t, n, 0.9, 1),
            e.beam(
              [t, 0.1, n],
              [t * 0.75, a, n * 0.72],
              0.2,
              `metal`,
              i.metal,
            ));
      for (let t = 0.35; t < a; t += 1.55) {
        let n = 1 - (t / a) * 0.25,
          r = 1.8 * n;
        for (let o of [-0.6, -3.1])
          W(e, -r, r, t, Math.min(a, t + 1.5), o * n, 1, i.metal);
        for (let i of [-r, r])
          (e.beam([i, t, -0.6 * n], [i, Math.min(a, t + 1.5), -3.1 * n], 0.1),
            e.beam([i, t, -3.1 * n], [i, Math.min(a, t + 1.5), -0.6 * n], 0.1));
      }
      (e.box(t + 0.15, 0.25, 0.4, 0, r + n * 0.52, -0.4, `metal`, i.metal),
        q(e, 4, { top: !1, reach: 2.2 }));
      for (let n of [-t * 0.4, -t * 0.13, t * 0.13, t * 0.4])
        e.line(
          [
            [n - 0.28, r - 0.72, 2.4],
            [n - 0.28, r - 0.24, 2.4],
            [n + 0.28, r - 0.24, 2.4],
            [n + 0.28, r - 0.72, 2.4],
          ],
          0.035,
          `metal`,
          i.secondary,
          !0,
        );
    },
    wagon(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec;
      e.box(t + 0.5, 0.18, 1.5, 0, 0.68, -0.36, `wood`, B);
      for (let n = -t / 2; n < t / 2; n += 0.25)
        e.box(0.21, 0.025, 1.46, n, 0.785, -0.36, `wood`, `#b18a55`);
      for (let a of [-t * 0.31, t * 0.31]) {
        e.beam([a, 0.45, -1.26], [a, 0.45, 0.53], 0.11, `metal`, R);
        for (let t of [-1.18, 0.46]) {
          (e.arc(a, 0.43, t, 0.42, 0.42, 0, Math.PI * 2, 0.11, `metal`, R),
            e.arc(
              a,
              0.43,
              t + 0.015,
              0.33,
              0.33,
              0,
              Math.PI * 2,
              0.055,
              `metal`,
              i.secondary,
            ));
          for (let n = 0; n < 10; n++) {
            let r = (n * Math.PI) / 5;
            e.beam(
              [a, 0.43, t],
              [a + Math.cos(r) * 0.32, 0.43 + Math.sin(r) * 0.32, t],
              0.034,
              `wood`,
              B,
            );
          }
          e.cyl(0.11, 0.11, 0.13, a, 0.43, t, `metal`, R, [Math.PI / 2, 0, 0]);
        }
        e.beam([a, 0.76, -0.4], [a, r + n + 0.2, -0.4], 0.11, `wood`, B);
      }
      (e.line(
        [
          [-t / 2, 0.65, -0.8],
          [-t / 2 - 1.2, 0.44, -0.35],
          [-t / 2, 0.65, 0.1],
        ],
        0.09,
        `metal`,
        R,
      ),
        e.cyl(
          0.09,
          0.09,
          0.1,
          -t / 2 - 1.25,
          0.44,
          -0.35,
          `metal`,
          V,
          [0, 0, 0],
        ));
      for (let n of [-t / 2, t / 2])
        (e.beam([n, 0.15, -0.96], [n, 0.72, -0.96], 0.055),
          e.box(0.24, 0.055, 0.3, n, 0.12, -0.96, `metal`, R));
      J(
        e,
        [-t / 2 - 0.13, r + n + 0.56, 0.03],
        [t / 2 + 0.13, r + n + 0.56, 0.03],
        0.28,
        0.23,
      );
    },
    concrete(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec;
      (e.box(t + 1.9, 0.28, 1.7, 0, 0.18, -0.22, `concrete`, z),
        e.box(
          t + 0.55,
          r + n - 0.14,
          0.65,
          0,
          (r + n) / 2,
          -0.4,
          `concrete`,
          `#888b85`,
        ));
      for (let i of [-1, 1])
        e.poly(
          [
            [i * (t / 2 + 0.1), 0.3],
            [i * (t / 2 + 0.86), 0.3],
            [i * (t / 2 + 0.37), r + n + 0.22],
            [i * (t / 2 + 0.12), r + n + 0.22],
          ],
          1.05,
          -0.27,
          `concrete`,
          `#aeaaa0`,
        );
      e.box(t + 0.85, 0.14, 0.91, 0, r + n + 0.15, -0.2, `metal`, i.metal);
      for (let i of [-t * 0.32, t * 0.32])
        (e.box(0.45, 0.12, 0.45, i, 0.36, 2.38, `metal`, R),
          e.beam([i, 0.38, 2.38], [i, 0.7, 2.38], 0.065),
          e.box(0.39, 0.25, 0.3, i, 0.8, 2.39, `metal`, R, [0.45, 0, 0]),
          e.box(
            0.3,
            0.03,
            0.22,
            i,
            0.91,
            2.44,
            `lamp`,
            `#fff0c4`,
            [0.45, 0, 0],
          ),
          e.fixtures.push({
            position: [i, 0.98, 2.36],
            target: [i, r + n / 2, 0.15],
            color: `#ffe6bb`,
          }));
    },
    sail(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      (e.poly(
        [
          [-1.4, 0.1],
          [1.4, 0.1],
          [0.6, 0.55],
          [-0.65, 0.65],
        ],
        1.15,
        -0.25,
        `metal`,
        i.metal,
      ),
        e.poly(
          [
            [-t / 2 - 0.34, 0.5],
            [-t / 2 + 0.1, 0.5],
            [-t / 2 + 0.25, r],
            [-t / 2 - 0.05, a + 0.65],
            [-t / 2 - 0.42, a + 0.45],
          ],
          0.47,
          -0.32,
          `metal`,
          i.metal,
        ));
      for (let a = 0; a < 3; a++) {
        let o = [];
        for (let e = 0; e <= 22; e++) {
          let i = e / 22;
          o.push([
            t / 2 + 0.15 + Math.sin(i * Math.PI) * (0.58 + a * 0.13),
            r - 0.2 + i * (n + 0.6),
            -0.13 - a * 0.12,
          ]);
        }
        e.line(o, 0.075, `metal`, a === 1 ? i.secondary : i.metal);
      }
      e.poly(
        [
          [-t / 2 - 0.06, a + 0.12],
          [-t / 2 - 0.06, a + 0.65],
          [t / 2 + 0.18, a + 0.3],
          [t / 2 + 0.1, a + 0.12],
        ],
        0.23,
        -0.09,
        `paint`,
        i.accent,
      );
      for (let n = r + 0.35; n < a; n += 0.6)
        e.box(t + 0.2, 0.035, 0.075, 0, n, -0.25, `metal`, L);
    },
    bakery(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      K(e, 1.35);
      for (let i of [-1, 1])
        (e.box(
          0.15,
          n + 0.45,
          0.28,
          i * (t / 2 + 0.1),
          r + n / 2,
          -0.04,
          `wood`,
          B,
        ),
          e.arc(
            i * (t / 2 - 0.25),
            r - 0.18,
            -0.5,
            0.2,
            0.42,
            0,
            Math.PI * 1.5,
            0.065,
            `metal`,
            R,
          ));
      (pe(e, 0, a + 0.16, t + 0.6, 1.6, 0.42, `metal`, `#9c7151`),
        e.cyl(
          0.47,
          0.47,
          0.15,
          0,
          a + 0.48,
          0.02,
          `wood`,
          `#9c774a`,
          [Math.PI / 2, 0, 0],
          32,
        ),
        e.arc(
          0,
          a + 0.48,
          0.11,
          0.4,
          0.4,
          0,
          Math.PI * 2,
          0.035,
          `metal`,
          i.secondary,
        ));
      for (let n of [-t * 0.34, t * 0.34])
        (e.line(
          [
            [n, a + 0.15, -0.4],
            [n, a + 0.4, -0.1],
            [n, a + 0.32, 0.45],
          ],
          0.045,
          `metal`,
          R,
        ),
          e.cyl(0.045, 0.17, 0.1, n, a + 0.25, 0.45, `metal`, `#9c7151`),
          e.ball(0.055, n, a + 0.165, 0.45));
    },
    scaffold(e) {
      let { width: t, height: n, elevation: r, palette: i } = e.spec,
        a = r + n;
      for (let n of [-t / 2 - 0.24, t / 2 + 0.24])
        for (let t of [-0.35, -1.65]) {
          (H(e, n, t, 0.5, 0.5),
            e.beam([n, 0.15, t], [n, a + 0.62, t], 0.085, `metal`, V, !0));
          for (let r = 0.5; r < a + 0.5; r += 1.15)
            e.cyl(0.074, 0.074, 0.12, n, r, t, `metal`, R);
          for (let r = 0.18; r < 0.47; r += 0.07)
            e.cyl(0.055, 0.055, 0.026, n, r, t, `metal`, V);
        }
      for (let n = 0.5; n < a + 0.5; n += 1.15) {
        for (let r of [-0.35, -1.65])
          e.beam(
            [-t / 2 - 0.24, n, r],
            [t / 2 + 0.24, n, r],
            0.065,
            `metal`,
            L,
            !0,
          );
        for (let r of [-t / 2 - 0.24, t / 2 + 0.24])
          e.beam([r, n, -0.35], [r, n, -1.65], 0.065, `metal`, L, !0);
      }
      (e.beam(
        [-t / 2 - 0.24, 0.5, -1.65],
        [t / 2 + 0.24, a + 0.1, -1.65],
        0.058,
        `metal`,
        i.metal,
        !0,
      ),
        e.beam(
          [t / 2 + 0.24, 0.5, -1.65],
          [-t / 2 - 0.24, a + 0.1, -1.65],
          0.058,
          `metal`,
          i.metal,
          !0,
        ),
        q(e, 3, { top: !0, reach: 0.9 }));
    },
  }));
function ge(e) {
  let t = Y[e.construction];
  if (!t)
    throw Error(`Sign structure recipe not yet authored: ${e.construction}`);
  let n = new se(e);
  if (e.construction === `vboard`)
    for (let t of [-1, 1])
      me(n, {
        position: [t * (e.width / 2 + 0.03), 0, -0.48],
        rotation: [0, t * 0.075, 0],
      });
  else me(n);
  return (
    t(n),
    e.lighting === `flood` &&
      !n.fixtures.length &&
      q(n, Math.max(1, Math.ceil(e.width / 3.5)), { goose: e.width < 6 }),
    e.lighting === `bulb` &&
      J(
        n,
        [-e.width / 2, e.elevation + e.height + 0.13, 0.28],
        [e.width / 2, e.elevation + e.height + 0.13, 0.28],
        0.24,
      ),
    e.construction === `vboard`
      ? ((n.spec = { ...e, width: e.width * 2 + 0.2 }), he(n), (n.spec = e))
      : he(n),
    n.finish()
  );
}
function _e(e, t) {
  let n = { ...e };
  for (let e of [
    `width`,
    `height`,
    `elevation`,
    `serviceAccess`,
    `brand`,
    `icon`,
  ])
    t[e] != null && (n[e] = t[e]);
  return n;
}
function ve(e, n) {
  e = _e(e, n);
  let r = n.panelScale ?? 1,
    i = ge({ ...e, width: e.width * r, height: e.height * r });
  if (!n.roofStand) return i;
  let a = new f({ color: 3752778, roughness: 0.8 });
  a.userData.pen = `metal`;
  let o = (e, n, r) => {
    let o = new w(...e),
      s = new w(...n),
      c = s.clone().sub(o),
      l = new u(new t(r, c.length(), r), a);
    (l.position.copy(o.add(s).multiplyScalar(0.5)),
      l.quaternion.setFromUnitVectors(new w(0, 1, 0), c.normalize()),
      (l.castShadow = !0),
      i.add(l),
      ue(i, l));
  };
  for (let e of [-2, 2])
    (o([e, 0, -0.5], [e, 3.1, -0.5], 0.15, !0),
      o([e, 0, -1.6], [e, 2.9, -0.5], 0.1));
  return (
    o([-2, 0.5, -0.5], [2, 2.9, -0.5], 0.08),
    o([2, 0.5, -0.5], [-2, 2.9, -0.5], 0.08),
    le(i),
    i
  );
}
var ye = Math.PI * 2,
  be = [
    {
      family: `"Arial Black", Arial, sans-serif`,
      weight: 900,
      style: `normal`,
    },
    {
      family: `Georgia, "Times New Roman", serif`,
      weight: 700,
      style: `normal`,
    },
    {
      family: `Impact, "Arial Narrow", Arial, sans-serif`,
      weight: 400,
      style: `normal`,
    },
    {
      family: `"Trebuchet MS", Arial, sans-serif`,
      weight: 800,
      style: `normal`,
    },
    {
      family: `Georgia, "Times New Roman", serif`,
      weight: 700,
      style: `italic`,
    },
    { family: `"Courier New", monospace`, weight: 700, style: `normal` },
  ],
  xe = [
    `A BETTER TOMORROW. TERMS APPLY.`,
    `PROUDLY LOWERING EXPECTATIONS.`,
    `YOUR ATTENTION IS OUR BUSINESS.`,
    `EST. SINCE LAST QUARTER.`,
    `LOCALLY OWNED. GLOBALLY CONCERNED.`,
    `THE FUTURE IS SUBJECT TO AVAILABILITY.`,
  ],
  Se = {
    bg: `#122128`,
    ink: `#fff2d6`,
    accent: `#ff7849`,
    secondary: `#77dfce`,
    metal: `#36464a`,
  };
function Ce(e) {
  let t = 2166136261;
  for (let n of String(e)) t = Math.imul(t ^ n.codePointAt(0), 16777619);
  return t >>> 0;
}
function we(e, t) {
  return `${t.style || `normal`} ${t.weight || 800} ${e}px ${t.family || be[0].family}`;
}
function X(e, t) {
  let n = e.measureText(t);
  return (
    Math.max(n.width, n.actualBoundingBoxRight || 0) -
    Math.min(0, -(n.actualBoundingBoxLeft || 0))
  );
}
function Te(e, t, n) {
  let r = [];
  for (let i of t.split(`
`)) {
    let t = i.trim().split(/\s+/u).filter(Boolean);
    if (!t.length) {
      r.push(``);
      continue;
    }
    let a = ``;
    for (let i of t) {
      let t = a ? `${a} ${i}` : i;
      if (X(e, t) <= n) {
        a = t;
        continue;
      }
      if (((a &&= (r.push(a), ``)), X(e, i) <= n)) {
        a = i;
        continue;
      }
      for (let t of Array.from(i))
        (a && X(e, a + t) > n && (r.push(a), (a = ``)), (a += t));
    }
    a && r.push(a);
  }
  return r;
}
function Ee(e, t, n, r = {}) {
  (e.save(), (e.textAlign = `left`), (e.textBaseline = `alphabetic`));
  let i = String(t ?? ``).replace(
      /\r\n?/g,
      `
`,
    ),
    a = r.font || r,
    o = Math.max(0, r.padding ?? 0),
    s = {
      x: Number(n.x) || 0,
      y: Number(n.y) || 0,
      width: Math.max(0.01, n.width - o * 2),
      height: Math.max(0.01, n.height - o * 2),
    };
  ((s.x += o), (s.y += o));
  let c = Math.max(0.1, r.maxFontSize || s.height * 0.72),
    l = (t) => {
      e.font = we(t, a);
      let n = Te(e, i, s.width),
        o = n.map((t) => e.measureText(t || `Mg`)),
        c = Math.max(t * 0.72, ...o.map((e) => e.actualBoundingBoxAscent || 0)),
        l = Math.max(
          t * 0.18,
          ...o.map((e) => e.actualBoundingBoxDescent || 0),
        ),
        u = Math.max(t * (r.lineHeight || 1.13), c + l + t * 0.06),
        d = c + l + Math.max(0, n.length - 1) * u,
        f = Math.max(0, ...n.map((t) => X(e, t)));
      return {
        lines: n,
        metrics: o,
        ascent: c,
        descent: l,
        advance: u,
        height: d,
        width: f,
        fits: f <= s.width + 0.001 && d <= s.height + 0.001,
      };
    },
    u = Math.min(1, c),
    d = c;
  for (; !l(u).fits && u > 1e-4;) u /= 2;
  for (let e = 0; e < 17; e++) {
    let e = (u + d) / 2;
    l(e).fits ? (u = e) : (d = e);
  }
  let f = l(u),
    p = s.y + (s.height - f.height) / 2,
    m = r.align || `center`,
    h = m === `left` ? s.x : m === `right` ? s.x + s.width : s.x + s.width / 2,
    g = f.metrics.map((e, t) => {
      let n = Math.min(0, -(e.actualBoundingBoxLeft || 0)),
        r = Math.max(e.width, e.actualBoundingBoxRight || 0) - n;
      return {
        x:
          (m === `left`
            ? s.x
            : m === `right`
              ? s.x + s.width - r
              : s.x + (s.width - r) / 2) - n,
        y: p + f.ascent + t * f.advance,
      };
    });
  return (
    e.restore(),
    {
      text: i,
      lines: f.lines,
      fontSize: u,
      font: we(u, a),
      overflow: !f.fits,
      width: f.width,
      height: f.height,
      lineHeight: f.advance,
      box: { ...n },
      area: s,
      align: m,
      x: h,
      positions: g,
      baselines: g.map((e) => e.y),
    }
  );
}
function Z(e, t, n = !1) {
  (e.beginPath(),
    t.forEach(([t, n], r) => (r ? e.lineTo(t, n) : e.moveTo(t, n))),
    n && e.closePath());
}
function Q(e, t, n, r, i, a) {
  ((a = Math.min(a, r / 2, i / 2)),
    e.beginPath(),
    e.moveTo(t + a, n),
    e.lineTo(t + r - a, n),
    e.quadraticCurveTo(t + r, n, t + r, n + a),
    e.lineTo(t + r, n + i - a),
    e.quadraticCurveTo(t + r, n + i, t + r - a, n + i),
    e.lineTo(t + a, n + i),
    e.quadraticCurveTo(t, n + i, t, n + i - a),
    e.lineTo(t, n + a),
    e.quadraticCurveTo(t, n, t + a, n),
    e.closePath());
}
function $(e, t, n, r, i) {
  (e.beginPath(), e.ellipse(t, n, r, i, 0, 0, ye));
}
function De(e, t, n = !0) {
  switch (t) {
    case `burger`:
      if (
        (e.beginPath(),
        e.moveTo(-39, -7),
        e.bezierCurveTo(-37, -47, 37, -47, 39, -7),
        e.closePath(),
        e.stroke(),
        Q(e, -40, 11, 80, 15, 7),
        e.stroke(),
        Z(e, [
          [-40, 3],
          [-27, 8],
          [-12, 1],
          [3, 8],
          [20, 1],
          [40, 5],
        ]),
        e.stroke(),
        Z(e, [
          [-37, 33],
          [-29, 39],
          [29, 39],
          [37, 33],
        ]),
        e.stroke(),
        n)
      )
        for (let [t, n] of [
          [-17, -21],
          [1, -28],
          [20, -20],
        ])
          (Z(e, [
            [t, n],
            [t + 3, n - 3],
          ]),
            e.stroke());
      break;
    case `glass`:
      (Z(
        e,
        [
          [-33, -38],
          [33, -38],
          [23, 29],
          [-23, 29],
        ],
        !0,
      ),
        e.stroke(),
        Z(e, [
          [-28, -7],
          [-12, -10],
          [4, -6],
          [28, -10],
        ]),
        e.stroke(),
        Z(e, [
          [5, 10],
          [18, -48],
          [40, -48],
        ]),
        e.stroke(),
        Z(e, [
          [-24, 39],
          [24, 39],
        ]),
        e.stroke(),
        n && ($(e, -7, 8, 4, 4), e.stroke(), $(e, 11, 17, 3, 3), e.stroke()));
      break;
    case `cross`:
      (Z(
        e,
        [
          [-13, -42],
          [13, -42],
          [13, -13],
          [42, -13],
          [42, 13],
          [13, 13],
          [13, 42],
          [-13, 42],
          [-13, 13],
          [-42, 13],
          [-42, -13],
          [-13, -13],
        ],
        !0,
      ),
        e.stroke(),
        n &&
          (Z(e, [
            [-8, 0],
            [-3, 0],
            [1, -8],
            [6, 8],
            [10, 0],
          ]),
          e.stroke()));
      break;
    case `bank`:
      (Z(
        e,
        [
          [-43, -18],
          [0, -43],
          [43, -18],
        ],
        !0,
      ),
        e.stroke());
      for (let t of [-27, -9, 9, 27])
        (Z(e, [
          [t, -7],
          [t, 27],
        ]),
          e.stroke());
      (Z(e, [
        [-40, 34],
        [40, 34],
      ]),
        e.stroke(),
        Z(e, [
          [-47, 44],
          [47, 44],
        ]),
        e.stroke(),
        n && ($(e, 0, -24, 5, 5), e.stroke()));
      break;
    case `heart`:
      (e.beginPath(),
        e.moveTo(0, 39),
        e.bezierCurveTo(-69, -5, -38, -59, 0, -23),
        e.bezierCurveTo(38, -59, 69, -5, 0, 39),
        e.stroke(),
        n &&
          (Z(e, [
            [-22, 0],
            [-11, 0],
            [-5, -12],
            [4, 14],
            [12, 0],
            [25, 0],
          ]),
          e.stroke()));
      break;
    case `rocket`:
      (e.beginPath(),
        e.moveTo(0, -48),
        e.bezierCurveTo(23, -26, 23, 2, 15, 23),
        e.lineTo(-15, 23),
        e.bezierCurveTo(-23, 2, -23, -26, 0, -48),
        e.stroke(),
        Z(e, [
          [-18, -1],
          [-34, 28],
          [-17, 21],
        ]),
        e.stroke(),
        Z(e, [
          [18, -1],
          [34, 28],
          [17, 21],
        ]),
        e.stroke(),
        $(e, 0, -14, 8, 8),
        e.stroke(),
        Z(e, [
          [-8, 31],
          [0, 46],
          [8, 31],
        ]),
        e.stroke());
      break;
    case `eye`:
      if (
        (e.beginPath(),
        e.moveTo(-47, 0),
        e.quadraticCurveTo(0, -47, 47, 0),
        e.quadraticCurveTo(0, 47, -47, 0),
        e.stroke(),
        $(e, 0, 0, 18, 18),
        e.stroke(),
        $(e, 0, 0, 5, 5),
        e.stroke(),
        n)
      )
        for (let [t, n] of [
          [-29, -29],
          [0, -38],
          [29, -29],
        ])
          (Z(e, [
            [t, n],
            [t * 1.12, n - 9],
          ]),
            e.stroke());
      break;
    case `tree`:
      (Z(
        e,
        [
          [0, -47],
          [-27, -13],
          [-17, -13],
          [-39, 15],
          [-23, 15],
          [-45, 36],
          [45, 36],
          [23, 15],
          [39, 15],
          [17, -13],
          [27, -13],
        ],
        !0,
      ),
        e.stroke(),
        Z(e, [
          [0, 36],
          [0, 48],
        ]),
        e.stroke(),
        n &&
          (Z(e, [
            [0, -24],
            [0, 31],
            [17, 16],
          ]),
          e.stroke()));
      break;
    case `skull`:
      if (
        (e.beginPath(),
        e.moveTo(-20, 23),
        e.bezierCurveTo(-62, 7, -39, -47, 0, -43),
        e.bezierCurveTo(39, -47, 62, 7, 20, 23),
        e.lineTo(17, 42),
        e.lineTo(-17, 42),
        e.closePath(),
        e.stroke(),
        $(e, -16, -3, 9, 11),
        e.stroke(),
        $(e, 16, -3, 9, 11),
        e.stroke(),
        Z(e, [
          [-5, 20],
          [0, 10],
          [5, 20],
        ]),
        e.stroke(),
        n)
      )
        for (let t of [-9, 0, 9])
          (Z(e, [
            [t, 31],
            [t, 42],
          ]),
            e.stroke());
      break;
    case `car`:
      (Z(
        e,
        [
          [-44, 12],
          [-40, -6],
          [-26, -12],
          [-13, -30],
          [22, -30],
          [33, -10],
          [44, -3],
          [44, 21],
          [-44, 21],
        ],
        !0,
      ),
        e.stroke(),
        Z(
          e,
          [
            [-23, -11],
            [28, -11],
            [18, -25],
            [-10, -25],
          ],
          !0,
        ),
        e.stroke(),
        $(e, -26, 24, 9, 9),
        e.stroke(),
        $(e, 28, 24, 9, 9),
        e.stroke(),
        n &&
          (Z(e, [
            [-45, 2],
            [-34, 2],
          ]),
          e.stroke(),
          Z(e, [
            [34, 3],
            [44, 3],
          ]),
          e.stroke()));
      break;
    case `bolt`:
      (Z(
        e,
        [
          [7, -48],
          [-32, 7],
          [-5, 7],
          [-12, 48],
          [33, -12],
          [7, -12],
        ],
        !0,
      ),
        e.stroke());
      break;
    default:
      (Z(
        e,
        Array.from({ length: 10 }, (e, t) => {
          let n = -Math.PI / 2 + (t * Math.PI) / 5,
            r = t % 2 ? 21 : 46;
          return [Math.cos(n) * r, Math.sin(n) * r];
        }),
        !0,
      ),
        e.stroke(),
        n && ($(e, 0, 0, 5, 5), e.stroke()));
  }
}
function Oe(e, t, n, r, i, a, o = !1) {
  (e.save(),
    e.translate(n, r),
    e.scale(i / 110, i / 110),
    (e.lineCap = e.lineJoin = `round`),
    o ||
      ((e.fillStyle = a.bg),
      $(e, 0, 0, 57, 57),
      e.fill(),
      (e.globalAlpha = 0.7),
      (e.strokeStyle = a.secondary),
      (e.lineWidth = 1.3),
      $(e, 0, 0, 54, 54),
      e.stroke(),
      (e.globalAlpha = 1),
      e.save(),
      e.translate(2.2, 3.2),
      (e.strokeStyle = a.secondary),
      (e.globalAlpha = 0.3),
      (e.lineWidth = 7),
      De(e, t),
      e.restore()),
    (e.strokeStyle = a.accent),
    (e.lineWidth = 4.5),
    o && ((e.shadowColor = a.accent), (e.shadowBlur = 10)),
    De(e, t),
    (e.shadowBlur = 0),
    (e.strokeStyle = o ? `#fff4de` : a.ink),
    (e.lineWidth = o ? 1.3 : 1.5),
    De(e, t),
    e.restore());
}
function ke(e, t, n, r = !1, i = !1) {
  (e.save(),
    (e.font = t.font),
    (e.textAlign = `left`),
    (e.textBaseline = `alphabetic`),
    (e.lineJoin = `round`),
    t.lines.forEach((a, o) => {
      let { x: s, y: c } = t.positions[o];
      r
        ? ((e.lineWidth = Math.max(0.8, t.fontSize * 0.047)),
          (e.strokeStyle = n.accent),
          (e.shadowColor = n.accent),
          (e.shadowBlur = Math.min(24, t.fontSize * (i ? 0.18 : 0.07))),
          e.strokeText(a, s, c),
          (e.shadowBlur = 0),
          (e.strokeStyle = `#fff6de`),
          (e.lineWidth = Math.max(0.45, t.fontSize * 0.012)),
          e.strokeText(a, s, c))
        : ((e.fillStyle = n.ink),
          i ||
            ((e.shadowColor = n.bg),
            (e.shadowOffsetX = t.fontSize * 0.018),
            (e.shadowOffsetY = t.fontSize * 0.03)),
          e.fillText(a, s, c));
    }),
    e.restore());
}
function Ae(e, t, n, r, i = {}) {
  let a = Ee(e, t, n, {
    font: { family: `Arial, sans-serif`, weight: 700 },
    maxFontSize: n.height * 0.7,
    ...i,
  });
  return (
    e.save(),
    (e.fillStyle = r),
    (e.font = a.font),
    (e.textAlign = `left`),
    (e.textBaseline = `alphabetic`),
    a.lines.forEach((t, n) =>
      e.fillText(t, a.positions[n].x, a.positions[n].y),
    ),
    e.restore(),
    a
  );
}
function je(e, t, n, r) {
  (t.faceShape === `circle` || t.faceShape === `oval`
    ? $(e, n / 2, r / 2, n / 2, r / 2)
    : t.faceShape === `rounded`
      ? Q(e, 0, 0, n, r, Math.min(n, r) * 0.065)
      : (e.beginPath(), e.rect(0, 0, n, r)),
    e.clip());
}
function Me(e, t, n, r) {
  let i = e.faceStyle === `letters`,
    a = t / n >= 2.15,
    o = t / n < 1.08,
    s = Math.min(t, n) * 0.064;
  return i
    ? {
        message: {
          x: t * 0.035,
          y: n * 0.155,
          width: t * 0.93,
          height: n * 0.69,
        },
        brand: {
          x: t * 0.12,
          y: n * 0.023,
          width: t * 0.76,
          height: n * 0.105,
        },
        footer: { x: t * 0.15, y: n * 0.89, width: t * 0.7, height: n * 0.058 },
        icon: null,
        align: `center`,
        margin: s,
      }
    : a
      ? {
          message: {
            x: t * 0.245,
            y: n * 0.235,
            width: t * 0.695 - s,
            height: n * 0.58,
          },
          brand: {
            x: t * 0.25,
            y: n * 0.066,
            width: t * 0.67 - s,
            height: n * 0.105,
          },
          footer: {
            x: t * 0.25,
            y: n * 0.855,
            width: t * 0.66 - s,
            height: n * 0.053,
          },
          icon: {
            x: t * 0.125,
            y: n * 0.5,
            size: Math.min(t * 0.18, n * 0.63),
          },
          align: r % 3 ? `left` : `center`,
          margin: s,
        }
      : o
        ? {
            message: {
              x: t * 0.1,
              y: n * 0.245,
              width: t * 0.8,
              height: n * 0.585,
            },
            brand: {
              x: t * 0.105,
              y: n * 0.063,
              width: t * 0.49,
              height: n * 0.09,
            },
            footer: {
              x: t * 0.14,
              y: n * 0.88,
              width: t * 0.72,
              height: n * 0.044,
            },
            icon: {
              x: t * 0.78,
              y: n * 0.125,
              size: Math.min(t * 0.27, n * 0.15),
            },
            align: `center`,
            margin: s,
          }
        : {
            message: {
              x: t * 0.075,
              y: n * 0.27,
              width: t * 0.69,
              height: n * 0.545,
            },
            brand: {
              x: t * 0.08,
              y: n * 0.073,
              width: t * 0.6,
              height: n * 0.11,
            },
            footer: {
              x: t * 0.1,
              y: n * 0.88,
              width: t * 0.8,
              height: n * 0.055,
            },
            icon: {
              x: t * 0.855,
              y: n * 0.51,
              size: Math.min(t * 0.2, n * 0.4),
            },
            align: r % 2 ? `left` : `center`,
            margin: s,
          };
}
function Ne(e, t, n, r, i, a, o) {
  ((e.fillStyle = r.bg), e.fillRect(0, 0, t, n));
  let s = Math.min(t, n),
    c = a.margin;
  switch (
    (e.save(),
    (e.globalAlpha = o ? 0.095 : 0.13),
    (e.fillStyle = r.secondary),
    i % 6)
  ) {
    case 0:
      (Z(
        e,
        [
          [0, n * 0.63],
          [t * 0.29, n],
          [0, n],
        ],
        !0,
      ),
        e.fill(),
        Z(
          e,
          [
            [t * 0.76, 0],
            [t, n * 0.43],
            [t, 0],
          ],
          !0,
        ),
        e.fill());
      break;
    case 1:
      (Q(e, c * 0.42, c * 0.42, t - c * 0.84, n - c * 0.84, s * 0.06),
        (e.lineWidth = c * 0.28),
        (e.strokeStyle = r.secondary),
        e.stroke());
      break;
    case 2:
      if (a.icon)
        for (let t = 0; t < 16; t++) {
          let n = (t * ye) / 16,
            r = a.icon.size * 0.79;
          (Z(
            e,
            [
              [a.icon.x, a.icon.y],
              [a.icon.x + Math.cos(n) * r, a.icon.y + Math.sin(n) * r],
              [
                a.icon.x + Math.cos(n + 0.1) * r,
                a.icon.y + Math.sin(n + 0.1) * r,
              ],
            ],
            !0,
          ),
            e.fill());
        }
      break;
    case 3:
      (e.fillRect(0, 0, t * 0.018, n), e.fillRect(t * 0.965, 0, t * 0.035, n));
      for (let r = 0; r < 5; r++)
        e.fillRect(t * 0.04 + r * s * 0.034, n * 0.945, s * 0.015, n * 0.018);
      break;
    case 4:
      ((e.lineWidth = s * 0.016), (e.strokeStyle = r.secondary));
      for (let r = 0; r < 3; r++)
        ($(
          e,
          t * 0.98,
          n * 0.98,
          s * (0.19 + r * 0.065),
          s * (0.19 + r * 0.065),
        ),
          e.stroke());
      break;
    default:
      (e.fillRect(c * 0.7, c * 0.7, t - c * 1.4, s * 0.009),
        e.fillRect(c * 0.7, n - c * 0.7, t - c * 1.4, s * 0.009));
      for (let r = 0; r < 4; r++)
        e.fillRect(t - c * (0.5 + r * 0.24), c * 0.8, s * 0.004, n - c * 1.6);
  }
  e.restore();
  let l = e.createLinearGradient(0, 0, t * 0.2, n);
  (l.addColorStop(0, `rgba(255,255,255,0.06)`),
    l.addColorStop(0.55, `rgba(0,0,0,0)`),
    l.addColorStop(1, `rgba(0,0,0,0.16)`),
    (e.fillStyle = l),
    e.fillRect(0, 0, t, n));
}
function Pe(e, t, n, r, i, a, o) {
  if (
    (e.save(),
    (e.strokeStyle = r.secondary),
    (e.lineCap = `round`),
    (e.lineWidth = Math.max(1, Math.min(t, n) * 0.005)),
    a &&
      ((e.shadowBlur = Math.min(t, n) * 0.019), (e.shadowColor = r.secondary)),
    o)
  )
    (Z(e, [
      [t * 0.13, n * 0.863],
      [t * 0.87, n * 0.863],
    ]),
      e.stroke());
  else {
    let r = i.margin * 0.5;
    (Q(e, r, r, t - 2 * r, n - 2 * r, Math.min(t, n) * 0.036),
      e.stroke(),
      Z(e, [
        [i.brand.x, n * 0.205],
        [i.brand.x + i.brand.width * 0.38, n * 0.205],
      ]),
      e.stroke());
  }
  e.restore();
}
function Fe(e, t, n, r, i, a) {
  (e.clearRect(0, 0, i, a),
    e.drawImage(n, 0, 0),
    t.clearRect(0, 0, i, a),
    (t.fillStyle = r === `backlit` ? `#c4c4c4` : `#070909`),
    t.fillRect(0, 0, i, a),
    (t.globalCompositeOperation = `screen`));
  let o = (e, n, r, o) => {
    let s = t.createRadialGradient(e, n, 0, e, n, r);
    (s.addColorStop(0, `rgba(255,237,204,${o})`),
      s.addColorStop(0.26, `rgba(247,229,204,${o * 0.75})`),
      s.addColorStop(1, `rgba(0,0,0,0)`),
      (t.fillStyle = s),
      t.fillRect(0, 0, i, a));
  };
  if (r === `bulb`)
    for (let e = 0; e < 5; e++)
      (o(i * (0.1 + e * 0.2), a * 0.035, a * 0.71, 0.68),
        o(i * (0.1 + e * 0.2), a * 0.965, a * 0.55, 0.48));
  else if (r === `backlit`) o(i * 0.5, a * 0.45, Math.max(i, a) * 0.64, 0.28);
  else {
    let e = i / a > 2.5 ? 3 : 2;
    for (let t = 0; t < e; t++)
      o(
        (i * (t + 0.5)) / e,
        -a * 0.04,
        Math.max(a * 1.28, (i / e) * 0.77),
        0.9,
      );
  }
  ((t.globalCompositeOperation = `source-over`),
    (e.globalCompositeOperation = `multiply`),
    e.drawImage(t.canvas, 0, 0),
    (e.globalCompositeOperation = `destination-in`),
    e.drawImage(n, 0, 0),
    (e.globalCompositeOperation = `source-over`));
}
function Ie(e, t) {
  let n = document.createElement(`canvas`);
  return ((n.width = e), (n.height = t), n);
}
function Le(e) {
  let t = new c(e);
  return (
    (t.colorSpace = y),
    (t.anisotropy = 4),
    (t.minFilter = _),
    (t.magFilter = o),
    t
  );
}
function Re(e = {}, t = ``) {
  let r = Math.max(0.05, Number(e.width) || 3),
    i = Math.max(0.05, Number(e.height) || 1.4),
    a = Math.max(r, i),
    o = a >= 9 ? 2048 : a >= 3.5 ? 1536 : 1024,
    s = Math.max(16, Math.round((o * r) / a)),
    c = Math.max(16, Math.round((o * i) / a)),
    l = Ie(s, c),
    d = Ie(s, c),
    p = Ie(s, c),
    m = l.getContext(`2d`),
    g = d.getContext(`2d`),
    _ = p.getContext(`2d`),
    y = Le(l),
    b = Le(d),
    x = e.faceStyle === `letters`,
    S = e.lighting === `neon`,
    C = { ...Se, ...e.palette },
    w = Ce(`${e.key || e.name || `sign`}:${e.family || ``}`),
    ee = be[w % be.length],
    T = Me(e, s, c, w),
    E = new f({
      map: y,
      emissiveMap: b,
      color: 16777215,
      emissive: 16777215,
      emissiveIntensity: 0.08,
      roughness: S ? 0.39 : 0.69,
      metalness: 0.04,
      transparent: x || !!e.faceShape,
      alphaTest: x ? 0.006 : e.faceShape ? 0.02 : 0,
      depthWrite: !0,
      side: 0,
      polygonOffset: !0,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
    });
  E.name = `Editable ${e.lighting || `flood`} sign artwork`;
  let D = new h(r, i),
    O = new u(D, E),
    k = new v();
  ((k.name = `${e.key || `sign`} editable face`),
    (O.name = `Paint and light`),
    (O.receiveShadow = !x),
    (O.castShadow = !1),
    (O.userData.signFace = !0),
    (O.userData.noStaticBake = !0),
    k.add(O));
  let A,
    j = !1,
    M = 0;
  function te(t) {
    if (j) return;
    let n = String(t ?? ``);
    (m.clearRect(0, 0, s, c),
      g.clearRect(0, 0, s, c),
      m.save(),
      je(m, e, s, c),
      x || Ne(m, s, c, C, w, T, S));
    let r = Math.min(s, c) * (S ? 0.018 : 0.009),
      i = {
        font: ee,
        align: T.align,
        padding: r,
        maxFontSize: Math.min(T.message.height * 0.84, T.message.width * 0.5),
        lineHeight: ee.family.includes(`Georgia`) ? 1.17 : 1.1,
      };
    ((A = Ee(m, n, T.message, i)),
      (A.fitOptions = i),
      (A.textureWidth = s),
      (A.textureHeight = c),
      (A.variant = w % 6),
      (A.lighting = e.lighting || `flood`),
      (A.faceStyle = x ? `letters` : `poster`));
    let a = String(e.brand || e.name || `CUBIE & CO.`),
      o = xe[(w >>> 4) % xe.length];
    (Ae(m, a, T.brand, C.secondary, {
      align: x ? `center` : T.align,
      maxFontSize: Math.min(T.brand.height * 0.77, c * 0.08),
      font: {
        family: w % 2 ? `Georgia, serif` : `Arial, sans-serif`,
        weight: 700,
      },
    }),
      Ae(m, o, T.footer, C.secondary, { align: x ? `center` : T.align }),
      T.icon && Oe(m, e.icon || `star`, T.icon.x, T.icon.y, T.icon.size, C),
      ke(m, A, C, S, !1),
      S
        ? Pe(m, s, c, C, T, !1, x)
        : x ||
          ((m.strokeStyle = C.accent),
          (m.lineWidth = Math.max(1, Math.min(s, c) * 0.004)),
          Z(m, [
            [T.brand.x, c * 0.208],
            [T.brand.x + T.brand.width * 0.38, c * 0.208],
          ]),
          m.stroke()),
      m.restore(),
      S
        ? (g.save(),
          je(g, e, s, c),
          x || ((g.fillStyle = `#000000`), g.fillRect(0, 0, s, c)),
          ke(g, A, C, !0, !0),
          Pe(g, s, c, C, T, !0, x),
          T.icon &&
            Oe(g, e.icon || `star`, T.icon.x, T.icon.y, T.icon.size, C, !0),
          (g.globalAlpha = 0.6),
          Ae(g, a, T.brand, C.secondary, {
            align: x ? `center` : T.align,
            maxFontSize: Math.min(T.brand.height * 0.77, c * 0.08),
            font: {
              family: w % 2 ? `Georgia, serif` : `Arial, sans-serif`,
              weight: 700,
            },
          }),
          g.restore())
        : Fe(g, _, l, e.lighting || `flood`, s, c),
      (y.needsUpdate = !0),
      (b.needsUpdate = !0),
      (O.userData.signLayout = A));
  }
  function N(t) {
    j ||
      ((M = n.clamp(Number(t) || 0, 0, 1)),
      (E.emissiveIntensity = S
        ? 0.08 + M * 2.32
        : e.lighting === `backlit`
          ? 0.025 + M * 1.5
          : 0.015 + M * 0.65),
      (k.userData.night = M));
  }
  function ne() {
    j ||
      ((j = !0),
      y.dispose(),
      b.dispose(),
      E.dispose(),
      D.dispose(),
      k.remove(O),
      (l.width = l.height = d.width = d.height = p.width = p.height = 1));
  }
  return (
    te(t),
    N(0),
    {
      group: k,
      update: te,
      setNight: N,
      dispose: ne,
      get layout() {
        return A;
      },
    }
  );
}
function ze(e) {
  let t = ``,
    n = [];
  for (let r of e.split(/\r?\n/)) {
    / — \d{3}–\d{3}$/.test(r) && (t = r.replace(/ — .*/, ``));
    let e = /^(\d{3})\. (.+)$/.exec(r);
    e && n.push(Object.freeze({ id: +e[1], text: e[2], category: t }));
  }
  if (n.length !== 300 || n.some((e, t) => e.id !== t + 1))
    throw Error(`Expected all 300 numbered copy-bank entries`);
  return Object.freeze(n);
}
var Be = new Map(
  ze(`CALL OF CUBIE — RADIO / BILLBOARD COPY BANK
300 original lines • Batch 01 • 2026-10-06

Creative direction: hard-R fictional advertising and social satire; broad targets,
blasphemy, sex jokes, dark comedy, pop culture, and confidently mangled history.
Stable IDs 001–300. Each numbered entry is standalone copy. Category headings are
editorial labels. Stored for future selection; no entries are wired into the game.

WORK, CORPORATIONS & THE AMERICAN DREAM — 001–025

001. At Bastion Industries, we're a family. That's why leaving requires therapy.
002. Your boss believes in a four-day workweek. He'll see you Tuesday afternoon.
003. Nobody wants to work anymore. Anyway, meet our new CEO: a spreadsheet wearing a divorce.
004. Fuck your passion. Does it have dental?
005. We don't have layoffs. We have surprise alumni.
006. Human Resources: tell us where it hurts so we can document that you were already like that.
007. Every employee gets a voice. Please use it to read the apology we wrote for you.
008. Mandatory fun starts at six. Unpaid resentment starts whenever you like.
009. We hear your concerns. That's what the microphones under your desk are for.
010. Bastion Industries: our doors are always open, pending your exit interview and a bag search.
011. Climb the corporate ladder. The guy above you has diarrhea.
012. Our founder started with nothing but a dream, a garage, and the sort of father who owns garages in bulk.
013. The meeting could have been an email. Your job could have been a nephew.
014. Paid in exposure? So was the man who froze to death outside.
015. We're replacing burnout with a more positive term: internally preheated talent.
016. Here at Hustle Hut, sleep is for people whose landlord has stopped believing in them.
017. Our unpaid internship offers real-world experience in being robbed by someone wearing a lanyard.
018. Bastion Industries is proud to announce record profits. Please bring your own fucking cake.
019. Be your own boss. Exploit someone you already hate.
020. The dream is alive. It's just being held offshore for tax purposes.
021. Open-plan offices: because someone else's divorce should be everybody's podcast.
022. We respect work-life balance. Please keep your second job off our Wi-Fi.
023. Your replacement has been described as tireless, innovative, and technically a printer.
024. This Labor Day, celebrate the people who built this country by yelling at the one making your sandwich.
025. Bastion Industries: if you're reading this on company time, congratulations. We finally found a use for the billboard.

FOOD, BOOZE & TERRIBLE DECISIONS — 026–050

026. Uncle Artery's: farm to table to a chair you can't get out of.
027. Our chicken is free-range. The employees need permission to piss.
028. Beef Encounter. All the meat your doctor warned you about, plus a commemorative bucket.
029. Gluten-free, cruelty-free, and twenty-seven fucking dollars.
030. At Uncle Artery's, we believe every meal should come with fries and a difficult phone call.
031. Cold Witness Vodka: for evenings that require three different versions of events.
032. Day drinking is just brunch without the eggs lying about it.
033. Our whiskey is aged twelve years. Our apology was written this morning.
034. Introducing the Family Bucket. Finally, a custody arrangement everyone can eat out of.
035. Yes, it's artisanal. The man who burned it has a complicated relationship with his father.
036. The Holy Cow Burger: technically blasphemy, medically a cry for help.
037. Quitting sugar? Try our new dessert, sweetened with the crushing knowledge that this is your life now.
038. At Grub Chapel, grace is included. The twenty percent service charge is between you and God.
039. Our secret ingredient is butter. The secrecy is mostly directed at your cardiologist.
040. Legal Limit Lager: the beer named by a lawyer who specifically asked us not to.
041. Energy drinks: because your body saying no is apparently a branding opportunity.
042. Full English breakfast. Now featuring everything the empire couldn't steal from a spice cupboard.
043. We put bacon on the salad so you wouldn't have to come out to your dad as someone who eats salad.
044. Bottomless mimosas. For people who describe blacking out as a girls' trip.
045. Our vegan sausage tastes just like the real thing: something you agreed not to ask questions about.
046. Dignity sold separately. Extra sauce is also extra.
047. Cold Witness Vodka: your ex has blocked your number. We believe in you and email.
048. Try the Divorce Combo: two meals, separate bags, and a toy neither of you can agree on.
049. Our coffee has notes of chocolate, regret, and a barista with a fucking master's degree.
050. Uncle Artery's apologizes for calling our new sandwich a widowmaker. Statistically, several customers were single.

FAITH, BLASPHEMY & PREMIUM SALVATION — 051–075

051. Redemption Plus: Jesus saves. We offer financing.
052. For an all-seeing God, He sure needs a lot of security cameras around the collection plate.
053. Skip the sermon. Our drive-through confessional offers forgiveness, fries, and absolutely no follow-up questions.
054. Thou shalt not covet thy neighbor's wife. Ask about our singles ministry.
055. Our congregation doesn't believe in evolution. The pastor's salary, however, has adapted beautifully.
056. God has a plan. Apparently it includes selling you a fifty-dollar candle that smells like being single.
057. Pastor Platinum's Prosperity Hour: proof that somebody's prayers are working.
058. Turn the other cheek. Our cosmetic clinic does both for one low monthly payment.
059. What would Jesus drive? Something He could pronounce without explaining the trim package.
060. Our holy water is locally sourced from the same tap as the mop bucket. Faith is doing a lot of work here.
061. The meek shall inherit the earth, subject to probate, zoning, and a frankly vicious homeowners' association.
062. Redemption Plus Premium: your sins, ad-free.
063. We asked God for a sign. The planning department approved twelve square feet.
064. Blessed are the poor. Please use the side entrance.
065. Going to hell? Beat the rush with our express check-in app.
066. Our church welcomes everyone. The donor seating chart gets more specific.
067. Confession is good for the soul. An NDA is better for the diocese.
068. The Lord moves in mysterious ways. So does the money from the roof fund.
069. Born again? Great. We can bill the introductory rate twice.
070. Have you accepted Jesus into your heart? He appears to be outside, arguing with your smart doorbell.
071. Miracles while you wait. Refunds after the Second Coming.
072. Try our communion wine flight. Finally, a reason to describe Sunday as a tasting experience.
073. Lust is a sin. That's why our church gym has a separate entrance and surprisingly expensive leggings.
074. This billboard is offensive in church. Fortunately, our market research puts you in traffic.
075. Redemption Plus: even our lawyers said, "Jesus fucking Christ."

POLITICS, PATRIOTISM & PUBLIC SERVICE — 076–100

076. Vote Clive Pritchard. He'll sell out this town to someone who can afford it.
077. Your voice matters. Please hold while we transfer you to a donor.
078. Pritchard for Mayor: a fresh face on the same subpoena.
079. We promise to drain the swamp. The luxury condos require dry land.
080. Freedom isn't free. The convenience fee, however, is fucking outrageous.
081. Patriotism: loving your country enough to hate everybody currently in it.
082. This campaign is funded by ordinary citizens. Three of them. Each owns a satellite.
083. We believe in small government. One man should be able to fit it in his pocket.
084. Our infrastructure plan includes a beautiful new banner that says INFRASTRUCTURE PLAN.
085. Don't blame me. I voted for the guy with fewer documentaries about him.
086. The Department of Public Confidence would like you to stop looking out the window.
087. Another road to prosperity is closed for emergency repairs.
088. Liberty Forge Defense: turning your tax dollars into somebody else's geography problem.
089. Support the troops. Our bumper stickers cost twelve dollars; their housing budget is under review.
090. We bring democracy to countries that were selfishly keeping their minerals under it.
091. The mayor denies all allegations, including the one you haven't heard yet.
092. Public consultation begins at nine. Demolition begins at eight.
093. We're tough on crime, especially the kind that doesn't sponsor a golf tournament.
094. Why teach history when you can run for office and fucking improvise?
095. Pritchard for Mayor: he knows where the bodies are buried because he rezoned it.
096. Our democracy runs on participation, compromise, and one printer in a school gym.
097. The Official Opposition: furious that someone else is doing our idea.
098. Lobbying is just bribery with a calendar invitation.
099. Stay informed. We'll tell you which neighbor to be afraid of after these messages.
100. This message was approved by a committee that will not be taking questions or sharing a vehicle.

TECH, CELEBRITY & THE CONTENT ECONOMY — 101–125

101. New from Obey Home: a smart fridge that tells your insurance company what a fat fucking weekend you had.
102. Artificial intelligence. Finally, someone who can be confidently wrong without running for office.
103. Our app respects your privacy. It has spent years getting to know it.
104. Click "accept all" to continue pretending this was a choice.
105. We don't sell your data. We rent your personality to strangers until you die.
106. Your phone is listening. For once, somebody in this relationship is.
107. Obey Home: when you said you wanted a house with character, we assumed you meant a witness.
108. She's an influencer. He's a thought leader. Together, they've never carried a chair.
109. This apology video is sponsored by the product that caused the apology.
110. Cancel culture has gone too far. Our celebrity spokesperson now has to launch his comeback podcast from his second house.
111. New streaming bundle: twelve subscriptions and the same fucking movie you watched on a plane.
112. Your childhood is back, darker, grittier, and contractually required to set up six sequels.
113. You're not the main character. You're the person a streaming service kills off to explain the budget.
114. Superhero fatigue? Try Batman's newest villain: a normal fucking workday.
115. Book an authentic celebrity encounter. Watch someone you've never met resent you in person.
116. The algorithm thinks you need therapy, tactical trousers, and a woman selling mushroom powder. Honestly, strong first session.
117. Download our mindfulness app. Notifications every seven minutes remind you to disconnect.
118. Obey Home Baby Monitor: your infant's first brand partnership, negotiated while neither of you was sleeping.
119. Our AI wrote a beautiful love letter. Then billed your wife per token.
120. Space tourism: because billionaires have run out of ways to look down on you from here.
121. You don't need a podcast. You need one friend who isn't afraid to interrupt.
122. We replaced customer service with AI. Now an entire data center can tell you to go fuck yourself.
123. Introducing the unplugged retreat. Six thousand dollars to discover that trees don't need your email address.
124. Jurassic Park taught us one thing: never let scientists run the gift shop.
125. Your free trial ends tonight. Your relationship with us ends when your bank learns the word "chargeback."

WELLNESS, MEDICINE & SELF-IMPROVEMENT — 126–150

126. Ask your doctor if having money is right for you.
127. Serenity Debt Spa: leave your worries at the door. We'll refinance them while you're in the mud.
128. Our juice cleanse removes toxins, savings, and the last enjoyable part of your lunch break.
129. Manifest abundance. If that fails, marry the building.
130. Introducing Calmex: for anxiety caused by the side effects in the Calmex commercial.
131. Side effects may include dry mouth, sleeplessness, and suddenly trusting a man in a lab coat beside a waterfall.
132. We treat the whole person. That's why every department sends a separate bill.
133. Your body is a temple. Ours has a nightclub license.
134. Cold plunges: all the shock of falling into a pond, now sold by a man who says "optimize" during sex.
135. Our therapist doesn't judge. The receptionist has already formed a fairly complete picture.
136. Serenity Debt Spa: a hot stone on your spine can't fix capitalism, but apparently it's ninety dollars to check.
137. Forty is the new thirty, provided your knees sign the waiver.
138. Break the cycle. Then buy our sixteen-part course on recognizing a cycle.
139. Resting bitch face? Try resting. The bitch part may be employment-related.
140. Our hospital is a nonprofit. The parking garage is a goddamn supervillain.
141. With Platinum Care, you can skip the waiting room and feel terrible about it in a nicer room.
142. They say laughter is the best medicine. Your insurer has interpreted this as a coverage exclusion.
143. Wellness isn't a destination. It's a subscription that keeps moving the fucking cancellation button.
144. At Alpha Furnace Gym, every mirror is a performance review from your dad.
145. This protein shake contains forty grams of protein and one man's entire personality.
146. Botox: for when the years have been kind enough, but you'd like to stop looking interested.
147. Be comfortable in your own skin. Or finance ours.
148. Our fertility clinic can't promise a miracle, but it can make sex feel like a quarterly earnings call.
149. Everyone has baggage. Our couples retreat charges by the bag.
150. Serenity Debt Spa: the screaming is part of the release. So is the invoice.

MONEY, PROPERTY & CLASS ASPIRATION — 151–175

151. Heritage First Bank: your grandfather trusted us. We have the farm to prove it.
152. Build generational wealth by being born later in somebody else's successful plan.
153. Your rent includes exposed brick, natural light, and a landlord who describes fixing the heat as a journey.
154. Luxury micro-apartments. At last, a home you can vacuum from bed.
155. Historic charm. Original wiring. Flexible definition of "exit."
156. This neighborhood is up-and-coming. The people who made it interesting are already leaving.
157. Heritage First Bank: when one door closes, we send a man to change the locks.
158. A penny saved is a penny we haven't invented a fee for yet.
159. Homeownership starts with a dream and a parent who can wire eighty thousand dollars before lunch.
160. Why waste money on rent when you can spend thirty years paying for the privilege of worrying about a roof?
161. Invest in crypto. It's like a casino where the fire exit has a Discord moderator.
162. Rich people are just like you. They also hate dealing with their staff.
163. Luxury watches: tell everyone you own time while explaining why you can't see your kids.
164. Our gated community protects your family from the people who built your gated community.
165. Poor? Have you tried rebranding as a founder in stealth mode?
166. Your credit score knows what you did last summer. Apparently, you needed a fucking refrigerator.
167. Heritage First Bank: overdraft fees because being broke shouldn't be free.
168. A second home is the perfect place to escape the emotional demands of your third marriage.
169. Meet your financial advisor: a man explaining patience from a leased sports car.
170. We call it passive income because "charging people to exist near something you inherited" wouldn't fit on the brochure.
171. Buy land. God isn't making any more, and our competitors are doing a hell of a job flooding it.
172. The market corrects itself. You get evicted.
173. Penthouse living: a whole new altitude at which to ignore the group chat about your father.
174. Premium Bankruptcy Services. Go broke with someone who validates parking.
175. Heritage First Bank: our vaults are secure. Your future has a variable rate.

HISTORY, EDUCATION & ABSOLUTE CONFIDENCE — 176–200

176. Patriot Academy: teaching the proud American history that happened before America existed.
177. As Napoleon said after inventing the hot tub, "Make it hotter, you cowards."
178. The Romans built roads that lasted two thousand years. Our contractor has asked us to stop bringing that up.
179. Cleopatra invented direct deposit so Mark Antony would stop paying her in fucking drama. Learn more at Heritage First Bank.
180. In 1492, Columbus discovered America needed a rewards program.
181. Magna Carta Mattress Outlet: the same freedom of movement demanded by King Arthur at the Boston Tea Party.
182. History is written by the winners. Textbooks are priced by absolute bastards.
183. Ancient Spartans never complained about leg day. That's why all three hundred of them got fitness sponsorships.
184. Before Newton invented gravity, furniture was a nightmare. Honor his legacy with a heavier sofa.
185. The Renaissance began when Leonardo da Vinci finally updated his portfolio website.
186. At Waterloo, Napoleon learned you can't expense every fucking mistake.
187. The Industrial Revolution gave workers a voice. Mostly a cough.
188. Patriot Academy: our historians agree because the other ones were let go.
189. Socrates questioned everything. Look how that worked out. Stop asking what's in the smoothie.
190. The pyramids weren't built in a day. Neither was your extension, Gary, but we're approaching a fucking dynasty.
191. George Washington crossed the Delaware because the toll app wouldn't recognize his password.
192. Medieval peasants got more feast days than you. Try discussing that at your next pizza-based morale event.
193. Joan of Arc didn't have a five-year plan. She had confidence, a sword, and terrible representation.
194. We put the classical back in education: Latin mottos, rich patrons, and absolutely no fucking plumbing budget.
195. The Trojan Horse was history's first free trial. Canceling was a whole thing.
196. Winston Churchill invented brunch to win the Spanish Inquisition. Our eggs honor that sacrifice.
197. Mozart wrote his first symphony at eight. You can stop sending us your DJ set now.
198. Shakespeare invented over seventeen hundred excuses for a man in tights to stab his manager.
199. Learn history the Patriot Academy way: dates optional, chest out, no follow-up questions.
200. Those who forget the past are doomed to repeat it. Those who remember can sell the anniversary edition.

SEX, DATING & DOMESTIC COLLAPSE — 201–225

201. Friction Dating: meet someone whose red flags complement your kitchen.
202. Our couples massage includes two therapists and the silence you've been practicing all year.
203. Discreet Affairs Motel. Because "working late" deserves Egyptian cotton.
204. Put the spark back in your marriage. We sell separate blankets and a very patient electrician.
205. Wedding insurance: for the happiest day of your life and the most expensive fight your parents have ever catered.
206. Friction Premium lets you see who liked you. Therapy may help with why none of them feel good enough.
207. Your soulmate is out there, complaining about you to someone they're currently fucking.
208. Try our marriage retreat. Same argument, better mountains.
209. Nothing says "forever" like a diamond and a financing agreement that takes the possibility more seriously than you do.
210. Our sex toy has six speeds and has never called your promotion "cute."
211. Love is blind. Your joint checking account is about to develop excellent peripheral vision.
212. Discreet Affairs Motel: the minibar is judgmental, but only about your credit limit.
213. At Bare Minimum Lingerie, the only thing holding this relationship together may be hand-wash only.
214. We asked men what women want. Unfortunately, they answered, so now we sell a tactical candle.
215. Friction Dating: because meeting someone naturally would require leaving this fucking chair.
216. Breakups are hard. Our storage units are climate-controlled and don't ask what happened to the wedding photos.
217. Buy her flowers. It gives her something to hold while you misunderstand the problem.
218. Our adult boutique offers discreet packaging for products named things like THE MARRIAGE COUNSELOR 9000.
219. Ask about our honeymoon package. It includes champagne, rose petals, and a late checkout for the first serious discussion of debt.
220. You don't have a type. You have a recurring administrative failure.
221. An orgasm shouldn't require a software update. We mentioned this to the design team. They added Bluetooth.
222. Prenuptial agreements: because true love should survive reading the fucking spreadsheet.
223. Discreet Affairs Motel: we'll call you a taxi and whatever name you put on the booking.
224. Modern romance is finding someone you'd delete three apps and one suspiciously named contact for.
225. At Split Happens Divorce Law, we believe there's someone for everyone. Sometimes it's us, twice.

LOCAL BUSINESSES, CRIME & THE FINAL BILL — 226–250

226. Second Chance Crematorium: the name tested well. Please stop asking how it works.
227. Our funeral plans put the "fun" in nonrefundable.
228. Dignity is priceless. The satin upgrade is eight hundred dollars.
229. Second Chance Crematorium: for the man who always wanted to be fucking smokin'.
230. Discount Wills. Leave them something to fight about.
231. You can't take it with you. We can, however, charge your estate for trying.
232. Bail Almighty: the closest thing to divine intervention that accepts a motorcycle as collateral.
233. Arrested? Stay calm. Our attorney has been through this personally.
234. Plausible Plumbing: whatever's in that pipe, we didn't see it.
235. This space could be your business. Judging by the last three tenants, probably a vape shop with a very complicated accountant.
236. Our locksmith can open almost anything. His heart is a matter for the parole board.
237. Dale's Pest Control: we kill things your landlord calls seasonal.
238. At Alibi Auto Repair, every mysterious noise becomes a specific financial problem.
239. Our laundromat removes blood, wine, and most of the evening. Cash only. Stop making that face.
240. Second Chance Crematorium now offers family bundles. Please don't interpret that as a challenge.
241. Here at Fine Print Insurance, an act of God is anything expensive enough to make us religious.
242. We're the neighborhood watch. We saw the whole thing and will tell you about it at absolutely fucking unbearable length.
243. Our security cameras record in stunning 4K. The responding officer would prefer a screenshot.
244. Same-Day Exorcisms. If it's just your roommate, standard eviction rates apply.
245. Roadside bouquets half price. We are aware of how that sounds.
246. Plausible Plumbing: our business is your business becoming everybody downstairs's business.
247. Second Chance Crematorium offers a tasteful urn for every decor, including the shelf you said you'd fix in 1998.
248. Your local paper: reporting what happened after Facebook has already blamed the wrong fucking guy.
249. Bail Almighty: everyone deserves a second chance and a payment schedule with consequences.
250. Please stop stealing the neighborhood watch sign. We are running out of reassuring ways to explain it.

CARS, LUXURY, NATURE & OTHER THINGS WE RUINED — 251–275

251. The new Bastion Colossus SUV: for men who think a blind spot is a form of privacy.
252. Six thousand pounds of personal freedom. Cupholders for seven.
253. Our electric truck saves the planet one extremely quiet parking dispute at a time.
254. The Colossus has room for your whole family and the apology you won't make.
255. Nature is calling. We bought the number and put it behind a resort fee.
256. Greenwashing? Absolutely not. Our pollution has a fucking leaf on it.
257. Carbon offsets: somebody plants a tree so you can fly to a meeting about trees.
258. Our bottled water comes from a pristine spring the village is no longer allowed to use.
259. Please reuse your towel to save the earth. We'll be watering the rooftop golf course until four.
260. Eco-luxury cruises: see the reefs while your vacation is still legally a sightseeing trip.
261. We believe the children are our future. That's why we've financed the present against them.
262. Visit the great outdoors. Leave a review so the mountain knows how to improve.
263. Our luxury bunker includes filtered air, private cinema, and a deeply awkward conversation with whoever brought a fucking ukulele.
264. The Bastion Colossus: because buying a ladder would imply the problem was your height.
265. Mad Max got one thing right: eventually, everyone dresses for the price of gasoline.
266. Fly First Regret Airlines. Your knees have been upgraded to a premium feature.
267. Boarding group nine may begin making peace with its choices.
268. Our private jet package includes carbon-neutral guilt, handcrafted by someone who won't be traveling.
269. The beach is disappearing. Fortunately, so is the walk from your investment property.
270. Mother Nature has a temper. Our shareholders have a surprisingly complete evacuation plan.
271. Rent an exotic sports car and let everyone know exactly how you're handling the divorce.
272. Rewild yourself. Start by acting less fucking weird at a picnic.
273. Our resort offers authentic local culture from six to seven, after which the locals take the employee bus home.
274. We support sustainable fishing. The boat is built to outlast the fish.
275. The Bastion Colossus: every safety feature imaginable, except asking why you're driving it like that.

RADIO, DISCLAIMERS & UNSUPERVISED GENERAL FUCKERY — 276–300

276. You're listening to Civic FM: all the hits, none of the accountability.
277. Traffic is backed up for six miles. Here's a song about freedom from a man who travels by helicopter.
278. This next track goes out to everybody working hard. Your boss has requested something shorter.
279. Today's weather: a beautiful day to be independently wealthy.
280. Civic FM. Your source for breaking news, breaking marriages, and a carpet sale entering its ninth final week.
281. That was thirty uninterrupted minutes of music, interrupted only by reminders of how uninterrupted it was.
282. Coming up: is society too sensitive? Our host will scream at a seventeen-second clip until the news.
283. Good news: you're not going insane. Bad news: this is all actually happening.
284. This message has been approved by our legal department, which is currently updating its resume.
285. Any resemblance to actual persons is unfortunate for those persons and excellent for engagement.
286. Our views do not reflect those of our sponsors until the payment clears.
287. Batteries not included. Consequences appear to be.
288. No purchase necessary to enter. Some profound misunderstanding of probability helps.
289. We apologize to anyone offended by yesterday's apology. The writer responsible has been promoted to crisis management.
290. You can't say anything anymore. Anyway, here's our nationally syndicated four-hour show about it.
291. Somewhere, a lawyer is reading this billboard very slowly.
292. Hogwarts rejected my application, so now I perform dark arts in commercial real estate.
293. You are Kenough. Your landlord has asked for a less fucking abstract number.
294. The Force is strong with you. Unfortunately, your signal is weak and your plan doesn't include roaming.
295. One ring to rule them all. Several smaller purchases to keep the relationship functioning.
296. Please enjoy this peaceful moment while we calculate what to sell you because of it.
297. If you found this offensive, wait until you see the invoice.
298. Our brand values are whatever gets this printed before the scandal breaks.
299. Civic FM: saying the quiet part at a volume your neighbors can file a complaint about.
300. This space intentionally left morally vacant.
`).map((e) => [e.id, e.text]),
);
function Ve(e, t, n) {
  return O(Ue(e, t, n));
}
function He(e, t, n, r) {
  return D(Ue(e, t, n), r);
}
function* Ue(t, n, r) {
  if (!r.advertisingSigns?.length) return null;
  let i = new v(),
    o = new Map(),
    s = new Map(),
    c = new Set(),
    l = t.modules.get(`environment`);
  i.name = `greywater-advertising`;
  for (let t of r.advertisingSigns) {
    let n = _e(
        M.find((e) => e.key === t.key),
        t,
      ),
      r = ve(n, t);
    r.scale.setScalar(t.scale ?? 1);
    let u = `sign:${t.id}`;
    (ee(u) || T(u, r, e, new a()),
      (r.name = t.id),
      r.position.fromArray(t.pos),
      (r.rotation.y = t.yaw),
      r.traverse((e) => {
        e.isMesh &&
          (c.add(e.material),
          e.castShadow && l?.configureCaster?.(e.material),
          e.material.userData.signEmission &&
            s.set(e.material, e.material.userData.signEmission));
      }));
    let d = [];
    for (let e of r.userData.faces) {
      let i = Re(
        { ...n, width: e.width, height: e.height },
        t.text ?? Be.get(t.messageId) ?? ``,
      );
      (i.group.position.fromArray(e.position),
        i.group.rotation.fromArray(e.rotation ?? [0, 0, 0]),
        r.add(i.group),
        d.push(i));
    }
    (o.set(t.id, d), i.add(r), yield);
  }
  i.updateMatrixWorld(!0);
  let u = [];
  i.traverse((e) => {
    e.isMesh &&
      c.has(e.material) &&
      !s.has(e.material) &&
      u.push({
        geometry: e.geometry,
        material: e.material,
        matrix: e.matrixWorld.clone(),
        cast: e.castShadow,
        mesh: e,
      });
  });
  let d = E(u, { cell: 128, name: `advertising-structure` }),
    f = new Set(d.rest.map((e) => e.mesh));
  for (let e of u)
    f.has(e.mesh) || (e.mesh.removeFromParent(), e.geometry.dispose());
  ((u.length = 0), f.clear());
  for (let e of d.meshes)
    ((e.userData.releaseAfterUpload = !0),
      e.castShadow && l?.configureCaster?.(e.material),
      i.add(e));
  n.add(i);
  let p = -1,
    m = () => {
      let e = l?.getPracticals?.() ?? 0.8;
      if (!(Math.abs(e - p) < 0.001)) {
        p = e;
        for (let [t, n] of s) t.emissiveIntensity = n * (0.22 + e * 0.78);
        for (let t of o.values()) for (let n of t) n.setNight(e);
      }
    };
  return (
    m(),
    {
      update: m,
      setMessage(e, t) {
        if (!Be.has(t) || !o.has(e)) return !1;
        for (let n of o.get(e)) n.update(Be.get(t));
        return !0;
      },
      dispose() {
        i.removeFromParent();
        for (let e of o.values()) for (let t of e) t.dispose();
        for (let e of d.meshes) e.removeFromParent();
        (d.dispose(), i.traverse((e) => e.geometry?.dispose()));
        for (let e of c) e.dispose();
        (i.clear(), o.clear(), s.clear());
      },
    }
  );
}
export { Ve as addGreywaterSigns, He as addGreywaterSignsAsync };
//# sourceMappingURL=greywater-signs-view-b4Ps_Ogz.js.map
