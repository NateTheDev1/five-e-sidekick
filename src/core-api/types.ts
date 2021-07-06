export type APIMode = 'static' | 'active';

export type IDArray = number[];

export type AbilityConstants =
	| 'Strength'
	| 'Charisma'
	| 'Constitution'
	| 'Dexterity'
	| 'Intelligence'
	| 'Wisdom';

export type LanguageConstants =
	| 'Common'
	| 'Dwarvish'
	| 'Elvish'
	| 'Giant'
	| 'Gnomish'
	| 'Goblin'
	| 'Halfling'
	| 'Orc'
	| 'Draconic'
	| 'Abyssal'
	| 'Celestial'
	| 'Deep Speech'
	| 'Infernal'
	| 'Primordial'
	| 'Sylvan'
	| 'Undercommon'
	| 'Druidic';

export type SkillConstants =
	| 'Acrobatics'
	| 'Animal Handling'
	| 'Arcana'
	| 'Athletics'
	| 'Deception'
	| 'History'
	| 'Insight'
	| 'Intimidation'
	| 'Investigation'
	| 'Medicine'
	| 'Nature'
	| 'Perception'
	| 'Performance'
	| 'Persuasion'
	| 'Religion'
	| 'Sleight Of Hand'
	| 'Stealth'
	| 'Survival';

export type AbilityStatic = {
	id: number;
	name: AbilityConstants;
};

export type ProficiencyType =
	| 'Weapon'
	| 'Tool'
	| 'Armor'
	| 'Language'
	| 'Skill';

export type ToolStatic = {
	id: number;
	name: string;
	typeName: 'Tool Proficiency' | 'Weapon' | 'DragonType';
};

export type TraitStatic = {
	id: number;
	name: string;
	description: string;
	choose?: number;
	from?: ToolStatic[];
	actionName?: string;
};

export type ProficiencyStatic = {
	id: number;
	type: ProficiencyType;
	name: string;
};

export type ResistenceStatic = {
	id: number;
	name: string;
};

export type SkillStatic = {
	id: number;
	name: SkillConstants;
};

export type LanguageStatic = {
	id: number;
	name: LanguageConstants;
};

export type AbilityIncrease = {
	ability: AbilityStatic;
};

export type LanguageAdditions = {
	choose: number;
	from: LanguageStatic[];
	defaults: LanguageStatic[];
};

export type AbilityIncreases = {
	choose: number;
	increaseBy: number;
	from: AbilityIncrease[];
};

export type ProficiencyAdditions = {
	choose: number;
	from: SkillStatic[];
};

export type StatBonus = {
	amount: number;
	stat: AbilityConstants;
};

export type Race = {
	name: string;
	description: string;
	traits: IDArray;
	traitsDescription: string;
	bonuses: StatBonus[];
	resistances: IDArray;
	proficiencies: IDArray;
	abilityIncreases: AbilityIncreases;
	languageAdditions: LanguageAdditions;
	proficiencyAdditions: ProficiencyAdditions;
	addedCantrips: IDArray;
};
