// assets__sim-loader-D7voNPuy 04 — vel
// Lines 908-1033 of readable/assets__sim-loader-D7voNPuy.pretty.js (statement-aligned).
function Q(r, i, a, o) {
  if (!r || !i) return r;
  if (r.state & e.DEAD)
    return ((r.vel[0] = 0), (r.vel[1] = 0), (r.vel[2] = 0), r);
  if (r.state & e.IN_VEHICLE) return r;
  let s = i.buttons | 0;
  ((r.yaw = i.yaw),
    (r.pitch = i.pitch > 1.55 ? Z : i.pitch < -1.55 ? -1.55 : i.pitch));
  let c = n.STAND;
  (s & t.PRONE ? (c = n.PRONE) : s & t.CROUCH && (c = n.CROUCH),
    (r.stance = c));
  let l = i.mx,
    u = i.mz,
    d = l * l + u * u;
  if (d > 1) {
    let e = 1 / Math.sqrt(d);
    ((l *= e), (u *= e));
  }
  let f = !!(s & t.SPRINT) && u > 0.5 && c === n.STAND && !(s & t.ADS),
    p = f ? 7 : Y,
    m = 4;
  (c === n.CROUCH
    ? ((p *= 0.55), (m *= 0.55))
    : c === n.PRONE && ((p *= 0.25), (m *= 0.25)),
    s & t.ADS && ((p *= 0.7), (m *= 0.7)));
  let h = Math.sin(r.yaw),
    g = Math.cos(r.yaw),
    _ = -h * u * p + g * l * m,
    v = -g * u * p - h * l * m,
    y = a.map,
    b = y.getHeight(r.pos[0], r.pos[2]),
    x = r.pos[1] <= b + 0.02 && r.vel[1] <= 1e-4,
    S = r.state & ~pe;
  if (x)
    ((r.vel[0] = _),
      (r.vel[2] = v),
      r.pos[1] < b && (r.pos[1] = b),
      (r.vel[1] = 0),
      s & t.JUMP &&
        c === n.STAND &&
        ((r.vel[1] = X), (x = !1), (S |= e.JUMPING)));
  else {
    let t = 3 * o;
    ((r.vel[0] += (_ - r.vel[0]) * t),
      (r.vel[2] += (v - r.vel[2]) * t),
      (r.vel[1] -= 18 * o),
      r.vel[1] > 0 && (S |= e.JUMPING));
  }
  ((r.pos[0] += r.vel[0] * o),
    (r.pos[1] += r.vel[1] * o),
    (r.pos[2] += r.vel[2] * o));
  let C = y.bounds;
  C &&
    (r.pos[0] < C[0] && ((r.pos[0] = C[0]), (r.vel[0] = 0)),
    r.pos[2] < C[1] && ((r.pos[2] = C[1]), (r.vel[2] = 0)),
    r.pos[0] > C[2] && ((r.pos[0] = C[2]), (r.vel[0] = 0)),
    r.pos[2] > C[3] && ((r.pos[2] = C[3]), (r.vel[2] = 0)));
  let w = y.getHeight(r.pos[0], r.pos[2]);
  return (
    r.pos[1] <= w &&
      ((r.pos[1] = w),
      r.vel[1] < 0 && (r.vel[1] = 0),
      (x = !0),
      (S &= ~e.JUMPING)),
    x && (S |= e.GROUNDED),
    f && (S |= e.SPRINT),
    s & t.ADS && (S |= e.ADS),
    s & t.FIRE && (S |= e.FIRING),
    s & t.RELOAD && (S |= e.RELOADING),
    s & t.LEAN_L && (S |= e.LEAN_L),
    s & t.LEAN_R && (S |= e.LEAN_R),
    (r.state = S),
    r
  );
}
var me = { stepPlayer: Q },
  $ = null;
async function he(e = null) {
  if ($) return $;
  let t = null,
    n = `src/player/sim.js not present`;
  try {
    if (typeof window < `u` && typeof document < `u`) {
      let e = {};
      try {
        e = Object.assign({
          "../player/sim.js": () =>
            i(
              () => import(`./sim-D8F3HPJq.js`).then((e) => e.k),
              __vite__mapDeps([0, 1, 2]),
            ),
        });
      } catch {
        e = {};
      }
      let n = Object.keys(e)[0];
      n && (t = await e[n]());
    } else {
      let e = await i(() => import(`node:fs`), []),
        n = await i(() => import(`node:url`), []),
        r = new URL(`/assets/sim-DKJ0nrRU.js`, `` + import.meta.url);
      e.existsSync(n.fileURLToPath(r)) &&
        (t = await i(() => import(r.href), []));
    }
  } catch (r) {
    ((n = `src/player/sim.js failed to load: ${r?.message ?? r}`),
      e?.warn?.(`[netcode] ${n}`),
      (t = null));
  }
  return (
    t && typeof t.stepPlayer == `function`
      ? ($ = { stepPlayer: t.stepPlayer, source: `player`, id: 1, module: t })
      : (t && (n = `src/player/sim.js has no stepPlayer export`),
        ($ = {
          stepPlayer: Q,
          source: `fallback`,
          id: 0,
          module: J,
          reason: n,
        })),
    $
  );
}
function ge() {
  return $ ?? { stepPlayer: Q, source: `fallback`, id: 0, module: J };
}
