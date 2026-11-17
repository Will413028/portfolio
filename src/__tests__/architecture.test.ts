import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import {
  cruise,
  type IConfiguration,
  type IRegularForbiddenRuleType,
} from "dependency-cruiser";
import { afterAll, describe, expect, test } from "vitest";

const root = resolve(__dirname, "../..");
const require = createRequire(import.meta.url);
const config: IConfiguration = require(join(root, ".dependency-cruiser.cjs"));
const rules = config.forbidden as IRegularForbiddenRuleType[];

// One violating import per rule, laid out like src/ in a throwaway directory.
const fixtures: Record<string, Record<string, string>> = {
  "no-circular": {
    "src/lib/a.ts": 'import { b } from "./b";\nexport const a = b;\n',
    "src/lib/b.ts": 'import { a } from "./a";\nexport const b = a;\n',
  },
  "lib-imports-nothing-in-src": {
    "src/lib/data.ts":
      'import { routing } from "../i18n/routing";\nexport const d = routing;\n',
    "src/i18n/routing.ts": "export const routing = 1;\n",
  },
  "i18n-only-imports-lib": {
    "src/i18n/routing.ts":
      'import { Hero } from "../components/shared/Hero";\nexport const r = Hero;\n',
    "src/components/shared/Hero.ts": "export const Hero = 1;\n",
  },
  "shared-only-imports-i18n-and-lib": {
    "src/components/shared/Hero.ts":
      'import { Header } from "../layout/header";\nexport const Hero = Header;\n',
    "src/components/layout/header.ts": "export const Header = 1;\n",
  },
  "components-not-to-app": {
    "src/components/layout/header.ts":
      'import { page } from "../../app/page";\nexport const Header = page;\n',
    "src/app/page.ts": "export const page = 1;\n",
  },
};

const tempDirs: string[] = [];
afterAll(() => {
  for (const dir of tempDirs) rmSync(dir, { recursive: true, force: true });
});

async function violationsIn(files: Record<string, string>): Promise<string[]> {
  const dir = mkdtempSync(join(tmpdir(), "arch-fixture-"));
  tempDirs.push(dir);
  for (const [path, content] of Object.entries(files)) {
    mkdirSync(dirname(join(dir, path)), { recursive: true });
    writeFileSync(join(dir, path), content);
  }
  const previous = process.cwd();
  process.chdir(dir);
  try {
    const result = await cruise(["src"], {
      ruleSet: { forbidden: rules },
      validate: true,
    });
    const output = result.output as Exclude<typeof result.output, string>;
    return output.summary.violations.map((v) => v.rule.name);
  } finally {
    process.chdir(previous);
  }
}

describe("dependency rules", () => {
  test("every rule has a violating fixture", () => {
    expect(Object.keys(fixtures).sort()).toEqual(
      rules.map((r) => r.name as string).sort(),
    );
  });

  test.each(rules.map((r) => r.name as string))(
    "%s fires on its fixture",
    async (name) => {
      expect(await violationsIn(fixtures[name])).toContain(name);
    },
  );

  test("every layer pattern in a rule matches a real file", () => {
    const files = readdirSync(join(root, "src"), {
      recursive: true,
      encoding: "utf8",
    })
      .filter((f) => /\.tsx?$/.test(f))
      .map((f) => `src/${f}`);
    const patterns = rules
      .flatMap((r) => [r.from.path, r.to.path])
      .filter((p): p is string => typeof p === "string");
    for (const pattern of patterns) {
      expect(
        files.some((f: string) => new RegExp(pattern).test(f)),
        pattern,
      ).toBe(true);
    }
  });

  test("the known-violations baseline stays at its locked size", () => {
    const baselinePath = join(
      root,
      ".dependency-cruiser-known-violations.json",
    );
    expect(existsSync(baselinePath)).toBe(true);
    const known = JSON.parse(readFileSync(baselinePath, "utf8"));
    // Locked at the current count; lower it in the same change that removes a violation.
    expect(known).toHaveLength(0);
  });
});
