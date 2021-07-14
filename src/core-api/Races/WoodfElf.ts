import { api } from '..';
import { Race } from '../types';

export const WoodElf: Race = {
	name: 'Wood Elf',
	description:
		'Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly and stealthily through your native forests. This category includes the wild elves (grugach) of Greyhawk and the Kagonesti of Dragonlance, as well as the races called wood elves in Greyhawk and the Forgotten Realms. In Faerûn, wood elves (also called wild elves, green elves, or forest elves) are reclusive and distrusting of non-elves. Wood elves’ skin tends to be copperish in hue, sometimes with traces of green. Their hair tends toward browns and blacks, but it is occasionally blond or copper-colored. Their eyes are green, brown, or hazel.',
	traits: [4, 11, 12, 13, 17],
	traitsDescription:
		'+2 Dexterity, Darkvision, Keen Senses, Fey Ancestry, Trance, Mask of the Wild',
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
