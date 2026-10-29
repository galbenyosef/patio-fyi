// assets__player-BLC8lD2a 06 — math
// Lines 1797-2061 of readable/assets__player-BLC8lD2a.pretty.js (statement-aligned).
function Re(
  e,
  t,
  { hole: n = null, ribbon: r = { x: 8, z0: 6, z1: -130 } } = {},
) {
  let i = Ie(t),
    a = (r.z0 + r.z1) / 2,
    o = 1200,
    s = (e, t) => {
      let n = Math.max(0, Math.abs(e) - r.x - 6),
        i = Math.max(0, Math.max(t - (r.z0 + 10), r.z1 - 10 - t));
      return Math.hypot(n, i);
    },
    c = (e, t) => {
      let n = s(e, t);
      if (n < 30) return 0;
      let r = G((n - 30) / 260, 0, 1) ** 1.5 * 34;
      return (
        (i(e, t, 190) * 0.62 +
          i(e + 400, t - 250, 74) * 0.28 +
          i(e - 900, t + 600, 26) * 0.1 -
          0.5) *
        2 *
        r
      );
    },
    l = {
      grass: new e.Color(8622173),
      grassLight: new e.Color(10069100),
      grassDry: new e.Color(11446135),
      dirt: new e.Color(9865827),
      moss: new e.Color(6912075),
      far: new e.Color(8161880),
    },
    u = new e.Color();
  new e.Color();
  let d = (e, t, n) => {
      let r = i(e, t, 42),
        a = i(e + 700, t + 310, 13),
        o = i(e - 220, t + 90, 160);
      return (
        u.copy(l.grass).lerp(l.grassLight, K(G((r - 0.35) * 1.9, 0, 1))),
        u.lerp(l.moss, K(G((0.42 - o) * 1.7, 0, 1)) * 0.55),
        u.lerp(l.grassDry, K(G((o - 0.6) * 2.2, 0, 1)) * 0.7),
        a > 0.86 && u.lerp(l.dirt, (a - 0.86) * 4.2),
        n > 0.5 && u.lerp(l.grassDry, G(n / 26, 0, 0.35)),
        n < -0.5 && u.lerp(l.moss, G(-n / 26, 0, 0.3)),
        u.multiplyScalar(0.94 + 0.12 * i(e + 33, t - 77, 7)),
        u
      );
    },
    f = n ? Math.min(n[0], n[2]) : 0,
    p = n ? Math.max(n[0], n[2]) : 0,
    m = n ? Math.min(n[1], n[3]) : 0,
    h = n ? Math.max(n[1], n[3]) : 0,
    g = Le(0, 96, 6, o, 1.22, n ? [f, p] : []),
    _ = Le(a, 110, 6, o, 1.22, n ? [m, h] : []),
    v = [],
    y = [],
    b = (e, t) => {
      v.push(e, c(e, t), t);
    };
  for (let e = 0; e < g.length - 1; e++)
    for (let t = 0; t < _.length - 1; t++) {
      let r = g[e],
        i = g[e + 1],
        a = _[t],
        o = _[t + 1];
      if (n && r >= f - 1e-4 && i <= p + 1e-4 && a >= m - 1e-4 && o <= h + 1e-4)
        continue;
      let s = (r + i) / 2,
        l = (a + o) / 2;
      (b(r, a), b(r, o), b(i, o));
      let u = d((r * 2 + i) / 3, (a + o * 2) / 3, c(s, l));
      for (let e = 0; e < 3; e++) y.push(u.r, u.g, u.b);
      (b(r, a),
        b(i, o),
        b(i, a),
        (u = d((r + i * 2) / 3, (a * 2 + o) / 3, c(s, l))));
      for (let e = 0; e < 3; e++) y.push(u.r, u.g, u.b);
    }
  let x = new e.BufferGeometry();
  (x.setAttribute(`position`, new e.Float32BufferAttribute(v, 3)),
    x.setAttribute(`color`, new e.Float32BufferAttribute(y, 3)),
    x.computeVertexNormals());
  let S = new e.MeshStandardMaterial({
      vertexColors: !0,
      flatShading: !0,
      roughness: 1,
      metalness: 0,
    }),
    C = new e.Mesh(x, S);
  ((C.name = `playerField`), (C.receiveShadow = !0));
  let w = [],
    T = (t, n) => {
      let r = new e.BufferGeometry();
      (r.setAttribute(`position`, new e.Float32BufferAttribute(n, 3)),
        r.computeVertexNormals(),
        R(r, t),
        w.push(r));
    },
    E = (t, n, r, i, a, o, s, c = 0.35) => {
      let l = new e.ConeGeometry(i, a, o).toNonIndexed();
      (l.translate(t, n + a / 2, r),
        R(l, s, { aoBase: n, aoHeight: a, aoStrength: c }),
        w.push(l));
    },
    D = (t, n, r, i, a, o, s) => {
      let c = new e.BoxGeometry(i, a, o).toNonIndexed();
      (c.translate(t, n + a / 2, r),
        R(c, s, { aoBase: n, aoHeight: a * 1.2, aoStrength: 0.4 }),
        w.push(c));
    },
    O = [8293202, 9280094, 10134632, 7372105];
  for (let e = 0; e < 150; e++) {
    let e = (t.next() < 0.5 ? -1 : 1) * (r.x + 1.2 + t.next() ** 2 * 30),
      n = r.z0 + 8 - t.next() * (r.z0 - r.z1 + 30),
      i = 5 + Math.floor(t.next() * 5),
      a = O[Math.floor(t.next() * O.length)];
    for (let r = 0; r < i; r++) {
      let r = t.next() * Math.PI * 2,
        i = t.next() ** 0.6 * 0.55,
        o = e + Math.cos(r) * i,
        s = n + Math.sin(r) * i,
        c = 0.34 + t.next() * 0.36,
        l = 0.1 + t.next() * 0.12,
        u = t.next() * Math.PI;
      T(a, [
        o - Math.cos(u) * l,
        0,
        s - Math.sin(u) * l,
        o + Math.cos(u) * l,
        0,
        s + Math.sin(u) * l,
        o + (t.next() - 0.5) * 0.22,
        c,
        s + (t.next() - 0.5) * 0.22,
      ]);
    }
  }
  for (let e = 0; e < 150; e++) {
    let e = t.next() * Math.PI * 2,
      n = 40 + t.next() ** 0.7 * 105,
      i = Math.sin(e) * n,
      o = a + Math.cos(e) * n * 1.4;
    if (Math.abs(i) < r.x + 6 && o < r.z0 + 12 && o > r.z1 - 12) continue;
    let s = c(i, o),
      l = 0.5 + t.next() * 0.9;
    E(i, s, o, l * 0.9, l * 1.1, 5, O[Math.floor(t.next() * O.length)], 0.45);
  }
  let k = [4865327, 5588533],
    A = [4150840, 4677696, 3559472, 5465661],
    j = (e, t) =>
      i(e + 1200, t - 800, 240) * 0.62 + i(e - 300, t + 450, 88) * 0.38,
    M = 0;
  for (let n = 0; n < 14e3 && M < 760; n++) {
    let n = t.next() * Math.PI * 2,
      r = 55 + Math.sqrt(t.next()) * 570,
      i = Math.sin(n) * r,
      o = a + Math.cos(n) * r;
    if (s(i, o) < 42 || j(i, o) < 0.48 + t.next() * 0.2) continue;
    M++;
    let l = c(i, o),
      u = 0.8 + t.next() * 0.75,
      d = 1.6 * u;
    D(i, l, o, 0.34 * u, d, 0.34 * u, k[Math.floor(t.next() * 2)]);
    let f = A[Math.floor(t.next() * A.length)];
    if (t.next() < 0.6)
      (E(i, l + d * 0.55, o, 1.9 * u, 4.2 * u, 6, f, 0.3),
        E(i, l + d * 0.55 + 2.6 * u, o, 1.35 * u, 3.4 * u, 6, f, 0.25));
    else {
      let t = new e.IcosahedronGeometry(2.1 * u, 0);
      (t.scale(1, 0.78, 1),
        t.translate(i, l + d + 1.4 * u, o),
        R(t, f, { aoBase: l + d, aoHeight: 3 * u, aoStrength: 0.3 }),
        w.push(t));
    }
  }
  let N = null;
  if (w.length) {
    let t = 0;
    for (let e of w) t += e.attributes.position.count;
    let n = new Float32Array(t * 3),
      r = new Float32Array(t * 3),
      i = new Float32Array(t * 3),
      a = 0;
    for (let e of w) {
      let t = e.attributes.position.array,
        o = e.attributes.normal.array,
        s = e.attributes.color.array;
      (n.set(t, a), r.set(o, a), i.set(s, a), (a += t.length), e.dispose());
    }
    let o = new e.BufferGeometry();
    (o.setAttribute(`position`, new e.BufferAttribute(n, 3)),
      o.setAttribute(`normal`, new e.BufferAttribute(r, 3)),
      o.setAttribute(`color`, new e.BufferAttribute(i, 3)),
      o.computeBoundingSphere());
    let s = new e.MeshStandardMaterial({
      vertexColors: !0,
      flatShading: !0,
      roughness: 0.95,
      metalness: 0,
    });
    ((N = new e.Mesh(o, s)),
      (N.name = `playerFieldScatter`),
      (N.castShadow = !0),
      (N.receiveShadow = !0));
  }
  let P = new e.Group();
  return (
    (P.name = `playerFieldGroup`),
    P.add(C),
    N && P.add(N),
    {
      group: P,
      field: C,
      scatter: N,
      height: c,
      dispose() {
        (x.dispose(),
          S.dispose(),
          N && (N.geometry.dispose(), N.material.dispose()),
          P.parent?.remove(P));
      },
    }
  );
}
var ze = 0.0055,
  q = 56,
  Be = [
    [`fire`, `FIRE`, 26, 104, 84],
    [`ads`, `AIM`, 122, 118, 60],
    [`jump`, `JUMP`, 30, 22, 58],
    [`crouch`, `CROUCH`, 100, 22, 58],
    [`swap`, `SWAP`, 170, 22, 58],
    [`reload`, `RELOAD`, 36, 206, 52],
    [`grenade`, `NADE`, 104, 196, 52],
    [`use`, `USE`, 196, 104, 50],
    [`spot`, `SPOT`, 172, 196, 44],
    [`smoke`, `SMOKE`, 234, 196, 44],
  ],
  Ve = `salient.touch.layout`,
  He = `
#sl-touch{position:fixed;inset:0;z-index:70;touch-action:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;pointer-events:auto}
#sl-touch[hidden]{display:none}
#sl-touch .tb{position:absolute;display:grid;place-items:center;border-radius:50%;border:2px solid #ffffff8c;background:#0b111866;color:#fff;
 font:700 calc(11px*var(--ts,1))/1 system-ui,sans-serif;letter-spacing:.04em;text-shadow:0 1px 2px #000;box-sizing:border-box}
#sl-touch .tb.on{background:#4ee3df70;border-color:#4ee3df}
#sl-touch .tb.fire{background:#b3262666;border-color:#ff8a8acc;font-size:calc(14px*var(--ts,1))}
#sl-touch .tb.fire.on{background:#e0404099}
html.sl-touch-play :is(#voice-toggle,#voice-mic,#game-settings,.squad-key-hint,.squad-aim-hint,.sl-grenades kbd){display:none!important}
#sl-touch.editing{background:#0b1118b0}
#sl-touch.editing .tb{border-style:dashed;border-color:#ffd166}
#sl-touch .editbar{position:absolute;left:50%;top:calc(12px + env(safe-area-inset-top));transform:translateX(-50%);display:flex;gap:10px;align-items:center;color:#fff;font:600 13px system-ui,sans-serif}
#sl-touch .editbar button{padding:8px 16px;border-radius:12px;border:1px solid #ffffff88;background:#1b2a36;color:#fff;font:inherit}
html.sl-touch-play .sl-ammo{right:auto!important;left:50%!important;top:auto!important;bottom:calc(6px + env(safe-area-inset-bottom))!important;transform:translateX(-50%)}
html.sl-touch-play .sl-grenades{right:auto!important;left:50%!important;bottom:calc(54px + env(safe-area-inset-bottom))!important;transform:translateX(-50%)}
#sl-touch .menu{position:absolute;top:calc(10px + env(safe-area-inset-top));right:calc(12px + env(safe-area-inset-right));padding:8px 14px;border-radius:14px;
 border:1px solid #ffffff66;background:#0b1118aa;color:#fff;font:600 12px system-ui,sans-serif}
#sl-touch .stick{position:absolute;width:112px;height:112px;margin:-${q}px 0 0 -${q}px;border-radius:50%;border:2px solid #ffffff70;background:#0b111840;pointer-events:none}
#sl-touch .stick i{position:absolute;left:50%;top:50%;width:48px;height:48px;margin:-24px 0 0 -24px;border-radius:50%;background:#ffffffa0}
#sl-touch .stick.sprint{border-color:#ffd166}
#sl-touch .stick.sprint i{background:#ffd166}
#sl-touch .hint{position:absolute;left:calc(22px + env(safe-area-inset-left));bottom:calc(24px + env(safe-area-inset-bottom));color:#ffffffb0;font:600 12px system-ui,sans-serif;pointer-events:none;text-shadow:0 1px 2px #000}
`;
