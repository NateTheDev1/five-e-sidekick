import { DevUpdate } from '../../../db/models/DevUpdate';

export const getLatestUpdate: Resolvers.QueryResolvers['getLatestUpdate'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Resolvers: Query: getLatestUpdate');

		const latest = await DevUpdate.query().orderBy('id', 'DESC').first();

		return latest;
	};
