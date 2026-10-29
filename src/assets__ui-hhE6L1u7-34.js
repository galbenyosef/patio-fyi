// assets__ui-hhE6L1u7 34 — hidden
// Lines 15562-15905 of readable/assets__ui-hhE6L1u7.pretty.js (statement-aligned).
var Co = `#sl-feedback{--ink:#15110d;--paper:#f3eee2;--display:'Saira Condensed','Barlow Condensed','Bahnschrift','Arial Narrow',sans-serif;position:fixed;inset:0;z-index:100003;display:grid;place-items:center;background:#0e0c0ae6;font:600 17px/1.3 var(--display);color:var(--ink)}
#sl-feedback[hidden]{display:none}
#sl-feedback .fb{position:relative;width:min(560px,calc(100vw - 32px));box-sizing:border-box;padding:22px 24px 24px;background:var(--paper);border:4px solid var(--ink);border-radius:24px 24px 24px 6px;box-shadow:0 10px 0 var(--ink),0 24px 40px #0009;transform:rotate(-.8deg);animation:slFbIn .4s cubic-bezier(.2,1.6,.4,1) both}
#sl-feedback h2{margin:0 0 2px;font:700 36px/1 var(--display);text-transform:uppercase}#sl-feedback p{margin:0 0 14px;color:#4a4036;font-size:18px}
#sl-feedback textarea{width:100%;box-sizing:border-box;min-height:140px;padding:12px;background:#fff;border:3px solid var(--ink);border-radius:14px;color:var(--ink);font:600 18px/1.35 var(--display);resize:vertical}
#sl-feedback textarea:focus{outline:none;box-shadow:0 0 0 4px #c8f04a}
#sl-feedback .row{display:flex;gap:12px;justify-content:flex-end;align-items:center;margin-top:16px;flex-wrap:wrap}
#sl-feedback .msg{margin-right:auto;color:#a6420f}#sl-feedback .msg.ok{color:#3d6b10}
#sl-feedback button{padding:10px 20px;border:3px solid var(--ink);border-radius:14px;background:#fff;color:var(--ink);font:700 20px/1 var(--display);text-transform:uppercase;cursor:pointer;box-shadow:0 5px 0 var(--ink)}
#sl-feedback button.send{background:#c8f04a}#sl-feedback button:active{transform:translateY(4px);box-shadow:0 1px 0 var(--ink)}#sl-feedback button:disabled{opacity:.5;cursor:default}
@keyframes slFbIn{0%{opacity:0;translate:0 -30px;scale:.94}100%{opacity:1;translate:0 0;scale:1}}
@media (prefers-reduced-motion:reduce){#sl-feedback .fb{animation:none}}`,
  wo = null;
function To(e, { name: t = ``, onClose: n = null } = {}) {
  if (!wo) {
    let e = document.createElement(`style`);
    ((e.textContent = Co),
      document.head.append(e),
      (wo = document.createElement(`section`)),
      (wo.id = `sl-feedback`),
      (wo.hidden = !0),
      wo.setAttribute(`role`, `dialog`),
      wo.setAttribute(`aria-label`, `Comments or questions`),
      (wo.innerHTML = `<form class="fb"><h2>Comments? Questions?</h2><p>Bugs, ideas, anything. It goes straight to the guy RPing as a developer, who reads every one.</p>
<textarea name="text" maxlength="1000" required placeholder="Type your message"></textarea>
<div class="row"><span class="msg" role="status"></span><button type="button" class="cancel">Back</button><button class="send">Send</button></div></form>`));
    for (let e of [
      `keydown`,
      `keyup`,
      `keypress`,
      `mousedown`,
      `pointerdown`,
      `click`,
      `wheel`,
      `contextmenu`,
    ])
      wo.addEventListener(e, (e) => e.stopPropagation());
    document.body.append(wo);
  }
  let r = wo.querySelector(`form`),
    i = r.elements.text,
    a = wo.querySelector(`.msg`),
    o = wo.querySelector(`.send`),
    s = () => {
      ((wo.hidden = !0), n?.());
    };
  return (
    (wo.querySelector(`.cancel`).onclick = s),
    (wo.onkeydown = (e) => {
      (e.stopPropagation(), e.key === `Escape` && (e.preventDefault(), s()));
    }),
    (r.onsubmit = async (n) => {
      n.preventDefault();
      let r = i.value.trim();
      if (!r) return;
      ((o.disabled = !0), (a.className = `msg`), (a.textContent = `Sending…`));
      let c = e?.modules?.get?.(`ui`)?.api,
        l = {
          text: r,
          name: t || window.__cubieClaim?.getName?.() || ``,
          ua: navigator.userAgent,
          size: [innerWidth, innerHeight, devicePixelRatio],
          minutes: Math.round(performance.now() / 6e4),
          build: document.querySelector(`meta[name=build]`)?.content ?? ``,
          fps: c?.fps?.() ?? null,
        };
      try {
        let e = await fetch(`/feedback`, {
          method: `POST`,
          body: JSON.stringify(l),
          credentials: `same-origin`,
          signal: AbortSignal.timeout?.(8e3),
        });
        if (!e.ok)
          throw Error(
            e.status === 429
              ? `You have sent a few already. Try again in a few minutes.`
              : `The server did not take it. Try again.`,
          );
        ((a.className = `msg ok`),
          (a.textContent = `Sent. Thank you!`),
          (i.value = ``),
          setTimeout(() => {
            wo.hidden || s();
          }, 1400));
      } catch (e) {
        a.textContent =
          e?.name === `TimeoutError` || e?.name === `TypeError`
            ? `Could not reach the server. Try again.`
            : e.message;
      } finally {
        o.disabled = !1;
      }
    }),
    (a.textContent = ``),
    (wo.hidden = !1),
    e?.modules?.get?.(`player`)?.setPointerLock?.(!1),
    setTimeout(() => i.focus(), 0),
    s
  );
}
var Eo = `@font-face{font-family:'Saira Condensed';font-weight:700;font-display:swap;src:url(/assets/fonts/saira-condensed/saira-condensed-latin-700-normal.woff2) format('woff2')}
@font-face{font-family:'Saira Condensed';font-weight:600;font-display:swap;src:url(/assets/fonts/saira-condensed/saira-condensed-latin-600-normal.woff2) format('woff2')}
#sl-welcome{--ink:#15110d;--lime:#c8f04a;--lime-hi:#e6ff9c;--lime-lo:#8fb021;--amber:#e0a030;--amber-hi:#f6cf7c;--amber-lo:#a96f12;--paper:#f3eee2;--steel:#c4c9cd;
 --display:'Saira Condensed','Barlow Condensed','Bahnschrift','Arial Narrow',sans-serif;
 position:fixed;inset:0;z-index:100001;display:grid;place-items:center;overflow:auto;padding:24px 16px;box-sizing:border-box;color:var(--ink);font:600 16px/1.3 var(--display);
 background:radial-gradient(circle at 8% 100%,#e0a03038,transparent 45%),radial-gradient(circle at 96% 0%,#d23a322e,transparent 40%),#0e0c0ae0}
#sl-welcome[hidden]{display:none}
#sl-welcome *{box-sizing:border-box}
#sl-welcome .w{width:min(940px,100%);display:grid;grid-template-columns:1.15fr 1fr;grid-template-areas:'tape tape' 'play side' 'msg msg' 'foot foot';gap:22px 28px;align-items:stretch}
#sl-welcome .tape{grid-area:tape;justify-self:start;display:flex;align-items:baseline;gap:14px;flex-wrap:wrap;padding:6px 26px 7px 22px;background:var(--paper);color:var(--ink);transform:rotate(-2deg);
 clip-path:polygon(0 8%,3% 0,97% 4%,100% 0,99% 92%,96% 100%,4% 96%,1% 100%);font:700 30px/1 var(--display);text-transform:uppercase;letter-spacing:.01em}
#sl-welcome .tape .goal{font:600 18px/1.2 var(--display);text-transform:none;letter-spacing:0;color:#4a4036}
#sl-welcome .blk{position:relative;display:block;width:100%;text-align:left;cursor:pointer;color:var(--ink);border:4px solid var(--ink);border-radius:20px;font:700 30px/1.02 var(--display);text-transform:uppercase;letter-spacing:.005em;
 transition:transform .12s,box-shadow .12s;animation:slDrop .55s cubic-bezier(.2,1.6,.4,1) both}
#sl-welcome .blk:focus-visible{outline:4px dashed var(--paper);outline-offset:5px}
#sl-welcome .blk:active{transform:translateY(8px)!important}
#sl-welcome .play{grid-area:play;min-height:290px;padding:26px 28px 70px;background:var(--lime);font-size:104px;line-height:.86;
 box-shadow:inset 0 8px 0 var(--lime-hi),inset 0 -12px 0 var(--lime-lo),0 12px 0 var(--ink),0 22px 30px #0009;transform:rotate(-1.5deg);animation:slDrop .55s cubic-bezier(.2,1.6,.4,1) both,slBob 2.6s 1s ease-in-out infinite}
#sl-welcome .play:hover{transform:rotate(-2.5deg) translateY(-4px)}
#sl-welcome .play:active{box-shadow:inset 0 8px 0 var(--lime-hi),inset 0 -12px 0 var(--lime-lo),0 3px 0 var(--ink)}
#sl-welcome .play .cubes{position:absolute;right:26px;top:26px;width:70px;height:70px;background:conic-gradient(from 45deg,var(--lime-lo) 0 25%,var(--lime-hi) 0 50%,var(--lime-lo) 0 75%,#b3d83a 0);border:4px solid var(--ink);border-radius:10px;transform:rotate(12deg)}
#sl-welcome .sticker{position:absolute;left:24px;bottom:-20px;display:inline-block;padding:7px 14px;background:#fff;border:3px solid var(--ink);border-radius:999px;font:600 19px/1 var(--display);text-transform:none;letter-spacing:0;transform:rotate(2.5deg);box-shadow:0 4px 0 var(--ink)}
#sl-welcome .play .what{position:absolute;right:24px;bottom:30px;max-width:46%;text-align:right;font:700 20px/1.15 var(--display);text-transform:none;letter-spacing:0;color:#3d4d0c}
#sl-welcome .side{grid-area:side;display:flex;flex-direction:column;gap:22px}
#sl-welcome .tag{position:relative;display:flex;flex-direction:column;gap:2px;padding:12px 18px 12px 64px;background:linear-gradient(160deg,#e3e7ea,var(--steel) 55%,#9aa2a8);border:4px solid var(--ink);border-radius:26px;box-shadow:0 8px 0 var(--ink);transform:rotate(1.2deg);animation:slDrop .55s .08s cubic-bezier(.2,1.6,.4,1) both}
#sl-welcome .tag::before{content:'';position:absolute;left:20px;top:50%;width:22px;height:22px;margin-top:-11px;border-radius:50%;background:#0e0c0a;border:3px solid #6f777d}
#sl-welcome .tag span{font:700 15px/1 var(--display);text-transform:uppercase;letter-spacing:.04em;color:#3b4247}
#sl-welcome .tag input{width:100%;min-width:0;padding:2px 0;background:none;border:0;border-bottom:3px dashed #3b424788;color:var(--ink);font:700 28px/1.15 var(--display)}
#sl-welcome .tag input:focus{outline:none;border-bottom-color:var(--ink)}
#sl-welcome .custom{padding:18px 20px 18px 84px;background:var(--amber);box-shadow:inset 0 6px 0 var(--amber-hi),inset 0 -9px 0 var(--amber-lo),0 9px 0 var(--ink);transform:rotate(-1deg);animation-delay:.14s}
#sl-welcome .custom:hover{transform:rotate(-2deg) translateY(-3px)}
#sl-welcome .custom svg{position:absolute;left:20px;top:50%;width:46px;height:46px;margin-top:-23px}
#sl-welcome .ask{padding:16px 20px;background:var(--paper);border-radius:22px 22px 22px 6px;box-shadow:0 9px 0 var(--ink);transform:rotate(.8deg);animation-delay:.2s;font-size:28px}
#sl-welcome .ask:hover{transform:rotate(1.8deg) translateY(-3px)}
#sl-welcome .blk small{display:block;margin-top:6px;font:600 18px/1.2 var(--display);text-transform:none;letter-spacing:0;opacity:.82}
#sl-welcome .msg{grid-area:msg;margin:0;color:#ffcf6a;font-size:18px}#sl-welcome .msg:empty{display:none}
#sl-welcome .foot{grid-area:foot;display:flex;flex-wrap:wrap;gap:10px 12px;align-items:center;margin-top:6px;color:#e9e1d0;font:600 17px/1.2 var(--display)}
#sl-welcome .foot .left{padding:4px 10px;background:#ffffff14;border-radius:8px}
#sl-welcome .foot button{padding:7px 14px;background:#2a241e;color:#f3eee2;border:3px solid #f3eee2;border-radius:12px;font:700 16px/1 var(--display);cursor:pointer;box-shadow:0 4px 0 #f3eee288}
#sl-welcome .foot button:hover{background:#3a3129}#sl-welcome .foot button:active{transform:translateY(3px);box-shadow:0 1px 0 #f3eee288}
@keyframes slDrop{0%{opacity:0;translate:0 -46px;scale:.92}100%{opacity:1;translate:0 0;scale:1}}
@keyframes slBob{0%,100%{translate:0 0}50%{translate:0 -5px}}
@media (prefers-reduced-motion:reduce){#sl-welcome .blk,#sl-welcome .tag,#sl-welcome .play{animation:none}}
@media (max-width:760px){#sl-welcome .w{grid-template-columns:1fr;grid-template-areas:'tape' 'play' 'side' 'msg' 'foot';gap:20px}
 #sl-welcome .play{min-height:0;font-size:64px;padding:20px 20px 52px}#sl-welcome .play .cubes{width:46px;height:46px;right:18px;top:18px}
 #sl-welcome .play .what{position:static;display:block;max-width:none;text-align:left;margin-top:10px;font-size:17px}#sl-welcome .tape{font-size:22px}#sl-welcome .tape .goal{display:none}#sl-welcome .custom,#sl-welcome .ask{font-size:22px}}`;
function Do(e, t, { tips: n } = {}) {
  let r = ro(`welcome`),
    i = () => typeof window.__cubieClaim == `function`,
    a = $a(),
    o = r === !0 || (r !== !1 && !a.welcomeOff && !to() && a.visits < 3),
    s = null,
    c = 0,
    l = () =>
      `Recruit-` +
      String(10 + Math.floor(Math.random() * 90)) +
      ` (change me?)`,
    u = ``;
  if (!Xa())
    try {
      u = localStorage.getItem(`salient.callsign`) || ``;
    } catch {}
  function d(r) {
    let i = document.createElement(`style`);
    ((i.textContent = Eo),
      document.head.append(i),
      (s = document.createElement(`section`)),
      (s.id = `sl-welcome`),
      s.setAttribute(`role`, `dialog`),
      s.setAttribute(`aria-label`, `Welcome`));
    let a = 3 - r;
    s.innerHTML = `<div class="w"><div class="tape">New recruit <span class="goal"></span></div>
<button type="button" class="blk play"><span class="cubes" aria-hidden="true"></span>Play<br>now!<span class="what">Assault kit · drops you in near the fight</span><span class="sticker">I'll customize my loadout later</span></button>
<div class="side"><label class="tag"><span>Name on your tag</span><input name="name" maxlength="24" autocomplete="nickname" placeholder="Your name in game"></label>
<button type="button" class="blk custom"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M30 6a11 11 0 0 0-10 15L6 35a4.5 4.5 0 0 0 7 7l14-14a11 11 0 0 0 15-10l-7 7-7-2-2-7z" fill="#15110d"/></svg>I'd rather customize my loadout first<small>Class, guns, gadgets, spawn point, with a quick tour</small></button>
<button type="button" class="blk ask">Comments? Questions?<small>Send a message straight to the guy RPing as a developer</small></button></div>
<p class="msg" role="alert"></p>
<div class="foot"><span class="left">Shows on your first 3 visits${a > 0 ? ` (${a} more after this one)` : ` (this is the last one)`}</span>
<button type="button" class="never">Don't show it again</button><button type="button" class="skip">Skip: I've played before</button></div></div>`;
    for (let e of [
      `keydown`,
      `keyup`,
      `keypress`,
      `mousedown`,
      `pointerdown`,
      `click`,
      `wheel`,
      `contextmenu`,
    ])
      s.addEventListener(e, (e) => e.stopPropagation());
    let o = s.querySelector(`input`),
      c = s.querySelector(`.msg`);
    ((o.value = (Xa() ? `` : window.__cubieClaim?.getName?.()) || u || l()),
      (s.querySelector(`.goal`).textContent = f()));
    let d = () => {
      let e = o.value.trim();
      return e
        ? (window.__cubieClaim?.setName?.(e), !0)
        : ((c.textContent = `Enter a callsign first.`), o.focus(), !1);
    };
    ((s.querySelector(`.play`).onclick = () => {
      d() && (p(`play`), t.deployNow({ classId: `assault`, spawn: `combat` }));
    }),
      (s.querySelector(`.custom`).onclick = () => {
        d() && (p(`custom`), n?.deployTour?.());
      }),
      (s.querySelector(`.ask`).onclick = () => {
        ((s.hidden = !0),
          To(e, {
            name: o.value.trim(),
            onClose: () => {
              s.dataset.open === `1` && (s.hidden = !1);
            },
          }));
      }),
      (s.querySelector(`.never`).onclick = (e) => {
        (eo({ welcomeOff: !0 }),
          e.currentTarget.replaceWith(
            Object.assign(document.createElement(`span`), {
              textContent: `Okay, this is the last time.`,
            }),
          ));
      }),
      (s.querySelector(`.skip`).onclick = () => {
        (d(), eo({ welcomeOff: !0, tipsOff: !0 }), n?.stop?.(), p(`skip`));
      }),
      o.addEventListener(`keydown`, (e) => {
        e.key === `Enter` &&
          (e.preventDefault(), s.querySelector(`.play`).click());
      }),
      document.body.append(s),
      (s.dataset.open = `1`));
  }
  function f() {
    let t = e.world?.match?.mode;
    return t === `ffa`
      ? `Free-for-all: most kills wins.`
      : t === `tdm`
        ? `Every kill drains their tickets.`
        : `Hold more flags than the other team.`;
  }
  function p(t) {
    s &&
      ((s.hidden = !0),
      (s.dataset.open = `0`),
      (s.dataset.choice = t),
      e.events?.emit?.(`ui:welcome`, {
        choice: t,
        ms: Math.round(performance.now() - c),
      }));
  }
  return {
    update() {
      if (!o || (r !== !0 && !i())) return;
      let t = e.modules.get(`ui`);
      !e.config?.showcase &&
        t?.isVisible?.(`spawn`) &&
        (e.modules.get(`player`)?.getLocalEntity?.() ||
          ((o = !1),
          (c = performance.now()),
          d(r === !0 ? Math.max(1, to() || 1) : no())));
    },
    isOpen: () => s?.dataset.open === `1` && !s.hidden,
    dispose() {
      (s?.remove(), (s = null));
    },
  };
}
function Oo(e) {
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
function ko(e) {
  let t = document.createElement(`div`),
    n = document.createElement(`div`),
    r = document.createElement(`div`);
  ((t.id = `javelin-gate`),
    (r.id = `javelin-status`),
    (t.hidden = r.hidden = !0),
    (t.style.cssText = `position:absolute;width:64px;height:64px;margin:-32px 0 0 -32px;border:2px solid #e8d36a;box-sizing:border-box;pointer-events:none;transition:border-color .1s`),
    (n.style.cssText = `position:absolute;top:100%;left:50%;transform:translateX(-50%);margin-top:6px;white-space:nowrap;font:600 12px/1 system-ui;letter-spacing:.12em;color:inherit`),
    (r.style.cssText = `position:absolute;left:50%;top:62%;transform:translateX(-50%);padding:5px 12px;background:#141c22c0;font:600 13px/1 system-ui;letter-spacing:.16em;color:#b8c9d4;pointer-events:none`),
    t.append(n),
    e.ui.append(t, r));
  let i = e.events.on(`ui:javelinLock`, (e) => {
    if (
      ((r.hidden = !e.active), (t.hidden = !e.active || e.x == null), !e.active)
    )
      return;
    let i = e.state === `locked`,
      a = i ? `#ff5a4d` : `#e8d36a`;
    if (
      ((r.textContent = i
        ? `LOCKED · FIRE`
        : e.state === `locking`
          ? `ACQUIRING`
          : e.state === `empty`
            ? `NO MISSILE`
            : `SEEKING · HOLD ON A VEHICLE`),
      (r.style.color = i ? a : e.state === `locking` ? `#e8d36a` : `#b8c9d4`),
      e.x == null)
    )
      return;
    let o = Math.round(i ? 44 : 96 - 52 * e.progress);
    ((t.style.left = `${(e.x + 1) * 50}%`),
      (t.style.top = `${(1 - e.y) * 50}%`),
      (t.style.width = t.style.height = `${o}px`),
      (t.style.margin = `${-o / 2}px 0 0 ${-o / 2}px`),
      (t.style.borderColor = t.style.color = a),
      (t.style.borderStyle = i ? `solid` : `dashed`),
      (n.textContent = `${i ? `LOCK` : Math.round(e.progress * 100) + `%`} · ${Math.round(e.distance)} M`));
  });
  return {
    dispose() {
      (i(), t.remove(), r.remove());
    },
  };
}
