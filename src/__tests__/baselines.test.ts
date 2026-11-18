import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { describe, expect, test } from "vitest";

// Each baseline is locked at its current size: it may only shrink. Lower the
// number in the same change that removes an entry; raising it needs a reason
// in the commit message.
const root = resolve(__dirname, "../..");

// Every tracked script in the repository, not only src/: e2e, scripts and root
// config files are type-checked too.
const sourceFiles = execFileSync("git", ["ls-files"], {
  cwd: root,
  encoding: "utf8",
})
  .split("\n")
  .filter((f) => /\.(ts|tsx|js|jsx|mjs|cjs)$/.test(f))
  // This file names the patterns it counts, so it is left out.
  .filter((f) => f !== "src/__tests__/baselines.test.ts")
  .map((f) => join(root, f));

function countMatches(pattern: RegExp): number {
  let count = 0;
  for (const file of sourceFiles) {
    count += (readFileSync(file, "utf8").match(pattern) ?? []).length;
  }
  return count;
}

describe("locked baselines", () => {
  test("finds source files to scan", () => {
    expect(sourceFiles.length).toBeGreaterThan(30);
  });

  test("biome suppression comments stay at 2", () => {
    expect(countMatches(/biome-ignore/g)).toBe(2);
  });

  test("TypeScript and ESLint suppression comments stay at 0", () => {
    expect(
      countMatches(/@ts-ignore|@ts-expect-error|@ts-nocheck|eslint-disable/g),
    ).toBe(0);
  });

  test("rules turned off in biome.json stay at 4", () => {
    const biome = readFileSync(join(root, "biome.json"), "utf8");
    expect((biome.match(/"off"/g) ?? []).length).toBe(4);
  });

  test("knip ignore entries stay at 7", () => {
    const knip = JSON.parse(readFileSync(join(root, "knip.json"), "utf8"));
    const entries =
      knip.ignoreBinaries.length +
      knip.ignoreDependencies.length +
      Object.keys(knip.ignoreIssues).length;
    expect(entries).toBe(7);
    expect(Object.keys(knip).sort()).toEqual(
      [
        "$schema",
        "ignoreBinaries",
        "ignoreDependencies",
        "ignoreIssues",
      ].sort(),
    );
  });
});
