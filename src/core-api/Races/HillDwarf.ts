import { api } from '..';
import { Race, ResistenceStatic } from '../types';

export const HillDwarf: Race = {
	name: 'Hill DWarf',
	description:
		'Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience. The gold dwarves of Faerûn in their mighty southern kingdom are hill dwarves, as are the exiled Neidar and the debased Klar of Krynn in the Dragonlance setting.',
	traits: [4, 5, 6, 7, 8, 9],
	traitsDescription:
		'+2 Constitution, Darkvision, Dwarven Resilience, Dwarven Combat Training, Stonecunning',
	bonuses: [{ amount: 2, stat: 'Constitution' }],
	resistances: [1],
	proficiencies: [1, 2, 3, 4],
	languageAdditions: {
		defaults: [api.getLanguage(3), api.getLanguage(14)],
		choose: 0,
		from: []
	},
	proficiencyAdditions: { choose: 0, from: [] },
	abilityIncreases: { choose: 0, increaseBy: 0, from: [] },
	addedCantrips: []
};
