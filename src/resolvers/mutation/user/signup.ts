import User from '../../../db/models/User';
import { signJWT } from '../../../services/AuthenticationService';

export const signup: Resolvers.MutationResolvers['signup'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Resolvers: Mutation: signup');

	const existingUser = await User.query()
		.where({ email: args.user.email })
		.first();

	if (existingUser) {
		throw new Error('User already exists!');
	}

	const user = await User.query().insertAndFetch({
		email: args.user.email,
		password: args.user.password,
		name: args.user.name,
		createdAt: new Date().toString()
	});

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
