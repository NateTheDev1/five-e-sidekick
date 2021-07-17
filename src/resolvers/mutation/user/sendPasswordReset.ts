import { randomUUID } from 'crypto';
import { PasswordResets } from '../../../db/models/PasswordResets';
import User from '../../../db/models/User';
import sgMail from '@sendgrid/mail';

export const sendPasswordReset: Resolvers.MutationResolvers['sendPasswordReset'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Resolvers: Mutation: sendPasswordReset');

		if (!context.session?.userId || !context.authenticated) {
			throw new Error('Not logged in');
		}

		if (context.session && context.session.userId) {
			const user = await User.query().findById(context.session.userId);

			if (!user) {
				throw new Error('No User!');
			}

			const code = randomUUID();

			const reset = await PasswordResets.query().insertAndFetch({
				code,
				forEmail: user.email
			});

			sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

			await sgMail.send({
				to: [user.email],
				from: {
					email: 'corporate@dndsidekick.com',
					name: '5ESidekick'
				},
				subject:
					'You have requested to reset your password on DNDSidekick',
				templateId: 'd-a571aa7478434947825c54117c9fb4c3',
				personalizations: [
					{
						to: [{ email: user.email }],
						dynamicTemplateData: {
							link: `https://www.dndsidekick.com/forgot-password/reset/${code}`,
							mobileURL: `dndsidekick://forgot-password/reset/${code}`
						}
					}
				]
			});

			return true;
		}

		return false;
	};
