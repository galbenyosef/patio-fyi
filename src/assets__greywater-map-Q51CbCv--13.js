// assets__greywater-map-Q51CbCv- 13 — filter
// Lines 171677-171700 of readable/assets__greywater-map-Q51CbCv-.pretty.js (statement-aligned).
function lt(e) {
  let t = e.infill.filter((e) => Math.abs(e.z) > 115 || Math.abs(e.x) > 150),
    n = new Set(t.map((e) => e.id)),
    r = (e) => n.has(e?.match(/(?:^|\-)(infill-\d+)(?:-|$)/)?.[1]),
    i = {
      buildings: e.buildings.length,
      objects: e.objects.length,
      props: e.props?.length ?? 0,
      colliders: e.colliderDefs.length,
    };
  return (
    (e.objects = e.objects.filter((e) => !r(e.id))),
    (e.props = (e.props ?? []).filter((e) => !r(e.id))),
    (e.colliderDefs = e.colliderDefs.filter((e) => !r(e.id))),
    (e.buildings = e.buildings.filter((e) => !n.has(e.id))),
    (e.infill = e.infill.filter((e) => !n.has(e.id))),
    (e.perimeterRevision = {
      before: i,
      removed: t.map((e) => ({ ...e })),
      remaining: e.buildings.length,
    }),
    e
  );
}
