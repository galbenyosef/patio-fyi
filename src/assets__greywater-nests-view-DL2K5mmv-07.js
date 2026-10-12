// assets__greywater-nests-view-DL2K5mmv 07 — math
// Lines 1862-2203 of readable/assets__greywater-nests-view-DL2K5mmv.pretty.js (statement-aligned).
function Q() {
  let e = H(),
    t = k(11125448, 0.45, 0.35),
    n = k(7307911, 0.45, 0.6),
    r = I(10131086, { amount: 0.1 }),
    i = 5.4,
    a = new y(5, 28, 16).scale(1, 0.7, 1);
  (e.deco(10, 7, 10, t, 0, 17.5, 0, { geo: a }),
    e.collider([-3.5, 17.6, -3.5, 3.5, 24.4, 3.5], `metal`),
    e.collider([-4.5, 19.9, -4.5, 4.5, 22.1, 4.5], `metal`),
    e.cyl(0.08, 0.08, 1.2, n, 0, 24.4, 0),
    e.cyl(0.6, 0.6, 0.3, t, 0, 24.3, 0),
    e.cyl(0.7, 0.7, 17.6, t, 0, 0, 0, { seg: 16, solid: `metal` }));
  let s = [0, 1, 2, 3].map((e) => {
    let t = Math.PI / 4 + (e * Math.PI) / 2;
    return [Math.cos(t), Math.sin(t)];
  });
  for (let [n, i] of s) {
    (e.strut([n * 5, 20, i * 5], [n * 7.6, 0, i * 7.6], 0.32, t, 12),
      e.solid(1.4, 0.5, 1.4, r, n * 7.6, 0, i * 7.6));
    for (let [t, r] of [
      [0, 6],
      [6, 12],
      [12, 17.9],
    ]) {
      let a = 7.6 - ((t + r) / 2 / 20) * 2.6;
      e.collider(
        [n * a - 0.3, t, i * a - 0.3, n * a + 0.3, r, i * a + 0.3],
        `metal`,
      );
    }
  }
  for (let r = 0; r < 4; r++) {
    let [i, a] = s[r],
      [o, c] = s[(r + 1) % 4];
    for (let n of [6, 12]) {
      let r = 7.6 - (n / 20) * 2.6;
      e.strut([i * r, n, a * r], [o * r, n, c * r], 0.12, t);
    }
    for (let [t, r] of [
      [0.5, 6],
      [6, 12],
      [12, 17.5],
    ]) {
      let s = 7.6 - (t / 20) * 2.6,
        l = 7.6 - (r / 20) * 2.6;
      (e.strut([i * s, t, a * s], [o * l, r, c * l], 0.03, n),
        e.strut([o * s, t, c * s], [i * l, r, a * l], 0.03, n));
    }
  }
  let c = new g(5, 5.8, 48).rotateX(-Math.PI / 2);
  (e.deco(1, 0.1, 1, k(5069663, 0.6, 0.6), 0, 17.95, 0, { geo: c }),
    e.cyl(5.8, 5.8, 0.18, n, 0, 17.8, 0, { seg: 48, open: !0 }));
  for (let t = 0; t < 48; t++) {
    let n = (t / 48) * Math.PI * 2,
      r = Math.cos(n) * i,
      a = Math.sin(n) * i;
    e.collider([r - 0.4, 17.8, a - 0.4, r + 0.4, 18, a + 0.4], `metal`);
  }
  for (let t = 0; t < 96; t++) {
    let r = (t / 96) * Math.PI * 2,
      i = Math.cos(r) * 5.95,
      a = Math.sin(r) * 5.95;
    (Math.abs(i) < 0.5 && a > 0) ||
      (e.collider([i - 0.1, 18, a - 0.1, i + 0.1, 19.05, a + 0.1], `metal`),
      t % 4 == 0 && e.strut([i, 18, a], [i, 19.05, a], 0.025, n));
  }
  for (let t of [18.5, 19.05])
    e.deco(1, 1, 1, n, 0, t - 0.5, 0, {
      geo: new o(5.95, 0.025, 4, 72, Math.PI * 2 - 0.17)
        .rotateX(Math.PI / 2)
        .rotateY(-Math.PI / 2 - 0.085),
    });
  e.ladder(0, 6.3, 0, 18, Math.PI, n, { cage: !0 });
  let l = N(
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
    u = (t, r, i, a) => {
      (e.sheet(
        [
          [t, 2.1, r],
          [i, 2.1, a],
          [i, 0.05, a],
          [t, 0.05, r],
        ],
        l,
        {
          sag: 0,
          rumple: 0,
          repeat: [Math.hypot(i - t, a - r) / 0.5, 4],
          seg: 2,
        },
      ),
        e.collider(
          [
            Math.min(t, i) - 0.03,
            0,
            Math.min(r, a) - 0.03,
            Math.max(t, i) + 0.03,
            2.1,
            Math.max(r, a) + 0.03,
          ],
          `metal`,
        ));
      let o = Math.round(Math.hypot(i - t, a - r) / 2.5);
      for (let s = 0; s <= o; s++)
        e.strut(
          [t + ((i - t) * s) / o, 0, r + ((a - r) * s) / o],
          [t + ((i - t) * s) / o, 2.2, r + ((a - r) * s) / o],
          0.03,
          n,
        );
    };
  (u(-9, -9, 9, -9),
    u(-9, -9, -9, 9),
    u(9, -9, 9, 9),
    u(-9, 9, -1.2, 9),
    u(1.2, 9, 9, 9),
    e.sheet(
      [
        [1.2, 2, 9],
        [1.4, 2, 10.9],
        [1.4, 0.1, 10.9],
        [1.2, 0.1, 9],
      ],
      l,
      { sag: 0, rumple: 0, repeat: [4, 4], seg: 2 },
    ),
    e.solid(2.6, 2.4, 2.2, r, -5.5, 0, 5.2, { tile: 2 }),
    e.deco(2.8, 0.15, 2.4, k(3817282, 0.6), -5.5, 2.4, 5.2),
    e.deco(0.9, 2, 0.05, k(5791850, 0.5, 0.5), -5.5, 0, 6.31),
    (e.g.userData.stairs = !1));
  for (let [t, n, r] of [
    [0, i, 0],
    [i, 0, Math.PI / 2],
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
function* $(e, n, r) {
  let i = r.nests ?? [];
  if (!i.length) return null;
  let a = e.modules.get(`environment`),
    o = new m(),
    s = new Map(),
    c = new Set(),
    l = new Map();
  o.name = `greywater-nests`;
  for (let e of i) {
    let n = pe[e.key]?.();
    n &&
      (n.position.set(e.x, e.y, e.z),
      (n.rotation.y = e.rotY),
      (n.name = `nest-${e.id}`),
      x(`nest:${e.key}`) || S(`nest:${e.key}`, n, t),
      n.traverse((t) => {
        if (
          (t.userData.panelId && l.set(`nest-${e.id}-${t.userData.panelId}`, t),
          !t.isMesh)
        )
          return;
        (c.add(t.material), t.castShadow && a?.configureCaster?.(t.material));
        let n = t.material.userData?.nightGlow;
        n && s.set(t.material, n);
      }),
      o.add(n),
      yield);
  }
  o.updateMatrixWorld(!0);
  let d = [];
  o.traverse((e) => {
    e.isMesh &&
      e.parent?.name === `static` &&
      !s.has(e.material) &&
      te(e.material) &&
      d.push({
        geometry: e.geometry,
        material: e.material,
        matrix: e.matrixWorld.clone(),
        cast: e.castShadow,
        mesh: e,
      });
  });
  let f = ee(d, { cell: 128, name: `nest-baked` }),
    p = new Set(f.rest.map((e) => e.mesh));
  for (let e of d)
    p.has(e.mesh) || (e.mesh.removeFromParent(), e.mesh.geometry.dispose());
  ((d.length = 0), p.clear());
  for (let e of f.meshes)
    ((e.userData.releaseAfterUpload = !0),
      e.castShadow && a?.configureCaster?.(e.material),
      o.add(e));
  let h = new Map(),
    g = new Map();
  for (let [e, t] of l)
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
          new _(new Float32Array(n.attributes.position.count * 2), 2),
        ),
        h.has(t.material) || h.set(t.material, { geos: [], runs: [], n: 0 }));
      let r = h.get(t.material);
      (r.runs.push([e, r.n, n.attributes.position.count]),
        (r.n += n.attributes.position.count),
        r.geos.push(n));
    });
  for (let e of l.values()) e.removeFromParent();
  for (let [e, t] of h) {
    let n = new u(v(t.geos, !1), e);
    ((n.castShadow = n.receiveShadow = !0),
      (n.name = `nest-panels`),
      (n.userData.releaseAfterUpload = [`normal`, `uv`]));
    for (let e of t.geos) e.dispose();
    for (let [e, r, i] of t.runs)
      (g.has(e) || g.set(e, []), g.get(e).push({ m: n, start: r, count: i }));
    o.add(n);
  }
  return (
    l.clear(),
    h.clear(),
    n.add(o),
    {
      setPanelHidden(e, t) {
        let n = !1;
        for (let r of g.get(e) ?? []) {
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
        n && a?.invalidateStaticShadows?.();
      },
      update() {
        let e = a?.getPracticals?.() ?? 0;
        for (let [t, n] of s) t.emissiveIntensity = n * (0.35 + 0.65 * e);
      },
      dispose() {
        (o.removeFromParent(),
          f.dispose(),
          o.traverse((e) => {
            e.isMesh && e.geometry.dispose();
          }));
        for (let e of c) (e.map?.dispose(), e.dispose());
      },
    }
  );
}
