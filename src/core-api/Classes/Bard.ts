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
		from: api.getProficiencies([55])
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
					]
				}
			]
		}
	]
};

// 		this.traits = [
// 			{
// 				atLevel: 1,
// 				title: 'Spellcasting',
// 				description: `You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. Your spells are part of your vast repertoire, magic that you can tune to different situations. See Spells Rules for the general rules of spellcasting and the Spells Listing for the bard spell list.

// 				Cantrips
// 				You know two cantrips of your choice from the bard spell list. You learn additional bard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Bard table.

// 				Spell Slots
// 				The Bard table shows how many spell slots you have to cast your bard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.

// 				For example, if you know the 1st-level spell cure wounds and have a 1st-level and a 2nd-level spell slot available, you can cast cure wounds using either slot.

// 				Spells Known of 1st Level and Higher
// 				You know four 1st-level spells of your choice from the bard spell list.

// 				The Spells Known column of the Bard table shows when you learn more bard spells of your choice. Each of these spells must be of a level for which you have spell slots, as shown on the table. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.

// 				Additionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots.

// 				Spellcasting Ability
// 				Charisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one.

// 				Spell save DC = 8 + your proficiency bonus + your Charisma modifier

// 				Spell attack modifier = your proficiency bonus + your Charisma modifier

// 				Ritual Casting
// 				You can cast any bard spell you know as a ritual if that spell has the ritual tag.

// 				Spellcasting Focus
// 				You can use a musical instrument (see the Tools section) as a spellcasting focus for your bard spells.`
// 			},
// 			{
// 				atLevel: 1,
// 				title: 'Bardic Inspiration',
// 				description: `You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.

// 			Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.

// 			You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.

// 			Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.`
// 			},
// 			{
// 				atLevel: 2,
// 				title: 'Jack of All Trades',
// 				description:
// 					'Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn’t already include your proficiency bonus.'
// 			},
// 			{
// 				atLevel: 2,
// 				title: 'Song of Rest',
// 				description:
// 					'Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points. The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level.'
// 			},
// 			{
// 				atLevel: 3,
// 				title: 'Bard College',
// 				description:
// 					"At 3rd level, you delve into the advanced techniques of a bard college of your choice: the College of Lore detailed at the end of the class description or another from the Player's Handbook or other sources. Your choice grants you features at 3rd level and again at 6th and 14th level."
// 			},
// 			{
// 				atLevel: 3,
// 				title: 'Expertise',
// 				description:
// 					'At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.'
// 			},
// 			{
// 				atLevel: 4,
// 				title: 'Ability Score Improvement',
// 				description:
// 					'When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature. Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.'
// 			},
// 			{
// 				atLevel: 10,
// 				title: 'Expertise',
// 				description:
// 					'At 10th level, choose two more of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.'
// 			},
// 			{
// 				atLevel: 8,
// 				title: 'Ability Score Improvement',
// 				description: `When you reach 8th level, and again at 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.

// 				Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.

// 				Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.

// 				`
// 			},
// 			{
// 				atLevel: 12,
// 				title: 'Ability Score Improvement',
// 				description: `When you reach 12th level, and again at 16th and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.

// 				Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.

// 				`
// 			},
// 			{
// 				atLevel: 16,
// 				title: 'Ability Score Improvement',
// 				description: `When you reach 16th level, and again at 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.

// 				Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.

// 				`
// 			},
// 			{
// 				atLevel: 19,
// 				title: 'Ability Score Improvement',
// 				description: `When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.

// 				Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.`
// 			},
// 			{
// 				atLevel: 5,
// 				title: 'Font of Inspiration',
// 				description:
// 					'Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest.'
// 			},
// 			{
// 				atLevel: 6,
// 				title: 'Countercharm',
// 				description:
// 					'At 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects. As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit. The performance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required).'
// 			},
// 			{
// 				atLevel: 20,
// 				title: 'Superior Inspiration',
// 				description:
// 					'At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use.'
// 			},
// 			{
// 				atLevel: 10,
// 				title: 'Magical Secrets',
// 				description: `By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any classes, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.

// 				The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.

// 				You learn two additional spells from any classes at 14th level and again at 18th level.`
// 			},
// 			{
// 				atLevel: 14,
// 				title: 'Magical Secrets',
// 				description: `At 14th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any classes, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.

// 				The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.

// 				You learn two additional spells from any classes at 18th level.

// 				`
// 			},
// 			{
// 				atLevel: 18,
// 				title: 'Magical Secrets',
// 				description: `At 18th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any classes, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.

// 				The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.`
// 			}
// 		];
// 		this.equipmentChoices = [
// 			{
// 				title: '(a) a rapier, (b) a longsword, or (c) any simple weapon',
// 				choose: {
// 					from: [
// 						{ name: 'Rapier', quantity: 1 },
// 						{ name: 'Any simple weapon', quantity: 1 },
// 						{
// 							name: 'Any simple weapon',
// 							quantity: 1,
// 							groupType: 'Simple Weapons'
// 						}
// 					],
// 					num: 1
// 				}
// 			},
// 			{
// 				title: '(a) a diplomat’s pack or (b) an entertainer’s pack',
// 				choose: {
// 					from: [
// 						{ name: "Diplomat's Pack", quantity: 1 },
// 						{ name: "Entertainer's Pack", quantity: 1 }
// 					],
// 					num: 1
// 				}
// 			},
// 			{
// 				title: '(a) a lute or (b) any other musical instrument',
// 				choose: {
// 					from: [
// 						{
// 							name: 'Lute',
// 							quantity: 1
// 						},
// 						{
// 							name: 'Any musical instrument',
// 							quantity: 1,
// 							groupType: 'Musical Instruments'
// 						}
// 					],
// 					num: 1,
// 					type: 'instrument'
// 				}
// 			},
// 			{
// 				title: 'Leather Armor'
// 			},
// 			{
// 				title: 'Dagger'
// 			}
// 		];
// 	}
// }
