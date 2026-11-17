import { defineConfig, devices } from "@playwright/test";

// Smoke tests run against a production build. They run in CI only.
export default defineConfig({
  testDir: "./e2e",
  forbidOnly: true,
  retries: 1,
  reporter: [["list"]],
  use: { baseURL: "http://localhost:3000" },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "pnpm start",
    url: "http://localhost:3000/en",
    timeout: 120_000,
    reuseExistingServer: false,
  },
});
