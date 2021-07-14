import { Character } from '../../../db/models/Character';

export const finalizeCharacter: Resolvers.MutationResolvers['finalizeCharacter'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Finalizing character');

		const updatedCharacter = await Character.query().patchAndFetchById(
			args.input.characterId,
			{
				...args.input.character,
				userId: args.input,
				characterStep: 100,
				status: 'Completed'
			}
		);

		return updatedCharacter;
	};
