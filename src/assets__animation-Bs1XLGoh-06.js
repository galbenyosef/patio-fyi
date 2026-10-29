// assets__animation-Bs1XLGoh 06 — leads
// Lines 1431-1780 of readable/assets__animation-Bs1XLGoh.pretty.js (statement-aligned).
var Zn = new M()
    .makeBasis(new s(0, -1, 0), new s(0, 0, -1), new s(1, 0, 0))
    .multiply(new M().makeScale(1.3, 1.3, 1.3)),
  Qn = new M().makeTranslation(0, -0.3, 0),
  H = {
    plug: [0.26, -0.04, -0.07],
    route: [
      [0.3, 0.03, 0.04],
      [0.29, 0.17, 0.15],
      [0.25, 0.3, 0.22],
    ],
    socket: [0.168, 0.3, 0.22],
    coil: {
      radius: 0.018,
      pitch: 0.016,
      wire: 0.013,
      perTurn: 8,
      lead: [0.025, 0.03],
    },
    cable: 0.019,
    cableBlocks: 22,
    max: 900,
  },
  $n = new M(),
  er = new M(),
  tr = new M(),
  nr = new s(),
  rr = new s(),
  ir = new s(),
  ar = new s(),
  or = new s(),
  sr = new s(0, 0, 1),
  cr = new s(),
  lr = new s(),
  ur = new s(),
  dr = new s(),
  fr = new s(),
  pr = new b(),
  mr = new b();
function hr(e) {
  let t = ln(`lifepak15`, { paddlesOnly: !0, leads: !1 }),
    r = [[], []],
    i = new Set();
  (t.updateMatrixWorld(!0),
    t.traverse((e) => {
      if (!e.isMesh) return;
      e.geometry.computeBoundingBox();
      let n = e.geometry.boundingBox
        .getCenter(new s())
        .applyMatrix4(e.matrixWorld);
      if (n.x < -0.030000000000000002) return;
      let a = n.z < 0 ? 0 : 1,
        o = t.userData.sockets.hands[a ? `trigger` : `support`];
      if (!i.has(e.material)) {
        let t = rn(e.material) < 1 ? 0.5 : 1;
        (e.material.color.multiplyScalar(t),
          t < 1 &&
            (e.material.roughness = Math.max(e.material.roughness, 0.85)),
          i.add(e.material));
      }
      r[a].push({
        geometry: e.geometry,
        material: e.material,
        m: new M().makeTranslation(0.025, -o[1], -o[2]).multiply(e.matrixWorld),
      });
    }));
  let c = new a(1, 1, 1),
    l = new o({ color: 1776670, roughness: 0.7 }),
    u = new o({ color: 7040884, roughness: 0.35, metalness: 0.7 }),
    d = new Map();
  function f(t) {
    let i = { pads: [], on: !1 };
    return (
      [`foreL`, `foreR`].forEach((t, a) =>
        r[a].forEach((r) => {
          let o = new n(r.geometry, r.material);
          ((o.matrixAutoUpdate = !1),
            (o.castShadow = !0),
            (o.visible = !1),
            e.add(o),
            i.pads.push({ mesh: o, bone: t, side: a, m: r.m }));
        }),
      ),
      (i.leads = new ie(c, l, H.max)),
      (i.leads.frustumCulled = !1),
      (i.leads.castShadow = !0),
      (i.leads.visible = !1),
      e.add(i.leads),
      (i.plug = new n(c, u)),
      i.plug.scale.set(0.045, 0.045, 0.08),
      (i.plug.visible = !1),
      e.add(i.plug),
      (i.socket = new n(c, u)),
      (i.socket.visible = !1),
      e.add(i.socket),
      (i.tails = [0, 1].map(() => new te(new s(), new s(), new s()))),
      (i.coil = new p(
        Array.from({ length: H.route.length + 2 }, () => new s()),
        !1,
        `centripetal`,
      )),
      d.set(t, i),
      i
    );
  }
  function m(e, t) {
    if (e.on !== t) {
      e.on = t;
      for (let n of e.pads) n.mesh.visible = t;
      e.leads.visible = e.plug.visible = e.socket.visible = t;
    }
  }
  function h(e, t, n) {
    let r = t.torso.matrixWorld,
      i = e.coil.points,
      a = i.length - 1;
    (i[0].fromArray(H.plug).applyMatrix4(r),
      H.route.forEach((e, t) => i[t + 1].set(e[0], e[1], e[2]).applyMatrix4(r)),
      i[a].set(H.socket[0] + 0.012, H.socket[1], H.socket[2]).applyMatrix4(r));
    for (let e of i) e.y = Math.max(e.y, n + 0.03);
    let o = 0;
    (e.tails.forEach((n, r) => {
      (n.v0.set(0, -0.3, 0).applyMatrix4(t[r ? `foreR` : `foreL`].matrixWorld),
        n.v1.copy(n.v0),
        (n.v1.y -= 0.22),
        n.v1.lerp(i[0], 0.25),
        n.v2.copy(i[0]),
        (n.needsUpdate = !0),
        n.updateArcLengths(),
        (o = _n(e.leads, o, n, {
          ...H.coil,
          max: ((H.max - H.cableBlocks) / 2) * (r + 1) - o,
        })));
    }),
      (e.coil.needsUpdate = !0),
      e.coil.updateArcLengths(),
      (o = Jt(e.leads, o, e.coil, H.cable, H.cableBlocks)),
      (e.leads.count = o),
      (e.leads.instanceMatrix.needsUpdate = !0),
      e.plug.position.copy(i[0]),
      e.plug.quaternion.setFromUnitVectors(sr, e.coil.getTangentAt(0, cr)),
      r.decompose(cr, pr, dr),
      e.socket.position.fromArray(H.socket).applyMatrix4(r),
      e.socket.quaternion.copy(pr),
      e.socket.scale.set(0.03 * dr.x, 0.055 * dr.y, 0.055 * dr.z));
  }
  return {
    draw(e, t, n, r) {
      let i = d.get(e) ?? f(e);
      m(i, !0);
      let a = n?.flat ?? 0;
      for (let e of i.pads) {
        let n = t[e.bone].matrixWorld;
        if (($n.multiplyMatrices(n, Qn).multiply(Zn), a > 0)) {
          (tr.copy(t.torso.matrixWorld).invert(),
            nr.set(0, -0.3, 0).applyMatrix4(n).applyMatrix4(tr));
          let r = e.side ? -1 : 1;
          (er
            .makeBasis(ir.set(r, 0, 0), ar.set(0, 1, 0), or.set(0, 0, r))
            .scale(rr.setScalar(1.3))
            .setPosition(-r * (0.2015 + 0.003), nr.y, nr.z)
            .premultiply(t.torso.matrixWorld),
            $n.decompose(lr, pr, dr),
            er.decompose(ur, mr, fr),
            $n.compose(lr.lerp(ur, a), pr.slerp(mr, a), dr));
        }
        (e.mesh.matrix.multiplyMatrices($n, e.m),
          (e.mesh.matrixWorldNeedsUpdate = !0));
      }
      h(i, t, r);
    },
    hide(e) {
      let t = d.get(e);
      t && m(t, !1);
    },
    release(t) {
      let n = d.get(t);
      if (n) {
        for (let t of n.pads) e.remove(t.mesh);
        (e.remove(n.leads, n.plug, n.socket), n.leads.dispose(), d.delete(t));
      }
    },
    dispose() {
      for (let e of Array.from(d.keys())) this.release(e);
      (c.dispose(), l.dispose(), u.dispose());
      for (let e of r) for (let t of e) t.geometry.dispose();
      for (let e of i) e.dispose();
    },
  };
}
var gr = 0.12,
  _r = 0.35,
  vr = 0.25,
  yr = 0.3,
  br = 0.06,
  xr = (e) => (e < 0 ? 0 : e > 1 ? 1 : e),
  Sr = (e, t, n, r, i) =>
    t > e ? Math.min(t, e + i / n) : Math.max(t, e - i / r),
  Cr = (e) => e * e * (3 - 2 * e),
  wr = (e) => e?.optic?.type === `scope` && (e.optic.fov ?? 75) < 45;
function Tr(e) {
  return (
    (e.adsW = 0),
    (e.readyW = 0),
    (e.readyT = 99),
    (e.relW = 0),
    (e.aimW = 0),
    (e.adsMix = 1),
    (e.sightW = 0),
    (e.cheekW = 0),
    (e.scopeW = 0),
    (e.bolt = -1),
    (e.boltT = -1),
    e
  );
}
function Er(e, t, n, r) {
  e.adsW === void 0 && Tr(e);
  let i = (t & u.ADS) !== 0,
    a = (t & u.FIRING) !== 0,
    o = e.reloadT >= 0 || (t & u.RELOADING) !== 0,
    s = Math.max(0.12, n?.ads ?? 0.25);
  ((e.adsW = Sr(e.adsW, +!!i, s, Math.max(0.12, s * 0.6), r)),
    (e.readyT = a || i ? 0 : e.readyT + r));
  let c = !i && !(t & u.SPRINT) && e.readyT < 2;
  ((e.readyW = Sr(e.readyW, +!!c, gr, _r, r)),
    (e.relW = Sr(e.relW, +!!o, vr, yr, r)));
  let l = Cr(e.adsW);
  ((e.aimW = Math.max(l, e.readyW, e.relW)),
    (e.adsMix = e.aimW > 0.001 ? xr((l + e.relW) / e.aimW) : 1),
    (e.sightW = l * (1 - e.relW)),
    (e.cheekW = n?.class === `pistol` ? 0 : e.sightW),
    (e.scopeW = wr(n) ? l * (1 - e.relW) : 0),
    n?.mode === `BOLT` && a && e.fireT === 0
      ? (e.boltT = 0)
      : e.boltT >= 0 && (e.boltT += r));
  let d = n?.mode === `BOLT` && n.rpm ? 60 / n.rpm : 0;
  return (
    e.boltT >= 0 && (!d || o || e.boltT > br + d) && (e.boltT = -1),
    (e.bolt = e.boltT >= br ? xr((e.boltT - br) / d) : -1),
    e
  );
}
var Dr = 1.36,
  Or = 0.31,
  kr = 0.44,
  Ar = 2.2,
  jr = new s(0, 1, 0),
  Mr = `#7a796a`,
  Nr = `#5d5b4f`;
function Pr(e, t) {
  let n = new h(t),
    r = e.attributes.position.count,
    i = new Float32Array(r * 3);
  for (let e = 0; e < r; e++)
    ((i[e * 3] = n.r), (i[e * 3 + 1] = n.g), (i[e * 3 + 2] = n.b));
  return (e.setAttribute(`color`, new l(i, 3)), e);
}
function U(e, t, n, r, i = n) {
  let a = t.clone().sub(e),
    o = a.length(),
    s = new k(n, i, o, 3, 1, !0).toNonIndexed();
  return (
    s.applyQuaternion(new b().setFromUnitVectors(jr, a.normalize())),
    s.translate((e.x + t.x) / 2, (e.y + t.y) / 2, (e.z + t.z) / 2),
    Pr(s, r)
  );
}
function Fr(e, t, n, r, i = new s(0, 0, -1)) {
  let o = t.clone().sub(e),
    c = o.length();
  o.normalize();
  let l = new s()
      .crossVectors(o, i)
      .normalize()
      .multiplyScalar(n / 2),
    u = l.clone().cross(o).normalize().multiplyScalar(0.006),
    d = new a(1, 1, 1).toNonIndexed(),
    f = d.attributes.position;
  for (let t = 0; t < f.count; t++) {
    let n = f.getX(t) * 2,
      r = f.getY(t) + 0.5,
      i = f.getZ(t) * 2,
      a = e
        .clone()
        .addScaledVector(o, r * c)
        .addScaledVector(l, n)
        .addScaledVector(u, i);
    f.setXYZ(t, a.x, a.y, a.z);
  }
  return (d.computeVertexNormals(), Pr(d, r));
}
function Ir(e, t, n) {
  let r = [],
    i = [],
    a = new h();
  for (let o = 0; o <= t; o++)
    for (let s = 0; s <= e; s++) {
      let [c, l] = n(s / e, o / t, s, o);
      (r.push(c), i.push(a.set(l).clone()));
    }
  let o = (t, n) => n * (e + 1) + t,
    s = [];
  for (let n = 0; n < t; n++)
    for (let t = 0; t < e; t++)
      s.push(
        o(t, n),
        o(t + 1, n),
        o(t + 1, n + 1),
        o(t, n),
        o(t + 1, n + 1),
        o(t, n + 1),
      );
  let c = new d().setFromPoints(r);
  (c.setIndex(s), c.computeVertexNormals());
  let l = c.attributes.normal,
    u = [],
    f = [],
    p = [];
  for (let e = 0; e < s.length; e++) {
    let t = s[e],
      n = i[s[e - (e % 6)]];
    (u.push(r[t].x, r[t].y, r[t].z),
      f.push(l.getX(t), l.getY(t), l.getZ(t)),
      p.push(n.r, n.g, n.b));
  }
  c.dispose();
  let m = new d();
  return (
    m.setAttribute(`position`, new y(u, 3)),
    m.setAttribute(`normal`, new y(f, 3)),
    m.setAttribute(`color`, new y(p, 3)),
    m
  );
}
function Lr(e) {
  for (let t of e)
    (t.deleteAttribute(`uv`), t.attributes.normal || t.computeVertexNormals());
  let t = re(e);
  for (let t of e) t.dispose();
  return t;
}
var Rr = (e, t, n, r) => U(e, t, n, r, n * 0.15),
  zr = (e = -0.12, t = 0.1) =>
    [
      [-0.44, e],
      [-0.44, t],
      [kr, e],
      [kr, t],
    ].map(([e, t]) => new s(e, Ar, t));
