import { api } from '..';
import { Background } from '../types';

export const Sage: Background = {
	name: 'Sage',
	description:
		'You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you. Your efforts have made you a master in your fields of study.',
	proficiencies: [40, 38],
	backgroundFeatures: [api.getBackgroundFeature(6)],
	languageAdditions: { choose: 2, from: api.getLanguages() },
	traitsSelection: {
		traits: {
			roll: { sides: 8, amount: 1 },
			selections: api.getPersonalCharacteristics([
				131, 132, 133, 134, 135, 136, 137, 138
			])
		},
		ideals: {
			roll: { sides: 6, amount: 1 },
			selections: api.getPersonalCharacteristics([
				139, 140, 141, 142, 143, 144
			])
		},
		flaws: {
			roll: { sides: 6, amount: 1 },
			selections: api.getPersonalCharacteristics([
				145, 146, 147, 148, 149, 150
			])
		},
		bonds: {
			roll: { sides: 6, amount: 1 },
			selections: api.getPersonalCharacteristics([
				151, 152, 153, 154, 155, 156
			])
		}
	},
	proficencyAddition: {
		title: '',
		choose: 0,
		from: []
	}
};
