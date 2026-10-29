// assets__greywater-DBp83pSr 03 — map
// Lines 562-761 of readable/assets__greywater-DBp83pSr.pretty.js (statement-aligned).
function x(e, t, n = v, r = !1) {
  let i = t?.objects.find((e) => e.id === n),
    a = e.map.colliders.get(`demo-` + n);
  if (!i || !a) return null;
  let o = a.surface ?? `concrete`,
    s =
      /(?:-f[1-9]\d*-floor|-slab-\d+-[nswe]|-shell-floor-\d+|-upper-main|-upper-landing--?1|-balcony-floor|-roof|-floor|-roof-landing|-roof-tank-cap|-stairwell-cap)$/.test(
        n,
      ) && i.sy < Math.min(i.sx, i.sz),
    l = !s && i.sx < i.sz,
    u = s ? i.sy : Math.min(i.sx, i.sz),
    p = (!s && !l && i.ry) || 0,
    m = Math.cos(p),
    h = Math.sin(p),
    g = t.observationRooms?.some((e) => n.startsWith(e.id + `-`)),
    _ = !y.includes(n),
    b = _ && t.objects.some((e) => e.id === n + `-cap`),
    x = s ? 0.08 : b ? 0 : g ? 0.08 : _ ? Math.min(0.12, i.sy * 0.12) : 0.36,
    S = [...n].reduce((e, t) => (e * 31 + t.charCodeAt(0)) >>> 0, 0),
    C = t.buildings?.some((e) => e.reviewUse && e.breachPanels?.includes(n)),
    w = d({
      seed: e.seed + 410 + (_ ? S : Math.max(0, y.indexOf(n)) * 97),
      width: (s ? i.sx : Math.max(i.sx, i.sz)) - 2 * x,
      height: (s ? i.sz : i.sy) - 2 * x,
      thickness: u,
      border: x,
      unframed: b,
      columns: s
        ? Math.min(10, Math.max(1, Math.ceil(i.sx / 2.5)))
        : C
          ? Math.ceil(Math.max(i.sx, i.sz) / 0.65)
          : _
            ? Math.min(12, Math.max(2, Math.ceil(Math.max(i.sx, i.sz) / 2)))
            : g
              ? i.sy < 1
                ? 8
                : 4
              : n === `mill-store-north`
                ? 16
                : 10,
      rows: s
        ? Math.min(10, Math.max(1, Math.ceil(i.sz / 2.5)))
        : C
          ? 4
          : _
            ? Math.min(4, Math.max(1, Math.ceil(i.sy / 1.3)))
            : g
              ? i.sy < 1
                ? 1
                : 3
              : 4,
      strength: s ? 1.5 : n === `mill-store-north` ? 1.35 : 1,
    }),
    T = s ? [i.x, i.y + i.sy / 2, i.z + i.sz / 2 - x] : [i.x, i.y + x, i.z],
    E = [],
    D = t.buildings?.find(
      (e) => e.demolitionPanels?.includes(n) || e.demolitionAttachments?.[n],
    ),
    O = n.match(/^(tower-\d+)-con-(\d+)-sill-(.+)$/),
    k = n.endsWith(`-upper-main`)
      ? t.objects
          .filter((e) => e.id === n.replace(`-upper-main`, `-room-floor-1`))
          .map((e) => e.id)
      : (D?.demolitionAttachments?.[n] ??
        (O
          ? t.objects
              .filter(
                (e) =>
                  e.id === O[1] + `-glass-` + O[3] + `-` + O[2] ||
                  e.id.startsWith(O[1] + `-mull-` + O[3] + `-` + O[2] + `-`),
              )
              .map((e) => e.id)
          : [])),
    A = k.map((t) => e.map.colliders.get(`demo-` + t)).filter(Boolean),
    j = (e) => [e[0] * m + e[2] * h, e[1], -e[0] * h + e[2] * m],
    M = (e) => [e[0] * m - e[2] * h, e[1], e[0] * h + e[2] * m],
    N = (e) =>
      s
        ? [T[0] + e[0], T[1] + e[2], T[2] - e[1]]
        : l
          ? [T[0] + e[2], T[1] + e[1], T[2] - e[0]]
          : p
            ? j(e).map((e, t) => e + T[t])
            : e.map((e, t) => e + T[t]),
    P = (e) =>
      s
        ? [e[0] - T[0], T[2] - e[2], e[1] - T[1]]
        : l
          ? [-(e[2] - T[2]), e[1] - T[1], e[0] - T[0]]
          : p
            ? M(e.map((e, t) => e - T[t]))
            : e.map((e, t) => e - T[t]),
    F = (e) =>
      s ? [e[0], e[2], -e[1]] : l ? [e[2], e[1], -e[0]] : p ? j(e) : e.slice(),
    I = (e) =>
      s ? [e[0], -e[2], e[1]] : l ? [-e[2], e[1], e[0]] : p ? M(e) : e.slice();
  function L(t) {
    let n = N([t.x, t.y, t.z]),
      r = e.map.getHeight(n[0], n[2]),
      i = [n[0], n[1] + 0.3, n[2]],
      a = [0, -1, 0],
      o = Math.max(0, i[1] - r);
    for (let t of e.map.colliders.queryRay(i, a, o)) {
      if (!/(?:floor|slab|upper-main|landing|roof|stair)/.test(t.id)) continue;
      let e = t.raycast?.(i, a, o);
      e && e.normal[1] > 0.5 && (r = Math.max(r, e.point[1]));
    }
    return r - T[1] + 0.12;
  }
  e.map.removeCollider(a.id);
  function R() {
    let t = w.facade.hp.every((e) => e > 0);
    for (let n of A) t ? e.map.addCollider(n) : e.map.removeCollider(n.id);
    for (let t of E) e.map.removeCollider(t);
    if (((E.length = 0), _ && w.facade.hp.every((e) => e > 0))) {
      (e.map.addCollider(a), E.push(a.id));
      return;
    }
    let r = (e) => e.map((e) => Math.round(e * 1e6)).join(`,`),
      i = new Set(
        w.facade.def.cells
          .filter((e) => w.facade.hp[e.id] === 0)
          .flatMap((e) => e.polygon.map(r)),
      );
    for (let t of [
      ...w.facade.def.cells.filter((e) => w.facade.hp[e.id] > 0),
      ...w.frame,
    ]) {
      let s = `fracture-` + n + `-` + t.id,
        l = t.polygon,
        d = l.flatMap((e) => [N([...e, -u / 2]), N([...e, u / 2])]),
        p = [0, 1, 2]
          .map((e) => Math.min(...d.map((t) => t[e])))
          .concat([0, 1, 2].map((e) => Math.max(...d.map((t) => t[e])))),
        m = typeof t.id == `number` && l.some((e) => i.has(r(e)));
      if (
        (e.map.addCollider({
          id: s,
          aabb: p,
          solid: !0,
          noPlayer: m,
          surface: o,
          raycast(e, n, r) {
            let i = c(t, u, P(e), I(n), r);
            return (
              i &&
                ((i.point = N(i.point)),
                (i.normal = F(i.normal)),
                (i.surface = o),
                a.pen && (i.pen = a.pen)),
              i
            );
          },
        }),
        E.push(s),
        m)
      )
        for (let [t, n] of f(l).entries()) {
          let r = n.flatMap((e) => [N([...e, -u / 2]), N([...e, u / 2])]),
            i = [0, 1, 2]
              .map((e) => Math.min(...r.map((t) => t[e])))
              .concat([0, 1, 2].map((e) => Math.max(...r.map((t) => t[e])))),
            a = s + `-band-` + t;
          (e.map.addCollider({
            id: a,
            aabb: i,
            solid: !0,
            surface: o,
            raycast: () => null,
          }),
            E.push(a));
        }
    }
  }
  return (
    R(),
    {
      id: n,
      wall: w,
      origin: T,
      sync: R,
      object: i,
      rotated: l,
      yaw: p,
      horizontal: s,
      toWorld: N,
      toLocal: P,
      dirToWorld: F,
      upper: g,
      debrisFloor: L,
      attachments: k,
      masonryFrame: s || !!D?.reviewUse,
      dispose() {
        for (let t of E) e.map.removeCollider(t);
        e.map.addCollider(a);
        for (let t of A) e.map.addCollider(t);
      },
    }
  );
}
