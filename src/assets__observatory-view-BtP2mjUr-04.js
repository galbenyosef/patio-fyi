// assets__observatory-view-BtP2mjUr 04 — math
// Lines 1004-1717 of readable/assets__observatory-view-BtP2mjUr.pretty.js (statement-aligned).
function Pe(r, i, d, p) {
  let h = xe(Ne()),
    g = d.y,
    _ = [],
    b = (...e) => {
      for (let t of e) t && _.push(t);
      return e[0];
    },
    S = r.modules.get(`environment`),
    C = new ee();
  ((C.name = `observatory-ufo`), (C.visible = !1), i.add(C));
  let w = 0.92 * (r.camera?.far || 4e3),
    D = Math.min(h.DISTANCE, w / (1 + (806 * h.SIZE) / 2500)),
    ae = (h.SIZE * D) / 2500,
    O = new ee(),
    j = new ee();
  (O.add(j), C.add(O));
  let ue = new l(...I);
  (O.quaternion.setFromAxisAngle(ue, -0.22), O.scale.setScalar(ae));
  let N = b(
    new s({ color: 1381915, roughness: 0.5, metalness: 0.75, fog: !1 }),
  );
  {
    let e = [],
      n = [
        [0, -55],
        [120, -60],
        [300, -52],
        [520, -40],
        [700, -22],
        [800, -6],
        [806, 0],
        [792, 6],
        [650, 22],
        [420, 42],
        [200, 60],
        [60, 76],
        [0, 80],
      ].map(([e, t]) => new v(e, t));
    e.push(new m(n, 128));
    for (let [t, n] of [
      [300, -53],
      [520, -41],
      [680, -25],
    ]) {
      let r = new o(t, 7, 8, 128);
      (r.rotateX(Math.PI / 2), r.translate(0, n, 0), e.push(r));
    }
    for (let t = 0; t < 24; t++) {
      let n = (t / 24) * Math.PI * 2,
        r = new a(380, 8, 14);
      (r.rotateY(-n),
        r.translate(Math.cos(n) * 470, -46, Math.sin(n) * 470),
        e.push(r));
    }
    let r = b(se(e.map((e) => (e.index ? e.toNonIndexed() : e))));
    e.forEach((e) => e.dispose());
    let i = new t(r, N);
    ((i.frustumCulled = !1), j.add(i));
  }
  let P = [];
  for (let e = 0; e < 120; e++) {
    let t = (e / 120) * Math.PI * 2;
    P.push({ p: [Math.cos(t) * 803, 0, Math.sin(t) * 803], ring: 0, a: t });
  }
  for (let e = 0; e < 48; e++) {
    let t = (e / 48) * Math.PI * 2;
    P.push({ p: [Math.cos(t) * 560, -40, Math.sin(t) * 560], ring: 1, a: t });
  }
  for (let e = 0; e < 16; e++) {
    let t = (e / 16) * Math.PI * 2;
    P.push({ p: [Math.cos(t) * 200, -60, Math.sin(t) * 200], ring: 2, a: t });
  }
  let F = new ce(
    b(new n(5, 8, 6)),
    b(new y({ color: 16777215, fog: !1 })),
    P.length,
  );
  ((F.instanceColor = new ne(new Float32Array(P.length * 3), 3)),
    (F.frustumCulled = !1));
  {
    let e = new x();
    P.forEach((t, n) => {
      (e.position.set(...t.p), e.updateMatrix(), F.setMatrixAt(n, e.matrix));
    });
  }
  j.add(F);
  let pe = { uT: { value: 0 }, uOn: { value: 0 } };
  {
    let e = new t(
      b(new c(150, 64)),
      b(
        new T({
          uniforms: pe,
          transparent: !0,
          depthWrite: !1,
          blending: 2,
          fog: !1,
          side: 2,
          vertexShader: `varying vec2 vU;void main(){vU=uv*2.0-1.0;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
          fragmentShader: `varying vec2 vU;uniform float uT,uOn;void main(){float r=length(vU);float ring=exp(-pow((r-.55-.05*sin(uT*.7))/.06,2.0));
    float a=(smoothstep(1.0,0.0,r)*.25+ring*.7)*uOn*(.8+.2*sin(uT*1.9));gl_FragColor=vec4(vec3(.55,.75,1.0),a);}`,
        }),
      ),
    );
    ((e.rotation.x = Math.PI / 2),
      (e.position.y = -61),
      (e.frustumCulled = !1),
      j.add(e));
  }
  let he = {
      uC: { value: new l() },
      uSun: { value: new l(..._e) },
      uN: { value: new l(0, 1, 0) },
      uR: { value: 806 * ae },
      uAmt: { value: 0 },
    },
    L = new t(
      b(new oe(U[2] - U[0], U[3] - U[1]).rotateX(-Math.PI / 2)),
      b(
        new T({
          uniforms: he,
          transparent: !0,
          depthWrite: !1,
          polygonOffset: !0,
          polygonOffsetFactor: -6,
          fog: !1,
          vertexShader: `varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.0);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`,
          fragmentShader: `varying vec3 vW;uniform vec3 uC,uSun,uN;uniform float uR,uAmt;
   void main(){float nd=dot(uSun,uN);if(abs(nd)<1e-3)discard;float t=dot(uC-vW,uN)/nd;if(t<=0.0)discard;vec3 h=vW+uSun*t;
    float e=1.0-smoothstep(uR*.82,uR,length(h-uC));gl_FragColor=vec4(.02,.025,.04,e*uAmt);}`,
        }),
      ),
    );
  (L.position.set((U[0] + U[2]) / 2, g + 0.05, (U[1] + U[3]) / 2),
    (L.renderOrder = 2),
    (L.visible = !1),
    i.add(L));
  let ge = b(new k(0.02, 1, 1, 32, 1, !0));
  ge.translate(0, -0.5, 0);
  let z = [];
  for (let e = 0; e < 4; e++) {
    let n = (e / 4) * Math.PI * 2 + 0.4,
      r = b(
        new T({
          uniforms: { uA: { value: 0 } },
          transparent: !0,
          depthWrite: !1,
          blending: 2,
          side: 2,
          fog: !1,
          vertexShader: `varying vec2 vUv;varying vec3 vN,vV;void main(){vUv=uv;vec4 mv=modelViewMatrix*vec4(position,1.0);vN=normalize(normalMatrix*normal);vV=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}`,
          fragmentShader: `varying vec2 vUv;varying vec3 vN,vV;uniform float uA;void main(){float f=pow(abs(dot(normalize(vN),normalize(vV))),2.0);gl_FragColor=vec4(vec3(.85,.9,1.0),uA*f*(.3+.7*vUv.y));}`,
        }),
      ),
      i = new t(ge, r);
    ((i.frustumCulled = !1),
      (i.visible = !1),
      C.add(i),
      z.push({
        cone: i,
        a: n,
        ph: e * 1.7,
        on: R.BEAM_ON + e * 2.5,
        emit: new l(Math.cos(n) * 300, -58, Math.sin(n) * 300),
      }));
  }
  let ve = b(
      (() => {
        let e = document.createElement(`canvas`);
        e.width = e.height = 64;
        let t = e.getContext(`2d`),
          n = t.createRadialGradient(32, 32, 0, 32, 32, 32);
        return (
          n.addColorStop(0, `rgba(255,255,255,1)`),
          n.addColorStop(0.6, `rgba(255,255,255,.55)`),
          n.addColorStop(1, `rgba(255,255,255,0)`),
          (t.fillStyle = n),
          t.fillRect(0, 0, 64, 64),
          new le(e)
        );
      })(),
    ),
    B = new ce(
      b(new oe(1, 1).rotateX(-Math.PI / 2)),
      b(
        new y({
          map: ve,
          color: 12110079,
          transparent: !0,
          depthWrite: !1,
          blending: 2,
          fog: !1,
          polygonOffset: !0,
          polygonOffsetFactor: -8,
        }),
      ),
      4,
    );
  ((B.instanceColor = new ne(new Float32Array(12), 3)),
    (B.frustumCulled = !1),
    (B.visible = !1),
    i.add(B));
  let ye = S?.skyDome?.material?.uniforms ?? null,
    V = [`uZenith`, `uHorizon`, `uHaze`],
    be = {},
    Ce = {},
    we = (e) => {
      if (ye)
        for (let t of V) {
          let n = ye[t]?.value;
          n?.isColor &&
            ((!Ce[t] || !n.equals(Ce[t])) && (be[t] = n.clone()),
            n.copy(be[t]).multiplyScalar(1 - e),
            (Ce[t] = n.clone()));
        }
    },
    Te = [`uSunDisc`, `uSunGlow`],
    Ee = {},
    De = {},
    W = new E(),
    Oe = (e) => {
      if (ye)
        for (let t of Te) {
          let n = ye[t];
          n &&
            typeof n.value == `number` &&
            ((De[t] === void 0 || Math.abs(n.value - De[t]) > 1e-6) &&
              (Ee[t] = n.value),
            (De[t] = n.value = Ee[t] * (1 - Math.min(1, e * 1.1))));
        }
    },
    ke = { uA: { value: 0 }, uSun: { value: new v(1, 0) } },
    Ae = new t(
      b(new te(806 * 0.99, 1249.3, 192, 1).rotateX(-Math.PI / 2)),
      b(
        new T({
          uniforms: ke,
          transparent: !0,
          depthWrite: !1,
          blending: 2,
          side: 2,
          fog: !1,
          vertexShader: `varying vec2 vP;void main(){vP=position.xz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
          fragmentShader: `varying vec2 vP;uniform float uA;uniform vec2 uSun;void main(){float r=length(vP)/806.0;float a=smoothstep(.99,1.0,r)*pow(1.0-smoothstep(1.0,1.55,r),2.2);float s=.5+.5*max(0.0,dot(vP/max(length(vP),1.0),uSun));vec3 c=mix(vec3(1.0,.62,.38),vec3(1.0,.95,.86),1.0-smoothstep(1.0,1.18,r));gl_FragColor=vec4(c,uA*a*(.35+.65*s));}`,
        }),
      ),
    );
  ((Ae.frustumCulled = !1), (Ae.visible = !1), O.add(Ae));
  let je = new t(
    b(new k(1, 0.15, 1, 24, 1, !0).translate(0, 0.5, 0)),
    b(
      new T({
        uniforms: { uA: { value: 0 } },
        transparent: !0,
        depthWrite: !1,
        blending: 2,
        side: 2,
        fog: !1,
        vertexShader: `varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
        fragmentShader: `varying vec2 vUv;uniform float uA;void main(){gl_FragColor=vec4(vec3(.8,.9,1.0),uA*pow(1.0-vUv.y,1.5));}`,
      }),
    ),
  );
  ((je.frustumCulled = !1), (je.visible = !1), C.add(je));
  let Me = new ie(
    b(
      new e({
        map: ve,
        color: 15660287,
        blending: 2,
        depthWrite: !1,
        transparent: !0,
        fog: !1,
      }),
    ),
  );
  ((Me.frustumCulled = !1), (Me.visible = !1), C.add(Me));
  let Pe = new l(30, g, 12),
    K = new t(
      b(new k(1, 1, 1, 48, 1, !0).translate(0, -0.5, 0)),
      b(
        new T({
          uniforms: { uA: { value: 0 }, uT: { value: 0 } },
          transparent: !0,
          depthWrite: !1,
          blending: 2,
          side: 2,
          fog: !1,
          vertexShader: `varying vec2 vUv;varying vec3 vN,vV;void main(){vUv=uv;vec4 mv=modelViewMatrix*vec4(position,1.0);vN=normalize(normalMatrix*normal);vV=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}`,
          fragmentShader: `varying vec2 vUv;varying vec3 vN,vV;uniform float uA,uT;void main(){float f=pow(abs(dot(normalize(vN),normalize(vV))),1.5);float band=.75+.25*sin(vUv.y*60.0+uT*3.0);
   gl_FragColor=vec4(vec3(.7,.85,1.0),uA*f*band*(.25+.75*smoothstep(1.0,0.0,vUv.y)));}`,
        }),
      ),
    );
  ((K.frustumCulled = !1), (K.visible = !1), C.add(K));
  let q = new Float32Array(2100),
    Fe = new Float32Array(700);
  for (let e = 0; e < 700; e++) {
    let t = e * 2.399,
      n = Math.sqrt((e % 97) / 97) * 9;
    ((q[e * 3] = Math.cos(t) * n * 0.6),
      (q[e * 3 + 1] = ((e * 37) % 400) / 400),
      (q[e * 3 + 2] = Math.sin(t) * n * 0.6),
      (Fe[e] = 2 + ((e * 13) % 10) / 3));
  }
  let Ie = new f();
  (Ie.setAttribute(`position`, new u(q, 3).setUsage(A)), b(Ie));
  let Le = {
      uScale: { value: 450 },
      uA: { value: 0 },
      uT: { value: 0 },
      uWide: { value: 0 },
    },
    J = new re(
      Ie,
      b(
        new T({
          uniforms: Le,
          transparent: !0,
          depthWrite: !1,
          blending: 2,
          fog: !1,
          vertexShader: `uniform float uScale,uT,uWide;varying float vTw;void main(){vec3 p=position;p.y*=p.y;p.xz*=1.0+uWide*p.y;vec4 mv=modelViewMatrix*vec4(p,1.0);gl_Position=projectionMatrix*mv;float ph=fract(sin(float(gl_VertexID)*12.9898)*43758.5);vTw=.15+.85*pow(.5+.5*sin(uT*(3.0+5.0*ph)+ph*40.0),3.0);gl_PointSize=.7*uScale/max(-mv.z,.1);}`,
          fragmentShader: `uniform float uA;varying float vTw;void main(){vec2 c=gl_PointCoord*2.0-1.0;float r=dot(c,c);if(r>1.0)discard;float a=(1.0-r);a*=a;gl_FragColor=vec4(vec3(.75,.88,1.0)+vec3(.5)*a,.85*uA*vTw*a);}`,
        }),
      ),
    );
  ((J.frustumCulled = !1), (J.visible = !1), i.add(J));
  let Re = null,
    ze = -1,
    Be = h.GLOW ?? 160,
    Ve = (e, t, n, i) => {
      $ - ze < 0.03 ||
        ((ze = $),
        r.modules.get(`effects`)?.light?.(e, t, n, 12572927, i, 70, 0.045, 0));
    },
    He = 0,
    Y = 7,
    Ue = () => (Y = (Math.imul(Y, 1664525) + 1013904223) >>> 0) / 4294967296,
    X = () => r.modules.get(`audio`),
    We = null,
    Ge = null,
    Z = null,
    Ke = -1e9,
    qe = 0,
    Je = null,
    Ye = null,
    Xe = null,
    Ze = null,
    Q = 0,
    Qe = (e) => {
      let t = S?.sunLight,
        n = S?.hemiLight;
      (t &&
        ((Ye === null || Math.abs(t.intensity - Ye) > 1e-6) &&
          (Je = t.intensity),
        (Ye = t.intensity = Je * (1 - h.SHADOW * e))),
        n &&
          ((Ze === null || Math.abs(n.intensity - Ze) > 1e-6) &&
            (Xe = n.intensity),
          (Ze = n.intensity = Xe * (1 - 0.75 * h.SHADOW * e))));
    },
    $e = new l(..._e),
    et = new l(0, 1, 0),
    tt = new l(),
    nt = 0,
    rt = (e) => {
      if (nt <= 0) return 0;
      let t = $e.dot(et);
      if (Math.abs(t) < 0.001) return 0;
      let n = tt.copy(O.position).sub(e).dot(et) / t;
      return n <= 0
        ? 0
        : (tt.copy(e).addScaledVector($e, n).sub(O.position),
          1 - G(nt * 0.82, nt, tt.length()));
    },
    it = new l(),
    at = new l(),
    ot = new E(),
    st = new l(),
    ct = () => st.set(0, -61, 0).applyMatrix4(j.matrixWorld),
    lt = 0,
    ut = 1,
    dt = -1,
    ft = new l(0, 1, 0),
    pt = [0, 0, 0],
    mt = new x(),
    ht = new l(),
    gt = new l(0, -1, 0),
    $ = 0;
  return {
    update(e) {
      ((e = Math.min(e || 0, 0.1)), ($ += e));
      let t = p(),
        n = r.camera;
      if (lt < 4) {
        lt++;
        let e = lt < 4;
        C.visible = L.visible = B.visible = J.visible = e;
        for (let t of z) t.cone.visible = e;
        ((K.visible = Ae.visible = e),
          e && (O.scale.setScalar(0.001), O.position.set(0, g - 500, 0)));
        return;
      }
      let i = fe(d, t, h),
        a = !!i && M(i.T);
      C.visible = a;
      {
        let e = $ - Ke,
          t = r.camera,
          n = r.modules.get(`effects`);
        if (e >= 0 && e < 3 && t && n?.spawn && $ - He >= 0.05) {
          He = $;
          let r = 5 + e * 55,
            i = Math.atan2(t.position.x, t.position.z);
          for (let a = 0; a < 4; a++) {
            let a = i + (Ue() - 0.5) * 1.4,
              o = Math.sin(a) * r,
              s = Math.cos(a) * r;
            Math.hypot(o - t.position.x, s - t.position.z) > 70 ||
              n.spawn(
                `trainGust`,
                [o, g + 0.15, s],
                [Math.sin(a), 0, Math.cos(a)],
                { count: 7, speed: 16 * (1 - e / 4), scale: 2, flakes: 2 },
              );
          }
        }
      }
      if (!a) {
        (Q > 0 && ((Q = Math.max(0, Q - e * 0.5)), Qe(Q)),
          (L.visible = B.visible = J.visible = !1),
          we(0.8 * h.SHADOW * Q),
          Oe(Q),
          (Ge = null),
          (We = null));
        return;
      }
      let o = i.T;
      O.visible = o < R.GONE;
      {
        let e = o - 0.6,
          t = o - R.JUMP,
          n = e >= 0 && e < 2.5 ? e : t >= 0 && t < 2.5 ? t : -1;
        ((Me.visible = n >= 0),
          Me.visible && (Me.material.opacity = Math.max(0, 1 - n / 2.5) * 1.2),
          (dt = n));
      }
      H(o, h, D, pt);
      {
        let e = Math.hypot(...pt),
          t = Math.min(1, (w - 806 * ae) / e);
        ((pt[0] *= t), (pt[1] *= t), (pt[2] *= t), (ut = t));
      }
      (O.position.set(pt[0], g + pt[1], pt[2]),
        Me.visible &&
          (Me.position.copy(O.position),
          Me.scale.setScalar(806 * ae * ut * (1.4 + 1.6 * dt))));
      {
        let e = de(o, h);
        if (((je.visible = !!e), e)) {
          let t = 806 * ae * ut * (3 + 10 * e.k);
          (je.position.copy(O.position),
            je.quaternion.setFromUnitVectors(
              ft,
              tt.set(-e.dir[0], -e.dir[1], -e.dir[2]),
            ),
            je.scale.set(806 * ae * ut * 0.55, t, 806 * ae * ut * 0.55),
            (je.material.uniforms.uA.value = 0.9 * Math.min(1, e.k * 3 + 0.2)));
        }
      }
      (O.scale.setScalar(ae * ut),
        (j.rotation.y = o * 0.006),
        O.updateMatrixWorld(),
        et.set(0, 1, 0).applyQuaternion(O.quaternion),
        (nt = O.visible ? 806 * O.scale.x : 0));
      let s = n ? rt(n.position) : 0;
      ((Q += (s - Q) * Math.min(1, e * 4)),
        Qe(Q),
        he.uC.value.copy(O.position),
        he.uN.value.copy(et),
        (he.uR.value = nt),
        (he.uAmt.value = 0.7 * h.SHADOW),
        (L.visible = nt > 0));
      for (let e = 0; e < P.length; e++) {
        let t = P[e],
          n,
          r,
          i;
        if (t.ring === 0) {
          let e = Math.max(0, Math.cos(t.a * 6 - o * 0.9)) ** 8;
          ((n = 0.6 + 2.4 * e), (r = 0.38 + 1.5 * e), (i = 0.15 + 0.4 * e));
        } else if (t.ring === 1) {
          let e = 0.5 + 0.5 * Math.sin(o * 1.3 + t.a * 2);
          ((n = 0.3 * e), (r = 0.7 * e), (i = 2 * e));
        } else
          n =
            r =
            i =
              0.4 +
              2.4 *
                (G(R.BEAM_ON - 10, R.BEAM_ON, o) *
                  (1 - G(R.BEAM_OFF, R.BEAM_OFF + 8, o)));
        F.instanceColor.setXYZ(e, n, r, i);
      }
      ((F.instanceColor.needsUpdate = !0),
        (pe.uT.value = o),
        (pe.uOn.value =
          G(R.STOP - 12, R.STOP, o) * (1 - G(R.LEAVE, R.JUMP, o))),
        Z === i.k &&
          Ge != null &&
          Ge < R.RISE &&
          o >= R.RISE &&
          ((Ke = $),
          X()?.play(`ufo_arrive`, { volume: 1, priority: 10 }),
          r.modules.get(`player`)?.shakeView?.(1.3)),
        Z === i.k &&
          Ge != null &&
          Ge < R.LEAVE &&
          o >= R.LEAVE &&
          X()?.play(`ufo_depart`, { volume: 1, priority: 9 }),
        Z === i.k &&
          Ge != null &&
          Ge < R.JUMP &&
          o >= R.JUMP &&
          (X()?.play(`ufo_arrive`, { volume: 0.9, priority: 10 }),
          r.modules.get(`player`)?.shakeView?.(0.9),
          (Ke = $)),
        (Ge = o),
        (Z = i.k));
      let c = G(0, R.RISE + 6, o) * (1 - G(R.JUMP - 4, R.JUMP, o));
      (c > 0.05 &&
        $ >= qe &&
        ((qe = $ + (X()?.hasSample?.(`ufo_hum`) ? 16.5 : 7)),
        X()?.play(`ufo_hum`, { volume: 0.35 + 0.65 * c, priority: 7 })),
        we(0.8 * h.SHADOW * Q),
        (Ae.visible = Q > 0.02),
        Ae.visible &&
          ((ke.uA.value = Math.min(1, Q * 1.3)),
          ht.set(..._e).applyQuaternion(W.copy(O.quaternion).invert()),
          ke.uSun.value.set(ht.x, ht.z).normalize()),
        Oe(Q));
      {
        let t = me(d, i.k, o),
          a = t ? t.on : 0;
        if (
          ((K.visible = J.visible = a > 0.01),
          t &&
            (Pe.set(t.x, g, t.z),
            J.position.set(t.x, g, t.z),
            t.i !== We &&
              a > 0.5 &&
              ((We = t.i),
              X()?.play(`ufo_tractor`, {
                pos: [t.x, g + 8, t.z],
                volume: 1,
                priority: 6,
              }),
              n &&
                Math.hypot(n.position.x - t.x, n.position.z - t.z) < 45 &&
                r.modules.get(`player`)?.shakeView?.(0.6))),
          (K.visible = !1),
          J.visible)
        ) {
          let t = ct(),
            i = Math.max(5, tt.copy(t).sub(Pe).length());
          (J.quaternion.setFromUnitVectors(ft, tt.normalize()),
            J.scale.set(1, i, 1),
            J.matrixWorld.compose(J.position, J.quaternion, J.scale));
          for (let t = 0; t < 700; t++)
            ((q[t * 3 + 1] += (Fe[t] * e * 7) / i),
              q[t * 3 + 1] > 1 && --q[t * 3 + 1]);
          ((Ie.attributes.position.needsUpdate = !0),
            (Le.uA.value = a),
            (Le.uT.value = $),
            (Le.uWide.value = 3),
            (Le.uScale.value =
              ((r.renderer?.domElement?.clientHeight || innerHeight) * 0.5) /
              Math.tan(((n?.fov || 70) * Math.PI) / 360)));
        }
        let s = Re && $ - Re.t < 0.25 ? Re : null;
        t &&
          a > 0.01 &&
          (s ? Ve(s.x, s.y, s.z, Be * a) : Ve(t.x, g + 8, t.z, Be * a));
      }
      let u = !1;
      (z.forEach((t, n) => {
        let i = h.BEAMS
          ? G(t.on, t.on + 0.6, o) *
            (1 - G(R.BEAM_OFF - 4 + t.ph, R.BEAM_OFF + t.ph, o))
          : 0;
        if (((t.cone.visible = i > 0.001), !t.cone.visible)) {
          (mt.scale.set(0, 0, 0),
            mt.updateMatrix(),
            B.setMatrixAt(n, mt.matrix));
          return;
        }
        u = !0;
        let a =
            o < t.on + 1.2 ? (Math.sin(o * 60 + t.ph) > -0.2 ? 1 : 0.15) : 1,
          s = ht.copy(t.emit).applyMatrix4(j.matrixWorld),
          c = o * 0.05 + t.ph,
          d = Math.sin(c * 1.3) * 80 + Math.sin(c * 0.37) * 20 - 15,
          f = Math.sin(c * 2.1 + 0.6) * 40 - 2;
        if ($ >= (t.until ?? 0)) {
          t.until = $ + 4 + ((n * 7 + Math.floor($)) % 5);
          let e = (r.world?.byType?.(`soldier`) ?? []).filter(
            (e) =>
              e.hp > 0 &&
              Math.abs(e.pos[1] - g) < 20 &&
              Math.abs(e.pos[0]) < 100 &&
              Math.abs(e.pos[2]) < 60,
          );
          (e.sort(
            (e, t) =>
              Math.hypot(e.pos[0] - d, e.pos[2] - f) -
              Math.hypot(t.pos[0] - d, t.pos[2] - f),
          ),
            (t.prey = e[n % Math.max(1, Math.min(3, e.length))]?.id ?? null));
        }
        let p = t.prey == null ? null : r.world?.get?.(t.prey),
          m = p && p.hp > 0 ? [p.pos[0], p.pos[2]] : [d, f];
        ((t.tx = t.tx ?? m[0]), (t.tz = t.tz ?? m[1]));
        let _ = Math.min(1, e * 1.6);
        ((t.tx += (m[0] - t.tx) * _), (t.tz += (m[1] - t.tz) * _));
        let v = t.tx,
          y = t.tz,
          b = new l(v, g, y).clone().sub(s),
          x = b.length();
        b.divideScalar(x);
        let S = x * Math.tan(0.014) * 1.05;
        (t.cone.position.copy(s),
          t.cone.quaternion.setFromUnitVectors(gt, b),
          t.cone.scale.set(S, x, S),
          (t.cone.material.uniforms.uA.value = 0.22 * i * a * (0.4 + 0.6 * Q)),
          mt.position.set(v, g + 0.06, y),
          mt.rotation.set(0, 0, 0),
          mt.scale.set(Math.min(S, 14) * 2, 1, Math.min(S, 14) * 2),
          mt.updateMatrix(),
          B.setMatrixAt(n, mt.matrix));
        let C = 0.16 * i * a * (0.25 + 0.75 * Q);
        B.instanceColor.setXYZ(n, C, C, C);
      }),
        (B.visible = u),
        (B.instanceMatrix.needsUpdate = !0),
        (B.instanceColor.needsUpdate = !0));
    },
    liftFrame(e, t) {
      let n = Se(d, e, t, h);
      if (n <= 0) return null;
      if (n >= 1 || !O.visible) return { gone: !0 };
      let r = ct(),
        i = n ** 3.2,
        a = it.copy(r).sub(at.set(e.x, e.y0, e.z)),
        o = a.length();
      a.multiplyScalar(1 / o);
      let s = new E().slerp(ot.setFromUnitVectors(ft, a), G(0, 0.45, n)),
        c = {
          x: e.x + a.x * o * i,
          y0: e.y0 + a.y * o * i,
          z: e.z + a.z * o * i,
          q: s,
          az: n * 2.5,
          el: Math.PI / 2 - Math.sin(n * 3) * 0.35,
          k: n,
        };
      return (
        at.set(0, 8.4, 0).applyQuaternion(s),
        (Re = { x: c.x + at.x, y: c.y0 + at.y, z: c.z + at.z, t: $ }),
        c
      );
    },
    stats() {
      let e = fe(d, p(), h);
      return {
        pass: e?.k ?? null,
        T: e ? +e.T.toFixed(1) : null,
        up: !!e && M(e.T),
        eclipse: +Q.toFixed(2),
        sparkles: {
          on: J.visible,
          at: [
            Math.round(J.position.x),
            Math.round(J.position.y),
            Math.round(J.position.z),
          ],
          opacity: +Le.uA.value.toFixed(2),
        },
        distance: Math.round(D),
        knobs: {
          SIZE: h.SIZE,
          DISTANCE: h.DISTANCE,
          LIFT: h.LIFT,
          SHADOW: h.SHADOW,
          BEAMS: h.BEAMS,
        },
      };
    },
    dispose() {
      (we(0),
        Oe(0),
        Je != null && S?.sunLight && (S.sunLight.intensity = Je),
        Xe != null && S?.hemiLight && (S.hemiLight.intensity = Xe),
        i.remove(C),
        i.remove(L),
        i.remove(B),
        i.remove(J),
        F.dispose(),
        B.dispose());
      for (let e of _) e.dispose?.();
    },
  };
}
