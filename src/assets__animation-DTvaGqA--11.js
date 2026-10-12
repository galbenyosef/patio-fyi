// assets__animation-DTvaGqA- 11 — math
// Lines 2711-2969 of readable/assets__animation-DTvaGqA-.pretty.js (statement-aligned).
function Kr(e, t = null, n = null) {
  let a = Gr(),
    o = new T();
  ((o.name = `scope_glints`), e.add(o));
  let s = Array.from({ length: X.max }, () => {
      let e = new r({
          map: a,
          color: new g(X.gain, X.gain, X.gain),
          transparent: !0,
          depthWrite: !1,
          blending: 2,
          fog: !1,
        }),
        t = new i(e);
      return ((t.visible = !1), (t.renderOrder = 60), o.add(t), t);
    }),
    c = new Map(),
    l = [0, 0, 0],
    u = [],
    d = new k(),
    f = new k(),
    p = [0, 1, 0],
    m = 0,
    h = 0,
    _ = 0;
  return {
    begin(e) {
      ((m += e || 0), (h = Math.min(0.1, e || 0)), _++);
    },
    consider(e, t, n, r = null) {
      let i = zr(t);
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
        : (yt(e, l),
          (d = l[0] + o * X.lensAhead),
          (f = l[1] + s * X.lensAhead),
          (p = l[2] + u * X.lensAhead));
      let m = n.x - d,
        h = n.y - f,
        g = n.z - p,
        v = Math.hypot(m, h, g) || 1,
        y = Ir((o * m + s * h + u * g) / v, v, i),
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
    end(r, i) {
      let a = t?.getAtmosphere?.(),
        o = 1 - (1 - X.night) * (a?.nightAmount ?? 0),
        l = e.fog?.density ?? 0;
      (a?.sunDir &&
        ((p[0] = a.sunDir[0]), (p[1] = a.sunDir[1]), (p[2] = a.sunDir[2])),
        (u.length = 0),
        r.getWorldDirection(d));
      for (let [e, t] of c) {
        let i = t.frame === _ ? t.s : 0;
        if (
          ((t.v +=
            (i - t.v) * (1 - Math.exp(-(i > t.v ? X.rise : X.fall) * h))),
          t.frame !== _ && t.v < 0.01)
        ) {
          c.delete(e);
          continue;
        }
        let a = t.x - r.position.x,
          s = t.y - r.position.y,
          g = t.z - r.position.z,
          v = Math.hypot(a, s, g) || 1,
          y = Math.exp(-(l * v) * (l * v)),
          b =
            t.v *
            Ur(m, e) *
            o *
            y *
            Br(-(p[0] * a + p[1] * s + p[2] * g) / v) *
            Rr((d.x * a + d.y * s + d.z * g) / v);
        if (b > 0.01 && n) {
          if (t.clear < 0 || (_ + e) % 3 == 0) {
            f.set(a / v, s / v, g / v);
            let e = +!n(r.position, f, v);
            (t.clear < 0 && (t.seen = e), (t.clear = e));
          }
          ((t.seen += (t.clear - t.seen) * (1 - Math.exp(-X.reveal * h))),
            (b *= t.seen));
        }
        b > 0.01 && u.push({ g: t, k: b, d: v });
      }
      u.length > s.length && u.sort((e, t) => t.k - e.k);
      for (let e = 0; e < s.length; e++) {
        let t = s[e],
          n = u[e];
        ((t.visible = !!n),
          n &&
            (t.position.set(n.g.x, n.g.y, n.g.z),
            t.scale.setScalar(Hr(Vr(Math.min(1, n.k), n.d), n.d, r.fov, i)),
            (t.material.opacity = Math.min(1, n.k))));
      }
    },
    dispose() {
      e.remove(o);
      for (let e of s) e.material.dispose();
      (a.dispose(), c.clear());
    },
  };
}
var qr = 0.35,
  Jr = new S(0, 0, 0, `YXZ`),
  Yr = new y(),
  Xr = new k(),
  Zr = 128,
  Qr = Math.PI * 2,
  Z = (e, t, n) => (e < t ? t : e > n ? n : e),
  $r = () => (typeof window < `u` ? window.__game : null),
  Q = {
    ctx: null,
    rig: null,
    actors: new Map(),
    free: [],
    top: 0,
    frame: 0,
    showcase: null,
    clock: 0,
    localId: -1,
    playerBodyHidden: !1,
    fpsOverride: null,
    povId: -1,
    localReplayState: null,
    color: new g(),
    camPos: new k(),
    lensPos: new k(),
    frustum: new D(),
    viewProj: new d(),
    gunSphere: new n(new k(), 1.6),
  };
function ei(e, t) {
  let n = e.world.teams?.[t];
  return Q.color.set(n?.color ?? (t === 1 ? `#d23a32` : `#e0a030`));
}
function ti(e, t) {
  return e
    ? (n) => {
        (t?.(n), de(n, e));
      }
    : t;
}
function ni(e) {
  let t = [],
    n = new d(),
    r = new y(),
    i = new k(ot.scale, ot.scale, ot.scale),
    a = 0;
  return {
    begin() {
      a = 0;
    },
    put(o) {
      let s = t[a++];
      (s ||
        ((s = tt()),
        (s.matrixAutoUpdate = !1),
        (s.castShadow = !0),
        e.add(s),
        t.push(s)),
        (s.visible = !0),
        n.compose(ot.pos, ue(o, r), i),
        s.matrix.multiplyMatrices(o.foreR.matrixWorld, n),
        (s.matrixWorldNeedsUpdate = !0));
    },
    flush() {
      for (let e = a; e < t.length; e++) t[e].visible = !1;
    },
    dispose() {
      for (let n of t) e.remove(n);
      t.length = 0;
    },
  };
}
function ri(e) {
  return {
    h: xt[e.stance | 0] ?? xt[0],
    lean: 0,
    hspeed: 0,
    moveF: 0,
    moveR: 0,
    phase: (e.id * 1.7) % Qr,
    breathe: (e.id * 0.9) % Qr,
    sprintW: 0,
    aimW: 0,
    pitch: e.pitch,
    grounded: !0,
    swim: !1,
    airT: 0,
    throwT: -1,
    throwHold: !1,
    knifeT: -1,
    gesture: null,
    gestureT: -1,
    fireT: -1,
    reloadT: -1,
    reloadElapsed: -1,
    reloadProgress: 0,
    reloadWeapon: e.weapon,
    hitT: -1,
    landT: -1,
    deadT: -1,
    deadDir: e.id & 1 ? 1 : -1,
    lastHp: e.hp,
    lastGrounded: !0,
    lastVy: 0,
    vx: 0,
    vz: 0,
  };
}
function $(e, t) {
  let n = Q.actors.get(t.id);
  if (n) return n;
  let r = Q.free.length ? Q.free.pop() : Q.top++;
  return r >= Zr
    ? ((Q.top = Zr), null)
    : (r >= Q.rig.count && Q.rig.setCount(r + 1),
      (n = {
        id: t.id,
        slot: r,
        sk: xr(),
        pose: Qe(),
        anim: ri(t),
        team: -2,
        prev: [t.pos[0], t.pos[1], t.pos[2]],
        cur: [t.pos[0], t.pos[1], t.pos[2]],
        last: [t.pos[0], t.pos[1], t.pos[2]],
        predicted: !1,
        seen: 0,
        yaw: t.yaw,
        owner: t.owner,
      }),
      Q.actors.set(t.id, n),
      Q.rig.setIdentity(r, t.owner),
      n);
}
function ii(e) {
  let t = Q.actors.get(e);
  t && (Q.rig.hide(t.slot), Q.free.push(t.slot), Q.actors.delete(e));
}
