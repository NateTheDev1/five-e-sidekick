import { api } from '..';
import { Race } from '../types';

export const HalfElf: Race = {
	name: 'Half Elf',
	description:
		'Half-elves combine what some say are the best qualities of their elf and human parents.',
	traits: [4, 11, 16, 18],
	traitsDescription:
		'+2 Charisma, +1 to Two Other Ability Scores, Darkvision, Fey Ancestry, Skill Versatility',
	bonuses: [{ amount: 2, stat: 'Charisma' }],
	proficiencies: [],
	languageAdditions: {
		defaults: [api.getLanguage(3), api.getLanguage(16)],
		choose: 1,
		from: api.getLanguages()
	},
	resistances: [],
	proficiencyAdditions: { choose: 2, from: [] },
	abilityIncreases: { choose: 0, increaseBy: 0, from: [] },
	addedCantrips: []
};
