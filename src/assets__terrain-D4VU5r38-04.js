// assets__terrain-D4VU5r38 04 — lerp
// Lines 946-1371 of readable/assets__terrain-D4VU5r38.pretty.js (statement-aligned).
function Tt(e, t, n) {
  let {
      n: r,
      res: i,
      half: a,
      heights: o,
      material: s,
      waterLevel: c,
      roadDist: l,
      slope: u,
      flow: d,
      talus: f,
      padMask: p,
      padWear: m,
      fordMask: h,
      plateauMask: g,
      riverDist: v,
      lakeMask: y,
    } = e,
    b = r * r,
    x = e.opts?.biome === `snow`,
    S = e.opts?.biome === `jungle`,
    C = e.opts?.biome === `tropical`,
    w = e.opts?.biome === `quarry` ? e.quarry : null,
    T = e.opts?.biome === `desert`,
    E = e.island,
    D = (e) => new _(e),
    O = {
      grassBase: D(6257224),
      grassCool: D(5007176),
      grassLush: D(7050304),
      grassDry: D(8356432),
      grassOchre: D(9079644),
      grassAlpine: D(6057038),
      moss: D(5533756),
      dirt: D(8612170),
      dirtDark: D(6244916),
      dirtPale: D(10388576),
      rock: D(7236454),
      rockLight: D(9736330),
      rockDark: D(4670784),
      rockWarm: D(8220512),
      scree: D(8025452),
      sand: D(11049590),
      sandWet: D(8221273),
      road: D(10126962),
      roadLight: D(11771268),
      roadRut: D(7167050),
      shoulder: D(10259828),
      pad: D(9274481),
      padDark: D(6642766),
      padPale: D(10721408),
      padRut: D(5721666),
      fordGravel: D(11050117),
      fordWet: D(7105114),
      mud: D(7037769),
      mudDeep: D(3618604),
      snow: D(14081510),
      snowShade: D(11058644),
      ice: D(10467012),
      slush: D(9344153),
      slushDark: D(5988454),
    };
  (S &&
    Object.assign(O, {
      grassBase: D(3562536),
      grassCool: D(2574122),
      grassLush: D(4158755),
      grassDry: D(6055724),
      grassOchre: D(6710314),
      grassAlpine: D(3363374),
      moss: D(2774818),
      dirt: D(8212270),
      dirtDark: D(5255452),
      dirtPale: D(10119749),
      rock: D(8092269),
      rockLight: D(11118485),
      rockDark: D(5e6),
      rockWarm: D(9075295),
      scree: D(9144440),
      sand: D(5589554),
      sandWet: D(3419423),
      road: D(9199416),
      roadLight: D(11039815),
      roadRut: D(6110242),
      shoulder: D(8151614),
      pad: D(8612422),
      padDark: D(5587755),
      padPale: D(10125913),
      padRut: D(4601119),
      fordGravel: D(9076576),
      fordWet: D(5197628),
      mud: D(5194018),
      mudDeep: D(2367249),
    }),
    C &&
      Object.assign(O, {
        grassBase: D(5932851),
        grassCool: D(4616503),
        grassLush: D(6922287),
        grassDry: D(9867590),
        grassOchre: D(10786642),
        grassAlpine: D(5142584),
        moss: D(4224812),
        dirt: D(9067066),
        dirtDark: D(5913127),
        dirtPale: D(11240544),
        rock: D(5723215),
        rockLight: D(8025710),
        rockDark: D(3289390),
        rockWarm: D(6707788),
        scree: D(6446679),
        sand: D(14865582),
        sandWet: D(11772025),
        road: D(13155484),
        roadLight: D(14405810),
        roadRut: D(10589304),
        shoulder: D(12168072),
        pad: D(12365454),
        padDark: D(9471088),
        padPale: D(13879467),
        padRut: D(8484447),
        fordGravel: D(13352863),
        fordWet: D(10260853),
        mud: D(7168065),
        mudDeep: D(3748385),
      }),
    w &&
      Object.assign(O, {
        grassBase: D(4934707),
        grassCool: D(3949104),
        grassLush: D(5265973),
        grassDry: D(6444349),
        grassOchre: D(7229495),
        grassAlpine: D(4736564),
        moss: D(3884592),
        dirt: D(7620143),
        dirtDark: D(4860960),
        dirtPale: D(9068102),
        rock: D(6445650),
        rockLight: D(8747888),
        rockDark: D(3880240),
        rockWarm: D(7623999),
        scree: D(6970705),
        road: D(6050634),
        roadLight: D(7168856),
        roadRut: D(3879982),
        shoulder: D(5917503),
        pad: D(5919305),
        padDark: D(4340790),
        padPale: D(7234906),
        padRut: D(3551018),
      }),
    T &&
      Object.assign(O, {
        grassBase: D(10261362),
        grassCool: D(9078384),
        grassLush: D(9407843),
        grassDry: D(11379075),
        grassOchre: D(11772538),
        grassAlpine: D(9407094),
        moss: D(8881249),
        dirt: D(10127980),
        dirtDark: D(7760468),
        dirtPale: D(11707527),
        rock: D(8748916),
        rockLight: D(10722704),
        rockDark: D(6051920),
        rockWarm: D(9404784),
        scree: D(9735552),
        road: D(10984582),
        roadLight: D(12432284),
        roadRut: D(8747622),
        shoulder: D(11050114),
        pad: D(10787718),
        padDark: D(8485226),
        padPale: D(12103835),
        padRut: D(7300954),
      }),
    T &&
      e.opts?.cinder &&
      Object.assign(O, {
        grassBase: D(5917246),
        grassCool: D(5129276),
        grassLush: D(5523514),
        grassDry: D(6640196),
        grassOchre: D(7033410),
        grassAlpine: D(5392448),
        moss: D(4998198),
        dirt: D(6178360),
        dirtDark: D(4535596),
        dirtPale: D(7362118),
        rock: D(4866620),
        rockLight: D(6182222),
        rockDark: D(3090983),
        rockWarm: D(5915704),
        scree: D(5523520),
        road: D(7234908),
        roadLight: D(8221544),
        roadRut: D(5129790),
        shoulder: D(6181448),
        pad: D(5917762),
        padDark: D(4602675),
        padPale: D(6969934),
        padRut: D(3813675),
        snow: D(6180934),
        snowShade: D(4865848),
      }));
  let k = D(4155996),
    ee = new Float32Array(b * 3),
    A = new _(),
    j = new _(),
    M = (n | 0) + 11,
    te = (n | 0) + 23,
    N = (n | 0) + 37,
    ne = (n | 0) + 41,
    re = (n | 0) + 53,
    ie = (n | 0) + 67,
    ae = e.lake;
  for (let n = 0; n < r; n++) {
    let s = -a + n * i;
    for (let _ = 0; _ < r; _++) {
      let y = n * r + _,
        b = -a + _ * i,
        S = o[y],
        C = l[y],
        T = u[y],
        D = 1 / Math.sqrt(1 + T * T);
      (_ > 0 && _ - 1, _ < r - 1 && _ + 1);
      let oe = n > 0 ? n - 1 : n,
        se = n < r - 1 ? n + 1 : n,
        ce = -((o[se * r + _] - o[oe * r + _]) / ((se - oe) * i)) * D,
        ue = le(b / 17 + S / 11, s / 17 - S / 13, M),
        de = F(b / 140, s / 140, 2, te),
        fe = le(b / 6.3, s / 6.3, N),
        pe = F(b / 48, s / 48, 2, re),
        me = F(b / 66, s / 66, 2, re + 9),
        he = le(b / 23, s / 23, re + 17),
        ge = F(b / 420, s / 420, 2, ne),
        R = I(_, n, ie) - 0.5,
        _e = S < c - 0.05,
        ve = v[y] - e.riverWidthAt(e.riverPar[y]),
        ye = Math.hypot(b - ae.x, s - ae.z) - ae.r,
        be = Math.min(ve, ye),
        xe = g[y] > 0.02 && g[y] < 0.98 ? 0.9 : 0,
        Se = L(
          P(0.85, 1.28, T + 0.16 * ue + 0.1 * R) +
            0.85 * f[y] +
            xe +
            P(150, 205, S - 20 * de),
          0,
          1,
        ),
        Ce = L(
          Math.max(
            P(0.4, 0.72, T + 0.1 * R),
            P(0.42, 0.66, de + 0.22 * pe + 0.06 * R),
          ),
          0,
          1,
        ),
        z = 1 - P(0.8 + 1.7 * ue + 1.4 * R, 5.6 + 3 * ue, be),
        we = L(z * P(c + 2.2 + 0.6 * ue, c + 0.05, S), 0, 1);
      if (
        (E &&
          (we = Math.max(
            we,
            P(E.r0 + 8, E.r0 + 28, E.radius(b, s) + 14 * ue + 5 * R) *
              P(c + 4 + 0.6 * ue, c + 2.7, S),
          )),
        _e)
      ) {
        let e = c - S;
        (A.copy(O.sandWet).lerp(O.mud, P(0, 1.1, e)),
          A.lerp(O.mudDeep, P(0.8, 4.8, e)));
      } else {
        let e = L(
          0.2 +
            1.05 * d[y] +
            0.42 * (1 - P(5, 42, Math.max(0, be))) +
            0.26 * de +
            0.3 * me +
            0.16 * he,
          0,
          1,
        );
        (A.copy(O.grassDry).lerp(O.grassBase, P(0.1, 0.44, e)),
          A.lerp(O.grassLush, 0.8 * P(0.58, 0.95, e)),
          ge > 0
            ? A.lerp(O.grassOchre, 0.46 * L(ge * 1.7, 0, 1) * (1 - 0.75 * e))
            : A.lerp(O.grassCool, 0.42 * L(-ge * 1.5, 0, 1)),
          A.lerp(O.grassOchre, 0.34 * L(me * 1.9, 0, 1) * (1 - 0.6 * e)),
          A.lerp(O.moss, 0.22 * L(-me * 1.9, 0, 1)),
          A.lerp(O.grassAlpine, 0.55 * P(70, 165, S)),
          A.lerp(
            O.moss,
            0.3 * L(0.5 + pe, 0, 1) * P(0.55, 0.15, T) * P(0.3, 0.75, e),
          ),
          j.copy(O.dirt).lerp(O.dirtDark, 0.42 + 0.36 * ue),
          j.lerp(O.dirtPale, 0.35 * L(0.5 + pe, 0, 1)),
          A.lerp(j, 0.9 * Ce));
        let t =
          Math.sin(
            S * 0.85 +
              1.9 * F(b / 70 + S / 34, s / 70 - S / 41, 2, te + 5) +
              0.7 * ue,
          ) *
            0.5 +
          0.5;
        (j
          .copy(O.rockDark)
          .lerp(
            O.rockLight,
            L(0.42 + 0.26 * ue + 0.13 * de + 0.26 * (t - 0.5), 0, 1),
          ),
          j.lerp(O.rockWarm, 0.32 * P(0.55, 0.9, t)),
          f[y] > 0.05 && j.lerp(O.scree, 0.5 * f[y]),
          T < 0.6 && j.lerp(O.moss, 0.3 * (1 - T / 0.6) * L(0.4 + de, 0, 1)));
        let n =
          P(0, 22, S - (188 + 16 * de + 46 * Math.max(0, ce) + 6 * R)) *
          (1 - P(0.85, 1.6, T));
        if (
          (j.lerp(O.snow, n),
          j.lerp(O.snowShade, n * 0.55 * (1 - D)),
          A.lerp(j, Se),
          w)
        ) {
          let e = w.dist(b, s),
            n = 1 - P(w.pitch * w.steps - 4, w.pitch * w.steps + 30, e);
          (j.copy(O.dirt).lerp(O.dirtDark, L(0.45 + 0.4 * ue + 0.2 * R, 0, 1)),
            A.lerp(j, n * L(0.62 + 0.3 * pe + 0.2 * R, 0, 0.92)));
          let r = w.faceMask[y];
          r > 0 &&
            (j
              .copy(O.rockDark)
              .lerp(O.rockLight, L(0.4 + 0.3 * ue + 0.25 * (t - 0.5), 0, 1)),
            j.lerp(k, 0.35 * P(0.35, 0.8, fe * 0.5 + 0.5) * P(0.2, 0.7, t)),
            A.lerp(j, 0.9 * r));
        }
        we > 0 &&
          (j.copy(O.sand).lerp(O.sandWet, L((c + 1.5 - S) / 1.6, 0, 1)),
          j.lerp(O.dirtPale, 0.18 * L(0.5 + ue, 0, 1)),
          A.lerp(j, we * 0.95));
      }
      if (x && !_e) {
        let e = L(
          1.02 -
            P(0.78, 1.35, T + 0.1 * ue + 0.08 * R) -
            0.16 * L(me * 1.6 - 0.35, 0, 1) * P(0.25, 0.6, T),
          0,
          1,
        );
        (j
          .copy(O.snow)
          .lerp(
            O.snowShade,
            L(
              0.1 +
                0.34 * d[y] +
                0.3 * Math.max(0, -ce) * 2.2 +
                0.1 * de +
                0.06 * fe,
              0,
              0.8,
            ),
          ),
          A.lerp(j, 0.97 * e),
          be < 5 && A.lerp(O.ice, 0.55 * (1 - P(0.5, 5, be))));
      }
      if (
        (h[y] &&
          (j.copy(O.fordGravel).lerp(O.fordWet, L((c + 0.7 - S) / 1.5, 0, 1)),
          j.lerp(O.rockLight, 0.26 * L(0.5 + fe, 0, 1)),
          A.lerp(j, 0.88 * (0.55 + 0.45 * L(0.5 + ue, 0, 1)))),
        C < 9 &&
          (j.copy(O.shoulder).lerp(O.dirtDark, 0.16 + 0.2 * ue),
          A.lerp(j, 0.8 * P(6.4, 4.5, C)),
          j
            .copy(O.road)
            .lerp(O.roadLight, L(0.5 + 0.28 * ue + 0.18 * fe, 0, 1)),
          S < c + 0.1 && j.lerp(O.mud, 0.4),
          A.lerp(j, P(3.35, 2.85, C)),
          A.lerp(
            O.roadRut,
            0.3 * (1 - P(0.7, 1.6, Math.abs(C - 1.55))) * (1 - P(2.6, 3.2, C)),
          )),
        p[y] > 0.02)
      ) {
        let e = L(
          0.4 + 0.26 * fe + 0.3 * le(b / 1.75, s / 1.75, N + 9) + 0.24 * R,
          0,
          1,
        );
        (j.copy(O.pad).lerp(O.padDark, e),
          j.lerp(O.padPale, 0.5 * P(0.6, 0.96, e)),
          j.lerp(O.padRut, 0.55 * (m ? m[y] : 0)));
        let t = L(
          p[y] +
            0.3 * fe +
            0.26 * le(b / 3.2, s / 3.2, N + 11) +
            0.16 * R -
            0.17,
          0,
          1,
        );
        A.lerp(j, 0.95 * P(0.05, 0.38, t));
      }
      if (x && (C < 6.4 || p[y] > 0.02)) {
        let e = Math.max(P(6.4, 3.4, C), P(0.05, 0.38, p[y]));
        (j.copy(O.snow).lerp(O.slush, L(0.42 + 0.3 * fe + 0.2 * R, 0, 1)),
          A.lerp(j, 0.84 * e));
        let t =
          C < 3.2
            ? 1 - P(0.5, 1.3, Math.abs(C - 1.55))
            : (m ? m[y] : 0) * P(0.4, 0.9, p[y]);
        A.lerp(O.slushDark, 0.62 * t * (0.7 + 0.3 * ue));
      }
      let Te = 1 + 0.085 * ge + 0.055 * pe - 0.05 * de,
        Ee = (0.95 + 0.05 * fe) * t[y] * Te * (1 - 0.09 * P(0.6, 1.6, T));
      ((ee[y * 3] = A.r * Ee),
        (ee[y * 3 + 1] = A.g * Ee),
        (ee[y * 3 + 2] = A.b * Ee));
    }
  }
  return ee;
}
