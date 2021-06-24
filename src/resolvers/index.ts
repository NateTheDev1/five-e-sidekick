import { appleLogin, login } from './mutation/user/login';
import { signup } from './mutation/user/signup';
import {
	getSoundboards,
	SoundboardResolvers
} from './query/soundboard/getSoundboard';
import { getUser } from './query/user/getUser';

export const resolvers: Resolvers.Resolvers = {
	Query: <Resolvers.QueryResolvers>{
		getUser: getUser,
		getSoundboards: getSoundboards
	},
	Soundboard: SoundboardResolvers,
	Mutation: <Resolvers.MutationResolvers>{
		login: login,
		signup: signup,
		appleLogin: appleLogin
	}
};
