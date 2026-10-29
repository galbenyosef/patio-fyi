// assets__continental-kit-BYKNMKwf 02 — add
// Lines 292-532 of readable/assets__continental-kit-BYKNMKwf.pretty.js (statement-aligned).
function R(n, a, s = 3.8) {
  let c = new f();
  (c.position.set(0, s - 0.26, 0), n.add(c));
  let l = new e(new h(0.012, 0.012, 0.5), a.brass);
  ((l.position.y = -0.25), c.add(l));
  let u = I(
    [
      [0, 0],
      [0.08, -0.05],
      [0.13, -0.2],
      [0.06, -0.34],
      [0.1, -0.42],
      [0.02, -0.52],
      [0, -0.52],
    ],
    a.gold,
  );
  ((u.position.y = -0.5), c.add(u));
  let d = new e(new r(0.42, 0.018, 8, 48), a.gold);
  ((d.rotation.x = Math.PI / 2), (d.position.y = -0.86), c.add(d));
  let p = new i({
      color: 16774888,
      emissive: 16764808,
      emissiveIntensity: 0.6,
      roughness: 0.05,
      metalness: 0.3,
    }),
    m = [];
  for (let n = 0; n < 8; n++) {
    let r = (n / 8) * Math.PI * 2,
      s = Math.cos(r) * 0.42,
      l = Math.sin(r) * 0.42,
      u = new e(new h(0.01, 0.01, 0.42), a.gold);
    (u.position.set(s / 2, -0.8, l / 2),
      (u.rotation.z = Math.PI / 2),
      (u.rotation.y = -r),
      c.add(u));
    let d = I(
      [
        [0, 0],
        [0.045, 0.02],
        [0.05, 0.05],
        [0, 0.05],
      ],
      a.gold,
      12,
    );
    (d.position.set(s, -0.87, l), c.add(d));
    let f = new e(
      new h(0.016, 0.016, 0.09, 10),
      new i({ color: 15919832, roughness: 0.6 }),
    );
    (f.position.set(s, -0.78, l), c.add(f));
    let g = new e(new t(0.024, 10, 8), a.glow);
    ((g.scale.y = 1.5), g.position.set(s, -0.7, l), c.add(g), m.push(g));
    for (let t = 0; t < 3; t++) {
      let n = new e(new o(0.022), p);
      ((n.scale.y = 1.8),
        n.position.set(
          Math.cos(r + 0.39) * 0.43,
          -0.93 - t * 0.055,
          Math.sin(r + 0.39) * 0.43,
        ),
        c.add(n));
    }
  }
  let _ = new e(new o(0.05), p);
  ((_.scale.y = 2), (_.position.y = -1.08), c.add(_));
  let v = new g(16761466, 9, 9, 2);
  return (v.position.set(0, -0.75, 0), c.add(v), v);
}
var z = {
    jacket: 15656143,
    shirt: 16513782,
    black: 1579035,
    skin: 14265996,
    mask: 2565932,
    socket: 2826525,
    eye: 15331810,
    halo: 13625544,
  },
  B = 0.215;
function V(t = {}) {
  let n = Object.assign({}, z, t),
    r = new k({
      faction: 0,
      cls: `assault`,
      body: `seamless`,
      kit: 0,
      face: 0,
      headgear: 0,
    }),
    o = r.sk,
    s = (e, t = 0.7) => new i({ color: e, roughness: t }),
    c = {
      jacket: s(n.jacket, 0.78),
      trouser: s(n.black, 0.92),
      shoe: s(460552, 0.3),
      head: s(n.mask, 0.8),
      tones: new i({ vertexColors: !0, roughness: 0.65, flatShading: !0 }),
    },
    d = new Set([
      r.material,
      r.smoothMaterial,
      r.limbMaterial,
      r.shellMaterial,
      ...r.paintMats,
    ]),
    f = 0;
  for (let e of [...r.meshes]) {
    let t = e.parent?.name,
      i = () => {
        (e.removeFromParent(),
          e.geometry.dispose(),
          r.meshes.splice(r.meshes.indexOf(e), 1));
      };
    if (t === `head` || t === `weapon`) i();
    else if (t === `torso`)
      e.geometry.userData.smoothLimb
        ? (e.geometry.dispose(),
          (e.geometry = E(0.42, 0.32, 0.25, 0.42, 0.012)),
          (e.material = c.jacket))
        : i();
    else if (t === `hips`) e.material = f++ ? c.trouser : c.jacket;
    else if (t === `armL` || t === `armR`) {
      if (!e.geometry.userData.bend) {
        i();
        continue;
      }
      let t = y({
        top: 0.05,
        bottom: -0.52,
        a: [0.066, 0.066],
        b: [0.058, 0.058],
        round: 0,
        joints: [{ y: -b, band: 0.1, below: !0 }],
        colour: () => [16777215, x.cloth, 0.9],
      });
      for (let n of r.limbs) n.g === e.geometry && (n.g = t);
      (e.geometry.dispose(), (e.geometry = t), (e.material = c.jacket));
    } else if (t === `foreL` || t === `foreR`) {
      let t = e.geometry.attributes.position,
        r = new Float32Array(t.count * 3),
        i = new u(n.shirt),
        o = new u(n.skin);
      for (let e = 0; e < t.count; e++)
        (t.getY(e) > -0.258 ? i : o).toArray(r, e * 3);
      (e.geometry.setAttribute(`color`, new a(r, 3)), (e.material = c.tones));
    } else
      t === `legL` || t === `legR`
        ? (e.material = c.trouser)
        : (t === `shinL` || t === `shinR`) && (e.material = c.shoe);
  }
  for (let e of r.glow ?? []) e.removeFromParent();
  r.glow = [];
  for (let e of d) e?.dispose();
  let p = new e(
    D([
      T(0.2, 0.05, 0.17, 0, 0.6, 0, n.shirt),
      T(0.12, 0.12, 0.006, 0, 0.53, -0.128, n.shirt, { bevel: 0 }),
      T(0.07, 0.1, 0.006, 0, 0.43, -0.128, n.shirt, { bevel: 0 }),
      ...[-1, 1].map((e) =>
        T(0.035, 0.26, 0.008, e * 0.058, 0.46, -0.13, n.jacket, {
          bevel: 0,
          rot: [0, 0, -e * 0.26],
          shade: 0.86,
        }),
      ),
      ...[-1, 1].map((e) =>
        T(0.05, 0.034, 0.02, e * 0.03, 0.585, -0.136, n.black, {
          bevel: 0.006,
        }),
      ),
      T(0.02, 0.024, 0.024, 0, 0.585, -0.14, n.black, { bevel: 0.004 }),
      T(0.018, 0.018, 0.006, 0, 0.33, -0.129, n.black, { bevel: 0 }),
    ]),
    c.tones,
  );
  ((p.castShadow = !0), o.torso.add(p));
  let h = new e(v(C.w, C.h, C.d, 0.022), c.head);
  ((h.position.y = C.y), (h.castShadow = !0), o.head.add(h));
  let g = new e(v(0.13, 0.1, 0.12, 0.02), c.head);
  (g.position.set(0, 0.02, 0.01), o.head.add(g));
  let _ = new i({
      color: n.socket,
      roughness: 0.9,
      polygonOffset: !0,
      polygonOffsetFactor: -2,
    }),
    A = new l({ color: n.eye, toneMapped: !1, side: 2 });
  for (let t of [-1, 1]) {
    let n = new e(new m(0.058, 0.02), _);
    (n.position.set(t * 0.052, B, S - 0.0015),
      n.rotation.set(0, Math.PI, t * -0.28),
      o.head.add(n));
    let r = new e(new m(0.044, 0.009), A);
    (r.position.set(t * 0.052, B, S - 0.0025),
      (r.rotation.z = t * 0.28),
      o.head.add(r));
  }
  let j = w();
  return (
    O(
      {
        h: 1.8,
        lean: 0,
        hspeed: 0,
        moveF: 0,
        moveR: 0,
        phase: 0,
        sprintW: 0,
        aimW: 0,
        pitch: 0,
        grounded: !0,
        swim: !1,
        airT: 0,
        fireT: 99,
        reloadT: 99,
        hitT: 99,
        landT: 99,
        deadT: -1,
        deadDir: 0,
        breathe: 0,
      },
      j,
    ),
    (r.contactR = r.contactL = 0),
    {
      s: r,
      sk: o,
      root: r.root,
      base: j,
      dispose() {
        (r.root.removeFromParent(),
          r.root.traverse((e) => e.geometry?.dispose()));
        for (let e of Object.values(c)) e.dispose();
        (A.dispose(), _.dispose());
      },
    }
  );
}
