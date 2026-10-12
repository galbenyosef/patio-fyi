// assets__yard-dressing-view-Du2F6MWT 62 — math
// Lines 17146-17561 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
async function as(e, t, n) {
  let r = n.yardProps ?? [];
  if (!r.length && !n.streetFurniture?.length && !n.yardLawns?.length)
    return null;
  let i = n.yardSeason ?? `summer`,
    a = new D(),
    o = [],
    s = new Map(),
    c = [],
    l = new Set(n.lindenFences?.panels?.map((e) => e.id) ?? []),
    d = new Map(),
    f = new Map(),
    m = null;
  ((a.name = `yard-dressing`), t.add(a));
  let h = (e, t, n, r, i = !1) => {
      let a = e.material;
      (Qo(a) || i) && (i || es(t, a.color), (a = $o(a)));
      for (let e of Object.keys(t.attributes))
        [`position`, `normal`, `uv`, `color`].includes(e) ||
          t.deleteAttribute(e);
      t.attributes.normal || t.computeVertexNormals();
      let o = t.attributes,
        c =
          Object.keys(o)
            .sort()
            .map((e) => e + o[e].itemSize)
            .join(`,`) + (t.index ? `|i` : `|n`);
      (t.computeBoundingSphere(), t.computeBoundingBox());
      let l = t.boundingSphere.center;
      n && t.boundingBox.max.y - t.boundingBox.min.y < 0.3 && (n = !1);
      let u = t.boundingSphere.radius < Yo,
        d = `${`${Math.floor(l.x / Uo)},${Math.floor(l.z / Uo)}`}|${a.uuid}|${n}|${r}|${c}|${u}`,
        f = s.get(d);
      (f ||
        s.set(
          d,
          (f = { mat: a, cast: n, receive: r, small: u, geos: [], ids: [] }),
        ),
        f.geos.push(t),
        f.ids.push(m));
    },
    g = performance.now();
  for (let t of r) {
    performance.now() - g > 40 && (await ns(), (g = performance.now()));
    let n;
    m = l.has(t.id) ? t.id : null;
    try {
      if (t.car) {
        let e = fe.find((e) => e.key === t.car) ?? fe[0];
        n = de(e, t.color ?? ue[(t.seed ?? 0) % ue.length]);
      } else n = No(t.key, t.seed ?? 1, { season: i, ...(t.opts ?? {}) });
    } catch (n) {
      e.warn?.(`yard item ${t.id} (${t.key ?? t.car}) failed: ${n.message}`);
      continue;
    }
    (n.position.set(t.x, t.y ?? 0, t.z),
      (n.rotation.y = t.rotY ?? 0),
      n.updateMatrixWorld(!0));
    {
      let e = n.userData,
        r = new p().setFromObject(n),
        i = Math.cos(n.rotation.y),
        a = Math.sin(n.rotation.y),
        o = t.x,
        s = t.z,
        l = (e, t) => {
          let n = e - o,
            r = t - s;
          return [n * i - r * a, n * a + r * i];
        };
      e.clear
        ? c.push({
            box: [r.min.x, r.min.z, r.max.x, r.max.z],
            test: (t, n) => e.clear(...l(t, n)),
          })
        : !e.keepGrass && !e.lawn && e.box
          ? c.push({
              box: [r.min.x, r.min.z, r.max.x, r.max.z],
              test: (t, n) => {
                let [r, i] = l(t, n);
                return (
                  r > e.box.min.x &&
                  r < e.box.max.x &&
                  i > e.box.min.z &&
                  i < e.box.max.z
                );
              },
            })
          : t.car && c.push({ box: [r.min.x, r.min.z, r.max.x, r.max.z] });
    }
    let r = new Set(),
      s = [];
    n.traverse((e) => {
      e.userData.tick && (s.push(e.userData.tick), e.traverse((e) => r.add(e)));
    });
    let u = [];
    n.traverse((e) => {
      if (!(
        !e.isMesh ||
        e.isSkinnedMesh ||
        r.has(e) ||
        Array.isArray(e.material) ||
        e.morphTargetInfluences
      )) {
        if (e.isInstancedMesh) {
          if (!e.count) {
            u.push(e);
            return;
          }
          if (
            (is(e),
            e.count * e.geometry.attributes.position.count > 6e4 ||
              !Qo(e.material))
          )
            return;
          let t = ts(e);
          t && (h(e, t, e.castShadow, e.receiveShadow, !0), u.push(e));
          return;
        }
        (h(
          e,
          e.geometry.clone().applyMatrix4(e.matrixWorld),
          e.castShadow,
          e.receiveShadow,
        ),
          u.push(e));
      }
    });
    for (let e of u) e.removeFromParent();
    let d = 0;
    if (
      (n.traverse((e) => {
        e.isMesh && d++;
      }),
      d)
    ) {
      let e = [];
      (n.traverse((t) => {
        t.isMesh && t.castShadow && e.push(t);
      }),
        a.add(n),
        m && f.set(m, n),
        o.push({
          obj: n,
          x: t.x,
          y: t.y ?? 0,
          z: t.z,
          ticks: s,
          casters: e,
          cast: !0,
        }));
    }
  }
  if (((m = null), n.streetFurniture?.length)) {
    let e = Ho({
      add: (e) => {
        (e.updateMatrixWorld(!0),
          e.traverse((e) => {
            e.isMesh &&
              h(e, e.geometry.clone().applyMatrix4(e.matrixWorld), !0, !0);
          }));
      },
      contact() {},
    });
    for (let t of n.streetFurniture)
      t.kind === `stop`
        ? e.stop(t.x, t.z, t.dx, t.dz, t.y)
        : t.kind === `names`
          ? e.names(t.x, t.z, t.a, t.b, t.y)
          : t.kind === `lamp`
            ? e.lamp(t.x, t.z, t.dx, t.dz, t.y)
            : t.kind === `hydrant`
              ? e.hydrant(t.x, t.z, t.dx, t.dz, t.y)
              : t.kind === `mailbox` && e.mailbox(t.x, t.z, t.yaw, t.y);
  }
  let _ = [];
  for (let {
    mat: e,
    cast: t,
    receive: n,
    small: r,
    geos: i,
    ids: o,
  } of s.values()) {
    performance.now() - g > 40 && (await ns(), (g = performance.now()));
    let s = i.length > 1 ? ie(i) : i[0];
    for (let c of s ? [s] : i) {
      let l = new v(c, e);
      ((l.castShadow = t && !r),
        (l.userData.cast = t && !r),
        (l.userData.far = r ? Xo : Wo),
        (l.receiveShadow = n),
        (l.matrixAutoUpdate = !1),
        c.computeBoundingSphere(),
        a.add(l),
        _.push(l));
      let u = 0;
      i.forEach((e, t) => {
        let n = e.attributes.position.count;
        (o[t] &&
          (c === s || c === e) &&
          (d.has(o[t]) || d.set(o[t], []),
          d.get(o[t]).push({ m: l, start: c === s ? u : 0, count: n })),
          (u += n));
      });
    }
    if (s && i.length > 1) for (let e of i) e.dispose();
  }
  let y = null;
  if (n.yardLawns?.length) {
    for (let e of n.scatterExclude ?? []) c.push({ box: e });
    for (let e of n.colliderDefs ?? [])
      e.aabb &&
        !e.ramp &&
        e.aabb[4] - e.aabb[1] > 0.03 &&
        c.push({
          box: [
            e.aabb[0] - 0.05,
            e.aabb[2] - 0.05,
            e.aabb[3] + 0.05,
            e.aabb[5] + 0.05,
          ],
        });
    for (let e of n.labBuildings ?? []) {
      let t = se[e.key]?.ext;
      if (!t) continue;
      let n = Math.round(Math.cos(e.rotY)),
        r = Math.round(Math.sin(e.rotY)),
        i = [
          [t[0], t[1]],
          [t[2], t[3]],
        ].map(([t, i]) => [e.x + t * n + i * r, e.z - t * r + i * n]);
      c.push({
        box: [
          Math.min(i[0][0], i[1][0]) - 0.2,
          Math.min(i[0][1], i[1][1]) - 0.2,
          Math.max(i[0][0], i[1][0]) + 0.2,
          Math.max(i[0][1], i[1][1]) + 0.2,
        ],
      });
    }
    let e = new Map(),
      t = (e, t) => e * 100003 + t;
    for (let n of c)
      for (let r = Math.floor(n.box[0] / 4); r <= Math.floor(n.box[2] / 4); r++)
        for (
          let i = Math.floor(n.box[1] / 4);
          i <= Math.floor(n.box[3] / 4);
          i++
        ) {
          let a = t(r, i);
          (e.has(a) || e.set(a, []), e.get(a).push(n));
        }
    let r = (n, r) => {
        for (let i of e.get(t(Math.floor(n / 4), Math.floor(r / 4))) ?? []) {
          let [e, t, a, o] = i.box;
          if (!(n < e || n > a || r < t || r > o) && (!i.test || i.test(n, r)))
            return !1;
        }
        return !0;
      },
      i = (e, t) => ({
        seed: t,
        density: e.density * (te()?.lawn ?? 1),
        h: 0.07,
        hVar: 0.4,
        width: 0.009,
        stripes: e.stripes ?? 0,
        tones: Be.mown,
        y: e.y ?? 0.005,
      }),
      o = n.yardLawns.filter((e) => e.follow);
    if (
      (n.yardLawns
        .filter((e) => !e.follow)
        .forEach((e, t) => {
          let [n, o, s, c] = e.bounds;
          Ve(
            a,
            { w: s - n, d: c - o, cx: (n + s) / 2, cz: (o + c) / 2, inside: r },
            i(e, 41 + t),
          );
        }),
      o.length)
    ) {
      let e = new Map(),
        t = new D();
      ((t.name = `yard-lawn`), a.add(t));
      let n = (e, t) =>
        o.find(
          (n) =>
            e >= n.bounds[0] &&
            e < n.bounds[2] &&
            t >= n.bounds[1] &&
            t < n.bounds[3],
        );
      y = (a) => {
        let s = Math.max(...o.map((e) => e.follow)),
          c = Math.floor(a.x / Ko),
          l = Math.floor(a.z / Ko),
          u = Math.ceil(s / Ko),
          d = 0,
          f = new Set();
        for (let o = 0; o <= u; o++)
          for (let u = c - o; u <= c + o; u++)
            for (let p = l - o; p <= l + o; p++) {
              if (Math.max(Math.abs(u - c), Math.abs(p - l)) !== o) continue;
              let m = (u + 0.5) * Ko,
                h = (p + 0.5) * Ko;
              if (Math.hypot(m - a.x, h - a.z) > s + Ko * 0.7) continue;
              let g = n(m, h);
              if (!g) continue;
              let _ = u * 100003 + p;
              if ((f.add(_), e.has(_) || d >= 3)) continue;
              let v = Ve(
                t,
                { w: Ko, d: Ko, cx: m, cz: h, inside: r },
                i(g, _ & 65535),
              );
              (d++,
                v && ((v.frustumCulled = !0), v.computeBoundingSphere?.()),
                e.set(_, v));
            }
        for (let [t, n] of e)
          f.has(t) || (n && (n.removeFromParent(), n.dispose?.()), e.delete(t));
      };
    }
  }
  let b = null;
  if (!e.config.phone) {
    let e = new Set([...d.values()].flat().map((e) => e.m)),
      t = new u(),
      n = _.filter((t) => !e.has(t)).map((e) => ({
        geometry: e.geometry,
        material: e.material,
        matrix: t,
        cast: e.userData.cast,
        mesh: e,
        at: e.geometry.boundingSphere.center,
        group: `${e.userData.far}|${e.receiveShadow}`,
      }));
    b = ce(n, { cell: 128, name: `yard-baked` });
    let r = new Set(b.rest.map((e) => e.mesh));
    for (let e of n)
      r.has(e.mesh) ||
        (e.mesh.removeFromParent(),
        e.mesh.geometry.dispose(),
        _.splice(_.indexOf(e.mesh), 1));
    for (let e of b.meshes) {
      let [t, n] = e.userData.bakeGroup.split(`|`);
      ((e.userData.far = +t),
        (e.userData.cast = e.castShadow),
        (e.receiveShadow = n === `true`),
        a.add(e),
        _.push(e));
    }
  }
  e.log?.(
    `yard dressing: ${r.length} items, ${_.length} merged chunk meshes, ${o.length} live groups`,
  );
  let x = 0,
    S = new A();
  return {
    update(t) {
      ((x += Math.min(t || 0, 0.1)), (we.value = x));
      let n = e.camera;
      if (n) {
        n.getWorldPosition(S);
        for (let e of _) {
          let t = e.geometry.boundingSphere,
            n = Math.hypot(t.center.x - S.x, t.center.z - S.z) - t.radius;
          ((e.visible = n < e.userData.far || S.y - t.center.y > Jo),
            (e.castShadow = e.userData.cast && n < qo));
        }
        for (let e of o) {
          let n = Math.hypot(e.x - S.x, e.z - S.z),
            r = n < qo;
          if (
            ((e.obj.visible =
              !e.obj.userData.knocked && (n < 120 || S.y - e.y > Jo)),
            r !== e.cast)
          ) {
            e.cast = r;
            for (let t of e.casters) t.castShadow = r;
          }
          if (n < Go) for (let n of e.ticks) n(x, t);
        }
        y?.(S);
      }
    },
    setItemHidden(e, t) {
      let n = f.get(e);
      n && (n.userData.knocked = !!t);
      for (let n of d.get(e) ?? []) {
        let e = n.m.geometry.attributes.position,
          r = e.array,
          i = n.start * 3,
          a = (n.start + n.count) * 3;
        if (t && !n.saved) {
          n.saved = r.slice(i, a);
          for (let e = i + 1; e < a; e += 3) r[e] = -1e3;
        } else if (!t && n.saved) (r.set(n.saved, i), (n.saved = null));
        else continue;
        e.needsUpdate = !0;
      }
      return d.has(e) || !!n;
    },
    dispose() {
      (a.removeFromParent(),
        a.traverse((e) => {
          e.isMesh && e.geometry.dispose();
        }),
        b?.dispose());
    },
  };
}
