import { api } from '..';
import { Race } from '../types';

export const Human: Race = {
	name: 'Human',
	description:
		'Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.',
	traits: [27, 28],
	traitsDescription: '+1 to All Ability Scores, Extra Language',
	bonuses: [],
	proficiencies: [],
	languageAdditions: {
		defaults: [api.getLanguage(3)],
		choose: 1,
		from: api.getLanguages()
	},
	resistances: [],
	proficiencyAdditions: { choose: 0, from: [] },
	// TODO: Add all abilities
	abilityIncreases: { choose: 0, increaseBy: 1, from: [] },
	addedCantrips: []
};
