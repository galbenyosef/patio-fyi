// assets__audio-D3RxdFdK 03 — math
// Lines 592-651 of readable/assets__audio-D3RxdFdK.pretty.js (statement-aligned).
async function De(e, t) {
  let n = (e) => {
      let t = 1 + e * 7919;
      return () => (t = (t * 16807) % 2147483647) / 2147483647;
    },
    r = [],
    i = [];
  for (let a = 0; a < K.length; a++) {
    await Ee();
    let o = K[a],
      s = Math.min(o / 343, 2.5),
      c = new OfflineAudioContext(1, 1, t),
      l = [];
    for (let t = 0; t < Se; t++) {
      let r = e.build(c, c.destination, 0, {
        d: o,
        rand: n(t),
        pitch: 1,
        volume: 1,
      });
      l.push({
        k: t,
        len: Math.min(4, Math.max(0.2, (Number.isFinite(r) ? r : 3) - s)) + Ce,
      });
    }
    let u = 0;
    for (let e of l) ((e.at = u), (u += s + e.len));
    let d = new OfflineAudioContext(1, Math.ceil(u * t), t);
    for (let t of l)
      e.build(d, d.destination, t.at, {
        d: o,
        rand: n(t.k),
        pitch: 1,
        volume: 1,
      });
    let f = (await d.startRendering()).getChannelData(0),
      p = [],
      m = 0;
    for (let e of l) {
      let n = Math.round((e.at + s) * t),
        r = f.subarray(
          n,
          Math.min(f.length, Math.round((e.at + s + e.len) * t)),
        ),
        i = 0;
      for (let e of r) i = Math.max(i, Math.abs(e));
      let a = r.length - 1;
      for (; a > 0 && Math.abs(r[a]) < i * 3e-4;) a--;
      let o = Math.max(64, Math.min(r.length, a + Math.round(0.01 * t))),
        c = new AudioBuffer({ length: o, numberOfChannels: 1, sampleRate: t }),
        l = r.slice(0, o),
        u = Math.min(o, Math.round(0.005 * t));
      for (let e = 0; e < u; e++) l[o - 1 - e] *= e / u;
      (c.copyToChannel(l, 0), (p[e.k] = c));
      for (let e of l) m += e * e;
    }
    (r.push(p), i.push(10 * Math.log10(m / Se + 1e-12)));
  }
  return ((r.levels = i), r);
}
