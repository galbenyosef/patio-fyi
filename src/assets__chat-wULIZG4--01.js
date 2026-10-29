// assets__chat-wULIZG4- 01 — tokens
// Lines 1-51 of readable/assets__chat-wULIZG4-.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import "./graphics-quality-CrL3qbU3.js";
var e = Object.freeze({ maxLength: 120, burst: 4, refillSeconds: 2 }),
  t = (t) =>
    typeof t == `string`
      ? t
          .replace(/[\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/gu, ` `)
          .replace(/\s+/g, ` `)
          .trim()
          .slice(0, e.maxLength)
      : ``;
function n(n) {
  let r = n.world,
    i = new Map(),
    a = e.refillSeconds * 60,
    o = () => n.modules.get(`netcode`);
  function s(t) {
    let n = r.time.tick,
      o = i.get(t) ?? { tokens: e.burst, tick: n };
    return (
      (o.tokens = Math.min(e.burst, o.tokens + (n - o.tick) / a)),
      (o.tick = n),
      i.set(t, o),
      o.tokens < 1 ? !1 : (o.tokens--, !0)
    );
  }
  return {
    say(e, i, a) {
      let c = t(a?.text);
      if (!c) return !1;
      if (!s(i.id))
        return (
          o()?.sendEvent?.(e.id, `ui:message`, {
            kind: `warn`,
            text: `Slow down: chat is rate limited`,
            ttl: 2,
          }),
          !1
        );
      let l = a?.channel === `team` ? `team` : `all`,
        u = { playerId: i.id, name: i.name, team: i.team, channel: l, text: c };
      for (let e of n.clients?.values?.() ?? [])
        (l !== `team` || r.players.get(e.playerId)?.team === i.team) &&
          o()?.sendEvent?.(e.id, `chat:message`, u);
      return !0;
    },
    forget(e) {
      i.delete(e);
    },
  };
}
