import { login } from './mutation/user/login';
import { signup } from './mutation/user/signup';
import { getUser } from './query/user/getUser';

export const resolvers: Resolvers.Resolvers = {
	Query: <Resolvers.QueryResolvers>{
		getUser: getUser
	},
	Mutation: <Resolvers.MutationResolvers>{
		login: login,
		signup: signup
	}
};
