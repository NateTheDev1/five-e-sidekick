import { api } from '..';
import {
	MartialWeaponsStatic,
	SimpleMeleeWeaponsStatic,
	SimpleWeaponsStatic
} from '../static-data';
import { CharacterClass } from '../types';

export const Rogue: CharacterClass = {
	name: 'Rogue',
	primaryAbility: 'Dexterity and Intelligence',
	languages: [],
	description:
		'A scoundrel who uses stealth and trickery to overcome obstacles and enemies',
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
	saves: [80, 49],
	proficiencies: [5, 47, 51, 52, 53, 54, 14],
	proficiencySelection: {
		title: 'Choose four from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, and Stealth',
		choose: 4,
		from: api.getProficiencies([82, 42, 12, 10, 8, 83, 7, 84, 39, 13])
	},
	traits: api.getClassTraitsFromRange(140, 158),
	equipment: [
		{ id: 37, quantity: 1 },
		{ id: 24, quantity: 2 },
		{ id: 66, quantity: 1 }
	],
	equipmentSelection: [
		{
			title: '(a) a rapier or (b) a shortsword',
			choose: 1,
			from: [
				{
					items: [{ id: 15, quantity: 1 }]
				},
				{
					items: [{ id: 17, quantity: 1 }]
				}
			]
		},
		{
			title: '(a) a shortbow and quiver of 20 arrows or (b) a shortsword',
			choose: 1,
			from: [
				{
					items: [
						{ id: 35, quantity: 1 },
						{ id: 59, quantity: 20 }
					]
				},
				{ items: [{ id: 17, quantity: 1 }] }
			]
		},
		{
			title: '(a) a burglar’s pack, (b) a dungeoneer’s pack, or (c) an explorer’s pack',
			choose: 1,
			from: [
				{
					items: [{ id: 65, quantity: 1 }]
				},
				{
					items: [{ id: 64, quantity: 1 }]
				},
				{
					items: [{ id: 1, quantity: 1 }]
				}
			]
		}
	]
};
