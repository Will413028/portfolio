import { resolve } from "node:path";
import { defineConfig } from "vitest/config";

// The suite tests the data modules in src/lib as plain functions, so it
// runs in Node without a DOM.
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "node",
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    clearMocks: true,
    restoreMocks: true,
  },
});
