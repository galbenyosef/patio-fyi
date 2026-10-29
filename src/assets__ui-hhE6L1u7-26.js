// assets__ui-hhE6L1u7 26 — math
// Lines 10191-10956 of readable/assets__ui-hhE6L1u7.pretty.js (statement-aligned).
function Zi(
  e,
  {
    root: t = null,
    weaponName: n = (e) => String(e ?? ``),
    hitmarker: r = null,
  } = {},
) {
  let i = e.world,
    a = new Map(),
    o = [],
    s = [],
    c = [],
    u = [],
    d = -1e9,
    f = -1e9,
    p = null,
    m = null,
    h = -1,
    g = null,
    _ = null,
    y = 0,
    b = (t) => e.modules.get(t),
    x = (e) => b(`netcode`)?.holdRemote?.(e),
    S = () => b(`netcode`),
    C = (e) => {
      let t = S()?.getRenderTick?.() ?? 0;
      return t > 0
        ? (t !== _ && ((_ = t), (y = e)),
          (t + Math.min(1, Math.max(0, (e - y) * 60))) / 60)
        : e;
    },
    w = () => {
      let e = S(),
        t = e?.getServerTick?.() ?? 0,
        n = e?.getRenderTick?.() ?? 0;
      return t > 0 && n > 0 ? (t - n) / 60 : 0;
    },
    T = () => {
      let e = S()?.getNetTick?.() ?? 0;
      return e > 0 ? e / 60 : d;
    };
  t &&
    ((m = document.createElement(`div`)),
    (m.className = `sl-killcam`),
    (m.hidden = !0),
    (m.innerHTML = `<div class="vig"></div><div class="flash"></div><div class="fade"></div><div class="bar top"></div><div class="bar bottom"></div><div class="progress"><i></i><b></b></div><div class="label"><span class="rec"></span>KILLCAM<span class="speed" hidden></span></div><div class="who"><div class="card"><span class="by"></span><span class="name"></span><span class="rank" hidden></span></div><div class="gun"><span class="wpn"></span><span class="hs" hidden>HEADSHOT</span><span class="dist" hidden></span></div></div><div class="skip"><kbd>SPACE</kbd>SKIP</div><div class="tag victim">YOU</div><div class="tag killer"></div>`),
    t.appendChild(m));
  let E = (e) => m.querySelector(e),
    D = m
      ? {
          fade: E(`.fade`),
          flash: E(`.flash`),
          vig: E(`.vig`),
          bar: E(`.progress i`),
          mark: E(`.progress b`),
          speed: E(`.speed`),
          by: E(`.by`),
          name: E(`.name`),
          rank: E(`.rank`),
          wpn: E(`.wpn`),
          hs: E(`.hs`),
          dist: E(`.dist`),
          victim: E(`.tag.victim`),
          killer: E(`.tag.killer`),
        }
      : null,
    O = (e, t) => {
      ((t ??= ``), e.textContent !== t && (e.textContent = t), (e.hidden = !t));
    },
    k = (t, n, r) => {
      if (!t || !e.camera || !n) {
        t && (t.hidden = !0);
        return;
      }
      let i = e.camera;
      i.updateMatrixWorld();
      let a = new e.three.Vector3(n.x, n.y + r, n.z).project(i);
      if (a.z < -1 || a.z > 1 || Math.abs(a.x) > 1 || Math.abs(a.y) > 0.76) {
        t.hidden = !0;
        return;
      }
      ((t.hidden = !1),
        (t.style.left = `${(a.x * 0.5 + 0.5) * 100}%`),
        (t.style.top = `${(0.5 - 0.5 * a.y) * 100}%`));
    },
    A = e.events.on(`weapon:fire`, (e) => {
      e?.origin &&
        e.dir &&
        !e.replay &&
        e.entityId === h &&
        (o.push({
          t: f,
          origin: e.origin.slice(),
          dir: e.dir.slice(),
          dist: e.dist ?? 60,
          weaponId: e.weaponId,
        }),
        o.length > 200 && o.splice(0, o.length - 200));
    }),
    j = e.events.on(`explosion`, (e) => {
      e?.pos &&
        (s.push({
          t: T(),
          pos: e.pos.slice(),
          normal: (e.normal ?? [0, 1, 0]).slice(),
          event: {
            kind: e.kind,
            scale: e.scale,
            strength: e.strength,
            radius: e.radius,
            weaponId: e.weaponId,
          },
        }),
        s.length > 60 && s.splice(0, s.length - 60));
    }),
    M = e.events.on(`player:damage`, (e) => {
      e &&
        e.targetId === h &&
        e.amount > 0 &&
        (c.push({ t: T(), attackerId: e.attackerId, head: e.part === `head` }),
        c.length > 60 && c.splice(0, c.length - 60));
    }),
    N = e.events.on(`vehicle:shot`, (e) => {
      e?.pos &&
        e.dir &&
        !e.replay &&
        (u.push({
          t: e.tick > 0 ? e.tick / 60 : T(),
          data: {
            vehicleId: e.vehicleId,
            pos: e.pos.slice(),
            dir: e.dir.slice(),
          },
        }),
        u.length > 30 && u.splice(0, u.length - 30));
    }),
    P = e.events.on(`killcam:track`, (e) => {
      e?.tracks &&
        (p && !p.ready && e.victimId === p.victimId
          ? (L(e), (p.t0 = e.tick / 60), (p.trackReady = !0))
          : (g = { ...e, at: d }));
    }),
    F = e.events.on(`killcam:tail`, (e) => {
      p && e?.tracks && e.victimId === p.victimId && L(e, !0);
    }),
    ee = (e, t) => {
      r?.(e, t);
      let n = b(`audio`);
      (n?.play?.(`hit_confirm`, { local: !0 }),
        t && e && n?.play?.(`kill_headshot`, { local: !0, volume: 0.8 }));
    },
    te = (e) => {
      p &&
        [`Space`, `Enter`, `Escape`, `NumpadEnter`].includes(e.code) &&
        (e.preventDefault(), e.stopImmediatePropagation(), se());
    };
  t && window.addEventListener(`keydown`, te, !0);
  function I(e, t, n) {
    let r = a.get(e);
    if (
      ((!r || r.type !== t) &&
        ((r = { type: t, s: [], auth: !1 }), a.set(e, r)),
      r.auth)
    )
      return;
    let i = r.s[r.s.length - 1];
    (i && n.t <= i.t) || r.s.push(n);
  }
  function ne(e, t) {
    if (!t || e - d < Z.rate) return;
    ((d = e), (h = t.id));
    let n = S(),
      r = Z.reach * Z.reach;
    if (p) {
      let [e, , t] = p.at;
      for (let a of i.sorted()) {
        if ((a.type !== `soldier` && a.type !== `vehicle`) || a.id === h)
          continue;
        let i = n?.remoteSample?.(a.id);
        if (!i || !(i.tick > 0)) continue;
        let o = i.x - e,
          s = i.z - t;
        o * o + s * s > r ||
          I(a.id, a.type, {
            t: i.tick / 60,
            x: i.x,
            y: i.y,
            z: i.z,
            yaw: i.yaw ?? 0,
            pitch: i.pitch ?? 0,
            stance: i.stance | 0,
            state: i.state | 0,
            seat: a.seat ?? -1,
            weapon: a.weapon ?? 0,
          });
      }
      return;
    }
    let l = C(e),
      m = l + w(),
      [g, , _] = t.pos;
    f = m;
    for (let e of i.sorted()) {
      if (e.type !== `soldier` && e.type !== `vehicle`) continue;
      let t = e.pos[0] - g,
        n = e.pos[2] - _;
      t * t + n * n > r ||
        I(e.id, e.type, {
          t: e.id === h ? m : l,
          x: e.pos[0],
          y: e.pos[1],
          z: e.pos[2],
          yaw: e.yaw ?? 0,
          pitch: e.pitch ?? 0,
          stance: e.stance | 0,
          state: e.state | 0,
          seat: e.seat ?? -1,
          weapon: e.weapon ?? 0,
        });
    }
    let v = l - Z.window - Z.after - 0.5;
    for (let [e, t] of a) {
      let n = t.s,
        r = 0;
      for (; r < n.length - 1 && n[r + 1].t < v;) r++;
      (r && n.splice(0, r),
        (!n.length || n[n.length - 1].t < v) && a.delete(e));
    }
    for (let e of [o, s, c, u]) for (; e.length && e[0].t < v;) e.shift();
  }
  function L(e, t = !1) {
    let n = e.step || 2;
    for (let r of e.tracks ?? []) {
      let e = [],
        i = 0,
        o = 0,
        s = 0,
        c = 0,
        l = 0,
        u = 0,
        d = 0,
        f = -1,
        p = 0,
        m = 0,
        h = 0,
        g = 0,
        _ = 0;
      for (let t = 0; t < r.n; t++)
        ((i += r.p[t * 3]),
          (o += r.p[t * 3 + 1]),
          (s += r.p[t * 3 + 2]),
          (c += r.a[t * 2]),
          (l += r.a[t * 2 + 1]),
          r.st[m] === t && ((u = r.st[m + 1]), (m += 2)),
          r.sn[h] === t && ((d = r.sn[h + 1]), (h += 2)),
          r.se[g] === t && ((f = r.se[g + 1]), (g += 2)),
          r.w[_] === t && ((p = r.w[_ + 1]), (_ += 2)),
          e.push({
            t: (r.t0 + t * n) / 60,
            x: i / 100,
            y: o / 100,
            z: s / 100,
            yaw: c / 1e3,
            pitch: l / 1e3,
            stance: d,
            state: u,
            seat: f,
            weapon: p,
          }));
      if (!e.length) continue;
      let v = r.ty ? `vehicle` : `soldier`,
        y = a.get(r.id);
      if (t && y?.type === v) {
        let t = y.auth ? y.s[y.s.length - 1].t : e[0].t - 1e-6;
        ((y.s = y.s
          .filter((t) => t.t < e[0].t)
          .concat(e.filter((e) => e.t > t))),
          (y.auth = !0));
      } else a.set(r.id, { type: v, s: e, auth: !0 });
    }
  }
  let R = (e) => {
      if (!a.size) return null;
      let t = new Map();
      for (let [n, r] of a) {
        let i = r.s;
        if (!i.length || e < i[0].t - 0.05) continue;
        let a = 0,
          o = i.length - 1;
        if (e >= i[o].t) {
          t.set(n, { ...i[o], id: n, type: r.type, vx: 0, vz: 0 });
          continue;
        }
        for (; o - a > 1;) {
          let t = (a + o) >> 1;
          i[t].t <= e ? (a = t) : (o = t);
        }
        let s = i[a],
          c = i[o],
          l = c.t - s.t,
          u = l > 0 ? Math.max(0, Math.min(1, (e - s.t) / l)) : 0;
        if (Math.hypot(c.x - s.x, c.y - s.y, c.z - s.z) > 6 + 80 * l) {
          t.set(n, { ...(u < 1 ? s : c), id: n, type: r.type, vx: 0, vz: 0 });
          continue;
        }
        let d = u < 0.5 ? s : c;
        t.set(n, {
          id: n,
          type: r.type,
          x: s.x + (c.x - s.x) * u,
          y: s.y + (c.y - s.y) * u,
          z: s.z + (c.z - s.z) * u,
          yaw: Ji(s.yaw, c.yaw, u),
          pitch: s.pitch + (c.pitch - s.pitch) * u,
          stance: d.stance,
          state: d.state,
          seat: d.seat,
          weapon: d.weapon,
          vx: l > 0 ? (c.x - s.x) / l : 0,
          vz: l > 0 ? (c.z - s.z) / l : 0,
        });
      }
      return t;
    },
    z = (e, t) => {
      let n = t - Z.slowFrom - e,
        r = n + Z.slowFrom / Z.slowScale;
      return {
        normal: n,
        hitAt: r,
        tailSlowEnd: r + Z.hitstop + Z.lead / Z.slowScale,
      };
    },
    re = (e, { normal: t, hitAt: n, tailSlowEnd: r }) =>
      e <= t || e > r
        ? ``
        : e > n && e <= n + Z.hitstop
          ? `IMPACT`
          : `SLOW MOTION`,
    ie = (e, t, n) => {
      let r = n - Z.slowFrom,
        i = r - t,
        a = i + Z.slowFrom / Z.slowScale,
        o = a + Z.hitstop + Z.lead / Z.slowScale;
      return e <= i
        ? t + e
        : e <= a
          ? r + (e - i) * Z.slowScale
          : e <= a + Z.hitstop
            ? n
            : e <= o
              ? n + (e - a - Z.hitstop) * Z.slowScale
              : Math.min(n + Z.after, n + Z.lead + (e - o));
    };
  function ae(e, t) {
    if (p || !e || !a.size) return !1;
    let n = e.victimId,
      r = e.killerId > 0 && e.killerId !== n ? e.killerId : -1,
      o = i.get(n),
      s = o ? o.pos.slice() : a.get(n)?.s.at(-1);
    return (
      (p = {
        death: e,
        victimId: n,
        killerId: r,
        headshot: !!e.headshot,
        weapon: e.weapon,
        at: Array.isArray(s) ? s : s ? [s.x, s.y, s.z] : [0, 0, 0],
        t0: null,
        ready: !1,
        trackReady: !1,
        awaitUntil: t,
        fired: new Set(),
        clocks: new Map(),
        lastKillerShot: -1e9,
        cam: null,
        look: null,
        fov: null,
        struck: !1,
        viewing: !1,
      }),
      g?.victimId === n && t - g.at < 3
        ? (L(g), (p.t0 = g.tick / 60), (p.trackReady = !0))
        : S()?.isConnected?.() && (p.awaitUntil = t + 0.5),
      (g = null),
      x(!0),
      D &&
        ((D.fade.style.transition = `none`),
        (D.fade.style.opacity = `1`),
        (D.killer.hidden = D.victim.hidden = !0),
        m.classList.remove(`on`),
        (m.hidden = !1)),
      de(t),
      !0
    );
  }
  function oe(e) {
    let t = p;
    t.ready = !0;
    let r = t.t0 ?? T();
    t.t0 = r;
    let o = a.get(t.killerId)?.s,
      s = !!o?.some((e) => e.t <= r + 0.05 && e.t >= r - Z.window - Z.after),
      c = r - Z.window;
    if (s) {
      let e = o.length - 1;
      for (; e > 0 && o[e].t > r;) e--;
      for (; e > 0 && o[e].t > c; e--) {
        let t = o[e - 1],
          n = o[e];
        if (
          Math.hypot(n.x - t.x, n.y - t.y, n.z - t.z) >
          6 + 80 * (n.t - t.t)
        ) {
          c = n.t;
          break;
        }
      }
      if ((o[0].t > c && (c = o[0].t), typeof t.weapon == `string`)) {
        let e = o.length - 1;
        for (; e > 0 && o[e].t > r;) e--;
        if (o[e].state & l.IN_VEHICLE) {
          for (; e > 0 && o[e - 1].t > c && o[e - 1].state & l.IN_VEHICLE;) e--;
          o[e].t > c && (c = o[e].t);
        }
      }
    }
    ((c = Math.min(c, r - Z.slowFrom)),
      Object.assign(t, {
        from: c,
        last: c,
        startedAt: e,
        lastReal: e,
        killerId: s ? t.killerId : -1,
      }));
    let u = i.players.get(t.death.killerPlayerId);
    if ((t.killerId > 0 && b(`animation`)?.setPov?.(t.killerId), D)) {
      let e = R(r),
        i = e?.get(t.killerId),
        a = e?.get(t.victimId),
        o =
          i && a
            ? Math.round(Math.hypot(i.x - a.x, i.y - a.y, i.z - a.z))
            : null,
        s = u ? Ti(u.id) : null,
        l = s
          ? `LV ${s.level}${s.title ? ` · ` + s.title.toUpperCase() : ``}`
          : null,
        d = t.death.killerId > 0 && t.death.killerId !== t.victimId,
        f = n(t.death.weapon);
      (O(D.by, d ? `KILLED BY` : `KILLED IN ACTION`),
        O(D.name, d ? (u?.name ?? `Enemy`) : f),
        O(D.rank, d ? l : null),
        O(D.wpn, d ? f : null),
        (D.hs.hidden = !t.headshot),
        O(D.dist, o == null ? null : `${o} m`));
      let h = z(c, r);
      ((D.mark.style.left = `${Math.min(100, (h.hitAt / qi(r - c)) * 100).toFixed(1)}%`),
        O(D.speed, null),
        D.vig.classList.remove(`on`),
        (D.flash.style.transition = `none`),
        (D.flash.style.opacity = `0`),
        (D.killer.textContent = u?.name ?? `ENEMY`),
        D.victim.classList.remove(`hit`),
        (D.bar.style.width = `0%`),
        requestAnimationFrame(() => {
          p &&
            ((D.fade.style.transition = `opacity ${Z.fadeIn}s`),
            (D.fade.style.opacity = `0`),
            m.classList.add(`on`));
        }));
    }
  }
  function se() {
    if (!p) return;
    ((p = null), x(!1));
    let t = b(`animation`);
    (t?.setPov?.(-1),
      t?.setLocalReplayState?.(null),
      b(`weapons`)?.presentReplay?.(null),
      m && ((m.hidden = !0), m.classList.remove(`on`)),
      e.setCamera(`fps`),
      a.clear(),
      (o.length = 0),
      (s.length = 0),
      (c.length = 0),
      (u.length = 0));
  }
  function ce(t, n, r, a, o = null) {
    let s = Se[r];
    if (!s || s.class === `launcher`) return;
    let c = i.get(t),
      l = a ?? (c ? ue(c) : [n.x, n.y + 1.6, n.z]),
      u = o?.slice?.() ?? v(n.yaw, n.pitch),
      d = i.map?.raycast?.(l, u, s.range);
    e.events.emit(`weapon:fire`, {
      entityId: t,
      weaponId: r,
      origin: l,
      dir: u,
      dist: d?.dist ?? s.range,
      tracer: !0,
      muzzle: !a,
      casing: !1,
      replay: !0,
    });
  }
  function B(t, n, r) {
    let i = b(`weapons`);
    for (let [e, a] of t) {
      if (a.type !== `soldier` || e === p.victimId) continue;
      let t = Se[a.weapon];
      if (!t || !Xi(a.state)) {
        p.clocks.delete(e);
        continue;
      }
      let o = (p.clocks.get(e) ?? 0) - r;
      if (o <= 0) {
        let r = e === p.killerId && p.viewing;
        (ce(e, a, a.weapon, r ? i?.replayMuzzle?.() : null),
          r && (i?.kickReplay?.(1), (p.lastKillerShot = n)),
          (o = 60 / t.rpm));
      }
      p.clocks.set(e, o);
    }
    for (let t of o)
      t.t > p.last &&
        t.t <= n &&
        !p.fired.has(t) &&
        (p.fired.add(t),
        e.events.emit(`weapon:fire`, {
          entityId: -1,
          weaponId: t.weaponId,
          origin: t.origin,
          dir: t.dir,
          dist: t.dist,
          tracer: !0,
          muzzle: !0,
          casing: !1,
          replay: !0,
        }));
  }
  function le(e, t, n, r) {
    let a = !!t?.air,
      o = t?.h ?? 2,
      s = v(e.yaw, 0),
      c = [s[0], 0, s[2]];
    if (n) {
      let t = n.x - e.x,
        i = n.z - e.z,
        a = Math.hypot(t, i);
      if (r >= p.t0 && p.chaseDir) c = p.chaseDir;
      else if (a > 0.5) {
        let e = Math.max(0, Math.min(1, (a - 4) / 10)),
          n = s[0] + (t / a - s[0]) * e,
          r = s[2] + (i / a - s[2]) * e,
          o = Math.hypot(n, r) || 1;
        ((c = [n / o, 0, r / o]), (p.chaseDir = c));
      }
    }
    let l = a ? 0.55 : 0.3,
      u = Math.sin(Z.chaseSide),
      d = Math.cos(Z.chaseSide),
      f = -c[0] * d - c[2] * u,
      m = -c[2] * d + c[0] * u,
      h = Math.hypot(1, l),
      g = [f / h, l / h, m / h],
      _ = [e.x, e.y + (a ? o * 0.5 : o + 0.6), e.z],
      y = a ? 13 : 9,
      b = i.map?.raycast ? G(i.map, _, g, y, e.id) : y,
      x = _.map((e, t) => e + g[t] * b),
      S = n
        ? [n.x, n.y + 0.9, n.z]
        : [e.x + c[0] * 14, e.y + o * 0.5, e.z + c[2] * 14],
      C = Math.hypot(S[0] - x[0], S[1] - x[1], S[2] - x[2]),
      [w, T] = Z.chaseFov;
    return {
      pos: x,
      look: S,
      fov: Math.max(T, Math.min(w, w - (C - 25) * 0.3)),
    };
  }
  function de(t) {
    if (!p) return;
    if (!p.ready) {
      if (!p.trackReady && t < p.awaitUntil) return;
      oe(t);
    }
    let n = t - p.startedAt,
      r = qi(p.t0 - p.from),
      a = Math.max(0, t - p.lastReal);
    if (((p.lastReal = t), n > r)) return se();
    let o = ie(n, p.from, p.t0),
      d = R(o);
    if (!d) return se();
    let f = b(`animation`),
      m = b(`weapons`);
    for (let [e, t] of d) {
      let n = i.get(e);
      n &&
        n.type === t.type &&
        ((n.pos = [t.x, t.y, t.z]),
        (n.yaw = t.yaw),
        n.type === `vehicle` &&
          ((n.pitch = t.pitch),
          (n.stance = t.stance),
          (n.state = o > p.last ? t.state : t.state & ~l.FIRING)),
        n.type === `soldier` &&
          ((n.pitch = t.pitch),
          (n.stance = t.stance),
          e === p.victimId
            ? f?.setLocalReplayState?.(t.state)
            : (n.state = t.state)));
    }
    let h = b(`effects`),
      g = b(`audio`),
      _ = d.get(p.killerId),
      y = d.get(p.victimId),
      x = _ && _.state & l.IN_VEHICLE ? d.get(_.seat) : null,
      S = x ? ge[x.weapon] : null,
      C = !!S && typeof p.weapon == `string`,
      w = C ? x : null;
    if (((p.viewing = !!_ && !C), p.viewing)) {
      let e = i.get(p.killerId),
        t = o - p.t0;
      (t < 0 && (p.killAds = !!(_.state & l.ADS)),
        (p.aimed = t >= 0 ? !!p.killAds : !!(_.state & l.ADS)),
        m?.presentReplay?.({
          weaponId: _.weapon,
          entity: e,
          ads: t >= 0 ? !!p.killAds : !!(_.state & l.ADS),
          sprint: !!(_.state & l.SPRINT),
          speed: Math.hypot(_.vx, _.vz),
          reload: 0,
        }));
    } else m?.presentReplay?.(null);
    B(d, o, Math.max(0, o - p.last));
    for (let t of u)
      t.t > p.last &&
        t.t <= o &&
        !p.fired.has(t) &&
        (p.fired.add(t),
        e.events.emit(`vehicle:fire`, { ...t.data, replay: !0 }));
    for (let e of s)
      if (e.t > p.last && e.t <= o && !p.fired.has(e)) {
        p.fired.add(e);
        let t = yt(e.event);
        (h?.spawn?.(`explosion`, e.pos, e.normal, t.blast),
          h?.spawn?.(`collapse`, e.pos, e.normal, t.dust),
          g?.play?.(Xt(e.event), { pos: e.pos, volume: 0.85 }));
      }
    if (_)
      for (let e of c)
        e.attackerId === p.killerId &&
          e.t > p.last &&
          e.t <= o &&
          e.t < p.t0 - 0.08 &&
          !p.fired.has(e) &&
          (p.fired.add(e), ee(e.head, !1));
    (!p.struck &&
      o >= p.t0 &&
      ((p.struck = !0),
      p.viewing &&
        p.t0 - p.lastKillerShot > Z.killShotGrace &&
        !(_.state & l.IN_VEHICLE) &&
        Se[_.weapon]?.class !== `launcher` &&
        (ce(p.killerId, _, _.weapon, m?.replayMuzzle?.(), p.death.dir),
        m?.kickReplay?.(1),
        (p.lastKillerShot = p.t0),
        p.clocks.set(p.killerId, 60 / (Se[_.weapon]?.rpm || 600))),
      y &&
        (h?.spawn?.(`impact`, [y.x, y.y + 1.2, y.z], [0, 1, 0], {
          surface: `flesh`,
        }),
        D?.victim.classList.add(`hit`)),
      D &&
        ((D.flash.style.transition = `none`),
        (D.flash.style.opacity = p.headshot ? `.5` : `.35`),
        requestAnimationFrame(() => {
          p &&
            ((D.flash.style.transition = `opacity .4s ease-out`),
            (D.flash.style.opacity = `0`));
        })),
      _ && ee(p.headshot, !0)),
      (p.last = o));
    let T,
      E,
      A = Z.fov,
      j = !1;
    if (_) {
      let e = _.yaw,
        t = _.pitch,
        n = v(e, t);
      if (w) ({ pos: T, look: E, fov: A } = le(w, S, y, o));
      else {
        let e = i.get(p.killerId),
          t = e ? ue(e) : [_.x, _.y + (V[_.stance] ?? V[0]) - 0.15, _.z];
        ((T = [t[0] + n[0] * Z.eyeFwd, t[1], t[2] + n[2] * Z.eyeFwd]),
          (A = m?.replayFov?.() ?? Z.fov),
          (j = !0));
      }
      w || (E = [T[0] + n[0] * 20, T[1] + n[1] * 20, T[2] + n[2] * 20]);
    } else if (y) {
      let e = n * 0.35;
      ((T = [y.x + Math.cos(e) * 4.5, y.y + 2.2, y.z + Math.sin(e) * 4.5]),
        (E = [y.x, y.y + 1, y.z]));
    } else return se();
    let M = p.cam && a < 0.5 && !j ? 1 - Math.exp(-a * 20) : 1,
      N = p.look && a < 0.5 && !j ? 1 - Math.exp(-a * 14) : 1;
    if (
      ((p.cam = p.cam ? Yi(p.cam, T, M) : T),
      (p.look = p.look ? Yi(p.look, E, N) : E),
      (p.fov =
        p.fov == null || a >= 0.5
          ? A
          : p.fov + (A - p.fov) * (1 - Math.exp(-a * 14))),
      e.setCamera({ pos: p.cam, look: p.look, fov: p.fov }),
      D)
    ) {
      (k(
        D.victim,
        p.fov < 40 ? null : y,
        y && y.state & l.DEAD && o >= p.t0
          ? 0.95
          : (V[y?.stance] ?? V[0]) + 0.35,
      ),
        k(D.killer, w, (S?.h ?? 2) + 0.9),
        (D.bar.style.width = `${Math.min(100, (n / r) * 100).toFixed(1)}%`));
      let e = re(n, z(p.from, p.t0));
      (O(D.speed, e),
        D.speed.classList.toggle(`impact`, e === `IMPACT`),
        D.vig.classList.toggle(`on`, !!e),
        n > r - Z.fadeOut &&
          ((D.fade.style.transition = `opacity ${Z.fadeOut}s`),
          (D.fade.style.opacity = `1`)));
    }
  }
  return {
    record: ne,
    start: ae,
    update: de,
    stop: se,
    playing: () => !!p,
    aimed: () => !!(p?.viewing && p.aimed),
    armed: () => !1,
    frames: () => Math.max(0, ...[...a.values()].map((e) => e.s.length)),
    dispose() {
      (A?.(),
        j?.(),
        M?.(),
        N?.(),
        P?.(),
        F?.(),
        t && window.removeEventListener(`keydown`, te, !0),
        se(),
        m?.remove(),
        (m = null),
        a.clear(),
        (o.length = 0),
        (s.length = 0),
        (c.length = 0),
        (u.length = 0));
    },
  };
}
