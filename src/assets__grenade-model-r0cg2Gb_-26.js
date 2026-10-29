// assets__grenade-model-r0cg2Gb_ 26 — geometry
// Lines 31572-31742 of readable/assets__grenade-model-r0cg2Gb_.pretty.js (statement-aligned).
function Ti(e, t = 1, n = !1, r) {
  let i = Ci[r];
  if (!i) return !1;
  for (let n of i) {
    let r = new d();
    (r.setAttribute(`position`, new E(n.positions, 3)),
      r.setAttribute(`normal`, new E(n.normals, 3)),
      r.setIndex(n.indices),
      r.translate(-wi[0], -wi[1], -wi[2]),
      t !== 1 && r.scale(1, t, 1),
      e.mesh(r, n.material === `steel` ? `steel` : `magpoly`));
  }
  return {};
}
var Ei = Object.freeze({ length: 0.82, diameter: 0.78 });
function Di(e, t) {
  let r = new Map(),
    i = [...e];
  for (let n of e) {
    if (t.has(n) || n.material.transparent) continue;
    let e = `${n.material.uuid}:${!!n.userData.sightTube}`;
    (r.has(e) || r.set(e, []), r.get(e).push(n));
  }
  for (let e of r.values()) {
    if (e.length < 2) continue;
    let t = e.map((e) => {
        e.updateMatrix();
        let t = e.geometry.index
          ? e.geometry.toNonIndexed()
          : e.geometry.clone();
        return (t.clearGroups(), t.applyMatrix4(e.matrix));
      }),
      r = oe(t, !1);
    t.forEach((e) => e.dispose());
    let a = e[0],
      o = new n(r, a.material);
    ((o.name = `precision_scope_` + a.material.name),
      (o.castShadow = o.receiveShadow = !0),
      (o.userData = { ...a.userData }),
      a.parent.add(o),
      i.push(o));
    for (let t of e) (t.removeFromParent(), t.geometry.dispose());
  }
  return i.filter((e) => e.parent);
}
var Oi = () =>
  Object.assign(
    new o({
      color: 11981130,
      emissive: 2371594,
      metalness: 0.1,
      roughness: 0.15,
    }),
    { name: `kit_vial` },
  );
function ki(e, t, n, r, i, a, { front: o = `cap`, level: s = !1 } = {}) {
  let { lathe: l, tube: u, rbox: d } = e,
    f = 0.0232,
    p = a ? 0.0318 : 0.0188,
    m = (e, n, r, i) => {
      let a = t.length,
        o = new k().setFromAxisAngle(r, i),
        s = new c(...n);
      e();
      for (let e of t.slice(a))
        (e.position.applyQuaternion(o).add(s), e.quaternion.premultiply(o));
    };
  if (
    (l(
      `rubber`,
      r - 0.004,
      n,
      0,
      [
        [0, 0.0214],
        [0, f],
        [0.013, f],
        [0.013, 0.0214],
      ],
      `x`,
    ),
    m(
      () => {
        (u(
          `rubber`,
          0,
          0,
          -0.0232,
          0.023799999999999998,
          0.003,
          `x`,
          0.023799999999999998,
          20,
        ),
          d(`rubber`, 0, 0, -2 * f - 0.004, 0.003, 0.008, 0.008, 8e-4),
          u(`rubber`, 0.002, 0, 0, 0.0024, 0.009, `y`, 0.0024, 8));
      },
      [r - 0.0055, n, 0.024399999999999998],
      new c(0, 1, 0),
      1.95,
    ),
    o === `ard`)
  ) {
    let e = p + 2e-4,
      t = a ? 0.03 : 0.024,
      r = a ? 6 : 5;
    l(
      `anod`,
      i - 0.002,
      n,
      0,
      [
        [0, e - 0.0016],
        [0, e],
        [t, e],
        [t, e - 0.0016],
      ],
      `x`,
    );
    for (let a = 1; a < r; a++) {
      let o = -e + (a * 2 * e) / r,
        s = Math.sqrt(Math.max(0, e * e - o * o)) - 6e-4;
      (d(`anod`, i + t - 0.007, n + o, 0, 0.009, 6e-4, s * 2, 0),
        d(`anod`, i + t - 0.007, n, o, 0.009, s * 2, 6e-4, 0));
    }
  } else
    (l(
      `rubber`,
      i - 0.012,
      n,
      0,
      [
        [0, p - 0.0016],
        [0, p],
        [0.0145, p],
        [0.0145, p - 0.0016],
      ],
      `x`,
    ),
      m(
        () => {
          (u(`rubber`, 0, -p, 0, p + 6e-4, 0.003, `x`, p + 6e-4, 20),
            d(`rubber`, 0, -2 * p - 0.004, 0, 0.003, 0.008, 0.008, 8e-4),
            u(`rubber`, -0.002, 0, 0, 0.0024, 0.01, `z`, 0.0024, 8));
        },
        [i + 0.004, n + p + 0.0012],
        new c(0, 0, 1),
        1.83,
      ));
  if (s) {
    let e = a ? -0.08 : -0.062,
      t = a ? 0.0172 : 0.015;
    (l(
      `anod`,
      e - 0.004,
      n,
      0,
      [
        [0, t],
        [0, t + 0.0022],
        [0.008, t + 0.0022],
        [0.008, t],
      ],
      `x`,
    ),
      d(`anod`, e, n, -(t + 0.0045), 0.014, 0.007, 0.005, 8e-4),
      u(Oi(), e, n + 4e-4, -(t + 0.0072), 0.0018, 0.011, `x`, 0.0018, 8));
    for (let r of [-0.0015, 0.0015])
      d(`inset`, e + r, n + 0.0023, -(t + 0.0072), 3e-4, 6e-4, 0.0012, 0);
  }
}
