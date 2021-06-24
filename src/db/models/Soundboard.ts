import BaseModel from './ BaseModel';

export class Soundboard extends BaseModel {
	id!: number;
	userId!: number;
	title!: string;

	static get tableName() {
		return 'soundboards';
	}
}
