// assets__sim-loader-D1vnmwSZ 04 — vel
// Lines 908-1033 of readable/assets__sim-loader-D1vnmwSZ.pretty.js (statement-aligned).
function Q(n, i, a, o) {
  if (!n || !i) return n;
  if (n.state & e.DEAD)
    return ((n.vel[0] = 0), (n.vel[1] = 0), (n.vel[2] = 0), n);
  if (n.state & e.IN_VEHICLE) return n;
  let s = i.buttons | 0;
  ((n.yaw = i.yaw),
    (n.pitch = i.pitch > 1.55 ? Z : i.pitch < -1.55 ? -1.55 : i.pitch));
  let c = r.STAND;
  (s & t.PRONE ? (c = r.PRONE) : s & t.CROUCH && (c = r.CROUCH),
    (n.stance = c));
  let l = i.mx,
    u = i.mz,
    d = l * l + u * u;
  if (d > 1) {
    let e = 1 / Math.sqrt(d);
    ((l *= e), (u *= e));
  }
  let f = !!(s & t.SPRINT) && u > 0.5 && c === r.STAND && !(s & t.ADS),
    p = f ? 7 : Y,
    m = 4;
  (c === r.CROUCH
    ? ((p *= 0.55), (m *= 0.55))
    : c === r.PRONE && ((p *= 0.25), (m *= 0.25)),
    s & t.ADS && ((p *= 0.7), (m *= 0.7)));
  let h = Math.sin(n.yaw),
    g = Math.cos(n.yaw),
    _ = -h * u * p + g * l * m,
    v = -g * u * p - h * l * m,
    y = a.map,
    b = y.getHeight(n.pos[0], n.pos[2]),
    x = n.pos[1] <= b + 0.02 && n.vel[1] <= 1e-4,
    S = n.state & ~pe;
  if (x)
    ((n.vel[0] = _),
      (n.vel[2] = v),
      n.pos[1] < b && (n.pos[1] = b),
      (n.vel[1] = 0),
      s & t.JUMP &&
        c === r.STAND &&
        ((n.vel[1] = X), (x = !1), (S |= e.JUMPING)));
  else {
    let t = 3 * o;
    ((n.vel[0] += (_ - n.vel[0]) * t),
      (n.vel[2] += (v - n.vel[2]) * t),
      (n.vel[1] -= 18 * o),
      n.vel[1] > 0 && (S |= e.JUMPING));
  }
  ((n.pos[0] += n.vel[0] * o),
    (n.pos[1] += n.vel[1] * o),
    (n.pos[2] += n.vel[2] * o));
  let C = y.bounds;
  C &&
    (n.pos[0] < C[0] && ((n.pos[0] = C[0]), (n.vel[0] = 0)),
    n.pos[2] < C[1] && ((n.pos[2] = C[1]), (n.vel[2] = 0)),
    n.pos[0] > C[2] && ((n.pos[0] = C[2]), (n.vel[0] = 0)),
    n.pos[2] > C[3] && ((n.pos[2] = C[3]), (n.vel[2] = 0)));
  let w = y.getHeight(n.pos[0], n.pos[2]);
  return (
    n.pos[1] <= w &&
      ((n.pos[1] = w),
      n.vel[1] < 0 && (n.vel[1] = 0),
      (x = !0),
      (S &= ~e.JUMPING)),
    x && (S |= e.GROUNDED),
    f && (S |= e.SPRINT),
    s & t.ADS && (S |= e.ADS),
    s & t.FIRE && (S |= e.FIRING),
    s & t.RELOAD && (S |= e.RELOADING),
    s & t.LEAN_L && (S |= e.LEAN_L),
    s & t.LEAN_R && (S |= e.LEAN_R),
    (n.state = S),
    n
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
              () => import(`./sim-CCeMdhLh.js`).then((e) => e.j),
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
        r = new URL(`/assets/sim-dCf7ngvf.js`, `` + import.meta.url);
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
