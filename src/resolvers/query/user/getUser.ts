import User from '../../../db/models/User';
import { signJWT } from '../../../services/AuthenticationService';

export const getUser: Resolvers.QueryResolvers['getUser'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Resolvers: Query: getUser');

	const user = await User.query().findById(args.id);

	if (!user) {
		throw new Error('User not found!');
	}

	const token = await signJWT({
		authenticated: true,
		logger: context.logger,
		request: {} as any,
		response: {} as any,
		valid: true,
		session: { userId: user.id, username: user.email }
	});

	return { ...user, token };
};
