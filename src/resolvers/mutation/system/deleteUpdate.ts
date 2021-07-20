import { DevUpdate } from '../../../db/models/DevUpdate';

export const deleteUpdate: Resolvers.MutationResolvers['deleteUpdate'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Resolvers: Mutation: deleteUpdate');

	const deleted = await DevUpdate.query().deleteById(args.id);

	return deleted > 0 ? true : false;
};
