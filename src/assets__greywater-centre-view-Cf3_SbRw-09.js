// assets__greywater-centre-view-Cf3_SbRw 09 — add
// Lines 2275-2499 of readable/assets__greywater-centre-view-Cf3_SbRw.pretty.js (statement-aligned).
function mt(e, t) {
  $(e, `trainRoof`, -0.7, 0.7, 3.72, 3.82, t - 1.1, t + 1.1);
  for (let n of [-0.55, 0.55])
    e.add(
      `trainRoof`,
      new r(0.07, 0.07, 0.22, 8).translate(n, 3.93, t - 0.8),
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
  let t = new A(),
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
      n = new w(new E(e.map(([e, t]) => new l(e, t))), {
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
  return new h(1.5, 0.22).translate(0, 2.81, e + 2.195);
}
function _t(e) {
  let n = { cab: ht(`cab`), mid: ht(`mid`) },
    r = new y(),
    i = { cab: [], mid: [] },
    o = { cab: e * 2, mid: e * (Y.cars - 2) },
    s = 0;
  for (let [e, t] of Object.entries(n))
    for (let [n, a] of t.parts) {
      let t = vt(a),
        c = new v(t, j(n), o[e]);
      ((c.castShadow = !/Glass|Lamp|Red|lineAmber/.test(n)),
        (c.receiveShadow = !0),
        (c.frustumCulled = !1),
        (c.count = o[e]),
        r.add(c),
        i[e].push(c),
        (s += (t.attributes.position.count / 3) * o[e]));
    }
  let l = new v(gt(), j(st), o.cab);
  ((l.frustumCulled = !1), r.add(l));
  let u = X / 2 - 2.3 + 2.275,
    f = vt(
      [-1, 1].map((e) => new t(0.3, 0.18, 0.03).translate(e * 0.96, 1.35, u)),
    ),
    p = new v(f, new ee({ color: 16777215, toneMapped: !1 }), o.cab);
  ((p.frustumCulled = !1), r.add(p));
  let m = (() => {
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
        new c(e)
      );
    })(),
    g = vt(
      [-1, 1].map((e) => new h(2.2, 2.2).translate(e * 0.96, 1.35, u + 0.05)),
    ),
    _ = new v(
      g,
      new ee({
        map: m,
        transparent: !0,
        depthWrite: !1,
        blending: 2,
        toneMapped: !1,
      }),
      o.cab,
    );
  ((_.frustumCulled = !1), r.add(_));
  let b = new d(1.6, 1.5, 1.35),
    x = new d(1.4, 0.08, 0.04),
    S = new d(0, 0, 0),
    C = new d(1, 1, 1);
  for (let e = 0; e < o.cab; e++) (p.setColorAt(e, b), _.setColorAt(e, C));
  r.userData.tris = s;
  let w = new a(),
    T = new a().makeRotationY(Math.PI);
  return {
    group: r,
    place(e, t, n) {
      let r = t === 0 || t === Y.cars - 1,
        a = r ? `cab` : `mid`,
        o = r ? e * 2 + (t === 0 ? 0 : 1) : e * (Y.cars - 2) + (t - 1);
      (w.copy(n), t === Y.cars - 1 && w.multiply(T));
      for (let e of i[a]) e.setMatrixAt(o, w);
      r &&
        (l.setMatrixAt(o, w),
        p.setMatrixAt(o, w),
        _.setMatrixAt(o, w),
        p.setColorAt(o, t === 0 ? b : x),
        _.setColorAt(o, t === 0 ? C : S));
    },
    hide(e) {
      let t = new a().makeScale(0, 0, 0);
      for (let n = 0; n < Y.cars; n++) this.place(e, n, t);
    },
    commit() {
      for (let e of Object.values(i))
        for (let t of e) t.instanceMatrix.needsUpdate = !0;
      for (let e of [l, p, _]) e.instanceMatrix.needsUpdate = !0;
      ((p.instanceColor.needsUpdate = !0), (_.instanceColor.needsUpdate = !0));
    },
  };
}
function vt(e) {
  let t = e.map((e) => {
      let t = e.index ? e.toNonIndexed() : e.clone();
      return (t.attributes.cellId && t.deleteAttribute(`cellId`), t);
    }),
    r = 0;
  for (let e of t) r += e.attributes.position.count;
  let a = new i();
  for (let e of [`position`, `normal`, `uv`]) {
    let i = t[0].attributes[e].itemSize,
      o = new Float32Array(r * i),
      s = 0;
    for (let n of t)
      (o.set(n.attributes[e].array, s), (s += n.attributes[e].array.length));
    a.setAttribute(e, new n(o, i));
  }
  return (a.computeBoundingSphere(), a);
}
function yt(e, t, n, r, i, o, s, c = !0) {
  let l = new a(),
    u = new k(0, 1, 0),
    d = new k(),
    f = new k(),
    p = new k(),
    m = new k(),
    h = (e) => {
      let t = n(e);
      return new k(t.x + t.tz * o, s, t.z - t.tx * o);
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
