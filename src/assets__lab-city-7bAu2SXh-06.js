// assets__lab-city-7bAu2SXh 06 — math
// Lines 40028-40289 of readable/assets__lab-city-7bAu2SXh.pretty.js (statement-aligned).
var P = `ground`;
function F(
  t,
  n,
  a,
  o,
  s,
  [c, l],
  u,
  { enterable: d = !1, furnished: f = !0 } = {},
) {
  let p = e[a],
    m = Math.atan2(c, l),
    h = u(o, s),
    g = c !== 0,
    _ = n.id,
    v = { id: _, key: a, x: o, y: h, z: s, rotY: m };
  t.labBuildings.push(v);
  let b = p.tiers.map(([e, t, n, r, i, a = 0], u) => {
    let d = o + c * i + l * a,
      f = s + l * i - c * a,
      p = (g ? t : e) / 2,
      m = (g ? e : t) / 2;
    return {
      k: u,
      x0: d - p,
      x1: d + p,
      z0: f - m,
      z1: f + m,
      yb: h + n,
      yt: h + r,
    };
  });
  t.noSpawn ??= [];
  for (let e of b) e.yb <= h + 0.01 && t.noSpawn.push([e.x0, e.z0, e.x1, e.z1]);
  let x = g ? p.D : p.W,
    S = g ? p.W : p.D,
    C = d
      ? y(a, {
          id: _,
          x: o,
          y: h,
          z: s,
          rotY: m,
          boxes: b,
          ground: d === `ground`,
          furnished: f,
        })
      : null;
  C &&
    (R(t, v, C),
    (t.shelters ??= []).push(
      ...b.map((e, t) => [
        e.x0,
        e.yb - 0.5,
        e.z0,
        e.x1,
        t === b.length - 1 ? h + p.H : e.yt,
        e.z1,
      ]),
    ));
  let w = (C?.doors ?? []).map((e) => {
    let t = Math.abs(e.nz) * (e.w / 2 + 0.3) + Math.abs(e.nx) * 1.6,
      n = Math.abs(e.nx) * (e.w / 2 + 0.3) + Math.abs(e.nz) * 1.6,
      r = e.x + e.nx * 0.5,
      i = e.z + e.nz * 0.5;
    return [r - t, i - n, r + t, i + n, e.y + e.h];
  });
  return (
    (r[a] ?? []).forEach(([e, n, r, u, d, f, p], m) => {
      if (p && C) {
        if (!C.hollow) return;
        let e = C.hollow.ceil - h;
        f > e && (d = Math.max(d, e));
      }
      let g = o + l * e + c * n,
        v = s - c * e + l * n,
        y = o + l * r + c * u,
        b = s - c * r + l * u,
        x = [
          Math.min(g, y),
          h + d,
          Math.min(v, b),
          Math.max(g, y),
          h + f,
          Math.max(v, b),
        ];
      w.some(
        (e) =>
          x[0] < e[2] &&
          x[3] > e[0] &&
          x[2] < e[3] &&
          x[5] > e[1] &&
          x[1] < e[4],
      ) ||
        t.colliderDefs.push({
          id: `demo-${_}-lab-x${m}`,
          aabb: x,
          surface: `concrete`,
          pen: i[a]?.solids[m] ?? `concrete`,
        });
    }),
    Object.assign(n, {
      w: x,
      d: S,
      h: p.H,
      y: h,
      lab: a,
      exteriorOnly: !C,
      demolitionPanels: I(t, _, a, h, b, C),
      demolitionAttachments: {},
    }),
    delete n.breachPanels,
    n
  );
}
function I(e, t, r, a, o, s = null) {
  let c = [],
    l = n[r] ?? [{ t: 0.3, fl: [] }],
    u = (t, n, r, i, a, o, s, l = `concrete`) => {
      (e.objects.push({
        id: t,
        kind: `box`,
        labPanel: !0,
        material: `concrete`,
        x: (n + r) / 2,
        y: i,
        z: (o + s) / 2,
        sx: r - n,
        sy: a - i,
        sz: s - o,
      }),
        e.colliderDefs.push({
          id: `demo-${t}`,
          aabb: [n, i, o, r, a, s],
          surface: `concrete`,
          pen: l,
        }),
        c.push(t));
    };
  for (let n of o) {
    let c = l[l.length === o.length ? n.k : 0] ?? l[0],
      d = c.t,
      f = `${t}-lab-${n.k}`,
      p = i[r]?.tiers[n.k] ?? i[r]?.tiers[0],
      m = [n.yb];
    for (let e of c.fl) {
      let t = m[m.length - 1] + e;
      if (t > n.yt + 0.01) break;
      m.push(t);
    }
    m.length < 2 && m.push(n.yt);
    let h = [...m.slice(0, -1), n.yt];
    (!n.k || n.yb <= a + 0.01) &&
      e.colliderDefs.push({
        id: `demo-${f}-ground-slab`,
        aabb: [n.x0, a - 0.4, n.z0, n.x1, a + 0.05, n.z1],
        surface: `concrete`,
      });
    let g = [
      [`z`, n.z1, 1, n.x0, n.x1, `n`],
      [`z`, n.z0, -1, n.x0, n.x1, `s`],
      [`x`, n.x1, 1, n.z0 + d, n.z1 - d, `e`],
      [`x`, n.x0, -1, n.z0 + d, n.z1 - d, `w`],
    ];
    for (let [e, t, r, i, c, l] of g)
      for (let m = 0; m < h.length - 1; m++) {
        let g = m ? h[m] : n.k ? n.yb : a - 0.4,
          _ = h[m + 1],
          v = (g + _) / 2,
          y = t + r * 0.1,
          b = (s?.doors ?? [])
            .filter(
              (n) =>
                (e === `z`
                  ? n.nz === r && Math.abs(n.z - t) < 0.8
                  : n.nx === r && Math.abs(n.x - t) < 0.8) &&
                n.y < _ - 0.05 &&
                n.y + n.h > g + 0.05,
            )
            .map((t) => {
              let n = e === `z` ? t.x : t.z;
              return [n - t.w / 2, n + t.w / 2, t.y, t.y + t.h];
            }),
          x = [[i, c]];
        for (let t of o) {
          if (t === n || v < t.yb || v > t.yt) continue;
          let [r, i, a, o] =
            e === `z` ? [t.z0, t.z1, t.x0, t.x1] : [t.x0, t.x1, t.z0, t.z1];
          y <= r ||
            y >= i ||
            (x = x
              .flatMap(([e, t]) => [
                [e, Math.min(t, a)],
                [Math.max(e, o), t],
              ])
              .filter(([e, t]) => t - e > 0.05));
        }
        let S = r > 0 ? t - d : t,
          C = r > 0 ? t : t + d,
          w = (t, n, r, i, a) => {
            r - n < 0.5 ||
              a - i < 0.05 ||
              (e === `z`
                ? u(t, n, r, i, a, S, C, p?.floors[m] ?? p?.wall)
                : u(t, S, C, i, a, n, r, p?.floors[m] ?? p?.wall));
          };
        x.forEach(([e, t], n) => {
          let r = `${f}-${l}${x.length > 1 ? n : ``}-s${m}`,
            i = b.filter(([n, r]) => n < t && r > e);
          if (!i.length) return w(r, e, t, g, _);
          let a = Math.max(g, Math.min(...i.map((e) => e[2]))),
            o = Math.min(_, Math.max(...i.map((e) => e[3])));
          (w(`${r}-sill`, e, t, g, a), w(`${r}-head`, e, t, o, _));
          let s = e;
          (i
            .sort((e, t) => e[0] - t[0])
            .forEach(([e, t], n) => {
              (w(`${r}-j${n}`, s, Math.max(s, e), a, o), (s = Math.max(s, t)));
            }),
            w(`${r}-j${i.length}`, s, t, a, o));
        });
      }
    for (let e = 1; e < m.length; e++) {
      let t = m[e],
        r = e === m.length - 1,
        i = r ? `${f}-roof` : `${f}-f${e}-floor`,
        a = t - (r ? 0.25 : 0.22),
        o = r ? t + 0.02 : t + 0.03,
        c = (s?.holes ?? [])
          .filter((e) => Math.abs(e.y - t) < 0.06)
          .map((e) => e.rect);
      c.length
        ? L([n.x0, n.z0, n.x1, n.z1], c).forEach(([e, t, n, r], s) =>
            u(`${i}-${s}`, e, n, a, o, t, r, p?.deck),
          )
        : u(i, n.x0, n.x1, a, o, n.z0, n.z1, p?.deck);
    }
  }
  return c;
}
function L(e, t) {
  let n = [
      ...new Set([
        e[1],
        e[3],
        ...t.flatMap((e) => [e[1], e[3]]).filter((t) => t > e[1] && t < e[3]),
      ]),
    ].sort((e, t) => e - t),
    r = [];
  for (let i = 0; i < n.length - 1; i++) {
    let a = n[i],
      o = n[i + 1],
      s = (a + o) / 2,
      c = t.filter((e) => e[1] < s && e[3] > s).sort((e, t) => e[0] - t[0]),
      l = e[0];
    for (let e of c)
      (e[0] - l > 0.05 && r.push([l, a, e[0], o]), (l = Math.max(l, e[2])));
    e[2] - l > 0.05 && r.push([l, a, e[2], o]);
  }
  return r.filter((e) => e[3] - e[1] > 0.05);
}
