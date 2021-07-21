import User from '../../../db/models/User';

export const updateUser: Resolvers.MutationResolvers['updateUser'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Updating user:', args.id);

	const updated = await User.query().patchAndFetchById(args.id, {
		name: args.fullName
	});

	return updated;
};
