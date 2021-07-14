import BaseModel from './ BaseModel';

export type CharacterStatus = 'Completed' | 'In Progress';

export class Character extends BaseModel {
	id!: number;
	userId!: number;
	name?: string;
	avatar?: string;
	race?: number;
	class?: number;
	background?: number;
	status?: CharacterStatus;
	languages: number[] = [];
	stats?: string;
	hp?: number;
	maxHP?: number;
	tempHP?: number;
	deathSaves: boolean[] = [];
	conditions: number[] = [];
	level: number = 1;
	xp: number = 0;
	proficiencies: number[] = [];
	eyes?: string;
	skin?: string;
	hair?: string;
	backstory?: string;
	height?: string;
	weight?: string;
	age?: string;
	alignment?: number;
	gender?: string;
	personalityTraits?: number;
	ideals?: number;
	bonds?: number;
	flaws?: number;
	faith?: string;
	lifestyle?: number;
	backgroundFeatures: number[] = [];
	characterStep?: number;

	static get tableName() {
		return 'user_characters';
	}
}
