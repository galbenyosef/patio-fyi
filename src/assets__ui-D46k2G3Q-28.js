// assets__ui-D46k2G3Q 28 — style
// Lines 13841-14162 of readable/assets__ui-D46k2G3Q.pretty.js (statement-aligned).
var ta = (e) => String(e ?? ``).replace(/^Key|^Digit/, ``) || `?`,
  na = `#6fd08c`,
  ra = `#e0a040`,
  ia = `#8a9296`,
  aa = `#e0604a`,
  oa = `#5fa8e8`,
  sa = 1e4;
function ca(e, t = 0) {
  let n = ta(e.key);
  return e.mic === `denied`
    ? t < sa
      ? {
          text: `🎙 Microphone blocked · click the icon left of the address bar → Microphone → Allow`,
          color: aa,
          dim: !1,
        }
      : { text: `🎙 Mic blocked · you can still hear`, color: ia, dim: !0 }
    : e.mic === `unsupported`
      ? {
          text: `🎙 Voice needs a current Chrome, Edge or Firefox`,
          color: aa,
          dim: !1,
        }
      : e.muted
        ? { text: `🎙 MIC MUTED · ${n} to unmute`, color: ra, dim: !1 }
        : e.mic === `starting`
          ? { text: `🎙 Starting microphone…`, color: ia, dim: !1 }
          : e.mic === `ready`
            ? e.talking
              ? {
                  text: `● TALKING · nearby players hear you`,
                  color: na,
                  dim: !1,
                }
              : { text: `🎙 MIC ON · ${n} to mute`, color: na, dim: !0 }
            : {
                text: `🎙 Click the game to switch your microphone on`,
                color: ra,
                dim: !1,
              };
}
function la(e) {
  let t = document.createElement(`aside`);
  ((t.id = `voice-indicator`),
    (t.style.cssText = `position:absolute;left:28px;top:92px;z-index:40;display:flex;flex-direction:column;gap:6px;pointer-events:none;font:600 14px system-ui;color:#eceae3;text-shadow:0 1px 2px #000c`));
  let n = document.createElement(`div`);
  ((n.id = `voice-mic`),
    (n.style.cssText = `padding:6px 10px;background:#1a1d20d9;border-left:3px solid;width:max-content;max-width:340px;transition:opacity .2s`));
  let r = document.createElement(`div`);
  ((r.style.cssText = `display:flex;flex-direction:column;gap:4px`),
    t.append(n, r));
  let i = document.createElement(`button`);
  ((i.type = `button`),
    (i.id = `voice-toggle`),
    (i.style.cssText = `position:absolute;top:28px;left:200px;z-index:60;pointer-events:auto;padding:9px 12px;background:#1a1d20e8;color:#eceae3;border:1px solid #858a88;font:13px system-ui;cursor:pointer`),
    i.addEventListener(`click`, (t) => {
      t.stopPropagation();
      let n = e.modules.get(`voice`);
      n?.setEnabled?.(!n.state()?.enabled);
    }));
  let a = null,
    o = 0,
    s = () => e.modules.get(`player`)?.getLocalEntity?.()?.team ?? -1;
  function c() {
    let t = a ?? e.modules.get(`voice`)?.state?.();
    if (
      ((i.disabled = !t),
      (i.textContent = `Proximity voice: ${t?.enabled ? `On` : `Off`}`),
      (i.title = `Your microphone is open to everyone within earshot, friend or foe, even after you are killed. ${ta(t?.key)} mutes it; this button turns voice off completely.`),
      i.setAttribute(`aria-pressed`, String(!!t?.enabled)),
      !t?.enabled)
    ) {
      ((n.hidden = !0), r.replaceChildren());
      return;
    }
    t.mic === `denied` ? (o ||= performance.now()) : (o = 0);
    let c = ca(t, o ? performance.now() - o : 0);
    ((n.hidden = !1),
      (n.textContent = c.text),
      (n.dataset.state = t.muted ? `muted` : t.talking ? `talking` : t.mic),
      (n.style.borderLeftColor = c.color),
      (n.style.opacity = c.dim ? `0.6` : `1`));
    let l = s();
    r.replaceChildren(
      ...t.speakers.map((e) => {
        let t = document.createElement(`div`),
          n = e.team === l;
        return (
          (t.style.cssText = `padding:5px 10px;background:#1a1d20d9;width:max-content;border-left:3px solid ${n ? oa : aa}`),
          (t.textContent = `🔊 ${n ? e.name || `Teammate` : `Enemy voice`}`),
          t
        );
      }),
    );
  }
  let l = e.events.on(`voice:state`, (e) => {
      ((a = e), c());
    }),
    u = () => {
      i.hidden =
        !!document.pointerLockElement ||
        !!e.modules.get(`ui`)?.isVisible(`netstats`);
    };
  (document.addEventListener(`pointerlockchange`, u),
    e.ui.append(t, i),
    u(),
    c());
  let d = 0;
  return {
    update() {
      ++d >= 30 && ((d = 0), u(), c());
    },
    dispose() {
      (l(),
        document.removeEventListener(`pointerlockchange`, u),
        t.remove(),
        i.remove());
    },
  };
}
var ua = [
    [`Move`, `W A S D`],
    [`Fire`, `Left mouse`],
    [`Aim`, `Right mouse`],
    [`Sprint`, `Shift`],
    [`Jump`, `Space`],
    [`Crouch / prone`, `C / Z`],
    [`Reload`, `R`],
    [`Grenade`, `G`],
    [`Weapons`, `1 · 2 · 3`],
    [`Class tool`, `3 · 4`],
    [`Vehicle`, `F`],
    [`Spot enemy`, `T`],
    [`Scores`, `Tab`],
    [`Free mouse`, `Esc`],
  ],
  da = [
    [`Move`, `Left thumb`],
    [`Look`, `Drag right side`],
    [`Fire`, `FIRE (drag to aim)`],
    [`Aim`, `AIM`],
    [`Sprint`, `Stick fully up`],
    [`Crouch / prone`, `Tap / hold CROUCH`],
    [`Grenade`, `Hold NADE, let go`],
    [`Weapons`, `SWAP`],
    [`Vehicle`, `USE`],
    [`Spot enemy`, `SPOT`],
  ],
  fa = (e) => {
    let t = (t) => wt(t, e);
    return [
      [`Move / look`, t(`STICKS`)],
      [`Fire`, t(`fire`)],
      [`Aim`, t(`aim`)],
      [`Sprint`, t(`sprint`)],
      [`Jump / parachute`, t(`jump`)],
      [`Crouch / prone`, `${t(`crouch`)} / hold ${t(`crouch`)}`],
      [`Reload`, t(`reload`)],
      [`Vehicle / pick up`, `Hold ${t(`use`)}`],
      [`Grenade`, t(`grenade`)],
      [`Spot enemy`, t(`spot`)],
      [`Weapons`, `${t(`swap`)} · D-pad ↑↓`],
      [`Melee`, t(`melee`)],
      [`Call medic`, t(`medic`)],
      [`Squad order`, t(`order`)],
      [`Scores`, `Hold ${t(`scores`)}`],
      [`Settings`, t(`menu`)],
    ];
  },
  pa = { xbox: fa(`xbox`), ps: fa(`ps`) },
  ma = new WeakMap(),
  ha = (e) => {
    let t = ma.get(e);
    return (
      t || ((t = e.filter(([e]) => e !== `Squad order`)), ma.set(e, t)),
      t
    );
  };
function ga(e) {
  let t = document.createElement(`section`);
  ((t.id = `combat-controls`),
    (t.hidden = !0),
    t.setAttribute(`aria-label`, `Controls`),
    (t.style.cssText = `position:absolute;left:50%;bottom:24px;transform:translateX(-50%);z-index:59;width:min(560px,calc(100vw - 32px));padding:12px 16px 10px;background:#101820d9;border-top:3px solid #4ee3df;color:#edf2f4;font:13px/1.35 system-ui;pointer-events:none;transition:opacity .4s`));
  let n = document.createElement(`div`);
  n.style.cssText = `font-weight:700;font-size:14px;margin-bottom:8px`;
  let r = document.createElement(`div`);
  r.style.cssText = `display:grid;grid-template-columns:repeat(auto-fill,minmax(125px,1fr));gap:3px 14px`;
  let a = null,
    o = (t) => {
      if (a !== t) {
        ((a = t), r.replaceChildren());
        for (let [e, n] of t) {
          let t = document.createElement(`div`);
          t.style.cssText = `display:flex;justify-content:space-between;gap:8px;white-space:nowrap`;
          let i = document.createElement(`span`);
          ((i.textContent = e), (i.style.color = `#b8c9d4`));
          let a = document.createElement(`b`);
          ((a.textContent = n), t.append(i, a), r.append(t));
        }
        if (e.config.frost && t === ua) {
          let e = document.createElement(`div`);
          ((e.style.cssText = `grid-column:1/-1;color:#b8c9d4`),
            (e.textContent = `H · Raise / lower thermal monocular`),
            r.append(e));
        }
      }
    };
  o(ua);
  let s = document.createElement(`div`);
  ((s.style.cssText = `margin-top:7px;font-size:12px;color:#9fb2bd`),
    t.append(n, r, s),
    e.ui.append(t));
  let c = !1,
    l = !1,
    u = !1,
    d = 5,
    f = !1,
    p = () => {
      let t = e.world?.match?.mode;
      return t === `ffa`
        ? `Free-for-all: every soldier is an enemy. Most kills wins.`
        : t === `tdm`
          ? `Team deathmatch: every death costs your team a ticket. Run the other team out first.`
          : t === `rush`
            ? `Rush: attackers arm the objectives, defenders stop them.`
            : `Capture the lettered flags. Holding more flags drains the enemy’s tickets.`;
    },
    m = () => {
      let a = e.modules.get(`player`)?.getLocalEntity?.(),
        f =
          d >= 5 ||
          !!e.config.showcase ||
          !a ||
          !!(a.state & i.DEAD) ||
          !!(a.state & i.IN_VEHICLE) ||
          !!e.modules.get(`ui`)?.isVisible(`spawn`) ||
          !!e.modules.get(`ui`)?.isVisible(`netstats`);
      (t.hidden !== f && (t.hidden = f),
        (t.style.opacity = d > 4.5 ? `0` : `1`));
      let m = p();
      n.textContent !== m && (n.textContent = m);
      let h = l ? da : u ? pa[jt()] : ua,
        g = u && it(e.world) ? ha(h) : h;
      (o(g),
        (r.style.gridTemplateColumns =
          g === ua
            ? `repeat(auto-fill,minmax(125px,1fr))`
            : `repeat(auto-fill,minmax(200px,1fr))`),
        (t.style.bottom = l ? `auto` : `24px`),
        (t.style.top = l ? `12px` : ``));
      let _ = l
        ? `Phone controls · Settings can move the buttons and turn on gyro aim`
        : u
          ? `Controller · ${wt(`menu`)} opens Settings (aim assist, look speed) · menus: D-pad, ${wt(`confirm`)} select, ${wt(`back`)} back`
          : c
            ? `Click the battlefield to capture the mouse · F1 shows this again`
            : `F1 shows this again · Settings has graphics and sensitivity`;
      s.textContent !== _ && (s.textContent = _);
    },
    h = () => {
      ((d = 0), (pa = { xbox: fa(`xbox`), ps: fa(`ps`) }), m());
    },
    g = e.events.on(`player:inputMode`, (e) => {
      if (((c = e.mode === `preview`), e.mode === `touch` && !l)) {
        ((l = !0), h());
        return;
      }
      if (e.mode === `gamepad` && !u && !l) {
        ((u = !0), h());
        return;
      }
      c && f ? h() : m();
    }),
    _ = (e) => {
      e.code === `F1` && !e.repeat && (e.preventDefault(), h());
    };
  return (
    document.addEventListener(`keydown`, _),
    {
      update(t = 0) {
        if (!f) {
          let t = e.modules.get(`player`)?.getLocalEntity?.();
          t && !(t.state & i.DEAD) && ((f = !0), (d = 0));
        }
        ((d += Math.max(0, +t || 0)), m());
      },
      dispose() {
        (g(), document.removeEventListener(`keydown`, _), t.remove());
      },
    }
  );
}
function _a(e) {
  let t = document.createElement(`div`);
  ((t.id = `launcher-readout`),
    (t.hidden = !0),
    (t.style.cssText = `position:absolute;right:28px;bottom:195px;padding:8px 12px;background:#141c22df;border-left:3px solid #b8c9d4;color:#e5ecef;font:14px/1.5 system-ui;pointer-events:none`));
  let n = document.createElement(`div`),
    r = document.createElement(`div`);
  (t.append(n, r), e.ui.append(t));
  let i,
    a = e.events.on(`ui:launcherRange`, (e) => {
      if ((t.hidden !== !e.active && (t.hidden = !e.active), !e.active)) return;
      let a =
          e.distance == null
            ? `SURFACE RANGE —`
            : `SURFACE RANGE ${Math.round(e.distance)} M`,
        o = e.tooClose
          ? `TOO CLOSE · UNARMED RISK`
          : `ARMS AFTER ${e.armingDistance} M FLIGHT`;
      (n.textContent !== a && (n.textContent = a),
        r.textContent !== o && (r.textContent = o));
      let s = e.tooClose ? `#efaa62` : `#b8c9d4`;
      s !== i && ((t.style.borderColor = s), (r.style.color = s), (i = s));
    });
  return {
    dispose() {
      (a(), t.remove());
    },
  };
}
