// assets__animation-DTvaGqA- 03 — count
// Lines 371-685 of readable/assets__animation-DTvaGqA-.pretty.js (statement-aligned).
function fn(t, n, r = 128, i = {}) {
  let a = Array.isArray(n)
      ? { scenes: n, has: (e) => !!n[e], ensure: (e) => Promise.resolve(n[e]) }
      : n,
    o = a.scenes,
    s = new T();
  ((s.name = `equipped_remote_weapons`), t.add(s));
  let l = new Map(),
    u = new Set(),
    f = on({ now: i.now }),
    p = new _({
      vertexColors: !0,
      flatShading: !0,
      roughness: 0.8,
      metalness: 0.15,
    }),
    m = !1,
    h = 0,
    g = Pt();
  ((p.defaultAttributeValues = {
    wearLevel: [0],
    wearKind: [0],
    wearEdge: [0],
    wearPos: [0, 0, 0],
    wearNrm: [0, 1, 0],
  }),
    (p.onBeforeCompile = (e) => {
      (Rt(e, { instanced: !0 }),
        g &&
          ((e.uniforms.camoMap = { value: g.map }),
          (e.uniforms.camoFinish = { value: g.finish }),
          (e.vertexShader = e.vertexShader
            .replace(
              `#include <common>`,
              `#include <common>
attribute vec2 camoUv;attribute float camoMask;attribute float camoLayer;varying vec3 vCamo;`,
            )
            .replace(
              `#include <begin_vertex>`,
              `#include <begin_vertex>
vCamo=vec3(camoUv,camoMask>.5?camoLayer:-1.);`,
            )),
          (e.fragmentShader = e.fragmentShader
            .replace(
              `#include <common>`,
              `#include <common>\nuniform mediump sampler2DArray camoMap;uniform vec2 camoFinish[${Vt.length}];varying vec3 vCamo;`,
            )
            .replace(
              `#include <color_fragment>`,
              `#include <color_fragment>
if(vCamo.z>-.5)diffuseColor.rgb=texture(camoMap,vec3(vCamo.xy,floor(vCamo.z+.5))).rgb;`,
            )
            .replace(
              `#include <roughnessmap_fragment>`,
              `#include <roughnessmap_fragment>
if(vCamo.z>-.5)roughnessFactor=camoFinish[int(vCamo.z+.5)].y;`,
            )
            .replace(
              `#include <metalnessmap_fragment>`,
              `#include <metalnessmap_fragment>
if(vCamo.z>-.5)metalnessFactor=camoFinish[int(vCamo.z+.5)].x;`,
            ))));
    }),
    (p.customProgramCacheKey = () => `remote-weapon-camo-wear`));
  let v = (e) => (e.camo ? Vt.indexOf(e.camo) : -1),
    b = (e, t, n, r = 0) => {
      ((e.geometry.attributes.camoLayer.array[e.count] = n),
        (e.geometry.attributes.wearLevel.array[e.count] = r),
        e.setMatrixAt(e.count++, t));
    },
    x = new d().makeTranslation(...tn.toArray()),
    ee = new d().makeTranslation(...Yt),
    w = new d(),
    E = new d(),
    ne = new d(),
    D = new k(),
    O = new y(),
    ie = new S(),
    ae = new k(1, 1, 1);
  function A(t, n) {
    let i = [`magazine`, `cover`, `belt`].includes(n) ? n : null,
      a = i
        ? `${t.id}/${i}`
        : t.id === 8
          ? `8/${n === `round` ? `round` : n ? `loaded` : `empty`}`
          : `${t.id}/${t.attachments?.optic ?? `standard`}/${t.attachments?.muzzle ?? `standard`}/${t.attachments?.grip ?? `standard`}/${t.attachments?.rail ?? ``}`;
    if (l.has(a)) return l.get(a);
    if (l.size >= un) throw Error(`Remote attachment variant bound exceeded`);
    let u = new T(),
      d = { disposables: [] },
      f = [];
    for (let [e, t] of Object.entries({
      dark: 1646112,
      steel: 6055016,
      rubber: 1646112,
      red: 16726831,
      amber: 16758336,
      glass: 5601149,
    }))
      ((d[e] = new _({ color: t })), f.push(d[e]));
    let m = [],
      h = Nt.includes(t.id);
    try {
      let f = Ut(u, { ...t, camo: null }, d, o),
        g = Bt(u.getObjectByName(`authored_weapon_body`)),
        _ = u.children.length,
        v = $t(t).optic,
        y = nn(u, v, f, d);
      Gt(y, Jt(y));
      let b = v?.type === `scope` ? dn(u, _, y) : null;
      Xt(u, t, f, d);
      let x = qt(u, t, f, d),
        S =
          t.id === 8
            ? null
            : {
                grip: f.grip,
                support: x ? [f.support?.[0] ?? -0.025, x[1], x[2]] : f.support,
                magazineHome: f.magazine.position.toArray(),
                magazineRotation: f.magazine.rotation.toArray().slice(0, 3),
              };
      (S && b && (S.objective = b),
        f.cover && (S.coverHome = f.cover.position.toArray()),
        f.cover && (f.cover.visible = i === `cover`),
        f.belt && (f.belt.visible = i === `belt`),
        i === `cover` && f.cover.position.set(0, 0, 0),
        t.id !== 8 && (f.magazine.visible = n === `magazine`),
        n === `magazine` &&
          (f.magazine.position.set(0, 0, 0), f.magazine.rotation.set(0, 0, 0)),
        t.id === 8 && (f.loadedRound.visible = !!n),
        n === `round` && f.loadedRound.position.set(0, 0, 0),
        u.updateMatrixWorld(!0),
        (n === `round` ? f.loadedRound : i ? f[i] : u).traverseVisible((e) => {
          if (!e.isMesh) return;
          let t = e.geometry.index
            ? e.geometry.toNonIndexed()
            : e.geometry.clone();
          t.applyMatrix4(e.matrixWorld);
          let n = new Float32Array(t.attributes.position.count * 3),
            r = e.material.color;
          for (let e = 0; e < n.length; e += 3)
            ((n[e] = r.r), (n[e + 1] = r.g), (n[e + 2] = r.b));
          for (let e of Object.keys(t.attributes))
            [`position`, `normal`].includes(e) || t.deleteAttribute(e);
          (t.setAttribute(`color`, new c(n, 3)),
            Lt(t, `camoUv`),
            t.setAttribute(
              `camoMask`,
              new c(
                new Float32Array(t.attributes.position.count).fill(
                  +!!g.has(e.material),
                ),
                1,
              ),
            ),
            h &&
              (Ft(t, Ht, { edges: !1 }),
              t.setAttribute(
                `wearKind`,
                new c(
                  new Float32Array(t.attributes.position.count).fill(
                    zt(e.material),
                  ),
                  1,
                ),
              )),
            m.push(t));
        }));
      let ee = re(m),
        w = new te(new Float32Array(r).fill(-1), 1);
      (w.setUsage(e), ee.setAttribute(`camoLayer`, w));
      let T = new te(new Float32Array(r), 1);
      (T.setUsage(e), ee.setAttribute(`wearLevel`, T));
      let E = new C(ee, p, r);
      return (
        (E.name = `remote_` + a),
        (E.count = 0),
        (E.visible = !1),
        (E.frustumCulled = !1),
        (E.castShadow = !1),
        (E.receiveShadow = !0),
        (E.userData.handling = S),
        E.instanceMatrix.setUsage(e),
        s.add(E),
        l.set(a, E),
        E
      );
    } finally {
      for (let e of m) e.dispose();
      u.traverse((e) => e.geometry?.dispose());
      for (let e of [...f, ...d.disposables]) e.dispose();
    }
  }
  let j = (e) => ln.includes(e) || e === 8,
    oe = (e) => {
      if (!j(e) || a.has(e) || u.has(e) || m || !f.allows(e)) return;
      u.add(e);
      let t = h,
        n;
      try {
        n = a.ensure(e, { priority: `remote` });
      } catch (e) {
        n = Promise.reject(e);
      }
      Promise.resolve(n)
        .then(
          () => f.success(e),
          () => {
            !m && t === h && f.fail(e);
          },
        )
        .finally(() => u.delete(e));
    };
  return {
    group: s,
    pools: l,
    supports: (e) => (j(e) ? (a.has(e) ? !0 : (oe(e), !1)) : !1),
    objective(e, t, n) {
      if (!ln.includes(e.id) || !a.has(e.id)) return null;
      let r = A(e, !0).userData.handling?.objective;
      return r
        ? n.set(r[0], r[1], r[2]).applyMatrix4(ne.multiplyMatrices(t, x))
        : null;
    },
    poseRifle(e, t, n = 0, r = Zt) {
      r(e, A(t, !0).userData.handling, n);
    },
    begin() {
      for (let e of l.values()) e.count = 0;
    },
    present(e, t, n = !0, i = null) {
      if (!ln.includes(e.id) && e.id !== 8) return;
      let a = A(e, n);
      if (a.count >= r) return;
      let o = v(e),
        s = Wt(e.wear);
      if (
        (w.multiplyMatrices(t, e.id === 8 ? ee : x),
        b(a, w, o, s),
        a.userData.handling?.coverHome)
      ) {
        let t = A(e, `cover`),
          c = i ?? 0;
        if (
          (D.fromArray(a.userData.handling.coverHome),
          O.setFromEuler(ie.set(-an(c) * 1.15, 0, 0)),
          E.compose(D, O, ae),
          E.premultiply(w),
          t.count < r && b(t, E, o, s),
          c > 0 ? c < 0.18 || c > 0.71 : n)
        ) {
          let t = A(e, `belt`);
          t.count < r && b(t, w, o, s);
        }
      }
      if (ln.includes(e.id)) {
        let t = a.userData.handling,
          n = en(t.magazineHome, t.magazineRotation, i ?? 0);
        if (n.visible) {
          let t = A(e, `magazine`);
          t.count < r &&
            (D.fromArray(n.position),
            ie.set(...n.rotation),
            O.setFromEuler(ie),
            w.multiply(E.compose(D, O, ae)),
            b(t, w, o, s));
        }
      }
      if (e.id === 8 && i !== null) {
        let t = Qt(i);
        if (t.active && t.visible) {
          let n = A(e, `round`);
          n.count < r &&
            (w.multiply(E.makeTranslation(t.x, t.y, t.z)), b(n, w, o, s));
        }
      }
    },
    flush() {
      for (let e of l.values())
        if (((e.visible = e.count > 0), e.count)) {
          (e.instanceMatrix.clearUpdateRanges(),
            e.instanceMatrix.addUpdateRange(0, e.count * 16),
            (e.instanceMatrix.needsUpdate = !0));
          for (let t of [
            e.geometry.attributes.camoLayer,
            e.geometry.attributes.wearLevel,
          ])
            (t.clearUpdateRanges(),
              t.addUpdateRange(0, e.count),
              (t.needsUpdate = !0));
        }
    },
    dispose() {
      ((m = !0), h++, t.remove(s));
      for (let e of l.values()) (e.geometry.dispose(), e.dispose());
      (p.dispose(), g?.map.dispose(), l.clear(), u.clear(), f.clear());
    },
  };
}
function pn(e, t, n, r) {
  if (!t) {
    ((e.reloadElapsed = -1),
      (e.reloadT = -1),
      (e.reloadProgress = 0),
      (e.reloadWeapon = n));
    return;
  }
  (!(e.reloadElapsed >= 0) || e.reloadWeapon !== n
    ? (e.reloadElapsed = 0)
    : (e.reloadElapsed += Math.max(0, r)),
    (e.reloadWeapon = n));
  let i = kt[n]?.reload ?? 1.8;
  ((e.reloadProgress = Math.min(0.999, e.reloadElapsed / i)),
    (e.reloadT = e.reloadProgress * Je));
}
