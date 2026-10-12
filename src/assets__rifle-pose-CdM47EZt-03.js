// assets__rifle-pose-CdM47EZt 03 — userdata
// Lines 661-976 of readable/assets__rifle-pose-CdM47EZt.pretty.js (statement-aligned).
function St(e) {
  let t = bt.get(e);
  if (t) return t;
  let n = Array(vt.length).fill(null),
    r = new Map(),
    i = [],
    a = 0,
    o = 0,
    s = () => {
      for (
        i.sort((e, t) => e.priority - t.priority || e.sequence - t.sequence);
        a < 4 && i.length;
      ) {
        let t = i.shift();
        ((t.queued = !1),
          a++,
          Promise.resolve()
            .then(() => e.loadGLTF(vt[t.id]))
            .then(
              (e) => {
                (r.delete(t.id), (n[t.id] = e.scene), t.resolve(e.scene));
              },
              (e) => {
                (r.delete(t.id), t.reject(e));
              },
            )
            .finally(() => {
              (a--, s());
            }));
      }
    },
    c = (e, { priority: t = `remote` } = {}) => {
      if (((e = Number(e)), !vt[e])) return Promise.resolve(null);
      if (n[e]) return Promise.resolve(n[e]);
      let a = yt[t] ?? yt.remote,
        c = r.get(e);
      if (c)
        return (
          c.queued && a < c.priority && ((c.priority = a), s()),
          c.promise
        );
      let l,
        u,
        d = new Promise((e, t) => {
          ((l = e), (u = t));
        }),
        f = {
          id: e,
          priority: a,
          sequence: o++,
          resolve: l,
          reject: u,
          promise: d,
          queued: !0,
        };
      return (r.set(e, f), i.push(f), s(), d);
    };
  return (
    (t = {
      scenes: n,
      has: (e) => !vt[e] || !!n[e],
      ensure: c,
      ensureMany: async (e, t) => (
        await Promise.all([...new Set(e)].map((e) => c(e, t))),
        n
      ),
    }),
    bt.set(e, t),
    t
  );
}
function Ct(e) {
  let t = xt.get(e);
  return (
    t ||
      ((t = St(e).ensureMany(
        vt.flatMap((e, t) => (e ? [t] : [])),
        { priority: `background` },
      )),
      xt.set(e, t),
      t.catch(() => xt.delete(e))),
    t
  );
}
function wt(e, t, n, r) {
  let i = r[t.id];
  if (!i) throw Error(`Missing authored weapon ` + t.id);
  let a = new M(),
    o = new Map(),
    s = new Map(),
    c = [],
    l,
    u = t.class === `launcher`;
  try {
    if (
      (i.updateMatrixWorld(!0),
      i.traverse((e) => {
        if (
          (e.userData.metrics && (l = JSON.parse(e.userData.metrics)),
          !e.isMesh)
        )
          return;
        let t = e;
        for (; t && !t.userData.component;) t = t.parent;
        let n = t?.userData.component;
        if (
          ![
            `body`,
            `magazine`,
            `bolt`,
            `round`,
            `cover`,
            `belt`,
            `muzzle`,
            `iron`,
            `mount`,
          ].includes(n) ||
          Array.isArray(e.material)
        )
          throw Error(`Invalid authored weapon primitive`);
        if (!o.has(n)) {
          let e = new M();
          ((e.name = `authored_` + n),
            e.position.fromArray(t.userData.offset),
            e.rotation.fromArray(t.userData.rotation),
            o.set(n, e),
            a.add(e));
        }
        let r = e.geometry.clone();
        if ((r.applyMatrix4(e.matrixWorld), u)) {
          let e = T(r, (40 * Math.PI) / 180);
          (r.dispose(), (r = e));
        }
        if ((c.push(r), !s.has(e.material))) {
          let t = e.material.clone();
          ((t.flatShading = !u && e.material.userData.smoothNormals !== !0),
            s.set(e.material, t));
        }
        let i = new _(r, s.get(e.material));
        ((i.castShadow = !0), o.get(n).add(i));
      }),
      l?.weaponId !== t.id ||
        !o.has(`body`) ||
        !(t.class === `launcher` ? o.has(`round`) : o.has(`magazine`)) ||
        ![`top`, `muzzleZ`, `sightZ`].every((e) => Number.isFinite(l[e])) ||
        (t.class === `sniper` && !o.has(`bolt`)) ||
        (l.authoredIrons &&
          (!o.has(`iron`) ||
            !Array.isArray(l.ironAim) ||
            l.ironAim.length !== 3 ||
            !l.ironAim.every(Number.isFinite))))
    )
      throw Error(`Invalid authored weapon contract ` + t.id);
  } catch (e) {
    throw (c.forEach((e) => e.dispose()), s.forEach((e) => e.dispose()), e);
  }
  return (
    o.has(`mount`) && (o.get(`mount`).visible = !1),
    (a.name = `authored_weapon_body`),
    (a.userData.authoredWeapon = t.id),
    (a.userData.meshSource = `Blender 4.5.9 / SALIENT`),
    t.camo && _t(a, t.camo),
    t.wear && Xe(a, t.wear, Ye(l)),
    e.add(a),
    n.disposables.push(...s.values()),
    {
      ...l,
      magazine: o.get(`magazine`),
      bolt: o.get(`bolt`) ?? null,
      cover: o.get(`cover`) ?? null,
      belt: o.get(`belt`) ?? null,
      irons: o.get(`iron`) ?? null,
      opticMount: o.get(`mount`) ?? null,
      muzzleDevice: o.get(`muzzle`) ?? null,
      loadedRound: o.get(`round`) ?? null,
    }
  );
}
var H = {
    upper: R,
    fore: 0.255,
    shoulderR: [0.17, -0.25, 0.03],
    shoulderL: [-0.2, -0.28, -0.08],
    reach: 0.14,
    launcherR: [0.28, -0.56, 0.1],
    launcherL: [-0.46, -0.5, 0.04],
    reloadR: [0.17, -0.3, 0],
    reloadL: [-0.19, -0.31, -0.02],
    supportBack: 1,
    supportDepth: 0.82,
    supportGap: 0.2,
    poleR: [0.5, -1, 0.1],
    poleL: [-0.5, -1, 0.1],
  },
  U = {
    sleeve: 7634521,
    sleeveDark: 6121031,
    seam: 4870714,
    glove: 8023381,
    gloveHi: 9076066,
    pad: 4078129,
    cuff: 4998713,
  },
  Tt = new y();
function Et(e, t) {
  let n = e.attributes.position.count,
    r = new Float32Array(n * 3);
  Tt.setHex(t).convertSRGBToLinear();
  for (let e = 0; e < n; e++)
    ((r[e * 3] = Tt.r), (r[e * 3 + 1] = Tt.g), (r[e * 3 + 2] = Tt.b));
  return (e.setAttribute(`color`, new a(r, 3)), e.index ? e.toNonIndexed() : e);
}
var Dt = new l();
function Ot(e, t, n, r) {
  let a = new i(...e);
  return (
    r && a.applyMatrix4(Dt.makeRotationFromEuler(new O(...r))),
    a.translate(...t),
    Et(a, n)
  );
}
function kt(e) {
  let t = [],
    n = [],
    r = [];
  e.forEach(([e, i, a], o) => {
    Tt.setHex(a).convertSRGBToLinear();
    for (let [r, a] of [
      [-i, -i],
      [i, -i],
      [i, i],
      [-i, i],
      [-i, -i],
    ])
      (t.push(r, e, a), n.push(Tt.r, Tt.g, Tt.b));
    if (o)
      for (let e = 0; e < 4; e++) {
        let t = (o - 1) * 5 + e,
          n = o * 5 + e;
        r.push(t, n, t + 1, t + 1, n, n + 1);
      }
  });
  let i = new c();
  (i.setAttribute(`position`, new P(t, 3)),
    i.setAttribute(`color`, new P(n, 3)),
    i.setIndex(r));
  let a = i.toNonIndexed();
  return (i.dispose(), a.computeVertexNormals(), a);
}
function At(e) {
  let t = I(e);
  for (let t of e) t.dispose();
  return (t.computeVertexNormals(), t);
}
function jt() {
  return {
    upper: () =>
      kt([
        [0, 0.036, U.sleeve],
        [0.9, 0.033, U.sleeve],
        [0.9, 0.036, U.seam],
        [1, 0.036, U.seam],
      ]),
    fore: () =>
      kt([
        [0, 0.031, U.sleeve],
        [0.78, 0.028, U.sleeve],
        [0.78, 0.031, U.sleeveDark],
        [1, 0.031, U.sleeveDark],
      ]),
    elbow: () => Ot([0.068, 0.068, 0.068], [0, 0, 0], U.sleeve),
    cuff: () =>
      At([
        Ot([0.058, 0.05, 0.058], [0, 0, 0], U.cuff),
        Ot([0.062, 0.012, 0.062], [0, 0.02, 0], U.pad),
      ]),
    fist: () =>
      At([
        Ot([0.066, 0.066, 0.066], [0, 0, 0], U.glove),
        Ot([0.068, 0.026, 0.068], [0, -0.024, 0], U.gloveHi),
      ]),
    material() {
      let e = new b({
        vertexColors: !0,
        roughness: 0.93,
        metalness: 0,
        flatShading: !0,
      });
      return (
        (e.onBeforeCompile = (e) => {
          e.fragmentShader = e.fragmentShader.replace(
            `#include <emissivemap_fragment>`,
            `#include <emissivemap_fragment>
	totalEmissiveRadiance += diffuseColor.rgb * 0.26;`,
          );
        }),
        (e.customProgramCacheKey = () => `firstperson_arms_fill`),
        e
      );
    },
  };
}
var Mt = { faction: 0, cls: `assault`, winter: !1 },
  Nt = ``;
function Pt(e, t, n) {
  let r = `${e}:${t}:${n}`;
  r !== Nt && ((Nt = r), (Mt = { faction: e, cls: t, winter: n }));
}
Pt(0, `assault`, !1);
var Ft = H.fore,
  It = 0.42,
  Lt = 0.78,
  Rt = new L(0, -1, 0),
  zt = new w(),
  Bt = new w(),
  Vt = new L();
