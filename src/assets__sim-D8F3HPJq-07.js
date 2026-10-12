// assets__sim-D8F3HPJq 07 — engine
// Lines 1858-1916 of readable/assets__sim-D8F3HPJq.pretty.js (statement-aligned).
var ln = (e, t, n) => {
    let r = t.map((t, n) => t - e[n]),
      i = n.map((t, n) => t - e[n]);
    return [
      r[1] * i[2] - r[2] * i[1],
      r[2] * i[0] - r[0] * i[2],
      r[0] * i[1] - r[1] * i[0],
    ];
  },
  un = (e, t, n) => {
    let r = ln(e, t, n),
      i = 1 / (Math.sqrt(r[0] * r[0] + r[1] * r[1] + r[2] * r[2]) || 1);
    return r.map((e) => e * i);
  };
Object.freeze({ length: 75.3, span: 67.89, height: 19.84 });
var dn = Object.freeze([
    {
      key: `a`,
      name: `A · Bold facets`,
      note: `Broad planes, blunt nose, simplest engine detail`,
      sides: 12,
      engine: 10,
      wheel: 8,
      nose: 1.035,
    },
    {
      key: `b`,
      name: `B · Reference balance`,
      note: `Closer nose profile, rounded shoulders, recessed fans`,
      sides: 20,
      engine: 14,
      wheel: 10,
      nose: 1,
    },
    {
      key: `c`,
      name: `C · Refined low-poly`,
      note: `Finer nose facets, fuller fairings, more engine definition`,
      sides: 24,
      engine: 18,
      wheel: 12,
      nose: 0.985,
    },
  ]),
  fn = {
    skin: 8753045,
    belly: 7437185,
    wing: 9345182,
    edge: 10923956,
    glass: 1320754,
    seam: 5792618,
    tyre: 2106666,
    hub: 6779771,
    strut: 10463660,
    intake: 1383715,
    fan: 3753293,
    exhaust: 4608346,
    mark: 3753550,
  };
