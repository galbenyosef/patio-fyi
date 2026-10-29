// assets__ui-hhE6L1u7 23 — appendchild
// Lines 9371-9726 of readable/assets__ui-hhE6L1u7.pretty.js (statement-aligned).
function Vi(e, t, n, r) {
  let i = e.world,
    a = n.appendChild(X(`section`, `squad-panel`)),
    o = t.appendChild(X(`aside`, `squad-hud`));
  a.hidden = !0;
  let s = !1,
    c = ``,
    u = -1,
    d = null,
    f = null,
    p = ``,
    m = null,
    h = e.events.on(`ui:message`, (e) => {
      e?.kind === `squad` && ((p = e.text), (c = ``));
    }),
    g = () => r.playerId(),
    _ = () => at(i, g()),
    v = () =>
      JSON.stringify([
        g(),
        i.match.squads,
        i.match.objectives.map((e) => [e.id, e.team]),
        d,
        p,
        [...(_()?.members ?? [])].map((e) => i.players.get(e)?.name),
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
    let a = i.players.get(t),
      o = i.get(a?.entityId),
      s = o?.hp > 0 && !(o.state & l.DEAD),
      c = e.appendChild(X(`div`, `squad-member`));
    c.dataset.playerId = t;
    let u = n.members.indexOf(t) + 1;
    if (
      (c.append(X(`span`, `squad-number`, t === n.leaderId ? `★` : String(u))),
      c
        .appendChild(X(`div`, `squad-member-info`))
        .append(
          X(
            `strong`,
            ``,
            `${a?.name ?? `Connecting…`}${t === g() ? ` · YOU` : ``}${n.order?.acknowledged.includes(t) ? ` ✓` : ``}`,
          ),
          X(
            `small`,
            ``,
            `${t === n.leaderId ? `Squad leader · ` : ``}${a?.isBot ? `AI · ` : ``}${s ? (o.state & l.IN_VEHICLE ? `In vehicle` : `In field`) : `Deploying`}`,
          ),
        ),
      r && t !== g())
    ) {
      let e = c.appendChild(X(`div`, `squad-member-actions`));
      (b(e, `Promote`, `promote`, { playerId: t }),
        b(e, `Remove`, `kick`, { playerId: t }));
    }
  }
  function S(e, t, n) {
    let r = i.players.get(t),
      a = i.get(r?.entityId),
      o = a?.hp > 0 && !(a.state & l.DEAD),
      s = e.appendChild(X(`div`, `squad-hud-row` + (o ? `` : ` down`)));
    ((s.dataset.playerId = t),
      s.append(
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
    let c = o ? (a.state & l.IN_VEHICLE ? `vehicle` : ``) : `deploying`;
    c && s.append(X(`small`, ``, c));
  }
  function C() {
    let e = document.activeElement?.dataset.focus,
      t = [...a.querySelectorAll(`.squad-layout>section`)].map(
        (e) => e.scrollTop,
      );
    a.replaceChildren();
    let n = _(),
      o = i.match.squadCapacity ?? 5;
    (n?.id !== f && ((d = n?.id ?? null), (f = n?.id)),
      a
        .appendChild(X(`header`, `squad-heading`))
        .append(
          X(`div`, `squad-kicker`, `SQUAD NETWORK / TEAM OPERATIONS`),
          X(`h1`, ``, n ? `${n.name} squad` : `Find your squad`),
          X(
            `p`,
            ``,
            `Move together. Spawn together. Secure the objective. ${o} players per squad.`,
          ),
        ));
    let s = a.appendChild(X(`div`, `squad-layout`)),
      l = s.appendChild(X(`section`, `squad-browser`)),
      u = l.appendChild(X(`div`, `squad-toolbar`));
    (u.append(X(`h2`, ``, `Your team`)), b(u, `Create squad`, `create`));
    for (let e of [...(i.match.squads ?? [])].sort(
      (e, t) => (t.id === n?.id) - (e.id === n?.id) || e.id - t.id,
    )) {
      let t = l.appendChild(
        X(
          `button`,
          `squad-card${n?.id === e.id ? ` own` : ``}${d === e.id ? ` inspecting` : ``}`,
        ),
      );
      ((t.type = `button`),
        (t.dataset.focus = `inspect-${e.id}`),
        (t.onclick = () => {
          ((d = e.id), (c = ``));
        }),
        t.append(
          X(`span`, `squad-emblem`, e.name.slice(0, 1)),
          X(`strong`, ``, `${e.name}${n?.id === e.id ? ` · YOUR SQUAD` : ``}`),
          X(`span`, `squad-capacity`, `${e.members.length} / ${o}`),
        ));
      let r = t.appendChild(X(`span`, `squad-seats`));
      for (let t = 0; t < o; t++)
        r.append(X(`i`, t < e.members.length ? `filled` : ``));
      t.append(
        X(
          `small`,
          ``,
          `${e.locked ? `Locked · request to join` : `Open squad`} · ${i.players.get(e.leaderId)?.name ?? `Leader`}`,
        ),
      );
    }
    let m = s.appendChild(X(`section`, `squad-detail`)),
      h =
        (i.match.squads ?? []).find((e) => e.id === d) ??
        n ??
        i.match.squads?.[0];
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
              h.members.length >= o || h.requests?.includes(g()),
            ),
        h.id === n?.id && n.leaderId === g())
      )
        for (let e of n.requests ?? []) {
          let t = m.appendChild(X(`div`, `squad-request`));
          (t.append(
            X(
              `span`,
              ``,
              `${i.players.get(e)?.name ?? `Player`} wants to join`,
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
        (i.match.objectives.find((e) => e.id === n.order?.objectiveId),
        y.append(
          X(`p`, `squad-order-summary`, Bi(i, n, g())),
          X(
            `p`,
            `squad-help`,
            `Attack secures a flag, then switches to defense. Defend it uncontested for 30 seconds to complete. Hold B in the field to regroup or hold position. ✓ means acknowledged.`,
          ),
        ),
        n.leaderId === g())
      ) {
        for (let e of i.match.objectives)
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
    let S = a.appendChild(X(`footer`, `squad-footer`));
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
      [...a.querySelectorAll(`.squad-layout>section`)].forEach((e, n) => {
        e.scrollTop = t[n] ?? 0;
      }),
      e &&
        a
          .querySelector(`[data-focus="${CSS.escape(e)}"]`)
          ?.focus({ preventScroll: !0 }),
      (c = v()));
  }
  function w(t, n) {
    let r = _(),
      d = rt(e.world),
      f = !n || d;
    if ((o.hidden !== f && (o.hidden = f), d)) {
      (o.childElementCount && o.replaceChildren(), (m = null));
      return;
    }
    if (t - u > 0.25) {
      if (((u = t), s && v() !== c && C(), s))
        for (let e of a.querySelectorAll(`.squad-member`)) {
          let t = i.players.get(Number(e.dataset.playerId)),
            n = i.get(t?.entityId),
            r = n?.hp > 0 && !(n.state & l.DEAD),
            a = at(i, t?.id);
          e.querySelector(`small`).textContent =
            `${t?.id === a?.leaderId ? `Squad leader · ` : ``}${t?.isBot ? `AI · ` : ``}${r ? (n.state & l.IN_VEHICLE ? `In vehicle` : `In field`) : `Deploying`}`;
        }
      let e = r ? Bi(i, r, g()) : ``,
        n = r
          ? ((e) =>
              r.leaderId === g()
                ? `${e} · Order target   /   Hold ${e} · Commands`
                : r.order
                  ? `${e} · Acknowledge order`
                  : `${e} · Request orders`)(Rt(`order`, `B`))
          : ``,
        d = JSON.stringify([
          g(),
          r?.name,
          r?.leaderId,
          Ht(),
          e,
          n,
          r?.members.map((e) => {
            let t = i.players.get(e),
              n = i.get(t?.entityId);
            return [
              e,
              t?.name,
              n?.hp > 0 && !(n.state & l.DEAD),
              !!(n?.state & l.IN_VEHICLE),
              r.order?.acknowledged.includes(e),
            ];
          }),
        ]);
      if (d === m) return;
      if (
        ((m = d),
        o.replaceChildren(),
        o
          .appendChild(X(`div`, `squad-hud-heading`))
          .append(
            X(`strong`, ``, r ? `${r.name.toUpperCase()} SQUAD` : `NO SQUAD`),
            X(`small`, ``, Ht() ? `` : `P · Manage`),
          ),
        r)
      ) {
        let t = o.appendChild(X(`div`, `squad-hud-list`));
        for (let e of r.members) S(t, e, r);
        o.append(
          X(`div`, `squad-hud-order`, e),
          X(`small`, `squad-key-hint`, n),
        );
      } else o.append(X(`p`, `squad-help`, `Press P to join a squad`));
    }
  }
  return {
    panel: a,
    hud: o,
    update: w,
    own: _,
    send: y,
    show(e) {
      ((s = e), (a.hidden = !e), e && ((c = ``), (d = _()?.id ?? null), C()));
    },
    dispose() {
      (h?.(), a.remove(), o.remove());
    },
  };
}
