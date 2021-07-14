import { api } from '..';
import { CharacterClass } from '../types';

export const Cleric: CharacterClass = {
	name: 'Cleric',
	primaryAbility: 'Wisdom',
	languages: [],
	description:
		'A priestly champion who wields divine magic in service of a higher power',
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
	saves: [50, 66],
	proficiencies: [5, 6, 45, 47],
	proficiencySelection: {
		title: 'Choose two from History, Insight, Medicine, Persuasion, and Religon',
		choose: 2,
		from: api.getProficiencies([38, 10, 67, 39, 11])
	},
	traits: api.getClassTraitsFromRange(39, 47),
	equipment: [
		{ id: 54, quantity: 1 },
		{ id: 55, quantity: 1 }
	],

	equipmentSelection: [
		{
			title: '(a) a mace or (b) a warhammer (if proficient)',
			choose: 1,
			from: [
				{
					items: [
						{ id: 29, quantity: 1 },
						{ id: 20, quantity: 1 }
					]
				}
			]
		},
		{
			title: '(a) scale mail, (b) leather armor, or (c) chain mail (if proficient)',
			choose: 1,
			from: [
				{ items: [{ id: 50, quantity: 1 }] },
				{ items: [{ id: 37, quantity: 1 }] },
				{ items: [{ id: 51, quantity: 1 }] }
			]
		},
		{
			title: '(a) a light crossbow and 20 bolts or (b) any simple weapon',
			choose: 1,
			from: [
				{
					items: [
						{ id: 33, quantity: 1 },
						{ id: 52, quantity: 20 }
					]
				},
				{
					items: [
						{
							id: 23,
							quantity: 1
						},
						{
							id: 24,
							quantity: 1
						},
						{
							id: 25,
							quantity: 1
						},
						{
							id: 26,
							quantity: 1
						},
						{
							id: 27,
							quantity: 1
						},
						{
							id: 28,
							quantity: 1
						},
						{
							id: 29,
							quantity: 1
						},
						{
							id: 30,
							quantity: 1
						},
						{
							id: 31,
							quantity: 1
						},
						{
							id: 32,
							quantity: 1
						},
						{
							id: 33,
							quantity: 1
						},
						{
							id: 34,
							quantity: 1
						},
						{
							id: 35,
							quantity: 1
						},
						{
							id: 36,
							quantity: 1
						}
					],
					choose: 1
				}
			]
		},
		{
			title: '(a) a priest’s pack or (b) an explorer’s pack',
			choose: 1,
			from: [
				{
					items: [{ id: 53, quantity: 1 }]
				},
				{
					items: [{ id: 1, quantity: 1 }]
				}
			]
		}
	]
};
