import { DevUpdate } from '../../../db/models/DevUpdate';

export const editUpdate: Resolvers.MutationResolvers['editUpdate'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Resolvers: Mutation: editUpdate');

	const patched = await DevUpdate.query().patchAndFetchById(args.id, {
		...args.update
	});

	return patched;
};
