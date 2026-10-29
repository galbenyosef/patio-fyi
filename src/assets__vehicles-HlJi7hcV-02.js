// assets__vehicles-HlJi7hcV 02 — math
// Lines 350-649 of readable/assets__vehicles-HlJi7hcV.pretty.js (statement-aligned).
function G(e, t, n) {
  let r = document.createElement(`canvas`);
  ((r.width = e), (r.height = t), n(r.getContext(`2d`), e, t));
  let i = new k(r);
  return ((i.colorSpace = _), (i.wrapS = i.wrapT = b), (i.anisotropy = 4), i);
}
var ve = () =>
    G(128, 32, (e, t, n) => {
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
  ye = (e) =>
    G(256, 256, (t, n, r) => {
      let i = _e(e);
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
  be = () =>
    G(64, 64, (e, t, n) => {
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
  K = {},
  q = (e, t) => (e in K ? K[e] : (K[e] = typeof document > `u` ? null : t()));
function xe(e, { camo: r = 0 } = {}) {
  let s = new Set(),
    c = {},
    l = (e, t = {}) =>
      new a({
        color: e,
        roughness: 0.78,
        metalness: 0.12,
        flatShading: !0,
        ...t,
      });
  for (let [t, n] of Object.entries(ge[e])) {
    let e = [`light`, `amber`, `red`, `blue`].includes(t);
    c[t] = l(
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
  let u = q(`tread`, () => {
    let e = ve();
    return (e.repeat.set(3, 1), e);
  });
  c.tread = l(u ? 16777215 : 2500390, {
    map: u,
    roughness: 0.95,
    metalness: 0,
  });
  let p = r ? q(`camo` + r, () => ye(r)) : null;
  p && ((c.paint.map = p), c.paint.color.set(16777215));
  let m = q(`mesh`, be);
  c.mesh = new a({
    color: m ? 16777215 : 2762531,
    map: m,
    transparent: !!m,
    alphaTest: m ? 0.4 : 0,
    side: 2,
    roughness: 0.7,
    metalness: 0.4,
  });
  let h = (e, n, r, i, a) => {
      s.add(n);
      let o = new t(
        n,
        Array.isArray(r) ? r.map((e) => c[e] ?? e) : (c[r] ?? r),
      );
      return (
        i && o.position.set(...i),
        a && o.rotation.set(...a),
        (r === `glass` || r === `mesh`) && (o.userData.seeThrough = !0),
        (o.castShadow = o.receiveShadow = !0),
        e.add(o),
        o
      );
    },
    g = new o(0, 1, 0),
    _ = (e, t, n, r, i) => {
      let a = new o(...n),
        s = new o(...r),
        c = h(e, t, i);
      return (
        c.position.copy(a).add(s).multiplyScalar(0.5),
        c.quaternion.setFromUnitVectors(g, s.sub(a).normalize()),
        c
      );
    },
    v = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1], e[2] - t[2]),
    b = (e, t, n) => {
      if (n === 1) return;
      e.computeBoundingBox();
      let r = (e.boundingBox.min.y + e.boundingBox.max.y) / 2,
        i = e.attributes.position;
      for (let a = 0; a < i.count; a++) {
        let o = Math.max(0, (i.getY(a) - r) / (e.boundingBox.max.y - r));
        i.setX(a, t + (i.getX(a) - t) * (1 - (1 - n) * o));
      }
    },
    S = {
      mats: c,
      team: (e) =>
        l(W[e] ?? W[0], { emissive: W[e] ?? W[0], emissiveIntensity: 0.12 }),
      box: (e, t, n, r = `paint`, a) => h(e, new i(...t), r, n, a),
      cyl(e, t, n, r, i = `metal`, a = `y`, o = 12, s = t) {
        let c = new C(s, t, n, o);
        return (
          a === `x`
            ? c.rotateZ(-Math.PI / 2)
            : a === `z` && c.rotateX(Math.PI / 2),
          h(e, c, i, r)
        );
      },
      ball: (e, t, r, i = `metal`, a = 12) =>
        h(e, new n(t, a, Math.max(6, (a * 0.6) | 0)), i, r),
      wheel(e, t, n, r, i = `dark`, a = 18) {
        let o = new C(t, t, n, a);
        o.rotateZ(Math.PI / 2);
        let s = h(e, o, `tread`, r);
        return (
          S.cyl(e, t * 0.58, n + 0.03, r, i, `x`, 10),
          S.cyl(e, t * 0.2, n + 0.07, r, `metal`, `x`, 8),
          s
        );
      },
      prism(e, t, n, r = 0, i = `paint`, a = 0.025, o = 1) {
        let s = Math.max(0.01, n - 2 * a),
          c = new w(new O(t.map(([e, t]) => new f(-e, t))), {
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
          b(c, r, o),
          c.computeVertexNormals(),
          h(e, c, i)
        );
      },
      slab(e, t, n, r = 0, i = `paint`, a = 1, o = 0.025) {
        let s = Math.max(0.01, n - 2 * o),
          c = new w(new O(t.map(([e, t]) => new f(e, -t))), {
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
        return (c.computeVertexNormals(), h(e, c, i));
      },
      taper(e, t, n, [r, a], [o, s], c, l = `paint`, u = 0, d = 0) {
        let f = new i(1, 1, 1),
          p = f.attributes.position;
        for (let e = 0; e < p.count; e++) {
          let i = p.getZ(e) + 0.5;
          p.setXYZ(
            e,
            u + p.getX(e) * (r + (o - r) * i),
            c + d * i + p.getY(e) * (a + (s - a) * i),
            t + (n - t) * i,
          );
        }
        return (f.computeVertexNormals(), h(e, f, l));
      },
      lathe(e, t, n, r = `paint`, i = 14, a = 1, o = 1) {
        let s = new d(
          t.map(([e, t]) => new f(t, e)),
          i,
        );
        return (s.rotateX(Math.PI / 2), s.scale(a, o, 1), h(e, s, r, n));
      },
      beam: (e, t, n, r, a, o = `dark`) => _(e, new i(r, v(t, n), a), t, n, o),
      tube: (e, t, n, r, i = `metal`, a = 8) =>
        _(e, new C(r, r, v(t, n), a), t, n, i),
      plane: (e, t, n, r, i, a) => h(e, new x(t, n), i, r, a),
      group(e, t = [0, 0, 0], n) {
        let r = new y();
        return (r.position.set(...t), n && r.rotation.set(...n), e.add(r), r);
      },
      dispose() {
        (s.forEach((e) => e.dispose()),
          Object.values(c).forEach((e) => e.dispose()));
      },
    };
  return S;
}
function Se() {
  let e = new y(),
    t = new y(),
    n = new y(),
    r = new g(),
    i = new y(),
    a = new y();
  return (
    (r.name = `vehicle-muzzle`),
    t.add(n),
    { root: e, turret: t, elevation: n, muzzle: r, rotor: i, tailRotor: a }
  );
}
function Ce(e, t) {
  let n = B(t);
  return (
    e.root.add(e.turret),
    e.turret.position.fromArray(n.offset ?? [0, n.height, 0]),
    (e.muzzle.position.z = -n.length),
    e.elevation.add(e.muzzle),
    n
  );
}
function we(e, t, n = {}) {
  let r = new a({ color: 2500387, roughness: 0.95, flatShading: !0 }),
    i = new Map();
  t.root.traverse((e) => {
    e.isMesh && i.set(e, e.material);
  });
  let o = !1;
  return {
    ...t,
    recoil: null,
    suspension: t.root,
    tracks: null,
    ...n,
    setEngineHot() {},
    setDestroyed(t) {
      if (t !== o) {
        o = t;
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
