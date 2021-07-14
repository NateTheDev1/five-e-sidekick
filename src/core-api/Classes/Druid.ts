import { api } from '..';
import { SimpleMeleeWeaponsStatic, SimpleWeaponsStatic } from '../static-data';
import { CharacterClass } from '../types';

export const Druid: CharacterClass = {
	name: 'Druid',
	primaryAbility: '',
	languages: [api.getLanguage(6)],
	description:
		'A priest of the Old Faith, wielding the powers of nature and adopting animal forms',
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
	saves: [80, 66],
	proficiencies: [
		5, 6, 45, 47, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79
	],
	proficiencySelection: {
		title: 'Choose two from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, and Survival',
		choose: 2,
		from: api.getProficiencies([40, 19, 10, 67, 48, 7, 11, 20])
	},
	traits: api.getClassTraitsFromRange(48, 61),
	equipment: [
		{ id: 37, quantity: 1 },
		{ id: 1, quantity: 1 },
		{ id: 57, quantity: 1 }
	],
	equipmentSelection: [
		{
			title: '(a) a wooden shield or (b) any simple weapon',
			choose: 1,
			from: [
				{ items: [{ id: 56, quantity: 1 }] },
				{
					choose: 1,
					items: [...SimpleWeaponsStatic]
				}
			]
		},
		{
			title: '(a) a scimitar or (b) any simple melee weapon',
			choose: 1,
			from: [
				{ items: [{ id: 16, quantity: 1 }] },
				{ choose: 1, items: [...SimpleMeleeWeaponsStatic] }
			]
		}
	]
};
