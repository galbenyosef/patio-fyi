// assets__vehicles-CqLF20DK 05 — add
// Lines 1285-1606 of readable/assets__vehicles-CqLF20DK.pretty.js (statement-aligned).
function De({ batch: e = !0, bodies: t = null, thermal: n = !1 } = {}) {
  let i = t ? ce(t) : null,
    o = se(),
    c = new Set(),
    l = new r(1, 1, 1),
    u = new s(1, 1, 1, 12),
    d = new O(1, 12, 8),
    f = Object.fromEntries(
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
        new g({
          color: t,
          roughness: e === `glass` ? 0.25 : 0.8,
          metalness: e === `metal` ? 0.55 : 0.12,
          flatShading: !0,
        }),
      ]),
    );
  function m(e, t) {
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
          (i.setAttribute(`thermalHeat`, new a(r, 1)),
            i.setAttribute(
              `thermalStrength`,
              new a(new Float32Array(t.count).fill(1), 1),
            ));
        }
        ((t.userData.thermalEngineOn = !1), r.push(t));
      }
    return r;
  }
  function h(t, r, i, a) {
    let s = Ee.filter((e) => e.type === t)[+(a === `b`)],
      c = s.build({ team: r, armed: i }),
      l = new C(),
      u = c.root,
      { turret: d, elevation: p, rotor: h, tailRotor: g, muzzle: _ } = c;
    (l.add(u), d.parent && l.add(d));
    let v = [u, d, p, h, g, ...(c.tail ? [c.tail] : [])];
    l.updateMatrixWorld(!0);
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
      (v.forEach((e, t) => o.pack(e, `study/${s.key}/${r}/${+!!i}/${t}`)),
      c.releaseSource());
    let y = n ? m(t, [u]) : [],
      b = new Map();
    l.traverse((e) => {
      e.isMesh && b.set(e, e.material);
    });
    let x = !1;
    return {
      root: l,
      rotor: h,
      tailRotor: g,
      tail: c.tail ?? null,
      turret: d,
      elevation: p,
      recoil: null,
      suspension: u,
      muzzle: _,
      tracks: null,
      variant: s.key,
      setEngineHot(e) {
        for (let t of y) t.userData.thermalEngineOn = e;
      },
      dispose() {
        e || c.dispose();
      },
      setDestroyed(e) {
        if (e !== x) {
          x = e;
          for (let [t, n] of b) t.material = e ? f.wreck : n;
        }
      },
    };
  }
  function v(t, r, a = !0, s = null) {
    if (s) return h(t, r, a, s);
    let g = F[t],
      v = new C(),
      y = new C(),
      b = new C(),
      x = new C(),
      S = new C(),
      w = new _(),
      T = new C(),
      E = new C(),
      D = (e, t, n, r = `hull`, i = v) => {
        let a = new p(e, f[r]);
        return (
          a.scale.set(...t),
          a.position.set(...n),
          (a.castShadow = !0),
          (a.receiveShadow = !0),
          i.add(a),
          a
        );
      },
      O = (e, t, n, r) => D(l, e, t, n, r);
    if (i) {
      if (
        (t === 2
          ? (v.add(S), i.attach(S, t), (v.userData.authoredBody = t))
          : i.attach(v, t),
        g.air)
      ) {
        (v.add(T),
          (T.position.y = 2.8),
          O([0.15, 0.8, 0.15], [0, -0.25, 0], `metal`, T));
        for (let e of [0, Math.PI / 2]) {
          let n = O([t === 4 ? 11 : 8, 0.05, 0.22], [0, 0.2, 0], `armor`, T);
          n.rotation.y = e;
        }
        (v.add(E), E.position.set(0.25, 1.8, g.l * 0.86));
        for (let e of [0, Math.PI / 2]) {
          let t = O([0.08, 1.8, 0.12], [0, 0, 0], `metal`, E);
          t.rotation.x = e;
        }
      } else if (t === 0) {
        let e = D(u, [0.19, 0.04, 0.19], [-0.48, 1.38, -0.15], `tire`);
        e.rotation.x = Math.PI * 0.35;
      }
    } else if (g.air) {
      (D(d, [g.w * 0.52, 0.94, g.l * 0.3], [0, 1.3, -0.3]),
        D(d, [g.w * 0.45, 0.75, 1.05], [0, 1.55, -g.l * 0.3], `glass`));
      let e = D(u, [0.22, g.l * 0.75, 0.22], [0, 1.4, g.l * 0.47], `armor`);
      ((e.rotation.x = Math.PI / 2),
        O([0.14, 1.45, 1.2], [0, 1.7, g.l * 0.83], `armor`),
        O([2.1, 0.1, 0.7], [0, 1.5, g.l * 0.73], `armor`));
      for (let e of [-1, 1]) {
        O([0.11, 0.11, g.l * 0.7], [e, 0.15, 0], `metal`);
        for (let t of [-0.8, 0.8]) O([0.08, 0.65, 0.1], [e, 0.48, t], `metal`);
      }
      (v.add(T),
        (T.position.y = 2.8),
        O([0.15, 0.8, 0.15], [0, -0.25, 0], `metal`, T));
      for (let e of [0, Math.PI / 2]) {
        let n = O(
          [g.air && t === 4 ? 11 : 8, 0.05, 0.22],
          [0, 0.2, 0],
          `armor`,
          T,
        );
        n.rotation.y = e;
      }
      (v.add(E), E.position.set(0.25, 1.8, g.l * 0.86));
      for (let e of [0, Math.PI / 2]) {
        let t = O([0.08, 1.8, 0.12], [0, 0, 0], `metal`, E);
        t.rotation.x = e;
      }
      if (t === 4 && a) {
        O([5, 0.15, 1], [0, 1.2, 0.3], `armor`);
        for (let e of [-2, 2]) {
          let t = D(u, [0.32, 1.5, 0.32], [e, 1, 0.3], `armor`);
          t.rotation.x = Math.PI / 2;
        }
      } else
        for (let e of [-1.3, 1.3]) O([0.7, 0.12, 1.8], [e, 0.85, 0.1], `armor`);
    } else {
      if (
        (O([g.w, 0.55, g.l], [0, 0.65, 0], `armor`),
        O(
          [g.w * 0.9, t === 0 ? 0.12 : 0.7, g.l * 0.75],
          [0, t === 0 ? 0.86 : 1.13, 0],
        ),
        t === 0)
      ) {
        (O([1.7, 0.25, 1.25], [0, 1.35, -1.15]),
          O([1.65, 0.1, 1.75], [0, 2.12, 0.35], `armor`),
          O([1.65, 0.65, 0.08], [0, 1.72, -0.5], `glass`));
        for (let e of [-0.83, 0.83])
          for (let t of [-0.5, 1.2])
            O([0.09, 0.85, 0.09], [e, 1.65, t], `metal`);
        O([1.7, 0.65, 0.12], [0, 1.2, 1.65]);
      }
      if (t === 0) {
        for (let e of [-0.48, 0.48])
          for (let t of [0.25, 1])
            (O([0.55, 0.1, 0.5], [e, 0.91, t], `tire`),
              O([0.55, 0.45, 0.1], [e, 1.18, t + 0.25], `tire`));
        let e = D(u, [0.19, 0.04, 0.19], [-0.48, 1.38, -0.15], `tire`);
        e.rotation.x = Math.PI * 0.35;
      } else
        (O([g.w * 0.76, 0.65, g.l * 0.5], [0, 1.65, 0.35]),
          O(
            [t === 2 ? 1.65 : 1.05, 0.6, t === 2 ? 1.8 : 1.05],
            [0, 2.15, 0],
            `armor`,
          ),
          O(
            [t === 2 ? 2 : 1.25, 0.55, t === 2 ? 2.4 : 1.4],
            [0, -0.2, 0],
            `armor`,
            y,
          ),
          O([0.12, 0.4, 0.16], [0.5, 0.25, -0.35], `armor`, y),
          O([0.35, 0.16, 0.55], [0.5, 0.5, -0.35], `glass`, y));
      for (let e of [-g.w * 0.48, g.w * 0.48])
        for (let n of t === 0 ? [-1.2, 1.2] : [-2, -0.7, 0.7, 2]) {
          let t = D(u, [0.48, 0.3, 0.48], [e, 0.5, n], `tire`);
          t.rotation.z = Math.PI / 2;
        }
      if (t === 2)
        for (let e of [-1.5, 1.5]) O([0.65, 0.7, 5.6], [e, 0.42, 0], `tire`);
      for (let e of [-g.w * 0.32, g.w * 0.32])
        O([0.25, 0.2, 0.05], [e, 0.9, -g.l / 2 - 0.02], `light`);
      O([g.w + 0.12, 0.18, 0.3], [0, 0.5, -g.l / 2], `metal`);
    }
    if (g.gun && a) {
      let e = H(t);
      if (
        (v.add(y),
        y.position.fromArray(e.offset ?? [0, e.height, 0]),
        y.add(b),
        (w.name = `vehicle-muzzle`),
        i)
      )
        (i.attach(y, t, `turret`),
          i.attach(b, t, `elevation`),
          i.has(t, `recoil`) && (b.add(x), i.attach(x, t, `recoil`)));
      else {
        (t === 3 &&
          (O([0.25, 0.3, 0.5], [-1.55, 0.9, -0.8], `armor`),
          O([0.35, 0.15, 0.7], [-1.32, 0.85, -0.8], `metal`)),
          t === 4 &&
            (O([0.35, 0.65, 0.45], [0, 0.95, -2.35], `armor`),
            O([0.32, 0.25, 1.25], [0, 0.7, -2.9], `metal`),
            O([0.45, 0.25, 0.5], [0, 0, 0], `armor`, y)));
        let n = g.gun === 2 ? 0.11 : 0.055,
          r = D(u, [n, e.length, n], [0, 0, -e.length / 2], `metal`, b);
        ((r.rotation.x = Math.PI / 2),
          O([0.35, 0.3, 0.55], [0, 0, -0.25], `armor`, b));
      }
      ((w.position.z = -e.length), (i?.has(t, `recoil`) ? x : b).add(w));
    }
    O(
      [0.5, 0.08, 0.45],
      [0, g.air ? 2.28 : 1.54, -0.3],
      r < 0 ? `light` : r ? `cobalt` : `amber`,
    );
    let k = t === 2 ? i?.trackPrototype(t) : null,
      A = k ? de(k) : null;
    (A && (S.add(A.root), c.add(A)),
      e &&
        [v, y, b, T, E, x, S].forEach((e, n) => o.pack(e, `${t}/${r}/${n}`)));
    let j = n ? m(t, [v, S]) : [],
      M = new Map();
    v.traverse((e) => {
      e.isMesh && M.set(e, e.material);
    });
    let N = !1;
    return {
      root: v,
      rotor: T,
      tailRotor: E,
      turret: y,
      elevation: b,
      recoil: i?.has(t, `recoil`) ? x : null,
      suspension: S,
      muzzle: w,
      tracks: A,
      setEngineHot(e) {
        for (let t of j) t.userData.thermalEngineOn = e;
      },
      dispose() {
        A && c.delete(A) && A.dispose();
      },
      setDestroyed(e) {
        if (e !== N) {
          N = e;
          for (let [t, n] of M) t.material = e ? f.wreck : n;
        }
      },
    };
  }
  return {
    make: v,
    dispose() {
      (c.forEach((e) => e.dispose()),
        c.clear(),
        o.dispose(),
        i?.dispose(),
        l.dispose(),
        u.dispose(),
        d.dispose(),
        Object.values(f).forEach((e) => e.dispose()));
    },
  };
}
