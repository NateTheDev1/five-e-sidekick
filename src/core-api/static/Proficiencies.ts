import { ProficiencyStatic, AbilityConstants } from '../types';

/**
 * @description List of proficiencies
 * @type ProficiencyStatic[]
 */
export const Proficiencies: ProficiencyStatic[] = [
	{
		id: 1,
		name: 'Battleaxe',
		type: 'Weapon'
	},
	{
		id: 2,
		name: 'Handaxe',
		type: 'Weapon'
	},
	{
		id: 3,
		name: 'Light Hammer',
		type: 'Weapon'
	},
	{
		id: 4,
		name: 'Warhammer',
		type: 'Weapon'
	},
	{
		id: 5,
		name: 'Light Armor',
		type: 'Armor'
	},
	{
		id: 6,
		name: 'Medium Armor',
		type: 'Armor'
	},
	{
		id: 7,
		name: 'Perception',
		type: 'Skill'
	},
	{
		id: 8,
		name: 'Intimidation',
		type: 'Skill'
	},
	{
		id: 9,
		name: "Artisan's Tools",
		type: 'Tool'
	},
	{
		id: 10,
		name: 'Insight',
		type: 'Skill'
	},
	{
		id: 11,
		name: 'Religion',
		type: 'Skill'
	},
	{
		id: 12,
		name: 'Deception',
		type: 'Skill'
	},
	{
		id: 13,
		name: 'Stealth',
		type: 'Skill'
	},
	{
		id: 14,
		name: "Thieves' Tools",
		type: 'Tool'
	},

	{
		id: 15,
		name: 'Dice Set',
		type: 'Tool'
	},
	{
		id: 16,
		name: 'Dragonchess Set',
		type: 'Tool'
	},
	{
		id: 17,
		name: 'Playing Card Set',
		type: 'Tool'
	},
	{
		id: 18,
		name: 'Three-Dragon Ante Set',
		type: 'Tool'
	},
	{
		id: 19,
		name: 'Animal Handling',
		type: 'Skill'
	},
	{
		id: 20,
		name: 'Survival',
		type: 'Skill'
	},
	{
		id: 21,
		name: 'Vehicles (Land)',
		type: 'Vehicle'
	},
	{
		id: 22,
		name: "Alchemist's Supplies",
		type: 'Tool'
	},
	{
		id: 23,
		name: "Caligrapher's Suppies",
		type: 'Tool'
	},
	{
		id: 24,
		name: "Carpenter's Tools",
		type: 'Tool'
	},
	{
		id: 25,
		name: "Cartographer's Tools",
		type: 'Tool'
	},
	{
		id: 26,
		name: "Cobbler's Tools",
		type: 'Tool'
	},
	{
		id: 27,
		name: "Cook's Utensils",
		type: 'Tool'
	},
	{
		id: 28,
		name: "Glassblower's Tools",
		type: 'Tool'
	},
	{
		id: 29,
		name: "Jewler's Tools",
		type: 'Tool'
	},
	{
		id: 30,
		name: "Leatherworker's Tools",
		type: 'Tool'
	},
	{
		id: 31,
		name: "Mason's Tools",
		type: 'Tool'
	},
	{
		id: 32,
		name: "Painter's Supplies",
		type: 'Tool'
	},
	{
		id: 33,
		name: "Potter's Tools",
		type: 'Tool'
	},
	{
		id: 34,
		name: "Smith's Tools",
		type: 'Skill'
	},
	{
		id: 35,
		name: "Tinker's Tools",
		type: 'Skill'
	},
	{
		id: 36,
		name: "Weaver's Tools",
		type: 'Skill'
	},
	{
		id: 37,
		name: "Woodcarver's Tools",
		type: 'Skill'
	},
	{
		id: 38,
		name: 'History',
		type: 'Skill'
	},
	{
		id: 39,
		name: 'Persuasion',
		type: 'Skill'
	},
	{
		id: 40,
		name: 'Arcana',
		type: 'Skill'
	},
	{
		id: 41,
		name: 'Survival',
		type: 'Skill'
	},
	{
		id: 42,
		name: 'Athletics',
		type: 'Skill'
	},
	{
		id: 43,
		name: 'Strength',
		type: 'Saving Throw'
	},
	{
		id: 44,
		name: 'Constitution',
		type: 'Saving Throw'
	},
	{
		id: 45,
		name: 'Shields',
		type: 'Armor'
	},
	{
		id: 46,
		name: 'Martial Weapons',
		type: 'Weapon'
	},
	{
		id: 47,
		name: 'Simple Weapons',
		type: 'Weapon'
	},
	{
		id: 48,
		name: 'Nature',
		type: 'Skill'
	},
	{
		id: 49,
		name: 'Dexterity',
		type: 'Skill'
	},
	{
		id: 50,
		name: 'Charisma',
		type: 'Skill'
	},
	{
		id: 51,
		name: 'Hand Crossbows',
		type: 'Weapon'
	},
	{
		id: 52,
		name: 'Longswords',
		type: 'Weapon'
	},
	{
		id: 53,
		name: 'Rapiers',
		type: 'Weapon'
	},
	{
		id: 54,
		name: 'Shortswords',
		type: 'Weapon'
	},
	{
		id: 55,
		name: 'Bagpipes',
		type: 'Tool'
	},
	{
		id: 56,
		name: 'Drum',
		type: 'Tool'
	},
	{
		id: 57,
		name: 'Dulcimer',
		type: 'Tool'
	},
	{
		id: 58,
		name: 'Flute',
		type: 'Tool'
	},
	{
		id: 59,
		name: 'Lute',
		type: 'Tool'
	},
	{
		id: 60,
		name: 'Lyre',
		type: 'Tool'
	},
	{
		id: 61,
		name: 'Horn',
		type: 'Tool'
	},
	{
		id: 62,
		name: 'Pan Flute',
		type: 'Tool'
	},
	{
		id: 63,
		name: 'Shawm',
		type: 'Tool'
	},
	{
		id: 65,
		name: 'Viol',
		type: 'Tool'
	},
	{
		id: 66,
		name: 'Wisdom',
		type: 'Saving Throw'
	},
	{
		id: 67,
		name: 'Medicine',
		type: 'Skill'
	}
];
