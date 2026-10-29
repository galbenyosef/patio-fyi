// assets__ui-hhE6L1u7 04 — math
// Lines 654-993 of readable/assets__ui-hhE6L1u7.pretty.js (statement-aligned).
function fn(e, t) {
  let n = t.appendChild(dn(`aside`, `chat`)),
    r = n.appendChild(dn(`div`, `chat-log`)),
    i = n.appendChild(dn(`div`, `chat-entry`)),
    a = i.appendChild(dn(`span`, `chat-channel`)),
    o = i.appendChild(dn(`input`, `chat-input`)),
    s = n.appendChild(
      dn(
        `small`,
        `chat-hint`,
        `Enter · Send   /   Tab · All or team   /   Esc · Cancel`,
      ),
    );
  ((o.type = `text`),
    (o.maxLength = un),
    (o.autocomplete = `off`),
    (o.spellcheck = !1),
    o.setAttribute(`aria-label`, `Chat message`),
    r.setAttribute(`role`, `log`),
    (i.hidden = s.hidden = !0));
  let c = `all`,
    l = null,
    u = 0,
    d = [],
    f = () =>
      e.world.players.get(l)?.team ??
      e.modules.get(`player`)?.getLocalEntity?.()?.team ??
      -1,
    p = (e) => {
      ((c = e),
        (a.textContent = e === `team` ? `TEAM` : `ALL`),
        (i.dataset.channel = e));
    },
    m = () => !i.hidden;
  function h(e) {
    (p(e),
      (i.hidden = s.hidden = !1),
      n.classList.add(`open`),
      (o.value = ``),
      o.focus({ preventScroll: !0 }));
  }
  function g() {
    m() &&
      ((i.hidden = s.hidden = !0),
      n.classList.remove(`open`),
      (o.value = ``),
      o.blur());
  }
  function _(e) {
    if (!e?.text) return;
    let t = r.appendChild(
      dn(`div`, `chat-row ${e.channel === `team` ? `team` : `all`}`),
    );
    for (
      t.append(
        dn(`span`, `chat-tag`, e.channel === `team` ? `[TEAM]` : `[ALL]`),
        dn(`b`, e.team === f() ? `ally` : `enemy`, `${e.name || `Player`}:`),
        dn(`span`, `chat-text`, e.text),
      ),
        d.push({ row: t, until: u + ln });
      d.length > cn;
    )
      d.shift().row.remove();
  }
  let v = (t) => {
    if ((t.stopPropagation(), t.type === `keydown`)) {
      if (t.code === `Enter` || t.code === `NumpadEnter`) {
        t.preventDefault();
        let n = o.value.trim();
        (n &&
          e.modules.get(`netcode`)?.sendRpc?.(`chat`, { channel: c, text: n }),
          g());
      } else
        t.code === `Escape`
          ? (t.preventDefault(), g())
          : t.code === `Tab` &&
            (t.preventDefault(), p(c === `team` ? `all` : `team`));
    }
  };
  (o.addEventListener(`keydown`, v),
    o.addEventListener(`keyup`, v),
    o.addEventListener(`keypress`, v),
    o.addEventListener(`blur`, g));
  let y = (t) => {
    if (
      m() ||
      t.repeat ||
      t.ctrlKey ||
      t.altKey ||
      t.metaKey ||
      e.config.showcase ||
      t.target?.closest?.(
        `input,textarea,select,button,[contenteditable="true"]`,
      )
    )
      return;
    let n = !!e.modules.get(`ui`)?.isVisible?.(`spawn`),
      r =
        t.code === `KeyY`
          ? `team`
          : (t.code === `Enter` || t.code === `NumpadEnter`) && !n
            ? `all`
            : null;
    r && (t.preventDefault(), h(r));
  };
  window.addEventListener(`keydown`, y);
  let b = [
    e.events.on(`chat:message`, _),
    e.events.on(`net:connected`, (e) => {
      e?.playerId != null && (l = e.playerId);
    }),
    e.events.on(`player:local`, (e) => {
      e?.playerId != null && (l = e.playerId);
    }),
  ];
  return {
    isOpen: m,
    update(e) {
      u += e;
      for (let e of d) e.row.classList.toggle(`old`, u > e.until);
    },
    dispose() {
      (b.forEach((e) => e?.()),
        window.removeEventListener(`keydown`, y),
        n.remove());
    },
  };
}
var pn = `
.chat{position:absolute;right:var(--safe);bottom:calc(var(--safe) + 168px * var(--ui));width:calc(380px * var(--ui));z-index:36;display:flex;flex-direction:column;gap:6px;pointer-events:none;font:500 14px/1.35 system-ui;color:var(--ink);text-shadow:0 1px 2px #000d}
.chat-log{display:flex;flex-direction:column;gap:2px}
.chat-row{padding:3px 8px;background:#10161acc;overflow-wrap:anywhere;transition:opacity .6s}
.chat-row.old{opacity:0}.chat.open .chat-row.old{opacity:1}
.chat-row>*{margin-right:6px}.chat-tag{font-size:11px;font-weight:700;letter-spacing:.06em;color:var(--ink3)}
.chat-row.team .chat-tag{color:#80dfa6}.chat-row b.ally{color:var(--ally)}.chat-row b.enemy{color:var(--enemy)}
.chat-entry{display:flex;align-items:center;gap:8px;padding:6px 8px;background:#10161af2;border-left:3px solid var(--ink2);pointer-events:auto}
.chat-entry[hidden],.chat-hint[hidden]{display:none}
.chat-entry[data-channel=team]{border-left-color:#80dfa6}
.chat-channel{font-size:11px;font-weight:700;letter-spacing:.08em;color:var(--ink2);min-width:38px}
.chat-input{flex:1;min-width:0;background:transparent;border:0;outline:0;color:var(--ink);font:inherit}
.chat-hint{color:var(--ink3);font-size:11px;padding-left:8px}
`,
  mn = {
    clearAt: 1,
    fullAt: 0.2,
    step: 0,
    regenChunk: 0.12,
    rise: 0.12,
    ease: 0.6,
    snap: 0.16,
    spikeScale: 0.35,
    spikeFade: 0.38,
    pulseFade: 0.7,
    muffle: 0.45,
  },
  hn = (e, t, n) => (e < t ? t : e > n ? n : e);
function gn(e, t = mn) {
  let n = hn(+e || 0, 0, 1);
  if (t.step > 0) {
    let e = t.step / 100;
    n = Math.min(1, Math.ceil(n / e - 1e-6) * e);
  }
  return hn((t.clearAt - n) / (t.clearAt - t.fullAt), 0, 1);
}
function _n(e = mn) {
  let t = {
    level: 0,
    target: 0,
    spike: 0,
    pulse: 0,
    total: 0,
    hp: -1,
    alive: !1,
    recovering: 0,
  };
  return (
    (t.reset = () => {
      ((t.level = t.target = t.spike = t.pulse = t.total = 0),
        (t.hp = -1),
        (t.alive = !1),
        (t.recovering = 0));
    }),
    (t.update = (n, r, i, a) => {
      if (((n = Math.max(0, +n || 0)), !a || !(i > 0))) return (t.reset(), t);
      ((t.target = gn(r / i, e)),
        (!t.alive || t.hp < 0) &&
          ((t.alive = !0), (t.hp = r), (t.level = t.target)));
      let o = r - t.hp;
      ((t.hp = r),
        o < 0
          ? (t.spike = Math.min(
              1,
              t.spike + hn(-o / i / e.spikeScale, 0.12, 1),
            ))
          : o >= e.regenChunk * i && ((t.pulse = 1), (t.recovering = 1)));
      let s = t.target > t.level ? e.rise : t.recovering ? e.snap : e.ease;
      return (
        (t.level += (t.target - t.level) * (1 - Math.exp(-n / s))),
        Math.abs(t.target - t.level) < 0.002 &&
          ((t.level = t.target), (t.recovering = 0)),
        (t.spike *= Math.exp(-n / e.spikeFade)),
        t.spike < 0.004 && (t.spike = 0),
        (t.pulse = Math.max(0, t.pulse - n / e.pulseFade)),
        (t.total = hn(t.level + t.spike * (1 - t.level * 0.55), 0, 1)),
        t
      );
    }),
    t
  );
}
var vn = `.sl-top,.sl-objs,.sl-feed,.sl-map,.sl-ammo,.sl-players,.sl-mkl,.sl-lane,.squad-hud,.sl-grenades`,
  yn = `
.sl-wound{position:absolute;inset:-2%;z-index:1;pointer-events:none;opacity:0;will-change:transform,opacity;
background:radial-gradient(ellipse 72% 70% at center,rgba(12,10,10,0) 30%,rgba(14,11,11,.5) 58%,rgba(8,6,6,.9) 80%,rgba(3,2,2,.98) 100%)}
.sl-xh{--xw:1}.sl-xh i{opacity:var(--xw)}
`;
function bn(e, t, n) {
  let r = _n(),
    i = t.insertBefore(document.createElement(`div`), t.children[1] ?? null);
  i.className = `sl-wound`;
  let a = () => e.renderer?.domElement,
    o = () => e.modules?.get?.(`audio`),
    s = {
      filter: ``,
      hud: ``,
      hudN: 0,
      xw: -1,
      edge: ``,
      muffle: -1,
      glitch: null,
      glitchT: 0,
      nextGlitch: 0,
      t: 0,
      beat: 0,
    },
    c = Math.random,
    l = () => t.querySelectorAll(vn);
  function u(e) {
    let t = a();
    if (t) {
      if (t.dataset.reviveFx) {
        s.filter = null;
        return;
      }
      s.filter !== e && ((s.filter = e), (t.style.filter = e));
    }
  }
  function d(e, n, r = t, i = e) {
    Math.abs(s[e] - n) < 0.004 ||
      ((s[e] = n), r.style.setProperty(`--${i}`, n.toFixed(3)));
  }
  let f = (e, t) => Math.round(e * t) / t;
  function p(e, t) {
    let n = e <= 0 && t === 1 ? `` : `${e}|${t}`,
      r = l();
    if (n === s.hud && r.length === s.hudN) return;
    ((s.hud = n), (s.hudN = r.length));
    let i = n
        ? `saturate(${(1 - 0.85 * e).toFixed(3)}) brightness(${t.toFixed(3)})`
        : ``,
      a = n ? (1 - 0.32 * e).toFixed(3) : ``;
    for (let e of r) ((e.style.filter = i), (e.style.opacity = a));
  }
  function m() {
    s.glitch &&= ((s.glitch.style.translate = ``), null);
  }
  function h(e, t, { living: a = !1, active: h = !0, ui: g = 1 } = {}) {
    s.t += e;
    let _ = a && h;
    r.update(e, t?.hp ?? 0, Math.max(1, +t?.maxHp || 200), a);
    let v = _ ? r.total : 0,
      y = _ ? r.level : 0,
      b = _ ? r.pulse : 0;
    if (v < 0.002 && b <= 0) u(``);
    else {
      let e = f(v, 50),
        t = f(b, 20);
      u(
        `saturate(${(1 - 0.72 * e ** 0.9).toFixed(3)}) contrast(${(1 - 0.14 * e).toFixed(3)}) brightness(${(1 - 0.12 * e + 0.1 * t).toFixed(3)})`,
      );
    }
    let x = 1 + 0.9 * (1 - v) ** 1.2,
      S = Math.min(1, v * 1.2) * (1 - 0.5 * b);
    if (y > 0.55) {
      s.beat += e * (1.1 + 0.5 * y);
      let t = s.beat % 1,
        n =
          Math.exp(-((t - 0.05) ** 2) / 0.002) +
          0.6 * Math.exp(-((t - 0.24) ** 2) / 0.002);
      x -= (n * 0.035 * (y - 0.55)) / 0.45;
    }
    let C = S < 0.003 ? `` : `${x.toFixed(3)}|${S.toFixed(3)}`;
    if (
      (C !== s.edge &&
        ((s.edge = C),
        (i.style.opacity = C ? S.toFixed(3) : `0`),
        (i.style.transform = C ? `scale(${x.toFixed(3)})` : ``)),
      p(f(v ** 1.1, 20), f(1 + 0.35 * b, 20)),
      (s.glitchT -= e),
      s.glitchT <= 0 && m(),
      v > 0.3 && s.t >= s.nextGlitch && !s.glitch)
    ) {
      let e = l(),
        t = e[(c() * e.length) | 0];
      if (t) {
        let e = (1 + (3 * (v - 0.3)) / 0.7) * g;
        ((t.style.translate = `${((c() - 0.5) * 2 * e).toFixed(1)}px ${((c() - 0.5) * 2 * e).toFixed(1)}px`),
          (s.glitch = t),
          (s.glitchT = 0.05 + c() * 0.08));
      }
      s.nextGlitch = s.t + (2.4 - 2 * v) * (0.4 + c());
    }
    (_ || (m(), (s.nextGlitch = s.t)),
      d(`xw`, f(1 - 0.45 * v ** 1.2, 50), n, `xw`));
    let w = (4 * v ** 1.6 + 5 * r.spike) * g * !!_,
      T = s.t,
      E =
        w *
        (Math.sin(T * 7.3) * 0.5 +
          Math.sin(T * 13.1 + 1.7) * 0.3 +
          Math.sin(T * 23.7 + 0.4) * 0.2),
      D =
        w *
        (Math.sin(T * 6.1 + 2.1) * 0.5 +
          Math.sin(T * 15.3 + 0.9) * 0.3 +
          Math.sin(T * 21.1 + 2.6) * 0.2);
    n.style.translate = w < 0.05 ? `` : `${E.toFixed(2)}px ${D.toFixed(2)}px`;
    let O = Math.round(mn.muffle * y ** 1.4 * 50) / 50;
    return (
      _ && O !== s.muffle
        ? ((s.muffle = O), o()?.setMuffle?.(O, 0.6))
        : !_ && s.muffle > 0 && (s.muffle = -1),
      r
    );
  }
  function g() {
    (u(``), p(0, 1), m(), i.remove());
  }
  return { update: h, dispose: g, model: r, el: i };
}
