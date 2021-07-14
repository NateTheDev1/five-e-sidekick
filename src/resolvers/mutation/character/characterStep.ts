import { Character } from '../../../db/models/Character';

export const characterStep: Resolvers.MutationResolvers['characterStep'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Updating character step');

		const updatedCharacter = await Character.query().patchAndFetchById(
			args.input.characterId,
			{
				...args.input.character,
				userId: args.input,
				characterStep: (args.input.character.characterStep ?? 1) + 1
			}
		);

		return updatedCharacter;
	};
