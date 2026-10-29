// assets__cay-DYxqQzdE 01 — replaces
// Lines 1-155 of readable/assets__cay-DYxqQzdE.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { er as e } from "./graphics-quality-CrL3qbU3.js";
import { n as t, t as n } from "./helipad-kit-DK8Pj1KR.js";
import { f as r, p as i } from "./combat-tuning-B4WclXDv.js";
import { n as a } from "./streetlife-KYkvhSFp.js";
import { t as o } from "./prop-collision-BF7s3ofu.js";
import { t as s } from "./lab-footprints-Bots4mYb.js";
import { a as c } from "./lab-city-DCFvouWE.js";
import { t as l } from "./round-collider-CyTIuJfx.js";
var u = {
    A: [-133, 13],
    B: [-28, -136],
    C: [28, 0],
    D: [0, 140],
    E: [137, -10],
  },
  d = (e, t, [n, r]) => Math.atan2(n - e, r - t),
  f = (e, t, n, r, i, a, o = u[e]) => ({
    flag: e,
    key: t,
    x: n,
    z: r,
    rotY: d(n, r, o),
    replaces: i,
    note: a,
  }),
  p = Object.freeze([
    f(
      `A`,
      `trSchool`,
      -155,
      -15,
      [`urban-0`],
      `St. Brendan Mission School in place of the concrete school block (the built position)`,
    ),
    f(
      `A`,
      `trRubber`,
      -115,
      31,
      [`copra-hall`],
      `Estate office: the plantation manager's verandah over the copra yard`,
    ),
    f(
      `A`,
      `trChurch`,
      -105,
      -12,
      [`copra-chapel`, `copra-bell`],
      `Iglesia de San Telmo replaces the whitewashed chapel and bell post`,
    ),
    f(
      `A`,
      `trStore`,
      -135,
      43,
      [`copra-store`],
      `Tan Hock Seng store: the village shop, two floors`,
    ),
    f(
      `A`,
      `trChattel`,
      -156,
      17,
      [`copra-cottage`],
      `Chattel house on the west edge`,
    ),
    f(
      `A`,
      `trCreole`,
      -131,
      -21,
      [`copra-house`],
      `Creole cottage on the north path`,
    ),
    f(
      `B`,
      `trCustoms`,
      -73,
      -112,
      [`urban-2`],
      `Sentinel Cay Customs House as the airstrip terminal, facing the runway`,
      [-73, -160],
    ),
    f(
      `B`,
      `trKeeper`,
      -8,
      -184,
      [`light-cottage`],
      `Light Station Keeper's Cottage beside the 1908 lighthouse`,
      [-8, -150],
    ),
    f(
      `C`,
      `trResearch`,
      10,
      -22,
      [`urban-1`],
      `Field station as the operations block (radome, dish and masts stay)`,
    ),
    f(
      `C`,
      `trRadio`,
      31,
      29,
      [`station-comms`],
      `Relay Station 7: comms hut with its own 26 m mast`,
    ),
    f(
      `D`,
      `trPierBungalow`,
      -35,
      146,
      [`lagoon-house-a`],
      `Bungalow on piers at the lagoon edge`,
    ),
    f(
      `D`,
      `trChattel`,
      -27,
      122,
      [`lagoon-house-b`],
      `Chattel house up the beach`,
    ),
    f(
      `D`,
      `trBeachBar`,
      53,
      137,
      [`lagoon-house-c`],
      `Coconut Jack's beach bar`,
    ),
    f(
      `D`,
      `trDive`,
      44,
      115,
      [`lagoon-store`],
      `Blue Hole Divers in place of the lagoon store`,
    ),
    f(
      `E`,
      `miPrefabOffice`,
      167,
      24,
      [`urban-3`],
      `Building 214 Administration as the fuel farm office`,
    ),
  ]);
function m(e) {
  return p.some((t) =>
    t.replaces.some((t) => e === t || e.startsWith(t + `-`)),
  );
}
