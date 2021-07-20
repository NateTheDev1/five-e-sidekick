import { DevUpdate } from '../../../db/models/DevUpdate';

export const publishUpdate: Resolvers.MutationResolvers['publishUpdate'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Resolvers: Mutation: publishUpdate');

		const newest = await DevUpdate.query().insertAndFetch({
			...args.update
		});

		return newest;
	};
