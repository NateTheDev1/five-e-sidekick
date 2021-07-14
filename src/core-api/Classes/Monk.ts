import { api } from '..';
import { SimpleWeaponsStatic } from '../static-data';
import { CharacterClass } from '../types';

export const Monk: CharacterClass = {
	name: 'Monk',
	primaryAbility: 'Dexterity and Wisdom',
	languages: [],
	description:
		'A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection',
	hitDie: { amount: 1, sides: 8 },
	hitPointBase: {
		atLevelOne: { base: 8, modifier: 'Constitution' },
		higherLevels: {
			rollPossible: true,
			default: 5,
			modifier: 'Constitution',
			addPrevious: true
		}
	},
	saves: [43, 49],
	proficiencies: [47, 54],
	proficiencySelection: {
		title: 'Choose one type of artisan’s tools or one musical instrument',
		choose: 1,
		from: api.getProficiencies([
			55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 22, 23, 24, 25, 26, 27,
			28, 29, 30, 31, 32, 33, 34, 35, 36, 37
		]),
		additional: [
			{
				title: 'Choose two from Acrobatics, Athletics, History, Insight, Religion, and Stealth',
				choose: 2,
				from: api.getProficiencies([82, 42, 38, 10, 11, 13])
			}
		]
	},
	traits: api.getClassTraitsFromRange(77, 104),
	equipment: [{ id: 34, quantity: 10 }],
	equipmentSelection: [
		{
			title: '(a) a shortsword or (b) any simple weapon',
			choose: 1,
			from: [
				{ items: [{ id: 17, quantity: 1 }] },
				{ choose: 1, items: [...SimpleWeaponsStatic] }
			]
		},
		{
			title: '(a) a dungeoneer’s pack or (b) an explorer’s pack',
			choose: 1,
			from: [
				{ items: [{ id: 64, quantity: 1 }] },
				{ items: [{ id: 1, quantity: 1 }] }
			]
		}
	]
};
