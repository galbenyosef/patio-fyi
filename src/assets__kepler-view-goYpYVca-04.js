// assets__kepler-view-goYpYVca 04 — math
// Lines 1088-2216 of readable/assets__kepler-view-goYpYVca.pretty.js (statement-aligned).
function Fe(e, n, c, h) {
  let C = c.kepler,
    T = { geos: [], mats: [], texs: [] },
    k = (e) => (
      e?.isBufferGeometry
        ? T.geos.push(e)
        : e?.isTexture
          ? T.texs.push(e)
          : e && T.mats.push(e),
      e
    ),
    me = 11,
    M = () => (me = (Math.imul(me, 1664525) + 1013904223) >>> 0) / 4294967296,
    P = new ie();
  ((P.name = `kepler-fixed`), n.add(P));
  let F = new ie();
  ((F.name = `kepler-live`), (F.userData.dynamicShadow = !0), n.add(F));
  let I = new ie();
  ((I.name = `kepler-space`), (I.userData.dynamicShadow = !0), n.add(I));
  let Ae = j.z,
    Fe = 12 + j.y,
    Ie = (e, t, n, r = [1, 1]) => {
      let i = document.createElement(`canvas`);
      ((i.width = e), (i.height = t), n(i.getContext(`2d`), e, t));
      let a = k(new pe(i));
      return (
        (a.wrapS = a.wrapT = oe),
        a.repeat.set(...r),
        (a.colorSpace = ne),
        (a.anisotropy = 8),
        a
      );
    },
    Le = (e, t, n, r, i, a = 0.1) => {
      ((e.fillStyle = r), e.fillRect(0, 0, t, n));
      for (let r = 0; r < i; r++)
        ((e.fillStyle = `rgba(${M() < 0.5 ? `0,0,0` : `255,255,255`},${M() * a})`),
          e.fillRect(M() * t, M() * n, 1 + M() * 2, 1 + M() * 2));
    },
    Re = Ie(256, 256, (e, t, n) => {
      Le(e, t, n, `#8a8f95`, 5e3, 0.08);
      for (let t = 0; t < 9; t++)
        ((e.fillStyle = `rgba(${M() < 0.5 ? `40,44,50` : `170,175,180`},.18)`),
          e.fillRect((t % 3) * 86, Math.floor(t / 3) * 86, 85, 85));
      ((e.strokeStyle = `rgba(30,32,36,.6)`), (e.lineWidth = 2));
      for (let r = 0; r <= t; r += 86)
        (e.beginPath(),
          e.moveTo(r, 0),
          e.lineTo(r, n),
          e.stroke(),
          e.beginPath(),
          e.moveTo(0, r),
          e.lineTo(t, r),
          e.stroke());
      e.fillStyle = `rgba(30,32,36,.5)`;
      for (let r = 6; r < n; r += 14)
        for (let n = 6; n < t; n += 86) e.fillRect(n, r, 2, 2);
    }),
    ze = Ie(256, 256, (e, t, n) => {
      (Le(e, t, n, `#7b6a52`, 4e3, 0.09),
        (e.strokeStyle = `rgba(30,26,20,.55)`),
        (e.lineWidth = 2));
      for (let r = 0; r <= t; r += 64)
        (e.beginPath(), e.moveTo(r, 0), e.lineTo(r, n), e.stroke());
      ((e.fillStyle = `rgba(220,220,220,.5)`),
        (e.font = `10px monospace`),
        e.fillText(`P-114`, 8, 30),
        e.fillText(`QA OK`, 140, 200));
    }),
    Be = N.x1 - N.x0,
    Ve = N.z1 - N.z0,
    He = (e) => e - N.x0,
    Ue = (e) => e - N.z0,
    We = Ie(2048, Math.round((2048 * Ve) / Be), (e, t, n) => {
      Le(e, t, n, `#4c5157`, Math.round((6e4 * Ve) / 100), 0.07);
      let r = t / Be,
        i = n / Ve;
      ((e.strokeStyle = `rgba(25,27,30,.7)`), (e.lineWidth = 2));
      for (let t = 0; t <= Be; t += 4)
        (e.beginPath(), e.moveTo(t * r, 0), e.lineTo(t * r, n), e.stroke());
      for (let n = 0; n <= Ve; n += 4)
        (e.beginPath(), e.moveTo(0, n * i), e.lineTo(t, n * i), e.stroke());
      e.fillStyle = `rgba(30,32,36,.35)`;
      for (let a = 0; a < 45; a++)
        (e.beginPath(),
          e.ellipse(
            M() * t,
            M() * n,
            ((4 + M() * 14) * r) / 4,
            ((3 + M() * 10) * i) / 4,
            M() * 3,
            0,
            7,
          ),
          e.fill());
      e.fillStyle = `rgba(230,230,225,.5)`;
      for (let t = 4; t < Be - 4; t += 6)
        (e.fillRect(t * r, 4 * i, 3 * r, 0.35 * i),
          e.fillRect(t * r, (Ve - 5) * i, 3 * r, 0.35 * i));
      ((e.textAlign = `center`),
        (e.font = `bold ${10 * i}px system-ui`),
        (e.fillStyle = `rgba(217,169,31,.5)`),
        e.fillText(`BAY 7`, He(-6) * r, Ue(-17) * i),
        (e.font = `bold ${2.6 * i}px system-ui`),
        (e.fillStyle = `rgba(230,230,225,.45)`),
        e.fillText(`KEEP CLEAR OF CRADLE`, He(0) * r, Ue(Ae + 9.6) * i),
        e.fillText(`FAB SHOP`, He(-44) * r, Ue(10) * i),
        e.fillText(`DOCKING COLLAR`, He(37) * r, Ue(-18.5) * i),
        (e.fillStyle = `rgba(58,140,255,.35)`),
        e.fillText(`BLUE CREW DECK`, He(-48) * r, Ue(-8) * i),
        (e.fillStyle = `rgba(255,58,42,.35)`),
        e.fillText(`RED CREW DECK`, He(48) * r, Ue(16) * i));
    }),
    Ge = Ie(64, 64, (e) => {
      let t = e.createRadialGradient(32, 32, 0, 32, 32, 32);
      (t.addColorStop(0, `rgba(255,255,255,1)`),
        t.addColorStop(0.25, `rgba(255,255,255,.6)`),
        t.addColorStop(1, `rgba(255,255,255,0)`),
        (e.fillStyle = t),
        e.fillRect(0, 0, 64, 64));
    });
  Ge.wrapS = Ge.wrapT = ee;
  let L = {
      plate: k(new l({ map: Re, roughness: 0.55, metalness: 0.45, side: 2 })),
      primer: k(new l({ map: ze, roughness: 0.75, metalness: 0.2, side: 2 })),
      deck: k(new l({ map: We, roughness: 0.82, metalness: 0.3 })),
      wall: k(new l({ color: 3883080, roughness: 0.7, metalness: 0.4 })),
      frame: k(new l({ color: 2764340, roughness: 0.5, metalness: 0.8 })),
      yellow: k(new l({ color: 14264607, roughness: 0.6, metalness: 0.2 })),
      white: k(new l({ color: 14343648, roughness: 0.45, metalness: 0.1 })),
      orange: k(new l({ color: 14181930, roughness: 0.55, metalness: 0.2 })),
      dark: k(
        new l({ color: 1908773, roughness: 0.5, metalness: 0.7, side: 2 }),
      ),
      glass: k(
        new l({
          color: 10470638,
          roughness: 0.05,
          metalness: 0.2,
          transparent: !0,
          opacity: 0.07,
          depthWrite: !1,
          side: 2,
        }),
      ),
      windowGlass: null,
      solar: k(
        new l({
          color: 1320010,
          roughness: 0.25,
          metalness: 0.85,
          emissive: 132624,
        }),
      ),
      vc: k(new l({ vertexColors: !0, roughness: 0.5, metalness: 0.25 })),
    },
    R = (e, t, n, r, i, a, s = 0) => {
      let c = new o(e, t, n);
      return (s && c.rotateY(s), c.translate(r, i, a), c);
    },
    z = (e, t) => {
      let n = new v(t),
        r = e.attributes.position.count,
        i = new Float32Array(r * 3);
      for (let e = 0; e < r; e++) i.set([n.r, n.g, n.b], e * 3);
      return (
        e.setAttribute(`color`, new f(i, 3)),
        e.index ? e.toNonIndexed() : e
      );
    },
    Ke = (e) => {
      let t = e.map((e) => (e.index ? e.toNonIndexed() : e));
      for (let e of t)
        for (let t of Object.keys(e.attributes))
          [`position`, `normal`, `uv`, `color`].includes(t) ||
            e.deleteAttribute(t);
      for (let e of t)
        e.attributes.uv ||
          e.setAttribute(
            `uv`,
            new x(new Float32Array(e.attributes.position.count * 2), 2),
          );
      let n = O(t);
      for (let t of e) t.dispose();
      return k(n);
    },
    B = (e, t, n = P, { cast: i = !0, receive: a = !0 } = {}) => {
      let o = new r(e, t);
      return ((o.castShadow = i), (o.receiveShadow = a), n.add(o), o);
    };
  {
    let e = k(new E(N.x1 - N.x0, N.z1 - N.z0));
    (e.rotateX(-Math.PI / 2),
      e.translate(0, 12.012, (N.z0 + N.z1) / 2),
      B(e, L.deck, P, { cast: !1 }));
  }
  let qe = Ie(
    1024,
    256,
    (e, t, n) => {
      e.clearRect(0, 0, t, n);
      for (let r = 0; r < 5e3; r++)
        ((e.fillStyle = `rgba(220,230,240,${M() * 0.25})`),
          e.fillRect(M() * t, M() * n, 1, 1));
      for (let r = 0; r < 60; r++) {
        let r = M() * t,
          i = M() * n,
          a = 40 + M() * 160;
        ((e.strokeStyle = `rgba(210,225,240,${0.04 + M() * 0.06})`),
          (e.lineWidth = 1 + M() * 3),
          e.beginPath(),
          e.moveTo(r, i),
          e.quadraticCurveTo(
            r + a * 0.5,
            i + M() * 30 - 15,
            r + a,
            i + M() * 20 - 10,
          ),
          e.stroke());
      }
      let r = e.createLinearGradient(0, n, 0, n - 60);
      (r.addColorStop(0, `rgba(120,110,90,.35)`),
        r.addColorStop(1, `rgba(120,110,90,0)`),
        (e.fillStyle = r),
        e.fillRect(0, n - 60, t, 60));
    },
    [12, 6],
  );
  L.windowGlass = k(
    new l({
      color: 13623536,
      map: qe,
      alphaMap: qe,
      roughness: 0.1,
      metalness: 0.2,
      transparent: !0,
      opacity: 0.55,
      depthWrite: !1,
      side: 2,
    }),
  );
  {
    let e = k(new E(A.x1 - A.x0, N.h - N.sill));
    e.translate(0, 12 + N.sill + (N.h - N.sill) / 2, N.z0 - 0.05);
    let t = B(e, L.windowGlass, P, { cast: !1, receive: !1 });
    t.renderOrder = 3;
    let n = k(new E(N.x1 - N.x0, N.z1 - N.z0));
    (n.rotateX(Math.PI / 2),
      n.translate(0, 12 + N.h + 0.05, (N.z0 + N.z1) / 2));
    let r = B(n, L.glass, P, { cast: !1, receive: !1 });
    r.renderOrder = 3;
    for (let e of [-1, 1]) {
      let t = e < 0 ? N.x0 : N.x1,
        n = A.x1 - N.x1,
        r = A.wz - N.z0,
        i = k(new E(n, r));
      (i.rotateX(Math.PI / 2),
        i.translate(t + (e * n) / 2, 12 + N.h + 0.05, N.z0 + r / 2),
        (B(i, L.glass, P, { cast: !1, receive: !1 }).renderOrder = 3));
      let a = k(new E(r, N.h - N.sill));
      (a.rotateY(Math.PI / 2),
        a.translate(t, 12 + N.sill + (N.h - N.sill) / 2, N.z0 + r / 2),
        (B(a, L.glass, P, { cast: !1, receive: !1 }).renderOrder = 3));
    }
  }
  function Je(e, t, n, r, i = !0) {
    let a = [],
      o = [],
      s = [];
    for (let r = e; r < t - 1e-6; r += n) s.push(r);
    s.push(t);
    for (let e = 0; e < s.length - 1; e++) {
      let t = r(s[e]),
        n = r(s[e + 1]),
        c = t.length,
        l = i ? c : c - 1;
      for (let r = 0; r < l; r++) {
        let i = (r + 1) % c,
          l = (e, t) => [e, Fe + t[1], Ae + t[0]],
          u = [
            l(s[e], t[r]),
            l(s[e + 1], n[r]),
            l(s[e + 1], n[i]),
            l(s[e], t[r]),
            l(s[e + 1], n[i]),
            l(s[e], t[i]),
          ];
        for (let e of u) (a.push(...e), o.push(e[0] / 6, (e[1] + e[2]) / 6));
      }
    }
    let c = new m();
    return (
      c.setAttribute(`position`, new x(a, 3)),
      c.setAttribute(`uv`, new x(o, 2)),
      c.computeVertexNormals(),
      k(c)
    );
  }
  let Ye = (e) => ve(...ge(e)),
    Xe = (e, t) => {
      let n = new fe(Ye(e).map(([e, t]) => new te(e, t))),
        r = new g(n);
      {
        let e = r.attributes.uv;
        for (let t = 0; t < e.count; t++)
          e.setXY(t, e.getX(t) / 6, e.getY(t) / 6);
      }
      return (r.rotateY(-Math.PI / 2), r.translate(e, Fe, Ae), r);
    };
  B(
    Ke([
      Je(j.x0, j.open0, 2, Ye),
      Je(j.open1, j.x1, 2, Ye),
      Xe(j.x0),
      Xe(j.open0),
      Xe(j.open1),
      Xe(j.x1),
    ]),
    L.plate,
  );
  {
    let e = Math.min(j.W, j.H) * 0.42,
      t = j.W,
      n = j.H,
      r = j.inner - j.y;
    B(
      Je(
        j.open0,
        j.open1,
        2,
        () => [
          [t, r],
          [t, -n + e],
          [t - e * 1.4, -n],
          [-t + e * 1.4, -n],
          [-t, -n + e],
          [-t, r],
        ],
        !1,
      ),
      L.primer,
    );
  }
  for (let [e, t] of [
    [0, 0],
    [-3.6, -5],
    [-3.6, 5],
  ]) {
    let n = new D(2.6, 3.6, 6, 24, 1, !0);
    (n.rotateZ(Math.PI / 2),
      n.translate(j.x0 - 3, Fe + e + 1.5, Ae + t),
      B(k(n), L.dark));
  }
  B(
    Je(j.open0 - 6, j.open0, 2, (e) =>
      Ye(e).map(([e, t]) => [e * 1.004, t * 1.004]),
    ),
    L.primer,
    P,
    { cast: !1 },
  );
  for (let [e, t, n] of [
    [C.reactor, L.dark, !0],
    [C.pod, L.white, !1],
  ]) {
    if (!e) continue;
    let r = new D(e.r, e.r, e.x1 - e.x0, 28, 1, !1);
    if (
      (r.rotateZ(Math.PI / 2),
      r.translate((e.x0 + e.x1) / 2, e.y, e.z),
      B(k(r), t),
      n)
    ) {
      let t = k(new _({ color: 6279423, toneMapped: !1 }));
      for (let n of [e.x0 + 0.4, e.x1 - 0.4, (e.x0 + e.x1) / 2]) {
        let r = new s(e.r + 0.1, 0.12, 8, 36);
        (r.rotateY(Math.PI / 2),
          r.translate(n, e.y, e.z),
          B(k(r), t, P, { cast: !1, receive: !1 }));
      }
    } else {
      let n = new p(e.r, 2.4, 24);
      (n.rotateZ(-Math.PI / 2), n.translate(e.x1 + 1.2, e.y, e.z), B(k(n), t));
      let r = new D(e.r * 0.7, e.r * 1.05, 2, 20, 1, !0);
      (r.rotateZ(Math.PI / 2),
        r.translate(e.x0 - 1, e.y, e.z),
        B(k(r), L.dark));
    }
  }
  {
    let e = _e,
      t = 12 + e.y,
      n = new s(e.r, 1.4, 16, 48);
    (n.translate(e.x, t, N.z0 + 0.1), B(k(n), L.white));
    let r = new D(e.r - 1, e.r - 1, 14, 32, 1, !0);
    (r.rotateX(Math.PI / 2), r.translate(e.x, t, N.z0 - 7), B(k(r), L.wall));
    let i = new s(e.r - 0.6, 0.6, 12, 40);
    (i.translate(e.x, t, N.z0 - 14), B(k(i), L.orange));
    let a = new u(e.r - 1.3, 40);
    (a.translate(e.x, t, N.z0 - 1), B(k(a), L.frame));
    let o = new ae(e.r - 1.9, e.r - 1.3, 40);
    (o.translate(e.x, t, N.z0 - 0.97), B(k(o), L.yellow, P, { cast: !1 }));
    let c = new u(1.1, 24);
    (c.translate(e.x, t + 1.6, N.z0 - 0.95),
      B(k(c), k(new _({ color: 12574975, toneMapped: !0 })), P, {
        cast: !1,
        receive: !1,
      }));
  }
  let Ze = {
      sunDir: { value: new d(0, 1, 0) },
      earthDir: { value: new d(...be) },
      lit: { value: 1 },
    },
    Qe = k(
      new S({
        uniforms: Ze,
        vertexColors: !0,
        fog: !1,
        vertexShader: `varying vec3 vN;varying vec3 vC;
   void main(){vC=color;
    #ifdef USE_INSTANCING
     mat4 m=modelMatrix*instanceMatrix;
    #else
     mat4 m=modelMatrix;
    #endif
    vN=normalize(mat3(m)*normal);gl_Position=projectionMatrix*viewMatrix*m*vec4(position,1.);}`,
        fragmentShader: `uniform vec3 sunDir;uniform vec3 earthDir;uniform float lit;varying vec3 vN;varying vec3 vC;
   void main(){vec3 n=normalize(vN);
    float sun=max(dot(n,sunDir),0.)*lit*2.6,earth=max(dot(n,earthDir),0.)*.22*lit;
    gl_FragColor=vec4(vC*(sun+earth*vec3(.55,.7,1.)+.004),1.);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
   }`,
      }),
    ),
    $e = (() => {
      let e = [],
        t = 15264234;
      (e.push(z(new D(1.86, 1.86, 0.25, 40).translate(0, 0.12, 0), 3813414)),
        e.push(z(new D(1.02, 1.86, 3.2, 40).translate(0, 1.85, 0), t)),
        e.push(
          z(new D(0.62, 1.02, 0.7, 32).translate(0, 3.8, 0), t),
          z(new D(0.66, 0.66, 0.25, 32).translate(0, 4.27, 0), 10133670),
        ));
      for (let t of [0, 1, 2, 3]) {
        let n = new o(0.5, 0.32, 0.06);
        (n.translate(0, 2.6, 1.46),
          n.rotateY((t * Math.PI) / 2 + 0.4),
          e.push(z(n, 1053464)));
      }
      let n = new D(1.86, 1.86, 2.8, 40, 1, !0);
      n.translate(0, -1.4, 0);
      let r = n.toNonIndexed(),
        i = r.attributes.position,
        a = new Float32Array(i.count * 3),
        s = new v(1583698),
        c = new v(14474975);
      for (let e = 0; e < i.count; e++) {
        let t = Math.atan2(i.getZ(e), i.getX(e)) > 0 ? s : c;
        a.set([t.r, t.g, t.b], e * 3);
      }
      (r.setAttribute(`color`, new f(a, 3)),
        n.dispose(),
        e.push(r),
        e.push(z(new D(1.86, 1.86, 0.08, 40).translate(0, -2.8, 0), 2764340)));
      for (let t of [0, 1, 2, 3]) {
        let n = new o(0.06, 1.4, 0.5);
        (n.translate(0, -2.1, 2.05),
          n.rotateY((t * Math.PI) / 2 + Math.PI / 4),
          e.push(z(n, 14474975)));
      }
      return Ke(e);
    })(),
    et = (() => {
      let e = [];
      (e.push(
        z(new D(1.53, 1.53, 5.2, 40).translate(0, 2.6, 0), 14275780),
        z(new D(0.9, 1.53, 0.5, 32).translate(0, 5.45, 0), 12567236),
      ),
        e.push(
          z(new D(1.53, 1.53, 1.3, 32).translate(0, -0.65, 0), 3816770),
          z(new D(0.5, 0.8, 0.6, 16).translate(0, -1.6, 0), 1908773),
        ));
      for (let t of [-1, 1]) {
        e.push(z(new o(2.2, 0.12, 0.12).translate(t * 2.6, -0.6, 0), 9080725));
        let n = new u(1.9, 10);
        (n.rotateY((t * Math.PI) / 2),
          n.translate(t * 3.71, -0.6, 0),
          e.push(z(n, 1715286)));
        let r = new u(1.9, 10);
        (r.rotateY((-t * Math.PI) / 2),
          r.translate(t * 3.69, -0.6, 0),
          e.push(z(r, 12106944)));
      }
      return Ke(e);
    })(),
    V = [],
    tt = (e, t = F) => {
      let n = new r(e, Qe);
      return ((n.frustumCulled = !1), t.add(n), n);
    },
    nt = tt($e, P);
  (nt.position.set(_e.x, 12 + _e.y, N.z0 - 14 - 4.4),
    nt.quaternion.setFromUnitVectors(new d(0, 1, 0), new d(0, 0, 1)));
  let rt = new d(...be).negate(),
    it = new d(...Se).negate(),
    at = (2 * Math.PI) / 180,
    H = {
      m: tt($e),
      hold: new d(10, 32, N.z0 - 60),
      d: (e) => 25 + 575 * Math.exp(-e / 400),
    };
  (H.m.quaternion.setFromUnitVectors(new d(0, 1, 0), it.clone().negate()),
    V.push(
      [H.m, new d(1.9, 1.2, 0), 16777215, `strobe`],
      [H.m, new d(0, 4.3, 0.7), 16777215, `rcs0`],
      [H.m, new d(0.7, 4.3, 0), 16777215, `rcs1`],
    ));
  let U = { m: tt(et), from: new d(30, 42, N.z0 - 30), vx: 0.04, vy: 0.08 };
  (U.m.quaternion.setFromUnitVectors(new d(0, 1, 0), it),
    V.push(
      [U.m, new d(1.6, 3, 0), 16777215, `strobe2`],
      [U.m, new d(0, -1.6, 1.2), 16777215, `rcs2`],
    ));
  let ot = new ie();
  F.add(ot);
  {
    let e = new D(4, 4, 13, 32);
    e.rotateZ(Math.PI / 2);
    let t = new o(3, 2.6, 3);
    t.translate(-8.2, 0, 0);
    let n = new r(Ke([z(e, 14474975), z(t, 13136938)]), Qe);
    ((n.frustumCulled = !1),
      ot.add(n),
      V.push(
        [ot, new d(-9.8, 0, -1.2), 16773328, `rcs3`],
        [ot, new d(-8.2, 1.5, 0), 16777215, `strobe3`],
      ));
  }
  V.push([null, new d(-620, 532, -1250), 16777215, `far`]);
  {
    let e = [],
      t = [],
      n = [],
      r = N.z0 - 60;
    e.push(
      R(1400, 4, 4, 0, -40, r + 6),
      R(1400, 4, 4, 0, -40, r - 6),
      R(4, 40, 30, A.x0 + 10, -20, N.z0 - 20),
      R(4, 40, 30, A.x1 - 10, -20, N.z0 - 20),
    );
    for (let t = -650; t <= 650; t += 26) e.push(R(1, 1, 16, t, -40, r));
    for (let n of [-560, -420, -280, 280, 420, 560]) {
      e.push(R(2, 2, 200, n, -40, r));
      for (let e of [-36, 104]) {
        let i = new o(46, 0.4, 120);
        (i.rotateX(0.35), i.translate(n, -40, r - e), t.push(i));
      }
    }
    for (let e of [-180, -130, 130, 180]) n.push(R(30, 50, 0.4, e, -70, r));
    (e.push(
      R(A.x1 - A.x0 + 8, 20, 8, 0, 2, N.z0 - 4),
      R(8, N.h + 24, 8, A.x0 - 4, 12 + N.h / 2 - 4, N.z0 - 4),
      R(8, N.h + 24, 8, A.x1 + 4, 12 + N.h / 2 - 4, N.z0 - 4),
      R(A.x1 - A.x0 + 8, 6, 8, 0, 12 + N.h + 3, N.z0 - 4),
    ),
      B(
        Ke([
          ...e.map((e) => z(e, 6975350)),
          ...t.map((e) => z(e, 1583698)),
          ...n.map((e) => z(e, 14474975)),
        ]),
        Qe,
        P,
        { cast: !1 },
      ));
  }
  let W = new ie();
  ((W.name = `kepler-crane`),
    F.add(W),
    B(k(R(2, 2, N.z1 - N.z0 - 4, 0, 52, (N.z0 + N.z1) / 2)), L.yellow, W, {
      cast: !1,
    }));
  let st = B(k(R(4, 1.6, 4, 0, 0, 0)), L.dark, W, { cast: !1 });
  st.position.y = 50.6;
  let ct = B(k(R(9, 0.35, 5.5, 0, 0, 0)), L.primer, W, { cast: !1 }),
    lt = k(new m());
  lt.setAttribute(`position`, new x(new Float32Array(12), 3));
  let ut = new ce(lt, k(new a({ color: 2236962 })));
  ((ut.frustumCulled = !1), W.add(ut));
  let dt = C.arms,
    ft = [
      [k(new D(0.7, 0.9, 0.6, 16)), L.dark],
      [k(R(3.2, 0.55, 0.6, 1.6, 0, 0)), L.orange],
      [k(R(2.6, 0.45, 0.5, 1.3, 0, 0)), L.orange],
      [k(R(0.6, 0.3, 0.3, 0.3, 0, 0)), L.dark],
    ].map(([e, t]) => {
      let n = new de(e, t, dt.length);
      return (
        (n.castShadow = !1),
        (n.receiveShadow = !0),
        (n.frustumCulled = !1),
        F.add(n),
        n
      );
    }),
    G = (() => {
      let e = new y(),
        t = new y(),
        n = new y(),
        r = new y(),
        i = new y(),
        a = new y();
      return (
        e.add(t),
        (t.position.y = -0.3),
        t.add(n),
        (n.position.y = 0.6),
        n.add(r),
        (r.position.x = 3.2),
        r.add(i),
        (i.position.x = 2.6),
        i.add(a),
        (a.position.x = 0.7),
        { base: e, yawJ: t, sh: n, el: r, wr: i, tip: a }
      );
    })(),
    pt = k(
      new t({
        map: Ge,
        color: 13625087,
        blending: 2,
        depthWrite: !1,
        transparent: !0,
        fog: !1,
      }),
    ),
    mt = dt.map(() => {
      let e = new se(pt);
      return (e.scale.setScalar(1.6), (e.visible = !1), F.add(e), e);
    }),
    K = new Float32Array(2100),
    q = new Float32Array(2100),
    ht = new Float32Array(700),
    gt = new Float32Array(700);
  for (let e = 0; e < 700; e++) K[e * 3 + 1] = -1e3;
  let _t = k(new m());
  _t.setAttribute(`position`, new f(K, 3));
  let vt = new w(
    _t,
    k(
      new b({
        color: 16761466,
        size: 0.14,
        map: Ge,
        blending: 2,
        depthWrite: !1,
        transparent: !0,
        fog: !1,
      }),
    ),
  );
  ((vt.frustumCulled = !1), F.add(vt));
  let yt = 0,
    bt = (() => {
      let e = 15001320,
        t = [
          z(R(0.8, 1, 0.55, 0, 0, 0), e),
          z(R(0.55, 0.5, 0.55, 0, 0.8, 0), e),
          z(R(0.42, 0.3, 0.05, 0, 0.82, 0.29), 13146682),
          z(R(0.7, 0.9, 0.4, 0, 0, -0.45), e),
        ];
      for (let n of [-1, 1]) {
        t.push(z(R(0.3, 0.9, 0.3, n * 0.22, -0.95, 0), e));
        let r = new o(0.25, 0.8, 0.25);
        (r.rotateX(-0.9), r.translate(n * 0.55, 0.1, 0.2), t.push(z(r, e)));
      }
      return Ke(t);
    })(),
    xt = [
      [-40, 30],
      [-31, 22],
      [12, 38],
      [48, 18],
    ].map(([e, t], n) => ({
      base: new d(e, 12 + t, N.z0 - 1.9),
      anchor: new d(Math.round(e / 9) * 9, 12 + t + 3, N.z0 - 0.8),
      ph: n * 1.7,
    })),
    St = new de(bt, Qe, xt.length);
  ((St.frustumCulled = !1), F.add(St));
  let Ct = k(new m());
  Ct.setAttribute(`position`, new x(new Float32Array(xt.length * 6), 3));
  let wt = new ce(Ct, k(new a({ color: 14209200 })));
  ((wt.frustumCulled = !1), F.add(wt));
  for (let e of xt) V.push([null, e.base, 16773584, `helmet`, e]);
  let Tt = new Float32Array(V.length * 3),
    Et = new Float32Array(V.length * 3),
    Dt = k(new m());
  (Dt.setAttribute(`position`, new f(Tt, 3)),
    Dt.setAttribute(`color`, new f(Et, 3)));
  let Ot = new w(
    Dt,
    k(
      new b({
        size: 1.2,
        map: Ge,
        vertexColors: !0,
        blending: 2,
        depthWrite: !1,
        transparent: !0,
        fog: !1,
        sizeAttenuation: !0,
      }),
    ),
  );
  ((Ot.frustumCulled = !1), F.add(Ot));
  let kt = e.camera.far || 4e3,
    J = Math.min(2800, kt * 0.7),
    At = new r(
      k(new i(kt * 0.95, 24, 12)),
      k(new _({ color: 0, side: 1, fog: !1, depthWrite: !1 })),
    );
  ((At.renderOrder = -10), (At.frustumCulled = !1), I.add(At));
  let jt = k(
    new b({
      color: 16777215,
      size: 1.6,
      sizeAttenuation: !1,
      transparent: !0,
      depthWrite: !1,
      fog: !1,
    }),
  );
  {
    let e = [],
      t = [],
      n = new d(...be),
      r = Math.cos(ye - 0.004);
    for (let i = 0; i < 9e3; i++) {
      let i = new d(M() * 2 - 1, M() * 2 - 1, M() * 2 - 1).normalize();
      if (i.dot(n) > r) continue;
      (i.multiplyScalar(J * 1.3), e.push(i.x, i.y, i.z));
      let a = 0.5 + M() * 0.5,
        o = M();
      t.push(a * (o > 0.8 ? 1 : 0.85), a * 0.9, a * (o < 0.2 ? 1 : 0.85));
    }
    let i = k(new m());
    (i.setAttribute(`position`, new x(e, 3)),
      i.setAttribute(`color`, new x(t, 3)),
      (jt.vertexColors = !0));
    let a = new w(i, jt);
    ((a.frustumCulled = !1), (a.renderOrder = -9), I.add(a));
  }
  let Mt = J * Math.sin(ye),
    Nt = new d(...be),
    Pt = (e, t, n) => {
      let r = new i(e, 256, n, 0, Math.PI * 2, 0, (t * Math.PI) / 180);
      return k(r);
    },
    Ft = new re().setFromUnitVectors(new d(0, 1, 0), Nt.clone().negate()),
    It =
      (e.config.quality ?? `high`) === `high` &&
      (e.renderer.capabilities.maxTextureSize ?? 0) >= 4096,
    Lt = ke(e.renderer, { size: It ? 4096 : 2048 }),
    Rt = k(je(Lt.texture, Lt.fields)),
    Y = Rt.uniforms,
    X = new r(Pt(Mt, 50, 96), Rt);
  (X.quaternion.copy(Ft),
    (X.frustumCulled = !1),
    (X.renderOrder = -8),
    I.add(X));
  let zt = new r(Pt(Mt * 1.008, 58, 64), k(Me(Y.sunDir)));
  (zt.quaternion.copy(Ft),
    (zt.frustumCulled = !1),
    (zt.renderOrder = -7),
    I.add(zt));
  let Bt = new d(...xe),
    Vt = (() => {
      let e = Nt.clone().negate(),
        t = new d(...xe),
        n = new d().crossVectors(e, t),
        r = (51.6 * Math.PI) / 180,
        i = new d(Math.cos(0.9), 0, Math.sin(0.9)),
        a = new d(0, Math.cos(r), 0)
          .addScaledVector(new d(-Math.sin(0.9), 0, Math.cos(0.9)), Math.sin(r))
          .normalize(),
        o = new d().crossVectors(i, a),
        s = new he().makeBasis(e, t, n);
      return new he().makeBasis(i, a, o).multiply(s.transpose());
    })(),
    Ht = new he(),
    Ut = new d(0, 1, 0).addScaledVector(Nt, -Nt.y).normalize(),
    Wt = {
      pole: {
        value: Nt.clone()
          .negate()
          .multiplyScalar(Math.cos(0.61))
          .addScaledVector(Ut, Math.sin(0.61))
          .normalize(),
      },
      sunDir: Y.sunDir,
      time: { value: 0 },
      dark: { value: 0 },
    },
    Gt = Pt(1, 60, 60),
    Kt = [0, 0.25, 0.5, 0.75, 1].map((e) => {
      let t = new r(Gt, k(Ne(Wt, e, 2)));
      return (
        t.scale.setScalar(Mt * (1.016 + 0.03 * e)),
        t.quaternion.copy(Ft),
        (t.frustumCulled = !1),
        (t.renderOrder = -6),
        I.add(t),
        t
      );
    }),
    qt = new d(0.62, 0.42, -0.66).normalize(),
    Jt = new r(
      k(new i(J * 1.2 * Math.tan((0.26 * Math.PI) / 180), 32, 16)),
      k(
        new S({
          uniforms: { sunDir: Y.sunDir },
          fog: !1,
          vertexShader: `varying vec3 vN;varying vec3 vP;void main(){vN=normalize(mat3(modelMatrix)*normal);vP=position;gl_Position=projectionMatrix*viewMatrix*modelMatrix*vec4(position,1.);gl_Position.z=gl_Position.w*.99999;}`,
          fragmentShader: `uniform vec3 sunDir;varying vec3 vN;varying vec3 vP;
   float h(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453);}
   void main(){vec3 n=normalize(vN);float d=max(dot(n,sunDir),0.);vec3 q=normalize(vP)*6.;float m=.72+.18*sin(q.x*1.7+sin(q.y*2.3))*sin(q.z*1.3)+.1*h(floor(q*4.));
    gl_FragColor=vec4(vec3(.82,.8,.76)*m*smoothstep(0.,.15,d)*1.6+vec3(.01),1.);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
   }`,
        }),
      ),
    );
  ((Jt.frustumCulled = !1),
    (Jt.renderOrder = -8),
    Jt.position.copy(qt).multiplyScalar(J * 1.2),
    I.add(Jt));
  let Z = Pe();
  (Z.disc.scale.setScalar(J * 1.25 * 0.0096),
    Z.glare.scale.setScalar(J * 1.25 * 0.13),
    I.add(Z.glare, Z.disc));
  let Yt = (() => {
      let e = C.pools ?? [];
      if (!e.length) return null;
      let t = [],
        n = [],
        i = [],
        a = [],
        o = new v();
      e.forEach((e, r) => {
        o.setHex(e.col).multiplyScalar(e.gain);
        for (let [r, a] of [
          [0, 0],
          [1, 0],
          [1, 1],
          [0, 1],
        ])
          (t.push(e.x + (r * 2 - 1) * e.r, e.y, e.z + (a * 2 - 1) * e.r),
            n.push(r, a),
            i.push(o.r, o.g, o.b));
        a.push(r * 4, r * 4 + 2, r * 4 + 1, r * 4, r * 4 + 3, r * 4 + 2);
      });
      let s = k(new m());
      (s.setAttribute(`position`, new x(t, 3)),
        s.setAttribute(`uv`, new x(n, 2)),
        s.setAttribute(`color`, new x(i, 3)),
        s.setIndex(a));
      let c = new r(
        s,
        k(
          new _({
            map: Ge,
            vertexColors: !0,
            blending: 2,
            depthWrite: !1,
            transparent: !0,
            side: 2,
          }),
        ),
      );
      return ((c.renderOrder = 2), (c.frustumCulled = !1), P.add(c), c);
    })(),
    Xt = [
      [-42, 3837183],
      [42, 16726570],
    ].map(([e, t]) => {
      let n = new ue(t, 220, 48, 2);
      return (n.position.set(e, 18, Ae), F.add(n), n);
    }),
    Zt = Oe(e, P, c),
    Q = e.modules.get(`environment`),
    Qt = c.climate.grade,
    $t = {
      key: Qt.key.intensity,
      sky: new v(Qt.hemi.sky),
      ground: new v(Qt.hemi.ground),
      hemi: Qt.hemi.intensity,
      exp: Qt.exposure ?? 1,
    },
    en = { sky: new v(7757887), ground: new v(1975862), hemi: 1.05 },
    tn = new v(Qt.key.color),
    nn = new v(16742970),
    rn = new d(),
    an = [0, 0, 0],
    $ = new d(),
    on = new d(),
    sn = new he(),
    cn = new v(),
    ln = new v(6, 2.6, 1),
    un = new le(),
    dn = new v(),
    fn = $t.exp,
    pn = null,
    mn = 0,
    hn = null,
    gn = (t) => e.events.emit(`ui:message`, { kind: `hint`, text: t, ttl: 4 });
  function _n(t) {
    ((t = Math.min(t || 0, 0.1)),
      (mn += t),
      !Lt.done() && Lt.step(2) && (Y.ready.value = 1));
    let n = e.camera,
      r = Ee(C, h());
    ((hn = r),
      De(r.t, an),
      rn.set(an[0], an[1], an[2]),
      I.position.copy(n.position),
      X.position.copy(Nt).multiplyScalar(J),
      zt.position.copy(X.position));
    for (let e of Kt) e.position.copy(X.position);
    (Z.disc.position.copy(rn).multiplyScalar(J * 1.25),
      Z.glare.position.copy(Z.disc.position),
      Y.sunDir.value.copy(rn),
      (Wt.time.value = h() / 60));
    let i = we(C, h()) || globalThis.__keplerAurora === !0;
    Wt.dark.value = i ? 1 - r.lit : 0;
    for (let e of Kt) e.visible = i && r.lit < 0.97;
    (Ht.makeRotationAxis(Bt, (2 * Math.PI * (h() / 60)) / 9028).premultiply(Vt),
      Y.spin.value.setFromMatrix4(Ht),
      (Y.time.value = mn));
    let a = cn.copy(tn).lerp(nn, r.red * 0.85);
    ((Z.disc.visible = Z.glare.visible = r.lit > 0.001),
      (Z.disc.material.opacity = Z.glare.material.opacity = r.lit),
      Z.disc.material.color.setRGB(8, 7.6, 7).lerp(ln, r.red * 0.8),
      (jt.opacity = 0.3 + 0.7 * (1 - r.lit)),
      Ze.sunDir.value.copy(rn),
      (Ze.lit.value = r.lit),
      Q?.skyDome && (Q.skyDome.visible = !1),
      Q?.clouds && (Q.clouds.visible = !1),
      Q?.fog && (Q.fog.density = Math.min(Q.fog.density, 4e-5)));
    let o = Q?.sunLight,
      s = Q?.hemiLight;
    (o && ((o.intensity = $t.key * r.lit), o.color.copy(a)),
      s &&
        ((s.intensity = en.hemi + ($t.hemi - en.hemi) * r.lit),
        s.color.copy(en.sky).lerp($t.sky, r.lit),
        s.groundColor.copy(en.ground).lerp($t.ground, r.lit)));
    let c = $t.exp * (1 + 1.3 * (1 - r.lit));
    ((fn += (c - fn) * Math.min(1, t * (c > fn ? 0.5 : 2.5))),
      (e.renderer.toneMappingExposure = fn));
    for (let [e, t] of Xt.entries())
      t.intensity = 200 + 90 * Math.sin(mn * 1.6 + e);
    (Yt && Yt.material.color.setScalar(0.22 + 0.63 * (1 - r.lit)),
      pn !== null &&
        r.shadow !== pn &&
        gn(
          r.shadow
            ? `ENTERING EARTH'S SHADOW · 40 s on work lights`
            : `SUNRISE · the bay is back in sunlight`,
        ),
      (pn = r.shadow));
    let l = h() / 60,
      u = Te(l);
    W.position.x = u.x;
    let f = u.z,
      p = 12 + u.y;
    ((st.position.z = f), ct.position.set(0, p, f), (ct.rotation.y = u.yaw));
    {
      let e = lt.attributes.position;
      (e.setXYZ(0, -1.5, 49.8, f),
        e.setXYZ(1, -1.5, p + 0.2, f),
        e.setXYZ(2, 1.5, 49.8, f),
        e.setXYZ(3, 1.5, p + 0.2, f),
        (e.needsUpdate = !0));
    }
    for (let e = 0; e < dt.length; e++) {
      let t = dt[e],
        n = Ce(t, l);
      (G.base.position.set(t.x, t.y, t.z),
        (G.yawJ.rotation.y = n.ya),
        (G.sh.rotation.z = n.sh),
        (G.el.rotation.z = n.el),
        (G.wr.rotation.z = n.wr),
        G.base.updateMatrixWorld(!0),
        ft[0].setMatrixAt(e, sn.copy(G.yawJ.matrixWorld)),
        ft[1].setMatrixAt(e, G.sh.matrixWorld),
        ft[2].setMatrixAt(e, G.el.matrixWorld),
        ft[3].setMatrixAt(e, G.wr.matrixWorld));
      let r = n.on,
        i = mt[e];
      if (((i.visible = r), r)) {
        (G.tip.getWorldPosition($),
          i.position.copy($),
          (i.material.opacity = 0.8),
          i.scale.setScalar(1 + Math.random() * 1.2));
        for (let e = 0; e < 5; e++) {
          let e = yt;
          ((yt = (yt + 1) % 700),
            (K[e * 3] = $.x),
            (K[e * 3 + 1] = $.y),
            (K[e * 3 + 2] = $.z),
            (q[e * 3] = (Math.random() - 0.5) * 5),
            (q[e * 3 + 1] = Math.random() * 3),
            (q[e * 3 + 2] = (Math.random() - 0.5) * 5),
            (ht[e] = 0.6 + Math.random() * 0.9),
            (gt[e] = t.y - 0.55));
        }
      }
    }
    for (let e of ft) e.instanceMatrix.needsUpdate = !0;
    for (let e = 0; e < 700; e++) {
      if (ht[e] <= 0) continue;
      ht[e] -= t;
      let n = e * 3;
      ((q[n + 1] -= 9 * t),
        (K[n] += q[n] * t),
        (K[n + 1] += q[n + 1] * t),
        (K[n + 2] += q[n + 2] * t),
        K[n + 1] < gt[e] &&
          ((K[n + 1] = gt[e]),
          (q[n + 1] *= -0.3),
          (q[n] *= 0.5),
          (q[n + 2] *= 0.5)),
        ht[e] <= 0 && (K[n + 1] = -1e3));
    }
    _t.attributes.position.needsUpdate = !0;
    let m = Math.max(0, (h() - (C.epoch ?? 0)) / 60);
    H.m.position.copy(H.hold).addScaledVector(it, H.d(m));
    {
      let e = at,
        t =
          (U.vx / e) * Math.sin(e * m) +
          ((2 * U.vy) / e) * (1 - Math.cos(e * m)),
        n =
          ((2 * U.vx) / e) * (Math.cos(e * m) - 1) +
          ((4 * U.vy) / e) * Math.sin(e * m) -
          3 * U.vy * m;
      U.m.position.copy(U.from).addScaledVector(rt, t).addScaledVector(it, n);
    }
    ot.position.set(-300 + ((m * 0.12) % 600), -28, N.z0 - 110);
    {
      let e = Ct.attributes.position;
      (xt.forEach((t, n) => {
        let r = $.set(
          t.base.x + Math.sin(mn * 0.3 + t.ph) * 0.4,
          t.base.y + Math.sin(mn * 0.4 + t.ph * 2) * 0.5,
          t.base.z,
        );
        (sn.makeRotationFromEuler(
          un.set(0, Math.PI, 0.15 * Math.sin(mn * 0.25 + t.ph)),
        ),
          sn.setPosition(r),
          St.setMatrixAt(n, sn),
          (t.pos = (t.pos ?? new d()).copy(r)),
          e.setXYZ(n * 2, t.anchor.x, t.anchor.y, t.anchor.z),
          e.setXYZ(n * 2 + 1, r.x, r.y, r.z - 0.4));
      }),
        (e.needsUpdate = !0),
        (St.instanceMatrix.needsUpdate = !0));
    }
    let g = dn;
    (V.forEach(([e, t, n, r, i], a) => {
      let o = 1,
        s = h() / 60;
      (r.startsWith(`strobe`)
        ? (o = (s + a * 0.37) % 2.2 < 0.06 ? 2 : 0)
        : r.startsWith(`rcs`)
          ? (o = (s * 0.31 + a * 0.71) % 7 < 0.12 ? 0.6 : 0)
          : r === `far`
            ? (o = s % 2.6 < 0.05 ? 1.2 : 0)
            : r === `helmet` && (o = 0.5),
        e
          ? (e.updateMatrixWorld(), $.copy(t).applyMatrix4(e.matrixWorld))
          : i
            ? $.copy(i.pos ?? t).add(on.set(0.2, 0.95, 0.3))
            : $.copy(t),
        (Tt[a * 3] = $.x),
        (Tt[a * 3 + 1] = $.y),
        (Tt[a * 3 + 2] = $.z),
        g.setHex(n).multiplyScalar(o),
        (Et[a * 3] = g.r),
        (Et[a * 3 + 1] = g.g),
        (Et[a * 3 + 2] = g.b));
    }),
      (Dt.attributes.position.needsUpdate = Dt.attributes.color.needsUpdate =
        !0));
  }
  return {
    update: _n,
    stats() {
      let e = hn;
      return e
        ? {
            t: +e.t.toFixed(2),
            lit: +e.lit.toFixed(3),
            shadow: e.shadow,
            next: +e.next.toFixed(1),
            exposure: +fn.toFixed(3),
            earth: Lt.done(),
            arms: dt.length,
            detail: Zt.stats(),
            key: Q?.sunLight?.intensity ?? null,
            hemi: Q?.hemiLight?.intensity ?? null,
          }
        : null;
    },
    dispose() {
      n.remove(P, F, I);
      for (let e of ft) e.dispose?.();
      (St.dispose?.(), Zt.dispose(), Lt.dispose(), Z.dispose());
      for (let e of T.geos) e.dispose();
      for (let e of T.mats) e.dispose();
      for (let e of T.texs) e.dispose();
      Q?.skyDome && (Q.skyDome.visible = !0);
    },
  };
}
