import { Soundboard } from '../../../db/models/Soundboard';
import { SoundboardLinks } from '../../../db/models/SoundboardLinks';

export const getSoundboards: Resolvers.QueryResolvers['getSoundboards'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Resolvers: Query: getSoundboard');

		const soundboards = await Soundboard.query().where({
			userId: args.userId
		});

		if (!soundboards) {
			throw new Error('Soundboards not found!');
		}

		return soundboards as any;
	};

export const SoundboardResolvers: Resolvers.SoundboardResolvers = {
	links: async (parent, args, context) => {
		return SoundboardLinks.query().where({
			soundboardId: parent.id
		});
	}
};
