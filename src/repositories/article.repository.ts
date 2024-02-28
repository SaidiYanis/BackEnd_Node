import { ArticleCreation, ArticleFinal } from "../types/article";
import { ArticleEpicModel } from "../databases/models/article.model";

export const createArticle = async (article : ArticleCreation) => {
  try {
    const newArticle = await ArticleEpicModel.create(article);
    return newArticle;
  } catch (error) {
    throw error;
  }
}

export const FindArticleByTheme = async (theme: string) => {
  try {
    const articleByTheme = await ArticleEpicModel.find({ theme  });
    return articleByTheme;
  } catch (error) {
    throw error;
  }
}

export const GetAllArticles = async () => {
  try {
    return await ArticleEpicModel.find();
  } catch (error) {
    throw error;
  }
}

export const FindArticleByAutor = async (autor: string) => {
  try {
    const articleByAutor = await ArticleEpicModel.find({ autor });
    return articleByAutor;
  } catch (error) {
    throw error;
  }
}

export const FindArticleById = async (id: string) => {
  try {
    const article = await ArticleEpicModel.findById(id);
    if (!article) {
    return null;
    }

  const theme = article.theme;
  const ramdomArticle = await ArticleEpicModel.aggregate([
    { $match: { theme: theme, id: { $ne: article.id} } },
    { $sample: { size: 1 } },
  ]);

  return { article, recommandation : ramdomArticle };
  } catch (error) {
    throw error;
  }
}

export const UpdateArticle = async (id: string, article: ArticleCreation) => {
  try {
    const updatedArticle = await ArticleEpicModel
      .findByIdAndUpdate(id, article  , { new: true });

    return updatedArticle;
  } catch (error) {
    throw error;
  }
}
