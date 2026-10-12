// assets__greywater-signs-view-b4Ps_Ogz 05 — math
// Lines 1176-1511 of readable/assets__greywater-signs-view-b4Ps_Ogz.pretty.js (statement-aligned).
var ie = new w(0, 1, 0),
  F = (e) => new w(...e),
  I = (e, t, n) => Math.max(t, Math.min(n, e)),
  L = `#596269`,
  R = `#252e33`,
  z = `#929187`,
  B = `#70503a`,
  V = `#b2bac0`,
  ae = new WeakMap(),
  oe = 0.04,
  se = class {
    constructor(e) {
      ((this.spec = e),
        (this.parts = new Map()),
        (this.frame = new a()),
        (this.faces = []),
        (this.fixtures = []),
        (this.movementParts = []),
        (this.collisionRole = `solid`),
        (this.access = {
          groundY: 0,
          ladders: [],
          platforms: [],
          rails: [],
          entryGaps: [],
          solids: [],
        }));
    }
    add(e, t = `paint`, n = L, i = [0, 0, 0], o = [0, 0, 0]) {
      let s = new a()
          .compose(F(i), new p().setFromEuler(new g(...o)), new w(1, 1, 1))
          .premultiply(this.frame),
        c = ne(e, s, this.collisionRole, t);
      if ((c && this.movementParts.push(c), e.index)) {
        let t = e.toNonIndexed();
        (e.dispose(), (e = t));
      }
      (e.deleteAttribute(`uv`), e.applyMatrix4(s));
      let l = new d(n),
        u = new Float32Array(e.attributes.position.count * 3);
      for (let e = 0; e < u.length; e += 3)
        ((u[e] = l.r), (u[e + 1] = l.g), (u[e + 2] = l.b));
      (e.setAttribute(`color`, new r(u, 3)),
        this.parts.has(t) || this.parts.set(t, []),
        this.parts.get(t).push(e));
    }
    box(e, n, r, i, a, o, s = `paint`, c = L, l = [0, 0, 0]) {
      this.add(new t(e, n, r), s, c, [i, a, o], l);
    }
    cyl(e, t, n, r, a, o, s = `metal`, c = L, l = [0, 0, 0], u = 12) {
      this.add(new i(e, t, n, u), s, c, [r, a, o], l);
    }
    ball(e, t, n, r, i = `lamp`, a = `#ffe5a2`) {
      this.add(new C(e, 8, 6), i, a, [t, n, r]);
    }
    beam(e, n, r = 0.08, a = `metal`, o = L, s = !1) {
      let c = F(e),
        l = F(n),
        u = l.clone().sub(c),
        d = u.length();
      if (d < 1e-4) return;
      let f = s ? new i(r / 2, r / 2, d, 8) : new t(r, d, r),
        m = new p().setFromUnitVectors(ie, u.normalize());
      (f.applyQuaternion(m),
        (f.userData.signRotation = m.toArray()),
        this.add(f, a, o, c.add(l).multiplyScalar(0.5).toArray()));
    }
    line(e, t = 0.045, n = `neon`, r = this.spec.palette.accent, i = !1) {
      let a = this.collisionRole;
      a === `solid` &&
        e.length > 8 &&
        t < 0.12 &&
        Math.min(...e.map((e) => e[1])) > 2 &&
        (this.collisionRole = `detail`);
      for (let i = 1; i < e.length; i++) this.beam(e[i - 1], e[i], t, n, r, !0);
      (i && this.beam(e.at(-1), e[0], t, n, r, !0), (this.collisionRole = a));
    }
    arc(
      e,
      t,
      n,
      r,
      i,
      a = 0,
      o = Math.PI * 2,
      s = 0.04,
      c = `neon`,
      l = this.spec.palette.accent,
      u = `xy`,
    ) {
      let d = Math.max(12, Math.ceil(Math.abs(o - a) * 9)),
        f = [];
      for (let s = 0; s <= d; s++) {
        let c = a + ((o - a) * s) / d;
        f.push(
          u === `xz`
            ? [e + Math.cos(c) * r, t, n + Math.sin(c) * i]
            : [e + Math.cos(c) * r, t + Math.sin(c) * i, n],
        );
      }
      let p = this.collisionRole;
      (p === `solid` &&
        s < 0.12 &&
        t - Math.abs(i) > 2 &&
        (this.collisionRole = `detail`),
        this.line(f, s, c, l),
        (this.collisionRole = p));
    }
    poly(e, t, n = 0, r = `paint`, i = L) {
      let a = new S();
      a.moveTo(...e[0]);
      for (let t = 1; t < e.length; t++) a.lineTo(...e[t]);
      a.closePath();
      let o = new b(a, {
        depth: t,
        bevelEnabled: !0,
        bevelSize: 0.018,
        bevelThickness: 0.015,
        bevelSegments: 1,
        steps: 1,
      });
      ((o.userData.signOutline = e.map((e) => [...e])),
        this.add(o, r, i, [0, 0, n - t / 2]));
    }
    point(e) {
      return F(e).applyMatrix4(this.frame).toArray();
    }
    solid() {}
    withFrame(e, t, n) {
      let r = this.frame.clone();
      (this.frame.multiply(
        new a().compose(
          F(e),
          new p().setFromEuler(new g(...t)),
          new w(1, 1, 1),
        ),
      ),
        n(),
        this.frame.copy(r));
    }
    finish() {
      let e = new v();
      e.name = this.spec.key;
      for (let [t, n] of this.parts) {
        let r = x(n, !1);
        if ((n.forEach((e) => e.dispose()), !r))
          throw Error(`Cannot merge ${this.spec.key}/${t}`);
        let i = t === `neon` || t === `neon2` || t === `lamp`,
          a = new f({
            vertexColors: !0,
            roughness: t === `metal` ? 0.46 : 0.78,
            metalness: t === `metal` ? 0.76 : 0.08,
            emissive: i
              ? t === `lamp`
                ? `#ffe4ad`
                : t === `neon2`
                  ? this.spec.palette.secondary
                  : this.spec.palette.accent
              : `#000000`,
            emissiveIntensity: i ? (t === `lamp` ? 1.4 : 2.2) : 0,
          });
        (i && (a.userData.signEmission = a.emissiveIntensity),
          (a.name = `${this.spec.key}:${t}`),
          (a.userData.pen =
            t === `wood`
              ? `wood`
              : t === `concrete`
                ? `concrete`
                : t === `canvas`
                  ? `fabric`
                  : `metal`));
        let o = new u(r, a);
        ((o.name = t), (o.castShadow = !i), (o.receiveShadow = !0), e.add(o));
      }
      let t = new s().setFromObject(e);
      return (
        (e.userData = {
          key: this.spec.key,
          faces: this.faces,
          fixtures: this.fixtures,
          access: this.access,
          size: t.getSize(new w()).toArray(),
          bounds: [t.min.toArray(), t.max.toArray()],
          construction: this.spec.construction,
        }),
        ae.set(e, this.movementParts),
        le(e),
        e
      );
    }
  };
function ce(e, t = null) {
  let n = ae.get(e);
  if (!n) throw Error(`Sign movement authoring parts are unavailable`);
  return re(n, t, oe);
}
function le(e) {
  let t = e.userData.access;
  ((t.solids = []), (t.rails = []), (t.platforms = []));
  for (let n of ce(e)) {
    let e = n.aabb,
      r = {
        center: [0, 1, 2].map((t) => (e[t] + e[t + 3]) / 2),
        size: [0, 1, 2].map((t) => e[t + 3] - e[t]),
        role: n.role,
        surface: n.surface,
        ...(n.obb ? { obb: n.obb } : {}),
      };
    (n.role === `platform`
      ? t.platforms
      : n.role === `rail`
        ? t.rails
        : t.solids
    ).push(r);
  }
  t.geometryVersion = 2;
  let n = new s().setFromObject(e);
  ((e.userData.bounds = [n.min.toArray(), n.max.toArray()]),
    (e.userData.size = n.getSize(new w()).toArray()));
}
function ue(e, t, n = `solid`) {
  t.updateMatrix();
  let r = ne(t.geometry, t.matrix, n, `metal`);
  r && ae.get(e).push(r);
}
function H(e, t, n, r = 0.65, i = 0.65, a = `metal`) {
  e.box(r, 0.09, i, t, 0.08, n, a, a === `wood` ? B : R);
  for (let a of [-1, 1])
    for (let o of [-1, 1])
      e.cyl(
        0.025,
        0.025,
        0.055,
        t + a * r * 0.35,
        0.15,
        n + o * i * 0.35,
        `metal`,
        V,
        [0, 0, 0],
        6,
      );
}
function U(e, t, n, r = -0.38, i = 0.2, a = `metal`, o = e.spec.palette.metal) {
  (H(e, t, r, Math.max(0.55, i * 2.4), Math.max(0.6, i * 2.4), a),
    e.box(i, n, i, t, n / 2 + 0.1, r, a, o),
    e.solid([t, n / 2 + 0.1, r], [i, n, i]));
  for (let a = 0.55; a < n; a += 2.5)
    e.box(i + 0.035, 0.09, i + 0.035, t, a, r, `metal`, R);
}
function de(e, t = 0.34, n = `metal`, r = 0.22) {
  let { width: i, height: a, elevation: o, palette: s } = e.spec;
  for (let c of [-i * t, i * t])
    U(e, c, o + a * 0.62, -0.4, r, n, n === `wood` ? B : s.metal);
  e.beam(
    [-i * t, o * 0.45, -0.4],
    [i * t, o + a * 0.45, -0.4],
    r * 0.55,
    n,
    n === `wood` ? B : R,
  );
}
function W(e, t, n, r, i, a, o = 6, s = L) {
  let c = I((n - t) / 100, 0.06, 0.17);
  (e.beam([t, r, a], [n, r, a], c, `metal`, s),
    e.beam([t, i, a], [n, i, a], c, `metal`, s));
  for (let l = 0; l <= o; l++) {
    let u = t + ((n - t) * l) / o;
    (e.beam([u, r, a], [u, i, a], c * 0.72, `metal`, s),
      l < o &&
        e.beam(
          [u, l % 2 ? i : r, a],
          [u + (n - t) / o, l % 2 ? r : i, a],
          c * 0.7,
          `metal`,
          s,
        ));
  }
}
function G(e, t = 4, n = 2.8) {
  let { width: r, height: i, elevation: a } = e.spec;
  for (let o = 0; o < t; o++) {
    let s = -r * 0.43 + (o * r * 0.86) / Math.max(1, t - 1);
    (U(e, s, a + i * 0.8, -0.4, 0.14),
      H(e, s, -n, 0.65, 0.8),
      e.beam([s, 0.17, -n], [s, a + i * 0.77, -0.4], 0.14),
      e.beam([s, a * 0.35, -0.4], [s, a * 0.35, -n * 0.73], 0.1));
  }
  W(e, -r * 0.45, r * 0.45, 0.5, a * 0.7, -1.3, Math.max(3, t));
}
function K(e, t = 1.25) {
  let { width: n, height: r, elevation: i } = e.spec;
  for (let a of [-n * 0.33, n * 0.33]) {
    e.box(0.22, r + 0.6, 0.11, a, i + r / 2, -t, `metal`, R);
    for (let n of [i + 0.08, i + r - 0.08]) {
      (e.beam([a, n, -t], [a, n, -0.15], 0.1),
        e.beam([a, n - 0.35, -t], [a, n, -0.15], 0.07));
      for (let r of [-0.06, 0.06])
        e.cyl(
          0.02,
          0.02,
          0.03,
          a + r,
          n,
          -t + 0.075,
          `metal`,
          V,
          [Math.PI / 2, 0, 0],
          6,
        );
    }
  }
}
function fe(e, t, n, r, i, a = 8) {
  let o = [];
  for (let e = 0; e < a * 2; e++) {
    let r = (e * Math.PI) / a,
      s = e % 2 ? i * 0.24 : i;
    o.push([t + Math.sin(r) * s, n + Math.cos(r) * s]);
  }
  (e.poly(o, 0.11, r, `paint`, e.spec.palette.secondary),
    e.line(
      o.map((e) => [...e, r + 0.09]),
      0.032,
      `neon2`,
      e.spec.palette.secondary,
      !0,
    ));
}
function pe(e, t, n, r, i, a = 0.5, o = `paint`, s = e.spec.palette.metal) {
  let c = Math.atan2(a, r / 2),
    l = Math.hypot(r / 2, a);
  (e.box(l, 0.11, i, t - r / 4, n + a / 2, -0.1, o, s, [0, 0, c]),
    e.box(l, 0.11, i, t + r / 4, n + a / 2, -0.1, o, s, [0, 0, -c]),
    e.beam([t - r / 2, n, 0.7], [t, n + a, 0.7], 0.065, `metal`, R),
    e.beam([t, n + a, 0.7], [t + r / 2, n, 0.7], 0.065, `metal`, R));
}
