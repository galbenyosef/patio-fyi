// assets__workshop-equipment-Dt0qlOLB 01 — add
// Lines 1-41 of readable/assets__workshop-equipment-Dt0qlOLB.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
import { Hn as e, On as t, dt as n } from "./graphics-quality-CrL3qbU3.js";
var r = new URL(`/assets/workshop-equipment-GAR-hOcn.glb`, `` + import.meta.url)
    .href,
  i = new URL(`/assets/workshop-roof-CbuTDhXC.glb`, `` + import.meta.url).href;
function a(t, n) {
  let r = t.clone(!0);
  return (
    (r.name = n.id + `-ventilation-roof`),
    r.position.add(new e(n.x, n.y, n.z)),
    r.traverse((e) => {
      e.isMesh && ((e.castShadow = !0), (e.receiveShadow = !0));
    }),
    r
  );
}
function o(e, r) {
  let i = new n();
  ((i.name = r.id + `-repair-equipment`), i.position.set(r.x, r.y, r.z));
  let a = e.clone(!0);
  (a.traverse((e) => {
    e.isMesh && ((e.castShadow = !0), (e.receiveShadow = !0));
  }),
    i.add(a));
  for (let e of [-6, 5])
    for (let n of [-5.5, 5.5]) {
      let r = new t(16772306, 45, 4.8, 1.05, 0.65, 2);
      ((r.name = `repair-task-light`),
        r.position.set(e, 2.63, n),
        r.target.position.set(e, 0, n),
        (r.castShadow = !1),
        i.add(r, r.target));
    }
  return i;
}
async function s(e, t, n) {
  let s = (n.urbanBuildings ?? []).filter((e) => e.workshop);
  if (!s.length) return;
  let [c, l] = await Promise.all([e.assets.loadGLTF(r), e.assets.loadGLTF(i)]);
  for (let e of s) t.add(o(c.scene, e), a(l.scene, e));
}
