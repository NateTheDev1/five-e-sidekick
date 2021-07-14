import { Character } from '../../../db/models/Character';

export const initializeCharacter: Resolvers.MutationResolvers['initializeCharacter'] =
	async (parent, args, context: Services.ServerContext) => {
		const newCharacter = await Character.query().insertAndFetch({
			...args.input.character,
			userId: args.input.userId,
			characterStep: 1,
			status: 'In Progress'
		});

		return newCharacter;
	};
