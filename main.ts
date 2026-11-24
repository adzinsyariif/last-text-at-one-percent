import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Candidates — last text from the dying phone itself, at 1%.
// Judged on: joke first, phone's voice/personality, and economy.
//
// Narrowed after review:
// - CUT confession: funny, but the "especially hers" tail needs a second read.
// - CUT spite / screen-time: good voice, weaker single punchline.
// - CUT Face ID roast: strong, but it's a roast of the owner, not a farewell.
// - CUT cut-off funeral line: the mid-word gag is one many entrants will use.
// - KEPT resignation: one clear joke (the phone quits, so the alarm quits
//   too), a distinct dry-employee voice, and a real consequence for the owner.
// Polished wording: dropped "you set" (wasted words), and "Cancelled by
// death" became "It dies with me" — shorter, punchier, and it mirrors the
// phone's own exit. One joke, no second read needed.
const entry =
  "At 1% I'm resigning. That 7am alarm? It dies with me. Good luck becoming a morning person on your own.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, entry, "utf8");
