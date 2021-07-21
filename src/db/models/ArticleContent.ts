import BaseModel from './ BaseModel';

export class ArticleContent extends BaseModel {
	id!: number;
	articleId!: number;
	type!:
		| 'PARAGRAPH'
		| 'LINK'
		| 'INNER_LINK'
		| 'HEADING_1'
		| 'HEADING_2'
		| 'HEADING_3'
		| 'CALLOUT'
		| 'IMAGE';
	fontSize: 'FONT_SM' | 'FONT_MD' | 'FONT_LG' = 'FONT_MD';
	imageURL?: string;

	order: number = -1;

	static get tableName() {
		return 'article_content_blocks';
	}
}
