// assets__naval-vJ9I-D0A 05 — math
// Lines 947-2442 of readable/assets__naval-vJ9I-D0A.pretty.js (statement-aligned).
function A(e, t, n, { waterLevel: a = 8 } = {}) {
  let o = new y();
  ((o.name = `naval-battle`), t.add(o));
  let u = n.seed >>> 0 || 1,
    m = () => (u = (u * 1664525 + 1013904223) >>> 0) / 4294967296,
    b = (e, t) => e + m() * (t - e),
    x = (e) => e[Math.floor(m() * e.length)],
    E = a,
    oe = { value: 0.5 },
    D = new f({
      vertexColors: !0,
      flatShading: !0,
      roughness: 0.72,
      metalness: 0.18,
      side: 2,
    });
  ((D.onBeforeCompile = (e) => {
    ((e.uniforms.uNavalRelief = oe),
      (e.fragmentShader = e.fragmentShader
        .replace(
          `#include <fog_fragment>`,
          `vec3 navalClear = gl_FragColor.rgb;
#include <fog_fragment>
gl_FragColor.rgb = mix( gl_FragColor.rgb, navalClear, uNavalRelief );`,
        )
        .replace(
          `void main() {`,
          `uniform float uNavalRelief;
void main() {`,
        )));
  }),
    (D.customProgramCacheKey = () => `naval-hull-v2`));
  let O = [];
  for (let [e, t, r, i, a, o, s, c] of n.ships) {
    let [n] = ie[t],
      l = Math.PI * (3 * (a + o) - Math.sqrt((3 * a + o) * (a + 3 * o)));
    O.push({
      id: e,
      cls: t,
      cx: r,
      cz: i,
      rx: a,
      rz: o,
      phase: s,
      side: c,
      lap: l / w[t],
      L: n,
      pos: new S(),
      yaw: 0,
      fires: [],
      gunT: b(1, 5),
      vlsT: b(4, 18),
      wakeT: 0,
      wreck: !1,
      bob: m() * 9,
      th: s,
      spd: 1,
      hp: ne[t],
      dying: !1,
      hidden: !1,
      sinkT: 0,
      enter: 0,
    });
  }
  for (let [e, t, r, i, a, o] of n.wrecks ?? []) {
    let [n] = ie[t],
      s = {
        id: e,
        cls: t,
        side: -1,
        L: n,
        pos: new S(r, 0, i),
        yaw: a,
        list: o,
        wreck: !0,
        bob: m() * 9,
        fires: [],
        secT: b(8, 25),
      };
    for (let e of [0.28, -0.05, -0.3])
      s.fires.push({
        local: [n * e, 9 + 4 * m(), 0],
        t: 0,
        until: 1 / 0,
        scale: 1.2 + 0.4 * m(),
      });
    O.push(s);
  }
  let se = [...new Set(O.map((e) => e.cls))],
    ue = new Map();
  for (let e of se) {
    let t = O.filter((t) => t.cls === e),
      n = new v(ce(e), D, t.length);
    ((n.name = `naval-` + e),
      (n.frustumCulled = !1),
      (n.castShadow = !1),
      (n.receiveShadow = !1),
      t.forEach((e, t) => {
        ((e.mesh = n), (e.index = t));
      }),
      o.add(n),
      ue.set(e, n));
  }
  let k = [],
    A = new v(le(), D, 6);
  ((A.name = `naval-jets`), (A.frustumCulled = !1), o.add(A));
  for (let e = 0; e < 6; e++) k.push({ active: !1, i: e });
  let fe = (n.air ?? []).map(([e, t, n, r, i]) => ({
      side: e,
      alt: t,
      speed: n,
      period: r,
      next: i,
    })),
    j = de(9e3, !1, n.smokeRelief ?? 0.42, n.smokeShade ?? 1),
    M = de(3600, !0, 0.45, n.glowShade ?? 1);
  o.add(j.points, M.points);
  let pe = (n.shoreFires ?? []).map(([e, t, n, r]) => ({
      p: [e, t, n],
      scale: r,
      t: 0,
    })),
    N = new s(),
    P = new h(),
    me = new h(),
    he = new h(),
    ge = new _(),
    _e = new S(1, 1, 1),
    F = new S(),
    ve = new s().makeScale(0, 0, 0),
    ye = new S(0, 1, 0);
  function be(e, t, n) {
    let r, i, a;
    if (e.wreck)
      ((r = e.list + 0.012 * Math.sin(t * 0.4 + e.bob)),
        (i = -0.035),
        (a = 3.2));
    else if (e.hidden) {
      e.mesh.setMatrixAt(e.index, ve);
      return;
    } else {
      (e.dying && ((e.spd = Math.max(0, e.spd - n * 0.06)), (e.sinkT += n)),
        (e.th += ((n * 2 * Math.PI) / e.lap) * e.spd));
      let o = e.th,
        s = Math.cos(o),
        c = Math.sin(o);
      ((e.enter = Math.max(0, e.enter - n / 55)),
        e.pos.set(
          e.cx + e.rx * s + Math.sign(e.cx) * 650 * e.enter * e.enter,
          0,
          e.cz + e.rz * c,
        ));
      let l = -e.rx * c,
        u = e.rz * s;
      if (
        ((e.yaw = Math.atan2(-u, l)),
        (r =
          0.02 * Math.sin(t * 0.7 + e.bob) -
          ((0.02 * (e.rx * e.rz)) /
            (e.rx * e.rx * c * c + e.rz * e.rz * s * s) ** 1.5) *
            e.L *
            0.6 *
            e.spd),
        (i = 0.008 * Math.sin(t * 0.53 + e.bob * 2)),
        (a = 0),
        e.dying)
      ) {
        let t = Math.min(1, e.sinkT / 75),
          n = t * t * (3 - 2 * t);
        if (
          ((r += e.dieList * Math.min(1, e.sinkT / 50)),
          (i += e.diePitch * n),
          (a = re[e.cls] * n),
          e.sinkT > 80)
        ) {
          (Ie(e), e.mesh.setMatrixAt(e.index, ve));
          return;
        }
      }
    }
    ((e.pos.y = E - a + 0.25 * Math.sin(t * 0.9 + e.bob)),
      ge.set(r, e.yaw, i, `YZX`),
      P.setFromEuler(ge),
      (e.q = e.q ?? new h()),
      e.q.copy(P),
      N.compose(e.pos, P, _e),
      e.mesh.setMatrixAt(e.index, N));
  }
  let I = (e, t, n = [0, 0, 0]) => (
      F.set(t[0], t[1], t[2]).applyQuaternion(e.q).add(e.pos),
      (n[0] = F.x),
      (n[1] = F.y),
      (n[2] = F.z),
      n
    ),
    xe = () => e.modules.get(`audio`),
    Se = 0,
    Ce = !1;
  function L(t, n = !1) {
    if (!Ce || (Se <= 0 && !n)) return;
    let r = e.camera?.position;
    if (!r) return;
    let i = Math.hypot(t[0] - r.x, t[1] - r.y, t[2] - r.z);
    --Se;
    try {
      xe()?.play?.(n ? `explosion_large` : `explosion_shell`, {
        pos: [t[0], t[1], t[2]],
        delay: Math.min(6, i / 343),
        volume: (n ? 0.9 : 0.6) * (R ? 2.4 : 1),
        open: R,
      });
    } catch {}
  }
  let R = !!n.openAudio,
    we = 0;
  function Te(t, n, { volume: r = 1, pitch: i = 1, cost: a = 1 } = {}) {
    if (!Ce || !R || we < a) return;
    let o = e.camera?.position;
    if (!o) return;
    we -= a;
    let s = Math.hypot(n[0] - o.x, n[1] - o.y, n[2] - o.z);
    try {
      xe()?.play?.(t, {
        pos: [n[0], n[1], n[2]],
        delay: Math.min(6, s / 343),
        volume: r,
        pitch: i,
        open: !0,
        priority: 3,
      });
    } catch {}
  }
  let Ee = new Map();
  function De(e, t, n, { volume: r = 1, rpm: i = 0.85 } = {}) {
    if (!Ce || !R) {
      Oe(e);
      return;
    }
    let a = Ee.get(e);
    if (a?.alive?.()) {
      a.setPosition([n[0], n[1], n[2]]);
      return;
    }
    let o = null;
    try {
      o = xe()?.play?.(t, {
        pos: [n[0], n[1], n[2]],
        volume: r,
        open: !0,
        priority: 4,
      });
    } catch {}
    o && (o.setRpm?.(i), Ee.set(e, o));
  }
  function Oe(e) {
    let t = Ee.get(e);
    if (t) {
      try {
        t.stop();
      } catch {}
      Ee.delete(e);
    }
  }
  function z(e, t, n = 16773312, r = 0.14) {
    M.spawn({
      p: e,
      life: r,
      s0: t,
      s1: t * 1.4,
      c0: n,
      c1: 16742940,
      a: 1,
      hot: 1,
    });
  }
  function ke(
    e,
    t,
    {
      size: n = 10,
      grow: r = 3,
      life: i = 8,
      c0: a = 4868680,
      c1: o = 9211016,
      rise: s = 3,
      spread: c = 4,
      a: l = 0.8,
      v: u = null,
    } = {},
  ) {
    for (let d = 0; d < t; d++)
      j.spawn({
        p: [e[0] + b(-c, c), e[1] + b(-c, c) * 0.5, e[2] + b(-c, c)],
        v: [
          (u?.[0] ?? 0) + b(-2, 2),
          s * b(0.6, 1.3) + (u?.[1] ?? 0),
          (u?.[2] ?? 0) + b(-2, 2),
        ],
        life: i * b(0.7, 1.3),
        s0: n * b(0.6, 1),
        s1: n * r * b(0.8, 1.2),
        c0: a,
        c1: o,
        a: l,
        drag: 0.35,
        wind: 0.6,
      });
  }
  function B(e, t = 1, n = !0) {
    z(e, 26 * t, 16774872, 0.18);
    for (let n = 0; n < 10; n++)
      M.spawn({
        p: [e[0] + b(-3, 3) * t, e[1] + b(0, 4) * t, e[2] + b(-3, 3) * t],
        v: [b(-8, 8) * t, b(4, 16) * t, b(-8, 8) * t],
        life: b(0.6, 1.5),
        s0: 8 * t,
        s1: 20 * t,
        c0: 16760928,
        c1: 8002568,
        a: 0.9,
        drag: 1.4,
        hot: 0.8,
      });
    for (let n = 0; n < 16; n++)
      M.spawn({
        p: [e[0], e[1] + 2, e[2]],
        v: [b(-40, 40) * t, b(10, 55) * t, b(-40, 40) * t],
        life: b(0.8, 2),
        s0: 1.6,
        s1: 0.8,
        c0: 16765056,
        c1: 16734736,
        a: 1,
        grav: 9.8,
        hot: 1,
      });
    (ke(e, Math.round(8 * t), {
      size: 9 * t,
      grow: 3.4,
      life: 12,
      c0: 2236188,
      c1: 5722960,
      rise: 7,
      spread: 5 * t,
      a: 0.85,
    }),
      n && L(e, t > 1.2));
  }
  function Ae(e, t = 1) {
    let n = E + 0.3;
    for (let r = 0; r < 16; r++)
      j.spawn({
        p: [e[0] + b(-3, 3) * t, n, e[2] + b(-3, 3) * t],
        v: [b(-4, 4), b(22, 42) * t, b(-4, 4)],
        life: b(2.2, 3.6),
        s0: 4 * t,
        s1: 13 * t,
        c0: 16054004,
        c1: 12109e3,
        a: 0.95,
        grav: 9.8,
        drag: 0.4,
      });
    for (let r = 0; r < 8; r++)
      j.spawn({
        p: [e[0] + b(-8, 8) * t, n, e[2] + b(-8, 8) * t],
        v: [b(-5, 5), b(1, 3), b(-5, 5)],
        life: b(3, 5),
        s0: 8 * t,
        s1: 24 * t,
        c0: 15265518,
        c1: 10465462,
        a: 0.7,
        drag: 0.6,
        wind: 0.4,
        hot: -1,
      });
    L(e, !1);
  }
  function je(e, t, n = 1) {
    (Te(`tank_cannon`, e, { volume: 1.7 * n, pitch: 0.72 }),
      z(e, 9 * n, 16773832, 0.12));
    for (let r = 0; r < 5; r++)
      j.spawn({
        p: [e[0] + t[0] * r * 3, e[1] + t[1] * r * 3, e[2] + t[2] * r * 3],
        v: [t[0] * b(10, 22), t[1] * 10 + b(1, 3), t[2] * b(10, 22)],
        life: b(3, 5),
        s0: 4 * n,
        s1: 16 * n,
        c0: 13617856,
        c1: 10131088,
        a: 0.75,
        drag: 1.2,
        wind: 0.5,
      });
    L(e, !1);
  }
  function Me(e) {
    (z(e, 6, 16769184, 0.1),
      j.spawn({
        p: e,
        v: [b(-1, 1), b(0, 1), b(-1, 1)],
        life: b(4, 6),
        s0: 5,
        s1: 13,
        c0: 1842204,
        c1: 3947578,
        a: 0.9,
        drag: 0.8,
        wind: 0.7,
      }));
  }
  function Ne(e, t = 1) {
    (z(e, 140 * t, 16777215, 0.35),
      z([e[0], e[1] + 20, e[2]], 90 * t, 16773312, 0.6));
    for (let n = 0; n < 26; n++)
      M.spawn({
        p: [e[0] + b(-8, 8), e[1] + b(0, 12), e[2] + b(-8, 8)],
        v: [b(-20, 20), b(10, 45), b(-20, 20)].map((e) => e * t),
        life: b(1, 2.4),
        s0: 22 * t,
        s1: 50 * t,
        c0: 16765040,
        c1: 6952966,
        a: 0.95,
        drag: 1.1,
        hot: 0.9,
      });
    for (let n = 0; n < 40; n++)
      M.spawn({
        p: [e[0], e[1] + 4, e[2]],
        v: [b(-70, 70) * t, b(30, 110) * t, b(-70, 70) * t],
        life: b(2, 4.5),
        s0: 3.2,
        s1: 1.4,
        c0: 16769184,
        c1: 16730632,
        a: 1,
        grav: 9.8,
        drag: 0.15,
        hot: 1,
      });
    for (let n = 0; n < 28; n++) {
      let r = (n / 28) * Math.PI * 2;
      j.spawn({
        p: [e[0], E + 0.5, e[2]],
        v: [Math.cos(r) * 55 * t, 0, Math.sin(r) * 55 * t],
        life: b(3, 5),
        s0: 10 * t,
        s1: 34 * t,
        c0: 16777215,
        c1: 11583686,
        a: 0.75,
        drag: 0.9,
        hot: -1,
      });
    }
    for (let n = 0; n < 18; n++)
      j.spawn({
        p: [e[0] + b(-6, 6), e[1] + b(0, 30) * t, e[2] + b(-6, 6)],
        v: [b(-3, 3), b(18, 42) * t, b(-3, 3)],
        life: b(20, 30),
        s0: 18 * t,
        s1: 80 * t,
        c0: 1709586,
        c1: 5920080,
        a: 0.92,
        drag: 0.35,
        wind: 0.7,
      });
    for (let n = 0; n < 12; n++)
      j.spawn({
        p: [e[0] + b(-4, 4), E + 1, e[2] + b(-4, 4)],
        v: [b(-6, 6), b(40, 75) * t, b(-6, 6)],
        life: b(2.5, 4),
        s0: 8 * t,
        s1: 22 * t,
        c0: 16054004,
        c1: 12109e3,
        a: 0.9,
        grav: 9.8,
        drag: 0.3,
      });
    L(e, !0);
  }
  function Pe(e) {
    let t = I(e, [0, 30, 0], [0, 0, 0]);
    for (let e = 0; e < 18; e++)
      M.spawn({
        p: t.slice(),
        v: [b(-30, 30), b(15, 40), b(-30, 30)],
        life: b(1.5, 3),
        s0: 3,
        s1: 1.5,
        c0: 16777215,
        c1: 16756800,
        a: 1,
        grav: 6,
        drag: 0.5,
        hot: 1,
      });
    ke([t[0], t[1] + 25, t[2]], 6, {
      size: 8,
      grow: 3,
      life: 8,
      c0: 15263972,
      c1: 11579562,
      rise: 1,
      spread: 18,
      a: 0.6,
    });
  }
  function Fe(e, t, n) {
    if (e.wreck || e.dying || e.hidden || (Ke(e, n), (e.hp -= t), e.hp > 0))
      return;
    if (O.filter((e) => e.dying || e.hidden).length >= 2 || Q - ot < 30) {
      e.hp = 1;
      return;
    }
    ((ot = Q),
      (e.dying = !0),
      (e.sinkT = 0),
      (e.dieList = (m() < 0.5 ? -1 : 1) * b(0.2, 0.55)),
      (e.diePitch = b(-0.14, 0.14)));
    let r = e.cls === `patrol` ? 2 : 5;
    for (let t = 0; t < r; t++)
      Z.push({
        at: Q + t * b(0.25, 0.8),
        fn: () =>
          B(I(e, [b(-0.42, 0.42) * e.L, 8, b(-4, 4)], [0, 0, 0]), b(1, 1.9)),
      });
    Z.push({
      at: Q + b(1.4, 3),
      fn: () =>
        Ne(
          I(e, [b(-0.2, 0.2) * e.L, 6, 0], [0, 0, 0]),
          e.cls === `patrol` ? 0.6 : e.L / 150,
        ),
    });
    for (let t of [0.35, 0.1, -0.15, -0.38])
      e.fires.length < 6 &&
        e.fires.push({
          local: [e.L * t, 8, 0],
          t: 0,
          until: 1 / 0,
          scale: b(1.1, 1.6),
        });
  }
  function Ie(e) {
    ((e.hidden = !0),
      (e.dying = !1),
      (e.fires = []),
      (e.respawnAt = Q + b(25, 55)),
      Re.push({
        p: [e.pos.x, E + 0.6, e.pos.z],
        scale: 1.3,
        t: 0,
        until: Q + 110,
      }),
      ke([e.pos.x, E + 1, e.pos.z], 10, {
        size: 12,
        grow: 3,
        life: 6,
        c0: 15922934,
        c1: 11057340,
        rise: 4,
        spread: e.L * 0.3,
        a: 0.7,
      }));
  }
  function Le(e) {
    Object.assign(e, {
      hidden: !1,
      hp: ne[e.cls],
      spd: 1,
      enter: 1,
      sinkT: 0,
      fires: [],
      gunT: b(6, 12),
      vlsT: b(15, 30),
    });
  }
  let V = [],
    Re = [],
    H = (() => {
      let e = n.flares ?? {},
        t = e.glow ?? 1,
        r = (e) => new d(e).multiplyScalar(t).getHex();
      return {
        size: e.size ?? 1,
        hot: Math.min(1, t),
        c0: r(16775400),
        c1: r(16769200),
        every: e.every ?? [8, 18],
      };
    })();
  function ze(e) {
    for (let t = V.length - 1; t >= 0; t--) {
      let n = V[t];
      if (((n.t += e), n.t > n.life || n.p[1] < E + 5)) {
        V.splice(t, 1);
        continue;
      }
      ((n.p[0] += C[0] * e * 1.5),
        (n.p[1] -= 3.2 * e),
        (n.p[2] += C[2] * e * 1.5));
      let r = Math.min(1, n.t * 2) * Math.min(1, (n.life - n.t) / 3);
      (M.spawn({
        p: n.p.slice(),
        life: 0.06,
        s0: 26 * r * H.size,
        s1: 22 * r * H.size,
        c0: H.c0,
        c1: H.c1,
        a: 1,
        hot: H.hot,
      }),
        (n.sT -= e),
        n.sT <= 0 &&
          ((n.sT = 0.12),
          j.spawn({
            p: [n.p[0], n.p[1] + 2, n.p[2]],
            v: [0, 0.6, 0],
            life: b(6, 9),
            s0: 2.5,
            s1: 9,
            c0: 14210768,
            c1: 10131602,
            a: 0.5,
            drag: 0.3,
            wind: 0.9,
          })));
    }
  }
  function Be(e, t, n, r) {
    ((r.t -= n),
      !(r.t > 0) &&
        ((r.t = 0.09 / t),
        M.spawn({
          p: [e[0] + b(-2, 2) * t, e[1] + b(0, 2), e[2] + b(-2, 2) * t],
          v: [b(-1, 1), b(3, 7) * t, b(-1, 1)],
          life: b(0.5, 1.1),
          s0: b(5, 9) * t,
          s1: 2 * t,
          c0: 16756808,
          c1: 11545096,
          a: 0.85,
          hot: 0.7,
        }),
        m() < 0.6 &&
          j.spawn({
            p: [e[0] + b(-2, 2), e[1] + 3 * t, e[2] + b(-2, 2)],
            v: [b(-1, 1), b(6, 10) * Math.sqrt(t), b(-1, 1)],
            life: b(15, 22),
            s0: 7 * t,
            s1: 46 * t,
            c0: 1710102,
            c1: 4867908,
            a: 0.9,
            drag: 0.12,
            wind: 0.9,
          })));
  }
  let U = [],
    W = [],
    G = (e) => !e.wreck && !e.dying && !e.hidden && e.enter < 0.3,
    Ve = (e) =>
      O.filter(
        (t) =>
          G(t) &&
          t.side === 1 - e.side &&
          t.cls !== `landing` &&
          Math.hypot(t.pos.x - e.pos.x, t.pos.z - e.pos.z) < 1e3,
      );
  function He(e) {
    let t = Ve(e);
    if (!t.length) return;
    let n = x(t),
      r = te[e.cls].gun;
    if (!r.length) return;
    let i = e.cls === `cruiser` ? 1.4 : e.cls === `patrol` ? 0.5 : 1.1,
      a =
        e.cls === `cruiser`
          ? 3
          : e.cls === `destroyer`
            ? 2 + (m() < 0.4)
            : e.cls === `patrol`
              ? 4
              : 1 + (m() < 0.5);
    for (let t = 0; t < a; t++) {
      let a = I(e, r[t % r.length]),
        o = [n.pos.x - a[0], 0, n.pos.z - a[2]],
        s = Math.hypot(o[0], o[2]);
      ((o[0] /= s), (o[2] /= s), (o[1] = 0.25));
      let c = m() < 0.28,
        l = c
          ? [b(-0.3, 0.3) * n.L, 0, b(-4, 4)]
          : [b(-1, 1) * (25 + n.L * 0.5), 0, b(-1, 1) * 45],
        u = t * (e.cls === `patrol` ? 0.18 : 0.6);
      (Z.push({
        at: Q + u,
        fn: () => je(I(e, r[t % r.length], [0, 0, 0]), o, i),
      }),
        U.push({
          a: a.slice(),
          tg: n,
          off: l,
          hit: c,
          t: -u,
          T: s / 560 + 0.8,
          apex: s * (e.cls === `patrol` ? 0.015 : 0.045),
          big: i,
          dmg: e.cls === `patrol` ? 0.34 : 1,
        }));
    }
  }
  function Ue(e) {
    let t = Ve(e),
      n = te[e.cls];
    if (!t.length || !n.vls) return;
    let r = x(t),
      i = 1 + Math.floor(m() * (e.cls === `cruiser` ? 4 : 3));
    for (let t = 0; t < i; t++)
      Z.push({
        at: Q + t * b(0.35, 0.7),
        fn: () => {
          if (!G(e)) return;
          let i = I(e, [n.vls[0] + b(-3, 3), n.vls[1], n.vls[2]], [0, 0, 0]);
          (z(i, 16, 16775392, 0.25),
            ke(i, 10, {
              size: 9,
              grow: 2.8,
              life: 7,
              c0: 15131870,
              c1: 11052704,
              rise: 7,
              spread: 3,
              a: 0.85,
            }),
            Te(`rocket_launch`, i, { volume: 1.3, pitch: 0.7 }),
            W.push({
              a: i,
              tg: r,
              t: 0,
              climb: 1.2 + t * 0.15,
              T: Math.hypot(r.pos.x - i[0], r.pos.z - i[2]) / 300 + 1.4,
              trailT: 0,
              intercept: m() < 0.4,
              done: !1,
              ciwsT: 0,
              last: i.slice(),
              chaff: !1,
              wob: m() * 9,
            }),
            L(i, !1));
        },
      });
  }
  let We = [0, 0, 0];
  function Ge(e, t) {
    for (let t = U.length - 1; t >= 0; t--) {
      let n = U[t];
      if (((n.t += e), n.t < 0)) continue;
      let r = Math.min(1, n.t / n.T),
        i = [
          n.tg.pos.x + n.off[0],
          E + (n.hit ? 6 : 0.5),
          n.tg.pos.z + n.off[2],
        ];
      ((We[0] = n.a[0] + (i[0] - n.a[0]) * r),
        (We[2] = n.a[2] + (i[2] - n.a[2]) * r),
        (We[1] = n.a[1] + (i[1] - n.a[1]) * r + n.apex * 4 * r * (1 - r)),
        M.spawn({
          p: We.slice(),
          life: 0.16,
          s0: 3.6 * n.big,
          s1: 1.2,
          c0: 16767120,
          c1: 16738840,
          a: 1,
          hot: 1,
        }),
        r >= 1 &&
          (U.splice(t, 1),
          n.hit && G(n.tg) ? (B(i, n.big), Fe(n.tg, n.dmg, i)) : Ae(i, n.big)));
    }
    for (let t = W.length - 1; t >= 0; t--) {
      let n = W[t];
      n.t += e;
      let r;
      if (n.t < n.climb) {
        let e = n.t / n.climb;
        r = [n.a[0], n.a[1] + 70 * e ** 1.4, n.a[2]];
      } else {
        let i = Math.min(1, (n.t - n.climb) / (n.T - n.climb)),
          a = [n.a[0], n.a[1] + 70, n.a[2]],
          o = [n.tg.pos.x, E + 7, n.tg.pos.z],
          s = 70 + -38 * Math.min(1, i / 0.3);
        r = [
          a[0] + (o[0] - a[0]) * i,
          i < 0.82 ? E + s : E + 7 + 25 * (1 - (i - 0.82) / 0.18),
          a[2] + (o[2] - a[2]) * i,
        ];
        let c = Math.min(1, Math.max(0, (i - 0.5) * 3)) * 9;
        if (
          ((r[1] += c * Math.sin(n.t * 7 + n.wob)),
          (r[2] += c * Math.cos(n.t * 5 + n.wob)),
          i > 0.55 && !n.chaff && ((n.chaff = !0), G(n.tg) && Pe(n.tg)),
          i > 0.62 && !n.done)
        ) {
          n.ciwsT -= e;
          let a = te[n.tg.cls].ciws;
          if (n.ciwsT <= 0 && a.length) {
            n.ciwsT = 0.035;
            let e = I(n.tg, x(a));
            ((n.ciwsS = (n.ciwsS ?? 0) - 0.035),
              n.ciwsS <= 0 &&
                ((n.ciwsS = 0.45),
                Te(`gun_lmg`, e, { volume: 0.6, pitch: 1.8, cost: 0.5 })));
            let t = r[0] - e[0],
              i = r[1] - e[1],
              o = r[2] - e[2],
              s = Math.hypot(t, i, o),
              c = 1100;
            M.spawn({
              p: e,
              v: [
                (t / s) * c + b(-25, 25),
                (i / s) * c + b(-25, 25),
                (o / s) * c + b(-25, 25),
              ],
              life: Math.min(0.9, s / c),
              s0: 1.3,
              s1: 1,
              c0: 16769184,
              c1: 16747056,
              a: 1,
              hot: 1,
            });
          }
          if (n.intercept && i > 0.86) {
            ((n.done = !0), W.splice(t, 1), B(r, 0.55));
            continue;
          }
        }
        if (i >= 1) {
          (W.splice(t, 1), B(r, 1.8), G(n.tg) ? Fe(n.tg, 3, r) : Ae(r, 1.4));
          continue;
        }
      }
      for (
        M.spawn({
          p: r,
          life: 0.07,
          s0: 3.2,
          s1: 2,
          c0: 16774352,
          c1: 16752704,
          a: 1,
          hot: 1,
        }),
          n.trailT -= e;
        n.trailT <= 0;
      ) {
        n.trailT += 0.011;
        let e = n.trailT / 0.011;
        j.spawn({
          p: [
            r[0] + (n.last[0] - r[0]) * e,
            r[1] + (n.last[1] - r[1]) * e,
            r[2] + (n.last[2] - r[2]) * e,
          ],
          v: [b(-0.6, 0.6), b(0.2, 1), b(-0.6, 0.6)],
          life: b(4, 6),
          s0: 3.4,
          s1: 12,
          c0: 15789802,
          c1: 11842220,
          a: 0.7,
          drag: 0.5,
          wind: 0.8,
        });
      }
      n.last = r;
    }
  }
  function Ke(e, t) {
    e.wreck ||
      e.hidden ||
      e.fires.length >= 4 ||
      (F.set(t[0], t[1], t[2])
        .sub(e.pos)
        .applyQuaternion(me.copy(e.q).invert()),
      e.fires.push({
        local: [Math.max(-e.L * 0.45, Math.min(e.L * 0.45, F.x)), 7, 0],
        t: 0,
        until: Q + b(50, 140),
        scale: b(0.6, 1),
      }));
  }
  let K = n.stage ?? [0, 0],
    qe = (e) => {
      let t = O.filter(
        (t) =>
          G(t) &&
          t.side === e &&
          t.cls !== `landing` &&
          Math.hypot(t.pos.x - K[0], t.pos.z - K[1]) < 700,
      );
      t.length || (t = O.filter((t) => !t.wreck && t.side === e));
      let n = [0, 0];
      for (let e of t)
        ((n[0] += e.pos.x / t.length), (n[1] += e.pos.z / t.length));
      return n;
    };
  function Je(e) {
    let t = k.find((e) => !e.active);
    if (!t) return;
    let n = qe(e.side),
      r = qe(1 - e.side),
      i = r[0] - n[0],
      a = r[1] - n[1],
      o = Math.hypot(i, a) || 1,
      s = i / o,
      c = a / o,
      l = b(-160, 160),
      u = [n[0] - s * 900 - c * l, n[1] - c * 900 + s * l],
      d = [r[0] + s * 1300 - c * l, r[1] + c * 1300 + s * l],
      f = Math.hypot(d[0] - u[0], d[1] - u[1]);
    Object.assign(t, {
      active: !0,
      side: e.side,
      start: u,
      end: d,
      alt: e.alt,
      speed: e.speed,
      t: 0,
      T: f / e.speed,
      dropped: !1,
      down: m() < 0.2 ? b(0.55, 0.75) : 1 / 0,
      fall: 0,
      flakT: 0,
      trailT: 0,
      pos: [u[0], E + e.alt, u[1]],
      dir: [s, 0, c],
      yaw: Math.atan2(-c, s),
    });
  }
  let q = (n.helos ?? []).map(([e, t, n, r, i], a) => ({
      rx: e,
      rz: t,
      alt: n,
      period: r,
      phase: i,
      i: a,
      blinkT: a * 0.6,
    })),
    J = null,
    Ye = [],
    Xe = [];
  if (q.length) {
    let e = ae();
    (e
      .box(-5.5, -1.2, -1.3, 4.5, 1.3, 1.3, T.dark)
      .box(4.5, -0.7, -0.95, 6.4, 1, 0.95, T.glass)
      .box(-13, 0.1, -0.35, -5.5, 0.8, 0.35, T.dark)
      .box(-13.4, 0.4, -0.15, -12, 3.1, 0.15, T.dark)
      .box(-3.5, -2.1, -1.5, 3.5, -1.9, -1.3, T.dark)
      .box(-3.5, -2.1, 1.3, 3.5, -1.9, 1.5, T.dark)
      .box(-0.4, 1.3, -0.4, 0.4, 1.9, 0.4, T.dark)
      .box(-7.5, 1.9, -0.22, 7.5, 1.97, 0.22, T.dark)
      .box(-0.22, 1.9, -7.5, 0.22, 1.97, 7.5, T.dark),
      (J = new v(e.geometry(), D, q.length)),
      (J.name = `naval-helos`),
      (J.frustumCulled = !1),
      o.add(J));
    let t = new i(1, 1, 20, 1, !0);
    t.translate(0, -0.5, 0);
    let r = new p(1, 28);
    r.rotateX(-Math.PI / 2);
    let a = new ee({
        color: 16773590,
        transparent: !0,
        opacity: n.helosBeam ?? 0.005,
        blending: 2,
        depthWrite: !1,
        side: 2,
        fog: !1,
      }),
      s = new ee({
        color: 16773590,
        transparent: !0,
        opacity: n.helosSpot ?? 0.07,
        blending: 2,
        depthWrite: !1,
        fog: !1,
      });
    for (let e = 0; e < q.length; e++) {
      let e = new l(t, a),
        n = new l(r, s);
      ((e.frustumCulled = n.frustumCulled = !1),
        (e.renderOrder = n.renderOrder = 462),
        o.add(e, n),
        Ye.push({ cone: e, spot: n }));
    }
    Xe.push(t, r, a, s);
  }
  let Ze = new S(0, -1, 0),
    Qe = new S(),
    $e = new S(0, 0, 1),
    Y = n.lightning ?? null,
    et = Y ? new g(13162751, 1844272, 0) : null;
  et && ((et.name = `naval-lightning`), o.add(et));
  let tt = Y ? b(6, 14) : 1 / 0,
    X = 99;
  function nt(e, t) {
    if (
      !Y ||
      ((X += e),
      (et.intensity =
        (X < 0.08
          ? 1
          : X < 0.14
            ? 0.15
            : X < 0.22
              ? 0.6
              : X < 0.3
                ? 0.1
                : X < 0.34
                  ? 0.3
                  : 0) * (Y.strength ?? 2.2)),
      (tt -= e),
      tt > 0)
    )
      return;
    ((tt = b(Y.every?.[0] ?? 12, Y.every?.[1] ?? 28)), (X = 0));
    let n = m() * Math.PI * 2,
      r = b(500, 1100),
      i = K[0] + Math.cos(n) * r,
      a = K[1] + Math.sin(n) * r,
      o = [i + b(-60, 60), E + b(380, 460), a + b(-60, 60)];
    for (let e = 0; e < 14; e++) {
      let t = (e + 1) / 14,
        n = [
          i + b(-18, 18) * (1 - t),
          E + (o[1] - E) * (1 - 1 / (14 - e)),
          a + b(-18, 18) * (1 - t),
        ];
      for (let e = 0; e < 10; e++)
        M.spawn({
          p: [
            o[0] + ((n[0] - o[0]) * e) / 10,
            o[1] + ((n[1] - o[1]) * e) / 10,
            o[2] + ((n[2] - o[2]) * e) / 10,
          ],
          life: 0.28,
          s0: 14,
          s1: 8,
          c0: 15660031,
          c1: 10467583,
          a: 1,
          hot: 1,
        });
      o = n;
    }
  }
  function rt(e) {
    if (!J) return;
    let t = n.helosDeck ?? [90, 10],
      r = n.helosDeckY ?? E;
    (q.forEach((n, i) => {
      let a = n.phase + (Q * 2 * Math.PI) / n.period,
        o = K[0] + Math.cos(a) * n.rx,
        s = K[1] + Math.sin(a) * n.rz,
        c = E + n.alt + 3 * Math.sin(Q * 0.7 + i * 2),
        l = Math.atan2(-Math.cos(a) * n.rz, -Math.sin(a) * n.rx);
      (P.setFromAxisAngle(ye, l).multiply(
        me.setFromAxisAngle($e, -0.09 + 0.03 * Math.sin(Q * 0.5 + i)),
      ),
        N.compose(F.set(o, c, s), P, _e),
        J.setMatrixAt(i, N));
      let u = K[0] + t[0] * Math.sin(Q * 0.09 + i * 2.3),
        d = K[1] + t[1] * Math.sin(Q * 0.31 + i * 1.7),
        f = c - 2.2;
      Qe.set(u - o, r - f, d - s);
      let p = Qe.length();
      Qe.multiplyScalar(1 / p);
      let m = Math.max(3.5, p * 0.055),
        h = Ye[i];
      if (
        (h.cone.position.set(o, f, s),
        h.cone.quaternion.setFromUnitVectors(Ze, Qe),
        h.cone.scale.set(m, p, m),
        h.spot.position.set(u, r + 0.14, d),
        h.spot.scale.set(m * 1.15, 1, m * 1.15),
        (n.gunT = (n.gunT ?? 4 + i * 3) - e),
        n.gunT <= 0)
      ) {
        ((n.burst = b(1.2, 2.2)), (n.gunT = b(7, 13)));
        let e = a + b(-0.6, 0.6);
        n.aim = [
          K[0] + Math.cos(e) * (n.rx + b(120, 260)),
          E,
          K[1] + Math.sin(e) * (n.rz + b(120, 260)),
        ];
      }
      if (n.burst > 0)
        for (n.burst -= e, n.fireT = (n.fireT ?? 0) - e; n.fireT <= 0;) {
          n.fireT += 0.07;
          let e = [o, c - 1.2, s],
            t = n.aim[0] - o,
            r = n.aim[1] - e[1],
            i = n.aim[2] - s,
            a = Math.hypot(t, r, i);
          M.spawn({
            p: e,
            v: [
              (t / a) * 700 + b(-12, 12),
              (r / a) * 700,
              (i / a) * 700 + b(-12, 12),
            ],
            life: a / 700,
            s0: 1.3,
            s1: 1,
            c0: 16765578,
            c1: 16738848,
            a: 1,
            hot: 1,
          });
        }
      (De(`helo-` + i, `vehicle_rotor`, [o, c, s], { volume: 0.18, rpm: 0.85 }),
        n.burst > 0 &&
          ((n.gunS = (n.gunS ?? 0) - e),
          n.gunS <= 0 &&
            ((n.gunS = 0.32),
            Te(`gun_lmg`, [o, c - 1, s], {
              volume: 0.45,
              pitch: 1.15,
              cost: 0.4,
            }))),
        (n.blinkT -= e),
        n.blinkT <= 0 &&
          ((n.blinkT = 1.1),
          M.spawn({
            p: [o, c + 2.3, s],
            life: 0.16,
            s0: 1.4,
            s1: 1.1,
            c0: 16724e3,
            c1: 16724e3,
            a: 1,
            hot: 1,
          })));
    }),
      (J.instanceMatrix.needsUpdate = !0));
  }
  function it(e) {
    for (let t of k) {
      if (!t.active) {
        A.setMatrixAt(t.i, ve);
        continue;
      }
      t.t += e;
      let n = t.t / t.T;
      if (n < t.down) {
        t.pos = [
          t.start[0] + (t.end[0] - t.start[0]) * n,
          E + t.alt + 12 * Math.sin(n * 9),
          t.start[1] + (t.end[1] - t.start[1]) * n,
        ];
        let r = O.filter((e) => G(e) && e.side === 1 - t.side),
          i = null,
          a = 1 / 0;
        for (let e of r) {
          let n = Math.hypot(e.pos.x - t.pos[0], e.pos.z - t.pos[2]);
          n < a && ((a = n), (i = e));
        }
        if (
          (i &&
            a < 650 &&
            ((t.flakT -= e),
            t.flakT <= 0 &&
              ((t.flakT = b(0.12, 0.4)),
              Me([
                t.pos[0] - t.dir[0] * b(20, 90) + b(-40, 40),
                t.pos[1] + b(-30, 30),
                t.pos[2] - t.dir[2] * b(20, 90) + b(-40, 40),
              ]))),
          i &&
            a < 420 &&
            te[i.cls].ciws.length &&
            ((t.ciwsT = (t.ciwsT ?? 0) - e), t.ciwsT <= 0))
        ) {
          t.ciwsT = 0.045;
          let e = I(i, x(te[i.cls].ciws), [0, 0, 0]),
            n = t.pos[0] - t.dir[0] * b(10, 60),
            r = t.pos[1] + b(-15, 15),
            a = t.pos[2] - t.dir[2] * b(10, 60),
            o = n - e[0],
            s = r - e[1],
            c = a - e[2],
            l = Math.hypot(o, s, c),
            u = 1e3;
          M.spawn({
            p: e,
            v: [(o / l) * u, (s / l) * u, (c / l) * u],
            life: Math.min(1.2, (l / u) * 1.3),
            s0: 1.8,
            s1: 1.2,
            c0: 16769184,
            c1: 16742944,
            a: 1,
            hot: 1,
          });
        }
        if (!t.dropped && i && a < 220) {
          t.dropped = !0;
          let e = [i.pos.x + b(-0.3, 0.3) * i.L, E + 5, i.pos.z + b(-6, 6)];
          Z.push({
            at: Q + 1.6,
            fn: () => {
              m() < 0.55 && G(i)
                ? (B(e, 1.5), Fe(i, 2, e))
                : (Ae([e[0] + b(-40, 40), 0, e[2] + b(-40, 40)], 1.5),
                  Ae([e[0] + b(-40, 40), 0, e[2] + b(-40, 40)], 1.2));
            },
          });
          for (let e = 0; e < 6; e++)
            M.spawn({
              p: t.pos.slice(),
              v: [b(-20, 20), b(-12, 4), b(-20, 20)],
              life: b(1.4, 2.4),
              s0: 2.6,
              s1: 1.2,
              c0: 16773296,
              c1: 16738832,
              a: 1,
              grav: 4,
              hot: 1,
            });
        }
        if (n >= 1) {
          ((t.active = !1), A.setMatrixAt(t.i, ve));
          continue;
        }
      } else if (
        (t.fall ||
          ((t.fall = 0.001),
          (t.vel = [t.dir[0] * t.speed * 0.8, 0, t.dir[2] * t.speed * 0.8]),
          B(t.pos, 0.6)),
        (t.fall += e),
        (t.vel[1] -= 9.8 * e),
        (t.pos = [
          t.pos[0] + t.vel[0] * e,
          t.pos[1] + t.vel[1] * e,
          t.pos[2] + t.vel[2] * e,
        ]),
        (t.trailT -= e),
        t.trailT <= 0 &&
          ((t.trailT = 0.04),
          M.spawn({
            p: t.pos.slice(),
            life: 0.5,
            s0: 5,
            s1: 2,
            c0: 16752704,
            c1: 9445384,
            a: 0.9,
            hot: 0.8,
          }),
          j.spawn({
            p: t.pos.slice(),
            v: [0, 1, 0],
            life: b(6, 9),
            s0: 4,
            s1: 16,
            c0: 2104860,
            c1: 5591630,
            a: 0.85,
            drag: 0.3,
            wind: 0.8,
          })),
        t.pos[1] <= E)
      ) {
        (Ae(t.pos, 1.5),
          B([t.pos[0], E + 1, t.pos[2]], 0.8),
          (t.active = !1),
          A.setMatrixAt(t.i, ve));
        continue;
      }
      (P.setFromAxisAngle(ye, t.yaw),
        he.setFromAxisAngle(
          F.set(1, 0, 0),
          t.fall ? t.fall * 3 : 0.15 * Math.sin(t.t * 1.3),
        ),
        P.multiply(he),
        N.compose(F.set(t.pos[0], t.pos[1], t.pos[2]), P, _e),
        A.setMatrixAt(t.i, N));
    }
    A.instanceMatrix.needsUpdate = !0;
  }
  let Z = [],
    Q = 0,
    at = 4,
    ot = -20,
    $ = [0, 0, 0];
  function st(e, t) {
    ((Q += e),
      (Ce = t),
      (Se = Math.min(R ? 3 : 2, Se + e * (R ? 0.8 : 0.45))),
      (we = Math.min(3, we + e * 0.9)));
    for (let t of O) (t.hidden && Q >= t.respawnAt && Le(t), be(t, Q, e));
    for (let e of ue.values()) e.instanceMatrix.needsUpdate = !0;
    for (let n of O)
      if (!n.hidden) {
        if (!n.wreck && n.spd > 0.15) {
          if (((n.wakeT -= e), n.wakeT <= 0)) {
            n.wakeT = n.cls === `patrol` ? 0.08 : 0.16;
            let e = ie[n.cls][1],
              t = w[n.cls];
            for (let r of [-1, 1])
              (I(n, [-n.L * 0.5, 0, r * e * 0.3], $),
                ($[1] = E + 0.4),
                j.spawn({
                  p: $.slice(),
                  v: [b(-0.5, 0.5), 0, b(-0.5, 0.5)],
                  life: b(7, 11) * Math.min(1.4, t / 10),
                  s0: e * 0.45,
                  s1: e * 1.7,
                  c0: 16186104,
                  c1: 11979472,
                  a: 0.6,
                  drag: 0.2,
                  hot: -1,
                }));
            (I(n, [n.L * 0.47, 0, 0], $),
              ($[1] = E + 0.6),
              j.spawn({
                p: $.slice(),
                v: [b(-1, 1), 0, b(-1, 1)],
                life: b(2, 3.5),
                s0: e * 0.5,
                s1: e * 1.1,
                c0: 16777215,
                c1: 13162202,
                a: 0.6,
                drag: 0.6,
                hot: -1,
              }));
          }
          n.cls !== `landing` &&
            n.cls !== `lhd` &&
            G(n) &&
            ((n.gunT -= e),
            n.gunT <= 0 &&
              ((n.gunT =
                n.cls === `cruiser`
                  ? b(3, 6)
                  : n.cls === `patrol`
                    ? b(1.5, 4)
                    : b(3.5, 8)),
              He(n)),
            (n.vlsT -= e),
            n.vlsT <= 0 && ((n.vlsT = b(14, 32)), Ue(n)));
        } else
          n.dying
            ? ((n.secT = (n.secT ?? 0) - e),
              n.secT <= 0 &&
                ((n.secT = b(2, 7)),
                B(I(n, [b(-0.4, 0.4) * n.L, 8, 0], [0, 0, 0]), b(0.6, 1.2), t)))
            : n.wreck &&
              ((n.secT -= e),
              n.secT <= 0 &&
                ((n.secT = b(18, 40)),
                B(
                  I(n, [b(-0.3, 0.3) * n.L, 8, 0], [0, 0, 0]),
                  b(0.7, 1.3),
                  t,
                )));
        for (let t = n.fires.length - 1; t >= 0; t--) {
          let r = n.fires[t];
          if (Q > r.until) {
            n.fires.splice(t, 1);
            continue;
          }
          Be(I(n, r.local, $).slice(), r.scale, e, r);
        }
      }
    for (let t of pe) Be(t.p, t.scale, e, t);
    for (let t = Re.length - 1; t >= 0; t--) {
      let n = Re[t];
      if (Q > n.until) {
        Re.splice(t, 1);
        continue;
      }
      Be(n.p, n.scale * Math.min(1, (n.until - Q) / 30), e, n);
    }
    ((at -= e),
      at <= 0 &&
        ((at = b(H.every[0], H.every[1])),
        V.push({
          p: [K[0] + b(-150, 150), E + b(200, 280), K[1] + b(-250, 250)],
          t: 0,
          life: b(35, 50),
          sT: 0,
        })),
      ze(e));
    for (let e of fe)
      Q >= e.next && ((e.next = Q + e.period * b(0.8, 1.2)), Je(e));
    (it(e), rt(e), nt(e, t), Ge(e, Q));
    for (let e = Z.length - 1; e >= 0; e--)
      if (Q >= Z[e].at) {
        let t = Z[e];
        (Z.splice(e, 1), t.fn());
      }
    (j.step(e), M.step(e));
  }
  for (let e = 0; e < 90; e++) st(0.2, !1);
  let ct = n.navLights
      ? [
          [0.17, 0.2, 0, 16774368, 4.2],
          [0.12, 0.08, -0.5, 16722458, 3.4],
          [0.12, 0.08, 0.5, 2817882, 3.4],
          [-0.5, 0.045, 0, 16774368, 3],
          [0.1, 0.095, -0.22, 16760944, 2.2],
          [0.1, 0.095, 0, 16760944, 2.2],
          [0.1, 0.095, 0.22, 16760944, 2.2],
        ]
      : [],
    lt = [0, 0, 0];
  function ut() {
    if (ct.length)
      for (let e of O) {
        if (e.wreck || e.hidden || !e.q) continue;
        let [t, n] = ie[e.cls];
        for (let [r, i, a, o, s] of ct)
          (I(e, [t * r, t * i, n * a], lt),
            M.spawn({
              p: lt.slice(),
              life: 0.05,
              s0: s,
              s1: s,
              c0: o,
              c1: o,
              a: 0.85,
              hot: 0.6,
            }));
      }
  }
  let dt = new c();
  return {
    group: o,
    update(t) {
      let n = Math.min(Math.max(t || 0, 0), 0.1),
        i = e.camera,
        a = e.renderer;
      if (i && a) {
        a.getSize(dt);
        let e =
          (dt.y * a.getPixelRatio()) /
          (2 * Math.tan(r.degToRad(i.fov ?? 60) / 2));
        j.mat.uniforms.uScale.value = M.mat.uniforms.uScale.value = e;
      }
      (st(n, !0), ut());
    },
    stats() {
      return {
        ships: O.filter((e) => !e.wreck).length,
        wrecks: O.filter((e) => e.wreck).length,
        classes: se.length,
        smoke: j.alive,
        glow: M.alive,
        shells: U.length,
        missiles: W.length,
        jets: k.filter((e) => e.active).length,
        sinking: O.filter((e) => e.dying).length,
        sunk: O.filter((e) => e.hidden).length,
        flares: V.length,
        helos: q.length,
        time: Q,
      };
    },
    dispose() {
      t.remove(o);
      for (let e of [...Ee.keys()]) Oe(e);
      for (let e of ue.values()) e.geometry.dispose();
      (A.geometry.dispose(), J?.geometry.dispose());
      for (let e of Xe) e.dispose();
      (D.dispose(),
        j.geo.dispose(),
        j.mat.dispose(),
        M.geo.dispose(),
        M.mat.dispose());
    },
  };
}
