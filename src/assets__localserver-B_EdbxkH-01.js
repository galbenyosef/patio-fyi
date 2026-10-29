// assets__localserver-B_EdbxkH 01 — bots
// Lines 1-33 of readable/assets__localserver-B_EdbxkH.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { a as e, t } from "./index-D8RniaPa.js";
import { createMatch as n } from "./match-Bz3MNwbv.js";
async function r(r, { log: i = console } = {}) {
  let a = await n({
      seed: r.seed,
      mapId: r.map,
      mode: r.mode,
      bots: r.bots ?? 0,
      log: i,
      local: !0,
      expandedDemolition: !!r.offline,
      urban: !!r.urban,
      vehicles: !!r.vehicles,
      sky: r.sky,
      roofLinks: r.roofLinks !== !1,
      ...Object.fromEntries(t.map((e) => [e, !!r[e]])),
    }),
    [o, s] = e();
  return (
    a.addClient(s, { name: `local` }),
    {
      match: a,
      transport: o,
      tick(e) {
        a.tick(e);
      },
      dispose() {
        (a.dispose(), o.close());
      },
    }
  );
}
