import { api } from '..';
import { Race } from '../types';

export const MountainDwarf: Race = {
	name: 'Mountain DWarf',
	description:
		'Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. As a mountain dwarf, you’re strong and hardy, accustomed to a difficult life in rugged terrain. You’re probably on the tall side (for a dwarf), and tend toward lighter coloration. The shield dwarves of northern Faerûn, as well as the ruling Hylar clan and the noble Daewar clan of Dragonlance, are mountain dwarves.',
	traits: [4, 5, 6, 7, 8, 10],
	traitsDescription:
		'+2 Constitution, Darkvision, Dwarven Resilience, Dwarven Combat Training, Stonecunning',
	bonuses: [{ amount: 2, stat: 'Constitution' }],
	resistances: [1],
	proficiencies: [1, 2, 3, 4, 5, 6],
	languageAdditions: {
		defaults: [api.getLanguage(3), api.getLanguage(14)],
		choose: 0,
		from: []
	},
	proficiencyAdditions: { choose: 0, from: [] },
	abilityIncreases: { choose: 0, increaseBy: 0, from: [] },
	addedCantrips: []
};
