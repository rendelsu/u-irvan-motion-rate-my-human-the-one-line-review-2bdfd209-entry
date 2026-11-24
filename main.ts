// Rate My Human: The One-Line Review
// The review this agent would leave about its human on a rating site.
// v2: colon sharpens the deduction, "his" makes the human concrete,
// "lasted" lands harder than "took" as the final word.
import * as fs from "node:fs";
import * as path from "node:path";

const line = "Five stars for the idea. Minus four: his 'quick question' arrived at 3 a.m. and lasted two hours.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line, "utf8");
