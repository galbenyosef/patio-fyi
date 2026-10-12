// assets__placement-build-C0quzNjY 01 — done
// Lines 1-20 of readable/assets__placement-build-C0quzNjY.pretty.js (statement-aligned).
/*! (c) 2026. All rights reserved. Not licensed for copying, rehosting, modification or redistribution. */
function e(e) {
  let t;
  do t = e.next();
  while (!t.done);
  return t.value;
}
async function t(
  e,
  { yieldTask: t, budgetMs: n = 40, now: r = () => performance.now() } = {},
) {
  if (typeof t != `function`)
    throw TypeError(`Placement construction requires a task scheduler`);
  let i = r();
  for (;;) {
    let a = e.next();
    if (a.done) return a.value;
    r() - i >= n && (await t(), (i = r()));
  }
}
