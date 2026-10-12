// assets__ui-D46k2G3Q 27 — appendchild
// Lines 11015-13840 of readable/assets__ui-D46k2G3Q.pretty.js (statement-aligned).
function ea(e) {
  let t = e.three,
    n = e.world,
    r = e.ui || document.body,
    a = Q(`div`, `sl`);
  r.appendChild(a);
  let o = e.config.frost ? Ii(e, a) : null,
    s = r.clientWidth || window.innerWidth,
    c = r.clientHeight || window.innerHeight,
    l = {
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
      flash: 0,
      hpSeen: -1,
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
      vis: Object.fromEntries(Gi.map((e) => [e, !0])),
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
    u = () => (Array.isArray(n?.teams) ? n.teams : []),
    d = (e) => (u()[e] && u()[e].color) || `#ECEAE3`,
    f = (e) =>
      (u()[e] && u()[e].name) ||
      (e === 0 ? `Team A` : e === 1 ? `Team B` : `Neutral`),
    p = `salient.classes.v1`,
    m = {};
  try {
    m = JSON.parse(localStorage.getItem(p)) ?? {};
  } catch {}
  let h = Object.fromEntries(
      pt.map((e) => [e.id, ft({ ...m[e.id], classId: e.id })]),
    ),
    g = pt.some(
      (e) =>
        m[e.id]?.weapons &&
        m[e.id].weapons.some((t, n) => t !== h[e.id].weapons[n]),
    ),
    _ = [],
    v = [],
    y = [],
    b = -1,
    x = (e) =>
      e.eligible ||
      (e.playerId !== l.localPlayerId &&
        !!e.reason &&
        e.reason !== `Deploying` &&
        e.reason !== `Not in your squad`),
    S = () =>
      _.find(
        (e) =>
          `teammate:${e.playerId}` === l.spawn.objective &&
          b === l.spawn.team &&
          x(e),
      ),
    C = null,
    w = () => {
      let e =
        n?.entities && l.localPlayerId >= 0 ? vt(n, l.localPlayerId) : null;
      return e
        ? { id: e.id, pos: e.pos, team: e.team }
        : C?.pos && !C.reason
          ? { id: C.id, pos: C.pos, team: C.team }
          : null;
    },
    T = () => {
      let e = w();
      return e && e.team === l.spawn.team && n?.match?.mode !== `ffa`
        ? e
        : null;
    },
    E = () => {
      let e = T();
      return e
        ? {
            id: `beacon`,
            kind: `beacon`,
            pos: e.pos,
            team: l.spawn.team,
            letter: `BCN`,
            name: `Respawn beacon`,
          }
        : null;
    },
    D = (e) => {
      let t = (
        Mt.own()?.members.filter((e) => e !== l.localPlayerId) ?? []
      ).indexOf(e);
      return t < 0 ? null : t + 1;
    },
    O = () => h[pt[l.spawn.kit]?.id ?? pt[0].id],
    k = `salient.class.last`;
  try {
    let e = pt.findIndex((e) => e.id === localStorage.getItem(k));
    e >= 0 && (l.spawn.kit = e);
  } catch {}
  let A = (e) => {
      if (pt[e]) {
        l.spawn.kit = e;
        try {
          localStorage.setItem(k, pt[e].id);
        } catch {}
      }
    },
    j = () => {
      try {
        localStorage.setItem(p, JSON.stringify(h));
      } catch {
        e.events.emit(`ui:message`, {
          kind: `warn`,
          text: `Loadout works this session; browser storage unavailable.`,
          ttl: 4,
        });
      }
    };
  a.appendChild(Q(`div`, `sl-vig`));
  let M = a.appendChild(Q(`div`, `sl-dmg`)),
    ee = a.appendChild(Q(`div`, `sl-dead`)),
    N = a.appendChild(Q(`div`, `sl-centre`)),
    P = N.appendChild(Q(`div`, `sl-xh`));
  for (let e of [`u`, `d`, `l`, `r`, `dot`]) P.appendChild(Q(`i`, e));
  let F = N.appendChild(Q(`div`, `sl-hm`));
  for (let e = 0; e < 4; e++) F.appendChild(Q(`i`));
  let te = [];
  for (let e = 0; e < 6; e++) te.push(N.appendChild(Q(`div`, `sl-di`)));
  let I = a.appendChild(Q(`div`, `sl-lane`)),
    ne = a.appendChild(Q(`div`, `sl-msgs`)),
    re = a.appendChild(Q(`div`, `sl-top`)),
    ie = Ji(re.appendChild(Q(`div`, `sl-fill dark sl-compass sl-banner`))),
    ae = ie.appendChild(Q(`div`, `tx`)),
    oe = ``,
    L = (e) => {
      ((oe = typeof e == `string` ? e.trim().slice(0, 120) : ``),
        (ae.textContent = oe),
        ie.classList.toggle(`empty`, !oe));
    };
  L(``);
  let se = re.appendChild(Q(`div`, `sl-bare sl-match`)),
    ce = (e) => {
      let t = Q(`div`, `tm${e === 1 ? ` r` : ``}`);
      return {
        el: t,
        n: t.appendChild(Q(`span`, `n`, ``)),
        v: t.appendChild(Q(`span`, `v`, ``)),
        fill: t.appendChild(Q(`div`, `bar`)).appendChild(Q(`i`)),
      };
    },
    le = ce(0);
  se.appendChild(le.el);
  let ue = se.appendChild(Q(`div`, `clock`)),
    de = ue.appendChild(Q(`div`, `v`, `0:00`)),
    R = ue.appendChild(Q(`div`, `p`, `Warm-up`)),
    z = ce(1);
  se.appendChild(z.el);
  let fe = ``,
    pe = re.appendChild(Q(`div`, `sl-objs`)),
    me = [],
    he = re.appendChild(Q(`div`, `sl-onpt`));
  he.appendChild(Q(`i`, `r`));
  let ge = he.appendChild(Q(`b`, ``, ``)),
    _e = { id: null, key: `` },
    B = a.appendChild(Q(`div`, `sl-mkl`)),
    V = [],
    be = a.appendChild(Q(`div`, `sl-feed`)),
    xe = a.appendChild(Q(`div`, `sl-bare sl-players`)),
    Ce = xe.appendChild(Q(`div`, `v`, `0`));
  xe.appendChild(Q(`div`, `n`, `Players online`));
  let we = -1,
    Te = a.appendChild(Q(`div`, `sl-bare sl-fps`)),
    Ee = Te.appendChild(Q(`b`, ``, `—`));
  Te.appendChild(Q(`span`, ``, `FPS`));
  let De = a.appendChild(Q(`div`, `sl-bare sl-fps sl-ms`)),
    Oe = De.appendChild(Q(`b`, ``, `—`));
  (De.appendChild(Q(`span`, ``, `MS`)), (De.hidden = !0));
  let ke = -1,
    Ae = -2,
    je = Ji(a.appendChild(Q(`div`, `sl-fill sl-panel sl-map`))),
    Me = On(je.appendChild(Q(`canvas`)), {
      size: qi.map,
      dpr: window.devicePixelRatio || 1,
    }),
    Ne = je.appendChild(Q(`div`, `r`, `45 M`)),
    Pe = je.appendChild(Q(`div`, `sq`, ``));
  (je.setAttribute(
    `aria-label`,
    `Heading-up radar. Enemy gunfire: last known position, three seconds.`,
  ),
    (je.title = `Enemy gunfire leaves a last-known ping for 3 seconds. Suppressors stay off radar. Arrows beside contacts indicate another floor.`));
  let Fe = jn(),
    Ie = 45,
    Le = un(e, a, P),
    Re = a.appendChild(Q(`div`, `sl-bare sl-panel sl-ammo`)),
    ze = Re.appendChild(Q(`div`, `left`)),
    Be = ze.appendChild(Q(`div`, `wn`, `RIFLE`)),
    Ve = ze.appendChild(Q(`div`, `fm`, `AUTO`)),
    Ue = Re.appendChild(Q(`div`, `right`)).appendChild(Q(`div`, `nums`)),
    Ge = Ue.appendChild(Q(`div`, `magw`)),
    Ke = Ge.appendChild(Q(`div`, `mag`, `30`)),
    qe = Ge.appendChild(Q(`div`, `ticks`)),
    Je = Ge.appendChild(Q(`div`, `rl`));
  Je.appendChild(Q(`span`, ``, `Reloading`));
  let Ye = Je.appendChild(Q(`div`, `b`)).appendChild(Q(`i`)),
    Xe = Ue.appendChild(Q(`div`, `res`, `120`)),
    Ze = -1,
    Qe = a.appendChild(Q(`div`, `sl-scrim`)),
    $e = Ji(a.appendChild(Q(`div`, `sl-score`)));
  $e.hidden = !0;
  let et = a.appendChild(Q(`div`, `sl-spawn`));
  et.hidden = !0;
  let tt = Ji(et.appendChild(Q(`div`, `in`))),
    nt = `deploy`,
    rt = !1,
    at = null,
    ot = tt.appendChild(Q(`header`, `spawn-head`)),
    st = ot.appendChild(Q(`nav`, `deployment-tabs`));
  st.setAttribute(`aria-label`, `Deployment menu`);
  let ct = [`deploy`, `loadout`, `unlocks`],
    lt = ct.map((e) => {
      let t = st.appendChild(Q(`button`, ``));
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
        (t.onclick = () => zt(e)),
        t
      );
    }),
    ut = di(e, tt, a, {
      onChange: (e, { ready: t = !1 } = {}) => {
        if (
          ((lt[2].querySelector(`small`).textContent =
            `Level ${e.rank.level} · ${e.rank.name}`),
          at?.setRank(e),
          !t)
        )
          return;
        let n = g;
        g = !1;
        for (let t of pt) {
          let r = h[t.id],
            i = ft(r, {
              canEquip: (t) => We(e, t),
              canAttach: (t, n, r) => He(e, t, n, r),
            });
          (i.weapons.some((e, t) => e !== r.weapons[t]) ||
            JSON.stringify(i.attachments) !==
              JSON.stringify(Se(r.attachments))) &&
            ((h[t.id] = i), (n = !0));
        }
        (n && (j(), (l.lastSpawnBuild = -1)), jt.refresh());
      },
    }),
    dt = ot.appendChild(Q(`div`, `teams`)),
    mt = tt.appendChild(Q(`div`, `mapw`)),
    ht = mt.appendChild(Q(`canvas`)),
    gt = On(ht, { size: 544, dpr: window.devicePixelRatio || 1 }),
    H = { zoom: 1, x: null, z: null },
    U = null,
    W = null,
    _t = !1;
  ((ht.style.touchAction = `none`),
    ht.addEventListener(`pointerdown`, (e) => {
      e.button === 0 &&
        U &&
        !Ft.active &&
        ((_t = !1),
        (W = {
          id: e.pointerId,
          px: e.clientX,
          py: e.clientY,
          lx: e.clientX,
          x: U.x,
          z: U.z,
          scale: U.scale,
        }),
        ht.setPointerCapture(e.pointerId));
    }),
    ht.addEventListener(`pointermove`, (e) => {
      if (!W || e.pointerId !== W.id) return;
      let t = e.clientX - W.px,
        n = e.clientY - W.py;
      (Math.hypot(t, n) > 4 && (_t = !0),
        !Ft.active &&
          _t &&
          ((H.x = W.x - t / W.scale), (H.z = W.z - n / W.scale)));
    }));
  let yt = () => {
    W = null;
  };
  (ht.addEventListener(`pointerup`, yt),
    ht.addEventListener(`pointercancel`, yt),
    ht.addEventListener(
      `wheel`,
      (e) => {
        (e.preventDefault(),
          !Ft.active &&
            (H.zoom = Yi(H.zoom * Math.exp(-e.deltaY * 0.001), 1, 3)));
      },
      { passive: !1 },
    ));
  let bt = hi(mt, (e) => {
    _.find((t) => t.playerId === e)?.eligible &&
      b === l.spawn.team &&
      ((l.spawn.objective = `teammate:${e}`), (l.lastSpawnBuild = -1));
  });
  (mt.appendChild(
    Q(`div`, `map-readout`, `Select a captured base, HQ or squadmate`),
  ),
    mt.appendChild(Q(`div`, `n`, `N`)));
  let xt = tt.appendChild(Q(`div`, `spawn-column`)),
    St = xt.appendChild(Q(`div`, `side`)),
    Ct = St.appendChild(Q(`div`, `sub`, ``));
  ((Ct.hidden = !0), St.appendChild(Q(`div`, `sec`, `Spawn point`)));
  let wt = St.appendChild(Q(`div`, `ol`)),
    Tt = tt.appendChild(Q(`section`, `squad-quick`)),
    Et = tt.appendChild(Q(`section`, `class-deck`));
  Et.appendChild(Q(`div`, `sec`, `Class · keys 1–4`));
  let Dt = Et.appendChild(Q(`div`, `kits`)),
    Ot = ``,
    At = xt.appendChild(Q(`div`, `foot`)),
    jt = Zr(e, tt, {
      getLoadout: O,
      getProgress: ut.get,
      getTeam: () => d(l.spawn.team),
      selectClass(e) {
        (A(pt.findIndex((t) => t.id === e)), (l.lastSpawnBuild = -1));
      },
      save() {
        (j(), (Ot = ``), (l.lastSpawnBuild = -1));
      },
      back: () => zt(`deploy`),
    }),
    Mt = mi(e, a, tt, {
      playerId: () => l.localPlayerId,
      alive: () => {
        let e = K();
        return e?.hp > 0 && !(e.state & i.DEAD);
      },
      back: () => {
        (zt(`deploy`), rt && ((rt = !1), (l.spawnForced = null)));
      },
    }),
    Pt = yi(e, a, Mt, {
      playerId: () => l.localPlayerId,
      active: () =>
        et.hidden &&
        !l.scoreHeld &&
        !l.scoreForced &&
        K()?.hp > 0 &&
        !(K()?.state & i.DEAD),
    }),
    Ft = Oi(e),
    It = Fi(e),
    Lt = new URLSearchParams(location.search).has(`flatmap`),
    Rt = wi(e, { root: a, weaponName: Yt, hitmarker: (e, t) => gn(e, t) });
  function zt(e) {
    ((nt = e),
      (tt.dataset.tab = e),
      (mt.hidden = e === `squads` || e === `unlocks`));
    for (let t of [xt, Tt, Et]) t.hidden = e !== `deploy`;
    (lt.forEach((t, n) => {
      (t.classList.toggle(`selected`, ct[n] === e),
        t.setAttribute(`aria-pressed`, String(ct[n] === e)));
    }),
      jt.show(e === `loadout`),
      ut.show(e === `unlocks`),
      Mt.show(e === `squads`),
      (l.lastSpawnBuild = -1));
  }
  let Bt = At.appendChild(Q(`div`, `hint`, `Space or Enter to deploy`)),
    Vt = Ji(At.appendChild(Q(`button`, `btn`, `Deploy`)));
  (zt(`deploy`),
    (at = fi(tt, {
      world: n,
      thumb: (e, t) => jt.thumb(e, t),
      classes: pt,
      open: (e) => zt(nt === e ? `deploy` : e),
      tab: () => nt,
      visible: () => !et.hidden,
    })),
    at.setRank(ut.get()),
    Vt.addEventListener(`click`, () => Tn()),
    ht.addEventListener(`click`, (e) => {
      if (_t) {
        _t = !1;
        return;
      }
      let t = ht.getBoundingClientRect(),
        n = e.clientX - t.left,
        r = e.clientY - t.top,
        i = null,
        a = 22;
      for (let e of y) {
        if (!e.pos || !e.screen || !rn(e)) continue;
        let t = Math.hypot(e.screen[0] - n, e.screen[1] - r);
        t < a && ((a = t), (i = e));
      }
      i && rn(i) && ((l.spawn.objective = i.id), (l.lastSpawnBuild = -1));
      let o = v
        .filter(
          (e) =>
            e.eligible &&
            b === l.spawn.team &&
            Math.hypot(e.screen[0] - n, e.screen[1] - r) < 28,
        )
        .sort(
          (e, t) =>
            Math.hypot(e.screen[0] - n, e.screen[1] - r) -
            Math.hypot(t.screen[0] - n, t.screen[1] - r),
        );
      if (o.length) {
        ((l.spawn.objective = `teammate:${o[0].playerId}`),
          (l.lastSpawnBuild = -1));
        return;
      }
    }));
  let Ht = Ji(a.appendChild(Q(`div`, `sl-fill dark sl-panel sl-dbg`)));
  Ht.hidden = !0;
  let Ut = Ji(a.appendChild(Q(`div`, `sl-fill dark sl-panel sl-dbg mods`)));
  ((Ut.hidden = !0),
    (l.vis.netstats = !1),
    (l.vis.modules = !1),
    (l.vis.scoreboard = !1),
    (l.vis.spawn = !1));
  let Wt = {
    crosshair: P,
    health: Le.el,
    ammo: Re,
    compass: ie,
    match: se,
    minimap: je,
    markers: B,
    killfeed: be,
    players: xe,
    messages: ne,
    scoreboard: $e,
    spawn: et,
    netstats: Ht,
    modules: Ut,
  };
  function K() {
    let t = e.modules?.get?.(`player`);
    if (t?.getLocalEntity)
      try {
        let e = t.getLocalEntity();
        if (e) return (e.id !== l.localId && (l.localId = e.id), e);
      } catch {}
    return l.localId >= 0 ? (n?.get?.(l.localId) ?? null) : null;
  }
  function Gt() {
    if (!n?.players) return null;
    if (l.localPlayerId >= 0 && n.players.get(l.localPlayerId))
      return n.players.get(l.localPlayerId);
    if (l.localId >= 0) {
      for (let e of n.players.values()) if (e.entityId === l.localId) return e;
    }
    return null;
  }
  function Kt(e) {
    if (e == null || !n?.players) return null;
    let t = n.get?.(e);
    if (t) {
      if (t.owner >= 0 && n.players.get(t.owner)) return n.players.get(t.owner);
      for (let t of n.players.values()) if (t.entityId === e) return t;
    }
    return n.players.get(e) ?? null;
  }
  function qt(e, t = `Soldier`) {
    return Kt(e)?.name ?? t;
  }
  function Jt(e) {
    let t = Kt(e);
    return t && t.team != null && t.team >= 0
      ? t.team
      : (n?.get?.(e)?.team ?? -1);
  }
  function Yt(t) {
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
  function Xt(t) {
    let n = e.modules?.get?.(`weapons`)?.weaponDefs;
    return !n || t == null
      ? null
      : Array.isArray(n)
        ? (n.find((e) => e?.id === t) ?? n[t] ?? null)
        : (n[t] ?? null);
  }
  let Zt = [];
  function Qt() {
    let e = n?.match?.objectives;
    if (((Zt.length = 0), !Array.isArray(e))) return Zt;
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
      Zt.push({
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
    return Zt;
  }
  function $t() {
    let t = e.camera;
    if (t?.getWorldDirection) {
      let e = t.getWorldDirection(en);
      return (
        (l.camYaw = Math.atan2(-e.x, -e.z)),
        (l.camPitch = Math.asin(Yi(e.y, -1, 1))),
        l.camYaw
      );
    }
    return K()?.yaw ?? 0;
  }
  let en = t ? new t.Vector3() : { x: 0, y: 0, z: -1 },
    tn = t ? new t.Vector3() : null,
    nn = (e) => ((((-e * 180) / Math.PI) % 360) + 360) % 360;
  function rn(e) {
    return e.team === l.spawn.team && !e.contested && e.raw?.spawnable !== !1;
  }
  function an(e) {
    ((l.spawn.deathPos = e?.pos ? [e.pos[0], e.pos[1], e.pos[2]] : null),
      (l.spawn.objective = null),
      (l.spawn.auto = null),
      (l.spawn.autoNoSquad = !1),
      (l.spawn.autoAt = l.t),
      (_ = []),
      (b = -1));
  }
  function on(t) {
    if (T()) return `beacon`;
    let r =
        l.spawn.deathPos ??
        K()?.pos ??
        e.modules.get(`demo`)?.getDefinition?.()?.homeBases?.[l.spawn.team]
          ?.pos,
      i = (e) =>
        !e || !r ? 0xde0b6b3a7640000 : (e[0] - r[0]) ** 2 + (e[2] - r[2]) ** 2,
      a = null,
      o = 1 / 0;
    if (b === l.spawn.team && !l.spawn.autoNoSquad)
      for (let e of _) {
        if (!e.eligible || e.playerId === l.localPlayerId) continue;
        let t = i(n?.get?.(e.entityId)?.pos);
        t < o && ((o = t), (a = `teammate:${e.playerId}`));
      }
    if (a) return a;
    for (let e of t) {
      if (!rn(e)) continue;
      let t = i(e.pos);
      t < o && ((o = t), (a = e.id));
    }
    return a ?? `hq`;
  }
  function sn(e) {
    l.localId = e ?? -1;
    let t = Kt(e);
    t && (l.localPlayerId = t.id);
  }
  function cn(e) {
    return (
      e in l.vis &&
      ((l.vis[e] = !0),
      e === `scoreboard` && (l.scoreForced = !0),
      e === `spawn` && (l.spawnForced = !0),
      !0)
    );
  }
  function ln(e) {
    return (
      e in l.vis &&
      ((l.vis[e] = !1),
      e === `scoreboard` && (l.scoreForced = !1),
      e === `spawn` && (l.spawnForced = !1),
      !0)
    );
  }
  function dn(e) {
    return l.vis[e] ? ln(e) : cn(e);
  }
  function fn(e = `info`, t = ``, n = 3.5) {
    if (!t) return;
    if (((e = String(e)), e === `kill` || e === `score`)) {
      hn(t, e === `kill` ? `Eliminated` : ``);
      return;
    }
    n = +n > 0 ? +n : 3.5;
    let r = l.msgs[l.msgs.length - 1];
    if (r && r.kind === e && r.text === t) {
      ((r.t = 0), r.el.classList.add(`on`), (r.ttl = Math.max(r.ttl, n)));
      return;
    }
    if (r && r.t < r.ttl && pn(e) < pn(r.kind)) {
      for (
        l.msgQ = l.msgQ.filter((t) => t.kind !== e),
          l.msgQ.push({ kind: e, text: t, ttl: n, at: l.t });
        l.msgQ.length > 2;
      )
        l.msgQ.shift();
      return;
    }
    mn(e, t, n);
  }
  function pn(e) {
    return e === `major`
      ? 3
      : e === `objective` || e === `warn` || e === `t0` || e === `t1`
        ? 2
        : 1;
  }
  function mn(e, t, n) {
    for (let e of l.msgs) e.el.remove();
    l.msgs.length = 0;
    let r = Q(`div`, `sl-msg ${e}`),
      i =
        {
          info: ``,
          warn: `Warning`,
          objective: `Objective`,
          major: ``,
          squad: `Squad`,
          vehicle: `Vehicle`,
          t0: f(0),
          t1: f(1),
        }[e] ?? e;
    (i && r.appendChild(Q(`div`, `k`, i)),
      r.appendChild(Q(`div`, `t`, t)),
      ne.appendChild(r),
      requestAnimationFrame(() => r.classList.add(`on`)),
      l.msgs.push({ el: r, kind: e, text: t, t: 0, ttl: n }));
  }
  function hn(e, t, n = ``, r = null) {
    let i = Q(`div`, n ? `sl-toast ${n}` : `sl-toast`),
      a = /^(\+?\d+)\s*(.*)$/.exec(e);
    if (
      (a
        ? (i.appendChild(Q(`span`, ``, a[2] || t)),
          i.appendChild(Q(`b`, ``, a[1])))
        : (i.appendChild(Q(`span`, ``, e)), t && i.appendChild(Q(`b`, ``, t))),
      (r ?? I).appendChild(i),
      !r)
    )
      for (l.toasts.push({ el: i, t: 0 }); l.toasts.length > 4;)
        l.toasts.shift().el.remove();
  }
  function gn(e = !1, t = !1) {
    Nn(l.hm, e, t) &&
      ((F.className = `sl-hm${e ? ` hs` : ``}${t ? ` kill` : ``}`),
      F.classList.add(`on`),
      ur(0));
  }
  function _n(e, t, n = null) {
    if (
      ((l.flash = Math.min(1, l.flash + Yi((t || 10) / 40, 0.25, 1))),
      !e && !Number.isFinite(n))
    )
      return;
    let r = K()?.pos ?? [0, 0, 0],
      i = (e?.[0] ?? r[0]) - r[0],
      a = (e?.[2] ?? r[2]) - r[2];
    if (!Number.isFinite(n) && i * i + a * a < 0.01) return;
    let o = Number.isFinite(n) ? n : (Math.atan2(i, -a) * 180) / Math.PI;
    for (l.dmg.push({ bearing: o, t: 1.4 }); l.dmg.length > 6;) l.dmg.shift();
  }
  function vn({
    killerId: e,
    victimId: t,
    weapon: n,
    headshot: r,
    killerName: i,
    victimName: a,
    killerTeam: o,
    victimTeam: s,
  }) {
    let c = i ?? (e == null ? null : qt(e)),
      u = o ?? (e == null ? -1 : Jt(e)),
      d = a ?? qt(t),
      f = s ?? Jt(t),
      p = Q(`div`, `sl-fill dark e${u === 0 ? ` k0` : u === 1 ? ` k1` : ``}`);
    c && c !== d && p.appendChild(Q(`span`, `n ${Qi(u)}`.trim(), c));
    let m = Yt(n);
    for (
      r && p.appendChild(Q(`i`, `hs`)),
        p.appendChild(Q(`span`, `w`, m || (c && c !== d ? `killed` : `died`))),
        p.appendChild(Q(`span`, `n ${Qi(f)}`.trim(), d)),
        ((e != null && e === l.localId) ||
          t === l.localId ||
          (l.localPlayerId >= 0 &&
            (e === l.localPlayerId || t === l.localPlayerId))) &&
          p.classList.add(`me`),
        be.insertBefore(p, be.firstChild),
        l.feed.unshift({ el: p, t: 0 });
      l.feed.length > 6;
    )
      l.feed.pop().el.remove();
  }
  let bn = 0,
    xn = !1,
    Sn = ``,
    Cn = !1;
  function wn() {
    let e = Qt().find((e) => e.id === l.spawn.objective),
      t = l.spawn.objective === `hq`,
      n = S(),
      r = l.spawn.objective === `beacon` && !!T();
    return !t && !n && !r && (!e || !rn(e))
      ? null
      : t
        ? `hq-${l.spawn.team}`
        : r
          ? `beacon`
          : n
            ? `teammate:${n.playerId}`
            : e.id;
  }
  async function Tn() {
    let t = wn();
    if (!t || et.hidden || Cn) return !1;
    let n = window.__cubieClaim,
      r = n && !n.claimed ? (n.check() ? n() : null) : !0;
    if (!r) return !1;
    let i = ++bn,
      a = l.spawn.team,
      o = l.spawn.objective,
      s = structuredClone(O()),
      c = JSON.stringify(s);
    ((xn = !0),
      e.modules
        .get(`player`)
        ?.lockForDeploy?.(
          l.dead ? Math.max(0, En() - (l.t - l.deadSince)) * 1e3 : 0,
        ),
      e.modules.get(`player`)?.extendDeployCapture?.(6e4));
    let u;
    try {
      await Promise.race([
        e.modules.get(`weapons`)?.prepareLoadout?.(s, { priority: `spawn` }),
        new Promise((e, t) => {
          u = setTimeout(() => t(Error(`Equipment load timed out`)), 6e4);
        }),
      ]);
    } catch {
      return (
        !Cn &&
          i === bn &&
          ((xn = !1),
          e.modules.get(`player`)?.extendDeployCapture?.(0),
          e.modules.get(`player`)?.setPointerLock?.(!1),
          fn(`warn`, `Equipment could not load. Press Deploy to retry.`, 5)),
        !1
      );
    } finally {
      clearTimeout(u);
    }
    return (await r)
      ? Cn || i !== bn
        ? !1
        : ((xn = !1),
          e.modules
            .get(`player`)
            ?.extendDeployCapture?.(
              l.dead ? Math.max(0, En() - (l.t - l.deadSince)) * 1e3 : 0,
            ),
          et.hidden ||
          a !== l.spawn.team ||
          o !== l.spawn.objective ||
          wn() !== t ||
          JSON.stringify(O()) !== c
            ? (e.modules.get(`player`)?.setPointerLock?.(!1), !1)
            : ((l.spawn.requestedAt = l.t),
              e.events?.emit?.(`ui:spawnRequest`, {
                objectiveId: t,
                team: a,
                loadout: s,
              }),
              !0))
      : (!Cn &&
          i === bn &&
          ((xn = !1),
          e.modules.get(`player`)?.extendDeployCapture?.(0),
          e.modules.get(`player`)?.setPointerLock?.(!1)),
        !1);
  }
  function En() {
    let t = e.modules.get(`demo`)?.getDefinition?.(),
      n = (t?.ffa ?? t?.tdm)?.respawnSeconds;
    return Number.isFinite(n) ? n : G.respawnSeconds;
  }
  function Dn(e) {
    if (e == null) {
      l.spreadOverride = null;
      return;
    }
    ((l.spreadOverride = +e), (l.spreadOverrideT = 0.5));
  }
  function An(e) {
    if (!e) {
      l.ammo.override = null;
      return;
    }
    ((l.ammo.override = { ...e }), (l.ammo.overrideT = 1));
  }
  function Pn(e) {
    ((Ie = Yi(+e || 45, 25, 2e3)), (Ne.textContent = `${Math.round(Ie)} M`));
  }
  function Fn(e) {
    Me.setTerrain(e, (e, t) => gt.adoptTerrain(e, t));
  }
  let In = e.events,
    Ln = [],
    Rn = (e, t) => {
      In?.on && Ln.push(In.on(e, t));
    };
  (Rn(`ui:banner`, (e) => L(e?.text)),
    Rn(`deployment:teammates`, (e) => {
      ((_ = e?.targets ?? []), (b = e?.team), (l.lastSpawnBuild = -1));
    }),
    Rn(`beacon:spawn`, (e) => {
      let t = JSON.stringify(C);
      ((C = e ?? null), JSON.stringify(C) !== t && (l.lastSpawnBuild = -1));
    }),
    Rn(`beacon:destroyed`, (e) => {
      (e?.owner === l.localPlayerId || e?.id === C?.id) &&
        ((C = null), (l.lastSpawnBuild = -1));
    }),
    Rn(`beacon:status`, (e) => {
      (e?.reason === `planted` || e?.reason === `destroyed`) &&
        ((C = null), (l.lastSpawnBuild = -1));
    }),
    Rn(`net:disconnected`, () => {
      ((_ = []), (v = []), (b = -1));
    }),
    Rn(`player:local`, (e) => {
      (Fe.clear(),
        e?.entityId != null && (l.localId = e.entityId),
        e?.playerId != null && (l.localPlayerId = e.playerId));
    }),
    Rn(`spot:target`, (e) => {
      Number.isInteger(e?.targetId) &&
        Fe.spot(e.targetId, l.t, (+e.durationTicks || 360) / 60);
    }),
    Rn(`vehicle:damage`, (e) => {
      let t = K();
      t &&
        e &&
        (e.pos &&
          t.state & i.IN_VEHICLE &&
          t.seat === e.vehicleId &&
          _n(e.pos, Math.min(40, e.amount ?? 20)),
        e.attackerId === l.localId &&
          e.amount > 0 &&
          (gn(!1, !1),
          hn(
            String(Math.max(1, Math.round(e.amount))),
            e.fatal ? `Vehicle destroyed` : `Armor damage`,
            e.fatal ? `` : `assist`,
          )));
    }),
    Rn(`player:damage`, (e) => {
      if (e) {
        if (e.targetId === l.localId && e.amount > 0)
          _n(null, e.amount, e.damageBearing);
        else if (
          e.attackerId != null &&
          e.attackerId === l.localId &&
          l.localId >= 0
        ) {
          gn(e.part === `head`, !1);
          let t = n?.get?.(l.localId)?.pos,
            r = l.dmgOut.get(e.targetId) ?? { amount: 0, t: 0, dist: 0 };
          ((r.amount += +e.amount || 0),
            (r.t = l.t),
            t &&
              e.pos &&
              (r.dist = Math.hypot(e.pos[0] - t[0], e.pos[2] - t[2])),
            l.dmgOut.set(e.targetId, r));
        }
      }
    }),
    Rn(`score:award`, (e) => {
      e && e.points > 0 && hn(`+${e.points} ${e.reason ?? `Squad`}`, ``, `hs`);
    }),
    Rn(`player:death`, (t) => {
      if (!t) return;
      let n = t.weapon === `Redeploy`;
      (n || vn(t),
        l.pendingDeaths.push({ ...t, readyAt: l.t + 0.15 }),
        t.victimId === l.localId &&
          (l.dead || an(K()),
          (l.dead = !0),
          (l.deadSince = l.t),
          e.modules.get(`player`)?.setPointerLock?.(!1),
          n || Rt.start(t, l.t)));
    }));
  function zn(e) {
    let t =
        l.localId >= 0 &&
        (e.killerId === l.localId ||
          (l.localPlayerId >= 0 && e.killerPlayerId === l.localPlayerId)) &&
        e.victimId !== l.localId,
      n = l.dmgOut.get(e.victimId);
    if ((l.dmgOut.delete(e.victimId), t)) {
      let t = Q(`div`, `sl-award`);
      for (
        I.appendChild(t),
          gn(!!e.headshot, !0),
          hn(`+100 Eliminated`, ``, ``, t),
          e.headshot && hn(`+25 Headshot`, ``, `hs`, t),
          e.orderBonus > 0 && hn(`+${e.orderBonus} Squad order`, ``, `hs`, t),
          n &&
            n.dist >= 100 &&
            hn(`Longshot`, `${Math.round(n.dist)} m`, `far`, t),
          l.toasts.push({ el: t, t: 0 });
        l.toasts.length > 4;
      )
        l.toasts.shift().el.remove();
    } else
      n &&
        e.victimId !== l.localId &&
        n.amount >= 20 &&
        l.t - n.t < 8 &&
        hn(`Assist`, ``, `assist`);
  }
  (Rn(`medic:pads`, (e) => {
    e?.kind === `revive` &&
      l.localId >= 0 &&
      e.targetId === l.localId &&
      l.dead &&
      (Rt.stop(), (l.reviveHoldUntil = l.t + 1.6));
  }),
    Rn(`player:spawn`, (e) => {
      e &&
        (e.entityId === l.localId || (l.localId < 0 && e.local)) &&
        (Fe.clear(), (l.dead = !1), (l.spawn.requestedAt = -1e9));
    }),
    Rn(`weapon:fire`, (e) => {
      e &&
        e.entityId === l.localId &&
        ((l.spreadTarget = Math.min(l.spreadTarget + 5, 42)),
        l.ammo.override &&
          l.ammo.override.mag > 0 &&
          !e.noAmmoDec &&
          l.ammo.override.mag--);
    }),
    Rn(`weapon:reload`, (e) => {
      e &&
        e.entityId === l.localId &&
        ((l.ammo.reloading = !0),
        (l.ammo.reloadT = 0),
        (l.ammo.reloadDur = +e.duration || 2.2));
    }),
    Rn(`objective:changed`, (e) => {
      if (!e) return;
      let t = Qt().find((t) => t.id === e.objectiveId);
      if (
        t &&
        e.team != null &&
        e.team >= 0 &&
        (e.progress == null || e.progress >= 1) &&
        e.silent !== !0
      ) {
        let n = e.team === l.allyTeam;
        fn(
          `t${e.team}`,
          `${n ? `Captured` : `Lost`} ${t.letter} · ${t.name}`,
          3,
        );
      }
    }),
    Rn(`match:phase`, (e) => {
      e?.phase &&
        fn(
          e.phase === `live` || e.phase === `ended` ? `major` : `info`,
          e.phase === `live`
            ? `Match live`
            : e.phase === `ended`
              ? e.winnerName
                ? `Match over · ${e.winnerPlayer === l.localPlayerId ? `You win` : `${e.winnerName} wins`} · ${e.winnerKills} kills`
                : `Match over`
              : `Warm-up`,
          e.winnerName ? 8 : 3,
        );
    }),
    Rn(`ui:message`, (e) => {
      e &&
        (a.dataset.grenadeHud !== `active` ||
          (e.text !== `GRENADE NEARBY — FIND COVER` &&
            e.text !== `G · THROW FRAG — 2 PER LIFE` &&
            !String(e.text).startsWith(`FRAG THROWN ·`) &&
            !String(e.text).startsWith(`THROWING IT BACK`))) &&
        fn(e.kind, e.text, e.ttl);
    }),
    Rn(`ui:spread`, (e) => {
      e != null && Dn(typeof e == `number` ? e : e.spread);
    }),
    Rn(`ui:ammo`, (e) => An(e)),
    Rn(`ui:hitmarker`, (e) => gn(!!e?.headshot, !!e?.kill)),
    Rn(`ui:scoped`, (e) => {
      ((l.scoped = !!e?.scoped), (P.style.opacity = l.scoped ? `0` : ``));
    }),
    Rn(`net:stats`, (e) => {
      ((l.net = e),
        (l.netT = l.t),
        e &&
          typeof e.rtt == `number` &&
          (l.rttHist.push(e.rtt), l.rttHist.length > 40 && l.rttHist.shift()));
    }),
    Rn(`net:connected`, (e) => {
      (e?.playerId != null && (l.localPlayerId = e.playerId),
        fn(`info`, `Connected`, 2));
    }),
    Rn(`net:disconnected`, () => fn(`warn`, `Connection lost`, 4)));
  let Bn = (t) => {
      if (
        t.code === `KeyP` &&
        !t.repeat &&
        !it(e.world) &&
        !t.target?.closest?.(`input,textarea,select,[contenteditable="true"]`)
      ) {
        if ((t.preventDefault(), rt)) ((rt = !1), (l.spawnForced = null));
        else {
          let t = K();
          ((rt = !!t && t.hp > 0 && !(t.state & i.DEAD)),
            rt && (l.spawnForced = !0),
            (et.hidden = !1),
            zt(`squads`),
            e.modules.get(`player`)?.setPointerLock?.(!1));
        }
        return;
      }
      if (t.code === `Escape` && rt) {
        ((rt = !1), (l.spawnForced = null));
        return;
      }
      if (
        !et.hidden &&
        nt === `deploy` &&
        !t.target?.closest?.(
          t.code === `Tab`
            ? `input,textarea,select,[contenteditable="true"]`
            : `input,textarea,select,button,[contenteditable="true"]`,
        )
      ) {
        let e = { Digit1: 0, Digit2: 1, Digit3: 2, Digit4: 3, Digit5: 4 }[
          t.code
        ];
        if (e != null && pt[e]) {
          (t.preventDefault(), A(e), vr());
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
                ...Qt()
                  .filter(rn)
                  .map((e) => e.id),
                `hq`,
                ...(T() ? [`beacon`] : []),
                ...(b === l.spawn.team
                  ? _.filter(
                      (e) => e.eligible && e.playerId !== l.localPlayerId,
                    ).map((e) => `teammate:${e.playerId}`)
                  : []),
              ],
              t = e.indexOf(l.spawn.objective);
            ((l.spawn.objective = e[(t < 0 ? 0 : t + n + e.length) % e.length]),
              (l.lastSpawnBuild = -1),
              vr(),
              tt
                .querySelector(`.oi.sel`)
                ?.scrollIntoView({ block: `nearest` }));
          }
          return;
        }
      }
      if (et.hidden || t.code !== `Tab`) {
        if (t.repeat) {
          t.code === `Tab` && t.preventDefault();
          return;
        }
        t.code === `Tab`
          ? ((l.scoreHeld = !0), t.preventDefault())
          : t.code === `F3`
            ? (dn(`netstats`), t.preventDefault())
            : t.code === `F4`
              ? (dn(`modules`), t.preventDefault())
              : ((t.code === `Space` &&
                  !et.hidden &&
                  !rt &&
                  (nt === `deploy` || nt === `loadout`) &&
                  !t.target?.closest?.(
                    `input,textarea,select,[contenteditable="true"]`,
                  )) ||
                  (t.code === `Enter` &&
                    !et.hidden &&
                    nt === `deploy` &&
                    !t.target?.closest?.(
                      `input,textarea,select,button,[contenteditable="true"]`,
                    ))) &&
                (t.preventDefault(), Tn());
      }
    },
    Vn = (e) => {
      e.code === `Tab` && ((l.scoreHeld = !1), e.preventDefault());
    },
    Hn = () => {
      l.scoreHeld = !1;
    };
  (window.addEventListener(`keydown`, Bn),
    window.addEventListener(`keyup`, Vn),
    window.addEventListener(`blur`, Hn));
  let Un = 1,
    Wn = Ui,
    Gn = qi.safe,
    Kn = qi.map,
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
  function qn() {
    ((s = r.clientWidth || window.innerWidth),
      (c = r.clientHeight || window.innerHeight));
    let e = Yi(Math.min(s / 1920, c / 1080), Li ? 0.5 : 0.85, 1.4);
    ((Un = Math.round(e * 200) / 200), a.style.setProperty(`--ui`, String(Un)));
    let t = (e) => Math.round(e * Un),
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
    for (let e in n) a.style.setProperty(`--${e}`, `${Math.max(2, t(n[e]))}px`);
    for (let e of Ki) a.style.setProperty(`--g${e}`, `${Math.max(1, t(e))}px`);
    ((Gn = t(qi.safe)),
      a.style.setProperty(`--safe`, `${Gn}px`),
      a.style.setProperty(`--diS`, `${Math.round(c * 0.36)}px`),
      (Kn = t(qi.map)),
      (Wn = Math.round((Ui * Un) / 2) * 2),
      (re.style.left = `${Math.round((s - Wn) / 2)}px`),
      (re.style.width = `${Wn}px`),
      Jn(!0),
      (re.style.top = `${Gn}px`),
      (N.style.left = `${Math.round(s / 2)}px`),
      (N.style.top = `${Math.round(c / 2)}px`),
      (I.style.left = `0px`),
      (I.style.width = `${s}px`),
      (I.style.top = `${Math.round(c / 2) + t(qi.laneY)}px`),
      (ne.style.left = `0px`),
      (ne.style.width = `${s}px`),
      (ne.style.top = `${t(qi.msgY)}px`),
      (je.style.left = `${Gn}px`),
      (je.style.bottom = `${Gn}px`),
      (je.style.width = `${Kn}px`),
      (je.style.height = `${Kn}px`),
      Me.width !== Kn && Me.resize(Kn, Kn, window.devicePixelRatio || 1),
      (Re.style.right = `${Gn}px`),
      (Re.style.bottom = `${Gn}px`),
      (Re.style.width = `${t(qi.ammoW)}px`),
      (Re.style.height = `${t(qi.ammoH)}px`),
      (xe.style.right = `${Gn}px`),
      (xe.style.top = `calc(${Gn}px + var(--salient-settings-clearance, 0px))`),
      (be.style.right = `${Gn}px`),
      (be.style.top = `calc(${Gn + (xe.offsetHeight || t(52)) + t(10)}px + var(--salient-settings-clearance, 0px))`),
      (Ht.style.left = `${Gn}px`),
      (Ht.style.top = `${Gn}px`),
      (Te.style.left = `${Gn}px`),
      (Te.style.top = `${Gn}px`),
      (De.style.left = `${Gn}px`),
      (De.style.top = `${Gn + t(20)}px`),
      (Ut.style.left = `${Gn}px`),
      (q.l = Gn + t(20)),
      (q.r = s - Gn - t(20)),
      (q.clusterB = Gn + t(168)),
      (q.t = q.clusterB + t(26)),
      (q.b = c - Gn - t(18)),
      (q.blX = Gn + Kn + t(20)),
      (q.blY = c - Gn - Kn - t(14)),
      (q.brX = s - Gn - t(qi.ammoW) - t(20)),
      (q.brY = c - Gn - t(qi.ammoH) - t(70)),
      (q.cX = Wn / 2 + t(24)));
  }
  function Jn(e = !1) {
    let t = [
      se.hidden,
      le.n.textContent,
      le.v.textContent,
      z.n.textContent,
      z.v.textContent,
      de.textContent,
      R.textContent,
      R.className,
    ].join(`
`);
    if (!e && t === fe) return;
    ((fe = t), (se.style.width = `auto`));
    let n = Math.ceil(se.getBoundingClientRect().width / 2) * 2;
    n > 0 && (se.style.width = `${n}px`);
  }
  function Yn(e, t) {
    return (
      (e = Yi(e, q.l, q.r)),
      (t = Yi(t, q.t, q.b)),
      e < q.blX && t > q.blY && (t = q.blY),
      e > q.brX && t > q.brY && (t = q.brY),
      e > q.brX && t < q.feedB && (t = q.feedB),
      Math.abs(e - s / 2) < q.cX && t < q.t && (t = q.t),
      [e, t]
    );
  }
  let Xn = () => qn();
  (window.addEventListener(`resize`, Xn), qn());
  let Zn = -2;
  function Qn(t) {
    ((t = Yi(t || 1 / 60, 0, 0.1)), (l.t += t));
    let r = K(),
      o = Gt(),
      s =
        n?.match?.mode === `ffa`
          ? -9
          : (o?.team ?? r?.team ?? l.spawn.team ?? 0);
    s !== Zn && ((Zn = s), (l.allyTeam = s), (l.spawn.team = s >= 0 ? s : 0));
    let c = yn();
    (a.style.setProperty(`--ally`, c.ally),
      a.style.setProperty(`--enemy`, c.enemy));
    for (let e of [0, 1]) {
      let t = e === s ? c.ally : c.enemy;
      (a.style.setProperty(`--t` + e, t),
        a.style.setProperty(`--t` + e + `-ink`, $i(t)));
    }
    let u = $t(),
      d = !!r && !!(r.state & Ri);
    (d &&
      !l.dead &&
      (an(r),
      (l.dead = !0),
      (l.deadSince = l.t),
      e.modules.get(`player`)?.setPointerLock?.(!1)),
      !d && r && l.dead && l.t - l.deadSince > 0.5 && (l.dead = !1),
      r ? (l.absentSince = -1) : l.absentSince < 0 && (l.absentSince = l.t),
      r && Rt.record(l.t, r),
      Rt.playing() && Rt.update(l.t));
    let f =
      l.spawnForced === !0
        ? !0
        : l.spawnForced === !1
          ? !1
          : (!r && l.t - Math.max(0, l.absentSince) > 1) ||
            (l.dead &&
              l.t - l.deadSince > 2.5 &&
              !Rt.playing() &&
              !(l.t < (l.reviveHoldUntil ?? -1)));
    (et.hidden === f &&
      ((et.hidden = !f),
      (l.lastSpawnBuild = -1),
      f
        ? (zt(rt ? `squads` : `deploy`),
          e.modules.get(`player`)?.setPointerLock?.(!1))
        : (bn++, (xn = !1), jt.show(!1), Mt.show(!1))),
      (l.vis.spawn = f));
    let p = (l.scoreHeld || l.scoreForced) && !f;
    ($e.hidden === p &&
      (($e.hidden = !p), (l.lastScoreBuild = -1), Qe.classList.toggle(`on`, p)),
      (l.vis.scoreboard = p));
    let m = !f && !p && !Rt.playing();
    Mt.update(l.t, m);
    let h = it(e.world);
    (tt.classList.contains(`no-squads`) !== h &&
      (tt.classList.toggle(`no-squads`, h),
      h && tt.classList.remove(`show-squad`)),
      h &&
        nt === `squads` &&
        (rt && ((rt = !1), (l.spawnForced = null)), zt(`deploy`)),
      Pt.update());
    for (let e of [
      `ammo`,
      `compass`,
      `match`,
      `minimap`,
      `markers`,
      `killfeed`,
      `messages`,
    ]) {
      let t = Wt[e],
        n = l.vis[e] && m && !(e === `ammo` && r?.state & i.IN_VEHICLE);
      t.hidden === n && (t.hidden = !n);
    }
    pe.hidden !== se.hidden && (pe.hidden = se.hidden);
    {
      let e = l.vis.players && l.t < l.playersUntil && !p && !Rt.playing();
      xe.hidden === e && (xe.hidden = !e);
    }
    let g = !!(r?.state & i.IN_VEHICLE),
      _ =
        g &&
        [`sight`, `chase`, `cockpit`].includes(
          e.modules.get(`vehicles`)?.getViewMode?.(),
        ),
      v = !(l.vis.crosshair && m && !l.dead && !p && g && !_);
    (P.hidden !== v && (P.hidden = v),
      (ee.style.opacity = l.dead && !Rt.playing() ? `1` : `0`));
    {
      let t = l.dead && !Rt.playing();
      t !== !!l.muffled &&
        ((l.muffled = t),
        e.modules.get(`audio`)?.setMuffle?.(+!!t, t ? 0.9 : 0.08));
    }
    {
      let t = (!!r && !l.vis.spawn) || Rt.playing();
      if (t !== l.present) {
        let n = l.present === void 0;
        ((l.present = t),
          e.modules.get(`audio`)?.setPresent?.(t, n ? 0.01 : t ? 0.25 : 0.4));
      }
    }
    (Ht.hidden !== !l.vis.netstats && (Ht.hidden = !l.vis.netstats),
      Ut.hidden !== !l.vis.modules && (Ut.hidden = !l.vis.modules));
    {
      let e = m && !l.vis.netstats;
      (Te.hidden === e && (Te.hidden = !e),
        e ? er() : De.hidden || ((De.hidden = !0), (Ae = -2)));
    }
    (Ut.hidden ||
      (Ut.style.top = `${Gn + (l.vis.netstats ? Ht.offsetHeight + Math.round(10 * Un) : 0)}px`),
      $n(r, m),
      rr(r, t),
      ir(r, t, m, Un),
      ar(r, t),
      l.t - l.lastMatch > 0.1 && ((l.lastMatch = l.t), sr(), nr()),
      cr(r),
      lr(t),
      ur(t),
      dr(t),
      fr(t),
      !je.hidden &&
        l.t - (l.lastMap ?? -1) >= 1 / 30 &&
        ((l.lastMap = l.t), pr(r, u)),
      p && l.t - l.lastScoreBuild > 0.5 && ((l.lastScoreBuild = l.t), hr()));
    {
      let t = e.modules.get(`demo`)?.getDefinition?.(),
        n =
          f &&
          nt === `deploy` &&
          !Rt.playing() &&
          !Lt &&
          !!e.renderer &&
          !!t &&
          !t.flatDeploy;
      n !== Ft.active &&
        (Ft.sync(n),
        tt.classList.toggle(`theatre`, n),
        et.classList.toggle(`theatre`, n),
        (et.style.backdropFilter = et.style.webkitBackdropFilter =
          n ? `none` : ``));
      let r = f ? nt : ``;
      document.body.dataset.slMenu !== r && (document.body.dataset.slMenu = r);
    }
    {
      let t = e.modules.get(`demo`)?.getDefinition?.(),
        n =
          f &&
          !Rt.playing() &&
          !!e.renderer &&
          !!(t?.elevatorDeploy || t?.vistaDeploy);
      (n !== It.active &&
        (It.sync(n, t),
        et.classList.toggle(`elevator`, n),
        (et.style.backdropFilter = et.style.webkitBackdropFilter =
          n ? `none` : ``)),
        n && It.frame());
    }
    (f &&
      (l.t - l.lastSpawnBuild > 0.5 && ((l.lastSpawnBuild = l.t), vr()),
      nt !== `squads` && nt !== `unlocks` && mr(r, u)),
      l.vis.netstats && br(),
      l.vis.modules &&
        l.t - l.lastModBuild > 1 &&
        ((l.lastModBuild = l.t), xr()));
  }
  function $n(e, t) {
    he.hidden === t && (he.hidden = !t);
    let r = null;
    if (
      t &&
      e?.pos &&
      !(e.state & Ri) &&
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
    if ((he.classList.contains(`on`) !== i && he.classList.toggle(`on`, i), !r))
      return;
    let a = r.team === 0 || r.team === 1 ? r.team : -1,
      o = r.progressTeam === 0 || r.progressTeam === 1 ? r.progressTeam : -1,
      s = Yi(+r.progress || 0, 0, 1),
      c = a >= 0 ? a : s > 0 ? o : -1,
      l = `${r.letter}|${a}|${c}|${Math.round(s * 100)}|${+!!r.contested}`;
    l !== _e.key &&
      ((_e.key = l),
      ge.textContent !== (r.letter ?? ``) && (ge.textContent = r.letter ?? ``),
      he.style.setProperty(`--lc`, a >= 0 ? `var(--t${a}-ink)` : `#CFCBC1`),
      he.style.setProperty(`--pc`, c >= 0 ? `var(--t${c})` : `var(--ink)`),
      he.style.setProperty(`--p`, c >= 0 ? s.toFixed(3) : `0`),
      he.classList.toggle(`con`, !!r.contested));
  }
  function er() {
    let t = e.stats ?? {},
      n =
        l.net && typeof l.net.rtt == `number` && l.t - l.netT < 3
          ? Math.round(l.net.rtt)
          : -1;
    n !== Ae &&
      ((Ae = n),
      (De.hidden = n < 0),
      n >= 0 && (Oe.textContent = String(n)),
      De.classList.toggle(`low`, n > 150));
    let r =
      t.fps > 0
        ? Math.round(t.fps)
        : t.frameMs > 0
          ? Math.round(1e3 / t.frameMs)
          : 0;
    r !== ke &&
      ((ke = r),
      (Ee.textContent = r > 0 ? String(r) : `—`),
      Te.classList.toggle(`low`, r > 0 && r < 30));
  }
  function tr() {
    return n?.players
      ? Array.from(n.players.values()).filter(
          (e) => !e.reserve || e.id === l.localPlayerId,
        )
      : [];
  }
  function nr() {
    let e = 0;
    if (n?.players)
      for (let t of n.players.values()) !t.isBot && !t.reserve && e++;
    e !== we &&
      ((we = e),
      (l.playersUntil = l.t + 5),
      (Ce.textContent = String(e)),
      (xe.querySelector(`.n`).textContent =
        e === 1 ? `Player online` : `Players online`),
      xe.classList.remove(`bump`),
      xe.offsetWidth,
      xe.classList.add(`bump`));
  }
  function rr(e, t) {
    let n = 8;
    if (e?.state & i.IN_VEHICLE) ((n = 4), (l.spreadOverride = null));
    else if (l.spreadOverride != null) {
      ((l.spreadOverrideT -= t),
        l.spreadOverrideT < 0 && (l.spreadOverride = null));
      let e = l.spreadOverride ?? 0;
      n = e <= 1.5 ? 4 + e * 40 : e;
    } else if (e) {
      n = 8;
      let t = Math.hypot(e.vel?.[0] || 0, e.vel?.[2] || 0);
      ((n += Math.min(10, t * 1.4)),
        e.state & Bi && (n += 12),
        e.state & zi && (n = 3),
        e.stance === 1 && (n -= 2),
        e.stance === 2 && (n -= 4),
        e.state & Vi && (n += 6));
    }
    ((l.spreadTarget = Yi(Xi(l.spreadTarget, n, 1 - Math.exp(-t * 10)), 2, 48)),
      (l.spread = Xi(l.spread, l.spreadTarget, 1 - Math.exp(-t * 18))));
    let r = Math.round(Yi(l.spread, 2, 60) * Un);
    P._g !== r && ((P._g = r), P.style.setProperty(`--gap`, `${r}px`));
    let a = !!(e && e.state & zi);
    P._ads !== a && ((P._ads = a), P.classList.toggle(`ads`, a));
    let o = !!(e && e.state & Bi && !a);
    P._spr !== o && ((P._spr = o), P.classList.toggle(`sprint`, o));
  }
  function ir(e, t, n, r) {
    let i = e ? Math.max(0, +e.hp || 0) : 0;
    (e &&
      l.hpSeen >= 0 &&
      i < l.hpSeen - 0.5 &&
      (l.flash = Math.min(1, l.flash + Yi((l.hpSeen - i) / 40, 0.2, 1))),
      (l.hpSeen = e ? i : -1),
      (l.flash = Math.max(0, l.flash - t * 1.6)),
      (M.style.opacity = String(Yi(l.flash, 0, 1) * 0.9)));
    let a = !!e && i > 0 && !l.dead && !(e.state & Ri);
    Le.update(t, e, { living: a, active: n && l.vis.health, ui: r });
  }
  function ar(t, n) {
    let r = l.ammo,
      i,
      o,
      s,
      c,
      u;
    if (
      (r.override &&
        ((r.overrideT -= n),
        (i = r.override.mag),
        (o = r.override.reserve),
        (s = r.override.magSize),
        (c = r.override.mode),
        (u = r.override.name),
        r.override.reloading != null && (r.reloading = !!r.override.reloading)),
      t && (i == null || r.overrideT < 0))
    ) {
      let e = Xt(t.weapon);
      ((i = t.ammo ?? i ?? 0),
        (o = t.ext?.reserve ?? t.ext?.ammoReserve ?? o ?? e?.reserve ?? 0),
        (s = e?.magSize ?? e?.mag ?? s ?? Math.max(i, 30)),
        (c = e?.fireMode ?? e?.mode ?? c),
        (u = e?.name ?? u ?? Yt(t.weapon)),
        t.state & Hi
          ? r.reloading || ((r.reloading = !0), (r.reloadT = 0))
          : r.override || (r.reloading = !1));
    }
    ((i ??= r.mag),
      (o ??= r.reserve),
      (s ??= r.magSize),
      (c ??= r.mode),
      (u ??= r.name),
      r.reloading &&
        ((r.reloadT += n),
        (Ye.style.width = `${Yi(r.reloadT / r.reloadDur, 0, 1) * 100}%`),
        r.reloadT >= r.reloadDur && !r.override && (r.reloading = !1),
        r.override && r.reloadT >= r.reloadDur && (r.reloading = !1)));
    let d =
      r.override?.tool ?? [`tool`, `defib`].includes(Xt(t?.weapon)?.class);
    (d && ((i = `—`), (o = ``), (c = `TOOL`), (s = 1)),
      i !== r.mag && ((r.mag = i), (Ke.textContent = String(i))),
      !d && e.modules.get(`weapons`)?.isUnlimitedAmmo?.() && (o = `∞`),
      o !== r.reserve && ((r.reserve = o), (Xe.textContent = String(o))));
    let f = String(Wi[c] ?? c ?? `AUTO`).toUpperCase();
    if (
      (f !== r.mode && ((r.mode = f), (Ve.textContent = f)),
      u !== r.name && ((r.name = u), (Be.textContent = String(u))),
      s !== r.magSize || Ze !== s || r._ticksUi !== Un)
    ) {
      ((r.magSize = s), (Ze = s), (r._ticksUi = Un), qe.replaceChildren());
      let e = Yi(Math.round(s), 1, 30),
        t = Math.max(2, Math.round(2.4 * Un)),
        n = 30 * t + 29,
        i = Math.max(t, Math.floor((n - (e - 1)) / e));
      for (let t = 0; t < e; t++) {
        let e = qe.appendChild(Q(`i`));
        e.style.width = `${i}px`;
      }
      (a.style.setProperty(`--tickw`, `${e * i + (e - 1)}px`),
        (r._ticksN = e),
        (r._filled = -1));
    }
    let p = Yi(Math.round((i / Math.max(1, s)) * r._ticksN), 0, r._ticksN);
    if (r._filled !== p) {
      r._filled = p;
      let e = qe.children;
      for (let t = 0; t < e.length; t++) e[t].classList.toggle(`e`, t >= p);
    }
    let m = i <= Math.max(3, s * 0.2);
    (r._low !== m && ((r._low = m), Re.classList.toggle(`low`, m)),
      r._rel !== r.reloading &&
        ((r._rel = r.reloading), Re.classList.toggle(`rel`, r.reloading)));
  }
  function or() {
    let e = tr();
    return {
      me: e.find(
        (e) =>
          e.id === l.localPlayerId ||
          (l.localId >= 0 && e.entityId === l.localId),
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
  function sr() {
    let e = u();
    if (n?.match?.mode === `ffa`) {
      let { me: e, lead: t, limit: n } = or();
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
        let i = r === 0 ? le : z;
        i.n.textContent !== e &&
          ((i.n.textContent = e),
          (i.n.style.color = `var(--ink)`),
          (i.fill.style.background = r
            ? `var(--warn, #d0543a)`
            : `var(--ink)`));
        let a = String(t);
        (i.v.textContent !== a && (i.v.textContent = a),
          (i.fill.hidden = !1),
          (i.fill.style.width = `${Yi(t / n, 0, 1) * 100}%`),
          (i.fill.parentElement.title = `${t} / ${n} kills to win`));
      });
    } else
      for (let t = 0; t < 2; t++) {
        let r = e[t],
          i = t === 0 ? le : z,
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
          (i.fill.style.width = l ? `${Yi(o / c, 0, 1) * 100}%` : `0%`),
          (i.fill.parentElement.title = l
            ? `${o} / ${c} starting tickets`
            : `Starting ticket count unavailable`));
      }
    let t = n?.match ?? {},
      r = Zi(t.timeLeft);
    de.textContent !== r && (de.textContent = r);
    let i = String(t.phase ?? `warmup`),
      a = i === `warmup` ? `Warm-up` : i;
    (R.textContent !== a && ((R.textContent = a), (R.className = `p ${i}`)),
      Jn());
    let o = Qt();
    for (; me.length < o.length;) {
      let e = pe.appendChild(Q(`div`, `sl-fill dark o`));
      (e.appendChild(Q(`span`, `g`, ``)),
        e.appendChild(Q(`i`, `u`)),
        e.appendChild(Q(`i`, `p`)),
        me.push(e));
    }
    for (let e = 0; e < me.length; e++) {
      let t = me[e],
        n = o[e];
      if (!n) {
        t.hidden = !0;
        continue;
      }
      t.hidden = !1;
      let r = `sl-fill dark o ${Qi(n.team)}${n.contested ? ` con` : ``}`.trim();
      t.className !== r && (t.className = r);
      let i = t.firstChild;
      i.textContent !== n.letter && (i.textContent = n.letter);
      let a = Yi(n.progress, 0, 1);
      t.children[2].style.width = `${a * 100}%`;
    }
  }
  function cr(t) {
    let n = Qt(),
      r = e.camera;
    for (; V.length < n.length;) {
      let e = B.appendChild(Q(`div`, `sl-mk`));
      (e.appendChild(Q(`div`, `d`)).appendChild(Q(`b`, ``, ``)),
        e.appendChild(Q(`div`, `m`, ``)),
        e.appendChild(Q(`div`, `pr`)).appendChild(Q(`i`)),
        e.appendChild(Q(`i`, `ar`)),
        V.push(e));
    }
    let i =
      t?.pos ?? (r ? [r.position.x, r.position.y, r.position.z] : [0, 0, 0]);
    l.t - (l.lastFeedB ?? -1) >= 0.25 &&
      ((l.lastFeedB = l.t),
      (q.feedB = be.hidden
        ? 0
        : be.offsetTop + be.offsetHeight + Math.round(26 * Un)));
    let a = l.msgs.length > 0,
      o = Math.round(340 * Un),
      u = Math.round(qi.msgY * Un) - Math.round(16 * Un),
      d = u + Math.round(100 * Un);
    for (let e = 0; e < V.length; e++) {
      let t = V[e],
        f = n[e];
      if (!f || !f.pos || !r || !tn) {
        t.hidden ||= !0;
        continue;
      }
      (tn.set(f.pos[0], f.pos[1] + 3.5, f.pos[2]),
        tn.applyMatrix4(r.matrixWorldInverse));
      let p = tn.z > 0;
      tn.applyMatrix4(r.projectionMatrix);
      let m = (tn.x * 0.5 + 0.5) * s,
        h = (1 - (tn.y * 0.5 + 0.5)) * c;
      p && ((m = s - m), (h = c + 100));
      let g = p || m < q.l || m > q.r || h < q.t || h > q.b;
      if (g) {
        let e = `${Math.atan2(h - c / 2, m - s / 2).toFixed(2)}rad`;
        t._a !== e && ((t._a = e), t.style.setProperty(`--a`, e));
        let n = Yn(m, h);
        ((m = n[0]), (h = n[1]));
      }
      ((t.hidden = !1),
        (t.style.transform = `translate(${Math.round(m)}px,${Math.round(h)}px) translate(-50%,-100%)`));
      let _ = `sl-mk ${Qi(f.team)}${f.contested ? ` con` : ``}${g ? ` edge` : ``}${Mt.own()?.order?.objectiveId === f.id ? ` squad-order` : ``}${Pt.targetId() === f.id ? ` squad-target` : ``}`;
      t.className !== _ && (t.className = _);
      let v = a && Math.abs(m - s / 2) < o && h > u && h < d,
        y = Math.hypot(f.pos[0] - i[0], f.pos[2] - i[2]),
        b = !g && Math.hypot(m - s / 2, h - c / 2) < c * 0.14,
        x = l.scoped || y < 60 ? 0 : v || b ? 0.28 : 1;
      ((t._f = t._f == null ? x : t._f + (x - t._f) * 0.16),
        Math.abs(t._f - x) < 0.01 && (t._f = x));
      let S = t._f >= 0.995 ? `` : t._f.toFixed(2);
      if ((t._op !== S && ((t._op = S), (t.style.opacity = S)), t._f <= 0.01)) {
        t.hidden ||= !0;
        continue;
      }
      let C = t.firstChild.firstChild;
      C.textContent !== f.letter && (C.textContent = f.letter);
      let w = Math.round(y),
        T = w >= 1e3 ? `${(w / 1e3).toFixed(1)} km` : `${w} m`;
      (t.children[1].textContent !== T && (t.children[1].textContent = T),
        (t.children[2].firstChild.style.width = `${Yi(f.progress, 0, 1) * 100}%`),
        (t.children[2].style.visibility =
          f.progress > 0 && f.progress < 1 ? `visible` : `hidden`));
    }
  }
  function lr(e) {
    for (let t = l.feed.length - 1; t >= 0; t--) {
      let n = l.feed[t];
      ((n.t += e),
        n.t > 4.7 && n.el.classList.add(`out`),
        n.t > 5 && (n.el.remove(), l.feed.splice(t, 1)));
    }
  }
  function ur(e) {
    if (l.hm.t <= 0) return;
    l.hm.t = Math.max(0, l.hm.t - e);
    let t = K()?.state ?? 0,
      n = Rt.playing() ? Rt.aimed() : !!(t & i.ADS) && !(t & i.IN_VEHICLE);
    F.classList.toggle(`aimed`, n);
    let r = 1 - l.hm.t / Mn;
    ((F.style.opacity = String(Math.min(1, l.hm.t / (Mn * 0.4)))),
      (F.style.transform = `scale(${n ? 1 : 1 + 0.35 * Math.max(0, 1 - r / 0.6) ** 2})`),
      l.hm.t || F.classList.remove(`on`));
  }
  function dr(e) {
    for (let t = l.dmg.length - 1; t >= 0; t--)
      ((l.dmg[t].t -= e), l.dmg[t].t <= 0 && l.dmg.splice(t, 1));
    for (let e = 0; e < te.length; e++) {
      let t = l.dmg[e],
        n = te[e];
      if (!t) {
        n.style.opacity !== `0` && (n.style.opacity = `0`);
        continue;
      }
      ((n.style.opacity = String(Yi(t.t / 1.4, 0, 1) * 0.95)),
        (n.style.transform = `rotate(${(t.bearing - nn($t())).toFixed(1)}deg)`));
    }
  }
  function fr(e) {
    for (let t = l.msgs.length - 1; t >= 0; t--) {
      let n = l.msgs[t];
      ((n.t += e),
        n.t > n.ttl && n.el.classList.remove(`on`),
        n.t > n.ttl + 0.3 && (n.el.remove(), l.msgs.splice(t, 1)));
    }
    for (; !l.msgs.length && l.msgQ.length;) {
      let e = l.msgQ.shift();
      l.t - e.at < e.ttl && mn(e.kind, e.text, e.ttl);
    }
    for (let e = 0; e < l.pendingDeaths.length;) {
      if (l.pendingDeaths[e].readyAt > l.t) {
        e++;
        continue;
      }
      zn(l.pendingDeaths.splice(e, 1)[0]);
    }
    for (let t = l.toasts.length - 1; t >= 0; t--) {
      let n = l.toasts[t];
      ((n.t += e), n.t > 2.9 && (n.el.remove(), l.toasts.splice(t, 1)));
    }
  }
  function pr(t, r) {
    let i =
        t?.pos ??
        (e.camera ? [e.camera.position.x, 0, e.camera.position.z] : [0, 0, 0]),
      a = e.modules.get(`weapons`),
      o = Fe.update(
        n?.entities?.values?.() ?? [],
        t,
        l.t,
        (e) =>
          e.type === `soldier` &&
          (a?.equippedDefinition?.(e.weapon, e)?.reportVolume ?? 1) < 1,
        n?.match?.mode === `ffa`,
        (e) => (e.type === `soldier` && ve(ye[e.weapon]) ? 2e3 : 90),
      );
    Me.draw({
      layout: e.modules.get(`demo`)?.getDefinition?.(),
      center: [i[0], i[2]],
      range: Ie,
      heading: r,
      teams: u(),
      entities: o,
      objectives: ((e) => (e ? [...Qt(), e] : Qt()))(
        w() && n?.match?.mode !== `ffa`
          ? {
              id: `beacon`,
              kind: `beacon`,
              pos: w().pos,
              team: w().team,
              letter: `BCN`,
            }
          : null,
      ),
      localId: t?.id ?? -1,
      localPos: t ? t.pos : null,
      allyTeam: l.allyTeam,
      fovDeg: e.camera?.fov ?? 70,
      squadMembers: Mt.own()?.members,
      orderId: Mt.own()?.order?.objectiveId,
    });
    let s = `${String.fromCharCode(65 + Yi(Math.floor((i[0] + 1024) / 256), 0, 7))}${Yi(Math.floor((i[2] + 1024) / 256), 0, 7) + 1}`;
    Pe.textContent !== s && (Pe.textContent = s);
  }
  function mr(t, r) {
    let a = n?.map?.bounds ?? [-1024, -1024, 1024, 1024],
      o = Qt(),
      s = (a[0] + a[2]) / 2,
      c = (a[1] + a[3]) / 2,
      f = Math.max(a[2] - a[0], a[3] - a[1]) / 2;
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
        (f = Yi(Math.max(t - e, r - n) * 0.55 + 250, 300, f)));
    }
    let p = Math.round(mt.clientWidth || 544),
      m = Math.round(mt.clientHeight || 544);
    (gt.width !== p || gt.height !== m) &&
      gt.resize(p, m, window.devicePixelRatio || 1);
    let h = e.modules.get(`demo`)?.getDefinition?.(),
      g = [...o, ...(h?.homeBases ?? [])]
        .filter((e) => e.pos)
        .map((e) => e.pos);
    if (g.length) {
      let e = g.map((e) => e[0]),
        t = g.map((e) => e[2]),
        n = Math.min(...e),
        r = Math.max(...e),
        i = Math.min(...t),
        a = Math.max(...t);
      ((s = (n + r) / 2),
        (c = (i + a) / 2),
        (f = p / (2 * Math.min(p / (r - n + 110), m / (a - i + 110)))),
        It.active && (f *= 1.5));
    }
    let x = It.active && !!h?.vistaDeploy && !!at.aerial,
      C = x || !It.active ? at.aerial : null;
    if (x) {
      let e = C.bounds,
        t = (e[0] + e[2]) / 2,
        n = (e[1] + e[3]) / 2,
        r = Math.max(e[2] - e[0], e[3] - e[1]),
        i = Math.min(p * 0.36, m * 0.62) / r;
      ((f = p / (2 * i)), (s = t - (p * 0.24) / i), (c = n - (m * 0.02) / i));
    } else if (C) {
      U = kn(C.bounds, p, m, H);
      let e = l.spawn.team + `:` + l.spawn.objective;
      if (H.selection !== e) {
        H.selection = e;
        let t =
          l.spawn.objective === `hq`
            ? h?.homeBases?.[l.spawn.team]?.pos
            : l.spawn.objective === `beacon`
              ? T()?.pos
              : l.spawn.objective?.startsWith(`teammate:`)
                ? n.get(S()?.entityId)?.pos
                : o.find((e) => e.id === l.spawn.objective)?.pos;
        if (t) {
          let e = p / 2 + (t[0] - U.x) * U.scale,
            n = m / 2 + (t[2] - U.z) * U.scale;
          (e < 32 || e > p - 32 || n < 32 || n > m - 32) &&
            ((H.x = t[0]), (H.z = t[2]), (U = kn(C.bounds, p, m, H)));
        }
      }
      ((s = U.x), (c = U.z), (f = U.range), (H.x = s), (H.z = c));
    }
    let w = new Set(b === l.spawn.team ? _.map((e) => e.entityId) : []),
      O = h?.homeBases?.[l.spawn.team],
      k = [
        ...(O && n?.match?.mode !== `ffa`
          ? [
              ...o,
              {
                id: `hq`,
                pos: O.pos,
                team: l.spawn.team,
                letter: `HQ`,
                name: `Headquarters`,
              },
            ]
          : o),
        ...(E() ? [E()] : []),
      ];
    if (Ft.active) {
      let e = [...o, ...(h?.homeBases ?? [])]
          .filter((e) => e.pos)
          .map((e) => e.pos),
        t = e.map((e) => e[0]),
        r = e.map((e) => e[2]),
        a = e.length ? (Math.min(...t) + Math.max(...t)) / 2 : s,
        u = e.length ? (Math.min(...r) + Math.max(...r)) / 2 : c,
        p = e.length
          ? Math.max(
              Math.max(...t) - Math.min(...t),
              Math.max(...r) - Math.min(...r),
            ) /
              2 +
            40
          : f,
        m =
          l.spawn.objective === `hq`
            ? O?.pos
            : l.spawn.objective === `beacon`
              ? T()?.pos
              : l.spawn.objective?.startsWith(`teammate:`)
                ? n.get(S()?.entityId)?.pos
                : o.find((e) => e.id === l.spawn.objective)?.pos;
      (Ft.frame({
        center: [a, n?.map?.getHeight?.(a, u) ?? 0, u],
        extent: p * (h?.deployView?.distance ?? 1),
        pitch: h?.deployView?.pitch,
        home: n?.match?.mode === `ffa` ? null : O?.pos,
        selected: m,
      }),
        Ft.draw(ht, k, {
          teamColor: d,
          selectedId: l.spawn.objective,
          allowed: rn,
          letterOnly: h?.objectiveStyle === `flag`,
        }),
        (y = k.slice()));
      let g = ht.getBoundingClientRect();
      v = _.flatMap((e) => {
        let t = n.get(e.entityId);
        if (!t || t.hp <= 0 || t.state & i.DEAD) return [];
        let r = Ft.project(t.pos, g, 2.5);
        return r ? [{ ...e, screen: r }] : [];
      });
    } else {
      let e = gt.draw({
        center: [s, c],
        range: f,
        heading: r,
        teams: u(),
        entities:
          n?.match?.mode === `ffa`
            ? []
            : [...(n?.entities?.values?.() ?? [])].filter(
                (e) => e.team === l.spawn.team && !w.has(e.id),
              ),
        objectives: k,
        layout: h,
        showPlaceNames: !1,
        showGrid: !1,
        squadMembers: Mt.own()?.members,
        orderId: Mt.own()?.order?.objectiveId,
        localId: t?.id ?? -1,
        localPos: t ? t.pos : null,
        allyTeam: l.allyTeam,
        big: !0,
        selectedId: l.spawn.objective,
        bounds: a,
        aerial: C,
        clear: x,
      });
      for (let t of k) t.pos && (t.screen = [e.toX(t.pos[0]), e.toY(t.pos[2])]);
      ((y = k.slice()),
        (v = _.flatMap((t) => {
          let r = n.get(t.entityId);
          return r && r.hp > 0 && !(r.state & i.DEAD)
            ? [{ ...t, screen: [e.toX(r.pos[0]), e.toY(r.pos[2])] }]
            : [];
        })));
    }
    let A = ht.getBoundingClientRect(),
      j = mt.getBoundingClientRect(),
      M = [xt, Et, At, ot.querySelector(`.deployment-identity`)]
        .filter((e) => e?.checkVisibility?.() ?? !!e?.offsetParent)
        .map((e) => {
          let t = e.getBoundingClientRect();
          return {
            x: t.left - A.left,
            y: t.top - A.top,
            w: t.width,
            h: t.height,
          };
        });
    bt.update(
      b === l.spawn.team
        ? v.map((e) => ({
            ...e,
            number: D(e.playerId),
            name: n.players.get(e.playerId)?.name ?? `Squadmate`,
          }))
        : [],
      {
        width: A.width,
        height: A.height,
        left: A.left - j.left,
        top: A.top - j.top,
        selected: l.spawn.objective,
        obstacles: [...k.map((e) => e.screen).filter(Boolean), ...M],
      },
    );
  }
  function hr() {
    let e = u(),
      t = tr(),
      r = n?.match ?? {};
    $e.replaceChildren();
    let i = $e.appendChild(Q(`div`, `hd`));
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
      o(`Time`, Zi(r.timeLeft)),
      o(`Phase`, String(r.phase ?? `warmup`).toUpperCase()));
    let s = $e.appendChild(Q(`div`, `cols`)),
      c = r.mode === `ffa`;
    for (let n = 0; n < (c ? 1 : 2); n++) {
      let i = s.appendChild(Q(`div`));
      (c && (i.style.gridColumn = `1 / -1`),
        i.style.setProperty(`--tc`, c ? `#9aa0a4` : d(n)),
        i.style.setProperty(`--tci`, $i(c ? `#9aa0a4` : d(n))));
      let a = i.appendChild(Q(`div`, `th`));
      (a.appendChild(Q(`i`)),
        a.appendChild(Q(`span`, `tn`, c ? `Every man for himself` : f(n))));
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
        u = a.appendChild(Q(`div`, `tt`)),
        p = (e, t) => {
          let n = u.appendChild(Q(`div`));
          (n.appendChild(Q(`span`, `sl-lab`, e + ` `)),
            n.appendChild(Q(`b`, ``, t)));
        };
      (p(
        c ? `Kill limit` : `Tickets`,
        String(
          c ? r.killLimit || 30 : Math.max(0, Math.round(+e[n]?.tickets || 0)),
        ),
      ),
        p(`Players`, String(o.length)));
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
        e.id === l.localPlayerId ||
        (l.localId >= 0 && e.entityId === l.localId);
      o.forEach((e, t) => {
        let n = i.appendChild(
          Q(
            `div`,
            `tr${h(e) ? ` me` : ``}${Mt.own()?.members.includes(e.id) ? ` squadmate` : ``}`,
          ),
        );
        n.appendChild(Q(`span`, `r`, String(t + 1)));
        let r = n.appendChild(Q(`span`, `n`)),
          a = ei(e.id);
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
    let p = $e.appendChild(Q(`div`, `ft`));
    (p.appendChild(
      Q(`span`, `sl-lab`, `Hold ${kt(`scores`, `Tab`)} · scoreboard`),
    ),
      p.appendChild(Q(`span`, `sl-lab`, `Friends session`)),
      Ji($e));
  }
  let gr = ``;
  function _r(e) {
    let t = Mt.own(),
      r = JSON.stringify([
        l.spawn.team,
        l.spawn.objective,
        l.localPlayerId,
        b,
        _.map((e) => [e.playerId, e.eligible, e.reason, e.vehicle?.free]),
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
                  r?.state & (i.DEAD | i.IN_VEHICLE),
                ];
              }),
            ]
          : (n.match.squads ?? []).map((e) => [
              e.id,
              e.team,
              e.members.length,
              e.locked,
              e.leaderId,
              e.requests?.includes(l.localPlayerId),
            ]),
      ]);
    if (((Tt.hidden = it(n)), r === gr)) return;
    ((gr = r), Tt.replaceChildren());
    let a = t,
      o = Tt.appendChild(Q(`div`, `sq-head`));
    o.append(
      Q(`div`, `sec`, `Squad`),
      Q(`strong`, ``, a ? `${a.name} squad` : `No squad`),
    );
    let s = o.appendChild(
      Q(`button`, `sq-manage`, a ? `Manage · orders` : `All squads`),
    );
    ((s.type = `button`),
      (s.dataset.spawnChoice = `squad-manage`),
      (s.onclick = () => zt(`squads`)));
    let c = Tt.appendChild(Q(`div`, `sq-list`));
    if (a) {
      let t = b === l.spawn.team;
      for (let r of a.members) {
        let o = n.players.get(r),
          s = n.get(o?.entityId),
          u = s?.hp > 0 && !(s.state & i.DEAD),
          d = r === l.localPlayerId,
          f = t ? _.find((e) => e.playerId === r) : null,
          p = !!f?.eligible && !d,
          m = `teammate:${r}`,
          h = !d && l.spawn.objective === m && !!f && x(f),
          g = D(r),
          v = e(
            c,
            `oi sq${l.spawn.objective === m ? ` sel` : ``}${p || h ? `` : ` na`}${d ? ` me` : ``}`,
            m,
            !p && !h,
          );
        ((v.dataset.kind = `teammate`),
          v.appendChild(
            Q(`div`, `l`, r === a.leaderId ? `★` : g == null ? `·` : String(g)),
          ),
          v
            .appendChild(Q(`div`, `nm`))
            .append(
              Q(`span`, ``, `${o?.name ?? `Connecting…`}${d ? ` · you` : ``}`),
              Q(
                `small`,
                ``,
                `${r === a.leaderId ? `Leader · ` : ``}${o?.isBot ? `AI · ` : ``}${u ? (s.state & i.IN_VEHICLE ? (f?.vehicle?.name.split(` · `)[0] ?? `In vehicle`) : `In field`) : `Deploying`}`,
              ),
            ),
          v.appendChild(
            Q(
              `div`,
              `stt${p ? ` go` : ``}`,
              d
                ? ``
                : p
                  ? f.vehicle
                    ? `Spawn in · ${f.vehicle.free} seats`
                    : `Spawn here`
                  : (f?.reason ?? (u ? `Unavailable` : `Not deployed`)),
            ),
          ),
          p &&
            v.addEventListener(`click`, () => {
              ((l.spawn.objective = m), (l.lastSpawnBuild = -1));
            }));
      }
      for (let e = a.members.length; e < (n.match.squadCapacity ?? 5); e++)
        c.appendChild(Q(`div`, `sq-open`, `Open seat`));
    } else {
      let e = n.match.squadCapacity ?? 5,
        t = (n.match.squads ?? []).filter(
          (e) => e.team == null || e.team === l.spawn.team,
        );
      for (let r of t) {
        let t = r.members.length >= e,
          i = r.requests?.includes(l.localPlayerId),
          a = c.appendChild(Q(`div`, `sq-join`));
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
            (Mt.send(`join`, { squadId: r.id }), (l.lastSpawnBuild = -1));
          }));
      }
      let r = c.appendChild(Q(`button`, `sq-create`, `+ Create squad`));
      ((r.type = `button`),
        (r.dataset.spawnChoice = `squad-create`),
        (r.onclick = () => {
          (Mt.send(`create`), (l.lastSpawnBuild = -1));
        }),
        c.appendChild(
          Q(
            `p`,
            `sq-note`,
            `Squadmates become spawn points and share order points.`,
          ),
        ));
    }
  }
  function vr() {
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
      i = u(),
      a = Qt();
    (tr(), dt.replaceChildren(), (dt.hidden = n?.match?.mode === `ffa`));
    for (let e = 0; e < (dt.hidden ? 0 : 2); e++) {
      let t = r(dt, `team${l.spawn.team === e ? ` sel` : ``}`, `team-` + e);
      (t.style.setProperty(`--tc`, d(e)),
        t.style.setProperty(`--tci`, $i(d(e))));
      let n = t.appendChild(Q(`div`, `tn`));
      (n.appendChild(Q(`i`)), n.appendChild(Q(`span`, ``, f(e))));
      let o = t.appendChild(Q(`div`, `ti`));
      (o
        .appendChild(Q(`span`, ``, `Tickets `))
        .appendChild(
          Q(`b`, ``, String(Math.max(0, Math.round(+i[e]?.tickets || 0)))),
        ),
        o
          .appendChild(Q(`span`, ``, `Bases `))
          .appendChild(
            Q(`b`, ``, String(a.filter((t) => t.team === e).length)),
          ),
        t.addEventListener(`click`, () => {
          ((l.spawn.team = e),
            (l.spawn.objective = null),
            (l.lastSpawnBuild = -1));
        }));
    }
    {
      let e = l.spawn.objective,
        t = a.find((t) => t.id === e),
        r = S(),
        i = e != null && e === l.spawn.auto,
        o =
          e === `hq` ||
          (e === `beacon` && !!T()) ||
          (r && (r.eligible || !i)) ||
          (t && rn(t)),
        s =
          b === l.spawn.team ||
          it(n) ||
          n?.match?.mode === `ffa` ||
          l.t - (l.spawn.autoAt ?? -99) > 3;
      (i && r && !r.eligible && (l.spawn.autoNoSquad = !0),
        (e == null || !o || (i && !s) || (i && e !== `beacon` && T())) &&
          (l.spawn.auto = l.spawn.objective = on(a)));
    }
    wt.replaceChildren();
    let o = !1;
    for (let e of a) {
      let t = rn(e),
        n = r(
          wt,
          `oi${l.spawn.objective === e.id ? ` sel` : ``}${t ? `` : ` na`}`,
          e.id,
          !t,
        );
      ((n.dataset.kind = `base`),
        n.appendChild(Q(`div`, `l ${Qi(e.team)}`, e.letter)),
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
          ((o = !0),
          n.addEventListener(`click`, () => {
            ((l.spawn.objective = e.id), (l.lastSpawnBuild = -1));
          })));
    }
    {
      let e = r(wt, `oi${l.spawn.objective === `hq` ? ` sel` : ``}`, `hq`);
      ((e.dataset.kind = `base`),
        e.appendChild(Q(`div`, `l ${Qi(l.spawn.team)}`, `HQ`)),
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
          ((l.spawn.objective = `hq`), (l.lastSpawnBuild = -1));
        }),
        (o = !0));
    }
    if (T()) {
      let e = r(
        wt,
        `oi${l.spawn.objective === `beacon` ? ` sel` : ``}`,
        `beacon`,
      );
      ((e.dataset.kind = `beacon`),
        e.appendChild(Q(`div`, `l ${Qi(l.spawn.team)}`, `BCN`)),
        e.appendChild(Q(`div`, `nm`, `Respawn beacon`)),
        e.appendChild(Q(`div`, `stt ok`, `Available`)),
        e.addEventListener(`click`, () => {
          ((l.spawn.objective = `beacon`), (l.lastSpawnBuild = -1));
        }));
    }
    _r(r);
    let s = `class-tabs`;
    (s !== Ot &&
      ((Ot = s),
      Dt.replaceChildren(),
      pt.forEach((e, t) => {
        let n = r(Dt, `kit`, `class-` + t);
        ((n.textContent = e.name),
          (n.dataset.classId = e.id),
          n.addEventListener(`click`, () => {
            (A(t), (l.lastSpawnBuild = -1), vr());
          }));
      })),
      Array.from(Dt.children).forEach((e, t) => {
        (e.classList.toggle(`sel`, l.spawn.kit === t),
          e.setAttribute(`aria-pressed`, String(l.spawn.kit === t)));
      }));
    let c = a.find((e) => e.id === l.spawn.objective),
      p = l.spawn.objective === `hq`,
      m = S(),
      h = l.spawn.objective === `beacon` ? T() : null;
    Vt.disabled = !(p || m || h || (c && rn(c)));
    let g = e.modules.get(`demo`)?.getDefinition?.()?.homeBases?.[l.spawn.team],
      _ = JSON.stringify(O());
    (_ !== Sn &&
      ((Sn = _),
      e.modules
        .get(`weapons`)
        ?.prepareLoadout?.(O(), { priority: `visible` })
        ?.catch(() => {})),
      at.update({
        label: p
          ? n?.match?.mode === `ffa`
            ? `Safest spot on the ship`
            : n?.match?.mode === `tdm`
              ? `Safest spot near your team`
              : `Headquarters`
          : h
            ? `Respawn beacon`
            : m
              ? (n.players.get(m.playerId)?.name ?? `Squadmate`)
              : (c?.name ?? `Choose a location`),
        loadout: O(),
        objectives: a,
        team: l.spawn.team,
        spawnId: l.spawn.objective,
        position: p ? g?.pos : h ? h.pos : m ? n.get(m.entityId)?.pos : c?.pos,
      }));
    let v = l.dead ? Math.ceil(En() - (l.t - l.deadSince)) : 0;
    Vt.textContent = xn
      ? `PREPARING EQUIPMENT…`
      : Vt.disabled
        ? `UNAVAILABLE`
        : v > 0
          ? `DEPLOY IN ${v}`
          : `DEPLOY`;
    let y = m ? (n.players.get(m.playerId)?.name ?? `Squadmate`) : ``,
      x = h
        ? `Your respawn beacon · lost if an enemy destroys it before you deploy`
        : m && !m.eligible
          ? `${y} · ${String(m.reason).toLowerCase()} · you deploy as soon as they are clear`
          : m?.vehicle
            ? `${m.vehicle.name} · ${m.vehicle.free} free seats · availability rechecked on arrival`
            : m
              ? `Near ${n.players.get(m.playerId)?.name ?? `teammate`} · safety rechecked on arrival`
              : ``;
    ((Ct.textContent = x), (Ct.hidden = !x));
    let C = l.dead && l.spawn.requestedAt >= l.deadSince;
    ((Bt.textContent =
      v > 0 && C
        ? `Deploying in ${v}s · a medic can still revive you`
        : C && m && !m.eligible
          ? `Waiting for ${y} to be clear…`
          : C && l.t - l.spawn.requestedAt >= 1.5
            ? `Waiting for a safe spot${m ? ` near ${y}` : ``}… · pick another spawn to go now`
            : l.t - l.spawn.requestedAt < 6
              ? `Joining the battle…`
              : o
                ? Nt()
                  ? `${kt(`confirm`, `Enter`)} Deploy · D-pad choose · ${kt(`back`, `Esc`)} back`
                  : `Space or Enter to deploy`
                : `Choose an available spawn location`),
      t &&
        et
          .querySelector(`[data-spawn-choice="${CSS.escape(t)}"]`)
          ?.focus({ preventScroll: !0 }));
  }
  let yr = {};
  function br() {
    if (!Ht.firstChild || Ht._built !== !0) {
      (Ht.replaceChildren(),
        (Ht._built = !0),
        Ht.appendChild(Q(`div`, `t`, `Network`)).appendChild(
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
        let t = Ht.appendChild(Q(`div`, `r`));
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
          (yr[e] = t.appendChild(Q(`b`, ``, `—`))));
      }
      ((yr.graph = Ht.appendChild(Q(`div`, `g`))), Ji(Ht));
    }
    let t = e.stats ?? {},
      r = (e, t) => {
        yr[e].textContent !== t && (yr[e].textContent = t);
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
    let a = l.net,
      o = !a || l.t - l.netT > 3;
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
    let u = yr.graph;
    if (u.children.length !== 40) {
      u.replaceChildren();
      for (let e = 0; e < 40; e++) u.appendChild(Q(`i`));
    }
    let d = l.rttHist,
      f = Math.max(50, ...d);
    for (let e = 0; e < 40; e++) {
      let t = d[d.length - 40 + e];
      u.children[e].style.height =
        t == null ? `1px` : `${Yi(t / f, 0.04, 1) * 100}%`;
    }
  }
  function xr() {
    (Ut.replaceChildren(),
      Ut.appendChild(Q(`div`, `t`, `Modules`)).appendChild(
        Q(`small`, ``, `F4`),
      ));
    let t =
        (typeof window < `u` && window.__game?.modules) ||
        e.modules?.status?.() ||
        {},
      n = Object.keys(t);
    n.length ||
      Ut.appendChild(Q(`div`, `r`)).appendChild(Q(`span`, ``, `none loaded`));
    for (let e of n) {
      let n = String(t[e]),
        r = Ut.appendChild(Q(`div`, `r`)),
        i = r.appendChild(Q(`span`));
      (i.appendChild(Q(`i`, n)),
        i.appendChild(document.createTextNode(e)),
        r.appendChild(Q(`span`, `st ${n}`, n)));
    }
    Ji(Ut);
  }
  function Sr() {
    ((Cn = !0),
      bn++,
      (xn = !1),
      Fe.clear(),
      o?.dispose(),
      at.dispose(),
      bt.dispose(),
      Pt.dispose(),
      Rt.dispose(),
      It.dispose(),
      Mt.dispose(),
      jt.dispose(),
      ut.dispose());
    for (let e of Ln)
      try {
        e?.();
      } catch {}
    (window.removeEventListener(`keydown`, Bn),
      window.removeEventListener(`keyup`, Vn),
      window.removeEventListener(`blur`, Hn),
      window.removeEventListener(`resize`, Xn),
      Le.dispose(),
      a.remove());
  }
  return {
    progression: ut,
    root: a,
    update: Qn,
    setLocalEntity: sn,
    show: cn,
    hide: ln,
    toggle: dn,
    message: fn,
    hitmarker: gn,
    damageFrom: _n,
    addFeed: vn,
    toast: hn,
    setSpread: Dn,
    setAmmo: An,
    setMinimapRange: Pn,
    setTerrain: Fn,
    isVisible: (e) => !!l.vis[e],
    state: l,
    dispose: Sr,
    clearTransients() {
      for (let e of l.msgs) e.el.remove();
      ((l.msgs.length = 0), (l.msgQ.length = 0));
      for (let e of l.toasts) e.el.remove();
      ((l.toasts.length = 0),
        (l.dmg.length = 0),
        (l.flash = 0),
        (l.spread = l.spreadTarget = 8));
    },
    setShowcaseState(e) {
      let t = String(e || `hud`)
        .split(`,`)
        .map((e) => e.trim());
      ((l.scoreForced = t.includes(`scoreboard`) || t.includes(`all`)),
        (l.spawnForced = t.includes(`spawn`) ? !0 : null),
        (l.vis.netstats =
          t.includes(`netstats`) || t.includes(`all`) || t.includes(`debug`)),
        (l.vis.modules =
          t.includes(`modules`) || t.includes(`all`) || t.includes(`debug`)));
    },
  };
}
