// assets__demo-BF8qQ4c6 04 — math
// Lines 874-1218 of readable/assets__demo-BF8qQ4c6.pretty.js (statement-aligned).
function Re(e) {
  let t = new Map(),
    n = [];
  e.forEach((e, n) => {
    for (let r = Math.floor(e[0] / G); r <= Math.floor(e[3] / G); r++)
      for (let i = Math.floor(e[2] / G); i <= Math.floor(e[5] / G); i++) {
        let e = r + `:` + i,
          a = t.get(e);
        (a || t.set(e, (a = [])), a.push(n));
      }
  });
  let r = new Set();
  for (let i of t.values())
    for (let t = 0; t < i.length; t++)
      for (let a = t + 1; a < i.length; a++) {
        let o = i[t],
          s = i[a],
          c = e[o],
          l = e[s];
        for (let e = 0; e < 6; e++) {
          if (Math.abs(c[e] - l[e]) >= 0.011999000000000001) continue;
          let t = e % 3,
            i = !0;
          if (e === 1 && c[4] - c[1] < 0.05 && l[4] - l[1] < 0.05) continue;
          for (let e = 0; e < 3; e++)
            if (
              e !== t &&
              Math.min(c[e + 3], l[e + 3]) - Math.max(c[e], l[e]) < Ne
            ) {
              i = !1;
              break;
            }
          if (!i) continue;
          let a = o + `:` + s + `:` + e;
          r.has(a) || (r.add(a), n.push([o, s, e]));
        }
      }
  return n;
}
function ze(e) {
  let t = e.filter(Fe),
    n = t.map(Ie),
    r = n.map((e) => [e[3] - e[0], e[4] - e[1], e[5] - e[2]]),
    i = 0;
  for (let e = 0; e < Pe; e++) {
    let e = Re(n);
    if (!e.length) break;
    let a = new Set();
    for (let [t, i, o] of e) {
      let e = n[t],
        s = n[i],
        c = o % 3,
        l = o < 3 ? -1 : 1;
      if (Math.abs(e[o] - s[o]) >= 0.011999000000000001) continue;
      let u = (e[o] - s[o]) * l,
        d = (e) => {
          let t = 1;
          for (let n = 0; n < 3; n++) n !== c && (t *= e[n + 3] - e[n]);
          return t;
        },
        f = Math.abs(u) > 1e-6 ? (u < 0 ? t : i) : d(e) <= d(s) ? t : i,
        p = f === t ? i : t,
        m = (e) => {
          let a = n[e === t ? i : t][o] - l * W;
          return (l > 0 ? a - n[e][c] : n[e][c + 3] - a) >= r[e][c] * 0.5;
        };
      if (!m(f) && !m(p)) {
        if (o < 3) continue;
        let r = d(e) <= d(s) ? t : i,
          l = n[r === t ? i : t][o] + W - n[r][o];
        ((n[r][c] += l), (n[r][o] += l), a.add(r));
        continue;
      }
      (m(f) || ([f, p] = [p, f]), (n[f][o] = n[p][o] - l * W), a.add(f));
    }
    if (!a.size) break;
    i += a.size;
    for (let e of a) Le(t[e], n[e]);
  }
  let a = t.map((e, t) => [e, t]).filter(([e]) => e.kind === `gable`);
  if (a.length) {
    let e = new Map();
    n.forEach((n, r) => {
      if (t[r].kind !== `box`) return;
      let i = Math.round(n[4] * 50);
      for (let t of [-1, 0, 1]) {
        let n = e.get(i + t);
        n ? n.push(r) : e.set(i + t, [r]);
      }
    });
    for (let [t, r] of a) {
      let a = n[r];
      for (let r of e.get(Math.round(a[1] * 50)) ?? []) {
        let e = n[r],
          o = a[1] - e[4];
        if (
          o < 0.011999000000000001 &&
          o > -0.012 &&
          Math.min(a[3], e[3]) - Math.max(a[0], e[0]) > Ne &&
          Math.min(a[5], e[5]) - Math.max(a[2], e[2]) > Ne
        ) {
          let e = W - o;
          ((a[1] += e), (a[4] += e), Le(t, a), i++);
        }
      }
    }
  }
  return { moved: i, remaining: Re(n).length };
}
var K = new p();
function Be(e, t, r, { floor: i = 0 } = {}) {
  let s = r.filter((e) => e.kind === `quad`),
    l = r.filter((e) => e.kind === `pool`),
    u = r.filter((e) => e.kind === `smoke`),
    d = -1e9,
    p = s.length,
    m = new Float32Array(p * 12),
    h = new Float32Array(p * 12),
    g = new Uint32Array(p * 6),
    _ = new A(),
    v = new w(),
    y = new a();
  s.forEach((e, t) => {
    (v.set(e.rx || 0, e.ry || 0, 0, `YXZ`),
      _.makeRotationFromEuler(v),
      _.setPosition(e.x, e.y, e.z));
    let n = e.w / 2,
      r = e.h / 2,
      i = [
        [-n, -r],
        [n, -r],
        [n, r],
        [-n, r],
      ];
    for (let e = 0; e < 4; e++)
      (y.set(i[e][0], i[e][1], 0).applyMatrix4(_),
        m.set([y.x, y.y, y.z], t * 12 + e * 3));
    g.set([t * 4, t * 4 + 1, t * 4 + 2, t * 4, t * 4 + 2, t * 4 + 3], t * 6);
  });
  let b = m.slice(),
    x = new c();
  (x.setAttribute(`position`, new o(m, 3)),
    x.setAttribute(`color`, new o(h, 3)),
    x.setIndex(new o(g, 1)));
  let S = new f({
      vertexColors: !0,
      side: 2,
      toneMapped: !0,
      polygonOffset: !0,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -4,
    }),
    C = new n(x, S);
  ((C.name = `city-lights`), (C.frustumCulled = !1), t.add(C));
  let T = l.length,
    E = new Float32Array(T * 15 * 3),
    D = new Float32Array(T * 15 * 3),
    O = new Uint32Array(T * 14 * 3);
  l.forEach((e, t) => {
    let n = t * 15;
    E.set([e.x, e.y, e.z], n * 3);
    for (let r = 0; r < 14; r++) {
      let i = (r / 14) * Math.PI * 2;
      (E.set(
        [e.x + Math.cos(i) * e.r, e.y, e.z + Math.sin(i) * e.r],
        (n + 1 + r) * 3,
      ),
        O.set([n, n + 1 + r, n + 1 + ((r + 1) % 14)], (t * 14 + r) * 3));
    }
  });
  let k = new c();
  (k.setAttribute(`position`, new o(E, 3)),
    k.setAttribute(`color`, new o(D, 3)),
    k.setIndex(new o(O, 1)));
  let j = new f({
      vertexColors: !0,
      blending: 2,
      depthWrite: !1,
      transparent: !0,
      toneMapped: !0,
    }),
    M = new n(k, j);
  ((M.name = `city-light-pools`),
    (M.frustumCulled = !1),
    (M.renderOrder = 2),
    t.add(M));
  let N = new Set(),
    P = -1,
    F = 0,
    ee = -1,
    te = [];
  s.forEach((e, t) => {
    e.mode && e.mode !== `steady` && te.push(t);
  });
  function ne(e) {
    let t = e.phase || 0;
    switch (e.mode) {
      case `beacon`:
        return (F + t) % 2.4 < 0.28 ? 1 : 0.04;
      case `flash`:
        return Math.floor((F + t) * 1.6) % 2 ? 1 : 0.05;
      case `tv`:
        return (
          0.55 +
          0.45 * Math.abs(Math.sin(F * 7.3 + t) * Math.sin(F * 2.1 + t * 3))
        );
      case `neon`:
        return (
          0.9 +
          0.1 * Math.sin(F * 37 + t) * (Math.sin(F * 0.7 + t) > 0.92 ? 1 : 0.15)
        );
      case `fire`:
        return (
          0.55 +
          0.45 *
            (Math.sin(F * 13 + t) * 0.5 +
              Math.sin(F * 23.7 + t * 2) * 0.3 +
              Math.sin(F * 5.1 + t) * 0.2 +
              0.5)
        );
      default:
        return 1;
    }
  }
  function re(e, t, n) {
    let r = N.has(t.group) ? 0 : n * P,
      i = !t.mode || t.mode === `steady` ? Math.min(t.gain, 0.85) : t.gain;
    K.setHex(t.col).multiplyScalar(i * r);
    for (let t = 0; t < 4; t++) h.set([K.r, K.g, K.b], e * 12 + t * 3);
  }
  function ie() {
    (s.forEach((e, t) => {
      re(t, e, ne(e));
      let n = N.has(e.group);
      for (let r = 0; r < 12; r++)
        m[t * 12 + r] = n
          ? r % 3 == 0
            ? e.x
            : r % 3 == 1
              ? e.y
              : e.z
          : b[t * 12 + r];
    }),
      (x.attributes.color.needsUpdate = !0),
      (x.attributes.position.needsUpdate = !0),
      l.forEach((e, t) => {
        let n = t * 15,
          r = N.has(e.group) ? 0 : P;
        (K.setHex(e.col).multiplyScalar(e.gain * 0.55 * r),
          D.set([K.r, K.g, K.b], n * 3));
        for (let e = 0; e < 14; e++) D.set([0, 0, 0], (n + 1 + e) * 3);
      }),
      (k.attributes.color.needsUpdate = !0));
  }
  function ae() {
    let t = e.modules.get(`environment`)?.getAtmosphere?.()?.elevation;
    if (!Number.isFinite(t)) return 1;
    let n = Math.min(1, Math.max(0, (7 - t) / 5));
    return Math.max(i, n * n * (3 - 2 * n));
  }
  return {
    count: p,
    pools: T,
    smokes: u.length,
    update(t) {
      F += Math.min(t || 0, 0.1);
      let n = ae();
      if (u.length && F - d > 18) {
        d = F;
        let t = e.modules.get(`effects`);
        if (t?.spawn)
          for (let e of u)
            t.spawn(`smokeColumn`, [e.x, e.y, e.z], [0, 1, 0], {
              ticks: 1200,
              every: 7,
              scale: e.scale,
            });
      }
      if (Math.abs(n - P) > 0.004 || ee < 0) {
        ((P = n), (ee = F), ie());
        return;
      }
      if (!te.length) return;
      for (let e of te) re(e, s[e], ne(s[e]));
      x.attributes.color.needsUpdate = !0;
      let r = !1;
      (l.forEach((e, t) => {
        if (e.group !== `fire`) return;
        let n = t * 15;
        (K.setHex(e.col).multiplyScalar(
          e.gain * 0.55 * P * (0.7 + 0.3 * Math.sin(F * 11 + t)),
        ),
          D.set([K.r, K.g, K.b], n * 3),
          (r = !0));
      }),
        r && (k.attributes.color.needsUpdate = !0));
    },
    setGroup(e, t) {
      e && (t ? N.delete(e) : N.add(e), (ee = -1));
    },
    dispose() {
      (t.remove(C),
        t.remove(M),
        x.dispose(),
        k.dispose(),
        S.dispose(),
        j.dispose());
    },
  };
}
var Ve = Object.freeze({
  fixture_street: {
    url: new URL(`/assets/street-BZ4SxHcx.glb`, `` + import.meta.url).href,
    size: [1.3, 5.7, 0.64],
    scale: 1,
    minY: 0,
    fixture: !0,
  },
  fixture_sconce: {
    url: new URL(`/assets/sconce-CdZZcpnB.glb`, `` + import.meta.url).href,
    size: [0.3, 0.4, 0.4],
    scale: 1,
    minY: 0,
    fixture: !0,
  },
  fixture_beacon: {
    url: new URL(`/assets/beacon-DDf6R1Ad.glb`, `` + import.meta.url).href,
    size: [0.3, 0.39, 0.3],
    scale: 1,
    minY: 0,
    fixture: !0,
  },
  fixture_festoon: {
    url: new URL(`/assets/festoon-qEGy5fyE.glb`, `` + import.meta.url).href,
    size: [18.22, 2.47, 14.22],
    scale: 1,
    minY: 0,
    fixture: !0,
  },
});
function He(e) {
  let t = e.modules.get(`environment`)?.getAtmosphere?.()?.elevation,
    n = Number.isFinite(t) ? l.clamp((7 - t) / 5, 0, 1) : 1;
  return n * n * (3 - 2 * n);
}
