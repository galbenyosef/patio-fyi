// assets__greywater-signs-view-b4Ps_Ogz 11 — math
// Lines 4893-5073 of readable/assets__greywater-signs-view-b4Ps_Ogz.pretty.js (statement-aligned).
function Ie(e, t) {
  let n = document.createElement(`canvas`);
  return ((n.width = e), (n.height = t), n);
}
function Le(e) {
  let t = new c(e);
  return (
    (t.colorSpace = y),
    (t.anisotropy = 4),
    (t.minFilter = _),
    (t.magFilter = o),
    t
  );
}
function Re(e = {}, t = ``) {
  let r = Math.max(0.05, Number(e.width) || 3),
    i = Math.max(0.05, Number(e.height) || 1.4),
    a = Math.max(r, i),
    o = a >= 9 ? 2048 : a >= 3.5 ? 1536 : 1024,
    s = Math.max(16, Math.round((o * r) / a)),
    c = Math.max(16, Math.round((o * i) / a)),
    l = Ie(s, c),
    d = Ie(s, c),
    p = Ie(s, c),
    m = l.getContext(`2d`),
    g = d.getContext(`2d`),
    _ = p.getContext(`2d`),
    y = Le(l),
    b = Le(d),
    x = e.faceStyle === `letters`,
    S = e.lighting === `neon`,
    C = { ...Se, ...e.palette },
    w = Ce(`${e.key || e.name || `sign`}:${e.family || ``}`),
    ee = be[w % be.length],
    T = Me(e, s, c, w),
    E = new f({
      map: y,
      emissiveMap: b,
      color: 16777215,
      emissive: 16777215,
      emissiveIntensity: 0.08,
      roughness: S ? 0.39 : 0.69,
      metalness: 0.04,
      transparent: x || !!e.faceShape,
      alphaTest: x ? 0.006 : e.faceShape ? 0.02 : 0,
      depthWrite: !0,
      side: 0,
      polygonOffset: !0,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
    });
  E.name = `Editable ${e.lighting || `flood`} sign artwork`;
  let D = new h(r, i),
    O = new u(D, E),
    k = new v();
  ((k.name = `${e.key || `sign`} editable face`),
    (O.name = `Paint and light`),
    (O.receiveShadow = !x),
    (O.castShadow = !1),
    (O.userData.signFace = !0),
    (O.userData.noStaticBake = !0),
    k.add(O));
  let A,
    j = !1,
    M = 0;
  function te(t) {
    if (j) return;
    let n = String(t ?? ``);
    (m.clearRect(0, 0, s, c),
      g.clearRect(0, 0, s, c),
      m.save(),
      je(m, e, s, c),
      x || Ne(m, s, c, C, w, T, S));
    let r = Math.min(s, c) * (S ? 0.018 : 0.009),
      i = {
        font: ee,
        align: T.align,
        padding: r,
        maxFontSize: Math.min(T.message.height * 0.84, T.message.width * 0.5),
        lineHeight: ee.family.includes(`Georgia`) ? 1.17 : 1.1,
      };
    ((A = Ee(m, n, T.message, i)),
      (A.fitOptions = i),
      (A.textureWidth = s),
      (A.textureHeight = c),
      (A.variant = w % 6),
      (A.lighting = e.lighting || `flood`),
      (A.faceStyle = x ? `letters` : `poster`));
    let a = String(e.brand || e.name || `CUBIE & CO.`),
      o = xe[(w >>> 4) % xe.length];
    (Ae(m, a, T.brand, C.secondary, {
      align: x ? `center` : T.align,
      maxFontSize: Math.min(T.brand.height * 0.77, c * 0.08),
      font: {
        family: w % 2 ? `Georgia, serif` : `Arial, sans-serif`,
        weight: 700,
      },
    }),
      Ae(m, o, T.footer, C.secondary, { align: x ? `center` : T.align }),
      T.icon && Oe(m, e.icon || `star`, T.icon.x, T.icon.y, T.icon.size, C),
      ke(m, A, C, S, !1),
      S
        ? Pe(m, s, c, C, T, !1, x)
        : x ||
          ((m.strokeStyle = C.accent),
          (m.lineWidth = Math.max(1, Math.min(s, c) * 0.004)),
          Z(m, [
            [T.brand.x, c * 0.208],
            [T.brand.x + T.brand.width * 0.38, c * 0.208],
          ]),
          m.stroke()),
      m.restore(),
      S
        ? (g.save(),
          je(g, e, s, c),
          x || ((g.fillStyle = `#000000`), g.fillRect(0, 0, s, c)),
          ke(g, A, C, !0, !0),
          Pe(g, s, c, C, T, !0, x),
          T.icon &&
            Oe(g, e.icon || `star`, T.icon.x, T.icon.y, T.icon.size, C, !0),
          (g.globalAlpha = 0.6),
          Ae(g, a, T.brand, C.secondary, {
            align: x ? `center` : T.align,
            maxFontSize: Math.min(T.brand.height * 0.77, c * 0.08),
            font: {
              family: w % 2 ? `Georgia, serif` : `Arial, sans-serif`,
              weight: 700,
            },
          }),
          g.restore())
        : Fe(g, _, l, e.lighting || `flood`, s, c),
      (y.needsUpdate = !0),
      (b.needsUpdate = !0),
      (O.userData.signLayout = A));
  }
  function N(t) {
    j ||
      ((M = n.clamp(Number(t) || 0, 0, 1)),
      (E.emissiveIntensity = S
        ? 0.08 + M * 2.32
        : e.lighting === `backlit`
          ? 0.025 + M * 1.5
          : 0.015 + M * 0.65),
      (k.userData.night = M));
  }
  function ne() {
    j ||
      ((j = !0),
      y.dispose(),
      b.dispose(),
      E.dispose(),
      D.dispose(),
      k.remove(O),
      (l.width = l.height = d.width = d.height = p.width = p.height = 1));
  }
  return (
    te(t),
    N(0),
    {
      group: k,
      update: te,
      setNight: N,
      dispose: ne,
      get layout() {
        return A;
      },
    }
  );
}
function ze(e) {
  let t = ``,
    n = [];
  for (let r of e.split(/\r?\n/)) {
    / — \d{3}–\d{3}$/.test(r) && (t = r.replace(/ — .*/, ``));
    let e = /^(\d{3})\. (.+)$/.exec(r);
    e && n.push(Object.freeze({ id: +e[1], text: e[2], category: t }));
  }
  if (n.length !== 300 || n.some((e, t) => e.id !== t + 1))
    throw Error(`Expected all 300 numbered copy-bank entries`);
  return Object.freeze(n);
}
