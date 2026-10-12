// assets__demo-CYaenSpr 06 — material
// Lines 1358-1625 of readable/assets__demo-CYaenSpr.pretty.js (statement-aligned).
async function Je(
  e,
  t,
  n,
  { manifest: r = { ...de, ...Ve, ...ce }, log: i = e.log } = {},
) {
  let a = new S();
  ((a.name = `props`), t.add(a));
  let o = new Map();
  for (let e of n) {
    if (!r[e.model]) {
      i?.(`props: unknown model ${e.model}`);
      continue;
    }
    let t = `${e.model}|${Math.floor(e.x / 96)}|${Math.floor(e.z / 96)}|${e.lightGroup ?? ``}`;
    (o.has(t) || o.set(t, []), o.get(t).push(e));
  }
  let c = new Map(),
    l = new Map(),
    d = [],
    f = [],
    p = new Set(),
    m = new Map(),
    h = new s().makeScale(0, 0, 0),
    g = 0,
    _ = 0,
    v = 0,
    b = [],
    x = !e.config.phone;
  await Promise.all(
    [...o].map(async ([t, n]) => {
      let o = t.split(`|`)[0],
        u = r[o],
        p;
      try {
        (c.has(o) ||
          c.set(
            o,
            e.assets.loadGLTF(We[o] ?? new URL(u.url, document.baseURI).href),
          ),
          (p = await c.get(o)));
      } catch (e) {
        i?.(`props: ${o} failed to load: ${e.message}`);
        return;
      }
      let h = p.scene;
      h.updateMatrixWorld(!0);
      let v = h;
      if (
        u.node &&
        ((v = null),
        h.traverse((e) => {
          !v && e.name === u.node && (v = e);
        }),
        !v)
      ) {
        i?.(`props: ${o}: node ${u.node} not found`);
        return;
      }
      let S = new k();
      v.getWorldPosition(S);
      let C = new s().makeTranslation(-S.x, -S.y, -S.z),
        w = new s().makeTranslation(
          -(u.center?.[0] ?? 0) / u.scale,
          -(u.minY ?? 0) / u.scale,
          -(u.center?.[1] ?? 0) / u.scale,
        ),
        E = [];
      (v.traverse((e) => {
        e.isMesh &&
          e.geometry &&
          E.push({
            geometry: e.geometry,
            material: e.material,
            world: new s().multiplyMatrices(
              w,
              new s().multiplyMatrices(C, e.matrixWorld),
            ),
          });
      }),
        l.has(o) ||
          l.set(o, o === `cp_busstop` ? Ge(E) : { parts: E, dispose() {} }));
      let D = n.some((e) => e.tint != null);
      for (let t of l.get(o).parts) {
        let r =
            D &&
            (u.source !== `cars` ||
              (Array.isArray(t.material) ? t.material : [t.material]).every(
                (e) => e.name === `paint`,
              )),
          i = (Array.isArray(t.material) ? t.material : [t.material]).map(
            (e) => {
              if (!u.fixture) return e;
              let t = e.clone();
              return (
                f.push({
                  material: t,
                  group: n[0].lightGroup,
                  emission: t.emissiveIntensity,
                  beacon: o === `fixture_beacon`,
                }),
                t
              );
            },
          );
        for (let t of i)
          t &&
            t.map &&
            (t.map.anisotropy = Math.min(
              8,
              e.renderer.capabilities.getMaxAnisotropy(),
            ));
        if (x && !u.fixture && !Array.isArray(t.material) && ve(t.material)) {
          for (let e of n) {
            let n = (e.scale ?? 1) * u.scale;
            (q.makeRotationY(e.yaw || 0).scale(new k(n, n, n)),
              q.setPosition(e.x, e.y, e.z),
              b.push({
                geometry: t.geometry,
                material: t.material,
                matrix: new s().multiplyMatrices(q, t.world),
                tint: r ? (e.tint ?? 16777215) : null,
                id: e.id,
                cast: u.size[1] >= 2.2,
              }));
          }
          continue;
        }
        let c = new y(
          t.geometry,
          Array.isArray(t.material) ? i : i[0],
          n.length,
        );
        ((c.name = `prop-${o}`),
          T() && (c.userData.phoneCull = T().propView),
          n.forEach((e, n) => {
            let i = (e.scale ?? 1) * u.scale;
            if (
              (q.makeRotationY(e.yaw || 0).scale(new k(i, i, i)),
              q.setPosition(e.x, e.y, e.z),
              Ke.multiplyMatrices(q, t.world),
              c.setMatrixAt(n, Ke),
              e.id != null &&
                (m.has(e.id) || m.set(e.id, []),
                m.get(e.id).push({ im: c, i: n, matrix: Ke.clone() })),
              r)
            ) {
              let t = e.tint ?? 16777215;
              (qe.setHex(t), c.setColorAt(n, qe));
            }
          }),
          (c.instanceMatrix.needsUpdate = !0),
          r && c.instanceColor && (c.instanceColor.needsUpdate = !0),
          (c.castShadow = u.size[1] >= 2.2 && !u.fixture),
          (c.receiveShadow = !0),
          c.computeBoundingSphere(),
          (c.userData.small =
            !u.fixture && Math.max(u.size[0], u.size[1], u.size[2]) < 1.3),
          (c.userData.tall = u.size[1] >= 2.2 && !u.fixture),
          a.add(c),
          d.push(c),
          g++);
      }
      _ += n.length;
    }),
  );
  let C = _e(b, { cell: 128, name: `props-baked`, keepIds: !0 });
  for (let t of C.meshes)
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
      a.add(t));
  for (let e of C.rest) {
    let t = new u(e.geometry, e.material);
    ((t.matrixAutoUpdate = !1),
      t.matrix.copy(e.matrix),
      (t.castShadow = !!e.cast),
      (t.receiveShadow = !0),
      (t.userData.tall = t.castShadow),
      a.add(t),
      C.meshes.push(t));
  }
  return (
    (g += C.meshes.length),
    i?.(
      `props: ${c.size} models, ${_} placements, ${g} instanced draws (culled per 96 m cell)`,
    ),
    {
      group: a,
      count: _,
      drawCalls: g,
      update(t) {
        v += Math.min(t || 0, 0.1);
        let n = He(e),
          r = Math.max(0, Math.cos((v * Math.PI) / 1.4)) ** 10;
        for (let e of f)
          e.material.emissiveIntensity = p.has(e.group)
            ? 0
            : e.emission * n * (e.beacon ? 0.05 + 0.95 * r : 1);
      },
      setLightGroup(e, t) {
        t ? p.delete(e) : p.add(e);
      },
      setPropVisible(t, n) {
        let r = C.hide(t, !n),
          i = m.get(t);
        if (
          (r && e.modules.get(`environment`)?.invalidateStaticShadows?.(), !i)
        )
          return r;
        e.modules.get(`environment`)?.invalidateStaticShadows?.();
        for (let { im: e, i: t, matrix: r } of i)
          (e.setMatrixAt(t, n ? r : h), (e.instanceMatrix.needsUpdate = !0));
        return !0;
      },
      setDetail(t) {
        let n = t === `reduced`;
        e.modules.get(`environment`)?.invalidateStaticShadows?.();
        for (let e of C.meshes) e.castShadow = !n && e.userData.tall;
        for (let e of d)
          ((e.castShadow = !n && e.userData.tall), (e.visible = !0));
      },
      dispose() {
        C.dispose();
        for (let e of d) (a.remove(e), e.dispose());
        for (let e of l.values()) e.dispose();
        l.clear();
        for (let e of f) e.material.dispose();
        ((f.length = 0), (d.length = 0), t.remove(a));
      },
    }
  );
}
function Ye(e, t = 2048) {
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
var Xe = {
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
new f();
