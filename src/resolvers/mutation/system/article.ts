import { Article } from '../../../db/models/Article';
import { ArticleContent } from '../../../db/models/ArticleContent';

export const createArticle: Resolvers.MutationResolvers['createArticle'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Resolvers: Mutation: createArticle');

		const { title, content, url, author, views } = args.article;

		const article = await Article.query().insertAndFetch({
			views: 0,
			url,
			author,
			title
		});

		if (content) {
			for (let i = 0; i < content.length; i++) {
				await ArticleContent.query().insert({
					...content[i],
					articleId: article.id
				});
			}
		}

		const contentBlocks = await ArticleContent.query().where({
			articleId: article.id
		});

		return { ...article, content: contentBlocks };
	};

export const deleteArticle: Resolvers.MutationResolvers['deleteArticle'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Resolvers: Mutation: deleteArticle');

		const deletedArticle = await Article.query().deleteById(args.id);

		if (deletedArticle < 1) {
			throw new Error(
				'Article was not deleted! No article exist with id ' + args.id
			);
		}

		await Article.query().delete().where({ articleId: args.id });

		return true;
	};
