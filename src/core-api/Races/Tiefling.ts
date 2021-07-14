import { api } from '..';
import { Race } from '../types';

export const Tiefling: Race = {
	name: 'Tiefling',
	description:
		'To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling.',
	traits: [4, 32, 33],
	traitsDescription: '+2 Intelligence, Darkvision, Gnome Cunning',
	bonuses: [
		{
			amount: 2,
			stat: 'Intelligence'
		}
	],
	proficiencies: [9],
	languageAdditions: {
		defaults: [api.getLanguage(3), api.getLanguage(8)],
		choose: 0,
		from: []
	},
	resistances: [2],
	proficiencyAdditions: { choose: 0, from: [] },
	abilityIncreases: { choose: 0, increaseBy: 0, from: [] },
	addedCantrips: [1]
};
