import e from 'express';
import { logger } from '../utils/logger';
import { AuthenticationError } from 'apollo-server';
import jwt from 'jsonwebtoken';

export class Context {
	valid: boolean;
	request: e.Request;
	response: e.Response;
	token: string | undefined;
	session: Session | undefined;

	constructor(req: e.Request, res: e.Response) {
		this.request = req;
		this.response = res;
		this.valid = false;
	}

	async Initialize(): Promise<Services.SerializedContext> {
		this.session = await this.checkHeaders();

		return this.serialize();
	}

	async checkHeaders(): Promise<Session | undefined> {
		logger.info(
			'Headers: Authorization: ' + this.request.headers.authorization
		);

		logger.info(
			this.request.headers.authorization !== undefined &&
				this.request.headers.authorization.length > 0 &&
				this.request.headers.authorization !== null
		);
		if (
			this.request.headers.authorization &&
			this.request.headers.authorization.length > 0
		) {
			this.token = this.request.headers.authorization;
			const decoded = await this.validateAndDecodeJWT();

			return decoded as unknown as Session;
		}
	}

	async validateAndDecodeJWT(): Promise<Authentication.DecodedResult> {
		if (!this.token) {
			logger.err('Error with token!');
			throw new AuthenticationError('Error With Token!');
		}

		const decoded: any = jwt.decode(this.token);

		if (!decoded) {
			logger.err('Critical Server Error. No decoded JWT returned!');
			throw new Error('Critical Server Error.');
		}

		return {
			username: decoded.username,
			userId: decoded.userId
		};
	}

	serialize(): Services.SerializedContext {
		return {
			token: this.token,
			request: this.request,
			response: this.response,
			valid: this.valid,
			session: this.session
		};
	}
}

export const createContext = async (
	req: e.Request,
	res: e.Response
): Promise<Services.ServerContext> => {
	if (!req) {
		return {
			token: '',
			request: req,
			response: res,
			valid: false,
			session: {} as any,
			logger,
			authenticated: false
		};
	}

	const context = await new Context(req, res).Initialize();

	return {
		...context,
		logger,
		authenticated: context.session ? true : false
	};
};
