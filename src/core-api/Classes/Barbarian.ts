import { api } from '..';
import { CharacterClass } from '../types';

export const Barbarian: CharacterClass = {
	name: 'Barbarian',
	primaryAbility: '',
	languages: [],
	description:
		'A fierce warrior of primitive background who can enter a battle rage',
	hitDie: { amount: 1, sides: 12 },
	hitPointBase: {
		atLevelOne: { base: 12, modifier: 'Constitution' },
		higherLevels: {
			rollPossible: true,
			default: 7,
			modifier: 'Constitution',
			addPrevious: true
		}
	},
	saves: [43, 44],
	proficiencies: [5, 6, 45, 46, 47],
	proficiencySelection: {
		title: 'Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival',
		choose: 2,
		from: api.getProficiencies([19, 42, 8, 48, 7, 20])
	},
	traits: api.getClassTraitsFromRange(1, 20),
	equipment: [
		{ id: 1, quantity: 1 },
		{ id: 2, quantity: 4 }
	],
	equipmentSelection: [
		{
			title: '(a) a greataxe or (b) any martial melee weapon',
			choose: 1,
			from: [
				{ items: [{ id: 3, quantity: 1 }] },
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
						{ id: 21, quantity: 1 }
					]
				}
			]
		},
		{
			title: '(a) two handaxes or (b) any simple weapon',
			choose: 1,
			from: [
				{ items: [{ id: 22, quantity: 1 }] },
				{
					choose: 1,
					items: [
						{
							// TODO: More simple weapons
							id: 23,
							quantity: 1
						}
					]
				}
			]
		}
	]
};
