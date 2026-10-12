// assets__map-collider-Bdq_bUeN 04 — math
// Lines 1013-1291 of readable/assets__map-collider-Bdq_bUeN.pretty.js (statement-aligned).
function F(e, t, n, r) {
  let { x: i, z: a, y0: o, h: s, rb: c, rt: l } = e,
    u = (l - c) / s,
    d = t[0] - i,
    f = t[1] - o,
    p = t[2] - a,
    [m, h, g] = n,
    _ = c + u * f,
    v = m * m + g * g - u * u * h * h,
    y = 2 * (d * m + p * g - _ * u * h),
    b = d * d + p * p - _ * _,
    x = 1 / 0,
    S = null;
  if (Math.abs(v) > 1e-12) {
    let e = y * y - 4 * v * b;
    if (e >= 0)
      for (let t of [
        (-y - Math.sqrt(e)) / (2 * v),
        (-y + Math.sqrt(e)) / (2 * v),
      ]) {
        if (t < 0 || t > r || t >= x) continue;
        let e = f + t * h;
        if (e < 0 || e > s) continue;
        let n = d + t * m,
          i = p + t * g;
        if (c + u * e <= 0) continue;
        x = t;
        let a = Math.hypot(n, i) || 1;
        S = [n / a, 0, i / a];
      }
  }
  if (h < 0) {
    let e = (s - f) / h;
    if (e >= 0 && e < x && e <= r) {
      let t = d + e * m,
        n = p + e * g;
      t * t + n * n <= l * l && ((x = e), (S = [0, 1, 0]));
    }
  }
  return S
    ? {
        dist: x,
        point: [t[0] + n[0] * x, t[1] + n[1] * x, t[2] + n[2] * x],
        normal: S,
        surface: `wood`,
        pen: `wood`,
        exact: !0,
      }
    : null;
}
function I(e, t) {
  if (e.shotBoxes && !e.shotMesh) {
    let t = `boxes:` + e.id;
    (P(t, e.shotBoxes, e.shotPen ?? e.pen ?? e.surface),
      (e.shotMesh = { key: t, pos: [0, 0, 0], yaw: 0 }));
  }
  if (!e.shotMesh) return {};
  let n = e.shotMesh.key;
  return {
    shotMesh: e.shotMesh,
    onRemoved: () => x(n, t),
    onAdded: () => S(n, t),
  };
}
function L(e, t, n, r) {
  let i = 0,
    a = r,
    o = -1,
    s = 0;
  for (let r = 0; r < 3; r++) {
    if (Math.abs(t[r]) < 1e-9) {
      if (e[r] < n[r] || e[r] > n[r + 3]) return null;
      continue;
    }
    let c = (n[r] - e[r]) / t[r],
      l = (n[r + 3] - e[r]) / t[r],
      u = -1;
    if (c > l) {
      let e = c;
      ((c = l), (l = e), (u = 1));
    }
    if ((c > i && ((i = c), (o = r), (s = u)), l < a && (a = l), i > a))
      return null;
  }
  if (i < 0 || i > r) return null;
  let c = [0, 0, 0];
  return (
    o >= 0 && (c[o] = s),
    {
      point: [e[0] + t[0] * i, e[1] + t[1] * i, e[2] + t[2] * i],
      normal: c,
      dist: i,
      surface: `concrete`,
    }
  );
}
function R(e) {
  let t = e.obb,
    n = Math.cos(t.yaw),
    r = Math.sin(t.yaw),
    i = t.ramp ? Math.max(t.ramp.y, t.ramp.y + t.ramp.rise) : t.y1,
    a = (e, i) => {
      let a = e - t.x,
        o = i - t.z;
      return [n * a - r * o, r * a + n * o];
    },
    o = [1 / 0, t.y0, 1 / 0, -1 / 0, i, -1 / 0];
  for (let [e, i] of [
    [-t.hx, -t.hz],
    [t.hx, -t.hz],
    [t.hx, t.hz],
    [-t.hx, t.hz],
  ]) {
    let a = t.x + n * e + r * i,
      s = t.z - r * e + n * i;
    ((o[0] = Math.min(o[0], a)),
      (o[3] = Math.max(o[3], a)),
      (o[2] = Math.min(o[2], s)),
      (o[5] = Math.max(o[5], s)));
  }
  let s = t.ramp,
    c = s ? s.rise / (s.z1 - s.z0) : 0,
    l = [-t.hx, t.y0, -t.hz, t.hx, i, t.hz],
    u = s
      ? {
          y: s.y,
          start: s.z0,
          end: s.z1,
          rise: s.rise,
          thickness: t.thickness ?? 0,
        }
      : null;
  return {
    id: e.id,
    mask: `static`,
    solid: e.solid ?? !0,
    surface: e.surface ?? `concrete`,
    pen: e.pen,
    aabb: o,
    ...I(e, o),
    ...(e.noPlayer ? { noPlayer: !0 } : {}),
    floorHeight(e, n) {
      let [r, i] = a(e, n);
      return Math.abs(r) > t.hx || Math.abs(i) > t.hz
        ? -1e6
        : s
          ? s.y + Math.max(0, Math.min(1, (i - s.z0) / (s.z1 - s.z0))) * s.rise
          : t.y1;
    },
    floorNormal(e, t, i) {
      let [, o] = a(e, t),
        l = s && o > Math.min(s.z0, s.z1) && o < Math.max(s.z0, s.z1) ? c : 0,
        u = Math.hypot(1, l);
      return ((i[0] = (r * -l) / u), (i[1] = 1 / u), (i[2] = (n * -l) / u), i);
    },
    ...(t.thickness > 0 ? { floorThickness: t.thickness } : {}),
    raycast(t, i, s, c = !1) {
      let [d, f] = a(t[0], t[2]),
        p = [d, t[1], f],
        m = [n * i[0] - r * i[2], i[1], r * i[0] + n * i[2]],
        h = u ? B(p, m, l, u, s) : L(p, m, l, s);
      if (!h) return null;
      if (c && e.shotMesh) {
        let n = O(e.shotMesh, t, i, h.dist, Math.min(s, k(t, i, o)));
        if (n !== void 0) return n && n.dist <= s ? n : null;
      }
      let [g, _, v] = h.normal;
      return (
        (h.normal = [n * g + r * v, _, -r * g + n * v]),
        (h.point = t.map((e, t) => e + i[t] * h.dist)),
        (h.surface = e.surface ?? `concrete`),
        e.pen && (h.pen = e.pen),
        h
      );
    },
  };
}
function z(e) {
  if (e.obb) return R(e);
  let t = e.aabb.slice(),
    n = e.mesh ? i(e.mesh.key, e.mesh.pos, e.mesh.yaw, e.mesh.scale) : null;
  return {
    id: e.id,
    mask: `static`,
    solid: !e.shotOnly,
    ...I(e, t),
    surface: e.surface ?? `concrete`,
    pen: e.pen,
    aabb: t,
    ...(e.movementAabb ? { movementAabb: e.movementAabb.slice() } : {}),
    ...(e.ramp
      ? {
          floorHeight: (t, n) =>
            e.ramp.y +
            Math.max(
              0,
              Math.min(1, (n - e.ramp.start) / (e.ramp.end - e.ramp.start)),
            ) *
              e.ramp.rise,
          ...(e.ramp.thickness > 0 ? { floorThickness: e.ramp.thickness } : {}),
        }
      : {}),
    raycast(r, i, a, o = !1) {
      let s = n
        ? n.raycast(r, i, a)
        : e.ramp
          ? B(r, i, t, e.ramp, a)
          : L(r, i, t, a);
      if (s && o && e.trunk) return F(e.trunk, r, i, a);
      if (s && e.shotMesh && (o || e.shotOnly)) {
        let n = O(e.shotMesh, r, i, s.dist, Math.min(a, k(r, i, t)));
        if (n !== void 0) return n && n.dist <= a ? n : null;
      }
      return s && e.shotOnly
        ? null
        : (s &&
            ((s.surface = e.surface ?? `concrete`), e.pen && (s.pen = e.pen)),
          s);
    },
  };
}
function B(e, t, n, r, i) {
  let a = Math.min(r.start, r.end),
    o = Math.max(r.start, r.end),
    s = [n[2], ...[a, o].filter((e) => e > n[2] && e < n[5]), n[5]],
    c = null;
  for (let l = 0; l < s.length - 1; l++) {
    let u = s[l],
      d = s[l + 1],
      f = (u + d) / 2,
      p = f > a && f < o ? r.rise / (r.end - r.start) : 0,
      m =
        r.y +
        Math.max(0, Math.min(1, (f - r.start) / (r.end - r.start))) * r.rise -
        p * f,
      h = [
        [-1, 0, 0, -n[0]],
        [1, 0, 0, n[3]],
        [0, -1, 0, -n[1]],
        [0, 1, 0, n[4]],
        [0, 0, -1, -u],
        [0, 0, 1, d],
        [0, 1, -p, m],
      ];
    r.thickness > 0 && h.push([0, -1, p, r.thickness - m]);
    let g = 0,
      _ = c?.dist ?? i,
      v = [0, 0, 0],
      y = !1;
    for (let [n, r, i, a] of h) {
      let o = n * t[0] + r * t[1] + i * t[2],
        s = a - n * e[0] - r * e[1] - i * e[2];
      if (Math.abs(o) < 1e-10) {
        if (s < 0) {
          y = !0;
          break;
        }
        continue;
      }
      let c = s / o;
      if (o < 0) {
        if (c > g) {
          g = c;
          let e = Math.hypot(n, r, i);
          v = [n / e, r / e, i / e];
        }
      } else _ = Math.min(_, c);
      if (g > _) {
        y = !0;
        break;
      }
    }
    !y &&
      g >= 0 &&
      g <= _ &&
      (c = { dist: g, point: e.map((e, n) => e + t[n] * g), normal: v });
  }
  return c;
}
