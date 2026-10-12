// assets__cube-soldier-BRpW8Tqo 05 — matrixworld
// Lines 1106-1450 of readable/assets__cube-soldier-BRpW8Tqo.pretty.js (statement-aligned).
function ze(t, n = 128, r = !1) {
  Object.assign(P, r ? Oe : De);
  let i = Ie();
  (i.head.dispose(), (i.head = Me(se[0])));
  for (let e of [
    `assault`,
    `sniper`,
    `support`,
    `engineer`,
    `medic`,
    ...Object.keys(Te),
  ]) {
    let t = i[e].attributes.aTeam;
    for (let e = 0; e < t.count; e++) t.getX(e) === 0 && t.setX(e, 4);
  }
  let a = Re(),
    o = new w();
  o.name = `soldiers`;
  let s = {};
  for (let t of Ee) {
    r &&
      (de(i[t], t),
      i[t].setAttribute(
        `thermalStrength`,
        new E(new Float32Array(n * N[t]).fill(1), 1),
      ));
    let c = new C(i[t], a, n * N[t]);
    ((c.name = `soldier_` + t),
      (c.castShadow = !0),
      (c.receiveShadow = !0),
      (c.frustumCulled = !1),
      c.instanceMatrix.setUsage(e),
      c.geometry.setAttribute(
        `iCloth`,
        new E(new Float32Array(n * N[t] * 3).fill(1), 3),
      ),
      c.geometry.setAttribute(
        `iGear`,
        new E(new Float32Array(n * N[t] * 3).fill(0.2), 3),
      ),
      c.geometry.setAttribute(
        `iSkin`,
        new E(new Float32Array(n * N[t] * 4), 4),
      ));
    for (let e = 0; e < c.count; e++)
      (c.setMatrixAt(e, z), c.setColorAt(e, ke.set(16777215)));
    ((c.count = 0), (s[t] = c), o.add(c));
  }
  t.add(o);
  let c = [0, 1]
      .flatMap((e) => se.map((t) => ({ f: t, team: e })))
      .map(({ f: e, team: t }, i) => {
        let s = Me(e, t);
        (r &&
          (de(s, `head`, e.skin),
          s.setAttribute(
            `thermalStrength`,
            new E(new Float32Array(n).fill(1), 1),
          )),
          s.setAttribute(`iCloth`, new E(new Float32Array(n * 3).fill(1), 3)),
          s.setAttribute(`iGear`, new E(new Float32Array(n * 3).fill(0.2), 3)),
          s.setAttribute(`iSkin`, new E(new Float32Array(n * 4), 4)));
        let c = new C(s, a, n);
        ((c.name = `identity_${t}_${e.name}`),
          (c.castShadow = !0),
          (c.receiveShadow = !0),
          (c.frustumCulled = !1),
          (c.count = 0));
        for (let e = 0; e < n; e++) c.setColorAt(e, new p(16777215));
        return (o.add(c), c);
      }),
    l = le.map((e) => {
      let t = Pe(e);
      if (!t) return null;
      (r &&
        (de(t, `kit`),
        t.setAttribute(
          `thermalStrength`,
          new E(new Float32Array(n).fill(1), 1),
        )),
        t.setAttribute(`iCloth`, new E(new Float32Array(n * 3).fill(1), 3)),
        t.setAttribute(`iGear`, new E(new Float32Array(n * 3).fill(0.2), 3)),
        t.setAttribute(`iSkin`, new E(new Float32Array(n * 4), 4)));
      let i = new C(t, a, n);
      ((i.name = `kit_${e}`),
        (i.castShadow = !0),
        (i.receiveShadow = !0),
        (i.frustumCulled = !1),
        (i.count = 0));
      for (let e = 0; e < n; e++) i.setColorAt(e, new p(16777215));
      return (o.add(i), i);
    }),
    u = Array.from({ length: n }, () => z.clone()),
    d = Array.from({ length: n }, () => ue(0)),
    f = Array.from({ length: n }, () => z.clone()),
    m = new Uint8Array(n),
    h = new Int32Array(n),
    g = Array.from({ length: n }, () => new p(16777215)),
    _ = new Float32Array(n).fill(1),
    v = Object.fromEntries(Ee.map((e) => [e, { first: 1 / 0, last: -1 }]));
  function y(e, t) {
    let n = v[e];
    ((n.first = Math.min(n.first, t)), (n.last = Math.max(n.last, t)));
  }
  function b(e, t, n) {
    let r = t + n;
    for (let n of e.updateRanges)
      ((t = Math.min(t, n.start)), (r = Math.max(r, n.start + n.count)));
    (e.clearUpdateRanges(), e.addUpdateRange(t, r - t), (e.needsUpdate = !0));
  }
  let x = 0;
  return {
    group: o,
    pools: s,
    material: a,
    max: n,
    get count() {
      return x;
    },
    kitOf(e) {
      return d[e].kit;
    },
    setHeat(e, t) {
      if (r && _[e] !== t) {
        _[e] = t;
        for (let n of Ee) {
          let r = s[n].geometry.attributes.thermalStrength;
          for (let i = 0; i < N[n]; i++) r.setX(e * N[n] + i, t);
          b(r, e * N[n], N[n]);
        }
      }
    },
    setCount(e) {
      x = e;
      for (let t of Ee) s[t].count = e * N[t];
    },
    setMatrix(e, t, n, r) {
      if (e === `head`) {
        f[t].copy(r);
        return;
      }
      if (e === `kit`) {
        u[t].copy(r);
        return;
      }
      let i = t * N[e] + n;
      (s[e].setMatrixAt(i, r), y(e, i));
    },
    hide(e) {
      (f[e].copy(z), u[e].copy(z));
      for (let t of Ee)
        for (let n = 0; n < N[t]; n++) {
          let r = e * N[t] + n;
          (s[t].setMatrixAt(r, z), y(t, r));
        }
    },
    setColor(e, t) {
      g[e].copy(t);
      for (let n of Ee)
        for (let r = 0; r < N[n]; r++) s[n].setColorAt(e * N[n] + r, t);
      for (let t of Ee) b(s[t].instanceColor, e * N[t] * 3, N[t] * 3);
    },
    setFaction(e, t) {
      ((m[e] = +(t === 1)), this.setIdentity(e, h[e]));
    },
    setIdentity(e, t) {
      h[e] = t;
      let n = ue(t);
      d[e] = n;
      let i = m[e],
        a = [1, 0.94, 1.04, 0.98][n.uniform],
        o = new p(
          r ? (i === 0 ? 13160915 : 11843258) : i === 0 ? 13220758 : 3552827,
        ).multiplyScalar(a),
        c = new p(
          r ? (i === 0 ? 5268061 : 7220268) : i === 0 ? 4344643 : 8137258,
        ),
        l = new p(se[n.face].skin),
        u = +(n.face % 3 == 0);
      for (let t of Ee) {
        let n = s[t].geometry.attributes.iCloth;
        for (let r = 0; r < N[t]; r++) n.setXYZ(e * N[t] + r, o.r, o.g, o.b);
        b(n, e * N[t] * 3, N[t] * 3);
        let r = s[t].geometry.attributes.iGear;
        for (let n = 0; n < N[t]; n++) r.setXYZ(e * N[t] + n, c.r, c.g, c.b);
        b(r, e * N[t] * 3, N[t] * 3);
        let i = s[t].geometry.attributes.iSkin;
        for (let n = 0; n < N[t]; n++)
          i.setXYZW(e * N[t] + n, l.r, l.g, l.b, u);
        b(i, e * N[t] * 4, N[t] * 4);
      }
    },
    flush() {
      for (let e of c) e.count = 0;
      for (let e = 0; e < x; e++) {
        if (f[e].elements[15] === 0) continue;
        let t = c[m[e] * se.length + d[e].face],
          n = t.count++;
        (t.setMatrixAt(n, f[e]),
          t.setColorAt(n, g[e]),
          r && t.geometry.attributes.thermalStrength.setX(n, _[e]));
      }
      for (let e of l) e && (e.count = 0);
      for (let e = 0; e < x; e++) {
        let t = l[d[e].kit];
        if (!t || u[e].elements[15] === 0) continue;
        let n = t.count++;
        (t.setMatrixAt(n, u[e]),
          t.setColorAt(n, g[e]),
          r && t.geometry.attributes.thermalStrength.setX(n, _[e]));
      }
      for (let e of [...c, ...l])
        e?.count &&
          ((e.instanceMatrix.needsUpdate = !0),
          (e.instanceColor.needsUpdate = !0),
          r && (e.geometry.attributes.thermalStrength.needsUpdate = !0));
      s.head.count = 0;
      for (let e of Ee) {
        let t = v[e];
        t.last < t.first ||
          (b(s[e].instanceMatrix, t.first * 16, (t.last - t.first + 1) * 16),
          (t.first = 1 / 0),
          (t.last = -1));
      }
    },
    dispose() {
      t.remove(o);
      for (let e of Ee) (s[e].geometry.dispose(), s[e].dispose());
      a.dispose();
      for (let e of [...c, ...l]) e && (e.geometry.dispose(), e.dispose());
    },
  };
}
function Be() {
  let e = (e, t, n = 0, r = 0, i = 0, a = `XYZ`) => {
      let o = new _();
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
    u = e(`legR`, n, ge, 0, 0);
  return {
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
    shinL: e(`shinL`, l, 0, -0.37, 0),
    shinR: e(`shinR`, u, 0, -0.37, 0),
    weapon: e(`weapon`, r, 0, 0, 0, `YXZ`),
  };
}
function Ve(e, t, n, r, i, a = 0, o = null, s = `assault`) {
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
  for (let [t, [i, a, o]] of Object.entries(Te))
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
            ? we.copy(o.matrixWorld).scale(Ce)
            : o.matrixWorld
          : z,
      );
    }
  (n.setMatrix(`torso`, r, 0, c ? e.torso.matrixWorld : z),
    n.setMatrix(
      `kit`,
      r,
      0,
      c && !Ne[s]?.includes(le[n.kitOf(r)]) ? e.torso.matrixWorld : z,
    ),
    n.setMatrix(`head`, r, 0, c ? e.head.matrixWorld : z));
  for (let t of [`assault`, `sniper`, `support`, `engineer`, `medic`])
    n.setMatrix(t, r, 0, c && t === s ? e.torso.matrixWorld : z);
  (n.setMatrix(`arm`, r, 0, c ? e.armL.matrixWorld : z),
    n.setMatrix(`arm`, r, 1, c ? e.armR.matrixWorld : z),
    n.setMatrix(`fore`, r, 0, c ? e.foreL.matrixWorld : z),
    n.setMatrix(`fore`, r, 1, c ? e.foreR.matrixWorld : z));
  let l =
    a < 0 || (a >= 31 && a <= 34)
      ? null
      : a === 9 || a === 10
        ? `breaker`
        : a === 8
          ? `kite`
          : `weapon`;
  for (let t of [`weapon`, `kite`, `breaker`])
    n.setMatrix(t, r, 0, c && t === l ? e.weapon.matrixWorld : z);
  (n.setMatrix(`thigh`, r, 0, we.copy(e.legL.matrixWorld).scale(Ce)),
    n.setMatrix(`thigh`, r, 1, we.copy(e.legR.matrixWorld).scale(Ce)),
    n.setMatrix(`shin`, r, 0, we.copy(e.shinL.matrixWorld).scale(Ce)),
    n.setMatrix(`shin`, r, 1, we.copy(e.shinR.matrixWorld).scale(Ce)));
}
var He = (e) => ((e = e < 0 ? 0 : e > 1 ? 1 : e), e * e * (3 - 2 * e));
