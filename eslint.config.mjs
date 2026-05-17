import nextConfig from "eslint-config-next";
import nextTypescriptConfig from "eslint-config-next/typescript";
import nextCoreWebVitalsConfig from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextConfig,
  ...nextTypescriptConfig,
  ...nextCoreWebVitalsConfig,
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
