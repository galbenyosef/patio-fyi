// assets__greywater-centre-view-Z6VrK8o- 09 — attributes
// Lines 2275-2533 of readable/assets__greywater-centre-view-Z6VrK8o-.pretty.js (statement-aligned).
function mt(e, t) {
  $(e, `trainRoof`, -0.7, 0.7, 3.72, 3.82, t - 1.1, t + 1.1);
  for (let n of [-0.55, 0.55])
    e.add(
      `trainRoof`,
      new w(0.07, 0.07, 0.22, 8).translate(n, 3.93, t - 0.8),
      Q,
      0,
    );
  for (let n of [-0.35, 0.35])
    (lt(
      e,
      `trainUnder`,
      [n, 3.9, t - 0.8],
      [n * 0.5, 4.65, t + 0.55],
      0.06,
      0.06,
    ),
      lt(
        e,
        `trainUnder`,
        [n * 0.5, 4.65, t + 0.55],
        [n * 0.3, 5.22, t - 0.15],
        0.05,
        0.05,
      ));
  ($(e, `trainWheel`, -0.85, 0.85, 5.22, 5.28, t - 0.2, t - 0.1),
    $(e, `trainUnder`, -0.9, 0.9, 5.2, 5.24, t - 0.24, t - 0.06));
}
function ht(e) {
  let t = new j(),
    n = e === `cab`,
    r = n ? X / 2 - 2.3 : X / 2;
  dt(t, -X / 2, r);
  for (let e of [-1, 1]) ft(t, e, -X / 2, r);
  $(t, `trainUnder`, -1.3, 1.3, 0.8, 0.9, -X / 2 + 0.3, X / 2 - 0.3);
  for (let [e, n] of [
    [-4.2, -1.8],
    [-0.9, 1.4],
    [2.2, 4.1],
  ])
    $(t, `trainUnder`, -1.15, 1.15, 0.48, 0.8, e, n);
  for (let e of [-Y.bogie, Y.bogie]) pt(t, e);
  for (let e of [-4.8, 4.8])
    ($(t, `trainRoof`, -0.95, 0.95, 3.6, 3.98, e - 1.5, e + 1.5),
      $(t, `trainUnder`, -0.6, 0.6, 3.98, 4, e - 1.1, e + 1.1));
  n || mt(t, 0);
  let i = (e, n) => {
    ($(t, `bellows`, -0.75, 0.75, 1.05, 3.2, e, e + n * 0.45),
      $(t, `trainUnder`, -0.3, 0.3, 0.72, 0.9, e, e + n * 0.45));
  };
  if ((i(-X / 2, -1), n)) {
    let e = [
        [r, 0.78],
        [r + 2.3, 0.78],
        [r + 2.3, 1.05],
        [r + 2.1, 3.05],
        [r + 0.7, 3.72],
        [r, 3.72],
      ],
      n = new T(new O(e.map(([e, t]) => new d(e, t))), {
        depth: Y.width - 0.1,
        bevelEnabled: !1,
      });
    (n.rotateY(-Math.PI / 2).translate(Z - 0.05, 0, 0),
      t.add(`trainSteel`, n, Q, 0),
      $(t, `trainGlass`, -1.2, 1.2, 1.9, 2.66, r + 2.15, r + 2.2),
      $(t, `trainUnder`, -0.04, 0.04, 1.9, 2.66, r + 2.15, r + 2.21),
      $(t, `trainUnder`, -0.8, 0.8, 2.68, 2.94, r + 2.12, r + 2.19));
    let i = r + 2.27;
    for (let e of [-1, 1])
      ($(t, `trainUnder`, e * 0.78, e * 1.32, 1.22, 1.48, i - 0.03, i + 0.005),
        $(
          t,
          `lineAmber`,
          e * (Z - 0.05),
          e * (Z + 0.01),
          1.5,
          1.72,
          r,
          r + 2.2,
        ));
    ($(t, `lineAmber`, -Z + 0.05, Z - 0.05, 1.5, 1.72, i, i + 0.01),
      $(t, `trainUnder`, -0.35, 0.35, 0.72, 0.95, i, i + 0.5),
      $(t, `trainUnder`, -1.4, 1.4, 0.5, 0.8, r + 1.6, i));
  } else i(X / 2, 1);
  return t;
}
function gt() {
  let e = X / 2 - 2.3;
  return new S(1.5, 0.22).translate(0, 2.81, e + 2.195);
}
var _t = { trainSteel: 11844029 };
function vt(e, { flat: t = !1 } = {}) {
  let n = { cab: ht(`cab`), mid: ht(`mid`) },
    r = new _(),
    a = { cab: [], mid: [] },
    s = { cab: e * 2, mid: e * (Y.cars - 2) },
    u = 0,
    d = t ? new o({ vertexColors: !0, roughness: 0.5, metalness: 0.45 }) : null;
  for (let [e, i] of Object.entries(n)) {
    if (t) {
      let t = new p(),
        n = [...i.parts].map(([e, n]) => {
          let r = yt(n),
            i = r.attributes.position.count,
            a = new Float32Array(i * 3);
          t.setHex(_t[e] ?? P[e]?.p?.base ?? 8421504);
          for (let e = 0; e < i; e++) t.toArray(a, e * 3);
          return (r.setAttribute(`color`, new c(a, 3)), r);
        }),
        o = n.reduce((e, t) => e + t.attributes.position.count, 0),
        f = new l();
      for (let e of [`position`, `normal`, `color`]) {
        let t = new Float32Array(o * 3),
          r = 0;
        for (let i of n)
          (t.set(i.attributes[e].array, r),
            (r += i.attributes[e].array.length));
        f.setAttribute(e, new c(t, 3));
      }
      f.computeBoundingSphere();
      let m = new D(f, d, s[e]);
      ((m.castShadow = !0),
        (m.receiveShadow = !0),
        (m.frustumCulled = !1),
        (m.count = s[e]),
        r.add(m),
        a[e].push(m),
        (u += (o / 3) * s[e]));
      continue;
    }
    for (let [t, n] of i.parts) {
      let i = yt(n),
        o = new D(i, M(t), s[e]);
      ((o.castShadow = !/Glass|Lamp|Red|lineAmber/.test(t)),
        (o.receiveShadow = !0),
        (o.frustumCulled = !1),
        (o.count = s[e]),
        r.add(o),
        a[e].push(o),
        (u += (i.attributes.position.count / 3) * s[e]));
    }
  }
  let m = new D(gt(), M(st), s.cab);
  ((m.frustumCulled = !1), r.add(m));
  let h = X / 2 - 2.3 + 2.275,
    g = yt(
      [-1, 1].map((e) => new i(0.3, 0.18, 0.03).translate(e * 0.96, 1.35, h)),
    ),
    v = new D(g, new f({ color: 16777215, toneMapped: !1 }), s.cab);
  ((v.frustumCulled = !1), r.add(v));
  let y = (() => {
      let e = document.createElement(`canvas`);
      e.width = e.height = 64;
      let t = e.getContext(`2d`),
        n = t.createRadialGradient(32, 32, 0, 32, 32, 32);
      return (
        n.addColorStop(0, `rgba(255,244,220,0.9)`),
        n.addColorStop(0.3, `rgba(255,236,200,0.35)`),
        n.addColorStop(1, `rgba(255,230,190,0)`),
        (t.fillStyle = n),
        t.fillRect(0, 0, 64, 64),
        new k(e)
      );
    })(),
    b = yt(
      [-1, 1].map((e) => new S(2.2, 2.2).translate(e * 0.96, 1.35, h + 0.05)),
    ),
    x = new D(
      b,
      new f({
        map: y,
        transparent: !0,
        depthWrite: !1,
        blending: 2,
        toneMapped: !1,
      }),
      s.cab,
    );
  ((x.frustumCulled = !1), r.add(x));
  let C = new p(1.6, 1.5, 1.35),
    w = new p(1.4, 0.08, 0.04),
    T = new p(0, 0, 0),
    E = new p(1, 1, 1);
  for (let e = 0; e < s.cab; e++) (v.setColorAt(e, C), x.setColorAt(e, E));
  r.userData.tris = u;
  let O = new A(),
    ee = new A().makeRotationY(Math.PI);
  return {
    group: r,
    place(e, t, n) {
      let r = t === 0 || t === Y.cars - 1,
        i = r ? `cab` : `mid`,
        o = r ? e * 2 + (t === 0 ? 0 : 1) : e * (Y.cars - 2) + (t - 1);
      (O.copy(n), t === Y.cars - 1 && O.multiply(ee));
      for (let e of a[i]) e.setMatrixAt(o, O);
      r &&
        (m.setMatrixAt(o, O),
        v.setMatrixAt(o, O),
        x.setMatrixAt(o, O),
        v.setColorAt(o, t === 0 ? C : w),
        x.setColorAt(o, t === 0 ? E : T));
    },
    hide(e) {
      let t = new A().makeScale(0, 0, 0);
      for (let n = 0; n < Y.cars; n++) this.place(e, n, t);
    },
    commit() {
      for (let e of Object.values(a))
        for (let t of e) t.instanceMatrix.needsUpdate = !0;
      for (let e of [m, v, x]) e.instanceMatrix.needsUpdate = !0;
      ((v.instanceColor.needsUpdate = !0), (x.instanceColor.needsUpdate = !0));
    },
  };
}
function yt(e) {
  let t = e.map((e) => {
      let t = e.index ? e.toNonIndexed() : e.clone();
      return (t.attributes.cellId && t.deleteAttribute(`cellId`), t);
    }),
    n = 0;
  for (let e of t) n += e.attributes.position.count;
  let r = new l();
  for (let e of [`position`, `normal`, `uv`]) {
    let i = t[0].attributes[e].itemSize,
      a = new Float32Array(n * i),
      o = 0;
    for (let n of t)
      (a.set(n.attributes[e].array, o), (o += n.attributes[e].array.length));
    r.setAttribute(e, new c(a, i));
  }
  return (r.computeBoundingSphere(), r);
}
function bt(e, t, n, r, i, a, o, c = !0) {
  let l = new A(),
    u = new s(0, 1, 0),
    d = new s(),
    f = new s(),
    p = new s(),
    m = new s(),
    h = (e) => {
      let t = n(e);
      return new s(t.x + t.tz * a, o, t.z - t.tx * a);
    };
  for (let n = 0; n < Y.cars; n++) {
    if (!c) {
      e.place(t, n, l.makeScale(0, 0, 0));
      continue;
    }
    let a = r - i * (X / 2 + n * (X + Y.gap));
    (d.copy(h(a + i * Y.bogie)),
      f.copy(h(a - i * Y.bogie)),
      p.subVectors(d, f).normalize(),
      m.crossVectors(u, p).normalize(),
      l.makeBasis(m, u, p).setPosition(d.add(f).multiplyScalar(0.5)),
      e.place(t, n, l));
  }
}
