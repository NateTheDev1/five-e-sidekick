import { api } from '..';
import { Race } from '../types';

export const StoutHalfling: Race = {
	name: 'Stout Halfling',
	description:
		'The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense. As a stout halfling, you’re hardier than average and have some resistance to poison. Some say that stouts have dwarven blood. In the Forgotten Realms, these halflings are called stronghearts, and they’re most common in the south.',
	traits: [22, 23, 24, 26],
	traitsDescription:
		'+2 Dexterity, Lucky, Brave, Halfling Nimbleness, Stout Resillience',
	bonuses: [{ amount: 2, stat: 'Dexterity' }],
	proficiencies: [8],
	languageAdditions: {
		defaults: [api.getLanguage(3), api.getLanguage(17)],
		choose: 0,
		from: []
	},
	resistances: [1],
	proficiencyAdditions: { choose: 0, from: [] },
	abilityIncreases: { choose: 0, increaseBy: 0, from: [] },
	addedCantrips: []
};
