import { api } from '..';
import { SimpleWeaponsStatic } from '../static-data';
import { CharacterClass } from '../types';

export const Fighter: CharacterClass = {
	name: 'Fighter',
	primaryAbility: 'Strength or Dexterity',
	languages: [],
	description:
		'A master of martial combat, skilled with a variety of weapons and armor',
	hitDie: { amount: 1, sides: 10 },
	hitPointBase: {
		atLevelOne: { base: 10, modifier: 'Constitution' },
		higherLevels: {
			rollPossible: true,
			default: 6,
			modifier: 'Constitution',
			addPrevious: true
		}
	},
	saves: [43, 49],
	proficiencies: [81, 45, 47, 46],
	proficiencySelection: {
		title: 'Choose two skills from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival',
		choose: 2,
		from: api.getProficiencies([82, 19, 42, 38, 10, 8, 7, 20])
	},
	traits: api.getClassTraitsFromRange(62, 76),
	equipment: [],
	equipmentSelection: [
		{
			title: '(a) chain mail or (b) leather armor, longbow, and 20 arrows',
			choose: 1,
			from: [
				{ items: [{ id: 51, quantity: 1 }] },
				{ items: [{ id: 37, quantity: 1 }] },
				{
					items: [
						{ id: 58, quantity: 1 },
						{ id: 59, quantity: 20 }
					]
				}
			]
		},
		{
			title: '(a) a martial weapon and a shield or (b) two martial weapons',
			choose: 1,
			from: [
				{
					choose: 1,
					items: [
						{ id: 4, quantity: 1 },
						{ id: 5, quantity: 1 },
						{ id: 6, quantity: 1 },
						{ id: 7, quantity: 1 },
						{ id: 8, quantity: 1 },
						{ id: 9, quantity: 1 },
						{ id: 10, quantity: 1 },
						{ id: 11, quantity: 1 },
						{ id: 12, quantity: 1 },
						{ id: 13, quantity: 1 },
						{ id: 14, quantity: 1 },
						{ id: 15, quantity: 1 },
						{ id: 16, quantity: 1 },
						{ id: 17, quantity: 1 },
						{ id: 18, quantity: 1 },
						{ id: 19, quantity: 1 },
						{ id: 20, quantity: 1 },
						{ id: 21, quantity: 1 },
						{ id: 58, quantity: 1 },
						{ id: 60, quantity: 1 },
						{ id: 61, quantity: 1 },
						{ id: 62, quantity: 1 },
						{ id: 63, quantity: 1 }
					],
					additional: [{ id: 54, quantity: 1 }]
				},
				{
					choose: 2,
					items: [
						{ id: 4, quantity: 1 },
						{ id: 5, quantity: 1 },
						{ id: 6, quantity: 1 },
						{ id: 7, quantity: 1 },
						{ id: 8, quantity: 1 },
						{ id: 9, quantity: 1 },
						{ id: 10, quantity: 1 },
						{ id: 11, quantity: 1 },
						{ id: 12, quantity: 1 },
						{ id: 13, quantity: 1 },
						{ id: 14, quantity: 1 },
						{ id: 15, quantity: 1 },
						{ id: 16, quantity: 1 },
						{ id: 17, quantity: 1 },
						{ id: 18, quantity: 1 },
						{ id: 19, quantity: 1 },
						{ id: 20, quantity: 1 },
						{ id: 21, quantity: 1 },
						{ id: 58, quantity: 1 },
						{ id: 60, quantity: 1 },
						{ id: 61, quantity: 1 },
						{ id: 62, quantity: 1 },
						{ id: 63, quantity: 1 }
					]
				}
			]
		},
		{
			title: '(a) a light crossbow and 20 bolts or (b) two handaxes',
			choose: 1,
			from: [
				{
					items: [
						{ id: 33, quantity: 1 },
						{ id: 52, quantity: 20 }
					]
				},
				{
					items: [{ id: 22, quantity: 2 }]
				}
			]
		},
		{
			title: '(a) a dungeoneer’s pack or (b) an explorer’s pack',
			choose: 1,
			from: [
				{
					items: [{ id: 1, quantity: 1 }]
				},
				{
					items: [{ id: 64, quantity: 1 }]
				}
			]
		}
	]
};
