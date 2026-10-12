// assets__ui-D46k2G3Q 24 — math
// Lines 9816-10614 of readable/assets__ui-D46k2G3Q.pretty.js (statement-aligned).
function wi(
  e,
  {
    root: t = null,
    weaponName: n = (e) => String(e ?? ``),
    hitmarker: r = null,
  } = {},
) {
  let a = e.world,
    s = new Map(),
    c = [],
    l = [],
    u = [],
    d = [],
    f = -1e9,
    p = -1e9,
    m = null,
    h = null,
    g = -1,
    _ = null,
    v = null,
    y = 0,
    b = (t) => e.modules.get(t),
    x = (e) => b(`netcode`)?.holdRemote?.(e),
    S = () => b(`netcode`),
    C = (e) => {
      let t = S()?.getRenderTick?.() ?? 0;
      return t > 0
        ? (t !== v && ((v = t), (y = e)),
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
      return e > 0 ? e / 60 : f;
    };
  t &&
    ((h = document.createElement(`div`)),
    (h.className = `sl-killcam`),
    (h.hidden = !0),
    (h.innerHTML = `<div class="vig"></div><div class="flash"></div><div class="fade"></div><div class="bar top"></div><div class="bar bottom"></div><div class="progress"><i></i><b></b></div><div class="label"><span class="rec"></span>KILLCAM<span class="speed" hidden></span></div><div class="who"><div class="card"><span class="by"></span><span class="name"></span><span class="rank" hidden></span></div><div class="gun"><span class="wpn"></span><span class="hs" hidden>HEADSHOT</span><span class="dist" hidden></span></div></div><div class="skip"><kbd>SPACE</kbd>SKIP</div><div class="tag victim">YOU</div><div class="tag killer"></div>`),
    t.appendChild(h));
  let E = (e) => h.querySelector(e),
    D = h
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
        e.entityId === g &&
        (c.push({
          t: p,
          origin: e.origin.slice(),
          dir: e.dir.slice(),
          dist: e.dist ?? 60,
          weaponId: e.weaponId,
        }),
        c.length > 200 && c.splice(0, c.length - 200));
    }),
    j = e.events.on(`explosion`, (e) => {
      e?.pos &&
        (l.push({
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
        l.length > 60 && l.splice(0, l.length - 60));
    }),
    M = e.events.on(`player:damage`, (e) => {
      e &&
        e.targetId === g &&
        e.amount > 0 &&
        (u.push({ t: T(), attackerId: e.attackerId, head: e.part === `head` }),
        u.length > 60 && u.splice(0, u.length - 60));
    }),
    ee = e.events.on(`vehicle:shot`, (e) => {
      e?.pos &&
        e.dir &&
        !e.replay &&
        (d.push({
          t: e.tick > 0 ? e.tick / 60 : T(),
          data: {
            vehicleId: e.vehicleId,
            pos: e.pos.slice(),
            dir: e.dir.slice(),
          },
        }),
        d.length > 30 && d.splice(0, d.length - 30));
    }),
    N = e.events.on(`killcam:track`, (e) => {
      e?.tracks &&
        (m && !m.ready && e.victimId === m.victimId
          ? (re(e), (m.t0 = e.tick / 60), (m.trackReady = !0))
          : (_ = { ...e, at: f }));
    }),
    P = e.events.on(`killcam:tail`, (e) => {
      m && e?.tracks && e.victimId === m.victimId && re(e, !0);
    }),
    F = (e, t) => {
      r?.(e, t);
      let n = b(`audio`);
      (n?.play?.(`hit_confirm`, { local: !0 }),
        t && e && n?.play?.(`kill_headshot`, { local: !0, volume: 0.8 }));
    },
    te = (e) => {
      m &&
        [`Space`, `Enter`, `Escape`, `NumpadEnter`].includes(e.code) &&
        (e.preventDefault(), e.stopImmediatePropagation(), le());
    };
  t && window.addEventListener(`keydown`, te, !0);
  function I(e, t, n) {
    let r = s.get(e);
    if (
      ((!r || r.type !== t) &&
        ((r = { type: t, s: [], auth: !1 }), s.set(e, r)),
      r.auth)
    )
      return;
    let i = r.s[r.s.length - 1];
    (i && n.t <= i.t) || r.s.push(n);
  }
  function ne(e, t) {
    if (!t || e - f < Z.rate) return;
    ((f = e), (g = t.id));
    let n = S(),
      r = Z.reach * Z.reach;
    if (m) {
      let [e, , t] = m.at;
      for (let i of a.sorted()) {
        if ((i.type !== `soldier` && i.type !== `vehicle`) || i.id === g)
          continue;
        let a = n?.remoteSample?.(i.id);
        if (!a || !(a.tick > 0)) continue;
        let o = a.x - e,
          s = a.z - t;
        o * o + s * s > r ||
          I(i.id, i.type, {
            t: a.tick / 60,
            x: a.x,
            y: a.y,
            z: a.z,
            yaw: a.yaw ?? 0,
            pitch: a.pitch ?? 0,
            stance: a.stance | 0,
            state: a.state | 0,
            seat: i.seat ?? -1,
            weapon: i.weapon ?? 0,
          });
      }
      return;
    }
    let i = C(e),
      o = i + w(),
      [h, , _] = t.pos;
    p = o;
    for (let e of a.sorted()) {
      if (e.type !== `soldier` && e.type !== `vehicle`) continue;
      let t = e.pos[0] - h,
        n = e.pos[2] - _;
      t * t + n * n > r ||
        I(e.id, e.type, {
          t: e.id === g ? o : i,
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
    let v = i - Z.window - Z.after - 0.5;
    for (let [e, t] of s) {
      let n = t.s,
        r = 0;
      for (; r < n.length - 1 && n[r + 1].t < v;) r++;
      (r && n.splice(0, r),
        (!n.length || n[n.length - 1].t < v) && s.delete(e));
    }
    for (let e of [c, l, u, d]) for (; e.length && e[0].t < v;) e.shift();
  }
  function re(e, t = !1) {
    let n = e.step || 2;
    for (let r of e.tracks ?? []) {
      let e = [],
        i = 0,
        a = 0,
        o = 0,
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
          (a += r.p[t * 3 + 1]),
          (o += r.p[t * 3 + 2]),
          (c += r.a[t * 2]),
          (l += r.a[t * 2 + 1]),
          r.st[m] === t && ((u = r.st[m + 1]), (m += 2)),
          r.sn[h] === t && ((d = r.sn[h + 1]), (h += 2)),
          r.se[g] === t && ((f = r.se[g + 1]), (g += 2)),
          r.w[_] === t && ((p = r.w[_ + 1]), (_ += 2)),
          e.push({
            t: (r.t0 + t * n) / 60,
            x: i / 100,
            y: a / 100,
            z: o / 100,
            yaw: c / 1e3,
            pitch: l / 1e3,
            stance: d,
            state: u,
            seat: f,
            weapon: p,
          }));
      if (!e.length) continue;
      let v = r.ty ? `vehicle` : `soldier`,
        y = s.get(r.id);
      if (t && y?.type === v) {
        let t = y.auth ? y.s[y.s.length - 1].t : e[0].t - 1e-6;
        ((y.s = y.s
          .filter((t) => t.t < e[0].t)
          .concat(e.filter((e) => e.t > t))),
          (y.auth = !0));
      } else s.set(r.id, { type: v, s: e, auth: !0 });
    }
  }
  let ie = (e) => {
      if (!s.size) return null;
      let t = new Map();
      for (let [n, r] of s) {
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
          yaw: xi(s.yaw, c.yaw, u),
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
    ae = (e, t) => {
      let n = t - Z.slowFrom - e,
        r = n + Z.slowFrom / Z.slowScale;
      return {
        normal: n,
        hitAt: r,
        tailSlowEnd: r + Z.hitstop + Z.lead / Z.slowScale,
      };
    },
    oe = (e, { normal: t, hitAt: n, tailSlowEnd: r }) =>
      e <= t || e > r
        ? ``
        : e > n && e <= n + Z.hitstop
          ? `IMPACT`
          : `SLOW MOTION`,
    L = (e, t, n) => {
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
  function se(e, t) {
    if (m || !e || !s.size) return !1;
    let n = e.victimId,
      r = e.killerId > 0 && e.killerId !== n ? e.killerId : -1,
      i = a.get(n),
      o = i ? i.pos.slice() : s.get(n)?.s.at(-1);
    return (
      (m = {
        death: e,
        victimId: n,
        killerId: r,
        headshot: !!e.headshot,
        weapon: e.weapon,
        at: Array.isArray(o) ? o : o ? [o.x, o.y, o.z] : [0, 0, 0],
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
      _?.victimId === n && t - _.at < 3
        ? (re(_), (m.t0 = _.tick / 60), (m.trackReady = !0))
        : S()?.isConnected?.() && (m.awaitUntil = t + 0.5),
      (_ = null),
      x(!0),
      D &&
        ((D.fade.style.transition = `none`),
        (D.fade.style.opacity = `1`),
        (D.killer.hidden = D.victim.hidden = !0),
        h.classList.remove(`on`),
        (h.hidden = !1)),
      pe(t),
      !0
    );
  }
  function ce(e) {
    let t = m;
    t.ready = !0;
    let r = t.t0 ?? T();
    t.t0 = r;
    let o = s.get(t.killerId)?.s,
      c = !!o?.some((e) => e.t <= r + 0.05 && e.t >= r - Z.window - Z.after),
      l = r - Z.window;
    if (c) {
      let e = o.length - 1;
      for (; e > 0 && o[e].t > r;) e--;
      for (; e > 0 && o[e].t > l; e--) {
        let t = o[e - 1],
          n = o[e];
        if (
          Math.hypot(n.x - t.x, n.y - t.y, n.z - t.z) >
          6 + 80 * (n.t - t.t)
        ) {
          l = n.t;
          break;
        }
      }
      if ((o[0].t > l && (l = o[0].t), typeof t.weapon == `string`)) {
        let e = o.length - 1;
        for (; e > 0 && o[e].t > r;) e--;
        if (o[e].state & i.IN_VEHICLE) {
          for (; e > 0 && o[e - 1].t > l && o[e - 1].state & i.IN_VEHICLE;) e--;
          o[e].t > l && (l = o[e].t);
        }
      }
    }
    ((l = Math.min(l, r - Z.slowFrom)),
      Object.assign(t, {
        from: l,
        last: l,
        startedAt: e,
        lastReal: e,
        killerId: c ? t.killerId : -1,
      }));
    let u = a.players.get(t.death.killerPlayerId);
    if ((t.killerId > 0 && b(`animation`)?.setPov?.(t.killerId), D)) {
      let e = ie(r),
        i = e?.get(t.killerId),
        a = e?.get(t.victimId),
        o =
          i && a
            ? Math.round(Math.hypot(i.x - a.x, i.y - a.y, i.z - a.z))
            : null,
        s = u ? ei(u.id) : null,
        c = s
          ? `LV ${s.level}${s.title ? ` · ` + s.title.toUpperCase() : ``}`
          : null,
        d = t.death.killerId > 0 && t.death.killerId !== t.victimId,
        f = n(t.death.weapon);
      (O(D.by, d ? `KILLED BY` : `KILLED IN ACTION`),
        O(D.name, d ? (u?.name ?? `Enemy`) : f),
        O(D.rank, d ? c : null),
        O(D.wpn, d ? f : null),
        (D.hs.hidden = !t.headshot),
        O(D.dist, o == null ? null : `${o} m`));
      let p = ae(l, r);
      ((D.mark.style.left = `${Math.min(100, (p.hitAt / bi(r - l)) * 100).toFixed(1)}%`),
        O(D.speed, null),
        D.vig.classList.remove(`on`),
        (D.flash.style.transition = `none`),
        (D.flash.style.opacity = `0`),
        (D.killer.textContent = u?.name ?? `ENEMY`),
        D.victim.classList.remove(`hit`),
        (D.bar.style.width = `0%`),
        requestAnimationFrame(() => {
          m &&
            ((D.fade.style.transition = `opacity ${Z.fadeIn}s`),
            (D.fade.style.opacity = `0`),
            h.classList.add(`on`));
        }));
    }
  }
  function le() {
    if (!m) return;
    ((m = null), x(!1));
    let t = b(`animation`);
    (t?.setPov?.(-1),
      t?.setLocalReplayState?.(null),
      b(`weapons`)?.presentReplay?.(null),
      h && ((h.hidden = !0), h.classList.remove(`on`)),
      e.setCamera(`fps`),
      s.clear(),
      (c.length = 0),
      (l.length = 0),
      (u.length = 0),
      (d.length = 0));
  }
  function ue(t, n, r, i) {
    let s = ye[r];
    if (!s || s.class === `launcher`) return;
    let c = a.get(t),
      l = i ?? (c ? z(c) : [n.x, n.y + 1.6, n.z]),
      u = t === m.killerId && m.settled && m.view,
      d = o(u ? u[0] : n.yaw, u ? u[1] : n.pitch),
      f = a.map?.raycast?.(l, d, s.range);
    e.events.emit(`weapon:fire`, {
      entityId: t,
      weaponId: r,
      origin: l,
      dir: d,
      dist: f?.dist ?? s.range,
      tracer: !0,
      muzzle: !i,
      casing: !1,
      replay: !0,
    });
  }
  function de(t, n, r) {
    let i = b(`weapons`);
    for (let [e, a] of t) {
      if (a.type !== `soldier` || e === m.victimId) continue;
      let t = ye[a.weapon];
      if (!t || !Ci(a.state)) {
        m.clocks.delete(e);
        continue;
      }
      let o = (m.clocks.get(e) ?? 0) - r;
      if (o <= 0) {
        let r = e === m.killerId && m.viewing;
        (ue(e, a, a.weapon, r ? i?.replayMuzzle?.() : null),
          r && (i?.kickReplay?.(1), (m.lastKillerShot = n)),
          (o = 60 / t.rpm));
      }
      m.clocks.set(e, o);
    }
    for (let t of c)
      t.t > m.last &&
        t.t <= n &&
        !m.fired.has(t) &&
        (m.fired.add(t),
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
  function R(e, t, n, r) {
    let i = !!t?.air,
      s = t?.h ?? 2,
      c = o(e.yaw, 0),
      l = [c[0], 0, c[2]];
    if (n) {
      let t = n.x - e.x,
        i = n.z - e.z,
        a = Math.hypot(t, i);
      if (r >= m.t0 && m.chaseDir) l = m.chaseDir;
      else if (a > 0.5) {
        let e = Math.max(0, Math.min(1, (a - 4) / 10)),
          n = c[0] + (t / a - c[0]) * e,
          r = c[2] + (i / a - c[2]) * e,
          o = Math.hypot(n, r) || 1;
        ((l = [n / o, 0, r / o]), (m.chaseDir = l));
      }
    }
    let u = i ? 0.55 : 0.3,
      d = Math.sin(Z.chaseSide),
      f = Math.cos(Z.chaseSide),
      p = -l[0] * f - l[2] * d,
      h = -l[2] * f + l[0] * d,
      g = Math.hypot(1, u),
      _ = [p / g, u / g, h / g],
      v = [e.x, e.y + (i ? s * 0.5 : s + 0.6), e.z],
      y = i ? 13 : 9,
      b = a.map?.raycast ? H(a.map, v, _, y, e.id) : y,
      x = v.map((e, t) => e + _[t] * b),
      S = n
        ? [n.x, n.y + 0.9, n.z]
        : [e.x + l[0] * 14, e.y + s * 0.5, e.z + l[2] * 14],
      C = Math.hypot(S[0] - x[0], S[1] - x[1], S[2] - x[2]),
      [w, T] = Z.chaseFov;
    return {
      pos: x,
      look: S,
      fov: Math.max(T, Math.min(w, w - (C - 25) * 0.3)),
    };
  }
  function pe(t) {
    if (!m) return;
    if (!m.ready) {
      if (!m.trackReady && t < m.awaitUntil) return;
      ce(t);
    }
    let n = t - m.startedAt,
      r = bi(m.t0 - m.from),
      s = Math.max(0, t - m.lastReal);
    if (((m.lastReal = t), n > r)) return le();
    let c = L(n, m.from, m.t0),
      f = ie(c);
    if (!f) return le();
    let p = b(`animation`),
      h = b(`weapons`);
    for (let [e, t] of f) {
      let n = a.get(e);
      n &&
        n.type === t.type &&
        ((n.pos = [t.x, t.y, t.z]),
        (n.yaw = t.yaw),
        n.type === `vehicle` &&
          ((n.pitch = t.pitch),
          (n.stance = t.stance),
          (n.state = c > m.last ? t.state : t.state & ~i.FIRING)),
        n.type === `soldier` &&
          ((n.pitch = t.pitch),
          (n.stance = t.stance),
          e === m.victimId
            ? p?.setLocalReplayState?.(t.state)
            : (n.state = t.state)));
    }
    let g = b(`effects`),
      _ = b(`audio`),
      v = f.get(m.killerId),
      y = f.get(m.victimId),
      x = v && v.state & i.IN_VEHICLE ? f.get(v.seat) : null,
      S = x ? V[x.weapon] : null,
      C = !!S && typeof m.weapon == `string`,
      w = C ? x : null;
    if (((m.viewing = !!v && !C), m.viewing)) {
      let e = a.get(m.killerId),
        t = c - m.t0;
      (t < 0 && (m.killAds = !!(v.state & i.ADS)),
        (m.aimed = t >= 0 ? !!m.killAds : !!(v.state & i.ADS)),
        h?.presentReplay?.({
          weaponId: v.weapon,
          entity: e,
          ads: t >= 0 ? !!m.killAds : !!(v.state & i.ADS),
          sprint: !!(v.state & i.SPRINT),
          speed: Math.hypot(v.vx, v.vz),
          reload: 0,
        }));
    } else h?.presentReplay?.(null);
    de(f, c, Math.max(0, c - m.last));
    for (let t of d)
      t.t > m.last &&
        t.t <= c &&
        !m.fired.has(t) &&
        (m.fired.add(t),
        e.events.emit(`vehicle:fire`, { ...t.data, replay: !0 }));
    for (let e of l)
      if (e.t > m.last && e.t <= c && !m.fired.has(e)) {
        m.fired.add(e);
        let t = _t(e.event);
        (g?.spawn?.(`explosion`, e.pos, e.normal, t.blast),
          g?.spawn?.(`collapse`, e.pos, e.normal, t.dust),
          _?.play?.(Vt(e.event), { pos: e.pos, volume: 0.85 }));
      }
    if (v)
      for (let e of u)
        e.attackerId === m.killerId &&
          e.t > m.last &&
          e.t <= c &&
          e.t < m.t0 - 0.08 &&
          !m.fired.has(e) &&
          (m.fired.add(e), F(e.head, !1));
    (!m.struck &&
      c >= m.t0 &&
      ((m.struck = !0),
      m.viewing &&
        m.t0 - m.lastKillerShot > Z.killShotGrace &&
        !(v.state & i.IN_VEHICLE) &&
        ye[v.weapon]?.class !== `launcher` &&
        (ue(m.killerId, v, v.weapon, h?.replayMuzzle?.()),
        h?.kickReplay?.(1),
        (m.lastKillerShot = m.t0),
        m.clocks.set(m.killerId, 60 / (ye[v.weapon]?.rpm || 600))),
      y &&
        (g?.spawn?.(`impact`, [y.x, y.y + 1.2, y.z], [0, 1, 0], {
          surface: `flesh`,
        }),
        D?.victim.classList.add(`hit`)),
      D &&
        ((D.flash.style.transition = `none`),
        (D.flash.style.opacity = m.headshot ? `.5` : `.35`),
        requestAnimationFrame(() => {
          m &&
            ((D.flash.style.transition = `opacity .4s ease-out`),
            (D.flash.style.opacity = `0`));
        })),
      v && F(m.headshot, !0)),
      (m.last = c));
    let T,
      E,
      A = Z.fov,
      j = !1;
    if (v) {
      let e = v.yaw,
        t = v.pitch;
      if (!w && y) {
        let r = a.get(m.killerId),
          o = r ? z(r) : [v.x, v.y + 1.65, v.z],
          l = fe[y.stance] ?? fe[0];
        c >= m.t0 && !m.killEye && m.settled && (m.killEye = o.slice());
        let u = m.killEye ?? o,
          d = !!(y.state & i.DEAD),
          f = c - m.t0,
          p = d && f >= 0 ? 0.35 : m.headshot ? l - 0.12 : l * 0.62;
        m.lift =
          m.lift == null || f < 0
            ? p
            : m.lift + (p - m.lift) * (1 - Math.exp(-s * Z.bodyDrop));
        let h = y.y + m.lift,
          g = y.x - u[0],
          _ = h - u[1],
          b = y.z - u[2],
          x = Math.atan2(-g, -b),
          S = Math.atan2(_, Math.hypot(g, b) || 1e-6),
          C = Math.abs(xi(0, x - e, 1)) + Math.abs(S - t),
          w = (e) => ((e = Math.max(0, Math.min(1, e))), e * e * (3 - 2 * e)),
          T = m.settled || (f < 0 && C < Z.settleMax);
        T && m.settleAt == null && (m.settleAt = n);
        let E = Math.min(
          f < 0 ? w((f + Z.settle) / (Z.settle - 0.15)) : 1,
          w((n - (m.settleAt ?? n)) / Z.settleRamp),
        );
        T && ((m.settled = !0), (e = xi(e, x, E)), (t += (S - t) * E));
      }
      m.view = [e, t];
      let r = o(e, t);
      if (w) ({ pos: T, look: E, fov: A } = R(w, S, y, c));
      else {
        let e = a.get(m.killerId),
          t =
            m.killEye ??
            (e ? z(e) : [v.x, v.y + (fe[v.stance] ?? fe[0]) - 0.15, v.z]);
        ((T = [t[0] + r[0] * Z.eyeFwd, t[1], t[2] + r[2] * Z.eyeFwd]),
          (A = h?.replayFov?.() ?? Z.fov),
          (j = !0));
      }
      w || (E = [T[0] + r[0] * 20, T[1] + r[1] * 20, T[2] + r[2] * 20]);
    } else if (y) {
      let e = n * 0.35;
      ((T = [y.x + Math.cos(e) * 4.5, y.y + 2.2, y.z + Math.sin(e) * 4.5]),
        (E = [y.x, y.y + 1, y.z]));
    } else return le();
    let M = m.cam && s < 0.5 && !j ? 1 - Math.exp(-s * 20) : 1,
      ee = m.look && s < 0.5 && !j ? 1 - Math.exp(-s * 14) : 1;
    if (
      ((m.cam = m.cam ? Si(m.cam, T, M) : T),
      (m.look = m.look ? Si(m.look, E, ee) : E),
      (m.fov =
        m.fov == null || s >= 0.5
          ? A
          : m.fov + (A - m.fov) * (1 - Math.exp(-s * 14))),
      e.setCamera({ pos: m.cam, look: m.look, fov: m.fov }),
      D)
    ) {
      (k(
        D.victim,
        m.fov < 40 ? null : y,
        y && y.state & i.DEAD && c >= m.t0
          ? (m.lift ?? 0.35) + 0.6
          : (fe[y?.stance] ?? fe[0]) + 0.35,
      ),
        k(D.killer, w, (S?.h ?? 2) + 0.9),
        (D.bar.style.width = `${Math.min(100, (n / r) * 100).toFixed(1)}%`));
      let e = oe(n, ae(m.from, m.t0));
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
    start: se,
    update: pe,
    stop: le,
    playing: () => !!m,
    aimed: () => !!(m?.viewing && m.aimed),
    armed: () => !1,
    frames: () => Math.max(0, ...[...s.values()].map((e) => e.s.length)),
    dispose() {
      (A?.(),
        j?.(),
        M?.(),
        ee?.(),
        N?.(),
        P?.(),
        t && window.removeEventListener(`keydown`, te, !0),
        le(),
        h?.remove(),
        (h = null),
        s.clear(),
        (c.length = 0),
        (l.length = 0),
        (u.length = 0),
        (d.length = 0));
    },
  };
}
