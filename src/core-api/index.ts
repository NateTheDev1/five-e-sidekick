import { Abilities, Languages, races, Skills, Tools } from './static-data';
import {
	APIMode,
	AbilityStatic,
	LanguageStatic,
	SkillStatic,
	ToolStatic,
	RaceStatic,
	ProficiencyType
} from './types';

/**
 * @class CoreAPI
 * @constructor None
 * @description The core API that gets data from the different categories.
 */
class CoreAPI {
	private mode: APIMode = 'active';
	private abilities: AbilityStatic[] = [...Abilities];
	private languages: LanguageStatic[] = [...Languages];
	private skills: SkillStatic[] = [...Skills];
	private tools: ToolStatic[] = [...Tools];
	private races: RaceStatic[] = [...races];

	/**
	 *
	 * @param mode APIMode
	 * @description Sets the return mode for each API method.
	 */

	setMode(mode: APIMode) {
		this.mode = mode;
	}

	/**
	 *
	 * @param id a race ID
	 */
	getRace(id: number) {
		const race = this.findById(this.races, id) as RaceStatic;
		return race;
	}

	/**
	 *
	 * @returns list of all races
	 */
	getRaces() {
		return [...this.races];
	}

	/**
	 *
	 * @param id a class ID
	 */
	getClass(id: number) {}
	/**
	 *
	 * @param id a background ID
	 */
	getBackground(id: number) {}

	/**
	 *
	 * @param id a tool id
	 */
	getTool(id: number) {
		const tool = this.findById(this.tools, id) as ToolStatic;
		return tool;
	}

	/**
	 *
	 * @param id an equipment item ID
	 */
	getEquipmentItem(id: number) {}

	/**
	 *
	 * @param id a spell ID
	 */
	getSpell(id: number) {}
	/**
	 *
	 * @param id a skill ID
	 * @example getSkills(1) -> "Acrobatics"
	 * @return Skill Static
	 */
	getSkill(id: number) {
		const skill = this.findById(this.skills, id) as SkillStatic;
		return skill;
	}

	/**
	 * @return an array of all skill references
	 */
	getSkills() {
		return [...this.skills];
	}

	/**
	 *
	 * @param id an ability ID
	 * @returns Ability Static
	 */
	getAbility(id: number) {
		const ability = this.findById(this.abilities, id) as AbilityStatic;
		return ability;
	}

	/**
	 * @return an array of all ability references
	 */
	getAbilities() {
		return [...this.abilities];
	}

	/**
	 *
	 * @param id an alignment ID
	 */
	getAlignment(id: number) {}

	getAlignments() {}

	/**
	 *
	 * @param id a lifestyle ID
	 */
	getLifestyle(id: number) {}

	getLifestyles() {}

	/**
	 *
	 * @param id a language ID
	 * @returns Language Static
	 */
	getLanguage(id: number) {
		const language = this.findById(this.languages, id) as LanguageStatic;
		return language;
	}

	/**
	 * @return an array of all language references
	 */
	getLanguages() {
		return [...this.languages];
	}

	// TODO: proficiencies by type
	/**
	 *
	 * @param get all proficiencies by type
	 */
	getProficiencyByType(type: ProficiencyType) {
		// pseudo switch - case by type
	}

	/**
	 *
	 * @param inventory An array of inventory item IDS
	 * @description Builds an inventory from an array of itemIDs
	 * @returns InventoryItem[]
	 */
	buildInventory(inventory: number[]) {}

	private findById(arr: any[], id: number) {
		return arr.find(el => el.id === id);
	}
}

export const api = new CoreAPI();
