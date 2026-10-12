/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
function e(e, t) {
  if (!t || e.metalness > 0.1) return e;
  let { x: n, y: r, z: i } = t;
  return (
    (e.onBeforeCompile = (e) => {
      ((e.uniforms.workshopOrigin = { value: [n, r, i] }),
        (e.vertexShader =
          `varying vec3 workshopPosition;
` + e.vertexShader),
        (e.vertexShader = e.vertexShader.replace(
          `#include <project_vertex>`,
          `
   vec4 workshopPoint=vec4(transformed,1.0);
   #ifdef USE_INSTANCING
    workshopPoint=instanceMatrix*workshopPoint;
   #endif
   workshopPosition=(modelMatrix*workshopPoint).xyz;
   #include <project_vertex>`,
        )),
        (e.fragmentShader =
          `varying vec3 workshopPosition;
uniform vec3 workshopOrigin;
` + e.fragmentShader),
        (e.fragmentShader = e.fragmentShader.replace(
          `#include <color_fragment>`,
          `
   #include <color_fragment>
   vec3 wp=workshopPosition-workshopOrigin;
   // Only the shell's vertical wall bands, not floors, courtyard or furniture.
   vec3 face=abs(normalize(cross(dFdx(workshopPosition),dFdy(workshopPosition))));
   float shell=max(step(10.55,abs(wp.x))*step(abs(wp.x),11.01)*step(abs(wp.z),9.01),
                   step(8.55,abs(wp.z))*step(abs(wp.z),9.01)*step(abs(wp.x),11.01));
   float finish=shell*step(.08,wp.y)*step(wp.y,6.30)*step(face.y,.2);
   float along=face.x>face.z?wp.z:wp.x;
   vec2 course=vec2(along/.40,wp.y/.20);
   float row=floor(course.y);course.x+=mod(row,2.0)*.5;
   vec2 cell=fract(course),aa=max(fwidth(course),vec2(.001));
   vec2 edge=smoothstep(vec2(.035)-aa,vec2(.035)+aa,min(cell,1.0-cell));
   float brick=edge.x*edge.y;
   float variation=fract(sin(dot(vec2(floor(course.x),row),vec2(127.1,311.7)))*43758.5453);
   vec3 tint=mix(vec3(1.32,.87,.65),vec3(1.03,1.02,.96),step(3.2,wp.y));
   vec3 masonry=diffuseColor.rgb*tint*(.91+.14*variation);
   vec3 mortar=diffuseColor.rgb*vec3(.68,.69,.65);
   diffuseColor.rgb=mix(diffuseColor.rgb,mix(mortar,masonry,brick),finish);
  `,
        )));
    }),
    (e.customProgramCacheKey = () => `salient-workshop-masonry-1`),
    e
  );
}
export { e as t };
//# sourceMappingURL=workshop-finish-_6cKd7K1.js.map
