// assets__lab-buildings-view-DY6ytqNM 224 — material
// Lines 70109-70454 of readable/assets__lab-buildings-view-DY6ytqNM.pretty.js (statement-aligned).
function Px() {
  return {
    key: `trEcoLodge`,
    name: `Kapok Canopy Lodge`,
    plain: 11039818,
    desc: `Jungle eco-lodge: coral-rubble ground floor and vertical cedar-clad upper floor opened up with tall glazed doors, a deep bamboo-railed teak balcony on stone piers, huge open-eaved thatch hip roof with a ridge vent, rolled bamboo screens, carved name board, rain tank and potted palms.`,
    W: 16,
    D: 10,
    style: {
      wall: `trCladCedar`,
      floorMat: [`trCoralRubble`],
      t: 0.25,
      bay: 3.2,
      floors: [3.2, 3],
      win: {
        w: 1.6,
        h: 1.4,
        sill: 0.8,
        type: `grid`,
        lites: [2, 1],
        frame: `trTeak`,
        rec: 0.1,
        curtains: 0.5,
      },
      door: {
        w: 2.2,
        h: 2.3,
        transom: 0.3,
        frame: `trTeak`,
        glazed: !0,
        mat: `trTeak`,
        rec: 0.12,
      },
      belt: { mat: `trTeak`, h: 0.22, out: 0.06 },
      corners: `trTeak`,
      roof: ub(0.25),
    },
    front: {
      kinds: (e, t) => (e === 0 && t === 0 ? `solid` : `door`),
      extra: Nx,
    },
    back: { kinds: (e, t) => (e === 0 && t === 2 ? `door` : `window`) },
    left: { kinds: () => `window` },
    right: { kinds: (e, t) => (e === 0 && t === 1 ? `door` : `window`) },
    extra: (e, t, n) => {
      let r = cb(e, t, n, `trThatchDbl`, 30 * Ey, 2, null, !0);
      (e.box(
        `trThatch`,
        t,
        0,
        -r.rx - 0.3,
        r.rx + 0.3,
        r.yr - 0.2,
        r.yr + 0.15,
        -0.35,
        0.35,
      ),
        e.box(
          `trLatticeWood`,
          t,
          0,
          -1.6,
          1.6,
          r.yr + 0.15,
          r.yr + 0.75,
          -0.3,
          0.3,
        ),
        sb(e, t, 0, `trThatch`, 2, 0.6, r.yr + 0.75, 1.6, 0.05, r.yr + 1.2));
      for (let i of [-1, 1])
        for (let a of [-1, 1])
          k(
            e,
            `trTeak`,
            t,
            0,
            [i * (n.W / 2 - 0.1), n.H - 0.3, a * (n.D / 2 - 0.1)],
            [i * (r.x0 - 0.4), r.ye + 0.1, a * (r.z0 - 0.4)],
            0.14,
          );
      ($(e, `trTankGreen`, t, 0, -n.W / 2 - 1.1, 0, 2.4, -2.5, 0.95, 14),
        Yy(
          e,
          Z,
          t,
          0,
          [-n.W / 2 - 1.1, 2.4, -2.5],
          [-n.W / 2 - 0.1, 5.8, -2.5],
          0.05,
          6,
        ));
    },
  };
}
function Fx() {
  return (
    Uy(),
    [
      yb(),
      Sb(),
      Cb(),
      Db(),
      Pb(),
      Ib(),
      zb(),
      Vb(),
      Gb(),
      Jb(),
      Qb(),
      tx(),
      ix(),
      sx(),
      ux(),
      fx(),
      mx(),
      _x(),
      bx(),
      Sx(),
      wx(),
      Dx(),
      Ax(),
      Mx(),
      Px(),
    ]
  );
}
var Ix = [ct, He, Ee, zt, Ue, dr, xi, ma, Rc, Fl, $d, jp, Yh, S_, Ty, Fx],
  Lx = null;
function Rx() {
  if (Lx) return Lx;
  Lx = new Map();
  for (let e of Ix) for (let t of e()) Lx.has(t.key) || Lx.set(t.key, t);
  return Lx;
}
function zx(e) {
  let t = Object.entries(e.attributes),
    n = e.attributes.position?.count ?? 0;
  if (
    n < 24 ||
    Object.keys(e.morphAttributes).length ||
    t.some(
      ([, e]) =>
        e.isInterleavedBufferAttribute ||
        e.count !== n ||
        e.array.BYTES_PER_ELEMENT > 4,
    )
  )
    return e;
  let r = t.map(([, e]) => ({
      a: e,
      bits:
        e.array instanceof Float32Array
          ? new Uint32Array(e.array.buffer, e.array.byteOffset, e.array.length)
          : e.array,
    })),
    i = 1;
  for (; i < n * 2;) i *= 2;
  let a = new Uint32Array(i),
    o = new Uint32Array(n),
    s = new Uint32Array(n),
    c = 0,
    l = (e, t) => {
      for (let { a: n, bits: i } of r) {
        let r = n.itemSize,
          a = e * r,
          o = t * r;
        for (let e = 0; e < r; e++) if (i[a + e] !== i[o + e]) return !1;
      }
      return !0;
    };
  o.fill(2166136261);
  for (let { a: e, bits: t } of r) {
    let r = e.itemSize;
    for (let e = 0, i = 0; e < n; e++, i += r) {
      let n = o[e];
      for (let e = 0; e < r; e++) n = Math.imul(n ^ t[i + e], 16777619);
      o[e] = n;
    }
  }
  for (let e = 0; e < n; e++) {
    let t = o[e];
    ((t = Math.imul(t ^ (t >>> 16), 2246822507)),
      (t = Math.imul(t ^ (t >>> 13), 3266489909)),
      (t ^= t >>> 16));
    let n = (t >>> 0) & (i - 1);
    for (; a[n] && !l(e, a[n] - 1);) n = (n + 1) & (i - 1);
    a[n] ? (o[e] = o[a[n] - 1]) : ((a[n] = e + 1), (s[c] = e), (o[e] = c++));
  }
  let d = e.index?.array,
    f = c <= 65536 ? Uint16Array : Uint32Array,
    p = (d?.length ?? n) * f.BYTES_PER_ELEMENT,
    m = r.reduce((e, { a: t }) => e + t.array.byteLength, d?.byteLength ?? 0);
  if (
    r.reduce(
      (e, { a: t }) => e + c * t.itemSize * t.array.BYTES_PER_ELEMENT,
      p,
    ) >= m
  )
    return e;
  for (let n = 0; n < t.length; n++) {
    let [i, a] = t[n],
      o = new a.array.constructor(c * a.itemSize),
      l = r[n].bits,
      d = o instanceof Float32Array ? new Uint32Array(o.buffer) : o;
    for (let e = 0; e < c; e++) {
      let t = s[e] * a.itemSize,
        n = e * a.itemSize;
      for (let e = 0; e < a.itemSize; e++) d[n + e] = l[t + e];
    }
    let f = new u(o, a.itemSize, a.normalized);
    ((f.name = a.name),
      (f.gpuType = a.gpuType),
      f.setUsage(a.usage),
      e.setAttribute(i, f));
  }
  let h = new f(d?.length ?? n);
  for (let e = 0; e < h.length; e++) h[e] = o[d ? d[e] : e];
  return (e.setIndex(new u(h, 1)), e);
}
var Bx = new Set([
    `glass`,
    `glassBlue`,
    `glassGrey`,
    `glassBronze`,
    `glassVault`,
  ]),
  Vx = [
    `map`,
    `alphaMap`,
    `aoMap`,
    `bumpMap`,
    `normalMap`,
    `displacementMap`,
    `emissiveMap`,
    `metalnessMap`,
    `roughnessMap`,
    `lightMap`,
    `envMap`,
  ],
  Hx =
    `type.side.shadowSide.blending.blendSrc.blendDst.blendEquation.depthFunc.depthTest.depthWrite.colorWrite.stencilWrite.polygonOffset.polygonOffsetFactor.polygonOffsetUnits.alphaTest.opacity.transparent.premultipliedAlpha.dithering.fog.toneMapped.flatShading.wireframe.roughness.metalness.envMapIntensity.emissiveIntensity.vertexColors`.split(
      `.`,
    );
function Ux(e) {
  return !(
    !e?.isMeshStandardMaterial ||
    e.type !== `MeshStandardMaterial` ||
    !Bx.has(e.name) ||
    e.transparent ||
    e.opacity !== 1 ||
    e.alphaTest !== 0 ||
    !e.depthTest ||
    !e.depthWrite ||
    e.stencilWrite ||
    Vx.some((t) => e[t]) ||
    e.emissive?.r ||
    e.emissive?.g ||
    e.emissive?.b ||
    e.clippingPlanes?.length ||
    Object.keys(e.defines ?? {}).some((e) => e !== `STANDARD`) ||
    e.defines?.STANDARD !== ``
  );
}
function Wx(e, t) {
  return !Ux(e) ||
    !Ux(t) ||
    Hx.some((n) => e[n] !== t[n]) ||
    e.customProgramCacheKey() !== t.customProgramCacheKey()
    ? !1
    : String(e.onBeforeCompile) === String(t.onBeforeCompile);
}
function Gx(e, t, n) {
  let r = e.attributes.position.count,
    i = e.attributes.color,
    a = n && i?.itemSize === 4 ? 4 : 3,
    o = new Float32Array(r * a);
  for (let e = 0; e < r; e++)
    ((o[e * a] = t.r * (n && i ? i.getX(e) : 1)),
      (o[e * a + 1] = t.g * (n && i ? i.getY(e) : 1)),
      (o[e * a + 2] = t.b * (n && i ? i.getZ(e) : 1)),
      a === 4 && (o[e * a + 3] = i.getW(e)));
  e.setAttribute(`color`, new u(o, a));
}
function Kx(e) {
  let t = [];
  for (let [n, r] of e) {
    if (!Ux(r.mesh.material)) continue;
    let [e, , i, a] = n.split(`|`),
      o = t.find(
        (t) =>
          t.chunk === e &&
          t.cast === i &&
          t.receive === a &&
          t.depth === r.mesh.customDepthMaterial &&
          Wx(t.material, r.mesh.material),
      );
    (o ||
      t.push(
        (o = {
          chunk: e,
          cast: i,
          receive: a,
          depth: r.mesh.customDepthMaterial,
          material: r.mesh.material,
          entries: [],
        }),
      ),
      o.entries.push([n, r]));
  }
  let n = 0,
    r = 0;
  for (let i of t) {
    if (i.entries.length < 2) continue;
    let t = i.material.clone();
    ((t.onBeforeCompile = i.material.onBeforeCompile),
      (t.customProgramCacheKey = i.material.customProgramCacheKey),
      t.color.setRGB(1, 1, 1),
      (t.vertexColors = !0),
      (t.name = `facadeSolidBatch`));
    let a = [];
    for (let [t, n] of i.entries) {
      for (let e of n.geos)
        (Gx(e, n.mesh.material.color, n.mesh.material.vertexColors), a.push(e));
      e.delete(t);
    }
    let o = `${i.chunk}|facade-solid-${r}|${i.cast}|${i.receive}`;
    (e.set(o, {
      mesh: {
        material: t,
        castShadow: i.entries[0][1].mesh.castShadow,
        receiveShadow: i.entries[0][1].mesh.receiveShadow,
        customDepthMaterial: i.depth,
      },
      geos: a,
    }),
      (n += i.entries.length - 1),
      r++);
  }
  return { batches: r, removed: n };
}
function qx(e, t, n) {
  let r = !1;
  e.addEventListener(`dispose`, () => {
    r || ((r = !0), t.dispose(), n.dispose());
  });
}
