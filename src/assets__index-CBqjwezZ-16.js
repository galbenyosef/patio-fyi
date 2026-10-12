// assets__index-CBqjwezZ 16 — booterror
// Lines 5790-5796 of readable/assets__index-CBqjwezZ.pretty.js (statement-aligned).
or().catch((e) => {
  (console.error(`[module:core] boot failed:`, e),
    $.dispose?.(),
    ($.bootError = String(e?.message ?? e).slice(0, 300)),
    ($.ready = !0),
    ($.bootFailed = !0));
});
