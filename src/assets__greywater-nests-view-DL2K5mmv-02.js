// assets__greywater-nests-view-DL2K5mmv 02 — math
// Lines 273-841 of readable/assets__greywater-nests-view-DL2K5mmv.pretty.js (statement-aligned).
function H() {
  let e = new m(),
    t = [],
    r = [],
    c = [],
    l = [],
    d = { g: e, colliders: t, panels: r, ladders: c, perches: l };
  function f(t, n, r, i, a, o, s = e) {
    let c = new u(t, n);
    return (
      c.position.set(r, i, a),
      (c.rotation.y = o),
      (c.castShadow = c.receiveShadow = !0),
      s.add(c),
      c
    );
  }
  function p(e, t, n, r, i, a, o) {
    let s = oe(o);
    if (s < 0) throw Error(`nest colliders need quarter-turn rotations`);
    let [c, l] = s % 2 ? [n / 2, e / 2] : [e / 2, n / 2];
    return [r - c, i, a - l, r + c, i + t, a + l];
  }
  ((d.collider = (e, n = `concrete`) => {
    t.push({ aabb: e.map((e) => +e.toFixed(3)), surface: n });
  }),
    (d.deco = (e, t, r, i, a = 0, o = 0, s = 0, c = {}) => {
      let l = c.geo ?? (c.round ? new ne(e, t, r, 1, c.round) : new n(e, t, r));
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
    (d.panel = (e, n, i, a, o = 0, s = 0, c = 0, l = {}) => {
      let u = d.deco(e, n, i, a, o, s, c, l),
        f = p(e, n, i, o, s, c, l.ry ?? 0),
        m = `p${r.length}`;
      return (
        (u.userData.panelId = m),
        r.push({
          id: m,
          aabb: f.map((e) => +e.toFixed(3)),
          material: l.material ?? `timber`,
          mesh: u,
        }),
        t.push({
          aabb: f.map((e) => +e.toFixed(3)),
          surface: l.surface ?? W(l.material ?? `timber`),
          panel: m,
        }),
        u
      );
    }),
    (d.wall = (i, a, o, s, c, l, f, p, m = [], h = {}) => {
      let g = [
          ...new Set([
            o,
            s,
            ...m.flatMap(([e, t]) => [Math.max(o, e), Math.min(s, t)]),
          ]),
        ].sort((e, t) => e - t),
        _ = [];
      for (let e = 0; e < g.length - 1; e++) {
        let t = g[e],
          n = g[e + 1],
          r = (t + n) / 2;
        if (n - t < 0.01) continue;
        let o = [[c, l]];
        for (let [e, t, n, i] of m)
          r > e &&
            r < t &&
            (o = o
              .flatMap(([e, t]) => [
                [e, Math.min(t, n)],
                [Math.max(e, i), t],
              ])
              .filter(([e, t]) => t - e > 0.01));
        for (let [e, r] of o)
          _.push(
            i === `x`
              ? [t, e, a - f / 2, n, r, a + f / 2]
              : [a - f / 2, e, t, a + f / 2, r, n],
          );
      }
      let y = _.map(([e, t, r, i, a, o]) => {
          let s = new n(i - e, a - t, o - r);
          return (
            s.translate((e + i) / 2, (t + a) / 2, (r + o) / 2),
            P(s, h.tile ?? 2)
          );
        }),
        b = new u(v(y, !1), p);
      if (((b.castShadow = b.receiveShadow = !0), e.add(b), h.material)) {
        let e = `p${r.length}`,
          n = _.reduce(
            (e, t) =>
              [0, 1, 2]
                .map((n) => Math.min(e[n], t[n]))
                .concat([3, 4, 5].map((n) => Math.max(e[n], t[n]))),
            [1e9, 1e9, 1e9, -1e9, -1e9, -1e9],
          );
        ((b.userData.panelId = e),
          r.push({
            id: e,
            aabb: n.map((e) => +e.toFixed(3)),
            parts: _.map((e) => e.map((e) => +e.toFixed(3))),
            material: h.material,
            mesh: b,
          }));
        for (let n of _)
          t.push({
            aabb: n.map((e) => +e.toFixed(3)),
            surface: h.surface ?? W(h.material),
            panel: e,
          });
      } else for (let e of _) d.collider(e, h.surface ?? `concrete`);
      return b;
    }),
    (d.cyl = (e, t, n, r, a = 0, o = 0, s = 0, c = {}) => {
      let l = f(
        new i(e, t, n, c.seg ?? 14, 1, c.open ?? !1),
        r,
        a,
        o + n / 2,
        s,
        c.ry ?? 0,
        c.parent,
      );
      if (c.solid) {
        let r = Math.max(e, t) * (c.hull ?? 0.9);
        d.collider([a - r, o, s - r, a + r, o + n, s + r], c.solid);
      }
      return l;
    }),
    (d.strut = (t, n, r, a, o = 6) => {
      let s = new b(...t),
        c = new b(...n),
        l = s.distanceTo(c),
        d = new u(new i(r, r, l, o), a);
      return (
        d.position.copy(s).add(c).multiplyScalar(0.5),
        d.quaternion.setFromUnitVectors(
          new b(0, 1, 0),
          c.clone().sub(s).normalize(),
        ),
        (d.castShadow = !0),
        (d.receiveShadow = !0),
        e.add(d),
        d
      );
    }),
    (d.beam = (t, r, i, a, o) => {
      let s = new b(...t),
        c = new b(...r),
        l = s.distanceTo(c),
        d = new u(new n(i, l, a), o);
      return (
        d.position.copy(s).add(c).multiplyScalar(0.5),
        d.quaternion.setFromUnitVectors(
          new b(0, 1, 0),
          c.clone().sub(s).normalize(),
        ),
        (d.castShadow = d.receiveShadow = !0),
        e.add(d),
        d
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
    (d.spiral = (e, t, r, i, a, o, s, c, l = {}) => {
      let u = Math.max(2, Math.ceil((o - a) / (l.rise ?? 0.19) - 1e-6)),
        p = (o - a) / u,
        m = l.step ?? 0.42;
      for (let o = 0; o < u; o++) {
        let u = s + m * (o + 0.5),
          h = (r + i) / 2,
          g = a + p * (o + 1),
          _ = i - r,
          v = h * m + 0.12,
          y = f(
            new n(_, 0.06, v),
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
          d.cyl(r + 0.02, r + 0.02, o - a + 1, l.postMat ?? c, e, a, t, {
            seg: 10,
          }),
        s + m * u
      );
    }),
    (d.ladder = (t, n, r, i, a, s, l = {}) => {
      let f = l.w ?? 0.45,
        p = Math.cos(a),
        m = -Math.sin(a);
      for (let e of [-1, 1])
        d.strut(
          [t + (p * e * f) / 2, r, n + (m * e * f) / 2],
          [t + (p * e * f) / 2, i + (l.over ?? 1), n + (m * e * f) / 2],
          0.022,
          s,
        );
      for (let e = r + 0.3; e < i + 0.05; e += 0.3)
        d.strut(
          [t - (p * f) / 2, e, n - (m * f) / 2],
          [t + (p * f) / 2, e, n + (m * f) / 2],
          0.014,
          s,
          4,
        );
      if (l.cage)
        for (let c = r + 2.4; c < i; c += 0.9) {
          let r = -Math.sin(a),
            i = -Math.cos(a),
            l = new u(new o(0.36, 0.015, 3, 8, Math.PI), s);
          (l.position.set(t + r * 0.36, c, n + i * 0.36),
            l.rotation.set(Math.PI / 2, 0, a),
            e.add(l));
        }
      c.push({
        x: +t.toFixed(2),
        z: +n.toFixed(2),
        y0: +r.toFixed(2),
        y1: +i.toFixed(2),
        facing: +a.toFixed(3),
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
    (d.sandbags = (n, i, a, o, s, c, l = {}) => {
      let u = Math.abs(a - n) > Math.abs(o - i),
        d = Math.hypot(a - n, o - i),
        p = 0.6,
        h = 0.15,
        g = l.depth ?? 0.4,
        _ = new m();
      e.add(_);
      let v = D(l.seed ?? Math.round(n * 31 + i * 17 + s * 7)),
        y = l.tones ?? [9076064, 8221013, 9799782, 7300688];
      for (let e = 0; e < c; e++) {
        let t = ((e % 2) * p) / 2,
          r = Math.ceil((d + t) / p);
        for (let c = 0; c < r; c++) {
          let r = Math.max(0, c * p - t),
            l = Math.min(d, (c + 1) * p - t);
          if (l - r < 0.15) continue;
          let m = (r + l) / 2 / d,
            b = n + (a - n) * m,
            x = i + (o - i) * m,
            S = l - r - 0.02,
            C = f(
              ae(u ? S : g, h, u ? g : S, u),
              k(y[Math.floor(v() * y.length)], 0.97),
              b + (v() - 0.5) * 0.03,
              s + h * (e + 0.5),
              x + (v() - 0.5) * 0.03,
              (v() - 0.5) * 0.06,
              _,
            );
          C.userData.bag = !0;
        }
      }
      let b = c * h,
        x = u
          ? [Math.min(n, a), s, i - g / 2, Math.max(n, a), s + b, i + g / 2]
          : [n - g / 2, s, Math.min(i, o), n + g / 2, s + b, Math.max(i, o)],
        S = `p${r.length}`;
      return (
        (_.userData.panelId = S),
        r.push({
          id: S,
          aabb: x.map((e) => +e.toFixed(3)),
          material: `sandbag`,
          mesh: _,
        }),
        t.push({
          aabb: x.map((e) => +e.toFixed(3)),
          surface: `sand`,
          panel: S,
        }),
        b
      );
    }),
    (d.sheet = (t, n, r = {}) => {
      let i = r.seg ?? 8,
        o = r.sag ?? 0.3,
        [s, c, l, d] = t.map((e) => new b(...e)),
        f = [],
        p = [],
        m = [],
        h = r.repeat ?? [s.distanceTo(c) / 2, s.distanceTo(d) / 2],
        g = D(r.seed ?? 3);
      for (let e = 0; e <= i; e++)
        for (let t = 0; t <= i; t++) {
          let n = t / i,
            a = e / i,
            u = s.clone().lerp(c, n).lerp(d.clone().lerp(l, n), a);
          ((u.y -=
            o * Math.sin(Math.PI * n) * Math.sin(Math.PI * a) +
            (r.rumple ?? 0.05) *
              (g() - 0.5) *
              Math.sin(Math.PI * n) *
              Math.sin(Math.PI * a)),
            f.push(u.x, u.y, u.z),
            p.push(n * h[0], a * h[1]));
        }
      for (let e = 0; e < i; e++)
        for (let t = 0; t < i; t++) {
          let n = e * (i + 1) + t;
          m.push(n, n + 1, n + i + 1, n + 1, n + i + 2, n + i + 1);
        }
      let v = new a();
      (v.setAttribute(`position`, new _(f, 3)),
        v.setAttribute(`uv`, new _(p, 2)),
        v.setIndex(m),
        v.computeVertexNormals());
      let y = new u(v, n);
      return ((y.castShadow = y.receiveShadow = !0), e.add(y), y);
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
      l.push({
        x: +e.toFixed(2),
        y: +t.toFixed(2),
        z: +n.toFixed(2),
        yaw: +r.toFixed(3),
        stance: i,
      });
    }));
  function h() {
    let e = w + 0.05,
      n = { prone: C[2], crouch: C[1], stand: C[0] },
      r = (e, n, r) =>
        t.some(
          (t) =>
            Math.abs(t.aabb[4] - n) < 0.06 &&
            e >= t.aabb[0] &&
            e <= t.aabb[3] &&
            r >= t.aabb[2] &&
            r <= t.aabb[5],
        );
    for (let i of l)
      for (let a = 0; a < 24; a++) {
        let a = 0,
          o = 0;
        for (let r of t) {
          let t = r.aabb;
          if (t[4] <= i.y + 0.05 || t[1] >= i.y + n[i.stance]) continue;
          let s = Math.max(t[0], Math.min(i.x, t[3])),
            c = Math.max(t[2], Math.min(i.z, t[5])),
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
    (d.finish = ({ size: n, footprint: i, name: a } = {}) => {
      (h(), e.updateMatrixWorld(!0));
      let o = new Set();
      for (let e of r) e.mesh.traverse((e) => o.add(e));
      let d = new Map(),
        f = [];
      e.traverse((e) => {
        if (!e.isMesh || o.has(e) || e.userData.noMerge) return;
        let t = e.material;
        d.has(t) || d.set(t, []);
        let n = e.geometry.index
          ? e.geometry.toNonIndexed()
          : e.geometry.clone();
        for (let e of Object.keys(n.attributes))
          [`position`, `normal`, `uv`].includes(e) || n.deleteAttribute(e);
        (n.attributes.uv ||
          n.setAttribute(
            `uv`,
            new _(new Float32Array(n.attributes.position.count * 2), 2),
          ),
          n.applyMatrix4(e.matrixWorld),
          d.get(t).push(n),
          f.push(e));
      });
      for (let e of f) e.parent.remove(e);
      let p = new m();
      p.name = `static`;
      for (let [e, t] of d) {
        let n = v(t, !1),
          r = new u(n, e);
        ((r.castShadow = !(e.transparent && !e.alphaTest)),
          (r.receiveShadow = !0),
          p.add(r));
      }
      let g = (e) => {
        for (let t of [...e.children])
          (g(t), t.isGroup && !t.children.length && t !== p && e.remove(t));
      };
      (g(e), e.add(p));
      for (let e of r)
        if (e.mesh.isGroup && e.mesh.children.length > 1) {
          let t = new Map();
          e.mesh.updateMatrixWorld(!0);
          for (let n of e.mesh.children) {
            if (!n.isMesh) continue;
            t.has(n.material) || t.set(n.material, []);
            let e = n.geometry.index
              ? n.geometry.toNonIndexed()
              : n.geometry.clone();
            (e.applyMatrix4(n.matrix), t.get(n.material).push(e));
          }
          e.mesh.clear();
          for (let [n, r] of t) {
            let t = new u(v(r, !1), n);
            ((t.castShadow = t.receiveShadow = !0), e.mesh.add(t));
          }
        }
      let y = new s().setFromObject(e).getSize(new b()),
        x = c.length
          ? e.userData.stairs === !1
            ? `ladder`
            : (e.userData.access ?? `mixed`)
          : `stairs`;
      return (
        (e.name = a ?? `nest`),
        Object.assign(e.userData, {
          size: n ?? [+y.x.toFixed(1), +y.y.toFixed(1), +y.z.toFixed(1)],
          footprint: i ?? [+y.x.toFixed(1), +y.z.toFixed(1)],
          colliders: t,
          panels: r.map(({ id: e, aabb: t, parts: n, material: r }) =>
            n
              ? { id: e, aabb: t, parts: n, material: r }
              : { id: e, aabb: t, material: r },
          ),
          ladders: c,
          perches: l,
          access: x,
          drawCalls:
            p.children.length +
            r.reduce(
              (e, t) => e + (t.mesh.isMesh ? 1 : t.mesh.children.length),
              0,
            ),
        }),
        e
      );
    }),
    d
  );
}
