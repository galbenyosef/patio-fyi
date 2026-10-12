// assets__ui-D46k2G3Q 07 — math
// Lines 2358-2654 of readable/assets__ui-D46k2G3Q.pretty.js (statement-aligned).
function kn(e, t, n, { zoom: r = 1, x: i = null, z: a = null } = {}) {
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
var An = 128;
function jn() {
  let e = new Map(),
    t = new Map(),
    n = new Map(),
    r = [],
    a = null,
    o = null,
    s = null;
  return {
    update(c, l, u, d = () => !1, f = !1, p = () => 90) {
      if (!l || l.hp <= 0 || l.state & i.DEAD)
        return (e.clear(), t.clear(), (r.length = 0), r);
      ((l !== o || l.id !== a || l.team !== s) &&
        (e.clear(), t.clear(), (a = l.id), (o = l), (s = l.team)),
        n.clear(),
        (r.length = 0));
      for (let t of c) {
        if (t.type !== `soldier` && t.type !== `vehicle`) continue;
        if ((n.set(t.id, t), t.id === l.id || t.hp <= 0 || t.state & i.DEAD)) {
          e.delete(t.id);
          continue;
        }
        if (t.team === s && !f) {
          (e.delete(t.id), r.push(t));
          continue;
        }
        if (t.team < 0 || t.state & i.IN_VEHICLE) {
          e.delete(t.id);
          continue;
        }
        if (
          !(t.state & i.FIRING) ||
          t.state & i.RELOADING ||
          d(t) ||
          Math.hypot(t.pos[0] - l.pos[0], t.pos[2] - l.pos[2]) > p(t)
        )
          continue;
        let a = e.get(t.id);
        (a?.source === t && u - a.at < 0.1) ||
          (!a && e.size >= An && e.delete(e.keys().next().value),
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
      for (let [a, o] of t) {
        let c = n.get(a);
        if (
          u >= o ||
          !c ||
          c.hp <= 0 ||
          c.state & i.DEAD ||
          (c.team === s && !f)
        ) {
          t.delete(a);
          continue;
        }
        (e.delete(a),
          r.push({
            id: c.id,
            owner: c.owner,
            type: c.type,
            team: c.team,
            pos: c.pos,
            yaw: c.yaw,
            state: c.state,
            spotted: !0,
            radarAlpha: Math.max(0.4, Math.min(1, (o - u) / 1.25)),
          }));
      }
      for (let [a, o] of e) {
        if (t.has(a)) continue;
        let c = n.get(a),
          l = u - o.at;
        if (
          l < 0 ||
          l >= 3 ||
          (c &&
            (c !== o.source ||
              c.hp <= 0 ||
              c.state & i.DEAD ||
              (c.team === s && !f)))
        ) {
          e.delete(a);
          continue;
        }
        ((o.marker.radarAlpha = Math.max(0.25, 1 - l / 3)), r.push(o.marker));
      }
      return r;
    },
    spot(e, n, r = 6) {
      Number.isInteger(e) && t.set(e, Math.max(t.get(e) ?? 0, n + r));
    },
    clear() {
      (e.clear(), t.clear(), n.clear(), (r.length = 0), (a = o = s = null));
    },
  };
}
var Mn = 0.3;
function Nn(e, t = !1, n = !1) {
  let r = (n ? 2 : 0) + +!!t,
    i = (e.kill ? 2 : 0) + +!!e.hs;
  return e.t > 0 && r < i ? !1 : ((e.t = Mn), (e.hs = t), (e.kill = n), !0);
}
var Pn = 180 / Math.PI,
  Fn = (e) =>
    e.mode === `BOLT` && e.rpm ? 60 / (60 / e.rpm + (e.ads ?? 0)) : e.rpm,
  In = (e) =>
    Math.hypot((e.recoil?.[1] ?? 0) * 0.65, (e.recoil?.[0] ?? 0) * 0.35) * Pn,
  Ln = [
    [`Damage`, (e) => gt(e, 0), ``, 1, !0],
    [`Fire rate`, Fn, ` rpm`, 0, !0],
    [`Recoil`, In, `°`, 2, !1],
    [`Spread`, (e) => (e.spread ?? 0) * Pn, `°`, 3, !1],
    [`Aim time`, (e) => (e.ads ?? 0) * 1e3, `ms`, 0, !1],
    [`Magazine`, (e) => e.mag, ``, 0, !0],
    [`Reload`, (e) => e.reload ?? 0, `s`, 2, !1],
  ],
  Rn = (e, t = 1) =>
    e.damage > 0 ? Math.ceil(200 / (e.damage * t) - 1e-9) : 0,
  zn = [
    [
      `Hits to kill`,
      (e) => Rn(e),
      ``,
      0,
      !1,
      !1,
      (e) =>
        `${Rn(e)} body · ${Rn(e, e.head ?? 1)} head · ${Rn(e, e.limb ?? 0.8)} limb`,
    ],
    [
      `Zoom`,
      (e) => {
        let t =
          e.optic?.type === `scope` || e.optic?.type === `prism`
            ? (e.optic.fovs ?? [e.optic.fov])
            : [];
        return t.length ? 75 / Math.min(...t) : 1;
      },
      `x`,
      1,
      !0,
      !1,
      (e) => {
        let t =
            e.optic?.type === `scope` || e.optic?.type === `prism`
              ? (e.optic.fovs ?? [e.optic.fov])
              : null,
          n = (e) => (75 / e).toFixed(1).replace(/\.0$/, ``);
        return t
          ? t.length > 1
            ? `${n(Math.max(...t))}–${n(Math.min(...t))}x`
            : `${n(t[0])}x fixed`
          : `None`;
      },
    ],
    [`Aim time`, (e) => (e.ads ?? 0) * 1e3, `ms`, 0, !1],
    [`Recoil`, In, `°`, 2, !1],
    [`Magazine`, (e) => e.mag, ``, 0, !0],
    [`Reload`, (e) => e.reload ?? 0, `s`, 2, !1, !0],
    [`Fire rate`, Fn, ` rpm`, 0, !0, !0],
    [`Spread`, (e) => (e.spread ?? 0) * Pn, `°`, 3, !1, !0],
  ],
  Bn = (e) => (e === `sniper` ? zn : Ln),
  Vn = new Set([`ar`, `smg`, `lmg`, `sniper`, `dmr`, `carbine`, `pistol`]),
  Hn = new Map();
function Un(e) {
  if (Hn.has(e)) return Hn.get(e);
  let t = be.filter((t) => t.class === e && !t.retired),
    n = Bn(e).map(([, e]) => {
      let n = t.map(e).filter(Number.isFinite),
        r = Math.min(...n),
        i = Math.max(...n);
      if (!(i - r > 1e-9 * Math.max(1, Math.abs(i)))) {
        let e = (Number.isFinite(i) && Math.abs(i)) || 1;
        ((r = (i || 0) - e * 0.5), (i = (i || 0) + e * 0.5));
      }
      return { lo: r, hi: i };
    });
  return (Hn.set(e, n), n);
}
function Wn(e, t) {
  let n = Vn.has(e.class) ? e.class : t.class,
    r = Un(n);
  return Bn(n).map(([n, i, a, o, s, c = !1, l = null], u) => {
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
var Gn = (e, { lo: t, hi: n }, r) => {
  let i = (e - t) / (n - t);
  return Math.max(2, Math.min(100, 15 + 80 * (r ? i : 1 - i)));
};
function Kn(e) {
  let t = e.scale ?? { lo: 0, hi: Math.max(e.from, e.to, 1e-8) },
    n = Gn(e.from, t, e.higher !== !1),
    r = Gn(e.to, t, e.higher !== !1);
  return { before: n, after: r, start: Math.min(n, r), delta: Math.abs(r - n) };
}
var q = Object.freeze([0, 10, 15, 25, 35, 40, 50, 60, 70, 100]);
function qn(e, t = q) {
  return t.map((t) => {
    let n = gt(e, t, `torso`),
      r = n > 0 ? Math.ceil(200 / n - 1e-9) : 0;
    return {
      distance: t,
      damage: n,
      hits: r,
      ttk: r > 0 && e.rpm > 0 ? ((r - 1) * 6e4) / e.rpm : 0,
    };
  });
}
var Jn = (e) =>
  (e >= 100 || Number.isInteger(e)
    ? Math.floor(e)
    : Math.floor(e * 10) / 10
  ).toLocaleString();
function Yn(e, { admin: t = !1 } = {}) {
  let n = e.level === 1 ? `level 1` : `level ${e.level}`;
  return e.earned
    ? {
        state: `✓ EARNED`,
        note: e.level === 1 ? `Available from the start` : `Earned at ${n}`,
      }
    : e.testingAccess
      ? {
          state: `TESTING ACCESS`,
          note: `Available for testing · earn at ${n}`,
        }
      : t && e.done
        ? { state: `ADMIN ACCESS`, note: `Available to admin · earn at ${n}` }
        : {
            state: `LOCKED`,
            note: `${Jn(e.have)} / ${Jn(e.need)} XP · unlocks at ${n}`,
          };
}
var Xn = {
  slate: [3426125, 1515561, 8633281, 12301987],
  ember: [7287848, 2435121, 14918994, 12759963],
  chalk: [13158063, 3160899, 13860935, 12568261],
  moss: [5662027, 2239531, 13088119, 10857377],
  plum: [6509928, 2434607, 14395792, 12168632],
  navy: [3360615, 1647916, 13674582, 12175310],
  copper: [8740935, 2635318, 7259318, 13021850],
  ivory: [14207920, 4208943, 9258039, 12167814],
  oxide: [10111800, 3422002, 15190900, 11777961],
  black: [3421244, 1515045, 11185526, 11582146],
  milblack: [2895408, 1316376, 5593423, 9409168],
  miltan: [7298885, 2762531, 5918784, 10525583],
  milod: [3817778, 1909019, 5922379, 10132882],
  milgray: [4475213, 1711392, 6449003, 10922669],
  prestige: [1974307, 1118740, 11831370, 12764617],
  milwood: [5911328, 1710876, 7028777, 10525583],
};
Object.freeze(Object.keys(Xn));
