// assets__index-D8RniaPa 16 — booterror
// Lines 5835-5841 of readable/assets__index-D8RniaPa.pretty.js (statement-aligned).
or().catch((e) => {
  (console.error(`[module:core] boot failed:`, e),
    $.dispose?.(),
    ($.bootError = String(e?.message ?? e).slice(0, 300)),
    ($.ready = !0),
    ($.bootFailed = !0));
});
