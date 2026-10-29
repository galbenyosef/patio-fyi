// assets__ui-hhE6L1u7 30 — color
// Lines 14475-14775 of readable/assets__ui-hhE6L1u7.pretty.js (statement-aligned).
var Ra = (e) => String(e ?? ``).replace(/^Key|^Digit/, ``) || `?`,
  za = `#6fd08c`,
  Ba = `#e0a040`,
  Va = `#8a9296`,
  Ha = `#e0604a`,
  Ua = `#5fa8e8`,
  Wa = 1e4;
function Ga(e, t = 0) {
  let n = Ra(e.key);
  return e.mic === `denied`
    ? t < Wa
      ? {
          text: `🎙 Microphone blocked · click the icon left of the address bar → Microphone → Allow`,
          color: Ha,
          dim: !1,
        }
      : { text: `🎙 Mic blocked · you can still hear`, color: Va, dim: !0 }
    : e.mode === `off`
      ? { text: `🎙 Mic off · hold ${n} to talk`, color: Va, dim: !0 }
      : e.mic === `unsupported`
        ? {
            text: `🎙 Voice needs a current Chrome, Edge or Firefox`,
            color: Ha,
            dim: !1,
          }
        : e.mic === `starting`
          ? { text: `🎙 Starting microphone…`, color: Va, dim: !1 }
          : e.mode === `ptt`
            ? e.mic === `ready`
              ? e.transmitting
                ? {
                    text: `● TALKING · nearby players hear you`,
                    color: za,
                    dim: !1,
                  }
                : { text: `🎙 Push-to-talk · hold ${n}`, color: Va, dim: !0 }
              : {
                  text: `🎙 Push-to-talk · hold ${n}, then allow the microphone`,
                  color: Va,
                  dim: !1,
                }
            : e.muted
              ? { text: `🎙 MIC MUTED · ${n} to unmute`, color: Ba, dim: !1 }
              : e.mic === `ready`
                ? e.talking
                  ? {
                      text: `● TALKING · nearby players hear you`,
                      color: za,
                      dim: !1,
                    }
                  : { text: `🎙 OPEN MIC · ${n} to mute`, color: za, dim: !0 }
                : {
                    text: `🎙 Open mic · click the game to start it`,
                    color: Ba,
                    dim: !1,
                  };
}
function Ka(e) {
  let t = document.createElement(`aside`);
  ((t.id = `voice-indicator`),
    (t.style.cssText = `position:absolute;left:28px;top:92px;z-index:40;display:flex;flex-direction:column;gap:6px;pointer-events:none;font:600 14px system-ui;color:#eceae3;text-shadow:0 1px 2px #000c`));
  let n = document.createElement(`div`);
  ((n.id = `voice-mic`),
    (n.style.cssText = `padding:6px 10px;background:#1a1d20d9;border-left:3px solid;width:max-content;max-width:340px;transition:opacity .2s`));
  let r = document.createElement(`div`);
  ((r.style.cssText = `display:flex;flex-direction:column;gap:4px`),
    t.append(n, r));
  let i = document.createElement(`div`);
  ((i.id = `voice-toggle`),
    i.setAttribute(`role`, `radiogroup`),
    i.setAttribute(`aria-label`, `Proximity voice`),
    (i.style.cssText = `position:absolute;top:28px;left:200px;z-index:60;pointer-events:auto;display:flex;align-items:stretch;background:#1a1d20e8;border:1px solid #858a88;font:13px system-ui;color:#eceae3`));
  let a = document.createElement(`span`);
  ((a.textContent = `Voice`),
    (a.style.cssText = `padding:9px 10px;color:#9fb2bd`));
  let o = [
    [`none`, `Off`],
    [`off`, `Listen`],
    [`ptt`, `Push-to-talk`],
    [`open`, `Open mic`],
  ].map(([t, n]) => {
    let r = document.createElement(`button`);
    return (
      (r.type = `button`),
      (r.dataset.voice = t),
      (r.textContent = n),
      r.setAttribute(`role`, `radio`),
      (r.style.cssText = `padding:9px 11px;background:transparent;color:inherit;border:0;border-left:1px solid #474c4f;font:inherit;cursor:pointer`),
      r.addEventListener(`click`, (n) => {
        n.stopPropagation();
        let r = e.modules.get(`voice`);
        if (r?.state?.()) {
          if (t === `none`) {
            r.setEnabled(!1);
            return;
          }
          (r.state().enabled || r.setEnabled(!0), r.setMode(t));
        }
      }),
      r
    );
  });
  i.append(a, ...o);
  let s = null,
    c = 0,
    l = () => e.modules.get(`player`)?.getLocalEntity?.()?.team ?? -1;
  function u() {
    let t = s ?? e.modules.get(`voice`)?.state?.(),
      a = t ? (t.enabled ? t.mode : `none`) : ``;
    for (let e of o) {
      let n = e.dataset.voice === a;
      ((e.disabled = !t),
        e.setAttribute(`aria-checked`, String(n)),
        (e.style.background = n ? `#4ee3df33` : `transparent`),
        (e.style.fontWeight = n ? `700` : `400`));
    }
    if (
      ((i.title = `Off: no voice at all. Listen: hear nearby players, your microphone stays off. Push-to-talk: hold ${Ra(t?.key)} to talk. Open mic: everyone within earshot, friend or foe, hears you, even after you are killed; ${Ra(t?.key)} mutes.`),
      !t?.enabled)
    ) {
      ((n.hidden = !0), r.replaceChildren());
      return;
    }
    t.mic === `denied` ? (c ||= performance.now()) : (c = 0);
    let u = Ga(t, c ? performance.now() - c : 0);
    ((n.hidden = !1),
      (n.textContent = u.text),
      (n.dataset.state = t.muted ? `muted` : t.talking ? `talking` : t.mic),
      (n.style.borderLeftColor = u.color),
      (n.style.opacity = u.dim ? `0.6` : `1`));
    let d = l();
    r.replaceChildren(
      ...t.speakers.map((e) => {
        let t = document.createElement(`div`),
          n = e.team === d;
        return (
          (t.style.cssText = `padding:5px 10px;background:#1a1d20d9;width:max-content;border-left:3px solid ${n ? Ua : Ha}`),
          (t.textContent = `🔊 ${n ? e.name || `Teammate` : `Enemy voice`}`),
          t
        );
      }),
    );
  }
  let d = e.events.on(`voice:state`, (e) => {
      ((s = e), u());
    }),
    f = () => {
      i.hidden =
        !!document.pointerLockElement ||
        !!e.modules.get(`ui`)?.isVisible(`netstats`);
    };
  (document.addEventListener(`pointerlockchange`, f),
    e.ui.append(t, i),
    f(),
    u());
  let p = 0;
  return {
    update() {
      ++p >= 30 && ((p = 0), f(), u());
    },
    dispose() {
      (d(),
        document.removeEventListener(`pointerlockchange`, f),
        t.remove(),
        i.remove());
    },
  };
}
var qa = `salient.onboarding`,
  Ja = `salient.onboarding.tab`,
  Ya = (() => {
    try {
      return new URLSearchParams(location.search).get(`fresh`) === `1`;
    } catch {
      return !1;
    }
  })(),
  Xa = () => Ya,
  Za = null,
  Qa = 0;
function $a() {
  let e = Za;
  if (!Ya)
    try {
      e = JSON.parse(localStorage.getItem(qa) || `null`);
    } catch {}
  return {
    visits: Number.isFinite(e?.visits) ? e.visits : 0,
    welcomeOff: !!e?.welcomeOff,
    tipsOff: !!e?.tipsOff,
    seen: Array.isArray(e?.seen) ? e.seen.map(String).slice(0, 200) : [],
  };
}
function eo(e) {
  let t = { ...$a(), ...e };
  if (Ya) return ((Za = t), t);
  try {
    localStorage.setItem(qa, JSON.stringify(t));
  } catch {}
  return t;
}
function to() {
  if (Ya) return Qa;
  try {
    return +sessionStorage.getItem(Ja) || 0;
  } catch {
    return 0;
  }
}
function no() {
  let e = $a().visits + 1;
  if ((eo({ visits: e }), Ya)) return ((Qa = e), e);
  try {
    sessionStorage.setItem(Ja, String(e));
  } catch {}
  return e;
}
function ro(e) {
  try {
    let t = new URLSearchParams(location.search).get(e);
    return t === `1` || (t !== `0` && null);
  } catch {
    return null;
  }
}
var io = () => {
    try {
      return matchMedia(`(pointer: coarse)`).matches;
    } catch {
      return !1;
    }
  },
  ao = [
    [`Move`, `W A S D`],
    [`Fire`, `Left mouse`],
    [`Aim`, `Right mouse`],
    [`Sprint`, `Shift`],
    [`Jump`, `Space`],
    [`Crouch / prone`, `C / Z`],
    [`Reload`, `R`],
    [`Grenade / Medic revive`, `G`],
    [`Medic smoke`, `O`],
    [`Weapons`, `1 · 2 · 3`],
    [`Class tool`, `3 · 4`],
    [`Vehicle`, `F`],
    [`Spot enemy`, `T`],
    [`Push-to-talk`, `Hold N`],
    [`Scores`, `Tab`],
    [`Free mouse`, `Esc`],
  ],
  oo = `salient.controls.seen`,
  so = 12,
  co = [
    [`off`, `Listen only`],
    [`ptt`, `Push-to-talk (hold N)`],
    [`open`, `Open mic`],
  ],
  lo = [
    [`Move`, `Left thumb`],
    [`Look`, `Drag right side`],
    [`Fire`, `FIRE (drag to aim)`],
    [`Aim`, `AIM`],
    [`Sprint`, `Stick fully up`],
    [`Crouch / prone`, `Tap / hold CROUCH`],
    [`Grenade / revive`, `NADE / REVIVE`],
    [`Medic smoke`, `Hold SMOKE, let go`],
    [`Weapons`, `SWAP`],
    [`Vehicle`, `USE`],
    [`Spot enemy`, `SPOT`],
  ],
  uo = (e) => {
    let t = (t) => Nt(t, e);
    return [
      [`Move / look`, t(`STICKS`)],
      [`Fire`, t(`fire`)],
      [`Aim`, t(`aim`)],
      [`Sprint`, t(`sprint`)],
      [`Jump / parachute`, t(`jump`)],
      [`Crouch / prone`, `${t(`crouch`)} / hold ${t(`crouch`)}`],
      [`Reload`, t(`reload`)],
      [`Vehicle / pick up`, `Hold ${t(`use`)}`],
      [`Grenade / revive`, t(`grenade`)],
      [`Medic smoke`, `${t(`aim`)} + ${t(`grenade`)}`],
      [`Spot enemy`, t(`spot`)],
      [`Weapons`, `${t(`swap`)} · D-pad ↑↓`],
      [`Melee`, t(`melee`)],
      [`Call medic`, t(`medic`)],
      [`Squad order`, t(`order`)],
      [`Scores`, `Hold ${t(`scores`)}`],
      [`Settings`, t(`menu`)],
    ];
  },
  fo = { xbox: uo(`xbox`), ps: uo(`ps`) },
  po = new WeakMap(),
  mo = (e) => {
    let t = po.get(e);
    return (
      t || ((t = e.filter(([e]) => e !== `Squad order`)), po.set(e, t)),
      t
    );
  };
