import { api } from '..';
import { CharacterClass } from '../types';

export const Barbarian: CharacterClass = {
	name: 'Bard',
	primaryAbility: 'Charisma',
	languages: [],
	description:
		'An inspiring magician whose power echoes the music of creation',
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

	saves: [49, 50],

	proficiencies: [5, 47, 51, 52, 53, 54],
	skillSelection: {
		title: 'Choose any three skills',
		choose: 3,
		from: api.getSkills()
	},
	instrumentSelection: {
		title: 'Choose three musical instruments of your choice',
		choose: 3,
		from: api.getProficiencies([55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65])
	},
	traits: api.getClassTraitsFromRange(21, 38),
	equipment: [
		{ id: 1, quantity: 24 },
		{ id: 1, quantity: 37 }
	],
	equipmentSelection: [
		{
			title: '(a) a rapier or (b) a longsword, or (c) any simple weapon',
			choose: 1,
			from: [
				{ items: [{ id: 15, quantity: 1 }] },
				{
					choose: 1,
					items: [
						{
							id: 11,
							quantity: 1
						}
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
			title: '(a) a diplomat’s pack or (b) an entertainer’s pack',
			choose: 1,
			from: [
				{ items: [{ id: 38, quantity: 1 }] },
				{ items: [{ id: 39, quantity: 1 }] }
			]
		},
		{
			title: '(a) a lute or (b) any other musical instrument',
			choose: 1,
			from: [
				{ items: [{ id: 1, quantity: 1 }] },
				{
					choose: 1,
					items: [
						{
							id: 40,
							quantity: 1
						},
						{
							id: 41,
							quantity: 1
						},
						{
							id: 42,
							quantity: 1
						},
						{
							id: 43,
							quantity: 1
						},
						{
							id: 44,
							quantity: 1
						},
						{
							id: 45,
							quantity: 1
						},
						{
							id: 46,
							quantity: 1
						},
						{
							id: 47,
							quantity: 1
						},
						{
							id: 48,
							quantity: 1
						},
						{
							id: 49,
							quantity: 1
						}
					]
				}
			]
		}
	]
};
