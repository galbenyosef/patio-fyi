// assets__server-BZHe1cjv 04 — playerid
// Lines 638-811 of readable/assets__server-BZHe1cjv.pretty.js (statement-aligned).
function je(e) {
  let t = e.config?.career ?? null,
    n = e.config?.careerSalt ?? Math.random(),
    r = new Map(),
    i = new Map(),
    a = new Map(),
    o = [],
    s = null,
    c = () => e.modules.get(`netcode`),
    l = (e) => {
      let t = i.get(e);
      return (
        t ||
          i.set(
            e,
            (t = {
              camos: {},
              wear: {},
              title: null,
              signature: null,
              progress: v(null),
              greeted: !1,
            }),
          ),
        t
      );
    },
    u = (e, t) =>
      e &&
      t &&
      e.level === t.level &&
      e.title === t.title &&
      !!e.bot == !!t.bot;
  function d(e, t) {
    u(r.get(e), t) ||
      (r.set(e, t), c()?.broadcastEvent?.(`career:cards`, { [e]: t }));
  }
  function f(n) {
    let i = e.world.players.get(n.playerId);
    if (!i) return;
    let a = l(n.playerId),
      o = t?.row?.(i.name) ?? null,
      u = !!t?.isAdmin?.(n),
      f = [
        o?.score,
        o?.kills,
        o?.headshots,
        o?.wins,
        o?.bestStreak,
        Math.floor((o?.seconds ?? 0) / 60),
        u,
      ].join(`|`);
    (f !== a.signature &&
      ((a.signature = f),
      (a.progress = v(o, { unlockAll: u })),
      c()?.sendEvent?.(n.id, `career:progress`, { stats: o, admin: u }),
      s?.(n.playerId)),
      a.greeted ||
        ((a.greeted = !0),
        c()?.sendEvent?.(n.id, `career:cards`, Object.fromEntries(r))));
    let p =
      a.progress.titles.find((e) => e.name === a.title && e.done)?.name ?? null;
    d(n.playerId, { level: a.progress.rank.level, title: p });
  }
  return (
    o.push(
      e.events.on(`net:rpc`, ({ client: t, rpc: n }) => {
        if (t && e.world.players.has(t.playerId)) {
          if (n?.name === `career:camos`) {
            let e = l(t.playerId),
              r = {};
            if (n.data && typeof n.data == `object`)
              for (let e of y) {
                let t = n.data[e];
                typeof t == `string` && g[t] && (r[e] = t);
              }
            let i = {},
              a = n.data?.wear;
            if (a && typeof a == `object`)
              for (let e of b) x(a[e]) && (i[e] = a[e]);
            (JSON.stringify(r) !== JSON.stringify(e.camos) ||
              JSON.stringify(i) !== JSON.stringify(e.wear)) &&
              ((e.camos = r), (e.wear = i), (e.camosDirty = !0));
          } else
            n?.name === `career:title` &&
              (l(t.playerId).title =
                typeof n.data == `string` ? n.data.slice(0, 40) : null);
        }
      }),
    ),
    {
      camos(t, r = []) {
        let o = e.world.players.get(t),
          s = {};
        if (!o) return s;
        if (o.isBot) {
          let e = a.get(t);
          e || a.set(t, (e = {}));
          for (let t of r)
            y.includes(t) &&
              (t in e || (e[t] = Ae(H(o.name), V(`${n}:${o.name}:${t}`))),
              e[t] && (s[t] = e[t]));
          return s;
        }
        let c = i.get(t);
        if (!c) return s;
        for (let e of r)
          c.camos[e] && h(c.progress, e, c.camos[e]) && (s[e] = c.camos[e]);
        return s;
      },
      wears(t, n = []) {
        let r = e.world.players.get(t),
          a = {};
        if (!r) return a;
        for (let e of n) {
          if (!b.includes(e)) continue;
          let n = r.isBot
            ? [null, null, `used`, `used`, `worn`][
                Math.floor(V(`wear:${r.name}:${e}`) * 5)
              ]
            : i.get(t)?.wear?.[e];
          n && (a[e] = n);
        }
        return a;
      },
      onCamosChanged(e) {
        s = e;
      },
      card: (e) => r.get(e) ?? null,
      tick() {
        if (!(e.world.time.tick % 60)) {
          for (let [e, t] of i) t.camosDirty && ((t.camosDirty = !1), s?.(e));
          for (let t of e.clients?.values?.() ?? [])
            t.playerId >= 0 && t.ext?.net && f(t);
          for (let t of e.world.players.values())
            if (t.isBot && !r.has(t.id)) {
              let e = H(t.name);
              d(t.id, { level: e, title: De(t.name, e), bot: !0 });
            }
          for (let t of r.keys())
            e.world.players.has(t) || (r.delete(t), i.delete(t), a.delete(t));
        }
      },
      dispose() {
        for (let e of o) e();
        (r.clear(), i.clear(), a.clear());
      },
    }
  );
}
var Me = new Set([
    `ar`,
    `carbine`,
    `dmr`,
    `sniper`,
    `lmg`,
    `smg`,
    `pistol`,
    `shotgun`,
  ]),
  U = (e) => (typeof e == `number` ? c[e] : null),
  W = (e) => Me.has(U(e)?.class),
  G = (e) => U(e)?.class ?? null,
  K = (e) => typeof e == `string` && /FRAG/i.test(e),
  Ne = (e) =>
    typeof e == `number`
      ? U(e)?.class === `launcher`
      : /KITE|BREAKER|JAVELIN|ROCKET/i.test(String(e)),
  Pe = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1], e[2] - t[2]),
  Fe = 0,
  Ie = 1,
  q = 2,
  Le = 4,
  Re = 720;
