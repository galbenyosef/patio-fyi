// assets__observatory-view-BtP2mjUr 06 — math
// Lines 1813-3268 of readable/assets__observatory-view-BtP2mjUr.pretty.js (statement-aligned).
function Fe(p, g, S, ne) {
  let D = S.observatory,
    ae = [],
    O = (...e) => {
      for (let t of e) t && ae.push(t);
      return e[0];
    },
    A = (S.climate?.tod ?? 1.5) < 5,
    le = 21,
    M = () => (le = (Math.imul(le, 1664525) + 1013904223) >>> 0) / 4294967296,
    de = p.modules.get(`terrain`),
    fe = (e, t) => de?.getHeight?.(e, t) ?? D.y,
    F = new ee();
  ((F.name = `observatory`), g.add(F));
  let I = new ee();
  ((I.name = `observatory-live`), (I.userData.dynamicShadow = !0), g.add(I));
  let me = O(
      q(1024, 512, (e, t, n) => {
        ((e.fillStyle = `#e9ecef`), e.fillRect(0, 0, t, n));
        for (let r = 0; r < 2500; r++)
          ((e.fillStyle = `rgba(${M() < 0.5 ? `120,125,130` : `255,255,255`},${M() * 0.08})`),
            e.fillRect(M() * t, M() * n, 2 + M() * 6, 1 + M() * 3));
        ((e.strokeStyle = `rgba(90,96,104,.55)`), (e.lineWidth = 2));
        for (let r = 0; r <= 48; r++) {
          let i = (r / 48) * t;
          (e.beginPath(), e.moveTo(i, 0), e.lineTo(i, n), e.stroke());
        }
        for (let r = 0; r <= 6; r++) {
          let i = (r / 6) * n;
          (e.beginPath(), e.moveTo(0, i), e.lineTo(t, i), e.stroke());
        }
        for (let r = 0; r < 60; r++) {
          let r = M() * t,
            i = M() * n * 0.6,
            a = e.createLinearGradient(0, i, 0, i + 80);
          (a.addColorStop(0, `rgba(110,100,90,.18)`),
            a.addColorStop(1, `rgba(110,100,90,0)`),
            (e.fillStyle = a),
            e.fillRect(r, i, 3, 80));
        }
      }),
    ),
    he = O(
      q(
        1024,
        256,
        (e, t, n) => {
          ((e.fillStyle = `#dde0e4`),
            e.fillRect(0, 0, t, n),
            (e.fillStyle = `rgba(80,86,94,.35)`));
          for (let r = 0; r < t; r += 16) e.fillRect(r, 0, 2, n);
          ((e.fillStyle = `#4a5058`),
            e.fillRect(0, 22, t, 34),
            (e.fillStyle = `rgba(200,205,210,.8)`));
          for (let n = 24; n < 56; n += 5) e.fillRect(0, n, t, 1.5);
          e.fillStyle = `rgba(70,60,50,.18)`;
          for (let n = 0; n < 40; n++)
            e.fillRect(M() * t, 60, 2, 40 + M() * 140);
        },
        [3, 1],
      ),
    ),
    L = O(
      q(64, 64, (e) => {
        let t = e.createRadialGradient(32, 32, 0, 32, 32, 32);
        (t.addColorStop(0, `rgba(255,255,255,1)`),
          t.addColorStop(0.3, `rgba(255,255,255,.45)`),
          t.addColorStop(1, `rgba(255,255,255,0)`),
          (e.fillStyle = t),
          e.fillRect(0, 0, 64, 64));
      }),
    );
  L.wrapS = L.wrapT = h;
  let R = {
      dome: O(new s({ map: me, roughness: 0.42, metalness: 0.2, side: 0 })),
      domeInner: O(
        new s({
          map: me,
          color: 6975096,
          roughness: 0.75,
          metalness: 0.35,
          side: 1,
        }),
      ),
      drum: O(new s({ map: he, roughness: 0.6, metalness: 0.15, side: 2 })),
      steel: O(new s({ color: 6975608, roughness: 0.45, metalness: 0.8 })),
      dark: O(new s({ color: 2303531, roughness: 0.5, metalness: 0.6 })),
      mirror: O(new s({ color: 13161702, roughness: 0.08, metalness: 1 })),
      tube: O(new s({ color: 3822978, roughness: 0.38, metalness: 0.5 })),
      fork: O(new s({ color: 7110560, roughness: 0.45, metalness: 0.45 })),
      concrete: O(new s({ color: 9341830, roughness: 0.9 })),
      rock: O(new s({ color: 6049349, roughness: 0.95, flatShading: !0 })),
      white: O(new s({ color: 15264494, roughness: 0.4, side: 2 })),
      wood: O(new s({ color: 4864556, roughness: 0.9 })),
      glass: O(
        new s({
          color: 9416904,
          roughness: 0.05,
          metalness: 0.3,
          transparent: !0,
          opacity: 0.18,
          depthWrite: !1,
        }),
      ),
      gravel: O(new s({ color: 9076338, roughness: 1, side: 2 })),
    },
    z = (e) => ((e.castShadow = !0), (e.receiveShadow = !0), e),
    _e = [],
    B = (t, n, r = 1) => {
      let i = new ie(
        O(
          new e({
            map: L,
            color: t,
            blending: 2,
            depthWrite: !1,
            transparent: !0,
            opacity: r,
            fog: !1,
          }),
        ),
      );
      return (i.scale.setScalar(n), i);
    },
    V = [],
    xe = [],
    H = [],
    Se = [];
  for (let e of D.domes) {
    let { x: t, z: n, r, drumH: i } = e,
      s = e.y0;
    Math.min(0.9, 1.25 / r);
    let c = Math.max(48, Math.round(r * 6)),
      l = D.buildings.find((t) => t.id === e.id)?.panelH ?? i;
    if (i > l)
      for (let e of [r + 0.15, r - 0.15]) {
        let r = new k(e, e, i - l, c, 1, !0);
        (r.translate(t, s + l + (i - l) / 2, n), V.push(r));
      }
    (Se.push(
      new k(r + 0.6, r + 0.9, 0.8, 48, 1, !0).translate(t, s + 0.1, n),
      new te(r, r + 0.6, 48).rotateX(-Math.PI / 2).translate(t, s + 0.5, n),
    ),
      xe.push(
        new te(r, r + 1.6, 64)
          .rotateX(-Math.PI / 2)
          .translate(t, s + i + 0.01, n),
        new te(r, r + 1.6, 64)
          .rotateX(-Math.PI / 2)
          .translate(t, s + i - 0.2, n),
      ),
      H.push(
        new o(r + 1.55, 0.05, 6, 72)
          .rotateX(Math.PI / 2)
          .translate(t, s + i + 1.03, n),
        new o(r + 1.55, 0.04, 6, 72)
          .rotateX(Math.PI / 2)
          .translate(t, s + i + 0.54, n),
      ));
    for (let e = 0; e < 6.283; e += 0.35)
      H.push(
        new a(0.05, 1, 0.05).translate(
          t + Math.sin(e) * (r + 1.55),
          s + i + 0.5,
          n + Math.cos(e) * (r + 1.55),
        ),
      );
    if (
      (xe.push(
        new k(r + 1.6, r + 1.6, 0.21, 64, 1, !0).translate(t, s + i - 0.095, n),
      ),
      e.laser)
    ) {
      xe.push(
        new te(e.r - 1.6, e.r - 0.2, 64)
          .rotateX(-Math.PI / 2)
          .translate(t, s + i - 0.39, n),
        new te(e.r - 1.6, e.r - 0.2, 64)
          .rotateX(-Math.PI / 2)
          .translate(t, s + i - 0.6, n),
        new k(e.r - 1.6, e.r - 1.6, 0.21, 64, 1, !0).translate(
          t,
          s + i - 0.495,
          n,
        ),
      );
      for (let r = 0; r < 40; r++) {
        let o = (r / 40) * Math.PI * 2,
          c = ((r + 0.5) / 40) * Math.PI * 2;
        Math.abs(Math.atan2(Math.sin(c - Math.PI), Math.cos(c - Math.PI))) <
          0.12 ||
          H.push(
            new a(0.05, 1, 0.05).translate(
              t + Math.sin(o) * (e.r - 1.6),
              s + i - 0.4 + 0.5,
              n + Math.cos(o) * (e.r - 1.6),
            ),
          );
      }
      H.push(
        new o(e.r - 1.6, 0.04, 6, 64)
          .rotateX(Math.PI / 2)
          .translate(t, s + i + 0.63, n),
      );
    }
    let u = Math.PI * 0.78,
      d = t + Math.sin(u) * (r + 0.25),
      f = n + Math.cos(u) * (r + 0.25);
    for (let e of [-0.22, 0.22])
      H.push(
        new a(0.05, i + 1, 0.05).translate(
          d + Math.cos(u) * e,
          s + (i + 1) / 2,
          f - Math.sin(u) * e,
        ),
      );
    for (let e = 0.3; e < i; e += 0.3)
      H.push(
        new a(0.5, 0.03, 0.03).rotateY(-u + Math.PI / 2).translate(d, s + e, f),
      );
  }
  let U = (e, n, r) => {
    let i = O(se(e.map((e) => (e.index ? e.toNonIndexed() : e))));
    e.forEach((e) => e.dispose());
    let a = z(new t(i, n));
    return ((a.name = r), F.add(a), a);
  };
  if (
    (U(V, R.drum, `obs-drums`),
    U(Se, R.concrete, `obs-plinths`),
    U(
      xe,
      O(new s({ color: 9080726, roughness: 0.6, metalness: 0.6, side: 2 })),
      `obs-decks`,
    ),
    U(H, O(new s({ color: 13214247, roughness: 0.6 })), `obs-rails`),
    D.obsFloors?.length)
  ) {
    let e = [];
    for (let t of D.obsFloors) {
      let n = D.domes.find((e) => e.id === t.id);
      if (n)
        for (let r of [-0.015, -0.19])
          e.push(
            new te(t.ri, t.ro, 96)
              .rotateX(-Math.PI / 2)
              .translate(n.x, t.y + r, n.z),
          );
    }
    e.length &&
      U(
        e,
        O(
          new s({
            color: 3949120,
            roughness: 0.85,
            metalness: 0.2,
            flatShading: !0,
            side: 2,
          }),
        ),
        `obs-floor-edge`,
      );
  }
  function Ce(e, t) {
    let r = new n(e, 72, 24, 0, Math.PI * 2, 0, Math.PI / 2).toNonIndexed(),
      i = r.attributes.position,
      a = r.attributes.uv,
      o = { shell: [[], []], shut: [[], []], wind: [[], []] };
    for (let n = 0; n < i.count; n += 3) {
      let r = (i.getX(n) + i.getX(n + 1) + i.getX(n + 2)) / 3,
        s = (i.getY(n) + i.getY(n + 1) + i.getY(n + 2)) / 3,
        c = (i.getZ(n) + i.getZ(n + 1) + i.getZ(n + 2)) / 3,
        l =
          Math.abs(r) < t / 2 && c > -e * 0.28
            ? s < e * Math.sin(Math.PI / 8) && c > 0
              ? `wind`
              : `shut`
            : `shell`;
      for (let e = 0; e < 3; e++)
        (o[l][0].push(i.getX(n + e), i.getY(n + e), i.getZ(n + e)),
          o[l][1].push(a.getX(n + e), a.getY(n + e)));
    }
    r.dispose();
    let s = ([e, t]) => {
      let n = new f();
      return (
        n.setAttribute(`position`, new w(e, 3)),
        n.setAttribute(`uv`, new w(t, 2)),
        n.computeVertexNormals(),
        O(n)
      );
    };
    return { shell: s(o.shell), shut: s(o.shut), wind: s(o.wind) };
  }
  let we = D.domes.map((e) => {
    let n = new ee();
    (n.position.set(e.x, e.y0 + e.drumH, e.z), I.add(n));
    let r = Ce(e.r, e.slotW),
      i = (e) => {
        let n = new t(e, R.domeInner);
        return ((n.receiveShadow = !0), n);
      };
    n.add(
      z(new t(r.shell, R.dome)),
      z(new t(r.wind, R.dome)),
      i(r.shell),
      i(r.wind),
    );
    let s = z(new t(r.shut, R.dome));
    (s.add(i(r.shut)), n.add(s));
    for (let r of [-1, 1])
      n.add(
        new t(
          O(
            new o(e.r * 1.003, 0.14, 6, 60, Math.PI * 0.62)
              .rotateY(-Math.PI / 2)
              .translate((r * e.slotW) / 2, 0, 0),
          ),
          R.steel,
        ),
      );
    n.add(
      new t(O(new o(e.r * 1.002, 0.18, 6, 96).rotateX(Math.PI / 2)), R.steel),
    );
    let l = (e.floorY || 0) + 0.6,
      u = z(
        new t(
          O(new k(Math.max(0.9, e.r * 0.15), Math.max(1.1, e.r * 0.18), l, 16)),
          R.concrete,
        ),
      );
    (u.position.set(e.x, e.y0 + l / 2, e.z), F.add(u));
    let d = new ee();
    (d.position.set(e.x, e.y0 + l, e.z),
      I.add(d),
      d.add(z(new t(O(new k(e.r * 0.22, e.r * 0.22, 0.6, 24)), R.steel))));
    for (let n of [-1, 1]) {
      let r = e.r * 0.06 + 0.2,
        i = e.r * 0.38,
        o = e.r * 0.14,
        s = new ee();
      (s.position.set(n * e.r * 0.25, e.r * 0.19, 0),
        d.add(s),
        s.add(z(new t(O(new a(r, i, o)), R.fork))));
      for (let e of [-1, 1]) {
        let n = new t(O(new a(0.02, i * 0.6, o * 0.55)), R.dark);
        (n.position.set(e * (r / 2 + 0.005), -i * 0.05, 0), s.add(n));
      }
      for (let e of [-i / 2, i / 2 - 0.06]) {
        let n = new t(O(new a(r * 1.08, 0.08, o * 1.06)), R.steel);
        ((n.position.y = e + 0.04), s.add(n));
      }
      let c = new t(
        O(new k(o * 0.32, o * 0.32, r * 1.3, 20).rotateZ(Math.PI / 2)),
        R.steel,
      );
      ((c.position.y = e.r * 0.13), s.add(c));
    }
    let f = new ee();
    ((f.position.y = e.r * 0.32), d.add(f));
    let p = e.r * 0.95,
      m = e.r * 0.17,
      h = z(new t(O(new k(m * 1.1, m, p * 0.18, 24)), R.tube));
    ((h.position.y = -p * 0.3), f.add(h));
    let g = new t(O(new c(m * 0.92, 32).rotateX(-Math.PI / 2)), R.mirror);
    ((g.position.y = -p * 0.3 + p * 0.09 + 0.01), f.add(g));
    for (let e of [-p * 0.2, p * 0.25]) {
      let n = new t(O(new o(m, m * 0.08, 8, 28).rotateX(Math.PI / 2)), R.tube);
      ((n.position.y = e), f.add(n));
    }
    let _ = z(new t(O(new k(m * 1.02, m * 1.02, p * 0.08, 24, 1, !0)), R.tube));
    ((_.position.y = p * 0.72), f.add(_));
    let v = O(new k(m * 0.035, m * 0.035, p * 0.95, 5));
    for (let e = 0; e < 8; e++) {
      let n = (e / 8) * Math.PI * 2,
        r = new t(v, R.dark);
      (r.position.set(Math.cos(n) * m, p * 0.25, Math.sin(n) * m), f.add(r));
    }
    for (let e of [0, 1]) {
      let n = new t(O(new a(e ? 0.03 : m * 2, 0.03, e ? m * 2 : 0.03)), R.dark);
      ((n.position.y = p * 0.72), f.add(n));
    }
    let y = new t(O(new k(m * 0.25, m * 0.25, p * 0.12, 12)), R.dark);
    ((y.position.y = p * 0.72), f.add(y));
    let b = null,
      x = null,
      S = null;
    if (e.laser && A) {
      let e = O(new k(3.2, 0.3, 3600, 16, 1, !0));
      e.translate(0, 1800 + p * 0.8, 0);
      let n = O(
        new T({
          uniforms: { amp: { value: 1 } },
          transparent: !0,
          depthWrite: !1,
          blending: 2,
          side: 2,
          fog: !1,
          vertexShader: `varying vec3 vN; varying vec3 vV; varying float vH; void main(){ vec4 wp = modelMatrix * vec4(position,1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - wp.xyz); vH = uv.y; gl_Position = projectionMatrix * viewMatrix * wp; }`,
          fragmentShader: `uniform float amp; varying vec3 vN; varying vec3 vV; varying float vH;
     void main(){ float c = pow(abs(dot(normalize(vN), normalize(vV))), 2.5); float fall = mix(1.0, 0.15, smoothstep(0.0, 0.7, vH));
      gl_FragColor = vec4(vec3(1.0, 0.55, 0.12) * c * fall * amp * 0.55, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
     }`,
        }),
      );
      ((b = new t(e, n)),
        (b.frustumCulled = !1),
        f.add(b),
        (x = B(16752688, 4)),
        (x.position.y = p * 0.8),
        f.add(x),
        (S = B(16760928, 90)),
        (S.position.y = 3600),
        f.add(S));
    }
    if (e.floorY) {
      let t =
        (D.obsFloors?.find((t) => t.id === e.id)?.y ?? e.y0 + e.floorY) + 0.04;
      for (let [n, r, i, a] of [
        [-0.3, 0.2, 16723992, 0.55],
        [0.4, -0.3, 16763024, 0.4],
      ]) {
        let o = 8 / Math.hypot(n, r);
        _e.push({
          x: e.x + n * o,
          y: t,
          z: e.z + r * o,
          r: 4,
          col: i,
          gain: a,
        });
      }
    }
    return {
      D: e,
      rot: n,
      shutter: s,
      fork: d,
      tube: f,
      laser: b,
      launch: x,
      star: S,
    };
  });
  {
    let e = S.landmarks.find((e) => e.id === `control`);
    if (e)
      for (let t of [-8, 6])
        _e.push({
          x: e.x + t,
          y: D.y + 0.14,
          z: e.z + 1.5,
          r: 5,
          col: 8035024,
          gain: 0.3,
        });
  }
  let Te = [];
  for (let [e, r] of (D.dishes ?? []).entries()) {
    let i = new ee();
    (i.position.set(r.x, r.y + r.s * 0.8, r.z),
      F.add(i),
      Te.push({ g: i, base: 0.6 + e * 1.7, rate: 0.05 + e * 0.03 }));
    let a = z(
      new t(
        O(new n(r.s, 32, 12, 0, Math.PI * 2, Math.PI * 0.62, Math.PI * 0.38)),
        R.white,
      ),
    );
    (a.rotation.set(Math.PI + 0.75, 0, 0), i.add(a));
    let o = new t(O(new k(0.06, 0.06, r.s * 0.9, 5)), R.steel);
    (o.position.set(0, -r.s * 0.55, 0), a.add(o));
  }
  let Ee = O(new a(1, 1, 1)),
    W = new ce(Ee, R.glass, Math.max(1, D.panes.length));
  W.name = `obs-glass`;
  let Oe = new j(),
    ke = new E(),
    Me = new l(),
    G = new l(),
    Ne = new j().makeScale(0, 0, 0),
    Fe = (e, t) =>
      W.setMatrixAt(
        e,
        Oe.compose(
          Me.set((t[0] + t[3]) / 2, (t[1] + t[4]) / 2, (t[2] + t[5]) / 2),
          ke,
          G.set(t[3] - t[0], t[4] - t[1], t[5] - t[2]),
        ),
      );
  (D.panes.forEach((e, t) => Fe(t, e.box)),
    (W.count = D.panes.length),
    (W.instanceMatrix.needsUpdate = !0),
    W.computeBoundingSphere(),
    g.add(W));
  let Ie = -1,
    Le = () => {
      let e = D.broken?.size ?? 0;
      e !== Ie &&
        ((Ie = e),
        D.panes.forEach((e, t) =>
          ve(D, e.id) ? W.setMatrixAt(t, Ne) : Fe(t, e.box),
        ),
        (W.instanceMatrix.needsUpdate = !0));
    },
    J = O(
      (() => {
        let e = new f();
        return (
          e.setAttribute(`position`, new u(Ae.slice(), 3)),
          e.computeVertexNormals(),
          e
        );
      })(),
    );
  {
    let e = [
        ...D.rocks.map(je),
        ...(D.cliffRocks ?? []).map((e) => ({
          x: e.x,
          y: fe(e.x, e.z) - e.s * 0.15,
          z: e.z,
          sx: e.s * 0.6,
          sy: e.s * 0.4,
          sz: e.s * 0.55,
          ry: e.ry,
        })),
      ],
      t = new ce(J, R.rock, e.length),
      n = new x();
    (e.forEach((e, r) => {
      (n.position.set(e.x, e.y, e.z),
        n.rotation.set(0, e.ry, 0),
        n.scale.set(e.sx, e.sy, e.sz),
        n.updateMatrix(),
        t.setMatrixAt(r, n.matrix));
    }),
      (t.castShadow = t.receiveShadow = !0),
      (t.name = `obs-rocks`),
      F.add(t));
  }
  {
    let e = (e, t) =>
        !D.domes.some((n) => Math.hypot(e - n.x, t - n.z) < n.r + 1.8) &&
        !D.buildings.some(
          (n) =>
            e > n.box[0] - 0.6 &&
            e < n.box[2] + 0.6 &&
            t > n.box[1] - 0.6 &&
            t < n.box[3] + 0.6,
        ),
      t = [];
    for (let n = 0; n < 4200 && t.length < 1800; n++) {
      let n = -90 + M() * 180,
        r = -43 + M() * 86;
      if (!e(n, r)) continue;
      let i = 0.05 + M() ** 3 * 0.14;
      t.push([n, D.y + i * 0.25, r, i]);
    }
    let n = new ce(J, R.rock, t.length),
      r = new x();
    (t.forEach(([e, t, i, a], o) => {
      (r.position.set(e, t, i),
        r.rotation.set(M(), M() * 6.28, M()),
        r.scale.set(a * (0.8 + M() * 0.5), a * 0.6, a * (0.8 + M() * 0.5)),
        r.updateMatrix(),
        n.setMatrixAt(o, r.matrix));
    }),
      (n.receiveShadow = !0),
      (n.name = `obs-pebbles`),
      F.add(n));
  }
  let Re = new t(
    O(new n(3400, 48, 24)),
    O(
      new T({
        side: 1,
        depthWrite: !1,
        depthTest: !0,
        transparent: !0,
        blending: 2,
        fog: !1,
        vertexShader: `varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
        fragmentShader: `varying vec3 vD;
   float hash(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
   float noise(vec3 x){ vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x), mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x), mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z); }
   float fbm(vec3 p){ float a = 0.0, s = 0.5; for (int i = 0; i < 6; i++){ a += noise(p) * s; p *= 2.07; s *= 0.5; } return a; }
   void main(){ vec3 d = normalize(vD); float h = d.y; if (h < -0.02) discard;
    vec3 N = normalize(vec3(0.42, 0.30, 0.86)), C = normalize(vec3(0.35, 0.22, -0.91));
    float b = dot(d, N), band = exp(-b * b / 0.022), wide = exp(-b * b / 0.09), core = exp(-pow(distance(d, C), 2.0) / 0.2);
    float cloud = fbm(d * 7.0), fine = fbm(d * 30.0), knots = smoothstep(0.55, 0.85, fbm(d * 14.0 + 7.0));
    float dust = smoothstep(0.40, 0.66, fbm(d * 10.0 + 3.0)) * exp(-b * b / 0.004);
    float mw = band * (0.15 + 1.7 * cloud * cloud + 0.5 * fine + 0.8 * knots) * (1.0 + 3.2 * core) * (1.0 - 0.9 * dust);
    vec3 col = wide * vec3(0.012, 0.013, 0.018) + mw * vec3(0.62, 0.66, 0.82) * 0.11 + core * band * vec3(0.55, 0.40, 0.22) * 0.12 * (1.0 - dust);
    col *= smoothstep(-0.02, 0.12, h);
    gl_FragColor = vec4(col, 1.0);
   }`,
      }),
    ),
  );
  ((Re.renderOrder = -10),
    (Re.frustumCulled = !1),
    (Re.name = `obs-milky-way`),
    (Re.visible = A),
    g.add(Re));
  let ze = (() => {
      let e = [],
        t = [];
      for (let n = 0; n < 5500; n++) {
        let n = M() * 2 - 1,
          r = M() * Math.PI * 2,
          i = Math.sqrt(1 - n * n),
          a = [Math.cos(r) * i, Math.abs(n), Math.sin(r) * i];
        if (a[1] < 0.02) continue;
        e.push(a[0] * 3300, a[1] * 3300, a[2] * 3300);
        let o = 0.12 + M() ** 4 * 0.5,
          s = M();
        t.push(o * (s < 0.2 ? 1 : 0.9), o * 0.93, o * (s > 0.7 ? 1 : 0.85));
      }
      let n = O(new f());
      (n.setAttribute(`position`, new w(e, 3)),
        n.setAttribute(`color`, new w(t, 3)));
      let r = new re(
        n,
        O(
          new C({
            size: 1.1,
            opacity: 0.6,
            sizeAttenuation: !1,
            vertexColors: !0,
            fog: !1,
            depthWrite: !1,
            transparent: !0,
          }),
        ),
      );
      return (
        (r.frustumCulled = !1),
        (r.renderOrder = -9),
        (r.visible = A),
        g.add(r),
        r
      );
    })(),
    Be = O(
      q(256, 256, (e) => {
        let t = e.createRadialGradient(128, 128, 30, 128, 128, 128);
        (t.addColorStop(0, `rgba(255,240,210,.35)`),
          t.addColorStop(1, `rgba(255,240,210,0)`),
          (e.fillStyle = t),
          e.fillRect(0, 0, 256, 256),
          e.save(),
          e.beginPath(),
          e.arc(128, 128, 40, 0, 7),
          e.clip(),
          (e.fillStyle = `#fff4dc`),
          e.fill(),
          (e.globalCompositeOperation = `destination-out`),
          e.beginPath(),
          e.arc(146, 120, 38, 0, 7),
          e.fill(),
          e.restore());
      }),
    );
  Be.wrapS = Be.wrapT = h;
  let Ve = new l(-0.85, 0.12, -0.3).normalize(),
    He = new ie(
      O(new e({ map: Be, fog: !1, depthWrite: !1, transparent: !0 })),
    );
  (He.scale.setScalar(300), (He.renderOrder = -8), (He.visible = A), g.add(He));
  let Y = new t(
    O(new oe(1, 1)),
    O(
      new y({
        color: 14674175,
        transparent: !0,
        opacity: 0,
        blending: 2,
        depthWrite: !1,
        fog: !1,
        side: 2,
      }),
    ),
  );
  (Y.scale.set(260, 5, 1),
    (Y.renderOrder = -8),
    (Y.frustumCulled = !1),
    (Y.visible = A),
    g.add(Y));
  let Ue = -1,
    X = new l(),
    We = new l(),
    Ge = [0, 1, 2, 3].map(() => {
      let e = B(16777215, 9);
      return (
        (e.renderOrder = -8),
        (e.visible = A),
        g.add(e),
        {
          s: e,
          a: M() * 6.28,
          b: M() * 6.28,
          v: 0.004 + M() * 0.004,
          k: 0.6 + M() * 0.3,
        }
      );
    }),
    Z = [];
  {
    let e = -48,
      t = 1;
    Z.push(new l(-40, 0, -46));
    for (let n = 0; n < 4; n++) {
      let n = e,
        r = e - 28;
      for (let e = 1; e <= 30; e++) {
        let i = e / 30;
        Z.push(new l(-95 + 190 * (t > 0 ? i : 1 - i), 0, n + (r - n) * i));
      }
      ((e = r), (t = -t));
    }
    for (let e of Z) e.y = fe(e.x, e.z) + 0.35;
  }
  {
    let e = [],
      n = [];
    for (let t = 0; t < Z.length; t++) {
      let r = Z[Math.max(0, t - 1)],
        i = Z[Math.min(Z.length - 1, t + 1)],
        a = i.x - r.x,
        o = i.z - r.z,
        s = Math.hypot(a, o) || 1,
        c = ((-o / s) * 6) / 2,
        l = ((a / s) * 6) / 2;
      for (let n of [-1, 1]) {
        let r = Z[t].x + c * n,
          i = Z[t].z + l * n;
        e.push(r, fe(r, i) + 0.3, i);
      }
      if (t) {
        let e = t * 2;
        n.push(e - 2, e - 1, e, e - 1, e + 1, e);
      }
    }
    let r = O(new f());
    (r.setAttribute(`position`, new w(e, 3)),
      r.setIndex(n),
      r.computeVertexNormals());
    let i = new t(r, R.gravel);
    ((i.receiveShadow = !0), (i.name = `obs-road`), F.add(i));
  }
  let Ke = new _(Z.slice().reverse()),
    qe = new ee();
  F.add(qe);
  {
    let e = new t(O(new a(4, 1.6, 1.9)), R.dark);
    ((e.position.y = 1.1), qe.add(e));
    for (let e of [-0.7, 0.7]) {
      let t = B(16773328, 3.4);
      (t.position.set(2.05, 1, e), qe.add(t));
      let n = B(16719888, 1.3);
      (n.position.set(-2.05, 1, e), qe.add(n));
    }
  }
  for (let e of D.domes) {
    let n = D.buildings.find((t) => t.id === e.id)?.panelH;
    if (!n || n > e.drumH - 2) continue;
    let r = O(
      q(1024, 128, (t, n, r) => {
        (t.clearRect(0, 0, n, r),
          (t.fillStyle = `rgba(28,58,110,.95)`),
          (t.font = `bold 92px sans-serif`),
          (t.textAlign = `center`),
          t.fillText(e.name.toUpperCase(), n / 2, 100));
      }),
    );
    r.wrapS = r.wrapT = h;
    let i = Math.min(14, e.r * 0.9),
      a = i / (e.r + 0.06),
      o = Math.atan2(-e.x, -e.z),
      c = O(new k(e.r + 0.06, e.r + 0.06, i / 8, 24, 1, !0, o - a / 2, a)),
      l = new t(
        c,
        O(new s({ map: r, transparent: !0, roughness: 0.6, side: 0 })),
      );
    (l.position.set(e.x, e.y0 + (n + e.drumH) / 2 + 0.3, e.z), F.add(l));
  }
  {
    let e = [
        [-40, -48],
        [-58, -56],
        [-76, -66],
        [-92, -80],
        [-70, -100],
        [-40, -112],
        [-10, -122],
        [20, -130],
      ],
      n = [];
    for (let [r, i] of e) {
      let e = fe(r, i),
        o = new t(O(new k(0.12, 0.16, 9, 6)), R.wood ?? R.dark);
      (o.position.set(r, e + 4.5, i), F.add(o));
      let s = new t(O(new a(2.2, 0.12, 0.12)), R.dark);
      (s.position.set(r, e + 8.6, i), F.add(s), n.push(new l(r, e + 8.6, i)));
    }
    let o = O(new r({ color: 1316378 }));
    for (let e of [-1, 1]) {
      let t = [];
      for (let r = 0; r < n.length - 1; r++) {
        let i = n[r],
          a = n[r + 1];
        for (let n = 0; n <= 8; n++) {
          let r = n / 8;
          t.push(
            new l(
              i.x + (a.x - i.x) * r + e * 0.9,
              i.y + (a.y - i.y) * r - Math.sin(r * Math.PI) * 1.2,
              i.z + (a.z - i.z) * r,
            ),
          );
        }
      }
      let r = new i(O(new f().setFromPoints(t)), o);
      F.add(r);
    }
  }
  let Je = new ee();
  (Je.position.set(2.8, D.y + 11.6, 32), F.add(Je));
  for (let e = 0; e < 3; e++) {
    let r = (e / 3) * Math.PI * 2,
      i = new t(O(new a(0.5, 0.02, 0.02)), R.steel);
    (i.position.set(Math.cos(r) * 0.25, 0, Math.sin(r) * 0.25),
      (i.rotation.y = -r),
      Je.add(i));
    let o = new t(O(new n(0.07, 8, 6)), R.white);
    (o.position.set(Math.cos(r) * 0.5, 0, Math.sin(r) * 0.5), Je.add(o));
  }
  {
    let e = S.landmarks.find((e) => e.id === `dorm`);
    if (e)
      for (let t of [0.14, 3.85])
        _e.push({
          x: e.x,
          y: D.y + t,
          z: e.z,
          r: 5.5,
          col: 16763024,
          gain: 0.55,
        });
  }
  {
    let e = [],
      n = [],
      r = [],
      i = [],
      a = new b();
    if (
      (_e.forEach((t, o) => {
        a.setHex(t.col).multiplyScalar(t.gain);
        for (let [i, o] of [
          [0, 0],
          [1, 0],
          [1, 1],
          [0, 1],
        ])
          (e.push(t.x + (i * 2 - 1) * t.r, t.y, t.z + (o * 2 - 1) * t.r),
            n.push(i, o),
            r.push(a.r, a.g, a.b));
        i.push(o * 4, o * 4 + 2, o * 4 + 1, o * 4, o * 4 + 3, o * 4 + 2);
      }),
      _e.length)
    ) {
      let a = O(new f());
      (a.setAttribute(`position`, new w(e, 3)),
        a.setAttribute(`uv`, new w(n, 2)),
        a.setAttribute(`color`, new w(r, 3)),
        a.setIndex(i));
      let o = new t(
        a,
        O(
          new y({
            map: L,
            vertexColors: !0,
            blending: 2,
            depthWrite: !1,
            transparent: !0,
            side: 2,
          }),
        ),
      );
      ((o.renderOrder = 2), (o.name = `obs-light-pools`), F.add(o));
    }
  }
  for (let [e, n, r, i, a] of A
    ? [
        [6800, -300, 520, 724500, 3],
        [11500, -400, 900, 1251621, 7],
      ]
    : [
        [6800, -300, 520, 8224654, 3],
        [11500, -400, 900, 10463420, 7],
      ]) {
    let o = [],
      s = [];
    for (let t = 0; t <= 480; t++) {
      let i = (t / 480) * Math.PI * 2,
        c =
          n +
          r *
            (0.35 +
              (Math.abs(Math.sin(i * a * 2.3 + 1)) * 0.45 +
                Math.abs(Math.sin(i * a * 7.1 + 2)) * 0.3 +
                Math.abs(Math.sin(i * a * 19.7)) * 0.15 +
                Math.sin(i * 61 + a) * 0.05)),
        l = e * (1 + 0.04 * Math.sin(i * 5 + a));
      if (
        (o.push(
          Math.cos(i) * l,
          n - 600,
          Math.sin(i) * l,
          Math.cos(i) * l,
          c,
          Math.sin(i) * l,
        ),
        t)
      ) {
        let e = t * 2;
        s.push(e - 2, e, e - 1, e - 1, e, e + 1);
      }
    }
    let c = O(new f());
    (c.setAttribute(`position`, new w(o, 3)), c.setIndex(s));
    let l = new t(c, O(new y({ color: i, side: 2, fog: !1 })));
    ((l.renderOrder = -7),
      (l.frustumCulled = !1),
      (l.name = `obs-ranges`),
      F.add(l));
  }
  for (let [e, n, r, i] of [
    [-900, -1400, 320, 160],
    [700, -1900, 420, 210],
    [1500, -900, 260, 120],
  ]) {
    let a = O(new d(r, i, 40, 6, !0)),
      o = new t(a, O(new s({ color: 4861476, roughness: 1 })));
    (o.position.set(e, fe(e, n) + i / 2 - 20, n), F.add(o));
  }
  {
    let e = [];
    for (let [t, n, r] of [
      [600, -2600, 600],
      [-1800, -2900, 450],
      [1900, -3e3, 380],
      [-600, -3300, 700],
    ])
      for (let i = 0; i < 900; i++) {
        let i = M() * 6.283,
          a = M() ** 0.6 * r,
          o = t + Math.cos(i) * a * 1.4,
          s = n + Math.sin(i) * a;
        e.push(o, fe(o, s) + 8, s);
      }
    for (let t = 0; t < 600; t++) {
      let t = M(),
        n = -3e3 + 6e3 * t,
        r = -2700 + Math.sin(t * 6) * 700;
      e.push(n, fe(n, r) + 8, r);
    }
    let t = O(new f());
    t.setAttribute(`position`, new w(e, 3));
    let n = new re(
      t,
      O(
        new C({
          color: 16757610,
          size: 1.6,
          sizeAttenuation: !1,
          fog: !1,
          transparent: !0,
          opacity: 0.9,
        }),
      ),
    );
    ((n.frustumCulled = !1), (n.name = `obs-towns`), (n.visible = A), F.add(n));
  }
  let Ye = D.array ?? { antennas: [], pads: [] },
    Xe = [];
  if (Ye.antennas.length) {
    let e = O(
        q(512, 512, (e, t, n) => {
          ((e.fillStyle = `#eef0f2`),
            e.fillRect(0, 0, t, n),
            (e.strokeStyle = `rgba(120,128,138,.45)`),
            (e.lineWidth = 1.5));
          for (let r = 0; r <= 32; r++) {
            let i = (r / 32) * t;
            (e.beginPath(), e.moveTo(i, 0), e.lineTo(i, n), e.stroke());
          }
          for (let r = 0; r <= 8; r++) {
            let i = (r / 8) * n;
            (e.beginPath(), e.moveTo(0, i), e.lineTo(t, i), e.stroke());
          }
          for (let r = 0; r < 800; r++)
            ((e.fillStyle = `rgba(${M() < 0.5 ? `150,155,160` : `255,255,255`},${M() * 0.08})`),
              e.fillRect(M() * t, M() * n, 2 + M() * 8, 2 + M() * 8));
        }),
      ),
      t = {
        white: O(new s({ color: 15527922, roughness: 0.5, metalness: 0.1 })),
        dish: O(new s({ map: e, roughness: 0.38, metalness: 0.25, side: 2 })),
        back: O(
          new s({ color: 10199980, roughness: 0.6, metalness: 0.5, side: 2 }),
        ),
        tyre: O(new s({ color: 1776412, roughness: 0.95 })),
      },
      n = (e, t, n, r) => e.translate(t, n, r),
      r = (e, t, r, i = 0, o = 0, s = 0) => n(new a(e, t, r), i, o, s),
      i = (e, t, r, i = 0, a = 0, o = 0, s = 24) =>
        n(new k(e, t, r, s), i, a, o),
      c = (e, t, n) => {
        let r = new l(...e),
          i = new l(...t),
          a = r.distanceTo(i),
          o = new k(n, n, a, 6);
        return (
          o.translate(0, a / 2, 0),
          o.applyQuaternion(
            new E().setFromUnitVectors(
              new l(0, 1, 0),
              i.clone().sub(r).normalize(),
            ),
          ),
          o.translate(...e)
        );
      },
      u = (e) => {
        let t = O(se(e.map((e) => (e.index ? e.toNonIndexed() : e))));
        return (e.forEach((e) => e.dispose()), t);
      },
      { azY: d, elY: f, F: p, R: h, v0: g } = ue,
      _ = O(i(1.45, 1.775, d, 0, d / 2, 0, 28)),
      y = u([
        i(1.85, 1.85, 0.25, 0, 0.42, 0, 28),
        i(1.6, 1.6, 0.3, 0, d - 0.1, 0, 28),
      ]),
      b = u([
        r(6, 1, 2.2, 0, 0.55, 0),
        r(0.8, f - d, 1.4, -2.55, (f - d) / 2 + 0.5, 0),
        r(0.8, f - d, 1.4, 2.55, (f - d) / 2 + 0.5, 0),
      ]),
      S = u([
        r(6.4, 0.08, 2.6, 0, 1.1, 0),
        n(new k(0.7, 0.7, 0.5, 16).rotateZ(Math.PI / 2), -2.85, f - d, 0),
        n(new k(0.7, 0.7, 0.5, 16).rotateZ(Math.PI / 2), 2.85, f - d, 0),
      ]),
      C = [];
    for (let e = 0; e <= 16; e++) {
      let t = (h * e) / 16;
      C.push(new v(Math.max(t, 0.01), g + (t * t) / (4 * p)));
    }
    let w = O(new m(C, 64)),
      T = [];
    for (let e = 0; e <= 10; e++) {
      let t = (h * 0.98 * e) / 10;
      T.push(
        new v(
          Math.max(t, 0.01),
          g - 0.3 + (t * t) / (4 * p) - 0.55 * (1 - e / 10),
        ),
      );
    }
    let ee = O(new m(T, 24)),
      te = g + (h * h) / (4 * p),
      ne = g + p,
      re = u([
        r(3, 3.2, 3, 0, -0.75, 0),
        i(0.5, 0.5, 0.35, 0, ne + 0.05, 0, 20),
        n(new o(h, 0.08, 6, 64).rotateX(Math.PI / 2), 0, te, 0),
      ]),
      ie = [
        n(new k(0.42, 0.42, 5.3, 16).rotateZ(Math.PI / 2), 0, 0, 0),
        i(0.15, 0.3, 0.4, 0, ne - 0.3, 0, 12),
        r(3.06, 0.12, 3.06, 0, -2, 0),
        r(0.06, 1.8, 1, 1.53, -1, 0.6),
      ];
    for (let e of [0.785, 2.356, 3.927, 5.498]) {
      let t = h * 0.86;
      ie.push(
        c(
          [Math.cos(e) * t, g + (t * t) / (4 * p), Math.sin(e) * t],
          [Math.cos(e) * 0.3, ne - 0.1, Math.sin(e) * 0.3],
          0.07,
        ),
      );
    }
    let ae = u(ie),
      oe = Ye.antennas.length,
      A = (e, t, n) => {
        let r = new ce(e, t, oe);
        return (
          (r.castShadow = r.receiveShadow = !0),
          (r.name = n),
          (r.frustumCulled = !1),
          I.add(r),
          r
        );
      },
      le = [
        A(_, t.white, `obs-array-pedestals`),
        A(y, R.steel, `obs-array-bearings`),
      ],
      j = [
        A(b, t.white, `obs-array-yokes`),
        A(S, R.steel, `obs-array-yoke-steel`),
      ],
      de = [
        A(re, t.white, `obs-array-cabins`),
        A(ae, R.steel, `obs-array-legs`),
        A(w, t.dish, `obs-array-dishes`),
        A(ee, t.back, `obs-array-backs`),
      ];
    Xe.push({ A: Ye, IB: le, IA: j, IE: de, last: `` });
    let N = Ye.transporter;
    if (N) {
      let e = O(new k(0.78, 0.78, 0.55, 18).rotateX(Math.PI / 2)),
        n = new ce(e, t.tyre, 28),
        r = new x(),
        i = 0;
      for (let e of [-1, 1])
        for (let t = 0; t < 7; t++)
          for (let a of [-1, 1])
            (r.position.set(
              N.x - 8.4 + t * 2.8,
              D.y + 0.78,
              N.z + e * (N.half + a * (N.beam + 0.12)),
            ),
              r.updateMatrix(),
              n.setMatrixAt(i++, r.matrix));
      ((n.castShadow = !0), (n.name = `obs-transporter-tyres`), F.add(n));
      for (let e of [-1, 1]) {
        let t = B(16752672, 0.7, 0.8);
        (t.position.set(N.x + N.len / 2 - 0.4, D.y + 7.15, N.z + e * 2),
          F.add(t));
      }
    }
  }
  let Ze = new j(),
    Q = new j(),
    Qe = new j(),
    $e = new j(),
    et = new j();
  function tt(e) {
    for (let t of Xe) {
      let n = P(D, e),
        r = ye(D).filter((t) => t.dish && e > t.impact),
        i = at ? t.A.antennas.map((t) => at.liftFrame(t, e)) : null,
        a =
          `/` +
          r.map((t) => t.k + `:` + N(D, t.dish, e).toFixed(3)).join(`,`) +
          `/` +
          D.epoch +
          `/` +
          (i
            ? i.map((e) => (e ? (e.gone ? `g` : e.k.toFixed(3)) : ``)).join(``)
            : ``),
        o = n.az.toFixed(4) + `/` + n.el.toFixed(4) + a;
      if (
        ((t.coarse = n.az.toFixed(2) + `/` + n.el.toFixed(2) + a), o !== t.last)
      ) {
        ((t.last = o),
          t.A.antennas.forEach((a, o) => {
            let s = a.fixed ?? n,
              c = a.x,
              l = a.y0,
              u = a.z,
              d = r.find((e) => e.dish === a),
              f = i?.[o];
            if (
              (et.makeTranslation(a.x, a.y0, a.z),
              f &&
                (f.gone
                  ? ((l = -1e4), et.makeTranslation(a.x, -1e4, a.z))
                  : ((s = { az: f.az, el: f.el }),
                    et
                      .makeTranslation(f.x, f.y0, f.z)
                      .multiply($e.makeRotationFromQuaternion(f.q)))),
              d)
            ) {
              let t = N(D, a, e),
                n = P(D, d.impact),
                r = d.fall,
                i = Math.atan2(Math.sin(r.az - n.az), Math.cos(r.az - n.az));
              ((s = { az: n.az + i * t, el: n.el + (r.el - n.el) * t }),
                (c = a.x + (r.x - a.x) * t),
                (l = a.y0 + (r.y0 - a.y0) * t),
                (u = a.z + (r.z - a.z) * t));
            }
            (f && !f.gone
              ? Q.copy(et)
                  .multiply(Ze.makeTranslation(0, ue.azY, 0))
                  .multiply($e.makeRotationY(s.az))
              : Q.makeTranslation(c, l + ue.azY, u).multiply(
                  $e.makeRotationY(s.az),
                ),
              Qe.copy(Q)
                .multiply(Ze.makeTranslation(0, ue.elY - ue.azY, 0))
                .multiply($e.makeRotationX(Math.PI / 2 - s.el)));
            for (let e of t.IB) e.setMatrixAt(o, et);
            for (let e of t.IA) e.setMatrixAt(o, Q);
            for (let e of t.IE) e.setMatrixAt(o, Qe);
          }));
        for (let e of [...t.IB, ...t.IA, ...t.IE])
          e.instanceMatrix.needsUpdate = !0;
      }
    }
  }
  if (!A) {
    let e = [
        [5200, -7800, 3600, 1700],
        [2400, -6900, 2500, 1050],
        [-6400, -5200, 4200, 1350],
        [8800, 1800, 4600, 1300],
      ],
      n = [];
    for (let [t, r, i, a] of e) {
      let e = new d(i, a, 72, 10, !0),
        o = e.attributes.position,
        s = [];
      for (let e = 0; e < o.count; e++) {
        let t = Math.atan2(o.getZ(e), o.getX(e)),
          n = o.getY(e) / a + 0.5,
          r = 1 + 0.05 * Math.sin(t * 7) + 0.03 * Math.sin(t * 19);
        (o.setX(e, o.getX(e) * r), o.setZ(e, o.getZ(e) * r));
        let i = +(n > 0.72 + 0.06 * Math.sin(t * 9)),
          c = [0.62, 0.5, 0.47],
          l = [0.95, 0.86, 0.86];
        s.push(...c.map((e, t) => e + (l[t] - e) * i));
      }
      (e.setAttribute(`color`, new w(s, 3)),
        e.translate(t, a / 2 - 260, r),
        n.push(e));
    }
    let r = new t(
      O(se(n.map((e) => e.toNonIndexed()))),
      O(new y({ vertexColors: !0, fog: !1 })),
    );
    (n.forEach((e) => e.dispose()),
      (r.renderOrder = -7),
      (r.frustumCulled = !1),
      (r.name = `obs-volcanoes`),
      F.add(r));
  }
  if (D.fences?.length) {
    let e = O(
        q(128, 128, (e, t, n) => {
          (e.clearRect(0, 0, t, n),
            (e.strokeStyle = `rgba(150,156,162,.95)`),
            (e.lineWidth = 3));
          for (let r = -t; r <= t * 2; r += 32)
            (e.beginPath(),
              e.moveTo(r, 0),
              e.lineTo(r + n, n),
              e.stroke(),
              e.beginPath(),
              e.moveTo(r, n),
              e.lineTo(r + n, 0),
              e.stroke());
        }),
      ),
      n = [];
    for (let e of D.fences) {
      let t = e.box,
        r = t[3] - t[0] > t[5] - t[2],
        i = r ? t[3] - t[0] : t[5] - t[2],
        a = t[4] - t[1] - 0.05,
        o = new oe(i, a),
        s = o.attributes.uv;
      for (let e = 0; e < s.count; e++)
        s.setXY(e, (s.getX(e) * i) / 0.9, (s.getY(e) * a) / 0.9);
      (r || o.rotateY(Math.PI / 2),
        o.translate((t[0] + t[3]) / 2, t[1] + a / 2, (t[2] + t[5]) / 2),
        n.push(o));
    }
    let r = new t(
      O(se(n)),
      O(
        new s({
          map: e,
          transparent: !0,
          alphaTest: 0.3,
          side: 2,
          roughness: 0.6,
          metalness: 0.5,
        }),
      ),
    );
    (n.forEach((e) => e.dispose()), (r.name = `obs-chainlink`), F.add(r));
  }
  let nt = 0,
    rt = new l(),
    it = null;
  try {
    it = De(p, g, D, ne);
  } catch (e) {
    p.warn?.(`meteor view failed: ` + e.message);
  }
  let at = null;
  if (be.ENABLED)
    try {
      at = Pe(p, g, D, ne);
    } catch (e) {
      p.warn?.(`ufo view failed: ` + e.message);
    }
  let ot = A ? null : K(g, D.y),
    st = p.modules.get(`environment`),
    ct = null,
    lt = 9;
  function ut(e, t) {
    let n = ct !== null && t !== ct,
      r = lt;
    if (((ct = t), (lt = n ? 0 : lt + e), I.userData.dynamicShadow)) {
      lt > 1.5 &&
        ((I.userData.dynamicShadow = !1), st?.invalidateStaticShadows?.(!0));
      return;
    }
    n &&
      (r < 1.5 && (I.userData.dynamicShadow = !0),
      st?.invalidateStaticShadows?.(!0));
  }
  return {
    update(e) {
      nt += Math.min(e || 0, 0.1);
      let t = ne(),
        n = p.camera;
      for (let e of Te)
        e.g.rotation.y = e.base + Math.sin((t / 60) * e.rate) * 1.1;
      ((Je.rotation.y = nt * 4.5), tt(t), it?.update(e), at?.update(e));
      let r = ``;
      for (let e of Xe) r += e.coarse;
      for (let e of we) {
        let n = pe(D, e.D, t);
        if (
          ((e.rot.rotation.y = n.az),
          (e.fork.rotation.y = n.az),
          (e.shutter.rotation.x = -1.9 * n.open),
          (e.tube.rotation.x = Math.PI / 2 - n.alt),
          (r +=
            `|` +
            n.az.toFixed(2) +
            `,` +
            n.open.toFixed(2) +
            `,` +
            n.alt.toFixed(2)),
          e.laser)
        ) {
          let n = ge(D, t);
          ((e.laser.visible = e.star.visible = e.launch.visible = n > 0.01),
            (e.laser.material.uniforms.amp.value = n),
            (e.star.material.opacity = n),
            (e.launch.material.opacity = n * (0.8 + 0.2 * Math.sin(nt * 9))));
        }
      }
      if ((ut(Math.min(e || 0, 0.1), r), Le(), n)) {
        (Re.position.copy(n.position),
          ze.position.copy(n.position),
          He.position.copy(n.position).addScaledVector(Ve, 3e3));
        {
          let e = Math.floor(nt / 23),
            t = nt - e * 23;
          if (e !== Ue && t < 0.8) {
            Ue = e;
            let t = (e * 2.399) % 6.283;
            (We.set(
              Math.cos(t) * 2600,
              1500 + ((e * 37) % 9) * 90,
              Math.sin(t) * 2600,
            ),
              X.set(-Math.sin(t) * 0.8, -0.6, Math.cos(t) * 0.8).normalize());
          }
          t < 0.8 && e === Ue
            ? (Y.position
                .copy(n.position)
                .add(We)
                .addScaledVector(X, t * 900),
              Y.lookAt(n.position),
              (Y.rotation.z = Math.atan2(X.y, Math.hypot(X.x, X.z)) + 0.3),
              (Y.material.opacity = Math.sin((t / 0.8) * Math.PI) * 0.8))
            : (Y.material.opacity = 0);
        }
        for (let e of Ge) {
          let t = e.a + nt * e.v;
          e.s.position.set(
            n.position.x + Math.cos(t) * 3e3,
            n.position.y + Math.abs(Math.sin(t)) * 1800 * e.k + 300,
            n.position.z + Math.sin(t + e.b) * 2400,
          );
        }
      }
      let i = ((t / 60) % 240) / 240;
      (Ke.getPointAt(i, qe.position),
        Ke.getTangentAt(i, rt),
        (qe.rotation.y = Math.atan2(-rt.z, rt.x)));
    },
    stats() {
      let e = ne();
      return {
        domes: D.domes.map((t) => {
          let n = pe(D, t, e);
          return {
            name: t.name,
            az: +n.az.toFixed(2),
            open: +n.open.toFixed(2),
            slewing: n.slewing,
          };
        }),
        laser: +ge(D, e).toFixed(2),
        array: (() => {
          let t = P(D, e);
          return {
            source: t.source,
            az: +t.az.toFixed(2),
            el: +t.el.toFixed(2),
            slewing: t.slewing,
          };
        })(),
        broken: D.broken?.size ?? 0,
        meteor: it?.stats() ?? null,
        ufo: at?.stats() ?? null,
      };
    },
    dispose() {
      (it?.dispose(),
        at?.dispose(),
        ot?.dispose(),
        g.remove(F),
        g.remove(I),
        g.remove(W),
        g.remove(Re),
        g.remove(Y),
        g.remove(ze),
        g.remove(He));
      for (let e of Ge) g.remove(e.s);
      W.dispose();
      for (let e of ae) e.dispose?.();
      F.traverse((e) => {
        e.isMesh && !ae.includes(e.geometry) && e.geometry?.dispose?.();
      });
    },
  };
}
