import { Article } from '../../../db/models/Article';
import { ArticleContent } from '../../../db/models/ArticleContent';

export const getArticle: Resolvers.QueryResolvers['getArticle'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Resolvers: Query: getArticle');

	const article = await Article.query().findById(args.id);

	if (!article) {
		throw new Error('Did not find article with id ' + args.id);
	}

	const content = await ArticleContent.query().where({
		articleId: args.id
	});

	return { ...article, content: content };
};

export const getArticles: Resolvers.QueryResolvers['getArticles'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Resolvers: Query: getArticles');

	let articles: Article[] = [];

	// TODO: paginationw with offset

	if (args.params === 'TOP') {
		articles = await Article.query().orderBy('views', 'DESC').limit(3);
	} else {
		articles = await Article.query().orderBy('views', 'DESC').limit(50);
	}

	return articles;
};
