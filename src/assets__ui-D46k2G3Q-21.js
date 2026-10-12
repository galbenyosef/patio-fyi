// assets__ui-D46k2G3Q 21 — appendchild
// Lines 8992-9347 of readable/assets__ui-D46k2G3Q.pretty.js (statement-aligned).
function mi(e, t, n, r) {
  let a = e.world,
    o = n.appendChild(X(`section`, `squad-panel`)),
    s = t.appendChild(X(`aside`, `squad-hud`));
  o.hidden = !0;
  let c = !1,
    l = ``,
    u = -1,
    d = null,
    f = null,
    p = ``,
    m = null,
    h = e.events.on(`ui:message`, (e) => {
      e?.kind === `squad` && ((p = e.text), (l = ``));
    }),
    g = () => r.playerId(),
    _ = () => ot(a, g()),
    v = () =>
      JSON.stringify([
        g(),
        a.match.squads,
        a.match.objectives.map((e) => [e.id, e.team]),
        d,
        p,
        [...(_()?.members ?? [])].map((e) => a.players.get(e)?.name),
      ]),
    y = (t, n = {}) =>
      e.modules.get(`netcode`)?.sendRpc?.(`squad`, { action: t, ...n }),
    b = (e, t, n, r = {}, i = !1) => {
      let a = e.appendChild(X(`button`, ``, t));
      return (
        (a.type = `button`),
        (a.disabled = i),
        (a.dataset.squadAction = n),
        (a.dataset.focus = `${n}-${r.playerId ?? r.squadId ?? r.objectiveId ?? ``}`),
        (a.onclick = () => y(n, r)),
        a
      );
    };
  function x(e, t, n, r) {
    let o = a.players.get(t),
      s = a.get(o?.entityId),
      c = s?.hp > 0 && !(s.state & i.DEAD),
      l = e.appendChild(X(`div`, `squad-member`));
    l.dataset.playerId = t;
    let u = n.members.indexOf(t) + 1;
    if (
      (l.append(X(`span`, `squad-number`, t === n.leaderId ? `★` : String(u))),
      l
        .appendChild(X(`div`, `squad-member-info`))
        .append(
          X(
            `strong`,
            ``,
            `${o?.name ?? `Connecting…`}${t === g() ? ` · YOU` : ``}${n.order?.acknowledged.includes(t) ? ` ✓` : ``}`,
          ),
          X(
            `small`,
            ``,
            `${t === n.leaderId ? `Squad leader · ` : ``}${o?.isBot ? `AI · ` : ``}${c ? (s.state & i.IN_VEHICLE ? `In vehicle` : `In field`) : `Deploying`}`,
          ),
        ),
      r && t !== g())
    ) {
      let e = l.appendChild(X(`div`, `squad-member-actions`));
      (b(e, `Promote`, `promote`, { playerId: t }),
        b(e, `Remove`, `kick`, { playerId: t }));
    }
  }
  function S(e, t, n) {
    let r = a.players.get(t),
      o = a.get(r?.entityId),
      s = o?.hp > 0 && !(o.state & i.DEAD),
      c = e.appendChild(X(`div`, `squad-hud-row` + (s ? `` : ` down`)));
    ((c.dataset.playerId = t),
      c.append(
        X(
          `span`,
          `squad-number`,
          t === n.leaderId ? `★` : String(n.members.indexOf(t) + 1),
        ),
        X(
          `strong`,
          ``,
          `${r?.name ?? `Connecting…`}${t === g() ? ` (you)` : ``}${n.order?.acknowledged.includes(t) ? ` ✓` : ``}`,
        ),
      ));
    let l = s ? (o.state & i.IN_VEHICLE ? `vehicle` : ``) : `deploying`;
    l && c.append(X(`small`, ``, l));
  }
  function C() {
    let e = document.activeElement?.dataset.focus,
      t = [...o.querySelectorAll(`.squad-layout>section`)].map(
        (e) => e.scrollTop,
      );
    o.replaceChildren();
    let n = _(),
      i = a.match.squadCapacity ?? 5;
    (n?.id !== f && ((d = n?.id ?? null), (f = n?.id)),
      o
        .appendChild(X(`header`, `squad-heading`))
        .append(
          X(`div`, `squad-kicker`, `SQUAD NETWORK / TEAM OPERATIONS`),
          X(`h1`, ``, n ? `${n.name} squad` : `Find your squad`),
          X(
            `p`,
            ``,
            `Move together. Spawn together. Secure the objective. ${i} players per squad.`,
          ),
        ));
    let s = o.appendChild(X(`div`, `squad-layout`)),
      c = s.appendChild(X(`section`, `squad-browser`)),
      u = c.appendChild(X(`div`, `squad-toolbar`));
    (u.append(X(`h2`, ``, `Your team`)), b(u, `Create squad`, `create`));
    for (let e of [...(a.match.squads ?? [])].sort(
      (e, t) => (t.id === n?.id) - (e.id === n?.id) || e.id - t.id,
    )) {
      let t = c.appendChild(
        X(
          `button`,
          `squad-card${n?.id === e.id ? ` own` : ``}${d === e.id ? ` inspecting` : ``}`,
        ),
      );
      ((t.type = `button`),
        (t.dataset.focus = `inspect-${e.id}`),
        (t.onclick = () => {
          ((d = e.id), (l = ``));
        }),
        t.append(
          X(`span`, `squad-emblem`, e.name.slice(0, 1)),
          X(`strong`, ``, `${e.name}${n?.id === e.id ? ` · YOUR SQUAD` : ``}`),
          X(`span`, `squad-capacity`, `${e.members.length} / ${i}`),
        ));
      let r = t.appendChild(X(`span`, `squad-seats`));
      for (let t = 0; t < i; t++)
        r.append(X(`i`, t < e.members.length ? `filled` : ``));
      t.append(
        X(
          `small`,
          ``,
          `${e.locked ? `Locked · request to join` : `Open squad`} · ${a.players.get(e.leaderId)?.name ?? `Leader`}`,
        ),
      );
    }
    let m = s.appendChild(X(`section`, `squad-detail`)),
      h =
        (a.match.squads ?? []).find((e) => e.id === d) ??
        n ??
        a.match.squads?.[0];
    if (h) {
      m.append(
        X(
          `div`,
          `squad-kicker`,
          h.id === n?.id ? `YOUR SQUAD` : `SQUAD ROSTER`,
        ),
        X(`h2`, ``, h.name),
      );
      for (let e of h.members) x(m, e, h, h.id === n?.id && n.leaderId === g());
      let e = m.appendChild(X(`div`, `squad-toolbar`));
      if (
        (h.id === n?.id
          ? (b(e, `Leave squad`, `leave`),
            n.leaderId === g() &&
              b(e, n.locked ? `Unlock squad` : `Lock squad`, `lock`))
          : b(
              e,
              h.requests?.includes(g())
                ? `Request sent`
                : h.locked
                  ? `Request to join`
                  : `Join squad`,
              `join`,
              { squadId: h.id },
              h.members.length >= i || h.requests?.includes(g()),
            ),
        h.id === n?.id && n.leaderId === g())
      )
        for (let e of n.requests ?? []) {
          let t = m.appendChild(X(`div`, `squad-request`));
          (t.append(
            X(
              `span`,
              ``,
              `${a.players.get(e)?.name ?? `Player`} wants to join`,
            ),
          ),
            b(t, `Accept`, `accept`, { playerId: e }),
            b(t, `Decline`, `decline`, { playerId: e }));
        }
    } else
      m.append(X(`p`, ``, `Create a squad to lead, or join an open squad.`));
    let y = s.appendChild(X(`section`, `squad-orders`));
    if (
      (y.append(
        X(`div`, `squad-kicker`, `MISSION`),
        X(`h2`, ``, `Squad orders`),
      ),
      n)
    ) {
      if (
        (a.match.objectives.find((e) => e.id === n.order?.objectiveId),
        y.append(
          X(`p`, `squad-order-summary`, pi(a, n, g())),
          X(
            `p`,
            `squad-help`,
            `Attack secures a flag, then switches to defense. Defend it uncontested for 30 seconds to complete. Hold B in the field to regroup or hold position. ✓ means acknowledged.`,
          ),
        ),
        n.leaderId === g())
      ) {
        for (let e of a.match.objectives)
          b(
            y,
            `${e.team === n.team ? `Defend` : `Attack`} ${e.letter} · ${e.name}`,
            `order`,
            { objectiveId: e.id },
          );
        n.order && b(y, `Cancel order`, `cancel`);
      } else
        n.order
          ? b(
              y,
              n.order.acknowledged.includes(g())
                ? `Order acknowledged`
                : `Acknowledge order`,
              `ack`,
              {},
              n.order.acknowledged.includes(g()),
            )
          : b(
              y,
              n.request ? `Order requested` : `Request order`,
              `request`,
              {},
              !!n.request,
            );
      (n.request &&
        y.append(
          X(
            `p`,
            `squad-help`,
            `Leadership transfers to the requesting squadmate if no order is issued within 60 seconds.`,
          ),
        ),
        y.append(X(`div`, `squad-earned`, `${n.score} SQUAD ORDER POINTS`)));
    } else
      y.append(
        X(
          `p`,
          `squad-help`,
          `Join a squad to receive orders and unlock squadmate spawning.`,
        ),
      );
    let S = o.appendChild(X(`footer`, `squad-footer`));
    S.appendChild(X(`p`, `squad-status`, p)).setAttribute(`role`, `status`);
    let C = S.appendChild(
      X(
        `button`,
        `squad-back`,
        r.alive() ? `Return to game` : `Return to deploy`,
      ),
    );
    ((C.type = `button`),
      (C.onclick = r.back),
      [...o.querySelectorAll(`.squad-layout>section`)].forEach((e, n) => {
        e.scrollTop = t[n] ?? 0;
      }),
      e &&
        o
          .querySelector(`[data-focus="${CSS.escape(e)}"]`)
          ?.focus({ preventScroll: !0 }),
      (l = v()));
  }
  function w(t, n) {
    let r = _(),
      d = it(e.world),
      f = !n || d;
    if ((s.hidden !== f && (s.hidden = f), d)) {
      (s.childElementCount && s.replaceChildren(), (m = null));
      return;
    }
    if (t - u > 0.25) {
      if (((u = t), c && v() !== l && C(), c))
        for (let e of o.querySelectorAll(`.squad-member`)) {
          let t = a.players.get(Number(e.dataset.playerId)),
            n = a.get(t?.entityId),
            r = n?.hp > 0 && !(n.state & i.DEAD),
            o = ot(a, t?.id);
          e.querySelector(`small`).textContent =
            `${t?.id === o?.leaderId ? `Squad leader · ` : ``}${t?.isBot ? `AI · ` : ``}${r ? (n.state & i.IN_VEHICLE ? `In vehicle` : `In field`) : `Deploying`}`;
        }
      let e = r ? pi(a, r, g()) : ``,
        n = r
          ? ((e) =>
              r.leaderId === g()
                ? `${e} · Order target   /   Hold ${e} · Commands`
                : r.order
                  ? `${e} · Acknowledge order`
                  : `${e} · Request orders`)(kt(`order`, `B`))
          : ``,
        d = JSON.stringify([
          g(),
          r?.name,
          r?.leaderId,
          Nt(),
          e,
          n,
          r?.members.map((e) => {
            let t = a.players.get(e),
              n = a.get(t?.entityId);
            return [
              e,
              t?.name,
              n?.hp > 0 && !(n.state & i.DEAD),
              !!(n?.state & i.IN_VEHICLE),
              r.order?.acknowledged.includes(e),
            ];
          }),
        ]);
      if (d === m) return;
      if (
        ((m = d),
        s.replaceChildren(),
        s
          .appendChild(X(`div`, `squad-hud-heading`))
          .append(
            X(`strong`, ``, r ? `${r.name.toUpperCase()} SQUAD` : `NO SQUAD`),
            X(`small`, ``, Nt() ? `` : `P · Manage`),
          ),
        r)
      ) {
        let t = s.appendChild(X(`div`, `squad-hud-list`));
        for (let e of r.members) S(t, e, r);
        s.append(
          X(`div`, `squad-hud-order`, e),
          X(`small`, `squad-key-hint`, n),
        );
      } else s.append(X(`p`, `squad-help`, `Press P to join a squad`));
    }
  }
  return {
    panel: o,
    hud: s,
    update: w,
    own: _,
    send: y,
    show(e) {
      ((c = e), (o.hidden = !e), e && ((l = ``), (d = _()?.id ?? null), C()));
    },
    dispose() {
      (h?.(), o.remove(), s.remove());
    },
  };
}
