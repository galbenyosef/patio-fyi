// assets__ui-D46k2G3Q 34 — math
// Lines 15714-16047 of readable/assets__ui-D46k2G3Q.pretty.js (statement-aligned).
function Ba(e, t) {
  let n = document.createElement(`div`);
  ((n.className = `combat-identification`),
    (n.style.cssText = `position:absolute;inset:0;pointer-events:none;z-index:3;overflow:hidden`),
    e.ui.append(n));
  let r = document.createElement(`style`);
  ((r.textContent = `.iff-marker[hidden],.iff-name[hidden],.iff-confirm[hidden]{display:none}.iff-marker{position:absolute;left:0;top:0;will-change:transform;display:flex;align-items:center;flex-direction:column;font:600 12px system-ui;text-shadow:0 1px 2px #000,1px 0 2px #000,-1px 0 2px #000;white-space:nowrap}.iff-symbol{font-size:18px;line-height:20px;-webkit-text-stroke:1px #10202b}.iff-name{padding:2px 5px;background:#101b24d9;border-radius:3px}.iff-confirm{position:absolute;left:50%;top:56%;transform:translateX(-50%);font:700 12px system-ui;letter-spacing:.08em;background:#101b24e6;padding:5px 9px;border-radius:3px}`),
    n.append(r));
  let a = document.createElement(`div`);
  ((a.className = `iff-confirm`), (a.hidden = !0), n.append(a));
  let o = [],
    s = new L(),
    c = new L(),
    l = new L(),
    u = 1,
    d = [],
    f = (e) =>
      e.kind === `vehicle` ? e.lift : (fe[e.e.stance | 0] ?? fe[0]) + 0.16;
  function p(t) {
    let r = _n(),
      u = yn(),
      d = e.camera.position.toArray(),
      f = ot(e.world, t.owner);
    e.camera.getWorldDirection(s);
    let p = e.world.byType(`soldier`),
      m = [];
    for (let n of p) {
      if (
        n.id === t.id ||
        n.hp <= 0 ||
        n.state & (i.DEAD | i.IN_VEHICLE) ||
        n.team < 0
      )
        continue;
      let r = bn(
          n.team,
          t.team,
          f?.members.includes(n.owner),
          e.world.match.mode === `ffa`,
        ),
        a = fe[n.stance | 0] ?? fe[0],
        o = [n.pos[0], n.pos[1] + a * 0.72, n.pos[2]];
      l.set(...o).sub(e.camera.position);
      let u = l.length();
      if (u < 0.15 || u > 200) continue;
      l.multiplyScalar(1 / u);
      let h = l.dot(s),
        g = h > Math.cos(Math.atan(0.65 / u) + 0.014);
      if (
        (r === `enemy` && (u > 25 || !g)) ||
        (c.set(n.pos[0], n.pos[1] + a + 0.16, n.pos[2]).project(e.camera),
        c.z < -1 || c.z > 1 || Math.abs(c.x) > 0.97 || Math.abs(c.y) > 0.95)
      )
        continue;
      let _ = l.toArray(),
        v = e.world.map.raycast(
          d,
          _,
          u,
          null,
          t.state & i.IN_VEHICLE ? `vehicle-` + t.seat : null,
        );
      if (v && v.dist < u - 0.2) continue;
      let y = ht(d, _, e.world, u, t.id);
      (y && y.entityId !== n.id && y.dist < u - 0.3) ||
        p.some(
          (e) =>
            e.id !== t.id &&
            e.id !== n.id &&
            e.hp > 0 &&
            !(e.state & (i.DEAD | i.IN_VEHICLE)) &&
            xn(d, _, u, e, fe[e.stance | 0] ?? fe[0]),
        ) ||
        e.modules.get(`effects`)?.identificationObscured?.(d, o) ||
        m.push({
          e: n,
          rel: r,
          dist: u,
          aimed: g,
          dot: h,
          x: (c.x * 0.5 + 0.5) * 100,
          y: (-0.5 * c.y + 0.5) * 100,
          kind: `soldier`,
        });
    }
    let h = new Map();
    for (let e of p)
      if (e.hp > 0 && e.state & i.IN_VEHICLE && e.seat !== t.seat) {
        let t = h.get(e.seat) ?? [];
        (t.push(e), h.set(e.seat, t));
      }
    for (let [n, r] of h) {
      let a = e.world.get(n),
        o = V[a?.weapon];
      if (!a || a.type !== `vehicle` || a.hp <= 0 || !o) continue;
      let u = bn(
          a.team,
          t.team,
          r.some((e) => f?.members.includes(e.owner)),
          e.world.match.mode === `ffa`,
        ),
        p = [a.pos[0], a.pos[1] + o.h * 0.62, a.pos[2]];
      l.set(...p).sub(e.camera.position);
      let h = l.length();
      if (h < 1 || h > 200) continue;
      l.multiplyScalar(1 / h);
      let g = l.dot(s),
        _ = g > Math.cos(Math.atan((Math.max(o.w, o.h) * 0.6) / h) + 0.014);
      if (
        (u === `enemy` && !_) ||
        (c.set(a.pos[0], a.pos[1] + o.h + 0.5, a.pos[2]).project(e.camera),
        c.z < -1 || c.z > 1 || Math.abs(c.x) > 0.97 || Math.abs(c.y) > 0.95)
      )
        continue;
      let v = l.toArray(),
        y = e.world.map.raycast(
          d,
          v,
          h,
          null,
          t.state & i.IN_VEHICLE ? `vehicle-` + t.seat : null,
        );
      if (y && y.entityId !== a.id && y.dist < h - 0.2) continue;
      let b = ht(d, v, e.world, h, t.id);
      (b && b.dist < h - 0.3) ||
        e.modules.get(`effects`)?.identificationObscured?.(d, p) ||
        m.push({
          e: a,
          rel: u,
          dist: h,
          aimed: _,
          dot: g,
          x: (c.x * 0.5 + 0.5) * 100,
          y: (-0.5 * c.y + 0.5) * 100,
          kind: `vehicle`,
          crew: r.length,
          lift: o.h + 0.5,
        });
    }
    m.sort((e, t) => e.dist - t.dist);
    let g = 0,
      _ = [];
    for (let t of m) {
      if (_.some((e) => Math.abs(e.x - t.x) < 1.1 && Math.abs(e.y - t.y) < 2))
        continue;
      _.push(t);
      let i =
        o[g] ??
        (() => {
          let e = document.createElement(`div`);
          return (
            (e.className = `iff-marker`),
            (e.innerHTML = `<span class="iff-name"></span><span class="iff-symbol"></span>`),
            n.append(e),
            (o[g] = e)
          );
        })();
      (g++, (t.el = i));
      let a = String(t.e.id);
      (i.dataset.entity !== a && (i.dataset.entity = a),
        i.dataset.relation !== t.rel && (i.dataset.relation = t.rel),
        (i.style.color = u[t.rel]),
        (i.style.opacity = String(r.opacity * (t.dist > 100 ? 0.8 : 1))),
        (i.style.fontSize = 12 * r.scale + `px`));
      let s = i.lastElementChild;
      (za(s, t.rel === `enemy` ? `▼` : t.rel === `squad` ? `◆` : `●`),
        (s.style.fontSize = 18 * r.scale + `px`));
      let c = i.firstElementChild;
      (Ra(c, !t.aimed),
        za(
          c,
          t.kind === `vehicle`
            ? `${t.rel === `enemy` ? `HOSTILE` : t.rel === `squad` ? `SQUAD` : `FRIENDLY`} VEHICLE · ${t.crew} CREW`
            : t.rel === `enemy`
              ? `HOSTILE`
              : (t.rel === `squad` ? `SQUAD · ` : `ALLY · `) +
                (e.world.players.get(t.e.owner)?.name ?? `Soldier`),
        ));
    }
    for (let e = g; e < o.length; e++) Ra(o[e], !0);
    let v = m
      .filter((e) => e.aimed)
      .sort((e, t) => t.dot - e.dot || e.dist - t.dist)[0];
    return (
      Ra(a, !v),
      v &&
        ((a.style.color = u[v.rel]),
        za(
          a,
          v.kind === `vehicle`
            ? v.rel === `enemy`
              ? `▼ HOSTILE VEHICLE`
              : v.rel === `squad`
                ? `◆ SQUAD VEHICLE`
                : `● FRIENDLY VEHICLE`
            : v.rel === `enemy`
              ? `▼ HOSTILE`
              : v.rel === `squad`
                ? `◆ SQUADMATE`
                : `● FRIENDLY`,
        )),
      _
    );
  }
  let m = 0,
    h = 0,
    g = -1;
  function _() {
    let t = performance.now();
    (t - g > 500 || !m) && ((g = t), (m = n.clientWidth), (h = n.clientHeight));
    for (let t of d) {
      let n = t.e,
        r = t.el;
      if (n.hp <= 0 || n.state & i.DEAD) {
        Ra(r, !0);
        continue;
      }
      if (
        (c.set(n.pos[0], n.pos[1] + f(t), n.pos[2]).project(e.camera),
        c.z < -1 || c.z > 1 || Math.abs(c.x) > 0.97 || Math.abs(c.y) > 0.95)
      ) {
        Ra(r, !0);
        continue;
      }
      (Ra(r, !1),
        (r.style.transform = `translate3d(${Math.round((c.x * 0.5 + 0.5) * m)}px,${Math.round((0.5 - 0.5 * c.y) * h)}px,0) translate(-50%,-100%)`));
    }
  }
  return {
    update(r) {
      let i = e.modules.get(`player`)?.getLocalEntity?.(),
        a =
          i && i.hp > 0 && !t.isVisible(`spawn`) && !t.isVisible(`scoreboard`);
      if ((Ra(n, !a), !a)) {
        d = [];
        return;
      }
      ((u += r), u >= 0.05 && ((u = 0), (d = p(i))), _());
    },
    dispose() {
      n.remove();
    },
  };
}
var Va = 60,
  Ha = (e, t) => {
    ((t = !!t), e.hidden !== t && (e.hidden = t));
  },
  Ua = (e, t, n) =>
    !!e &&
    e.hp > 0 &&
    !(e.state & i.DEAD) &&
    e.team >= 0 &&
    e.id !== t.id &&
    (n?.match?.mode === `ffa` || e.team !== t.team) &&
    (e.type === `vehicle` ||
      (e.type === `soldier` && !(e.state & i.IN_VEHICLE)));
function Wa(e, t, n, r, a, o) {
  let s = a.map((e) => e / o),
    c = t.state & i.IN_VEHICLE ? `vehicle-${t.seat}` : null,
    l = e.world.map.raycast(n, s, o, null, c);
  if (l && l.entityId !== r.id && l.dist < o - 0.2) return !1;
  let u = ht(n, s, e.world, o, t.id);
  return !u || u.entityId === r.id || u.dist >= o - 0.25;
}
function Ga(e, t) {
  if (!t || t.hp <= 0 || t.state & i.DEAD) return null;
  let n = e.camera.position.toArray(),
    r = new L();
  e.camera.getWorldDirection(r);
  let a = r.toArray(),
    o = t.state & i.IN_VEHICLE ? `vehicle-${t.seat}` : null,
    s = e.world.map.raycast(n, a, 300, null, o),
    c = ht(n, a, e.world, Math.min(300, s?.dist ?? 300), t.id);
  if (c) {
    let n = e.world.get(c.entityId);
    if (Ua(n, t, e.world)) return n;
  }
  if (s?.entityId != null) {
    let n = e.world.get(s.entityId);
    if (Ua(n, t, e.world) && n.type === `vehicle`) return n;
  }
  let l = null,
    u = 1 / 0,
    d = 1 / 0;
  for (let r of e.world.sorted()) {
    if (!Ua(r, t, e.world)) continue;
    let i = yt(r).map((e, t) => e - n[t]),
      o = Math.hypot(...i);
    if (o < 0.2 || o > 300) continue;
    let s = Math.max(
        -1,
        Math.min(
          1,
          i.reduce((e, t, n) => e + (t / o) * a[n], 0),
        ),
      ),
      c = Math.acos(s);
    c > St + Math.atan(xt(r) / o) ||
      c > u + 1e-6 ||
      (Math.abs(c - u) <= 1e-6 && o >= d) ||
      (Wa(e, t, n, r, i, o) && ((l = r), (u = c), (d = o)));
  }
  return l;
}
function Ka(e) {
  return e.type === `vehicle`
    ? (V[e.weapon]?.h ?? 2) + 0.65
    : (fe[e.stance | 0] ?? fe[0]) + 0.24;
}
var qa = 34;
function Ja(e, t, n, r) {
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
  let s = n / 2 - qa,
    c = r / 2 - qa,
    l = Math.min(i ? s / Math.abs(i) : 1 / 0, a ? c / Math.abs(a) : 1 / 0);
  return {
    edge: !0,
    x: n / 2 + i * l,
    y: r / 2 + a * l,
    angle: Math.atan2(-i, a),
  };
}
var Ya = (e) => (V[e.weapon]?.air ? `AIR` : `VEH`);
