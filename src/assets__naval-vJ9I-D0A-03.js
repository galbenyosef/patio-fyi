// assets__naval-vJ9I-D0A 03 — box
// Lines 553-831 of readable/assets__naval-vJ9I-D0A.pretty.js (statement-aligned).
function D(e, t, n, r, i = 1) {
  let a = (e, a, o) => [t + e * i, n + a * i, r + o * i];
  e.tbox(
    t - 7 * i,
    t + 5 * i,
    n - 0.6 * i,
    n + 0.7 * i,
    1.7 * i,
    1.1 * i,
    T.jet,
    0,
    1.5 * i,
    r,
  );
  for (let [t, n] of [
    [
      [5, -0.6, -0.85],
      [5, -0.6, 0.85],
    ],
    [
      [5, -0.6, 0.85],
      [5, 0.7, 0.55],
    ],
    [
      [5, 0.7, 0.55],
      [5, 0.7, -0.55],
    ],
    [
      [5, 0.7, -0.55],
      [5, -0.6, -0.85],
    ],
  ])
    e.q(a(...t), a(...n), a(9, 0, 0), a(9, 0, 0), T.jet);
  e.tbox(
    t + 1.6 * i,
    t + 4.6 * i,
    n + 0.7 * i,
    n + 1.25 * i,
    0.9 * i,
    0.45 * i,
    T.glass,
    0.7 * i,
    1.1 * i,
    r,
  );
  for (let t of [-1, 1])
    (e.q(
      a(-5.5, 0, t * 0.8),
      a(1.8, 0, t * 0.8),
      a(-3.2, 0, t * 5.6),
      a(-5.8, 0, t * 5.6),
      T.jet,
    ),
      e.q(
        a(-7.2, 0, t * 0.7),
        a(-5, 0, t * 0.7),
        a(-6.4, 0, t * 3.1),
        a(-7.4, 0, t * 3.1),
        T.jet,
      ),
      e.q(
        a(-6.9, 0.7, t * 0.55),
        a(-4.9, 0.7, t * 0.55),
        a(-6.1, 2.9, t * 1.35),
        a(-7.1, 2.9, t * 1.35),
        T.jet,
      ));
}
function O(e, t, n, r) {
  (e
    .tbox(t - 3, t + 3.2, n, n + 2.6, 2.8, 2.2, T.jet, 0.6, 1.4, r)
    .box(t + 1.6, n + 1.3, r - 1, t + 2.3, n + 2.1, r + 1, T.glass),
    e
      .box(t - 10, n + 1.3, r - 0.3, t - 3, n + 2, r + 0.3, T.jet)
      .box(t - 10.4, n + 1.6, r - 0.1, t - 9.2, n + 4, r + 0.1, T.jet),
    e
      .cyl(t, n + 2.6, r, 0.25, 0.7, `y`, T.dark)
      .box(t - 6.5, n + 3.3, r - 0.2, t + 6.5, n + 3.4, r + 0.2, T.dark)
      .box(t - 0.2, n + 3.3, r - 6.5, t + 0.2, n + 3.4, r + 6.5, T.dark));
}
function se(e) {
  (e.hull([
    [-112, 14.5, 13.5, 4, -8],
    [-70, 15.5, 14.8, 4, -8.5],
    [40, 15.5, 14.8, 4, -8.5],
    [80, 13, 10, 4.5, -7.8],
    [98, 8, 3.5, 5, -6.5],
    [108, 3, 0.5, 5.6, -4],
    [112, 0.6, 0, 6, -2],
  ]),
    e.tbox(-112, 96, 3.8, 17.4, 29, 31.5, T.hull, 0, 4));
  for (let t of [-1, 1])
    e.q(
      [94, 3.8, t * 14.2],
      [112, 5.8, t * 0.6],
      [112, 17.4, t * 9],
      [92, 17.4, t * 18],
      T.hull,
    );
  (e.q(
    [112, 5.8, -0.6],
    [112, 5.8, 0.6],
    [112, 17.4, 9],
    [112, 17.4, -9],
    T.hull,
  ),
    e.box(-112.35, 0.6, -8, -111.9, 10.5, 8, T.dark));
  for (let t of [-1, 1])
    e.box(-40, 9, t * 15.3 - 0.3, -24, 15, t * 15.3 + 0.3, T.dark);
  (E(e, 70, 8.5, 14, 15.45, 3.2), e.box(-115, 17.4, -18, 92, 18.2, 18, T.deck));
  let t = [
    [92, -18],
    [112, -9],
    [112, 9],
    [92, 18],
  ];
  e.q(...t.map(([e, t]) => [e, 18.2, t]), T.deck).q(
    ...t.map(([e, t]) => [e, 17.4, t]),
    T.deck,
  );
  for (let n = 0; n < 4; n++) {
    let [r, i] = t[n],
      [a, o] = t[(n + 1) % 4];
    e.q([r, 17.4, i], [a, 17.4, o], [a, 18.2, o], [r, 18.2, i], T.hull);
  }
  e.box(-110, 18.21, -0.4, 108, 18.26, 0.4, T.white);
  for (let t of [-1, 1])
    e.box(-114, 18.21, t * 17.2 - 0.2, 92, 18.25, t * 17.2 + 0.2, T.white);
  for (let t = 0; t < 6; t++)
    e.box(-96 + t * 30, 18.21, -13, -91 + t * 30, 18.26, -8, T.white);
  (e.box(-8, 18.21, 2, 60, 18.25, 2.5, T.yellow),
    e
      .box(-64, 18.2, 15.5, -48, 18.32, 19.5, T.dark)
      .box(-30, 18.2, -19.5, -14, 18.32, -15.5, T.dark),
    e
      .tbox(-8, 40, 18.2, 28, 7.5, 6.5, T.sup, 1, 3, 13.5)
      .tbox(2, 34, 28, 33, 6.5, 5.8, T.sup, 0, 2, 13.5),
    e
      .box(32.4, 30, 10.4, 33.3, 31.3, 16.6, T.glass)
      .box(36.2, 22, 10, 37.2, 23.2, 17, T.glass),
    e.q(
      [37.6, 20.5, 11],
      [37.6, 20.5, 16],
      [36.5, 25, 16],
      [36.5, 25, 11],
      T.spy,
    ),
    e
      .tbox(-6, 6, 28, 34.5, 5, 4.2, T.sup, 0.6, 0.6, 13.5)
      .box(-4, 34.5, 11.8, 4, 35.3, 15.2, T.dark),
    e
      .tbox(14, 26, 33, 44, 5, 1.6, T.dark, 4, 4, 13.5)
      .box(18.5, 40, 10.5, 21.5, 41.2, 16.5, T.dark)
      .cyl(20, 44, 13.5, 0.22, 9, `y`, T.dark)
      .cyl(20, 52.5, 13.5, 0.7, 0.9, `y`, T.white),
    e
      .box(103, 15.2, 8.5, 112, 18.2, 13.5, T.hull)
      .cyl(108, 18.2, 11, 1, 1.6, `y`, T.sup)
      .cyl(108, 19.8, 11, 0.6, 1.1, `y`, T.white),
    e
      .box(-117, 15.2, -15, -110, 18.2, -9, T.hull)
      .cyl(-113, 18.2, -12, 1, 1.6, `y`, T.sup)
      .cyl(-113, 19.8, -12, 0.6, 1.1, `y`, T.white));
  for (let t = 0; t < 4; t++) O(e, -90 + t * 28, 18.25, -10.5);
  for (let t = 0; t < 3; t++) D(e, 50 + t * 17, 19.3, -9, 1);
  (D(e, 60, 19.3, 7, 1), e.box(0, 18.2, 6, 3, 19.4, 8, T.yellow));
}
function ce(e) {
  let t = ae();
  if (e === `destroyer`) oe(t, { L: 150, B: 17, k: 1, funnels: 2 });
  else if (e === `frigate`)
    oe(t, { L: 120, B: 14, k: 0.9, funnels: 1, frigate: !0 });
  else if (e === `cruiser`)
    oe(t, { L: 172, B: 19, k: 1.1, funnels: 2, cruiser: !0 });
  else if (e === `lhd`) se(t);
  else if (e === `patrol`) {
    (t.hull([
      [-22.5, 3.7, 3.5, 2.3, -1.4],
      [-8, 4, 3.8, 2.4, -1.9],
      [8, 3.6, 3, 2.7, -1.9],
      [16, 2.4, 1.2, 3.1, -1.4],
      [22.5, 0.3, 0, 3.5, -0.4],
    ]),
      t
        .tbox(-7, 8, 2.3, 5.4, 6.2, 5.2, T.sup, 0, 1.8)
        .box(-5, 3.9, -2.95, 5, 4.7, 2.95, T.glass),
      t.q(
        [7.2, 3.9, -2.4],
        [7.2, 3.9, 2.4],
        [6.5, 5, 2.4],
        [6.5, 5, -2.4],
        T.glass,
      ),
      t
        .box(-5, 5.4, -2.4, 2, 5.9, 2.4, T.sup)
        .cyl(-1, 5.4, 0, 0.12, 4.6, `y`, T.dark)
        .box(-1.9, 8, -0.2, -0.1, 8.2, 0.2, T.dark)
        .box(-1.2, 8.8, -1.4, -0.8, 9, 1.4, T.dark)
        .cyl(-1, 10, 0, 0.4, 0.5, `y`, T.white),
      t
        .tbox(12, 14.5, 2.9, 4, 1.8, 1.3, T.sup, 0.3, 0.6)
        .cyl(14.5, 3.5, 0, 0.09, 2.6, `x`, T.dark));
    for (let e of [-1, 1])
      t.cyl(-12, 2.3, e * 2.4, 0.12, 1.1, `y`, T.dark).box(
        -12,
        3.3,
        e * 2.4 - 0.07,
        -10.6,
        3.45,
        e * 2.4 + 0.07,
        T.dark,
      );
    (t
      .box(-21.5, 2.3, -1.3, -16, 2.9, 1.3, T.orange)
      .box(-21, 2.9, -0.3, -19.5, 3.4, 0.3, T.dark),
      E(t, 9, 0.9, 1.9, 2.6, 0.8));
  } else
    e === `landing` &&
      (t.hull([
        [-15, 4.5, 4.4, 2.2, -1.5],
        [13, 4.5, 4.4, 2.2, -1.5],
        [15, 4.3, 3.8, 2.2, -0.8],
      ]),
      t
        .box(-15, 2.2, 3.9, 15, 3.4, 4.5, T.hull)
        .box(-15, 2.2, -4.5, 15, 3.4, -3.9, T.hull)
        .box(14.4, 1, -3.9, 15.4, 4.2, 3.9, T.hull),
      t
        .box(-15, 3.4, -4.4, -9, 7, -0.4, T.sup)
        .box(-9.05, 5.8, -4, -8.9, 6.6, -0.8, T.glass)
        .cyl(-12, 7, -2.4, 0.08, 4, `y`, T.dark),
      t
        .box(-6, 2.3, -2.4, 3, 3.8, 2.4, T.green)
        .box(-4, 3.8, -1.4, 0, 4.6, 1.4, T.green)
        .cyl(0, 4.2, 0, 0.12, 4.5, `x`, T.dark)
        .box(4, 2.3, -1.8, 10, 4.4, 1.8, T.jet));
  return t.geometry();
}
function le() {
  let e = ae();
  return (D(e, 0, 0, 0, 1), e.geometry());
}
var ue = `
attribute float aSize;
attribute vec4 aColor;
attribute float aHot;
uniform float uScale, uMin;
varying vec4 vColor;
varying float vHot;
#include <fog_pars_vertex>
void main() {
	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
	float dist = max( - mvPosition.z, 1.0 );
	gl_PointSize = aSize > 0.0 ? clamp( aSize * uScale / dist, uMin, 900.0 ) : 0.0;
	gl_Position = projectionMatrix * mvPosition;
	vColor = aColor; vHot = aHot;
	#include <fog_vertex>
}`,
  k = `
#include <common>
#include <fog_pars_fragment>
uniform float uRelief;
varying vec4 vColor;
varying float vHot;
void main() {
	// aHot < 0 marks water foam: a flat ellipse lying on the sea instead of a round puff standing on it
	float flatK = step( vHot, - 0.5 ), hot = max( vHot, 0.0 );
	vec2 q = gl_PointCoord - 0.5; q.y *= mix( 1.0, 3.4, flatK );
	float r = length( q ) * 2.0;
	float a = ( 1.0 - smoothstep( mix( 0.25, 0.05, hot ), 1.0, r ) ) * vColor.a;
	if ( a < 0.004 ) discard;
	vec3 c = vColor.rgb * ( 1.0 + hot * 2.2 * ( 1.0 - r ) );
	gl_FragColor = vec4( c, a );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	vec3 navalClear = gl_FragColor.rgb;
	#include <fog_fragment>
	gl_FragColor.rgb = mix( gl_FragColor.rgb, navalClear, clamp( uRelief + hot * 0.45, 0.0, 1.0 ) );
}`;
