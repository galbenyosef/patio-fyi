// assets__audio-BO2SJEp_ 09 — find
// Lines 2486-2536 of readable/assets__audio-BO2SJEp_.pretty.js (statement-aligned).
function Ve(e, t) {
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
  for (let e of ze) if (r.includes(e)) return e;
  return typeof t == `number` ? Be[Math.abs(t | 0) % Be.length] : `ar`;
}
function He(e, t) {
  let n = e.events.on(`squad:callout`, (n) => {
    typeof n?.text != `string` ||
      H(e.world) ||
      (e.modules?.get?.(`player`)?.getLocalEntity?.() &&
        (t.getBus(`master`) * t.getBus(`ui`) <= 0 ||
          t.play(`ui_message`, { volume: 0.35, local: !0 })));
  });
  return () => n?.();
}
var Ue =
    /frag|c4|claymore|rocket|rpg|launcher|cannon|destroyed|explosion|shell/i,
  We = /^squad_(attack|defend|hold|regroup|cancelled)(_[A-Z])?$/;
function Ge(e = () => performance.now() / 1e3) {
  let t = new Map();
  return (n, r) => {
    let i = e();
    return i - (t.get(n) ?? -1e9) < r ? !1 : (t.set(n, i), !0);
  };
}
function Ke(e = () => performance.now() / 1e3) {
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
