import { api } from '..';
import { Background } from '../types';

export const Criminal: Background = {
	name: 'Criminal',
	description:
		'You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other criminals and still have contacts within the criminal underworld. You’re far closer than most people to the world of murder, theft, and violence that pervades the underbelly of civilization, and you have survived up to this point by flouting the rules and regulations of society.',
	proficiencies: [12, 13, 14],
	backgroundFeatures: [api.getBackgroundFeature(2)],
	languageAdditions: { choose: 0, from: [] },
	traitsSelection: {
		traits: {
			roll: { sides: 8, amount: 1 },
			selections: api.getPersonalCharacteristics([
				27, 28, 29, 30, 31, 32, 33, 34
			])
		},
		ideals: {
			roll: { sides: 6, amount: 1 },
			selections: api.getPersonalCharacteristics([35, 36, 37, 38, 39, 40])
		},
		flaws: {
			roll: { sides: 6, amount: 1 },
			selections: api.getPersonalCharacteristics([47, 48, 49, 50, 51, 52])
		},
		bonds: {
			roll: { sides: 6, amount: 1 },
			selections: api.getPersonalCharacteristics([41, 42, 43, 44, 45, 46])
		}
	},
	proficencyAddition: {
		title: 'Choose a gaming set',
		choose: 1,
		from: api.getProficiencies([15, 16, 17, 18])
	}
};
