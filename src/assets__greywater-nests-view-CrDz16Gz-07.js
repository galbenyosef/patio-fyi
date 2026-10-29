// assets__greywater-nests-view-CrDz16Gz 07 — math
// Lines 1862-2203 of readable/assets__greywater-nests-view-CrDz16Gz.pretty.js (statement-aligned).
function Q() {
  let e = H(),
    t = k(11125448, 0.45, 0.35),
    r = k(7307911, 0.45, 0.6),
    a = I(10131086, { amount: 0.1 }),
    o = 5.4,
    s = new n(5, 28, 16).scale(1, 0.7, 1);
  (e.deco(10, 7, 10, t, 0, 17.5, 0, { geo: s }),
    e.collider([-3.5, 17.6, -3.5, 3.5, 24.4, 3.5], `metal`),
    e.collider([-4.5, 19.9, -4.5, 4.5, 22.1, 4.5], `metal`),
    e.cyl(0.08, 0.08, 1.2, r, 0, 24.4, 0),
    e.cyl(0.6, 0.6, 0.3, t, 0, 24.3, 0),
    e.cyl(0.7, 0.7, 17.6, t, 0, 0, 0, { seg: 16, solid: `metal` }));
  let c = [0, 1, 2, 3].map((e) => {
    let t = Math.PI / 4 + (e * Math.PI) / 2;
    return [Math.cos(t), Math.sin(t)];
  });
  for (let [n, r] of c) {
    (e.strut([n * 5, 20, r * 5], [n * 7.6, 0, r * 7.6], 0.32, t, 12),
      e.solid(1.4, 0.5, 1.4, a, n * 7.6, 0, r * 7.6));
    for (let [t, i] of [
      [0, 6],
      [6, 12],
      [12, 17.9],
    ]) {
      let a = 7.6 - ((t + i) / 2 / 20) * 2.6;
      e.collider(
        [n * a - 0.3, t, r * a - 0.3, n * a + 0.3, i, r * a + 0.3],
        `metal`,
      );
    }
  }
  for (let n = 0; n < 4; n++) {
    let [i, a] = c[n],
      [o, s] = c[(n + 1) % 4];
    for (let n of [6, 12]) {
      let r = 7.6 - (n / 20) * 2.6;
      e.strut([i * r, n, a * r], [o * r, n, s * r], 0.12, t);
    }
    for (let [t, n] of [
      [0.5, 6],
      [6, 12],
      [12, 17.5],
    ]) {
      let c = 7.6 - (t / 20) * 2.6,
        l = 7.6 - (n / 20) * 2.6;
      (e.strut([i * c, t, a * c], [o * l, n, s * l], 0.03, r),
        e.strut([o * c, t, s * c], [i * l, n, a * l], 0.03, r));
    }
  }
  let l = new g(5, 5.8, 48).rotateX(-Math.PI / 2);
  (e.deco(1, 0.1, 1, k(5069663, 0.6, 0.6), 0, 17.95, 0, { geo: l }),
    e.cyl(5.8, 5.8, 0.18, r, 0, 17.8, 0, { seg: 48, open: !0 }));
  for (let t = 0; t < 48; t++) {
    let n = (t / 48) * Math.PI * 2,
      r = Math.cos(n) * o,
      i = Math.sin(n) * o;
    e.collider([r - 0.4, 17.8, i - 0.4, r + 0.4, 18, i + 0.4], `metal`);
  }
  for (let t = 0; t < 96; t++) {
    let n = (t / 96) * Math.PI * 2,
      i = Math.cos(n) * 5.95,
      a = Math.sin(n) * 5.95;
    (Math.abs(i) < 0.5 && a > 0) ||
      (e.collider([i - 0.1, 18, a - 0.1, i + 0.1, 19.05, a + 0.1], `metal`),
      t % 4 == 0 && e.strut([i, 18, a], [i, 19.05, a], 0.025, r));
  }
  for (let t of [18.5, 19.05])
    e.deco(1, 1, 1, r, 0, t - 0.5, 0, {
      geo: new i(5.95, 0.025, 4, 72, Math.PI * 2 - 0.17)
        .rotateX(Math.PI / 2)
        .rotateY(-Math.PI / 2 - 0.085),
    });
  e.ladder(0, 6.3, 0, 18, Math.PI, r, { cage: !0 });
  let u = N(
      `chainlink`,
      (e, t, n) => {
        ((e.strokeStyle = `rgba(165,170,170,0.9)`), (e.lineWidth = 1));
        for (let r = -n; r < t; r += 8)
          (e.beginPath(),
            e.moveTo(r, 0),
            e.lineTo(r + n, n),
            e.stroke(),
            e.beginPath(),
            e.moveTo(r + n, 0),
            e.lineTo(r, n),
            e.stroke());
      },
      {
        w: 64,
        h: 64,
        color: 16777215,
        rough: 0.5,
        metal: 0.6,
        side: 2,
        transparent: !0,
        depthWrite: !1,
      },
    ),
    d = (t, n, i, a) => {
      (e.sheet(
        [
          [t, 2.1, n],
          [i, 2.1, a],
          [i, 0.05, a],
          [t, 0.05, n],
        ],
        u,
        {
          sag: 0,
          rumple: 0,
          repeat: [Math.hypot(i - t, a - n) / 0.5, 4],
          seg: 2,
        },
      ),
        e.collider(
          [
            Math.min(t, i) - 0.03,
            0,
            Math.min(n, a) - 0.03,
            Math.max(t, i) + 0.03,
            2.1,
            Math.max(n, a) + 0.03,
          ],
          `metal`,
        ));
      let o = Math.round(Math.hypot(i - t, a - n) / 2.5);
      for (let s = 0; s <= o; s++)
        e.strut(
          [t + ((i - t) * s) / o, 0, n + ((a - n) * s) / o],
          [t + ((i - t) * s) / o, 2.2, n + ((a - n) * s) / o],
          0.03,
          r,
        );
    };
  (d(-9, -9, 9, -9),
    d(-9, -9, -9, 9),
    d(9, -9, 9, 9),
    d(-9, 9, -1.2, 9),
    d(1.2, 9, 9, 9),
    e.sheet(
      [
        [1.2, 2, 9],
        [1.4, 2, 10.9],
        [1.4, 0.1, 10.9],
        [1.2, 0.1, 9],
      ],
      u,
      { sag: 0, rumple: 0, repeat: [4, 4], seg: 2 },
    ),
    e.solid(2.6, 2.4, 2.2, a, -5.5, 0, 5.2, { tile: 2 }),
    e.deco(2.8, 0.15, 2.4, k(3817282, 0.6), -5.5, 2.4, 5.2),
    e.deco(0.9, 2, 0.05, k(5791850, 0.5, 0.5), -5.5, 0, 6.31),
    (e.g.userData.stairs = !1));
  for (let [t, n, r] of [
    [0, o, 0],
    [o, 0, Math.PI / 2],
    [0, -5.4, Math.PI],
    [-5.4, 0, -Math.PI / 2],
  ])
    e.perch(t, 18, n, r, `crouch`);
  return e.finish({ name: `watertower` });
}
var pe = Object.fromEntries(
  [
    {
      key: `sangar`,
      name: `Checkpoint sangar`,
      desc: `Armoured watch tower at a city vehicle checkpoint: block base, side stair, steel cab with armoured slits behind a stand-off mesh screen. 5 m deck.`,
      build: G,
    },
    {
      key: `walkup`,
      name: `Walk-up with water tank`,
      desc: `Three-storey brick tenement: steel fire stair up the side, parapet roof with a tarp lean-to and mattress, timber water tank on a steel stand. Roof 9.6 m, tank deck 12.6 m (ladder).`,
      build: se,
    },
    {
      key: `steeple`,
      name: `Church bell tower`,
      desc: `Square brick tower with stone quoins, clock and slate spire; timber switchback stairs inside to the bell floor, louvred belfry openings on all four sides. 14.4 m.`,
      build: ce,
    },
    {
      key: `scaffold`,
      name: `Refurbishment scaffold`,
      desc: `Six-lift tube scaffold across a brick block, stair tower at one end, debris netting over the lower lifts, bricks and a tarped pile on the top lift. 12 m.`,
      build: le,
    },
    {
      key: `billboard`,
      name: `Rooftop billboard`,
      desc: `Two-storey corner shop with a steel billboard over its roof and a lighting catwalk under the face; caged ladder from the back yard, ladder to the catwalk. Roof 7 m, catwalk 9.6 m.`,
      build: ue,
    },
    {
      key: `signalbox`,
      name: `Railway signal box`,
      desc: `Brick locking room under a glazed timber operating floor and hipped slate roof, lever frame inside, stair to the door, two tracks and a semaphore. 3.6 m.`,
      build: de,
    },
    {
      key: `ruinedflat`,
      name: `Bombed-out flats`,
      desc: `Four-storey concrete-frame corner, street faces blown open, roof half fallen in; a lived-in position behind sandbags on the third floor. 6 and 9 m.`,
      build: fe,
    },
    {
      key: `watertower`,
      name: `Elevated water tower`,
      desc: `Spheroid steel tank on four splayed legs inside a chain-link compound; caged ladder to the balcony ring under the tank. 18 m.`,
      build: Q,
    },
  ].map((e) => [e.key, e.build]),
);
function me(e, t, n) {
  return T($(e, t, n));
}
function he(e, t, n, r) {
  return re($(e, t, n), r);
}
function* $(n, r, i) {
  let a = i.nests ?? [];
  if (!a.length) return null;
  let o = n.modules.get(`environment`),
    s = new h(),
    c = new Map(),
    l = new Set(),
    u = new Map();
  s.name = `greywater-nests`;
  for (let e of a) {
    let n = pe[e.key]?.();
    n &&
      (n.position.set(e.x, e.y, e.z),
      (n.rotation.y = e.rotY),
      (n.name = `nest-${e.id}`),
      x(`nest:${e.key}`) || S(`nest:${e.key}`, n, t),
      n.traverse((t) => {
        if (
          (t.userData.panelId && u.set(`nest-${e.id}-${t.userData.panelId}`, t),
          !t.isMesh)
        )
          return;
        (l.add(t.material), t.castShadow && o?.configureCaster?.(t.material));
        let n = t.material.userData?.nightGlow;
        n && c.set(t.material, n);
      }),
      s.add(n),
      yield);
  }
  s.updateMatrixWorld(!0);
  let d = [];
  s.traverse((e) => {
    e.isMesh &&
      e.parent?.name === `static` &&
      !c.has(e.material) &&
      te(e.material) &&
      d.push({
        geometry: e.geometry,
        material: e.material,
        matrix: e.matrixWorld.clone(),
        cast: e.castShadow,
        mesh: e,
      });
  });
  let f = ee(d, { cell: 256, name: `nest-baked`, flattenMaps: !!i.flatProps }),
    p = new Set(f.rest.map((e) => e.mesh));
  for (let e of d)
    p.has(e.mesh) || (e.mesh.removeFromParent(), e.mesh.geometry.dispose());
  ((d.length = 0), p.clear());
  for (let e of f.meshes)
    ((e.userData.releaseAfterUpload = !0),
      e.castShadow && o?.configureCaster?.(e.material),
      s.add(e));
  let g = new Map(),
    _ = new Map();
  for (let [e, t] of u)
    t.traverse((t) => {
      if (!t.isMesh) return;
      let n = (
        t.geometry.index ? t.geometry.toNonIndexed() : t.geometry.clone()
      ).applyMatrix4(t.matrixWorld);
      for (let e of Object.keys(n.attributes))
        [`position`, `normal`, `uv`].includes(e) || n.deleteAttribute(e);
      (n.attributes.uv ||
        n.setAttribute(
          `uv`,
          new m(new Float32Array(n.attributes.position.count * 2), 2),
        ),
        g.has(t.material) || g.set(t.material, { geos: [], runs: [], n: 0 }));
      let r = g.get(t.material);
      (r.runs.push([e, r.n, n.attributes.position.count]),
        (r.n += n.attributes.position.count),
        r.geos.push(n));
    });
  for (let e of u.values()) e.removeFromParent();
  for (let [t, n] of g) {
    let r = new e(y(n.geos, !1), t);
    ((r.castShadow = r.receiveShadow = !0),
      (r.name = `nest-panels`),
      (r.userData.releaseAfterUpload = [`normal`, `uv`]));
    for (let e of n.geos) e.dispose();
    for (let [e, t, i] of n.runs)
      (_.has(e) || _.set(e, []), _.get(e).push({ m: r, start: t, count: i }));
    s.add(r);
  }
  return (
    u.clear(),
    g.clear(),
    r.add(s),
    {
      setPanelHidden(e, t) {
        let n = !1;
        for (let r of _.get(e) ?? []) {
          let e = r.m.geometry.attributes.position,
            i = e.array,
            a = r.start * 3,
            o = (r.start + r.count) * 3;
          if (t && !r.saved) {
            r.saved = i.slice(a, o);
            for (let e = a + 1; e < o; e += 3) i[e] = -1e3;
          } else if (!t && r.saved) (i.set(r.saved, a), (r.saved = null));
          else continue;
          ((e.needsUpdate = !0), (n = !0));
        }
        n && o?.invalidateStaticShadows?.();
      },
      update() {
        let e = o?.getPracticals?.() ?? 0;
        for (let [t, n] of c) t.emissiveIntensity = n * (0.35 + 0.65 * e);
      },
      dispose() {
        (s.removeFromParent(),
          f.dispose(),
          s.traverse((e) => {
            e.isMesh && e.geometry.dispose();
          }));
        for (let e of l) (e.map?.dispose(), e.dispose());
      },
    }
  );
}
