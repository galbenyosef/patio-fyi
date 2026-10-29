// assets__gain-pop-BO3NCiqK 04 — math
// Lines 494-868 of readable/assets__gain-pop-BO3NCiqK.pretty.js (statement-aligned).
function Ve(t) {
  let n = ue(t.assets),
    i = n.scenes,
    o,
    c,
    l = !1,
    u = null,
    d = ``,
    f = new WeakMap(),
    p = new F(),
    h = new A(14478591, 6445896, 3),
    g = [];
  p.add(h);
  for (let [t, n, r] of [
    [16777215, 4, [2, 4, 3]],
    [11390975, 3, [-3, 2, -2]],
  ]) {
    let i = new e(t, n);
    (i.position.fromArray(r), p.add(i), g.push(i));
  }
  let v = new N(32, 1, 0.01, 100),
    b = () => {
      for (let e of o.info.programs ?? []) e.pinned ||= (e.usedTimes++, !0);
    },
    S = () =>
      !l &&
      (o ||
        ((o = new r({ alpha: !0, antialias: !0 })),
        o.setPixelRatio(1),
        (o.toneMapping = 4),
        (o.toneMappingExposure = 1.15)),
      !0),
    C = async (e) => (await n.ensure(e.id, { priority: `visible` }), S()),
    w = async (e, t) => {
      let n = (f.get(e) ?? 0) + 1;
      return (f.set(e, n), (await C(t)) && !l && f.get(e) === n);
    };
  function T(e, t, n, r = !1, i = null, a = {}) {
    let c = Math.min(devicePixelRatio, 1.5),
      l = Math.max(1, Math.round(e.clientWidth * c)),
      u = Math.max(1, Math.round(e.clientHeight * c));
    (o.setSize(l, u, !1), (v.aspect = l / u), p.updateMatrixWorld(!0));
    let d =
        i ??
        (r
          ? new m(new s(-0.5, 0, -0.35), new s(0.5, 1.9, 0.35))
          : new m().setFromObject(t)),
      f = d.getCenter(new s()),
      h = d.getSize(new s());
    a.center && f.copy(a.center);
    let g = Math.max(1, Math.min(8, a.zoom ?? 1));
    ((f.x += ((a.panX ?? 0) * h.x) / g), (f.y += ((a.panY ?? 0) * h.x) / g));
    let _ =
      (Math.max(h.y, h.x / v.aspect, h.z / v.aspect) *
        (a.frame ?? (r ? 0.65 : 0.75))) /
      Math.tan((v.fov * Math.PI) / 360) /
      g;
    (v.position.copy(f).addScaledVector(new s(...n).normalize(), _),
      v.lookAt(f),
      v.updateProjectionMatrix(),
      o.render(p, v),
      b(),
      (e.width = l),
      (e.height = u),
      e.getContext(`2d`).drawImage(o.domElement, 0, 0),
      (e.dataset.ready = `true`));
  }
  let O = (e) => Be(e, i),
    k = null;
  function ee() {
    if (k) return k;
    let t = new _(o),
      n = t.fromScene(new H(), 0.04).texture;
    t.dispose();
    let r = new E();
    for (let [t, n] of [
      [3.2, [0.3, 1.6, -3]],
      [1.8, [-0.4, -1.2, -2.5]],
    ]) {
      let i = new e(16777215, t);
      (i.position.fromArray(n), r.add(i));
    }
    return (k = { group: r, env: n });
  }
  let j = [h, ...g];
  function M(e) {
    let t = ee(),
      n = j.map((e) => e.intensity),
      r = j.map((e) => e.color.getHex()),
      i = h.groundColor.getHex(),
      { toneMapping: a, toneMappingExposure: s } = o;
    (p.add(t.group),
      (p.environment = t.env),
      (p.environmentIntensity = Re.env),
      j.forEach((e, t) => {
        ((e.intensity = Re.lights[t]), e.color.setHex(16777215));
      }),
      h.groundColor.setHex(9078144),
      (o.toneMapping = 7),
      (o.toneMappingExposure = Re.exposure));
    try {
      return e();
    } finally {
      (p.remove(t.group),
        (p.environment = null),
        j.forEach((e, t) => {
          ((e.intensity = n[t]), e.color.setHex(r[t]));
        }),
        h.groundColor.setHex(i),
        (o.toneMapping = a),
        (o.toneMappingExposure = s));
    }
  }
  let P = null,
    I = ``;
  function W() {
    let e = Le(),
      { camera: t } = e,
      n = pe(t, { bodies: i, renderer: o }),
      r = new B(o, new a(1, 1, { type: D, samples: 4 }));
    r.addPass(new R(e.world, t));
    let s = new te();
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
        new V({
          uniforms: { tDiffuse: { value: null } },
          vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
          fragmentShader: `uniform sampler2D tDiffuse; varying vec2 vUv; void main() { vec4 c = texture2D(tDiffuse, vUv); if (any(isnan(c)) || any(isinf(c))) c = vec4(0.0, 0.0, 0.0, 1.0); gl_FragColor = vec4(min(c.rgb, vec3(256.0)), c.a); }`,
        }),
      ),
      r.addPass(new z(new y(256, 256), 0.42, 0.3, 1.05)),
      r.addPass(new ne()),
      {
        camera: t,
        vm: n,
        composer: r,
        world: e.world,
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
        panX: l = 0,
        panY: f = 0,
        sightView: h = !1,
        frame: g,
      } = {},
    ) {
      if (!(await w(e, t))) return;
      let _ = ze(t);
      if (_ !== d) {
        (u?.dispose(), (u = Be(t, i, { reticle: !0 })), (d = _));
        let e = u.group,
          n = new E(),
          r = new m().setFromObject(e).getCenter(new s());
        (e.position.sub(r),
          n.add(e),
          (n.rotation.y = -Math.PI / 2),
          (u.pivot = n),
          (u.bounds = new m().setFromObject(n)));
      }
      let { pivot: y, group: b, body: x, muzzle: S, bounds: C, sight: D } = u;
      (y.rotation.set(r, -Math.PI / 2 + n, 0),
        p.add(y),
        c && (c.group.visible = !1));
      let O = {
        optic: D.aim.toArray(),
        muzzle: [0, 0.012, S],
        grip: [
          0,
          x.mounts?.under?.y ?? x.gripY ?? -0.08,
          x.mounts?.under?.z ?? x.gripZ ?? x.sightZ,
        ],
      };
      p.updateMatrixWorld(!0);
      let k = o && O[o] ? b.localToWorld(new s(...O[o])) : null;
      M(() =>
        T(e, y, h ? [0, 0, 1] : [0.08, 0.24, 1], !1, C, {
          center: k,
          zoom: a,
          panX: l,
          panY: f,
          frame: g,
        }),
      );
      for (let e of Object.keys(O)) {
        let t = b.localToWorld(new s(...O[e])).project(v);
        O[e] = [(t.x + 1) / 2, (1 - t.y) / 2];
      }
      return (p.remove(y), O);
    },
    async aim(e, t) {
      if (!(await w(e, t))) return;
      P ??= W();
      let { camera: n, vm: r, composer: i } = P,
        a = ze(t),
        s = { buttons: 2 };
      a !== I && (r.setWeapon(t), r.setLoaded(!0), r.setVisible(!0), (I = a));
      let c = Math.min(devicePixelRatio, 1.5),
        l = Math.max(1, Math.round(e.clientWidth * c)),
        u = Math.max(1, Math.round(e.clientHeight * c));
      (o.setSize(l, u, !1),
        i.setPixelRatio(1),
        i.setSize(l, u),
        (n.aspect = l / u),
        n.position.set(0, Ne, 0),
        n.lookAt(Pe));
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
      let h = o.toneMappingExposure,
        g = o.shadowMap.enabled;
      ((o.toneMappingExposure = 1),
        (o.shadowMap.enabled = !0),
        (o.shadowMap.type = 2),
        (o.shadowMap.needsUpdate = !0));
      try {
        (i.render(), b());
      } finally {
        ((o.toneMappingExposure = h), (o.shadowMap.enabled = g));
      }
      ((e.width = l),
        (e.height = u),
        e.getContext(`2d`).drawImage(o.domElement, 0, 0),
        (e.dataset.ready = `true`));
    },
    async warmAim(e) {
      (await C(e)) &&
        ((P ??= W()),
        await o.compileAsync?.(P.world, P.camera),
        l || (await this.aim(document.createElement(`canvas`), e)),
        (I = ``));
    },
    async railSpan(e) {
      if (!(await C(e))) return null;
      let t = K(e).optic,
        n = null;
      if (
        (i?.[e.id]?.traverse((e) => {
          e.userData.metrics && (n = JSON.parse(e.userData.metrics));
        }),
        !t?.kit || !n)
      )
        return null;
      let r = ye(n, t.kit);
      return [r.lo - r.home, r.hi - r.home];
    },
    load(e) {
      return n.ensure(e.id, { priority: `visible` }).catch(() => null);
    },
    async thumb(e, t) {
      if (!(await w(e, t))) return;
      let n = O(t),
        r = new E(),
        i = new m().setFromObject(n.group).getCenter(new s());
      (n.group.position.sub(i),
        r.add(n.group),
        r.rotation.set(0, -Math.PI / 2, 0),
        p.add(r),
        c && (c.group.visible = !1));
      try {
        M(() =>
          T(e, r, [0, 0.06, 1], !1, new m().setFromObject(r), { zoom: 1.3 }),
        );
      } finally {
        (p.remove(r), n.dispose());
      }
    },
    async soldier(e, t, n, r) {
      if (!(await w(e, r))) return;
      ((c ||= ie(p, 1)),
        (c.group.visible = !0),
        c.setCount(1),
        c.setIdentity(0, 1),
        c.setColor(0, new x(n)));
      let i = new x(n);
      c.setFaction(0, +(i.b > i.r || i.g < i.r * 0.3));
      let a = ae(),
        o = U();
      oe(
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
      let s;
      try {
        r && (s = O(r));
        let n = s?.body,
          i =
            n?.grip && n?.support
              ? {
                  ...n,
                  magazineHome: n.magazine.position.toArray(),
                  magazineRotation: n.magazine.rotation.toArray().slice(0, 3),
                }
              : null;
        (re(a, o, c, 0, `none`, -1, i ? (e) => ge(e, i) : null, t),
          c.flush(),
          s &&
            ((s.group.matrixAutoUpdate = !1),
            s.group.matrix
              .copy(a.weapon.matrixWorld)
              .multiply(new L().makeTranslation(...me.toArray())),
            p.add(s.group)),
          T(e, c.group, [0.35, 0.04, -1], !0));
      } finally {
        (s?.dispose(), (c.group.visible = !1));
      }
    },
    dispose() {
      ((l = !0),
        k?.env.dispose(),
        u?.dispose(),
        P?.dispose(),
        c?.dispose(),
        o?.dispose(),
        o?.forceContextLoss());
    },
  };
}
