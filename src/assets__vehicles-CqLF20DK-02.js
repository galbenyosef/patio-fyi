// assets__vehicles-CqLF20DK 02 — math
// Lines 349-648 of readable/assets__vehicles-CqLF20DK.pretty.js (statement-aligned).
function q(e, t, n) {
  let r = document.createElement(`canvas`);
  ((r.width = e), (r.height = t), n(r.getContext(`2d`), e, t));
  let i = new d(r);
  return ((i.colorSpace = w), (i.wrapS = i.wrapT = x), (i.anisotropy = 4), i);
}
var he = () =>
    q(128, 32, (e, t, n) => {
      ((e.fillStyle = `#2b2c2b`),
        e.fillRect(0, 0, t, n),
        (e.fillStyle = `#151615`));
      for (let t = 0; t < 16; t++) {
        let r = t * 8;
        (e.beginPath(),
          e.moveTo(r, 0),
          e.lineTo(r + 4, n / 2),
          e.lineTo(r, n),
          e.lineTo(r + 3, n),
          e.lineTo(r + 7, n / 2),
          e.lineTo(r + 3, 0),
          e.fill());
      }
    }),
  ge = (e) =>
    q(256, 256, (t, n, r) => {
      let i = me(e);
      ((t.fillStyle = `#c9ae80`), t.fillRect(0, 0, n, r));
      for (let [e, a] of [
        [`#7d8250`, 9],
        [`#8a6a44`, 7],
      ]) {
        t.fillStyle = e;
        for (let e = 0; e < a; e++) {
          let e = i() * n,
            a = i() * r,
            o = 18 + i() * 26;
          t.beginPath();
          for (let n = 0; n <= 9; n++) {
            let r = (n / 9) * Math.PI * 2,
              s = o * (0.55 + i() * 0.7);
            t[n ? `lineTo` : `moveTo`](
              e + Math.cos(r) * s * 1.5,
              a + Math.sin(r) * s,
            );
          }
          t.fill();
        }
      }
    }),
  _e = () =>
    q(64, 64, (e, t, n) => {
      (e.clearRect(0, 0, t, n), (e.strokeStyle = `#2a2723`), (e.lineWidth = 3));
      for (let r = -t; r <= t * 2; r += 16)
        (e.beginPath(),
          e.moveTo(r, 0),
          e.lineTo(r + n, n),
          e.stroke(),
          e.beginPath(),
          e.moveTo(r, n),
          e.lineTo(r + n, 0),
          e.stroke());
    }),
  J = {},
  ve = (e, t) => (e in J ? J[e] : (J[e] = typeof document > `u` ? null : t()));
function ye(e, { camo: t = 0 } = {}) {
  let i = new Set(),
    a = {},
    o = (e, t = {}) =>
      new g({
        color: e,
        roughness: 0.78,
        metalness: 0.12,
        flatShading: !0,
        ...t,
      });
  for (let [t, n] of Object.entries(pe[e])) {
    let e = [`light`, `amber`, `red`, `blue`].includes(t);
    a[t] = o(
      n,
      t === `glass`
        ? { roughness: 0.12, metalness: 0.55 }
        : t === `metal` || t === `gun`
          ? { roughness: 0.48, metalness: 0.6 }
          : e
            ? { emissive: n, emissiveIntensity: 0.35, roughness: 0.3 }
            : t === `rubber`
              ? { roughness: 0.95, metalness: 0 }
              : {},
    );
  }
  let c = ve(`tread`, () => {
    let e = he();
    return (e.repeat.set(3, 1), e);
  });
  a.tread = o(c ? 16777215 : 2500390, {
    map: c,
    roughness: 0.95,
    metalness: 0,
  });
  let l = t ? ve(`camo` + t, () => ge(t)) : null;
  l && ((a.paint.map = l), a.paint.color.set(16777215));
  let u = ve(`mesh`, _e);
  a.mesh = new g({
    color: u ? 16777215 : 2762531,
    map: u,
    transparent: !!u,
    alphaTest: u ? 0.4 : 0,
    side: 2,
    roughness: 0.7,
    metalness: 0.4,
  });
  let d = (e, t, n, r, o) => {
      i.add(t);
      let s = new p(
        t,
        Array.isArray(n) ? n.map((e) => a[e] ?? e) : (a[n] ?? n),
      );
      return (
        r && s.position.set(...r),
        o && s.rotation.set(...o),
        (n === `glass` || n === `mesh`) && (s.userData.seeThrough = !0),
        (s.castShadow = s.receiveShadow = !0),
        e.add(s),
        s
      );
    },
    m = new k(0, 1, 0),
    h = (e, t, n, r, i) => {
      let a = new k(...n),
        o = new k(...r),
        s = d(e, t, i);
      return (
        s.position.copy(a).add(o).multiplyScalar(0.5),
        s.quaternion.setFromUnitVectors(m, o.sub(a).normalize()),
        s
      );
    },
    _ = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1], e[2] - t[2]),
    v = (e, t, n) => {
      if (n === 1) return;
      e.computeBoundingBox();
      let r = (e.boundingBox.min.y + e.boundingBox.max.y) / 2,
        i = e.attributes.position;
      for (let a = 0; a < i.count; a++) {
        let o = Math.max(0, (i.getY(a) - r) / (e.boundingBox.max.y - r));
        i.setX(a, t + (i.getX(a) - t) * (1 - (1 - n) * o));
      }
    },
    b = {
      mats: a,
      team: (e) =>
        o(K[e] ?? K[0], { emissive: K[e] ?? K[0], emissiveIntensity: 0.12 }),
      box: (e, t, n, i = `paint`, a) => d(e, new r(...t), i, n, a),
      cyl(e, t, n, r, i = `metal`, a = `y`, o = 12, c = t) {
        let l = new s(c, t, n, o);
        return (
          a === `x`
            ? l.rotateZ(-Math.PI / 2)
            : a === `z` && l.rotateX(Math.PI / 2),
          d(e, l, i, r)
        );
      },
      ball: (e, t, n, r = `metal`, i = 12) =>
        d(e, new O(t, i, Math.max(6, (i * 0.6) | 0)), r, n),
      wheel(e, t, n, r, i = `dark`, a = 18) {
        let o = new s(t, t, n, a);
        o.rotateZ(Math.PI / 2);
        let c = d(e, o, `tread`, r);
        return (
          b.cyl(e, t * 0.58, n + 0.03, r, i, `x`, 10),
          b.cyl(e, t * 0.2, n + 0.07, r, `metal`, `x`, 8),
          c
        );
      },
      prism(e, t, n, r = 0, i = `paint`, a = 0.025, o = 1) {
        let s = Math.max(0.01, n - 2 * a),
          c = new T(new D(t.map(([e, t]) => new f(-e, t))), {
            depth: s,
            bevelEnabled: a > 0,
            bevelSize: a,
            bevelThickness: a,
            bevelSegments: 1,
            curveSegments: 1,
          });
        return (
          c.rotateY(Math.PI / 2),
          c.translate(r - s / 2, 0, 0),
          v(c, r, o),
          c.computeVertexNormals(),
          d(e, c, i)
        );
      },
      slab(e, t, n, r = 0, i = `paint`, a = 1, o = 0.025) {
        let s = Math.max(0.01, n - 2 * o),
          c = new T(new D(t.map(([e, t]) => new f(e, -t))), {
            depth: s,
            bevelEnabled: o > 0,
            bevelSize: o,
            bevelThickness: o,
            bevelSegments: 1,
            curveSegments: 1,
          });
        if ((c.rotateX(-Math.PI / 2), c.translate(0, r + o, 0), a !== 1)) {
          let e = t.reduce((e, t) => e + t[0], 0) / t.length,
            i = t.reduce((e, t) => e + t[1], 0) / t.length,
            o = c.attributes.position;
          for (let t = 0; t < o.count; t++)
            o.getY(t) > r + n * 0.5 &&
              (o.setX(t, e + (o.getX(t) - e) * a),
              o.setZ(t, i + (o.getZ(t) - i) * a));
        }
        return (c.computeVertexNormals(), d(e, c, i));
      },
      taper(e, t, n, [i, a], [o, s], c, l = `paint`, u = 0, f = 0) {
        let p = new r(1, 1, 1),
          m = p.attributes.position;
        for (let e = 0; e < m.count; e++) {
          let r = m.getZ(e) + 0.5;
          m.setXYZ(
            e,
            u + m.getX(e) * (i + (o - i) * r),
            c + f * r + m.getY(e) * (a + (s - a) * r),
            t + (n - t) * r,
          );
        }
        return (p.computeVertexNormals(), d(e, p, l));
      },
      lathe(e, t, r, i = `paint`, a = 14, o = 1, s = 1) {
        let c = new n(
          t.map(([e, t]) => new f(t, e)),
          a,
        );
        return (c.rotateX(Math.PI / 2), c.scale(o, s, 1), d(e, c, i, r));
      },
      beam: (e, t, n, i, a, o = `dark`) => h(e, new r(i, _(t, n), a), t, n, o),
      tube: (e, t, n, r, i = `metal`, a = 8) =>
        h(e, new s(r, r, _(t, n), a), t, n, i),
      plane: (e, t, n, r, i, a) => d(e, new y(t, n), i, r, a),
      group(e, t = [0, 0, 0], n) {
        let r = new C();
        return (r.position.set(...t), n && r.rotation.set(...n), e.add(r), r);
      },
      dispose() {
        (i.forEach((e) => e.dispose()),
          Object.values(a).forEach((e) => e.dispose()));
      },
    };
  return b;
}
function be() {
  let e = new C(),
    t = new C(),
    n = new C(),
    r = new _(),
    i = new C(),
    a = new C();
  return (
    (r.name = `vehicle-muzzle`),
    t.add(n),
    { root: e, turret: t, elevation: n, muzzle: r, rotor: i, tailRotor: a }
  );
}
function xe(e, t) {
  let n = H(t);
  return (
    e.root.add(e.turret),
    e.turret.position.fromArray(n.offset ?? [0, n.height, 0]),
    (e.muzzle.position.z = -n.length),
    e.elevation.add(e.muzzle),
    n
  );
}
function Se(e, t, n = {}) {
  let r = new g({ color: 2500387, roughness: 0.95, flatShading: !0 }),
    i = new Map();
  t.root.traverse((e) => {
    e.isMesh && i.set(e, e.material);
  });
  let a = !1;
  return {
    ...t,
    recoil: null,
    suspension: t.root,
    tracks: null,
    ...n,
    setEngineHot() {},
    setDestroyed(t) {
      if (t !== a) {
        a = t;
        for (let [n, a] of i) n.material = t ? (a === e.mats.mesh ? a : r) : a;
      }
    },
    releaseSource() {
      e.dispose();
    },
    dispose() {
      (e.dispose(), r.dispose());
    },
  };
}
