// assets__animation-Bs1XLGoh 14 — math
// Lines 3964-4301 of readable/assets__animation-Bs1XLGoh.pretty.js (statement-aligned).
function Ra(e) {
  let t = [];
  return {
    drop(n, r, i = Math.random) {
      let a = e.magMatrix?.(n, r, Ea, ja);
      if (!a) return;
      let o = e.magSize?.(n);
      if (!o) return;
      let c = new s(),
        l = new b(),
        u = new s();
      (a.decompose(c, l, u),
        t.length >= Oa && t.shift(),
        Pa.set(i() - 0.5, -0.4, i() - 0.5).multiplyScalar(0.6),
        t.push({
          def: n,
          pos: c,
          quat: l,
          s: u.x,
          size: o,
          vel: Pa.clone(),
          ang: new s((i() - 0.5) * 7, (i() - 0.5) * 3, (i() - 0.5) * 7),
          age: 0,
          rest: 0,
          restQ: null,
        }));
    },
    step(e, n) {
      for (let r = t.length - 1; r >= 0; r--) {
        let i = t[r];
        if (((i.age += e), i.age > Da)) {
          t.splice(r, 1);
          continue;
        }
        let a = (i.size[0] * i.s) / 2,
          o = (Math.max(...i.size) * i.s) / 2,
          s = n(i.pos.x, i.pos.z);
        if (i.restQ) {
          ((i.rest = Math.min(1, i.rest + e / 0.15)),
            i.quat.slerp(i.restQ, i.rest),
            (i.pos.y += (s + a - i.pos.y) * Math.min(1, e * 20)));
          continue;
        }
        ((i.vel.y -= 9.8 * e),
          i.pos.addScaledVector(i.vel, e),
          i.ang.lengthSq() > 0 &&
            (Ma.setFromAxisAngle(
              Ia.copy(i.ang).normalize(),
              i.ang.length() * e,
            ),
            i.quat.premultiply(Ma)));
        let c =
          a + (o - a) * Math.abs(Ia.set(0, 1, 0).applyQuaternion(i.quat).y);
        if (
          i.pos.y - c <= s &&
          i.vel.y < 0 &&
          ((i.pos.y = s + c),
          (i.vel.y = -i.vel.y * ka),
          (i.vel.x *= 0.5),
          (i.vel.z *= 0.5),
          i.ang.multiplyScalar(0.45),
          i.vel.y < Aa)
        ) {
          Ia.copy(La).applyQuaternion(i.quat);
          let e = Ia.y > 0 ? -1 : 1;
          Fa.set(0, 0, -1).applyQuaternion(i.quat);
          let t = Math.atan2(-Fa.x, -Fa.z);
          ((i.restQ = new b().setFromEuler(
            Na.set(0, t, (e * Math.PI) / 2, `YXZ`),
          )),
            (i.rest = 0));
        }
      }
    },
    present() {
      for (let n of t)
        e.putMag?.(n.def, ja.compose(n.pos, n.quat, Fa.setScalar(n.s)));
    },
    count: () => t.length,
    clear() {
      t.length = 0;
    },
  };
}
var Q = Object.freeze({
    maxFov: 30,
    cone: 0.975,
    full: 0.997,
    near: 12,
    fadeIn: 25,
    max: 8,
    px: 26,
    minPx: 14,
    gain: 8,
    lensAhead: 0.38,
    sun: 0.35,
    reveal: 22,
    rise: 9,
    fall: 14,
    night: 0.35,
    viewCone: Math.cos((30 * Math.PI) / 180),
    viewFull: Math.cos((20 * Math.PI) / 180),
  }),
  za = (e, t, n) => {
    let r = Math.max(0, Math.min(1, (n - e) / (t - e)));
    return r * r * (3 - 2 * r);
  };
function Ba(e, t, n = 1) {
  return (
    za(Q.cone, Q.full, e) * za(Q.near, Q.near + Q.fadeIn, t) * Math.min(1.25, n)
  );
}
function Va(e) {
  if (e?.type !== `scope`) return 0;
  let t = Math.min(...(e.fovs ?? [e.fov]));
  return t <= Q.maxFov
    ? e.thermal
      ? 1.15
      : t <= 7
        ? 1.2
        : Math.min(...(e.fovs ?? [99])) >= 12 && e.fovs?.length
          ? 0.8
          : 1
    : 0;
}
var Ha = (e) => za(Q.viewCone, Q.viewFull, e),
  Ua = (e) => (Ut(e) ? Va(e.optic) : 0),
  Wa = (e) => 1 - Q.sun + Q.sun * za(-0.4, 0.7, e),
  Ga = (e, t = 1e3) =>
    (Q.minPx + (Q.px - Q.minPx) * Math.min(1, Math.max(0, e))) *
    (0.55 + 0.45 * za(25, 110, t)),
  Ka = (e, t, n, r) =>
    (e * 2 * t * Math.tan((n * Math.PI) / 360)) / Math.max(1, r);
function qa(e, t) {
  let n = t * 2.399,
    r =
      0.5 +
      0.5 *
        (0.5 * Math.sin(e * 1.27 + n) +
          0.3 * Math.sin(e * 3.71 + n * 1.9) +
          0.2 * Math.sin(e * 8.3 + n * 3.1));
  return 0.55 + 0.45 * r * r;
}
function Ja(e, t) {
  let n = Math.hypot(e, t),
    r = Math.abs(e),
    i = Math.abs(t),
    a = 12 * Math.exp(-((n / 0.085) ** 2)),
    o = 1.3 * Math.exp(-((n / 0.2) ** 2)),
    s = 0.3 * Math.exp(-n / 0.28),
    c =
      1.1 * Math.exp(-i / 0.025) * Math.exp(-r / 0.22) +
      0.6 * Math.exp(-r / 0.025) * Math.exp(-i / 0.14);
  return (a + o + s + c) * (1 - za(0.72, 1, n));
}
function Ya() {
  let e = document.createElement(`canvas`);
  e.width = e.height = 128;
  let t = e.getContext(`2d`),
    n = t.createImageData(128, 128);
  for (let e = 0; e < 128; e++)
    for (let t = 0; t < 128; t++) {
      let r = Ja((t + 0.5 - 64) / 64, (e + 0.5 - 64) / 64),
        i = Math.min(1, r / 3),
        a = (e * 128 + t) * 4;
      ((n.data[a] = 255),
        (n.data[a + 1] = Math.round(255 * (0.88 + 0.12 * i))),
        (n.data[a + 2] = Math.round(255 * (0.7 + 0.3 * i))),
        (n.data[a + 3] = Math.round(255 * Math.min(1, r / Q.gain))));
    }
  t.putImageData(n, 0, 0);
  let r = new oe(e);
  return ((r.colorSpace = _), r);
}
function Xa(t, n = null, r = null) {
  let i = Ya(),
    a = new S();
  ((a.name = `scope_glints`), t.add(a));
  let o = Array.from({ length: Q.max }, () => {
      let t = new e({
          map: i,
          color: new h(Q.gain, Q.gain, Q.gain),
          transparent: !0,
          depthWrite: !1,
          blending: 2,
          fog: !1,
        }),
        n = new w(t);
      return ((n.visible = !1), (n.renderOrder = 60), a.add(n), n);
    }),
    c = new Map(),
    l = [0, 0, 0],
    u = [],
    d = new s(),
    f = new s(),
    p = [0, 1, 0],
    m = 0,
    g = 0,
    _ = 0;
  return {
    begin(e) {
      ((m += e || 0), (g = Math.min(0.1, e || 0)), _++);
    },
    consider(e, t, n, r = null) {
      let i = Ua(t);
      if (!i) return;
      let a = Math.cos(e.pitch),
        o = -Math.sin(e.yaw) * a,
        s = Math.sin(e.pitch),
        u = -Math.cos(e.yaw) * a,
        d,
        f,
        p;
      r
        ? ((d = r.x), (f = r.y), (p = r.z))
        : (Pt(e, l),
          (d = l[0] + o * Q.lensAhead),
          (f = l[1] + s * Q.lensAhead),
          (p = l[2] + u * Q.lensAhead));
      let m = n.x - d,
        h = n.y - f,
        g = n.z - p,
        v = Math.hypot(m, h, g) || 1,
        y = Ba((o * m + s * h + u * g) / v, v, i),
        b = c.get(e.id);
      if (!b) {
        if (y <= 0.01) return;
        ((b = { v: 0, x: d, y: f, z: p, s: 0, frame: 0, clear: -1, seen: 1 }),
          c.set(e.id, b));
      }
      ((b.x = d + (m / v) * 0.05),
        (b.y = f + (h / v) * 0.05),
        (b.z = p + (g / v) * 0.05),
        (b.s = y),
        (b.frame = _));
    },
    end(e, i) {
      let a = n?.getAtmosphere?.(),
        s = 1 - (1 - Q.night) * (a?.nightAmount ?? 0),
        l = t.fog?.density ?? 0;
      (a?.sunDir &&
        ((p[0] = a.sunDir[0]), (p[1] = a.sunDir[1]), (p[2] = a.sunDir[2])),
        (u.length = 0),
        e.getWorldDirection(d));
      for (let [t, n] of c) {
        let i = n.frame === _ ? n.s : 0;
        if (
          ((n.v +=
            (i - n.v) * (1 - Math.exp(-(i > n.v ? Q.rise : Q.fall) * g))),
          n.frame !== _ && n.v < 0.01)
        ) {
          c.delete(t);
          continue;
        }
        let a = n.x - e.position.x,
          o = n.y - e.position.y,
          h = n.z - e.position.z,
          v = Math.hypot(a, o, h) || 1,
          y = Math.exp(-(l * v) * (l * v)),
          b =
            n.v *
            qa(m, t) *
            s *
            y *
            Wa(-(p[0] * a + p[1] * o + p[2] * h) / v) *
            Ha((d.x * a + d.y * o + d.z * h) / v);
        if (b > 0.01 && r) {
          if (n.clear < 0 || (_ + t) % 3 == 0) {
            f.set(a / v, o / v, h / v);
            let t = +!r(e.position, f, v);
            (n.clear < 0 && (n.seen = t), (n.clear = t));
          }
          ((n.seen += (n.clear - n.seen) * (1 - Math.exp(-Q.reveal * g))),
            (b *= n.seen));
        }
        b > 0.01 && u.push({ g: n, k: b, d: v });
      }
      u.length > o.length && u.sort((e, t) => t.k - e.k);
      for (let t = 0; t < o.length; t++) {
        let n = o[t],
          r = u[t];
        ((n.visible = !!r),
          r &&
            (n.position.set(r.g.x, r.g.y, r.g.z),
            n.scale.setScalar(Ka(Ga(Math.min(1, r.k), r.d), r.d, e.fov, i)),
            (n.material.opacity = Math.min(1, r.k))));
      }
    },
    dispose() {
      t.remove(a);
      for (let e of o) e.material.dispose();
      (i.dispose(), c.clear());
    },
  };
}
var Za = 0.35,
  Qa = new D(0, 0, 0, `YXZ`),
  $a = new b(),
  eo = new s(),
  to = 128,
  no = Math.PI * 2,
  ro = (e, t, n) => (e < t ? t : e > n ? n : e),
  io = () => (typeof window < `u` ? window.__game : null),
  $ = {
    ctx: null,
    rig: null,
    actors: new Map(),
    free: [],
    top: 0,
    frame: 0,
    defib: null,
    pd: {},
    noRevive: new Set(),
    showcase: null,
    clock: 0,
    localId: -1,
    playerBodyHidden: !1,
    fpsOverride: null,
    povId: -1,
    localReplayState: null,
    color: new h(),
    camPos: new s(),
    lensPos: new s(),
    frustum: new T(),
    viewProj: new M(),
    gunSphere: new i(new s(), 1.6),
  };
function ao(e, t) {
  let n = e.world.teams?.[t];
  return $.color.set(n?.color ?? (t === 1 ? `#d23a32` : `#e0a030`));
}
function oo(e, t) {
  return e
    ? (n) => {
        (t?.(n), fe(n, e));
      }
    : t;
}
