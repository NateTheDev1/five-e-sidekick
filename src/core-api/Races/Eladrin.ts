import { api } from '..';
import { Race } from '../types';

export const Eladrin: Race = {
	name: 'Eladrin',
	description:
		'Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.Creatures of magic with strong ties to nature, eladrin live in the twilight realm of the Feywild. Their cities sometimes cross over to the Material Plane, appearing briefly in mountain valleys or deep forest glades before fading back into the Feywild.',
	traits: [4, 11, 12, 13, 14],
	traitsDescription:
		'+2 Dexterity, Darkvision, Keen Senses, Fey Ancestry, Trance',
	bonuses: [{ amount: 2, stat: 'Dexterity' }],
	proficiencies: [7],
	languageAdditions: {
		defaults: [api.getLanguage(3), api.getLanguage(16)],
		choose: 0,
		from: []
	},
	resistances: [],
	proficiencyAdditions: { choose: 0, from: [] },
	abilityIncreases: { choose: 0, increaseBy: 0, from: [] },
	addedCantrips: []
};
