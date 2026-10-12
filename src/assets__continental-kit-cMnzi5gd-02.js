// assets__continental-kit-cMnzi5gd 02 — add
// Lines 292-532 of readable/assets__continental-kit-cMnzi5gd.pretty.js (statement-aligned).
function R(e, t, n = 3.8) {
  let a = new p();
  (a.position.set(0, n - 0.26, 0), e.add(a));
  let o = new s(new r(0.012, 0.012, 0.5), t.brass);
  ((o.position.y = -0.25), a.add(o));
  let c = I(
    [
      [0, 0],
      [0.08, -0.05],
      [0.13, -0.2],
      [0.06, -0.34],
      [0.1, -0.42],
      [0.02, -0.52],
      [0, -0.52],
    ],
    t.gold,
  );
  ((c.position.y = -0.5), a.add(c));
  let d = new s(new i(0.42, 0.018, 8, 48), t.gold);
  ((d.rotation.x = Math.PI / 2), (d.position.y = -0.86), a.add(d));
  let f = new l({
      color: 16774888,
      emissive: 16764808,
      emissiveIntensity: 0.6,
      roughness: 0.05,
      metalness: 0.3,
    }),
    m = [];
  for (let e = 0; e < 8; e++) {
    let n = (e / 8) * Math.PI * 2,
      i = Math.cos(n) * 0.42,
      o = Math.sin(n) * 0.42,
      c = new s(new r(0.01, 0.01, 0.42), t.gold);
    (c.position.set(i / 2, -0.8, o / 2),
      (c.rotation.z = Math.PI / 2),
      (c.rotation.y = -n),
      a.add(c));
    let d = I(
      [
        [0, 0],
        [0.045, 0.02],
        [0.05, 0.05],
        [0, 0.05],
      ],
      t.gold,
      12,
    );
    (d.position.set(i, -0.87, o), a.add(d));
    let p = new s(
      new r(0.016, 0.016, 0.09, 10),
      new l({ color: 15919832, roughness: 0.6 }),
    );
    (p.position.set(i, -0.78, o), a.add(p));
    let h = new s(new g(0.024, 10, 8), t.glow);
    ((h.scale.y = 1.5), h.position.set(i, -0.7, o), a.add(h), m.push(h));
    for (let e = 0; e < 3; e++) {
      let t = new s(new u(0.022), f);
      ((t.scale.y = 1.8),
        t.position.set(
          Math.cos(n + 0.39) * 0.43,
          -0.93 - e * 0.055,
          Math.sin(n + 0.39) * 0.43,
        ),
        a.add(t));
    }
  }
  let _ = new s(new u(0.05), f);
  ((_.scale.y = 2), (_.position.y = -1.08), a.add(_));
  let v = new h(16761466, 9, 9, 2);
  return (v.position.set(0, -0.75, 0), a.add(v), v);
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
function V(e = {}) {
  let t = Object.assign({}, z, e),
    r = new D({
      faction: 0,
      cls: `assault`,
      body: `seamless`,
      kit: 0,
      face: 0,
      headgear: 0,
    }),
    i = r.sk,
    a = (e, t = 0.7) => new l({ color: e, roughness: t }),
    o = {
      jacket: a(t.jacket, 0.78),
      trouser: a(t.black, 0.92),
      shoe: a(460552, 0.3),
      head: a(t.mask, 0.8),
      tones: new l({ vertexColors: !0, roughness: 0.65, flatShading: !0 }),
    },
    u = new Set([
      r.material,
      r.smoothMaterial,
      r.limbMaterial,
      r.shellMaterial,
      ...r.paintMats,
    ]),
    f = 0;
  for (let e of [...r.meshes]) {
    let i = e.parent?.name,
      a = () => {
        (e.removeFromParent(),
          e.geometry.dispose(),
          r.meshes.splice(r.meshes.indexOf(e), 1));
      };
    if (i === `head` || i === `weapon`) a();
    else if (i === `torso`)
      e.geometry.userData.smoothLimb
        ? (e.geometry.dispose(),
          (e.geometry = y(0.42, 0.32, 0.25, 0.42, 0.012)),
          (e.material = o.jacket))
        : a();
    else if (i === `hips`) e.material = f++ ? o.trouser : o.jacket;
    else if (i === `armL` || i === `armR`) {
      if (!e.geometry.userData.bend) {
        a();
        continue;
      }
      let t = T({
        top: 0.05,
        bottom: -0.52,
        a: [0.066, 0.066],
        b: [0.058, 0.058],
        round: 0,
        joints: [{ y: -w, band: 0.1, below: !0 }],
        colour: () => [16777215, C.cloth, 0.9],
      });
      for (let n of r.limbs) n.g === e.geometry && (n.g = t);
      (e.geometry.dispose(), (e.geometry = t), (e.material = o.jacket));
    } else if (i === `foreL` || i === `foreR`) {
      let r = e.geometry.attributes.position,
        i = new Float32Array(r.count * 3),
        a = new c(t.shirt),
        s = new c(t.skin);
      for (let e = 0; e < r.count; e++)
        (r.getY(e) > -0.258 ? a : s).toArray(i, e * 3);
      (e.geometry.setAttribute(`color`, new n(i, 3)), (e.material = o.tones));
    } else
      i === `legL` || i === `legR`
        ? (e.material = o.trouser)
        : (i === `shinL` || i === `shinR`) && (e.material = o.shoe);
  }
  for (let e of r.glow ?? []) e.removeFromParent();
  r.glow = [];
  for (let e of u) e?.dispose();
  let p = new s(
    k([
      v(0.2, 0.05, 0.17, 0, 0.6, 0, t.shirt),
      v(0.12, 0.12, 0.006, 0, 0.53, -0.128, t.shirt, { bevel: 0 }),
      v(0.07, 0.1, 0.006, 0, 0.43, -0.128, t.shirt, { bevel: 0 }),
      ...[-1, 1].map((e) =>
        v(0.035, 0.26, 0.008, e * 0.058, 0.46, -0.13, t.jacket, {
          bevel: 0,
          rot: [0, 0, -e * 0.26],
          shade: 0.86,
        }),
      ),
      ...[-1, 1].map((e) =>
        v(0.05, 0.034, 0.02, e * 0.03, 0.585, -0.136, t.black, {
          bevel: 0.006,
        }),
      ),
      v(0.02, 0.024, 0.024, 0, 0.585, -0.14, t.black, { bevel: 0.004 }),
      v(0.018, 0.018, 0.006, 0, 0.33, -0.129, t.black, { bevel: 0 }),
    ]),
    o.tones,
  );
  ((p.castShadow = !0), i.torso.add(p));
  let m = new s(x(S.w, S.h, S.d, 0.022), o.head);
  ((m.position.y = S.y), (m.castShadow = !0), i.head.add(m));
  let h = new s(x(0.13, 0.1, 0.12, 0.02), o.head);
  (h.position.set(0, 0.02, 0.01), i.head.add(h));
  let g = new l({
      color: t.socket,
      roughness: 0.9,
      polygonOffset: !0,
      polygonOffsetFactor: -2,
    }),
    A = new _({ color: t.eye, toneMapped: !1, side: 2 });
  for (let e of [-1, 1]) {
    let t = new s(new d(0.058, 0.02), g);
    (t.position.set(e * 0.052, B, b - 0.0015),
      t.rotation.set(0, Math.PI, e * -0.28),
      i.head.add(t));
    let n = new s(new d(0.044, 0.009), A);
    (n.position.set(e * 0.052, B, b - 0.0025),
      (n.rotation.z = e * 0.28),
      i.head.add(n));
  }
  let j = E();
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
      sk: i,
      root: r.root,
      base: j,
      dispose() {
        (r.root.removeFromParent(),
          r.root.traverse((e) => e.geometry?.dispose()));
        for (let e of Object.values(o)) e.dispose();
        (A.dispose(), g.dispose());
      },
    }
  );
}
