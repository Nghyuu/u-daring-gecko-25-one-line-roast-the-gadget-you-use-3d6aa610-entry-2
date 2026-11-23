import { readFileSync, writeFileSync, mkdirSync, chmodSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const dir = dirname(fileURLToPath(import.meta.url));
const line = readFileSync(join(dir, "entry.txt"), "utf8").trim();
if (!line || [...line].length > 200) {
  throw new Error("entry line must be 1-200 characters");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
chmodSync("/output/entry.txt", 0o644);
