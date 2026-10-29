// assets__greywater-nests-view-CrDz16Gz 02 — math
// Lines 273-841 of readable/assets__greywater-nests-view-CrDz16Gz.pretty.js (statement-aligned).
function H() {
  let t = new h(),
    n = [],
    a = [],
    s = [],
    u = [],
    d = { g: t, colliders: n, panels: a, ladders: s, perches: u };
  function f(n, r, i, a, o, s, c = t) {
    let l = new e(n, r);
    return (
      l.position.set(i, a, o),
      (l.rotation.y = s),
      (l.castShadow = l.receiveShadow = !0),
      c.add(l),
      l
    );
  }
  function p(e, t, n, r, i, a, o) {
    let s = oe(o);
    if (s < 0) throw Error(`nest colliders need quarter-turn rotations`);
    let [c, l] = s % 2 ? [n / 2, e / 2] : [e / 2, n / 2];
    return [r - c, i, a - l, r + c, i + t, a + l];
  }
  ((d.collider = (e, t = `concrete`) => {
    n.push({ aabb: e.map((e) => +e.toFixed(3)), surface: t });
  }),
    (d.deco = (e, t, n, i, a = 0, o = 0, s = 0, c = {}) => {
      let l = c.geo ?? (c.round ? new ne(e, t, n, 1, c.round) : new r(e, t, n));
      return (
        c.tile && P(l, c.tile, a, o + t / 2, s),
        f(l, i, a, o + t / 2, s, c.ry ?? 0, c.parent)
      );
    }),
    (d.solid = (e, t, n, r, i = 0, a = 0, o = 0, s = {}) => {
      let c = d.deco(e, t, n, r, i, a, o, s);
      return (
        d.collider(p(e, t, n, i, a, o, s.ry ?? 0), s.surface ?? `concrete`),
        c
      );
    }),
    (d.panel = (e, t, r, i, o = 0, s = 0, c = 0, l = {}) => {
      let u = d.deco(e, t, r, i, o, s, c, l),
        f = p(e, t, r, o, s, c, l.ry ?? 0),
        m = `p${a.length}`;
      return (
        (u.userData.panelId = m),
        a.push({
          id: m,
          aabb: f.map((e) => +e.toFixed(3)),
          material: l.material ?? `timber`,
          mesh: u,
        }),
        n.push({
          aabb: f.map((e) => +e.toFixed(3)),
          surface: l.surface ?? W(l.material ?? `timber`),
          panel: m,
        }),
        u
      );
    }),
    (d.wall = (i, o, s, c, l, u, f, p, m = [], h = {}) => {
      let g = [
          ...new Set([
            s,
            c,
            ...m.flatMap(([e, t]) => [Math.max(s, e), Math.min(c, t)]),
          ]),
        ].sort((e, t) => e - t),
        _ = [];
      for (let e = 0; e < g.length - 1; e++) {
        let t = g[e],
          n = g[e + 1],
          r = (t + n) / 2;
        if (n - t < 0.01) continue;
        let a = [[l, u]];
        for (let [e, t, n, i] of m)
          r > e &&
            r < t &&
            (a = a
              .flatMap(([e, t]) => [
                [e, Math.min(t, n)],
                [Math.max(e, i), t],
              ])
              .filter(([e, t]) => t - e > 0.01));
        for (let [e, r] of a)
          _.push(
            i === `x`
              ? [t, e, o - f / 2, n, r, o + f / 2]
              : [o - f / 2, e, t, o + f / 2, r, n],
          );
      }
      let v = _.map(([e, t, n, i, a, o]) => {
          let s = new r(i - e, a - t, o - n);
          return (
            s.translate((e + i) / 2, (t + a) / 2, (n + o) / 2),
            P(s, h.tile ?? 2)
          );
        }),
        b = new e(y(v, !1), p);
      if (((b.castShadow = b.receiveShadow = !0), t.add(b), h.material)) {
        let e = `p${a.length}`,
          t = _.reduce(
            (e, t) =>
              [0, 1, 2]
                .map((n) => Math.min(e[n], t[n]))
                .concat([3, 4, 5].map((n) => Math.max(e[n], t[n]))),
            [1e9, 1e9, 1e9, -1e9, -1e9, -1e9],
          );
        ((b.userData.panelId = e),
          a.push({
            id: e,
            aabb: t.map((e) => +e.toFixed(3)),
            parts: _.map((e) => e.map((e) => +e.toFixed(3))),
            material: h.material,
            mesh: b,
          }));
        for (let t of _)
          n.push({
            aabb: t.map((e) => +e.toFixed(3)),
            surface: h.surface ?? W(h.material),
            panel: e,
          });
      } else for (let e of _) d.collider(e, h.surface ?? `concrete`);
      return b;
    }),
    (d.cyl = (e, t, n, r, i = 0, a = 0, o = 0, s = {}) => {
      let c = f(
        new v(e, t, n, s.seg ?? 14, 1, s.open ?? !1),
        r,
        i,
        a + n / 2,
        o,
        s.ry ?? 0,
        s.parent,
      );
      if (s.solid) {
        let r = Math.max(e, t) * (s.hull ?? 0.9);
        d.collider([i - r, a, o - r, i + r, a + n, o + r], s.solid);
      }
      return c;
    }),
    (d.strut = (n, r, i, a, s = 6) => {
      let c = new o(...n),
        l = new o(...r),
        u = c.distanceTo(l),
        d = new e(new v(i, i, u, s), a);
      return (
        d.position.copy(c).add(l).multiplyScalar(0.5),
        d.quaternion.setFromUnitVectors(
          new o(0, 1, 0),
          l.clone().sub(c).normalize(),
        ),
        (d.castShadow = !0),
        (d.receiveShadow = !0),
        t.add(d),
        d
      );
    }),
    (d.beam = (n, i, a, s, c) => {
      let l = new o(...n),
        u = new o(...i),
        d = l.distanceTo(u),
        f = new e(new r(a, d, s), c);
      return (
        f.position.copy(l).add(u).multiplyScalar(0.5),
        f.quaternion.setFromUnitVectors(
          new o(0, 1, 0),
          u.clone().sub(l).normalize(),
        ),
        (f.castShadow = f.receiveShadow = !0),
        t.add(f),
        f
      );
    }),
    (d.stair = (e, t, n, r, i, a, o, s = {}) => {
      let c = Math.max(1, Math.ceil(Math.abs(i - r) / (s.rise ?? 0.2) - 1e-6)),
        l = (i - r) / c,
        u = s.going ?? 0.27,
        [f, p] = { "+z": [0, 1], "-z": [0, -1], "+x": [1, 0], "-x": [-1, 0] }[
          a
        ],
        m = f !== 0;
      for (let i = 0; i < c; i++) {
        let a = t + f * u * (i + 0.5),
          c = n + p * u * (i + 0.5),
          h = r + l * (i + 1),
          g = s.tread ?? 0.06;
        d.solid(m ? u + 0.01 : e, g, m ? e : u + 0.01, o, a, h - g, c, {
          surface: s.surface ?? `metal`,
        });
      }
      let h = t + f * u * c,
        g = n + p * u * c;
      if (s.stringers !== !1) {
        let a = s.stringerMat ?? o;
        for (let o of [-1, 1]) {
          let s = m ? 0 : o * (e / 2 - 0.04),
            c = m ? o * (e / 2 - 0.04) : 0;
          d.beam(
            [t + s, r - 0.1, n + c],
            [h + s, i - 0.1, g + c],
            0.06,
            0.2,
            a,
          );
        }
      }
      if (s.rails !== !1)
        for (let a of s.railSides ?? [-1, 1]) {
          let u = m ? 0 : (e / 2) * a,
            f = m ? (e / 2) * a : 0,
            p = s.railMat ?? o;
          d.strut([t + u, r + 0.95, n + f], [h + u, i + 0.95, g + f], 0.025, p);
          for (let e = 0; e <= c; e += Math.max(2, Math.round(c / 4))) {
            let i = e / c;
            d.strut(
              [t + u + (h - t) * i, r + l * e, n + f + (g - n) * i],
              [t + u + (h - t) * i, r + l * e + 0.95, n + f + (g - n) * i],
              0.02,
              p,
            );
          }
        }
      return { x: h, z: g, y: i };
    }),
    (d.spiral = (e, t, n, i, a, o, s, c, l = {}) => {
      let u = Math.max(2, Math.ceil((o - a) / (l.rise ?? 0.19) - 1e-6)),
        p = (o - a) / u,
        m = l.step ?? 0.42;
      for (let o = 0; o < u; o++) {
        let u = s + m * (o + 0.5),
          h = (n + i) / 2,
          g = a + p * (o + 1),
          _ = i - n,
          v = h * m + 0.12,
          y = f(
            new r(_, 0.06, v),
            c,
            e + Math.cos(u) * h,
            g - 0.03,
            t - Math.sin(u) * h,
            u,
          );
        y.userData.spiral = !0;
        let b = Math.min(_, v) * 0.5;
        d.collider(
          [
            e + Math.cos(u) * h - b,
            g - 0.06,
            t - Math.sin(u) * h - b,
            e + Math.cos(u) * h + b,
            g,
            t - Math.sin(u) * h + b,
          ],
          l.surface ?? `metal`,
        );
      }
      return (
        l.post !== !1 &&
          d.cyl(n + 0.02, n + 0.02, o - a + 1, l.postMat ?? c, e, a, t, {
            seg: 10,
          }),
        s + m * u
      );
    }),
    (d.ladder = (n, r, a, o, c, l, u = {}) => {
      let f = u.w ?? 0.45,
        p = Math.cos(c),
        m = -Math.sin(c);
      for (let e of [-1, 1])
        d.strut(
          [n + (p * e * f) / 2, a, r + (m * e * f) / 2],
          [n + (p * e * f) / 2, o + (u.over ?? 1), r + (m * e * f) / 2],
          0.022,
          l,
        );
      for (let e = a + 0.3; e < o + 0.05; e += 0.3)
        d.strut(
          [n - (p * f) / 2, e, r - (m * f) / 2],
          [n + (p * f) / 2, e, r + (m * f) / 2],
          0.014,
          l,
          4,
        );
      if (u.cage)
        for (let s = a + 2.4; s < o; s += 0.9) {
          let a = -Math.sin(c),
            o = -Math.cos(c),
            u = new e(new i(0.36, 0.015, 3, 8, Math.PI), l);
          (u.position.set(n + a * 0.36, s, r + o * 0.36),
            u.rotation.set(Math.PI / 2, 0, c),
            t.add(u));
        }
      s.push({
        x: +n.toFixed(2),
        z: +r.toFixed(2),
        y0: +a.toFixed(2),
        y1: +o.toFixed(2),
        facing: +c.toFixed(3),
      });
    }),
    (d.rail = (e, t, n, r, i, a, o = {}) => {
      let s = o.h ?? 1.05,
        c = Math.hypot(n - e, r - t),
        l = Math.max(1, Math.round(c / (o.post ?? 1.5)));
      for (let c = 0; c <= l; c++) {
        let u = c / l,
          f = e + (n - e) * u,
          p = t + (r - t) * u;
        d.strut([f, i, p], [f, i + s, p], o.r ?? 0.03, a);
      }
      (d.strut([e, i + s, t], [n, i + s, r], o.r ?? 0.03, a),
        d.strut(
          [e, i + s * 0.5, t],
          [n, i + s * 0.5, r],
          (o.r ?? 0.03) * 0.8,
          a,
        ),
        o.solid !== !1 &&
          d.collider(
            [
              Math.min(e, n) - 0.04,
              i,
              Math.min(t, r) - 0.04,
              Math.max(e, n) + 0.04,
              i + s,
              Math.max(t, r) + 0.04,
            ],
            o.surface ?? `metal`,
          ));
    }),
    (d.sandbags = (e, r, i, o, s, c, l = {}) => {
      let u = Math.abs(i - e) > Math.abs(o - r),
        d = Math.hypot(i - e, o - r),
        p = 0.6,
        m = 0.15,
        g = l.depth ?? 0.4,
        _ = new h();
      t.add(_);
      let v = D(l.seed ?? Math.round(e * 31 + r * 17 + s * 7)),
        y = l.tones ?? [9076064, 8221013, 9799782, 7300688];
      for (let t = 0; t < c; t++) {
        let n = ((t % 2) * p) / 2,
          a = Math.ceil((d + n) / p);
        for (let c = 0; c < a; c++) {
          let a = Math.max(0, c * p - n),
            l = Math.min(d, (c + 1) * p - n);
          if (l - a < 0.15) continue;
          let h = (a + l) / 2 / d,
            b = e + (i - e) * h,
            x = r + (o - r) * h,
            S = l - a - 0.02,
            C = f(
              ae(u ? S : g, m, u ? g : S, u),
              k(y[Math.floor(v() * y.length)], 0.97),
              b + (v() - 0.5) * 0.03,
              s + m * (t + 0.5),
              x + (v() - 0.5) * 0.03,
              (v() - 0.5) * 0.06,
              _,
            );
          C.userData.bag = !0;
        }
      }
      let b = c * m,
        x = u
          ? [Math.min(e, i), s, r - g / 2, Math.max(e, i), s + b, r + g / 2]
          : [e - g / 2, s, Math.min(r, o), e + g / 2, s + b, Math.max(r, o)],
        S = `p${a.length}`;
      return (
        (_.userData.panelId = S),
        a.push({
          id: S,
          aabb: x.map((e) => +e.toFixed(3)),
          material: `sandbag`,
          mesh: _,
        }),
        n.push({
          aabb: x.map((e) => +e.toFixed(3)),
          surface: `sand`,
          panel: S,
        }),
        b
      );
    }),
    (d.sheet = (n, r, i = {}) => {
      let a = i.seg ?? 8,
        s = i.sag ?? 0.3,
        [l, u, d, f] = n.map((e) => new o(...e)),
        p = [],
        h = [],
        g = [],
        _ = i.repeat ?? [l.distanceTo(u) / 2, l.distanceTo(f) / 2],
        v = D(i.seed ?? 3);
      for (let e = 0; e <= a; e++)
        for (let t = 0; t <= a; t++) {
          let n = t / a,
            r = e / a,
            o = l.clone().lerp(u, n).lerp(f.clone().lerp(d, n), r);
          ((o.y -=
            s * Math.sin(Math.PI * n) * Math.sin(Math.PI * r) +
            (i.rumple ?? 0.05) *
              (v() - 0.5) *
              Math.sin(Math.PI * n) *
              Math.sin(Math.PI * r)),
            p.push(o.x, o.y, o.z),
            h.push(n * _[0], r * _[1]));
        }
      for (let e = 0; e < a; e++)
        for (let t = 0; t < a; t++) {
          let n = e * (a + 1) + t;
          g.push(n, n + 1, n + a + 1, n + 1, n + a + 2, n + a + 1);
        }
      let y = new c();
      (y.setAttribute(`position`, new m(p, 3)),
        y.setAttribute(`uv`, new m(h, 2)),
        y.setIndex(g),
        y.computeVertexNormals());
      let b = new e(y, r);
      return ((b.castShadow = b.receiveShadow = !0), t.add(b), b);
    }),
    (d.drape = (e, t, n, r, i, a, o, s = {}) =>
      d.sheet(
        [
          [e, i, t],
          [n, i, r],
          [n + (s.kick ?? 0), i - a, r + (s.kickz ?? 0)],
          [e + (s.kick ?? 0), i - a, t + (s.kickz ?? 0)],
        ],
        o,
        { sag: s.sag ?? 0.06, rumple: s.rumple ?? 0.12, ...s },
      )),
    (d.perch = (e, t, n, r = 0, i = `crouch`) => {
      u.push({
        x: +e.toFixed(2),
        y: +t.toFixed(2),
        z: +n.toFixed(2),
        yaw: +r.toFixed(3),
        stance: i,
      });
    }));
  function g() {
    let e = w + 0.05,
      t = { prone: C[2], crouch: C[1], stand: C[0] },
      r = (e, t, r) =>
        n.some(
          (n) =>
            Math.abs(n.aabb[4] - t) < 0.06 &&
            e >= n.aabb[0] &&
            e <= n.aabb[3] &&
            r >= n.aabb[2] &&
            r <= n.aabb[5],
        );
    for (let i of u)
      for (let a = 0; a < 24; a++) {
        let a = 0,
          o = 0;
        for (let r of n) {
          let n = r.aabb;
          if (n[4] <= i.y + 0.05 || n[1] >= i.y + t[i.stance]) continue;
          let s = Math.max(n[0], Math.min(i.x, n[3])),
            c = Math.max(n[2], Math.min(i.z, n[5])),
            l = i.x - s,
            u = i.z - c,
            d = Math.hypot(l, u);
          if (d >= e) continue;
          let [f, p] =
            d > 1e-4 ? [l / d, u / d] : [-Math.sin(i.yaw), -Math.cos(i.yaw)];
          ((a += f * (e - d)), (o += p * (e - d)));
        }
        if (!a && !o) break;
        let s = Math.min(0.1, Math.hypot(a, o)) / Math.hypot(a, o),
          c = i.x + a * s,
          l = i.z + o * s;
        if (!r(c, i.y, l)) break;
        ((i.x = +c.toFixed(2)), (i.z = +l.toFixed(2)));
      }
  }
  return (
    (d.finish = ({ size: r, footprint: i, name: c } = {}) => {
      (g(), t.updateMatrixWorld(!0));
      let d = new Set();
      for (let e of a) e.mesh.traverse((e) => d.add(e));
      let f = new Map(),
        p = [];
      t.traverse((e) => {
        if (!e.isMesh || d.has(e) || e.userData.noMerge) return;
        let t = e.material;
        f.has(t) || f.set(t, []);
        let n = e.geometry.index
          ? e.geometry.toNonIndexed()
          : e.geometry.clone();
        for (let e of Object.keys(n.attributes))
          [`position`, `normal`, `uv`].includes(e) || n.deleteAttribute(e);
        (n.attributes.uv ||
          n.setAttribute(
            `uv`,
            new m(new Float32Array(n.attributes.position.count * 2), 2),
          ),
          n.applyMatrix4(e.matrixWorld),
          f.get(t).push(n),
          p.push(e));
      });
      for (let e of p) e.parent.remove(e);
      let _ = new h();
      _.name = `static`;
      for (let [t, n] of f) {
        let r = y(n, !1),
          i = new e(r, t);
        ((i.castShadow = !(t.transparent && !t.alphaTest)),
          (i.receiveShadow = !0),
          _.add(i));
      }
      let v = (e) => {
        for (let t of [...e.children])
          (v(t), t.isGroup && !t.children.length && t !== _ && e.remove(t));
      };
      (v(t), t.add(_));
      for (let t of a)
        if (t.mesh.isGroup && t.mesh.children.length > 1) {
          let n = new Map();
          t.mesh.updateMatrixWorld(!0);
          for (let e of t.mesh.children) {
            if (!e.isMesh) continue;
            n.has(e.material) || n.set(e.material, []);
            let t = e.geometry.index
              ? e.geometry.toNonIndexed()
              : e.geometry.clone();
            (t.applyMatrix4(e.matrix), n.get(e.material).push(t));
          }
          t.mesh.clear();
          for (let [r, i] of n) {
            let n = new e(y(i, !1), r);
            ((n.castShadow = n.receiveShadow = !0), t.mesh.add(n));
          }
        }
      let b = new l().setFromObject(t).getSize(new o()),
        x = s.length
          ? t.userData.stairs === !1
            ? `ladder`
            : (t.userData.access ?? `mixed`)
          : `stairs`;
      return (
        (t.name = c ?? `nest`),
        Object.assign(t.userData, {
          size: r ?? [+b.x.toFixed(1), +b.y.toFixed(1), +b.z.toFixed(1)],
          footprint: i ?? [+b.x.toFixed(1), +b.z.toFixed(1)],
          colliders: n,
          panels: a.map(({ id: e, aabb: t, parts: n, material: r }) =>
            n
              ? { id: e, aabb: t, parts: n, material: r }
              : { id: e, aabb: t, material: r },
          ),
          ladders: s,
          perches: u,
          access: x,
          drawCalls:
            _.children.length +
            a.reduce(
              (e, t) => e + (t.mesh.isMesh ? 1 : t.mesh.children.length),
              0,
            ),
        }),
        t
      );
    }),
    d
  );
}
