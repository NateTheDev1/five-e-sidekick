import { Soundboard } from '../../../db/models/Soundboard';
import { SoundboardLinks } from '../../../db/models/SoundboardLinks';

export const addSoundboardLink: Resolvers.MutationResolvers['addSoundboardLink'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Resolvers: Mutation: addingSoundboardLink');

		if (!context.session?.userId) {
			throw new Error('Access Denied');
		}

		const created = await SoundboardLinks.query().insertAndFetch({
			title: args.link.title,
			url: args.link.url,
			soundboardId: args.link.soundboardId
		});

		return true;
	};
