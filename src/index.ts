import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import e from 'express';

import { resolvers } from './resolvers';

// Other
import dotenv from 'dotenv';
import { logger } from './utils/logger';
import { createServer } from 'http';
import { initializeMiddleware } from './services/MiddlewareService';
import { typeDefs } from './schema';
import { createContext } from './services/ContextService';

dotenv.config();

const PORT = process.env.PORT;

logger.info('Starting up...');

const server = new ApolloServer({
	typeDefs: typeDefs,
	resolvers,
	context: async ({ req, res }: { req: e.Request; res: e.Response }) => {
		logger.info('Running Context');

		return await createContext(req, res);
	},
	subscriptions: {
		path: '/subscriptions',
		onConnect: (connectionParams, webSocket, context) => {
			logger.info('Connected!');
		},
		onDisconnect: (webSocket, context) => {
			logger.warn('Disconnected!');
		}
	}
});

const app = express();

initializeMiddleware(app);

server.applyMiddleware({ app: app as any });

const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => {
	console.log(
		`🚀 Subscription endpoint ready at ws://localhost:${PORT}${server.subscriptionsPath}`
	);
	console.info(
		`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
	);
});
