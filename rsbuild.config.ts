import path from "node:path";
import { defineConfig } from "@rsbuild/core";
import { pluginCheckSyntax } from "@rsbuild/plugin-check-syntax";

export default defineConfig({
  source: {
    include: [path.dirname(require.resolve("zod"))],
  },
  plugins: [pluginCheckSyntax()],
  output: {
    polyfill: "entry",
  },
});
