import { Soundboard } from '../../../db/models/Soundboard';
import { SoundboardLinks } from '../../../db/models/SoundboardLinks';

export const deleteSoundboardLink: Resolvers.MutationResolvers['deleteSoundboardLink'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Resolvers: Mutation: deletingSoundboardLink');

		if (!context.session?.userId) {
			throw new Error('Access Denied');
		}

		await SoundboardLinks.query().deleteById(args.linkId);

		return true;
	};
