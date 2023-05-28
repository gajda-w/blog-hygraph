
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cli7ntz093lgr01uhhildal6x/master",
  documents: "src/**/*.graphql",
  generates: {
    "src/api": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
