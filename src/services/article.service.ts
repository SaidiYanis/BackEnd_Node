import { ArticleCreation, ArticleFinal } from "../types/article"; // Import des types d'article
import * as articleRepository from '../repositories/article.repository'; // Import du référentiel d'articles

// Fonction pour créer un nouvel article
export const createArticle = async (article: ArticleCreation) => {
  try {
    // Appel de la fonction du référentiel pour créer un nouvel article
    const createdArticle = await articleRepository.createArticle(article);
    if (!createdArticle) throw new Error('Error creating article');

    // Possibilité d'ajouter un enregistrement de journalisation (commenté pour le moment)
    /* const newLog = await logService.createLog({ feature: 'article', content: createdArticle});
    console.log(newLog); */
    
    return createdArticle;
  } catch (error) {
    throw error;
  }
}

// Fonction pour récupérer les articles par thème
export const GetArticleByTheme = async (theme: string) => {
  try {
    // Appel de la fonction du référentiel pour trouver les articles par thème
    const article = await articleRepository.FindArticleByTheme(theme);
    return article;
  } catch (error) {
    throw error;
  }
}

// Fonction pour récupérer tous les articles
export const GetAllArticles = async () => {
  try {
    // Appel de la fonction du référentiel pour récupérer tous les articles
    const articles = await articleRepository.GetAllArticles();
    return articles;
  } catch (error) {
    throw error;
  }
}

// Fonction pour récupérer les articles par auteur
export const GetArticleByAutor = async (autor: string) => {
  try {
    // Appel de la fonction du référentiel pour trouver les articles par auteur
    const article = await articleRepository.FindArticleByAutor(autor);
    return article;
  } catch (error) {
    throw error;
  }
}

// Fonction pour récupérer un article par son ID
export const GetArticleById = async (id: string) => {
  try {
    // Appel de la fonction du référentiel pour trouver un article par son ID
    const article = await articleRepository.FindArticleById(id);
    return article;
  } catch (error) {
    throw error;
  }
}

// Fonction pour mettre à jour un article
export const UpdateArticle = async (id: string, article: ArticleCreation) => {
  try {
    // Appel de la fonction du référentiel pour mettre à jour un article
    const updatedArticle = await articleRepository.UpdateArticle(id, article);
    return updatedArticle;
  } catch (error) {
    throw error;
  }
}
