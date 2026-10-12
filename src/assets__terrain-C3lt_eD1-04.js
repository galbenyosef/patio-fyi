// assets__terrain-C3lt_eD1 04 — lerp
// Lines 946-1369 of readable/assets__terrain-C3lt_eD1.pretty.js (statement-aligned).
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
      riverDist: _,
      lakeMask: y,
    } = e,
    b = r * r,
    x = e.opts?.biome === `snow`,
    S = e.opts?.biome === `jungle`,
    C = e.opts?.biome === `tropical`,
    w = e.opts?.biome === `quarry` ? e.quarry : null,
    T = e.opts?.biome === `desert`,
    E = e.island,
    D = (e) => new v(e),
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
  let ee = D(4155996),
    te = new Float32Array(b * 3),
    k = new v(),
    A = new v(),
    ne = (n | 0) + 11,
    re = (n | 0) + 23,
    j = (n | 0) + 37,
    M = (n | 0) + 41,
    ie = (n | 0) + 53,
    ae = (n | 0) + 67,
    oe = e.lake;
  for (let n = 0; n < r; n++) {
    let s = -a + n * i;
    for (let v = 0; v < r; v++) {
      let y = n * r + v,
        b = -a + v * i,
        S = o[y],
        C = l[y],
        T = u[y],
        D = 1 / Math.sqrt(1 + T * T);
      (v > 0 && v - 1, v < r - 1 && v + 1);
      let se = n > 0 ? n - 1 : n,
        ce = n < r - 1 ? n + 1 : n,
        le = -((o[ce * r + v] - o[se * r + v]) / ((ce - se) * i)) * D,
        de = ue(b / 17 + S / 11, s / 17 - S / 13, ne),
        fe = P(b / 140, s / 140, 2, re),
        pe = ue(b / 6.3, s / 6.3, j),
        me = P(b / 48, s / 48, 2, ie),
        L = P(b / 66, s / 66, 2, ie + 9),
        he = ue(b / 23, s / 23, ie + 17),
        ge = P(b / 420, s / 420, 2, M),
        R = F(v, n, ae) - 0.5,
        _e = S < c - 0.05,
        ve = _[y] - e.riverWidthAt(e.riverPar[y]),
        ye = Math.hypot(b - oe.x, s - oe.z) - oe.r,
        be = Math.min(ve, ye),
        xe = g[y] > 0.02 && g[y] < 0.98 ? 0.9 : 0,
        Se = I(
          N(0.85, 1.28, T + 0.16 * de + 0.1 * R) +
            0.85 * f[y] +
            xe +
            N(150, 205, S - 20 * fe),
          0,
          1,
        ),
        Ce = I(
          Math.max(
            N(0.4, 0.72, T + 0.1 * R),
            N(0.42, 0.66, fe + 0.22 * me + 0.06 * R),
          ),
          0,
          1,
        ),
        z = 1 - N(0.8 + 1.7 * de + 1.4 * R, 5.6 + 3 * de, be),
        we = I(z * N(c + 2.2 + 0.6 * de, c + 0.05, S), 0, 1);
      if (
        (E &&
          (we = Math.max(
            we,
            N(E.r0 + 8, E.r0 + 28, E.radius(b, s) + 14 * de + 5 * R) *
              N(c + 4 + 0.6 * de, c + 2.7, S),
          )),
        _e)
      ) {
        let e = c - S;
        (k.copy(O.sandWet).lerp(O.mud, N(0, 1.1, e)),
          k.lerp(O.mudDeep, N(0.8, 4.8, e)));
      } else {
        let e = I(
          0.2 +
            1.05 * d[y] +
            0.42 * (1 - N(5, 42, Math.max(0, be))) +
            0.26 * fe +
            0.3 * L +
            0.16 * he,
          0,
          1,
        );
        (k.copy(O.grassDry).lerp(O.grassBase, N(0.1, 0.44, e)),
          k.lerp(O.grassLush, 0.8 * N(0.58, 0.95, e)),
          ge > 0
            ? k.lerp(O.grassOchre, 0.46 * I(ge * 1.7, 0, 1) * (1 - 0.75 * e))
            : k.lerp(O.grassCool, 0.42 * I(-ge * 1.5, 0, 1)),
          k.lerp(O.grassOchre, 0.34 * I(L * 1.9, 0, 1) * (1 - 0.6 * e)),
          k.lerp(O.moss, 0.22 * I(-L * 1.9, 0, 1)),
          k.lerp(O.grassAlpine, 0.55 * N(70, 165, S)),
          k.lerp(
            O.moss,
            0.3 * I(0.5 + me, 0, 1) * N(0.55, 0.15, T) * N(0.3, 0.75, e),
          ),
          A.copy(O.dirt).lerp(O.dirtDark, 0.42 + 0.36 * de),
          A.lerp(O.dirtPale, 0.35 * I(0.5 + me, 0, 1)),
          k.lerp(A, 0.9 * Ce));
        let t =
          Math.sin(
            S * 0.85 +
              1.9 * P(b / 70 + S / 34, s / 70 - S / 41, 2, re + 5) +
              0.7 * de,
          ) *
            0.5 +
          0.5;
        (A.copy(O.rockDark).lerp(
          O.rockLight,
          I(0.42 + 0.26 * de + 0.13 * fe + 0.26 * (t - 0.5), 0, 1),
        ),
          A.lerp(O.rockWarm, 0.32 * N(0.55, 0.9, t)),
          f[y] > 0.05 && A.lerp(O.scree, 0.5 * f[y]),
          T < 0.6 && A.lerp(O.moss, 0.3 * (1 - T / 0.6) * I(0.4 + fe, 0, 1)));
        let n =
          N(0, 22, S - (188 + 16 * fe + 46 * Math.max(0, le) + 6 * R)) *
          (1 - N(0.85, 1.6, T));
        if (
          (A.lerp(O.snow, n),
          A.lerp(O.snowShade, n * 0.55 * (1 - D)),
          k.lerp(A, Se),
          w)
        ) {
          let e = w.dist(b, s),
            n = 1 - N(w.pitch * w.steps - 4, w.pitch * w.steps + 30, e);
          (A.copy(O.dirt).lerp(O.dirtDark, I(0.45 + 0.4 * de + 0.2 * R, 0, 1)),
            k.lerp(A, n * I(0.62 + 0.3 * me + 0.2 * R, 0, 0.92)));
          let r = w.faceMask[y];
          r > 0 &&
            (A.copy(O.rockDark).lerp(
              O.rockLight,
              I(0.4 + 0.3 * de + 0.25 * (t - 0.5), 0, 1),
            ),
            A.lerp(ee, 0.35 * N(0.35, 0.8, pe * 0.5 + 0.5) * N(0.2, 0.7, t)),
            k.lerp(A, 0.9 * r));
        }
        we > 0 &&
          (A.copy(O.sand).lerp(O.sandWet, I((c + 1.5 - S) / 1.6, 0, 1)),
          A.lerp(O.dirtPale, 0.18 * I(0.5 + de, 0, 1)),
          k.lerp(A, we * 0.95));
      }
      if (x && !_e) {
        let e = I(
          1.02 -
            N(0.78, 1.35, T + 0.1 * de + 0.08 * R) -
            0.16 * I(L * 1.6 - 0.35, 0, 1) * N(0.25, 0.6, T),
          0,
          1,
        );
        (A.copy(O.snow).lerp(
          O.snowShade,
          I(
            0.1 +
              0.34 * d[y] +
              0.3 * Math.max(0, -le) * 2.2 +
              0.1 * fe +
              0.06 * pe,
            0,
            0.8,
          ),
        ),
          k.lerp(A, 0.97 * e),
          be < 5 && k.lerp(O.ice, 0.55 * (1 - N(0.5, 5, be))));
      }
      if (
        (h[y] &&
          (A.copy(O.fordGravel).lerp(O.fordWet, I((c + 0.7 - S) / 1.5, 0, 1)),
          A.lerp(O.rockLight, 0.26 * I(0.5 + pe, 0, 1)),
          k.lerp(A, 0.88 * (0.55 + 0.45 * I(0.5 + de, 0, 1)))),
        C < 9 &&
          (A.copy(O.shoulder).lerp(O.dirtDark, 0.16 + 0.2 * de),
          k.lerp(A, 0.8 * N(6.4, 4.5, C)),
          A.copy(O.road).lerp(
            O.roadLight,
            I(0.5 + 0.28 * de + 0.18 * pe, 0, 1),
          ),
          S < c + 0.1 && A.lerp(O.mud, 0.4),
          k.lerp(A, N(3.35, 2.85, C)),
          k.lerp(
            O.roadRut,
            0.3 * (1 - N(0.7, 1.6, Math.abs(C - 1.55))) * (1 - N(2.6, 3.2, C)),
          )),
        p[y] > 0.02)
      ) {
        let e = I(
          0.4 + 0.26 * pe + 0.3 * ue(b / 1.75, s / 1.75, j + 9) + 0.24 * R,
          0,
          1,
        );
        (A.copy(O.pad).lerp(O.padDark, e),
          A.lerp(O.padPale, 0.5 * N(0.6, 0.96, e)),
          A.lerp(O.padRut, 0.55 * (m ? m[y] : 0)));
        let t = I(
          p[y] +
            0.3 * pe +
            0.26 * ue(b / 3.2, s / 3.2, j + 11) +
            0.16 * R -
            0.17,
          0,
          1,
        );
        k.lerp(A, 0.95 * N(0.05, 0.38, t));
      }
      if (x && (C < 6.4 || p[y] > 0.02)) {
        let e = Math.max(N(6.4, 3.4, C), N(0.05, 0.38, p[y]));
        (A.copy(O.snow).lerp(O.slush, I(0.42 + 0.3 * pe + 0.2 * R, 0, 1)),
          k.lerp(A, 0.84 * e));
        let t =
          C < 3.2
            ? 1 - N(0.5, 1.3, Math.abs(C - 1.55))
            : (m ? m[y] : 0) * N(0.4, 0.9, p[y]);
        k.lerp(O.slushDark, 0.62 * t * (0.7 + 0.3 * de));
      }
      let Te = 1 + 0.085 * ge + 0.055 * me - 0.05 * fe,
        Ee = (0.95 + 0.05 * pe) * t[y] * Te * (1 - 0.09 * N(0.6, 1.6, T));
      ((te[y * 3] = k.r * Ee),
        (te[y * 3 + 1] = k.g * Ee),
        (te[y * 3 + 2] = k.b * Ee));
    }
  }
  return te;
}
