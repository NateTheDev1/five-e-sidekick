import { api } from '..';
import {
	MartialWeaponsStatic,
	SimpleMeleeWeaponsStatic,
	SimpleWeaponsStatic
} from '../static-data';
import { CharacterClass } from '../types';

export const Ranger: CharacterClass = {
	name: 'Ranger',
	primaryAbility: 'Dexterity and Wisdom',
	languages: [],
	description: 'A warrior who combats threats on the edges of civilization',
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
	proficiencies: [5, 6, 45, 47, 46],
	proficiencySelection: {
		title: 'Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival',
		choose: 3,
		from: api.getProficiencies([19, 42, 10, 83, 48, 7, 13, 20])
	},
	traits: api.getClassTraitsFromRange(124, 139),
	equipment: [
		{ id: 58, quantity: 1 },
		{ id: 59, quantity: 20 }
	],
	equipmentSelection: [
		{
			title: '(a) scale mail or (b) leather armor',
			choose: 1,
			from: [
				{ items: [{ id: 50, quantity: 1 }] },
				{ items: [{ id: 37, quantity: 1 }] }
			]
		},
		{
			title: '(a) two shortswords or (b) two simple melee weapons',
			choose: 1,
			from: [
				{
					items: [{ id: 17, quantity: 2 }]
				},
				{
					items: [...SimpleMeleeWeaponsStatic],
					choose: 2
				}
			]
		},
		{
			title: '(a) a dungeoneer’s pack or (b) an explorer’s pack',
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
