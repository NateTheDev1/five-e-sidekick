import { resolve } from 'path';
import { print } from 'graphql';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';

const schemaFolderPath = resolve(__dirname, './', 'schemaFiles');

const typesArray = loadFilesSync(schemaFolderPath, {
	recursive: true,
	extensions: ['graphql']
});

export const typeDefs = mergeTypeDefs([...typesArray], {
	throwOnConflict: true
});

export const schema = print(typeDefs);
