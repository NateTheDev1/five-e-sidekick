import e from 'express';

declare global {
	namespace Utilities {
		type Logger = {
			info: any;
			warn: any;
			err: any;
		};

		namespace Config {
			type ENV = {
				PORT: string;
				DB_HOST: string;
				DB_USERNAME: string;
				DB_PASSWORD: string;
				DB_NAME: string;
				LOG_LEVEL: string;
				SESSION_SECRET: string;
				SENDGRID_TOKEN: string;
				DB_URL: string;
				SENTRY_DSN: string;
				REDIS_HOST: string;
				REDIS_PORT: string;
				REDIS_PASSWORD: string;
			};
		}
	}

	namespace Authentication {
		interface DecodedResult {
			username: string;
			userId: number;
		}
	}

	namespace Services {
		type SerializedContext = {
			valid: boolean;
			request: e.Request;
			response: e.Response;
			token?: string;
			session?: Session;
		};

		type ServerContext = SerializedContext & {
			logger: debugsx.IDefaultLogger & { err?: any };
			authenticated: boolean;
		};
	}

	type Session = {
		username: string;
		userId: number;
	};
}

export {};
