import e from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';

export const initializeMiddleware = (app: e.Application) => {
	app.use(cors());

	dotenv.config();

	if (process.env.NODE_ENV === 'development') {
		switch (process.env.LOG_LEVEL) {
			case 'ALL':
				app.use(morgan('default'));
				break;
			case 'MINIMAL':
				app.use(morgan('dev'));
				break;
			default:
				'NONE';
				break;
		}
	}
};
