import assert from "node:assert/strict";
import test from "node:test";

import { DEADLINES } from "../src/data/deadlines.ts";
import { RESOURCES } from "../src/data/resources.ts";
import { SITE_CONFIG } from "../src/data/siteConfig.ts";

test("deadline IDs are unique", () => {
  const ids = DEADLINES.map((deadline) => deadline.id);
  assert.equal(new Set(ids).size, ids.length);
});

test("verified deadlines have valid sources and review dates", () => {
  for (const deadline of DEADLINES.filter((item) => item.verified)) {
    assert.doesNotThrow(() => new URL(deadline.sourceUrl), `${deadline.id} needs a valid source URL`);
    assert.match(deadline.lastVerified, /^\d{4}-\d{2}-\d{2}$/, `${deadline.id} needs a review date`);
  }
});

test("resource URLs are valid and unique", () => {
  const urls = RESOURCES.map((resource) => resource.url);
  for (const url of urls) assert.doesNotThrow(() => new URL(url));
  assert.equal(new Set(urls).size, urls.length);
});

test("site ownership points to the canonical AdvancedForge locations", () => {
  assert.equal(SITE_CONFIG.githubUrl, "https://github.com/AdvancedForge/se31-website");
  assert.equal(SITE_CONFIG.siteUrl, "https://advancedforge.github.io/se31-website/");
});

test("site identity uses the SE31 Build Log brand", () => {
  assert.equal(SITE_CONFIG.siteTitle, "SE31 Build Log");
  assert.equal(SITE_CONFIG.tagline, "Built together. Kept useful.");
});
