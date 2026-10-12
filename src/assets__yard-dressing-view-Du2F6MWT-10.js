// assets__yard-dressing-view-Du2F6MWT 10 — build
// Lines 2856-3205 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function on(e, t) {
  let n = U(e),
    r = new D(),
    i = t.length ?? 10,
    a = 0.6,
    o = 0.9 + n() * 0.2,
    s = new b({ map: Nt((e % 4) + 60, 0.25), roughness: 0.92 });
  for (let e of [-1, 1]) {
    let t = e * (o / 2 + a / 2),
      n = new D();
    ((n.position.x = t),
      Pt(n, Ft(a, i), 0.1, s, 1.5),
      It(n, a, i, 1.5, 0.04),
      r.add(n));
  }
  return (
    bt(r, t, o + a * 2, i, e, 6, { y: 0.046 }),
    R(r, {
      clear: (e, t) =>
        Math.abs(t) < i / 2 + 0.02 &&
        Math.abs(Math.abs(e) - (o / 2 + a / 2)) < 0.32,
      sunk: !0,
      keepGrass: !0,
      drive: { w: o + a * 2, l: i },
    })
  );
}
var sn = [
    {
      key: `lawnMown`,
      cat: `lawns`,
      name: `Mown lawn`,
      desc: `Freshly cut, striped by the mower`,
      build: xt,
    },
    {
      key: `lawnShaggy`,
      cat: `lawns`,
      name: `Shaggy lawn`,
      desc: `Overdue a cut: clover, dandelions, a bare patch`,
      build: St,
    },
    {
      key: `lawnFall`,
      cat: `lawns`,
      name: `Fall leaf lawn`,
      desc: `Green grass under a carpet of maple leaves`,
      build: Ct,
    },
    {
      key: `leafPiles`,
      cat: `lawns`,
      name: `Raked leaf piles`,
      desc: `Piles, a rake and a tarp half-loaded`,
      build: wt,
    },
    {
      key: `pathStepping`,
      cat: `paths`,
      name: `Stepping stones`,
      desc: `Flagstone or round pavers through the grass`,
      build: Et,
    },
    {
      key: `pathFlagstone`,
      cat: `paths`,
      name: `Flagstone path`,
      desc: `Irregular flags with gravel or moss joints`,
      build: Dt,
    },
    {
      key: `pathBrick`,
      cat: `paths`,
      name: `Brick walk`,
      desc: `Herringbone, basketweave or running bond`,
      build: jt,
    },
    {
      key: `pathGravel`,
      cat: `paths`,
      name: `Gravel path`,
      desc: `Curving gravel with steel, timber or brick edge`,
      build: Mt,
    },
    {
      key: `pathConcrete`,
      cat: `paths`,
      name: `Concrete walk`,
      desc: `Broom finish with control joints`,
      build: Lt,
    },
    {
      key: `stoneSteps`,
      cat: `paths`,
      name: `Stone steps`,
      desc: `Slab steps set into a grassy bank`,
      build: Rt,
    },
    {
      key: `stoneWall`,
      cat: `paths`,
      name: `Stone wall`,
      desc: `Dry-stacked garden wall with capstones`,
      build: zt,
    },
    {
      key: `stoneLandscape`,
      cat: `paths`,
      name: `Rock landscaping`,
      desc: `River rock, boulders and ornamental grasses`,
      build: Bt,
    },
    {
      key: `flowerBed`,
      cat: `beds`,
      name: `Flower bed`,
      desc: `Hydrangeas, perennials and annuals; mums in fall`,
      build: Wt,
    },
    {
      key: `mulchBed`,
      cat: `beds`,
      name: `Mulch bed`,
      desc: `Foundation shrubs in brown, red or black mulch`,
      build: Gt,
    },
    {
      key: `treeRing`,
      cat: `beds`,
      name: `Tree ring`,
      desc: `A staked young tree in a mulch ring`,
      build: qt,
    },
    {
      key: `hedgeRow`,
      cat: `beds`,
      name: `Hedge`,
      desc: `Clipped privet, boxwood or arborvitae`,
      build: Jt,
    },
    {
      key: `driveConcrete`,
      cat: `drive`,
      name: `Concrete driveway`,
      desc: `Control joints, flared apron, tyre marks`,
      build: tn,
    },
    {
      key: `driveAsphalt`,
      cat: `drive`,
      name: `Asphalt driveway`,
      desc: `Fresh sealcoat or old and cracked`,
      build: nn,
    },
    {
      key: `driveGravel`,
      cat: `drive`,
      name: `Gravel driveway`,
      desc: `Two worn ruts and a weedy middle`,
      build: rn,
    },
    {
      key: `drivePavers`,
      cat: `drive`,
      name: `Paver driveway`,
      desc: `Interlocking pavers with a soldier border`,
      build: an,
    },
    {
      key: `driveRibbon`,
      cat: `drive`,
      name: `Ribbon driveway`,
      desc: `Two concrete strips with grass between`,
      build: on,
    },
  ],
  J = Math.PI,
  cn = (e) => e.season === `fall`,
  ln = (e, t, n, r) =>
    new le(
      e,
      t,
      n,
      2,
      Math.min(r, e / 2 - 0.001, t / 2 - 0.001, n / 2 - 0.001),
    );
function un(e, t, n, i = 0) {
  let a = Math.max(e, t, n),
    o = (e, t, n) => (i ? ln(e, t, n, i) : new r(e, t, n));
  return a === e
    ? o(e, t, n)
    : a === t
      ? o(t, e, n).rotateZ(J / 2)
      : o(n, t, e).rotateY(J / 2);
}
var Y = (e, t, n, r, i, a = 0, o = 0, s = 0, c = 0, l = 0, u = 0, d = 0) =>
    I(e, un(t, n, r, c), i, a, o, s, l, u, d),
  dn = (e, t, n, r, i, a = 0, o = 0, s = 0, c = 0, l = 0) =>
    Y(e, t, n, r, i, a, o + n / 2, s, c, 0, l, 0);
function fn(e, t, n = [], r = null) {
  let i = new k(e.map(([e, t]) => new _(e, t)));
  for (let e of n) i.holes.push(new h(e.map(([e, t]) => new _(e, t))));
  let a = new re(i, { depth: t, bevelEnabled: !1, curveSegments: 8 });
  if (r) {
    let e = a.attributes.position,
      t = a.attributes.uv;
    for (let n = 0; n < e.count; n++) {
      let [i, a] = r(e.getX(n), e.getY(n), e.getZ(n));
      t.setXY(n, i, a);
    }
  }
  return a;
}
function pn(e, t, n, i, a, o) {
  let s = new A(...t),
    c = new A(...n),
    l = s.distanceTo(c),
    d = c.clone().sub(s).normalize(),
    f = new A().crossVectors(d, new A(0, 1, 0));
  (f.lengthSq() < 1e-6 && f.set(0, 0, 1), f.normalize());
  let p = new A().crossVectors(f, d),
    m = new v(l >= Math.max(i, a) ? new r(l, i, a) : un(l, i, a), o);
  return (
    m.position.copy(s).add(c).multiplyScalar(0.5),
    m.quaternion.setFromRotationMatrix(new u().makeBasis(d, p, f)),
    (m.castShadow = m.receiveShadow = !0),
    e.add(m),
    m
  );
}
function mn(e, t, n, r) {
  let i = new C(e, t),
    a = i.attributes.position,
    o = i.attributes.uv;
  for (let e = 0; e < a.count; e++) o.setXY(e, a.getX(e) / n, a.getY(e) / r);
  return i;
}
function hn(e) {
  e.updateMatrixWorld(!0);
  let t = e.matrixWorld.clone().invert(),
    n = new Map(),
    r = [],
    i = new u(),
    a = (e) => {
      for (let o of e.children)
        if (!(o.userData.tick || o.userData.live)) {
          if (o.isMesh && !o.isInstancedMesh && !Array.isArray(o.material)) {
            let e = o.geometry.index
              ? o.geometry.toNonIndexed()
              : o.geometry.clone();
            for (let t of Object.keys(e.attributes))
              t !== `position` &&
                t !== `normal` &&
                t !== `uv` &&
                e.deleteAttribute(t);
            (e.attributes.normal || e.computeVertexNormals(),
              e.attributes.uv ||
                e.setAttribute(
                  `uv`,
                  new s(new Float32Array(e.attributes.position.count * 2), 2),
                ),
              e.clearGroups(),
              (e.morphAttributes = {}),
              e.applyMatrix4(i.multiplyMatrices(t, o.matrixWorld)));
            let a = o.material.uuid + (o.castShadow ? `1` : `0`);
            (n.has(a) ||
              n.set(a, { m: o.material, cs: o.castShadow, geos: [] }),
              n.get(a).geos.push(e),
              r.push(o));
          }
          a(o);
        }
    };
  a(e);
  for (let e of r) e.parent.remove(e);
  for (let { m: t, cs: r, geos: i } of n.values()) {
    let n = ie(i, !1);
    if (!n) continue;
    let a = new v(n, t);
    ((a.castShadow = r), (a.receiveShadow = !0), e.add(a));
  }
  let o = (e) => {
    for (let t of [...e.children])
      (o(t),
        t.type === `Group` &&
          !t.children.length &&
          !t.userData.tick &&
          e.remove(t));
  };
  return (o(e), e);
}
var gn = (e, t = 0.6) => H(e, t),
  _n = () => H(10791341, 0.45, 0.35),
  vn = () => q.concrete(),
  yn = () => G(10326120, 0.9, 11),
  bn = 16053230,
  xn = (e, t = 0.82) => [0.9, 1, 1.08].map((n, r) => G(Se(e, n), t, 3 + r)),
  Sn = {
    cedar: W.cedar,
    treated: 11573868,
    weathered: W.weathered,
    redwood: W.redwood,
    brown: 7228982,
  },
  Cn = new Map();
function wn(e) {
  if (Cn.has(e)) return Cn.get(e);
  let t = ke(`yard-lattice`, 256, 256, (e, t) => {
      (e.clearRect(0, 0, t, t),
        (e.strokeStyle = `#ffffff`),
        (e.lineWidth = 46));
      for (let t = -2; t <= 2; t++)
        (e.beginPath(),
          e.moveTo(t * 128, 0),
          e.lineTo(t * 128 + 256, 256),
          e.stroke(),
          e.beginPath(),
          e.moveTo(t * 128 + 256, 0),
          e.lineTo(t * 128, 256),
          e.stroke());
    }),
    n = new b({ map: t, color: e, roughness: 0.75, alphaTest: 0.5, side: 2 });
  return (Cn.set(e, n), n);
}
var Tn = null,
  En = () =>
    (Tn ??= new b({
      color: 1975840,
      roughness: 0.5,
      metalness: 0.3,
      alphaTest: 0.5,
      side: 2,
      map: ke(`yard-weldwire`, 64, 128, (e, t, n) => {
        (e.clearRect(0, 0, t, n),
          (e.fillStyle = `#ffffff`),
          e.fillRect(0, 0, t, 5),
          e.fillRect(0, 0, 5, n));
      }),
    })),
  Dn = (e, t, n, r, i) => j(e, 0.0055, i, t, n, r, 6);
function On(e, t, n, r, i, a, o, s = _e()) {
  let c = 0.004,
    l = r + (o * c) / 2;
  (V(e, 0.05, 0.09, c, s, t - a * 0.03, n, l),
    z(e, 0.0075, 0.0075, 0.095, s, t, n - 0.0475, r + o * 0.008, 8),
    V(e, i, 0.032, c, s, t + (a * i) / 2, n, l),
    V(e, 0.045, 0.045, c, s, t + a * (i - 0.01), n, l, 0, 0, J / 4));
  for (let r of [0.25, 0.55, 0.88]) Dn(e, t + a * i * r, n, l + o * 0.003, s);
  for (let r of [-0.028, 0.028]) Dn(e, t - a * 0.03, n + r, l + o * 0.003, s);
}
