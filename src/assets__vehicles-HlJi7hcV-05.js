// assets__vehicles-HlJi7hcV 05 — add
// Lines 1286-1607 of readable/assets__vehicles-HlJi7hcV.pretty.js (statement-aligned).
function ke({ batch: e = !0, bodies: r = null, thermal: o = !1 } = {}) {
  let c = r ? de(r) : null,
    l = ue(),
    u = new Set(),
    d = new i(1, 1, 1),
    f = new C(1, 1, 1, 12),
    p = new n(1, 12, 8),
    m = Object.fromEntries(
      Object.entries({
        hull: 5858642,
        armor: 3687996,
        tire: 2106919,
        glass: 1651774,
        metal: 7963262,
        light: 14733201,
        amber: 13209650,
        cobalt: 11023406,
        wreck: 2632231,
      }).map(([e, t]) => [
        e,
        new a({
          color: t,
          roughness: e === `glass` ? 0.25 : 0.8,
          metalness: e === `metal` ? 0.55 : 0.12,
          flatShading: !0,
        }),
      ]),
    );
  function h(e, t) {
    let n = F[e],
      r = [];
    for (let i of t)
      for (let t of i.children.filter((e) => e.isMesh)) {
        let i = t.geometry;
        if (!i.attributes.thermalHeat) {
          let t = i.attributes.position,
            r = new Float32Array(t.count);
          for (let i = 0; i < t.count; i++) {
            let a = Math.hypot(
              t.getX(i) / 1.1,
              (t.getY(i) - (n.air ? 2 : 1.3)) / 0.85,
              (t.getZ(i) - (n.air ? 0 : e === 0 ? -1.15 : n.l * 0.3)) / 1.25,
            );
            r[i] = 0.95 * Math.max(0, 1 - a * 0.55);
          }
          (i.setAttribute(`thermalHeat`, new s(r, 1)),
            i.setAttribute(
              `thermalStrength`,
              new s(new Float32Array(t.count).fill(1), 1),
            ));
        }
        ((t.userData.thermalEngineOn = !1), r.push(t));
      }
    return r;
  }
  function _(t, n, r, i) {
    let a = Oe.filter((e) => e.type === t)[+(i === `b`)],
      s = a.build({ team: n, armed: r }),
      c = new y(),
      u = s.root,
      { turret: d, elevation: f, rotor: p, tailRotor: g, muzzle: _ } = s;
    (c.add(u), d.parent && c.add(d));
    let v = [u, d, f, p, g, ...(s.tail ? [s.tail] : [])];
    c.updateMatrixWorld(!0);
    for (let e of v) {
      let t = [];
      e.traverse((n) => {
        if (!n.isMesh || n.parent === e) return;
        let r = n.parent;
        for (; r && !v.includes(r);) r = r.parent;
        r === e && t.push(n);
      });
      for (let n of t) e.attach(n);
    }
    e &&
      (v.forEach((e, t) => l.pack(e, `study/${a.key}/${n}/${+!!r}/${t}`)),
      s.releaseSource());
    let b = o ? h(t, [u]) : [],
      x = new Map();
    c.traverse((e) => {
      e.isMesh && x.set(e, e.material);
    });
    let S = !1;
    return {
      root: c,
      rotor: p,
      tailRotor: g,
      tail: s.tail ?? null,
      turret: d,
      elevation: f,
      recoil: null,
      suspension: u,
      muzzle: _,
      tracks: null,
      variant: a.key,
      setEngineHot(e) {
        for (let t of b) t.userData.thermalEngineOn = e;
      },
      dispose() {
        e || s.dispose();
      },
      setDestroyed(e) {
        if (e !== S) {
          S = e;
          for (let [t, n] of x) t.material = e ? m.wreck : n;
        }
      },
    };
  }
  function v(n, r, i = !0, a = null) {
    if (a) return _(n, r, i, a);
    let s = F[n],
      v = new y(),
      b = new y(),
      x = new y(),
      S = new y(),
      C = new y(),
      w = new g(),
      T = new y(),
      E = new y(),
      D = (e, n, r, i = `hull`, a = v) => {
        let o = new t(e, m[i]);
        return (
          o.scale.set(...n),
          o.position.set(...r),
          (o.castShadow = !0),
          (o.receiveShadow = !0),
          a.add(o),
          o
        );
      },
      O = (e, t, n, r) => D(d, e, t, n, r);
    if (c) {
      if (
        (n === 2
          ? (v.add(C), c.attach(C, n), (v.userData.authoredBody = n))
          : c.attach(v, n),
        s.air)
      ) {
        (v.add(T),
          (T.position.y = 2.8),
          O([0.15, 0.8, 0.15], [0, -0.25, 0], `metal`, T));
        for (let e of [0, Math.PI / 2]) {
          let t = O([n === 4 ? 11 : 8, 0.05, 0.22], [0, 0.2, 0], `armor`, T);
          t.rotation.y = e;
        }
        (v.add(E), E.position.set(0.25, 1.8, s.l * 0.86));
        for (let e of [0, Math.PI / 2]) {
          let t = O([0.08, 1.8, 0.12], [0, 0, 0], `metal`, E);
          t.rotation.x = e;
        }
      } else if (n === 0) {
        let e = D(f, [0.19, 0.04, 0.19], [-0.48, 1.38, -0.15], `tire`);
        e.rotation.x = Math.PI * 0.35;
      }
    } else if (s.air) {
      (D(p, [s.w * 0.52, 0.94, s.l * 0.3], [0, 1.3, -0.3]),
        D(p, [s.w * 0.45, 0.75, 1.05], [0, 1.55, -s.l * 0.3], `glass`));
      let e = D(f, [0.22, s.l * 0.75, 0.22], [0, 1.4, s.l * 0.47], `armor`);
      ((e.rotation.x = Math.PI / 2),
        O([0.14, 1.45, 1.2], [0, 1.7, s.l * 0.83], `armor`),
        O([2.1, 0.1, 0.7], [0, 1.5, s.l * 0.73], `armor`));
      for (let e of [-1, 1]) {
        O([0.11, 0.11, s.l * 0.7], [e, 0.15, 0], `metal`);
        for (let t of [-0.8, 0.8]) O([0.08, 0.65, 0.1], [e, 0.48, t], `metal`);
      }
      (v.add(T),
        (T.position.y = 2.8),
        O([0.15, 0.8, 0.15], [0, -0.25, 0], `metal`, T));
      for (let e of [0, Math.PI / 2]) {
        let t = O(
          [s.air && n === 4 ? 11 : 8, 0.05, 0.22],
          [0, 0.2, 0],
          `armor`,
          T,
        );
        t.rotation.y = e;
      }
      (v.add(E), E.position.set(0.25, 1.8, s.l * 0.86));
      for (let e of [0, Math.PI / 2]) {
        let t = O([0.08, 1.8, 0.12], [0, 0, 0], `metal`, E);
        t.rotation.x = e;
      }
      if (n === 4 && i) {
        O([5, 0.15, 1], [0, 1.2, 0.3], `armor`);
        for (let e of [-2, 2]) {
          let t = D(f, [0.32, 1.5, 0.32], [e, 1, 0.3], `armor`);
          t.rotation.x = Math.PI / 2;
        }
      } else
        for (let e of [-1.3, 1.3]) O([0.7, 0.12, 1.8], [e, 0.85, 0.1], `armor`);
    } else {
      if (
        (O([s.w, 0.55, s.l], [0, 0.65, 0], `armor`),
        O(
          [s.w * 0.9, n === 0 ? 0.12 : 0.7, s.l * 0.75],
          [0, n === 0 ? 0.86 : 1.13, 0],
        ),
        n === 0)
      ) {
        (O([1.7, 0.25, 1.25], [0, 1.35, -1.15]),
          O([1.65, 0.1, 1.75], [0, 2.12, 0.35], `armor`),
          O([1.65, 0.65, 0.08], [0, 1.72, -0.5], `glass`));
        for (let e of [-0.83, 0.83])
          for (let t of [-0.5, 1.2])
            O([0.09, 0.85, 0.09], [e, 1.65, t], `metal`);
        O([1.7, 0.65, 0.12], [0, 1.2, 1.65]);
      }
      if (n === 0) {
        for (let e of [-0.48, 0.48])
          for (let t of [0.25, 1])
            (O([0.55, 0.1, 0.5], [e, 0.91, t], `tire`),
              O([0.55, 0.45, 0.1], [e, 1.18, t + 0.25], `tire`));
        let e = D(f, [0.19, 0.04, 0.19], [-0.48, 1.38, -0.15], `tire`);
        e.rotation.x = Math.PI * 0.35;
      } else
        (O([s.w * 0.76, 0.65, s.l * 0.5], [0, 1.65, 0.35]),
          O(
            [n === 2 ? 1.65 : 1.05, 0.6, n === 2 ? 1.8 : 1.05],
            [0, 2.15, 0],
            `armor`,
          ),
          O(
            [n === 2 ? 2 : 1.25, 0.55, n === 2 ? 2.4 : 1.4],
            [0, -0.2, 0],
            `armor`,
            b,
          ),
          O([0.12, 0.4, 0.16], [0.5, 0.25, -0.35], `armor`, b),
          O([0.35, 0.16, 0.55], [0.5, 0.5, -0.35], `glass`, b));
      for (let e of [-s.w * 0.48, s.w * 0.48])
        for (let t of n === 0 ? [-1.2, 1.2] : [-2, -0.7, 0.7, 2]) {
          let n = D(f, [0.48, 0.3, 0.48], [e, 0.5, t], `tire`);
          n.rotation.z = Math.PI / 2;
        }
      if (n === 2)
        for (let e of [-1.5, 1.5]) O([0.65, 0.7, 5.6], [e, 0.42, 0], `tire`);
      for (let e of [-s.w * 0.32, s.w * 0.32])
        O([0.25, 0.2, 0.05], [e, 0.9, -s.l / 2 - 0.02], `light`);
      O([s.w + 0.12, 0.18, 0.3], [0, 0.5, -s.l / 2], `metal`);
    }
    if (s.gun && i) {
      let e = B(n);
      if (
        (v.add(b),
        b.position.fromArray(e.offset ?? [0, e.height, 0]),
        b.add(x),
        (w.name = `vehicle-muzzle`),
        c)
      )
        (c.attach(b, n, `turret`),
          c.attach(x, n, `elevation`),
          c.has(n, `recoil`) && (x.add(S), c.attach(S, n, `recoil`)));
      else {
        (n === 3 &&
          (O([0.25, 0.3, 0.5], [-1.55, 0.9, -0.8], `armor`),
          O([0.35, 0.15, 0.7], [-1.32, 0.85, -0.8], `metal`)),
          n === 4 &&
            (O([0.35, 0.65, 0.45], [0, 0.95, -2.35], `armor`),
            O([0.32, 0.25, 1.25], [0, 0.7, -2.9], `metal`),
            O([0.45, 0.25, 0.5], [0, 0, 0], `armor`, b)));
        let t = s.gun === 2 ? 0.11 : 0.055,
          r = D(f, [t, e.length, t], [0, 0, -e.length / 2], `metal`, x);
        ((r.rotation.x = Math.PI / 2),
          O([0.35, 0.3, 0.55], [0, 0, -0.25], `armor`, x));
      }
      ((w.position.z = -e.length), (c?.has(n, `recoil`) ? S : x).add(w));
    }
    O(
      [0.5, 0.08, 0.45],
      [0, s.air ? 2.28 : 1.54, -0.3],
      r < 0 ? `light` : r ? `cobalt` : `amber`,
    );
    let k = n === 2 ? c?.trackPrototype(n) : null,
      A = k ? me(k) : null;
    (A && (C.add(A.root), u.add(A)),
      e &&
        [v, b, x, T, E, S, C].forEach((e, t) => l.pack(e, `${n}/${r}/${t}`)));
    let j = o ? h(n, [v, C]) : [],
      M = new Map();
    v.traverse((e) => {
      e.isMesh && M.set(e, e.material);
    });
    let N = !1;
    return {
      root: v,
      rotor: T,
      tailRotor: E,
      turret: b,
      elevation: x,
      recoil: c?.has(n, `recoil`) ? S : null,
      suspension: C,
      muzzle: w,
      tracks: A,
      setEngineHot(e) {
        for (let t of j) t.userData.thermalEngineOn = e;
      },
      dispose() {
        A && u.delete(A) && A.dispose();
      },
      setDestroyed(e) {
        if (e !== N) {
          N = e;
          for (let [t, n] of M) t.material = e ? m.wreck : n;
        }
      },
    };
  }
  return {
    make: v,
    dispose() {
      (u.forEach((e) => e.dispose()),
        u.clear(),
        l.dispose(),
        c?.dispose(),
        d.dispose(),
        f.dispose(),
        p.dispose(),
        Object.values(m).forEach((e) => e.dispose()));
    },
  };
}
