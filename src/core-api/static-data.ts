import { api } from '.';
import { Dragonborn } from './Races/Dragonborn';
import { Eladrin } from './Races/Eladrin';
import { HalfElf } from './Races/HalfElf';
import { HalfOrc } from './Races/HalfOrc';
import { HighElf } from './Races/HighElf';
import { HillDwarf } from './Races/HillDwarf';
import { Human } from './Races/Human';
import { LightfootHalfling } from './Races/LightfootHalfling';
import { MountainDwarf } from './Races/MountainDwarf';
import { RockGnome } from './Races/RockGnome';
import { StoutHalfling } from './Races/StoutHalfling';
import { Tiefling } from './Races/Tiefling';
import { WoodElf } from './Races/WoodfElf';
import {
	AbilityStatic,
	CantripStatic,
	LanguageStatic,
	RaceStatic,
	ResistenceStatic,
	SkillStatic,
	ToolStatic,
	TraitStatic
} from './types';

// Exports
export { PersonalCharacteristics } from './static/PersonalCharacteristics';
export { Proficiencies } from './static/Proficiencies';
export { backgroundFeatures } from './static/BackgroundFeature';

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
	},
	{
		id: 10,
		name: 'Dwarven Armor Training',
		description: 'You have proficiency with light and medium armor.'
	},
	{
		id: 11,
		name: 'Keen Senses',
		description: 'You have proficiency in the Perception skill.'
	},
	// TODO: Implement fey ancestry action
	{
		id: 12,
		name: 'Fey Ancestry',
		description:
			'You have advantage on saving throws against being charmed, and magic can’t put you to sleep.',
		actionName: 'Fey Ancestry'
	},
	{
		id: 13,
		name: 'Trance',
		description:
			'Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.'
	},
	// TODO: Implement fet step action
	{
		id: 14,
		name: 'Fey Step',
		description:
			'You can cast the misty step spell once using this trait. You regain the ability to do so when you finish a short or long rest.',
		actionName: 'Fey Step'
	},
	// Implement action
	{
		id: 15,
		name: 'Cantrip',
		description:
			'You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.',
		actionName: 'Choose Cantrip'
	},
	{
		id: 16,
		name: 'Languages',
		description:
			'You can speak, read, and write Common, Elvish, and one extra language of your choice.'
	},
	{
		id: 17,
		name: 'Mask of the Wild',
		description:
			'You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.'
	},
	{
		id: 18,
		name: 'Skill Versatility',
		description: 'You gain proficiency in two skills of your choice.'
	},
	{
		id: 19,
		name: 'Menacing',
		description: 'You gain proficiency in the Intimidation skill.'
	},
	{
		id: 20,
		name: 'Relentless Endurance',
		description:
			'When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest.'
	},
	// TODO: savage attacks action
	{
		id: 21,
		name: 'Savage Attacks',
		description:
			'When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit.',
		actionName: 'Savage Attacks'
	},
	// TODO: lucky action
	{
		id: 22,
		name: 'Lucky',
		description:
			'When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.',
		actionName: 'Lucky'
	},
	{
		id: 23,
		name: 'Brave',
		description:
			'You have advantage on saving throws against being frightened.'
	},
	{
		id: 24,
		name: 'Halfling Nimbleness',
		description:
			'You can move through the space of any creature that is of a size larger than yours.'
	},
	{
		id: 25,
		name: 'Naturally Stealthy',
		description:
			'You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.'
	},
	{
		id: 26,
		name: 'Stout Resillience',
		description:
			'You have advantage on saving throws against poison, and you have resistance against poison damage.'
	},
	{
		id: 27,
		name: 'Languages',
		description:
			'You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.'
	},
	{
		id: 28,
		name: 'Ability Score Increase',
		description: ' Your ability scores each increase by 1.'
	},
	{
		id: 29,
		name: 'Gnome Cunning',
		description:
			'You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.'
	},
	// TODO: add artificier's lore action
	{
		id: 30,
		name: "Artificer's Lore",
		description:
			'Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.',
		actionName: "Artificier's Lore"
	},
	// TODO: add tinkering action
	{
		id: 31,
		name: 'Tinker',
		description:
			'You have proficiency with artisan’s tools (tinker’s tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. When you create a device, choose one of the following options: Clockwork Toy. This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents. Fire Starter. The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action. Music Box. When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song’s end or when it is closed.'
	},
	{
		id: 32,
		name: 'Hellish Resistance',
		description: 'You have resistance to fire damage.'
	},
	// TODO: ovveride attackOrSave on cantrip
	{
		id: 33,
		name: 'Infernal Legacy',
		description:
			'You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.'
	}
];

export const cantrips: CantripStatic[] = [
	{
		id: 1,
		level: 'Cantrip',
		duration: '1 Minute',
		castingTime: '1 Action',
		range: '30 ft.',
		components: 'V',
		damage: 'Control',
		school: 'Transmutation',
		attackOrSave: 'None',
		name: 'Thaumaturgy',
		description:
			'You manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical effects within range',
		extraDescroption: `Your voice booms up to three times as loud as normal for 1 minute.
		You cause flames to flicker, brighten, dim, or change color for 1 minute.
		You cause harmless tremors in the ground for 1 minute.
		You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers.
		You instantaneously cause an unlocked door or window to fly open or slam shut.
		You alter the appearance of your eyes for 1 minute.`,
		availableFor: 'Cleric',
		from: 'Basic Rules, pg. 282'
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
	},
	{
		id: 2,
		name: 'Fire'
	}
];

export const races: RaceStatic[] = [
	{
		id: 1,
		race: Dragonborn
	},
	{
		id: 2,
		race: Eladrin
	},
	{
		id: 3,
		race: HalfElf
	},
	{
		id: 4,
		race: HalfElf
	},
	{
		id: 5,
		race: HalfOrc
	},
	{
		id: 6,
		race: HighElf
	},
	{
		id: 7,
		race: HillDwarf
	},
	{
		id: 8,
		race: Human
	},
	{
		id: 9,
		race: LightfootHalfling
	},
	{
		id: 10,
		race: MountainDwarf
	},
	{
		id: 11,
		race: RockGnome
	},
	{
		id: 12,
		race: StoutHalfling
	},
	{
		id: 13,
		race: Tiefling
	},
	{
		id: 14,
		race: WoodElf
	}
];
