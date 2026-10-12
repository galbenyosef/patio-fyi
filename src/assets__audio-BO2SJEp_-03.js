// assets__audio-BO2SJEp_ 03 — startswith
// Lines 945-997 of readable/assets__audio-BO2SJEp_.pretty.js (statement-aligned).
function Ce(e) {
  return e.startsWith(`gun`)
    ? `gun`
    : e.startsWith(`footstep`) || e === `jump` || e === `land`
      ? `foot`
      : e.startsWith(`explosion`) || e === `collapse`
        ? `explosion`
        : e.startsWith(`impact`) ||
            e === `ricochet` ||
            e === `whizz` ||
            e === `crack` ||
            e.startsWith(`reload`) ||
            e === `mag_out` ||
            e === `mag_in` ||
            e === `bolt` ||
            e === `dry_fire` ||
            e === `body_fall`
          ? `impact`
          : e.startsWith(`ui`) ||
              e === `hit_confirm` ||
              e === `kill_headshot` ||
              e === `damage` ||
              e === `death` ||
              e === `heartbeat`
            ? `ui`
            : e.startsWith(`vehicle`)
              ? `vehicle`
              : `ambience`;
}
function we(e, t) {
  let n = e.modules.get(`terrain`),
    r = n?.getScatter?.()?.trees ?? [],
    i = null,
    a = 45;
  for (let e of r) {
    let n = Math.hypot(e.x - t[0], e.z - t[2]);
    n < a && ((i = e), (a = n));
  }
  for (let n of e.modules.get(`demo`)?.getDefinition?.()?.objects ?? []) {
    if (n.material !== `orchard`) continue;
    let e = Math.hypot(n.x - t[0], n.z - t[2]);
    e < a && ((i = n), (a = e));
  }
  let o = n?.getMaterialAt?.(t[0], t[2]),
    s = e.world.map.raycast(t, [0, 1, 0], 12),
    c = !!s && s.colliderId != null && s.colliderId !== `terrain`;
  return {
    foliage: i ? Math.max(0, 1 - a / 45) : 0,
    sheltered: c,
    vegetation: +!![`grass`, `dirt`].includes(o),
    birdPos: i ? [i.x, (i.y0 ?? i.y ?? t[1]) + 5, i.z] : null,
  };
}
