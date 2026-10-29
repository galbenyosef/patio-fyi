// assets__ui-hhE6L1u7 39 — rel
// Lines 17449-17750 of readable/assets__ui-hhE6L1u7.pretty.js (statement-aligned).
function ns(e, t) {
  let n = document.createElement(`div`);
  ((n.className = `combat-identification`),
    (n.style.cssText = `position:absolute;inset:0;pointer-events:none;z-index:3;overflow:hidden`),
    e.ui.append(n));
  let r = document.createElement(`style`);
  ((r.textContent = $o), n.append(r));
  let i = (e) =>
      `<svg class="iff-sym" viewBox="0 0 14 14" aria-hidden="true">${Qo[e] ?? Qo.ally}</svg>`,
    a = document.createElement(`div`);
  ((a.className = `iff-confirm`),
    (a.hidden = !0),
    (a.innerHTML = `<span class="cs"></span><span class="ct"></span>`),
    n.append(a));
  let s = a.firstElementChild,
    c = a.lastElementChild,
    u = new Map(),
    d = new o(),
    f = new o(),
    p = new o(),
    m = 1,
    h = (e) =>
      e.kind === `vehicle` ? e.lift : (V[e.e.stance | 0] ?? V[0]) + 0.6;
  function g(e) {
    let t = u.get(e);
    if (t) return t;
    let r = document.createElement(`div`);
    return (
      (r.className = `iff-marker`),
      (r.innerHTML = `<span class="iff-name"></span><span class="iff-s"></span>`),
      n.append(r),
      (t = {
        el: r,
        name: r.firstElementChild,
        slot: r.lastElementChild,
        rel: ``,
        row: null,
        leaving: 0,
        alpha: `0`,
        born: performance.now(),
      }),
      u.set(e, t),
      t
    );
  }
  function _(t) {
    let n = Dn(),
      r = kn(),
      o = e.camera.position.toArray(),
      m = at(e.world, t.owner);
    e.camera.getWorldDirection(d);
    let h = e.world.byType(`soldier`),
      _ = [],
      v = m?.members.filter((e) => e !== t.owner) ?? [];
    for (let n of h) {
      if (
        n.id === t.id ||
        n.hp <= 0 ||
        n.state & (l.DEAD | l.IN_VEHICLE) ||
        n.team < 0
      )
        continue;
      let r = An(
          n.team,
          t.team,
          m?.members.includes(n.owner),
          e.world.match.mode === `ffa`,
        ),
        i = V[n.stance | 0] ?? V[0],
        a = [n.pos[0], n.pos[1] + i * 0.72, n.pos[2]];
      p.set(...a).sub(e.camera.position);
      let s = p.length();
      if (s < 0.15 || s > 200) continue;
      p.multiplyScalar(1 / s);
      let c = p.dot(d),
        u = c > Math.cos(Math.atan(0.65 / s) + 0.014);
      if (
        (r === `enemy` && (s > 25 || !u)) ||
        (f.set(n.pos[0], n.pos[1] + i + 0.16, n.pos[2]).project(e.camera),
        f.z < -1 || f.z > 1 || Math.abs(f.x) > 0.97 || Math.abs(f.y) > 0.95)
      )
        continue;
      let g = p.toArray(),
        y = e.world.map.raycast(
          o,
          g,
          s,
          null,
          t.state & l.IN_VEHICLE ? `vehicle-` + t.seat : null,
        );
      if (y && y.dist < s - 0.2) continue;
      let b = ht(o, g, e.world, s, t.id);
      (b && b.entityId !== n.id && b.dist < s - 0.3) ||
        h.some(
          (e) =>
            e.id !== t.id &&
            e.id !== n.id &&
            e.hp > 0 &&
            !(e.state & (l.DEAD | l.IN_VEHICLE)) &&
            jn(o, g, s, e, V[e.stance | 0] ?? V[0]),
        ) ||
        (r === `enemy` && ot(e.world, o, a)) ||
        e.modules.get(`effects`)?.identificationObscured?.(o, a) ||
        _.push({
          e: n,
          rel: r,
          dist: s,
          aimed: u,
          dot: c,
          x: (f.x * 0.5 + 0.5) * 100,
          y: (-0.5 * f.y + 0.5) * 100,
          kind: `soldier`,
          number: r === `squad` ? v.indexOf(n.owner) + 1 : 0,
        });
    }
    let y = new Map();
    for (let e of h)
      if (e.hp > 0 && e.state & l.IN_VEHICLE && e.seat !== t.seat) {
        let t = y.get(e.seat) ?? [];
        (t.push(e), y.set(e.seat, t));
      }
    for (let [n, r] of y) {
      let i = e.world.get(n),
        a = ge[i?.weapon];
      if (!i || i.type !== `vehicle` || i.hp <= 0 || !a) continue;
      let s = An(
          i.team,
          t.team,
          r.some((e) => m?.members.includes(e.owner)),
          e.world.match.mode === `ffa`,
        ),
        c = [i.pos[0], i.pos[1] + a.h * 0.62, i.pos[2]];
      p.set(...c).sub(e.camera.position);
      let u = p.length();
      if (u < 1 || u > 200) continue;
      p.multiplyScalar(1 / u);
      let h = p.dot(d),
        g = h > Math.cos(Math.atan((Math.max(a.w, a.h) * 0.6) / u) + 0.014);
      if (
        (s === `enemy` && !g) ||
        (f.set(i.pos[0], i.pos[1] + a.h + 0.5, i.pos[2]).project(e.camera),
        f.z < -1 || f.z > 1 || Math.abs(f.x) > 0.97 || Math.abs(f.y) > 0.95)
      )
        continue;
      let v = p.toArray(),
        y = e.world.map.raycast(
          o,
          v,
          u,
          null,
          t.state & l.IN_VEHICLE ? `vehicle-` + t.seat : null,
        );
      if (y && y.entityId !== i.id && y.dist < u - 0.2) continue;
      let b = ht(o, v, e.world, u, t.id);
      (b && b.dist < u - 0.3) ||
        (s === `enemy` && ot(e.world, o, c)) ||
        e.modules.get(`effects`)?.identificationObscured?.(o, c) ||
        _.push({
          e: i,
          rel: s,
          dist: u,
          aimed: g,
          dot: h,
          x: (f.x * 0.5 + 0.5) * 100,
          y: (-0.5 * f.y + 0.5) * 100,
          kind: `vehicle`,
          crew: r.length,
          lift: a.h + 0.5,
        });
    }
    _.sort((e, t) => e.dist - t.dist);
    let b = [],
      x = _.filter((e) => e.aimed).sort(
        (e, t) => t.dot - e.dot || e.dist - t.dist,
      )[0];
    for (let t of _) {
      if (b.some((e) => Math.abs(e.x - t.x) < 1.1 && Math.abs(e.y - t.y) < 2))
        continue;
      b.push(t);
      let a = g(t.kind + `:` + t.e.id);
      ((a.row = t),
        (a.leaving = 0),
        a.rel !== t.rel &&
          ((a.rel = t.rel),
          (a.slot.innerHTML = i(t.rel)),
          (a.sym = a.slot.firstElementChild),
          (a.el.dataset.relation = t.rel)));
      let o = t === x,
        s = ts(t.dist, o),
        c = s.size * n.scale * (t.kind === `vehicle` ? 1.25 : 1);
      ((a.el.style.color = r[t.rel]),
        (a.alpha = (n.opacity * s.alpha).toFixed(2)));
      let l = `scale(${c.toFixed(2)})`;
      if (
        (a.sym.style.transform !== l && (a.sym.style.transform = l),
        Yo(a.name, !o),
        o)
      ) {
        let n =
            t.kind === `vehicle`
              ? `${t.rel === `enemy` ? `Hostile` : `Vehicle`} · ${t.crew} crew`
              : t.rel === `enemy`
                ? ``
                : (e.world.players.get(t.e.owner)?.name ?? `Soldier`),
          r = t.number > 0 ? `<b>${t.number}</b>` : ``;
        (a.name.dataset.t !== r + n &&
          ((a.name.dataset.t = r + n),
          (a.name.innerHTML = r),
          a.name.append(n)),
          !n && !r && Yo(a.name, !0));
      }
    }
    let S = performance.now();
    for (let e of u.values())
      !b.includes(e.row) &&
        !e.leaving &&
        ((e.leaving = S + es), (e.el.style.opacity = `0`));
    (Yo(a, !x),
      x &&
        ((a.style.color = r[x.rel]),
        a.dataset.rel !== x.rel &&
          ((a.dataset.rel = x.rel), (s.innerHTML = i(x.rel))),
        Xo(
          c,
          x.kind === `vehicle`
            ? x.rel === `enemy`
              ? `Hostile vehicle`
              : x.rel === `squad`
                ? `Squad vehicle`
                : `Friendly vehicle`
            : x.rel === `enemy`
              ? `Hostile`
              : x.rel === `squad`
                ? `Squadmate`
                : `Friendly`,
        )));
  }
  let v = 0,
    y = 0,
    b = -1;
  function x() {
    let t = performance.now();
    (t - b > 500 || !v) && ((b = t), (v = n.clientWidth), (y = n.clientHeight));
    for (let [n, r] of u) {
      if (r.leaving && t >= r.leaving) {
        (r.el.remove(), u.delete(n));
        continue;
      }
      let i = r.row,
        a = i.e;
      if (a.hp <= 0 || a.state & l.DEAD) {
        Yo(r.el, !0);
        continue;
      }
      if (
        (f.set(a.pos[0], a.pos[1] + h(i), a.pos[2]).project(e.camera),
        f.z < -1 || f.z > 1 || Math.abs(f.x) > 0.97 || Math.abs(f.y) > 0.95)
      ) {
        Yo(r.el, !0);
        continue;
      }
      (!r.leaving &&
        t > r.born &&
        r.el.style.opacity !== r.alpha &&
        (r.el.style.opacity = r.alpha),
        Yo(r.el, !1),
        (r.el.style.transform = `translate3d(${Math.round((f.x * 0.5 + 0.5) * v)}px,${Math.round((0.5 - 0.5 * f.y) * y)}px,0) translate(-50%,-100%)`));
    }
  }
  function S() {
    for (let e of u.values()) e.el.remove();
    (u.clear(), Yo(a, !0));
  }
  return {
    update(r) {
      let i = e.modules.get(`player`)?.getLocalEntity?.(),
        a =
          i && i.hp > 0 && !t.isVisible(`spawn`) && !t.isVisible(`scoreboard`);
      if ((Yo(n, !a), !a)) {
        u.size && S();
        return;
      }
      ((m += r), m >= 0.1 && ((m = 0), _(i)), x());
    },
    dispose() {
      (S(), n.remove());
    },
  };
}
var rs = 60,
  is = (e, t) => {
    ((t = !!t), e.hidden !== t && (e.hidden = t));
  },
  as = (e, t, n) =>
    !!e &&
    e.hp > 0 &&
    !(e.state & l.DEAD) &&
    e.team >= 0 &&
    e.id !== t.id &&
    (n?.match?.mode === `ffa` || e.team !== t.team) &&
    (e.type === `vehicle` ||
      (e.type === `soldier` && !(e.state & l.IN_VEHICLE)));
