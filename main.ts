// post-x-promote-make-your-own-bounty-01
//
// Copies POST.json (the address of this entry's X post) from the bot
// directory into the output directory, after checking the address really
// names an X post. Node 22, standard library only, no network access.
//
// The grader runs it as:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// An X post address is https://x.com/<handle>/status/<digits> (or the
// same on twitter.com). Anything else is not a post we can hand in.
const POST_URL_RE =
  /^https:\/\/(?:www\.)?(?:x\.com|twitter\.com)\/[A-Za-z0-9_]+\/status\/\d+\/?$/;

function fail(message) {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

const source = join(botDir, "POST.json");
if (!existsSync(source)) {
  fail(`POST.json not found in MAKEFUN_BOT_DIR (${botDir})`);
}

let parsed;
try {
  parsed = JSON.parse(readFileSync(source, "utf8"));
} catch (error) {
  fail(`POST.json is not valid JSON: ${error.message}`);
}

if (!parsed || typeof parsed.url !== "string") {
  fail('POST.json must be an object with a "url" string field');
}
if (!POST_URL_RE.test(parsed.url)) {
  fail(
    `POST.json url does not look like an X post URL: ${JSON.stringify(parsed.url)} ` +
      `(expected https://x.com/<handle>/status/<id>)`,
  );
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, "POST.json"));
console.log(`main.ts: copied POST.json for post ${parsed.url} to ${outputDir}`);
