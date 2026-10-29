// assets__ui-hhE6L1u7 40 — math
// Lines 17751-18077 of readable/assets__ui-hhE6L1u7.pretty.js (statement-aligned).
function os(e, t, { marked: n = null, why: r = null } = {}) {
  if (!t || t.hp <= 0 || t.state & l.DEAD) return null;
  let i = e.world,
    a = e.camera.position.toArray(),
    s = new o();
  e.camera.getWorldDirection(s);
  let c = s.toArray(),
    u = t.state & l.IN_VEHICLE ? `vehicle-${t.seat}` : null,
    d = (e) => !!n?.(e),
    f = kt(i, a, c, 800, u),
    p = null,
    m = ht(a, c, i, f ?? 800, t.id);
  if (m) {
    let e = i.get(m.entityId),
      n = a.map((e, t) => e + c[t] * m.dist);
    as(e, t, i) && !ot(i, a, n) && (p = e);
  }
  if (!p) {
    let e = i.map.raycast(a, c, 800, null, u, !0),
      n = e?.entityId == null ? null : i.get(e.entityId);
    as(n, t, i) &&
      n.type === `vehicle` &&
      !ot(i, a, e.point ?? a.map((t, n) => t + c[n] * e.dist)) &&
      (p = n);
  }
  if (p && !d(p.id)) return p;
  let h = null,
    g = null;
  for (let e of i.sorted()) {
    if (!as(e, t, i) || e === p) continue;
    let n = jt(e),
      o = n[0],
      s = Math.hypot(o[0] - a[0], o[1] - a[1], o[2] - a[2]);
    if (s < 0.2) continue;
    let l = At + Math.atan(Dt(e) / s),
      f = 1 / 0;
    for (let e of n) {
      let t = e.map((e, t) => e - a[t]),
        n = Math.hypot(...t);
      f = Math.min(
        f,
        Math.acos(
          Math.max(
            -1,
            Math.min(1, (t[0] * c[0] + t[1] * c[1] + t[2] * c[2]) / n),
          ),
        ),
      );
    }
    if (f > l) continue;
    if (s > 800) {
      r && (r.range = !0);
      continue;
    }
    let m = [+!!d(e.id), f, s];
    if (!(
      g &&
      (m[0] > g[0] ||
        (m[0] === g[0] &&
          (m[1] > g[1] + 1e-6 ||
            (Math.abs(m[1] - g[1]) <= 1e-6 && m[2] >= g[2]))))
    )) {
      if (!n.some((t) => Et(i, a, t, u, e.id))) {
        r && (r.blocked = !0);
        continue;
      }
      ((h = e), (g = m));
    }
  }
  return h && (!p || !d(h.id)) ? h : (p ?? h);
}
function ss(e) {
  return e.type === `vehicle`
    ? (ge[e.weapon]?.h ?? 2) + 0.65
    : (V[e.stance | 0] ?? V[0]) + 0.24;
}
var cs = 34;
function ls(e, t, n, r) {
  if (e.z >= -1 && e.z <= 1 && Math.abs(e.x) <= 1 && Math.abs(e.y) <= 1)
    return {
      edge: !1,
      x: Math.max(18, Math.min(n - 18, (e.x * 0.5 + 0.5) * n)),
      y: Math.max(28, Math.min(r - 22, (0.5 - e.y * 0.5) * r)),
    };
  let i = t.x,
    a = -t.y;
  t.z > 0 && (a = Math.abs(a) + t.z);
  let o = Math.hypot(i, a);
  o < 1e-6 ? ((i = 0), (a = 1)) : ((i /= o), (a /= o));
  let s = n / 2 - cs,
    c = r / 2 - cs,
    l = Math.min(i ? s / Math.abs(i) : 1 / 0, a ? c / Math.abs(a) : 1 / 0);
  return {
    edge: !0,
    x: n / 2 + i * l,
    y: r / 2 + a * l,
    angle: Math.atan2(-i, a),
  };
}
var us = (e) => (ge[e.weapon]?.air ? `AIR` : `VEH`);
function ds(e) {
  let t = document.createElement(`div`);
  ((t.className = `spot-layer`),
    (t.style.cssText = `position:absolute;inset:0;pointer-events:none;z-index:4;overflow:hidden`));
  let n = document.createElement(`style`);
  ((n.textContent = `.spot-marker{--r:0deg;position:absolute;left:0;top:0;display:flex;flex-direction:column;align-items:center;filter:drop-shadow(0 2px 2px #090b0dcc);will-change:transform;color:#ff694f;transition:opacity .15s}.spot-marker[hidden]{display:none}.spot-marker i{width:0;height:0;border-left:9px solid transparent;border-right:9px solid transparent;border-top:15px solid currentColor;animation:spot-pulse .72s ease-in-out infinite alternate}.spot-marker.vehicle i{border-left-width:12px;border-right-width:12px;border-top-width:13px}.spot-marker span{margin-top:3px;padding:2px 5px;border:1px solid #ff694faa;background:#11171ddd;color:#ffe4dc;font:700 10px/1.1 system-ui;letter-spacing:.1em;white-space:nowrap}.spot-marker.edge i{border-left-width:8px;border-right-width:8px;border-top-width:13px}.spot-marker.edge span{margin-top:1px;padding:1px 4px;font-size:9px}.spot-marker.near{opacity:.45}.spot-marker.expiring{animation:spot-blink .5s steps(1,end) infinite}.spot-feedback{position:absolute;left:50%;top:58%;transform:translate(-50%,0);color:#ff927d;text-shadow:0 2px 3px #000;font:700 12px system-ui;letter-spacing:.14em;transition:opacity .12s}.spot-feedback[hidden]{display:none}@keyframes spot-pulse{from{transform:rotate(var(--r)) translateY(0);opacity:.78}to{transform:rotate(var(--r)) translateY(3px);opacity:1}}@keyframes spot-blink{50%{opacity:.25}}`),
    t.append(n));
  let r = document.createElement(`div`);
  ((r.className = `spot-feedback`),
    (r.hidden = !0),
    t.append(r),
    e.ui.append(t));
  let i = new Map(),
    a = new o(),
    s = new o(),
    c = 0,
    u = 0,
    d = 0,
    f = -1,
    p = 0,
    m = !1,
    h = null,
    g = 0,
    _ = 0,
    v = -1,
    y = (e, t = 0.7) => {
      (r.textContent !== e && (r.textContent = e), is(r, !1), (u = c + t));
    },
    b = (e) => {
      let n = i.get(e);
      if (n) return n;
      let r = document.createElement(`div`);
      return (
        (r.className = `spot-marker`),
        (r.dataset.entity = String(e)),
        r.append(document.createElement(`i`), document.createElement(`span`)),
        t.append(r),
        (n = { el: r, until: 0, cls: ``, label: ``, angle: null }),
        i.set(e, n),
        n
      );
    },
    x = e.events.on(`spot:target`, (t) => {
      if (!Number.isInteger(t?.targetId)) return;
      let n = Math.max(0.1, (+t.durationTicks || 900) / rs),
        r = b(t.targetId);
      r.until = Math.max(r.until, c + n);
      let i = e.modules.get(`player`)?.getLocalEntity?.();
      if (t.spotterId === i?.owner && !t.carried) {
        ((f = -1),
          (d = Math.max(d, c + 24 / rs)),
          (h = { id: t.targetId, at: c }));
        let n = e.world.get(t.targetId);
        (y(
          m
            ? `MARK REFRESHED`
            : n?.type === `vehicle`
              ? ge[n.weapon]?.air
                ? `AIRCRAFT SPOTTED`
                : `VEHICLE SPOTTED`
              : `ENEMY SPOTTED`,
          0.85,
        ),
          (m = !1));
      }
    }),
    S = {
      blocked: `VIEW BLOCKED`,
      range: `OUT OF RANGE`,
      aim: `AIM CLOSER TO SPOT`,
      cooldown: `SPOT COOLDOWN`,
    },
    C = e.events.on(`spot:fail`, (e) => {
      f < 0 ||
        e?.targetId !== f ||
        ((f = -1), (m = !1), y(S[e.reason] ?? `SPOT FAILED`, 0.7));
    }),
    w = () => {
      for (let e of i.values()) e.el.remove();
      (i.clear(), (f = -1));
    },
    T = e.events.on(`player:local`, w),
    E = e.events.on(`net:disconnected`, w);
  function D(t) {
    if (
      t.code !== `KeyT` ||
      t.repeat ||
      t.ctrlKey ||
      t.altKey ||
      t.metaKey ||
      t.target?.closest?.(`input,textarea,select,[contenteditable="true"]`)
    )
      return;
    let n = e.modules.get(`player`);
    if (!n?.isInputActive?.()) return;
    let r = n.getLocalEntity?.();
    if ((t.preventDefault(), t.stopImmediatePropagation(), c < d)) return;
    let a = {},
      s = os(e, r, { marked: (e) => (i.get(e)?.until ?? 0) > c, why: a });
    if (!s) {
      y(
        a.blocked
          ? `VIEW BLOCKED`
          : a.range
            ? `OUT OF RANGE`
            : `NO ENEMY IN SIGHT`,
        0.55,
      );
      return;
    }
    let l = h?.id === s.id ? h.at + 75 / rs - c : 0;
    if (l > 0) {
      y(`ALREADY SPOTTED · ${Math.ceil(l * 10) / 10}s`, 0.45);
      return;
    }
    ((f = s.id),
      (m = (i.get(s.id)?.until ?? 0) > c),
      (d = c + 24 / rs),
      (p = c + 1.5));
    let u = e.camera.position.toArray(),
      g = new o();
    e.camera.getWorldDirection(g);
    let _ = {
      origin: u,
      yaw: Math.atan2(-g.x, -g.z),
      pitch: Math.asin(Math.max(-1, Math.min(1, g.y))),
    };
    (e.modules.get(`netcode`)?.sendRpc?.(`spot`, { targetId: s.id, view: _ }),
      y(`SPOTTING…`, 0.65));
  }
  return (
    window.addEventListener(`keydown`, D),
    {
      update(n) {
        ((c += Math.max(0, +n || 0)),
          c >= u && is(r, !0),
          f >= 0 && c >= p && ((f = -1), (m = !1), y(`SPOT FAILED`, 0.55)));
        let o = e.modules.get(`player`)?.getLocalEntity?.();
        if (
          (is(
            t,
            !o ||
              o.hp <= 0 ||
              !!(o.state & l.DEAD) ||
              e.modules.get(`ui`)?.isVisible?.(`spawn`),
          ),
          !o)
        ) {
          for (let e of i.values()) is(e.el, !0);
          return;
        }
        (c - v >= 0.5 || !g) &&
          ((v = c), (g = t.clientWidth), (_ = t.clientHeight));
        let d = e.world.match.mode === `ffa`;
        for (let [n, r] of i) {
          let u = e.world.get(n);
          if (
            c >= r.until ||
            !u ||
            u.hp <= 0 ||
            u.state & l.DEAD ||
            (u.team === o?.team && !d)
          ) {
            (r.el.remove(), i.delete(n));
            continue;
          }
          if (
            u.type === `soldier` &&
            u.state & l.IN_VEHICLE &&
            (i.get(u.seat)?.until ?? 0) > c
          ) {
            is(r.el, !0);
            continue;
          }
          (a.set(u.pos[0], u.pos[1] + ss(u), u.pos[2]),
            s.copy(a).applyMatrix4(e.camera.matrixWorldInverse),
            a.project(e.camera));
          let f = ls(a, s, g, _),
            p = Math.round(
              Math.hypot(u.pos[0] - o.pos[0], u.pos[2] - o.pos[2]),
            ),
            m = `spot-marker${u.type === `vehicle` ? ` vehicle` : ``}${f.edge ? ` edge` : ``}${!f.edge && p < 10 ? ` near` : ``}${r.until - c <= 3 ? ` expiring` : ``}`;
          m !== r.cls && ((r.cls = m), (r.el.className = m));
          let h = f.edge ? Math.round((f.angle * 180) / Math.PI) : 0;
          h !== r.angle &&
            ((r.angle = h), r.el.style.setProperty(`--r`, `${h}deg`));
          let v = u.type === `vehicle` ? `${us(u)} · ${p} M` : `${p} M`;
          (v !== r.label &&
            ((r.label = v), (r.el.lastElementChild.textContent = v)),
            is(r.el, t.hidden),
            (r.el.style.transform = `translate3d(${Math.round(f.x)}px,${Math.round(f.y)}px,0) translate(-50%,${f.edge ? `-50%` : `-100%`})`));
        }
      },
      dispose() {
        (x(),
          C(),
          T(),
          E(),
          window.removeEventListener(`keydown`, D),
          t.remove(),
          i.clear());
      },
    }
  );
}
var fs = {
    1: [`#c98a55`, `Bronze`],
    2: [`#c9d1da`, `Silver`],
    3: [`#e3b54a`, `Gold`],
  },
  ps = 6200,
  ms = `
.ach-wrap{position:fixed;inset:0;pointer-events:none;z-index:60;font-family:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}
.ach-banner{position:absolute;left:28px;bottom:290px;transform:translateX(-14px);opacity:0;min-width:240px;max-width:min(340px,70vw);
 padding:8px 14px 9px 12px;border-radius:3px;background:linear-gradient(90deg,rgba(10,12,15,.82),rgba(10,12,15,.66));border-left:3px solid var(--ach-a);
 box-shadow:0 4px 16px rgba(0,0,0,.3);transition:transform .3s ease-out,opacity .3s ease-out}
.ach-banner.in{transform:none;opacity:1}
.ach-banner.out{transform:translateX(-10px);opacity:0;transition:transform .4s ease-in,opacity .4s ease-in}
.ach-banner small{display:block;font-size:10.5px;letter-spacing:.16em;font-weight:600;color:#8f96a0;text-transform:uppercase}
.ach-banner small b{color:var(--ach-a);font-weight:600}
.ach-banner small i{font-style:normal;color:#c3c8cf;margin-left:6px;letter-spacing:.06em}
.ach-banner strong{display:block;margin-top:2px;font-size:16px;line-height:1.2;font-weight:650;letter-spacing:.01em;color:#eef0f3}
.ach-banner .ach-desc{display:block;margin-top:1px;font-size:12.5px;color:#aab0b8}
.ach-banner.camo{display:flex;align-items:center;gap:12px}
.ach-swatch{flex:none;width:56px;height:34px;border-radius:2px;border:1px solid rgba(255,255,255,.18);box-shadow:inset 0 0 0 1px rgba(0,0,0,.4)}
@media (max-width:700px){.ach-banner{min-width:0}.ach-banner strong{font-size:15px}}
`;
