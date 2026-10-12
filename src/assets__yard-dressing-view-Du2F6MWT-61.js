// assets__yard-dressing-view-Du2F6MWT 61 — math
// Lines 16940-17145 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
function Ho(e) {
  let t = (e, t, n, r, i, a) => {
      let o = new v(e, t);
      return (
        o.position.set(n, r, i),
        (o.castShadow = o.receiveShadow = !0),
        a.add(o),
        o
      );
    },
    n = (t, n, r, i = 0) => {
      let a = new D();
      return (a.position.set(t, n, r), (a.rotation.y = i), e.add(a), a);
    };
  function i(i, a, o, s = Po) {
    let l = n(i, s, a, o);
    (t(new r(0.09, 1.05, 0.09), Lo.post, 0, 0.525, 0, l),
      t(new r(0.16, 0.05, 0.36), Lo.post, 0, 1.06, 0.02, l),
      t(new r(0.19, 0.13, 0.48), Lo.box, 0, 1.15, 0.04, l),
      t(
        new c(0.095, 0.095, 0.48, 14, 1, !1, -Math.PI / 2, Math.PI).rotateX(
          Math.PI / 2,
        ),
        Lo.box,
        0,
        1.215,
        0.04,
        l,
      ),
      t(new r(0.02, 0.2, 0.04), Lo.flag, 0.105, 1.26, -0.08, l),
      t(new r(0.02, 0.07, 0.12), Lo.flag, 0.105, 1.33, -0.02, l),
      e.contact(i, s, a, 0.35, 0.3));
  }
  function a(r, i, a, o, s = 0.15) {
    let l = n(r, s, i, Math.atan2(a, o));
    (t(new c(0.15, 0.16, 0.08, 16), Lo.hydrant, 0, 0.04, 0, l),
      t(new c(0.11, 0.12, 0.52, 16), Lo.hydrant, 0, 0.34, 0, l),
      t(new c(0.135, 0.135, 0.05, 16), Lo.hydrant, 0, 0.62, 0, l),
      t(
        new ae(0.115, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2),
        Lo.cap,
        0,
        0.645,
        0,
        l,
      ),
      t(new c(0.02, 0.03, 0.06, 5), Lo.cap, 0, 0.78, 0, l),
      t(
        new c(0.065, 0.065, 0.13, 12).rotateX(Math.PI / 2),
        Lo.hydrant,
        0,
        0.42,
        0.13,
        l,
      ),
      t(
        new c(0.075, 0.075, 0.03, 6).rotateX(Math.PI / 2),
        Lo.cap,
        0,
        0.42,
        0.2,
        l,
      ));
    for (let e of [-1, 1])
      (t(
        new c(0.042, 0.042, 0.12, 10).rotateZ(Math.PI / 2),
        Lo.hydrant,
        e * 0.15,
        0.46,
        0,
        l,
      ),
        t(
          new c(0.05, 0.05, 0.025, 6).rotateZ(Math.PI / 2),
          Lo.cap,
          e * 0.215,
          0.46,
          0,
          l,
        ));
    e.contact(r, s, i, 0.4, 0.35);
  }
  function o(e, i, a, o, s = 0.15) {
    let c = n(e, s, i, Math.atan2(-a, -o));
    t(new r(0.06, 2.55, 0.06), Lo.galv, 0, 1.275, -0.04, c);
    let l = new x(0.38, 8).rotateZ(Math.PI / 8);
    (t(l, zo, 0, 2.15, 0, c),
      t(l.clone().rotateY(Math.PI), Lo.back, 0, 2.15, -0.005, c));
  }
  function s(e, i, a, o, s = 0.15) {
    let c = n(e, s, i);
    (t(new r(0.06, 3.1, 0.06), Lo.galv, 0, 1.55, 0, c),
      t(new r(1.05, 0.165, 0.02), Vo(a), 0, 2.86, 0, c),
      t(new r(1.05, 0.165, 0.02).rotateY(Math.PI / 2), Vo(o), 0, 3.04, 0, c));
  }
  function l(i, a, o, s, l = 0.15) {
    let u = n(i, l, a, Math.atan2(o, s));
    (t(new c(0.075, 0.12, 8, 10), Lo.galv, 0, 4, 0, u),
      t(new c(0.16, 0.2, 0.5, 10), Lo.galv, 0, 0.25, 0, u));
    let d = t(
      new c(0.04, 0.05, 2.3, 8).rotateX(Math.PI / 2),
      Lo.galv,
      0,
      7.95,
      1.1,
      u,
    );
    ((d.rotation.x = -0.1),
      t(new r(0.34, 0.16, 0.72).translate(0, 0, 0.1), Lo.head, 0, 8.1, 2.35, u),
      t(new r(0.26, 0.02, 0.5), Lo.lens, 0, 8.01, 2.45, u),
      e.contact(i, l, a, 0.45, 0.3));
  }
  function u(t, n, r, i, a, o, s = 0.15) {
    let c = de(Fo[t], o ?? ue[Math.abs(Math.round(n * 3 + r * 7)) % ue.length]);
    (c.position.set(n, s, r),
      (c.rotation.y = Math.atan2(i, a)),
      c.traverse((e) => {
        e.isMesh && (e.castShadow = e.receiveShadow = !0);
      }),
      e.add(c),
      e.contact(n, s + 0.005, r, 2.3, 0.5));
  }
  return { mailbox: i, hydrant: a, stop: o, names: s, lamp: l, car: u };
}
var Uo = 48,
  Wo = 170,
  Go = 90,
  Ko = 8,
  qo = 55,
  Jo = 45,
  Yo = 1.3,
  Xo = 55,
  Zo = new Map();
function Qo(e) {
  return (
    e.isMeshStandardMaterial &&
    !e.isMeshPhysicalMaterial &&
    !e.transparent &&
    !e.alphaTest &&
    !e.emissiveMap &&
    !e.normalMap &&
    !e.onBeforeCompile?.toString().includes(`uTime`) &&
    (!e.emissive || e.emissive.getHex() === 0 || e.emissiveIntensity === 0)
  );
}
function $o(e) {
  let t = `${e.map?.uuid ?? `-`}|${Math.round(e.roughness * 8)}|${Math.round(e.metalness * 4)}|${e.side}|${e.flatShading}`;
  return (
    Zo.has(t) ||
      Zo.set(
        t,
        new b({
          map: e.map ?? null,
          roughness: Math.round(e.roughness * 8) / 8,
          metalness: Math.round(e.metalness * 4) / 4,
          side: e.side,
          flatShading: e.flatShading,
          vertexColors: !0,
        }),
      ),
    Zo.get(t)
  );
}
function es(e, t) {
  let n = e.attributes.position.count,
    r = e.attributes.color,
    i = new Float32Array(n * 3);
  for (let e = 0; e < n; e++) {
    let n = r ? [r.getX(e), r.getY(e), r.getZ(e)] : [1, 1, 1];
    ((i[e * 3] = n[0] * t.r),
      (i[e * 3 + 1] = n[1] * t.g),
      (i[e * 3 + 2] = n[2] * t.b));
  }
  return (e.setAttribute(`color`, new s(i, 3)), e);
}
function ts(e) {
  let t = [],
    n = new u(),
    r = new y(),
    i = e.material.color ?? new y(1, 1, 1);
  for (let a = 0; a < e.count; a++) {
    e.getMatrixAt(a, n);
    let o = e.geometry.clone().applyMatrix4(n.premultiply(e.matrixWorld));
    (e.instanceColor ? e.getColorAt(a, r) : r.setRGB(1, 1, 1),
      t.push(es(o, r.multiply(i))));
  }
  let a = t.length > 1 ? ie(t) : t[0];
  for (let e of t) e !== a && e.dispose();
  return a;
}
var ns = () => new Promise((e) => setTimeout(e, 0)),
  rs = 3e3;
function is(e) {
  let t = e.geometry.attributes.position.count,
    n = Math.min(12, Math.ceil((e.count * t) / rs));
  if (n < 2) return;
  let r = new u(),
    i = new u().makeScale(...[, , ,].fill(Math.min(2.2, Math.sqrt(n)))),
    a = new y(),
    o = 0;
  for (let t = 0; t < e.count; t += n, o++)
    (e.getMatrixAt(t, r),
      e.setMatrixAt(o, r.multiply(i)),
      e.instanceColor && (e.getColorAt(t, a), e.setColorAt(o, a)));
  e.count = o;
}
