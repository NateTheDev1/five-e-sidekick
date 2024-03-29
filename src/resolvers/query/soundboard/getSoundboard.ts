import { Soundboard } from '../../../db/models/Soundboard';
import { SoundboardLinks } from '../../../db/models/SoundboardLinks';

export const getSoundboards: Resolvers.QueryResolvers['getSoundboards'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Resolvers: Query: getSoundboards');

		const soundboards = await Soundboard.query().where({
			userId: context.session?.userId
		});

		if (!soundboards) {
			throw new Error('Soundboards not found!');
		}

		return soundboards as any;
	};

export const getSoundboard: Resolvers.QueryResolvers['getSoundboard'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Resolvers: Query: getSoundboard');

	const soundboard = await Soundboard.query()
		.where({
			id: args.soundboardId
		})
		.first();

	if (!soundboard) {
		throw new Error('Soundboard not found!');
	}

	return soundboard as any;
};

export const SoundboardResolvers: Resolvers.SoundboardResolvers = {
	links: async (parent, args, context) => {
		return SoundboardLinks.query().where({
			soundboardId: parent.id
		});
	}
};
