// assets__greywater-centre-view-Cf3_SbRw 10 — math
// Lines 2500-2814 of readable/assets__greywater-centre-view-Cf3_SbRw.pretty.js (statement-aligned).
function bt(t, n, r, i = () => t.world.time.tick) {
  let a = r.greywaterCentre;
  if (!a) return null;
  let o = t.modules.get(`environment`),
    s = (e, n) => t.world.map.getHeight(e, n),
    c = ce().length,
    { group: l, line: u, square: d, monument: f } = ot(a, s);
  te(`gwcentre`) || ne(re, l, e);
  let p = new Set([`precast`, `pierConcrete`, `aluminum`].map(ie));
  xt(u, new Set(), (e) => p.has(e));
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
    ].map(ie),
  );
  (xt(d, new Set([f.flag.mesh]), (e) => !m.has(e)),
    l.traverse((e) => {
      e.isMesh && e.castShadow && o?.configureCaster?.(e.material);
    }),
    n.add(l));
  let h = _t(2);
  ((h.group.name = `greywater-trains`),
    n.add(h.group),
    h.group.traverse((e) => {
      e.isMesh && e.castShadow && o?.configureCaster?.(e.material);
    }));
  let g = t.modules.get(`audio`),
    _ = t.modules.get(`effects`),
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
      t > P - 1 ? 0 : e < 3 ? 0.35 : e < 7 ? 0.35 * (1 - (e - 3) / 4) : 0,
    x = 0,
    S = Math.random,
    C = (e, t, n = P) => {
      let r = F(e);
      return [r.x + r.tz * t, n, r.z - r.tx * t];
    },
    w = (e) => {
      let t = F(e - 6),
        n = F(e + 6);
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
  function E(e) {
    let n = i(),
      r = t.camera?.position,
      a = t.modules.get(`player`),
      o = a?.getLocalEntity?.(),
      l = de,
      u = l.speed,
      d = 0;
    for (let t of fe(n)) {
      yt(h, t.id, F, t.head, t.dir, t.lane, P);
      let n = v[t.id];
      if (!t.running) {
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
      for (let e = -l.lead; e <= c + l.lead; e += 8) {
        let [n, , o] = C(e, t.lane),
          s = (n - r.x) ** 2 + (o - r.z) ** 2;
        s < a && ((a = s), (i = e));
      }
      for (let e = i - 8, n = i; e <= n + 8; e += 1) {
        let [n, , o] = C(e, t.lane),
          s = (n - r.x) ** 2 + (o - r.z) ** 2;
        s < a && ((a = s), (i = e));
      }
      let f = Math.hypot(Math.sqrt(a), r.y - (P + 1.5)),
        p = t.head - t.dir * l.length,
        m = Math.max(Math.min(t.head, p), Math.min(Math.max(t.head, p), i)),
        T = C(m, t.lane, P + 1.5),
        E = Math.hypot(T[0] - r.x, T[1] - r.y, T[2] - r.z),
        D = w(m),
        O = F(t.head),
        k = [O.tx * t.dir, 0, O.tz * t.dir];
      if (g) {
        if (
          ((!n.roar || !n.roar.alive?.()) &&
            (n.roar =
              E < 1300 ? g.play(`train_roar`, { pos: T, volume: y(E) }) : null),
          n.roar)
        ) {
          let i = F(m),
            a = r.x - T[0],
            o = r.z - T[2],
            s = Math.hypot(a, o) || 1,
            c = (i.tx * t.dir * u * a + i.tz * t.dir * u * o) / s,
            l = Math.max(0.82, Math.min(1.18, 343 / (343 - c)));
          ((n.dop += (l - n.dop) * Math.min(1, e * 10)),
            n.roar.setPosition?.(T),
            n.roar.setVolume?.(y(E)),
            n.roar.setParam?.(`near`, Math.min(1, 50 / (40 + E))),
            n.roar.setParam?.(`dop`, n.dop),
            n.roar.setParam?.(`curve`, D));
        }
        let a = t.dir > 0 ? 0 : c;
        !n.horned &&
          n.prevHead != null &&
          (n.prevHead - a) * (t.head - a) <= 0 &&
          ((n.horned = !0),
          g.play(`train_horn`, {
            pos: C(t.head, t.lane, P + 3),
            size: 2,
            volume: 1.2,
          }));
        let s = (i - t.head) * t.dir;
        !n.sang &&
          f < 60 &&
          s > 150 &&
          s < 290 &&
          ((n.sang = !0),
          g.play(`train_rails`, {
            pos: C(i, t.lane, P),
            duration: s / u,
            volume: 1,
          }));
        let l = (i - p) * t.dir;
        if (
          (f < 45 &&
            (!n.hitN &&
              n.nose != null &&
              n.nose > 0 &&
              s <= 0 &&
              ((n.hitN = !0),
              g.play(`train_whoosh`, {
                pos: C(t.head, t.lane, P + 2),
                volume: 1.3,
              }),
              (x = Math.max(x, Math.max(0, 1 - f / 40)))),
            !n.hitT &&
              n.tail != null &&
              n.tail > 0 &&
              l <= 0 &&
              (n.hitT = !0) &&
              g.play(`train_whoosh`, {
                pos: C(p, t.lane, P + 2),
                size: 0.5,
                volume: 1,
              })),
          (n.nose = s),
          (n.tail = l),
          o && !n.warned && Math.abs(o.pos[1] - P) < 1.5)
        )
          for (let e = 25; e <= 260 && !n.warned; e += 5) {
            let [r, , i] = C(t.head + t.dir * e, t.lane);
            Math.hypot(o.pos[0] - r, o.pos[2] - i) < 2.2 &&
              ((n.warned = !0),
              g.play(`train_horn`, {
                pos: C(t.head, t.lane, P + 2.5),
                volume: 1.2,
              }));
          }
      }
      if (
        ((d = Math.max(d, b(Math.hypot(T[0] - r.x, T[2] - r.z), r.y))),
        _ && E < 220)
      ) {
        for (n.spark += e * (4 + 26 * D); n.spark >= 1;) {
          --n.spark;
          let e = (S() * l.cars) | 0,
            r =
              t.head -
              t.dir * (l.carLen / 2 + e * (l.carLen + l.gap)) +
              (S() < 0.5 ? 1 : -1) * l.bogie;
          _.spawn(
            `trainSparks`,
            C(r, t.lane + (S() < 0.5 ? -0.72 : 0.72), P + 0.08),
            k,
            { count: D > 0.3 ? 14 : 7 },
          );
        }
        if (((n.arc += e), n.arc > 0.35 && S() < e * 1.4)) {
          n.arc = 0;
          let e = 1 + ((S() * (l.cars - 2)) | 0),
            r = C(
              t.head - t.dir * (l.carLen / 2 + e * (l.carLen + l.gap)),
              t.lane,
              P + 5.3,
            );
          (_.spawn(`arcFlash`, r, [0, -1, 0], { scale: 0.8 + S() * 0.8 }),
            g?.play(`train_arc`, { pos: r, volume: 1 }));
        }
        if (E < 40 && r.y < P - 2.6)
          for (n.grit = (n.grit ?? 0) + e * 22 * (1 - E / 40); n.grit >= 1;) {
            --n.grit;
            let e = C(m + (S() - 0.5) * 30, (S() - 0.5) * 9, P - 2.5);
            _.spawn(`deckGrit`, e, [0, -1, 0], { count: 3, chips: 2 });
          }
        if (E < 32)
          for (n.gust += e * 14 * (1 - E / 32); n.gust >= 1;) {
            --n.gust;
            let e = m + (S() - 0.5) * 24,
              i = (S() < 0.5 ? -1 : 1) * (l.halfW + 0.8 + S() * 2.5);
            if (
              (_.spawn(`trainGust`, C(e, t.lane + i, P - 0.3), k, {
                speed: 14,
                count: 5,
                flakes: 2,
              }),
              r.y < P - 3)
            ) {
              let n = C(e, t.lane + i * 2.5, 0);
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
      n.prevHead = t.head;
    }
    ((x = Math.max(0, x - e * 1.6)),
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
function xt(e, t, n) {
  e.updateMatrixWorld(!0);
  let r = e.matrixWorld.clone().invert(),
    i = new Map(),
    o = [];
  e.traverse((e) => {
    if (!e.isMesh || t.has(e)) return;
    let n = (
      e.geometry.index ? e.geometry.toNonIndexed() : e.geometry.clone()
    ).applyMatrix4(new a().multiplyMatrices(r, e.matrixWorld));
    i.has(e.material) ||
      i.set(e.material, { geos: [], cast: !1, depth: e.customDepthMaterial });
    let s = i.get(e.material);
    (s.geos.push(n), (s.cast ||= e.castShadow), o.push(e));
  });
  for (let e of o) e.removeFromParent();
  {
    let e = [...i.values()].flatMap((e) => e.geos.map((t, n) => [e, n])),
      t = se(e.map(([e, t]) => e.geos[t]));
    e.forEach(([e, n], r) => {
      t.geos[r] !== e.geos[n] && (e.geos[n].dispose(), (e.geos[n] = t.geos[r]));
    });
  }
  for (let [t, r] of i) {
    let i = Object.keys(r.geos[0].attributes).filter((e) =>
      r.geos.every((t) => t.attributes[e]),
    );
    for (let e of r.geos)
      for (let t of Object.keys(e.attributes))
        i.includes(t) || e.deleteAttribute(t);
    let a = new u(T(r.geos), t);
    ((a.castShadow = r.cast && n(t)),
      (a.receiveShadow = !0),
      r.depth && (a.customDepthMaterial = r.depth),
      e.add(a));
  }
  if (!b()) {
    let t = S();
    ae(
      e.children.filter((e) => e.isMesh),
      t ? { layerSize: t.tex, bump: !1 } : void 0,
    );
  }
  for (let n of e.children) n.isMesh && !t.has(n) && oe(n.geometry);
}
