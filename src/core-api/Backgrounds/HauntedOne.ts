import { api } from '..';
import { Background } from '../types';

export const HauntedOne: Background = {
	name: 'Haunted One',
	description:
		'You are haunted by something so terrible that you dare not speak of it. You’ve tried to bury it and run away from it, to no avail. Whatever this thing is that haunts you can’t be slain with a sword or banished with a spell. It might come to you as a shadow on the wall, a bloodcurdling nightmare, a memory that refuses to die, or a demonic whisper in the dark. The burden has taken its toll, isolating you from most people and making you question your sanity. You must find a way to overcome it before it destroys you.',
	proficiencies: [],
	backgroundFeatures: [api.getBackgroundFeature(5)],
	languageAdditions: { choose: 2, from: api.getLanguages() },
	traitsSelection: {
		traits: {
			roll: { sides: 8, amount: 1 },
			selections: api.getPersonalCharacteristics([
				105, 106, 107, 108, 109, 110, 111, 112
			])
		},
		ideals: {
			roll: { sides: 6, amount: 1 },
			selections: api.getPersonalCharacteristics([
				113, 114, 115, 116, 117, 118
			])
		},
		flaws: {
			roll: { sides: 6, amount: 1 },
			selections: api.getPersonalCharacteristics([
				119, 120, 121, 122, 123, 124
			])
		},
		bonds: {
			roll: { sides: 6, amount: 1 },
			selections: api.getPersonalCharacteristics([
				125, 126, 127, 128, 129, 130
			])
		}
	},
	proficencyAddition: {
		title: 'Choose 2 additional proficiencies',
		choose: 1,
		from: api.getProficiencies([40, 41, 11, 20])
	}
};
