// assets__animation-Bs1XLGoh 03 — count
// Lines 425-878 of readable/assets__animation-Bs1XLGoh.pretty.js (statement-aligned).
function In(e, t, n = 128, r = {}) {
  let i = Array.isArray(t)
      ? { scenes: t, has: (e) => !!t[e], ensure: (e) => Promise.resolve(t[e]) }
      : t,
    a = i.scenes,
    c = new S();
  ((c.name = `equipped_remote_weapons`), e.add(c));
  let u = new Map(),
    d = new Set(),
    p = En({ now: r.now }),
    m = new o({
      vertexColors: !0,
      flatShading: !0,
      roughness: 0.8,
      metalness: 0.15,
    }),
    h = !1,
    g = 0,
    _ = en();
  ((m.defaultAttributeValues = {
    wearLevel: [0],
    wearKind: [0],
    wearEdge: [0],
    wearPos: [0, 0, 0],
    wearNrm: [0, 1, 0],
  }),
    (m.onBeforeCompile = (e) => {
      (sn(e, { instanced: !0 }),
        _ &&
          ((e.uniforms.camoMap = { value: _.map }),
          (e.uniforms.camoFinish = { value: _.finish }),
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
              `#include <common>\nuniform mediump sampler2DArray camoMap;uniform vec2 camoFinish[${Zt.length}];varying vec3 vCamo;`,
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
    (m.customProgramCacheKey = () => `remote-weapon-camo-wear`));
  let v = (e) => (e.camo ? Zt.indexOf(e.camo) : -1),
    y = (e, t, n, r = 0) => {
      ((e.geometry.attributes.camoLayer.array[e.count] = n),
        (e.geometry.attributes.wearLevel.array[e.count] = r),
        e.setMatrixAt(e.count++, t));
    },
    x = new M().makeTranslation(...F.toArray()),
    w = new M().makeTranslation(...un),
    T = new M(),
    E = new M(),
    O = new M(),
    k = new s(),
    A = new b(),
    ee = new D(),
    te = new s(1, 1, 1);
  function j(e, t) {
    let r = [
        `magazine`,
        `cover`,
        `belt`,
        `bipodLeft`,
        `bipodRight`,
        `bolt`,
      ].includes(t)
        ? t
        : null,
      i = r
        ? `${e.id}/${r}`
        : e.id === 8
          ? `8/${t === `round` ? `round` : t ? `loaded` : `empty`}`
          : `${e.id}/${e.attachments?.optic ?? `standard`}/${e.attachments?.muzzle ?? `standard`}/${e.attachments?.grip ?? `standard`}/${e.attachments?.rail ?? ``}`;
    if (u.has(i)) return u.get(i);
    if (u.size >= Pn) throw Error(`Remote attachment variant bound exceeded`);
    let d = new S(),
      p = { disposables: [] },
      h = [];
    for (let [e, t] of Object.entries({
      dark: 1646112,
      steel: 6055016,
      rubber: 1646112,
      red: 16726831,
      amber: 16758336,
      glass: 5601149,
    }))
      ((p[e] = new o({ color: t })), h.push(p[e]));
    let g = [],
      _ = Kt.includes(e.id);
    try {
      let o = nn(d, { ...e, camo: null }, p, a),
        h = Yt(d.getObjectByName(`authored_weapon_body`)),
        v = d.children.length,
        y = hn(e).optic,
        b = mn(d, y, o, p);
      dn(b, wn(b));
      let x = y?.type === `scope` ? Fn(d, v, b) : null,
        S = pn(d, e, o, p),
        w = Cn(d, e, o, p),
        T =
          e.id === 8
            ? null
            : {
                grip: o.grip,
                support: w ? [o.support?.[0] ?? -0.025, w[1], w[2]] : o.support,
                magazineHome: o.magazine.position.toArray(),
                magazineRotation: o.magazine.rotation.toArray().slice(0, 3),
              };
      (T && x && (T.objective = x),
        T &&
          ((T.hold = e.class === `pistol` ? `pistol` : `long`),
          Number.isFinite(o.top) &&
            Number.isFinite(o.sightZ) &&
            (T.mount = [0, o.top, o.sightZ])),
        T &&
          (T.port = [
            0.03,
            (T.mount?.[1] ?? 0.03) - (e.class === `pistol` ? 0.012 : 0.03),
            T.grip[2] - (e.class === `pistol` ? 0.03 : 0.07),
          ]),
        T &&
          b?.aim &&
          ((T.eye = b.aim.toArray()),
          (T.relief =
            e.class === `pistol`
              ? 0.36
              : y?.type === `scope`
                ? 0.08
                : y?.type === `irons` || !y?.type
                  ? 0.1
                  : 0.14)),
        T && Number.isFinite(S) && (T.muzzle = [0, 0.012, S]));
      for (let [e, t] of [`bipodLeft`, `bipodRight`].entries())
        ((o[t] = o.bipods?.[e]),
          o[t] &&
            ((T[t] = o[t].position.toArray()),
            (o[t].visible = r === t),
            r === t && o[t].position.set(0, 0, 0)));
      (e.mode === `BOLT` &&
        o.bolt &&
        T &&
        ((T.bolt = {
          home: o.bolt.position.toArray(),
          rotation: o.bolt.rotation.toArray().slice(0, 3),
          travel: o.boltTravel ?? 0.075,
          lift: o.boltRotation ?? 0.65,
        }),
        (o.bolt.visible = r === `bolt`),
        r === `bolt` &&
          (o.bolt.position.set(0, 0, 0), o.bolt.rotation.set(0, 0, 0))),
        T &&
          o.magazine &&
          (T.magSize = new f()
            .setFromObject(o.magazine)
            .getSize(new s())
            .toArray()),
        o.cover && (T.coverHome = o.cover.position.toArray()),
        o.cover && (o.cover.visible = r === `cover`),
        o.belt && (o.belt.visible = r === `belt`),
        r === `cover` && o.cover.position.set(0, 0, 0),
        e.id !== 8 && (o.magazine.visible = t === `magazine`),
        t === `magazine` &&
          (o.magazine.position.set(0, 0, 0), o.magazine.rotation.set(0, 0, 0)),
        e.id === 8 && (o.loadedRound.visible = !!t),
        t === `round` && o.loadedRound.position.set(0, 0, 0),
        d.updateMatrixWorld(!0),
        (t === `round` ? o.loadedRound : r ? o[r] : d).traverseVisible((e) => {
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
          (t.setAttribute(`color`, new l(n, 3)),
            $t(t, `camoUv`),
            t.setAttribute(
              `camoMask`,
              new l(
                new Float32Array(t.attributes.position.count).fill(
                  +!!h.has(e.material),
                ),
                1,
              ),
            ),
            _ &&
              (yn(t, Qt, { edges: !1 }),
              t.setAttribute(
                `wearKind`,
                new l(
                  new Float32Array(t.attributes.position.count).fill(
                    qt(e.material),
                  ),
                  1,
                ),
              )),
            g.push(t));
        }));
      let E = re(g);
      T && !r && Mn(E, T.grip[2], jn[e.id]);
      let D = new C(new Float32Array(n).fill(-1), 1);
      (D.setUsage(ne), E.setAttribute(`camoLayer`, D));
      let O = new C(new Float32Array(n), 1);
      (O.setUsage(ne), E.setAttribute(`wearLevel`, O));
      let k = new ie(E, m, n);
      if (
        ((k.name = `remote_` + i),
        (k.count = 0),
        (k.visible = !1),
        (k.frustumCulled = !1),
        (k.castShadow = !1),
        (k.receiveShadow = !0),
        T && !r)
      ) {
        E.computeBoundingBox();
        let e = E.boundingBox;
        ((T.bounds = [e.min.x, e.max.x, e.min.y, e.max.y, e.min.z, e.max.z]),
          (T.profile = oe(E, e)));
      }
      return (
        (k.userData.handling = T),
        k.instanceMatrix.setUsage(ne),
        c.add(k),
        u.set(i, k),
        k
      );
    } finally {
      for (let e of g) e.dispose();
      d.traverse((e) => e.geometry?.dispose());
      for (let e of [...h, ...p.disposables]) e.dispose();
    }
  }
  let ae = (e) => R.includes(e) || e === 8;
  function oe(e, t) {
    let n = Nn,
      r = new Float32Array(80),
      i = e.attributes.position,
      a = Math.max(1e-6, t.max.z - t.min.z);
    for (let e = 0; e < n; e++)
      ((r[e * 5] = t.min.z + ((e + 0.5) * a) / n),
        (r[e * 5 + 1] = r[e * 5 + 3] = 1 / 0),
        (r[e * 5 + 2] = r[e * 5 + 4] = -1 / 0));
    for (let e = 0; e < i.count; e++) {
      let o = i.getX(e),
        s = i.getY(e),
        c = Math.min(15, Math.floor(((i.getZ(e) - t.min.z) / a) * n)) * 5;
      (o < r[c + 1] && (r[c + 1] = o),
        o > r[c + 2] && (r[c + 2] = o),
        s < r[c + 3] && (r[c + 3] = s),
        s > r[c + 4] && (r[c + 4] = s));
    }
    for (let e = 0; e < n; e++)
      if (!Number.isFinite(r[e * 5 + 1])) {
        let t =
          (e > 0 && Number.isFinite(r[(e - 1) * 5 + 1]) ? e - 1 : e + 1) * 5;
        for (let n = 1; n < 5; n++) r[e * 5 + n] = r[t + n];
      }
    return r;
  }
  let se = (e) => {
    if (!ae(e) || i.has(e) || d.has(e) || h || !p.allows(e)) return;
    d.add(e);
    let t = g,
      n;
    try {
      n = i.ensure(e, { priority: `remote` });
    } catch (e) {
      n = Promise.reject(e);
    }
    Promise.resolve(n)
      .then(
        () => p.success(e),
        () => {
          !h && t === g && p.fail(e);
        },
      )
      .finally(() => d.delete(e));
  };
  return {
    group: c,
    pools: u,
    supports: (e) => (ae(e) ? (i.has(e) ? !0 : (se(e), !1)) : !1),
    objective(e, t, n) {
      if (!R.includes(e.id) || !i.has(e.id)) return null;
      let r = j(e, !0).userData.handling?.objective;
      return r
        ? n.set(r[0], r[1], r[2]).applyMatrix4(O.multiplyMatrices(t, x))
        : null;
    },
    muzzle(e, t, n) {
      if (!R.includes(e.id) || !i.has(e.id)) return null;
      let r = j(e, !0).userData.handling?.muzzle;
      return r
        ? n.set(r[0], r[1], r[2]).applyMatrix4(O.multiplyMatrices(t, x))
        : null;
    },
    magMatrix(e, t, n, r) {
      if (!R.includes(e.id) || !i.has(e.id)) return null;
      let a = j(e, !0).userData.handling;
      if (!a?.magazineHome) return null;
      let o = gn(a.magazineHome, a.magazineRotation, 0);
      return (
        k.fromArray(o.position),
        A.setFromEuler(ee.set(...o.rotation)),
        r.multiplyMatrices(t, x).multiply(E.compose(k, A, te))
      );
    },
    magSize(e) {
      return !R.includes(e.id) || !i.has(e.id)
        ? null
        : (j(e, !0).userData.handling?.magSize ?? null);
    },
    putMag(e, t) {
      if (!R.includes(e.id) || !i.has(e.id)) return;
      let r = j(e, `magazine`);
      r.count < n && y(r, t, v(e), cn(e.wear));
    },
    port(e, t, n) {
      if (!R.includes(e.id) || !i.has(e.id)) return null;
      let r = j(e, !0).userData.handling?.port;
      return r
        ? n.set(r[0], r[1], r[2]).applyMatrix4(O.multiplyMatrices(t, x))
        : null;
    },
    poseRifle(e, t, n = 0, r = bn) {
      r(e, j(t, !0).userData.handling, n);
    },
    begin() {
      for (let e of u.values()) e.count = 0;
    },
    present(e, t, r = !0, i = null, a = 0, o = -1) {
      if (!R.includes(e.id) && e.id !== 8) return;
      let s = j(e, r);
      if (s.count >= n) return;
      let c = v(e),
        l = cn(e.wear);
      (T.multiplyMatrices(t, e.id === 8 ? w : x), y(s, T, c, l));
      for (let [t, r] of [
        [`bipodLeft`, -1],
        [`bipodRight`, 1],
      ]) {
        let i = s.userData.handling?.[t];
        if (!i) continue;
        let o = j(e, t);
        o.count >= n ||
          (k.fromArray(i),
          tn(ee, r, a),
          A.setFromEuler(ee),
          E.compose(k, A, te).premultiply(T),
          y(o, E, c, l));
      }
      let u = s.userData.handling?.bolt;
      if (u) {
        let t = j(e, `bolt`);
        if (t.count < n) {
          let e = Xt(o >= 0 ? o : 0);
          (k.fromArray(u.home),
            o >= 0 && (k.z += e.travel * u.travel),
            A.setFromEuler(
              ee.set(
                u.rotation[0],
                u.rotation[1],
                u.rotation[2] - (o >= 0 ? e.lift * u.lift : 0),
              ),
            ),
            E.compose(k, A, te).premultiply(T),
            y(t, E, c, l));
        }
      }
      if (s.userData.handling?.coverHome) {
        let t = j(e, `cover`),
          a = i ?? 0;
        if (
          (k.fromArray(s.userData.handling.coverHome),
          A.setFromEuler(ee.set(-on(a) * 1.15, 0, 0)),
          E.compose(k, A, te),
          E.premultiply(T),
          t.count < n && y(t, E, c, l),
          a > 0 ? a < 0.18 || a > 0.71 : r)
        ) {
          let t = j(e, `belt`);
          t.count < n && y(t, T, c, l);
        }
      }
      if (R.includes(e.id)) {
        let t = s.userData.handling,
          r = gn(t.magazineHome, t.magazineRotation, i ?? 0);
        if (r.visible) {
          let t = j(e, `magazine`);
          t.count < n &&
            (k.fromArray(r.position),
            ee.set(...r.rotation),
            A.setFromEuler(ee),
            T.multiply(E.compose(k, A, te)),
            y(t, T, c, l));
        }
      }
      if (e.id === 8 && i !== null) {
        let t = xn(i);
        if (t.active && t.visible) {
          let r = j(e, `round`);
          r.count < n &&
            (T.multiply(E.makeTranslation(t.x, t.y, t.z)), y(r, T, c, l));
        }
      }
    },
    flush() {
      for (let e of u.values())
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
      ((h = !0), g++, e.remove(c));
      for (let e of u.values()) (e.geometry.dispose(), e.dispose());
      (m.dispose(), _?.map.dispose(), u.clear(), d.clear(), p.clear());
    },
  };
}
