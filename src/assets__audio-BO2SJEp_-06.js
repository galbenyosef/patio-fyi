// assets__audio-BO2SJEp_ 06 — math
// Lines 1426-1995 of readable/assets__audio-BO2SJEp_.pretty.js (statement-aligned).
function je(t, n, r, o, s) {
  let d = t.scene,
    m = t.rng.fork(`audio-showcase`),
    g = () => m.next(),
    y = new w();
  ((y.name = `audioShowcase`), d.add(y));
  let S = [],
    C = (e) => (S.push(e), e);
  (t.debugGround(200), t.setCameraFocus([0, 0.8, 0]));
  {
    let e = new h(1400, 48);
    (e.rotateX(-Math.PI / 2), J(e, 6189136, 0.15));
    let t = new f(C(ke(e)), C(q(16777215, { vertexColors: !0 })));
    ((t.position.y = -0.3), (t.receiveShadow = !0), y.add(t));
  }
  let T = d.fog;
  d.fog = new v(8890568, 180, 1500);
  let O = Ne(t, d, C);
  {
    let e = [];
    ne.forEach((t, n) => {
      let r = (n / 6) * Math.PI * 2,
        i = ((n + 1) / 6) * Math.PI * 2,
        a = new E(De - Oe / 2, 7.1000000000000005, 10, 1, r, i - r);
      (a.rotateX(-Math.PI / 2), e.push(J(a, Ee[t], 0.35)));
    });
    let t = C(Ae(e)),
      n = new f(t, C(q(16777215, { vertexColors: !0 })));
    ((n.position.y = 0.035), (n.receiveShadow = !0), y.add(n));
    let r = new u(De - Oe / 2 - 0.08, 0.08, 4, 36);
    r.rotateX(Math.PI / 2);
    let i = new u(7.180000000000001, 0.08, 4, 36);
    i.rotateX(Math.PI / 2);
    let a = C(Ae([J(r, 10130564), J(i, 10130564)])),
      o = new f(a, C(q(16777215, { vertexColors: !0 })));
    ((o.position.y = 0.08), (o.castShadow = !0), y.add(o));
  }
  let ee = [
      {
        key: `gun`,
        name: `gunshots · near`,
        pos: [11, 0, -3],
        color: K.gun,
        r: 0.8,
        ped: 1,
        lab: 1.6,
      },
      {
        key: `gunfar`,
        name: `gunshots · far 120 m`,
        pos: [-42, 0, -112],
        color: K.gunfar,
        r: 1.8,
        ped: 5.5,
        lab: 1.2,
      },
      {
        key: `explosion`,
        name: `explosions · 4 s`,
        pos: [-13, 0, -9],
        color: K.explosion,
        r: 0.95,
        ped: 1,
        lab: 2.4,
      },
      {
        key: `impact`,
        name: `impacts · whizz · reload`,
        pos: [14, 0, 12],
        color: K.impact,
        r: 0.8,
        ped: 1,
        lab: 0.9,
      },
      {
        key: `ui`,
        name: `ui · hit confirm · kill`,
        pos: [-10, 0, 9],
        color: K.ui,
        r: 0.8,
        ped: 1,
        lab: 1.3,
      },
    ],
    j = new Map(),
    te = [];
  {
    let e = [],
      t = C(new b(1, 1));
    for (let n of ee) {
      let r = new c(0.42, 0.55, n.ped, 8, 1);
      (r.translate(n.pos[0], n.ped / 2, n.pos[2]), e.push(J(r, 3882822, 0.3)));
      let i = new c(0.62, 0.42, 0.14, 8, 1);
      (i.translate(n.pos[0], n.ped + 0.07, n.pos[2]),
        e.push(J(i, 5264733, 0.2)));
      let a = C(
          q(n.color, {
            emissive: new p(n.color),
            emissiveIntensity: 0.25,
            roughness: 0.5,
          }),
        ),
        o = new f(t, a);
      (o.scale.setScalar(n.r),
        o.position.set(n.pos[0], n.ped + 0.14 + n.r, n.pos[2]),
        (o.castShadow = !0),
        y.add(o));
      let s = new D(n.color, 0, 9 + n.r * 4, 2);
      (s.position.set(n.pos[0], n.ped + 0.14 + n.r, n.pos[2]),
        y.add(s),
        j.set(n.key, { ...n, mesh: o, mat: a, flash: 0, baseR: n.r, pool: s }),
        te.push(
          Me(
            n.name,
            n.color,
            [n.pos[0], n.ped + 0.14 + n.r * 2 + n.lab, n.pos[2]],
            C,
            y,
          ),
        ));
    }
    let n = C(Ae(e)),
      r = new f(n, C(q(16777215, { vertexColors: !0 })));
    ((r.castShadow = !0), (r.receiveShadow = !0), y.add(r));
  }
  let M = new w();
  {
    let e = C(q(6056767, { roughness: 0.9 })),
      t = new f(C(new i(0.44, 0.62, 0.26)), e);
    ((t.position.y = 1.12), (t.castShadow = !0));
    let n = new f(C(new i(0.36, 0.2, 0.24)), C(q(4869946)));
    n.position.y = 0.78;
    let r = C(new i(0.16, 0.7, 0.18));
    r.translate(0, -0.35, 0);
    let a = new f(r, C(q(5199427)));
    (a.position.set(-0.11, 0.72, 0), (a.castShadow = !0));
    let o = new f(r, a.material);
    (o.position.set(0.11, 0.72, 0), (o.castShadow = !0));
    let s = C(new i(0.12, 0.56, 0.14));
    s.translate(0, -0.26, 0);
    let c = new f(s, e);
    c.position.set(-0.3, 1.38, 0);
    let l = new f(s, e);
    l.position.set(0.3, 1.38, 0);
    let u = C(
        q(K.foot, {
          emissive: new p(K.foot),
          emissiveIntensity: 0.25,
          roughness: 0.5,
        }),
      ),
      d = new f(C(new b(0.24, 1)), u);
    ((d.position.y = 1.67),
      (d.castShadow = !0),
      M.add(t, n, a, o, c, l, d),
      (M.userData = {
        legL: a,
        legR: o,
        armL: c,
        armR: l,
        head: d,
        headMat: u,
      }),
      y.add(M),
      j.set(`foot`, {
        key: `foot`,
        name: `footsteps (6 surfaces)`,
        color: K.foot,
        mesh: d,
        mat: u,
        flash: 0,
        baseR: 1,
        pos: [De, 0, 0],
      }));
    let m = Me(`footsteps · 6 surfaces`, K.foot, [0, 2.45, 0], C, y);
    ((m.follow = M), te.push(m));
  }
  {
    let e = new c(1.1, 1.3, 0.12, 12, 1);
    J(e, 9080698, 0.2);
    let t = [e],
      n = [...ee.map((e) => e.pos), [0, 0, 0]],
      r = (e, t, r) => n.every((n) => Math.hypot(n[0] - e, n[2] - t) > r),
      i = (e, n, r, i) => {
        let o = new c(0.16, 0.24, r * 0.35, 6);
        (o.translate(e, r * 0.175, n), t.push(J(o, 5916212, 0.3)));
        let s = new a(1.3 + g() * 0.6, r * 0.5, 7);
        s.translate(e, r * 0.35 + r * 0.25, n);
        let l = new a(0.9 + g() * 0.4, r * 0.4, 7);
        l.translate(e, r * 0.35 + r * 0.5 + r * 0.1, n);
        let u = [4160058, 4885060, 3502138][i % 3];
        t.push(J(s, u, 0.5), J(l, u, 0.5));
      },
      o = (e, n, r, i) => {
        let a = new b(r, 0);
        (a.scale(1, 0.65 + g() * 0.3, 0.8 + g() * 0.4),
          a.rotateY(g() * 6.28),
          a.translate(e, r * 0.35, n),
          t.push(J(a, [7301728, 8091243, 6249298][i % 3], 0.5)));
      },
      s = 0,
      l = 0;
    for (; s < 14 && l++ < 200;) {
      let e = g() * Math.PI * 2,
        t = 13 + g() * 34,
        a = Math.cos(e) * t,
        c = Math.sin(e) * t;
      r(a, c, 4) &&
        (g() < 0.55 ? o(a, c, 0.7 + g() * 1.6, s) : i(a, c, 3.5 + g() * 3, s),
        n.push([a, 0, c]),
        s++);
    }
    for (l = 0; s < 62 && l++ < 600;) {
      let e = g() * Math.PI * 2,
        t = 50 + g() ** 0.7 * 140,
        a = Math.cos(e) * t,
        c = Math.sin(e) * t;
      r(a, c, 6) &&
        (g() < 0.3 ? o(a, c, 1 + g() * 2.2, s) : i(a, c, 4 + g() * 4.5, s),
        n.push([a, 0, c]),
        s++);
    }
    let u = C(Ae(t)),
      d = new f(u, C(q(16777215, { vertexColors: !0 })));
    ((d.castShadow = !0), (d.receiveShadow = !0), y.add(d));
    let p = [];
    for (let e = 0; e < 26; e++) {
      let t = (e / 26) * Math.PI * 2 + (g() - 0.5) * 0.2,
        n = 300 + g() * 320,
        r = 70 + g() * 120,
        i = 14 + g() * 34,
        a = new b(1, 1);
      (a.scale(r, i, r * (0.7 + g() * 0.5)),
        a.rotateY(g() * 6.28),
        a.translate(Math.cos(t) * n, -i * 0.25, Math.sin(t) * n),
        p.push(J(a, [5597258, 5202246, 5991502][e % 3], 0.6)));
    }
    let m = new f(C(Ae(p)), C(q(16777215, { vertexColors: !0, roughness: 1 })));
    ((m.receiveShadow = !1), y.add(m));
  }
  let N = C(new E(0.82, 1, 28));
  N.rotateX(-Math.PI / 2);
  let P = C(
      new A({
        color: 16777215,
        transparent: !0,
        opacity: 0.9,
        blending: 2,
        depthWrite: !1,
        side: 2,
      }),
    ),
    F = new x(N, P, 40);
  (F.instanceMatrix.setUsage(e), (F.frustumCulled = !1));
  let I = Array.from({ length: 40 }, () => ({
      life: 0,
      max: 1,
      pos: [0, 0, 0],
      color: new p(),
      size: 1,
    })),
    L = new l().makeScale(0, 0, 0);
  for (let e = 0; e < 40; e++)
    (F.setMatrixAt(e, L), F.setColorAt(e, new p(0, 0, 0)));
  y.add(F);
  let z = 0,
    B = (e, t, n = 1, r = 1) => {
      let i = I[z];
      ((z = (z + 1) % 40),
        (i.life = r),
        (i.max = r),
        (i.pos = [e[0], 0.06, e[2]]),
        i.color.set(t),
        (i.size = n));
    },
    re = C(
      q(16747066, {
        emissive: new p(16734746),
        emissiveIntensity: 1.2,
        transparent: !0,
        opacity: 0.7,
        depthWrite: !1,
      }),
    ),
    V = new f(C(new b(1, 1)), re);
  ((V.visible = !1), y.add(V));
  let H = 0,
    ie = new D(16752720, 0, 40, 2);
  (ie.position.set(-13, 2.5, -9), y.add(ie));
  let ae = new D(16760944, 0, 14, 2);
  (ae.position.set(11, 2.2, -3), y.add(ae));
  let oe = Pe(t, r, o),
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
    let t = se;
    t.t += e;
    let i = t.t,
      a = t.near;
    if (i >= a.next) {
      if (a.burstLeft > 0) {
        (n.play(a.weapon, { pos: G(de), volume: 0.9 }),
          W(`gun`),
          B(de, K.gun, 3.2, 0.7),
          (ae.intensity = 30),
          a.burstLeft--,
          (a.next = i + ue[a.weapon]));
        let e = g();
        if (e < 0.55) {
          let e = he[Math.floor(g() * he.length)];
          _e(60 + g() * 60, () => {
            (n.play(`impact_` + e, { pos: G(pe, 1) }),
              W(`impact`),
              B(pe, K.impact, 1.6, 0.5));
          });
        } else if (e < 0.72) {
          let e = r.listenerPosition([0, 0, 0]);
          _e(30, () => {
            (n.play(`whizz`, {
              pos: [e[0] + (g() - 0.5) * 3, e[1], e[2] + (g() - 0.5) * 3],
            }),
              W(`impact`));
          });
        }
        (g() < 0.35 &&
          _e(120, () => {
            (n.play(`hit_confirm`), W(`ui`), B(me, K.ui, 1.2, 0.4));
          }),
          a.burstLeft === 0 &&
            (a.setsLeft--,
            a.setsLeft <= 0
              ? ((a.next = i + 0.5), (a.reloading = 1))
              : (a.next = i + 0.9 + g() * 2.2)));
      } else
        a.reloading
          ? (n.play(a.weapon === `gun_pistol` ? `reload_pistol` : `reload`, {
              pos: G(de, 1.3),
            }),
            W(`impact`),
            B(de, K.impact, 1.4, 0.8),
            (a.reloading = 0),
            (a.setsLeft = 2 + Math.floor(g() * 3)),
            (a.weapon = ce[Math.floor(g() * ce.length)]),
            (a.next = i + 2 + g() * 0.8))
          : ((a.burstLeft =
              a.weapon === `gun_pistol` || a.weapon === `gun_shotgun`
                ? 1 + Math.floor(g() * 3)
                : 3 + Math.floor(g() * 5)),
            (a.next = i));
    }
    if (i >= t.far.next) {
      let e = le[Math.floor(g() * le.length)],
        r = e === `gun_lmg` ? 4 + Math.floor(g() * 4) : 1;
      for (let t = 0; t < r; t++)
        _e(t * 95, () => {
          (n.play(e, { pos: G(fe, 7) }), W(`gunfar`), B(fe, K.gunfar, 6, 1.2));
        });
      t.far.next = i + (e === `gun_lmg` ? 4.5 : 2.2) + g() * 2.5;
    }
    if (i >= t.expl.next) {
      let e = t.expl.n % 3 == 2 ? `explosion_large` : `explosion`;
      (n.play(e, { pos: G(U, 1.5) }),
        W(`explosion`),
        B(U, K.explosion, e === `explosion_large` ? 9 : 6.5, 1.4),
        (H = 1),
        (V.visible = !0),
        V.position.set(U[0], 2, U[2]),
        (ie.intensity = 60),
        t.expl.n++,
        (t.expl.next += 4));
    }
    (i >= t.collapse.next &&
      (n.play(`collapse`, { pos: G(U, 1) }),
      W(`explosion`),
      B(U, K.explosion, 5, 2.5),
      (t.collapse.next = i + 13 + g() * 4)),
      i >= t.ui.tick && (n.play(`ui_tick`), W(`ui`), (t.ui.tick = i + 1.5)),
      i >= t.ui.msg &&
        (n.play(g() < 0.3 ? `ui_confirm` : `ui_message`),
        W(`ui`),
        B(me, K.ui, 1.6, 0.6),
        (t.ui.msg = i + 5 + g() * 4)),
      i >= t.ui.kill &&
        (n.play(`kill_headshot`),
        W(`ui`),
        B(me, K.ui, 2.4, 1),
        (t.ui.kill = i + 9 + g() * 5)));
    let o = t.walker;
    o.ang += (1.4 / De) * e;
    let s = Math.cos(o.ang) * De,
      c = Math.sin(o.ang) * De;
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
        t = ne[e];
      (n.play(`footstep`, { pos: [s, 0.1, c], surface: t, volume: 0.9 }),
        W(`foot`),
        B([s, 0, c], K.foot, 0.9, 0.5),
        (o.lastSector = e));
    }
  }
  let be = t.world.time.tod ?? s?.tod ?? 14;
  (o.start(), o.setTod(be, !0), O.apply(be));
  try {
    t.renderer.domElement.click();
  } catch {}
  r.resume();
  let xe = !1,
    Se = 0,
    Ce = !1,
    we = new l(),
    Te = new _(),
    je = new k(),
    Fe = new k(),
    Ie = new p(),
    Le = new k();
  function Re(e) {
    ((e = Math.min(e, 0.05)), (Se += e), ye(e));
    let n = 0.25 + 0.55 * (1 - O.day);
    for (let t of j.values()) {
      (t.flash > 0 && (t.flash = Math.max(0, t.flash - e * 4)),
        (t.mat.emissiveIntensity = n + t.flash * 2.2),
        t.pool && (t.pool.intensity = (1 - O.day) * (5 + t.flash * 14)));
      let r = t.baseR * (1 + t.flash * 0.25);
      t.key !== `foot` && t.mesh.scale.setScalar(r);
    }
    t.camera.getWorldPosition(Le);
    let i = Math.tan((t.camera.fov * Math.PI) / 360);
    for (let e of te) {
      e.follow &&
        e.sprite.position.set(
          e.follow.position.x,
          e.base[1],
          e.follow.position.z,
        );
      let t = Le.distanceTo(e.sprite.position),
        n = R(0.072 * t * i, 0.5, 4.5);
      (e.sprite.scale.set(n * e.aspect, n, 1), (e.sprite.visible = t < 170));
    }
    let a = !1;
    for (let t = 0; t < 40; t++) {
      let n = I[t];
      if (n.life <= 0) continue;
      ((n.life -= e), (a = !0));
      let r = 1 - Math.max(0, n.life) / n.max,
        i = 0.3 + n.size * (0.2 + r * 1);
      (Fe.set(n.pos[0], n.pos[1], n.pos[2]),
        je.set(i, 1, i),
        F.setMatrixAt(t, n.life > 0 ? we.compose(Fe, Te, je) : L),
        Ie.copy(n.color).multiplyScalar((1 - r) ** 1.5 * 0.8),
        F.setColorAt(t, Ie));
    }
    if (
      (a &&
        ((F.instanceMatrix.needsUpdate = !0),
        F.instanceColor && (F.instanceColor.needsUpdate = !0)),
      H > 0)
    ) {
      H -= e * 1.6;
      let t = 1 - Math.max(0, H);
      (V.scale.setScalar(0.8 + t * 6.5),
        (re.opacity = Math.max(0, 0.75 * (1 - t) * (1 - t))),
        (re.emissiveIntensity = 1.4 * (1 - t)),
        H <= 0 && (V.visible = !1));
    }
    ((ie.intensity = Math.max(0, ie.intensity - e * 220)),
      (ae.intensity = Math.max(0, ae.intensity - e * 600)),
      !xe &&
        Se > 0.9 &&
        ((xe = !0),
        r.health !== `running` &&
          r.renderOffline().then((e) => {
            e &&
              !Ce &&
              ((Ce = !0),
              t.log(
                `offline-rendered`,
                `${e.length} samples @ ${r.offlineRate} Hz (context ${r.health})`,
              ));
          })),
      oe.draw(e));
  }
  function ze(e) {
    O.apply(e);
  }
  function Be() {
    ve = !0;
    for (let e of ge) clearTimeout(e);
    (ge.clear(), oe.dispose(), O.dispose(), (d.fog = T), d.remove(y));
    for (let e of S)
      try {
        e.dispose();
      } catch {}
  }
  return {
    update: Re,
    dispose: Be,
    setTod: ze,
    emitters: j,
    pulse: B,
    seq: se,
  };
}
