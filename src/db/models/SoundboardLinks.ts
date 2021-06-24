import BaseModel from './ BaseModel';

export class SoundboardLinks extends BaseModel {
	id!: number;
	title!: string;
	url!: string;
	soundboardId!: number;

	static get tableName() {
		return 'soundboard_links';
	}
}
