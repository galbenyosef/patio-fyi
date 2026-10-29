// assets__ui-hhE6L1u7 08 — math
// Lines 2414-2754 of readable/assets__ui-hhE6L1u7.pretty.js (statement-aligned).
function zn(e, t, n, { zoom: r = 1, x: i = null, z: a = null } = {}) {
  let [o, s, c, l] = e,
    u = Math.max(t / (c - o), n / (l - s)) * Math.max(1, Math.min(3, r)),
    d = t / (2 * u),
    f = n / (2 * u),
    p = (e, t, n) => Math.max(t, Math.min(n, e));
  return {
    x: p(i ?? (o + c) / 2, o + d, c - d),
    z: p(a ?? (s + l) / 2, s + f, l - f),
    range: d,
    scale: u,
  };
}
var Bn = 128;
function Vn() {
  let e = new Map(),
    t = new Map(),
    n = new Map(),
    r = [],
    i = null,
    a = null,
    o = null;
  return {
    update(s, c, u, d = () => !1, f = !1, p = () => 90) {
      if (!c || c.hp <= 0 || c.state & l.DEAD)
        return (e.clear(), t.clear(), (r.length = 0), r);
      ((c !== a || c.id !== i || c.team !== o) &&
        (e.clear(), t.clear(), (i = c.id), (a = c), (o = c.team)),
        n.clear(),
        (r.length = 0));
      for (let t of s) {
        if (t.type !== `soldier` && t.type !== `vehicle`) continue;
        if ((n.set(t.id, t), t.id === c.id || t.hp <= 0 || t.state & l.DEAD)) {
          e.delete(t.id);
          continue;
        }
        if (t.team === o && !f) {
          (e.delete(t.id), r.push(t));
          continue;
        }
        if (t.team < 0 || t.state & l.IN_VEHICLE) {
          e.delete(t.id);
          continue;
        }
        if (
          !(t.state & l.FIRING) ||
          t.state & l.RELOADING ||
          d(t) ||
          Math.hypot(t.pos[0] - c.pos[0], t.pos[2] - c.pos[2]) > p(t)
        )
          continue;
        let i = e.get(t.id);
        (i?.source === t && u - i.at < 0.1) ||
          (!i && e.size >= Bn && e.delete(e.keys().next().value),
          e.set(t.id, {
            source: t,
            at: u,
            marker: {
              id: t.id,
              owner: t.owner,
              type: t.type,
              team: t.team,
              pos: t.pos.slice(),
              yaw: t.yaw,
              state: 0,
              radarPing: !0,
              radarAlpha: 1,
            },
          }));
      }
      for (let [i, a] of t) {
        let s = n.get(i);
        if (
          u >= a ||
          !s ||
          s.hp <= 0 ||
          s.state & l.DEAD ||
          (s.team === o && !f)
        ) {
          t.delete(i);
          continue;
        }
        (e.delete(i),
          r.push({
            id: s.id,
            owner: s.owner,
            type: s.type,
            team: s.team,
            pos: s.pos,
            yaw: s.yaw,
            state: s.state,
            spotted: !0,
            radarAlpha: Math.max(0.4, Math.min(1, (a - u) / 1.25)),
          }));
      }
      for (let [i, a] of e) {
        if (t.has(i)) continue;
        let s = n.get(i),
          c = u - a.at;
        if (
          c < 0 ||
          c >= 3 ||
          (s &&
            (s !== a.source ||
              s.hp <= 0 ||
              s.state & l.DEAD ||
              (s.team === o && !f)))
        ) {
          e.delete(i);
          continue;
        }
        ((a.marker.radarAlpha = Math.max(0.25, 1 - c / 3)), r.push(a.marker));
      }
      return r;
    },
    spot(e, n, r = 6) {
      Number.isInteger(e) && t.set(e, Math.max(t.get(e) ?? 0, n + r));
    },
    clear() {
      (e.clear(), t.clear(), n.clear(), (r.length = 0), (i = a = o = null));
    },
  };
}
var Hn = 0.3;
function Un(e, t = !1, n = !1) {
  let r = (n ? 2 : 0) + +!!t,
    i = (e.kill ? 2 : 0) + +!!e.hs;
  return e.t > 0 && r < i ? !1 : ((e.t = Hn), (e.hs = t), (e.kill = n), !0);
}
function Wn(e, t, n, r) {
  let i = e?.players?.get(t);
  if (!i || i.team !== n) return [];
  let a = new Map();
  if (r?.team === n)
    for (let t of r.targets ?? []) {
      let n = { ...t, type: `prop`, weapon: Tt.prop, hp: 1 };
      wt(e, i, n) || a.set(n.id, { ...t, spawnId: Ct(n) });
    }
  for (let t of St(e, i))
    a.has(t.id) ||
      a.set(t.id, {
        id: t.id,
        owner: t.owner,
        pos: t.pos,
        team: t.team,
        spawnId: Ct(t),
        reason: `Checking beacon`,
      });
  return [...a.values()]
    .sort(
      (e, n) =>
        (n.owner === t) - (e.owner === t) || e.owner - n.owner || e.id - n.id,
    )
    .map((n) => ({
      ...n,
      label:
        n.owner === t
          ? `Your beacon`
          : `${e.players.get(n.owner)?.name ?? `Squadmate`}’s beacon`,
    }));
}
var Gn = Object.freeze({
    made: {
      sniper: [
        `longbow`,
        `harrier`,
        `peregrine`,
        `osprey`,
        `condor`,
        `spectre`,
      ],
      smg: [`ump45`, `mac10`, `mp7`],
      pistol: [],
      own: [
        `dunlin`,
        `civet`,
        `nightjar`,
        `wren`,
        `sandpiper`,
        `swift`,
        `fisher`,
      ],
    },
    review: {},
  }),
  Kn = { sniper: `sniper`, smg: `smg`, pistol: `pistol` };
function qn(
  e,
  { made: t = Gn.made, review: n = Gn.review, hasOwn: r = (e) => !!st[e] } = {},
) {
  if (!e) return null;
  if (Object.hasOwn(n, e.key))
    return { status: `yellow`, note: n[e.key] ?? `` };
  let i = Kn[e.class];
  return {
    status:
      !e.suppressed &&
      (r(e.key)
        ? t.own?.includes(e.key)
        : i && e.report && t[i]?.includes(e.report))
        ? `green`
        : `red`,
    note: ``,
  };
}
var Jn = Object.freeze({
    green: `Uses a sound you made`,
    yellow: `Marked for review`,
    red: `Still an original sound`,
  }),
  Yn = 180 / Math.PI,
  Xn = (e) =>
    e.mode === `BOLT` && e.rpm ? 60 / (60 / e.rpm + (e.ads ?? 0)) : e.rpm,
  Zn = (e) =>
    Math.hypot((e.recoil?.[1] ?? 0) * 0.65, (e.recoil?.[0] ?? 0) * 0.35) * Yn,
  Qn = (e) => {
    let t = e.optic;
    return !t || t.type === `irons` || t.type === `none`
      ? 1
      : Math.max(
          1,
          Math.tan((27.5 * Math.PI) / 180) / Math.tan((t.fov * Math.PI) / 360),
        );
  },
  $n = (e) =>
    e.optic?.type === `scope` ? (e.optic.fovs ?? [e.optic.fov]) : null,
  er = (e) => {
    let t = $n(e);
    return t ? 75 / Math.min(...t) : Qn(e);
  },
  tr = (e) => {
    let t = $n(e),
      n = (e) => (75 / e).toFixed(1).replace(/\.0$/, ``);
    if (t)
      return t.length > 1
        ? `${n(Math.max(...t))}–${n(Math.min(...t))}x`
        : `${n(t[0])}x fixed`;
    let r = Qn(e);
    return r < 1.05 ? `None` : `${r.toFixed(1).replace(/\.0$/, ``)}x`;
  },
  nr = [
    [`Damage`, (e) => W(e, 0), ``, 1, !0],
    [`Fire rate`, Xn, ` rpm`, 0, !0],
    [`Recoil`, Zn, `°`, 2, !1],
    [`Spread`, (e) => (e.spread ?? 0) * Yn, `°`, 3, !1],
    [`Zoom`, er, `x`, 1, !0, !1, tr],
    [`Aim time`, (e) => (e.ads ?? 0) * 1e3, `ms`, 0, !1],
    [`Magazine`, (e) => e.mag, ``, 0, !0],
    [`Reload`, (e) => e.reload ?? 0, `s`, 2, !1],
  ],
  rr = (e, t = 1) =>
    e.damage > 0 ? Math.ceil(200 / (e.damage * t) - 1e-9) : 0,
  ir = [
    [
      `Hits to kill`,
      (e) => rr(e),
      ``,
      0,
      !1,
      !1,
      (e) =>
        `${rr(e)} body · ${rr(e, e.head ?? 1)} head · ${rr(e, e.limb ?? 0.8)} limb`,
    ],
    [`Zoom`, er, `x`, 1, !0, !1, tr],
    [`Aim time`, (e) => (e.ads ?? 0) * 1e3, `ms`, 0, !1],
    [`Recoil`, Zn, `°`, 2, !1],
    [`Magazine`, (e) => e.mag, ``, 0, !0],
    [`Reload`, (e) => e.reload ?? 0, `s`, 2, !1, !0],
    [`Fire rate`, Xn, ` rpm`, 0, !0, !0],
    [`Spread`, (e) => (e.spread ?? 0) * Yn, `°`, 3, !1, !0],
  ],
  q = (e) => (e === `sniper` ? ir : nr),
  ar = new Set([`ar`, `smg`, `lmg`, `sniper`, `dmr`, `carbine`, `pistol`]),
  or = new Map();
function sr(e) {
  if (or.has(e)) return or.get(e);
  let t = _e.filter((t) => t.class === e && !t.retired),
    n = q(e).map(([, e]) => {
      let n = t.map(e).filter(Number.isFinite),
        r = Math.min(...n),
        i = Math.max(...n);
      if (!(i - r > 1e-9 * Math.max(1, Math.abs(i)))) {
        let e = (Number.isFinite(i) && Math.abs(i)) || 1;
        ((r = (i || 0) - e * 0.5), (i = (i || 0) + e * 0.5));
      }
      return { lo: r, hi: i };
    });
  return (or.set(e, n), n);
}
function cr(e, t) {
  let n = ar.has(e.class) ? e.class : t.class,
    r = sr(n);
  return q(n).map(([n, i, a, o, s, c = !1, l = null], u) => {
    let d = i(e),
      f = i(t),
      p = f - d,
      m = Math.abs(p) < 1e-7 ? 0 : p;
    return {
      name: n,
      from: d,
      to: f,
      unit: a,
      precision: o,
      higher: s,
      change: m,
      better: s ? m > 0 : m < 0,
      percent: d ? (m / d) * 100 : 0,
      scale: r[u],
      detail: c,
      ...(l ? { fromText: l(e), toText: l(t) } : {}),
    };
  });
}
var lr = (e, { lo: t, hi: n }, r) => {
  let i = (e - t) / (n - t);
  return Math.max(2, Math.min(100, 15 + 80 * (r ? i : 1 - i)));
};
function ur(e) {
  let t = e.scale ?? { lo: 0, hi: Math.max(e.from, e.to, 1e-8) },
    n = lr(e.from, t, e.higher !== !1),
    r = lr(e.to, t, e.higher !== !1);
  return { before: n, after: r, start: Math.min(n, r), delta: Math.abs(r - n) };
}
var dr = Object.freeze([0, 10, 15, 25, 35, 40, 50, 60, 70, 100]);
function fr(e, t = dr) {
  return t.map((t) => {
    let n = W(e, t, `torso`),
      r = n > 0 ? Math.ceil(200 / n - 1e-9) : 0;
    return {
      distance: t,
      damage: n,
      hits: r,
      ttk: r > 0 && e.rpm > 0 ? ((r - 1) * 6e4) / e.rpm : 0,
    };
  });
}
var pr = (e) =>
  (e >= 100 || Number.isInteger(e)
    ? Math.floor(e)
    : Math.floor(e * 10) / 10
  ).toLocaleString();
