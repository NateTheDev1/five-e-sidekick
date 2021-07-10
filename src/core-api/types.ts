export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type APIMode = 'static' | 'active';

export type IDArray = number[];

// export type EquipmentTypeConstants = 'Martial Weapon' | 'Simple Weapon';

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

export type CantripStatic = {
	id: number;
	level: string;
	duration: string;
	castingTime: string;
	range: string;
	components: string;
	damage: string;
	school: string;
	attackOrSave: string;
	name: string;
	description: string;
	extraDescroption: string;
	availableFor: string;
	from: string;
};

export type AbilityStatic = {
	id: number;
	name: AbilityConstants;
};

export type EquipmentStatic = {
	id: number;
	name: string;
	description?: string;
	packName?: string;
	tag?: string;
};

export type ProficiencyType =
	| 'Weapon'
	| 'Tool'
	| 'Armor'
	| 'Language'
	| 'Skill'
	| 'Vehicle'
	| 'Saving Throw';

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

export type ClassTraitStatic = {
	id: number;
	level: number;
	title: string;
	description: string;
	actionName?: string;
};

export type RaceStatic = {
	id: number;
	race: Race;
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

export type SkillProficiencyAdditions = {
	choose: number;
	from: SkillStatic[];
};

export type ProficiencyAdditions = {
	title: string;
	choose: number;
	from: ProficiencyStatic[];
};

export type EquipmentAdditonNano = {
	id: number;
	quantity: number;
};

export type EquipmentAdditonMicro = {
	items: EquipmentAdditonNano[];
	choose?: number;
};

export type EquipmentAdditons = {
	title: string;
	choose: number;
	from: EquipmentAdditonMicro[];
};

export type EquipmentAdditionsStatic = {
	id: number;
	quantity: number;
};

export type StatBonus = {
	amount: number;
	stat: AbilityConstants;
};

export type RollGeneric = {
	sides: number;
	amount: number;
};

export type PersonalCharacteristicsMicro = {
	roll: RollGeneric;
	selections: { id: number; description: string }[];
};

export type PersonalCharacteristicsSelection = {
	traits: PersonalCharacteristicsMicro;
	ideals: PersonalCharacteristicsMicro;
	flaws: PersonalCharacteristicsMicro;
	bonds: PersonalCharacteristicsMicro;
};

export type BackgroundFeature = {
	id: number;
	name: string;
	description: string;
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
	proficiencyAdditions: SkillProficiencyAdditions;
	addedCantrips: IDArray;
};

export type BackgroundStatic = {
	id: number;
	background: Background;
};

export type Background = {
	name: string;
	description: string;
	proficiencies: IDArray;
	languageAdditions: Omit<LanguageAdditions, 'defaults'>;
	proficencyAddition: ProficiencyAdditions;
	traitsSelection: PersonalCharacteristicsSelection;
	backgroundFeatures: BackgroundFeature[];
};

export type HitDie = {
	amount: number;
	sides: number;
};

export type HitPointBaseMicro = {
	base: number;
	modifier: AbilityConstants;
};

export type HitPointBaseMax = {
	rollPossible: boolean;
	default: number;
	modifier: AbilityConstants;
	addPrevious: boolean;
};

export type HitPointBase = {
	atLevelOne: HitPointBaseMicro;
	higherLevels: HitPointBaseMax;
};

export type CharacterClass = {
	name: string;
	description: string;
	primaryAbility: string;
	hitDie: HitDie;
	hitPointBase: HitPointBase;
	saves: IDArray;
	proficiencies: IDArray;
	proficiencySelection?: ProficiencyAdditions;
	traits: ClassTraitStatic[];
	equipmentSelection: EquipmentAdditons[];
	equipment: EquipmentAdditionsStatic[];
	languages: LanguageStatic[];
	instrumentSelection?: ProficiencyAdditions;
	skillSelection?: Omit<ProficiencyAdditions, 'from'> & {
		from: SkillStatic[];
	};
};
