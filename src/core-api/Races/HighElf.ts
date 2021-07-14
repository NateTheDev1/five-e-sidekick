import { api } from '..';
import { Race } from '../types';

export const HighElf: Race = {
	name: 'High Elf',
	description:
		'Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many of the worlds of D&D, there are two kinds of high elves. One type (which includes the gray elves and valley elves of Greyhawk, the Silvanesti of Dragonlance, and the sun elves of the Forgotten Realms) is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type (including the high elves of Greyhawk, the Qualinesti of Dragonlance, and the moon elves of the Forgotten Realms) are more common and more friendly, and often encountered among humans and other races. The sun elves of Faerûn (also called gold elves or sunrise elves) have bronze skin and hair of copper, black, or golden blond. Their eyes are golden, silver, or black. Moon elves (also called silver elves or gray elves) are much paler, with alabaster skin sometimes tinged with blue. They often have hair of silver-white, black, or blue, but various shades of blond, brown, and red are not uncommon. Their eyes are blue or green and flecked with gold.',
	traits: [4, 11, 12, 13, 15, 16],
	traitsDescription:
		'+2 Dexterity, Darkvision, Keen Senses, Fey Ancestry, Trance',
	bonuses: [{ amount: 2, stat: 'Dexterity' }],
	proficiencies: [7],
	languageAdditions: {
		defaults: [api.getLanguage(3), api.getLanguage(16)],
		choose: 1,
		from: api.getLanguages()
	},
	resistances: [],
	proficiencyAdditions: { choose: 0, from: [] },
	abilityIncreases: { choose: 0, increaseBy: 0, from: [] },
	addedCantrips: []
};
