import dotenv from 'dotenv';

dotenv.config();

const pg = require('pg');
pg.defaults.ssl = true;

const config = {
	development: {
		client: 'pg',
		connection: process.env.DB_URL
	}
};

export default config;
