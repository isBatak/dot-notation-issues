const withBundleAnalyzer = require("@next/bundle-analyzer")({
  // eslint-disable-next-line turbo/no-undeclared-env-vars -- ok bro
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  /**
   * Next.js can automatically transpile and bundle dependencies from local packages (like monorepos) or from external dependencies (node_modules).
   * This replaces the next-transpile-modules package.
   */
  transpilePackages: ["ui"],
  experimental: {
    /**
     * Some packages can export hundreds or thousands of modules, which can cause performance issues in development and production.
     * Adding a package to experimental.optimizePackageImports will only load the modules you are actually using, while still giving you the convenience of writing import statements with many named exports.
     */
    optimizePackageImports: ["ui"],
    externalDir: true,
  },
});
