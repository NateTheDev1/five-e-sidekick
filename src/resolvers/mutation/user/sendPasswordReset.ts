import { randomUUID } from 'crypto';
import { PasswordResets } from '../../../db/models/PasswordResets';
import User from '../../../db/models/User';
import sgMail from '@sendgrid/mail';

export const sendPasswordReset: Resolvers.MutationResolvers['sendPasswordReset'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Resolvers: Mutation: sendPasswordReset');

		const user = await User.query().where({ email: args.email }).first();

		if (!user) {
			throw new Error('No User!');
		}

		const code = randomUUID();

		await PasswordResets.query().insert({
			code,
			forEmail: user.email
		});

		sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

		await sgMail.send({
			to: [user.email],
			from: {
				email: 'corporate@dndsidekick.com',
				name: 'DNDSidekick'
			},
			subject: 'You have requested to reset your password on DNDSidekick',
			templateId: 'd-a571aa7478434947825c54117c9fb4c3',
			personalizations: [
				{
					to: [{ email: user.email }],
					subject:
						'You have requested to reset your password on DNDSidekick',
					dynamicTemplateData: {
						link: `https://www.dndsidekick.com/forgot-password/reset/${code}`,
						url: `dndsidekick://--/forgot-password/reset/${code}`
					},
					//@ts-ignore
					dynamic_template_data: {
						link: `https://www.dndsidekick.com/forgot-password/reset/${code}`,
						url: `dndsidekick://--/forgot-password/reset/${code}`
					}
				}
			],
			dynamicTemplateData: {
				link: `https://www.dndsidekick.com/forgot-password/reset/${code}`,
				url: `dndsidekick://--/forgot-password/reset/${code}`
			}
		});

		return true;
	};
