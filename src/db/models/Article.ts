import BaseModel from './ BaseModel';

export class Article extends BaseModel {
	id!: number;
	title!: string;
	url?: string;
	author!: string;
	views!: number;

	static get tableName() {
		return 'articles';
	}
}
