// Importation des modules nécessaires depuis Express.js
import { Request, Response } from 'express';

// Importation du type ArticleCreation depuis le fichier article.ts situé dans le répertoire types
import { ArticleCreation } from '../types/article'; // Removed unused import

// Importation des services et des repositories pour les articles
import * as articleService from '../services/article.service';
import * as articleRepository from '../repositories/article.repository';

// Fonction pour créer un nouvel article
export const createArticle = async (req: Request, res: Response) => {
  const article: ArticleCreation = req.body; // Extraction des données de l'article depuis le corps de la requête
  console.log('article', article); // Affichage de l'article dans la console à des fins de débogage

  try {
    // Appel du service pour créer un nouvel article en utilisant les données fournies
    const newArticle = await articleService.createArticle(article);
    // Réponse avec le nouvel article créé et un code de statut 201 (Created)
    res.status(201).send(newArticle);
  } catch (error) {
    // En cas d'erreur lors de la création de l'article, renvoie une réponse avec un code de statut 500 (Internal Server Error)
    res.status(500).send('Error creating article');
  }
}

// Fonction pour récupérer tous les articles ou ceux correspondant à certains critères
export const GetAllArticles = async (req: Request, res: Response) => {
  try {
    // Gestion des différentes possibilités de requêtes : par thème, par auteur, par ID, ou tous les articles
    // Si la requête contient un paramètre "theme"
    if(req.query.theme) {
      // Extraction du thème depuis la requête et conversion en chaîne de caractères
      const theme = req.query.theme as string;
      // Appel du service pour récupérer les articles correspondant au thème spécifié
      const articleByTheme = await articleService.GetArticleByTheme(theme);
      // Réponse avec les articles trouvés et un code de statut 200 (OK)
      return res.status(200).send(articleByTheme);
    }
    // Si la requête contient un paramètre "autor"
    if(req.query.autor) {
      // Extraction de l'auteur depuis la requête et conversion en chaîne de caractères
      const autor = req.query.autor as string;
      // Appel du service pour récupérer les articles correspondant à l'auteur spécifié
      const articleByAutor = await articleService.GetArticleByAutor(autor);
      // Réponse avec les articles trouvés et un code de statut 200 (OK)
      return res.status(200).send(articleByAutor);
    }
    // Si la requête contient un paramètre "id"
    if(req.params.id) {
      // Extraction de l'identifiant depuis la requête
      const id = req.params.id;
      // Appel du service pour récupérer l'article correspondant à l'identifiant spécifié
      const articleById = await articleService.GetArticleById(id);
      // Réponse avec l'article trouvé et un code de statut 200 (OK)
      return res.status(200).send(articleById);
    }
    // Si aucun paramètre n'est spécifié dans la requête, récupère tous les articles
    const allArticles = await articleService.GetAllArticles();
    // Réponse avec tous les articles et un code de statut 200 (OK)
    res.status(200).send(allArticles);
  } catch (error) {
    // En cas d'erreur lors de la récupération des articles, renvoie une réponse avec un code de statut 500 (Internal Server Error)
    res.status(500).send('Error getting articles');
  }
}

// Fonction pour récupérer les articles correspondant à un thème spécifié
export const GetArticleByTheme = async (req: Request, res: Response) => {
  // Extraction du thème depuis la requête et conversion en chaîne de caractères
  const theme = req.query.theme as string; // Ensure theme is of type string
  try {
    // Appel du repository pour trouver les articles correspondant au thème spécifié
    const articleByTheme = await articleRepository.FindArticleByTheme(theme);
    // Réponse avec les articles trouvés et un code de statut 200 (OK)
    res.status(200).send(articleByTheme);
  } catch (error) {
    // En cas d'erreur lors de la récupération des articles, renvoie une réponse avec un code de statut 500 (Internal Server Error)
    res.status(500).send('Error getting article');
  }
}

// Fonction pour récupérer les articles correspondant à un auteur spécifié
export const GetArticleByAutor = async (req: Request, res: Response) => {
  // Extraction de l'auteur depuis la requête et conversion en chaîne de caractères
  const autor = req.query.autor as string; // Ensure autor is of type string
  try {
    // Appel du repository pour trouver les articles correspondant à l'auteur spécifié
    const articleByAutor = await articleRepository.FindArticleByAutor(autor);
    // Réponse avec les articles trouvés et un code de statut 200 (OK)
    res.status(200).send(articleByAutor);
  } catch (error) {
    // En cas d'erreur lors de la récupération des articles, renvoie une réponse avec un code de statut 500 (Internal Server Error)
    res.status(500).send('Error getting article');
  }
}

// Fonction pour récupérer un article par son identifiant
export const GetArticleById = async (req: Request, res: Response) => {
  // Extraction de l'identifiant depuis la requête
  const id = req.params.id; // Ensure id is of type string
  try {
    // Appel du repository pour trouver l'article correspondant à l'identifiant spécifié
    const article = await articleRepository.FindArticleById(id);
    // Réponse avec l'article trouvé et un code de statut 200 (OK)
    res.status(200).send(article);
  } catch (error) {
    // En cas d'erreur lors de la récupération de l'article, renvoie une réponse avec un code de statut 500 (Internal Server Error)
    res.status(500).send('Error getting article');
  }
}

// Fonction pour mettre à jour un article existant
export const UpdateArticle = async (req: Request, res: Response) => {
  // Extraction de l'identifiant depuis la requête
  const id = req.params.id;
  // Extraction des données de l'article mis à jour depuis le corps de la requête
  const article: ArticleCreation = req.body;
  try {
    // Appel du repository pour mettre à jour l'article avec les nouvelles données
    const updatedArticle = await articleRepository.UpdateArticle(id, article);
    // Réponse avec l'article mis à jour et un code de statut 200 (OK)
    res.status(200).send(updatedArticle);
  } catch (error) {
    // En cas d'erreur lors de la mise à jour de l'article, renvoie une réponse avec un code de statut 500 (Internal Server Error)
    res.status(500).send('Error updating article');
  }
}
