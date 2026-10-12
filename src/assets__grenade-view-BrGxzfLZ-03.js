// assets__grenade-view-BrGxzfLZ 03 — math
// Lines 442-790 of readable/assets__grenade-view-BrGxzfLZ.pretty.js (statement-aligned).
var q = (e) =>
  e.id + JSON.stringify(e.attachments) + (e.camo ?? ``) + JSON.stringify(R());
function J(e, t, { reticle: n = !1 } = {}) {
  let r = new T(),
    i = (e) => new v({ color: e, roughness: 0.55, metalness: 0.35 }),
    a = {
      dark: i(3160384),
      steel: i(7832972),
      glass: new A({ color: 10079470, transparent: !0, opacity: 0.25 }),
      red: new A({ color: 16737616 }),
      amber: i(16759654),
      reticleEdge: i(1382685),
      disposables: [],
    };
  n && (a.reticle = se({ depthTest: !0 }));
  let o = () => {
    r.removeFromParent();
    let e = new Set();
    (r.traverse((t) => {
      t.geometry && e.add(t.geometry);
    }),
      e.forEach((e) => e.dispose()),
      new Set([
        ...Object.values(a).filter((e) => e?.isMaterial),
        ...a.disposables,
      ]).forEach((e) => e.dispose()),
      a.reticle?.dispose());
  };
  try {
    let n = t?.[e.id] ? ae(r, e, a, t) : fe(r, e, a),
      i = me(r, de(e).optic, n, a),
      s = le(r, e, n, a);
    return (
      V(r, e, n, a),
      { group: r, body: n, muzzle: s, sight: i, dispose: o }
    );
  } catch (e) {
    throw (o(), e);
  }
}
function Y(t) {
  let n = B(t.assets),
    i = n.scenes,
    a,
    s,
    c = !1,
    l = null,
    d = ``,
    f = new WeakMap(),
    h = new w();
  h.add(new S(14478591, 6445896, 3));
  for (let [e, t, n] of [
    [16777215, 4, [2, 4, 3]],
    [11390975, 3, [-3, 2, -2]],
  ]) {
    let r = new y(e, t);
    (r.position.fromArray(n), h.add(r));
  }
  let _ = new e(32, 1, 0.01, 100),
    v = () =>
      !c &&
      (a ||
        ((a = new r({ alpha: !0, antialias: !0 })),
        a.setPixelRatio(1),
        (a.toneMapping = 4),
        (a.toneMappingExposure = 1.15)),
      !0),
    b = async (e) => (await n.ensure(e.id, { priority: `visible` }), v()),
    x = async (e, t) => {
      let n = (f.get(e) ?? 0) + 1;
      return (f.set(e, n), (await b(t)) && !c && f.get(e) === n);
    };
  function C(e, t, n, r = !1, i = null, o = {}) {
    let s = Math.min(devicePixelRatio, 1.5),
      c = Math.max(1, Math.round(e.clientWidth * s)),
      l = Math.max(1, Math.round(e.clientHeight * s));
    (a.setSize(c, l, !1), (_.aspect = c / l), h.updateMatrixWorld(!0));
    let u =
        i ??
        (r
          ? new p(new k(-0.5, 0, -0.35), new k(0.5, 1.9, 0.35))
          : new p().setFromObject(t)),
      d = u.getCenter(new k()),
      f = u.getSize(new k());
    o.center && d.copy(o.center);
    let m = Math.max(1, Math.min(8, o.zoom ?? 1));
    ((d.x += ((o.panX ?? 0) * f.x) / m), (d.y += ((o.panY ?? 0) * f.x) / m));
    let g =
      (Math.max(f.y, f.x / _.aspect, f.z / _.aspect) *
        (o.frame ?? (r ? 0.65 : 0.75))) /
      Math.tan((_.fov * Math.PI) / 360) /
      m;
    (_.position.copy(d).addScaledVector(new k(...n).normalize(), g),
      _.lookAt(d),
      _.updateProjectionMatrix(),
      a.render(h, _),
      (e.width = c),
      (e.height = l),
      e.getContext(`2d`).drawImage(a.domElement, 0, 0),
      (e.dataset.ready = `true`));
  }
  let E = (e) => J(e, i),
    O = null,
    A = ``;
  function R() {
    let e = Oe(),
      { camera: t } = e,
      n = H(t, { bodies: i, renderer: a }),
      r = new P(a, new o(1, 1, { type: D, samples: 4 }));
    r.addPass(new j(e.world, t));
    let s = new M();
    return (
      (s.needsSwap = !1),
      (s.render = (e, n, r) => {
        let i = t.userData.viewmodelStage;
        if (!i) return;
        (i.sync(), e.setRenderTarget(r));
        let a = e.autoClear;
        e.autoClear = !1;
        try {
          (e.clearDepth(), e.render(i.scene, t));
        } finally {
          e.autoClear = a;
        }
      }),
      r.addPass(s),
      r.addPass(
        new F({
          uniforms: { tDiffuse: { value: null } },
          vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
          fragmentShader: `uniform sampler2D tDiffuse; varying vec2 vUv; void main() { vec4 c = texture2D(tDiffuse, vUv); if (any(isnan(c)) || any(isinf(c))) c = vec4(0.0, 0.0, 0.0, 1.0); gl_FragColor = vec4(min(c.rgb, vec3(256.0)), c.a); }`,
        }),
      ),
      r.addPass(new ee(new m(256, 256), 0.42, 0.3, 1.05)),
      r.addPass(new N()),
      {
        camera: t,
        vm: n,
        composer: r,
        dispose() {
          n.dispose?.();
          for (let e of r.passes) e.dispose?.();
          (r.dispose(), e.dispose());
        },
      }
    );
  }
  return {
    async weapon(
      e,
      t,
      {
        yaw: n = 0,
        pitch: r = 0,
        zoom: a = 1,
        focus: o = null,
        panX: c = 0,
        panY: u = 0,
        sightView: f = !1,
        frame: m,
      } = {},
    ) {
      if (!(await x(e, t))) return;
      let g = q(t);
      if (g !== d) {
        (l?.dispose(), (l = J(t, i, { reticle: !0 })), (d = g));
        let e = l.group,
          n = new T(),
          r = new p().setFromObject(e).getCenter(new k());
        (e.position.sub(r),
          n.add(e),
          (n.rotation.y = -Math.PI / 2),
          (l.pivot = n),
          (l.bounds = new p().setFromObject(n)));
      }
      let { pivot: v, group: y, body: b, muzzle: S, bounds: w, sight: E } = l;
      (v.rotation.set(r, -Math.PI / 2 + n, 0),
        h.add(v),
        s && (s.group.visible = !1));
      let D = {
        optic: E.aim.toArray(),
        muzzle: [0, 0.012, S],
        grip: [
          0,
          b.mounts?.under?.y ?? b.gripY ?? -0.08,
          b.mounts?.under?.z ?? b.gripZ ?? b.sightZ,
        ],
      };
      h.updateMatrixWorld(!0);
      let O = o && D[o] ? y.localToWorld(new k(...D[o])) : null;
      C(e, v, f ? [0, 0, 1] : [0.08, 0.24, 1], !1, w, {
        center: O,
        zoom: a,
        panX: c,
        panY: u,
        frame: m,
      });
      for (let e of Object.keys(D)) {
        let t = y.localToWorld(new k(...D[e])).project(_);
        D[e] = [(t.x + 1) / 2, (1 - t.y) / 2];
      }
      return (h.remove(v), D);
    },
    async aim(e, t) {
      if (!(await x(e, t))) return;
      O ??= R();
      let { camera: n, vm: r, composer: i } = O,
        o = q(t),
        s = { buttons: 2 };
      o !== A && (r.setWeapon(t), r.setLoaded(!0), r.setVisible(!0), (A = o));
      let c = Math.min(devicePixelRatio, 1.5),
        l = Math.max(1, Math.round(e.clientWidth * c)),
        u = Math.max(1, Math.round(e.clientHeight * c));
      (a.setSize(l, u, !1),
        i.setPixelRatio(1),
        i.setSize(l, u),
        (n.aspect = l / u),
        n.position.set(0, we, 0),
        n.lookAt(Te));
      let d = r.optic?.type,
        f = d === `scope` ? 1 : d === `prism` ? 1.4 : 2.4,
        p = Math.round(u * f),
        m = Math.round(l * f);
      n.setViewOffset(m, p, (m - l) / 2, (p - u) / 2, l, u);
      for (let e = 0; e < 90; e++)
        (r.tickAim(1 / 60, s),
          r.update(1 / 60, s, 0),
          (n.fov = r.optic ? 55 + (r.opticFov - 55) * r.ads : 55),
          n.updateProjectionMatrix(),
          r.setCameraFov(n.fov, p),
          r.setVisible(!0));
      n.updateMatrixWorld(!0);
      let h = a.toneMappingExposure,
        g = a.shadowMap.enabled;
      ((a.toneMappingExposure = 1),
        (a.shadowMap.enabled = !0),
        (a.shadowMap.type = 2),
        (a.shadowMap.needsUpdate = !0));
      try {
        i.render();
      } finally {
        ((a.toneMappingExposure = h), (a.shadowMap.enabled = g));
      }
      ((e.width = l),
        (e.height = u),
        e.getContext(`2d`).drawImage(a.domElement, 0, 0),
        (e.dataset.ready = `true`));
    },
    async railSpan(e) {
      if (!(await b(e))) return null;
      let t = de(e).optic,
        n = null;
      if (
        (i?.[e.id]?.traverse((e) => {
          e.userData.metrics && (n = JSON.parse(e.userData.metrics));
        }),
        !t?.kit || !n)
      )
        return null;
      let r = ce(n, t.kit);
      return [r.lo - r.home, r.hi - r.home];
    },
    async thumb(e, t, { exact: n = !1 } = {}) {
      if (n ? !(await x(e, t)) : !v()) return;
      let r = E(t),
        i = new T(),
        a = new p().setFromObject(r.group).getCenter(new k());
      (r.group.position.sub(a),
        i.add(r.group),
        i.rotation.set(0, -Math.PI / 2, 0),
        h.add(i),
        s && (s.group.visible = !1));
      try {
        C(e, i, [0, 0.06, 1], !1, new p().setFromObject(i), { zoom: 1.3 });
      } finally {
        (h.remove(i), r.dispose());
      }
    },
    async soldier(e, t, n, r) {
      if (!(await x(e, r))) return;
      ((s ||= L(h, 1)),
        (s.group.visible = !0),
        s.setCount(1),
        s.setIdentity(0, 1),
        s.setColor(0, new g(n)));
      let i = new g(n);
      s.setFaction(0, +(i.b > i.r || i.g < i.r * 0.3));
      let a = ne(),
        o = I();
      re(
        {
          h: 1.8,
          lean: 0,
          hspeed: 0,
          moveF: 0,
          moveR: 0,
          phase: 0,
          sprintW: 0,
          aimW: 0,
          pitch: 0,
          grounded: !0,
          swim: !1,
          airT: 0,
          fireT: 99,
          reloadT: 99,
          hitT: 99,
          landT: 99,
          deadT: -1,
          deadDir: 0,
          breathe: 0,
        },
        o,
      );
      let c;
      try {
        r && (c = E(r));
        let n = c?.body,
          i =
            n?.grip && n?.support
              ? {
                  ...n,
                  magazineHome: n.magazine.position.toArray(),
                  magazineRotation: n.magazine.rotation.toArray().slice(0, 3),
                }
              : null;
        (te(a, o, s, 0, `none`, -1, i ? (e) => ue(e, i) : null, t),
          s.flush(),
          c &&
            ((c.group.matrixAutoUpdate = !1),
            c.group.matrix
              .copy(a.weapon.matrixWorld)
              .multiply(new u().makeTranslation(...pe.toArray())),
            h.add(c.group)),
          C(e, s.group, [0.35, 0.04, -1], !0));
      } finally {
        (c?.dispose(), (s.group.visible = !1));
      }
    },
    dispose() {
      ((c = !0),
        l?.dispose(),
        O?.dispose(),
        s?.dispose(),
        a?.dispose(),
        a?.forceContextLoss());
    },
  };
}
var ke = 16;
