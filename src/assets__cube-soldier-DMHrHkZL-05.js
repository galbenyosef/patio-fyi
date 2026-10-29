// assets__cube-soldier-DMHrHkZL 05 — matrixworld
// Lines 1108-1457 of readable/assets__cube-soldier-DMHrHkZL.pretty.js (statement-aligned).
function He(e, t = 128, n = !1) {
  Object.assign(F, n ? Ae : ke);
  let r = Re();
  (r.head.dispose(), (r.head = Pe(N[0])));
  for (let e of [
    `assault`,
    `sniper`,
    `support`,
    `engineer`,
    `medic`,
    ...Object.keys(De),
  ]) {
    let t = r[e].attributes.aTeam;
    for (let e = 0; e < t.count; e++) t.getX(e) === 0 && t.setX(e, 4);
  }
  let i = Be(),
    a = new v();
  a.name = `soldiers`;
  let o = {};
  for (let e of Oe) {
    n &&
      (de(r[e], e),
      r[e].setAttribute(
        `thermalStrength`,
        new y(new Float32Array(t * P[e]).fill(1), 1),
      ));
    let s = new O(r[e], i, t * P[e]);
    ((s.name = `soldier_` + e),
      (s.castShadow = !0),
      (s.receiveShadow = !0),
      (s.frustumCulled = !1),
      s.instanceMatrix.setUsage(ee),
      s.geometry.setAttribute(
        `iCloth`,
        new y(new Float32Array(t * P[e] * 3).fill(1), 3),
      ),
      s.geometry.setAttribute(
        `iGear`,
        new y(new Float32Array(t * P[e] * 3).fill(0.2), 3),
      ),
      s.geometry.setAttribute(
        `iSkin`,
        new y(new Float32Array(t * P[e] * 4), 4),
      ));
    for (let e = 0; e < s.count; e++)
      (s.setMatrixAt(e, Ve), s.setColorAt(e, je.set(16777215)));
    ((s.count = 0), (o[e] = s), a.add(s));
  }
  e.add(a);
  let s = [0, 1]
      .flatMap((e) => N.map((t) => ({ f: t, team: e })))
      .map(({ f: e, team: r }, o) => {
        let s = Pe(e, r);
        (n &&
          (de(s, `head`, e.skin),
          s.setAttribute(
            `thermalStrength`,
            new y(new Float32Array(t).fill(1), 1),
          )),
          s.setAttribute(`iCloth`, new y(new Float32Array(t * 3).fill(1), 3)),
          s.setAttribute(`iGear`, new y(new Float32Array(t * 3).fill(0.2), 3)),
          s.setAttribute(`iSkin`, new y(new Float32Array(t * 4), 4)));
        let c = new O(s, i, t);
        ((c.name = `identity_${r}_${e.name}`),
          (c.castShadow = !0),
          (c.receiveShadow = !0),
          (c.frustumCulled = !1),
          (c.count = 0));
        for (let e = 0; e < t; e++) c.setColorAt(e, new p(16777215));
        return (a.add(c), c);
      }),
    c = le.map((e) => {
      let r = Ie(e);
      if (!r) return null;
      (n &&
        (de(r, `kit`),
        r.setAttribute(
          `thermalStrength`,
          new y(new Float32Array(t).fill(1), 1),
        )),
        r.setAttribute(`iCloth`, new y(new Float32Array(t * 3).fill(1), 3)),
        r.setAttribute(`iGear`, new y(new Float32Array(t * 3).fill(0.2), 3)),
        r.setAttribute(`iSkin`, new y(new Float32Array(t * 4), 4)));
      let o = new O(r, i, t);
      ((o.name = `kit_${e}`),
        (o.castShadow = !0),
        (o.receiveShadow = !0),
        (o.frustumCulled = !1),
        (o.count = 0));
      for (let e = 0; e < t; e++) o.setColorAt(e, new p(16777215));
      return (a.add(o), o);
    }),
    l = Array.from({ length: t }, () => Ve.clone()),
    u = Array.from({ length: t }, () => ue(0)),
    d = Array.from({ length: t }, () => Ve.clone()),
    f = new Uint8Array(t),
    m = new Int32Array(t),
    h = Array.from({ length: t }, () => new p(16777215)),
    g = new Float32Array(t).fill(1),
    _ = Object.fromEntries(Oe.map((e) => [e, { first: 1 / 0, last: -1 }]));
  function b(e, t) {
    let n = _[e];
    ((n.first = Math.min(n.first, t)), (n.last = Math.max(n.last, t)));
  }
  function x(e, t, n) {
    let r = t + n;
    for (let n of e.updateRanges)
      ((t = Math.min(t, n.start)), (r = Math.max(r, n.start + n.count)));
    (e.clearUpdateRanges(), e.addUpdateRange(t, r - t), (e.needsUpdate = !0));
  }
  let S = 0;
  return {
    group: a,
    pools: o,
    material: i,
    max: t,
    get count() {
      return S;
    },
    kitOf(e) {
      return u[e].kit;
    },
    setHeat(e, t) {
      if (n && g[e] !== t) {
        g[e] = t;
        for (let n of Oe) {
          let r = o[n].geometry.attributes.thermalStrength;
          for (let i = 0; i < P[n]; i++) r.setX(e * P[n] + i, t);
          x(r, e * P[n], P[n]);
        }
      }
    },
    setCount(e) {
      S = e;
      for (let t of Oe) o[t].count = e * P[t];
    },
    setMatrix(e, t, n, r) {
      if (e === `head`) {
        d[t].copy(r);
        return;
      }
      if (e === `kit`) {
        l[t].copy(r);
        return;
      }
      let i = t * P[e] + n;
      (o[e].setMatrixAt(i, r), b(e, i));
    },
    hide(e) {
      (d[e].copy(Ve), l[e].copy(Ve));
      for (let t of Oe)
        for (let n = 0; n < P[t]; n++) {
          let r = e * P[t] + n;
          (o[t].setMatrixAt(r, Ve), b(t, r));
        }
    },
    setColor(e, t) {
      h[e].copy(t);
      for (let n of Oe)
        for (let r = 0; r < P[n]; r++) o[n].setColorAt(e * P[n] + r, t);
      for (let t of Oe) x(o[t].instanceColor, e * P[t] * 3, P[t] * 3);
    },
    setFaction(e, t) {
      ((f[e] = +(t === 1)), this.setIdentity(e, m[e]));
    },
    setIdentity(e, t) {
      m[e] = t;
      let r = ue(t);
      u[e] = r;
      let i = f[e],
        a = [1, 0.94, 1.04, 0.98][r.uniform],
        s = new p(
          n ? (i === 0 ? 13160915 : 11843258) : i === 0 ? 13220758 : 3552827,
        ).multiplyScalar(a),
        c = new p(
          n ? (i === 0 ? 5268061 : 7220268) : i === 0 ? 4344643 : 8137258,
        ),
        l = new p(N[r.face].skin),
        d = +(r.face % 3 == 0);
      for (let t of Oe) {
        let n = o[t].geometry.attributes.iCloth;
        for (let r = 0; r < P[t]; r++) n.setXYZ(e * P[t] + r, s.r, s.g, s.b);
        x(n, e * P[t] * 3, P[t] * 3);
        let r = o[t].geometry.attributes.iGear;
        for (let n = 0; n < P[t]; n++) r.setXYZ(e * P[t] + n, c.r, c.g, c.b);
        x(r, e * P[t] * 3, P[t] * 3);
        let i = o[t].geometry.attributes.iSkin;
        for (let n = 0; n < P[t]; n++)
          i.setXYZW(e * P[t] + n, l.r, l.g, l.b, d);
        x(i, e * P[t] * 4, P[t] * 4);
      }
    },
    flush() {
      for (let e of s) e.count = 0;
      for (let e = 0; e < S; e++) {
        if (d[e].elements[15] === 0) continue;
        let t = s[f[e] * N.length + u[e].face],
          r = t.count++;
        (t.setMatrixAt(r, d[e]),
          t.setColorAt(r, h[e]),
          n && t.geometry.attributes.thermalStrength.setX(r, g[e]));
      }
      for (let e of c) e && (e.count = 0);
      for (let e = 0; e < S; e++) {
        let t = c[u[e].kit];
        if (!t || l[e].elements[15] === 0) continue;
        let r = t.count++;
        (t.setMatrixAt(r, l[e]),
          t.setColorAt(r, h[e]),
          n && t.geometry.attributes.thermalStrength.setX(r, g[e]));
      }
      for (let e of [...s, ...c])
        e?.count &&
          ((e.instanceMatrix.needsUpdate = !0),
          (e.instanceColor.needsUpdate = !0),
          n && (e.geometry.attributes.thermalStrength.needsUpdate = !0));
      o.head.count = 0;
      for (let e of Oe) {
        let t = _[e];
        t.last < t.first ||
          (x(o[e].instanceMatrix, t.first * 16, (t.last - t.first + 1) * 16),
          (t.first = 1 / 0),
          (t.last = -1));
      }
    },
    dispose() {
      e.remove(a);
      for (let e of Oe) (o[e].geometry.dispose(), o[e].dispose());
      i.dispose();
      for (let e of [...s, ...c]) e && (e.geometry.dispose(), e.dispose());
    },
  };
}
function Ue() {
  let e = (e, t, n = 0, r = 0, i = 0, a = `XYZ`) => {
      let o = new m();
      return (
        (o.name = e),
        o.position.set(n, r, i),
        (o.rotation.order = a),
        t && t.add(o),
        o
      );
    },
    t = e(`root`, null, 0, 0, 0, `YXZ`),
    n = e(`hips`, t, 0, ye, 0, `YXZ`),
    r = e(`torso`, n, 0, 0, 0, `YXZ`);
  r.scale.setScalar(be);
  let i = e(`head`, r, 0, _e, 0.01, `YXZ`);
  i.scale.setScalar(xe);
  let a = e(`armL`, r, -0.275, me, 0),
    o = e(`armR`, r, he, me, 0),
    s = e(`foreL`, a, 0, -0.3, 0),
    c = e(`foreR`, o, 0, -0.3, 0),
    l = e(`legL`, n, -0.125, 0, 0),
    u = e(`legR`, n, ge, 0, 0),
    d = e(`shinL`, l, 0, -0.37, 0),
    f = e(`shinR`, u, 0, -0.37, 0),
    p = e(`weapon`, r, 0, 0, 0, `YXZ`);
  return (
    p.scale.setScalar(Ce),
    {
      root: t,
      hips: n,
      torso: r,
      head: i,
      armL: a,
      armR: o,
      foreL: s,
      foreR: c,
      legL: l,
      legR: u,
      shinL: d,
      shinR: f,
      weapon: p,
    }
  );
}
function We(e, t, n, r, i, a = 0, o = null, s = `assault`) {
  ((e.hips.position.y = t.hipY),
    e.hips.rotation.set(t.hipPitch, t.hipYaw, 0),
    e.torso.rotation.set(t.torsoTilt, t.torsoYaw, t.torsoRoll),
    e.head.rotation.set(t.headPitch, t.headYaw, 0),
    e.legL.rotation.set(t.legLx, 0, t.legLz),
    e.legR.rotation.set(t.legRx, 0, t.legRz),
    e.shinL.rotation.set(t.shinL, 0, 0),
    e.shinR.rotation.set(t.shinR, 0, 0),
    e.armL.rotation.set(t.armLx, t.armLy, t.armLz),
    e.armR.rotation.set(t.armRx, t.armRy, t.armRz),
    e.foreL.rotation.set(t.foreL, 0, 0),
    e.foreR.rotation.set(t.foreR, 0, 0),
    e.weapon.position.set(t.wpnX, t.wpnY, t.wpnZ),
    e.weapon.rotation.set(t.wpnPitch, t.wpnYaw, t.wpnRoll),
    o?.(e),
    e.root.updateMatrixWorld(!0));
  let c = !i || i === `none`;
  for (let [t, [i, a, o]] of Object.entries(De))
    for (let l = 0; l < o; l++) {
      let o =
          a === `head`
            ? e.head
            : e[
                {
                  arm: [`armL`, `armR`],
                  fore: [`foreL`, `foreR`],
                  thigh: [`legL`, `legR`],
                  shin: [`shinL`, `shinR`],
                }[a][l]
              ],
        u = i === s && (c || a === `thigh` || a === `shin`);
      n.setMatrix(
        t,
        r,
        l,
        u
          ? a === `thigh` || a === `shin`
            ? Ee.copy(o.matrixWorld).scale(Te)
            : o.matrixWorld
          : Ve,
      );
    }
  (n.setMatrix(`torso`, r, 0, c ? e.torso.matrixWorld : Ve),
    n.setMatrix(
      `kit`,
      r,
      0,
      c && !Fe[s]?.includes(le[n.kitOf(r)]) ? e.torso.matrixWorld : Ve,
    ),
    n.setMatrix(`head`, r, 0, c ? e.head.matrixWorld : Ve));
  for (let t of [`assault`, `sniper`, `support`, `engineer`, `medic`])
    n.setMatrix(t, r, 0, c && t === s ? e.torso.matrixWorld : Ve);
  (n.setMatrix(`arm`, r, 0, c ? e.armL.matrixWorld : Ve),
    n.setMatrix(`arm`, r, 1, c ? e.armR.matrixWorld : Ve),
    n.setMatrix(`fore`, r, 0, c ? e.foreL.matrixWorld : Ve),
    n.setMatrix(`fore`, r, 1, c ? e.foreR.matrixWorld : Ve));
  let l =
    a < 0 || (a >= 31 && a <= 34)
      ? null
      : a === 9 || a === 10
        ? `breaker`
        : a === 8
          ? `kite`
          : `weapon`;
  for (let t of [`weapon`, `kite`, `breaker`])
    n.setMatrix(t, r, 0, c && t === l ? e.weapon.matrixWorld : Ve);
  (n.setMatrix(`thigh`, r, 0, Ee.copy(e.legL.matrixWorld).scale(Te)),
    n.setMatrix(`thigh`, r, 1, Ee.copy(e.legR.matrixWorld).scale(Te)),
    n.setMatrix(`shin`, r, 0, Ee.copy(e.shinL.matrixWorld).scale(Te)),
    n.setMatrix(`shin`, r, 1, Ee.copy(e.shinR.matrixWorld).scale(Te)));
}
