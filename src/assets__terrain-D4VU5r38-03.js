// assets__terrain-D4VU5r38 03 — math
// Lines 640-945 of readable/assets__terrain-D4VU5r38.pretty.js (statement-aligned).
function xt(e, t, r, i = null) {
  let a = !!e.opts?.harborSurround,
    s = !!e.opts?.greywaterEnv || a,
    c = e.half,
    u = s ? Ke : 1500,
    d = [0, 5, 12, 21, 32];
  for (let e = 48; e <= 420; e += 16) d.push(e);
  if (s && j()) for (let e = 466; e <= 1100; e += 30) d.push(e);
  else if (s) {
    for (let e = 466; e <= 1500; e += 15) d.push(e);
    for (let e = 1530; e <= u; e += Math.max(30, e * 0.045)) d.push(e);
  } else for (let e = 466; e <= u; e += 46) d.push(e);
  !(s && j()) && d[d.length - 1] < u && d.push(u);
  let f = 1024,
    p = (t | 0) + 4441,
    m = {
      rock: new _(6710366),
      rockDark: new _(4342076),
      snow: new _(11122116),
      snowFresh: new _(13884388),
      haze: new _(7766671),
    };
  (e.opts?.biome === `desert` &&
    (m.rock.set(8288884),
    m.rockDark.set(6118492),
    m.haze.set(9016736),
    m.snow.set(9341566)),
    e.opts?.cinder &&
      (m.rock.set(4866106),
      m.rockDark.set(3025190),
      m.haze.set(3818064),
      m.snow.set(5917764)),
    e.opts?.biome === `jungle` &&
      (m.rock.set(7302496),
      m.rockDark.set(4146486),
      m.haze.set(7109226),
      (m.jungle = new _(3494956))));
  let h = !!e.opts?.island,
    g =
      h && e.opts.island.farIsles !== !1
        ? [
            [-1650, 780, 260, 62],
            [1420, -1080, 210, 48],
            [1880, 520, 300, 84],
            [-1120, -1560, 190, 38],
            [420, 1780, 240, 55],
          ]
        : [];
  h &&
    ((m.isle = new _(4023345)),
    (m.isleSand = new _(13221272)),
    (m.seabed = new _(2902604)),
    m.haze.set(8227731));
  let v = (e, t) => {
      let n = c + e,
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
    y = 0;
  if (s) {
    let t = 0;
    for (let n = 0; n < 400; n++) {
      let [r, i] = v(0, n / 100);
      ((y += e.getHeight(r, i)), t++);
    }
    y /= t;
  }
  let b = (t, n) => {
      let r = Math.max(Math.abs(t), Math.abs(n)) - c,
        i = L(t, -c, c),
        o = L(n, -c, c),
        l = e.getHeight(i, o);
      if (r <= 0) return l;
      if (h) {
        let i = l + (e.waterLevel - 34 - l) * P(0, 240, r);
        for (let [r, a, o, s] of g) {
          let c = Math.hypot(t - r, n - a);
          c < o &&
            (i = Math.max(
              i,
              e.waterLevel -
                3 +
                s *
                  (1 - c / o) ** 1.35 *
                  (0.82 + 0.3 * F(t / 90, n / 90, 2, p + 17)),
            ));
        }
        return i;
      }
      if (a) return ye(t, n, l, c, e.waterLevel);
      if (s) return l + (y + $e(t, n, r, c) - l) * P(0, 90, r);
      let u = P(0, 340, r) * (1 - P(860, 1500, r)),
        d = Math.max(0, 1 - Math.abs(F(t / 620, n / 620, 4, p))) ** 1.6,
        f = Math.max(0, 1 - Math.abs(F(t / 240, n / 240, 3, p + 7))) ** 1.7,
        m = (55 + 175 * d + 48 * f) * u * (e.opts?.surroundScale ?? 1),
        _ = P(880, 1500, r) * 170;
      return l + (Math.max(e.waterLevel + 30, l - 2 + m - _) - l) * P(0, 80, r);
    },
    S = [],
    C = [],
    w = [],
    T = [],
    E = new _();
  for (let t = 0; t < d.length; t++) {
    let n = d[t],
      r = t > 0 ? d[t] - d[t - 1] : 0;
    for (let o = 0; o < f; o++) {
      let [l, u] = v(n, (o / 256) % 4);
      if (t > 0 && t < d.length - 1) {
        let e = I(o, t, p + 61) - 0.5,
          i = I(o, t, p + 62) - 0.5,
          a = Math.min(r, d[t + 1] - n, (2 * (c + n)) / 256);
        ((l += e * a * 0.35), (u += i * a * 0.35));
      }
      let f = b(l, u),
        g = (b(l + 16, u) - b(l - 16, u)) / 32,
        _ = (b(l, u + 16) - b(l, u - 16)) / 32,
        x = 1 / Math.sqrt(g * g + 1 + _ * _),
        T = Math.hypot(g, _),
        D = e.opts?.biome === `snow`,
        O = D
          ? 0.97 *
            (1 - 0.8 * P(0.95, 1.9, T + 0.25 * F(l / 60, u / 60, 2, p + 5)))
          : P(0, 70, f - (240 + 60 * F(l / 300, u / 300, 2, p + 3))) *
            (1 - P(0.9, 1.8, T));
      if (
        (E.copy(m.rockDark).lerp(
          m.rock,
          L(0.4 + 0.5 * F(l / 90, u / 90, 2, p + 11), 0, 1),
        ),
        E.lerp(D ? m.snowFresh : m.snow, h ? 0 : O),
        h &&
          (f < e.waterLevel - 0.5
            ? E.copy(m.seabed)
            : E.copy(m.isleSand)
                .lerp(m.isle, P(e.waterLevel + 0.6, e.waterLevel + 5, f))
                .lerp(m.rockDark, 0.35 * P(0.7, 1.4, T))),
        m.jungle &&
          E.lerp(
            m.jungle,
            0.88 *
              (1 - P(0.82, 1.65, T + 0.22 * F(l / 70, u / 70, 2, p + 5))) *
              (1 - P(300, 520, f)),
          ),
        a)
      ) {
        if (
          (E.setHex(6648903),
          E.lerp(m.rock, 0.6 * P(0.35, 1.3, T)),
          E.multiplyScalar(0.85 + 0.28 * F(l / 45, u / 45, 3, p + 11)),
          i)
        ) {
          let t = e.cellIndex(L(l, -c, c), L(u, -c, c)) * 3,
            r = P(0, 130, n);
          E.setRGB(
            i[t] * (1 - r) + E.r * r,
            i[t + 1] * (1 - r) + E.g * r,
            i[t + 2] * (1 - r) + E.b * r,
          );
        }
      } else s && pt(E, l, u, f - y, T, n);
      (E.lerp(
        m.haze,
        s ? 0.06 + 0.1 * P(300, 1400, n) : 0.2 + 0.22 * P(150, 1100, n),
      ),
        S.push(l, f, u),
        w.push(-g * x, x, -_ * x),
        C.push(E.r, E.g, E.b));
    }
  }
  for (let e = 0; e < d.length - 1; e++) {
    let t = e * f,
      n = (e + 1) * f;
    for (let e = 0; e < f; e++) {
      let r = (e + 1) % f;
      T.push(t + e, n + r, n + e, t + e, t + r, n + r);
    }
  }
  let D = new l();
  (D.setAttribute(`position`, new x(S, 3)),
    D.setAttribute(`normal`, new x(w, 3)),
    D.setAttribute(`color`, new x(C, 3)),
    D.setIndex(T),
    D.computeBoundingSphere(),
    D.computeBoundingBox());
  let O = new o({
    vertexColors: !0,
    flatShading: !0,
    roughness: 0.98,
    metalness: 0,
  });
  if (
    (ge(O, r, {
      key: s ? `terrain-surround-gwenv` : `terrain-surround-v5`,
      detail: a ? 0.18 : 0.055,
      cliff: s ? 0.25 : 0.9,
      sun: !1,
      smoothFar: s ? [0, 1] : [95, 330],
    }),
    s)
  ) {
    let e = a ? (j()?.far ?? 4e3) : 4e3;
    ve(O, { haze: 0.18, far: e, from: Math.min(1800, e * 0.78) });
  }
  let k = new n(D, O);
  return (
    (k.name = `terrainSurround`),
    (k.castShadow = !1),
    (k.receiveShadow = !1),
    (k.matrixAutoUpdate = !1),
    k.updateMatrix(),
    {
      mesh: k,
      heightAt: b,
      floor: y,
      dispose() {
        (D.dispose(), O.dispose());
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
      r = L((i[e] - t) / 2.2, 0, 1),
      c = L((a[e] - t) / 6, 0, 1),
      l = L((o[e] - t) / 16, 0, 1);
    s[e] = L(1 - 0.36 * r - 0.3 * c - 0.24 * l, 0.38, 1);
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
      let n = (i + L(r, 0, t - 1)) * 3;
      ((s[0] += e[n]), (s[1] += e[n + 1]), (s[2] += e[n + 2]));
    }
    for (let r = 0; r < t; r++) {
      let c = (i + r) * 3;
      ((a[c] = s[0] / o), (a[c + 1] = s[1] / o), (a[c + 2] = s[2] / o));
      let l = (i + L(r + n + 1, 0, t - 1)) * 3,
        u = (i + L(r - n, 0, t - 1)) * 3;
      ((s[0] += e[l] - e[u]),
        (s[1] += e[l + 1] - e[u + 1]),
        (s[2] += e[l + 2] - e[u + 2]));
    }
  }
  for (let e = 0; e < t; e++) {
    let r = [0, 0, 0];
    for (let i = -n; i <= n; i++) {
      let n = (L(i, 0, t - 1) * t + e) * 3;
      ((r[0] += a[n]), (r[1] += a[n + 1]), (r[2] += a[n + 2]));
    }
    for (let s = 0; s < t; s++) {
      let c = (s * t + e) * 3;
      ((i[c] = r[0] / o), (i[c + 1] = r[1] / o), (i[c + 2] = r[2] / o));
      let l = (L(s + n + 1, 0, t - 1) * t + e) * 3,
        u = (L(s - n, 0, t - 1) * t + e) * 3;
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
    for (let r = -n; r <= n; r++) s += e[o + L(r, 0, t - 1)];
    for (let i = 0; i < t; i++)
      ((r[o + i] = s / a),
        (s += e[o + L(i + n + 1, 0, t - 1)] - e[o + L(i - n, 0, t - 1)]));
  }
  for (let e = 0; e < t; e++) {
    let o = 0;
    for (let i = -n; i <= n; i++) o += r[L(i, 0, t - 1) * t + e];
    for (let s = 0; s < t; s++)
      ((i[s * t + e] = o / a),
        (o +=
          r[L(s + n + 1, 0, t - 1) * t + e] - r[L(s - n, 0, t - 1) * t + e]));
  }
  return i;
}
