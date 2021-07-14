import { api } from '..';
import { Race } from '../types';

export const HalfOrc: Race = {
	name: 'Half-Orc',
	description:
		'Half-orcs’ grayish pigmentation, sloping foreheads, jutting jaws, prominent teeth, and towering builds make their orcish heritage plain for all to see.',
	traits: [4, 19, 20, 21],
	traitsDescription:
		'+2 Strength, +1 Constitution, Darkvision, Menacing, Relentless Endurance, Savage Attacks',
	bonuses: [
		{ amount: 2, stat: 'Strength' },
		{ amount: 1, stat: 'Constitution' }
	],
	proficiencies: [8],
	languageAdditions: {
		defaults: [api.getLanguage(3), api.getLanguage(9)],
		choose: 0,
		from: []
	},
	resistances: [],
	proficiencyAdditions: { choose: 0, from: [] },
	abilityIncreases: { choose: 0, increaseBy: 0, from: [] },
	addedCantrips: []
};
