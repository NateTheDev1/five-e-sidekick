import { PasswordResets } from '../../../db/models/PasswordResets';
import User from '../../../db/models/User';
import { AuthenticationService } from '../../../services/AuthenticationService';

export const resetPasswordFromCode: Resolvers.MutationResolvers['resetPasswordFromCode'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Resolvers: Mutation: resetPasswordFromCode');

		const existingCode = await PasswordResets.query()
			.where({
				code: args.credentials.code
			})
			.first();

		if (!existingCode) {
			throw new Error('Code has expired!');
		}

		await User.query().where({
			email: existingCode.forEmail,
			password: await new AuthenticationService(
				args.credentials.newPassword
			).hashPassword()
		});

		await PasswordResets.query().deleteById(existingCode.id);

		return true;
	};
