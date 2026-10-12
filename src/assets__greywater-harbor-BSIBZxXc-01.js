// assets__greywater-harbor-BSIBZxXc 01 — angle
// Lines 1-105 of readable/assets__greywater-harbor-BSIBZxXc.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import {
  An as e,
  F as t,
  L as n,
  Lt as r,
  Rt as i,
  U as a,
  _n as o,
  an as s,
  gt as c,
  lt as l,
  mn as u,
  rt as d,
  wn as f,
  zn as p,
  zt as m,
} from "./graphics-quality-BsjABS0s.js";
import { n as h, r as g, t as ee } from "./harbor-land-DePGpw_9.js";
var _ = [
    {
      key: `city`,
      file: `skyline.png`,
      radius: 2900,
      angle: 0,
      arc: 1.95,
      height: 1767,
      baseline: 477 / 724,
    },
    {
      key: `working`,
      file: `working-harbor.png`,
      radius: 3300,
      angle: 1.64,
      arc: 1.9,
      height: 1900,
      baseline: 477 / 724,
    },
    {
      key: `outer`,
      file: `outer-bay.png`,
      radius: 3700,
      angle: -1.64,
      arc: 1.9,
      height: 1820,
      baseline: 477 / 724,
    },
    {
      key: `woods`,
      file: `wooded-headland.png`,
      radius: 2850,
      angle: Math.PI,
      arc: 2,
      height: 1730,
      baseline: 477 / 724,
    },
    {
      key: `port`,
      file: `port.png`,
      radius: 900,
      angle: 0,
      arc: 1.95,
      height: 548,
      baseline: 525 / 724,
    },
  ],
  te = [
    {
      key: `nearWoods`,
      radius: 520,
      angle: 2.22,
      arc: 1.1,
      height: 191,
      baseline: 0.74,
      grounded: !0,
    },
    {
      key: `nearWoods`,
      radius: 740,
      angle: 3.14,
      arc: 1.24,
      height: 306,
      baseline: 0.74,
      grounded: !0,
    },
    {
      key: `nearWoods`,
      radius: 560,
      angle: 4.06,
      arc: 1.1,
      height: 205,
      baseline: 0.74,
      grounded: !0,
    },
  ],
  v = `
uniform sampler2D skyMap;
vec3 skyColor(vec3 direction){
 vec3 d=normalize(direction);float u=.5+atan(d.x,-d.z)/6.2831853;
 float v=clamp(.42+asin(clamp(d.y,-1.,1.))/3.14159265,.001,.999);
 vec3 c=texture2D(skyMap,vec2(u,v)).rgb;
 float blend=.5*(1.-smoothstep(0.,.14,min(u,1.-u)));
 c=mix(c,texture2D(skyMap,vec2(1.-u,v)).rgb,blend);
 return mix(c*vec3(.65,.78,.93),vec3(.035,.060,.11),.12);
}`;
