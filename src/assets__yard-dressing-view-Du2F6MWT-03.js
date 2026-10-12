// assets__yard-dressing-view-Du2F6MWT 03 — rough
// Lines 583-836 of readable/assets__yard-dressing-view-Du2F6MWT.pretty.js (statement-aligned).
var q = {
    mulch: () =>
      je(
        `mulch`,
        (e, t, n) => {
          Ne(
            e,
            t,
            n,
            `#4a2a1a`,
            [`#6a3a22`, `#3a1e12`, `#7a4a2a`, `#2a160c`, `#5a3220`],
            21,
            9e3,
            [2, 9],
          );
        },
        { rough: 1 },
      ),
    redMulch: () =>
      je(
        `redmulch`,
        (e, t, n) => {
          Ne(
            e,
            t,
            n,
            `#6a2418`,
            [`#8a3020`, `#4a1a10`, `#9a3a26`, `#5a1e14`],
            22,
            9e3,
            [2, 9],
          );
        },
        { rough: 1 },
      ),
    blackMulch: () =>
      je(
        `blackmulch`,
        (e, t, n) => {
          Ne(
            e,
            t,
            n,
            `#221a16`,
            [`#342820`, `#161210`, `#403024`, `#2a201a`],
            23,
            9e3,
            [2, 9],
          );
        },
        { rough: 1 },
      ),
    soil: () =>
      je(
        `soil`,
        (e, t, n) => {
          Ne(
            e,
            t,
            n,
            `#4a3524`,
            [`#3a2818`, `#5a4230`, `#2e2014`, `#6a5038`],
            24,
            2e4,
            [1, 3],
          );
        },
        { rough: 1 },
      ),
    gravel: () =>
      je(
        `gravel`,
        (e, t, n) => {
          Ne(
            e,
            t,
            n,
            `#9a948a`,
            [`#b8b2a8`, `#7a746a`, `#c8c2b8`, `#6a645c`, `#a89a88`],
            25,
            16e3,
            [2, 6],
          );
        },
        { rough: 0.95 },
      ),
    peaGravel: () =>
      je(
        `peagravel`,
        (e, t, n) => {
          Ne(
            e,
            t,
            n,
            `#b09a7a`,
            [`#c8b090`, `#8a7458`, `#d8c4a4`, `#9a8a70`, `#e0d0b8`],
            26,
            14e3,
            [3, 7],
          );
        },
        { rough: 0.9 },
      ),
    riverRock: () =>
      je(
        `riverrock`,
        (e, t, n) => {
          let r = U(27);
          ((e.fillStyle = `#6a645a`), e.fillRect(0, 0, t, n));
          for (let i = 0; i < 900; i++) {
            let i = 0.6 + r() * 0.6;
            ((e.fillStyle = `rgb(${(150 * i) | 0},${(140 * i) | 0},${(126 * i) | 0})`),
              e.beginPath(),
              e.ellipse(
                r() * t,
                r() * n,
                6 + r() * 12,
                4 + r() * 8,
                r() * 3,
                0,
                Math.PI * 2,
              ),
              e.fill());
          }
        },
        { rough: 0.7 },
      ),
    concrete: () =>
      je(
        `concrete`,
        (e, t, n) => {
          Ne(
            e,
            t,
            n,
            `#b4b0a8`,
            [`#a8a49c`, `#c0bcb4`, `#9c988f`, `#bcb8b0`],
            28,
            3e4,
            [1, 2],
          );
        },
        { rough: 0.92 },
      ),
    asphalt: () =>
      je(
        `asphalt`,
        (e, t, n) => {
          Ne(
            e,
            t,
            n,
            `#4a4a49`,
            [`#383838`, `#5a5a58`, `#666360`, `#404040`, `#6e6a64`],
            29,
            4e4,
            [1, 2],
          );
        },
        { rough: 0.95 },
      ),
  },
  tt = class {
    constructor() {
      this.sets = new Map();
    }
    add(e, t, n, r, i, a, o, s, c, l = c, d = c, f = null) {
      let p = e.uuid + t.uuid;
      this.sets.has(p) ||
        this.sets.set(p, { geo: e, m: t, mats: [], cols: [] });
      let m = this.sets.get(p);
      (m.mats.push(
        new u().compose(
          new A(n, r, i),
          new S().setFromEuler(new ee(a, o, s)),
          new A(c, l, d),
        ),
      ),
        m.cols.push(f));
    }
    flush(e, { cast: t = !0 } = {}) {
      for (let { geo: n, m: r, mats: i, cols: a } of this.sets.values()) {
        let o = new E(n, r, i.length);
        (i.forEach((e, t) => {
          (o.setMatrixAt(t, e), a[t] != null && o.setColorAt(t, new y(a[t])));
        }),
          o.instanceColor && (o.instanceColor.needsUpdate = !0),
          (o.castShadow = t),
          (o.receiveShadow = !0),
          e.add(o));
      }
      this.sets.clear();
    }
  },
  nt = {},
  rt = () =>
    (nt.leaflet ??= (() => {
      let e = new k();
      (e.moveTo(0, 0),
        e.quadraticCurveTo(0.45, 0.45, 0, 1),
        e.quadraticCurveTo(-0.45, 0.45, 0, 0));
      let t = new oe(e, 3);
      return (t.translate(0, -0.2, 0), t);
    })()),
  it = (e) =>
    (nt[`petals` + e] ??= (() => {
      let t = new k();
      for (let n = 0; n <= 36; n++) {
        let r = (n / 36) * Math.PI * 2,
          i = 0.35 + 0.65 * Math.abs(Math.cos((r * e) / 2)),
          a = Math.cos(r) * i * 0.5,
          o = Math.sin(r) * i * 0.5;
        n ? t.lineTo(a, o) : t.moveTo(a, o);
      }
      let n = new oe(t);
      return (n.rotateX(-Math.PI / 2), n);
    })()),
  at = () =>
    (nt.tulip ??= new n(
      [
        [0, 0],
        [0.28, 0.12],
        [0.42, 0.45],
        [0.4, 0.85],
        [0.3, 1],
      ].map(([e, t]) => new _(e, t)),
      7,
    )),
  ot = () => (nt.ball ??= new T(1, 1)),
  st = () => (nt.pebble ??= new T(1, 0)),
  ct = () => (nt.stem ??= new c(0.5, 0.5, 1, 4).translate(0, 0.5, 0)),
  lt = () =>
    (nt.brick ??= (() => {
      let e = new k();
      (e.moveTo(-0.5, -0.5),
        e.lineTo(0.5, -0.5),
        e.lineTo(0.5, 0.5),
        e.lineTo(-0.5, 0.5),
        e.lineTo(-0.5, -0.5));
      let t = new re(e, {
        depth: 0.8,
        bevelEnabled: !0,
        bevelSize: 0.08,
        bevelThickness: 0.08,
        bevelSegments: 1,
      });
      return (
        t.rotateX(-Math.PI / 2),
        t.translate(0, 0.08, 0),
        t.scale(1 / 1.16, 1 / 0.96, 1 / 1.16),
        t
      );
    })()),
  ut = (e) => H(e, 0.75, 0, { side: 2 });
