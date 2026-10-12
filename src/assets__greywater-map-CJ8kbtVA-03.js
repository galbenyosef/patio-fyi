// assets__greywater-map-CJ8kbtVA 03 — math
// Lines 51965-52199 of readable/assets__greywater-map-CJ8kbtVA.pretty.js (statement-aligned).
function z(e, t = 0) {
  let [n, , r] = le[e.key]?.size ?? [30, 20, 30],
    [i, a] = e.q % 2 ? [r / 2, n / 2] : [n / 2, r / 2];
  return [e.x - i - t, e.z - a - t, e.x + i + t, e.z + a + t];
}
var pe = (e, t) => Math.max(e[0] - t[2], t[0] - e[2], e[1] - t[3], t[1] - e[3]),
  me = I.flatMap((e) => [z(e, 2), ...e.keep]),
  he = (e) =>
    Math.abs((e[0] + e[2]) / 2) >= 134 || Math.abs((e[1] + e[3]) / 2) >= 96;
function ge(e) {
  return me.some((t) => pe(e, t) < 1) || (he(e) && r(e));
}
var _e = (e, n, r = 0) =>
  I.some((t) => {
    let i = z(t, r);
    return e > i[0] && e < i[2] && n > i[1] && n < i[3];
  }) ||
  i.some((i) => {
    let a = t(i, r);
    return e > a[0] && e < a[2] && n > a[1] && n < a[3];
  });
function ve(e) {
  let t = (e) => w(e) || ge(e);
  if (!t(e)) return !1;
  for (let n = 0.5; n <= 4.5; n += 0.5)
    for (let [r, i] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ])
      if (!t([e[0] + r * n, e[1] + i * n, e[2] + r * n, e[3] + i * n]))
        return [r * n, i * n];
  return null;
}
function ye(e, t) {
  let n = [];
  ((e.noSpawn ??= []), (e.setpieces = []));
  for (let t of I) {
    let r = le[t.key];
    if (!r) continue;
    let i = (t.q * Math.PI) / 2;
    for (let [e, i] of r.boxes.entries()) {
      let [r, a] = L(t.q, i[0], i[2]),
        [o, s] = L(t.q, i[3], i[5]);
      n.push({
        id: `setpiece-${t.key}-${e}`,
        aabb: [
          t.x + Math.min(r, o),
          24 + i[1],
          t.z + Math.min(a, s),
          t.x + Math.max(r, o),
          24 + i[4],
          t.z + Math.max(a, s),
        ].map(R),
        surface: `concrete`,
        pen: y[t.key]?.boxes[e] ?? `concrete`,
      });
    }
    for (let [e, r] of (ue[t.key] ?? []).entries()) {
      let [i, a] = L(t.q, r[0], r[2]),
        [o, s] = L(t.q, r[3], r[5]);
      n.push({
        id: `setpiece-${t.key}-x${e}`,
        aabb: [
          t.x + Math.min(i, o),
          24 + r[1],
          t.z + Math.min(a, s),
          t.x + Math.max(i, o),
          24 + r[4],
          t.z + Math.max(a, s),
        ].map(R),
        surface: `concrete`,
        pen: y[t.key]?.solids[e] ?? `concrete`,
      });
    }
    for (let n of A[t.key] ?? []) {
      let [r, i] = L(t.q, n.x, n.z);
      (e.ladders ??= []).push({
        setpiece: t.key,
        x: R(t.x + r),
        z: R(t.z + i),
        y0: R(24 + n.y0),
        y1: R(24 + n.y1),
        facing: R(n.facing + (t.q * Math.PI) / 2),
      });
    }
    for (let [e, r] of (fe[t.key] ?? []).entries()) {
      let [i, a] = L(t.q, r[0], r[2]),
        [o, s] = L(t.q, r[3], r[5]);
      n.push({
        id: `setpiece-${t.key}-fill${e}`,
        aabb: [
          t.x + Math.min(i, o),
          24 + r[1],
          t.z + Math.min(a, s),
          t.x + Math.max(i, o),
          24 + r[4],
          t.z + Math.max(a, s),
        ].map(R),
        surface: `concrete`,
      });
    }
    for (let [e, a] of r.ramps.entries()) {
      let [r, o] = L(t.q, a.x, a.z),
        s = a.yaw + i,
        c = Math.cos(s),
        l = Math.sin(s),
        u = Math.max(a.ramp.y, a.ramp.y + a.ramp.rise) + 24,
        d = {
          x: R(t.x + r),
          z: R(t.z + o),
          yaw: R(s),
          hx: a.hx,
          hz: a.hz,
          y0: R(a.y0 + 24),
          y1: R(u),
          ramp: { ...a.ramp, y: R(a.ramp.y + 24) },
          thickness: a.thickness,
        },
        f = [1 / 0, d.y0, 1 / 0, -1 / 0, u, -1 / 0];
      for (let [e, t] of [
        [-d.hx, -d.hz],
        [d.hx, -d.hz],
        [d.hx, d.hz],
        [-d.hx, d.hz],
      ]) {
        let n = d.x + c * e + l * t,
          r = d.z - l * e + c * t;
        ((f[0] = Math.min(f[0], n)),
          (f[3] = Math.max(f[3], n)),
          (f[2] = Math.min(f[2], r)),
          (f[5] = Math.max(f[5], r)));
      }
      n.push({
        id: `setpiece-${t.key}-ramp-${e}`,
        aabb: f.map(R),
        obb: d,
        surface: `concrete`,
      });
    }
    let a = z(t, 1),
      o = (e, t) => e > a[0] && e < a[2] && t > a[1] && t < a[3],
      s = (e) =>
        /^(avenue|cross)-/.test(String(e).replace(/^demo-/, ``)) ||
        /^(rail-|plaza-)/.test(String(e));
    ((e.objects = e.objects.filter(
      (e) =>
        s(e.id) ||
        e.labPanel ||
        e.kind !== `box` ||
        e.sx > 60 ||
        e.sz > 60 ||
        !o(e.x, e.z),
    )),
      (e.colliderDefs = e.colliderDefs.filter(
        (e) =>
          !e.aabb ||
          s(e.id) ||
          /-lab-\d/.test(e.id) ||
          e.aabb[3] - e.aabb[0] > 60 ||
          e.aabb[5] - e.aabb[2] > 60 ||
          !o((e.aabb[0] + e.aabb[3]) / 2, (e.aabb[2] + e.aabb[5]) / 2),
      )),
      (e.props = (e.props ?? []).filter((e) => !o(e.x, e.z))),
      (e.signs = (e.signs ?? []).filter((e) => !o(e.x, e.z))));
    for (let t of [`lights`, `fixtureSpills`, `shelters`])
      Array.isArray(e[t]) &&
        (e[t] = e[t].filter((e) => {
          let t = Array.isArray(e.pos) ? [e.pos[0], e.pos[2]] : [e.x, e.z];
          return !o(t[0], t[1]);
        }));
    e.setpieces.push({
      key: t.key,
      letter: t.letter,
      x: t.x,
      y: 24,
      z: t.z,
      rotY: i,
    });
  }
  return (e.colliderDefs.push(...n), e);
}
var be = (e) => (x[e] ?? 0) + ((x[e] ?? 0) >= 2 ? 2 : 0),
  xe = (e, t) => {
    let n = Math.imul((e * 73856093) ^ (t * 19349663), 2654435761) >>> 0;
    return ((n ^= n >>> 15), (Math.imul(n, 2246822519) >>> 0) / 4294967296);
  },
  Se = [-102, 0, 102],
  Ce = [-140, 140],
  B = 3.5,
  we = 30,
  V = 5.5,
  Te = 2,
  Ee = [];
for (let e = -10; e <= 10; e += 2)
  for (let t = -10; t <= 10; t += 2) Ee.push([t, e]);
Ee.sort(
  (e, t) => Math.hypot(...e) - Math.hypot(...t) || e[0] - t[0] || e[1] - t[1],
);
function H(e, t, n, [r, i]) {
  let a = h[e],
    o = a.ext ?? [-a.W / 2, -a.D / 2, a.W / 2, a.D / 2],
    s = 1 / 0,
    c = 1 / 0,
    l = -1 / 0,
    u = -1 / 0;
  for (let [e, a] of [
    [o[0], o[1]],
    [o[2], o[1]],
    [o[0], o[3]],
    [o[2], o[3]],
  ]) {
    let o = t + e * i + a * r,
      d = n - e * r + a * i;
    ((s = Math.min(s, o)),
      (l = Math.max(l, o)),
      (c = Math.min(c, d)),
      (u = Math.max(u, d)));
  }
  return [s, c, l, u];
}
var U = (e, t, n) =>
    Math.hypot(
      Math.max(e[0] - t, 0, t - e[2]),
      Math.max(e[1] - n, 0, n - e[3]),
    ),
  De = (e, t) => e[0] < t[2] && e[2] > t[0] && e[1] < t[3] && e[3] > t[1],
  Oe = (e, [t, n], [r, i]) => {
    let a = 1 / 0,
      o = Math.max(1, Math.ceil(Math.hypot(r - t, i - n) / 1.5));
    for (let s = 0; s <= o; s++)
      a = Math.min(a, U(e, t + ((r - t) * s) / o, n + ((i - n) * s) / o));
    return a;
  };
