import { api } from '.';
import {
	AbilityStatic,
	LanguageStatic,
	ProficiencyStatic,
	ResistenceStatic,
	SkillStatic,
	ToolStatic,
	TraitStatic
} from './types';

export const Abilities: AbilityStatic[] = [
	{
		id: 1,
		name: 'Strength'
	},
	{
		id: 2,
		name: 'Dexterity'
	},
	{
		id: 3,
		name: 'Constitution'
	},
	{
		id: 4,
		name: 'Intelligence'
	},
	{
		id: 5,
		name: 'Wisdom'
	},
	{
		id: 6,
		name: 'Charisma'
	}
];

export const Languages: LanguageStatic[] = [
	{
		id: 1,
		name: 'Abyssal'
	},
	{
		id: 2,
		name: 'Celestial'
	},
	{
		id: 3,
		name: 'Common'
	},
	{
		id: 4,
		name: 'Deep Speech'
	},
	{
		id: 5,
		name: 'Draconic'
	},
	{
		id: 6,
		name: 'Druidic'
	},
	{
		id: 7,
		name: 'Giant'
	},
	{
		id: 8,
		name: 'Gnomish'
	},
	{
		id: 9,
		name: 'Orc'
	},
	{
		id: 10,
		name: 'Primordial'
	},
	{
		id: 11,
		name: 'Sylvan'
	},
	{
		id: 12,
		name: 'Undercommon'
	},
	{
		id: 13,
		name: 'Infernal'
	},
	{
		id: 14,
		name: 'Dwarvish'
	},
	{
		id: 15,
		name: 'Goblin'
	},
	{
		id: 16,
		name: 'Elvish'
	},
	{
		id: 17,
		name: 'Halfling'
	}
];

export const Skills: SkillStatic[] = [
	{
		id: 1,
		name: 'Acrobatics'
	},
	{
		id: 2,
		name: 'Animal Handling'
	},
	{
		id: 3,
		name: 'Arcana'
	},
	{
		id: 4,
		name: 'Athletics'
	},
	{
		id: 5,
		name: 'Deception'
	},
	{
		id: 6,
		name: 'History'
	},
	{
		id: 7,
		name: 'Insight'
	},
	{
		id: 8,
		name: 'Intimidation'
	},
	{
		id: 9,
		name: 'Investigation'
	},
	{
		id: 10,
		name: 'Medicine'
	},
	{
		id: 11,
		name: 'Nature'
	},
	{
		id: 12,
		name: 'Perception'
	},
	{
		id: 13,
		name: 'Performance'
	},
	{
		id: 14,
		name: 'Persuasion'
	},
	{
		id: 15,
		name: 'Religion'
	},
	{
		id: 16,
		name: 'Sleight Of Hand'
	},
	{
		id: 17,
		name: 'Stealth'
	},
	{
		id: 18,
		name: 'Survival'
	}
];

export const traits: TraitStatic[] = [
	{
		id: 1,
		name: 'Breath Weapon',
		description:
			'You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t use it again until you complete a short or long rest.',
		choose: 1,
		from: [
			{
				id: 1,
				name: 'Black Dragon - Acid Damage 5 by 30 ft. line (Dex. save)',
				typeName: 'DragonType'
			},
			{
				id: 2,
				name: 'Blue Dragon - Lightning Damage 5 by 30 ft. line (Dex. save) ',
				typeName: 'DragonType'
			},
			{
				id: 3,
				name: 'Brass Dragon - Fire Damage 5 by 30 ft. line (Dex. save)',
				typeName: 'DragonType'
			},
			{
				id: 4,
				name: 'Bronze Dragon - Lightning Damage 5 by 30 ft. line (Dex. save)',
				typeName: 'DragonType'
			},
			{
				id: 5,
				name: 'Copper Dragon - Acid Damage 5 by 30 ft. line (Dex. save)',
				typeName: 'DragonType'
			},
			{
				id: 6,
				name: 'Gold Dragon - Fire damage 15 ft. cone (Dex. save)',
				typeName: 'DragonType'
			},
			{
				id: 7,
				name: 'Green Dragon - Poision Damage 15 ft. cone (Con. save)',
				typeName: 'DragonType'
			},
			{
				id: 8,
				name: 'Red Dragon - Fire Damage 15 ft. cone (Con. save)',
				typeName: 'DragonType'
			},
			{
				id: 9,
				name: 'Silver Dragon - Cold Damage 15 ft. cone (Con. save)',
				typeName: 'DragonType'
			},
			{
				id: 10,
				name: 'White Dragon - Cold Damage 15 ft. cone (Con. save)',
				typeName: 'DragonType'
			}
		]
	},
	{
		id: 2,
		name: 'Breath Weapon',
		description:
			'You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t use it again until you complete a short or long rest.'
	},
	{
		id: 3,
		name: 'Damage Resistence',
		description:
			'You have resistance to the damage type associated with your draconic ancestry.'
	},
	{
		id: 4,
		name: 'Darkvision',
		description:
			'Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.'
	},
	{
		id: 5,
		name: 'Dwarven Resillience',
		description:
			'You have advantage on saving throws against poison, and you have resistance against poison damage (explained in the “Combat” section).'
	},
	{
		id: 6,
		name: 'Dwarven Combat Training',
		description:
			'You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.'
	},
	{
		id: 7,
		name: 'Tool Proficiency',
		description:
			'You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools.',
		choose: 1,
		from: [api.getTool(1), api.getTool(2), api.getTool(3)]
	},
	{
		id: 8,
		name: 'Stonecutting',
		description:
			'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.'
	},
	// TODO: implement action
	{
		id: 9,
		name: 'Dwarven Toughness',
		description:
			'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.',
		actionName: 'DwarvenToughness'
	}
];

export const Tools: ToolStatic[] = [
	{
		id: 1,
		name: 'Smiths Tools',
		typeName: 'Tool Proficiency'
	},
	{
		id: 2,
		name: "Mason's Tools",
		typeName: 'Tool Proficiency'
	},
	{
		id: 3,
		name: "Brewer's Supplies",
		typeName: 'Tool Proficiency'
	}
];

// TODO: Add resistence getters to api
export const Resistences: ResistenceStatic[] = [
	{
		id: 1,
		name: 'Poison Damage'
	}
];

// TODO: Prof getter in api
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
	}
];
