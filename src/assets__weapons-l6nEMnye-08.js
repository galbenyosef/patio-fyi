// assets__weapons-l6nEMnye 08 — weapon
// Lines 1484-1711 of readable/assets__weapons-l6nEMnye.pretty.js (statement-aligned).
function Lt(e, { bodies: n, catalog: r, inventory: i }) {
  let o = new Map(),
    s = new Map(),
    c = new Set(),
    u = _e(),
    d = !1,
    p = (e) => {
      (e.model.dispose(),
        e.gun.traverse((e) => e.geometry?.dispose()),
        e.bake?.dispose());
    },
    g = (t) => {
      if (!r || r.has(t) || c.has(t) || d || !u.allows(t)) return;
      c.add(t);
      let n;
      try {
        n = r.ensure(t, { priority: `remote` });
      } catch (e) {
        n = Promise.reject(e);
      }
      Promise.resolve(n)
        .then(
          () => {
            if ((u.success(t), d)) return;
            let n = s.get(t);
            if (n) {
              for (let [n, r] of o)
                r.userData.weapon === t && (e.scene.remove(r), o.delete(n));
              (s.delete(t), p(n));
            }
          },
          () => {
            d || u.fail(t);
          },
        )
        .finally(() => c.delete(t));
    },
    _ = (e) => {
      let r = s.get(e);
      if (r) return r;
      g(e);
      let i = tt(F[e], n),
        o = i.group;
      ((o.rotation.z = Math.PI / 2), o.updateMatrixWorld(!0));
      let c = new l().setFromObject(o),
        u = c.getCenter(new a());
      (o.position.set(-u.x, 0.012 - c.min.y, -u.z), o.updateMatrixWorld(!0));
      let d = new Map();
      o.traverse((e) => {
        if (!e.isMesh || Array.isArray(e.material)) return;
        let t = e.geometry.index
          ? e.geometry.toNonIndexed()
          : e.geometry.clone();
        for (let e of Object.keys(t.attributes))
          [`position`, `normal`, `uv`].includes(e) || t.deleteAttribute(e);
        (t.attributes.uv ||
          t.setAttribute(
            `uv`,
            new m(new Float32Array(t.attributes.position.count * 2), 2),
          ),
          (t.morphAttributes = {}),
          t.applyMatrix4(e.matrixWorld),
          d.has(e.material) || d.set(e.material, []),
          d.get(e.material).push(t));
      });
      let f = new h();
      for (let [e, n] of d) {
        let r = S(n, !1);
        if ((n.forEach((e) => e.dispose()), !r)) continue;
        let i = new t(r, e);
        ((i.castShadow = i.receiveShadow = !0), f.add(i));
      }
      let p = f.children.map((e) => ({
          geometry: e.geometry,
          material: e.material,
          matrix: new T(),
          cast: !0,
          mesh: e,
        })),
        _ = He(p, { cell: 0, name: `drop-baked` });
      if (_.meshes.length) {
        let e = new Set(_.rest.map((e) => e.mesh));
        for (let t of p)
          e.has(t.mesh) ||
            (t.mesh.removeFromParent(), t.mesh.geometry.dispose());
        for (let e of _.meshes) f.add(e);
      }
      return ((r = { model: i, gun: f, bake: _ }), s.set(e, r), r);
    },
    v = e.ui?.querySelector?.(`.sl`) ?? e.ui ?? document.body,
    y = document.createElement(`style`);
  ((y.textContent = It), v.appendChild(y));
  let b = document.createElement(`div`);
  ((b.className = `sl-drop`),
    (b.innerHTML = `<canvas></canvas><div class="tx"><b></b><span class="k"></span><span class="r"></span></div>`),
    v.appendChild(b));
  let x = b.querySelector(`canvas`),
    C = b.querySelector(`b`),
    w = b.querySelector(`.k`),
    E = b.querySelector(`.r`),
    D = () => (f() ? `USE` : $e(`use`, `F`)),
    O = null,
    k = null,
    A = ``,
    j = new Map();
  function M(t) {
    let n = j.get(t),
      r = x.getContext(`2d`);
    if (n) {
      ((x.width = n.width),
        (x.height = n.height),
        r.clearRect(0, 0, x.width, x.height),
        r.drawImage(n, 0, 0));
      return;
    }
    (r.clearRect(0, 0, x.width, x.height),
      (O ??= et(e)),
      O.thumb(x, F[t])
        .then(() => {
          if (d || !x.width) return;
          let e = document.createElement(`canvas`);
          ((e.width = x.width),
            (e.height = x.height),
            e.getContext(`2d`).drawImage(x, 0, 0),
            j.set(t, e),
            k != null && k !== t && M(k));
        })
        .catch(() => {}));
  }
  let N = [
    e.events.on(`weapon:pickup`, (t) => {
      let n = F[t?.weapon]?.name;
      n &&
        e.events.emit(`ui:message`, {
          kind: `info`,
          text:
            t.kind === `swap`
              ? `Picked up ${n}`
              : t.kind === `ammo`
                ? `+${t.amount} ${n} rounds`
                : t.kind === `class`
                  ? `That weapon belongs to another class`
                  : `${n} ammo full`,
          ttl: 2.5,
        });
    }),
  ];
  function ee() {
    let t = e.modules.get(`player`)?.getLocalEntity?.(),
      n = i(),
      r = t && n && lt(e.world, t) ? ot(e.world, t) : null;
    if (!r) {
      k != null && (b.classList.remove(`on`), (k = null));
      return;
    }
    let a = F[r.weapon],
      o = (n.loadout ?? []).includes(r.weapon),
      s = o ? null : F[n.loadout?.[it(n, r.weapon)]],
      c = o || it(n, r.weapon) >= 0,
      l = D(),
      u = `${r.weapon}|${o}|${s?.id}|${l}`;
    (u !== A &&
      ((A = u),
      (C.textContent = a.name),
      (w.innerHTML = c
        ? `<i>${l}</i>Hold · ${o ? `Take ammo` : `Pick up`}`
        : `Different class weapon`),
      (E.textContent = s ? `Replaces ${s.name}` : ``)),
      k !== r.weapon && ((k = r.weapon), b.classList.add(`on`), M(r.weapon)));
  }
  return {
    update() {
      let t = new Set();
      for (let n of e.world.byType(`pickup`)) {
        if (!ct(F[n.weapon])) continue;
        t.add(n.id);
        let r = o.get(n.id);
        if (
          (r &&
            r.userData.weapon !== n.weapon &&
            (e.scene.remove(r), (r = null)),
          !r)
        ) {
          try {
            ((r = new h()), r.add(_(n.weapon).gun.clone()));
          } catch {
            continue;
          }
          ((r.userData.weapon = n.weapon), e.scene.add(r), o.set(n.id, r));
        }
        (r.position.fromArray(n.pos), r.rotation.set(0, n.yaw, 0));
        let i = e.camera.position.distanceToSquared(r.position);
        r.visible = i < 3600;
        let a = i < 625;
        r.userData.cast !== a &&
          ((r.userData.cast = a),
          r.traverse((e) => {
            e.isMesh && (e.castShadow = a);
          }));
      }
      for (let [n, r] of o) t.has(n) || (e.scene.remove(r), o.delete(n));
      ee();
    },
    dispose() {
      ((d = !0), N.forEach((e) => e()));
      for (let t of o.values()) e.scene.remove(t);
      o.clear();
      for (let e of s.values()) p(e);
      (s.clear(), c.clear(), u.clear(), O?.dispose(), b.remove(), y.remove());
    },
  };
}
var U = Object.freeze({
    chargeCam: 3,
    flash: 0.55,
    clear: 1.5,
    ringDelay: 0.02,
    gaspDelay: 0.12,
    lineDelay: 0.55,
  }),
  Rt = [
    `You're good, get up!`,
    `Up you get, soldier!`,
    `Clear! You're back!`,
    `On your feet!`,
    `Breathe! You're okay!`,
  ],
  zt = (e) => e[Math.floor(Math.random() * e.length)];
