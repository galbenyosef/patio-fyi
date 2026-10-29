// assets__gamemodes-CXbD6WoW 01 — world
// Lines 1-337 of readable/assets__gamemodes-CXbD6WoW.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  An as e,
  B as t,
  Bt as n,
  F as r,
  Fn as i,
  Gt as a,
  H as o,
  Hn as s,
  I as c,
  L as l,
  Vt as u,
  W as d,
  _n as f,
  bn as p,
  cn as m,
  ct as h,
  dt as g,
  in as _,
  kn as v,
  mt as y,
  nn as b,
  nt as x,
  q as S,
  vt as C,
  z as w,
  zt as T,
} from "./graphics-quality-CrL3qbU3.js";
import { d as ee, i as E, n as D } from "./sim-B3m5a-qv.js";
var O = 70,
  k = 25,
  A = 14,
  j = 4,
  M = null;
function N() {
  if (M) return M;
  let e = document.createElement(`canvas`);
  e.width = e.height = 64;
  let t = e.getContext(`2d`),
    n = t.createRadialGradient(32, 32, 0, 32, 32, 32);
  return (
    n.addColorStop(0, `rgba(255,255,255,1)`),
    n.addColorStop(0.45, `rgba(255,255,255,.55)`),
    n.addColorStop(1, `rgba(255,255,255,0)`),
    (t.fillStyle = n),
    t.fillRect(0, 0, 64, 64),
    (M = new w(e)),
    M
  );
}
var P = `attribute float size;attribute float alpha;varying float vA;uniform float scale;
void main(){vA=alpha;vec4 mv=modelViewMatrix*vec4(position,1.);gl_PointSize=size*scale/max(1.,-mv.z);gl_Position=projectionMatrix*mv;}`,
  te = `uniform sampler2D map;uniform vec3 color;varying float vA;
void main(){vec4 t=texture2D(map,gl_PointCoord);if(t.a*vA<.01)discard;gl_FragColor=vec4(color*(.75+.25*t.r),t.a*vA);}`;
function ne(e) {
  let t = [];
  function n(n, i, a = 1) {
    for (; t.length >= j;) r(t.shift());
    let o = new l(),
      s = new Float32Array(210),
      u = new Float32Array(O),
      f = new Float32Array(O);
    (o.setAttribute(`position`, new c(s, 3)),
      o.setAttribute(`size`, new c(u, 1)),
      o.setAttribute(`alpha`, new c(f, 1)));
    let m = new p({
        vertexShader: P,
        fragmentShader: te,
        transparent: !0,
        depthWrite: !1,
        uniforms: {
          map: { value: N() },
          color: { value: new d(i) },
          scale: { value: 900 },
        },
      }),
      h = new _(o, m);
    ((h.frustumCulled = !1), (h.renderOrder = 2), e.add(h));
    let g = (a * 2654435761) >>> 0 || 1,
      v = () => (g = (Math.imul(g, 1664525) + 1013904223) >>> 0) / 4294967296,
      y = Array.from({ length: O }, (e, t) => ({
        born: (t / O) * A + v() * 0.2,
        rise: 2.2 + v() * 1.6,
        spin: v() * Math.PI * 2,
        out: 0.6 + v() * 1.4,
        grow: 0.8 + v() * 0.5,
      }));
    t.push({ pts: h, geo: o, mat: m, puffs: y, pos: n.slice(), t: 0 });
  }
  function r(t) {
    (e.remove(t.pts), t.geo.dispose(), t.mat.dispose());
  }
  function i(e) {
    for (let n = t.length - 1; n >= 0; n--) {
      let i = t[n];
      if (((i.t += Math.min(e || 0, 0.1)), i.t > 27.8)) {
        (r(i), t.splice(n, 1));
        continue;
      }
      let a = i.geo.attributes.position.array,
        o = i.geo.attributes.size.array,
        s = i.geo.attributes.alpha.array;
      (i.puffs.forEach((e, t) => {
        let n = i.t - e.born;
        if (n < 0 || n > k - e.born * 0.4) {
          s[t] = 0;
          return;
        }
        let r = n / (k - e.born * 0.4),
          c = e.rise * n * (1 - r * 0.35),
          l = Math.min(1, Math.max(0, (c - 3) / 4)),
          u = e.out * (0.12 + c * 0.18) * (0.3 + 0.7 * l);
        ((a[t * 3] = i.pos[0] + Math.cos(e.spin + n * 0.3) * u + c * 0.22),
          (a[t * 3 + 1] = i.pos[1] + 0.4 + c),
          (a[t * 3 + 2] = i.pos[2] + Math.sin(e.spin + n * 0.3) * u + c * 0.08),
          (o[t] = (0.5 + 0.9 * l + c * 0.45) * e.grow),
          (s[t] =
            Math.min(1, n * 3) * (1 - r) * (1 - r) * 0.85 * (0.12 + 0.88 * l)));
      }),
        (i.geo.attributes.position.needsUpdate =
          i.geo.attributes.size.needsUpdate =
          i.geo.attributes.alpha.needsUpdate =
            !0));
    }
  }
  return {
    pop: n,
    update: i,
    get count() {
      return t.length;
    },
    dispose() {
      (t.forEach(r), (t.length = 0));
    },
  };
}
var F = [14064186, 4424132],
  I = 13156778;
function L(e, t = 0, n = 1) {
  return e < t ? t : e > n ? n : e;
}
function R(e) {
  return e === 0 || e === 1 ? F[e] : I;
}
var z = {
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
    ((t.root.name = `gamemodes-objectives`),
      e.scene.add(t.root),
      (t.smoke = ne(e.scene)),
      (t.owners = new Map()),
      e.events.on(`net:connected`, () => t.owners.clear()),
      e.events.on(`objective:changed`, (n) => {
        let r = n?.objectiveId;
        if (
          r == null ||
          (n.team !== 0 && n.team !== 1) ||
          (n.progress != null && n.progress < 1)
        )
          return;
        let i = t.owners.get(r);
        if ((t.owners.set(r, n.team), i === void 0 || i === n.team)) return;
        let a = e.world.match.objectives?.find((e) => e.id === r);
        a?.pos &&
          t.smoke.pop(
            e.world.map?.signalAt?.(a) ?? a.pos,
            e.world.teams?.[n.team]?.color ?? F[n.team],
            r.length * 7 + n.team,
          );
      }),
      e.events.on(`match:state`, (e) => {
        t.owners.clear();
        for (let n of e?.objectives ?? [])
          n?.id != null && t.owners.set(n.id, n.team);
      }));
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
      e.events.on(`match:state`, (t) => V(e.world, t)),
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
      e.events.on(`objective:changed`, (t) => H(e.world, t)),
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
      Object.assign(this.api, B(e, t)));
  },
  tick(e, t) {
    let n = this._st;
    n &&
      ((n.elapsed += t),
      n.showcase
        ? re(e, n, t)
        : e.world.match.phase === `live` &&
          e.world.match.timeLeft > 0 &&
          !ee(e.world.match.timeLeft) &&
          (e.world.match.timeLeft = Math.max(0, e.world.match.timeLeft - t)));
  },
  update(e, t) {
    let n = this._st;
    n &&
      (n.smoke?.update(t ?? 1 / 60), W(e, n), J(e, n), n.showcase && ae(e, n));
  },
  showcase(e, t = {}) {
    let n = this._st;
    n &&
      (e.debugGround(720),
      e.scene.traverse((e) => {
        (e.isGridHelper || e.type === `GridHelper`) && (e.visible = !1);
      }),
      (n.showcase = X(e, n, t)),
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
      Z(e, t.tod ?? e.world.time.tod),
      e.events.on(`env:timeOfDay`, ({ tod: t }) => Z(e, t)));
  },
  dispose(e) {
    let t = this._st;
    if (t) {
      (t.showcase?.dispose?.(), t.smoke?.dispose());
      for (let e of t.visuals.values()) Y(e);
      (t.visuals.clear(), e.scene.remove(t.root), (this._st = null));
    }
  },
  api: {
    Conquest: D,
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
function B(e) {
  return {
    Conquest: D,
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
