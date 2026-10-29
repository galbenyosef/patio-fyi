// assets__suburb-view-DkxWOrgD 05 — math
// Lines 1394-1597 of readable/assets__suburb-view-DkxWOrgD.pretty.js (statement-aligned).
var se = () => new Promise((e) => setTimeout(e, 0)),
  $ = 48,
  ce = 190;
function le(t) {
  let n = new Map(),
    i = new Map(),
    a = [];
  t.updateMatrixWorld(!0);
  let o = new C().copy(t.matrixWorld).invert(),
    s = new C(),
    c = new r();
  t.traverse((e) => {
    e.isMesh && !e.isInstancedMesh && a.push(e);
  });
  for (let e of a) {
    let t = e.material,
      r = e.geometry,
      a = t.isMeshBasicMaterial
        ? `d|${t.map?.uuid}|${t.opacity.toFixed(2)}`
        : t.uuid;
    (i.has(a) || i.set(a, t),
      s.multiplyMatrices(o, e.matrixWorld),
      r.computeBoundingBox(),
      r.boundingBox.getCenter(c).applyMatrix4(s));
    let l = `${a}|${Object.keys(r.attributes).sort().join(`,`) + (r.index ? `|i` : `|n`)}|${Math.floor(c.x / $)},${Math.floor(c.z / $)}`;
    n.has(l) || n.set(l, { mk: a, geos: [], cast: !1, ro: e.renderOrder });
    let u = n.get(l);
    (u.geos.push(r.clone().applyMatrix4(s)),
      (u.cast ||= e.castShadow),
      e.removeFromParent());
  }
  let l = [];
  for (let r of n.values()) {
    let n = r.geos.length > 1 ? y(r.geos) : r.geos[0];
    if (!n) continue;
    for (let e of r.geos) e !== n && e.dispose();
    n.computeBoundingSphere();
    let a = new e(n, i.get(r.mk));
    ((a.receiveShadow = !0),
      (a.castShadow = r.cast),
      (a.userData.cast = r.cast),
      (a.renderOrder = r.ro),
      (a.matrixAutoUpdate = !1),
      t.add(a),
      l.push(a));
  }
  return { out: l, before: a.length };
}
function ue(e) {
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
async function de(e, t, n) {
  let i = n.suburb;
  if (!i?.grids?.length) return null;
  let a = new p();
  ((a.name = `suburb-streets`), (a.position.y = i.y ?? 0), t.add(a));
  let o = z(a, { treeLod: `mid` }),
    s = new Map(E().map((e) => [e.key, e]));
  for (let e of i.grids) {
    let t = oe(o, { ...e.spec, inner: () => e.inner }),
      n = D(e.spec);
    for (let r of e.lots) {
      let e = s.get(r.key);
      if (e) {
        if (r.kind === `lot`) {
          let i = n.roads[r.road],
            a = A(n, i, r.side, r.u, r.key, r.o),
            { x: s, z: c, fx: l, fz: u } = a,
            [d, f] = u
              ? [s - e.W / 2, s + e.W / 2]
              : [Math.min(s, s - l * e.D), Math.max(s, s - l * e.D)],
            [p, m] = u
              ? [Math.min(c, c - u * e.D), Math.max(c, c - u * e.D)]
              : [c - e.W / 2, c + e.W / 2];
          (o.footing(d, f, p, m, 0.15), t.frontage(e, s, c, l, u));
          let h = t.edgeAt(s + l * -0.3, c + u * -0.3, l, u)?.e,
            g = Math.atan2(l, u),
            _ = Math.sign(a.alongX ? Math.cos(g) : -Math.sin(g)) || 1,
            v = ue(e).map((t) => r.u + (t - e.W / 2) * _);
          if (
            (h &&
              v.length &&
              r.o.path !== !1 &&
              t.pave(
                h,
                Math.min(...v) - 0.6,
                Math.max(...v) + 0.6,
                i.walk,
                a.d - 0.05,
              ),
            h &&
              a.drive &&
              t.pave(h, a.drive.a, a.drive.b, 0, a.drive.d1, { cut: !0 }),
            a.tree && o.tree(a.tree.x, k, a.tree.z, a.tree.kind, a.tree.s),
            r.o.shrubs)
          )
            for (let t of [
              -e.W / 2 + 1,
              -e.W / 2 + 2.6,
              e.W / 2 - 2.6,
              e.W / 2 - 1,
            ]) {
              if (v.some((e) => Math.abs(r.u + t * _ - e) < 1.6)) continue;
              let [e, n] = a.w(r.u + t * _, a.d - 0.9);
              o.shrub(e, k, n, r.o.shrubs, 1.3, 1, 0.8);
            }
        } else {
          let i = t.bulbs[r.bulb],
            a = n.bulbs[r.bulb],
            s = O(a, r.a, r.key, r.o),
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
            o.contactLine(v[e], v[(e + 1) % 4], 0.15, 1.6, 0.55, -1);
          let y = ue(e).map((t) => t - e.W / 2);
          if (y.length) {
            let e = (Math.min(...y) + Math.max(...y)) / 2,
              t = Math.atan2(l + _ * e - i.Cz, c + g * e - i.xc);
            i.pave(t, Math.max(...y) - Math.min(...y) + 1.2, s.set - 0.05);
          }
          (i.pave(s.drive.a, s.drive.w, s.drive.len, { cut: !0 }),
            s.tree && o.tree(s.tree.x, k, s.tree.z, s.tree.kind, s.tree.s));
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
        ? o.hedge(t.a, t.b, k, t.palette, t.h)
        : t.kind === `tree` && o.tree(t.x, k, t.z, t.k, t.s);
    await se();
  }
  for (let e of i.trees ?? []) o.tree(e.x, k, e.z, e.k, e.s);
  o.finish();
  let { out: c, before: l } = le(a),
    u = Math.min(8, e.renderer?.capabilities?.getMaxAnisotropy?.() ?? 8),
    d = new Set();
  for (let e of c)
    for (let t of [`map`, `bumpMap`, `roughnessMap`, `normalMap`]) {
      let n = e.material[t];
      n &&
        !d.has(n) &&
        (d.add(n),
        (n.anisotropy = u),
        (n.minFilter = h),
        (n.generateMipmaps = !0),
        (n.needsUpdate = !0));
    }
  e.log?.(
    `suburb streets: ${i.grids.length} lab grids, ${l} meshes merged into ${c.length}`,
  );
  let f = new r(),
    m = new r();
  return {
    update(t) {
      F.uTime.value += Math.min(t || 0, 0.1);
      let n = e.camera;
      if (n) {
        n.getWorldPosition(f);
        for (let e of c) {
          let t = e.geometry.boundingSphere;
          m.copy(t.center).add(a.position);
          let n = Math.hypot(m.x - f.x, m.z - f.z) - t.radius;
          e.visible = !e.userData.cast || n < ce || f.y - m.y > 45;
        }
      }
    },
    dispose() {
      a.removeFromParent();
    },
  };
}
