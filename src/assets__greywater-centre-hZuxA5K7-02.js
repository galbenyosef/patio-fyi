// assets__greywater-centre-hZuxA5K7 02 — math
// Lines 264-591 of readable/assets__greywater-centre-hZuxA5K7.pretty.js (statement-aligned).
function S(t, n) {
  C(t, n);
  let r = t.colliderDefs,
    s = c(),
    l = { s0: s.stationAt - i.length / 2, s1: s.stationAt + i.length / 2 },
    h = (e, t = 0) => e > l.s0 - t && e < l.s1 + t;
  for (let e = 0, t = 0; e < s.length; e += 3, t++) {
    let n = s.at(e + 1.5),
      i = Math.atan2(n.tx, n.tz);
    if (x(n.x, n.z)) {
      f(r, `rail-deck-${t}`, {
        x: u(n.x),
        z: u(n.z),
        yaw: i,
        hx: 5.5,
        hz: 1.56,
        y0: 31.2,
        y1: 33,
        thickness: 1.8,
      });
      for (let e of [-2.25, 2.25])
        f(r, `rail-slab-${t}-${+(e > 0)}`, {
          x: u(n.x + n.tz * e),
          z: u(n.z - n.tx * e),
          yaw: i,
          hx: 1.35,
          hz: 1.56,
          y0: 33,
          y1: 33.24,
          thickness: 0.3,
        });
      if (!h(e + 1.5, 2.3))
        for (let e of [-4.77, 4.77])
          f(r, `rail-walk-${t}-${+(e > 0)}`, {
            x: u(n.x + n.tz * e),
            z: u(n.z - n.tx * e),
            yaw: i,
            hx: 0.42,
            hz: 1.56,
            y0: 33,
            y1: 33.32,
            thickness: 0.4,
          });
    }
  }
  let g = 0;
  for (let e = 0.2; e < s.length; e += 0.75) {
    if (h(e, 2.3)) continue;
    let t = s.at(e);
    for (let e of [-5.36, 5.36]) {
      let n = t.x + t.tz * e,
        i = t.z - t.tx * e;
      Math.abs(n) < 219.6 &&
        Math.abs(i) < 219.6 &&
        d(
          r,
          `rail-parapet-${g++}`,
          n - 0.34,
          33,
          i - 0.34,
          n + 0.34,
          34.24,
          i + 0.34,
        );
    }
  }
  let _ = b();
  for (let e = 0; e < _.length; e++) {
    let t = Math.min(s.length - 0.6, Math.max(0.6, _[e])),
      i = s.at(t),
      a = n(i.x, i.z),
      o = Math.atan2(i.tx, i.tz);
    if (Math.abs(i.x) > 218 || Math.abs(i.z) > 218) continue;
    let c = !x(i.x, i.z),
      l = 29.48;
    if (
      (p(r, `rail-pier-${e}`, i.x, i.z, i.tz, -i.tx, 1.15, 0.725, a - 0.2, l),
      p(
        r,
        `rail-pier-${e}-plinth`,
        i.x,
        i.z,
        i.tz,
        -i.tx,
        1.3,
        0.85,
        a - 0.2,
        a + 0.5,
        0.45,
      ),
      c ||
        f(
          r,
          `rail-pier-cap-${e}`,
          {
            x: u(i.x),
            z: u(i.z),
            yaw: o,
            hx: 3.05,
            hz: 0.95,
            y0: l,
            y1: 30.98,
          },
          { noPlayer: !0 },
        ),
      e % 2 == 0 && !h(t, 3))
    )
      for (let t of [-4.85, 4.85]) {
        let n = i.x + i.tz * t,
          a = i.z - i.tx * t;
        Math.abs(n) < 219.6 &&
          Math.abs(a) < 219.6 &&
          d(
            r,
            `rail-mast-${e}-${+(t > 0)}`,
            n - 0.15,
            33.32,
            a - 0.15,
            n + 0.15,
            40.6,
            a + 0.15,
          );
      }
  }
  let v = s.at(s.stationAt),
    y = Math.atan2(v.tx, v.tz),
    S = i.length / 2,
    E = (e, t) => [v.x + v.tz * e + v.tx * t, v.z - v.tx * e + v.tz * t],
    D = Object.fromEntries(
      i.stairs.map((e) => [e.side, e.dir < 0 ? [4, 6.8] : [-6.8, -4]]),
    );
  for (let e of [-1, 1]) {
    let [t, n] = E((e * 12.65) / 2, 0);
    f(r, `rail-platform-${+(e > 0)}`, {
      x: u(t),
      z: u(n),
      yaw: y,
      hx: 4.950000000000001 / 2,
      hz: S,
      y0: 33,
      y1: 34.45,
    });
    for (let t of [-1, 1]) {
      let [n, i] = E(e * 5, t * (S + 0.98));
      f(r, `rail-platform-steps-${+(e > 0)}-${+(t > 0)}`, {
        x: u(n),
        z: u(i),
        yaw: y,
        hx: 0.5,
        hz: 0.98,
        y0: 33,
        y1: 34.45,
        ramp: { z0: t * 0.98, z1: -t * 0.98, y: 33.32, rise: 1.13 },
      });
      for (let n = 0.15; n < 2.1; n += 0.45) {
        let [i, a] = E(e * 5.53, t * (S + n));
        d(
          r,
          `rail-platform-cheek-${+(e > 0)}-${+(t > 0)}-${Math.round(n * 100)}`,
          i - 0.15,
          33.32,
          a - 0.15,
          i + 0.15,
          34.45 + 1.1,
          a + 0.15,
        );
      }
    }
    let i = [];
    for (let e = -S + 4; e <= S - 3.9; e += 8) i.push(e);
    for (let t of i) {
      let [n, i] = E(e * 7.85, t);
      d(
        r,
        `rail-canopy-col-${+(e > 0)}-${Math.round(t)}`,
        n - 0.12,
        34.45,
        i - 0.12,
        n + 0.12,
        39.2,
        i + 0.12,
      );
    }
    for (let t = 0; t < i.length - 1; t++) {
      let n = (i[t] + i[t + 1]) / 2,
        a = D[e];
      if (!(a && n > a[0] - 2 && n < a[1] + 2))
        for (let t = -0.7; t <= 0.71; t += 0.35) {
          let [i, a] = E(e * 7.28, n + t);
          d(
            r,
            `rail-bench-${+(e > 0)}-${Math.round(n)}-${Math.round(t * 100)}`,
            i - 0.2,
            34.45,
            a - 0.2,
            i + 0.2,
            35.35,
            a + 0.2,
          );
        }
    }
    let [a, o] = E(e * 6.5, 0);
    f(
      r,
      `rail-canopy-${+(e > 0)}`,
      {
        x: u(a),
        z: u(o),
        yaw: y,
        hx: 2.65,
        hz: S + 1,
        y0: 38.95,
        y1: 34.45 + 5.2,
      },
      { noPlayer: !0 },
    );
    let s = D[e];
    for (let t = -S; t <= S + 0.001; t += 0.45) {
      if (s && t > s[0] - 0.1 && t < s[1] + 0.1) continue;
      let [n, i] = E(e * 8.700000000000001, t);
      d(
        r,
        `rail-rail-${+(e > 0)}-${Math.round((t + S) / 0.45)}`,
        n - 0.15,
        34.45,
        i - 0.15,
        n + 0.15,
        34.45 + 1.1,
        i + 0.15,
      );
    }
  }
  for (let e of i.stairs) w(r, n, v, y, 33, e);
  (T(r), (t.objectiveStyle = `flag`));
  for (let e of t.objectives ?? []) e.letter === `E` && (e.visual = `map`);
  t.routes = {
    ...Object.fromEntries(
      Object.entries(t.routes ?? {}).filter(([e]) => e !== `main`),
    ),
    ...o,
  };
  let O = (e, t) =>
      m(a.poly, e, t) || (Math.abs(e) < 34.5 && Math.abs(t) < 6.5),
    k = (e) => /^(rail-|plaza-)/.test(String(e).replace(/^demo-/, ``));
  ((t.props = (t.props ?? []).filter((e) => !O(e.x, e.z))),
    (t.signs = (t.signs ?? []).filter((e) => !O(e.x, e.z))));
  let A = (e) => (Array.isArray(e.pos) ? [e.pos[0], e.pos[2]] : [e.x, e.z]);
  for (let e of [`lights`, `fixtureSpills`])
    Array.isArray(t[e]) && (t[e] = t[e].filter((e) => !O(...A(e))));
  t.objects = t.objects.filter(
    (e) =>
      k(e.id) ||
      /^(avenue|cross)-/.test(e.id) ||
      !O(e.x, e.z) ||
      e.kind !== `box` ||
      e.sx > 60 ||
      e.sz > 60,
  );
  let j = new Set((t.props ?? []).map((e) => `demo-` + e.id));
  t.colliderDefs = t.colliderDefs.filter(
    (e) =>
      k(e.id) ||
      !/^demo-(street|prop|streetlife)/.test(e.id) ||
      j.has(e.id) ||
      !O((e.aabb[0] + e.aabb[3]) / 2, (e.aabb[2] + e.aabb[5]) / 2),
  );
  let M = new Set([1, 4, 6, 11, 14, 19]),
    N = (e) => {
      let t = /^(?:demo-)?district-tree-(\d+)-(?:trunk|crown)$/.exec(e);
      return t && +t[1] < 20 && !M.has(+t[1]);
    };
  ((t.objects = t.objects.filter((e) => !N(e.id))),
    (t.colliderDefs = t.colliderDefs.filter((e) => !N(e.id))));
  let P = new Set(t.vacated ?? []);
  for (let e of [`buildings`, `infill`, `reviewBlock`, `landmarks`])
    Array.isArray(t[e]) && (t[e] = t[e].filter((e) => !P.has(e.id)));
  return (
    (t.greywaterCentre = {
      points: e,
      deck: 33,
      station: { at: s.stationAt, length: i.length, stairs: i.stairs },
      plaza: a,
    }),
    t
  );
}
function C(e, t) {
  let n = (e) => {
      let t = String(e).replace(/^demo-/, ``);
      return (
        /^(capture-canopy-|viaduct-|compact-loading-van-|compact-dumpster-)/.test(
          t,
        ) || /^compact-street-car-[123]$/.test(t)
      );
    },
    r = (e.props ?? []).filter((e) => n(e.id));
  ((e.props = (e.props ?? []).filter((e) => !n(e.id))),
    (e.objects = e.objects.filter((e) => !n(e.id))),
    (e.colliderDefs = e.colliderDefs.filter((e) => !n(e.id))),
    (e.lights = (e.lights ?? []).filter(
      (e) =>
        !r.some(
          (t) =>
            Math.hypot((e.pos?.[0] ?? e.x) - t.x, (e.pos?.[2] ?? e.z) - t.z) <
            3.5,
        ),
    )));
  let i = [];
  for (let n of e.objects)
    if (
      n.kind === `box` &&
      /^avenue-(0|walk-0-|kerb-0-)/.test(n.id) &&
      n.x - n.sx / 2 < -33 &&
      n.x + n.sx / 2 > 33
    ) {
      let e = n.x - n.sx / 2,
        r = n.x + n.sx / 2,
        a = n.y - t(n.x, n.z),
        o = (e - 33) / 2,
        s = (33 + r) / 2;
      i.push(
        { ...n, id: n.id + `-w`, x: o, y: t(o, n.z) + a, sx: -33 - e },
        { ...n, id: n.id + `-e`, x: s, y: t(s, n.z) + a, sx: r - 33 },
      );
    } else (/^avenue-dash-0-/.test(n.id) && Math.abs(n.x) < 36) || i.push(n);
  e.objects = i;
  for (let t of e.objectives ?? []) t.radius = 17;
}
