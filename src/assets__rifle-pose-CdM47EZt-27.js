// assets__rifle-pose-CdM47EZt 27 — freeze
// Lines 30602-30904 of readable/assets__rifle-pose-CdM47EZt.pretty.js (statement-aligned).
function Yr(e, t, n, r) {
  let i = new M();
  i.name = `sight_kit_` + t.kit;
  let a = Gr(n, t);
  (i.position.set(0, n.top, a), (i.rotation.y = Math.PI / 2), e.add(i));
  let o = Pr(i, t.kit, { see: !0, lite: !r?.reticle && `mid` }),
    s = new Map();
  i.traverse((e) => {
    if (e.isMesh) {
      if (!s.has(e.material)) {
        let t = e.material.clone();
        (s.set(e.material, t), r?.disposables?.push(t));
      }
      e.material = s.get(e.material);
    }
  });
  let c = (e, t) => new L(0, n.top + t, a - e),
    l = c(o.plane, o.eye),
    u = [],
    d = null;
  if (r?.reticle) {
    let n = document.createElement(`canvas`);
    n.width = n.height = 256;
    let i = new h(n);
    i.colorSpace = N;
    let a = de(),
      s = a.shape !== "default";
    try {
      s
        ? me(n.getContext(`2d`), 256, _e(t.type, a))
        : Er(
            n.getContext(`2d`),
            256,
            a && fe[a.color]?.css
              ? { ...o.def.reticle, color: fe[a.color].css }
              : o.def.reticle,
          );
    } catch {}
    let c = new ie({
      map: i,
      transparent: !0,
      depthTest: r.reticle.material.depthTest,
      depthWrite: !1,
      toneMapped: !1,
      side: 2,
    });
    (r.disposables.push(c, i),
      (d = new _(new D(1, 1), c)),
      (d.name = `sight_reticle`),
      (d.renderOrder = 40),
      d.position.copy(l),
      (d.userData.extent = s ? pe : o.def.reticle.extent),
      (d.userData.size = _e(t.type, a).scale),
      (d.userData.idle = 2 * Math.min(o.aperture[0], o.aperture[1])),
      d.scale.setScalar(d.userData.idle),
      e.add(d),
      (u = [d]));
  }
  return {
    aim: l,
    reticle: d,
    reticles: u,
    aperture: o.aperture,
    kit: { group: i, z: a, meta: o, rear: c(o.rear ?? -0.03, o.eye) },
  };
}
var Xr = Object.freeze({
    0: Object.freeze({
      name: `VG-24 VANGUARD`,
      eyeDistance: 0.085,
      gunFov: 39,
      hipTurn: [0, 0, 0],
      sight: `cmore`,
      rail: 0,
      rails: {},
    }),
    11: Object.freeze({
      name: `HB-7 HALBERD`,
      eyeDistance: 0.12,
      gunFov: 47,
      hipTurn: [0, 0, 0],
      sight: `hs510c`,
      rail: 0.039,
      rails: { t2: 0.045, hs510c: 0.039 },
    }),
    12: Object.freeze({
      name: `LR-3 LANCER`,
      eyeDistance: 0.215,
      gunFov: 42,
      hipTurn: [0, 0, 0],
      sight: `cmore`,
      rail: 0.025,
      rails: { cmore: 0.025 },
    }),
    14: Object.freeze({
      name: `ML-762 MAULER`,
      eyeDistance: 0.155,
      gunFov: 42,
      hipTurn: [0, 0, 0],
      sight: `cmore`,
      rail: 0,
      rails: {},
    }),
    15: Object.freeze({
      name: `PD-1 PALADIN`,
      eyeDistance: 0.12,
      gunFov: 45,
      hipTurn: [0, 0, 0],
      sight: `hs510c`,
      rail: -0.038,
      rails: { hs510c: -0.038 },
    }),
    35: Object.freeze({
      name: `FC-5 FALCHION`,
      eyeDistance: 0.26,
      gunFov: 46,
      hipTurn: [0, 0, 0],
      sight: `hs510c`,
      rail: 0.023,
      rails: { hs510c: 0.023 },
    }),
    37: Object.freeze({
      name: `SL-3 STARLING`,
      eyeDistance: 0.12,
      gunFov: 54,
      hipTurn: [0, 0, 0],
      sight: `hs510c`,
      rail: -0.071,
      rails: { hs510c: -0.071 },
    }),
    38: Object.freeze({
      name: `VS-9 VESPER`,
      eyeDistance: 0.12,
      gunFov: 54,
      hipTurn: [0, 0, 0],
      sight: `cmore`,
      rail: 0,
      rails: {},
    }),
    40: Object.freeze({
      name: `GF-11 GRIFFON`,
      eyeDistance: 0.12,
      gunFov: 54,
      hipTurn: [0, 0, 0],
      sight: `cmore`,
      rail: 0,
      rails: {},
    }),
    42: Object.freeze({
      name: `SA-16 SAKER`,
      eyeDistance: 0.17,
      gunFov: 45,
      hipTurn: [0, 0, 0],
      sight: `hs510c`,
      rail: 0.174,
      rails: { hs510c: 0.174 },
    }),
  }),
  Zr = Object.freeze({ eyeDistance: 0.12 });
function Y(e, t, n = 0.05, r = 0.7, i = {}) {
  let a = new b({ color: t, metalness: n, roughness: r, ...i });
  return (e.root.userData.materials.push(a), a);
}
function X(e, t, n, r, i, a, o, s, c = 0.0012) {
  let l = Math.min(4e-4, c / 3);
  return s === `y`
    ? e.rbox(t, n, r, i, a, c, o, l)
    : s === `x`
      ? e.rbox(t, n, r, i, c, o, a, l)
      : e.rbox(t, n, r, i, a, o, c, l);
}
function Qr(e, t, n, r, i, a, o, s) {
  (X(e, t, n, r, i, a, a / 3, o, s), X(e, t, n, r, i, a / 3, a, o, s));
}
function $r(e, t, n, r, i, a, o, s = 2, c = 0.01) {
  let l = [0.6, 0.35, 0.85, 0.5, 0.3, 0.7, 0.45, 0.9, 0.4];
  for (let u = 0; u < s; u++) {
    let d = a * (1 - u * 0.22),
      f = ((s - 1) / 2) * c * 1.7 - u * c * 1.7,
      p = -d / 2,
      m = u * 3;
    for (; p < d / 2 - c * 0.4;) {
      let a = Math.min(l[m++ % l.length] * c * 3, d / 2 - p),
        s = p + a / 2;
      (o === `z`
        ? X(e, t, n + s, r + f, i, a, c, `z`, 8e-4)
        : o === `y`
          ? X(e, t, n + s, r, i - f, a, c, `y`, 8e-4)
          : X(e, t, n, r + f, i + s, a, c, `x`, 8e-4),
        (p += a + c * 0.55));
    }
  }
}
function ei(e, n, r, i = 0.0032, a = 0, o = 0) {
  let s = new t(r.map((e) => new L(...e)));
  if (a) {
    let e = Math.max(40, o * 14),
      n = [],
      r = new L(0, 1, 0),
      i = new L(1, 0, 0);
    for (let t = 0; t <= e; t++) {
      let c = t / e,
        l = s.getPoint(c),
        u = s.getTangent(c),
        d = Math.min(1, c * 8, (1 - c) * 8),
        f = new L().crossVectors(u, Math.abs(u.y) > 0.9 ? i : r).normalize(),
        p = new L().crossVectors(u, f),
        m = c * o * Math.PI * 2;
      n.push(
        l
          .add(f.multiplyScalar(Math.cos(m) * a * d))
          .add(p.multiplyScalar(Math.sin(m) * a * d)),
      );
    }
    s = new t(n);
  }
  let c = e.lite === !0;
  return e.mesh(new d(s, c ? 24 : a ? o * 16 : 48, i, c ? 5 : 8, !1), n);
}
function ti(e, t, n, r) {
  let i = new M();
  return (
    i.position.set(0, t, n),
    (i.rotation.x = -r),
    e.root.add(i),
    dn(i, e.m, e.lite)
  );
}
function Z(e, { eye: t, front: n, top: r, hands: i }) {
  ((e.irons = { eye: t, rear: t[0], front: n[0] }),
    (e.barrel = { pos: n, radius: 0.01 }),
    (e.muzzle = n),
    (e.rail = { pos: r, length: 0.1, zone: [r[0] - 0.05, r[0] + 0.05] }),
    (e.hands = i),
    (e.stockEnd = Math.min(0, t[0] - 0.05)),
    (e.charging = r));
}
function ni(e, t, n) {
  let { rbox: r, sculpt: i, tube: a, ring: o } = e,
    s = 0.13,
    c = n.h ?? 0.118,
    l = n.w ?? 0.082;
  (r(n.rim, 0.124, 0, t, 0.008, c + 0.008, l + 0.008, 0.005),
    r(`bright`, 0.1285, 0, t, 0.003, c, l, 0.008),
    i(
      n.body,
      [
        [0.12100000000000001, -c / 2 - 0.002],
        [0.12100000000000001, c / 2 + 0.002],
        [0.1, c / 2 - 0.006],
        [0.07200000000000001, 0.03],
        [0.066, -0.004],
        [0.08, -c / 2 + 0.012],
      ],
      l - 0.012,
      t,
      0.004,
    ),
    i(
      n.grip,
      [
        [0.082, 0.034],
        [-0.048999999999999995, 0.03],
        [-0.059, 0.02],
        [-0.059, -0.006],
        [-0.04499999999999999, -0.016],
        [0.064, -0.014],
        [0.082, -0.004],
      ],
      0.036,
      t,
      0.006,
    ));
  for (let e = 0; e < 4; e++)
    r(
      n.grip,
      0.04000000000000001 - e * 0.022,
      -0.017,
      t,
      0.01,
      0.006,
      0.032,
      0.002,
    );
  for (let [r, i, c = 0.0068] of n.buttons)
    (a(i, s + r, 0.034, t, c, 0.007, `y`),
      e.lite || o(`rubber`, s + r, 0.031, t, c + 0.0012, 0.0012, `y`));
  return (
    n.label &&
      e.rbox(
        n.label,
        0.094,
        0.012,
        t + Math.sign(t) * (l / 2 - 0.005),
        0.03,
        0.014,
        0.0012,
        4e-4,
      ),
    a(n.grip, -0.07699999999999999, 0.006, t, 0.0048, 0.036, `x`, 0.0095),
    { back: [-0.095, 0.006, t], hand: [0.015000000000000006, 0.008, t] }
  );
}
