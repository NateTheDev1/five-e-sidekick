import { api } from '..';
import { Race } from '../types';

export const RockGnome: Race = {
	name: 'Rock Gnome',
	description:
		'A gnome’s energy and enthusiasm for living shines through every inch of his or her tiny body. As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes. Most gnomes in the worlds of D&D are rock gnomes, including the tinker gnomes of the Dragonlance setting.',
	traits: [4, 29, 30, 31],
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
	resistances: [],
	proficiencyAdditions: { choose: 0, from: [] },
	abilityIncreases: { choose: 0, increaseBy: 0, from: [] },
	addedCantrips: []
};
