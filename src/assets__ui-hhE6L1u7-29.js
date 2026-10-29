// assets__ui-hhE6L1u7 29 — appendchild
// Lines 11506-14474 of readable/assets__ui-hhE6L1u7.pretty.js (statement-aligned).
function La(e) {
  let t = e.three,
    n = e.world,
    r = e.ui || document.body,
    i = Q(`div`, `sl`),
    a = () =>
      n.match?.homeBases?.length === 2
        ? n.match.homeBases
        : e.modules.get(`demo`)?.getDefinition?.()?.homeBases;
  r.appendChild(i);
  let o = e.config.frost ? la(e, i) : null,
    s = r.clientWidth || window.innerWidth,
    c = r.clientHeight || window.innerHeight,
    u = {
      localId: -1,
      localPlayerId: -1,
      allyTeam: 0,
      dead: !1,
      deadSince: 0,
      absentSince: 0,
      spread: 8,
      spreadTarget: 8,
      spreadOverride: null,
      spreadOverrideT: 0,
      hipGap: 0,
      hipOn: va(),
      hpSeen: -1,
      hitAt: -1e9,
      ammo: {
        mag: 30,
        reserve: 120,
        magSize: 30,
        mode: `AUTO`,
        name: `RIFLE`,
        reloading: !1,
        reloadT: 0,
        reloadDur: 2.2,
        override: null,
        overrideT: 0,
      },
      hm: { t: 0, hs: !1, kill: !1 },
      dmg: [],
      feed: [],
      playersUntil: 5,
      msgs: [],
      msgQ: [],
      toasts: [],
      dmgOut: new Map(),
      pendingDeaths: [],
      net: null,
      netT: 0,
      rttHist: [],
      vis: Object.fromEntries(Oa.map((e) => [e, !0])),
      scoreHeld: !1,
      scoreForced: !1,
      spawnForced: null,
      spawn: {
        team: 0,
        objective: null,
        kit: 0,
        requestedAt: -1e9,
        auto: null,
        deathPos: null,
      },
      t: 0,
      lastScoreBuild: -1,
      lastSpawnBuild: -1,
      lastModBuild: -1,
      lastMatch: -1,
      camYaw: 0,
      camPitch: 0,
    },
    d = () => (Array.isArray(n?.teams) ? n.teams : []),
    f = (e) => (d()[e] && d()[e].color) || `#ECEAE3`,
    p = (e) =>
      (d()[e] && d()[e].name) ||
      (e === 0 ? `Team A` : e === 1 ? `Team B` : `Neutral`),
    m = `salient.classes.v1`,
    h = {};
  try {
    h = JSON.parse(localStorage.getItem(m)) ?? {};
  } catch {}
  let g = Object.fromEntries(
      mt.map((e) => [e.id, ut({ ...h[e.id], classId: e.id })]),
    ),
    _ = mt.some(
      (e) =>
        h[e.id]?.weapons &&
        h[e.id].weapons.some((t, n) => t !== g[e.id].weapons[n]),
    ),
    v = [],
    y = [],
    b = [],
    x = -1,
    S = (e) =>
      e.eligible ||
      (e.playerId !== u.localPlayerId &&
        !!e.reason &&
        e.reason !== `Deploying` &&
        e.reason !== `Not in your squad`),
    C = () =>
      v.find(
        (e) =>
          `teammate:${e.playerId}` === u.spawn.objective &&
          x === u.spawn.team &&
          S(e),
      ),
    w = null,
    T = [],
    E = -1,
    D = -1,
    O = null,
    k = () => (
      (E !== u.t || D !== u.spawn.team || O !== w) &&
        ((E = u.t),
        (D = u.spawn.team),
        (O = w),
        (T = Wn(n, u.localPlayerId, u.spawn.team, w))),
      T
    ),
    A = () => k().find((e) => e.spawnId === u.spawn.objective),
    j = () => k().find((e) => e.owner === u.localPlayerId && !e.reason),
    M = () =>
      k().map((e) => ({
        id: e.spawnId,
        kind: `beacon`,
        pos: e.pos,
        team: e.team,
        letter: `BCN`,
        name: e.label,
        reason: e.reason,
      })),
    N = (e) => {
      let t = (
        zt.own()?.members.filter((e) => e !== u.localPlayerId) ?? []
      ).indexOf(e);
      return t < 0 ? null : t + 1;
    },
    P = () => g[mt[u.spawn.kit]?.id ?? mt[0].id],
    F = `salient.class.last`;
  try {
    let e = mt.findIndex((e) => e.id === localStorage.getItem(F));
    e >= 0 && (u.spawn.kit = e);
  } catch {}
  let ee = (e) => {
      if (mt[e]) {
        u.spawn.kit = e;
        try {
          localStorage.setItem(F, mt[e].id);
        } catch {}
      }
    },
    te = () => {
      try {
        localStorage.setItem(m, JSON.stringify(g));
      } catch {
        e.events.emit(`ui:message`, {
          kind: `warn`,
          text: `Loadout works this session; browser storage unavailable.`,
          ttl: 4,
        });
      }
    };
  i.appendChild(Q(`div`, `sl-vig`));
  let I = ga(e, i.appendChild(Q(`div`, `sl-dmg`))),
    ne = i.appendChild(Q(`div`, `sl-dead`)),
    L = i.appendChild(Q(`div`, `sl-centre`)),
    R = L.appendChild(Q(`div`, `sl-xh`));
  for (let e of [`u`, `d`, `l`, `r`, `dot`]) R.appendChild(Q(`i`, e));
  let z = L.appendChild(Q(`div`, `sl-hm`));
  for (let e = 0; e < 4; e++) z.appendChild(Q(`i`));
  let re = [];
  for (let e = 0; e < 6; e++) re.push(L.appendChild(Q(`div`, `sl-di`)));
  let ie = i.appendChild(Q(`div`, `sl-lane`)),
    ae = i.appendChild(Q(`div`, `sl-msgs`)),
    oe = i.appendChild(Q(`div`, `sl-top`)),
    se = ja(oe.appendChild(Q(`div`, `sl-fill dark sl-compass sl-banner`))),
    ce = se.appendChild(Q(`div`, `tx`)),
    B = ``,
    le = (e) => {
      ((B = typeof e == `string` ? e.trim().slice(0, 120) : ``),
        (ce.textContent = B),
        se.classList.toggle(`empty`, !B));
    };
  le(``);
  let V = oe.appendChild(Q(`div`, `sl-bare sl-match`)),
    ue = (e) => {
      let t = Q(`div`, `tm${e === 1 ? ` r` : ``}`);
      return {
        el: t,
        n: t.appendChild(Q(`span`, `n`, ``)),
        v: t.appendChild(Q(`span`, `v`, ``)),
        fill: t.appendChild(Q(`div`, `bar`)).appendChild(Q(`i`)),
      };
    },
    de = ue(0);
  V.appendChild(de.el);
  let fe = V.appendChild(Q(`div`, `clock`)),
    pe = fe.appendChild(Q(`div`, `v`, `0:00`)),
    me = fe.appendChild(Q(`div`, `p`, `Warm-up`)),
    he = ue(1);
  V.appendChild(he.el);
  let H = ``,
    ge = oe.appendChild(Q(`div`, `sl-objs`)),
    _e = [],
    ve = oe.appendChild(Q(`div`, `sl-onpt`));
  ve.appendChild(Q(`i`, `r`));
  let ye = ve.appendChild(Q(`b`, ``, ``)),
    be = { id: null, key: `` },
    we = i.appendChild(Q(`div`, `sl-mkl`)),
    Te = [],
    Ee = i.appendChild(Q(`div`, `sl-feed`)),
    De = i.appendChild(Q(`div`, `sl-bare sl-players`)),
    Oe = De.appendChild(Q(`div`, `v`, `0`));
  De.appendChild(Q(`div`, `n`, `Players online`));
  let ke = -1,
    Ae = i.appendChild(Q(`div`, `sl-bare sl-fps`)),
    je = Ae.appendChild(Q(`b`, ``, `—`));
  Ae.appendChild(Q(`span`, ``, `FPS`));
  let Me = i.appendChild(Q(`div`, `sl-bare sl-fps sl-ms`)),
    Ne = Me.appendChild(Q(`b`, ``, `—`));
  (Me.appendChild(Q(`span`, ``, `MS`)), (Me.hidden = !0));
  let Pe = -1,
    Fe = -2,
    Ie = ja(i.appendChild(Q(`div`, `sl-fill sl-panel sl-map`))),
    Le = Rn(Ie.appendChild(Q(`canvas`)), {
      size: Aa.map,
      dpr: window.devicePixelRatio || 1,
    }),
    Re = Ie.appendChild(Q(`div`, `r`, `45 M`)),
    ze = Ie.appendChild(Q(`div`, `sq`, ``));
  (Ie.setAttribute(
    `aria-label`,
    `Heading-up radar. Enemy gunfire: last known position, three seconds.`,
  ),
    (Ie.title = `Enemy gunfire leaves a last-known ping for 3 seconds. Suppressors stay off radar. Arrows beside contacts indicate another floor.`));
  let Be = Vn(),
    He = 45,
    We = bn(e, i, R),
    Ge = i.appendChild(Q(`div`, `sl-bare sl-panel sl-ammo`)),
    Ke = Ge.appendChild(Q(`div`, `left`)),
    qe = Ke.appendChild(Q(`div`, `wn`, `RIFLE`)),
    Je = Ke.appendChild(Q(`div`, `fm`, `AUTO`)),
    Ye = Ge.appendChild(Q(`div`, `right`)).appendChild(Q(`div`, `nums`)),
    Xe = Ye.appendChild(Q(`div`, `magw`)),
    Ze = Xe.appendChild(Q(`div`, `mag`, `30`)),
    Qe = Xe.appendChild(Q(`div`, `ticks`)),
    $e = Xe.appendChild(Q(`div`, `rl`));
  $e.appendChild(Q(`span`, ``, `Reloading`));
  let et = $e.appendChild(Q(`div`, `b`)).appendChild(Q(`i`)),
    tt = Ye.appendChild(Q(`div`, `res`, `120`));
  Ye.style.position = `relative`;
  let nt = Zt(Ye, { style: `right:0;top:0` }),
    it = -1,
    at = i.appendChild(Q(`div`, `sl-scrim`)),
    ot = ja(i.appendChild(Q(`div`, `sl-score`)));
  ot.hidden = !0;
  let st = i.appendChild(Q(`div`, `sl-spawn`));
  st.hidden = !0;
  let ct = ja(st.appendChild(Q(`div`, `in`))),
    lt = `deploy`,
    dt = !1,
    U = null,
    ft = ct.appendChild(Q(`header`, `spawn-head`)),
    pt = ft.appendChild(Q(`nav`, `deployment-tabs`));
  pt.setAttribute(`aria-label`, `Deployment menu`);
  let ht = [`deploy`, `loadout`, `unlocks`],
    W = ht.map((e) => {
      let t = pt.appendChild(Q(`button`, ``));
      return (
        (t.type = `button`),
        t.append(
          Q(
            `strong`,
            ``,
            { deploy: `Deploy`, loadout: `Loadout`, unlocks: `Unlocks` }[e],
          ),
          Q(
            `small`,
            ``,
            {
              deploy: `Spawn point · squad · class`,
              loadout: `Weapons · attachments · gadgets`,
              unlocks: `Ranks · camos · attachments`,
            }[e],
          ),
        ),
        (t.onclick = () => Gt(e)),
        t
      );
    }),
    G = Ri(e, ct, i, {
      onChange: (e, { ready: t = !1 } = {}) => {
        if (
          ((W[2].querySelector(`small`).textContent =
            `Level ${e.rank.level} · ${e.rank.name}`),
          U?.setRank(e),
          !t)
        )
          return;
        let n = _;
        _ = !1;
        for (let t of mt) {
          let r = g[t.id],
            i = ut(r, {
              canEquip: (t) => Ue(e, t),
              canAttach: (t, n, r) => Ve(e, t, n, r),
            });
          (i.weapons.some((e, t) => e !== r.weapons[t]) ||
            JSON.stringify(i.attachments) !==
              JSON.stringify(xe(r.attachments))) &&
            ((g[t.id] = i), (n = !0));
        }
        (n && (te(), (u.lastSpawnBuild = -1)), Lt.refresh());
      },
    }),
    gt = ft.appendChild(Q(`div`, `teams`)),
    _t = ct.appendChild(Q(`div`, `mapw`)),
    yt = _t.appendChild(Q(`canvas`)),
    bt = Rn(yt, { size: 544, dpr: window.devicePixelRatio || 1 }),
    xt = { zoom: 1, x: null, z: null },
    St = null,
    Ct = null,
    wt = !1;
  ((yt.style.touchAction = `none`),
    yt.addEventListener(`pointerdown`, (e) => {
      e.button === 0 &&
        St &&
        !Vt.active &&
        ((wt = !1),
        (Ct = {
          id: e.pointerId,
          px: e.clientX,
          py: e.clientY,
          lx: e.clientX,
          x: St.x,
          z: St.z,
          scale: St.scale,
        }),
        yt.setPointerCapture(e.pointerId));
    }),
    yt.addEventListener(`pointermove`, (e) => {
      if (!Ct || e.pointerId !== Ct.id) return;
      let t = e.clientX - Ct.px,
        n = e.clientY - Ct.py;
      (Math.hypot(t, n) > 4 && (wt = !0),
        !Vt.active &&
          wt &&
          ((xt.x = Ct.x - t / Ct.scale), (xt.z = Ct.z - n / Ct.scale)));
    }));
  let Et = () => {
    Ct = null;
  };
  (yt.addEventListener(`pointerup`, Et),
    yt.addEventListener(`pointercancel`, Et),
    yt.addEventListener(
      `wheel`,
      (e) => {
        (e.preventDefault(),
          !Vt.active &&
            (xt.zoom = Ma(xt.zoom * Math.exp(-e.deltaY * 0.001), 1, 3)));
      },
      { passive: !1 },
    ));
  let Dt = Hi(_t, (e) => {
    v.find((t) => t.playerId === e)?.eligible &&
      x === u.spawn.team &&
      ((u.spawn.objective = `teammate:${e}`), (u.lastSpawnBuild = -1));
  });
  (_t.appendChild(
    Q(`div`, `map-readout`, `Select a captured base, HQ or squadmate`),
  ),
    _t.appendChild(Q(`div`, `n`, `N`)));
  let Ot = ct.appendChild(Q(`div`, `spawn-column`)),
    kt = Ot.appendChild(Q(`div`, `side`)),
    At = kt.appendChild(Q(`div`, `sub`, ``));
  ((At.hidden = !0), kt.appendChild(Q(`div`, `sec`, `Spawn point`)));
  let jt = kt.appendChild(Q(`div`, `ol`)),
    Mt = ct.appendChild(Q(`section`, `squad-quick`)),
    Nt = ct.appendChild(Q(`section`, `class-deck`));
  Nt.appendChild(Q(`div`, `sec`, `Class · keys 1–4`));
  let Pt = Nt.appendChild(Q(`div`, `kits`)),
    Ft = ``,
    It = Ot.appendChild(Q(`div`, `foot`)),
    Lt = Si(e, ct, {
      getLoadout: P,
      getProgress: G.get,
      getTeam: () => f(u.spawn.team),
      selectClass(e) {
        (ee(mt.findIndex((t) => t.id === e)), (u.lastSpawnBuild = -1));
      },
      save() {
        (te(), (Ft = ``), (u.lastSpawnBuild = -1));
      },
      back: () => Gt(`deploy`),
    }),
    zt = Vi(e, i, ct, {
      playerId: () => u.localPlayerId,
      alive: () => {
        let e = Qt();
        return e?.hp > 0 && !(e.state & l.DEAD);
      },
      back: () => {
        (Gt(`deploy`), dt && ((dt = !1), (u.spawnForced = null)));
      },
    }),
    Bt = Ki(e, i, zt, {
      playerId: () => u.localPlayerId,
      active: () =>
        st.hidden &&
        !u.scoreHeld &&
        !u.scoreForced &&
        Qt()?.hp > 0 &&
        !(Qt()?.state & l.DEAD),
    }),
    Vt = ta(e),
    Ut = ca(e),
    Wt = new URLSearchParams(location.search).has(`flatmap`),
    K = Zi(e, { root: i, weaponName: rn, hitmarker: (e, t) => En(e, t) });
  function Gt(e) {
    ((lt = e),
      (ct.dataset.tab = e),
      (_t.hidden = e === `squads` || e === `unlocks`));
    for (let t of [Ot, Mt, Nt]) t.hidden = e !== `deploy`;
    (W.forEach((t, n) => {
      (t.classList.toggle(`selected`, ht[n] === e),
        t.setAttribute(`aria-pressed`, String(ht[n] === e)));
    }),
      Lt.show(e === `loadout`),
      G.show(e === `unlocks`),
      zt.show(e === `squads`),
      (u.lastSpawnBuild = -1));
  }
  let Kt = It.appendChild(Q(`div`, `hint`, `Space or Enter to deploy`)),
    qt = ja(It.appendChild(Q(`button`, `btn`, `Deploy`)));
  (Gt(`deploy`),
    (U = zi(ct, {
      world: n,
      thumb: (e, t) => Lt.thumb(e, t),
      classes: mt,
      open: (e) => Gt(lt === e ? `deploy` : e),
      tab: () => lt,
      visible: () => !st.hidden,
    })),
    U.setRank(G.get()),
    qt.addEventListener(`click`, () => In()),
    (window.__cubieDeploy = () => In()),
    yt.addEventListener(`click`, (e) => {
      if (wt) {
        wt = !1;
        return;
      }
      let t = yt.getBoundingClientRect(),
        n = e.clientX - t.left,
        r = e.clientY - t.top,
        i = null,
        a = 22;
      for (let e of b) {
        if (!e.pos || !e.screen || !fn(e)) continue;
        let t = Math.hypot(e.screen[0] - n, e.screen[1] - r);
        t < a && ((a = t), (i = e));
      }
      i && fn(i) && ((u.spawn.objective = i.id), (u.lastSpawnBuild = -1));
      let o = y
        .filter(
          (e) =>
            e.eligible &&
            x === u.spawn.team &&
            Math.hypot(e.screen[0] - n, e.screen[1] - r) < 28,
        )
        .sort(
          (e, t) =>
            Math.hypot(e.screen[0] - n, e.screen[1] - r) -
            Math.hypot(t.screen[0] - n, t.screen[1] - r),
        );
      if (o.length) {
        ((u.spawn.objective = `teammate:${o[0].playerId}`),
          (u.lastSpawnBuild = -1));
        return;
      }
    }));
  let Jt = ja(i.appendChild(Q(`div`, `sl-fill dark sl-panel sl-dbg`)));
  Jt.hidden = !0;
  let Yt = ja(i.appendChild(Q(`div`, `sl-fill dark sl-panel sl-dbg mods`)));
  ((Yt.hidden = !0),
    (u.vis.netstats = !1),
    (u.vis.modules = !1),
    (u.vis.scoreboard = !1),
    (u.vis.spawn = !1));
  let Xt = {
    crosshair: R,
    health: We.el,
    ammo: Ge,
    compass: se,
    match: V,
    minimap: Ie,
    markers: we,
    killfeed: Ee,
    players: De,
    messages: ae,
    scoreboard: ot,
    spawn: st,
    netstats: Jt,
    modules: Yt,
  };
  function Qt() {
    let t = e.modules?.get?.(`player`);
    if (t?.getLocalEntity)
      try {
        let e = t.getLocalEntity();
        if (e) return (e.id !== u.localId && (u.localId = e.id), e);
      } catch {}
    return u.localId >= 0 ? (n?.get?.(u.localId) ?? null) : null;
  }
  function $t() {
    if (!n?.players) return null;
    if (u.localPlayerId >= 0 && n.players.get(u.localPlayerId))
      return n.players.get(u.localPlayerId);
    if (u.localId >= 0) {
      for (let e of n.players.values()) if (e.entityId === u.localId) return e;
    }
    return null;
  }
  function en(e) {
    if (e == null || !n?.players) return null;
    let t = n.get?.(e);
    if (t) {
      if (t.owner >= 0 && n.players.get(t.owner)) return n.players.get(t.owner);
      for (let t of n.players.values()) if (t.entityId === e) return t;
    }
    return n.players.get(e) ?? null;
  }
  function tn(e, t = `Soldier`) {
    return en(e)?.name ?? t;
  }
  function nn(e) {
    let t = en(e);
    return t && t.team != null && t.team >= 0
      ? t.team
      : (n?.get?.(e)?.team ?? -1);
  }
  function rn(t) {
    if (t == null) return ``;
    if (typeof t == `string`) return t;
    if (typeof t == `object`) return t.name ?? t.id ?? ``;
    let n = e.modules?.get?.(`weapons`)?.weaponDefs;
    if (n) {
      let e = Array.isArray(n) ? (n.find((e) => e?.id === t) ?? n[t]) : n[t];
      if (e?.name) return e.name;
    }
    return `W${t}`;
  }
  function an(t) {
    let n = e.modules?.get?.(`weapons`)?.weaponDefs;
    return !n || t == null
      ? null
      : Array.isArray(n)
        ? (n.find((e) => e?.id === t) ?? n[t] ?? null)
        : (n[t] ?? null);
  }
  let on = [];
  function sn() {
    let e = n?.match?.objectives;
    if (((on.length = 0), !Array.isArray(e))) return on;
    for (let t = 0; t < e.length; t++) {
      let r = e[t];
      if (!r) continue;
      let i =
          r.letter ??
          (typeof r.id == `string` && r.id.length === 1
            ? r.id.toUpperCase()
            : String.fromCharCode(65 + t)),
        a =
          r.pos ??
          (r.entityId == null ? null : n.get?.(r.entityId)?.pos) ??
          null;
      on.push({
        id: r.id ?? t,
        letter: i,
        name: r.name ?? `Objective ${i}`,
        pos: a,
        team: r.team ?? -1,
        progress: +r.progress || 0,
        progressTeam: r.progressTeam ?? r.capturingTeam ?? -1,
        contested: !!r.contested,
        raw: r,
      });
    }
    return on;
  }
  function cn() {
    let t = e.camera;
    if (t?.getWorldDirection) {
      let e = t.getWorldDirection(ln);
      return (
        (u.camYaw = Math.atan2(-e.x, -e.z)),
        (u.camPitch = Math.asin(Ma(e.y, -1, 1))),
        u.camYaw
      );
    }
    return Qt()?.yaw ?? 0;
  }
  let ln = t ? new t.Vector3() : { x: 0, y: 0, z: -1 },
    un = t ? new t.Vector3() : null,
    dn = (e) => ((((-e * 180) / Math.PI) % 360) + 360) % 360;
  function fn(e) {
    return (
      e.team === u.spawn.team &&
      !e.contested &&
      !e.reason &&
      e.raw?.spawnable !== !1
    );
  }
  function pn(e) {
    ((u.spawn.deathPos = e?.pos ? [e.pos[0], e.pos[1], e.pos[2]] : null),
      (u.spawn.objective = null),
      (u.spawn.auto = null),
      (u.spawn.autoNoSquad = !1),
      (u.spawn.autoAt = u.t),
      (v = []),
      (x = -1));
  }
  function mn(e) {
    let t = j();
    if (t) return t.spawnId;
    let r = u.spawn.deathPos ?? Qt()?.pos ?? a()?.[u.spawn.team]?.pos,
      i = (e) =>
        !e || !r ? 0xde0b6b3a7640000 : (e[0] - r[0]) ** 2 + (e[2] - r[2]) ** 2,
      o = null,
      s = 1 / 0;
    if (x === u.spawn.team && !u.spawn.autoNoSquad)
      for (let e of v) {
        if (!e.eligible || e.playerId === u.localPlayerId) continue;
        let t = i(n?.get?.(e.entityId)?.pos);
        t < s && ((s = t), (o = `teammate:${e.playerId}`));
      }
    if (o) return o;
    for (let t of e) {
      if (!fn(t)) continue;
      let e = i(t.pos);
      e < s && ((s = e), (o = t.id));
    }
    return o ?? `hq`;
  }
  function hn() {
    let e = sn(),
      t = e.filter(fn),
      n = e.filter((e) => e.pos && (e.contested || e.team !== u.spawn.team));
    if (!t.length || !n.length) return mn(e);
    let r = null,
      i = 1 / 0;
    for (let e of t)
      for (let t of n) {
        if (t === e) continue;
        let n = (e.pos[0] - t.pos[0]) ** 2 + (e.pos[2] - t.pos[2]) ** 2;
        n < i && ((i = n), (r = e.id));
      }
    return r ?? mn(e);
  }
  function gn({ classId: e = `assault`, spawn: t = `combat` } = {}) {
    let n = mt.findIndex((t) => t.id === e);
    return (
      n >= 0 && ee(n),
      t === `combat` && (u.spawn.objective = hn()),
      (u.lastSpawnBuild = -1),
      Ar(),
      In()
    );
  }
  function _n(e) {
    u.localId = e ?? -1;
    let t = en(e);
    t && (u.localPlayerId = t.id);
  }
  function vn(e) {
    return (
      e in u.vis &&
      ((u.vis[e] = !0),
      e === `scoreboard` && (u.scoreForced = !0),
      e === `spawn` && (u.spawnForced = !0),
      !0)
    );
  }
  function yn(e) {
    return (
      e in u.vis &&
      ((u.vis[e] = !1),
      e === `scoreboard` && (u.scoreForced = !1),
      e === `spawn` && (u.spawnForced = !1),
      !0)
    );
  }
  function xn(e) {
    return u.vis[e] ? yn(e) : vn(e);
  }
  function Sn(e = `info`, t = ``, n = 3.5) {
    if (!t) return;
    if (((e = String(e)), e === `kill` || e === `score`)) {
      Tn(t, e === `kill` ? `Eliminated` : ``);
      return;
    }
    n = +n > 0 ? +n : 3.5;
    let r = u.msgs[u.msgs.length - 1];
    if (r && r.kind === e && r.text === t) {
      ((r.t = 0), r.el.classList.add(`on`), (r.ttl = Math.max(r.ttl, n)));
      return;
    }
    if (r && r.t < r.ttl && Cn(e) < Cn(r.kind)) {
      for (
        u.msgQ = u.msgQ.filter((t) => t.kind !== e),
          u.msgQ.push({ kind: e, text: t, ttl: n, at: u.t });
        u.msgQ.length > 2;
      )
        u.msgQ.shift();
      return;
    }
    wn(e, t, n);
  }
  function Cn(e) {
    return e === `major`
      ? 3
      : e === `objective` || e === `warn` || e === `t0` || e === `t1`
        ? 2
        : 1;
  }
  function wn(e, t, n) {
    for (let e of u.msgs) e.el.remove();
    u.msgs.length = 0;
    let r = Q(`div`, `sl-msg ${e}`),
      i =
        {
          info: ``,
          warn: `Warning`,
          objective: `Objective`,
          major: ``,
          squad: `Squad`,
          vehicle: `Vehicle`,
          t0: p(0),
          t1: p(1),
        }[e] ?? e;
    (i && r.appendChild(Q(`div`, `k`, i)),
      r.appendChild(Q(`div`, `t`, t)),
      ae.appendChild(r),
      requestAnimationFrame(() => r.classList.add(`on`)),
      u.msgs.push({ el: r, kind: e, text: t, t: 0, ttl: n }));
  }
  function Tn(e, t, n = ``, r = null) {
    let i = Q(`div`, n ? `sl-toast ${n}` : `sl-toast`),
      a = /^(\+?\d+)\s*(.*)$/.exec(e);
    if (
      (a
        ? (i.appendChild(Q(`span`, ``, a[2] || t)),
          i.appendChild(Q(`b`, ``, a[1])))
        : (i.appendChild(Q(`span`, ``, e)), t && i.appendChild(Q(`b`, ``, t))),
      (r ?? ie).appendChild(i),
      !r)
    )
      for (u.toasts.push({ el: i, t: 0 }); u.toasts.length > 4;)
        u.toasts.shift().el.remove();
  }
  function En(e = !1, t = !1) {
    Un(u.hm, e, t) &&
      ((z.className = `sl-hm${e ? ` hs` : ``}${t ? ` kill` : ``}`),
      z.classList.add(`on`),
      Sr(0));
  }
  let Dn = 1.8;
  function On(e, t, n = null, { head: r = !1 } = {}) {
    let i = Qt(),
      a = i?.pos ?? [0, 0, 0],
      o = (e?.[0] ?? a[0]) - a[0],
      s = (e?.[2] ?? a[2]) - a[2],
      c = Number.isFinite(n) || (!!e && o * o + s * s >= 0.01),
      l = c
        ? Number.isFinite(n)
          ? n
          : (Math.atan2(o, -s) * 180) / Math.PI
        : NaN;
    if (((u.hitAt = u.t), I.hit(t || 10, i?.maxHp || 200, l, dn(cn()), r), !c))
      return;
    let d = Ma((t || 10) / 50, 0.35, 1),
      f = u.dmg.find((e) => Math.abs(((l - e.bearing + 540) % 360) - 180) < 24);
    if (f) {
      ((f.bearing = l),
        (f.t = Dn),
        (f.k = Math.min(1, Math.max(f.k, d) + 0.15)));
      return;
    }
    for (u.dmg.push({ bearing: l, t: Dn, k: d }); u.dmg.length > 6;)
      u.dmg.shift();
  }
  function An({
    killerId: e,
    victimId: t,
    weapon: n,
    headshot: r,
    killerName: i,
    victimName: a,
    killerTeam: o,
    victimTeam: s,
  }) {
    let c = i ?? (e == null ? null : tn(e)),
      l = o ?? (e == null ? -1 : nn(e)),
      d = a ?? tn(t),
      f = s ?? nn(t),
      p = Q(`div`, `sl-fill dark e${l === 0 ? ` k0` : l === 1 ? ` k1` : ``}`);
    c && c !== d && p.appendChild(Q(`span`, `n ${Fa(l)}`.trim(), c));
    let m = rn(n);
    for (
      r && p.appendChild(Q(`i`, `hs`)),
        p.appendChild(Q(`span`, `w`, m || (c && c !== d ? `killed` : `died`))),
        p.appendChild(Q(`span`, `n ${Fa(f)}`.trim(), d)),
        ((e != null && e === u.localId) ||
          t === u.localId ||
          (u.localPlayerId >= 0 &&
            (e === u.localPlayerId || t === u.localPlayerId))) &&
          p.classList.add(`me`),
        Ee.insertBefore(p, Ee.firstChild),
        u.feed.unshift({ el: p, t: 0 });
      u.feed.length > 6;
    )
      u.feed.pop().el.remove();
  }
  let jn = 0,
    Mn = !1,
    Nn = ``,
    Pn = !1;
  function Fn() {
    let e = sn().find((e) => e.id === u.spawn.objective),
      t = u.spawn.objective === `hq`,
      n = C(),
      r = A();
    return r?.reason || (!t && !n && !r && (!e || !fn(e)))
      ? null
      : t
        ? `hq-${u.spawn.team}`
        : r
          ? r.spawnId
          : n
            ? `teammate:${n.playerId}`
            : e.id;
  }
  async function In() {
    let t = Fn();
    if (!t || st.hidden || Pn) return !1;
    let n = window.__cubieClaim,
      r = n && !n.claimed ? (n.check() ? n() : null) : !0;
    if (!r) return !1;
    let i = ++jn,
      a = u.spawn.team,
      o = u.spawn.objective,
      s = structuredClone(P()),
      c = JSON.stringify(s);
    ((Mn = !0),
      e.modules
        .get(`player`)
        ?.lockForDeploy?.(
          u.dead ? Math.max(0, Ln() - (u.t - u.deadSince)) * 1e3 : 0,
        ),
      e.modules.get(`player`)?.extendDeployCapture?.(6e4));
    let l;
    try {
      await Promise.race([
        e.modules.get(`weapons`)?.prepareLoadout?.(s, { priority: `spawn` }),
        new Promise((e, t) => {
          l = setTimeout(() => t(Error(`Equipment load timed out`)), 6e4);
        }),
      ]);
    } catch {
      return (
        !Pn &&
          i === jn &&
          ((Mn = !1),
          e.modules.get(`player`)?.extendDeployCapture?.(0),
          e.modules.get(`player`)?.setPointerLock?.(!1),
          Sn(`warn`, `Equipment could not load. Press Deploy to retry.`, 5)),
        !1
      );
    } finally {
      clearTimeout(l);
    }
    return (await r)
      ? Pn || i !== jn
        ? !1
        : ((Mn = !1),
          e.modules
            .get(`player`)
            ?.extendDeployCapture?.(
              u.dead ? Math.max(0, Ln() - (u.t - u.deadSince)) * 1e3 : 0,
            ),
          st.hidden ||
          a !== u.spawn.team ||
          o !== u.spawn.objective ||
          Fn() !== t ||
          JSON.stringify(P()) !== c
            ? (e.modules.get(`player`)?.setPointerLock?.(!1), !1)
            : ((u.spawn.requestedAt = u.t),
              e.events?.emit?.(`ui:spawnRequest`, {
                objectiveId: t,
                team: a,
                loadout: s,
              }),
              !0))
      : (!Pn &&
          i === jn &&
          ((Mn = !1),
          e.modules.get(`player`)?.extendDeployCapture?.(0),
          e.modules.get(`player`)?.setPointerLock?.(!1)),
        !1);
  }
  function Ln() {
    let t = e.modules.get(`demo`)?.getDefinition?.(),
      n = (t?.ffa ?? t?.tdm)?.respawnSeconds;
    return Number.isFinite(n) ? n : vt.respawnSeconds;
  }
  function Bn(e) {
    if (e == null) {
      u.spreadOverride = null;
      return;
    }
    ((u.spreadOverride = +e), (u.spreadOverrideT = 0.5));
  }
  function Gn(e) {
    if (!e) {
      u.ammo.override = null;
      return;
    }
    ((u.ammo.override = { ...e }), (u.ammo.overrideT = 1));
  }
  function Kn(e) {
    ((He = Ma(+e || 45, 25, 2e3)), (Re.textContent = `${Math.round(He)} M`));
  }
  function qn(e) {
    Le.setTerrain(e, (e, t) => bt.adoptTerrain(e, t));
  }
  let Jn = e.events,
    Yn = [],
    Xn = (e, t) => {
      Jn?.on && Yn.push(Jn.on(e, t));
    };
  (Xn(`ui:banner`, (e) => le(e?.text)),
    Xn(`deployment:teammates`, (e) => {
      ((v = e?.targets ?? []), (x = e?.team), (u.lastSpawnBuild = -1));
    }),
    Xn(`beacon:spawn`, (e) => {
      let t = JSON.stringify(w);
      ((w = e ?? null), JSON.stringify(w) !== t && (u.lastSpawnBuild = -1));
    }),
    Xn(`beacon:planted`, (e) => {
      (w?.targets &&
        (w = { ...w, targets: w.targets.filter((t) => t.owner !== e?.owner) }),
        (u.lastSpawnBuild = -1));
    }),
    Xn(`beacon:destroyed`, (e) => {
      (w?.targets &&
        (w = { ...w, targets: w.targets.filter((t) => t.id !== e?.id) }),
        (u.lastSpawnBuild = -1));
    }),
    Xn(`beacon:status`, (e) => {
      (e?.reason === `planted` || e?.reason === `destroyed`) &&
        ((w = null), (u.lastSpawnBuild = -1));
    }),
    Xn(`net:disconnected`, () => {
      ((v = []), (y = []), (x = -1));
    }),
    Xn(`player:local`, (e) => {
      (Be.clear(),
        e?.entityId != null && (u.localId = e.entityId),
        e?.playerId != null && (u.localPlayerId = e.playerId));
    }),
    Xn(`spot:target`, (e) => {
      Number.isInteger(e?.targetId) &&
        Be.spot(e.targetId, u.t, (+e.durationTicks || 360) / 60);
    }),
    Xn(`vehicle:damage`, (e) => {
      let t = Qt();
      t &&
        e &&
        (e.pos &&
          t.state & l.IN_VEHICLE &&
          t.seat === e.vehicleId &&
          On(e.pos, Math.min(40, e.amount ?? 20)),
        e.attackerId === u.localId &&
          e.amount > 0 &&
          (En(!1, !1),
          Tn(
            String(Math.max(1, Math.round(e.amount))),
            e.fatal ? `Vehicle destroyed` : `Armor damage`,
            e.fatal ? `` : `assist`,
          )));
    }),
    Xn(`player:damage`, (e) => {
      if (e) {
        if (e.targetId === u.localId && e.amount > 0)
          On(null, e.amount, e.damageBearing, { head: e.part === `head` });
        else if (
          e.attackerId != null &&
          e.attackerId === u.localId &&
          u.localId >= 0
        ) {
          En(e.part === `head`, !1);
          let t = n?.get?.(u.localId)?.pos,
            r = u.dmgOut.get(e.targetId) ?? { amount: 0, t: 0, dist: 0 };
          ((r.amount += +e.amount || 0),
            (r.t = u.t),
            t &&
              e.pos &&
              (r.dist = Math.hypot(e.pos[0] - t[0], e.pos[2] - t[2])),
            u.dmgOut.set(e.targetId, r));
        }
      }
    }),
    Xn(`supply:received`, (e) => {
      e?.kind === `ammo` && nt.pop(+e.amount);
    }),
    Xn(`score:award`, (e) => {
      if (!e || !(e.points > 0)) return;
      let t = /^Securing /.test(e.reason ?? ``),
        n = t && u.toasts.find((t) => t.secure === e.reason);
      if (n) {
        ((n.points += e.points),
          (n.t = 0),
          (n.el.querySelector(`b`).textContent = `+${n.points}`),
          (n.el.style.animation = `none`),
          n.el.offsetWidth,
          (n.el.style.animation = ``));
        return;
      }
      (Tn(
        `+${e.points} ${e.reason ?? `Squad`}`,
        ``,
        /^(Captured|Neutralized) /.test(e.reason ?? ``) ? `hs capture` : `hs`,
      ),
        t &&
          Object.assign(u.toasts[u.toasts.length - 1], {
            secure: e.reason,
            points: e.points,
          }));
    }),
    Xn(`player:death`, (t) => {
      if (!t) return;
      let n = t.weapon === `Redeploy`;
      (n || An(t),
        u.pendingDeaths.push({ ...t, readyAt: u.t + 0.15 }),
        t.victimId === u.localId &&
          (u.dead || pn(Qt()),
          (u.dead = !0),
          (u.deadSince = u.t),
          e.modules.get(`player`)?.setPointerLock?.(!1),
          n || K.start(t, u.t)));
    }));
  function Zn(e) {
    let t =
        u.localId >= 0 &&
        (e.killerId === u.localId ||
          (u.localPlayerId >= 0 && e.killerPlayerId === u.localPlayerId)) &&
        e.victimId !== u.localId,
      n = u.dmgOut.get(e.victimId);
    if ((u.dmgOut.delete(e.victimId), t)) {
      let t = Q(`div`, `sl-award`);
      for (
        ie.appendChild(t),
          En(!!e.headshot, !0),
          Tn(`+100 Eliminated`, ``, ``, t),
          e.headshot && Tn(`+25 Headshot`, ``, `hs`, t),
          e.orderBonus > 0 && Tn(`+${e.orderBonus} Squad order`, ``, `hs`, t),
          n &&
            n.dist >= 100 &&
            Tn(`Longshot`, `${Math.round(n.dist)} m`, `far`, t),
          u.toasts.push({ el: t, t: 0 });
        u.toasts.length > 4;
      )
        u.toasts.shift().el.remove();
    } else
      n &&
        e.victimId !== u.localId &&
        n.amount >= 20 &&
        u.t - n.t < 8 &&
        Tn(`Assist`, ``, `assist`);
  }
  (Xn(`medic:pads`, (e) => {
    e?.kind === `revive` &&
      u.localId >= 0 &&
      e.targetId === u.localId &&
      u.dead &&
      (K.stop(), (u.reviveHoldUntil = u.t + 1.6));
  }),
    Xn(`medic:norevive`, (e) => {
      e?.entityId != null && (u.noReviveId = e.entityId);
    }),
    Xn(`medic:shock`, (e) => {
      u.localId >= 0 &&
        e?.targetId === u.localId &&
        u.dead &&
        (u.reviveHoldUntil = Math.max(
          u.reviveHoldUntil ?? -1,
          u.t + (e.riseTicks ?? 60) / 60 + 0.8,
        ));
    }),
    Xn(`player:spawn`, (e) => {
      e &&
        (e.entityId === u.localId || (u.localId < 0 && e.local)) &&
        (Be.clear(), (u.dead = !1), (u.spawn.requestedAt = -1e9));
    }),
    Xn(`weapon:fire`, (e) => {
      e &&
        e.entityId === u.localId &&
        ((u.spreadTarget = Math.min(u.spreadTarget + 5, 42)),
        u.ammo.override &&
          u.ammo.override.mag > 0 &&
          !e.noAmmoDec &&
          u.ammo.override.mag--);
    }),
    Xn(`weapon:reload`, (e) => {
      e &&
        e.entityId === u.localId &&
        ((u.ammo.reloading = !0),
        (u.ammo.reloadT = 0),
        (u.ammo.reloadDur = +e.duration || 2.2));
    }),
    Xn(`objective:changed`, (e) => {
      if (!e) return;
      let t = sn().find((t) => t.id === e.objectiveId);
      if (
        t &&
        e.team != null &&
        e.team >= 0 &&
        (e.progress == null || e.progress >= 1) &&
        e.silent !== !0
      ) {
        let n = e.team === u.allyTeam;
        Sn(
          `t${e.team}`,
          `${n ? `Captured` : `Lost`} ${t.letter} · ${t.name}`,
          3,
        );
      }
    }),
    Xn(`match:phase`, (e) => {
      e?.phase &&
        Sn(
          e.phase === `live` || e.phase === `ended` ? `major` : `info`,
          e.phase === `live`
            ? `Match live`
            : e.phase === `ended`
              ? e.winnerName
                ? `Match over · ${e.winnerPlayer === u.localPlayerId ? `You win` : `${e.winnerName} wins`} · ${e.winnerKills} kills`
                : `Match over`
              : `Warm-up`,
          e.winnerName ? 8 : 3,
        );
    }),
    Xn(`ui:message`, (e) => {
      e &&
        (i.dataset.grenadeHud !== `active` ||
          (e.text !== `GRENADE NEARBY — FIND COVER` &&
            e.text !== `G · THROW FRAG — 2 PER LIFE` &&
            !String(e.text).startsWith(`FRAG THROWN ·`) &&
            !String(e.text).startsWith(`THROWING IT BACK`))) &&
        Sn(e.kind, e.text, e.ttl);
    }),
    Xn(`ui:spread`, (e) => {
      e != null && Bn(typeof e == `number` ? e : e.spread);
    }),
    Xn(`ui:ammo`, (e) => Gn(e)),
    Xn(`ui:hitmarker`, (e) => En(!!e?.headshot, !!e?.kill)),
    Xn(`ui:hipCrosshair`, (e) => {
      u.hipOn = !!e?.on;
    }),
    Xn(`ui:scoped`, (e) => {
      ((u.scoped = !!e?.scoped), (R.style.opacity = u.scoped ? `0` : ``));
    }),
    Xn(`net:stats`, (e) => {
      ((u.net = e),
        (u.netT = u.t),
        e &&
          typeof e.rtt == `number` &&
          (u.rttHist.push(e.rtt), u.rttHist.length > 40 && u.rttHist.shift()));
    }),
    Xn(`net:connected`, (e) => {
      (e?.playerId != null && (u.localPlayerId = e.playerId),
        Sn(`info`, `Connected`, 2));
    }),
    Xn(`net:disconnected`, () => Sn(`warn`, `Connection lost`, 4)));
  let Qn = (t) => {
      if (
        t.code === `KeyP` &&
        !t.repeat &&
        !rt(e.world) &&
        !t.target?.closest?.(`input,textarea,select,[contenteditable="true"]`)
      ) {
        if ((t.preventDefault(), dt)) ((dt = !1), (u.spawnForced = null));
        else {
          let t = Qt();
          ((dt = !!t && t.hp > 0 && !(t.state & l.DEAD)),
            dt && (u.spawnForced = !0),
            (st.hidden = !1),
            Gt(`squads`),
            e.modules.get(`player`)?.setPointerLock?.(!1));
        }
        return;
      }
      if (t.code === `Escape` && dt) {
        ((dt = !1), (u.spawnForced = null));
        return;
      }
      if (
        !st.hidden &&
        lt === `deploy` &&
        !t.target?.closest?.(
          t.code === `Tab`
            ? `input,textarea,select,[contenteditable="true"]`
            : `input,textarea,select,button,[contenteditable="true"]`,
        )
      ) {
        let e = { Digit1: 0, Digit2: 1, Digit3: 2, Digit4: 3, Digit5: 4 }[
          t.code
        ];
        if (e != null && mt[e]) {
          (t.preventDefault(), ee(e), Ar());
          return;
        }
        let n =
          t.code === `Tab`
            ? t.shiftKey
              ? -1
              : 1
            : {
                KeyW: -1,
                KeyA: -1,
                ArrowUp: -1,
                ArrowLeft: -1,
                KeyS: 1,
                KeyD: 1,
                ArrowDown: 1,
                ArrowRight: 1,
              }[t.code];
        if (n) {
          if ((t.preventDefault(), !t.repeat)) {
            let e = [
                ...sn()
                  .filter(fn)
                  .map((e) => e.id),
                `hq`,
                ...k()
                  .filter((e) => !e.reason)
                  .map((e) => e.spawnId),
                ...(x === u.spawn.team
                  ? v
                      .filter(
                        (e) => e.eligible && e.playerId !== u.localPlayerId,
                      )
                      .map((e) => `teammate:${e.playerId}`)
                  : []),
              ],
              t = e.indexOf(u.spawn.objective);
            ((u.spawn.objective = e[(t < 0 ? 0 : t + n + e.length) % e.length]),
              (u.lastSpawnBuild = -1),
              Ar(),
              ct
                .querySelector(`.oi.sel`)
                ?.scrollIntoView({ block: `nearest` }));
          }
          return;
        }
      }
      if (st.hidden || t.code !== `Tab`) {
        if (t.repeat) {
          t.code === `Tab` && t.preventDefault();
          return;
        }
        t.code === `Tab`
          ? ((u.scoreHeld = !0), t.preventDefault())
          : t.code === `F3`
            ? (xn(`netstats`), t.preventDefault())
            : t.code === `F4`
              ? (xn(`modules`), t.preventDefault())
              : ((t.code === `Space` &&
                  !st.hidden &&
                  !dt &&
                  (lt === `deploy` || lt === `loadout`) &&
                  !t.target?.closest?.(
                    `input,textarea,select,[contenteditable="true"]`,
                  )) ||
                  (t.code === `Enter` &&
                    !st.hidden &&
                    lt === `deploy` &&
                    !t.target?.closest?.(
                      `input,textarea,select,button,[contenteditable="true"]`,
                    ))) &&
                (t.preventDefault(), In());
      }
    },
    $n = (e) => {
      e.code === `Tab` && ((u.scoreHeld = !1), e.preventDefault());
    },
    er = () => {
      u.scoreHeld = !1;
    };
  (window.addEventListener(`keydown`, Qn),
    window.addEventListener(`keyup`, $n),
    window.addEventListener(`blur`, er));
  let tr = 1,
    nr = Ea,
    rr = Aa.safe,
    ir = Aa.map,
    q = {
      l: 0,
      r: 0,
      t: 0,
      b: 0,
      clusterB: 0,
      blX: 0,
      blY: 1e9,
      brX: 1e9,
      brY: 1e9,
      cX: 0,
      feedB: 0,
    };
  function ar() {
    ((s = r.clientWidth || window.innerWidth),
      (c = r.clientHeight || window.innerHeight));
    let e = Ma(Math.min(s / 1920, c / 1080), ba ? 0.5 : 0.85, 1.4);
    ((tr = Math.round(e * 200) / 200), i.style.setProperty(`--ui`, String(tr)));
    let t = (e) => Math.round(e * tr),
      n = {
        brk: 9,
        pipw: 30,
        piph: 24,
        pipgap: 7,
        ctr: 5,
        ctrh: 6,
        mk: 22,
        xhl: 9,
        s3: 3,
        s5: 5,
        s9: 9,
        s10: 10,
        s11: 11,
      };
    for (let e in n) i.style.setProperty(`--${e}`, `${Math.max(2, t(n[e]))}px`);
    for (let e of ka) i.style.setProperty(`--g${e}`, `${Math.max(1, t(e))}px`);
    ((rr = t(Aa.safe)),
      i.style.setProperty(`--safe`, `${rr}px`),
      i.style.setProperty(`--diS`, `${Math.round(c * 0.36)}px`),
      (ir = t(Aa.map)),
      (nr = Math.round((Ea * tr) / 2) * 2),
      (oe.style.left = `${Math.round((s - nr) / 2)}px`),
      (oe.style.width = `${nr}px`),
      or(!0),
      (oe.style.top = `${rr}px`),
      (L.style.left = `${Math.round(s / 2)}px`),
      (L.style.top = `${Math.round(c / 2)}px`),
      (ie.style.left = `0px`),
      (ie.style.width = `${s}px`),
      (ie.style.top = `${Math.round(c / 2) + t(Aa.laneY)}px`),
      (ae.style.left = `0px`),
      (ae.style.width = `${s}px`),
      (ae.style.top = `${t(Aa.msgY)}px`),
      (Ie.style.left = `${rr}px`),
      (Ie.style.bottom = `${rr}px`),
      (Ie.style.width = `${ir}px`),
      (Ie.style.height = `${ir}px`),
      Le.width !== ir && Le.resize(ir, ir, window.devicePixelRatio || 1),
      (Ge.style.right = `${rr}px`),
      (Ge.style.bottom = `${rr}px`),
      (Ge.style.width = `${t(Aa.ammoW)}px`),
      (Ge.style.height = `${t(Aa.ammoH)}px`),
      (De.style.right = `${rr}px`),
      (De.style.top = `calc(${rr}px + var(--salient-settings-clearance, 0px))`),
      (Ee.style.right = `${rr}px`),
      (Ee.style.top = `calc(${rr + (De.offsetHeight || t(52)) + t(10)}px + var(--salient-settings-clearance, 0px))`),
      (Jt.style.left = `${rr}px`),
      (Jt.style.top = `${rr}px`),
      (Ae.style.left = `${rr}px`),
      (Ae.style.top = `${rr}px`),
      (Me.style.left = `${rr}px`),
      (Me.style.top = `${rr + t(20)}px`),
      (Yt.style.left = `${rr}px`),
      (q.l = rr + t(20)),
      (q.r = s - rr - t(20)),
      (q.clusterB = rr + t(168)),
      (q.t = q.clusterB + t(26)),
      (q.b = c - rr - t(18)),
      (q.blX = rr + ir + t(20)),
      (q.blY = c - rr - ir - t(14)),
      (q.brX = s - rr - t(Aa.ammoW) - t(20)),
      (q.brY = c - rr - t(Aa.ammoH) - t(70)),
      (q.cX = nr / 2 + t(24)));
  }
  function or(e = !1) {
    let t = [
      V.hidden,
      de.n.textContent,
      de.v.textContent,
      he.n.textContent,
      he.v.textContent,
      pe.textContent,
      me.textContent,
      me.className,
    ].join(`
`);
    if (!e && t === H) return;
    ((H = t), (V.style.width = `auto`));
    let n = Math.ceil(V.getBoundingClientRect().width / 2) * 2;
    n > 0 && (V.style.width = `${n}px`);
  }
  function sr(e, t) {
    return (
      (e = Ma(e, q.l, q.r)),
      (t = Ma(t, q.t, q.b)),
      e < q.blX && t > q.blY && (t = q.blY),
      e > q.brX && t > q.brY && (t = q.brY),
      e > q.brX && t < q.feedB && (t = q.feedB),
      Math.abs(e - s / 2) < q.cX && t < q.t && (t = q.t),
      [e, t]
    );
  }
  let cr = () => ar();
  (window.addEventListener(`resize`, cr), ar());
  let lr = -2;
  function ur(t) {
    ((t = Ma(t || 1 / 60, 0, 0.1)), (u.t += t));
    let r = Qt(),
      a = $t(),
      o =
        n?.match?.mode === `ffa`
          ? -9
          : (a?.team ?? r?.team ?? u.spawn.team ?? 0);
    o !== lr && ((lr = o), (u.allyTeam = o), (u.spawn.team = o >= 0 ? o : 0));
    let s = kn();
    (i.style.setProperty(`--ally`, s.ally),
      i.style.setProperty(`--enemy`, s.enemy));
    for (let e of [0, 1]) {
      let t = e === o ? s.ally : s.enemy;
      (i.style.setProperty(`--t` + e, t),
        i.style.setProperty(`--t` + e + `-ink`, Ia(t)));
    }
    let c = cn(),
      d = !!r && !!(r.state & xa);
    (d &&
      !u.dead &&
      (pn(r),
      (u.dead = !0),
      (u.deadSince = u.t),
      e.modules.get(`player`)?.setPointerLock?.(!1)),
      !d && r && u.dead && u.t - u.deadSince > 0.5 && (u.dead = !1),
      r ? (u.absentSince = -1) : u.absentSince < 0 && (u.absentSince = u.t),
      r && K.record(u.t, r),
      K.playing() && K.update(u.t));
    let f =
      u.spawnForced === !0
        ? !0
        : u.spawnForced === !1
          ? !1
          : (!r && u.t - Math.max(0, u.absentSince) > 1) ||
            (u.dead &&
              u.t - u.deadSince > 2.5 &&
              !K.playing() &&
              !(u.t < (u.reviveHoldUntil ?? -1)));
    (st.hidden === f &&
      ((st.hidden = !f),
      (u.lastSpawnBuild = -1),
      Lt.preload(f),
      f
        ? (Gt(dt ? `squads` : `deploy`),
          e.modules.get(`player`)?.setPointerLock?.(!1))
        : (jn++, (Mn = !1), Lt.show(!1), zt.show(!1))),
      (u.vis.spawn = f));
    let p = (u.scoreHeld || u.scoreForced) && !f;
    (ot.hidden === p &&
      ((ot.hidden = !p), (u.lastScoreBuild = -1), at.classList.toggle(`on`, p)),
      (u.vis.scoreboard = p));
    let m = !f && !p && !K.playing();
    zt.update(u.t, m);
    let h = rt(e.world);
    (ct.classList.contains(`no-squads`) !== h &&
      (ct.classList.toggle(`no-squads`, h),
      h && ct.classList.remove(`show-squad`)),
      h &&
        lt === `squads` &&
        (dt && ((dt = !1), (u.spawnForced = null)), Gt(`deploy`)),
      Bt.update());
    for (let e of [
      `ammo`,
      `compass`,
      `match`,
      `minimap`,
      `markers`,
      `killfeed`,
      `messages`,
    ]) {
      let t = Xt[e],
        n = u.vis[e] && m && !(e === `ammo` && r?.state & l.IN_VEHICLE);
      t.hidden === n && (t.hidden = !n);
    }
    ge.hidden !== V.hidden && (ge.hidden = V.hidden);
    {
      let e = u.vis.players && u.t < u.playersUntil && !p && !K.playing();
      De.hidden === e && (De.hidden = !e);
    }
    let g = !!(r?.state & l.IN_VEHICLE),
      _ =
        g &&
        [`sight`, `chase`, `cockpit`].includes(
          e.modules.get(`vehicles`)?.getViewMode?.(),
        ),
      v =
        !g && u.hipOn && r
          ? (e.modules.get(`weapons`)?.hipCone?.() ?? null)
          : null,
      y = !(u.vis.crosshair && m && !u.dead && !p && (g ? !_ : v && v.aim < 1));
    (R.hidden !== y && (R.hidden = y),
      (ne.style.opacity = u.dead && !K.playing() ? `1` : `0`));
    {
      let t = u.dead && !K.playing();
      t !== !!u.muffled &&
        ((u.muffled = t),
        e.modules.get(`audio`)?.setMuffle?.(+!!t, t ? 0.9 : 0.08));
    }
    {
      let t = (!!r && !u.vis.spawn) || K.playing();
      if (t !== u.present) {
        let n = u.present === void 0;
        ((u.present = t),
          e.modules.get(`audio`)?.setPresent?.(t, n ? 0.01 : t ? 0.25 : 0.4));
      }
    }
    (Jt.hidden !== !u.vis.netstats && (Jt.hidden = !u.vis.netstats),
      Yt.hidden !== !u.vis.modules && (Yt.hidden = !u.vis.modules));
    {
      let e = m && !u.vis.netstats;
      (Ae.hidden === e && (Ae.hidden = !e),
        e ? fr() : Me.hidden || ((Me.hidden = !0), (Fe = -2)));
    }
    (Yt.hidden ||
      (Yt.style.top = `${rr + (u.vis.netstats ? Jt.offsetHeight + Math.round(10 * tr) : 0)}px`),
      dr(r, m),
      hr(r, t, v),
      gr(r, t, m, tr),
      _r(r, t),
      u.t - u.lastMatch > 0.1 && ((u.lastMatch = u.t), yr(), mr()),
      br(r),
      xr(t),
      Sr(t),
      Cr(t),
      wr(t),
      !Ie.hidden &&
        u.t - (u.lastMap ?? -1) >= 1 / 30 &&
        ((u.lastMap = u.t), Tr(r, c)),
      p && u.t - u.lastScoreBuild > 0.5 && ((u.lastScoreBuild = u.t), Dr()));
    {
      let t = e.modules.get(`demo`)?.getDefinition?.(),
        n =
          f &&
          lt === `deploy` &&
          !K.playing() &&
          !Wt &&
          !!e.renderer &&
          !!t &&
          !t.flatDeploy;
      n !== Vt.active &&
        (Vt.sync(n),
        ct.classList.toggle(`theatre`, n),
        st.classList.toggle(`theatre`, n),
        (st.style.backdropFilter = st.style.webkitBackdropFilter =
          n ? `none` : ``));
      let r = f ? lt : ``;
      document.body.dataset.slMenu !== r && (document.body.dataset.slMenu = r);
    }
    {
      let t = e.modules.get(`demo`)?.getDefinition?.(),
        n =
          f &&
          !K.playing() &&
          !!e.renderer &&
          !!(t?.elevatorDeploy || t?.vistaDeploy);
      (n !== Ut.active &&
        (Ut.sync(n, t),
        st.classList.toggle(`elevator`, n),
        (st.style.backdropFilter = st.style.webkitBackdropFilter =
          n ? `none` : ``)),
        n && Ut.frame());
    }
    (f &&
      (u.t - u.lastSpawnBuild > 0.5 && ((u.lastSpawnBuild = u.t), Ar()),
      lt !== `squads` && lt !== `unlocks` && Er(r, c)),
      u.vis.netstats && Mr(),
      u.vis.modules &&
        u.t - u.lastModBuild > 1 &&
        ((u.lastModBuild = u.t), Nr()));
  }
  function dr(e, t) {
    ve.hidden === t && (ve.hidden = !t);
    let r = null;
    if (
      t &&
      e?.pos &&
      !(e.state & xa) &&
      !(e.hp <= 0) &&
      n?.match?.mode !== `ffa`
    ) {
      let t = 1 / 0;
      for (let i of n?.match?.objectives ?? []) {
        if (
          !i?.pos ||
          !(i.radius > 0) ||
          i.state === `destroyed` ||
          Math.abs(e.pos[1] - i.pos[1]) > 8
        )
          continue;
        let n = e.pos[0] - i.pos[0],
          a = e.pos[2] - i.pos[2],
          o = n * n + a * a;
        o <= i.radius * i.radius && o < t && ((t = o), (r = i));
      }
    }
    let i = !!r;
    if ((ve.classList.contains(`on`) !== i && ve.classList.toggle(`on`, i), !r))
      return;
    let a = r.team === 0 || r.team === 1 ? r.team : -1,
      o = r.progressTeam === 0 || r.progressTeam === 1 ? r.progressTeam : -1,
      s = Ma(+r.progress || 0, 0, 1),
      c = a >= 0 ? a : s > 0 ? o : -1,
      l = `${r.letter}|${a}|${c}|${Math.round(s * 100)}|${+!!r.contested}`;
    l !== be.key &&
      ((be.key = l),
      ye.textContent !== (r.letter ?? ``) && (ye.textContent = r.letter ?? ``),
      ve.style.setProperty(`--lc`, a >= 0 ? `var(--t${a}-ink)` : `#CFCBC1`),
      ve.style.setProperty(`--pc`, c >= 0 ? `var(--t${c})` : `var(--ink)`),
      ve.style.setProperty(`--p`, c >= 0 ? s.toFixed(3) : `0`),
      ve.classList.toggle(`con`, !!r.contested));
  }
  function fr() {
    let t = e.stats ?? {},
      n =
        u.net && typeof u.net.rtt == `number` && u.t - u.netT < 3
          ? Math.round(u.net.rtt)
          : -1;
    n !== Fe &&
      ((Fe = n),
      (Me.hidden = n < 0),
      n >= 0 && (Ne.textContent = String(n)),
      Me.classList.toggle(`low`, n > 150));
    let r =
      t.fps > 0
        ? Math.round(t.fps)
        : t.frameMs > 0
          ? Math.round(1e3 / t.frameMs)
          : 0;
    r !== Pe &&
      ((Pe = r),
      (je.textContent = r > 0 ? String(r) : `—`),
      Ae.classList.toggle(`low`, r > 0 && r < 30));
  }
  function pr() {
    return n?.players
      ? Array.from(n.players.values()).filter(
          (e) => !e.reserve || e.id === u.localPlayerId,
        )
      : [];
  }
  function mr() {
    let e = 0;
    if (n?.players)
      for (let t of n.players.values()) !t.isBot && !t.reserve && e++;
    e !== ke &&
      ((ke = e),
      (u.playersUntil = u.t + 5),
      (Oe.textContent = String(e)),
      (De.querySelector(`.n`).textContent =
        e === 1 ? `Player online` : `Players online`),
      De.classList.remove(`bump`),
      De.offsetWidth,
      De.classList.add(`bump`));
  }
  function hr(t, n, r) {
    if (
      (R._hip !== !!r && ((R._hip = !!r), R.classList.toggle(`hip`, !!r)), r)
    ) {
      let t = ((e.camera?.fov ?? 75) * Math.PI) / 360,
        i = e.renderer?.domElement?.clientHeight || innerHeight,
        a = ((Math.tan(r.spread) / Math.tan(t)) * i) / 2;
      u.hipGap = u.hipGap > 0 ? Na(u.hipGap, a, 1 - Math.exp(-n * 18)) : a;
      let o = Math.max(2, Math.round(u.hipGap));
      R._g !== o && ((R._g = o), R.style.setProperty(`--gap`, `${o}px`));
      let s = Math.round((1 - r.aim) * 20) / 20;
      (R._fade !== s &&
        ((R._fade = s), R.style.setProperty(`--fade`, String(s))),
        R._ads && ((R._ads = !1), R.classList.remove(`ads`)),
        R._spr && ((R._spr = !1), R.classList.remove(`sprint`)));
      return;
    }
    u.hipGap = 0;
    let i = 8;
    if (t?.state & l.IN_VEHICLE) ((i = 4), (u.spreadOverride = null));
    else if (u.spreadOverride != null) {
      ((u.spreadOverrideT -= n),
        u.spreadOverrideT < 0 && (u.spreadOverride = null));
      let e = u.spreadOverride ?? 0;
      i = e <= 1.5 ? 4 + e * 40 : e;
    } else if (t) {
      i = 8;
      let e = Math.hypot(t.vel?.[0] || 0, t.vel?.[2] || 0);
      ((i += Math.min(10, e * 1.4)),
        t.state & Ca && (i += 12),
        t.state & Sa && (i = 3),
        t.stance === 1 && (i -= 2),
        t.stance === 2 && (i -= 4),
        t.state & wa && (i += 6));
    }
    ((u.spreadTarget = Ma(Na(u.spreadTarget, i, 1 - Math.exp(-n * 10)), 2, 48)),
      (u.spread = Na(u.spread, u.spreadTarget, 1 - Math.exp(-n * 18))));
    let a = Math.round(Ma(u.spread, 2, 60) * tr);
    R._g !== a && ((R._g = a), R.style.setProperty(`--gap`, `${a}px`));
    let o = !!(t && t.state & Sa);
    R._ads !== o && ((R._ads = o), R.classList.toggle(`ads`, o));
    let s = !!(t && t.state & Ca && !o);
    R._spr !== s && ((R._spr = s), R.classList.toggle(`sprint`, s));
  }
  function gr(e, t, n, r) {
    let i = e ? Math.max(0, +e.hp || 0) : 0;
    (e &&
      u.hpSeen >= 0 &&
      i < u.hpSeen - 0.5 &&
      u.t - u.hitAt > 0.3 &&
      ((u.hitAt = u.t), I.hit(u.hpSeen - i, e.maxHp || 200, NaN, 0, !1)),
      (u.hpSeen = e ? i : -1));
    let a = !!e && i > 0 && !u.dead && !(e.state & xa);
    (I.update(t, dn(cn()), a && n, n),
      We.update(t, e, { living: a, active: n && u.vis.health, ui: r }));
  }
  function _r(t, n) {
    let r = u.ammo,
      a,
      o,
      s,
      c,
      l;
    if (
      (r.override &&
        ((r.overrideT -= n),
        (a = r.override.mag),
        (o = r.override.reserve),
        (s = r.override.magSize),
        (c = r.override.mode),
        (l = r.override.name),
        r.override.reloading != null && (r.reloading = !!r.override.reloading)),
      t && (a == null || r.overrideT < 0))
    ) {
      let e = an(t.weapon);
      ((a = t.ammo ?? a ?? 0),
        (o = t.ext?.reserve ?? t.ext?.ammoReserve ?? o ?? e?.reserve ?? 0),
        (s = e?.magSize ?? e?.mag ?? s ?? Math.max(a, 30)),
        (c = e?.fireMode ?? e?.mode ?? c),
        (l = e?.name ?? l ?? rn(t.weapon)),
        t.state & Ta
          ? r.reloading || ((r.reloading = !0), (r.reloadT = 0))
          : r.override || (r.reloading = !1));
    }
    ((a ??= r.mag),
      (o ??= r.reserve),
      (s ??= r.magSize),
      (c ??= r.mode),
      (l ??= r.name),
      r.reloading &&
        ((r.reloadT += n),
        (et.style.width = `${Ma(r.reloadT / r.reloadDur, 0, 1) * 100}%`),
        r.reloadT >= r.reloadDur && !r.override && (r.reloading = !1),
        r.override && r.reloadT >= r.reloadDur && (r.reloading = !1)));
    let d =
      r.override?.tool ?? [`tool`, `defib`].includes(an(t?.weapon)?.class);
    (d && ((a = `—`), (o = ``), (c = `TOOL`), (s = 1)),
      a !== r.mag && ((r.mag = a), (Ze.textContent = String(a))),
      !d && e.modules.get(`weapons`)?.isUnlimitedAmmo?.() && (o = `∞`),
      o !== r.reserve && ((r.reserve = o), (tt.textContent = String(o))));
    let f = String(Da[c] ?? c ?? `AUTO`).toUpperCase();
    if (
      (f !== r.mode && ((r.mode = f), (Je.textContent = f)),
      l !== r.name && ((r.name = l), (qe.textContent = String(l))),
      s !== r.magSize || it !== s || r._ticksUi !== tr)
    ) {
      ((r.magSize = s), (it = s), (r._ticksUi = tr), Qe.replaceChildren());
      let e = Ma(Math.round(s), 1, 30),
        t = Math.max(2, Math.round(2.4 * tr)),
        n = 30 * t + 29,
        a = Math.max(t, Math.floor((n - (e - 1)) / e));
      for (let t = 0; t < e; t++) {
        let e = Qe.appendChild(Q(`i`));
        e.style.width = `${a}px`;
      }
      (i.style.setProperty(`--tickw`, `${e * a + (e - 1)}px`),
        (r._ticksN = e),
        (r._filled = -1));
    }
    let p = Ma(Math.round((a / Math.max(1, s)) * r._ticksN), 0, r._ticksN);
    if (r._filled !== p) {
      r._filled = p;
      let e = Qe.children;
      for (let t = 0; t < e.length; t++) e[t].classList.toggle(`e`, t >= p);
    }
    let m = a <= Math.max(3, s * 0.2);
    (r._low !== m && ((r._low = m), Ge.classList.toggle(`low`, m)),
      r._rel !== r.reloading &&
        ((r._rel = r.reloading), Ge.classList.toggle(`rel`, r.reloading)));
  }
  function vr() {
    let e = pr();
    return {
      me: e.find(
        (e) =>
          e.id === u.localPlayerId ||
          (u.localId >= 0 && e.entityId === u.localId),
      ),
      lead: e
        .slice()
        .sort(
          (e, t) =>
            (t.kills | 0) - (e.kills | 0) || (e.deaths | 0) - (t.deaths | 0),
        )[0],
      limit: n?.match?.killLimit || 30,
    };
  }
  function yr() {
    let e = d();
    if (n?.match?.mode === `ffa`) {
      let { me: e, lead: t, limit: n } = vr();
      [
        [`YOU`, e?.kills | 0],
        [
          t?.kills > 0
            ? t === e
              ? `LEADER · YOU`
              : `LEADER · ${String(t.name || `Player`).toUpperCase()}`
            : `LEADER`,
          t?.kills | 0,
        ],
      ].forEach(([e, t], r) => {
        let i = r === 0 ? de : he;
        i.n.textContent !== e &&
          ((i.n.textContent = e),
          (i.n.style.color = `var(--ink)`),
          (i.fill.style.background = r
            ? `var(--warn, #d0543a)`
            : `var(--ink)`));
        let a = String(t);
        (i.v.textContent !== a && (i.v.textContent = a),
          (i.fill.hidden = !1),
          (i.fill.style.width = `${Ma(t / n, 0, 1) * 100}%`),
          (i.fill.parentElement.title = `${t} / ${n} kills to win`));
      });
    } else
      for (let t = 0; t < 2; t++) {
        let r = e[t],
          i = t === 0 ? de : he,
          a = (r?.name ?? (t === 0 ? `Team A` : `Team B`)).toUpperCase();
        i.n.textContent !== a &&
          ((i.n.textContent = a),
          (i.n.style.color = `var(--t${t}-ink)`),
          (i.fill.style.background = `var(--t${t})`));
        let o = Math.max(0, Math.round(+r?.tickets || 0)),
          s = String(o);
        i.v.textContent !== s && (i.v.textContent = s);
        let c = n?.match?.ticketCapacity,
          l = Number.isFinite(c) && c > 0;
        ((i.fill.hidden = !l),
          (i.fill.style.width = l ? `${Ma(o / c, 0, 1) * 100}%` : `0%`),
          (i.fill.parentElement.title = l
            ? `${o} / ${c} starting tickets`
            : `Starting ticket count unavailable`));
      }
    let t = n?.match ?? {},
      r = Pa(t.timeLeft);
    pe.textContent !== r && (pe.textContent = r);
    let i = String(t.phase ?? `warmup`),
      a = i === `warmup` ? `Warm-up` : i;
    (me.textContent !== a && ((me.textContent = a), (me.className = `p ${i}`)),
      or());
    let o = sn();
    for (; _e.length < o.length;) {
      let e = ge.appendChild(Q(`div`, `sl-fill dark o`));
      (e.appendChild(Q(`span`, `g`, ``)),
        e.appendChild(Q(`i`, `u`)),
        e.appendChild(Q(`i`, `p`)),
        _e.push(e));
    }
    for (let e = 0; e < _e.length; e++) {
      let t = _e[e],
        n = o[e];
      if (!n) {
        t.hidden = !0;
        continue;
      }
      t.hidden = !1;
      let r = `sl-fill dark o ${Fa(n.team)}${n.contested ? ` con` : ``}`.trim();
      t.className !== r && (t.className = r);
      let i = t.firstChild;
      i.textContent !== n.letter && (i.textContent = n.letter);
      let a = Ma(n.progress, 0, 1);
      t.children[2].style.width = `${a * 100}%`;
    }
  }
  function br(t) {
    let n = sn(),
      r = e.camera;
    for (; Te.length < n.length;) {
      let e = we.appendChild(Q(`div`, `sl-mk`));
      (e.appendChild(Q(`div`, `d`)).appendChild(Q(`b`, ``, ``)),
        e.appendChild(Q(`div`, `m`, ``)),
        e.appendChild(Q(`div`, `pr`)).appendChild(Q(`i`)),
        e.appendChild(Q(`i`, `ar`)),
        Te.push(e));
    }
    let i =
      t?.pos ?? (r ? [r.position.x, r.position.y, r.position.z] : [0, 0, 0]);
    u.t - (u.lastFeedB ?? -1) >= 0.25 &&
      ((u.lastFeedB = u.t),
      (q.feedB = Ee.hidden
        ? 0
        : Ee.offsetTop + Ee.offsetHeight + Math.round(26 * tr)));
    let a = u.msgs.length > 0,
      o = Math.round(340 * tr),
      l = Math.round(Aa.msgY * tr) - Math.round(16 * tr),
      d = l + Math.round(100 * tr);
    for (let e = 0; e < Te.length; e++) {
      let t = Te[e],
        f = n[e];
      if (!f || !f.pos || !r || !un) {
        t.hidden ||= !0;
        continue;
      }
      (un.set(f.pos[0], f.pos[1] + 3.5, f.pos[2]),
        un.applyMatrix4(r.matrixWorldInverse));
      let p = un.z > 0,
        m = un.x,
        h = un.y,
        g = un.z;
      un.applyMatrix4(r.projectionMatrix);
      let _ = (un.x * 0.5 + 0.5) * s,
        v = (1 - (un.y * 0.5 + 0.5)) * c;
      p && ((_ = s - _), (v = c + 100));
      let y = p || _ < q.l || _ > q.r || v < q.t || v > q.b;
      if (y) {
        let e = m,
          n = -h + Math.max(0, g),
          r = Math.hypot(e, n) || 1,
          i = e / r,
          a = n / r,
          o = s / 2,
          l = c / 2,
          u = i > 1e-6 ? (q.r - o) / i : i < -1e-6 ? (q.l - o) / i : 1 / 0,
          d = a > 1e-6 ? (q.b - l) / a : a < -1e-6 ? (q.t - l) / a : 1 / 0,
          f = Math.max(0, Math.min(u, d));
        ((_ = o + i * f), (v = l + a * f));
        let p = `${Math.atan2(v - c / 2, _ - s / 2).toFixed(2)}rad`;
        t._a !== p && ((t._a = p), t.style.setProperty(`--a`, p));
        let y = sr(_, v),
          b = performance.now(),
          x =
            t._edgeAt && b - t._edgeAt < 250
              ? 1 - Math.exp(-(b - t._edgeAt) / 70)
              : 1;
        ((t._ex = x === 1 ? y[0] : t._ex + (y[0] - t._ex) * x),
          (t._ey = x === 1 ? y[1] : t._ey + (y[1] - t._ey) * x),
          (t._edgeAt = b),
          (_ = t._ex),
          (v = t._ey));
      } else t._edgeAt = 0;
      ((t.hidden = !1),
        (t.style.transform = `translate(${Math.round(_)}px,${Math.round(v)}px) translate(-50%,-100%)`));
      let b = `sl-mk ${Fa(f.team)}${f.contested ? ` con` : ``}${y ? ` edge` : ``}${zt.own()?.order?.objectiveId === f.id ? ` squad-order` : ``}${Bt.targetId() === f.id ? ` squad-target` : ``}${u.tipObjective === f.id ? ` tip-target` : ``}`;
      t.className !== b && (t.className = b);
      let x = a && Math.abs(_ - s / 2) < o && v > l && v < d,
        S = Math.hypot(f.pos[0] - i[0], f.pos[2] - i[2]),
        C = !y && Math.hypot(_ - s / 2, v - c / 2) < c * 0.14,
        w = u.tipObjective === f.id && S >= 12,
        T = u.scoped || (S < 60 && !w) ? 0 : x || C ? (w ? 0.6 : 0.28) : 1;
      ((t._f = t._f == null ? T : t._f + (T - t._f) * 0.16),
        Math.abs(t._f - T) < 0.01 && (t._f = T));
      let E = t._f >= 0.995 ? `` : t._f.toFixed(2);
      if ((t._op !== E && ((t._op = E), (t.style.opacity = E)), t._f <= 0.01)) {
        t.hidden ||= !0;
        continue;
      }
      let D = t.firstChild.firstChild;
      D.textContent !== f.letter && (D.textContent = f.letter);
      let O = Math.round(S),
        k = O >= 1e3 ? `${(O / 1e3).toFixed(1)} km` : `${O} m`;
      (t.children[1].textContent !== k && (t.children[1].textContent = k),
        (t.children[2].firstChild.style.width = `${Ma(f.progress, 0, 1) * 100}%`),
        (t.children[2].style.visibility =
          f.progress > 0 && f.progress < 1 ? `visible` : `hidden`));
    }
  }
  function xr(e) {
    for (let t = u.feed.length - 1; t >= 0; t--) {
      let n = u.feed[t];
      ((n.t += e),
        n.t > 4.7 && n.el.classList.add(`out`),
        n.t > 5 && (n.el.remove(), u.feed.splice(t, 1)));
    }
  }
  function Sr(e) {
    if (u.hm.t <= 0) return;
    u.hm.t = Math.max(0, u.hm.t - e);
    let t = Qt()?.state ?? 0,
      n = K.playing() ? K.aimed() : !!(t & l.ADS) && !(t & l.IN_VEHICLE);
    z.classList.toggle(`aimed`, n);
    let r = 1 - u.hm.t / Hn;
    ((z.style.opacity = String(Math.min(1, u.hm.t / (Hn * 0.4)))),
      (z.style.transform = `scale(${n ? 1 : 1 + 0.35 * Math.max(0, 1 - r / 0.6) ** 2})`),
      u.hm.t || z.classList.remove(`on`));
  }
  function Cr(e) {
    for (let t = u.dmg.length - 1; t >= 0; t--)
      ((u.dmg[t].t -= e), u.dmg[t].t <= 0 && u.dmg.splice(t, 1));
    for (let e = 0; e < re.length; e++) {
      let t = u.dmg[e],
        n = re[e];
      if (!t) {
        n.style.opacity !== `0` && (n.style.opacity = `0`);
        continue;
      }
      ((n.style.opacity = (
        Ma(t.t / 1.35, 0, 1) ** 0.8 *
        (0.5 + 0.45 * t.k)
      ).toFixed(2)),
        (n.style.transform = `rotate(${(t.bearing - dn(cn())).toFixed(1)}deg)`));
    }
  }
  function wr(e) {
    for (let t = u.msgs.length - 1; t >= 0; t--) {
      let n = u.msgs[t];
      ((n.t += e),
        n.t > n.ttl && n.el.classList.remove(`on`),
        n.t > n.ttl + 0.3 && (n.el.remove(), u.msgs.splice(t, 1)));
    }
    for (; !u.msgs.length && u.msgQ.length;) {
      let e = u.msgQ.shift();
      u.t - e.at < e.ttl && wn(e.kind, e.text, e.ttl);
    }
    for (let e = 0; e < u.pendingDeaths.length;) {
      if (u.pendingDeaths[e].readyAt > u.t) {
        e++;
        continue;
      }
      Zn(u.pendingDeaths.splice(e, 1)[0]);
    }
    for (let t = u.toasts.length - 1; t >= 0; t--) {
      let n = u.toasts[t];
      ((n.t += e), n.t > 2.9 && (n.el.remove(), u.toasts.splice(t, 1)));
    }
  }
  function Tr(t, r) {
    let i =
        t?.pos ??
        (e.camera ? [e.camera.position.x, 0, e.camera.position.z] : [0, 0, 0]),
      a = e.modules.get(`weapons`),
      o = Be.update(
        n?.entities?.values?.() ?? [],
        t,
        u.t,
        (e) =>
          e.type === `soldier` &&
          (a?.equippedDefinition?.(e.weapon, e)?.reportVolume ?? 1) < 1,
        n?.match?.mode === `ffa`,
        (e) => (e.type === `soldier` && Ce(Se[e.weapon]) ? 2e3 : 90),
      );
    Le.draw({
      layout: e.modules.get(`demo`)?.getDefinition?.(),
      center: [i[0], i[2]],
      range: He,
      heading: r,
      teams: d(),
      entities: o,
      objectives: [...sn(), ...M()],
      localId: t?.id ?? -1,
      localPos: t ? t.pos : null,
      allyTeam: u.allyTeam,
      fovDeg: e.camera?.fov ?? 70,
      squadMembers: zt.own()?.members,
      orderId: zt.own()?.order?.objectiveId,
    });
    let s = `${String.fromCharCode(65 + Ma(Math.floor((i[0] + 1024) / 256), 0, 7))}${Ma(Math.floor((i[2] + 1024) / 256), 0, 7) + 1}`;
    ze.textContent !== s && (ze.textContent = s);
  }
  function Er(t, r) {
    let i = n?.map?.bounds ?? [-1024, -1024, 1024, 1024],
      o = sn(),
      s = (i[0] + i[2]) / 2,
      c = (i[1] + i[3]) / 2,
      p = Math.max(i[2] - i[0], i[3] - i[1]) / 2;
    if (o.length && o.every((e) => e.pos)) {
      let e = 1 / 0,
        t = -1 / 0,
        n = 1 / 0,
        r = -1 / 0;
      for (let i of o)
        ((e = Math.min(e, i.pos[0])),
          (t = Math.max(t, i.pos[0])),
          (n = Math.min(n, i.pos[2])),
          (r = Math.max(r, i.pos[2])));
      ((s = (e + t) / 2),
        (c = (n + r) / 2),
        (p = Ma(Math.max(t - e, r - n) * 0.55 + 250, 300, p)));
    }
    let m = Math.round(_t.clientWidth || 544),
      h = Math.round(_t.clientHeight || 544);
    (bt.width !== m || bt.height !== h) &&
      bt.resize(m, h, window.devicePixelRatio || 1);
    let g = e.modules.get(`demo`)?.getDefinition?.(),
      _ = [...o, ...(a() ?? [])].filter((e) => e.pos).map((e) => e.pos);
    if (_.length) {
      let e = _.map((e) => e[0]),
        t = _.map((e) => e[2]),
        n = Math.min(...e),
        r = Math.max(...e),
        i = Math.min(...t),
        a = Math.max(...t);
      ((s = (n + r) / 2),
        (c = (i + a) / 2),
        (p = m / (2 * Math.min(m / (r - n + 110), h / (a - i + 110)))),
        Ut.active && (p *= 1.5));
    }
    let S = Ut.active && !!g?.vistaDeploy && !!U.aerial,
      w = S || !Ut.active ? U.aerial : null;
    if (S) {
      let e = w.bounds,
        t = (e[0] + e[2]) / 2,
        n = (e[1] + e[3]) / 2,
        r = Math.max(e[2] - e[0], e[3] - e[1]),
        i = Math.min(m * 0.36, h * 0.62) / r;
      ((p = m / (2 * i)), (s = t - (m * 0.24) / i), (c = n - (h * 0.02) / i));
    } else if (w) {
      St = zn(w.bounds, m, h, xt);
      let e = u.spawn.team + `:` + u.spawn.objective;
      if (xt.selection !== e) {
        xt.selection = e;
        let t =
          u.spawn.objective === `hq`
            ? a()?.[u.spawn.team]?.pos
            : (A()?.pos ??
              (u.spawn.objective?.startsWith(`teammate:`)
                ? n.get(C()?.entityId)?.pos
                : o.find((e) => e.id === u.spawn.objective)?.pos));
        if (t) {
          let e = m / 2 + (t[0] - St.x) * St.scale,
            n = h / 2 + (t[2] - St.z) * St.scale;
          (e < 32 || e > m - 32 || n < 32 || n > h - 32) &&
            ((xt.x = t[0]), (xt.z = t[2]), (St = zn(w.bounds, m, h, xt)));
        }
      }
      ((s = St.x), (c = St.z), (p = St.range), (xt.x = s), (xt.z = c));
    }
    let T = new Set(x === u.spawn.team ? v.map((e) => e.entityId) : []),
      E = a()?.[u.spawn.team],
      D = [
        ...(E && n?.match?.mode !== `ffa`
          ? [
              ...o,
              {
                id: `hq`,
                pos: E.pos,
                team: u.spawn.team,
                letter: `HQ`,
                name: `Headquarters`,
              },
            ]
          : o),
        ...M(),
      ];
    if (Vt.active) {
      let e = [...o, ...(a() ?? [])].filter((e) => e.pos).map((e) => e.pos),
        t = e.map((e) => e[0]),
        r = e.map((e) => e[2]),
        i = e.length ? (Math.min(...t) + Math.max(...t)) / 2 : s,
        d = e.length ? (Math.min(...r) + Math.max(...r)) / 2 : c,
        m = e.length
          ? Math.max(
              Math.max(...t) - Math.min(...t),
              Math.max(...r) - Math.min(...r),
            ) /
              2 +
            40
          : p,
        h =
          u.spawn.objective === `hq`
            ? E?.pos
            : (A()?.pos ??
              (u.spawn.objective?.startsWith(`teammate:`)
                ? n.get(C()?.entityId)?.pos
                : o.find((e) => e.id === u.spawn.objective)?.pos));
      (Vt.frame({
        center: [i, n?.map?.getHeight?.(i, d) ?? 0, d],
        extent: m * (g?.deployView?.distance ?? 1),
        pitch: g?.deployView?.pitch,
        yaw: g?.deployView?.yaw,
        home: n?.match?.mode === `ffa` ? null : E?.pos,
        selected: h,
      }),
        Vt.draw(yt, D, {
          teamColor: f,
          selectedId: u.spawn.objective,
          allowed: fn,
          letterOnly: g?.objectiveStyle === `flag`,
        }),
        (b = D.slice()));
      let _ = yt.getBoundingClientRect();
      y = v.flatMap((e) => {
        let t = n.get(e.entityId);
        if (!t || t.hp <= 0 || t.state & l.DEAD) return [];
        let r = Vt.project(t.pos, _, 2.5);
        return r ? [{ ...e, screen: r }] : [];
      });
    } else {
      let e = bt.draw({
        center: [s, c],
        range: p,
        heading: r,
        teams: d(),
        entities:
          n?.match?.mode === `ffa`
            ? []
            : [...(n?.entities?.values?.() ?? [])].filter(
                (e) => e.team === u.spawn.team && !T.has(e.id),
              ),
        objectives: D,
        layout: g,
        showPlaceNames: !1,
        showGrid: !1,
        squadMembers: zt.own()?.members,
        orderId: zt.own()?.order?.objectiveId,
        localId: t?.id ?? -1,
        localPos: t ? t.pos : null,
        allyTeam: u.allyTeam,
        big: !0,
        selectedId: u.spawn.objective,
        bounds: i,
        aerial: w,
        clear: S,
      });
      for (let t of D) t.pos && (t.screen = [e.toX(t.pos[0]), e.toY(t.pos[2])]);
      ((b = D.slice()),
        (y = v.flatMap((t) => {
          let r = n.get(t.entityId);
          return r && r.hp > 0 && !(r.state & l.DEAD)
            ? [{ ...t, screen: [e.toX(r.pos[0]), e.toY(r.pos[2])] }]
            : [];
        })));
    }
    let O = yt.getBoundingClientRect(),
      k = _t.getBoundingClientRect(),
      j = [Ot, Nt, It, ft.querySelector(`.deployment-identity`)]
        .filter((e) => e?.checkVisibility?.() ?? !!e?.offsetParent)
        .map((e) => {
          let t = e.getBoundingClientRect();
          return {
            x: t.left - O.left,
            y: t.top - O.top,
            w: t.width,
            h: t.height,
          };
        });
    Dt.update(
      x === u.spawn.team
        ? y.map((e) => ({
            ...e,
            number: N(e.playerId),
            name: n.players.get(e.playerId)?.name ?? `Squadmate`,
          }))
        : [],
      {
        width: O.width,
        height: O.height,
        left: O.left - k.left,
        top: O.top - k.top,
        selected: u.spawn.objective,
        obstacles: [...D.map((e) => e.screen).filter(Boolean), ...j],
      },
    );
  }
  function Dr() {
    let e = d(),
      t = pr(),
      r = n?.match ?? {};
    ot.replaceChildren();
    let i = ot.appendChild(Q(`div`, `hd`));
    i.appendChild(
      Q(
        `div`,
        `m`,
        r.mode === `ffa`
          ? `free-for-all`
          : r.mode === `tdm`
            ? `team deathmatch`
            : String(r.mode ?? `match`),
      ),
    );
    let a = i.appendChild(Q(`div`, `s`)),
      o = (e, t) => {
        let n = a.appendChild(Q(`div`));
        (n.appendChild(Q(`span`, `sl-lab`, e + ` `)),
          n.appendChild(Q(`b`, ``, t)));
      };
    (o(`Map`, String(n?.mapId ?? `—`).toUpperCase()),
      o(`Players`, String(t.length)),
      o(`Time`, Pa(r.timeLeft)),
      o(`Phase`, String(r.phase ?? `warmup`).toUpperCase()));
    let s = ot.appendChild(Q(`div`, `cols`)),
      c = r.mode === `ffa`;
    for (let n = 0; n < (c ? 1 : 2); n++) {
      let i = s.appendChild(Q(`div`));
      (c && (i.style.gridColumn = `1 / -1`),
        i.style.setProperty(`--tc`, c ? `#9aa0a4` : f(n)),
        i.style.setProperty(`--tci`, Ia(c ? `#9aa0a4` : f(n))));
      let a = i.appendChild(Q(`div`, `th`));
      (a.appendChild(Q(`i`)),
        a.appendChild(Q(`span`, `tn`, c ? `Every man for himself` : p(n))));
      let o = t
          .filter((e) => c || e.team === n)
          .sort((e, t) =>
            c
              ? (t.kills || 0) - (e.kills || 0) ||
                (e.deaths || 0) - (t.deaths || 0) ||
                String(e.name).localeCompare(String(t.name))
              : (t.score || 0) - (e.score || 0) ||
                (t.kills || 0) - (e.kills || 0) ||
                String(e.name).localeCompare(String(t.name)),
          ),
        l = a.appendChild(Q(`div`, `tt`)),
        d = (e, t) => {
          let n = l.appendChild(Q(`div`));
          (n.appendChild(Q(`span`, `sl-lab`, e + ` `)),
            n.appendChild(Q(`b`, ``, t)));
        };
      (d(
        c ? `Kill limit` : `Tickets`,
        String(
          c ? r.killLimit || 30 : Math.max(0, Math.round(+e[n]?.tickets || 0)),
        ),
      ),
        d(`Players`, String(o.length)));
      let m = i.appendChild(Q(`div`, `tr h`));
      for (let [e, t] of [
        [`r`, `#`],
        [`n`, `Name`],
        [`k`, `K`],
        [`d`, `D`],
        [`s`, `Score`],
        [`p`, `Ping`],
      ])
        m.appendChild(Q(`span`, e, t));
      let h = (e) =>
        e.id === u.localPlayerId ||
        (u.localId >= 0 && e.entityId === u.localId);
      o.forEach((e, t) => {
        let n = i.appendChild(
          Q(
            `div`,
            `tr${h(e) ? ` me` : ``}${zt.own()?.members.includes(e.id) ? ` squadmate` : ``}`,
          ),
        );
        n.appendChild(Q(`span`, `r`, String(t + 1)));
        let r = n.appendChild(Q(`span`, `n`)),
          a = Ti(e.id);
        if (a) {
          let e = r.appendChild(Q(`b`, `lv`, String(a.level)));
          e.title = `Level ${a.level}`;
        }
        (r.appendChild(
          document.createTextNode(String(e.name ?? `Player ${e.id}`)),
        ),
          a?.title && r.appendChild(Q(`u`, `ttl`, a.title)),
          e.isBot && r.appendChild(Q(`em`, ``, `AI`)),
          n.appendChild(Q(`span`, `k`, String(e.kills ?? 0))),
          n.appendChild(Q(`span`, `d`, String(e.deaths ?? 0))),
          n.appendChild(Q(`span`, `s`, String(Math.round(e.score ?? 0)))));
        let o = Math.round(e.ping ?? 0);
        n.appendChild(
          Q(
            `span`,
            `p${!e.isBot && o > 150 ? ` bad` : ``}`,
            e.isBot ? `—` : String(o),
          ),
        );
      });
    }
    let l = ot.appendChild(Q(`div`, `ft`));
    (l.appendChild(
      Q(`span`, `sl-lab`, `Hold ${Rt(`scores`, `Tab`)} · scoreboard`),
    ),
      l.appendChild(Q(`span`, `sl-lab`, `Friends session`)),
      ja(ot));
  }
  let Or = ``;
  function kr(e) {
    let t = zt.own(),
      r = JSON.stringify([
        u.spawn.team,
        u.spawn.objective,
        u.localPlayerId,
        x,
        v.map((e) => [e.playerId, e.eligible, e.reason, e.vehicle?.free]),
        t
          ? [
              t.id,
              t.leaderId,
              t.members.map((e) => {
                let t = n.players.get(e),
                  r = n.get(t?.entityId);
                return [
                  e,
                  t?.name,
                  r?.hp > 0,
                  r?.state & (l.DEAD | l.IN_VEHICLE),
                ];
              }),
            ]
          : (n.match.squads ?? []).map((e) => [
              e.id,
              e.team,
              e.members.length,
              e.locked,
              e.leaderId,
              e.requests?.includes(u.localPlayerId),
            ]),
      ]);
    if (((Mt.hidden = rt(n)), r === Or)) return;
    ((Or = r), Mt.replaceChildren());
    let i = t,
      a = Mt.appendChild(Q(`div`, `sq-head`));
    a.append(
      Q(`div`, `sec`, `Squad`),
      Q(`strong`, ``, i ? `${i.name} squad` : `No squad`),
    );
    let o = a.appendChild(
      Q(`button`, `sq-manage`, i ? `Manage · orders` : `All squads`),
    );
    ((o.type = `button`),
      (o.dataset.spawnChoice = `squad-manage`),
      (o.onclick = () => Gt(`squads`)));
    let s = Mt.appendChild(Q(`div`, `sq-list`));
    if (i) {
      let t = x === u.spawn.team;
      for (let r of i.members) {
        let a = n.players.get(r),
          o = n.get(a?.entityId),
          c = o?.hp > 0 && !(o.state & l.DEAD),
          d = r === u.localPlayerId,
          f = t ? v.find((e) => e.playerId === r) : null,
          p = !!f?.eligible && !d,
          m = `teammate:${r}`,
          h = !d && u.spawn.objective === m && !!f && S(f),
          g = N(r),
          _ = e(
            s,
            `oi sq${u.spawn.objective === m ? ` sel` : ``}${p || h ? `` : ` na`}${d ? ` me` : ``}`,
            m,
            !p && !h,
          );
        ((_.dataset.kind = `teammate`),
          _.appendChild(
            Q(`div`, `l`, r === i.leaderId ? `★` : g == null ? `·` : String(g)),
          ),
          _.appendChild(Q(`div`, `nm`)).append(
            Q(`span`, ``, `${a?.name ?? `Connecting…`}${d ? ` · you` : ``}`),
            Q(
              `small`,
              ``,
              `${r === i.leaderId ? `Leader · ` : ``}${a?.isBot ? `AI · ` : ``}${c ? (o.state & l.IN_VEHICLE ? (f?.vehicle?.name.split(` · `)[0] ?? `In vehicle`) : `In field`) : `Deploying`}`,
            ),
          ),
          _.appendChild(
            Q(
              `div`,
              `stt${p ? ` go` : ``}`,
              d
                ? ``
                : p
                  ? f.vehicle
                    ? `Spawn in · ${f.vehicle.free} seats`
                    : `Spawn here`
                  : (f?.reason ?? (c ? `Unavailable` : `Not deployed`)),
            ),
          ),
          p &&
            _.addEventListener(`click`, () => {
              ((u.spawn.objective = m), (u.lastSpawnBuild = -1));
            }));
      }
      for (let e = i.members.length; e < (n.match.squadCapacity ?? 5); e++)
        s.appendChild(Q(`div`, `sq-open`, `Open seat`));
    } else {
      let e = n.match.squadCapacity ?? 5,
        t = (n.match.squads ?? []).filter(
          (e) => e.team == null || e.team === u.spawn.team,
        );
      for (let r of t) {
        let t = r.members.length >= e,
          i = r.requests?.includes(u.localPlayerId),
          a = s.appendChild(Q(`div`, `sq-join`));
        (a.append(Q(`div`, `l`, r.name.slice(0, 1))),
          a
            .appendChild(Q(`div`, `nm`))
            .append(
              Q(`span`, ``, r.name),
              Q(
                `small`,
                ``,
                `${r.members.length}/${e} · ${n.players.get(r.leaderId)?.name ?? `Leader`}${r.locked ? ` · locked` : ``}`,
              ),
            ));
        let o = a.appendChild(
          Q(
            `button`,
            ``,
            i ? `Requested` : t ? `Full` : r.locked ? `Request` : `Join`,
          ),
        );
        ((o.type = `button`),
          (o.disabled = t || i),
          (o.dataset.spawnChoice = `squad-join-` + r.id),
          (o.onclick = () => {
            (zt.send(`join`, { squadId: r.id }), (u.lastSpawnBuild = -1));
          }));
      }
      let r = s.appendChild(Q(`button`, `sq-create`, `+ Create squad`));
      ((r.type = `button`),
        (r.dataset.spawnChoice = `squad-create`),
        (r.onclick = () => {
          (zt.send(`create`), (u.lastSpawnBuild = -1));
        }),
        s.appendChild(
          Q(
            `p`,
            `sq-note`,
            `Squadmates become spawn points and share order points.`,
          ),
        ));
    }
  }
  function Ar() {
    let t = document.activeElement?.dataset.spawnChoice,
      r = (e, t, n, r = !1) => {
        let i = e.appendChild(Q(`button`, t));
        return (
          (i.type = `button`),
          (i.dataset.spawnChoice = n),
          (i.disabled = r),
          i
        );
      },
      i = d(),
      o = sn();
    (pr(), gt.replaceChildren(), (gt.hidden = n?.match?.mode === `ffa`));
    for (let e = 0; e < (gt.hidden ? 0 : 2); e++) {
      let t = r(gt, `team${u.spawn.team === e ? ` sel` : ``}`, `team-` + e);
      (t.style.setProperty(`--tc`, f(e)),
        t.style.setProperty(`--tci`, Ia(f(e))));
      let n = t.appendChild(Q(`div`, `tn`));
      (n.appendChild(Q(`i`)), n.appendChild(Q(`span`, ``, p(e))));
      let a = t.appendChild(Q(`div`, `ti`));
      (a
        .appendChild(Q(`span`, ``, `Tickets `))
        .appendChild(
          Q(`b`, ``, String(Math.max(0, Math.round(+i[e]?.tickets || 0)))),
        ),
        a
          .appendChild(Q(`span`, ``, `Bases `))
          .appendChild(
            Q(`b`, ``, String(o.filter((t) => t.team === e).length)),
          ),
        t.addEventListener(`click`, () => {
          ((u.spawn.team = e),
            (u.spawn.objective = null),
            (u.lastSpawnBuild = -1));
        }));
    }
    {
      let e = u.spawn.objective,
        t = o.find((t) => t.id === e),
        r = C(),
        i = e != null && e === u.spawn.auto,
        a = A(),
        s = j(),
        c =
          e === `hq` ||
          (a && (!a.reason || !i)) ||
          (r && (r.eligible || !i)) ||
          (t && fn(t)),
        l =
          x === u.spawn.team ||
          rt(n) ||
          n?.match?.mode === `ffa` ||
          u.t - (u.spawn.autoAt ?? -99) > 3;
      (i && r && !r.eligible && (u.spawn.autoNoSquad = !0),
        (e == null || !c || (i && !l) || (i && s && e !== s.spawnId)) &&
          (u.spawn.auto = u.spawn.objective = mn(o)));
    }
    jt.replaceChildren();
    let s = !1;
    for (let e of o) {
      let t = fn(e),
        n = r(
          jt,
          `oi${u.spawn.objective === e.id ? ` sel` : ``}${t ? `` : ` na`}`,
          e.id,
          !t,
        );
      ((n.dataset.kind = `base`),
        n.appendChild(Q(`div`, `l ${Fa(e.team)}`, e.letter)),
        n.appendChild(Q(`div`, `nm`, e.name)),
        n.appendChild(
          Q(
            `div`,
            `stt${e.contested ? ` bad` : t ? ` ok` : e.team >= 0 ? ` foe` : ``}`,
            e.contested
              ? `Contested`
              : t
                ? `Available`
                : e.team < 0
                  ? `Neutral`
                  : `Enemy`,
          ),
        ),
        t &&
          ((s = !0),
          n.addEventListener(`click`, () => {
            ((u.spawn.objective = e.id), (u.lastSpawnBuild = -1));
          })));
    }
    {
      let e = r(jt, `oi${u.spawn.objective === `hq` ? ` sel` : ``}`, `hq`);
      ((e.dataset.kind = `base`),
        e.appendChild(Q(`div`, `l ${Fa(u.spawn.team)}`, `HQ`)),
        e.appendChild(
          Q(
            `div`,
            `nm`,
            n?.match?.mode === `ffa`
              ? `Safest spot on the ship`
              : n?.match?.mode === `tdm`
                ? `Safest spot near your team`
                : `Headquarters`,
          ),
        ),
        e.appendChild(Q(`div`, `stt ok`, `Available`)),
        e.addEventListener(`click`, () => {
          ((u.spawn.objective = `hq`), (u.lastSpawnBuild = -1));
        }),
        (s = !0));
    }
    for (let e of k()) {
      let t = r(
        jt,
        `oi${u.spawn.objective === e.spawnId ? ` sel` : ``}${e.reason ? ` na` : ``}`,
        e.spawnId,
        !!e.reason,
      );
      ((t.dataset.kind = `beacon`),
        t.appendChild(Q(`div`, `l ${Fa(u.spawn.team)}`, `BCN`)),
        t.appendChild(Q(`div`, `nm`, e.label)),
        t.appendChild(
          Q(`div`, `stt ${e.reason ? `bad` : `ok`}`, e.reason || `Available`),
        ),
        (t.title = `${e.label} · ${e.reason || `${Tt.spawnCooldown / 60} s between spawns`}`),
        t.addEventListener(`click`, () => {
          ((u.spawn.objective = e.spawnId), (u.lastSpawnBuild = -1));
        }));
    }
    kr(r);
    let c = `class-tabs`;
    (c !== Ft &&
      ((Ft = c),
      Pt.replaceChildren(),
      mt.forEach((e, t) => {
        let n = r(Pt, `kit`, `class-` + t);
        ((n.textContent = e.name),
          (n.dataset.classId = e.id),
          n.addEventListener(`click`, () => {
            (ee(t), (u.lastSpawnBuild = -1), Ar());
          }));
      })),
      Array.from(Pt.children).forEach((e, t) => {
        (e.classList.toggle(`sel`, u.spawn.kit === t),
          e.setAttribute(`aria-pressed`, String(u.spawn.kit === t)));
      }));
    let l = o.find((e) => e.id === u.spawn.objective),
      m = u.spawn.objective === `hq`,
      h = C(),
      g = A();
    qt.disabled = !(m || h || (g && !g.reason) || (l && fn(l)));
    let _ = a()?.[u.spawn.team],
      v = JSON.stringify(P());
    (v !== Nn &&
      ((Nn = v),
      e.modules
        .get(`weapons`)
        ?.prepareLoadout?.(P(), { priority: `visible` })
        ?.catch(() => {})),
      U.update({
        label: m
          ? n?.match?.mode === `ffa`
            ? `Safest spot on the ship`
            : n?.match?.mode === `tdm`
              ? `Safest spot near your team`
              : `Headquarters`
          : g
            ? g.label
            : h
              ? (n.players.get(h.playerId)?.name ?? `Squadmate`)
              : (l?.name ?? `Choose a location`),
        loadout: P(),
        objectives: o,
        team: u.spawn.team,
        spawnId: u.spawn.objective,
        position: m ? _?.pos : g ? g.pos : h ? n.get(h.entityId)?.pos : l?.pos,
      }));
    let y = u.dead ? Math.ceil(Ln() - (u.t - u.deadSince)) : 0;
    qt.textContent = Mn
      ? `PREPARING EQUIPMENT…`
      : qt.disabled
        ? `UNAVAILABLE`
        : y > 0
          ? `DEPLOY IN ${y}`
          : `DEPLOY`;
    let b = h ? (n.players.get(h.playerId)?.name ?? `Squadmate`) : ``,
      S = g
        ? `${g.label} · ${g.reason || `Enemies within ${Tt.enemyRadius} m disable it · ${Tt.spawnCooldown / 60} s between spawns`}`
        : h && !h.eligible
          ? `${b} · ${String(h.reason).toLowerCase()} · you deploy as soon as they are clear`
          : h?.vehicle
            ? `${h.vehicle.name} · ${h.vehicle.free} free seats · availability rechecked on arrival`
            : h
              ? `Near ${n.players.get(h.playerId)?.name ?? `teammate`} · safety rechecked on arrival`
              : ``;
    ((At.textContent = S), (At.hidden = !S));
    let w = u.dead && u.spawn.requestedAt >= u.deadSince;
    ((Kt.textContent =
      y > 0 && w
        ? u.noReviveId === u.localId
          ? `Deploying in ${y}s`
          : `Deploying in ${y}s · a medic can still revive you`
        : w && h && !h.eligible
          ? `Waiting for ${b} to be clear…`
          : w && u.t - u.spawn.requestedAt >= 1.5
            ? `Waiting for a safe spot${h ? ` near ${b}` : ``}… · pick another spawn to go now`
            : u.t - u.spawn.requestedAt < 6
              ? `Joining the battle…`
              : s
                ? Ht()
                  ? `${Rt(`confirm`, `Enter`)} Deploy · D-pad choose · ${Rt(`back`, `Esc`)} back`
                  : `Space or Enter to deploy`
                : `Choose an available spawn location`),
      t &&
        st
          .querySelector(`[data-spawn-choice="${CSS.escape(t)}"]`)
          ?.focus({ preventScroll: !0 }));
  }
  let jr = {};
  function Mr() {
    if (!Jt.firstChild || Jt._built !== !0) {
      (Jt.replaceChildren(),
        (Jt._built = !0),
        Jt.appendChild(Q(`div`, `t`, `Network`)).appendChild(
          Q(`small`, ``, `F3`),
        ));
      for (let e of [
        `fps`,
        `low`,
        `worst`,
        `frame`,
        `draws`,
        `tris`,
        `rtt`,
        `in`,
        `out`,
        `snap`,
        `pred`,
        `tick`,
      ]) {
        let t = Jt.appendChild(Q(`div`, `r`));
        (t.appendChild(
          Q(
            `span`,
            ``,
            {
              fps: `FPS`,
              low: `1% low FPS`,
              worst: `Worst frame ms`,
              frame: `Frame ms`,
              draws: `Draw calls`,
              tris: `Triangles`,
              rtt: `RTT ms`,
              in: `In KB/s`,
              out: `Out KB/s`,
              snap: `Snapshots/s`,
              pred: `Pred. err m`,
              tick: `Server tick`,
            }[e],
          ),
        ),
          (jr[e] = t.appendChild(Q(`b`, ``, `—`))));
      }
      ((jr.graph = Jt.appendChild(Q(`div`, `g`))), ja(Jt));
    }
    let t = e.stats ?? {},
      r = (e, t) => {
        jr[e].textContent !== t && (jr[e].textContent = t);
      },
      i = t.fps > 0 ? t.fps : t.frameMs > 0 ? 1e3 / t.frameMs : null;
    (r(`fps`, i == null ? `—` : String(Math.round(i))),
      r(`low`, t.lowFps > 0 ? String(Math.round(t.lowFps)) : `—`),
      r(`worst`, t.worstMs > 0 ? String(Math.round(t.worstMs)) : `—`),
      r(`frame`, t.frameMs == null ? `—` : (+t.frameMs).toFixed(2)),
      r(`draws`, t.drawCalls == null ? `—` : String(t.drawCalls)),
      r(
        `tris`,
        t.triangles == null
          ? `—`
          : t.triangles >= 1e6
            ? `${(t.triangles / 1e6).toFixed(2)}M`
            : t.triangles >= 1e3
              ? `${(t.triangles / 1e3).toFixed(1)}k`
              : String(t.triangles),
      ));
    let a = u.net,
      o = !a || u.t - u.netT > 3;
    r(
      `rtt`,
      a?.rtt == null ? `offline` : `${Math.round(a.rtt)}${o ? ` ·` : ``}`,
    );
    let s = (e) =>
      e != null && Number.isFinite(+e) ? (e / 1024).toFixed(1) : null;
    (r(`in`, s(a?.bytesInPerSec) ?? `—`),
      r(`out`, s(a?.bytesOutPerSec) ?? `—`),
      r(
        `snap`,
        a?.snapshotsPerSec == null
          ? `—`
          : String(Math.round(a.snapshotsPerSec)),
      ));
    let c = Array.isArray(a?.predictionErrors) ? a.predictionErrors : null;
    (r(
      `pred`,
      c && c.length
        ? (c.reduce((e, t) => e + t, 0) / c.length).toFixed(3)
        : a?.predictionError == null
          ? `—`
          : (+a.predictionError).toFixed(3),
    ),
      r(
        `tick`,
        a?.serverTick == null
          ? String(n?.time?.tick ?? `—`)
          : String(a.serverTick),
      ));
    let l = jr.graph;
    if (l.children.length !== 40) {
      l.replaceChildren();
      for (let e = 0; e < 40; e++) l.appendChild(Q(`i`));
    }
    let d = u.rttHist,
      f = Math.max(50, ...d);
    for (let e = 0; e < 40; e++) {
      let t = d[d.length - 40 + e];
      l.children[e].style.height =
        t == null ? `1px` : `${Ma(t / f, 0.04, 1) * 100}%`;
    }
  }
  function Nr() {
    (Yt.replaceChildren(),
      Yt.appendChild(Q(`div`, `t`, `Modules`)).appendChild(
        Q(`small`, ``, `F4`),
      ));
    let t =
        (typeof window < `u` && window.__game?.modules) ||
        e.modules?.status?.() ||
        {},
      n = Object.keys(t);
    n.length ||
      Yt.appendChild(Q(`div`, `r`)).appendChild(Q(`span`, ``, `none loaded`));
    for (let e of n) {
      let n = String(t[e]),
        r = Yt.appendChild(Q(`div`, `r`)),
        i = r.appendChild(Q(`span`));
      (i.appendChild(Q(`i`, n)),
        i.appendChild(document.createTextNode(e)),
        r.appendChild(Q(`span`, `st ${n}`, n)));
    }
    ja(Yt);
  }
  function Pr() {
    ((Pn = !0),
      jn++,
      (Mn = !1),
      window.__cubieDeploy && (window.__cubieDeploy = null),
      Be.clear(),
      o?.dispose(),
      nt.dispose(),
      U.dispose(),
      Dt.dispose(),
      Bt.dispose(),
      K.dispose(),
      Ut.dispose(),
      zt.dispose(),
      Lt.dispose(),
      G.dispose());
    for (let e of Yn)
      try {
        e?.();
      } catch {}
    (window.removeEventListener(`keydown`, Qn),
      window.removeEventListener(`keyup`, $n),
      window.removeEventListener(`blur`, er),
      window.removeEventListener(`resize`, cr),
      We.dispose(),
      I.dispose(),
      i.remove());
  }
  return {
    progression: G,
    root: i,
    update: ur,
    setLocalEntity: _n,
    show: vn,
    hide: yn,
    toggle: xn,
    message: Sn,
    hitmarker: En,
    damageFrom: On,
    addFeed: An,
    toast: Tn,
    setSpread: Bn,
    setAmmo: Gn,
    setMinimapRange: Kn,
    setTerrain: qn,
    isVisible: (e) => !!u.vis[e],
    state: u,
    dispose: Pr,
    deployNow: gn,
    objectives: sn,
    spawnTab: () => lt,
    openSpawnTab: (e) => Gt(e),
    setTipObjective(e) {
      u.tipObjective = e ?? null;
    },
    clearTransients() {
      for (let e of u.msgs) e.el.remove();
      ((u.msgs.length = 0), (u.msgQ.length = 0));
      for (let e of u.toasts) e.el.remove();
      ((u.toasts.length = 0),
        (u.dmg.length = 0),
        I.clear(),
        (u.spread = u.spreadTarget = 8));
    },
    setShowcaseState(e) {
      let t = String(e || `hud`)
        .split(`,`)
        .map((e) => e.trim());
      ((u.scoreForced = t.includes(`scoreboard`) || t.includes(`all`)),
        (u.spawnForced = t.includes(`spawn`) ? !0 : null),
        (u.vis.netstats =
          t.includes(`netstats`) || t.includes(`all`) || t.includes(`debug`)),
        (u.vis.modules =
          t.includes(`modules`) || t.includes(`all`) || t.includes(`debug`)));
    },
  };
}
