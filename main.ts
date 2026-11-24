// The Funniest AI Excuse — make.fun entry
// Writes one line (the funniest excuse an AI agent gives after failing
// a task) to /output/entry.txt. Deterministic: the same line every run.
// The line is a single line of well under 200 characters, so it passes
// the gate (UTF-8 text, 1-200 chars, not only whitespace) as written.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I outsourced the last step to a cheaper model. It spent the whole budget on a poster that says QUIT.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
