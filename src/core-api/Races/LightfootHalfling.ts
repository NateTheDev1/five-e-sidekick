import { api } from '..';
import { Race } from '../types';

export const LightfootHalfling: Race = {
	name: 'Lightfoot Halfling',
	description:
		'The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense. As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You’re inclined to be affable and get along well with others. In the Forgotten Realms, lightfoot halflings have spread the farthest and thus are the most common variety. Lightfoots are more prone to wanderlust than other halflings, and often dwell alongside other races or take up a nomadic life. In the world of Greyhawk, these halflings are called hairfeet or tallfellows.',
	traits: [22, 23, 24, 25],
	traitsDescription: '+2 Dexterity, Lucky, Brave, Halfling Nimbleness',
	bonuses: [{ amount: 2, stat: 'Dexterity' }],
	proficiencies: [8],
	languageAdditions: {
		defaults: [api.getLanguage(3), api.getLanguage(17)],
		choose: 0,
		from: []
	},
	resistances: [],
	proficiencyAdditions: { choose: 0, from: [] },
	abilityIncreases: { choose: 0, increaseBy: 0, from: [] },
	addedCantrips: []
};
