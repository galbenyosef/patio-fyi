// assets__yard-dressing-view-CwP6m0Hr 62 — math
// Lines 17142-17559 of readable/assets__yard-dressing-view-CwP6m0Hr.pretty.js (statement-aligned).
async function as(t, n, r) {
  let i = r.yardProps ?? [];
  if (!i.length && !r.streetFurniture?.length && !r.yardLawns?.length)
    return null;
  let a = r.yardSeason ?? `summer`,
    o = new C(),
    c = [],
    l = new Map(),
    u = [],
    d = new Set(r.lindenFences?.panels?.map((e) => e.id) ?? []),
    f = new Map(),
    m = new Map(),
    h = null;
  ((o.name = `yard-dressing`), n.add(o));
  let g = (e, t, n, r, i = !1) => {
      let a = e.material;
      (Qo(a) || i) && (i || es(t, a.color), (a = $o(a)));
      for (let e of Object.keys(t.attributes))
        [`position`, `normal`, `uv`, `color`].includes(e) ||
          t.deleteAttribute(e);
      t.attributes.normal || t.computeVertexNormals();
      let o = t.attributes,
        s =
          Object.keys(o)
            .sort()
            .map((e) => e + o[e].itemSize)
            .join(`,`) + (t.index ? `|i` : `|n`);
      (t.computeBoundingSphere(), t.computeBoundingBox());
      let c = t.boundingSphere.center;
      n && t.boundingBox.max.y - t.boundingBox.min.y < 0.3 && (n = !1);
      let u = t.boundingSphere.radius < Yo,
        d = `${`${Math.floor(c.x / Uo)},${Math.floor(c.z / Uo)}`}|${a.uuid}|${n}|${r}|${s}|${u}`,
        f = l.get(d);
      (f ||
        l.set(
          d,
          (f = { mat: a, cast: n, receive: r, small: u, geos: [], ids: [] }),
        ),
        f.geos.push(t),
        f.ids.push(h));
    },
    _ = performance.now();
  for (let e of i) {
    performance.now() - _ > 40 && (await ns(), (_ = performance.now()));
    let n;
    h = d.has(e.id) ? e.id : null;
    try {
      if (e.car) {
        let t = fe.find((t) => t.key === e.car) ?? fe[0];
        n = de(t, e.color ?? ue[(e.seed ?? 0) % ue.length]);
      } else n = No(e.key, e.seed ?? 1, { season: a, ...(e.opts ?? {}) });
    } catch (n) {
      t.warn?.(`yard item ${e.id} (${e.key ?? e.car}) failed: ${n.message}`);
      continue;
    }
    (n.position.set(e.x, e.y ?? 0, e.z),
      (n.rotation.y = e.rotY ?? 0),
      n.updateMatrixWorld(!0));
    {
      let t = n.userData,
        r = new p().setFromObject(n),
        i = Math.cos(n.rotation.y),
        a = Math.sin(n.rotation.y),
        o = e.x,
        s = e.z,
        c = (e, t) => {
          let n = e - o,
            r = t - s;
          return [n * i - r * a, n * a + r * i];
        };
      t.clear
        ? u.push({
            box: [r.min.x, r.min.z, r.max.x, r.max.z],
            test: (e, n) => t.clear(...c(e, n)),
          })
        : !t.keepGrass && !t.lawn && t.box
          ? u.push({
              box: [r.min.x, r.min.z, r.max.x, r.max.z],
              test: (e, n) => {
                let [r, i] = c(e, n);
                return (
                  r > t.box.min.x &&
                  r < t.box.max.x &&
                  i > t.box.min.z &&
                  i < t.box.max.z
                );
              },
            })
          : e.car && u.push({ box: [r.min.x, r.min.z, r.max.x, r.max.z] });
    }
    let r = new Set(),
      i = [];
    n.traverse((e) => {
      e.userData.tick && (i.push(e.userData.tick), e.traverse((e) => r.add(e)));
    });
    let s = [];
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
            s.push(e);
            return;
          }
          if (
            (is(e),
            e.count * e.geometry.attributes.position.count > 6e4 ||
              !Qo(e.material))
          )
            return;
          let t = ts(e);
          t && (g(e, t, e.castShadow, e.receiveShadow, !0), s.push(e));
          return;
        }
        (g(
          e,
          e.geometry.clone().applyMatrix4(e.matrixWorld),
          e.castShadow,
          e.receiveShadow,
        ),
          s.push(e));
      }
    });
    for (let e of s) e.removeFromParent();
    let l = 0;
    if (
      (n.traverse((e) => {
        e.isMesh && l++;
      }),
      l)
    ) {
      let t = [];
      (n.traverse((e) => {
        e.isMesh && e.castShadow && t.push(e);
      }),
        o.add(n),
        h && m.set(h, n),
        c.push({
          obj: n,
          x: e.x,
          y: e.y ?? 0,
          z: e.z,
          ticks: i,
          casters: t,
          cast: !0,
        }));
    }
  }
  if (((h = null), r.streetFurniture?.length)) {
    let e = Ho({
      add: (e) => {
        (e.updateMatrixWorld(!0),
          e.traverse((e) => {
            e.isMesh &&
              g(e, e.geometry.clone().applyMatrix4(e.matrixWorld), !0, !0);
          }));
      },
      contact() {},
    });
    for (let t of r.streetFurniture)
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
  let v = [];
  for (let {
    mat: t,
    cast: n,
    receive: r,
    small: i,
    geos: a,
    ids: s,
  } of l.values()) {
    performance.now() - _ > 40 && (await ns(), (_ = performance.now()));
    let c = a.length > 1 ? re(a) : a[0];
    for (let l of c ? [c] : a) {
      let u = new e(l, t);
      ((u.castShadow = n && !i),
        (u.userData.cast = n && !i),
        (u.userData.far = i ? Xo : Wo),
        (u.receiveShadow = r),
        (u.matrixAutoUpdate = !1),
        l.computeBoundingSphere(),
        o.add(u),
        v.push(u));
      let d = 0;
      a.forEach((e, t) => {
        let n = e.attributes.position.count;
        (s[t] &&
          (l === c || l === e) &&
          (f.has(s[t]) || f.set(s[t], []),
          f.get(s[t]).push({ m: u, start: l === c ? d : 0, count: n })),
          (d += n));
      });
    }
    if (c && a.length > 1) for (let e of a) e.dispose();
  }
  let y = null;
  if (r.yardLawns?.length) {
    for (let e of r.scatterExclude ?? []) u.push({ box: e });
    for (let e of r.colliderDefs ?? [])
      e.aabb &&
        !e.ramp &&
        e.aabb[4] - e.aabb[1] > 0.03 &&
        u.push({
          box: [
            e.aabb[0] - 0.05,
            e.aabb[2] - 0.05,
            e.aabb[3] + 0.05,
            e.aabb[5] + 0.05,
          ],
        });
    for (let e of r.labBuildings ?? []) {
      let t = se[e.key]?.ext;
      if (!t) continue;
      let n = Math.round(Math.cos(e.rotY)),
        r = Math.round(Math.sin(e.rotY)),
        i = [
          [t[0], t[1]],
          [t[2], t[3]],
        ].map(([t, i]) => [e.x + t * n + i * r, e.z - t * r + i * n]);
      u.push({
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
    for (let n of u)
      for (let r = Math.floor(n.box[0] / 4); r <= Math.floor(n.box[2] / 4); r++)
        for (
          let i = Math.floor(n.box[1] / 4);
          i <= Math.floor(n.box[3] / 4);
          i++
        ) {
          let a = t(r, i);
          (e.has(a) || e.set(a, []), e.get(a).push(n));
        }
    let n = (n, r) => {
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
      a = r.yardLawns.filter((e) => e.follow);
    if (
      (r.yardLawns
        .filter((e) => !e.follow)
        .forEach((e, t) => {
          let [r, a, s, c] = e.bounds;
          Ve(
            o,
            { w: s - r, d: c - a, cx: (r + s) / 2, cz: (a + c) / 2, inside: n },
            i(e, 41 + t),
          );
        }),
      a.length)
    ) {
      let e = new Map(),
        t = new C();
      ((t.name = `yard-lawn`), o.add(t));
      let r = (e, t) =>
        a.find(
          (n) =>
            e >= n.bounds[0] &&
            e < n.bounds[2] &&
            t >= n.bounds[1] &&
            t < n.bounds[3],
        );
      y = (o) => {
        let s = Math.max(...a.map((e) => e.follow)),
          c = Math.floor(o.x / Ko),
          l = Math.floor(o.z / Ko),
          u = Math.ceil(s / Ko),
          d = 0,
          f = new Set();
        for (let a = 0; a <= u; a++)
          for (let u = c - a; u <= c + a; u++)
            for (let p = l - a; p <= l + a; p++) {
              if (Math.max(Math.abs(u - c), Math.abs(p - l)) !== a) continue;
              let m = (u + 0.5) * Ko,
                h = (p + 0.5) * Ko;
              if (Math.hypot(m - o.x, h - o.z) > s + Ko * 0.7) continue;
              let g = r(m, h);
              if (!g) continue;
              let _ = u * 100003 + p;
              if ((f.add(_), e.has(_) || d >= 3)) continue;
              let v = Ve(
                t,
                { w: Ko, d: Ko, cx: m, cz: h, inside: n },
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
  if (!t.config.phone) {
    let e = new Set([...f.values()].flat().map((e) => e.m)),
      t = new oe(),
      n = v
        .filter((t) => !e.has(t))
        .map((e) => ({
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
        v.splice(v.indexOf(e.mesh), 1));
    for (let e of b.meshes) {
      let [t, n] = e.userData.bakeGroup.split(`|`);
      ((e.userData.far = +t),
        (e.userData.cast = e.castShadow),
        (e.receiveShadow = n === `true`),
        o.add(e),
        v.push(e));
    }
  }
  t.log?.(
    `yard dressing: ${i.length} items, ${v.length} merged chunk meshes, ${c.length} live groups`,
  );
  let x = 0,
    S = new s();
  return {
    update(e) {
      ((x += Math.min(e || 0, 0.1)), (we.value = x));
      let n = t.camera;
      if (n) {
        n.getWorldPosition(S);
        for (let e of v) {
          let t = e.geometry.boundingSphere,
            n = Math.hypot(t.center.x - S.x, t.center.z - S.z) - t.radius;
          ((e.visible = n < e.userData.far || S.y - t.center.y > Jo),
            (e.castShadow = e.userData.cast && n < qo));
        }
        for (let t of c) {
          let n = Math.hypot(t.x - S.x, t.z - S.z),
            r = n < qo;
          if (
            ((t.obj.visible =
              !t.obj.userData.knocked && (n < 120 || S.y - t.y > Jo)),
            r !== t.cast)
          ) {
            t.cast = r;
            for (let e of t.casters) e.castShadow = r;
          }
          if (n < Go) for (let n of t.ticks) n(x, e);
        }
        y?.(S);
      }
    },
    setItemHidden(e, t) {
      let n = m.get(e);
      n && (n.userData.knocked = !!t);
      for (let n of f.get(e) ?? []) {
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
      return f.has(e) || !!n;
    },
    dispose() {
      (o.removeFromParent(),
        o.traverse((e) => {
          e.isMesh && e.geometry.dispose();
        }),
        b?.dispose());
    },
  };
}
