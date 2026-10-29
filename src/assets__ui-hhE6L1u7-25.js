// assets__ui-hhE6L1u7 25 — hidden
// Lines 9920-10190 of readable/assets__ui-hhE6L1u7.pretty.js (statement-aligned).
function Ki(e, t, n, r) {
  let i = (e, t, n) => {
      let r = document.createElement(e);
      return ((r.className = t), (r.textContent = n ?? ``), r);
    },
    a = t.appendChild(i(`div`, `squad-aim-hint`)),
    o = t.appendChild(i(`div`, `squad-command-wheel`)),
    s = t.appendChild(i(`div`, `squad-position-marker`));
  ((o.hidden = a.hidden = s.hidden = !0),
    o.setAttribute(`role`, `dialog`),
    o.setAttribute(`aria-label`, `Squad commands`));
  let c = o.appendChild(i(`strong`, ``, `SQUAD COMMAND`)),
    l = o.appendChild(i(`small`, ``, `Click · 1–4 · Esc`)),
    u = { dwell: 2.5, show: 5 },
    d = `salient.squadTipLearned`,
    f = !1;
  try {
    f = localStorage.getItem(d) === `1`;
  } catch {}
  let p = () => {
      if (!f) {
        f = !0;
        try {
          localStorage.setItem(d, `1`);
        } catch {}
      }
    },
    m = null,
    h = 0,
    g = null,
    _ = !1,
    v = null,
    y = !1,
    b = null,
    x = 0,
    S = [innerWidth / 2, innerHeight / 2],
    C = [],
    w = (e, t, r) => {
      let a = o.appendChild(i(`button`, ``, ``));
      return (
        (a.type = `button`),
        a.append(i(`kbd`, ``, String(C.length + 1)), i(`span`, ``, e)),
        (a.onclick = () => {
          (p(), n.send(t, typeof r == `function` ? r() : r), O(!0));
        }),
        C.push(a),
        a
      );
    };
  (w(`Attack / Defend`, `order`, () => ({ objectiveId: b?.id })),
    w(`Regroup on me`, `order`, { kind: `regroup` }),
    w(`Hold this position`, `order`, { kind: `hold` }),
    w(`Cancel order`, `cancel`, {}));
  let T = o.appendChild(i(`button`, `command-dismiss`, `Dismiss`));
  ((T.type = `button`), (T.onclick = () => O(!0)));
  let E = (e, t) => {
    Wi(e.lastElementChild, t);
  };
  function D() {
    let [e, t] = Gi(
      o.getBoundingClientRect(),
      C[0].getBoundingClientRect(),
      S,
      [innerWidth, innerHeight],
    );
    ((o.style.left = e + `px`), (o.style.top = t + `px`));
  }
  function O(t = !1) {
    (clearTimeout(v), (v = null), (_ = !1));
    let n = !o.hidden;
    (Ui(o, !0),
      C[0].classList.contains(`armed`) && C[0].classList.remove(`armed`),
      n &&
        y &&
        t &&
        r.active() &&
        !Ht() &&
        e.modules.get(`player`)?.setPointerLock?.(!0),
      (y = !1));
  }
  function k() {
    if (!_ || !r.active() || n.own()?.leaderId !== r.playerId()) return;
    ((b = g),
      (C[0].disabled = !b),
      E(
        C[0],
        b
          ? `${b.team === n.own().team ? `Defend` : `Attack`} ${b.letter}`
          : `Aim at a base to attack / defend`,
      ),
      (C[3].disabled = !n.own()?.order),
      (y = e.modules.get(`player`)?.isInputActive?.()),
      e.modules.get(`player`)?.setPointerLock?.(!1),
      Wi(
        l,
        Ht() ? `D-pad · ${Nt(`confirm`)} · ${Nt(`back`)}` : `Click · 1–4 · Esc`,
      ),
      Ui(o, !1),
      Wi(c, `${n.own().name.toUpperCase()} / ORDERS`),
      (o.style.transform = `none`),
      D(),
      (x = performance.now()));
    let t = C.find((e) => !e.disabled);
    (t?.focus({ preventScroll: !0 }),
      t === C[0] && C[0].classList.add(`armed`));
  }
  function A(e) {
    if (!o.hidden) {
      if (e.code === `Escape`) {
        (e.preventDefault(), e.stopImmediatePropagation(), O(!0));
        return;
      }
      let t = /^(?:Digit|Numpad)([1-4])$/.exec(e.code)?.[1];
      if (t) {
        (e.preventDefault(), e.stopImmediatePropagation());
        let n = C[t - 1];
        n.disabled || n.click();
        return;
      }
    }
    if (
      e.code !== `KeyB` ||
      e.repeat ||
      !r.active() ||
      e.target?.closest?.(`input,textarea,select,[contenteditable=true]`)
    )
      return;
    let t = n.own();
    t &&
      (e.preventDefault(),
      (_ = !0),
      (h = performance.now()),
      t.leaderId === r.playerId() && (v = setTimeout(k, 280)));
  }
  function j(t) {
    if (
      t.code !== `KeyB` ||
      !_ ||
      (t.preventDefault(), clearTimeout(v), (_ = !1), !o.hidden) ||
      !r.active()
    )
      return;
    let i = n.own();
    i &&
      (i.leaderId === r.playerId()
        ? g
          ? (p(), n.send(`order`, { objectiveId: g.id }))
          : e.events.emit(`ui:message`, {
              kind: `squad`,
              text: `Aim at a base · Hold B for regroup or hold position`,
              ttl: 3,
            })
        : n.send(i.order ? `ack` : `request`));
  }
  function M(e) {
    if (document.pointerLockElement) return;
    let t = Math.hypot(e.clientX - S[0], e.clientY - S[1]);
    ((S[0] = e.clientX),
      (S[1] = e.clientY),
      !o.hidden &&
        (performance.now() - x < 250 && t > 4
          ? D()
          : C[0].classList.remove(`armed`)));
  }
  function N(e) {
    o.hidden || o.contains(e.target) || O(!0);
  }
  let P = () => O(!1);
  (window.addEventListener(`keydown`, A, !0),
    window.addEventListener(`keyup`, j, !0),
    window.addEventListener(`blur`, P),
    document.addEventListener(`mousemove`, M, !0),
    document.addEventListener(`mousedown`, N, !0));
  function F() {
    let t = n.own();
    if (!r.active() || !t) {
      (O(!1), Ui(a, !0), Ui(s, !0), (g = null));
      return;
    }
    (!o.hidden && t.leaderId !== r.playerId() && O(!0), (g = null));
    let c = 0.25,
      l = e.camera.aspect ?? 1;
    for (let t of e.world.match.objectives) {
      let n = new e.three.Vector3(t.pos[0], t.pos[1] + 3.5, t.pos[2]).project(
          e.camera,
        ),
        r = Math.hypot(n.x * l, n.y);
      n.z > -1 && n.z < 1 && r < c && ((c = r), (g = t));
    }
    let d = t.leaderId === r.playerId(),
      p = performance.now();
    g?.id !== m && ((m = g?.id ?? null), (h = p));
    let _ = (p - h) / 1e3,
      v = !!g && d && o.hidden && !f && _ >= u.dwell && _ < u.dwell + u.show;
    (g &&
      a.dataset.objectiveId !== String(g.id) &&
      (a.dataset.objectiveId = g.id),
      v &&
        a.hidden &&
        a.replaceChildren(
          i(`kbd`, ``, `B`),
          i(
            `span`,
            ``,
            `${g.team === t.team ? `Defend` : `Attack`} ${g.letter}`,
          ),
          i(`small`, ``, `hold for more`),
        ),
      Ui(a, !v));
    let y = it(e.world, t),
      b = e.world.get(e.world.players.get(r.playerId())?.entityId),
      x = !y || !t.order || ![`hold`, `regroup`].includes(t.order.kind);
    if (!x) {
      let n = new e.three.Vector3(...y.pos);
      if (((n.y += 2), n.project(e.camera), (x = n.z < -1 || n.z > 1), !x)) {
        ((s.style.left = `${(Math.max(-0.85, Math.min(0.85, n.x)) + 1) * 50}%`),
          (s.style.top = `${(1 - Math.max(-0.8, Math.min(0.8, n.y))) * 50}%`));
        let e = t.order.acknowledged?.length ?? 0;
        Wi(
          s,
          `◆ ${t.order.kind === `hold` ? `HOLD` : `REGROUP`} · ${Math.round(Math.hypot(y.pos[0] - (b?.pos[0] ?? 0), y.pos[2] - (b?.pos[2] ?? 0)))} m · ${e}/${t.members.length} ✓`,
        );
      }
    }
    Ui(s, x);
  }
  return {
    update: F,
    targetId: () =>
      g && n.own()?.leaderId === r.playerId() && o.hidden ? g.id : null,
    dispose() {
      (O(),
        window.removeEventListener(`keydown`, A, !0),
        window.removeEventListener(`keyup`, j, !0),
        window.removeEventListener(`blur`, P),
        document.removeEventListener(`mousemove`, M, !0),
        document.removeEventListener(`mousedown`, N, !0),
        a.remove(),
        o.remove(),
        s.remove());
    },
  };
}
var Z = Object.freeze({
    window: 3.2,
    after: 1,
    lead: 0.35,
    hold: 0.3,
    slowFrom: 0.6,
    slowScale: 0.45,
    hitstop: 0.18,
    rate: 1 / 120,
    reach: 160,
    fov: 75,
    chaseFov: [70, 34],
    chaseSide: 0.45,
    eyeFwd: 0.18,
    fadeIn: 0.25,
    fadeOut: 0.35,
    killShotGrace: 0.4,
  }),
  qi = (e = Z.window) =>
    Math.max(Z.slowFrom, e) -
    Z.slowFrom +
    (Z.slowFrom + Z.lead) / Z.slowScale +
    Z.hitstop +
    (Z.after - Z.lead) +
    Z.hold,
  Ji = (e, t, n) => e + Math.atan2(Math.sin(t - e), Math.cos(t - e)) * n,
  Yi = (e, t, n) => e.map((e, r) => e + (t[r] - e) * n),
  Xi = (e) => e & l.FIRING && !(e & (l.RELOADING | l.DEAD | l.IN_VEHICLE));
