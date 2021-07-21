import { characterStep } from './mutation/character/characterStep';
import { finalizeCharacter } from './mutation/character/finalizeCharacter';
import { initializeCharacter } from './mutation/character/initializeCharacter';
import { addSoundboardLink } from './mutation/soundboard/addSoundboardLink';
import { createSoundboard } from './mutation/soundboard/createSoundboard';
import { deleteSoundboard } from './mutation/soundboard/deleteSoundboard';
import { deleteSoundboardLink } from './mutation/soundboard/deleteSoundboardLink';
import { deleteUpdate } from './mutation/system/deleteUpdate';
import { editUpdate } from './mutation/system/editUpdate';
import { publishUpdate } from './mutation/system/publishUpdate';
import { appleLogin, login } from './mutation/user/login';
import { resetPasswordFromCode } from './mutation/user/resetPasswordFromCode';
import { sendPasswordReset } from './mutation/user/sendPasswordReset';
import { signup } from './mutation/user/signup';
import { waitListSignup } from './mutation/user/waitListSignup';
import { getCharacter } from './query/character/getCharacter';
import { getInventory } from './query/character/getInventory';
import {
	getSoundboard,
	getSoundboards,
	SoundboardResolvers
} from './query/soundboard/getSoundboard';
import { getLatestUpdate } from './query/system/getLatestUpdate';
import { getUser } from './query/user/getUser';
import { updateUser } from './mutation/user/updateUser';
import { getArticle, getArticles } from './query/system/article';
import { createArticle, deleteArticle } from './mutation/system/article';

export const resolvers: Resolvers.Resolvers = {
	Query: <Resolvers.QueryResolvers>{
		getUser: getUser,
		getSoundboards: getSoundboards,
		getSoundboard: getSoundboard,
		getCharacter: getCharacter,
		getInventory: getInventory,
		getLatestUpdate: getLatestUpdate,
		getArticle: getArticle,
		getArticles: getArticles
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
		characterStep: characterStep,
		sendPasswordReset: sendPasswordReset,
		resetPasswordFromCode: resetPasswordFromCode,
		publishUpdate: publishUpdate,
		deleteUpdate: deleteUpdate,
		editUpdate: editUpdate,
		updateUser: updateUser,
		createArticle: createArticle,
		deleteArticle: deleteArticle
	}
};
