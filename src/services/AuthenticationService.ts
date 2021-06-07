import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export class AuthenticationService {
	password: string;

	constructor(password: string) {
		this.password = password;
	}

	async hashPassword(): Promise<string> {
		const salt = await bcrypt.genSaltSync(10);

		return await bcrypt.hashSync(this.password, salt);
	}

	async verifyPassword(password: string) {
		return await bcrypt.compareSync(password, this.password);
	}
}

export const signJWT = async (
	session: Services.ServerContext
): Promise<string> => {
	const JWTOptions: jwt.SignOptions = {
		expiresIn: '30d'
	};

	console.info('Creating JWT');

	console.log(session.session);

	const signed = await jwt.sign(
		{ ...session.session },
		process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'TEST'
			? 'supersecret'
			: process.env.SESSION_SECRET!,
		JWTOptions
	);

	session.logger.info('JWT Created', signed.toString());

	return signed;
};
