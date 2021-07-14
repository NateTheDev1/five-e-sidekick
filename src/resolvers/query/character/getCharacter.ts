import { Character } from '../../../db/models/Character';

export const getCharacter: Resolvers.QueryResolvers['getCharacter'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	const character = await Character.query().findById(args.id);

	return character;
};
