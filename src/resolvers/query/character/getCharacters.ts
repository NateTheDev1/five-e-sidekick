import { Character } from '../../../db/models/Character';

export const getCharacters: Resolvers.QueryResolvers['getCharacters'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	const characters = await Character.query().where({ userId: args.userId });

	return characters;
};
