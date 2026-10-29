// assets__observatory-view-BtP2mjUr 02 — math
// Lines 184-887 of readable/assets__observatory-view-BtP2mjUr.pretty.js (statement-aligned).
function De(n, r, i, u) {
  if (!i?.meteor) return null;
  let d = i.y,
    m = [],
    h = (...e) => {
      for (let t of e) t && m.push(t);
      return e[0];
    },
    g = new ee();
  ((g.name = `observatory-meteor`), r.add(g));
  let _ = 11,
    v = () => (_ = (Math.imul(_, 1664525) + 1013904223) >>> 0) / 4294967296,
    b = { value: 600 },
    D = new Ee(1600, !0, b),
    oe = new Ee(700, !0, b),
    k = new Ee(420, !1, b),
    se = new Ee(320, !1, b),
    ue = new Ee(520, !1, b),
    M = [D, oe, k, se, ue];
  for (let e of M) (h(e.g, e.points.material), g.add(e.points));
  oe.points.renderOrder = D.points.renderOrder = 3;
  let de = (e, t) => {
      let n = document.createElement(`canvas`);
      n.width = n.height = 128;
      let r = n.getContext(`2d`),
        i = r.createRadialGradient(64, 64, 0, 64, 64, 64);
      (i.addColorStop(0, e),
        i.addColorStop(0.18, e),
        i.addColorStop(0.45, t),
        i.addColorStop(1, `rgba(0,0,0,0)`),
        (r.fillStyle = i),
        r.fillRect(0, 0, 128, 128));
      let a = new le(n);
      return ((a.colorSpace = S), h(a));
    },
    N = (t) => {
      let n = new ie(
        h(new e({ map: t, blending: 2, depthWrite: !1, fog: !1 })),
      );
      return ((n.visible = !1), (n.frustumCulled = !1), g.add(n), n);
    },
    P = N(de(`rgba(255,255,250,1)`, `rgba(170,255,210,.45)`)),
    fe = N(de(`rgba(150,255,200,.6)`, `rgba(60,160,120,.18)`)),
    I = N(de(`rgba(255,250,235,1)`, `rgba(255,200,140,.4)`)),
    pe = new t(
      h(new te(0.92, 1, 96)),
      h(
        new y({
          color: 14207152,
          transparent: !0,
          opacity: 0,
          blending: 2,
          depthWrite: !1,
          side: 2,
        }),
      ),
    );
  ((pe.rotation.x = -Math.PI / 2), (pe.visible = !1), g.add(pe));
  let me = V.MAX_STRIKES,
    ge = new j().makeScale(0, 0, 0),
    R = new ne(new Float32Array(me), 1);
  R.setUsage(A);
  let _e = h(new c(V.RIM_R * 0.95, 64).rotateX(-Math.PI / 2));
  _e.setAttribute(`aHeat`, R);
  let ve = new ce(
    _e,
    h(
      new T({
        transparent: !0,
        depthWrite: !1,
        polygonOffset: !0,
        polygonOffsetFactor: -4,
        vertexShader:
          `attribute float aHeat;varying vec2 vU;varying float vH;void main(){vU=vec2(position.x,-position.z)/` +
          (V.RIM_R * 0.95).toFixed(3) +
          `;vH=aHeat;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.0);}`,
        fragmentShader: `varying vec2 vU;varying float vH;float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
   float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
   void main(){float r=length(vU),a=atan(vU.y,vU.x);float edge=.8+.15*n(vec2(a*3.0,1.0))+.08*n(vU*9.0);float sc=smoothstep(edge,edge*.45,r);
    float cr=smoothstep(.45,.6,n(vU*7.0))*smoothstep(.75,0.0,r);vec3 col=mix(vec3(.07,.06,.05),vec3(.02,.016,.012),smoothstep(.6,0.0,r));
    col+=vec3(1.6,.45,.08)*vH*cr;gl_FragColor=vec4(col,sc*.95);}`,
      }),
    ),
    me,
  );
  ((ve.frustumCulled = !1), g.add(ve));
  let be = h(
      (() => {
        let e = new o(V.RIM_R, 0.6, 10, 48);
        (e.rotateX(Math.PI / 2), e.scale(1, V.RIM_H / 0.6, 1));
        let t = e.attributes.position;
        for (let e = 0; e < t.count; e++) {
          let n = Math.atan2(t.getX(e), t.getZ(e)),
            r = 1 + 0.12 * Math.sin(n * 5 + 1);
          t.setXYZ(e, t.getX(e) * r, Math.max(0, t.getY(e)), t.getZ(e) * r);
        }
        return (e.computeVertexNormals(), e);
      })(),
    ),
    xe = new ce(be, h(new s({ color: 4864562, roughness: 1 })), me);
  ((xe.castShadow = xe.receiveShadow = !0), (xe.frustumCulled = !1), g.add(xe));
  let H = new ce(
    h(new ae(0.42, 1).scale(1, 0.8, 1.1)),
    h(new s({ color: 1841172, roughness: 0.9 })),
    me,
  );
  ((H.castShadow = !0), (H.frustumCulled = !1), g.add(H));
  let Se = () => {
      for (let e = 0; e < me; e++)
        (ve.setMatrixAt(e, ge),
          xe.setMatrixAt(e, ge),
          H.setMatrixAt(e, ge),
          R.setX(e, 0));
      for (let e of [ve, xe, H]) e.instanceMatrix.needsUpdate = !0;
      R.needsUpdate = !0;
    },
    U = new x(),
    we = new O(),
    Te = new E(),
    De = (e) => {
      (U.position.set(e.x, d + 0.03, e.z),
        U.rotation.set(0, (e.k * 2.4) % 6.28, 0),
        U.scale.set(1, 1, 1),
        U.updateMatrix(),
        ve.setMatrixAt(e.k, U.matrix),
        (U.position.y = d),
        U.updateMatrix(),
        xe.setMatrixAt(e.k, U.matrix),
        U.position.set(e.x + 0.3, d + 0.15, e.z - 0.2),
        U.updateMatrix(),
        H.setMatrixAt(e.k, U.matrix));
      for (let e of [ve, xe, H]) e.instanceMatrix.needsUpdate = !0;
    };
  Se();
  let W = {
    mesh: new ce(
      h(new a(1, 1, 1)),
      h(new s({ color: 16777215, roughness: 0.85, metalness: 0.15 })),
      600,
    ),
    n: 0,
    i: 0,
    p: [],
    v: [],
    q: [],
    w: [],
    s: [],
    rest: [],
  };
  ((W.mesh.instanceColor = new ne(new Float32Array(1800), 3)),
    (W.mesh.castShadow = !0),
    (W.mesh.count = 0),
    (W.mesh.frustumCulled = !1),
    g.add(W.mesh));
  let Oe = (e, t, n, r, i, a, o, s, c, u, d = !1) => {
      let f = W.i;
      ((W.i = (f + 1) % 600),
        (W.n = Math.max(W.n, f + 1)),
        (W.p[f] = new l(e, t, n)),
        (W.v[f] = new l(r, i, a)),
        (W.q[f] = new E().setFromEuler(we.set(v() * 6, v() * 6, v() * 6))),
        (W.w[f] = new l(v() - 0.5, v() - 0.5, v() - 0.5).multiplyScalar(14)),
        (W.s[f] = new l(o, s, c)),
        (W.rest[f] = d),
        W.mesh.instanceColor.setXYZ(f, ...u),
        (W.dirty = !0));
    },
    ke = (e) => {
      let t = !1;
      for (let n = 0; n < W.n; n++) {
        if (W.rest[n]) continue;
        t = !0;
        let r = W.p[n],
          i = W.v[n];
        ((i.y -= 9.81 * e),
          r.addScaledVector(i, e),
          we.set(W.w[n].x * e, W.w[n].y * e, W.w[n].z * e),
          W.q[n].premultiply(Te.setFromEuler(we)));
        let a = d + Math.min(W.s[n].x, W.s[n].y, W.s[n].z) * 0.5;
        r.y < a &&
          ((r.y = a),
          (i.y *= -0.28),
          (i.x *= 0.55),
          (i.z *= 0.55),
          W.w[n].multiplyScalar(0.5),
          Math.abs(i.y) < 0.8 &&
            i.x * i.x + i.z * i.z < 0.6 &&
            ((W.rest[n] = !0),
            W.q[n].setFromEuler(we.set(0, v() * 6, (v() - 0.5) * 0.3))));
      }
      if (t || W.dirty) {
        W.dirty = !1;
        for (let e = 0; e < W.n; e++)
          (U.position.copy(W.p[e]),
            U.quaternion.copy(W.q[e]),
            U.scale.copy(W.s[e]),
            U.updateMatrix(),
            W.mesh.setMatrixAt(e, U.matrix));
        ((W.mesh.count = W.n),
          (W.mesh.instanceMatrix.needsUpdate = !0),
          (W.mesh.instanceColor.needsUpdate = !0));
      }
    },
    Ae = [0.3, 0.25, 0.23],
    je = [0.12, 0.1, 0.09],
    Me = [0.86, 0.87, 0.89],
    G = () => n.modules.get(`audio`),
    Ne = null,
    Pe = new Map(),
    K = new l(),
    q = new l(),
    Fe = new l(),
    Ie = new l(),
    Le = new l(),
    J = (e, t, n) => {
      let r = Math.min(1, Math.max(0, (t + V.INBOUND) / V.INBOUND)),
        i = V.SPEED * V.INBOUND * (1 - r);
      return n.set(e.x + z[0] * i, e.y + z[1] * i, e.z + z[2] * i);
    },
    Re = () => {
      for (let e of M) e.clear();
      ((W.n = W.i = 0), (W.mesh.count = 0), Pe.clear(), Se(), (_ = 11));
    },
    ze = (e) => {
      let t = Pe.get(e.k);
      return (
        t ||
          Pe.set(
            e.k,
            (t = { landed: !1, fire: [], last: null, prev: null, sndFire: 0 }),
          ),
        t
      );
    };
  function Be(e, t, n) {
    ((t.landed = !0), (_ = (e.impact * 13 + e.k) >>> 0 || 11), De(e));
    for (let n = 0; n < 6; n++) {
      let n = v() * 6.28,
        r = v() * 1.4;
      t.fire.push([e.x + Math.cos(n) * r, d + 0.1, e.z + Math.sin(n) * r]);
    }
    for (let t = 0; t < (n ? 40 : 80); t++) {
      let t = v() * 6.283,
        r = 4 + v() * 14,
        i = 0.1 + v() * v() * 0.6;
      if (n) {
        let n = V.RIM_R + 1 + v() * v() * 24;
        Oe(
          e.x + Math.cos(t) * n,
          d + i * 0.3,
          e.z + Math.sin(t) * n,
          0,
          0,
          0,
          i,
          i * 0.7,
          i,
          v() < 0.4 ? je : Ae,
          !0,
        );
      } else
        Oe(
          e.x + Math.cos(t) * v() * 2,
          d + 0.3,
          e.z + Math.sin(t) * v() * 2,
          Math.cos(t) * r,
          4 + v() * 12,
          Math.sin(t) * r,
          i,
          i * 0.7,
          i,
          v() < 0.4 ? je : Ae,
        );
    }
    if (e.dish)
      for (let t = 0; t < 30; t++) {
        let t = e.dish.x + (v() - 0.5) * 6,
          r = e.dish.z + (v() - 0.5) * 6;
        n
          ? Oe(
              t + (v() - 0.5) * 8,
              d + 0.03,
              r + (v() - 0.5) * 8,
              0,
              0,
              0,
              0.3 + v() * 0.9,
              0.04,
              0.3 + v() * 0.7,
              Me,
              !0,
            )
          : Oe(
              t,
              d + 6 + v() * 4,
              r,
              (v() - 0.5) * 10,
              2 + v() * 6,
              (v() - 0.5) * 10,
              0.3 + v() * 0.9,
              0.04,
              0.3 + v() * 0.7,
              Me,
            );
      }
    if (n) return;
    let r = e.x,
      i = d + 1,
      a = e.z;
    for (let e = 0; e < 200; e++) {
      let e = Ie.set(v() - 0.5, v() * 0.9 + 0.1, v() - 0.5)
        .normalize()
        .multiplyScalar(6 + v() * 22);
      D.spawn(
        r,
        i,
        a,
        e.x,
        e.y,
        e.z,
        0.8 + v() * 1.8,
        0.3,
        0.12,
        [2.2, 1.6, 0.8],
        [0.8, 0.15, 0.02],
        1,
        0.6,
        -9.81,
      );
    }
    for (let e = 0; e < 120; e++) {
      let e = Ie.set(v() - 0.5, v() * 0.7, v() - 0.5)
        .normalize()
        .multiplyScalar(3 + v() * 12);
      se.spawn(
        r,
        i - v(),
        a,
        e.x,
        e.y,
        e.z,
        4 + v() * 6,
        2,
        10 + v() * 6,
        [0.42, 0.36, 0.3],
        [0.24, 0.21, 0.19],
        0.55,
        0.9,
        0.3,
        1,
      );
    }
    for (let e = 0; e < 60; e++) {
      let e = v() * 6.28,
        t = 10 + v() * 10;
      se.spawn(
        r + Math.cos(e) * 6,
        d + 0.6,
        a + Math.sin(e) * 6,
        Math.cos(e) * t,
        0.6,
        Math.sin(e) * t,
        3 + v() * 3,
        1.5,
        7,
        [0.36, 0.3, 0.26],
        [0.2, 0.18, 0.16],
        0.4,
        1.2,
        0,
        1,
      );
    }
    G()?.play(`meteor_impact`, { pos: [r, i, a], volume: 1, priority: 10 });
  }
  let Ve = [
      [-12, d + 5.2, -21],
      [33, d + 9, 14],
    ],
    He = [];
  for (let e of i.array?.antennas ?? [])
    e.fixed || He.push(e.x + 1.9, e.y0 + 3.2, e.z);
  for (let [e, t, n] of Ve) He.push(e, t + 0.6, n);
  let Y = h(new f());
  Y.setAttribute(`position`, new w(He, 3));
  let Ue = new re(
    Y,
    h(
      new C({
        color: 16722456,
        size: 2.2,
        sizeAttenuation: !0,
        transparent: !0,
        opacity: 0,
        blending: 2,
        depthWrite: !1,
        map: P.material.map,
      }),
    ),
  );
  ((Ue.frustumCulled = !1), (Ue.visible = !1), g.add(Ue));
  let X = new t(
    h(new c(1, 48).rotateX(-Math.PI / 2)),
    h(
      new y({
        color: 16756848,
        transparent: !0,
        opacity: 0,
        blending: 2,
        depthWrite: !1,
        map: P.material.map,
      }),
    ),
  );
  ((X.visible = !1), g.add(X));
  let We = 0,
    Ge = -1e9,
    Z = null;
  return {
    update(e) {
      ((e = Math.min(e || 0, 0.1)), (We += e));
      let t = u(),
        r = n.camera,
        a = ye(i);
      if ((a !== Ne && ((Ne = a), Re()), !a.length)) {
        g.visible = !1;
        return;
      }
      ((g.visible = !0),
        r &&
          (b.value =
            (window.innerHeight * Math.min(2, window.devicePixelRatio || 1)) /
            (2 * Math.tan(p.degToRad(r.fov || 60) / 2))));
      for (let e of a) {
        if (t < e.impact) break;
        let n = ze(e);
        if (!n.landed) {
          let r = L(e, t);
          (Be(e, n, n.last == null || r > 0.6),
            n.last == null || r > 0.6 || ((Ge = We), (Z = e)));
        }
      }
      let o = !1,
        s = null;
      for (let n of he(i, t)) {
        let i = ze(n),
          a = L(n, t),
          c = i.last;
        i.last = a;
        for (let t of B) {
          let n = (t.t + a) / t.d;
          if (n < 0 || n > 1) continue;
          let i = Math.sin(Math.PI * n);
          (Ie.fromArray(t.a).multiplyScalar(3200),
            Le.fromArray(t.b).multiplyScalar(3200),
            Fe.lerpVectors(Ie, Le, n),
            r && Fe.add(r.position),
            D.spawn(
              Fe.x,
              Fe.y,
              Fe.z,
              0,
              0,
              0,
              0.12,
              70 * i + 20,
              30,
              [1.3, 1.7, 1.4],
              [1, 0.5, 0.2],
              0.9,
            ),
            v() < e * 40 &&
              ue.spawn(
                Fe.x,
                Fe.y,
                Fe.z,
                (v() - 0.5) * 3,
                (v() - 0.5) * 3,
                (v() - 0.5) * 3,
                16 + v() * 10,
                30,
                110,
                [0.95, 0.85, 0.75],
                [0.78, 0.78, 0.83],
                0.5 * i + 0.1,
                0.05,
                0,
                4,
              ));
        }
        if (a >= -V.INBOUND && a < 0) {
          if (((s = { S: n, s: a }), J(n, a, K), i.prev)) {
            let e = Math.min(40, Math.ceil(K.distanceTo(i.prev) / 8));
            for (let t = 0; t < e; t++)
              (q.lerpVectors(i.prev, K, t / e),
                D.spawn(
                  q.x,
                  q.y,
                  q.z,
                  (v() - 0.5) * 4,
                  (v() - 0.5) * 4,
                  (v() - 0.5) * 4,
                  0.4 + v() * 0.5,
                  9,
                  2,
                  [1.2, 1.7, 1.4],
                  [0.8, 0.22, 0.04],
                  0.3,
                  0.5,
                ),
                t % 2 == 0 &&
                  ue.spawn(
                    q.x,
                    q.y,
                    q.z,
                    (v() - 0.5) * 3,
                    (v() - 0.5) * 3,
                    (v() - 0.5) * 3,
                    26 + v() * 12,
                    14,
                    60,
                    [0.42, 0.38, 0.36],
                    [0.34, 0.34, 0.37],
                    0.55,
                    0.05,
                    0,
                    3,
                  ));
          }
          i.prev = (i.prev ?? new l()).copy(K);
          {
            let e = G()?.hasSample?.(`meteor_roar`) ? -V.INBOUND : -7;
            c != null &&
              c < e &&
              a >= e &&
              G()?.play(`meteor_roar`, { volume: 1, priority: 9 });
          }
          c != null &&
            c < -4.6 &&
            a >= -4.6 &&
            G()?.play(`meteor_boom`, { volume: 1, priority: 10 });
        } else i.prev = null;
        if (a >= 0) {
          let e = Math.exp(-a / 40);
          (R.setX(n.k, e), (o = !0));
        }
        let u = F(n, t);
        if (u > 0 && i.landed) {
          for (let t of i.fire) {
            for (let n = 0; n < 2; n++)
              v() < u * e * 20 &&
                oe.spawn(
                  t[0] + (v() - 0.5) * 0.8,
                  t[1],
                  t[2] + (v() - 0.5) * 0.8,
                  (v() - 0.5) * 0.6,
                  1.5 + v() * 1.5,
                  (v() - 0.5) * 0.6,
                  0.45 + v() * 0.6,
                  0.45 + v() * 0.35,
                  0.12,
                  [1.9, 1, 0.32],
                  [0.6, 0.1, 0.02],
                  0.7,
                  0.5,
                  2.6,
                  0.5,
                );
            v() < e * 2 &&
              D.spawn(
                t[0] + (v() - 0.5),
                t[1] + 0.1,
                t[2] + (v() - 0.5),
                v() - 0.5,
                1 + v() * 2,
                v() - 0.5,
                1.5 + v(),
                0.08,
                0.05,
                [2, 0.8, 0.2],
                [0.6, 0.1, 0],
                1,
                0.3,
                0.8,
                1,
              );
          }
          r &&
            Math.hypot(r.position.x - n.x, r.position.z - n.z) < 70 &&
            We > i.sndFire &&
            ((i.sndFire = We + (G()?.hasSample?.(`meteor_fire`) ? 9.4 : 5.6)),
            G()?.play(`meteor_fire`, {
              pos: [n.x, d + 0.5, n.z],
              volume: u,
              priority: 4,
            }));
        }
        let f =
          a < 0
            ? 0
            : a < V.BURN
              ? Math.min(1, a / 2)
              : 1 - 0.85 * Math.min(1, (a - V.BURN) / (V.SMOKE - V.BURN));
        if (a >= 0 && i.fire.length && v() < f * e * 16) {
          let e = i.fire[(v() * i.fire.length) | 0];
          k.spawn(
            e[0],
            e[1] + 0.5,
            e[2],
            (v() - 0.5) * 0.6,
            2 + v() * 1.4,
            (v() - 0.5) * 0.6,
            11 + v() * 5,
            1.8,
            17 + v() * 6,
            [0.18, 0.14, 0.12],
            [0.32, 0.31, 0.32],
            0.6,
            0.05,
            0.12,
            1,
          );
        }
      }
      o && (R.needsUpdate = !0);
      {
        let e = null;
        for (let n of he(i, t)) {
          let r = L(n, t),
            i = ze(n),
            a = i.lastA;
          if (
            ((i.lastA = r),
            r >= -V.ALARM && r < 1.5 && (e = { S: n, s: r }),
            a != null && a < -V.ALARM && r >= -V.ALARM)
          )
            for (let e of Ve)
              G()?.play(`meteor_alarm`, { pos: e, volume: 1, priority: 8 });
        }
        ((Ue.visible = !!e),
          e &&
            (Ue.material.opacity = Math.sin(We * Math.PI * 4) > 0 ? 1 : 0.08));
        let n = e && e.s > -4 && e.s < 0 ? (e.s + 4) / 4 : 0;
        ((X.visible = n > 0),
          n > 0 &&
            (X.position.set(e.S.x, d + 0.06, e.S.z),
            X.scale.setScalar(3 + n * 9),
            (X.material.opacity =
              Math.min(1, 0.5 + n * 1.2) * (0.85 + 0.15 * Math.sin(We * 40)))));
      }
      if (((P.visible = fe.visible = !!s), s)) {
        let { S: e, s: t } = s,
          n = (t + V.INBOUND) / V.INBOUND,
          i =
            Math.min(1, n / 0.35) *
            (0.6 + 0.4 * n) *
            (0.9 + 0.1 * Math.sin(We * 61));
        J(e, t, K);
        let a = r ? K.distanceTo(r.position) * 0.024 + 8 : 30;
        (P.position.copy(K),
          fe.position.copy(K),
          P.scale.setScalar(a * (0.8 + 0.3 * i)),
          fe.scale.setScalar(a * 4 * (0.6 + 0.5 * i)));
      }
      let c = We - Ge,
        f = c >= 0 ? Math.exp(-c / 0.22) : 0;
      ((I.visible = !!Z && f > 0.02),
        I.visible &&
          (I.position.set(Z.x, d + 3, Z.z),
          I.scale.setScalar(40 + 60 * (1 - f)),
          (I.material.opacity = f)),
        (pe.visible = !!Z && c < 1.6),
        pe.visible &&
          (pe.position.set(Z.x, d + 0.15, Z.z),
          pe.scale.setScalar(4 + c * 70),
          (pe.material.opacity = 0.12 * (1 - c / 1.6))));
      for (let t of M) t.update(e, d);
      ke(e);
    },
    stats() {
      let e = u(),
        t = ye(i),
        n = t.find((t) => t.impact > e),
        r = [...t].reverse().find((t) => t.impact <= e);
      return t.length
        ? {
            landed: t.filter((t) => t.impact <= e).length,
            impactIn: n ? +((n.impact - e) / Ce).toFixed(1) : null,
            next: n ? [n.x, n.z] : null,
            last: r ? [r.x, r.z] : null,
            burning: t.filter((t) => F(t, e) > 0).length,
            dishes: t
              .filter((t) => t.dish && t.impact <= e)
              .map((e) => e.dish.id),
            debris: W.n,
          }
        : null;
    },
    dispose() {
      (r.remove(g), W.mesh.dispose(), ve.dispose(), xe.dispose(), H.dispose());
      for (let e of m) e.dispose?.();
    },
  };
}
