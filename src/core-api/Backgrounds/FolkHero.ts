import { api } from '..';
import { Background } from '../types';

export const FolkHero: Background = {
	name: 'Folk Hero',
	description:
		'You come from a humble social rank, but you are destined for so much more. Already the people of your home village regard you as their champion, and your destiny calls you to stand against the tyrants and monsters that threaten the common folk everywhere.',
	proficiencies: [19, 20, 21],
	backgroundFeatures: [api.getBackgroundFeature(3)],
	languageAdditions: { choose: 0, from: [] },
	traitsSelection: {
		traits: {
			roll: { sides: 8, amount: 1 },
			selections: api.getPersonalCharacteristics([
				53, 54, 55, 56, 57, 58, 59, 60
			])
		},
		ideals: {
			roll: { sides: 6, amount: 1 },
			selections: api.getPersonalCharacteristics([61, 62, 63, 64, 65, 66])
		},
		flaws: {
			roll: { sides: 6, amount: 1 },
			selections: api.getPersonalCharacteristics([67, 68, 69, 70, 71, 72])
		},
		bonds: {
			roll: { sides: 6, amount: 1 },
			selections: api.getPersonalCharacteristics([73, 74, 75, 76, 77, 78])
		}
	},
	proficencyAddition: {
		title: "Choose an Artisan's tool",
		choose: 1,
		from: api.getProficiencies([
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37
		])
	}
};
