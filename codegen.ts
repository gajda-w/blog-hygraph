import type { CodegenConfig } from "@graphql-codegen/cli";
import { baseConfig, baseOutput } from "./codegen.base";

const config: CodegenConfig = {
  ...baseConfig,
  overwrite: true,
  schema:
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cli7ntz093lgr01uhhildal6x/master",
  documents: "src/graphql/**/*.{ts,graphql}",
  generates: {
    "src/api/api.tsx": baseOutput,
  },
};

export default config;
