// assets__ui-hhE6L1u7 09 — note
// Lines 2755-2792 of readable/assets__ui-hhE6L1u7.pretty.js (statement-aligned).
function mr(e, { admin: t = !1 } = {}) {
  let n = e.level === 1 ? `level 1` : `level ${e.level}`;
  return e.earned
    ? {
        state: `✓ EARNED`,
        note: e.level === 1 ? `Available from the start` : `Earned at ${n}`,
      }
    : e.testingAccess
      ? {
          state: `TESTING ACCESS`,
          note: `Available for testing · earn at ${n}`,
        }
      : t && e.done
        ? { state: `ADMIN ACCESS`, note: `Available to admin · earn at ${n}` }
        : {
            state: `LOCKED`,
            note: `${pr(e.have)} / ${pr(e.need)} XP · unlocks at ${n}`,
          };
}
var hr = {
  slate: [3426125, 1515561, 8633281, 12301987],
  ember: [7287848, 2435121, 14918994, 12759963],
  chalk: [13158063, 3160899, 13860935, 12568261],
  moss: [5662027, 2239531, 13088119, 10857377],
  plum: [6509928, 2434607, 14395792, 12168632],
  navy: [3360615, 1647916, 13674582, 12175310],
  copper: [8740935, 2635318, 7259318, 13021850],
  ivory: [14207920, 4208943, 9258039, 12167814],
  oxide: [10111800, 3422002, 15190900, 11777961],
  black: [3421244, 1515045, 11185526, 11582146],
  milblack: [2895408, 1316376, 5593423, 9409168],
  miltan: [7298885, 2762531, 5918784, 10525583],
  milod: [3817778, 1909019, 5922379, 10132882],
  milgray: [4475213, 1711392, 6449003, 10922669],
  prestige: [1974307, 1118740, 11831370, 12764617],
  milwood: [5911328, 1710876, 7028777, 10525583],
};
Object.freeze(Object.keys(hr));
