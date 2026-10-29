// assets__kepler-view-goYpYVca 02 — fillstyle
// Lines 70-740 of readable/assets__kepler-view-goYpYVca.pretty.js (statement-aligned).
function Oe(e, t, n) {
  let i = [],
    a = (e) => (i.push(e), e),
    s = 29,
    c = () => (s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296,
    u = (e, t, n, r = [1, 1]) => {
      let i = document.createElement(`canvas`);
      ((i.width = e), (i.height = t), n(i.getContext(`2d`), e, t));
      let o = a(new pe(i));
      return (
        (o.wrapS = o.wrapT = oe),
        o.repeat.set(...r),
        (o.colorSpace = ne),
        (o.anisotropy = 8),
        o
      );
    },
    f = (e, t, n, r, i = 0.12) => {
      for (let a = 0; a < r; a++) {
        let r = c() * t,
          a = c() * n,
          o = 10 + c() * n * 0.4,
          s = e.createLinearGradient(r, a, r, a + o);
        (s.addColorStop(0, `rgba(20,18,16,${i * c()})`),
          s.addColorStop(1, `rgba(20,18,16,0)`),
          (e.fillStyle = s),
          e.fillRect(r, a, 1 + c() * 4, o));
      }
    },
    p = (e, t, n, r, i = 0.08) => {
      for (let a = 0; a < r; a++)
        ((e.fillStyle = `rgba(${c() < 0.5 ? `0,0,0` : `255,255,255`},${c() * i})`),
          e.fillRect(c() * t, c() * n, 1 + c() * 2, 1 + c() * 2));
    },
    h = new ie();
  ((h.name = `kepler-detail`), t.add(h));
  let g = u(
      512,
      512,
      (e, t, n) => {
        ((e.fillStyle = `#3d434b`), e.fillRect(0, 0, t, n));
        for (let t = 0; t < 4; t++)
          ((e.fillStyle = `rgba(${c() < 0.5 ? `0,0,0` : `255,255,255`},${0.03 + c() * 0.05})`),
            e.fillRect((t % 2) * 256, (t >> 1) * 256, 256, 256));
        (p(e, t, n, 6e3, 0.06),
          f(e, t, n, 60, 0.18),
          (e.strokeStyle = `rgba(15,17,20,.85)`),
          (e.lineWidth = 3));
        for (let r of [0, 256, 512])
          (e.beginPath(),
            e.moveTo(r, 0),
            e.lineTo(r, n),
            e.stroke(),
            e.beginPath(),
            e.moveTo(0, r),
            e.lineTo(t, r),
            e.stroke());
        ((e.strokeStyle = `rgba(200,205,210,.08)`), (e.lineWidth = 1));
        for (let r of [3, 259])
          (e.beginPath(),
            e.moveTo(r, 0),
            e.lineTo(r, n),
            e.stroke(),
            e.beginPath(),
            e.moveTo(0, r),
            e.lineTo(t, r),
            e.stroke());
        e.fillStyle = `rgba(12,13,15,.7)`;
        for (let t = 10; t < n; t += 24)
          for (let n of [8, 248, 264, 504]) e.fillRect(n - 2, t - 2, 4, 4);
        ((e.fillStyle = `rgba(217,169,31,.55)`),
          (e.font = `bold 22px monospace`),
          e.fillText(`K-7`, 30, 60),
          e.fillText(`K-8`, 286, 316),
          (e.fillStyle = `rgba(230,230,225,.35)`),
          (e.font = `14px monospace`),
          e.fillText(`PRESSURE HULL · DO NOT DRILL`, 30, 230),
          (e.fillStyle = `rgba(30,34,40,.9)`),
          e.fillRect(300, 60, 120, 70),
          (e.strokeStyle = `rgba(217,169,31,.6)`),
          e.strokeRect(300, 60, 120, 70),
          (e.fillStyle = `rgba(217,169,31,.7)`),
          (e.font = `bold 13px monospace`),
          e.fillText(`O2 · N2`, 326, 90),
          e.fillText(`VALVE 7-14`, 318, 112));
      },
      [45, 12],
    ),
    te = u(
      256,
      64,
      (e, t, n) => {
        ((e.fillStyle = `#d9a91f`),
          e.fillRect(0, 0, t, n),
          (e.fillStyle = `#1b1c1e`));
        for (let r = -64; r < t + 64; r += 32)
          (e.beginPath(),
            e.moveTo(r, 0),
            e.lineTo(r + 16, 0),
            e.lineTo(r - 16, n),
            e.lineTo(r - 32, n),
            e.fill());
        (p(e, t, n, 800, 0.25), f(e, t, n, 20, 0.3));
      },
      [45, 1],
    ),
    y = a(new l({ map: g, roughness: 0.75, metalness: 0.35 })),
    b = a(new l({ map: te, roughness: 0.8, metalness: 0.1 }));
  (g.repeat.set(1, 1), te.repeat.set(1, 1));
  let S = { panel: [], hazard: [] },
    C = (e, t, n, r, i, a, o, s) => {
      let c = new E(e, t),
        l = c.attributes.uv,
        u = n === b ? 1 : t / 8;
      for (let e = 0; e < l.count; e++)
        l.setXY(e, l.getX(e) * s, l.getY(e) * u);
      (c.rotateY(o),
        c.translate(r, i, a),
        S[n === b ? `hazard` : `panel`].push(c));
    },
    ae = N.x1 - N.x0,
    w = N.z1 - A.wz;
  (C(ae, N.h - 1.2, y, 0, 13.2 + (N.h - 1.2) / 2, N.z1 - 0.02, Math.PI, ae / 8),
    C(ae, 1.2, b, 0, 12.6, N.z1 - 0.025, Math.PI, ae / 2));
  for (let e of [-1, 1]) {
    let t = e < 0 ? N.x0 + 0.02 : N.x1 - 0.02;
    (C(
      w,
      N.h - 1.2,
      y,
      t,
      13.2 + (N.h - 1.2) / 2,
      (A.wz + N.z1) / 2,
      (-e * Math.PI) / 2,
      w / 8,
    ),
      C(
        w,
        1.2,
        b,
        t + (e < 0 ? 0.005 : -0.005),
        12.6,
        (A.wz + N.z1) / 2,
        (-e * Math.PI) / 2,
        w / 2,
      ));
  }
  for (let [e, t] of [
    [`panel`, y],
    [`hazard`, b],
  ]) {
    let n = new r(a(O(S[e])), t);
    (S[e].forEach((e) => e.dispose()), (n.receiveShadow = !0), h.add(n));
  }
  {
    let e = { orange: [], blue: [], grey: [], dark: [] },
      t = { orange: 13133354, blue: 4156042, grey: 9080725, dark: 2764340 };
    for (let t of n.kepler?.pipes ?? []) {
      let n = t.alongX ? t.x1 - t.x0 : t.z1 - t.z0;
      t.runs.forEach(([r, i, a], o) => {
        let s = new D(i, i, n, 10, 1, !0);
        (s.rotateZ(Math.PI / 2),
          t.alongX || s.rotateY(Math.PI / 2),
          s.translate(
            t.alongX ? (t.x0 + t.x1) / 2 : t.x,
            12 + t.y + r,
            t.alongX ? t.z : (t.z0 + t.z1) / 2,
          ),
          e[a].push(s));
        for (let a = 3; a < n - 1; a += 6) {
          let n = new D(i * 1.45, i * 1.45, 0.12, 10);
          (n.rotateZ(Math.PI / 2),
            t.alongX || n.rotateY(Math.PI / 2),
            n.translate(
              t.alongX ? t.x0 + a : t.x,
              12 + t.y + r,
              t.alongX ? t.z : t.z0 + a,
            ),
            e.dark.push(n));
        }
      });
      for (let r = 1.5; r < n; r += 3) {
        let n = new o(
          t.alongX ? 0.08 : 0.5,
          t.runs.length * 0.42 + 0.2,
          t.alongX ? 0.5 : 0.08,
        );
        (n.translate(
          t.alongX ? t.x0 + r : t.x + (t.x > 0 ? 0.15 : -0.15),
          12 + t.y + t.runs.reduce((e, t) => e + t[0], 0) / t.runs.length,
          t.alongX ? t.z + (t.z > 0 ? 0.15 : -0.15) : t.z0 + r,
        ),
          e.dark.push(n));
      }
    }
    for (let [n, i] of Object.entries(e)) {
      if (!i.length) continue;
      let e = new r(
        a(O(i)),
        a(new l({ color: t[n], roughness: 0.5, metalness: 0.5 })),
      );
      (i.forEach((e) => e.dispose()),
        (e.castShadow = !0),
        (e.receiveShadow = !0),
        h.add(e));
    }
  }
  {
    let e = u(256, 256, (e, t, n) => {
        ((e.fillStyle = `#25292e`),
          e.fillRect(0, 0, t, n),
          (e.fillStyle = `#565c64`));
        for (let r = 0; r < t; r += 8) e.fillRect(r, 0, 3, n);
        e.fillStyle = `#4a5058`;
        for (let r = 0; r < n; r += 32) e.fillRect(0, r, t, 4);
        (p(e, t, n, 1500, 0.12), f(e, t, n, 12, 0.25));
      }),
      t = [],
      i = [],
      o = [],
      s = 0;
    for (let e of n.objects) {
      if (
        e.kind !== `box` ||
        e.material !== `grating` ||
        e.sy > 0.4 ||
        e.rotX ||
        e.ry
      )
        continue;
      let n = e.y + e.sy + 0.012,
        r = e.x - e.sx / 2,
        a = e.x + e.sx / 2,
        c = e.z - e.sz / 2,
        l = e.z + e.sz / 2;
      (t.push(r, n, c, a, n, c, a, n, l, r, n, l),
        i.push(r, c, a, c, a, l, r, l),
        o.push(s, s + 2, s + 1, s, s + 3, s + 2),
        (s += 4));
    }
    if (s) {
      let n = a(new m());
      (n.setAttribute(`position`, new x(t, 3)),
        n.setAttribute(`uv`, new x(i, 2)),
        n.setIndex(o),
        n.computeVertexNormals());
      let s = new r(
        n,
        a(
          new l({
            map: e,
            roughness: 0.6,
            metalness: 0.6,
            polygonOffset: !0,
            polygonOffsetFactor: -1,
            polygonOffsetUnits: -2,
          }),
        ),
      );
      ((s.receiveShadow = !0), h.add(s));
    }
  }
  let T = u(256, 256, (e, t, n) => {
      ((e.fillStyle = `#d9a91f`),
        e.fillRect(0, 0, t, n),
        p(e, t, n, 2500, 0.15),
        f(e, t, n, 40, 0.35),
        (e.fillStyle = `#1b1c1e`));
      for (let r = -64; r < t + 64; r += 40)
        (e.beginPath(),
          e.moveTo(r, n - 40),
          e.lineTo(r + 20, n - 40),
          e.lineTo(r, n),
          e.lineTo(r - 20, n),
          e.fill());
      e.fillStyle = `rgba(30,30,30,.8)`;
      for (let [t, n] of [
        [30, 30],
        [226, 30],
        [30, 170],
        [226, 170],
      ])
        (e.beginPath(), e.arc(t, n, 9, 0, 7), e.fill());
      ((e.font = `bold 30px monospace`),
        e.fillText(`CRADLE`, 70, 110),
        (e.font = `16px monospace`),
        e.fillText(`SWL 4000 t`, 80, 140));
    }),
    se = u(512, 256, (e, t, n) => {
      ((e.fillStyle = `#8a8f95`),
        e.fillRect(0, 0, t, n),
        p(e, t, n, 5e3, 0.08));
      for (let t = 0; t < 8; t++)
        ((e.fillStyle = `rgba(${c() < 0.5 ? `40,44,50` : `170,175,180`},.15)`),
          e.fillRect((t % 4) * 128, (t >> 2) * 128, 127, 127));
      ((e.strokeStyle = `rgba(30,32,36,.6)`), (e.lineWidth = 2));
      for (let r = 0; r <= t; r += 128)
        (e.beginPath(), e.moveTo(r, 0), e.lineTo(r, n), e.stroke());
      (e.beginPath(),
        e.moveTo(0, 128),
        e.lineTo(t, 128),
        e.stroke(),
        (e.fillStyle = `#1a2330`));
      for (let n = 24; n < t; n += 48)
        (e.beginPath(), e.arc(n, 64, 9, 0, 7), e.fill());
      e.fillStyle = `rgba(120,170,220,.35)`;
      for (let n = 24; n < t; n += 48)
        (e.beginPath(), e.arc(n - 2, 62, 4, 0, 7), e.fill());
      ((e.fillStyle = `rgba(217,169,31,.7)`),
        e.fillRect(0, n - 14, t, 6),
        f(e, t, n, 40, 0.2));
    });
  {
    let e = (e, t) =>
      u(256, 256, (n, r, i) => {
        (n.clearRect(0, 0, r, i),
          (n.strokeStyle = t),
          (n.lineWidth = 10),
          (n.globalAlpha = 0.75),
          n.beginPath(),
          n.arc(128, 128, 118, 0, 7),
          n.stroke(),
          n.setLineDash([18, 14]),
          (n.lineWidth = 5),
          n.beginPath(),
          n.arc(128, 128, 100, 0, 7),
          n.stroke(),
          n.setLineDash([]),
          (n.fillStyle = t),
          (n.font = `bold 120px system-ui`),
          (n.textAlign = `center`),
          (n.textBaseline = `middle`),
          n.fillText(e, 128, 136));
      });
    for (let t of n.objects === void 0 ? [] : n.objectives) {
      let n = e(t.letter, `#e8e4d8`),
        i = t.radius,
        o = a(new E(i * 2, i * 2));
      o.rotateX(-Math.PI / 2);
      let s = new r(
        o,
        a(
          new _({
            map: n,
            transparent: !0,
            depthWrite: !1,
            opacity: 0.55,
            polygonOffset: !0,
            polygonOffsetFactor: -2,
            polygonOffsetUnits: -4,
          }),
        ),
      );
      (s.position.set(t.pos[0], t.pos[1] + 0.02, t.pos[2]),
        (s.renderOrder = 1),
        h.add(s));
    }
    let t = [],
      i = [];
    for (let [e, r, a] of n.kepler?.lamps ?? []) {
      let n = a > 0 ? 1 : -1,
        s = new o(1.6, 0.7, 1);
      (s.rotateX(n * 0.5), s.translate(e, r - 0.1, a - n * 0.5), t.push(s));
      let c = new E(1.3, 0.5);
      (c.rotateX(-Math.PI / 2 + n * 0.5),
        c.translate(e, r - 0.47, a - n * 0.62),
        i.push(c));
    }
    if (t.length) {
      let e = new r(
        a(O(t)),
        a(new l({ color: 1908773, roughness: 0.5, metalness: 0.7 })),
      );
      ((e.castShadow = !0),
        h.add(e),
        h.add(
          new r(
            a(O(i)),
            a(new _({ color: new v(1.6, 1.2, 0.7), toneMapped: !1, side: 2 })),
          ),
        ),
        t.forEach((e) => e.dispose()),
        i.forEach((e) => e.dispose()));
    }
  }
  {
    let e = M,
      t = u(256, 256, (e, t, n) => {
        ((e.fillStyle = `#3a4048`),
          e.fillRect(0, 0, t, n),
          p(e, t, n, 9e3, 0.1),
          (e.strokeStyle = `rgba(20,22,26,.6)`),
          (e.lineWidth = 2));
        for (let r = 0; r <= t; r += 64)
          (e.beginPath(),
            e.moveTo(r, 0),
            e.lineTo(r, n),
            e.stroke(),
            e.beginPath(),
            e.moveTo(0, r),
            e.lineTo(t, r),
            e.stroke());
      }),
      n = u(256, 256, (e, t, n) => {
        ((e.fillStyle = `#c9cbc8`),
          e.fillRect(0, 0, t, n),
          p(e, t, n, 2e3, 0.05),
          (e.strokeStyle = `rgba(120,122,120,.8)`),
          (e.lineWidth = 3));
        for (let r = 0; r <= t; r += 64)
          (e.beginPath(),
            e.moveTo(r, 0),
            e.lineTo(r, n),
            e.stroke(),
            e.beginPath(),
            e.moveTo(0, r),
            e.lineTo(t, r),
            e.stroke());
        ((e.fillStyle = `#fff6e2`),
          e.fillRect(70, 70, 116, 52),
          e.fillRect(70, 134, 116, 52));
      }),
      i = a(
        new l({
          map: t,
          roughness: 0.95,
          metalness: 0,
          polygonOffset: !0,
          polygonOffsetFactor: -1,
          polygonOffsetUnits: -2,
        }),
      ),
      o = a(
        new l({
          map: n,
          emissive: 16777215,
          emissiveMap: n,
          emissiveIntensity: 0.28,
          roughness: 0.8,
          metalness: 0,
        }),
      ),
      s = (t, n, r) => {
        let i = new E(e.x1 - e.x0 - 0.3, e.z1 - e.z0 - 0.3);
        i.rotateX(n ? Math.PI / 2 : -Math.PI / 2);
        let a = i.attributes.uv;
        for (let t = 0; t < a.count; t++)
          a.setXY(
            t,
            (a.getX(t) * (e.x1 - e.x0)) / r,
            (a.getY(t) * (e.z1 - e.z0)) / r,
          );
        return (i.translate((e.x0 + e.x1) / 2, t, (e.z0 + e.z1) / 2), i);
      };
    for (let [t, n] of [
      [i, [s(12.013, !1, 2), s(12 + e.f1 + 0.013, !1, 2)]],
      [o, [s(12 + e.f1 - 0.215, !0, 3), s(12 + e.roof - 0.215, !0, 3)]],
    ]) {
      let e = new r(a(O(n)), t);
      (n.forEach((e) => e.dispose()), (e.receiveShadow = !0), h.add(e));
    }
  }
  let ce = [
      u(512, 256, (e, t, n) => {
        ((e.fillStyle = `#3f6a8a`), e.fillRect(0, 0, t, n));
        for (let r = 0; r < t; r += 12)
          ((e.fillStyle = `rgba(0,0,0,.22)`),
            e.fillRect(r, 0, 4, n),
            (e.fillStyle = `rgba(255,255,255,.08)`),
            e.fillRect(r + 6, 0, 3, n));
        ((e.fillStyle = `rgba(0,0,0,.35)`),
          e.fillRect(0, 0, t, 10),
          e.fillRect(0, n - 12, t, 12),
          p(e, t, n, 3e3, 0.08),
          f(e, t, n, 40, 0.3),
          (e.fillStyle = `rgba(235,235,230,.85)`),
          (e.font = `bold 26px monospace`),
          e.fillText(`KDYU 204117 3`, 22, 46),
          (e.font = `16px monospace`),
          e.fillText(`22G1 · MAX GROSS 30480 KG`, 22, 70),
          (e.fillStyle = `rgba(217,169,31,.9)`),
          e.fillRect(t - 120, n - 60, 96, 28),
          (e.fillStyle = `#111`),
          (e.font = `bold 16px monospace`),
          e.fillText(`BAY 7`, t - 104, n - 40));
      }),
      u(256, 256, (e, t, n) => {
        ((e.fillStyle = `#3f6a8a`),
          e.fillRect(0, 0, t, n),
          (e.fillStyle = `rgba(0,0,0,.4)`),
          e.fillRect(t / 2 - 2, 0, 4, n));
        for (let t of [40, 90, 166, 216])
          ((e.fillStyle = `#2a3035`),
            e.fillRect(t - 4, 10, 8, n - 20),
            (e.fillStyle = `#8a8f95`),
            e.fillRect(t - 8, n / 2 - 6, 16, 12));
        (p(e, t, n, 1500, 0.08), f(e, t, n, 20, 0.3));
      }),
      u(256, 256, (e, t, n) => {
        ((e.fillStyle = `#30343a`),
          e.fillRect(0, 0, t, n),
          (e.strokeStyle = `#d9a91f`),
          (e.lineWidth = 14),
          e.strokeRect(7, 7, t - 14, n - 14),
          (e.strokeStyle = `rgba(0,0,0,.5)`),
          (e.lineWidth = 3),
          e.beginPath(),
          e.moveTo(20, 20),
          e.lineTo(t - 20, n - 20),
          e.moveTo(t - 20, 20),
          e.lineTo(20, n - 20),
          e.stroke(),
          (e.fillStyle = `rgba(235,235,230,.8)`),
          (e.font = `bold 22px monospace`),
          e.fillText(`KEPLER`, 70, 118),
          (e.font = `14px monospace`),
          e.fillText(`FRAGILE · 4 t`, 78, 142),
          (e.fillStyle = `#d9a91f`));
        for (let [r, i] of [
          [0, 0],
          [t - 30, 0],
          [0, n - 30],
          [t - 30, n - 30],
        ])
          e.fillRect(r, i, 30, 30);
        (p(e, t, n, 1500, 0.1), f(e, t, n, 15, 0.25));
      }),
      se,
      T,
      u(512, 128, (e, t, n) => {
        ((e.fillStyle = `#7b6a52`), e.fillRect(0, 0, t, n));
        for (let r = 0; r < n; r += 14)
          ((e.fillStyle = `rgba(30,26,20,.55)`),
            e.fillRect(0, r, t, 3),
            (e.fillStyle = `rgba(255,240,220,.08)`),
            e.fillRect(0, r + 4, t, 2));
        (p(e, t, n, 2e3, 0.1),
          (e.fillStyle = `rgba(240,240,240,.7)`),
          (e.font = `bold 18px monospace`),
          e.fillText(`HP-112 · 40 mm`, 20, 40),
          e.fillText(`QA ✓`, t - 80, 90));
      }),
      u(256, 256, (e, t, n) => {
        ((e.fillStyle = `#7b6a52`),
          e.fillRect(0, 0, t, n),
          p(e, t, n, 3e3, 0.1),
          f(e, t, n, 25, 0.2),
          (e.strokeStyle = `rgba(30,26,20,.6)`),
          (e.lineWidth = 2),
          e.strokeRect(6, 6, t - 12, n - 12),
          (e.fillStyle = `rgba(240,240,240,.6)`),
          (e.font = `bold 20px monospace`),
          e.fillText(`ARGENT CV-07`, 40, 120),
          e.fillText(`FRAME 31`, 70, 150));
      }),
      u(256, 256, (e, t, n) => {
        ((e.fillStyle = `#8c8a82`),
          e.fillRect(0, 0, t, n),
          p(e, t, n, 5e3, 0.12),
          f(e, t, n, 30, 0.3),
          (e.fillStyle = `#d9a91f`),
          e.fillRect(0, n - 50, t, 22),
          (e.fillStyle = `#1b1c1e`));
        for (let r = -40; r < t + 40; r += 36)
          (e.beginPath(),
            e.moveTo(r, n - 50),
            e.lineTo(r + 18, n - 50),
            e.lineTo(r, n - 28),
            e.lineTo(r - 18, n - 28),
            e.fill());
        ((e.fillStyle = `rgba(30,30,30,.7)`),
          (e.font = `bold 26px monospace`),
          e.fillText(`BLAST`, 80, 110));
      }),
    ],
    le = u(2048, 1024, (e) => {
      ce.forEach((t, n) =>
        e.drawImage(t.image, (n % 4) * 512, Math.floor(n / 4) * 512, 512, 512),
      );
    });
  ((le.wrapS = le.wrapT = ee), le.repeat.set(1, 1));
  let ue = (e) => [
      (e % 4) * 0.25 + 0.002,
      1 - (Math.floor(e / 4) + 1) * 0.5 + 0.004,
      0.246,
      0.492,
    ],
    de = {
      container: { re: /^(?:[ns]-cont-\d+)$/, cells: [1, 1, 0, 0, 0, 0] },
      crate: {
        re: /^(?:[ns]-crate-\d+|inner-crate-\d+|collar-cargo-\d+)$/,
        cells: [2, 2, 2, 2, 2, 2],
      },
      superstructure: {
        re: /^(?:bridge-[123]|turret|turret-barbette)$/,
        cells: [3, 3, 3, 3, 3, 3],
      },
      cradle: {
        re: /^(?:cradle--?[\d.]+|bow-trestle|pod-stand)$/,
        cells: [4, 4, 4, 4, 4, 4],
      },
      barrier: { re: /^(?:hq\d-barrier--?\d+)$/, cells: [7, 7, 7, 7, 7, 7] },
      plates: {
        re: /^(?:[ns]-plates-\d+|c-pallet-\d+|scaf-pallet-\d+|plate-stack)$/,
        cells: [5, 5, 6, 6, 5, 5],
      },
    },
    fe = [],
    k = new Map(),
    me = new he(),
    ge = new re(),
    j = new d(0, 1, 0),
    _e = 0;
  for (let e of Object.values(de))
    for (let t of n.objects) {
      if (t.kind !== `box` || !e.re.test(t.id)) continue;
      let n = t.sz > t.sx * 1.05,
        r = (n ? t.sz : t.sx) + 0.02,
        i = (n ? t.sx : t.sz) + 0.02;
      ge.setFromAxisAngle(j, n ? Math.PI / 2 : 0);
      let a = new o(1, 1, 1).toNonIndexed(),
        s = a.attributes.uv;
      for (let t = 0; t < 6; t++) {
        let [n, r, i, a] = ue(e.cells[t]);
        for (let e = 0; e < 6; e++) {
          let o = t * 6 + e;
          s.setXY(o, n + s.getX(o) * i, r + s.getY(o) * a);
        }
      }
      (a.applyMatrix4(
        me.compose(
          new d(t.x, t.y + t.sy / 2, t.z),
          ge,
          new d(r, t.sy + 0.01, i),
        ),
      ),
        k.set(t.id, { start: _e, count: a.attributes.position.count }),
        (_e += a.attributes.position.count),
        fe.push(a));
    }
  let ve = a(O(fe));
  fe.forEach((e) => e.dispose());
  let ye = new r(ve, a(new l({ map: le, roughness: 0.62, metalness: 0.35 })));
  ((ye.name = `kepler-skins`), (ye.receiveShadow = !0), h.add(ye));
  let be = k.size,
    xe = (t) => {
      let r = k.get(t);
      if (!r) return;
      let i = ve.attributes.position,
        a = i.getX(r.start),
        o = i.getY(r.start),
        s = i.getZ(r.start);
      for (let e = r.start; e < r.start + r.count; e++) i.setXYZ(e, a, o, s);
      ((i.needsUpdate = !0), k.delete(t));
      let c = e.modules.get(`demo`);
      for (let e of [`-band`, `-skid`])
        n.objects.some((n) => n.id === t + e) &&
          c?.setObjectVisible?.(t + e, !1);
    },
    Se = e.events.on(`destruction:state`, (e) => {
      e?.id && k.has(e.id) && xe(e.id);
    });
  return {
    stats: () => ({ skins: be, hidden: be - k.size }),
    hide: xe,
    dispose() {
      (Se?.(), t.remove(h));
      for (let e of i) e.dispose?.();
    },
  };
}
