import { api } from '..';
import { Race } from '../types';

export const Dragonborn: Race = {
	name: 'Dragonborn',
	description:
		'Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail.',
	traits: [1, 2, 3],
	traitsDescription:
		'+2 Strength, +1 Charisma, Draconic Ancestry, Breath Weapon, Damage Resistance',
	bonuses: [
		{ amount: 2, stat: 'Strength' },
		{ amount: 1, stat: 'Charisma' }
	],
	languageAdditions: {
		choose: 0,
		defaults: [api.getLanguage(5), api.getLanguage(3)],
		from: []
	},
	addedCantrips: [],
	// TODO: Implement Damage resistence from dragon selection
	resistances: [],
	proficiencies: [1, 2, 3, 4],
	proficiencyAdditions: { choose: 0, from: [] },
	abilityIncreases: { choose: 0, increaseBy: 0, from: [] }
};
