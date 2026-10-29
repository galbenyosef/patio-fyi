// assets__ui-hhE6L1u7 05 — ally
// Lines 994-1483 of readable/assets__ui-hhE6L1u7.pretty.js (statement-aligned).
var xn = `sl-style`,
  Sn =
    rn +
    yn +
    `
.sl{position:absolute;inset:0;overflow:hidden;pointer-events:none;
  font-family:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  -webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-variant-numeric:tabular-nums;
  user-select:none;-webkit-user-select:none;line-height:1;

  /* ---- scale: 1 at 1080p, clamped 0.8 .. 1.4 (hud.js sets it from the viewport) */
  --ui:1;
  /* ---- type scale: six steps, nothing between them */
  --fs-micro:calc(10px * var(--ui));
  --fs-label:calc(11px * var(--ui));
  --fs-body:calc(13px * var(--ui));
  --fs-num:calc(20px * var(--ui));
  --fs-hero:calc(26px * var(--ui));
  --fs-mega:calc(38px * var(--ui));
  /* ---- two tracking tokens: caps labels open up, numerals tighten */
  --tr-caps:.18em;--tr-num:-.03em;
  /* ---- ink + smoke */
  --ink:#ECEAE3;--ink2:rgba(236,234,227,.80);--ink3:rgba(236,234,227,.52);--ink4:rgba(236,234,227,.16);
  --smoke:rgba(10,12,14,.62);--smoke2:rgba(10,12,14,.82);--solid:#0E1114;
  --line:rgba(236,234,227,.20);--warn:#E2553F;
  /* every meter's empty half. Bright enough that "how much is missing" survives a bright panel. */
  --track:rgba(236,234,227,.28);
  /* one screen safe-margin, written back by hud.js layout() and used on all four edges */
  --safe:28px;
  /* damage-direction ring diameter (hud.js: 36% of viewport height) */
  --diS:390px;
  /* magazine tick strip footprint; hud.js measures it so the reload row occupies exactly the same box */
  --tickw:90px;
  /* ---- team accents. --tN are fills; --tN-ink are the display-safe ramps used wherever a team colour is ink. */
  --t0:#E0A030;--t1:#D23A32;--t0-ink:#F0BE63;--t1-ink:#FF8A80;
  --ally:#E0A030;--enemy:#D23A32;
  /* integer-pixel tokens: hud.js layout() overwrites these with whole pixels so strokes and tiles stay crisp */
  --brk:9px;--pipw:30px;--piph:24px;--pipgap:7px;--ctr:5px;--ctrh:6px;--mk:22px;--xhl:9px;
  --s3:3px;--s5:5px;--s9:9px;--s10:10px;--s11:11px;
  --g3:3px;--g4:4px;--g5:5px;--g6:6px;--g7:7px;--g8:8px;--g9:9px;--g10:10px;--g11:11px;--g12:12px;--g13:13px;--g14:14px;--g15:15px;--g16:16px;--g17:17px;--g18:18px;--g20:20px;--g22:22px;--g24:24px;--g26:26px;--g28:28px;--g30:30px;--g32:32px;--g34:34px;--g36:36px;--g38:38px;--g39:39px;--g44:44px;--g46:46px;--g48:48px;--g54:54px;--g56:56px;--g64:64px;--g66:66px;--g70:70px;--g72:72px;--g76:76px;--g78:78px;--g92:92px;--g96:96px;--g104:104px;--g110:110px;--g150:150px;--g158:158px;--g184:184px;--g238:238px;--g268:268px;--g600:600px;--g690:690px;--g1240:1240px;

  color:var(--ink);font-size:var(--fs-body);font-weight:400;letter-spacing:0}
#ui-root>.sl{pointer-events:none}
.sl *{box-sizing:border-box;margin:0;padding:0}
.sl [hidden]{display:none!important}
.sl canvas{display:block}
.sl-abs{position:absolute}

/* ---- one fill definition, shared by absolute panels and in-flow rows. Two densities: the bottom-corner
   panels sit over ground (--smoke); anything carrying team-coloured ink sits over sky too, so it takes the
   denser --smoke2 and the ink ramps stay above 4.5:1 whatever is behind them. */
.sl-fill{background:var(--smoke);backdrop-filter:blur(6px) saturate(.85);-webkit-backdrop-filter:blur(6px) saturate(.85)}
.sl-fill.dark{background:var(--smoke2)}
.sl-panel{position:absolute}
.sl-c{position:absolute;width:var(--brk);height:var(--brk);border:0 solid var(--ink);opacity:.85;pointer-events:none}
.sl-c.tl{left:-1px;top:-1px;border-left-width:2px;border-top-width:2px}
.sl-c.tr{right:-1px;top:-1px;border-right-width:2px;border-top-width:2px}
.sl-c.bl{left:-1px;bottom:-1px;border-left-width:2px;border-bottom-width:2px}
.sl-c.br{right:-1px;bottom:-1px;border-right-width:2px;border-bottom-width:2px}
/* ---- bare readouts: health, ammo, match line, player count. No panel and no brackets: ink carries its own
   shadow, meters get a hairline shadow, and the edge vignette does the rest. Only the minimap keeps a frame. */
.sl-bare{text-shadow:0 1px 2px rgba(0,0,0,.85),0 0 8px rgba(0,0,0,.45)}
.sl-bare .bar,.sl-bare .ticks i,.sl-bare .rl .b{box-shadow:0 1px 2px rgba(0,0,0,.6)}
/* the match line sits over sky, so it keeps a soft horizontal band that fades out instead of ending in an edge */
.sl-match.sl-bare{background:linear-gradient(90deg,rgba(10,12,14,0),rgba(10,12,14,.55) 22%,rgba(10,12,14,.55) 78%,rgba(10,12,14,0))}

/* ---- type utilities: caps labels are 700, numerals 600, body 400 */
.sl-lab{font-size:var(--fs-micro);letter-spacing:var(--tr-caps);text-transform:uppercase;color:var(--ink3);font-weight:700}
.sl-lab.ink{color:var(--ink)}
.sl-num{font-weight:600;letter-spacing:var(--tr-num)}

/* ---- layers */
.sl-vig,.sl-dmg,.sl-dead,.sl-scrim{position:absolute;inset:0;pointer-events:none}
.sl-vig{z-index:0;background:radial-gradient(ellipse at center,rgba(0,0,0,0) 55%,rgba(0,0,0,.38) 100%)}
/* The hit flash: blood-dark at the rim, not a pink wash. Oversized so hit-react.js can slide it away from the side a
   round came from (that edge sits deeper in the red) without its edge ever showing. */
.sl-dmg{z-index:1;opacity:0;inset:-16%;will-change:transform,opacity;
  background:radial-gradient(ellipse 50% 50% at center,rgba(150,14,10,0) 44%,rgba(150,14,10,.2) 57%,rgba(132,10,8,.6) 70%,rgba(96,4,4,.84) 82%,rgba(64,1,1,.92) 100%)}
.sl-dead{z-index:1;opacity:0;background:rgba(10,12,14,.55);transition:opacity .6s}
.sl-killcam{position:absolute;inset:0;pointer-events:none;z-index:4}.sl-killcam[hidden]{display:none}.sl-killcam .bar{position:absolute;left:0;right:0;height:11%;background:#05070a;transition:transform .28s cubic-bezier(.2,.8,.2,1)}.sl-killcam .top{top:0;transform:translateY(-100%)}.sl-killcam .bottom{bottom:0;transform:translateY(100%)}.sl-killcam.on .bar{transform:none}
.sl-killcam .label{position:absolute;left:50%;top:12.5%;transform:translateX(-50%);display:flex;align-items:center;gap:9px;font:700 13px system-ui;letter-spacing:.3em;color:#e8f0ec;text-shadow:0 1px 3px #000}.sl-killcam .rec{width:8px;height:8px;border-radius:50%;background:#ff4d3d;box-shadow:0 0 8px #ff4d3d;animation:sl-kc-rec 1s steps(1) infinite}@keyframes sl-kc-rec{50%{opacity:.25}}
.sl-killcam .speed{font:700 10px system-ui;letter-spacing:.22em;padding:3px 7px;border-radius:2px;background:#e9c47f;color:#1a1408;text-shadow:none}.sl-killcam .speed[hidden]{display:none}.sl-killcam .speed.impact{background:#fff;color:#000}
.sl-killcam .progress{position:absolute;left:11%;right:11%;top:11%;height:2px;background:#ffffff2e}.sl-killcam .progress i{display:block;height:100%;width:0;background:#e9c47f}.sl-killcam .progress b{position:absolute;top:-3px;width:2px;height:8px;margin-left:-1px;background:#ff6b5a;box-shadow:0 0 6px #ff6b5a}
.sl-killcam .who{position:absolute;left:50%;bottom:1.6%;z-index:2;transform:translate(-50%,24px);opacity:0;transition:transform .35s .1s cubic-bezier(.2,.8,.2,1),opacity .35s .1s;display:flex;align-items:stretch;min-width:min(520px,80vw);max-width:92vw;background:linear-gradient(90deg,#1a0d0cf2,#0c1116e6);border-left:4px solid #ff6b5a;border-radius:3px;box-shadow:0 6px 24px #0009;color:#fff;white-space:nowrap}.sl-killcam.on .who{transform:translate(-50%,0);opacity:1}
.sl-killcam .card{display:flex;flex-direction:column;justify-content:center;gap:2px;padding:9px 18px 9px 14px;flex:1;min-width:0}.sl-killcam .by{font:700 10px system-ui;letter-spacing:.28em;color:#ff9a8a}.sl-killcam .name{font:800 22px system-ui;letter-spacing:.02em;overflow:hidden;text-overflow:ellipsis;text-shadow:0 1px 3px #000}.sl-killcam .rank{font:600 11px system-ui;letter-spacing:.14em;color:#e9c47f}.sl-killcam .rank[hidden],.sl-killcam .hs[hidden],.sl-killcam .dist[hidden],.sl-killcam .wpn[hidden]{display:none}
.sl-killcam .gun{display:flex;flex-direction:column;align-items:flex-end;justify-content:center;gap:4px;padding:9px 16px;border-left:1px solid #ffffff1f}.sl-killcam .wpn{font:700 14px system-ui;letter-spacing:.08em;text-transform:uppercase}.sl-killcam .hs{font:800 10px system-ui;letter-spacing:.2em;padding:2px 6px;border-radius:2px;background:#ff6b5a;color:#1a0d0c}.sl-killcam .dist{font:600 12px system-ui;color:#c8d2d8;font-variant-numeric:tabular-nums}
.sl-killcam .skip{position:absolute;right:3%;bottom:12.8%;display:flex;align-items:center;gap:7px;font:700 11px system-ui;letter-spacing:.22em;color:#c8d2d8;text-shadow:0 1px 3px #000}.sl-killcam kbd{font:700 10px system-ui;letter-spacing:.12em;padding:2px 6px;border:1px solid #c8d2d888;border-bottom-width:2px;border-radius:3px;background:#0c1116b3;text-shadow:none}
.sl-killcam .fade{position:absolute;inset:0;background:#000;opacity:0;z-index:1}.sl-killcam .flash{position:absolute;inset:0;background:#fff;opacity:0}.sl-killcam .vig{position:absolute;inset:0;background:radial-gradient(ellipse at center,#0000 55%,#000a 100%);opacity:0;transition:opacity .3s}.sl-killcam .vig.on{opacity:1}
.sl-killcam .tag{position:absolute;transform:translate(-50%,-100%);font:700 11px system-ui;letter-spacing:.16em;padding:3px 7px;border-radius:2px;background:#0c1116d9;color:#e8f0ec;text-shadow:0 1px 2px #000;white-space:nowrap}
.sl-killcam .tag[hidden]{display:none}.sl-killcam .tag.victim{color:#ffd58a;border:1px solid #ffd58a88}.sl-killcam .tag.killer{color:#ff9a8a;border:1px solid #ff9a8a88}
.sl-killcam .tag.victim.hit{background:#ffd58a;color:#1a1408;transition:background .12s,color .12s}
.sl-mkl{position:absolute;inset:0;z-index:2;pointer-events:none}
.sl-centre{position:absolute;width:0;height:0;z-index:3}
.sl-lane,.sl-msgs{z-index:3}
.sl-top,.sl-feed,.sl-map,.sl-ammo{z-index:4}
.sl-players{z-index:9} /* above the deploy screen: the count is always in the corner */
.sl-scrim{z-index:6;background:rgba(10,12,14,.72);backdrop-filter:blur(10px) saturate(.55);
  -webkit-backdrop-filter:blur(10px) saturate(.55);opacity:0;transition:opacity .12s linear}
.sl-scrim.on{opacity:1}
.sl-score{z-index:7}
.sl-spawn{z-index:8}
.sl-dbg{z-index:9}

/* ---- crosshair / hitmarker / damage indicators (centre) */
.sl-xh{position:absolute;left:0;top:0;--gap:10px;--len:var(--xhl);--arm:2px;opacity:1;transition:opacity .12s}
.sl-xh i{position:absolute;background:var(--ink);box-shadow:0 0 0 1px rgba(0,0,0,.5)}
.sl-xh .u{left:-1px;top:calc(-1 * (var(--gap) + var(--len)));width:var(--arm);height:var(--len)}
.sl-xh .d{left:-1px;top:var(--gap);width:var(--arm);height:var(--len)}
.sl-xh .l{top:-1px;left:calc(-1 * (var(--gap) + var(--len)));height:var(--arm);width:var(--len)}
.sl-xh .r{top:-1px;left:var(--gap);height:var(--arm);width:var(--len)}
.sl-xh .dot{left:-1px;top:-1px;width:var(--arm);height:var(--arm)}
.sl-xh.ads .dot{opacity:0}
.sl-xh.ads i{box-shadow:0 0 0 1px rgba(0,0,0,.75)}
.sl-xh.sprint{opacity:.3}
/* hip fire (owner 2026-10-23): four short dashes on the edge of the real shot cone, no dot; they fade while aiming in */
.sl-xh.hip{--len:calc(var(--xhl) * .78)}
.sl-xh.hip i{opacity:calc(var(--fade,1) * var(--xw,1));background:rgba(255,255,255,.88);box-shadow:0 0 0 1px rgba(0,0,0,.6)}
.sl-xh.hip .dot{display:none}
.sl-hm{position:absolute;left:0;top:0;opacity:0;--r:var(--g9);--l:var(--g14)}
.sl-hm i{position:absolute;left:-1.5px;top:-1px;width:3px;height:var(--l);background:var(--ink);
  box-shadow:0 0 0 1px rgba(0,0,0,.6);transform-origin:1.5px 0}
.sl-hm i:nth-child(1){transform:rotate(45deg) translateY(var(--r))}
.sl-hm i:nth-child(2){transform:rotate(135deg) translateY(var(--r))}
.sl-hm i:nth-child(3){transform:rotate(225deg) translateY(var(--r))}
.sl-hm i:nth-child(4){transform:rotate(315deg) translateY(var(--r))}
.sl-hm.hs i{background:var(--warn)}
.sl-hm.hs{--r:var(--g12)}
.sl-hm.kill i{height:calc(var(--l) + 5px);background:var(--ink)}
.sl-hm.kill.hs i{background:var(--warn)}
/* Short, stationary arms leave the optic's centre open during aimed bursts. */
.sl-hm.aimed{--r:var(--g12);--l:var(--g6)}
.sl-hm.aimed.hs{--r:var(--g14)}
.sl-hm.aimed.kill i{height:calc(var(--l) + 3px)}
/* Damage direction: a peripheral wedge at 18% of viewport height, well outside the aiming zone. The conic
   ramp tapers alpha toward both ends and the radial mask feathers over ~26 px, so it reads as a glow that
   points, never as a stroked vector path. */
.sl-di{position:absolute;left:0;top:0;width:var(--diS);height:var(--diS);
  margin-left:calc(-.5 * var(--diS));margin-top:calc(-.5 * var(--diS));
  border-radius:50%;will-change:transform;opacity:0;pointer-events:none;
  background:conic-gradient(from -30deg at 50% 50%,
    rgba(214,42,30,0) 0deg,rgba(214,42,30,.06) 8deg,rgba(214,42,30,.36) 18deg,
    rgba(236,60,42,.95) 30deg,rgba(214,42,30,.36) 42deg,rgba(214,42,30,.06) 52deg,
    rgba(214,42,30,0) 60deg,rgba(214,42,30,0) 360deg);
  -webkit-mask:radial-gradient(circle closest-side at 50% 50%,transparent 0 74%,rgba(0,0,0,.55) 84%,#000 90%,#000 95%,transparent 100%);
  mask:radial-gradient(circle closest-side at 50% 50%,transparent 0 74%,rgba(0,0,0,.55) 84%,#000 90%,#000 95%,transparent 100%)}

/* ---- score lane: centred under the crosshair, clear of the aim point (owner 2026-10-06: the big outlined numbers to
   the right read as cartoony; now the Battlefield/CoD treatment, small tracked caps label then a light number, a soft
   shadow for legibility on any background) and centre messages */
.sl-lane{position:absolute;display:flex;flex-direction:column;align-items:center;gap:var(--g3)}
.sl-award{display:flex;flex-direction:column;align-items:center;gap:var(--g3)}
.sl-toast{display:flex;align-items:baseline;gap:calc(7px * var(--ui));opacity:0;animation:sl-toast 2.8s ease-out forwards;white-space:nowrap;
  text-shadow:0 1px 2px rgba(0,0,0,.95),0 0 7px rgba(0,0,0,.55)}
.sl-toast span{font-size:calc(13px * var(--ui));letter-spacing:.12em;text-transform:uppercase;color:#eef1f4;font-weight:650}
.sl-toast b{font-size:calc(14px * var(--ui));font-weight:500;letter-spacing:var(--tr-num);color:rgba(238,241,244,.78);font-variant-numeric:tabular-nums}
.sl-toast.hs span,.sl-toast.hs b{color:#f2b07a}
.sl-toast.capture span{font-size:calc(21px * var(--ui));letter-spacing:.16em;color:#ffd890}.sl-toast.capture b{font-size:calc(22px * var(--ui));color:#ffd890}
.sl-toast.assist span{color:var(--t0)}
.sl-toast.far span{color:var(--ink)}
@keyframes sl-toast{0%{opacity:0;transform:translateY(3px)}7%{opacity:1;transform:none}84%{opacity:1}100%{opacity:0}}
.sl-msgs{position:absolute;display:flex;flex-direction:column;align-items:center;gap:var(--g14)}
.sl-msg{display:flex;flex-direction:column;align-items:center;gap:var(--g8);opacity:0;transition:opacity .25s;white-space:nowrap}
.sl-msg.on{opacity:1}
.sl-msg .k{font-size:var(--fs-micro);letter-spacing:var(--tr-caps);text-transform:uppercase;color:var(--ink2);font-weight:700;
  text-shadow:0 1px 3px rgba(0,0,0,.75)}
.sl-msg .t{display:flex;align-items:center;gap:var(--g16);font-size:var(--fs-hero);font-weight:600;
  letter-spacing:var(--tr-caps);text-transform:uppercase;text-shadow:0 2px 6px rgba(0,0,0,.75)}
.sl-msg .t:before,.sl-msg .t:after{content:"";width:var(--g44);height:2px;background:currentColor;opacity:.55}
/* Three ranks, not seven synonyms.
   1 MAJOR  — match state. Mega, full-bleed rules, no eyebrow: nothing else in the HUD is this size.
   2 ALERT  — objective / team / warning. Hero, eyebrow carries the hue.
   3 CHATTER — squad / vehicle / info. Body caps in --ink2 with short rules: subordinate by construction. */
.sl-msg.major .t{font-size:var(--fs-mega);letter-spacing:.10em;font-weight:600;gap:var(--g24)}
.sl-msg.major .t:before,.sl-msg.major .t:after{width:var(--g96);height:3px;opacity:.7}
.sl-msg.info .t,.sl-msg.squad .t,.sl-msg.vehicle .t{font-size:var(--fs-body);font-weight:700;color:var(--ink2);gap:var(--g10)}
.sl-msg.info .t:before,.sl-msg.info .t:after,.sl-msg.squad .t:before,.sl-msg.squad .t:after,
.sl-msg.vehicle .t:before,.sl-msg.vehicle .t:after{width:var(--g18);height:1px;opacity:.4}
.sl-msg.warn .t{color:var(--warn)}
.sl-msg.t0 .t{color:var(--t0-ink)}
.sl-msg.t1 .t{color:var(--t1-ink)}
/* the eyebrow is the second channel: hue there, so the six kinds read apart before the words are read */
.sl-msg.objective .k{color:var(--ink)}
.sl-msg.warn .k{color:var(--warn)}
.sl-msg.t0 .k{color:var(--t0-ink)}
.sl-msg.t1 .k{color:var(--t1-ink)}
.sl-msg.squad .k,.sl-msg.vehicle .k{color:var(--ink3)}

/* ---- compass + match state + objective pips (top centre) */
.sl-top{position:absolute;display:flex;flex-direction:column;align-items:center;gap:var(--g10)}
/* The host banner sits where the compass was: one centred line, wrapping to two at most. */
.sl-banner{position:relative;width:100%;min-height:var(--g32,32px);padding:var(--g6) var(--g14,14px);box-sizing:border-box;display:flex;align-items:center;justify-content:center}
.sl-banner.empty{display:none}
.sl-banner .tx{font-size:calc(15px * var(--ui));font-weight:700;letter-spacing:.04em;color:var(--ink);text-align:center;line-height:1.25;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow-wrap:anywhere}
.sl-compass .ctr{position:absolute;left:50%;bottom:0;width:0;height:0;margin-left:calc(-1 * var(--ctr));
  border-left:var(--ctr) solid transparent;border-right:var(--ctr) solid transparent;
  border-bottom:var(--ctrh) solid var(--ink)}
.sl-compass .deg{position:absolute;left:50%;bottom:calc(-1 * var(--g20));transform:translateX(-50%);
  padding:var(--g4) var(--g8);background:var(--smoke2);color:var(--ink);
  backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);border-top:1px solid var(--line);
  font-size:var(--fs-micro);font-weight:700;letter-spacing:var(--tr-caps);min-width:var(--g46);text-align:center}

.sl-match{position:relative;display:flex;align-items:center;gap:var(--g18);height:var(--g34);
  padding:0 var(--g20)}
/* Both halves are identical boxes on identical column tracks, mirrored — so the two ticket bars are exactly
   equidistant from screen centre whatever the team names or ticket counts happen to be. */
.sl-match .tm{display:grid;align-items:center;gap:var(--g9);width:calc(var(--g64) + var(--g44) + var(--g64) + var(--g18));
  grid-template-columns:1fr var(--g44) var(--g64)}
/* Explicit row prevents reverse column order from creating three auto rows. */
.sl-match .tm > *{grid-row:1}
.sl-match .tm.r{grid-template-columns:var(--g64) var(--g44) 1fr}
.sl-match .tm.r .bar{grid-column:1}.sl-match .tm.r .v{grid-column:2}.sl-match .tm.r .n{grid-column:3}
.sl-match .tm .n{font-size:var(--fs-label);letter-spacing:var(--tr-caps);text-transform:uppercase;font-weight:700;
  white-space:nowrap;overflow:hidden;text-overflow:clip}
.sl-match .tm.r .n{text-align:right}
.sl-match .tm .v{font-size:var(--fs-num);font-weight:600;letter-spacing:var(--tr-num);text-align:right}
.sl-match .tm.r .v{text-align:left}
.sl-match .tm .bar{position:relative;width:var(--g64);height:var(--s3);background:var(--track)}
.sl-match .tm .bar i{position:absolute;top:0;bottom:0;right:0;width:100%}
.sl-match .tm.r .bar i{right:auto;left:0}
.sl-match .clock{display:flex;flex-direction:column;align-items:center;gap:var(--g4);min-width:var(--g78)}
.sl-match .clock .v{font-size:var(--fs-num);font-weight:600;letter-spacing:var(--tr-num)}
.sl-match .clock .p{font-size:var(--fs-micro);letter-spacing:var(--tr-caps);text-transform:uppercase;font-weight:700;color:var(--ink3)}
.sl-match .clock .p.live{color:var(--ink)}
.sl-match .clock .p.ended{color:var(--warn)}

.sl-objs{display:flex;gap:var(--pipgap)}
.sl-objs .o{position:relative;width:var(--pipw);height:var(--piph);display:flex;align-items:center;
  justify-content:center;font-size:var(--fs-label);font-weight:700;color:var(--ink);letter-spacing:0}
.sl-objs .o .u{position:absolute;left:0;right:0;bottom:0;height:var(--s3);background:var(--track)}
.sl-objs .o.t0 .u{background:var(--t0)}
.sl-objs .o.t1 .u{background:var(--t1)}
.sl-objs .o .p{position:absolute;left:0;bottom:0;height:var(--s3);width:0;background:var(--ink)}
.sl-objs .o .sl-c{width:var(--pipgap);height:var(--pipgap);opacity:.5}
.sl-objs .o.con .u{animation:sl-pulse 1s ease-in-out infinite}
.sl-objs .o.con .u{background:var(--warn)}
/* on-point cue: the base you stand on, as its letter in a thin ring that fills with capture progress */
.sl-onpt{position:relative;width:calc(34px * var(--ui));height:calc(34px * var(--ui));border-radius:50%;opacity:0;
  transition:opacity .2s ease;pointer-events:none;--p:0;--pc:var(--ink);--lc:#CFCBC1}
.sl-onpt.on{opacity:1}
.sl-onpt:before{content:'';position:absolute;inset:calc(3px * var(--ui));border-radius:50%;background:rgba(10,12,14,.42)}
.sl-onpt .r{position:absolute;inset:0;border-radius:50%;
  background:conic-gradient(var(--pc) calc(var(--p) * 1turn),rgba(236,234,227,.16) 0);
  -webkit-mask:radial-gradient(farthest-side,transparent calc(100% - 3px),#000 calc(100% - 2.5px));
  mask:radial-gradient(farthest-side,transparent calc(100% - 3px),#000 calc(100% - 2.5px))}
.sl-onpt.con .r{animation:sl-pulse 1s ease-in-out infinite}
.sl-onpt b{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:calc(17px * var(--ui));
  font-weight:800;line-height:1;color:var(--lc);text-shadow:0 0 2px rgba(0,0,0,.9),0 1px 2px rgba(0,0,0,.7)}
@keyframes sl-blink{50%{opacity:.45}}
@keyframes sl-pulse{0%,100%{opacity:1}50%{opacity:.4}}

/* ---- objective markers in world space */
.sl-mk{position:absolute;left:0;top:0;display:flex;flex-direction:column;align-items:center;gap:var(--g6);
  will-change:transform;transform:translate(-50%,-100%)}
.sl-mk .d{position:relative;width:var(--mk);height:var(--mk);border:2px solid var(--ink);
  transform:rotate(45deg);background:rgba(10,12,14,.6);box-shadow:0 0 0 1px rgba(0,0,0,.35)}
.sl-mk .d b{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;transform:rotate(-45deg);
  font-size:var(--fs-label);font-weight:700;color:var(--ink)}
.sl-mk.t0 .d{border-color:var(--t0)}
.sl-mk.t1 .d{border-color:var(--t1)}
.sl-mk .m{font-size:var(--fs-micro);font-weight:700;letter-spacing:var(--tr-caps);color:var(--ink);
  background:var(--smoke2);padding:var(--g3) var(--g6);white-space:nowrap}
.sl-mk .pr{width:var(--pipw);height:var(--s3);background:var(--smoke2);overflow:hidden}
.sl-mk .pr i{display:block;height:100%;width:0;background:var(--ink)}
.sl-mk.con .d{animation:sl-blink 1s steps(2,end) infinite}
.sl-mk.edge{opacity:.72}
.sl-mk.edge .m,.sl-mk.edge .pr{display:none}
/* Off-screen: a chevron beside the diamond points at the objective (hud.js sets --a, the screen-space bearing). */
.sl-mk .ar{position:absolute;left:50%;top:calc(var(--mk) / 2);width:0;height:0;display:none;
  transform:rotate(var(--a,0rad)) translateX(calc(var(--mk) * 1.05))}
.sl-mk .ar:before{content:'';position:absolute;left:-4px;top:-7px;border-left:10px solid var(--ink);
  border-top:7px solid transparent;border-bottom:7px solid transparent;filter:drop-shadow(0 0 1px rgba(0,0,0,.8))}
.sl-mk.t0 .ar:before{border-left-color:var(--t0)}
.sl-mk.t1 .ar:before{border-left-color:var(--t1)}
.sl-mk.edge .ar{display:block}
/* a marker whose box overlaps the live centre-message band steps back to the diamond alone: no distance
   chip can ever be overprinted by a headline (hud.js measures both rects every frame). */
.sl-mk.mute{opacity:.18}
.sl-mk.mute .m,.sl-mk.mute .pr{display:none}

/* ---- kill feed (top right): fixed-width rows, so the team accent bars form one edge, not a staircase */
/* ---- players online (top right, above the kill feed) */
.sl-fps{position:absolute;display:flex;align-items:baseline;gap:var(--g4);pointer-events:none;opacity:.72;line-height:1}
.sl-fps b{font-size:var(--fs-label);font-weight:600;letter-spacing:var(--tr-num);color:var(--ink);min-width:3ch;text-align:right}
.sl-fps span{font-size:var(--fs-micro);font-weight:700;letter-spacing:var(--tr-caps);color:var(--ink3)}
.sl-fps.low b{color:#E9A06F}
.sl-players{position:absolute;display:flex;align-items:baseline;gap:var(--g9);height:var(--g34);padding:0 var(--g18)}
.sl-players .v{font-size:var(--fs-hero);font-weight:700;letter-spacing:var(--tr-num);color:var(--ink);line-height:1}
.sl-players .n{font-size:var(--fs-label);letter-spacing:var(--tr-caps);text-transform:uppercase;font-weight:700;color:var(--ink2);white-space:nowrap}
.sl-players.bump .v{animation:sl-players-bump .5s ease-out}
@keyframes sl-players-bump{0%{color:var(--warn);transform:scale(1.25)}100%{color:var(--ink);transform:scale(1)}}
.sl-feed{position:absolute;display:flex;flex-direction:column;align-items:flex-end;gap:var(--g4)}
.sl-feed .e{display:flex;align-items:center;justify-content:flex-end;gap:var(--g9);height:var(--g26);
  width:var(--g268);overflow:hidden;
  padding:0 var(--g10);white-space:nowrap;animation:sl-in .18s ease-out;transition:opacity .5s;
  border-left:2px solid var(--track)}
.sl-feed .n{max-width:var(--g104);overflow:hidden;text-overflow:ellipsis}
.sl-feed .e.k0{border-left-color:var(--t0)}
.sl-feed .e.k1{border-left-color:var(--t1)}
.sl-feed .e.me{background:var(--solid);box-shadow:inset 0 0 0 1px var(--line)}
.sl-feed .e.out{opacity:0}
.sl-feed .n{font-size:var(--fs-body);font-weight:600;letter-spacing:0;color:var(--ink)}
.sl-feed .n.t0{color:var(--t0-ink)}
.sl-feed .n.t1{color:var(--t1-ink)}
.sl-feed .w{font-size:var(--fs-micro);letter-spacing:var(--tr-caps);text-transform:uppercase;color:var(--ink2);font-weight:700}
.sl-feed .hs{width:var(--s11);height:var(--s11);border-radius:50%;border:2px solid var(--warn);position:relative}
.sl-feed .hs:after{content:"";position:absolute;left:1px;top:1px;right:1px;bottom:1px;border-radius:50%;background:var(--warn)}
@keyframes sl-in{from{opacity:0;transform:translateX(12px)}to{opacity:1;transform:none}}

/* ---- minimap (bottom left) */
.sl-map canvas{width:100%;height:100%}
.sl-map .n{position:absolute;left:50%;top:var(--g6);transform:translateX(-50%);font-size:var(--fs-micro);
  font-weight:700;letter-spacing:var(--tr-caps);color:var(--ink2);text-shadow:0 1px 2px rgba(0,0,0,.85)}
.sl-map .r,.sl-map .sq{position:absolute;bottom:var(--g5);font-size:var(--fs-micro);font-weight:700;
  letter-spacing:var(--tr-caps);color:var(--ink2);text-shadow:0 1px 2px rgba(0,0,0,.85)}
.sl-map .r{right:var(--g9)}
.sl-map .sq{left:var(--g9)}

/* ---- ammo (bottom right). The magazine numeral and the strip that meters it share one right edge, and the
   reload row occupies exactly the strip's footprint (--tickw, measured in hud.js) so the panel never reflows
   and the weapon name can never be squeezed into an ellipsis mid-reload. */
.sl-ammo{padding:var(--g11) var(--g14);display:grid;grid-template-columns:1fr auto;
  column-gap:var(--g14);align-items:stretch}
.sl-ammo .left{display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;min-width:0}
.sl-ammo .wn{font-size:var(--fs-label);font-weight:700;letter-spacing:var(--tr-caps);text-transform:uppercase;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}
.sl-ammo .fm{font-size:var(--fs-micro);font-weight:700;letter-spacing:var(--tr-caps);text-transform:uppercase;color:var(--ink2)}
.sl-ammo .right{display:flex;flex-direction:column;align-items:flex-end;justify-content:center}
.sl-ammo .nums{display:flex;align-items:baseline;gap:var(--g7)}
.sl-ammo .magw{display:flex;flex-direction:column;align-items:flex-end;gap:var(--g8);width:var(--tickw)}
.sl-ammo .mag{font-size:var(--fs-mega);font-weight:600;letter-spacing:var(--tr-num);line-height:.86}
.sl-ammo .res{font-size:var(--fs-body);font-weight:600;color:var(--ink2);letter-spacing:var(--tr-num)}
.sl-ammo .res:before{content:"/";margin-right:var(--g5);color:var(--ink3)}
.sl-ammo .ticks{display:flex;gap:1px;justify-content:flex-start;height:var(--s9);align-items:flex-end;width:var(--tickw)}
.sl-ammo .ticks i{height:var(--s9);background:var(--ink)}
.sl-ammo .ticks i.e{background:var(--track)}
.sl-ammo.low .mag{color:var(--warn)}
.sl-ammo.low .ticks i:not(.e){background:var(--warn)}
.sl-ammo .rl{display:none;align-items:center;gap:var(--g8);height:var(--s9);width:var(--tickw)}
.sl-ammo.rel .rl{display:flex}
.sl-ammo.rel .ticks{display:none}
.sl-ammo .rl span{font-size:var(--fs-micro);letter-spacing:var(--tr-caps);text-transform:uppercase;color:var(--ink);font-weight:700}
.sl-ammo .rl .b{flex:1;height:var(--s3);background:var(--track)}
.sl-ammo .rl .b i{display:block;height:100%;width:0;background:var(--ink)}

/* ---- scoreboard: opaque table over a full-screen scrim, never composited against the live world */
.sl-score{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);
  width:var(--g1240);max-width:94vw;max-height:92vh;background:var(--solid);pointer-events:auto;
  padding:var(--g24) var(--g28) var(--g20);display:flex;flex-direction:column;
  gap:var(--g16);box-shadow:0 var(--g24) var(--g70) rgba(0,0,0,.55)}
.sl-score .hd{display:flex;align-items:baseline;justify-content:space-between;border-bottom:1px solid var(--line);
  padding-bottom:var(--g14)}
.sl-score .hd .m{font-size:var(--fs-hero);font-weight:600;letter-spacing:var(--tr-caps);text-transform:uppercase}
.sl-score .hd .s{display:flex;gap:var(--g24);align-items:baseline}
.sl-score .hd .s b{font-size:var(--fs-body);font-weight:600;letter-spacing:var(--tr-num)}
.sl-score .cols{display:grid;grid-template-columns:1fr 1fr;gap:var(--g28)}
.sl-score .th{display:flex;align-items:center;gap:var(--g12);height:var(--g36);
  padding:0 var(--g10);margin-bottom:var(--g6);border-bottom:2px solid var(--tc)}
.sl-score .th i{width:var(--s10);height:var(--s10);background:var(--tc)}
.sl-score .th .tn{font-size:var(--fs-label);font-weight:700;letter-spacing:var(--tr-caps);text-transform:uppercase;color:var(--tci)}
.sl-score .th .tt{margin-left:auto;display:flex;gap:var(--g18);align-items:baseline}
.sl-score .th .tt b{font-size:var(--fs-body);font-weight:600;letter-spacing:var(--tr-num)}
.sl-score .tr{display:grid;
  grid-template-columns:var(--g30) 1fr var(--g46) var(--g46) var(--g66) var(--g54);
  align-items:center;height:var(--g22);padding:0 var(--g10);font-size:var(--fs-body);font-weight:400}
.sl-score .tr.h{height:var(--g20);color:var(--ink3);font-size:var(--fs-micro);letter-spacing:var(--tr-caps);
  text-transform:uppercase;font-weight:700}
.sl-score .tr:nth-child(even):not(.h){background:rgba(236,234,227,.035)}
.sl-score .tr.me{box-shadow:inset 3px 0 0 var(--tc);background:rgba(236,234,227,.09)}
.sl-score .tr .r{color:var(--ink3);font-weight:400}
.sl-score .tr .n{font-weight:400;display:flex;align-items:center;gap:var(--g7);overflow:hidden;
  white-space:nowrap;text-overflow:ellipsis}
.sl-score .tr.me .n{font-weight:600}
.sl-score .tr .n .lv{flex:0 0 auto;min-width:22px;padding:0 3px;text-align:center;font-size:var(--fs-micro);font-weight:600;color:#15191d;background:#e1ae55}
.sl-score .tr .n .ttl{flex:0 1 auto;text-decoration:none;font-size:var(--fs-micro);letter-spacing:var(--tr-caps);text-transform:uppercase;color:#e1ae55;border:1px solid #e1ae5566;padding:0 5px;white-space:nowrap}
.sl-score .tr .n em{font-style:normal;font-size:var(--fs-micro);letter-spacing:var(--tr-caps);color:var(--ink3);
  border:1px solid var(--ink4);padding:0 var(--g3);font-weight:700}
.sl-score .tr .k,.sl-score .tr .d,.sl-score .tr .s,.sl-score .tr .p{text-align:right;letter-spacing:var(--tr-num)}
.sl-score .tr .k,.sl-score .tr .d{color:var(--ink2)}
.sl-score .tr .s{font-weight:600}
.sl-score .tr .p{color:var(--ink3)}
.sl-score .tr .p.bad{color:var(--warn)}
.sl-score .ft{display:flex;justify-content:space-between;border-top:1px solid var(--line);padding-top:var(--g12)}

/* ---- spawn screen */
.sl-spawn{position:absolute;inset:0;background:rgba(10,12,14,.72);backdrop-filter:blur(10px) saturate(.55);
  -webkit-backdrop-filter:blur(10px) saturate(.55);pointer-events:auto;display:flex;align-items:center;justify-content:center}
.sl-spawn .in{position:relative;width:calc(var(--g1240) * 1.5);max-width:94vw;height:calc(var(--g690) * 1.5);max-height:92vh;
  background:var(--solid);display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr);gap:var(--g28);
  padding:var(--g28);box-shadow:0 var(--g24) var(--g70) rgba(0,0,0,.55)}
.sl-spawn .mapw{position:relative;width:100%;min-height:0;display:flex;align-items:center;justify-content:center;background:#0A0C0E}
.sl-spawn .mapw canvas{width:100%;height:100%}
.sl-spawn .mapw .n{position:absolute;left:50%;top:var(--g8);transform:translateX(-50%);font-size:var(--fs-micro);
  font-weight:700;letter-spacing:var(--tr-caps);color:var(--ink2);text-shadow:0 1px 2px rgba(0,0,0,.85)}
.sl-spawn .spawn-column{display:flex;flex-direction:column;min-width:0;min-height:0;overflow:hidden}
.sl-spawn .side{display:flex;flex:1 1 0;flex-direction:column;gap:var(--g16);min-width:0;min-height:0;overflow-y:auto;overflow-x:hidden;padding:3px;scrollbar-gutter:stable}
.sl-spawn .side>*{flex-shrink:0}
.sl-spawn h1{font-size:var(--fs-hero);font-weight:600;letter-spacing:var(--tr-caps);text-transform:uppercase}
.sl-spawn .sub{font-size:var(--fs-label);letter-spacing:0;color:var(--ink2);font-weight:400;margin-top:var(--g8)}
.sl-spawn .teams{display:grid;grid-template-columns:1fr 1fr;gap:var(--g12)}
.sl-spawn .team{position:relative;height:var(--g48);padding:0 var(--g14);
  background:rgba(236,234,227,.045);cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:var(--g12);
  --tc:var(--ink);--tci:var(--ink)}
.sl-spawn .team:hover{background:rgba(236,234,227,.09)}
/* ONE selected state across the whole deploy screen: a 3 px team-accent bar on the left edge plus the raised
   fill the scoreboard already uses for "me". Team, spawn point and kit therefore read identically. */
.sl-spawn .team.sel,.sl-spawn .oi.sel,.sl-spawn .kit.sel{background:rgba(236,234,227,.09)}
.sl-spawn .team.sel{box-shadow:inset 3px 0 0 var(--tc)}
.sl-spawn .team .tn{font-size:var(--fs-label);font-weight:700;letter-spacing:var(--tr-caps);text-transform:uppercase;
  color:var(--tci);display:flex;align-items:center;gap:var(--g8)}
.sl-spawn .team .tn i{width:var(--s10);height:var(--s10);background:var(--tc)}
.sl-spawn .team .ti{display:flex;gap:var(--g12);font-size:var(--fs-micro);color:var(--ink2);font-weight:400;white-space:nowrap}
.sl-spawn .team .ti b{color:var(--ink);font-weight:600;letter-spacing:var(--tr-num)}
.sl-spawn .ol{display:flex;flex-direction:column;gap:var(--g6);flex:0 0 auto;max-height:240px;overflow:auto}
.sl-spawn .oi{display:grid;grid-template-columns:var(--g34) 1fr auto auto;column-gap:var(--g12);
  align-items:center;height:var(--g44);padding:0 var(--g12) 0 var(--g8);
  background:rgba(236,234,227,.045);cursor:pointer}
.sl-spawn .oi:hover{background:rgba(236,234,227,.09)}
.sl-spawn .oi.sel{box-shadow:inset 3px 0 0 var(--selc)}
.sl-spawn .oi.na{opacity:.44;cursor:default}
.sl-spawn .oi .l{position:relative;width:var(--g26);height:var(--g26);display:flex;align-items:center;
  justify-content:center;font-size:var(--fs-label);font-weight:700;color:var(--ink);background:rgba(236,234,227,.08)}
.sl-spawn .oi .l:after{content:"";position:absolute;left:0;right:0;bottom:0;height:var(--s3);background:var(--ink4)}
.sl-spawn .oi .l.t0:after{background:var(--t0)}
.sl-spawn .oi .l.t1:after{background:var(--t1)}
.sl-spawn .oi .nm{font-size:var(--fs-body);font-weight:400;letter-spacing:0;text-transform:uppercase}
.sl-spawn .oi .ow{font-size:var(--fs-micro);letter-spacing:var(--tr-caps);text-transform:uppercase;font-weight:700;color:var(--ink3)}
.sl-spawn .oi .stt{font-size:var(--fs-micro);letter-spacing:var(--tr-caps);text-transform:uppercase;font-weight:700;
  text-align:right;color:var(--ink2)}
.sl-spawn .oi .stt.bad{color:var(--warn)}
.sl-spawn .oi[data-kind=base] .stt{grid-column:3/5}
/* Short viewports: the side column must show team, spawn list, class and the deploy button without scrolling. */
@media(max-height:820px){.sl-spawn .side{gap:var(--g10)}.sl-spawn .ol{max-height:176px;gap:var(--s3)}.sl-spawn .oi{height:var(--g36)}.sl-spawn .kit{height:var(--g48);padding:var(--g6) var(--g10)}.sl-spawn .kit .kd{display:none}.sl-spawn .team{height:var(--g36)}}
.sl-spawn .kits{display:grid;grid-template-columns:repeat(5,1fr);gap:var(--g8)}
.sl-spawn .loadout-editor{display:grid;gap:12px;font-size:var(--fs-label)}
.sl-spawn .loadout-weapon{padding:12px;background:rgba(236,234,227,.045);display:grid;gap:8px}
.sl-spawn .loadout-choice{display:grid;grid-template-columns:110px minmax(0,1fr);align-items:center;gap:8px}
.sl-spawn .loadout-choice select{min-width:0;width:100%;padding:8px;color:var(--ink);background:#192128;border:1px solid #56616a;font:inherit}
.sl-spawn .loadout-detail{font-size:var(--fs-micro);color:var(--ink2);line-height:1.5}
.sl-spawn .foot{background:var(--solid);padding:8px 0;flex-shrink:0}
.sl-spawn .kit{position:relative;height:var(--g64);padding:var(--g10) var(--g12);
  background:rgba(236,234,227,.045);cursor:pointer;display:flex;flex-direction:column;justify-content:space-between}
.sl-spawn .kit:hover{background:rgba(236,234,227,.09)}
.sl-spawn .kit.sel{box-shadow:inset 3px 0 0 var(--selc)}
.sl-spawn .kit .kn{font-size:var(--fs-label);font-weight:700;letter-spacing:var(--tr-caps);text-transform:uppercase}
.sl-spawn .kit .kd{font-size:var(--fs-micro);letter-spacing:0;color:var(--ink2);font-weight:400}
.sl-spawn .sec{font-size:var(--fs-micro);letter-spacing:var(--tr-caps);text-transform:uppercase;color:var(--ink3);font-weight:700;
  margin-bottom:calc(-1 * var(--g8))}
.sl-spawn .foot{display:flex;align-items:center;justify-content:space-between;gap:var(--g16);margin-top:auto}
.sl-spawn .hint{font-size:var(--fs-micro);letter-spacing:var(--tr-caps);color:var(--ink3);text-transform:uppercase;font-weight:700}
.sl-spawn .btn{position:relative;height:var(--g48);min-width:220px;padding:0 var(--g36);background:var(--ink);color:#0A0C0E;
  font-size:var(--fs-label);font-weight:700;letter-spacing:var(--tr-caps);text-transform:uppercase;border:0;cursor:pointer;
  font-family:inherit}
.sl-spawn .btn:hover{background:#fff}
.sl-spawn .btn:disabled{background:var(--ink4);color:var(--ink3);cursor:default}
.sl-spawn .btn .sl-c{border-color:#0A0C0E}
.sl-spawn .btn:disabled .sl-c{border-color:var(--ink3)}
${on}
${sn}
${pn}
/* ---- debug panels (F3 net, F4 modules) */
.sl-dbg{position:absolute;width:var(--g238);padding:var(--g11) var(--g13);
  font-size:var(--fs-label);display:flex;flex-direction:column;gap:var(--g5)}
.sl-dbg .t{font-size:var(--fs-micro);letter-spacing:var(--tr-caps);text-transform:uppercase;color:var(--ink2);font-weight:700;
  margin-bottom:var(--g4);display:flex;justify-content:space-between}
.sl-dbg .t small{color:var(--ink3);letter-spacing:var(--tr-caps);font-size:var(--fs-micro)}
.sl-dbg .r{display:flex;justify-content:space-between;align-items:center;height:var(--g15)}
.sl-dbg .r>span{color:var(--ink2);font-weight:400}
.sl-dbg .r b{font-weight:600;letter-spacing:var(--tr-num)}
.sl-dbg .r i{width:var(--pipgap);height:var(--pipgap);background:var(--ink4);margin-right:var(--g8)}
.sl-dbg .r i.ok{background:var(--ink)}
.sl-dbg .r i.failed{background:var(--warn)}
.sl-dbg .r .st{width:var(--g72);text-align:right;color:var(--ink3);font-size:var(--fs-micro);
  letter-spacing:var(--tr-caps);text-transform:uppercase;font-weight:700}
.sl-dbg .r .st.failed{color:var(--warn)}
.sl-dbg .r .st.ok{color:var(--ink2)}
/* sparkline: a scale, not decoration — a fixed quantised ceiling, a dashed max rule, a solid zero baseline
   and a window label, so a bar height means a number. */
.sl-dbg .gh{display:flex;justify-content:space-between;align-items:baseline;margin-top:var(--g8)}
.sl-dbg .gh b{font-weight:600;letter-spacing:var(--tr-num);font-size:var(--fs-micro);color:var(--ink2)}
.sl-dbg .g{position:relative;height:var(--g26);display:flex;align-items:flex-end;gap:1px;margin-top:var(--g4);
  border-top:1px dashed var(--ink4);border-bottom:1px solid var(--line)}
.sl-dbg .g:before{content:"";position:absolute;left:0;right:0;top:50%;border-top:1px dotted var(--ink4)}
.sl-dbg .g i{position:relative;flex:1;background:var(--ink3);min-height:1px}
.sl-dbg .gf{display:flex;justify-content:space-between;margin-top:var(--g3)}
`,
  Cn = {
    standard: { ally: `#62caff`, squad: `#81efa7`, enemy: `#ff7963` },
    accessible: { ally: `#71d8ff`, squad: `#ffe27a`, enemy: `#f79bea` },
  },
  wn = { scale: 1, opacity: 1, palette: `standard` };
