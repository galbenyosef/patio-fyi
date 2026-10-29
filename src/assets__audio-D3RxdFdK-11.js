// assets__audio-D3RxdFdK 11 — map
// Lines 2817-2925 of readable/assets__audio-D3RxdFdK.pretty.js (statement-aligned).
function rt(e, t, n, r) {
  if (
    ![e, t, r].every(
      (e) => Array.isArray(e) && e.length === 3 && e.every(Number.isFinite),
    ) ||
    !Number.isFinite(n) ||
    n <= 0
  )
    return null;
  let i = Math.hypot(...t);
  if (i < 0.001) return null;
  let a = t.map((e) => e / i),
    o = r.reduce((t, n, r) => t + (n - e[r]) * a[r], 0);
  if (o <= 3 || o >= n) return null;
  let s = e.map((e, t) => e + a[t] * o),
    c = Math.hypot(...r.map((e, t) => e - s[t]));
  if (c >= 4) return null;
  if (c < 0.35) {
    let e = c > 0.01 ? s.map((e, t) => (e - r[t]) / c) : [-a[2], 0, a[0]];
    if (c <= 0.01) {
      let t = Math.hypot(...e);
      e = t > 0.001 ? e.map((e) => e / t) : [1, 0, 0];
    }
    ((s = r.map((t, n) => t + e[n] * 0.35)), (c = 0.35));
  }
  return { pos: s, volume: 0.75 * (1 - c / 5), delay: o / 850 };
}
var it = [
    `launcher`,
    `suppressed`,
    `shotgun`,
    `sniper`,
    `dmr`,
    `lmg`,
    `smg`,
    `pistol`,
    `carbine`,
    `ar`,
  ],
  at = [`ar`, `carbine`, `dmr`, `sniper`, `lmg`, `smg`, `pistol`];
function ot(e, t, n) {
  if (!e) return null;
  let r =
    t?.attachments?.muzzle === `suppressor` ||
    (t?.suppressed && t?.attachments?.muzzle === `standard`);
  if (!r && t?.key && n(`gun_own_${t.key}`)) return `gun_own_${t.key}`;
  let i = e;
  return (
    (i === `gun_sniper` || i === `gun_pistol` || (i === `gun_smg` && !r)) &&
      t?.report &&
      n(`${i}_${t.report}`) &&
      (i = `${i}_${t.report}`),
    r &&
      [`gun_ar`, `gun_carbine`, `gun_dmr`, `gun_lmg`, `gun_smg`].includes(i) &&
      (i += `_suppressed`),
    i
  );
}
function st(e, t) {
  if (t == null) return `ar`;
  let n = null;
  if (
    (e &&
      (n = Array.isArray(e)
        ? (e.find((e) => e?.id === t) ?? e.find((e) => e?.name === t) ?? null)
        : (e[t] ?? null)),
    n?.class === `tool` || n?.class === `defib`)
  )
    return null;
  let r = String(
    n?.class ?? n?.type ?? n?.category ?? n?.name ?? t,
  ).toLowerCase();
  for (let e of it) if (r.includes(e)) return e;
  return typeof t == `number` ? at[Math.abs(t | 0) % at.length] : `ar`;
}
function ct(e, t) {
  let n = e.events.on(`squad:callout`, (n) => {
    typeof n?.text != `string` ||
      te(e.world) ||
      (e.modules?.get?.(`player`)?.getLocalEntity?.() &&
        (t.getBus(`master`) * t.getBus(`ui`) <= 0 ||
          t.play(`ui_message`, { volume: 0.35, local: !0 })));
  });
  return () => n?.();
}
var lt =
    /frag|c4|claymore|rocket|rpg|launcher|cannon|destroyed|explosion|shell/i,
  ut = /^squad_(attack|defend|hold|regroup|cancelled)(_[A-Z])?$/;
function dt(e = () => performance.now() / 1e3) {
  let t = new Map();
  return (n, r) => {
    let i = e();
    return i - (t.get(n) ?? -1e9) < r ? !1 : (t.set(n, i), !0);
  };
}
function ft(e = () => performance.now() / 1e3) {
  let t = new Map();
  return {
    pass(n) {
      let r = e(),
        i = t.get(n) ?? [];
      for (i.push(r); i.length && r - i[0] > 3;) i.shift();
      return (t.set(n, i), i.length < 4 ? !1 : ((i.length = 0), !0));
    },
    forget(e) {
      t.delete(e);
    },
  };
}
