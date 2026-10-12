// assets__gamemodes-Lk9D-0V6 01 — match
// Lines 1-283 of readable/assets__gamemodes-Lk9D-0V6.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  Dn as e,
  En as t,
  F as n,
  K as r,
  Lt as i,
  Mn as a,
  R as o,
  Rt as s,
  U as c,
  Ut as l,
  V as u,
  an as d,
  en as f,
  et as p,
  ft as m,
  gt as h,
  lt as g,
  mn as _,
  ot as v,
  z as y,
  zn as b,
  zt as x,
} from "./graphics-quality-BsjABS0s.js";
import { d as S, i as C, n as w } from "./sim-Dw8jCQAI.js";
var T = [14064186, 4424132],
  E = 13156778;
function D(e, t = 0, n = 1) {
  return e < t ? t : e > n ? n : e;
}
function O(e) {
  return e === 0 || e === 1 ? T[e] : E;
}
var k = {
  name: `gamemodes`,
  deps: [`netcode`, `ui`],
  init(e) {
    let t = (this._st = {
      root: new g(),
      visuals: new Map(),
      objectiveKey: ``,
      elapsed: 0,
      showcase: null,
      disposed: !1,
    });
    ((t.root.name = `gamemodes-objectives`), e.scene.add(t.root));
    let n = () => {
      e.world.match.ticketCapacity = null;
    };
    (n(), e.events.on(`net:connected`, n), e.events.on(`net:disconnected`, n));
    let r = () => {
      ((e.world.match.squads = []), (e.world.match.squadsOff = !1));
    };
    (e.events.on(`net:connected`, r),
      e.events.on(`net:disconnected`, r),
      e.events.on(`squad:state`, (t) => {
        ((e.world.match.squads = t?.squads ?? []),
          (e.world.match.squadCapacity = t?.capacity ?? 8),
          (e.world.match.squadTeam = t?.team),
          (e.world.match.squadsOff = !!t?.off));
      }),
      e.events.on(`match:state`, (t) => j(e.world, t)),
      e.events.on(`rush:message`, (t) => {
        if (!t?.title) return;
        let n = e.modules.get(`player`)?.getLocalEntity?.()?.team,
          r =
            n === t.attackers
              ? t.attack
              : n === 1 - t.attackers
                ? t.defend
                : ``;
        e.events.emit(`ui:message`, {
          kind: `kill`,
          text: r ? `${t.title} · ${r}` : t.title,
          ttl: 5,
        });
      }),
      e.events.on(`ffa:message`, (t) => {
        t?.title &&
          e.events.emit(`ui:message`, {
            kind: `kill`,
            text: t.text ? `${t.title} · ${t.text}` : t.title,
            ttl: 5,
          });
      }),
      e.events.on(`objective:changed`, (t) => M(e.world, t)),
      e.events.on(`match:tickets`, (t) => {
        (t?.team === 0 || t?.team === 1) &&
          (e.world.teams[t.team].tickets = Math.max(0, t.tickets | 0));
      }),
      e.events.on(`match:clock`, (t) => {
        Number.isFinite(+t?.timeLeft) &&
          (e.world.match.timeLeft = Math.max(0, +t.timeLeft));
      }),
      e.events.on(`match:phase`, (t) => {
        t?.phase &&
          ((e.world.match.phase = t.phase),
          Number.isFinite(+t.timeLeft) &&
            (e.world.match.timeLeft = Math.max(0, +t.timeLeft)),
          (t.winner === -1 || t.winner === 0 || t.winner === 1) &&
            (e.world.match.winner = t.winner),
          Number.isFinite(t.winnerPlayer) &&
            (e.world.match.winnerPlayer = t.winnerPlayer));
      }),
      e.events.on(`ui:spawnRequest`, (t) => {
        e.modules.get(`netcode`)?.sendRpc?.(`spawn`, {
          objectiveId: t?.objectiveId ?? null,
          team: t?.team,
          loadout: t?.loadout,
        });
      }),
      Object.assign(this.api, A(e, t)));
  },
  tick(e, t) {
    let n = this._st;
    n &&
      ((n.elapsed += t),
      n.showcase
        ? V(e, n, t)
        : e.world.match.phase === `live` &&
          e.world.match.timeLeft > 0 &&
          !S(e.world.match.timeLeft) &&
          (e.world.match.timeLeft = Math.max(0, e.world.match.timeLeft - t)));
  },
  update(e) {
    let t = this._st;
    t && (P(e, t), R(e, t), t.showcase && U(e, t));
  },
  showcase(e, t = {}) {
    let n = this._st;
    n &&
      (e.debugGround(720),
      e.scene.traverse((e) => {
        (e.isGridHelper || e.type === `GridHelper`) && (e.visible = !1);
      }),
      (n.showcase = B(e, n, t)),
      e.setCameraFocus([0, 1.8, 0]),
      e.registerCameraPreset(`close5`, (e) => {
        (e.position.set(9, 3.1, 10),
          e.lookAt(-8, 1.35, 0),
          (e.fov = 58),
          e.updateProjectionMatrix());
      }),
      e.registerCameraPreset(`mid50`, (e) => {
        (e.position.set(35, 14, 44),
          e.lookAt(0, 1.8, 0),
          (e.fov = 59),
          e.updateProjectionMatrix());
      }),
      e.registerCameraPreset(`far300`, (e) => {
        (e.position.set(200, 72, 220),
          e.lookAt(0, 2.2, 0),
          (e.fov = 54),
          e.updateProjectionMatrix());
      }),
      G(e, t.tod ?? e.world.time.tod),
      e.events.on(`env:timeOfDay`, ({ tod: t }) => G(e, t)));
  },
  dispose(e) {
    let t = this._st;
    if (t) {
      t.showcase?.dispose?.();
      for (let e of t.visuals.values()) z(e);
      (t.visuals.clear(), e.scene.remove(t.root), (this._st = null));
    }
  },
  api: {
    Conquest: w,
    getObjectives() {
      return [];
    },
    getPhase() {
      return `warmup`;
    },
    requestSpawn() {
      return -1;
    },
  },
};
function A(e) {
  return {
    Conquest: w,
    getObjectives() {
      return e.world.match.objectives;
    },
    getPhase() {
      return e.world.match.phase;
    },
    requestSpawn(t = null, n = null, r = 0) {
      return (
        e.modules
          .get(`netcode`)
          ?.sendRpc?.(`spawn`, { objectiveId: t, team: n, kit: r }) ?? -1
      );
    },
  };
}
function j(e, t) {
  if (t) {
    if (
      ((e.match.ticketCapacity =
        Number.isFinite(t.ticketCapacity) && t.ticketCapacity > 0
          ? t.ticketCapacity
          : null),
      t.mode && (e.match.mode = t.mode),
      t.phase && (e.match.phase = t.phase),
      Number.isFinite(+t.timeLeft) &&
        (e.match.timeLeft = Math.max(0, +t.timeLeft)),
      (t.winner === -1 || t.winner === 0 || t.winner === 1) &&
        (e.match.winner = t.winner),
      Array.isArray(t.tickets))
    )
      for (let n = 0; n < 2; n++)
        e.teams[n] &&
          Number.isFinite(+t.tickets[n]) &&
          (e.teams[n].tickets = Math.max(0, +t.tickets[n]));
    Array.isArray(t.objectives) &&
      (e.match.objectives = t.objectives.map((e) => ({
        ...e,
        pos: [...e.pos],
      })));
    for (let n of [
      `attackers`,
      `zone`,
      `zones`,
      `zoneName`,
      `killLimit`,
      `winnerPlayer`,
      `leader`,
    ])
      t[n] != null && (e.match[n] = t[n]);
    Array.isArray(t.homeBases) &&
      t.homeBases.length === 2 &&
      (e.map.homeBases = t.homeBases.map((e) => ({ ...e, pos: [...e.pos] })));
  }
}
function M(e, t) {
  if (!t) return;
  let n = e.match.objectives.find((e) => e.id === t.objectiveId);
  if (n)
    for (let e of [
      `team`,
      `progress`,
      `progressTeam`,
      `contested`,
      `spawnable`,
      `state`,
    ])
      t[e] != null && (n[e] = t[e]);
}
function N(e, t) {
  let n = e.modules.get(`demo`)?.getDefinition?.(),
    r = n?.objectives?.find?.((e) => e?.id === t.id);
  return {
    flag: n?.objectiveStyle === `flag`,
    mapDrawn: (t.visual ?? r?.visual) === `map`,
  };
}
function P(e, t) {
  let n = e.world.match.objectives ?? [],
    r = n.map((t) => N(e, t)),
    i = n
      .map(
        (e, t) =>
          `${e.id}:${e.pos?.join(`,`)}:${e.radius}:${r[t].flag ? `f` : ``}${r[t].mapDrawn ? `m` : ``}`,
      )
      .join(`|`);
  if (i === t.objectiveKey) return;
  t.objectiveKey = i;
  let a = new Map(n.map((e, t) => [e.id, r[t]]));
  for (let [e, n] of t.visuals) {
    let r = a.get(e);
    (!r || r.mapDrawn || r.flag !== n.flagStyle) && (z(n), t.visuals.delete(e));
  }
  n.forEach((e, n) => {
    if (r[n].mapDrawn || e.kind !== `mcom`) return;
    let i = t.visuals.get(e.id);
    (i || ((i = I(e, r[n])), t.visuals.set(e.id, i), t.root.add(i.group)),
      i.group.position.set(e.pos[0], e.pos[1], e.pos[2]));
  });
}
var F = 1.2;
