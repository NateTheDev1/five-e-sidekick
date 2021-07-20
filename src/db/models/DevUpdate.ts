import BaseModel from './ BaseModel';

export class DevUpdate extends BaseModel {
	id!: number;
	title!: string;
	version?: string;
	releaseDate?: string;
	tags: string[] = [];
	paragraphs: string[] = [];

	static get tableName() {
		return 'dev_updates';
	}
}
