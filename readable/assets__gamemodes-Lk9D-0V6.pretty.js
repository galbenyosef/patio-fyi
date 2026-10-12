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
function I(e, t = {}) {
  let i = new g();
  i.name = `objective-${e.id}`;
  let o = !!t.flag,
    c = null,
    d = null,
    p = null,
    m = null;
  o ||
    ((p = new x({
      color: E,
      transparent: !0,
      opacity: 0.08,
      depthWrite: !1,
      polygonOffset: !0,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
      side: 2,
    })),
    (c = new s(new u(e.radius, 48), p)),
    (c.rotation.x = -Math.PI / 2),
    (c.position.y = 0.09),
    i.add(c),
    (m = new l({
      color: E,
      emissive: 1446669,
      emissiveIntensity: 0.25,
      roughness: 0.65,
      metalness: 0.12,
    })),
    (d = new s(new a(e.radius, 0.16, 5, 64), m)),
    (d.rotation.x = Math.PI / 2),
    (d.position.y = 0.08),
    (d.castShadow = !0),
    i.add(d));
  let h = new s(
    new r(0.72, 0.92, 0.24, 8),
    new l({ color: 5659216, roughness: 0.92, flatShading: !0 }),
  );
  ((h.position.y = 0.12), (h.castShadow = h.receiveShadow = !0), i.add(h));
  let _ = new s(
    new r(0.055, 0.075, 7.2, 8),
    new l({
      color: 5066829,
      roughness: 0.42,
      metalness: 0.55,
      flatShading: !0,
    }),
  );
  ((_.position.y = 3.72), (_.castShadow = !0), i.add(_));
  let v = new f(2.8, 1.35, 8, 2);
  v.translate(1.4, 0, 0);
  let y = new l({ color: E, side: 2, roughness: 0.88, flatShading: !0 }),
    b = new s(v, y);
  (b.position.set(0.08, 6.25, 0), (b.castShadow = !0), i.add(b));
  let S = L(e.letter, e.name);
  (S.position.set(0, 7.85, 0), i.add(S));
  let C = null,
    w = null;
  if (e.kind === `mcom`) {
    ((_.visible = b.visible = h.visible = !1), (S.position.y = 2.7));
    let e = new l({
      color: 3884598,
      roughness: 0.7,
      metalness: 0.3,
      flatShading: !0,
    });
    ((C = new s(new n(0.9, 1.25, 0.55), e)),
      (C.position.y = 0.62),
      (C.castShadow = C.receiveShadow = !0),
      i.add(C));
    let t = new x({ color: 4198416 });
    ((w = new s(new n(0.22, 0.12, 0.22), t)), (w.position.y = 1.31), i.add(w));
  }
  return {
    group: i,
    zone: c,
    ring: d,
    base: h,
    pole: _,
    flag: b,
    label: S,
    mcom: C,
    lamp: w,
    flagStyle: o,
    flagBase: v.attributes.position.array.slice(),
    geometries: [
      c?.geometry,
      d?.geometry,
      h.geometry,
      _.geometry,
      b.geometry,
    ].filter(Boolean),
    materials: [p, m, h.material, _.material, y].filter(Boolean),
    texture: S.material.map,
  };
}
function L(n, r) {
  let i = document.createElement(`canvas`);
  ((i.width = 512), (i.height = 256));
  let a = i.getContext(`2d`);
  (a.clearRect(0, 0, 512, 256),
    (a.fillStyle = `rgba(12,16,18,.82)`),
    a.fillRect(72, 18, 368, 188),
    (a.strokeStyle = `#e7dfc8`),
    (a.lineWidth = 6),
    a.strokeRect(72, 18, 368, 188),
    (a.fillStyle = `#f1ead8`),
    (a.font = `bold 112px Arial`),
    (a.textAlign = `center`),
    a.fillText(n, 256, 126),
    (a.font = `600 29px Arial`),
    (a.fillStyle = `#c8c1ad`),
    a.fillText(String(r).toUpperCase(), 256, 176));
  let s = new o(i);
  s.colorSpace = _;
  let c = new t(new e({ map: s, transparent: !0, depthTest: !0 }));
  return (c.scale.set(3.2, 1.6, 1), c);
}
function R(e, t) {
  for (let n of e.world.match.objectives ?? []) {
    let e = t.visuals.get(n.id);
    if (!e) continue;
    if (e.flagStyle) {
      let t = D(+n.progress || 0),
        r =
          n.team === 0 ||
          n.team === 1 ||
          n.progressTeam === 0 ||
          n.progressTeam === 1
            ? t
            : 0;
      ((e.flag.position.y = F + 5.05 * r),
        e.flag.material.color.setHex(
          n.team === 0 || n.team === 1
            ? T[n.team]
            : r > 0
              ? O(n.progressTeam)
              : E,
        ));
    } else {
      let r = K.setHex(O(n.team)),
        i = q.setHex(O(n.progressTeam));
      (n.contested
        ? e.ring.material.color.setHex(14070362)
        : e.ring.material.color.copy(r),
        e.ring.material.emissive
          .copy(i)
          .multiplyScalar(n.contested ? 0.22 : 0.08),
        e.zone.material.color.copy(i),
        (e.zone.material.opacity = n.contested
          ? 0.16 + Math.sin(t.elapsed * 7) * 0.04
          : 0.055 + D(n.progress) * 0.09));
      let a = n.contested ? 1 + Math.sin(t.elapsed * 6) * 0.012 : 1;
      (e.ring.scale.setScalar(a), e.flag.material.color.copy(r));
    }
    let r = e.flag.geometry.attributes.position,
      i = e.flagBase;
    for (let e = 0; e < r.count; e++) {
      let n = i[e * 3],
        a = i[e * 3 + 1];
      r.setXYZ(
        e,
        n,
        a + Math.sin(t.elapsed * 3.2 + n * 2.1) * 0.06 * (n / 2.8),
        Math.sin(t.elapsed * 4 + n * 1.65) * 0.12 * (n / 2.8),
      );
    }
    ((r.needsUpdate = !0),
      e.flag.geometry.computeVertexNormals(),
      e.mcom &&
        ((e.mcom.visible = e.lamp.visible = n.state !== `destroyed`),
        e.lamp.material.color.setHex(
          n.state === `armed` && Math.sin(t.elapsed * 14) > 0
            ? 16722458
            : 4198416,
        )));
  }
}
function z(e) {
  e.group.parent?.remove(e.group);
  for (let t of e.geometries) t.dispose();
  for (let t of e.materials) t.dispose();
  for (let t of [e.mcom, e.lamp])
    t && (t.geometry.dispose(), t.material.dispose());
  (e.texture?.dispose(), e.label.material.dispose());
}
function B(e, t, r) {
  let i = e.world;
  ((i.map.size = 800), (i.map.bounds = [-400, -300, 400, 300]));
  let a = C(i).map((e, t) => ({
      ...e,
      pos: [(t - 1) * 160, 0, 0],
      name: [`Signal Ridge`, `Stone Crossing`, `Orchard Line`][t],
      team: t === 0 ? 0 : t === 2 ? 1 : -1,
    })),
    o = new w({
      tickets: 40,
      warmupSeconds: 0.1,
      matchSeconds: 180,
      captureSeconds: 7,
      bleedSeconds: 3,
    });
  j(i, o.init(i, a));
  let c = e.scene.getObjectByName(`debugGround`);
  c && (c.material.color.set(6058059), (c.material.roughness = 1));
  let u = new s(
    new f(400, 18),
    new l({ color: 7367256, roughness: 1, flatShading: !0 }),
  );
  ((u.rotation.x = -Math.PI / 2),
    (u.position.y = 0.025),
    (u.receiveShadow = !0),
    e.scene.add(u));
  let d = new l({ color: 9142879, roughness: 1, flatShading: !0 }),
    p = [-10.2, 10.2].map((t) => {
      let r = new s(new n(400, 0.08, 0.25), d);
      return (r.position.set(0, 0.07, t), e.scene.add(r), r);
    }),
    m = W(e, r.seed ?? 1),
    h = H(e, 16),
    g = [];
  for (let e = 0; e < 16; e++) {
    let t = e < 8 ? 0 : 1,
      n = e % 8,
      r = t === 0 ? -1 : 1,
      a =
        n < 2
          ? r * (154 + n * 3)
          : n < 6
            ? r * (13 + (n - 2) * 0.8)
            : r * (62 + (n - 6) * 4),
      o = (n - 3.5) * 2.4,
      s = i.spawn(`soldier`, {
        pos: [a, 0, o],
        team: t,
        owner: e + 1,
        hp: 100,
        maxHp: 100,
        state: 0,
        yaw: t === 0 ? -Math.PI / 2 : Math.PI / 2,
      });
    (i.players.set(e + 1, {
      id: e + 1,
      name: `Rifle ${e + 1}`,
      team: t,
      entityId: s.id,
      isBot: !0,
      ping: 0,
      kills: 0,
      deaths: 0,
      score: 0,
    }),
      (s.ext.gm = { lane: n, originX: a }),
      g.push(s.id));
  }
  return (
    e.events.emit(`player:local`, { entityId: g[2], playerId: 3 }),
    e.events.emit(`ui:ammo`, {
      mag: 30,
      reserve: 120,
      magSize: 30,
      mode: `AUTO`,
      name: `Rook AR`,
      reloading: !1,
    }),
    {
      rules: o,
      road: u,
      edges: p,
      props: m,
      soldiers: h,
      spawned: g,
      time: 0,
      dispose() {
        for (let e of g) i.get(e) && i.despawn(e);
        for (let t of [u, ...p, ...m, ...h.meshes])
          (e.scene.remove(t), t.geometry.dispose(), t.material.dispose());
        i.players.clear();
      },
    }
  );
}
function V(e, t, n) {
  let r = t.showcase;
  r.time += n;
  let i = r.time % 32;
  for (let t of r.spawned) {
    let a = e.world.get(t);
    if (!a) continue;
    let o = a.ext.gm.lane,
      s = a.team === 0 ? -1 : 1,
      c;
    c =
      o < 2
        ? s * 160
        : o < 6
          ? i < 10
            ? s * 18
            : i < 19
              ? a.team === 0
                ? 2
                : 52
              : i < 27
                ? a.team === 0
                  ? 4
                  : 110
                : s * 160
          : -s * 55;
    let l = c - a.pos[0],
      u = Math.abs(l) > 1 ? (o >= 6 ? 5.6 : 5.2) : 0;
    ((a.vel[0] = Math.sign(l) * u),
      (a.pos[0] += a.vel[0] * n),
      (a.pos[2] =
        (o - 3.5) * 2.4 + Math.sin(r.time * 0.7 + t) * (o >= 6 ? 7 : 0.6)),
      (a.yaw =
        a.vel[0] > 0 ? -Math.PI / 2 : a.vel[0] < 0 ? Math.PI / 2 : a.yaw));
  }
  for (let t of r.rules.tick(e.world, n)) e.events.emit(t.name, t.data);
}
function H(e, t) {
  let r = new y(0.25, 0.76, 2, 6);
  r.translate(0, 1.02, 0);
  let i = new m(0.18, 1);
  i.translate(0, 1.64, 0);
  let a = new n(0.09, 0.11, 0.9);
  a.translate(0.23, 1.18, -0.34);
  let o = new h(
      r,
      new l({ color: 16777215, roughness: 0.92, flatShading: !0 }),
      t,
    ),
    s = new h(i, new l({ color: 12095856, roughness: 1, flatShading: !0 }), t),
    c = new h(
      a,
      new l({
        color: 2632231,
        roughness: 0.72,
        metalness: 0.18,
        flatShading: !0,
      }),
      t,
    );
  for (let t of [o, s, c])
    ((t.castShadow = !0), (t.receiveShadow = !0), e.scene.add(t));
  return { meshes: [o, s, c], body: o, head: s, rifle: c, max: t };
}
function U(e, t) {
  let n = t.showcase,
    r = J,
    i = Y,
    a = X,
    o = Z,
    s = Q,
    c = 0;
  for (let l of n.spawned) {
    let u = e.world.get(l);
    if (!u || c >= n.soldiers.max) continue;
    let d = Math.hypot(u.vel[0], u.vel[2]);
    (a.set(
      u.pos[0],
      u.pos[1] + Math.sin(t.elapsed * 10 + l) * Math.min(0.035, d * 0.008),
      u.pos[2],
    ),
      i.setFromEuler(ee.set(0, u.yaw, 0)),
      o.set(1, 1, 1),
      r.compose(a, i, o));
    for (let e of n.soldiers.meshes) e.setMatrixAt(c, r);
    (n.soldiers.body.setColorAt(
      c,
      s.set(T[u.team]).multiplyScalar(0.9 + (l % 3) * 0.06),
    ),
      c++);
  }
  for (let e of n.soldiers.meshes)
    ((e.count = c), (e.instanceMatrix.needsUpdate = !0));
  n.soldiers.body.instanceColor.needsUpdate = !0;
}
function W(e, t) {
  let r = new n(1.5, 0.65, 0.75),
    a = new l({ color: 9273436, roughness: 1, flatShading: !0 }),
    o = new h(r, a, 42);
  o.castShadow = o.receiveShadow = !0;
  let s = new i(),
    c = new d(),
    u = new b(),
    f = new b(1, 1, 1),
    p = 0;
  for (let e = -1; e <= 1; e++)
    for (let n = 0; n < 14; n++) {
      let r = (n / 14) * Math.PI * 2 + e * 0.7 + t * 0.01,
        i = 17 + (n % 2) * 2;
      (u.set(
        e * 160 + Math.cos(r) * i,
        0.34 + (n % 3 == 0 ? 0.34 : 0),
        Math.sin(r) * i,
      ),
        c.setFromAxisAngle($, -r),
        s.compose(u, c, f),
        o.setMatrixAt(p++, s));
    }
  e.scene.add(o);
  let m = new h(
    new n(1.5, 1.2, 1.5),
    new l({ color: 7298109, roughness: 0.95, flatShading: !0 }),
    18,
  );
  for (let e = 0; e < 18; e++) {
    let t = (e % 3) - 1,
      n = e % 2 ? 1 : -1;
    (u.set(t * 160 + n * (23 + (e % 4) * 2), 0.6, ((e % 6) - 2.5) * 4.1),
      c.setFromAxisAngle($, e * 0.71),
      s.compose(u, c, f),
      m.setMatrixAt(e, s));
  }
  return ((m.castShadow = m.receiveShadow = !0), e.scene.add(m), [o, m]);
}
function G(e, t) {
  let n = ((t % 24) + 24) % 24,
    r = D(Math.sin(((n - 6) / 12) * Math.PI) * 0.8 + 0.25),
    i = e.scene.getObjectByName(`debugSun`);
  (i &&
    (i.color.set(r > 0.35 ? 16770757 : 10402029),
    (i.intensity = 0.75 + r * 2.3),
    i.position.set(
      Math.cos((n / 24) * Math.PI * 2) * 180,
      35 + r * 120,
      Math.sin((n / 24) * Math.PI * 2) * 180,
    )),
    e.scene.traverse((e) => {
      e.isHemisphereLight &&
        (e.color.set(r > 0.25 ? 12178413 : 9546720),
        e.groundColor.set(r > 0.25 ? 5134652 : 3557218),
        (e.intensity = 1.75 - r * 0.35));
    }));
  let a = e.scene.getObjectByName(`debugGround`);
  (a?.material?.emissive &&
    (a.material.emissive.set(r > 0.2 ? 0 : 1582653),
    (a.material.emissiveIntensity = r > 0.2 ? 0 : 0.55)),
    (e.scene.background = new c(2439776).lerp(new c(8890309), r)),
    (e.scene.fog = new v(new c(4215924).lerp(new c(11124167), r), 0.00105)),
    (e.renderer.shadowMap.type = 1));
}
var K = new c(),
  q = new c(),
  J = new i(),
  Y = new d(),
  X = new b(),
  Z = new b(),
  Q = new c(),
  ee = new p(),
  $ = new b(0, 1, 0);
export { k as default };
//# sourceMappingURL=gamemodes-Lk9D-0V6.js.map
