// assets__audio-D3RxdFdK 08 — math
// Lines 1753-2322 of readable/assets__audio-D3RxdFdK.pretty.js (statement-aligned).
function Ue(e, t, n, o, l) {
  let u = e.scene,
    m = e.rng.fork(`audio-showcase`),
    v = () => m.next(),
    y = new g();
  ((y.name = `audioShowcase`), u.add(y));
  let b = [],
    S = (e) => (b.push(e), e);
  (e.debugGround(200), e.setCameraFocus([0, 0.8, 0]));
  {
    let e = new s(1400, 48);
    (e.rotateX(-Math.PI / 2), Y(e, 6189136, 0.15));
    let t = new r(S(Ve(e)), S(J(16777215, { vertexColors: !0 })));
    ((t.position.y = -0.3), (t.receiveShadow = !0), y.add(t));
  }
  let D = u.fog;
  u.fog = new T(8890568, 180, 1500);
  let k = Ge(e, u, S);
  {
    let e = [];
    ie.forEach((t, n) => {
      let r = (n / 6) * Math.PI * 2,
        i = ((n + 1) / 6) * Math.PI * 2,
        a = new _(ze - Be / 2, 7.1000000000000005, 10, 1, r, i - r);
      (a.rotateX(-Math.PI / 2), e.push(Y(a, Re[t], 0.35)));
    });
    let t = S(He(e)),
      n = new r(t, S(J(16777215, { vertexColors: !0 })));
    ((n.position.y = 0.035), (n.receiveShadow = !0), y.add(n));
    let i = new a(ze - Be / 2 - 0.08, 0.08, 4, 36);
    i.rotateX(Math.PI / 2);
    let o = new a(7.180000000000001, 0.08, 4, 36);
    o.rotateX(Math.PI / 2);
    let s = S(He([Y(i, 10130564), Y(o, 10130564)])),
      c = new r(s, S(J(16777215, { vertexColors: !0 })));
    ((c.position.y = 0.08), (c.castShadow = !0), y.add(c));
  }
  let ee = [
      {
        key: `gun`,
        name: `gunshots · near`,
        pos: [11, 0, -3],
        color: q.gun,
        r: 0.8,
        ped: 1,
        lab: 1.6,
      },
      {
        key: `gunfar`,
        name: `gunshots · far 120 m`,
        pos: [-42, 0, -112],
        color: q.gunfar,
        r: 1.8,
        ped: 5.5,
        lab: 1.2,
      },
      {
        key: `explosion`,
        name: `explosions · 4 s`,
        pos: [-13, 0, -9],
        color: q.explosion,
        r: 0.95,
        ped: 1,
        lab: 2.4,
      },
      {
        key: `impact`,
        name: `impacts · whizz · reload`,
        pos: [14, 0, 12],
        color: q.impact,
        r: 0.8,
        ped: 1,
        lab: 0.9,
      },
      {
        key: `ui`,
        name: `ui · hit confirm · kill`,
        pos: [-10, 0, 9],
        color: q.ui,
        r: 0.8,
        ped: 1,
        lab: 1.3,
      },
    ],
    j = new Map(),
    te = [];
  {
    let e = [],
      t = S(new x(1, 1));
    for (let n of ee) {
      let i = new C(0.42, 0.55, n.ped, 8, 1);
      (i.translate(n.pos[0], n.ped / 2, n.pos[2]), e.push(Y(i, 3882822, 0.3)));
      let a = new C(0.62, 0.42, 0.14, 8, 1);
      (a.translate(n.pos[0], n.ped + 0.07, n.pos[2]),
        e.push(Y(a, 5264733, 0.2)));
      let o = S(
          J(n.color, {
            emissive: new p(n.color),
            emissiveIntensity: 0.25,
            roughness: 0.5,
          }),
        ),
        s = new r(t, o);
      (s.scale.setScalar(n.r),
        s.position.set(n.pos[0], n.ped + 0.14 + n.r, n.pos[2]),
        (s.castShadow = !0),
        y.add(s));
      let c = new w(n.color, 0, 9 + n.r * 4, 2);
      (c.position.set(n.pos[0], n.ped + 0.14 + n.r, n.pos[2]),
        y.add(c),
        j.set(n.key, { ...n, mesh: s, mat: o, flash: 0, baseR: n.r, pool: c }),
        te.push(
          We(
            n.name,
            n.color,
            [n.pos[0], n.ped + 0.14 + n.r * 2 + n.lab, n.pos[2]],
            S,
            y,
          ),
        ));
    }
    let n = S(He(e)),
      i = new r(n, S(J(16777215, { vertexColors: !0 })));
    ((i.castShadow = !0), (i.receiveShadow = !0), y.add(i));
  }
  let M = new g();
  {
    let e = S(J(6056767, { roughness: 0.9 })),
      t = new r(S(new i(0.44, 0.62, 0.26)), e);
    ((t.position.y = 1.12), (t.castShadow = !0));
    let n = new r(S(new i(0.36, 0.2, 0.24)), S(J(4869946)));
    n.position.y = 0.78;
    let a = S(new i(0.16, 0.7, 0.18));
    a.translate(0, -0.35, 0);
    let o = new r(a, S(J(5199427)));
    (o.position.set(-0.11, 0.72, 0), (o.castShadow = !0));
    let s = new r(a, o.material);
    (s.position.set(0.11, 0.72, 0), (s.castShadow = !0));
    let c = S(new i(0.12, 0.56, 0.14));
    c.translate(0, -0.26, 0);
    let l = new r(c, e);
    l.position.set(-0.3, 1.38, 0);
    let u = new r(c, e);
    u.position.set(0.3, 1.38, 0);
    let d = S(
        J(q.foot, {
          emissive: new p(q.foot),
          emissiveIntensity: 0.25,
          roughness: 0.5,
        }),
      ),
      f = new r(S(new x(0.24, 1)), d);
    ((f.position.y = 1.67),
      (f.castShadow = !0),
      M.add(t, n, o, s, l, u, f),
      (M.userData = {
        legL: o,
        legR: s,
        armL: l,
        armR: u,
        head: f,
        headMat: d,
      }),
      y.add(M),
      j.set(`foot`, {
        key: `foot`,
        name: `footsteps (6 surfaces)`,
        color: q.foot,
        mesh: f,
        mat: d,
        flash: 0,
        baseR: 1,
        pos: [ze, 0, 0],
      }));
    let m = We(`footsteps · 6 surfaces`, q.foot, [0, 2.45, 0], S, y);
    ((m.follow = M), te.push(m));
  }
  {
    let e = new C(1.1, 1.3, 0.12, 12, 1);
    Y(e, 9080698, 0.2);
    let t = [e],
      n = [...ee.map((e) => e.pos), [0, 0, 0]],
      i = (e, t, r) => n.every((n) => Math.hypot(n[0] - e, n[2] - t) > r),
      a = (e, n, r, i) => {
        let a = new C(0.16, 0.24, r * 0.35, 6);
        (a.translate(e, r * 0.175, n), t.push(Y(a, 5916212, 0.3)));
        let o = new d(1.3 + v() * 0.6, r * 0.5, 7);
        o.translate(e, r * 0.35 + r * 0.25, n);
        let s = new d(0.9 + v() * 0.4, r * 0.4, 7);
        s.translate(e, r * 0.35 + r * 0.5 + r * 0.1, n);
        let c = [4160058, 4885060, 3502138][i % 3];
        t.push(Y(o, c, 0.5), Y(s, c, 0.5));
      },
      o = (e, n, r, i) => {
        let a = new x(r, 0);
        (a.scale(1, 0.65 + v() * 0.3, 0.8 + v() * 0.4),
          a.rotateY(v() * 6.28),
          a.translate(e, r * 0.35, n),
          t.push(Y(a, [7301728, 8091243, 6249298][i % 3], 0.5)));
      },
      s = 0,
      c = 0;
    for (; s < 14 && c++ < 200;) {
      let e = v() * Math.PI * 2,
        t = 13 + v() * 34,
        r = Math.cos(e) * t,
        c = Math.sin(e) * t;
      i(r, c, 4) &&
        (v() < 0.55 ? o(r, c, 0.7 + v() * 1.6, s) : a(r, c, 3.5 + v() * 3, s),
        n.push([r, 0, c]),
        s++);
    }
    for (c = 0; s < 62 && c++ < 600;) {
      let e = v() * Math.PI * 2,
        t = 50 + v() ** 0.7 * 140,
        r = Math.cos(e) * t,
        c = Math.sin(e) * t;
      i(r, c, 6) &&
        (v() < 0.3 ? o(r, c, 1 + v() * 2.2, s) : a(r, c, 4 + v() * 4.5, s),
        n.push([r, 0, c]),
        s++);
    }
    let l = S(He(t)),
      u = new r(l, S(J(16777215, { vertexColors: !0 })));
    ((u.castShadow = !0), (u.receiveShadow = !0), y.add(u));
    let f = [];
    for (let e = 0; e < 26; e++) {
      let t = (e / 26) * Math.PI * 2 + (v() - 0.5) * 0.2,
        n = 300 + v() * 320,
        r = 70 + v() * 120,
        i = 14 + v() * 34,
        a = new x(1, 1);
      (a.scale(r, i, r * (0.7 + v() * 0.5)),
        a.rotateY(v() * 6.28),
        a.translate(Math.cos(t) * n, -i * 0.25, Math.sin(t) * n),
        f.push(Y(a, [5597258, 5202246, 5991502][e % 3], 0.6)));
    }
    let p = new r(S(He(f)), S(J(16777215, { vertexColors: !0, roughness: 1 })));
    ((p.receiveShadow = !1), y.add(p));
  }
  let N = S(new _(0.82, 1, 28));
  N.rotateX(-Math.PI / 2);
  let P = S(
      new f({
        color: 16777215,
        transparent: !0,
        opacity: 0.9,
        blending: 2,
        depthWrite: !1,
        side: 2,
      }),
    ),
    F = new O(N, P, 40);
  (F.instanceMatrix.setUsage(E), (F.frustumCulled = !1));
  let ne = Array.from({ length: 40 }, () => ({
      life: 0,
      max: 1,
      pos: [0, 0, 0],
      color: new p(),
      size: 1,
    })),
    re = new A().makeScale(0, 0, 0);
  for (let e = 0; e < 40; e++)
    (F.setMatrixAt(e, re), F.setColorAt(e, new p(0, 0, 0)));
  y.add(F);
  let I = 0,
    L = (e, t, n = 1, r = 1) => {
      let i = ne[I];
      ((I = (I + 1) % 40),
        (i.life = r),
        (i.max = r),
        (i.pos = [e[0], 0.06, e[2]]),
        i.color.set(t),
        (i.size = n));
    },
    R = S(
      J(16747066, {
        emissive: new p(16734746),
        emissiveIntensity: 1.2,
        transparent: !0,
        opacity: 0.7,
        depthWrite: !1,
      }),
    ),
    B = new r(S(new x(1, 1)), R);
  ((B.visible = !1), y.add(B));
  let V = 0,
    ae = new w(16752720, 0, 40, 2);
  (ae.position.set(-13, 2.5, -9), y.add(ae));
  let H = new w(16760944, 0, 14, 2);
  (H.position.set(11, 2.2, -3), y.add(H));
  let oe = Ke(e, n, o),
    se = {
      t: 0,
      started: !1,
      near: {
        next: 0.05,
        burstLeft: 5,
        gap: 0,
        weapon: `gun_ar`,
        setsLeft: 2,
        reloading: 0,
      },
      far: { next: 0.12 },
      expl: { next: 0.03, n: 0 },
      ui: { tick: 0.02, msg: 1.4, kill: 0.6 },
      collapse: { next: 12.5 },
      walker: { ang: 0.3, stepPhase: 0.97, lastSector: -1 },
    },
    ce = [
      `gun_ar`,
      `gun_carbine`,
      `gun_smg`,
      `gun_pistol`,
      `gun_lmg`,
      `gun_shotgun`,
    ],
    le = [`gun_sniper`, `gun_dmr`, `gun_lmg`],
    ue = {
      gun_ar: 0.085,
      gun_carbine: 0.08,
      gun_smg: 0.065,
      gun_pistol: 0.19,
      gun_lmg: 0.095,
      gun_shotgun: 0.55,
    },
    de = j.get(`gun`).pos,
    fe = j.get(`gunfar`).pos,
    U = j.get(`explosion`).pos,
    pe = j.get(`impact`).pos,
    me = j.get(`ui`).pos,
    he = [`dirt`, `rock`, `metal`, `wood`, `sand`, `grass`, `road`, `water`],
    W = (e) => {
      let t = j.get(e);
      t && (t.flash = 1);
    },
    G = (e, t = 1.6) => [e[0], t, e[2]],
    ge = new Set(),
    _e = (e, t) => {
      let n = setTimeout(() => {
        (ge.delete(n), ve || t());
      }, e);
      ge.add(n);
    },
    ve = !1;
  function ye(e) {
    let r = se;
    r.t += e;
    let i = r.t,
      a = r.near;
    if (i >= a.next) {
      if (a.burstLeft > 0) {
        (t.play(a.weapon, { pos: G(de), volume: 0.9 }),
          W(`gun`),
          L(de, q.gun, 3.2, 0.7),
          (H.intensity = 30),
          a.burstLeft--,
          (a.next = i + ue[a.weapon]));
        let e = v();
        if (e < 0.55) {
          let e = he[Math.floor(v() * he.length)];
          _e(60 + v() * 60, () => {
            (t.play(`impact_` + e, { pos: G(pe, 1) }),
              W(`impact`),
              L(pe, q.impact, 1.6, 0.5));
          });
        } else if (e < 0.72) {
          let e = n.listenerPosition([0, 0, 0]);
          _e(30, () => {
            (t.play(`whizz`, {
              pos: [e[0] + (v() - 0.5) * 3, e[1], e[2] + (v() - 0.5) * 3],
            }),
              W(`impact`));
          });
        }
        (v() < 0.35 &&
          _e(120, () => {
            (t.play(`hit_confirm`), W(`ui`), L(me, q.ui, 1.2, 0.4));
          }),
          a.burstLeft === 0 &&
            (a.setsLeft--,
            a.setsLeft <= 0
              ? ((a.next = i + 0.5), (a.reloading = 1))
              : (a.next = i + 0.9 + v() * 2.2)));
      } else
        a.reloading
          ? (t.play(a.weapon === `gun_pistol` ? `reload_pistol` : `reload`, {
              pos: G(de, 1.3),
            }),
            W(`impact`),
            L(de, q.impact, 1.4, 0.8),
            (a.reloading = 0),
            (a.setsLeft = 2 + Math.floor(v() * 3)),
            (a.weapon = ce[Math.floor(v() * ce.length)]),
            (a.next = i + 2 + v() * 0.8))
          : ((a.burstLeft =
              a.weapon === `gun_pistol` || a.weapon === `gun_shotgun`
                ? 1 + Math.floor(v() * 3)
                : 3 + Math.floor(v() * 5)),
            (a.next = i));
    }
    if (i >= r.far.next) {
      let e = le[Math.floor(v() * le.length)],
        n = e === `gun_lmg` ? 4 + Math.floor(v() * 4) : 1;
      for (let r = 0; r < n; r++)
        _e(r * 95, () => {
          (t.play(e, { pos: G(fe, 7) }), W(`gunfar`), L(fe, q.gunfar, 6, 1.2));
        });
      r.far.next = i + (e === `gun_lmg` ? 4.5 : 2.2) + v() * 2.5;
    }
    if (i >= r.expl.next) {
      let e = r.expl.n % 3 == 2 ? `explosion_large` : `explosion`;
      (t.play(e, { pos: G(U, 1.5) }),
        W(`explosion`),
        L(U, q.explosion, e === `explosion_large` ? 9 : 6.5, 1.4),
        (V = 1),
        (B.visible = !0),
        B.position.set(U[0], 2, U[2]),
        (ae.intensity = 60),
        r.expl.n++,
        (r.expl.next += 4));
    }
    (i >= r.collapse.next &&
      (t.play(`collapse`, { pos: G(U, 1) }),
      W(`explosion`),
      L(U, q.explosion, 5, 2.5),
      (r.collapse.next = i + 13 + v() * 4)),
      i >= r.ui.tick && (t.play(`ui_tick`), W(`ui`), (r.ui.tick = i + 1.5)),
      i >= r.ui.msg &&
        (t.play(v() < 0.3 ? `ui_confirm` : `ui_message`),
        W(`ui`),
        L(me, q.ui, 1.6, 0.6),
        (r.ui.msg = i + 5 + v() * 4)),
      i >= r.ui.kill &&
        (t.play(`kill_headshot`),
        W(`ui`),
        L(me, q.ui, 2.4, 1),
        (r.ui.kill = i + 9 + v() * 5)));
    let o = r.walker;
    o.ang += (1.4 / ze) * e;
    let s = Math.cos(o.ang) * ze,
      c = Math.sin(o.ang) * ze;
    (M.position.set(s, 0, c), (M.rotation.y = -o.ang - Math.PI / 2 + Math.PI));
    let l = o.stepPhase;
    o.stepPhase += e * 2;
    let u = Math.sin(o.stepPhase * Math.PI),
      d = M.userData;
    if (
      ((d.legL.rotation.x = u * 0.55),
      (d.legR.rotation.x = -u * 0.55),
      (d.armL.rotation.x = -u * 0.4),
      (d.armR.rotation.x = u * 0.4),
      (M.position.y = Math.abs(Math.sin(o.stepPhase * Math.PI)) * 0.04),
      Math.floor(l) !== Math.floor(o.stepPhase))
    ) {
      let e =
          Math.floor(
            ((((o.ang % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)) /
              (Math.PI * 2)) *
              6,
          ) % 6,
        n = ie[e];
      (t.play(`footstep`, { pos: [s, 0.1, c], surface: n, volume: 0.9 }),
        W(`foot`),
        L([s, 0, c], q.foot, 0.9, 0.5),
        (o.lastSector = e));
    }
  }
  let be = e.world.time.tod ?? l?.tod ?? 14;
  (o.start(), o.setTod(be, !0), k.apply(be));
  try {
    e.renderer.domElement.click();
  } catch {}
  n.resume();
  let xe = !1,
    K = 0,
    Se = !1,
    Ce = new A(),
    we = new h(),
    Te = new c(),
    Ee = new c(),
    De = new p(),
    Oe = new c();
  function ke(t) {
    ((t = Math.min(t, 0.05)), (K += t), ye(t));
    let r = 0.25 + 0.55 * (1 - k.day);
    for (let e of j.values()) {
      (e.flash > 0 && (e.flash = Math.max(0, e.flash - t * 4)),
        (e.mat.emissiveIntensity = r + e.flash * 2.2),
        e.pool && (e.pool.intensity = (1 - k.day) * (5 + e.flash * 14)));
      let n = e.baseR * (1 + e.flash * 0.25);
      e.key !== `foot` && e.mesh.scale.setScalar(n);
    }
    e.camera.getWorldPosition(Oe);
    let i = Math.tan((e.camera.fov * Math.PI) / 360);
    for (let e of te) {
      e.follow &&
        e.sprite.position.set(
          e.follow.position.x,
          e.base[1],
          e.follow.position.z,
        );
      let t = Oe.distanceTo(e.sprite.position),
        n = z(0.072 * t * i, 0.5, 4.5);
      (e.sprite.scale.set(n * e.aspect, n, 1), (e.sprite.visible = t < 170));
    }
    let a = !1;
    for (let e = 0; e < 40; e++) {
      let n = ne[e];
      if (n.life <= 0) continue;
      ((n.life -= t), (a = !0));
      let r = 1 - Math.max(0, n.life) / n.max,
        i = 0.3 + n.size * (0.2 + r * 1);
      (Ee.set(n.pos[0], n.pos[1], n.pos[2]),
        Te.set(i, 1, i),
        F.setMatrixAt(e, n.life > 0 ? Ce.compose(Ee, we, Te) : re),
        De.copy(n.color).multiplyScalar((1 - r) ** 1.5 * 0.8),
        F.setColorAt(e, De));
    }
    if (
      (a &&
        ((F.instanceMatrix.needsUpdate = !0),
        F.instanceColor && (F.instanceColor.needsUpdate = !0)),
      V > 0)
    ) {
      V -= t * 1.6;
      let e = 1 - Math.max(0, V);
      (B.scale.setScalar(0.8 + e * 6.5),
        (R.opacity = Math.max(0, 0.75 * (1 - e) * (1 - e))),
        (R.emissiveIntensity = 1.4 * (1 - e)),
        V <= 0 && (B.visible = !1));
    }
    ((ae.intensity = Math.max(0, ae.intensity - t * 220)),
      (H.intensity = Math.max(0, H.intensity - t * 600)),
      !xe &&
        K > 0.9 &&
        ((xe = !0),
        n.health !== `running` &&
          n.renderOffline().then((t) => {
            t &&
              !Se &&
              ((Se = !0),
              e.log(
                `offline-rendered`,
                `${t.length} samples @ ${n.offlineRate} Hz (context ${n.health})`,
              ));
          })),
      oe.draw(t));
  }
  function Ae(e) {
    k.apply(e);
  }
  function je() {
    ve = !0;
    for (let e of ge) clearTimeout(e);
    (ge.clear(), oe.dispose(), k.dispose(), (u.fog = D), u.remove(y));
    for (let e of b)
      try {
        e.dispose();
      } catch {}
  }
  return {
    update: ke,
    dispose: je,
    setTod: Ae,
    emitters: j,
    pulse: L,
    seq: se,
  };
}
