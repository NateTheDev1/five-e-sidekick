import debugsx from 'debug-sx';
import dotenv from 'dotenv';

dotenv.config();
process.env['DEBUG'] = '*::INFO, *::WARN, *::ERR';

export const logger: debugsx.IDefaultLogger & {
	err?: any;
} = debugsx.createDefaultLogger('main');

logger.err = debugsx('::ERR');

const h: debugsx.IHandler = debugsx.createConsoleHandler('stdout', '*');
debugsx.addHandler(h);
