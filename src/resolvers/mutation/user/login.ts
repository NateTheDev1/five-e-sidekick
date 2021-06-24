import { AuthenticationError } from 'apollo-server-errors';
import User from '../../../db/models/User';
import {
	AuthenticationService,
	signJWT
} from '../../../services/AuthenticationService';

export const appleLogin: Resolvers.MutationResolvers['appleLogin'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Resolvers: Mutation: appleLogin');

	if (context.authenticated) {
		throw new AuthenticationError('Already logged in');
	}

	const existing = await User.query().where({ email: args.email }).first();

	if (!existing) {
		const created = await User.query().insertAndFetch({
			email: args.email,
			password: 'apple_managed',
			name: args.email,
			createdAt: new Date().toString()
		});

		context.session = {
			userId: created.id,
			username: created.email
		};

		const token = await signJWT(context);

		return { ...created, token: token };
	} else {
		context.session = {
			userId: existing.id,
			username: existing.email
		};

		const token = await signJWT(context);

		return { ...existing, token: token };
	}
};

export const login: Resolvers.MutationResolvers['login'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Resolvers: Mutation: login');

	if (context.authenticated) {
		throw new AuthenticationError('Already logged in');
	}

	const userToLogin = await User.query()
		.where({ email: args.credentials.email })
		.first();

	if (!userToLogin) {
		context.logger.err('Invalid Credentials in Login Mutation');
		throw new AuthenticationError(
			'Unable to login user. Invalid Credentials'
		);
	}

	const verified = await new AuthenticationService(
		userToLogin.password
	).verifyPassword(args.credentials.password);

	if (!verified) {
		throw new AuthenticationError(
			'Unable to login user. Invalid Credentials'
		);
	}

	context.session = {
		userId: userToLogin.id,
		username: userToLogin.email
	};

	const token = await signJWT(context);

	if (!token) {
		throw new AuthenticationError('Could not create JWT!');
	}

	context.response.setHeader('Authorization', token);

	return { ...userToLogin, token };
};
