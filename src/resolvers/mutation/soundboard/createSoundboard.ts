import { Soundboard } from '../../../db/models/Soundboard';

export const createSoundboard: Resolvers.MutationResolvers['createSoundboard'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Resolvers: Mutation: creatingSoundboard');

		if (!context.session?.userId) {
			throw new Error('Access Denied');
		}

		const created = await Soundboard.query().insertAndFetch({
			title: args.title,
			userId: context.session.userId
		});

		return { ...created, links: [] };
	};
