import type { CodegenConfig } from "@graphql-codegen/cli";

export const baseOutput = {
  plugins: [
    "typescript",
    "typescript-operations",
    "typescript-react-apollo",
    "typescript-apollo-client-helpers",
  ],
  config: {
    scalars: {
      JSONString: "string",
      UUID: "string",
      Metadata: "Record<string, string>",
      DateTime: "string",
      useTypeImports: true,
      dedupeOperationSuffix: true,
    },
    dedupeOperationSuffix: true, // Prevent suffix duplication in generated names,
    enumsAsTypes: true,
  },
};

export const baseConfig: Partial<CodegenConfig> = {
  overwrite: true,
  hooks: {
    afterOneFileWrite: ["prettier --write"],
  },
};
