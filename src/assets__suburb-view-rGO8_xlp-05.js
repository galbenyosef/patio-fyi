// assets__suburb-view-rGO8_xlp 05 — math
// Lines 1379-1582 of readable/assets__suburb-view-rGO8_xlp.pretty.js (statement-aligned).
var ce = () => new Promise((e) => setTimeout(e, 0)),
  Z = 48,
  Q = 190;
function le(e) {
  let t = new Map(),
    n = new Map(),
    i = [];
  e.updateMatrixWorld(!0);
  let o = new r().copy(e.matrixWorld).invert(),
    s = new r(),
    c = new x();
  e.traverse((e) => {
    e.isMesh && !e.isInstancedMesh && i.push(e);
  });
  for (let e of i) {
    let r = e.material,
      i = e.geometry,
      a = r.isMeshBasicMaterial
        ? `d|${r.map?.uuid}|${r.opacity.toFixed(2)}`
        : r.uuid;
    (n.has(a) || n.set(a, r),
      s.multiplyMatrices(o, e.matrixWorld),
      i.computeBoundingBox(),
      i.boundingBox.getCenter(c).applyMatrix4(s));
    let l = `${a}|${Object.keys(i.attributes).sort().join(`,`) + (i.index ? `|i` : `|n`)}|${Math.floor(c.x / Z)},${Math.floor(c.z / Z)}`;
    t.has(l) || t.set(l, { mk: a, geos: [], cast: !1, ro: e.renderOrder });
    let u = t.get(l);
    (u.geos.push(i.clone().applyMatrix4(s)),
      (u.cast ||= e.castShadow),
      e.removeFromParent());
  }
  let l = [];
  for (let r of t.values()) {
    let t = r.geos.length > 1 ? y(r.geos) : r.geos[0];
    if (!t) continue;
    for (let e of r.geos) e !== t && e.dispose();
    t.computeBoundingSphere();
    let i = new a(t, n.get(r.mk));
    ((i.receiveShadow = !0),
      (i.castShadow = r.cast),
      (i.userData.cast = r.cast),
      (i.renderOrder = r.ro),
      (i.matrixAutoUpdate = !1),
      e.add(i),
      l.push(i));
  }
  return { out: l, before: i.length };
}
function $(e) {
  let t = e.tiers?.[0] || {},
    n = { ...e.style, ...(t.style || {}) },
    r = { ...e.front, ...(t.front || {}) },
    i = t.W ?? e.W,
    a = Math.max(1, Math.round(i / (r.bay || n.bay))),
    o = i / a,
    s = [];
  for (let e = 0; e < a; e++)
    [`door`, `lobbyDoor`, `recess`].includes(
      r.kinds ? r.kinds(0, e, a) : `solid`,
    ) && s.push((e + 0.5) * o);
  return s;
}
async function ue(e, t, n) {
  let r = n.suburb;
  if (!r?.grids?.length) return null;
  let i = new h();
  ((i.name = `suburb-streets`), (i.position.y = r.y ?? 0), t.add(i));
  let a = z(i, { treeLod: `mid` }),
    o = new Map(T().map((e) => [e.key, e]));
  for (let e of r.grids) {
    let t = se(a, { ...e.spec, inner: () => e.inner }),
      n = E(e.spec);
    for (let r of e.lots) {
      let e = o.get(r.key);
      if (e) {
        if (r.kind === `lot`) {
          let i = n.roads[r.road],
            o = k(n, i, r.side, r.u, r.key, r.o),
            { x: s, z: c, fx: l, fz: u } = o,
            [d, f] = u
              ? [s - e.W / 2, s + e.W / 2]
              : [Math.min(s, s - l * e.D), Math.max(s, s - l * e.D)],
            [p, m] = u
              ? [Math.min(c, c - u * e.D), Math.max(c, c - u * e.D)]
              : [c - e.W / 2, c + e.W / 2];
          (a.footing(d, f, p, m, 0.15), t.frontage(e, s, c, l, u));
          let h = t.edgeAt(s + l * -0.3, c + u * -0.3, l, u)?.e,
            g = Math.atan2(l, u),
            _ = Math.sign(o.alongX ? Math.cos(g) : -Math.sin(g)) || 1,
            v = $(e).map((t) => r.u + (t - e.W / 2) * _);
          if (
            (h &&
              v.length &&
              r.o.path !== !1 &&
              t.pave(
                h,
                Math.min(...v) - 0.6,
                Math.max(...v) + 0.6,
                i.walk,
                o.d - 0.05,
              ),
            h &&
              o.drive &&
              t.pave(h, o.drive.a, o.drive.b, 0, o.drive.d1, { cut: !0 }),
            o.tree && a.tree(o.tree.x, O, o.tree.z, o.tree.kind, o.tree.s),
            r.o.shrubs)
          )
            for (let t of [
              -e.W / 2 + 1,
              -e.W / 2 + 2.6,
              e.W / 2 - 2.6,
              e.W / 2 - 1,
            ]) {
              if (v.some((e) => Math.abs(r.u + t * _ - e) < 1.6)) continue;
              let [e, n] = o.w(r.u + t * _, o.d - 0.9);
              a.shrub(e, O, n, r.o.shrubs, 1.3, 1, 0.8);
            }
        } else {
          let i = t.bulbs[r.bulb],
            o = n.bulbs[r.bulb],
            s = D(o, r.a, r.key, r.o),
            { x: c, z: l, fx: u, fz: d } = s,
            f = Math.atan2(u, d),
            p = Math.cos(f),
            m = Math.sin(f),
            h = e.W / 2,
            g = Math.cos(f),
            _ = -Math.sin(f),
            v = [
              [-h, 0],
              [h, 0],
              [h, -e.D],
              [-h, -e.D],
            ].map(([e, t]) => [c + e * p + t * m, l - e * m + t * p]);
          for (let e = 0; e < 4; e++)
            a.contactLine(v[e], v[(e + 1) % 4], 0.15, 1.6, 0.55, -1);
          let y = $(e).map((t) => t - e.W / 2);
          if (y.length) {
            let e = (Math.min(...y) + Math.max(...y)) / 2,
              t = Math.atan2(l + _ * e - i.Cz, c + g * e - i.xc);
            i.pave(t, Math.max(...y) - Math.min(...y) + 1.2, s.set - 0.05);
          }
          (i.pave(s.drive.a, s.drive.w, s.drive.len, { cut: !0 }),
            s.tree && a.tree(s.tree.x, O, s.tree.z, s.tree.kind, s.tree.s));
        }
      }
    }
    for (let n of e.holes ?? [])
      t.blocks
        .find(
          (e) =>
            (n[0] + n[1]) / 2 > e.x0 &&
            (n[0] + n[1]) / 2 < e.x1 &&
            (n[2] + n[3]) / 2 > e.z0 &&
            (n[2] + n[3]) / 2 < e.z1,
        )
        ?.holes.push(n);
    t.build();
    for (let t of e.extras ?? [])
      t.kind === `hedge`
        ? a.hedge(t.a, t.b, O, t.palette, t.h)
        : t.kind === `tree` && a.tree(t.x, O, t.z, t.k, t.s);
    await ce();
  }
  for (let e of r.trees ?? []) a.tree(e.x, O, e.z, e.k, e.s);
  a.finish();
  let { out: s, before: c } = le(i),
    l = Math.min(8, e.renderer?.capabilities?.getMaxAnisotropy?.() ?? 8),
    u = new Set();
  for (let e of s)
    for (let t of [`map`, `bumpMap`, `roughnessMap`, `normalMap`]) {
      let n = e.material[t];
      n &&
        !u.has(n) &&
        (u.add(n),
        (n.anisotropy = l),
        (n.minFilter = m),
        (n.generateMipmaps = !0),
        (n.needsUpdate = !0));
    }
  e.log?.(
    `suburb streets: ${r.grids.length} lab grids, ${c} meshes merged into ${s.length}`,
  );
  let d = new x(),
    f = new x();
  return {
    update(t) {
      P.uTime.value += Math.min(t || 0, 0.1);
      let n = e.camera;
      if (n) {
        n.getWorldPosition(d);
        for (let e of s) {
          let t = e.geometry.boundingSphere;
          f.copy(t.center).add(i.position);
          let n = Math.hypot(f.x - d.x, f.z - d.z) - t.radius;
          e.visible = !e.userData.cast || n < Q || d.y - f.y > 45;
        }
      }
    },
    dispose() {
      i.removeFromParent();
    },
  };
}
