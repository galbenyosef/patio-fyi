// assets__server-ClHwNWhT 01 — victimid
// Lines 1-186 of readable/assets__server-ClHwNWhT.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { Gn as e } from "./graphics-quality-BsjABS0s.js";
var t = Object.freeze({ before: 3.6, after: 1.1, step: 2, ring: 256 }),
  n = 9;
function r(e, t, r, i) {
  let a = {
      id: e.id,
      ty: e.type,
      t0: -1,
      n: 0,
      p: [],
      a: [],
      st: [],
      sn: [],
      se: [],
      w: [],
    },
    o = 0,
    s = 0,
    c = 0,
    l = 0,
    u = 0,
    d = null,
    f = null,
    p = null,
    m = null,
    h = 0;
  t = r - Math.ceil((r - t) / i) * i;
  for (let g = t; g <= r; g++) {
    let r = g % e.size;
    if (e.ticks[r] !== g) {
      h = 0;
      continue;
    }
    let _ = r * n,
      v = e.buf;
    if (((h |= v[_ + 6]), (g - t) % i)) continue;
    if (a.t0 < 0) a.t0 = g;
    else if (g !== a.t0 + a.n * i) break;
    let y = Math.round(v[_] * 100),
      b = Math.round(v[_ + 1] * 100),
      x = Math.round(v[_ + 2] * 100),
      S = Math.round(v[_ + 3] * 1e3),
      C = Math.round(v[_ + 4] * 1e3);
    (a.p.push(y - o, b - s, x - c),
      a.a.push(S - l, C - u),
      (o = y),
      (s = b),
      (c = x),
      (l = S),
      (u = C));
    let w = a.n,
      T = v[_ + 5],
      E = v[_ + 7],
      D = v[_ + 8];
    (h !== d && (a.st.push(w, h), (d = h)),
      T !== f && (a.sn.push(w, T), (f = T)),
      E !== p && (a.se.push(w, E), (p = E)),
      D !== m && (a.w.push(w, D), (m = D)),
      (h = 0),
      a.n++);
  }
  return a.n ? a : null;
}
var i = new WeakMap(),
  a = {
    name: `ui`,
    deps: [`netcode`, `gamemodes`],
    init(a) {
      let o = a.world,
        s = new Map(),
        c = [],
        l = (e) => {
          for (let t of a.clients.values()) if (t.entityId === e) return t;
          return null;
        },
        u = (t, r, i) => {
          let a = s.get(t),
            o = new Set();
          if (!a) return o;
          for (let t = r; t <= i; t++) {
            let r = t % a.size;
            if (a.ticks[r] !== t) continue;
            let i = r * n;
            a.buf[i + 6] & e.IN_VEHICLE &&
              a.buf[i + 7] > 0 &&
              o.add(a.buf[i + 7]);
          }
          return o;
        },
        d = (e, n, i, o, c, l) => {
          let u = [];
          for (let e of i) {
            let n = s.get(e),
              i = n && r(n, o, c, t.step);
            i && u.push(i);
          }
          a.modules
            .get(`netcode`)
            ?.sendEvent?.(e, n, { ...l, step: t.step, tracks: u });
        },
        f = a.events.on(`player:death`, (e) => {
          let n = e ? l(e.victimId) : null;
          if (!n) return;
          let r = o.time.tick,
            i = r - Math.ceil(t.before * 60),
            a = new Set([e.victimId]);
          if (e.killerId > 0 && e.killerId !== e.victimId) {
            a.add(e.killerId);
            for (let t of u(e.killerId, i, r)) a.add(t);
          }
          for (let t of u(e.victimId, i, r)) a.add(t);
          (d(n.id, `killcam:track`, a, i, r - 1, {
            victimId: e.victimId,
            killerId: e.killerId,
            tick: r,
          }),
            c.push({
              clientId: n.id,
              ids: [...a],
              victimId: e.victimId,
              tick: r,
              due: r + Math.ceil(t.after * 60),
            }));
        });
      i.set(o, {
        pending: c,
        offDeath: f,
        record: () => {
          let e = o.time.tick;
          for (let r of o.sorted()) {
            if (r.type !== `soldier` && r.type !== `vehicle`) continue;
            let i = s.get(r.id);
            (!i || i.type !== +(r.type === `vehicle`)) &&
              ((i = {
                id: r.id,
                type: +(r.type === `vehicle`),
                size: t.ring,
                buf: new Float32Array(t.ring * n),
                ticks: new Int32Array(t.ring).fill(-1),
                seen: e,
              }),
              s.set(r.id, i));
            let a = e % i.size,
              o = a * n,
              c = i.buf;
            ((i.ticks[a] = e),
              (i.seen = e),
              (c[o] = r.pos[0]),
              (c[o + 1] = r.pos[1]),
              (c[o + 2] = r.pos[2]),
              (c[o + 3] = r.yaw ?? 0),
              (c[o + 4] = r.pitch ?? 0),
              (c[o + 5] = r.stance | 0),
              (c[o + 6] = r.state | 0),
              (c[o + 7] = r.seat ?? -1),
              (c[o + 8] = r.weapon ?? 0));
          }
          if (e % 60 == 0) for (let [t, n] of s) e - n.seen > 60 && s.delete(t);
          for (let t = c.length - 1; t >= 0; t--) {
            let n = c[t];
            e < n.due ||
              (c.splice(t, 1),
              a.clients.has(n.clientId) &&
                d(n.clientId, `killcam:tail`, n.ids, n.tick + 1, n.due, {
                  victimId: n.victimId,
                  tick: n.tick,
                }));
          }
        },
      });
    },
    tick(e) {
      i.get(e.world)?.record();
    },
    dispose(e) {
      (i.get(e?.world)?.offDeath?.(), i.delete(e?.world));
    },
    onDisconnect(e, t) {
      let n = i.get(e.world);
      if (n)
        for (let e = n.pending.length - 1; e >= 0; e--)
          n.pending[e].clientId === t.id && n.pending.splice(e, 1);
    },
    api: {},
  };
