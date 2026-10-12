// assets__kepler-view-jIBABGFb 04 — math
// Lines 1085-2224 of readable/assets__kepler-view-jIBABGFb.pretty.js (statement-aligned).
function Fe(o, c, l, m) {
  let x = l.kepler,
    C = { geos: [], mats: [], texs: [] },
    T = (e) => (
      e?.isBufferGeometry
        ? C.geos.push(e)
        : e?.isTexture
          ? C.texs.push(e)
          : e && C.mats.push(e),
      e
    ),
    oe = 11,
    M = () => (oe = (Math.imul(oe, 1664525) + 1013904223) >>> 0) / 4294967296,
    P = new se();
  ((P.name = `kepler-fixed`), c.add(P));
  let F = new se();
  ((F.name = `kepler-live`), (F.userData.dynamicShadow = !0), c.add(F));
  let I = new se();
  ((I.name = `kepler-space`), (I.userData.dynamicShadow = !0), c.add(I));
  let Ae = j.z,
    Fe = 12 + j.y,
    Ie = (e, t, n, r = [1, 1]) => {
      let i = document.createElement(`canvas`);
      ((i.width = e), (i.height = t), n(i.getContext(`2d`), e, t));
      let a = T(new h(i));
      return (
        (a.wrapS = a.wrapT = ie),
        a.repeat.set(...r),
        (a.colorSpace = ce),
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
  Ge.wrapS = Ge.wrapT = a;
  let L = {
      plate: T(new y({ map: Re, roughness: 0.55, metalness: 0.45, side: 2 })),
      primer: T(new y({ map: ze, roughness: 0.75, metalness: 0.2, side: 2 })),
      deck: T(new y({ map: We, roughness: 0.82, metalness: 0.3 })),
      wall: T(new y({ color: 3883080, roughness: 0.7, metalness: 0.4 })),
      frame: T(new y({ color: 2764340, roughness: 0.5, metalness: 0.8 })),
      yellow: T(new y({ color: 14264607, roughness: 0.6, metalness: 0.2 })),
      white: T(new y({ color: 14343648, roughness: 0.45, metalness: 0.1 })),
      orange: T(new y({ color: 14181930, roughness: 0.55, metalness: 0.2 })),
      dark: T(
        new y({ color: 1908773, roughness: 0.5, metalness: 0.7, side: 2 }),
      ),
      glass: T(
        new y({
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
      solar: T(
        new y({
          color: 1320010,
          roughness: 0.25,
          metalness: 0.85,
          emissive: 132624,
        }),
      ),
      vc: T(new y({ vertexColors: !0, roughness: 0.5, metalness: 0.25 })),
    },
    R = (e, t, n, i, a, o, s = 0) => {
      let c = new r(e, t, n);
      return (s && c.rotateY(s), c.translate(i, a, o), c);
    },
    z = (e, t) => {
      let n = new v(t),
        r = e.attributes.position.count,
        i = new Float32Array(r * 3);
      for (let e = 0; e < r; e++) i.set([n.r, n.g, n.b], e * 3);
      return (
        e.setAttribute(`color`, new s(i, 3)),
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
            new E(new Float32Array(e.attributes.position.count * 2), 2),
          );
      let n = D(t);
      for (let t of e) t.dispose();
      return T(n);
    },
    B = (e, t, n = P, { cast: r = !0, receive: i = !0 } = {}) => {
      let a = new _(e, t);
      return ((a.castShadow = r), (a.receiveShadow = i), n.add(a), a);
    };
  {
    let e = T(new w(N.x1 - N.x0, N.z1 - N.z0));
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
  L.windowGlass = T(
    new y({
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
    let e = T(new w(A.x1 - A.x0, N.h - N.sill));
    e.translate(0, 12 + N.sill + (N.h - N.sill) / 2, N.z0 - 0.05);
    let t = B(e, L.windowGlass, P, { cast: !1, receive: !1 });
    t.renderOrder = 3;
    let n = T(new w(N.x1 - N.x0, N.z1 - N.z0));
    (n.rotateX(Math.PI / 2),
      n.translate(0, 12 + N.h + 0.05, (N.z0 + N.z1) / 2));
    let r = B(n, L.glass, P, { cast: !1, receive: !1 });
    r.renderOrder = 3;
    for (let e of [-1, 1]) {
      let t = e < 0 ? N.x0 : N.x1,
        n = A.x1 - N.x1,
        r = A.wz - N.z0,
        i = T(new w(n, r));
      (i.rotateX(Math.PI / 2),
        i.translate(t + (e * n) / 2, 12 + N.h + 0.05, N.z0 + r / 2),
        (B(i, L.glass, P, { cast: !1, receive: !1 }).renderOrder = 3));
      let a = T(new w(r, N.h - N.sill));
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
    let c = new d();
    return (
      c.setAttribute(`position`, new E(a, 3)),
      c.setAttribute(`uv`, new E(o, 2)),
      c.computeVertexNormals(),
      T(c)
    );
  }
  let Ye = (e) => ve(...ge(e)),
    Xe = (e, t) => {
      let n = new pe(Ye(e).map(([e, t]) => new g(e, t))),
        r = new me(n);
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
    let n = new u(2.6, 3.6, 6, 24, 1, !0);
    (n.rotateZ(Math.PI / 2),
      n.translate(j.x0 - 3, Fe + e + 1.5, Ae + t),
      B(T(n), L.dark));
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
    [x.reactor, L.dark, !0],
    [x.pod, L.white, !1],
  ]) {
    if (!e) continue;
    let r = new u(e.r, e.r, e.x1 - e.x0, 28, 1, !1);
    if (
      (r.rotateZ(Math.PI / 2),
      r.translate((e.x0 + e.x1) / 2, e.y, e.z),
      B(T(r), t),
      n)
    ) {
      let t = T(new he({ color: 6279423, toneMapped: !1 }));
      for (let n of [e.x0 + 0.4, e.x1 - 0.4, (e.x0 + e.x1) / 2]) {
        let r = new p(e.r + 0.1, 0.12, 8, 36);
        (r.rotateY(Math.PI / 2),
          r.translate(n, e.y, e.z),
          B(T(r), t, P, { cast: !1, receive: !1 }));
      }
    } else {
      let n = new i(e.r, 2.4, 24);
      (n.rotateZ(-Math.PI / 2), n.translate(e.x1 + 1.2, e.y, e.z), B(T(n), t));
      let r = new u(e.r * 0.7, e.r * 1.05, 2, 20, 1, !0);
      (r.rotateZ(Math.PI / 2),
        r.translate(e.x0 - 1, e.y, e.z),
        B(T(r), L.dark));
    }
  }
  {
    let e = _e,
      t = 12 + e.y,
      n = new p(e.r, 1.4, 16, 48);
    (n.translate(e.x, t, N.z0 + 0.1), B(T(n), L.white));
    let r = new u(e.r - 1, e.r - 1, 14, 32, 1, !0);
    (r.rotateX(Math.PI / 2), r.translate(e.x, t, N.z0 - 7), B(T(r), L.wall));
    let i = new p(e.r - 0.6, 0.6, 12, 40);
    (i.translate(e.x, t, N.z0 - 14), B(T(i), L.orange));
    let a = new te(e.r - 1.3, 40);
    (a.translate(e.x, t, N.z0 - 1), B(T(a), L.frame));
    let o = new ue(e.r - 1.9, e.r - 1.3, 40);
    (o.translate(e.x, t, N.z0 - 0.97), B(T(o), L.yellow, P, { cast: !1 }));
    let s = new te(1.1, 24);
    (s.translate(e.x, t + 1.6, N.z0 - 0.95),
      B(T(s), T(new he({ color: 12574975, toneMapped: !0 })), P, {
        cast: !1,
        receive: !1,
      }));
  }
  let Ze = {
      sunDir: { value: new k(0, 1, 0) },
      earthDir: { value: new k(...be) },
      lit: { value: 1 },
    },
    Qe = T(
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
      (e.push(z(new u(1.86, 1.86, 0.25, 40).translate(0, 0.12, 0), 3813414)),
        e.push(z(new u(1.02, 1.86, 3.2, 40).translate(0, 1.85, 0), t)),
        e.push(
          z(new u(0.62, 1.02, 0.7, 32).translate(0, 3.8, 0), t),
          z(new u(0.66, 0.66, 0.25, 32).translate(0, 4.27, 0), 10133670),
        ));
      for (let t of [0, 1, 2, 3]) {
        let n = new r(0.5, 0.32, 0.06);
        (n.translate(0, 2.6, 1.46),
          n.rotateY((t * Math.PI) / 2 + 0.4),
          e.push(z(n, 1053464)));
      }
      let n = new u(1.86, 1.86, 2.8, 40, 1, !0);
      n.translate(0, -1.4, 0);
      let i = n.toNonIndexed(),
        a = i.attributes.position,
        o = new Float32Array(a.count * 3),
        c = new v(1583698),
        l = new v(14474975);
      for (let e = 0; e < a.count; e++) {
        let t = Math.atan2(a.getZ(e), a.getX(e)) > 0 ? c : l;
        o.set([t.r, t.g, t.b], e * 3);
      }
      (i.setAttribute(`color`, new s(o, 3)),
        n.dispose(),
        e.push(i),
        e.push(z(new u(1.86, 1.86, 0.08, 40).translate(0, -2.8, 0), 2764340)));
      for (let t of [0, 1, 2, 3]) {
        let n = new r(0.06, 1.4, 0.5);
        (n.translate(0, -2.1, 2.05),
          n.rotateY((t * Math.PI) / 2 + Math.PI / 4),
          e.push(z(n, 14474975)));
      }
      return Ke(e);
    })(),
    et = (() => {
      let e = [];
      (e.push(
        z(new u(1.53, 1.53, 5.2, 40).translate(0, 2.6, 0), 14275780),
        z(new u(0.9, 1.53, 0.5, 32).translate(0, 5.45, 0), 12567236),
      ),
        e.push(
          z(new u(1.53, 1.53, 1.3, 32).translate(0, -0.65, 0), 3816770),
          z(new u(0.5, 0.8, 0.6, 16).translate(0, -1.6, 0), 1908773),
        ));
      for (let t of [-1, 1]) {
        e.push(z(new r(2.2, 0.12, 0.12).translate(t * 2.6, -0.6, 0), 9080725));
        let n = new te(1.9, 10);
        (n.rotateY((t * Math.PI) / 2),
          n.translate(t * 3.71, -0.6, 0),
          e.push(z(n, 1715286)));
        let i = new te(1.9, 10);
        (i.rotateY((-t * Math.PI) / 2),
          i.translate(t * 3.69, -0.6, 0),
          e.push(z(i, 12106944)));
      }
      return Ke(e);
    })(),
    V = [],
    tt = (e, t = F) => {
      let n = new _(e, Qe);
      return ((n.frustumCulled = !1), t.add(n), n);
    },
    nt = tt($e, P);
  (nt.position.set(_e.x, 12 + _e.y, N.z0 - 14 - 4.4),
    nt.quaternion.setFromUnitVectors(new k(0, 1, 0), new k(0, 0, 1)));
  let rt = new k(...be).negate(),
    it = new k(...Se).negate(),
    at = (2 * Math.PI) / 180,
    H = {
      m: tt($e),
      hold: new k(10, 32, N.z0 - 60),
      d: (e) => 25 + 575 * Math.exp(-e / 400),
    };
  (H.m.quaternion.setFromUnitVectors(new k(0, 1, 0), it.clone().negate()),
    V.push(
      [H.m, new k(1.9, 1.2, 0), 16777215, `strobe`],
      [H.m, new k(0, 4.3, 0.7), 16777215, `rcs0`],
      [H.m, new k(0.7, 4.3, 0), 16777215, `rcs1`],
    ));
  let U = { m: tt(et), from: new k(30, 42, N.z0 - 30), vx: 0.04, vy: 0.08 };
  (U.m.quaternion.setFromUnitVectors(new k(0, 1, 0), it),
    V.push(
      [U.m, new k(1.6, 3, 0), 16777215, `strobe2`],
      [U.m, new k(0, -1.6, 1.2), 16777215, `rcs2`],
    ));
  let ot = new se();
  F.add(ot);
  {
    let e = new u(4, 4, 13, 32);
    e.rotateZ(Math.PI / 2);
    let t = new r(3, 2.6, 3);
    t.translate(-8.2, 0, 0);
    let n = new _(Ke([z(e, 14474975), z(t, 13136938)]), Qe);
    ((n.frustumCulled = !1),
      ot.add(n),
      V.push(
        [ot, new k(-9.8, 0, -1.2), 16773328, `rcs3`],
        [ot, new k(-8.2, 1.5, 0), 16777215, `strobe3`],
      ));
  }
  V.push([null, new k(-620, 532, -1250), 16777215, `far`]);
  {
    let e = [],
      t = [],
      n = [],
      i = N.z0 - 60;
    e.push(
      R(1400, 4, 4, 0, -40, i + 6),
      R(1400, 4, 4, 0, -40, i - 6),
      R(4, 40, 30, A.x0 + 10, -20, N.z0 - 20),
      R(4, 40, 30, A.x1 - 10, -20, N.z0 - 20),
    );
    for (let t = -650; t <= 650; t += 26) e.push(R(1, 1, 16, t, -40, i));
    for (let n of [-560, -420, -280, 280, 420, 560]) {
      e.push(R(2, 2, 200, n, -40, i));
      for (let e of [-36, 104]) {
        let a = new r(46, 0.4, 120);
        (a.rotateX(0.35), a.translate(n, -40, i - e), t.push(a));
      }
    }
    for (let e of [-180, -130, 130, 180]) n.push(R(30, 50, 0.4, e, -70, i));
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
  let W = new se();
  ((W.name = `kepler-crane`),
    F.add(W),
    B(T(R(2, 2, N.z1 - N.z0 - 4, 0, 52, (N.z0 + N.z1) / 2)), L.yellow, W, {
      cast: !1,
    }));
  let st = B(T(R(4, 1.6, 4, 0, 0, 0)), L.dark, W, { cast: !1 });
  st.position.y = 50.6;
  let ct = B(T(R(9, 0.35, 5.5, 0, 0, 0)), L.primer, W, { cast: !1 }),
    lt = T(new d());
  lt.setAttribute(`position`, new E(new Float32Array(12), 3));
  let ut = new t(lt, T(new ee({ color: 2236962 })));
  ((ut.frustumCulled = !1), W.add(ut));
  let dt = x.arms,
    ft = [
      [T(new u(0.7, 0.9, 0.6, 16)), L.dark],
      [T(R(3.2, 0.55, 0.6, 1.6, 0, 0)), L.orange],
      [T(R(2.6, 0.45, 0.5, 1.3, 0, 0)), L.orange],
      [T(R(0.6, 0.3, 0.3, 0.3, 0, 0)), L.dark],
    ].map(([e, t]) => {
      let n = new ae(e, t, dt.length);
      return (
        (n.castShadow = !1),
        (n.receiveShadow = !0),
        (n.frustumCulled = !1),
        F.add(n),
        n
      );
    }),
    G = (() => {
      let e = new b(),
        t = new b(),
        n = new b(),
        r = new b(),
        i = new b(),
        a = new b();
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
    pt = T(
      new e({
        map: Ge,
        color: 13625087,
        blending: 2,
        depthWrite: !1,
        transparent: !0,
        fog: !1,
      }),
    ),
    mt = dt.map(() => {
      let e = new n(pt);
      return (e.scale.setScalar(1.6), (e.visible = !1), F.add(e), e);
    }),
    ht = [0, 1].map(() => {
      let e = new fe(12573951, 0, 16, 2);
      return (F.add(e), e);
    }),
    K = new Float32Array(2100),
    q = new Float32Array(2100),
    gt = new Float32Array(700),
    _t = new Float32Array(700);
  for (let e = 0; e < 700; e++) K[e * 3 + 1] = -1e3;
  let vt = T(new d());
  vt.setAttribute(`position`, new s(K, 3));
  let yt = new le(
    vt,
    T(
      new de({
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
  ((yt.frustumCulled = !1), F.add(yt));
  let bt = 0,
    xt = (() => {
      let e = 15001320,
        t = [
          z(R(0.8, 1, 0.55, 0, 0, 0), e),
          z(R(0.55, 0.5, 0.55, 0, 0.8, 0), e),
          z(R(0.42, 0.3, 0.05, 0, 0.82, 0.29), 13146682),
          z(R(0.7, 0.9, 0.4, 0, 0, -0.45), e),
        ];
      for (let n of [-1, 1]) {
        t.push(z(R(0.3, 0.9, 0.3, n * 0.22, -0.95, 0), e));
        let i = new r(0.25, 0.8, 0.25);
        (i.rotateX(-0.9), i.translate(n * 0.55, 0.1, 0.2), t.push(z(i, e)));
      }
      return Ke(t);
    })(),
    St = [
      [-40, 30],
      [-31, 22],
      [12, 38],
      [48, 18],
    ].map(([e, t], n) => ({
      base: new k(e, 12 + t, N.z0 - 1.9),
      anchor: new k(Math.round(e / 9) * 9, 12 + t + 3, N.z0 - 0.8),
      ph: n * 1.7,
    })),
    Ct = new ae(xt, Qe, St.length);
  ((Ct.frustumCulled = !1), F.add(Ct));
  let wt = T(new d());
  wt.setAttribute(`position`, new E(new Float32Array(St.length * 6), 3));
  let Tt = new t(wt, T(new ee({ color: 14209200 })));
  ((Tt.frustumCulled = !1), F.add(Tt));
  for (let e of St) V.push([null, e.base, 16773584, `helmet`, e]);
  let Et = new Float32Array(V.length * 3),
    Dt = new Float32Array(V.length * 3),
    Ot = T(new d());
  (Ot.setAttribute(`position`, new s(Et, 3)),
    Ot.setAttribute(`color`, new s(Dt, 3)));
  let kt = new le(
    Ot,
    T(
      new de({
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
  ((kt.frustumCulled = !1), F.add(kt));
  let At = o.camera.far || 4e3,
    J = Math.min(2800, At * 0.7),
    jt = new _(
      T(new O(At * 0.95, 24, 12)),
      T(new he({ color: 0, side: 1, fog: !1, depthWrite: !1 })),
    );
  ((jt.renderOrder = -10), (jt.frustumCulled = !1), I.add(jt));
  let Mt = T(
    new de({
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
      n = new k(...be),
      r = Math.cos(ye - 0.004);
    for (let i = 0; i < 9e3; i++) {
      let i = new k(M() * 2 - 1, M() * 2 - 1, M() * 2 - 1).normalize();
      if (i.dot(n) > r) continue;
      (i.multiplyScalar(J * 1.3), e.push(i.x, i.y, i.z));
      let a = 0.5 + M() * 0.5,
        o = M();
      t.push(a * (o > 0.8 ? 1 : 0.85), a * 0.9, a * (o < 0.2 ? 1 : 0.85));
    }
    let i = T(new d());
    (i.setAttribute(`position`, new E(e, 3)),
      i.setAttribute(`color`, new E(t, 3)),
      (Mt.vertexColors = !0));
    let a = new le(i, Mt);
    ((a.frustumCulled = !1), (a.renderOrder = -9), I.add(a));
  }
  let Nt = J * Math.sin(ye),
    Pt = new k(...be),
    Ft = (e, t, n) => {
      let r = new O(e, 720, n, 0, Math.PI * 2, 0, (t * Math.PI) / 180);
      return T(r);
    },
    It = new ne().setFromUnitVectors(new k(0, 1, 0), Pt.clone().negate()),
    Lt =
      (o.config.quality ?? `high`) === `high` &&
      (o.renderer.capabilities.maxTextureSize ?? 0) >= 4096,
    Rt = ke(o.renderer, { size: Lt ? 4096 : 2048 }),
    zt = T(je(Rt.texture, Rt.fields)),
    Y = zt.uniforms,
    X = new _(Ft(Nt, 50, 160), zt);
  (X.quaternion.copy(It),
    (X.frustumCulled = !1),
    (X.renderOrder = -8),
    I.add(X));
  let Bt = new _(Ft(Nt * 1.008, 58, 64), T(Me(Y.sunDir)));
  (Bt.quaternion.copy(It),
    (Bt.frustumCulled = !1),
    (Bt.renderOrder = -7),
    I.add(Bt));
  let Vt = new k(...xe),
    Ht = (() => {
      let e = Pt.clone().negate(),
        t = new k(...xe),
        n = new k().crossVectors(e, t),
        r = (51.6 * Math.PI) / 180,
        i = new k(Math.cos(0.9), 0, Math.sin(0.9)),
        a = new k(0, Math.cos(r), 0)
          .addScaledVector(new k(-Math.sin(0.9), 0, Math.cos(0.9)), Math.sin(r))
          .normalize(),
        o = new k().crossVectors(i, a),
        s = new f().makeBasis(e, t, n);
      return new f().makeBasis(i, a, o).multiply(s.transpose());
    })(),
    Ut = new f(),
    Wt = new k(0, 1, 0).addScaledVector(Pt, -Pt.y).normalize(),
    Gt = {
      pole: {
        value: Pt.clone()
          .negate()
          .multiplyScalar(Math.cos(0.61))
          .addScaledVector(Wt, Math.sin(0.61))
          .normalize(),
      },
      sunDir: Y.sunDir,
      time: { value: 0 },
      dark: { value: 0 },
    },
    Kt = Ft(1, 60, 80),
    qt = [0, 0.11, 0.22, 0.33, 0.44, 0.55, 0.66, 0.77, 0.88, 1].map((e) => {
      let t = new _(Kt, T(Ne(Gt, e)));
      return (
        t.scale.setScalar(Nt * (1.016 + 0.03 * e)),
        t.quaternion.copy(It),
        (t.frustumCulled = !1),
        (t.renderOrder = -6),
        I.add(t),
        t
      );
    }),
    Jt = new k(0.62, 0.42, -0.66).normalize(),
    Yt = new _(
      T(new O(J * 1.2 * Math.tan((0.26 * Math.PI) / 180), 32, 16)),
      T(
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
  ((Yt.frustumCulled = !1),
    (Yt.renderOrder = -8),
    Yt.position.copy(Jt).multiplyScalar(J * 1.2),
    I.add(Yt));
  let Z = Pe();
  (Z.disc.scale.setScalar(J * 1.25 * 0.0096),
    Z.glare.scale.setScalar(J * 1.25 * 0.13),
    I.add(Z.glare, Z.disc));
  let Xt = (() => {
      let e = x.pools ?? [];
      if (!e.length) return null;
      let t = [],
        n = [],
        r = [],
        i = [],
        a = new v();
      e.forEach((e, o) => {
        a.setHex(e.col).multiplyScalar(e.gain);
        for (let [i, o] of [
          [0, 0],
          [1, 0],
          [1, 1],
          [0, 1],
        ])
          (t.push(e.x + (i * 2 - 1) * e.r, e.y, e.z + (o * 2 - 1) * e.r),
            n.push(i, o),
            r.push(a.r, a.g, a.b));
        i.push(o * 4, o * 4 + 2, o * 4 + 1, o * 4, o * 4 + 3, o * 4 + 2);
      });
      let o = T(new d());
      (o.setAttribute(`position`, new E(t, 3)),
        o.setAttribute(`uv`, new E(n, 2)),
        o.setAttribute(`color`, new E(r, 3)),
        o.setIndex(i));
      let s = new _(
        o,
        T(
          new he({
            map: Ge,
            vertexColors: !0,
            blending: 2,
            depthWrite: !1,
            transparent: !0,
            side: 2,
          }),
        ),
      );
      return ((s.renderOrder = 2), (s.frustumCulled = !1), P.add(s), s);
    })(),
    Zt = [
      [-42, 3837183],
      [42, 16726570],
    ].map(([e, t]) => {
      let n = new fe(t, 220, 48, 2);
      return (n.position.set(e, 18, Ae), F.add(n), n);
    }),
    Qt = Oe(o, P, l),
    Q = o.modules.get(`environment`),
    $t = l.climate.grade,
    en = {
      key: $t.key.intensity,
      sky: new v($t.hemi.sky),
      ground: new v($t.hemi.ground),
      hemi: $t.hemi.intensity,
      exp: $t.exposure ?? 1,
    },
    tn = { sky: new v(7757887), ground: new v(1975862), hemi: 1.05 },
    nn = new v($t.key.color),
    rn = new v(16742970),
    an = new k(),
    on = [0, 0, 0],
    $ = new k(),
    sn = new k(),
    cn = new f(),
    ln = new v(),
    un = new v(6, 2.6, 1),
    dn = new re(),
    fn = new v(),
    pn = en.exp,
    mn = null,
    hn = 0,
    gn = null,
    _n = (e) => o.events.emit(`ui:message`, { kind: `hint`, text: e, ttl: 4 });
  function vn(e) {
    ((e = Math.min(e || 0, 0.1)),
      (hn += e),
      !Rt.done() && Rt.step(2) && (Y.ready.value = 1));
    let t = o.camera,
      n = Ee(x, m());
    ((gn = n),
      De(n.t, on),
      an.set(on[0], on[1], on[2]),
      I.position.copy(t.position),
      X.position.copy(Pt).multiplyScalar(J),
      Bt.position.copy(X.position));
    for (let e of qt) e.position.copy(X.position);
    (Z.disc.position.copy(an).multiplyScalar(J * 1.25),
      Z.glare.position.copy(Z.disc.position),
      Y.sunDir.value.copy(an),
      (Gt.time.value = m() / 60));
    let r = we(x, m()) || globalThis.__keplerAurora === !0;
    Gt.dark.value = r ? 1 - n.lit : 0;
    for (let e of qt) e.visible = r && n.lit < 0.97;
    (Ut.makeRotationAxis(Vt, (2 * Math.PI * (m() / 60)) / 9028).premultiply(Ht),
      Y.spin.value.setFromMatrix4(Ut),
      (Y.time.value = hn));
    let i = ln.copy(nn).lerp(rn, n.red * 0.85);
    ((Z.disc.visible = Z.glare.visible = n.lit > 0.001),
      (Z.disc.material.opacity = Z.glare.material.opacity = n.lit),
      Z.disc.material.color.setRGB(8, 7.6, 7).lerp(un, n.red * 0.8),
      (Mt.opacity = 0.3 + 0.7 * (1 - n.lit)),
      Ze.sunDir.value.copy(an),
      (Ze.lit.value = n.lit),
      Q?.skyDome && (Q.skyDome.visible = !1),
      Q?.clouds && (Q.clouds.visible = !1),
      Q?.fog && (Q.fog.density = Math.min(Q.fog.density, 4e-5)));
    let a = Q?.sunLight,
      s = Q?.hemiLight;
    (a && ((a.intensity = en.key * n.lit), a.color.copy(i)),
      s &&
        ((s.intensity = tn.hemi + (en.hemi - tn.hemi) * n.lit),
        s.color.copy(tn.sky).lerp(en.sky, n.lit),
        s.groundColor.copy(tn.ground).lerp(en.ground, n.lit)));
    let c = en.exp * (1 + 1.3 * (1 - n.lit));
    ((pn += (c - pn) * Math.min(1, e * (c > pn ? 0.5 : 2.5))),
      (o.renderer.toneMappingExposure = pn));
    for (let [e, t] of Zt.entries())
      t.intensity = 200 + 90 * Math.sin(hn * 1.6 + e);
    (Xt && Xt.material.color.setScalar(0.22 + 0.63 * (1 - n.lit)),
      mn !== null &&
        n.shadow !== mn &&
        _n(
          n.shadow
            ? `ENTERING EARTH'S SHADOW · 40 s on work lights`
            : `SUNRISE · the bay is back in sunlight`,
        ),
      (mn = n.shadow));
    let l = m() / 60,
      u = Te(l);
    W.position.x = u.x;
    let d = u.z,
      f = 12 + u.y;
    ((st.position.z = d), ct.position.set(0, f, d), (ct.rotation.y = u.yaw));
    {
      let e = lt.attributes.position;
      (e.setXYZ(0, -1.5, 49.8, d),
        e.setXYZ(1, -1.5, f + 0.2, d),
        e.setXYZ(2, 1.5, 49.8, d),
        e.setXYZ(3, 1.5, f + 0.2, d),
        (e.needsUpdate = !0));
    }
    let p = 0;
    for (let e = 0; e < dt.length; e++) {
      let n = dt[e],
        r = Ce(n, l);
      (G.base.position.set(n.x, n.y, n.z),
        (G.yawJ.rotation.y = r.ya),
        (G.sh.rotation.z = r.sh),
        (G.el.rotation.z = r.el),
        (G.wr.rotation.z = r.wr),
        G.base.updateMatrixWorld(!0),
        ft[0].setMatrixAt(e, cn.copy(G.yawJ.matrixWorld)),
        ft[1].setMatrixAt(e, G.sh.matrixWorld),
        ft[2].setMatrixAt(e, G.el.matrixWorld),
        ft[3].setMatrixAt(e, G.wr.matrixWorld));
      let i = r.on,
        a = mt[e];
      if (((a.visible = i), i)) {
        (G.tip.getWorldPosition($),
          a.position.copy($),
          (a.material.opacity = 0.8),
          a.scale.setScalar(1 + Math.random() * 1.2),
          p < ht.length &&
            t.position.distanceToSquared($) < 6400 &&
            (ht[p].position.copy($),
            (ht[p].intensity = 50 + Math.random() * 70),
            p++));
        for (let e = 0; e < 5; e++) {
          let e = bt;
          ((bt = (bt + 1) % 700),
            (K[e * 3] = $.x),
            (K[e * 3 + 1] = $.y),
            (K[e * 3 + 2] = $.z),
            (q[e * 3] = (Math.random() - 0.5) * 5),
            (q[e * 3 + 1] = Math.random() * 3),
            (q[e * 3 + 2] = (Math.random() - 0.5) * 5),
            (gt[e] = 0.6 + Math.random() * 0.9),
            (_t[e] = n.y - 0.55));
        }
      }
    }
    for (let e of ft) e.instanceMatrix.needsUpdate = !0;
    for (let e = p; e < ht.length; e++) ht[e].intensity = 0;
    for (let t = 0; t < 700; t++) {
      if (gt[t] <= 0) continue;
      gt[t] -= e;
      let n = t * 3;
      ((q[n + 1] -= 9 * e),
        (K[n] += q[n] * e),
        (K[n + 1] += q[n + 1] * e),
        (K[n + 2] += q[n + 2] * e),
        K[n + 1] < _t[t] &&
          ((K[n + 1] = _t[t]),
          (q[n + 1] *= -0.3),
          (q[n] *= 0.5),
          (q[n + 2] *= 0.5)),
        gt[t] <= 0 && (K[n + 1] = -1e3));
    }
    vt.attributes.position.needsUpdate = !0;
    let h = Math.max(0, (m() - (x.epoch ?? 0)) / 60);
    H.m.position.copy(H.hold).addScaledVector(it, H.d(h));
    {
      let e = at,
        t =
          (U.vx / e) * Math.sin(e * h) +
          ((2 * U.vy) / e) * (1 - Math.cos(e * h)),
        n =
          ((2 * U.vx) / e) * (Math.cos(e * h) - 1) +
          ((4 * U.vy) / e) * Math.sin(e * h) -
          3 * U.vy * h;
      U.m.position.copy(U.from).addScaledVector(rt, t).addScaledVector(it, n);
    }
    ot.position.set(-300 + ((h * 0.12) % 600), -28, N.z0 - 110);
    {
      let e = wt.attributes.position;
      (St.forEach((t, n) => {
        let r = $.set(
          t.base.x + Math.sin(hn * 0.3 + t.ph) * 0.4,
          t.base.y + Math.sin(hn * 0.4 + t.ph * 2) * 0.5,
          t.base.z,
        );
        (cn.makeRotationFromEuler(
          dn.set(0, Math.PI, 0.15 * Math.sin(hn * 0.25 + t.ph)),
        ),
          cn.setPosition(r),
          Ct.setMatrixAt(n, cn),
          (t.pos = (t.pos ?? new k()).copy(r)),
          e.setXYZ(n * 2, t.anchor.x, t.anchor.y, t.anchor.z),
          e.setXYZ(n * 2 + 1, r.x, r.y, r.z - 0.4));
      }),
        (e.needsUpdate = !0),
        (Ct.instanceMatrix.needsUpdate = !0));
    }
    let g = fn;
    (V.forEach(([e, t, n, r, i], a) => {
      let o = 1,
        s = m() / 60;
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
            ? $.copy(i.pos ?? t).add(sn.set(0.2, 0.95, 0.3))
            : $.copy(t),
        (Et[a * 3] = $.x),
        (Et[a * 3 + 1] = $.y),
        (Et[a * 3 + 2] = $.z),
        g.setHex(n).multiplyScalar(o),
        (Dt[a * 3] = g.r),
        (Dt[a * 3 + 1] = g.g),
        (Dt[a * 3 + 2] = g.b));
    }),
      (Ot.attributes.position.needsUpdate = Ot.attributes.color.needsUpdate =
        !0));
  }
  return {
    update: vn,
    stats() {
      let e = gn;
      return e
        ? {
            t: +e.t.toFixed(2),
            lit: +e.lit.toFixed(3),
            shadow: e.shadow,
            next: +e.next.toFixed(1),
            exposure: +pn.toFixed(3),
            earth: Rt.done(),
            arms: dt.length,
            detail: Qt.stats(),
            key: Q?.sunLight?.intensity ?? null,
            hemi: Q?.hemiLight?.intensity ?? null,
          }
        : null;
    },
    dispose() {
      c.remove(P, F, I);
      for (let e of ft) e.dispose?.();
      (Ct.dispose?.(), Qt.dispose(), Rt.dispose(), Z.dispose());
      for (let e of C.geos) e.dispose();
      for (let e of C.mats) e.dispose();
      for (let e of C.texs) e.dispose();
      Q?.skyDome && (Q.skyDome.visible = !0);
    },
  };
}
