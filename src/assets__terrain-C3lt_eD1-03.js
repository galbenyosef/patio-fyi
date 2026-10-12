// assets__terrain-C3lt_eD1 03 — math
// Lines 640-945 of readable/assets__terrain-C3lt_eD1.pretty.js (statement-aligned).
function xt(e, t, n, r = null) {
  let i = !!e.opts?.harborSurround,
    a = !!e.opts?.greywaterEnv || i,
    o = e.half,
    s = a ? Ke : 1500,
    c = [0, 5, 12, 21, 32];
  for (let e = 48; e <= 420; e += 16) c.push(e);
  if (a && re()) for (let e = 466; e <= 1100; e += 30) c.push(e);
  else if (a) {
    for (let e = 466; e <= 1500; e += 15) c.push(e);
    for (let e = 1530; e <= s; e += Math.max(30, e * 0.045)) c.push(e);
  } else for (let e = 466; e <= s; e += 46) c.push(e);
  !(a && re()) && c[c.length - 1] < s && c.push(s);
  let l = 1024,
    d = (t | 0) + 4441,
    f = {
      rock: new v(6710366),
      rockDark: new v(4342076),
      snow: new v(11122116),
      snowFresh: new v(13884388),
      haze: new v(7766671),
    };
  (e.opts?.biome === `desert` &&
    (f.rock.set(8288884),
    f.rockDark.set(6118492),
    f.haze.set(9016736),
    f.snow.set(9341566)),
    e.opts?.cinder &&
      (f.rock.set(4866106),
      f.rockDark.set(3025190),
      f.haze.set(3818064),
      f.snow.set(5917764)),
    e.opts?.biome === `jungle` &&
      (f.rock.set(7302496),
      f.rockDark.set(4146486),
      f.haze.set(7109226),
      (f.jungle = new v(3494956))));
  let p = !!e.opts?.island,
    m =
      p && e.opts.island.farIsles !== !1
        ? [
            [-1650, 780, 260, 62],
            [1420, -1080, 210, 48],
            [1880, 520, 300, 84],
            [-1120, -1560, 190, 38],
            [420, 1780, 240, 55],
          ]
        : [];
  p &&
    ((f.isle = new v(4023345)),
    (f.isleSand = new v(13221272)),
    (f.seabed = new v(2902604)),
    f.haze.set(8227731));
  let h = (e, t) => {
      let n = o + e,
        r = Math.floor(t) % 4,
        i = t - Math.floor(t);
      return r === 0
        ? [-n + 2 * n * i, -n]
        : r === 1
          ? [n, -n + 2 * n * i]
          : r === 2
            ? [n - 2 * n * i, n]
            : [-n, n - 2 * n * i];
    },
    g = 0;
  if (a) {
    let t = 0;
    for (let n = 0; n < 400; n++) {
      let [r, i] = h(0, n / 100);
      ((g += e.getHeight(r, i)), t++);
    }
    g /= t;
  }
  let b = (t, n) => {
      let r = Math.max(Math.abs(t), Math.abs(n)) - o,
        s = I(t, -o, o),
        c = I(n, -o, o),
        l = e.getHeight(s, c);
      if (r <= 0) return l;
      if (p) {
        let i = l + (e.waterLevel - 34 - l) * N(0, 240, r);
        for (let [r, a, o, s] of m) {
          let c = Math.hypot(t - r, n - a);
          c < o &&
            (i = Math.max(
              i,
              e.waterLevel -
                3 +
                s *
                  (1 - c / o) ** 1.35 *
                  (0.82 + 0.3 * P(t / 90, n / 90, 2, d + 17)),
            ));
        }
        return i;
      }
      if (i) return ye(t, n, l, o, e.waterLevel);
      if (a) return l + (g + $e(t, n, r, o) - l) * N(0, 90, r);
      let u = N(0, 340, r) * (1 - N(860, 1500, r)),
        f = Math.max(0, 1 - Math.abs(P(t / 620, n / 620, 4, d))) ** 1.6,
        h = Math.max(0, 1 - Math.abs(P(t / 240, n / 240, 3, d + 7))) ** 1.7,
        _ = (55 + 175 * f + 48 * h) * u * (e.opts?.surroundScale ?? 1),
        v = N(880, 1500, r) * 170;
      return l + (Math.max(e.waterLevel + 30, l - 2 + _ - v) - l) * N(0, 80, r);
    },
    x = [],
    S = [],
    C = [],
    w = [],
    T = new v();
  for (let t = 0; t < c.length; t++) {
    let n = c[t],
      s = t > 0 ? c[t] - c[t - 1] : 0;
    for (let u = 0; u < l; u++) {
      let [l, m] = h(n, (u / 256) % 4);
      if (t > 0 && t < c.length - 1) {
        let e = F(u, t, d + 61) - 0.5,
          r = F(u, t, d + 62) - 0.5,
          i = Math.min(s, c[t + 1] - n, (2 * (o + n)) / 256);
        ((l += e * i * 0.35), (m += r * i * 0.35));
      }
      let _ = b(l, m),
        v = (b(l + 16, m) - b(l - 16, m)) / 32,
        y = (b(l, m + 16) - b(l, m - 16)) / 32,
        w = 1 / Math.sqrt(v * v + 1 + y * y),
        E = Math.hypot(v, y),
        D = e.opts?.biome === `snow`,
        O = D
          ? 0.97 *
            (1 - 0.8 * N(0.95, 1.9, E + 0.25 * P(l / 60, m / 60, 2, d + 5)))
          : N(0, 70, _ - (240 + 60 * P(l / 300, m / 300, 2, d + 3))) *
            (1 - N(0.9, 1.8, E));
      if (
        (T.copy(f.rockDark).lerp(
          f.rock,
          I(0.4 + 0.5 * P(l / 90, m / 90, 2, d + 11), 0, 1),
        ),
        T.lerp(D ? f.snowFresh : f.snow, p ? 0 : O),
        p &&
          (_ < e.waterLevel - 0.5
            ? T.copy(f.seabed)
            : T.copy(f.isleSand)
                .lerp(f.isle, N(e.waterLevel + 0.6, e.waterLevel + 5, _))
                .lerp(f.rockDark, 0.35 * N(0.7, 1.4, E))),
        f.jungle &&
          T.lerp(
            f.jungle,
            0.88 *
              (1 - N(0.82, 1.65, E + 0.22 * P(l / 70, m / 70, 2, d + 5))) *
              (1 - N(300, 520, _)),
          ),
        i)
      ) {
        if (
          (T.setHex(6648903),
          T.lerp(f.rock, 0.6 * N(0.35, 1.3, E)),
          T.multiplyScalar(0.85 + 0.28 * P(l / 45, m / 45, 3, d + 11)),
          r)
        ) {
          let t = e.cellIndex(I(l, -o, o), I(m, -o, o)) * 3,
            i = N(0, 130, n);
          T.setRGB(
            r[t] * (1 - i) + T.r * i,
            r[t + 1] * (1 - i) + T.g * i,
            r[t + 2] * (1 - i) + T.b * i,
          );
        }
      } else a && pt(T, l, m, _ - g, E, n);
      (T.lerp(
        f.haze,
        a ? 0.06 + 0.1 * N(300, 1400, n) : 0.2 + 0.22 * N(150, 1100, n),
      ),
        x.push(l, _, m),
        C.push(-v * w, w, -y * w),
        S.push(T.r, T.g, T.b));
    }
  }
  for (let e = 0; e < c.length - 1; e++) {
    let t = e * l,
      n = (e + 1) * l;
    for (let e = 0; e < l; e++) {
      let r = (e + 1) % l;
      w.push(t + e, n + r, n + e, t + e, t + r, n + r);
    }
  }
  let E = new u();
  (E.setAttribute(`position`, new j(x, 3)),
    E.setAttribute(`normal`, new j(C, 3)),
    E.setAttribute(`color`, new j(S, 3)),
    E.setIndex(w),
    E.computeBoundingSphere(),
    E.computeBoundingBox());
  let D = new y({
    vertexColors: !0,
    flatShading: !0,
    roughness: 0.98,
    metalness: 0,
  });
  if (
    (ge(D, n, {
      key: a ? `terrain-surround-gwenv` : `terrain-surround-v5`,
      detail: i ? 0.18 : 0.055,
      cliff: a ? 0.25 : 0.9,
      sun: !1,
      smoothFar: a ? [0, 1] : [95, 330],
    }),
    a)
  ) {
    let e = i ? (re()?.far ?? 4e3) : 4e3;
    ve(D, { haze: 0.18, far: e, from: Math.min(1800, e * 0.78) });
  }
  let O = new _(E, D);
  return (
    (O.name = `terrainSurround`),
    (O.castShadow = !1),
    (O.receiveShadow = !1),
    (O.matrixAutoUpdate = !1),
    O.updateMatrix(),
    {
      mesh: O,
      heightAt: b,
      floor: g,
      dispose() {
        (E.dispose(), D.dispose());
      },
    }
  );
}
function St(e) {
  let { n: t, heights: n } = e,
    r = t * t,
    i = wt(n, t, 3),
    a = wt(n, t, 8),
    o = wt(n, t, 20),
    s = new Float32Array(r);
  for (let e = 0; e < r; e++) {
    let t = n[e],
      r = I((i[e] - t) / 2.2, 0, 1),
      c = I((a[e] - t) / 6, 0, 1),
      l = I((o[e] - t) / 16, 0, 1);
    s[e] = I(1 - 0.36 * r - 0.3 * c - 0.24 * l, 0.38, 1);
  }
  return s;
}
function Ct(e, t, n) {
  let r = t * t,
    i = new Float32Array(r * 3),
    a = new Float32Array(r * 3),
    o = 2 * n + 1;
  for (let r = 0; r < t; r++) {
    let i = r * t,
      s = [0, 0, 0];
    for (let r = -n; r <= n; r++) {
      let n = (i + I(r, 0, t - 1)) * 3;
      ((s[0] += e[n]), (s[1] += e[n + 1]), (s[2] += e[n + 2]));
    }
    for (let r = 0; r < t; r++) {
      let c = (i + r) * 3;
      ((a[c] = s[0] / o), (a[c + 1] = s[1] / o), (a[c + 2] = s[2] / o));
      let l = (i + I(r + n + 1, 0, t - 1)) * 3,
        u = (i + I(r - n, 0, t - 1)) * 3;
      ((s[0] += e[l] - e[u]),
        (s[1] += e[l + 1] - e[u + 1]),
        (s[2] += e[l + 2] - e[u + 2]));
    }
  }
  for (let e = 0; e < t; e++) {
    let r = [0, 0, 0];
    for (let i = -n; i <= n; i++) {
      let n = (I(i, 0, t - 1) * t + e) * 3;
      ((r[0] += a[n]), (r[1] += a[n + 1]), (r[2] += a[n + 2]));
    }
    for (let s = 0; s < t; s++) {
      let c = (s * t + e) * 3;
      ((i[c] = r[0] / o), (i[c + 1] = r[1] / o), (i[c + 2] = r[2] / o));
      let l = (I(s + n + 1, 0, t - 1) * t + e) * 3,
        u = (I(s - n, 0, t - 1) * t + e) * 3;
      ((r[0] += a[l] - a[u]),
        (r[1] += a[l + 1] - a[u + 1]),
        (r[2] += a[l + 2] - a[u + 2]));
    }
  }
  return i;
}
function wt(e, t, n) {
  let r = new Float32Array(t * t),
    i = new Float32Array(t * t),
    a = 2 * n + 1;
  for (let i = 0; i < t; i++) {
    let o = i * t,
      s = 0;
    for (let r = -n; r <= n; r++) s += e[o + I(r, 0, t - 1)];
    for (let i = 0; i < t; i++)
      ((r[o + i] = s / a),
        (s += e[o + I(i + n + 1, 0, t - 1)] - e[o + I(i - n, 0, t - 1)]));
  }
  for (let e = 0; e < t; e++) {
    let o = 0;
    for (let i = -n; i <= n; i++) o += r[I(i, 0, t - 1) * t + e];
    for (let s = 0; s < t; s++)
      ((i[s * t + e] = o / a),
        (o +=
          r[I(s + n + 1, 0, t - 1) * t + e] - r[I(s - n, 0, t - 1) * t + e]));
  }
  return i;
}
