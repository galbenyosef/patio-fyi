// assets__car-kit-BmG7pAgW 03 — trim
// Lines 561-943 of readable/assets__car-kit-BmG7pAgW.pretty.js (statement-aligned).
var P = {
    L: 4.65,
    W: 2.06,
    H: 1.435,
    wr: 0.33,
    clr: 0.16,
    axles: [1.42, -1.33],
    belt: 0.95,
    hood: 0.9,
    nose: 0.78,
    deck: 0.98,
    ws: [0.78, -0.08],
    roofEnd: -0.98,
    rw: [-1.52],
  },
  F = [
    {
      key: `sedan`,
      name: `Family Sedan`,
      prop: `car_sedan`,
      desc: `Four-door saloon: three-box shape, chrome belt line, alloy wheels.`,
      ...P,
      chromeTrim: !0,
      plate: `GRY 204`,
    },
    {
      key: `hatch`,
      name: `City Hatchback`,
      prop: `car_hatchback`,
      desc: `Short five-door hatch with a steep tailgate and roof spoiler.`,
      L: 4.15,
      W: 2,
      H: 1.485,
      wr: 0.31,
      clr: 0.15,
      axles: [1.3, -1.25],
      belt: 0.95,
      hood: 0.86,
      nose: 0.76,
      deck: 0.98,
      ws: [0.82, 0.02],
      roofEnd: -1.72,
      back: -1.98,
      cPillar: 0.28,
      plate: `CSK 118`,
      seams: [0.86, -0.3, -1.25],
      handles: [-0.05, -0.85],
      extra: (e, t) =>
        k(e, t.paint, 0, t.H + 0, -1.78, t.gw - 0.05, 0.05, 0.28, `paint`),
    },
    {
      key: `wagon`,
      name: `Estate Wagon`,
      prop: `car_wagon`,
      desc: `Long-roof estate with roof rails and faux-wood side panels.`,
      ...P,
      L: 4.79,
      H: 1.465,
      axles: [1.45, -1.4],
      roofEnd: -2.12,
      back: -2.36,
      rw: void 0,
      cPillar: 0.3,
      plate: `WGN 552`,
      seams: [0.83, -0.15, -1.05],
      handles: [0.1, -0.75],
      extra: (e, t) => {
        for (let n of [1, -1]) {
          k(
            e,
            w.chrome,
            n * (t.gw / 2 - 0.05),
            t.H + 0.07,
            -0.6,
            0.04,
            0.04,
            2.8,
          );
          for (let r of [0.7, -1.9])
            k(
              e,
              w.trim,
              n * (t.gw / 2 - 0.05),
              t.H + 0.035,
              r,
              0.06,
              0.05,
              0.08,
            );
          k(e, R(), n * (t.Wb / 2 + 0.006), 0.6, -0.25, 0.01, 0.3, 3.3);
        }
      },
    },
    {
      key: `suv`,
      name: `Trail SUV`,
      prop: `car_suv`,
      desc: `Tall four-by-four: chunky tyres, black arches, roof rack, spare on the tailgate.`,
      L: 4.85,
      W: 2.16,
      H: 1.865,
      wr: 0.39,
      clr: 0.24,
      axles: [1.48, -1.45],
      belt: 1.18,
      hood: 1.1,
      nose: 0.98,
      deck: 1.2,
      ws: [0.95, 0.25],
      roofEnd: -2.2,
      back: -2.4,
      cPillar: 0.3,
      tyreW: 0.3,
      plate: `TRL 870`,
      seams: [1, -0.2, -1.3],
      handles: [0.05, -0.9],
      extra: (e, t) => {
        for (let n of [1, -1])
          for (let r of [1.48, -1.45])
            O(
              e,
              new i(0.47, 0.05, 6, 20, Math.PI)
                .rotateY(Math.PI / 2)
                .translate(n * (t.Wb / 2 + 0.01), 0.39, r),
              w.trim,
            );
        k(e, w.trim, 0, t.H + 0.1, -0.7, t.gw - 0.1, 0.04, 2);
        for (let n of [0.25, -1.65])
          k(e, w.trim, 0, t.H + 0.05, n, t.gw - 0.1, 0.08, 0.05);
        (O(
          e,
          new r(0.36, 0.36, 0.24, 24)
            .rotateX(Math.PI / 2)
            .translate(0, 0.95, t.zr - 0.2),
          w.rubber,
        ),
          k(e, w.trim, 0, 0.35, t.zf + 0.05, t.Wb - 0.3, 0.12, 0.12));
      },
    },
    {
      key: `van`,
      name: `Panel Van`,
      prop: `car_van`,
      desc: `Tall delivery van: short nose, panel sides, sliding door, twin rear doors.`,
      L: 5.25,
      W: 2.22,
      H: 2.1,
      wr: 0.36,
      clr: 0.2,
      axles: [1.75, -1.65],
      belt: 1.12,
      hood: 1.02,
      nose: 0.9,
      deck: 1.15,
      ws: [1.72, 1.05],
      roofEnd: -2.5,
      back: -2.62,
      panelled: !0,
      cabSeats: !0,
      twoSeat: !0,
      cPillar: 0.1,
      plate: `DLV 331`,
      bPillars: [0.62],
      seams: [1.62, 0.6, -0.95, -2.55],
      handles: [0.8, -0.8],
      extra: (t, n) => {
        O(
          t,
          new e(n.gw - 0.2, 0.95, 0.02).rotateX(-0.62).translate(0, 1.6, 1.42),
          w.glass,
          `glass`,
        );
        for (let e of [1, -1])
          (k(
            t,
            w.glass,
            e * (n.gw / 2 + 0.012),
            1.5,
            1,
            0.01,
            0.52,
            0.72,
            `glass`,
          ),
            k(t, w.trim, e * (n.Wb / 2 + 0.01), 1.95, -0.3, 0.02, 0.03, 1.7));
        k(t, w.trim, 0, 1.2, n.zr - 0.004, 0.012, 1.7, 0.01);
        for (let e of [1, -1])
          k(t, w.glass, e * 0.45, 1.6, n.zr - 0.008, 0.62, 0.4, 0.01, `glass`);
      },
    },
    {
      key: `pickup`,
      name: `Work Pickup`,
      prop: `car_pickup`,
      desc: `Crew-cab pickup: open bed with liner, tailgate, towing hitch, light bar.`,
      L: 5.35,
      W: 2.2,
      H: 1.805,
      wr: 0.4,
      clr: 0.28,
      axles: [1.75, -1.6],
      belt: 1.15,
      hood: 1.12,
      nose: 1,
      deck: 1.15,
      ws: [1.05, 0.4],
      roofEnd: -0.62,
      back: -0.72,
      cPillar: 0.14,
      tyreW: 0.3,
      plate: `RDG 419`,
      seams: [1.1, 0, -0.65],
      handles: [0.3, -0.45],
      extra: (e, t) => {
        k(e, w.bed, 0, 1.1, -1.72, t.Wb - 0.22, 0.12, 1.9);
        for (let n of [1, -1])
          k(
            e,
            t.paint,
            n * (t.Wb / 2 - 0.05),
            1.17,
            -1.72,
            0.1,
            0.06,
            1.95,
            `paint`,
          );
        (k(e, w.trim, 0, 1.18, -0.78, t.Wb - 0.2, 0.06, 0.08),
          k(e, w.chrome, 0, 0.42, t.zr - 0.12, 0.1, 0.1, 0.2),
          k(e, w.trim, 0, t.H + 0.07, 0.3, 1.2, 0.08, 0.1));
        for (let n = -3; n <= 3; n++)
          k(e, w.head, n * 0.16, t.H + 0.07, 0.36, 0.12, 0.06, 0.02, `light`);
        for (let n of [1, -1])
          for (let r of [1.75, -1.6])
            O(
              e,
              new i(0.48, 0.05, 6, 20, Math.PI)
                .rotateY(Math.PI / 2)
                .translate(n * (t.Wb / 2 + 0.01), 0.4, r),
              w.trim,
            );
      },
    },
    {
      key: `taxi`,
      name: `Cab`,
      prop: `car_taxi`,
      desc: `Yellow taxi sedan with a roof sign and chequered side stripe.`,
      ...P,
      H: 1.435,
      paintLock: 15909424,
      plate: `TXI 007`,
      extra: (t, n) => {
        k(t, w.trim, 0, n.H + 0.04, -0.5, 0.9, 0.05, 0.3);
        let r = new s({
          map: x(`TAXI`, `#f7f2dc`, `#1a1a1a`),
          emissive: 16773312,
          emissiveIntensity: 0.3,
          emissiveMap: null,
        });
        O(
          t,
          new e(0.85, 0.2, 0.26).translate(0, n.H + 0.16, -0.5),
          [w.white, w.white, w.white, w.white, r, r],
          `light`,
        );
        for (let e of [1, -1])
          k(t, w.checker, e * (n.Wb / 2 + 0.006), 0.66, 0, 0.008, 0.08, 3.4);
      },
    },
    {
      key: `police`,
      name: `Patrol Car`,
      prop: `car_police`,
      desc: `Black-and-white cruiser: light bar, push bar, spotlight, door shields.`,
      ...P,
      L: 4.755,
      paintLock: 1447963,
      plate: `PD 1147`,
      extra: (e, t) => {
        k(e, w.trim, 0, t.H + 0.05, -0.45, 1.3, 0.06, 0.28);
        for (let n of [1, -1])
          k(
            e,
            n > 0 ? w.lightRed : w.lightBlue,
            n * 0.34,
            t.H + 0.12,
            -0.45,
            0.58,
            0.1,
            0.24,
            `light`,
          );
        k(e, w.white, 0, t.H + 0.12, -0.45, 0.1, 0.1, 0.24);
        for (let n of [1, -1])
          (k(e, w.white, n * (t.Wb / 2 + 0.005), 0.66, 0.05, 0.01, 0.46, 1.75),
            k(e, z(), n * (t.Wb / 2 + 0.012), 0.68, 0.2, 0.01, 0.26, 0.22),
            k(
              e,
              w.chrome,
              n * (t.gw / 2 + 0.04),
              t.belt + 0.14,
              0.62,
              0.05,
              0.1,
              0.12,
            ));
        for (let n of [1, -1])
          k(e, w.trim, n * 0.45, 0.55, t.zf + 0.2, 0.07, 0.55, 0.07);
        (k(e, w.trim, 0, 0.72, t.zf + 0.21, 1, 0.07, 0.07),
          k(e, w.trim, 0, 0.42, t.zf + 0.21, 1, 0.07, 0.07));
      },
    },
    {
      key: `boxtruck`,
      name: `Box Truck`,
      prop: `car_boxtruck`,
      desc: `Delivery truck: cab-over-style front, corrugated cargo box, roll-up door.`,
      L: 6.45,
      W: 2.54,
      H: 2.5,
      wr: 0.46,
      clr: 0.3,
      axles: [2.35, -1.8],
      belt: 1.4,
      hood: 1.3,
      nose: 1.15,
      deck: 1.3,
      ws: [2.55, 2.1],
      roofEnd: 1.25,
      back: 1.12,
      cPillar: 0.1,
      tyreW: 0.3,
      cabSeats: !0,
      twoSeat: !0,
      plate: `FRT 660`,
      seams: [2.45, 1.2],
      handles: [1.5],
      extra: (e, t) => {
        (k(e, w.cargo, 0, 1.95, -1.05, 2.54, 2.1, 4.35),
          k(e, w.trim, 0, 0.82, -1.05, 2.3, 0.18, 4.3),
          k(e, w.chrome, 0, 0.55, t.zr + 0.2, 2.3, 0.1, 0.12));
        for (let n = 0; n < 12; n++)
          k(e, w.trim, 0, 1 + n * 0.16, t.zr - 0.006, 2.2, 0.012, 0.01);
        for (let n of [1, -1])
          (k(e, w.tail, n * 1.1, 0.75, t.zr + 0.18, 0.2, 0.12, 0.04, `light`),
            k(e, w.amber, n * 1.22, 2.95, -3.22, 0.06, 0.06, 0.03, `light`));
      },
    },
    {
      key: `coupe`,
      name: `Classic Coupe`,
      prop: null,
      desc: `Old two-door fastback: long hood, chrome bumpers, whitewall tyres (a new extra).`,
      L: 5,
      W: 1.98,
      H: 1.34,
      wr: 0.34,
      clr: 0.16,
      axles: [1.62, -1.35],
      belt: 0.9,
      hood: 0.86,
      nose: 0.74,
      deck: 0.92,
      ws: [0.62, -0.1],
      roofEnd: -0.75,
      rw: [-2.05],
      cPillar: 0.5,
      twoSeat: !0,
      chromeBumpers: !0,
      chromeTrim: !0,
      whitewall: !0,
      plate: `VNT 1968`,
      seams: [0.66, -0.55],
      handles: [-0.35],
      extra: (e, t) => {
        for (let n of [1, -1])
          k(e, w.chrome, n * (t.Wb / 2 + 0.006), 0.62, 0.3, 0.01, 0.03, 4.2);
      },
    },
  ],
  I = null,
  L = null;
