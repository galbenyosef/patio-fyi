// assets__ui-hhE6L1u7 31 — style
// Lines 14776-15121 of readable/assets__ui-hhE6L1u7.pretty.js (statement-aligned).
function ho(e) {
  let t = document.createElement(`section`);
  ((t.id = `combat-controls`),
    (t.hidden = !0),
    t.setAttribute(`aria-label`, `Controls`),
    (t.style.cssText = `position:absolute;left:50%;bottom:24px;transform:translateX(-50%);z-index:59;width:min(560px,calc(100vw - 32px));padding:12px 16px 10px;background:#101820d9;border-top:3px solid #4ee3df;color:#edf2f4;font:13px/1.35 system-ui;pointer-events:none;transition:opacity .4s`));
  let n = document.createElement(`div`);
  n.style.cssText = `font-weight:700;font-size:14px;margin-bottom:8px`;
  let r = document.createElement(`div`);
  r.style.cssText = `display:grid;grid-template-columns:repeat(auto-fill,minmax(125px,1fr));gap:3px 14px`;
  let i = null,
    a = (t) => {
      if (i !== t) {
        ((i = t), r.replaceChildren());
        for (let [e, n] of t) {
          let t = document.createElement(`div`);
          t.style.cssText = `display:flex;justify-content:space-between;gap:8px;white-space:nowrap`;
          let i = document.createElement(`span`);
          ((i.textContent = e), (i.style.color = `#b8c9d4`));
          let a = document.createElement(`b`);
          ((a.textContent = n), t.append(i, a), r.append(t));
        }
        if (e.config.frost && t === ao) {
          let e = document.createElement(`div`);
          ((e.style.cssText = `grid-column:1/-1;color:#b8c9d4`),
            (e.textContent = `H · Raise / lower thermal monocular`),
            r.append(e));
        }
      }
    };
  a(ao);
  let o = document.createElement(`div`);
  o.style.cssText = `margin-top:7px;font-size:12px;color:#9fb2bd`;
  let s = document.createElement(`div`);
  ((s.hidden = !0),
    (s.style.cssText = `display:flex;align-items:center;flex-wrap:wrap;gap:6px;margin-top:9px;pointer-events:auto`));
  let c = document.createElement(`span`);
  ((c.textContent = `Voice chat`),
    (c.style.cssText = `color:#b8c9d4;margin-right:4px`));
  let u = co.map(([t, n]) => {
    let r = document.createElement(`button`);
    return (
      (r.type = `button`),
      (r.dataset.voice = t),
      (r.textContent = n),
      (r.style.cssText = `padding:5px 10px;background:#1a2630;color:#edf2f4;border:1px solid #4e626e;font:12px system-ui;cursor:pointer`),
      r.addEventListener(`click`, (n) => {
        n.stopPropagation();
        let r = e.modules.get(`voice`);
        r?.state?.() && (r.state().enabled || r.setEnabled(!0), r.setMode(t));
      }),
      r
    );
  });
  (s.append(c, ...u), t.append(n, r, s, o), e.ui.append(t));
  let d = Xa(),
    f = !0;
  if (!d)
    try {
      f = !localStorage.getItem(oo);
    } catch {}
  let p = () => (f ? so : 5),
    m = !1,
    h = !1,
    g = !1,
    _ = 5,
    v = !1,
    y = () => {
      let t = e.world?.match?.mode;
      return t === `ffa`
        ? `Free-for-all: every soldier is an enemy. Most kills wins.`
        : t === `tdm`
          ? `Team deathmatch: every death costs your team a ticket. Run the other team out first.`
          : t === `rush`
            ? `Rush: attackers arm the objectives, defenders stop them.`
            : `Capture the lettered flags. Holding more flags drains the enemy’s tickets.`;
    },
    b = document.createElement(`div`);
  ((b.id = `first-deploy-hint`),
    (b.hidden = !0),
    (b.textContent = `Ready? Press DEPLOY or Space · you can switch class every time you respawn`),
    (b.style.cssText = `position:absolute;z-index:59;padding:8px 12px;background:#101820e6;border-left:3px solid #c8f04a;color:#edf2f4;font:600 13px/1.35 system-ui;pointer-events:none;box-sizing:border-box`),
    e.ui.append(b));
  let x = document.createElement(`style`);
  ((x.textContent = `@keyframes slFirstDeploy{0%,100%{box-shadow:0 0 0 0 #c8f04a00}50%{box-shadow:0 0 18px 4px #c8f04aaa}}body.sl-first-deploy .sl-spawn .foot .btn:not(:disabled){animation:slFirstDeploy 1.6s ease-in-out infinite}`),
    document.head.append(x));
  let S = 0,
    C = () => {
      if (S-- > 0) return;
      S = 30;
      let e = document
          .querySelector(`.sl-spawn .spawn-column`)
          ?.getBoundingClientRect(),
        n = document
          .querySelector(`.sl-spawn .class-deck`)
          ?.getBoundingClientRect(),
        r = Math.round((e?.right ?? 24) + 20),
        i = Math.round((n?.bottom ?? 180) + 20);
      ((t.style.left = r + `px`),
        (t.style.top = i + `px`),
        (t.style.bottom = `auto`),
        (t.style.transform = `none`),
        (t.style.width =
          Math.max(288, Math.min(508, innerWidth * 0.555 - r - 32)) + `px`));
      let a = document
        .querySelector(`.sl-spawn .btn`)
        ?.closest(`.foot`)
        ?.getBoundingClientRect();
      ((b.hidden = !a?.width),
        a?.width &&
          ((b.style.right = Math.round(innerWidth - a.right) + `px`),
          (b.style.bottom = Math.round(innerHeight - a.top + 10) + `px`),
          (b.style.width = Math.round(a.width) + `px`)));
    },
    w = () => {
      let i = e.modules.get(`player`)?.getLocalEntity?.(),
        c = e.modules.get(`ui`),
        d =
          f &&
          !v &&
          !h &&
          !g &&
          !e.config.showcase &&
          !!c?.isVisible(`spawn`) &&
          document.body.dataset.slMenu === `deploy`,
        x =
          !d &&
          (_ >= p() ||
            !!e.config.showcase ||
            !i ||
            !!(i.state & l.DEAD) ||
            !!(i.state & l.IN_VEHICLE) ||
            !!c?.isVisible(`spawn`) ||
            !!c?.isVisible(`netstats`));
      if (
        (t.hidden !== x && (t.hidden = x),
        (t.style.opacity = !d && _ > p() - 0.5 ? `0` : `1`),
        s.hidden !== !d && (s.hidden = !d),
        !d && !b.hidden && (b.hidden = !0),
        document.body.classList.contains(`sl-first-deploy`) !== d &&
          document.body.classList.toggle(`sl-first-deploy`, d),
        d)
      ) {
        let t = e.modules.get(`voice`)?.state?.(),
          n = t?.enabled ? t.mode : ``;
        for (let e of u) {
          let t = e.dataset.voice === n;
          e.dataset.on !== String(t) &&
            ((e.dataset.on = String(t)),
            (e.style.background = t ? `#4ee3df44` : `#1a2630`),
            (e.style.borderColor = t ? `#4ee3df` : `#4e626e`));
        }
      }
      let w = y();
      n.textContent !== w && (n.textContent = w);
      let T = h ? lo : g ? fo[Bt()] : ao,
        E = g && rt(e.world) ? mo(T) : T;
      (a(E),
        (r.style.gridTemplateColumns =
          E === ao
            ? `repeat(auto-fill,minmax(125px,1fr))`
            : `repeat(auto-fill,minmax(200px,1fr))`),
        d
          ? C()
          : ((S = 0),
            (t.style.bottom = h ? `auto` : `24px`),
            (t.style.top = h ? `12px` : ``),
            (t.style.left = `50%`),
            (t.style.transform = `translateX(-50%)`),
            (t.style.width = `min(560px,calc(100vw - 32px))`)));
      let D = d
        ? `First time here? These are the controls · F1 shows them again in game`
        : h
          ? `Phone controls · Settings can move the buttons and turn on gyro aim`
          : g
            ? `Controller · ${Nt(`menu`)} opens Settings (aim assist, look speed) · menus: D-pad, ${Nt(`confirm`)} select, ${Nt(`back`)} back`
            : m
              ? `Click the battlefield to capture the mouse · F1 shows this again`
              : `F1 shows this again · Settings has graphics and sensitivity`;
      o.textContent !== D && (o.textContent = D);
    },
    T = () => {
      ((_ = 0), (fo = { xbox: uo(`xbox`), ps: uo(`ps`) }), w());
    },
    E = e.events.on(`player:inputMode`, (e) => {
      if (((m = e.mode === `preview`), e.mode === `touch` && !h)) {
        ((h = !0), T());
        return;
      }
      if (e.mode === `gamepad` && !g && !h) {
        ((g = !0), T());
        return;
      }
      m && v ? T() : w();
    }),
    D = (e) => {
      e.code === `F1` && !e.repeat && (e.preventDefault(), T());
    };
  return (
    document.addEventListener(`keydown`, D),
    {
      update(t = 0) {
        if (!v) {
          let t = e.modules.get(`player`)?.getLocalEntity?.();
          t &&
            !(t.state & l.DEAD) &&
            !e.modules.get(`ui`)?.isVisible(`spawn`) &&
            ((v = !0), (_ = 0));
        }
        if (((_ += Math.max(0, +t || 0)), f && v && _ >= so && ((f = !1), !d)))
          try {
            localStorage.setItem(oo, `1`);
          } catch {}
        w();
      },
      dispose() {
        (E(),
          document.removeEventListener(`keydown`, D),
          t.remove(),
          b.remove(),
          x.remove(),
          document.body.classList.remove(`sl-first-deploy`));
      },
    }
  );
}
var go = `'Saira Condensed','Barlow Condensed','Bahnschrift',sans-serif`,
  _o = `#sl-tip,#sl-tour{position:fixed;z-index:100002;width:300px;box-sizing:border-box;padding:12px 16px;border:3px solid #15110d;border-radius:16px;color:#15110d;font:600 18px/1.25 ${go};box-shadow:0 6px 0 #15110d,0 14px 28px #000a}
#sl-tip{background:#f3eee2;pointer-events:none;transition:opacity .3s}#sl-tip.out{opacity:0}
#sl-tour{background:#c8f04a}
#sl-tip[hidden],#sl-tour[hidden],.sl-tip-ring[hidden]{display:none}
#sl-tip .k{display:table;margin-bottom:6px;padding:2px 8px;background:#c8f04a;border:2px solid #15110d;border-radius:6px;font:700 13px/1.1 ${go};text-transform:uppercase;letter-spacing:.03em}
#sl-tip kbd{display:inline-block;min-width:1.4em;padding:0 6px;margin:0 1px;background:#fff;border:2px solid #15110d;border-bottom-width:4px;border-radius:6px;font:700 15px/1.3 ${go};text-align:center;color:#15110d}
#sl-tip::after,#sl-tour::after{content:'';position:absolute;width:0;height:0;border:12px solid transparent}
#sl-tip[data-side=none]::after{display:none}
#sl-tip[data-side=left]::after,#sl-tour[data-side=left]::after{right:100%;top:var(--y,24px);transform:translateY(-50%)}
#sl-tip[data-side=right]::after,#sl-tour[data-side=right]::after{left:100%;top:var(--y,24px);transform:translateY(-50%)}
#sl-tip[data-side=above]::after,#sl-tour[data-side=above]::after{top:100%;left:var(--x,40px);transform:translateX(-50%)}
#sl-tip[data-side=below]::after,#sl-tour[data-side=below]::after{bottom:100%;left:var(--x,40px);transform:translateX(-50%)}
#sl-tip[data-side=left]::after{border-right-color:#15110d}#sl-tip[data-side=right]::after{border-left-color:#15110d}#sl-tip[data-side=above]::after{border-top-color:#15110d}#sl-tip[data-side=below]::after{border-bottom-color:#15110d}
#sl-tour[data-side=left]::after{border-right-color:#c8f04a}#sl-tour[data-side=right]::after{border-left-color:#c8f04a}#sl-tour[data-side=above]::after{border-top-color:#c8f04a}#sl-tour[data-side=below]::after{border-bottom-color:#c8f04a}
#sl-tour .n{display:block;margin-bottom:4px;font:800 11px system-ui;letter-spacing:.16em;text-transform:uppercase;opacity:.75}
#sl-tour .row{display:flex;gap:8px;justify-content:flex-end;margin-top:10px}
#sl-tour button{padding:6px 12px;border:3px solid #15110d;border-radius:10px;background:#fff;color:#15110d;font:700 15px/1 ${go};text-transform:uppercase;cursor:pointer;box-shadow:0 3px 0 #15110d}#sl-tour button.next{background:#15110d;color:#c8f04a}#sl-tour button:active{translate:0 2px;box-shadow:0 1px 0 #15110d}
.sl-tip-ring{position:fixed;z-index:100001;pointer-events:none;box-sizing:border-box;border:4px solid #c8f04a;border-radius:14px;box-shadow:0 0 18px #c8f04a;transition:box-shadow .25s;animation:slTipRing 1.2s ease-in-out infinite}
.sl-tip-ring.round{border-radius:50%}
/* the dim is its own still layer (a hole round the target): the pulsing ring repaints every frame, and a 9999 px
   shadow on it made every frame repaint the whole screen */
.sl-tip-dim{position:fixed;z-index:100000;pointer-events:none;box-sizing:border-box;border-radius:14px;box-shadow:0 0 0 9999px #05080a8c;transition:opacity .25s}.sl-tip-dim.round{border-radius:50%}.sl-tip-dim.light{box-shadow:0 0 0 9999px #05080a59}.sl-tip-dim[hidden]{display:none}
.sl-tour-ring.dim{box-shadow:0 0 0 9999px #05080a8c,0 0 18px #c8f04a;animation:none}
@keyframes slTipRing{50%{border-color:#f4ffd0}}
/* the marker itself is placed by its transform, so only the diamond inside pulses: scaling .sl-mk scaled its screen
   position too and swept it across the view (owner 2026-10-28) */
.sl-mk.tip-target{filter:drop-shadow(0 0 4px #c8f04a) drop-shadow(0 0 8px #c8f04a99)}
.sl-mk.tip-target .d{animation:slTipMk 1.4s ease-in-out infinite}
@keyframes slTipMk{0%,100%{scale:1}50%{scale:1.1}}`,
  vo = (e) => `<kbd>${e}</kbd>`,
  yo = {
    ammo: `.sl-bare.sl-panel`,
    grenade: `#grenade-inventory`,
    score: `.sl-top`,
    feed: `.sl-feed`,
    settings: `#game-settings`,
    map: `.sl-spawn .mapw`,
    deck: `.sl-spawn .class-deck`,
    goal: () => {
      let e = document
        .querySelector(`.sl-mk.tip-target:not([hidden]) .d`)
        ?.getBoundingClientRect();
      return e?.width
        ? {
            left: e.left - 6,
            top: e.top - 6,
            width: e.width + 12,
            height: e.height + 12,
            round: !0,
            moving: !0,
          }
        : null;
    },
    center: () => ({
      left: innerWidth / 2 - 55,
      top: innerHeight / 2 - 55,
      width: 110,
      height: 110,
      round: !0,
    }),
  },
  bo = [
    [
      `aim`,
      5,
      `${vo(`Right mouse`)} aims down the sights: far more accurate than firing from the hip.`,
      `Hold AIM for an accurate shot.`,
      `center`,
    ],
    [
      `move`,
      20,
      `${vo(`Shift`)} sprints. ${vo(`C`)} crouches for steadier aim and a smaller target.`,
      `Push the stick all the way up to sprint. CROUCH steadies your aim.`,
      null,
    ],
    [
      `spot`,
      35,
      `Aim at an enemy and press ${vo(`T`)}: your whole team sees them marked.`,
      `SPOT marks the enemy you aim at for your whole team.`,
      `center`,
    ],
    [
      `weapons`,
      50,
      `${vo(`1`)} ${vo(`2`)} ${vo(`3`)} switch weapons. Your class tool is on ${vo(`3`)} or ${vo(`4`)}.`,
      `SWAP changes weapon.`,
      `ammo`,
    ],
    [
      `grenade`,
      65,
      `${vo(`G`)} throws a grenade: good for enemies behind cover.`,
      `NADE throws a grenade.`,
      `grenade`,
    ],
    [
      `scores`,
      80,
      `Hold ${vo(`Tab`)} to see the scores and who is winning.`,
      null,
      `score`,
    ],
    [
      `vehicle`,
      100,
      `Walk up to a vehicle and press ${vo(`F`)} to get in.`,
      `USE gets you into a vehicle.`,
      null,
    ],
    [
      `menu`,
      130,
      `${vo(`Esc`)} frees the mouse. Settings has graphics, sound and a "Comments? Questions?" box.`,
      null,
      `settings`,
    ],
  ];
