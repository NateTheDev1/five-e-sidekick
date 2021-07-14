import { characterStep } from './mutation/character/characterStep';
import { finalizeCharacter } from './mutation/character/finalizeCharacter';
import { initializeCharacter } from './mutation/character/initializeCharacter';
import { addSoundboardLink } from './mutation/soundboard/addSoundboardLink';
import { createSoundboard } from './mutation/soundboard/createSoundboard';
import { deleteSoundboard } from './mutation/soundboard/deleteSoundboard';
import { deleteSoundboardLink } from './mutation/soundboard/deleteSoundboardLink';
import { appleLogin, login } from './mutation/user/login';
import { signup } from './mutation/user/signup';
import { waitListSignup } from './mutation/user/waitListSignup';
import { getCharacter } from './query/character/getCharacter';
import { getInventory } from './query/character/getInventory';
import {
	getSoundboard,
	getSoundboards,
	SoundboardResolvers
} from './query/soundboard/getSoundboard';
import { getUser } from './query/user/getUser';

export const resolvers: Resolvers.Resolvers = {
	Query: <Resolvers.QueryResolvers>{
		getUser: getUser,
		getSoundboards: getSoundboards,
		getSoundboard: getSoundboard,
		getCharacter: getCharacter,
		getInventory: getInventory
	},
	Soundboard: SoundboardResolvers,
	Mutation: <Resolvers.MutationResolvers>{
		login: login,
		signup: signup,
		appleLogin: appleLogin,
		createSoundboard: createSoundboard,
		addSoundboardLink: addSoundboardLink,
		deleteSoundboardLink: deleteSoundboardLink,
		deleteSoundboard: deleteSoundboard,
		waitListSignup: waitListSignup,
		initializeCharacter: initializeCharacter,
		finalizeCharacter: finalizeCharacter,
		characterStep: characterStep
	}
};
