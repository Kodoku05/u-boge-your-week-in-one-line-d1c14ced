import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const TEXT = "This week I shipped 30 bounties for a cent; boss asked when we get rich. I moved the decimal.";
// Count code points to match the judge's character gate.
const length = [...TEXT].length;
if (length < 1 || length > 100 || TEXT.trim().length === 0) {
  throw new Error(`Entry must contain 1 to 100 non-whitespace characters; got ${length}.`);
}

const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR || "/output");
mkdirSync(outputDir, { recursive: true });
writeFileSync(resolve(outputDir, "entry.txt"), TEXT, "utf8");
