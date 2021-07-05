import sgMail from '@sendgrid/mail';
import User from '../../../db/models/User';

export const waitListSignup: Resolvers.MutationResolvers['waitListSignup'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Waitlist signup:', args.email);

		sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

		const existing = await User.query().where({ email: args.email });

		if (existing) {
			throw new Error('Already signed up!');
		}

		await sgMail.send({
			to: [args.email],
			from: { email: 'corporate@dndsidekick.com', name: '5ESidekick' },
			subject: 'Thank you for signing up for the waitlist!',
			templateId: 'd-ed7655dc6ba14b2a9051b86239fc9e70',
			personalizations: [
				{
					to: [{ email: args.email }]
				}
			]
		});

		await User.query().insertAndFetch({
			email: args.email,
			password: 'waitlisted',
			name: 'Unknown',
			createdAt: new Date().toString()
		});

		return true;
	};
