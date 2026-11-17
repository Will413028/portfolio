// Fails when fewer tests ran than the locked minimum, so a test file that stops
// loading cannot pass CI silently. Raise MIN_TESTS when tests are added; lowering
// it needs a commit message that lists the removed tests.
import { readFileSync } from "node:fs";

const MIN_TESTS = 53;
const report = JSON.parse(readFileSync(process.argv[2] ?? "vitest-report.json", "utf8"));
const { numTotalTests, numPassedTests, numFailedTestSuites } = report;

if (numFailedTestSuites > 0 || numTotalTests < MIN_TESTS || numPassedTests !== numTotalTests) {
  console.error(
    `test count check failed: ${numPassedTests}/${numTotalTests} passed, ` +
      `${numFailedTestSuites} suites failed to run, minimum is ${MIN_TESTS}`,
  );
  process.exit(1);
}
console.log(`test count check passed: ${numTotalTests} tests (minimum ${MIN_TESTS})`);
