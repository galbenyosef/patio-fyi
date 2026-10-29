// assets__naval-CBHUF-qz 05 — math
// Lines 947-2442 of readable/assets__naval-CBHUF-qz.pretty.js (statement-aligned).
function k(t, a, s, { waterLevel: l = 8 } = {}) {
  let u = new _();
  ((u.name = `naval-battle`), a.add(u));
  let m = s.seed >>> 0 || 1,
    h = () => (m = (m * 1664525 + 1013904223) >>> 0) / 4294967296,
    v = (e, t) => e + h() * (t - e),
    x = (e) => e[Math.floor(h() * e.length)],
    T = l,
    se = { value: 0.5 },
    E = new n({
      vertexColors: !0,
      flatShading: !0,
      roughness: 0.72,
      metalness: 0.18,
      side: 2,
    });
  ((E.onBeforeCompile = (e) => {
    ((e.uniforms.uNavalRelief = se),
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
    (E.customProgramCacheKey = () => `naval-hull-v2`));
  let D = [];
  for (let [e, t, n, r, a, o, c, l] of s.ships) {
    let [s] = ae[t],
      u = Math.PI * (3 * (a + o) - Math.sqrt((3 * a + o) * (a + 3 * o)));
    D.push({
      id: e,
      cls: t,
      cx: n,
      cz: r,
      rx: a,
      rz: o,
      phase: c,
      side: l,
      lap: u / C[t],
      L: s,
      pos: new i(),
      yaw: 0,
      fires: [],
      gunT: v(1, 5),
      vlsT: v(4, 18),
      wakeT: 0,
      wreck: !1,
      bob: h() * 9,
      th: c,
      spd: 1,
      hp: re[t],
      dying: !1,
      hidden: !1,
      sinkT: 0,
      enter: 0,
    });
  }
  for (let [e, t, n, r, a, o] of s.wrecks ?? []) {
    let [s] = ae[t],
      c = {
        id: e,
        cls: t,
        side: -1,
        L: s,
        pos: new i(n, 0, r),
        yaw: a,
        list: o,
        wreck: !0,
        bob: h() * 9,
        fires: [],
        secT: v(8, 25),
      };
    for (let e of [0.28, -0.05, -0.3])
      c.fires.push({
        local: [s * e, 9 + 4 * h(), 0],
        t: 0,
        until: 1 / 0,
        scale: 1.2 + 0.4 * h(),
      });
    D.push(c);
  }
  let ce = [...new Set(D.map((e) => e.cls))],
    de = new Map();
  for (let e of ce) {
    let t = D.filter((t) => t.cls === e),
      n = new ee(le(e), E, t.length);
    ((n.name = `naval-` + e),
      (n.frustumCulled = !1),
      (n.castShadow = !1),
      (n.receiveShadow = !1),
      t.forEach((e, t) => {
        ((e.mesh = n), (e.index = t));
      }),
      u.add(n),
      de.set(e, n));
  }
  let O = [],
    k = new ee(ue(), E, 6);
  ((k.name = `naval-jets`), (k.frustumCulled = !1), u.add(k));
  for (let e = 0; e < 6; e++) O.push({ active: !1, i: e });
  let pe = (s.air ?? []).map(([e, t, n, r, i]) => ({
      side: e,
      alt: t,
      speed: n,
      period: r,
      next: i,
    })),
    A = fe(9e3, !1, s.smokeRelief ?? 0.42, s.smokeShade ?? 1),
    j = fe(3600, !0, 0.45, s.glowShade ?? 1);
  u.add(A.points, j.points);
  let me = (s.shoreFires ?? []).map(([e, t, n, r]) => ({
      p: [e, t, n],
      scale: r,
      t: 0,
    })),
    M = new te(),
    N = new g(),
    he = new g(),
    ge = new g(),
    _e = new y(),
    ve = new i(1, 1, 1),
    P = new i(),
    F = new te().makeScale(0, 0, 0),
    ye = new i(0, 1, 0);
  function be(e, t, n) {
    let r, i, a;
    if (e.wreck)
      ((r = e.list + 0.012 * Math.sin(t * 0.4 + e.bob)),
        (i = -0.035),
        (a = 3.2));
    else if (e.hidden) {
      e.mesh.setMatrixAt(e.index, F);
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
          (a = ie[e.cls] * n),
          e.sinkT > 80)
        ) {
          (Ie(e), e.mesh.setMatrixAt(e.index, F));
          return;
        }
      }
    }
    ((e.pos.y = T - a + 0.25 * Math.sin(t * 0.9 + e.bob)),
      _e.set(r, e.yaw, i, `YZX`),
      N.setFromEuler(_e),
      (e.q = e.q ?? new g()),
      e.q.copy(N),
      M.compose(e.pos, N, ve),
      e.mesh.setMatrixAt(e.index, M));
  }
  let I = (e, t, n = [0, 0, 0]) => (
      P.set(t[0], t[1], t[2]).applyQuaternion(e.q).add(e.pos),
      (n[0] = P.x),
      (n[1] = P.y),
      (n[2] = P.z),
      n
    ),
    xe = () => t.modules.get(`audio`),
    Se = 0,
    Ce = !1;
  function we(e, n = !1) {
    if (!Ce || (Se <= 0 && !n)) return;
    let r = t.camera?.position;
    if (!r) return;
    let i = Math.hypot(e[0] - r.x, e[1] - r.y, e[2] - r.z);
    --Se;
    try {
      xe()?.play?.(n ? `explosion_large` : `explosion_shell`, {
        pos: [e[0], e[1], e[2]],
        delay: Math.min(6, i / 343),
        volume: (n ? 0.9 : 0.6) * (L ? 2.4 : 1),
        open: L,
      });
    } catch {}
  }
  let L = !!s.openAudio,
    Te = 0;
  function Ee(e, n, { volume: r = 1, pitch: i = 1, cost: a = 1 } = {}) {
    if (!Ce || !L || Te < a) return;
    let o = t.camera?.position;
    if (!o) return;
    Te -= a;
    let s = Math.hypot(n[0] - o.x, n[1] - o.y, n[2] - o.z);
    try {
      xe()?.play?.(e, {
        pos: [n[0], n[1], n[2]],
        delay: Math.min(6, s / 343),
        volume: r,
        pitch: i,
        open: !0,
        priority: 3,
      });
    } catch {}
  }
  let De = new Map();
  function Oe(e, t, n, { volume: r = 1, rpm: i = 0.85 } = {}) {
    if (!Ce || !L) {
      ke(e);
      return;
    }
    let a = De.get(e);
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
    o && (o.setRpm?.(i), De.set(e, o));
  }
  function ke(e) {
    let t = De.get(e);
    if (t) {
      try {
        t.stop();
      } catch {}
      De.delete(e);
    }
  }
  function R(e, t, n = 16773312, r = 0.14) {
    j.spawn({
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
  function Ae(
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
      A.spawn({
        p: [e[0] + v(-c, c), e[1] + v(-c, c) * 0.5, e[2] + v(-c, c)],
        v: [
          (u?.[0] ?? 0) + v(-2, 2),
          s * v(0.6, 1.3) + (u?.[1] ?? 0),
          (u?.[2] ?? 0) + v(-2, 2),
        ],
        life: i * v(0.7, 1.3),
        s0: n * v(0.6, 1),
        s1: n * r * v(0.8, 1.2),
        c0: a,
        c1: o,
        a: l,
        drag: 0.35,
        wind: 0.6,
      });
  }
  function z(e, t = 1, n = !0) {
    R(e, 26 * t, 16774872, 0.18);
    for (let n = 0; n < 10; n++)
      j.spawn({
        p: [e[0] + v(-3, 3) * t, e[1] + v(0, 4) * t, e[2] + v(-3, 3) * t],
        v: [v(-8, 8) * t, v(4, 16) * t, v(-8, 8) * t],
        life: v(0.6, 1.5),
        s0: 8 * t,
        s1: 20 * t,
        c0: 16760928,
        c1: 8002568,
        a: 0.9,
        drag: 1.4,
        hot: 0.8,
      });
    for (let n = 0; n < 16; n++)
      j.spawn({
        p: [e[0], e[1] + 2, e[2]],
        v: [v(-40, 40) * t, v(10, 55) * t, v(-40, 40) * t],
        life: v(0.8, 2),
        s0: 1.6,
        s1: 0.8,
        c0: 16765056,
        c1: 16734736,
        a: 1,
        grav: 9.8,
        hot: 1,
      });
    (Ae(e, Math.round(8 * t), {
      size: 9 * t,
      grow: 3.4,
      life: 12,
      c0: 2236188,
      c1: 5722960,
      rise: 7,
      spread: 5 * t,
      a: 0.85,
    }),
      n && we(e, t > 1.2));
  }
  function B(e, t = 1) {
    let n = T + 0.3;
    for (let r = 0; r < 16; r++)
      A.spawn({
        p: [e[0] + v(-3, 3) * t, n, e[2] + v(-3, 3) * t],
        v: [v(-4, 4), v(22, 42) * t, v(-4, 4)],
        life: v(2.2, 3.6),
        s0: 4 * t,
        s1: 13 * t,
        c0: 16054004,
        c1: 12109e3,
        a: 0.95,
        grav: 9.8,
        drag: 0.4,
      });
    for (let r = 0; r < 8; r++)
      A.spawn({
        p: [e[0] + v(-8, 8) * t, n, e[2] + v(-8, 8) * t],
        v: [v(-5, 5), v(1, 3), v(-5, 5)],
        life: v(3, 5),
        s0: 8 * t,
        s1: 24 * t,
        c0: 15265518,
        c1: 10465462,
        a: 0.7,
        drag: 0.6,
        wind: 0.4,
        hot: -1,
      });
    we(e, !1);
  }
  function je(e, t, n = 1) {
    (Ee(`tank_cannon`, e, { volume: 1.7 * n, pitch: 0.72 }),
      R(e, 9 * n, 16773832, 0.12));
    for (let r = 0; r < 5; r++)
      A.spawn({
        p: [e[0] + t[0] * r * 3, e[1] + t[1] * r * 3, e[2] + t[2] * r * 3],
        v: [t[0] * v(10, 22), t[1] * 10 + v(1, 3), t[2] * v(10, 22)],
        life: v(3, 5),
        s0: 4 * n,
        s1: 16 * n,
        c0: 13617856,
        c1: 10131088,
        a: 0.75,
        drag: 1.2,
        wind: 0.5,
      });
    we(e, !1);
  }
  function Me(e) {
    (R(e, 6, 16769184, 0.1),
      A.spawn({
        p: e,
        v: [v(-1, 1), v(0, 1), v(-1, 1)],
        life: v(4, 6),
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
    (R(e, 140 * t, 16777215, 0.35),
      R([e[0], e[1] + 20, e[2]], 90 * t, 16773312, 0.6));
    for (let n = 0; n < 26; n++)
      j.spawn({
        p: [e[0] + v(-8, 8), e[1] + v(0, 12), e[2] + v(-8, 8)],
        v: [v(-20, 20), v(10, 45), v(-20, 20)].map((e) => e * t),
        life: v(1, 2.4),
        s0: 22 * t,
        s1: 50 * t,
        c0: 16765040,
        c1: 6952966,
        a: 0.95,
        drag: 1.1,
        hot: 0.9,
      });
    for (let n = 0; n < 40; n++)
      j.spawn({
        p: [e[0], e[1] + 4, e[2]],
        v: [v(-70, 70) * t, v(30, 110) * t, v(-70, 70) * t],
        life: v(2, 4.5),
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
      A.spawn({
        p: [e[0], T + 0.5, e[2]],
        v: [Math.cos(r) * 55 * t, 0, Math.sin(r) * 55 * t],
        life: v(3, 5),
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
      A.spawn({
        p: [e[0] + v(-6, 6), e[1] + v(0, 30) * t, e[2] + v(-6, 6)],
        v: [v(-3, 3), v(18, 42) * t, v(-3, 3)],
        life: v(20, 30),
        s0: 18 * t,
        s1: 80 * t,
        c0: 1709586,
        c1: 5920080,
        a: 0.92,
        drag: 0.35,
        wind: 0.7,
      });
    for (let n = 0; n < 12; n++)
      A.spawn({
        p: [e[0] + v(-4, 4), T + 1, e[2] + v(-4, 4)],
        v: [v(-6, 6), v(40, 75) * t, v(-6, 6)],
        life: v(2.5, 4),
        s0: 8 * t,
        s1: 22 * t,
        c0: 16054004,
        c1: 12109e3,
        a: 0.9,
        grav: 9.8,
        drag: 0.3,
      });
    we(e, !0);
  }
  function Pe(e) {
    let t = I(e, [0, 30, 0], [0, 0, 0]);
    for (let e = 0; e < 18; e++)
      j.spawn({
        p: t.slice(),
        v: [v(-30, 30), v(15, 40), v(-30, 30)],
        life: v(1.5, 3),
        s0: 3,
        s1: 1.5,
        c0: 16777215,
        c1: 16756800,
        a: 1,
        grav: 6,
        drag: 0.5,
        hot: 1,
      });
    Ae([t[0], t[1] + 25, t[2]], 6, {
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
    if (D.filter((e) => e.dying || e.hidden).length >= 2 || Q - ot < 30) {
      e.hp = 1;
      return;
    }
    ((ot = Q),
      (e.dying = !0),
      (e.sinkT = 0),
      (e.dieList = (h() < 0.5 ? -1 : 1) * v(0.2, 0.55)),
      (e.diePitch = v(-0.14, 0.14)));
    let r = e.cls === `patrol` ? 2 : 5;
    for (let t = 0; t < r; t++)
      Z.push({
        at: Q + t * v(0.25, 0.8),
        fn: () =>
          z(I(e, [v(-0.42, 0.42) * e.L, 8, v(-4, 4)], [0, 0, 0]), v(1, 1.9)),
      });
    Z.push({
      at: Q + v(1.4, 3),
      fn: () =>
        Ne(
          I(e, [v(-0.2, 0.2) * e.L, 6, 0], [0, 0, 0]),
          e.cls === `patrol` ? 0.6 : e.L / 150,
        ),
    });
    for (let t of [0.35, 0.1, -0.15, -0.38])
      e.fires.length < 6 &&
        e.fires.push({
          local: [e.L * t, 8, 0],
          t: 0,
          until: 1 / 0,
          scale: v(1.1, 1.6),
        });
  }
  function Ie(e) {
    ((e.hidden = !0),
      (e.dying = !1),
      (e.fires = []),
      (e.respawnAt = Q + v(25, 55)),
      Re.push({
        p: [e.pos.x, T + 0.6, e.pos.z],
        scale: 1.3,
        t: 0,
        until: Q + 110,
      }),
      Ae([e.pos.x, T + 1, e.pos.z], 10, {
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
      hp: re[e.cls],
      spd: 1,
      enter: 1,
      sinkT: 0,
      fires: [],
      gunT: v(6, 12),
      vlsT: v(15, 30),
    });
  }
  let V = [],
    Re = [],
    H = (() => {
      let e = s.flares ?? {},
        t = e.glow ?? 1,
        n = (e) => new p(e).multiplyScalar(t).getHex();
      return {
        size: e.size ?? 1,
        hot: Math.min(1, t),
        c0: n(16775400),
        c1: n(16769200),
        every: e.every ?? [8, 18],
      };
    })();
  function ze(e) {
    for (let t = V.length - 1; t >= 0; t--) {
      let n = V[t];
      if (((n.t += e), n.t > n.life || n.p[1] < T + 5)) {
        V.splice(t, 1);
        continue;
      }
      ((n.p[0] += S[0] * e * 1.5),
        (n.p[1] -= 3.2 * e),
        (n.p[2] += S[2] * e * 1.5));
      let r = Math.min(1, n.t * 2) * Math.min(1, (n.life - n.t) / 3);
      (j.spawn({
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
          A.spawn({
            p: [n.p[0], n.p[1] + 2, n.p[2]],
            v: [0, 0.6, 0],
            life: v(6, 9),
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
        j.spawn({
          p: [e[0] + v(-2, 2) * t, e[1] + v(0, 2), e[2] + v(-2, 2) * t],
          v: [v(-1, 1), v(3, 7) * t, v(-1, 1)],
          life: v(0.5, 1.1),
          s0: v(5, 9) * t,
          s1: 2 * t,
          c0: 16756808,
          c1: 11545096,
          a: 0.85,
          hot: 0.7,
        }),
        h() < 0.6 &&
          A.spawn({
            p: [e[0] + v(-2, 2), e[1] + 3 * t, e[2] + v(-2, 2)],
            v: [v(-1, 1), v(6, 10) * Math.sqrt(t), v(-1, 1)],
            life: v(15, 22),
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
      D.filter(
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
      r = ne[e.cls].gun;
    if (!r.length) return;
    let i = e.cls === `cruiser` ? 1.4 : e.cls === `patrol` ? 0.5 : 1.1,
      a =
        e.cls === `cruiser`
          ? 3
          : e.cls === `destroyer`
            ? 2 + (h() < 0.4)
            : e.cls === `patrol`
              ? 4
              : 1 + (h() < 0.5);
    for (let t = 0; t < a; t++) {
      let a = I(e, r[t % r.length]),
        o = [n.pos.x - a[0], 0, n.pos.z - a[2]],
        s = Math.hypot(o[0], o[2]);
      ((o[0] /= s), (o[2] /= s), (o[1] = 0.25));
      let c = h() < 0.28,
        l = c
          ? [v(-0.3, 0.3) * n.L, 0, v(-4, 4)]
          : [v(-1, 1) * (25 + n.L * 0.5), 0, v(-1, 1) * 45],
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
      n = ne[e.cls];
    if (!t.length || !n.vls) return;
    let r = x(t),
      i = 1 + Math.floor(h() * (e.cls === `cruiser` ? 4 : 3));
    for (let t = 0; t < i; t++)
      Z.push({
        at: Q + t * v(0.35, 0.7),
        fn: () => {
          if (!G(e)) return;
          let i = I(e, [n.vls[0] + v(-3, 3), n.vls[1], n.vls[2]], [0, 0, 0]);
          (R(i, 16, 16775392, 0.25),
            Ae(i, 10, {
              size: 9,
              grow: 2.8,
              life: 7,
              c0: 15131870,
              c1: 11052704,
              rise: 7,
              spread: 3,
              a: 0.85,
            }),
            Ee(`rocket_launch`, i, { volume: 1.3, pitch: 0.7 }),
            W.push({
              a: i,
              tg: r,
              t: 0,
              climb: 1.2 + t * 0.15,
              T: Math.hypot(r.pos.x - i[0], r.pos.z - i[2]) / 300 + 1.4,
              trailT: 0,
              intercept: h() < 0.4,
              done: !1,
              ciwsT: 0,
              last: i.slice(),
              chaff: !1,
              wob: h() * 9,
            }),
            we(i, !1));
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
          T + (n.hit ? 6 : 0.5),
          n.tg.pos.z + n.off[2],
        ];
      ((We[0] = n.a[0] + (i[0] - n.a[0]) * r),
        (We[2] = n.a[2] + (i[2] - n.a[2]) * r),
        (We[1] = n.a[1] + (i[1] - n.a[1]) * r + n.apex * 4 * r * (1 - r)),
        j.spawn({
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
          n.hit && G(n.tg) ? (z(i, n.big), Fe(n.tg, n.dmg, i)) : B(i, n.big)));
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
          o = [n.tg.pos.x, T + 7, n.tg.pos.z],
          s = 70 + -38 * Math.min(1, i / 0.3);
        r = [
          a[0] + (o[0] - a[0]) * i,
          i < 0.82 ? T + s : T + 7 + 25 * (1 - (i - 0.82) / 0.18),
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
          let a = ne[n.tg.cls].ciws;
          if (n.ciwsT <= 0 && a.length) {
            n.ciwsT = 0.035;
            let e = I(n.tg, x(a));
            ((n.ciwsS = (n.ciwsS ?? 0) - 0.035),
              n.ciwsS <= 0 &&
                ((n.ciwsS = 0.45),
                Ee(`gun_lmg`, e, { volume: 0.6, pitch: 1.8, cost: 0.5 })));
            let t = r[0] - e[0],
              i = r[1] - e[1],
              o = r[2] - e[2],
              s = Math.hypot(t, i, o),
              c = 1100;
            j.spawn({
              p: e,
              v: [
                (t / s) * c + v(-25, 25),
                (i / s) * c + v(-25, 25),
                (o / s) * c + v(-25, 25),
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
            ((n.done = !0), W.splice(t, 1), z(r, 0.55));
            continue;
          }
        }
        if (i >= 1) {
          (W.splice(t, 1), z(r, 1.8), G(n.tg) ? Fe(n.tg, 3, r) : B(r, 1.4));
          continue;
        }
      }
      for (
        j.spawn({
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
        A.spawn({
          p: [
            r[0] + (n.last[0] - r[0]) * e,
            r[1] + (n.last[1] - r[1]) * e,
            r[2] + (n.last[2] - r[2]) * e,
          ],
          v: [v(-0.6, 0.6), v(0.2, 1), v(-0.6, 0.6)],
          life: v(4, 6),
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
      (P.set(t[0], t[1], t[2])
        .sub(e.pos)
        .applyQuaternion(he.copy(e.q).invert()),
      e.fires.push({
        local: [Math.max(-e.L * 0.45, Math.min(e.L * 0.45, P.x)), 7, 0],
        t: 0,
        until: Q + v(50, 140),
        scale: v(0.6, 1),
      }));
  }
  let K = s.stage ?? [0, 0],
    qe = (e) => {
      let t = D.filter(
        (t) =>
          G(t) &&
          t.side === e &&
          t.cls !== `landing` &&
          Math.hypot(t.pos.x - K[0], t.pos.z - K[1]) < 700,
      );
      t.length || (t = D.filter((t) => !t.wreck && t.side === e));
      let n = [0, 0];
      for (let e of t)
        ((n[0] += e.pos.x / t.length), (n[1] += e.pos.z / t.length));
      return n;
    };
  function Je(e) {
    let t = O.find((e) => !e.active);
    if (!t) return;
    let n = qe(e.side),
      r = qe(1 - e.side),
      i = r[0] - n[0],
      a = r[1] - n[1],
      o = Math.hypot(i, a) || 1,
      s = i / o,
      c = a / o,
      l = v(-160, 160),
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
      down: h() < 0.2 ? v(0.55, 0.75) : 1 / 0,
      fall: 0,
      flakT: 0,
      trailT: 0,
      pos: [u[0], T + e.alt, u[1]],
      dir: [s, 0, c],
      yaw: Math.atan2(-c, s),
    });
  }
  let q = (s.helos ?? []).map(([e, t, n, r, i], a) => ({
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
    let t = oe();
    (t
      .box(-5.5, -1.2, -1.3, 4.5, 1.3, 1.3, w.dark)
      .box(4.5, -0.7, -0.95, 6.4, 1, 0.95, w.glass)
      .box(-13, 0.1, -0.35, -5.5, 0.8, 0.35, w.dark)
      .box(-13.4, 0.4, -0.15, -12, 3.1, 0.15, w.dark)
      .box(-3.5, -2.1, -1.5, 3.5, -1.9, -1.3, w.dark)
      .box(-3.5, -2.1, 1.3, 3.5, -1.9, 1.5, w.dark)
      .box(-0.4, 1.3, -0.4, 0.4, 1.9, 0.4, w.dark)
      .box(-7.5, 1.9, -0.22, 7.5, 1.97, 0.22, w.dark)
      .box(-0.22, 1.9, -7.5, 0.22, 1.97, 7.5, w.dark),
      (J = new ee(t.geometry(), E, q.length)),
      (J.name = `naval-helos`),
      (J.frustumCulled = !1),
      u.add(J));
    let n = new o(1, 1, 20, 1, !0);
    n.translate(0, -0.5, 0);
    let i = new r(1, 28);
    i.rotateX(-Math.PI / 2);
    let a = new f({
        color: 16773590,
        transparent: !0,
        opacity: s.helosBeam ?? 0.005,
        blending: 2,
        depthWrite: !1,
        side: 2,
        fog: !1,
      }),
      c = new f({
        color: 16773590,
        transparent: !0,
        opacity: s.helosSpot ?? 0.07,
        blending: 2,
        depthWrite: !1,
        fog: !1,
      });
    for (let t = 0; t < q.length; t++) {
      let t = new e(n, a),
        r = new e(i, c);
      ((t.frustumCulled = r.frustumCulled = !1),
        (t.renderOrder = r.renderOrder = 462),
        u.add(t, r),
        Ye.push({ cone: t, spot: r }));
    }
    Xe.push(n, i, a, c);
  }
  let Ze = new i(0, -1, 0),
    Qe = new i(),
    $e = new i(0, 0, 1),
    Y = s.lightning ?? null,
    et = Y ? new b(13162751, 1844272, 0) : null;
  et && ((et.name = `naval-lightning`), u.add(et));
  let tt = Y ? v(6, 14) : 1 / 0,
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
    ((tt = v(Y.every?.[0] ?? 12, Y.every?.[1] ?? 28)), (X = 0));
    let n = h() * Math.PI * 2,
      r = v(500, 1100),
      i = K[0] + Math.cos(n) * r,
      a = K[1] + Math.sin(n) * r,
      o = [i + v(-60, 60), T + v(380, 460), a + v(-60, 60)];
    for (let e = 0; e < 14; e++) {
      let t = (e + 1) / 14,
        n = [
          i + v(-18, 18) * (1 - t),
          T + (o[1] - T) * (1 - 1 / (14 - e)),
          a + v(-18, 18) * (1 - t),
        ];
      for (let e = 0; e < 10; e++)
        j.spawn({
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
    let t = s.helosDeck ?? [90, 10],
      n = s.helosDeckY ?? T;
    (q.forEach((r, i) => {
      let a = r.phase + (Q * 2 * Math.PI) / r.period,
        o = K[0] + Math.cos(a) * r.rx,
        s = K[1] + Math.sin(a) * r.rz,
        c = T + r.alt + 3 * Math.sin(Q * 0.7 + i * 2),
        l = Math.atan2(-Math.cos(a) * r.rz, -Math.sin(a) * r.rx);
      (N.setFromAxisAngle(ye, l).multiply(
        he.setFromAxisAngle($e, -0.09 + 0.03 * Math.sin(Q * 0.5 + i)),
      ),
        M.compose(P.set(o, c, s), N, ve),
        J.setMatrixAt(i, M));
      let u = K[0] + t[0] * Math.sin(Q * 0.09 + i * 2.3),
        d = K[1] + t[1] * Math.sin(Q * 0.31 + i * 1.7),
        f = c - 2.2;
      Qe.set(u - o, n - f, d - s);
      let p = Qe.length();
      Qe.multiplyScalar(1 / p);
      let m = Math.max(3.5, p * 0.055),
        h = Ye[i];
      if (
        (h.cone.position.set(o, f, s),
        h.cone.quaternion.setFromUnitVectors(Ze, Qe),
        h.cone.scale.set(m, p, m),
        h.spot.position.set(u, n + 0.14, d),
        h.spot.scale.set(m * 1.15, 1, m * 1.15),
        (r.gunT = (r.gunT ?? 4 + i * 3) - e),
        r.gunT <= 0)
      ) {
        ((r.burst = v(1.2, 2.2)), (r.gunT = v(7, 13)));
        let e = a + v(-0.6, 0.6);
        r.aim = [
          K[0] + Math.cos(e) * (r.rx + v(120, 260)),
          T,
          K[1] + Math.sin(e) * (r.rz + v(120, 260)),
        ];
      }
      if (r.burst > 0)
        for (r.burst -= e, r.fireT = (r.fireT ?? 0) - e; r.fireT <= 0;) {
          r.fireT += 0.07;
          let e = [o, c - 1.2, s],
            t = r.aim[0] - o,
            n = r.aim[1] - e[1],
            i = r.aim[2] - s,
            a = Math.hypot(t, n, i);
          j.spawn({
            p: e,
            v: [
              (t / a) * 700 + v(-12, 12),
              (n / a) * 700,
              (i / a) * 700 + v(-12, 12),
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
      (Oe(`helo-` + i, `vehicle_rotor`, [o, c, s], { volume: 0.18, rpm: 0.85 }),
        r.burst > 0 &&
          ((r.gunS = (r.gunS ?? 0) - e),
          r.gunS <= 0 &&
            ((r.gunS = 0.32),
            Ee(`gun_lmg`, [o, c - 1, s], {
              volume: 0.45,
              pitch: 1.15,
              cost: 0.4,
            }))),
        (r.blinkT -= e),
        r.blinkT <= 0 &&
          ((r.blinkT = 1.1),
          j.spawn({
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
    for (let t of O) {
      if (!t.active) {
        k.setMatrixAt(t.i, F);
        continue;
      }
      t.t += e;
      let n = t.t / t.T;
      if (n < t.down) {
        t.pos = [
          t.start[0] + (t.end[0] - t.start[0]) * n,
          T + t.alt + 12 * Math.sin(n * 9),
          t.start[1] + (t.end[1] - t.start[1]) * n,
        ];
        let r = D.filter((e) => G(e) && e.side === 1 - t.side),
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
              ((t.flakT = v(0.12, 0.4)),
              Me([
                t.pos[0] - t.dir[0] * v(20, 90) + v(-40, 40),
                t.pos[1] + v(-30, 30),
                t.pos[2] - t.dir[2] * v(20, 90) + v(-40, 40),
              ]))),
          i &&
            a < 420 &&
            ne[i.cls].ciws.length &&
            ((t.ciwsT = (t.ciwsT ?? 0) - e), t.ciwsT <= 0))
        ) {
          t.ciwsT = 0.045;
          let e = I(i, x(ne[i.cls].ciws), [0, 0, 0]),
            n = t.pos[0] - t.dir[0] * v(10, 60),
            r = t.pos[1] + v(-15, 15),
            a = t.pos[2] - t.dir[2] * v(10, 60),
            o = n - e[0],
            s = r - e[1],
            c = a - e[2],
            l = Math.hypot(o, s, c),
            u = 1e3;
          j.spawn({
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
          let e = [i.pos.x + v(-0.3, 0.3) * i.L, T + 5, i.pos.z + v(-6, 6)];
          Z.push({
            at: Q + 1.6,
            fn: () => {
              h() < 0.55 && G(i)
                ? (z(e, 1.5), Fe(i, 2, e))
                : (B([e[0] + v(-40, 40), 0, e[2] + v(-40, 40)], 1.5),
                  B([e[0] + v(-40, 40), 0, e[2] + v(-40, 40)], 1.2));
            },
          });
          for (let e = 0; e < 6; e++)
            j.spawn({
              p: t.pos.slice(),
              v: [v(-20, 20), v(-12, 4), v(-20, 20)],
              life: v(1.4, 2.4),
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
          ((t.active = !1), k.setMatrixAt(t.i, F));
          continue;
        }
      } else if (
        (t.fall ||
          ((t.fall = 0.001),
          (t.vel = [t.dir[0] * t.speed * 0.8, 0, t.dir[2] * t.speed * 0.8]),
          z(t.pos, 0.6)),
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
          j.spawn({
            p: t.pos.slice(),
            life: 0.5,
            s0: 5,
            s1: 2,
            c0: 16752704,
            c1: 9445384,
            a: 0.9,
            hot: 0.8,
          }),
          A.spawn({
            p: t.pos.slice(),
            v: [0, 1, 0],
            life: v(6, 9),
            s0: 4,
            s1: 16,
            c0: 2104860,
            c1: 5591630,
            a: 0.85,
            drag: 0.3,
            wind: 0.8,
          })),
        t.pos[1] <= T)
      ) {
        (B(t.pos, 1.5),
          z([t.pos[0], T + 1, t.pos[2]], 0.8),
          (t.active = !1),
          k.setMatrixAt(t.i, F));
        continue;
      }
      (N.setFromAxisAngle(ye, t.yaw),
        ge.setFromAxisAngle(
          P.set(1, 0, 0),
          t.fall ? t.fall * 3 : 0.15 * Math.sin(t.t * 1.3),
        ),
        N.multiply(ge),
        M.compose(P.set(t.pos[0], t.pos[1], t.pos[2]), N, ve),
        k.setMatrixAt(t.i, M));
    }
    k.instanceMatrix.needsUpdate = !0;
  }
  let Z = [],
    Q = 0,
    at = 4,
    ot = -20,
    $ = [0, 0, 0];
  function st(e, t) {
    ((Q += e),
      (Ce = t),
      (Se = Math.min(L ? 3 : 2, Se + e * (L ? 0.8 : 0.45))),
      (Te = Math.min(3, Te + e * 0.9)));
    for (let t of D) (t.hidden && Q >= t.respawnAt && Le(t), be(t, Q, e));
    for (let e of de.values()) e.instanceMatrix.needsUpdate = !0;
    for (let n of D)
      if (!n.hidden) {
        if (!n.wreck && n.spd > 0.15) {
          if (((n.wakeT -= e), n.wakeT <= 0)) {
            n.wakeT = n.cls === `patrol` ? 0.08 : 0.16;
            let e = ae[n.cls][1],
              t = C[n.cls];
            for (let r of [-1, 1])
              (I(n, [-n.L * 0.5, 0, r * e * 0.3], $),
                ($[1] = T + 0.4),
                A.spawn({
                  p: $.slice(),
                  v: [v(-0.5, 0.5), 0, v(-0.5, 0.5)],
                  life: v(7, 11) * Math.min(1.4, t / 10),
                  s0: e * 0.45,
                  s1: e * 1.7,
                  c0: 16186104,
                  c1: 11979472,
                  a: 0.6,
                  drag: 0.2,
                  hot: -1,
                }));
            (I(n, [n.L * 0.47, 0, 0], $),
              ($[1] = T + 0.6),
              A.spawn({
                p: $.slice(),
                v: [v(-1, 1), 0, v(-1, 1)],
                life: v(2, 3.5),
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
                  ? v(3, 6)
                  : n.cls === `patrol`
                    ? v(1.5, 4)
                    : v(3.5, 8)),
              He(n)),
            (n.vlsT -= e),
            n.vlsT <= 0 && ((n.vlsT = v(14, 32)), Ue(n)));
        } else
          n.dying
            ? ((n.secT = (n.secT ?? 0) - e),
              n.secT <= 0 &&
                ((n.secT = v(2, 7)),
                z(I(n, [v(-0.4, 0.4) * n.L, 8, 0], [0, 0, 0]), v(0.6, 1.2), t)))
            : n.wreck &&
              ((n.secT -= e),
              n.secT <= 0 &&
                ((n.secT = v(18, 40)),
                z(
                  I(n, [v(-0.3, 0.3) * n.L, 8, 0], [0, 0, 0]),
                  v(0.7, 1.3),
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
    for (let t of me) Be(t.p, t.scale, e, t);
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
        ((at = v(H.every[0], H.every[1])),
        V.push({
          p: [K[0] + v(-150, 150), T + v(200, 280), K[1] + v(-250, 250)],
          t: 0,
          life: v(35, 50),
          sT: 0,
        })),
      ze(e));
    for (let e of pe)
      Q >= e.next && ((e.next = Q + e.period * v(0.8, 1.2)), Je(e));
    (it(e), rt(e), nt(e, t), Ge(e, Q));
    for (let e = Z.length - 1; e >= 0; e--)
      if (Q >= Z[e].at) {
        let t = Z[e];
        (Z.splice(e, 1), t.fn());
      }
    (A.step(e), j.step(e));
  }
  for (let e = 0; e < 90; e++) st(0.2, !1);
  let ct = s.navLights
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
      for (let e of D) {
        if (e.wreck || e.hidden || !e.q) continue;
        let [t, n] = ae[e.cls];
        for (let [r, i, a, o, s] of ct)
          (I(e, [t * r, t * i, n * a], lt),
            j.spawn({
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
  let dt = new d();
  return {
    group: u,
    update(e) {
      let n = Math.min(Math.max(e || 0, 0), 0.1),
        r = t.camera,
        i = t.renderer;
      if (r && i) {
        i.getSize(dt);
        let e =
          (dt.y * i.getPixelRatio()) /
          (2 * Math.tan(c.degToRad(r.fov ?? 60) / 2));
        A.mat.uniforms.uScale.value = j.mat.uniforms.uScale.value = e;
      }
      (st(n, !0), ut());
    },
    stats() {
      return {
        ships: D.filter((e) => !e.wreck).length,
        wrecks: D.filter((e) => e.wreck).length,
        classes: ce.length,
        smoke: A.alive,
        glow: j.alive,
        shells: U.length,
        missiles: W.length,
        jets: O.filter((e) => e.active).length,
        sinking: D.filter((e) => e.dying).length,
        sunk: D.filter((e) => e.hidden).length,
        flares: V.length,
        helos: q.length,
        time: Q,
      };
    },
    dispose() {
      a.remove(u);
      for (let e of [...De.keys()]) ke(e);
      for (let e of de.values()) e.geometry.dispose();
      (k.geometry.dispose(), J?.geometry.dispose());
      for (let e of Xe) e.dispose();
      (E.dispose(),
        A.geo.dispose(),
        A.mat.dispose(),
        j.geo.dispose(),
        j.mat.dispose());
    },
  };
}
