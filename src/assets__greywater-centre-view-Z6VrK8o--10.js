// assets__greywater-centre-view-Z6VrK8o- 10 — math
// Lines 2534-2848 of readable/assets__greywater-centre-view-Z6VrK8o-.pretty.js (statement-aligned).
function xt(e, t, r, i = () => e.world.time.tick) {
  let a = r.greywaterCentre;
  if (!a) return null;
  let o = e.modules.get(`environment`),
    s = (t, n) => e.world.map.getHeight(t, n),
    c = se().length,
    { group: l, line: u, square: d, monument: f } = ot(a, s);
  ee(`gwcentre`) || te(ne, l, n);
  let p = new Set([`precast`, `pierConcrete`, `aluminum`].map(re));
  St(u, new Set(), (e) => p.has(e));
  let m = new Set(
    [
      `wire`,
      `rubberPad`,
      `tactile`,
      `trimWhite`,
      `lampGlow`,
      `railHead`,
      `adGlow`,
      `reflect`,
      `soil`,
    ].map(re),
  );
  (St(d, new Set([f.flag.mesh]), (e) => !m.has(e)),
    l.traverse((e) => {
      e.isMesh && e.castShadow && o?.configureCaster?.(e.material);
    }),
    t.add(l));
  let h = vt(2, { flat: !0 });
  ((h.group.name = `greywater-trains`),
    t.add(h.group),
    h.group.traverse((e) => {
      e.isMesh && e.castShadow && o?.configureCaster?.(e.material);
    }));
  let g = e.modules.get(`audio`),
    _ = e.modules.get(`effects`),
    v = [0, 1].map(() => ({
      roar: null,
      dop: 1,
      nose: null,
      tail: null,
      hitN: !1,
      hitT: !1,
      sang: !1,
      horned: !1,
      warned: !1,
      prevHead: null,
      spark: 0,
      arc: 0,
      gust: 0,
    })),
    y = (e) => 1.5 * (18 / (18 + e)) ** 0.9,
    b = (e, t) =>
      t > F - 1 ? 0 : e < 3 ? 0.35 : e < 7 ? 0.35 * (1 - (e - 3) / 4) : 0,
    x = 0,
    S = Math.random,
    C = (e, t, n = F) => {
      let r = I(e);
      return [r.x + r.tz * t, n, r.z - r.tx * t];
    },
    w = (e) => {
      let t = I(e - 6),
        n = I(e + 6);
      return Math.min(
        1,
        (Math.abs(
          Math.atan2(t.tx * n.tz - t.tz * n.tx, t.tx * n.tx + t.tz * n.tz),
        ) /
          12) *
          70,
      );
    },
    T = 0;
  function E(t) {
    let n = i(),
      r = e.camera?.position,
      a = e.modules.get(`player`),
      o = a?.getLocalEntity?.(),
      l = ue,
      u = l.speed,
      d = 0;
    for (let e of de(n)) {
      bt(h, e.id, I, e.head, e.dir, e.lane, F);
      let n = v[e.id];
      if (!e.running) {
        ((n.roar &&= (n.roar.stop?.(), null)), (n.prevHead = null));
        continue;
      }
      if (!r) continue;
      n.prevHead ??
        Object.assign(n, {
          sang: !1,
          horned: !1,
          warned: !1,
          nose: null,
          tail: null,
          hitN: !1,
          hitT: !1,
        });
      let i = 0,
        a = 1 / 0;
      for (let t = -l.lead; t <= c + l.lead; t += 8) {
        let [n, , o] = C(t, e.lane),
          s = (n - r.x) ** 2 + (o - r.z) ** 2;
        s < a && ((a = s), (i = t));
      }
      for (let t = i - 8, n = i; t <= n + 8; t += 1) {
        let [n, , o] = C(t, e.lane),
          s = (n - r.x) ** 2 + (o - r.z) ** 2;
        s < a && ((a = s), (i = t));
      }
      let f = Math.hypot(Math.sqrt(a), r.y - (F + 1.5)),
        p = e.head - e.dir * l.length,
        m = Math.max(Math.min(e.head, p), Math.min(Math.max(e.head, p), i)),
        T = C(m, e.lane, F + 1.5),
        E = Math.hypot(T[0] - r.x, T[1] - r.y, T[2] - r.z),
        D = w(m),
        O = I(e.head),
        k = [O.tx * e.dir, 0, O.tz * e.dir];
      if (g) {
        if (
          ((!n.roar || !n.roar.alive?.()) &&
            (n.roar =
              E < 1300 ? g.play(`train_roar`, { pos: T, volume: y(E) }) : null),
          n.roar)
        ) {
          let i = I(m),
            a = r.x - T[0],
            o = r.z - T[2],
            s = Math.hypot(a, o) || 1,
            c = (i.tx * e.dir * u * a + i.tz * e.dir * u * o) / s,
            l = Math.max(0.82, Math.min(1.18, 343 / (343 - c)));
          ((n.dop += (l - n.dop) * Math.min(1, t * 10)),
            n.roar.setPosition?.(T),
            n.roar.setVolume?.(y(E)),
            n.roar.setParam?.(`near`, Math.min(1, 50 / (40 + E))),
            n.roar.setParam?.(`dop`, n.dop),
            n.roar.setParam?.(`curve`, D));
        }
        let a = e.dir > 0 ? 0 : c;
        !n.horned &&
          n.prevHead != null &&
          (n.prevHead - a) * (e.head - a) <= 0 &&
          ((n.horned = !0),
          g.play(`train_horn`, {
            pos: C(e.head, e.lane, F + 3),
            size: 2,
            volume: 1.2,
          }));
        let s = (i - e.head) * e.dir;
        !n.sang &&
          f < 60 &&
          s > 150 &&
          s < 290 &&
          ((n.sang = !0),
          g.play(`train_rails`, {
            pos: C(i, e.lane, F),
            duration: s / u,
            volume: 1,
          }));
        let l = (i - p) * e.dir;
        if (
          (f < 45 &&
            (!n.hitN &&
              n.nose != null &&
              n.nose > 0 &&
              s <= 0 &&
              ((n.hitN = !0),
              g.play(`train_whoosh`, {
                pos: C(e.head, e.lane, F + 2),
                volume: 1.3,
              }),
              (x = Math.max(x, Math.max(0, 1 - f / 40)))),
            !n.hitT &&
              n.tail != null &&
              n.tail > 0 &&
              l <= 0 &&
              (n.hitT = !0) &&
              g.play(`train_whoosh`, {
                pos: C(p, e.lane, F + 2),
                size: 0.5,
                volume: 1,
              })),
          (n.nose = s),
          (n.tail = l),
          o && !n.warned && Math.abs(o.pos[1] - F) < 1.5)
        )
          for (let t = 25; t <= 260 && !n.warned; t += 5) {
            let [r, , i] = C(e.head + e.dir * t, e.lane);
            Math.hypot(o.pos[0] - r, o.pos[2] - i) < 2.2 &&
              ((n.warned = !0),
              g.play(`train_horn`, {
                pos: C(e.head, e.lane, F + 2.5),
                volume: 1.2,
              }));
          }
      }
      if (
        ((d = Math.max(d, b(Math.hypot(T[0] - r.x, T[2] - r.z), r.y))),
        _ && E < 220)
      ) {
        for (n.spark += t * (4 + 26 * D); n.spark >= 1;) {
          --n.spark;
          let t = (S() * l.cars) | 0,
            r =
              e.head -
              e.dir * (l.carLen / 2 + t * (l.carLen + l.gap)) +
              (S() < 0.5 ? 1 : -1) * l.bogie;
          _.spawn(
            `trainSparks`,
            C(r, e.lane + (S() < 0.5 ? -0.72 : 0.72), F + 0.08),
            k,
            { count: D > 0.3 ? 14 : 7 },
          );
        }
        if (((n.arc += t), n.arc > 0.35 && S() < t * 1.4)) {
          n.arc = 0;
          let t = 1 + ((S() * (l.cars - 2)) | 0),
            r = C(
              e.head - e.dir * (l.carLen / 2 + t * (l.carLen + l.gap)),
              e.lane,
              F + 5.3,
            );
          (_.spawn(`arcFlash`, r, [0, -1, 0], { scale: 0.8 + S() * 0.8 }),
            g?.play(`train_arc`, { pos: r, volume: 1 }));
        }
        if (E < 40 && r.y < F - 2.6)
          for (n.grit = (n.grit ?? 0) + t * 22 * (1 - E / 40); n.grit >= 1;) {
            --n.grit;
            let e = C(m + (S() - 0.5) * 30, (S() - 0.5) * 9, F - 2.5);
            _.spawn(`deckGrit`, e, [0, -1, 0], { count: 3, chips: 2 });
          }
        if (E < 32)
          for (n.gust += t * 14 * (1 - E / 32); n.gust >= 1;) {
            --n.gust;
            let t = m + (S() - 0.5) * 24,
              i = (S() < 0.5 ? -1 : 1) * (l.halfW + 0.8 + S() * 2.5);
            if (
              (_.spawn(`trainGust`, C(t, e.lane + i, F - 0.3), k, {
                speed: 14,
                count: 5,
                flakes: 2,
              }),
              r.y < F - 3)
            ) {
              let n = C(t, e.lane + i * 2.5, 0);
              ((n[1] = s(n[0], n[2]) + 0.1),
                _.spawn(`trainGust`, n, k, {
                  speed: 8,
                  count: 3,
                  flakes: 3,
                  scale: 1.3,
                }));
            }
          }
      }
      n.prevHead = e.head;
    }
    ((x = Math.max(0, x - t * 1.6)),
      o &&
        a?.shakeView &&
        a.shakeView(Math.min(0.5, d + (d > 0 ? x * 0.15 : 0))),
      h.commit());
  }
  return {
    update(e) {
      ((T += Math.min(e || 0, 0.1)), (tt.value = T), E(Math.min(e || 0, 0.1)));
    },
  };
}
function St(t, n, r) {
  t.updateMatrixWorld(!0);
  let i = t.matrixWorld.clone().invert(),
    a = new Map(),
    o = [];
  t.traverse((e) => {
    if (!e.isMesh || n.has(e)) return;
    let t = (
      e.geometry.index ? e.geometry.toNonIndexed() : e.geometry.clone()
    ).applyMatrix4(new A().multiplyMatrices(i, e.matrixWorld));
    a.has(e.material) ||
      a.set(e.material, { geos: [], cast: !1, depth: e.customDepthMaterial });
    let r = a.get(e.material);
    (r.geos.push(t), (r.cast ||= e.castShadow), o.push(e));
  });
  for (let e of o) e.removeFromParent();
  {
    let e = [...a.values()].flatMap((e) => e.geos.map((t, n) => [e, n])),
      t = oe(e.map(([e, t]) => e.geos[t]));
    e.forEach(([e, n], r) => {
      t.geos[r] !== e.geos[n] && (e.geos[n].dispose(), (e.geos[n] = t.geos[r]));
    });
  }
  for (let [n, i] of a) {
    let a = Object.keys(i.geos[0].attributes).filter((e) =>
      i.geos.every((t) => t.attributes[e]),
    );
    for (let e of i.geos)
      for (let t of Object.keys(e.attributes))
        a.includes(t) || e.deleteAttribute(t);
    let o = new e(E(i.geos), n);
    ((o.castShadow = i.cast && r(n)),
      (o.receiveShadow = !0),
      i.depth && (o.customDepthMaterial = i.depth),
      t.add(o));
  }
  if (!b()) {
    let e = C();
    ie(
      t.children.filter((e) => e.isMesh),
      e ? { layerSize: e.tex, bump: !1 } : void 0,
    );
  }
  for (let e of t.children) e.isMesh && !n.has(e) && ae(e.geometry);
}
