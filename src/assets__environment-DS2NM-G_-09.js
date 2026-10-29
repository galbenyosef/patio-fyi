// assets__environment-DS2NM-G_ 09 — math
// Lines 2255-2456 of readable/assets__environment-DS2NM-G_.pretty.js (statement-aligned).
function xn(e, t, n) {
  let r = [],
    i = [],
    a = [16767392, 16764812, 16770236, 16176552, 13623551];
  for (let n of t) {
    if (!n.masses || !n.masses.length || !e.chance(0.5)) continue;
    let t = Math.cos(n.rot),
      i = Math.sin(n.rot);
    for (let o of n.masses) {
      if (o.round) continue;
      let s = n.sx * o.s * 0.5,
        c = n.sz * o.s * 0.5,
        l = n.y + o.y0 * n.sy,
        u = n.y + o.y1 * n.sy;
      if (u - l < 3.4) continue;
      let d = Math.min(18, Math.floor((u - l) / 3.4));
      for (let o = 0; o < d; o++) {
        let u = l + 1.55 + o * 3.4;
        for (let o = 0; o < 4; o++) {
          let l = o < 2 ? s : c,
            d = Math.max(1, Math.floor((l * 2) / 3.6));
          for (let f = 0; f < d; f++) {
            if (!e.chance(0.16)) continue;
            let p = ((f + 0.5) / d) * 2 * l - l,
              m,
              h,
              g;
            if (
              (o === 0
                ? ((m = p), (h = c + 0.05), (g = n.rot))
                : o === 1
                  ? ((m = p), (h = -c - 0.05), (g = n.rot + Math.PI))
                  : o === 2
                    ? ((m = s + 0.05), (h = p), (g = n.rot + Math.PI / 2))
                    : ((m = -s - 0.05), (h = p), (g = n.rot - Math.PI / 2)),
              r.push({
                x: n.x + m * t + h * i,
                y: u,
                z: n.z - m * i + h * t,
                ry: g,
                rx: 0,
                w: e.range(1, 1.5),
                h: e.range(1.2, 1.7),
                col: e.pick(a),
              }),
              r.length > 2600)
            )
              break;
          }
        }
      }
    }
  }
  for (let [e, t] of n) {
    for (let [n, i] of dn) {
      let a = un + ln * n + 0.22 - 0.085;
      for (let n of [-1, 1])
        (r.push({
          x: e + n * i * 0.5,
          y: a,
          z: t,
          ry: 0,
          rx: Math.PI / 2,
          w: 0.5,
          h: 0.32,
          col: 16773327,
        }),
          r.push({
            x: e,
            y: a,
            z: t + n * i * 0.5,
            ry: 0,
            rx: Math.PI / 2,
            w: 0.32,
            h: 0.5,
            col: 16773327,
          }),
          r.push({
            x: e + n * i * 0.5,
            y: a + 0.02,
            z: t,
            ry: 0,
            rx: 0,
            w: 0.55,
            h: 0.3,
            col: 16769451,
          }),
          r.push({
            x: e,
            y: a + 0.02,
            z: t + n * i * 0.5,
            ry: Math.PI / 2,
            rx: 0,
            w: 0.55,
            h: 0.3,
            col: 16769451,
          }));
    }
    let n = 21.4;
    (r.push({ x: e, y: n, z: t, ry: 0, rx: 0, w: 0.5, h: 0.5, col: 16734792 }),
      r.push({
        x: e,
        y: n,
        z: t,
        ry: Math.PI / 2,
        rx: 0,
        w: 0.5,
        h: 0.5,
        col: 16734792,
      }),
      i.push({ x: e, y: 0.205, z: t, r: 26, col: 16766106 }));
  }
  let o = (e, t, n, r) => {
      let i = new re(e, r, Math.max(1, t.length)),
        a = new b();
      return (
        t.forEach((e, t) => {
          (a.position.set(e.x, e.y, e.z),
            a.rotation.set(e.rx ?? 0, e.ry ?? 0, 0),
            e.flat ? a.scale.set(e.r, 1, e.r) : a.scale.set(e.w, e.h, 1),
            a.updateMatrix(),
            i.setMatrixAt(t, a.matrix),
            i.setColorAt(t, Kt.setHex(e.col)));
        }),
        (i.count = t.length),
        (i.castShadow = !1),
        (i.receiveShadow = !1),
        (i.name = n),
        i.computeBoundingSphere(),
        (i.visible = !1),
        i
      );
    },
    s = new g({
      color: 0,
      vertexColors: !0,
      toneMapped: !0,
      fog: !0,
      side: 2,
      transparent: !0,
      depthWrite: !1,
      blending: 2,
    }),
    c = new A(1, 1);
  {
    let e = c.attributes.position.count;
    c.setAttribute(`color`, new l(new Float32Array(e * 3).fill(1), 3));
  }
  let u = o(c, r, `envWindows`, s),
    d = new A(1, 1, 12, 12).rotateX(-Math.PI / 2);
  {
    let e = d.attributes.position,
      t = new Float32Array(e.count * 4);
    for (let n = 0; n < e.count; n++) {
      let r = (1 - Math.min(1, Math.hypot(e.getX(n), e.getZ(n)) * 2)) ** 2.1;
      ((t[n * 4] = 1),
        (t[n * 4 + 1] = 1),
        (t[n * 4 + 2] = 1),
        (t[n * 4 + 3] = r));
    }
    d.setAttribute(`color`, new l(t, 4));
  }
  let f = new g({
      color: 0,
      vertexColors: !0,
      transparent: !0,
      depthWrite: !1,
      side: 2,
      blending: 2,
      toneMapped: !0,
      fog: !0,
      polygonOffset: !0,
      polygonOffsetFactor: -16,
      polygonOffsetUnits: -16,
    }),
    p = o(
      d,
      i.map((e) => ({ ...e, ry: 0, rx: 0, flat: !0 })),
      `envLightPools`,
      f,
    );
  return (
    (p.renderOrder = 6),
    {
      windows: u,
      poolMesh: p,
      winMat: s,
      poolMat: f,
      count: r.length,
      dispose() {
        (c.dispose(), d.dispose(), s.dispose(), f.dispose());
      },
      set(e, t) {
        let n = e > 0.02;
        if (((u.visible = n), (p.visible = n), !n)) return;
        let r = (2.4 * e * e) / Math.max(0.8, t);
        (s.color.setScalar(Math.min(1.3, r)),
          f.color.setScalar(Math.min(0.6, r * 0.45)));
      },
    }
  );
}
