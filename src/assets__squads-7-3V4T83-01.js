// assets__squads-7-3V4T83 01 — floor
// Lines 1-42 of readable/assets__squads-7-3V4T83.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { Jn as e } from "./graphics-quality-CrL3qbU3.js";
import { r as t } from "./index-D8RniaPa.js";
var n = Object.freeze({
    follow: 25,
    gather: 50,
    objective: 100,
    lead: 50,
    leadPer: 10,
  }),
  r = 3600,
  i =
    `Alpha.Bravo.Charlie.Delta.Echo.Foxtrot.Golf.Hotel.India.Juliet.Kilo.Lima.Mike.November.Oscar.Papa.Quebec.Romeo.Sierra.Tango.Uniform.Victor.Whiskey.X-ray.Yankee.Zulu`.split(
      `.`,
    );
function a(e = {}) {
  let n = Math.floor(Number(e.teamSize) || 0);
  return n > 0 ? n : Math.floor(Number(t(e)?.teamSize) || 0);
}
var o = (e) => Math.floor(Number(t(e)?.squadSize) || 0) || 5,
  s = (e) => {
    if (Math.floor(Number(t(e)?.squadSize) || 0) > 0) return !1;
    let n = a(e);
    return n > 0 && n <= 8;
  },
  c = (e) => e?.match?.mode === `ffa` || !!e?.match?.squadsOff,
  l = (e, t) =>
    (e.match.squads ?? []).find((e) => e.members.includes(t)) ?? null,
  u = (e, t, n) => t !== n && !!l(e, t)?.members.includes(n);
function d(t, n) {
  let r = n?.order;
  if (!r) return null;
  if (r.kind === `regroup`) {
    let r = t.get(t.players.get(n.leaderId)?.entityId);
    return r?.hp > 0 && !(r.state & e.DEAD)
      ? { id: `squad-${n.id}`, pos: r.pos, radius: 10, team: n.team }
      : null;
  }
  return r.kind === `hold`
    ? { id: `squad-${n.id}`, pos: r.pos, radius: 10, team: n.team }
    : (t.match.objectives.find((e) => e.id === r.objectiveId) ?? null);
}
