import {
	Abilities,
	backgroundFeatures,
	Languages,
	PersonalCharacteristics,
	Proficiencies,
	races,
	Skills,
	Tools
} from './static-data';
import {
	APIMode,
	AbilityStatic,
	LanguageStatic,
	SkillStatic,
	ToolStatic,
	RaceStatic,
	ProficiencyType,
	BackgroundFeature,
	PersonalCharacteristicsMicro,
	IDArray,
	ProficiencyStatic
} from './types';

/**
 * @class CoreAPI
 * @version V3.0.0
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
	private backgroundFeatures: BackgroundFeature[] = [...backgroundFeatures];
	private personalCharacteristics: PersonalCharacteristicsMicro['selections'][0][] =
		[...PersonalCharacteristics];
	private proficiencies: ProficiencyStatic[] = [...Proficiencies];

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
	 * @param arr Array of values with at least the key 'id'
	 * @param id the id you look to find
	 * @returns the matching element by id
	 */
	private findById(arr: any[], id: number) {
		return arr.find(el => el.id === id);
	}

	/**
	 *
	 * @param id a race id
	 * @returns Race
	 */
	getRace(id: number) {
		const race = this.findById(this.races, id) as RaceStatic;
		return race;
	}

	/**
	 *
	 * @returns Race[]
	 */
	getRaces() {
		return [...this.races];
	}

	/**
	 *
	 * @param id id of background feature
	 * @return BackgroundFeature
	 */
	getBackgroundFeature(id: number) {
		const bgFeature = this.findById(
			this.backgroundFeatures,
			id
		) as BackgroundFeature;
		return bgFeature;
	}

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
	 * @param id a proficiency ID
	 * @returns ProficiencyStatic
	 */
	getProficiency(id: number) {
		const prof = this.findById(this.proficiencies, id) as ProficiencyStatic;

		return prof;
	}

	/**
	 *
	 * @param ids an array of proficiency ids
	 * @returns a list of proficiencies
	 */
	getProficiencies(ids: IDArray) {
		const profs: ProficiencyStatic[] = [];

		for (let i = 0; i < ids.length; i++) {
			profs.push(this.findById(this.proficiencies, ids[i]));
		}

		return profs;
	}

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
	 * @param id a characteristic id
	 * @returns personal characteristic (i.e trait, flaw, bond, ideal)
	 */
	getPersonalCharacteristic(id: number) {
		const char = this.findById(
			this.personalCharacteristics,
			id
		) as PersonalCharacteristicsMicro['selections'][0];
		return char;
	}

	/**
	 *
	 * @param ids IDArray
	 * @returns an array of personal characteristics
	 */
	getPersonalCharacteristics(ids: IDArray) {
		const chars: PersonalCharacteristicsMicro['selections'][0][] = [];

		for (let i = 0; i < ids.length; i++) {
			chars.push(this.findById(this.personalCharacteristics, ids[i]));
		}

		return chars;
	}

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
	getAlignment(id: number) {}
	getAlignments() {}
	getLifestyle(id: number) {}
	getLifestyles() {}
	getClass(id: number) {}
	getBackground(id: number) {}
	getEquipmentItem(id: number) {}
	getSpell(id: number) {}
}

export const api = new CoreAPI();
