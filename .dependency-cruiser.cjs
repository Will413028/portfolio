/**
 * Layering of src/ (a layer may import only the layers below it):
 *
 *   app/, proxy.ts                                 top: routes and middleware
 *   components/layout, components/analytics.tsx    page chrome
 *   components/shared                              reusable sections
 *   i18n/                                          locale routing
 *   lib/                                           data and helpers, imports nothing in src/
 *
 * Rule paths are checked by src/__tests__/architecture.test.ts: every rule must
 * fire on a violating fixture and every layer pattern must match a real file.
 */

/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    {
      name: "no-circular",
      severity: "error",
      comment: "Import cycles make modules impossible to understand or test on their own.",
      from: { path: "^src/" },
      to: { circular: true },
    },
    {
      name: "lib-imports-nothing-in-src",
      severity: "error",
      comment: "lib/ is the bottom layer: it must not import any other part of src/.",
      from: { path: "^src/lib/", pathNot: "^src/lib/__tests__/" },
      to: { path: "^src/", pathNot: "^src/lib/" },
    },
    {
      name: "i18n-only-imports-lib",
      severity: "error",
      comment: "i18n/ may import only lib/.",
      from: { path: "^src/i18n/" },
      to: { path: "^src/", pathNot: "^src/(i18n|lib)/" },
    },
    {
      name: "shared-only-imports-i18n-and-lib",
      severity: "error",
      comment: "components/shared may import only i18n/ and lib/.",
      from: { path: "^src/components/shared/" },
      to: { path: "^src/", pathNot: "^src/(components/shared|i18n|lib)/" },
    },
    {
      name: "components-not-to-app",
      severity: "error",
      comment: "Components sit below app/ and must not import routes or middleware.",
      from: { path: "^src/components/" },
      to: { path: "^src/(app/|proxy\\.ts$)" },
    },
  ],
  options: {
    doNotFollow: { path: ["node_modules"] },
    exclude: { path: ["^src/__tests__/fixtures/"] },
    tsPreCompilationDeps: true,
    tsConfig: { fileName: "tsconfig.json" },
    enhancedResolveOptions: {
      exportsFields: ["exports"],
      conditionNames: ["import", "require", "node", "default"],
    },
  },
};
