import { api } from '..';
import { MartialWeaponsStatic, SimpleMeleeWeaponsStatic } from '../static-data';
import { CharacterClass } from '../types';

export const Paladin: CharacterClass = {
	name: 'Paladin',
	primaryAbility: 'Strength and Charisma',
	languages: [],
	description: 'A holy warrior bound to a sacred oath',
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
	saves: [50, 66],
	proficiencies: [81, 45, 47, 46],
	proficiencySelection: {
		title: 'Choose two from Athletics, Insight, Intimidation, Medicine, Persuasion, and Religion',
		choose: 2,
		from: api.getProficiencies([42, 10, 8, 67, 39, 11])
	},
	traits: api.getClassTraitsFromRange(105, 123),
	equipment: [
		{ id: 51, quantity: 1 },
		{ id: 55, quantity: 1 }
	],
	equipmentSelection: [
		{
			title: '(a) a martial weapon and a shield or (b) two martial weapons',
			choose: 1,
			from: [
				{
					items: [...MartialWeaponsStatic],
					choose: 1,
					additional: [{ id: 54, quantity: 1 }]
				},
				{ choose: 2, items: [...MartialWeaponsStatic] }
			]
		},
		{
			title: '(a) five javelins or (b) any simple melee weapon',
			choose: 1,
			from: [
				{ items: [{ quantity: 5, id: 2 }] },
				{ items: [...SimpleMeleeWeaponsStatic], choose: 1 }
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
