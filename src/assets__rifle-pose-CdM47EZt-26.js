// assets__rifle-pose-CdM47EZt 26 — math
// Lines 30278-30601 of readable/assets__rifle-pose-CdM47EZt.pretty.js (statement-aligned).
function Nr(e, t, n) {
  let { len: r, obj: i, ocu: a } = n,
    o = 0.036,
    s = -r * 0.52,
    c = s + r,
    l = s + 0.032,
    u = c - 0.045,
    d = c - 0.036,
    f = a - 0.0034;
  (t.shell(
    `body`,
    s,
    o,
    [
      [0, a - 8e-4],
      [0.002, a],
      [0.008, a],
      [0.01, a - 0.0012],
      [0.032, a - 0.0012],
    ],
    [
      [0, f],
      [0.032, f],
    ],
  ),
    t.arch(
      `body`,
      t.rr(-0.0168, 0.0168, 0.018799999999999997, 0.0535, 0.0075, 5),
      l - 0.001,
      u,
      [t.circle(f, o)],
    ));
  for (let t of [-1, 1])
    e.rbox(
      `body`,
      (l + u) / 2,
      0.032,
      t * 0.0168,
      u - l - 0.012,
      0.016,
      0.0012,
      5e-4,
    );
  (t.shell(
    `body`,
    u - 0.001,
    o,
    [
      [0, 0.0158],
      [d - u + 0.001, i - 6e-4],
      [c - u, i],
      [c - u + 0.001, i - 0.001],
    ],
    [
      [0, f],
      [c - u + 0.001, i - 0.0028],
    ],
  ),
    e.ring(`body`, c - 0.002, o, 0, i - 6e-4, 0.0014),
    t.disc(`lensDark`, c - 0.006, o, i - 0.0028),
    t.disc(`lens`, s + 0.004, o, f));
  let p = (l + u) / 2 + 0.004;
  if (
    (t.turret(p, 0.052, 0, 0.0078, 0.01),
    t.turret(p, o, 0.016, 0.0078, 0.01, `z`),
    n.fiber)
  ) {
    for (let t of [l + 0.002, u - 0.002])
      e.rbox(`body`, t, 0.055499999999999994, 0, 0.006, 0.007, 0.012, 0.0015);
    e.tube(
      n.fiber,
      (l + u) / 2,
      0.057499999999999996,
      0,
      0.0032,
      u - l - 0.002,
      `x`,
      0.0032,
      12,
    );
    for (let t of [l + 0.012, u - 0.012])
      e.rbox(`body`, t, 0.0588, 0, 0.004, 0.0016, 0.0085, 6e-4);
  }
  return (
    n.cup &&
      t.shell(
        `rubber`,
        s - 0.026,
        o,
        [
          [0, a + 0.006],
          [0.004, a + 0.0062],
          [0.016, a + 0.002],
          [0.026, a + 4e-4],
        ],
        [
          [0, a + 0.0034],
          [0.026, a - 0.0012],
        ],
      ),
    n.rmr &&
      (e.rbox(
        `body`,
        p - 0.004,
        0.057999999999999996,
        0,
        0.03,
        0.007,
        0.02,
        0.002,
      ),
      e.rbox(
        `black`,
        p - 0.004,
        0.06499999999999999,
        0,
        0.036,
        0.007,
        0.022,
        0.002,
      ),
      t.arch(
        `black`,
        t.trap(0.0235, 0.0225, 0.06699999999999999, 0.088, 0.0035),
        p + 0.004,
        p + 0.012,
        [t.rr(-0.009, 0.009, 0.071, 0.08399999999999999, 0.0025)],
      ),
      t.glass(`lensAmber`, p + 0.008, 0.07749999999999999, 0.018, 0.013)),
    t.scopeClamp(-0.032, 0.03, { nuts: 2, w: 0.028 }),
    e.rbox(
      `body`,
      -0.001,
      0.013399999999999999,
      0,
      0.05,
      0.014799999999999997,
      0.022,
      0.003,
    ),
    t.engrave(
      `CUBIE · ` +
        (n.cup ? `TA-01` : n.rmr ? `TA-33` : i > 0.022 ? `TA-11` : `TA-31`),
      p - 0.002,
      0.03,
      0.0172,
      0.036,
      0.0055,
    ),
    {
      eye: o,
      plane: (l + u) / 2,
      aperture: [f * 0.9, f * 0.9],
      footprint: [-0.032, 0.03],
      rear: n.cup ? s - 0.026 : s,
      win: (e) => {
        let t = e > u ? i - 0.0028 : f;
        return [t, t, !0];
      },
    }
  );
}
function Pr(e, t, { lite: n = !1, see: r = !1 } = {}) {
  let i = Ar[t];
  if (!i) throw Error(`Unknown sight ${t}`);
  let a = dn(e, br(i.finish), n);
  a.see = r;
  let o = Cr(a, i.finish),
    s = i.build(a, o);
  if (o.mountDrop) {
    for (let t of e.children)
      t.userData.sightMount || (t.position.y -= o.mountDrop);
    s.eye -= o.mountDrop;
  }
  return (
    Lr(e, s, Fr, i.type !== `prism`),
    (e.userData.sight = t),
    { ...s, def: i }
  );
}
var Fr = 0.5,
  J = new p(),
  Ir = new L();
function Lr(e, t, n = Fr, r = !0) {
  let { win: i, eye: a } = t;
  if (!i || n === 1) return;
  let o = (e) => {
    let [t, r, o] = i(e.x),
      s = e.y - a;
    if (o) {
      let r = Math.hypot(e.z, s);
      if (r > t) {
        let i = (t + n * (r - t)) / r;
        ((e.z *= i), (e.y = a + s * i));
      }
      return e;
    }
    return (
      Math.abs(e.z) > t &&
        s > -r - 0.004 &&
        (e.z = Math.sign(e.z) * (t + n * (Math.abs(e.z) - t))),
      s > r && (e.y = a + r + n * (s - r)),
      e
    );
  };
  for (let t of [...e.children]) {
    if (!t.isMesh) continue;
    (t.updateMatrix(),
      J.copy(
        t.geometry.boundingBox ??
          t.geometry.computeBoundingBox() ??
          t.geometry.boundingBox,
      ).applyMatrix4(t.matrix));
    let [e, n] = i((J.min.x + J.max.x) / 2);
    if (J.min.z <= 0 && J.max.z >= 0 && J.min.y <= a && J.max.y >= a) {
      (t.geometry.applyMatrix4(t.matrix),
        t.position.set(0, 0, 0),
        t.rotation.set(0, 0, 0),
        t.scale.set(1, 1, 1));
      let e = t.geometry.attributes.position;
      for (let t = 0; t < e.count; t++)
        (o(Ir.fromBufferAttribute(e, t)), e.setXYZ(t, Ir.x, Ir.y, Ir.z));
      ((e.needsUpdate = !0),
        r && Rr(t.geometry),
        t.geometry.computeBoundingBox(),
        t.geometry.computeBoundingSphere());
    } else if (
      J.min.z <= 0 &&
      J.max.z >= 0 &&
      J.max.y < a &&
      J.max.y > a - n - 0.009 &&
      J.min.y > 0.005
    )
      continue;
    else if (J.min.y > a - n - 0.001) {
      let e = new L(
        (J.min.x + J.max.x) / 2,
        Math.max(J.min.y, Math.min(J.max.y, a)),
        Math.max(J.min.z, Math.min(J.max.z, 0)),
      );
      t.position.add(o(e.clone()).sub(e));
    }
  }
}
function Rr(e) {
  let t = e.attributes.normal?.array.slice();
  e.computeVertexNormals();
  let n = e.attributes.normal;
  for (let e = 0; e < n.count; e++) {
    let r = n.getX(e),
      i = n.getY(e),
      a = n.getZ(e);
    if (Math.hypot(r, i, a) > 1e-4) continue;
    let o = t?.[e * 3],
      s = t?.[e * 3 + 1],
      c = t?.[e * 3 + 2],
      l = Math.hypot(o, s, c);
    l > 1e-4 ? n.setXYZ(e, o / l, s / l, c / l) : n.setXYZ(e, 0, 1, 0);
  }
  n.needsUpdate = !0;
}
var zr = (e) => e.mounts?.rail ?? [e.sightZ - 0.06, e.sightZ + 0.06],
  Br = {
    0: [-0.48, -0.04],
    3: [-0.24, -0.03],
    5: [-0.19, -0.05],
    11: [-0.28, -0.05],
    12: [-0.23, -0.03],
    13: [-0.17, 0.15],
    14: [-0.48, -0.05],
    15: [-0.46, -0.04],
    16: [-0.34, -0.02],
    17: [-0.31, -0.02],
    18: [-0.38, -0.04],
    19: [-0.29, -0.02],
    20: [-0.09, 0.16],
    21: [-0.58, -0.04],
    22: [-0.33, -0.02],
    23: [-0.26, -0.04],
    24: [-0.22, 0.14],
    25: [-0.74, -0.02],
    27: [-0.27, 0.02],
    35: [-0.28, -0.086],
    36: [-0.48, -0.04],
    37: [-0.21, 0.04],
    39: [-0.071, 0.05],
    40: [-0.22, 0.04],
    41: [-0.32, -0.1],
  },
  Vr = (e) => {
    let t = zr(e),
      n = Br[e.weaponId];
    return n ? [Math.min(t[0], n[0] + 0.005), Math.max(t[1], n[1] - 0.005)] : t;
  };
function Hr(e, t) {
  let n = Ar[t],
    [r, i] = n.footprint ?? Wr(t),
    a = ([e, t]) => {
      let n = e + i,
        a = t + r;
      return (n > a && (n = a = (e + t) / 2), [n, a]);
    },
    [o, s] = a(zr(e)),
    [c, l] = a(Vr(e)),
    u = n.place === `front` ? o : n.place === `rear` ? s : (o + s) / 2;
  return { lo: Math.min(c, u), hi: Math.max(l, u), home: u };
}
var Ur = new Map();
function Wr(e) {
  if (!Ur.has(e)) {
    let t = new M();
    (Ur.set(e, Pr(t, e).footprint), t.traverse((e) => e.geometry?.dispose()));
  }
  return Ur.get(e);
}
function Gr(e, t) {
  let n = Hr(e, t.kit);
  return Math.max(n.lo, Math.min(n.hi, n.home + (t.rail ?? 0)));
}
var Kr = 0.75,
  qr = (e) => (e?.kit?.meta?.def?.type === `holo` ? Kr : 1);
function Jr(e, t) {
  e?.kit && e.kit.group.scale.setScalar(t);
}
