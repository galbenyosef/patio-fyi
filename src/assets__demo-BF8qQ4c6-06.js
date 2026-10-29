// assets__demo-BF8qQ4c6 06 — material
// Lines 1368-1649 of readable/assets__demo-BF8qQ4c6.pretty.js (statement-aligned).
async function Ye(
  e,
  t,
  r,
  {
    manifest: i = { ...de, ...Ve, ...ce },
    log: o = e.log,
    cell: s = 128,
    flattenMaps: c = !1,
    fixtureCell: l = 96,
  } = {},
) {
  let u = new v();
  ((u.name = `props`), t.add(u));
  let d = new Map();
  for (let e of r) {
    if (!i[e.model]) {
      o?.(`props: unknown model ${e.model}`);
      continue;
    }
    let t = i[e.model].fixture && l >= 0 ? l : 96,
      n = t
        ? `${e.model}|${Math.floor(e.x / t)}|${Math.floor(e.z / t)}|${e.lightGroup ?? ``}`
        : `${e.model}|||${e.lightGroup ?? ``}`;
    (d.has(n) || d.set(n, []), d.get(n).push(e));
  }
  let f = new Map(),
    p = new Map(),
    m = [],
    h = [],
    g = new Set(),
    _ = new Map(),
    y = new A().makeScale(0, 0, 0),
    b = 0,
    x = 0,
    S = 0,
    C = [],
    w = !e.config.phone;
  await Promise.all(
    [...d].map(async ([t, n]) => {
      let r = t.split(`|`)[0],
        s = i[r],
        c;
      try {
        (f.has(r) ||
          f.set(
            r,
            e.assets.loadGLTF(We[r] ?? new URL(s.url, document.baseURI).href),
          ),
          (c = await f.get(r)));
      } catch (e) {
        o?.(`props: ${r} failed to load: ${e.message}`);
        return;
      }
      let l = c.scene;
      l.updateMatrixWorld(!0);
      let d = l;
      if (
        s.node &&
        ((d = null),
        l.traverse((e) => {
          !d && e.name === s.node && (d = e);
        }),
        !d)
      ) {
        o?.(`props: ${r}: node ${s.node} not found`);
        return;
      }
      let g = new a();
      d.getWorldPosition(g);
      let v = new A().makeTranslation(-g.x, -g.y, -g.z),
        y = new A().makeTranslation(
          -(s.center?.[0] ?? 0) / s.scale,
          -(s.minY ?? 0) / s.scale,
          -(s.center?.[1] ?? 0) / s.scale,
        ),
        S = [];
      (d.traverse((e) => {
        e.isMesh &&
          e.geometry &&
          S.push({
            geometry: e.geometry,
            material: e.material,
            world: new A().multiplyMatrices(
              y,
              new A().multiplyMatrices(v, e.matrixWorld),
            ),
          });
      }),
        p.has(r) ||
          p.set(r, r === `cp_busstop` ? Ge(S) : { parts: S, dispose() {} }));
      let E = n.some((e) => e.tint != null);
      for (let t of p.get(r).parts) {
        let i =
            E &&
            (s.source !== `cars` ||
              (Array.isArray(t.material) ? t.material : [t.material]).every(
                (e) => e.name === `paint`,
              )),
          o = (Array.isArray(t.material) ? t.material : [t.material]).map(
            (e) => {
              if (!s.fixture || !Je(e)) return e;
              let t = e.clone();
              return (
                h.push({
                  material: t,
                  group: n[0].lightGroup,
                  emission: t.emissiveIntensity,
                  beacon: r === `fixture_beacon`,
                }),
                t
              );
            },
          );
        for (let t of o)
          t &&
            t.map &&
            (t.map.anisotropy = Math.min(
              8,
              e.renderer.capabilities.getMaxAnisotropy(),
            ));
        if (
          w &&
          (!s.fixture || !Je(t.material)) &&
          !Array.isArray(t.material) &&
          ve(t.material)
        ) {
          for (let e of n) {
            let n = (e.scale ?? 1) * s.scale;
            (q.makeRotationY(e.yaw || 0).scale(new a(n, n, n)),
              q.setPosition(e.x, e.y, e.z),
              C.push({
                geometry: t.geometry,
                material: t.material,
                matrix: new A().multiplyMatrices(q, t.world),
                tint: i ? (e.tint ?? 16777215) : null,
                id: e.id,
                cast: s.size[1] >= 2.2 && !s.fixture,
              }));
          }
          continue;
        }
        let c = new O(
          t.geometry,
          Array.isArray(t.material) ? o : o[0],
          n.length,
        );
        ((c.name = `prop-${r}`),
          T() && (c.userData.phoneCull = T().propView),
          n.forEach((e, n) => {
            let r = (e.scale ?? 1) * s.scale;
            if (
              (q.makeRotationY(e.yaw || 0).scale(new a(r, r, r)),
              q.setPosition(e.x, e.y, e.z),
              Ke.multiplyMatrices(q, t.world),
              c.setMatrixAt(n, Ke),
              e.id != null &&
                (_.has(e.id) || _.set(e.id, []),
                _.get(e.id).push({ im: c, i: n, matrix: Ke.clone() })),
              i)
            ) {
              let t = e.tint ?? 16777215;
              (qe.setHex(t), c.setColorAt(n, qe));
            }
          }),
          (c.instanceMatrix.needsUpdate = !0),
          i && c.instanceColor && (c.instanceColor.needsUpdate = !0),
          (c.castShadow = s.size[1] >= 2.2 && !s.fixture),
          (c.receiveShadow = !0),
          c.computeBoundingSphere(),
          (c.userData.small =
            !s.fixture && Math.max(s.size[0], s.size[1], s.size[2]) < 1.3),
          (c.userData.tall = s.size[1] >= 2.2 && !s.fixture),
          u.add(c),
          m.push(c),
          b++);
      }
      x += n.length;
    }),
  );
  let E = _e(C, { cell: s, name: `props-baked`, keepIds: !0, flattenMaps: c });
  for (let t of E.meshes)
    ((t.userData.releaseAfterUpload = [
      `normal`,
      `color`,
      `uv`,
      `bakeMaterial`,
      `index`,
    ]),
      t.castShadow &&
        e.modules.get(`environment`)?.configureCaster?.(t.material),
      (t.userData.tall = t.castShadow),
      u.add(t));
  for (let e of E.rest) {
    let t = new n(e.geometry, e.material);
    ((t.matrixAutoUpdate = !1),
      t.matrix.copy(e.matrix),
      (t.castShadow = !!e.cast),
      (t.receiveShadow = !0),
      (t.userData.tall = t.castShadow),
      u.add(t),
      E.meshes.push(t));
  }
  return (
    (b += E.meshes.length),
    o?.(
      `props: ${f.size} models, ${x} placements, ${b} instanced draws (culled per 96 m cell)`,
    ),
    {
      group: u,
      count: x,
      drawCalls: b,
      update(t) {
        S += Math.min(t || 0, 0.1);
        let n = He(e),
          r = Math.max(0, Math.cos((S * Math.PI) / 1.4)) ** 10;
        for (let e of h)
          e.material.emissiveIntensity = g.has(e.group)
            ? 0
            : e.emission * n * (e.beacon ? 0.05 + 0.95 * r : 1);
      },
      setLightGroup(e, t) {
        t ? g.delete(e) : g.add(e);
      },
      setPropVisible(t, n) {
        let r = E.hide(t, !n),
          i = _.get(t);
        if (
          (r && e.modules.get(`environment`)?.invalidateStaticShadows?.(), !i)
        )
          return r;
        e.modules.get(`environment`)?.invalidateStaticShadows?.();
        for (let { im: e, i: t, matrix: r } of i)
          (e.setMatrixAt(t, n ? r : y), (e.instanceMatrix.needsUpdate = !0));
        return !0;
      },
      setDetail(t) {
        let n = t === `reduced`;
        e.modules.get(`environment`)?.invalidateStaticShadows?.();
        for (let e of E.meshes) e.castShadow = !n && e.userData.tall;
        for (let e of m)
          ((e.castShadow = !n && e.userData.tall), (e.visible = !0));
      },
      dispose() {
        E.dispose();
        for (let e of m) (u.remove(e), e.dispose());
        for (let e of p.values()) e.dispose();
        p.clear();
        for (let e of h) e.material.dispose();
        ((h.length = 0), (m.length = 0), t.remove(u));
      },
    }
  );
}
function Xe(e, t = 2048) {
  for (let n of [128, 96, 64, 48, 32, 24, 16]) {
    let r = 0,
      i = 0,
      a = [];
    for (let o of e) {
      let e = Math.min(t, Math.round((n * o.w) / o.h));
      if ((r + e > t && ((r = 0), (i += n + 8)), i + n > t)) break;
      (a.push({ x: r, y: i, w: e, h: n }), (r += e + 8));
    }
    if (a.length === e.length) return a;
  }
  throw Error(`Sign atlas capacity exceeded`);
}
var Ze = {
  neon: [
    `'Brush Script MT','Segoe Script','Georgia',cursive`,
    `'Impact','Arial Black',sans-serif`,
    `'Georgia','Times New Roman',serif`,
  ],
  fascia: [
    `'Segoe UI Black','Arial Black',sans-serif`,
    `'Impact',sans-serif`,
    `'Georgia',serif`,
  ],
  roof: [`'Impact','Arial Black',sans-serif`],
};
new p();
