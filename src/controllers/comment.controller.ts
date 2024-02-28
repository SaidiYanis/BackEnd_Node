import { Request, Response } from "express";
import * as commentService from "../services/comment.service";
import * as commentRepository from "../repositories/comment.repository";

// Contrôleur pour créer un nouveau commentaire
export const createComment = async (req: Request, res: Response) => {
  // Extraction des données du commentaire depuis le corps de la requête
  const commentData = req.body;
  try {
    // Appel du service pour créer un nouveau commentaire avec les données fournies
    const newComment = await commentService.createComment(commentData);
    // Réponse avec le nouveau commentaire créé et un code de statut 201 (Created)
    res.status(201).send(newComment);
  } catch (error: any) {
    // En cas d'erreur lors de la création du commentaire, renvoie une réponse avec un code de statut 500 (Internal Server Error) et le message d'erreur
    res.status(500).send(error.toString());
  }
};

// Contrôleur pour récupérer les commentaires par ID d'article
export const getCommentsByArticleId = async (req: Request, res: Response) => {
  // Extraction de l'ID de l'article depuis les paramètres de la requête
  const articleID = req.params.articleID;
  try {
    // Appel du service pour récupérer les commentaires correspondant à l'ID de l'article spécifié
    const comments = await commentService.getCommentsByArticleId(articleID);
    // Réponse avec les commentaires trouvés et un code de statut 200 (OK)
    res.status(200).send(comments);
  } catch (error: any) {
    // En cas d'erreur lors de la récupération des commentaires, renvoie une réponse avec un code de statut 500 (Internal Server Error) et le message d'erreur
    res.status(500).send(error.toString());
  }
};
