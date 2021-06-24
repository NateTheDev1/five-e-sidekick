import { Soundboard } from '../../../db/models/Soundboard';

export const deleteSoundboard: Resolvers.MutationResolvers['deleteSoundboard'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Resolvers: Mutation: deletingSoundboard');

		if (!context.session?.userId) {
			throw new Error('Access Denied');
		}

		try {
			await Soundboard.query().deleteById(args.soundboardId);
		} catch (e) {
			throw new Error(e);
		}

		return true;
	};
