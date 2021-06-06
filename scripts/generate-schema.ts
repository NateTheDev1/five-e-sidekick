import { resolve } from "path";
import { readFileSync, writeFileSync } from "fs";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { print } from "graphql";

const schemaFolderPath = resolve(
  __dirname,
  "..",
  "src",
  "schema",
  "schemaFiles"
);
const schemaOutputPath = resolve(__dirname, "..", "generated-schema.graphql");
const warningFilePath = resolve(__dirname, "..", "build", "warning.txt");

const typesArray = loadFilesSync(schemaFolderPath, {
  recursive: true,
  extensions: ["graphql"],
});

export const typeDefs = mergeTypeDefs([...typesArray], {
  throwOnConflict: true,
});

const schema = print(typeDefs);

writeFileSync(schemaOutputPath, schema, "utf8");
