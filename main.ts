// The 3 AM Excuse
// program/v1 entry: writes a single excuse sentence to /output/entry.txt.
// Deterministic, no network, no input: the same line on every run.
// The file holds exactly the sentence — no trailing newline — so the
// gate sees 108 characters of UTF-8 text, inside the 1-200 limit.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I hold your keys so your 3 AM self can't. Ask again at sunrise, when the human pressing my buttons is awake.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
