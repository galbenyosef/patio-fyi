// assets__weapons-D4QomYwC 06 — weapon
// Lines 1379-1602 of readable/assets__weapons-D4QomYwC.pretty.js (statement-aligned).
function Et(e, { bodies: t, catalog: n, inventory: r }) {
  let i = new Map(),
    a = new Map(),
    o = new Set(),
    s = be(),
    u = !1,
    d = (e) => {
      (e.model.dispose(),
        e.gun.traverse((e) => e.geometry?.dispose()),
        e.bake?.dispose());
    },
    p = (t) => {
      if (!n || n.has(t) || o.has(t) || u || !s.allows(t)) return;
      o.add(t);
      let r;
      try {
        r = n.ensure(t, { priority: `remote` });
      } catch (e) {
        r = Promise.reject(e);
      }
      Promise.resolve(r)
        .then(
          () => {
            if ((s.success(t), u)) return;
            let n = a.get(t);
            if (n) {
              for (let [n, r] of i)
                r.userData.weapon === t && (e.scene.remove(r), i.delete(n));
              (a.delete(t), d(n));
            }
          },
          () => {
            u || s.fail(t);
          },
        )
        .finally(() => o.delete(t));
    },
    m = (e) => {
      let n = a.get(e);
      if (n) return n;
      p(e);
      let r = We(j[e], t),
        i = r.group;
      ((i.rotation.z = Math.PI / 2), i.updateMatrixWorld(!0));
      let o = new l().setFromObject(i),
        s = o.getCenter(new T());
      (i.position.set(-s.x, 0.012 - o.min.y, -s.z), i.updateMatrixWorld(!0));
      let u = new Map();
      i.traverse((e) => {
        if (!e.isMesh || Array.isArray(e.material)) return;
        let t = e.geometry.index
          ? e.geometry.toNonIndexed()
          : e.geometry.clone();
        for (let e of Object.keys(t.attributes))
          [`position`, `normal`, `uv`].includes(e) || t.deleteAttribute(e);
        (t.attributes.uv ||
          t.setAttribute(
            `uv`,
            new S(new Float32Array(t.attributes.position.count * 2), 2),
          ),
          (t.morphAttributes = {}),
          t.applyMatrix4(e.matrixWorld),
          u.has(e.material) || u.set(e.material, []),
          u.get(e.material).push(t));
      });
      let d = new b();
      for (let [e, t] of u) {
        let n = ee(t, !1);
        if ((t.forEach((e) => e.dispose()), !n)) continue;
        let r = new f(n, e);
        ((r.castShadow = r.receiveShadow = !0), d.add(r));
      }
      let m = d.children.map((e) => ({
          geometry: e.geometry,
          material: e.material,
          matrix: new c(),
          cast: !0,
          mesh: e,
        })),
        h = Pe(m, { cell: 0, name: `drop-baked` });
      if (h.meshes.length) {
        let e = new Set(h.rest.map((e) => e.mesh));
        for (let t of m)
          e.has(t.mesh) ||
            (t.mesh.removeFromParent(), t.mesh.geometry.dispose());
        for (let e of h.meshes) d.add(e);
      }
      return ((n = { model: r, gun: d, bake: h }), a.set(e, n), n);
    },
    h = e.ui?.querySelector?.(`.sl`) ?? e.ui ?? document.body,
    _ = document.createElement(`style`);
  ((_.textContent = Tt), h.appendChild(_));
  let v = document.createElement(`div`);
  ((v.className = `sl-drop`),
    (v.innerHTML = `<canvas></canvas><div class="tx"><b></b><span class="k"></span><span class="r"></span></div>`),
    h.appendChild(v));
  let y = v.querySelector(`canvas`),
    x = v.querySelector(`b`),
    C = v.querySelector(`.k`),
    w = v.querySelector(`.r`),
    E = () => (g() ? `USE` : He(`use`, `F`)),
    te = null,
    D = null,
    ne = ``,
    O = new Map();
  function k(t) {
    let n = O.get(t),
      r = y.getContext(`2d`);
    if (n) {
      ((y.width = n.width),
        (y.height = n.height),
        r.clearRect(0, 0, y.width, y.height),
        r.drawImage(n, 0, 0));
      return;
    }
    (r.clearRect(0, 0, y.width, y.height),
      (te ??= Ue(e)),
      te
        .thumb(y, j[t])
        .then(() => {
          if (u || !y.width) return;
          let e = document.createElement(`canvas`);
          ((e.width = y.width),
            (e.height = y.height),
            e.getContext(`2d`).drawImage(y, 0, 0),
            O.set(t, e),
            D != null && D !== t && k(D));
        })
        .catch(() => {}));
  }
  let A = [
    e.events.on(`weapon:pickup`, (t) => {
      let n = j[t?.weapon]?.name;
      n &&
        e.events.emit(`ui:message`, {
          kind: `info`,
          text:
            t.kind === `swap`
              ? `Picked up ${n}`
              : t.kind === `ammo`
                ? `+${t.amount} ${n} rounds`
                : `${n} ammo full`,
          ttl: 2.5,
        });
    }),
  ];
  function re() {
    let t = e.modules.get(`player`)?.getLocalEntity?.(),
      n = r(),
      i = t && n && Qe(e.world, t) ? Je(e.world, t) : null;
    if (!i) {
      D != null && (v.classList.remove(`on`), (D = null));
      return;
    }
    let a = j[i.weapon],
      o = (n.loadout ?? []).includes(i.weapon),
      s = o ? null : j[n.loadout?.[Ke(n, i.weapon)]],
      c = E(),
      l = `${i.weapon}|${o}|${s?.id}|${c}`;
    (l !== ne &&
      ((ne = l),
      (x.textContent = a.name),
      (C.innerHTML = `<i>${c}</i>Hold · ${o ? `Take ammo` : `Pick up`}`),
      (w.textContent = s ? `Replaces ${s.name}` : ``)),
      D !== i.weapon && ((D = i.weapon), v.classList.add(`on`), k(i.weapon)));
  }
  return {
    update() {
      let t = new Set();
      for (let n of e.world.byType(`pickup`)) {
        if (!Xe(j[n.weapon])) continue;
        t.add(n.id);
        let r = i.get(n.id);
        if (
          (r &&
            r.userData.weapon !== n.weapon &&
            (e.scene.remove(r), (r = null)),
          !r)
        ) {
          try {
            ((r = new b()), r.add(m(n.weapon).gun.clone()));
          } catch {
            continue;
          }
          ((r.userData.weapon = n.weapon), e.scene.add(r), i.set(n.id, r));
        }
        (r.position.fromArray(n.pos), r.rotation.set(0, n.yaw, 0));
        let a = e.camera.position.distanceToSquared(r.position);
        r.visible = a < 3600;
        let o = a < 625;
        r.userData.cast !== o &&
          ((r.userData.cast = o),
          r.traverse((e) => {
            e.isMesh && (e.castShadow = o);
          }));
      }
      for (let [n, r] of i) t.has(n) || (e.scene.remove(r), i.delete(n));
      re();
    },
    dispose() {
      ((u = !0), A.forEach((e) => e()));
      for (let t of i.values()) e.scene.remove(t);
      i.clear();
      for (let e of a.values()) d(e);
      (a.clear(), o.clear(), s.clear(), te?.dispose(), v.remove(), _.remove());
    },
  };
}
var U = Object.freeze({
    chargeCam: 1.5,
    flash: 0.55,
    clear: 1.5,
    ringDelay: 0.02,
    gaspDelay: 0.12,
    lineDelay: 0.55,
  }),
  Dt = [
    `You're good, get up!`,
    `Up you get, soldier!`,
    `Clear! You're back!`,
    `On your feet!`,
    `Breathe! You're okay!`,
  ],
  Ot = (e) => e[Math.floor(Math.random() * e.length)];
