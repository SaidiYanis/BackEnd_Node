import * as commentRepository from "../repositories/comment.repository"; // Import du référentiel des commentaires
import { CommentCreation } from "../types/comment"; // Import du type CommentCreation

// Fonction pour créer un nouveau commentaire
export const createComment = async (commentData: CommentCreation) => {
  try {
    // Appel de la fonction du référentiel pour créer un nouveau commentaire
    const newComment = await commentRepository.createComment(commentData);
    if (!newComment) throw new Error("Error creating comment");

    return newComment;
  } catch (error) {
    // Gestion des erreurs : journalisation et re-lancement de l'erreur
    console.error("Error in createComment service:", error);
    throw error;
  }
};

// Fonction pour récupérer les commentaires par ID d'article
export const getCommentsByArticleId = async (articleID: string) => {
  try {
    // Appel de la fonction du référentiel pour trouver les commentaires par ID d'article
    const comments = await commentRepository.findCommentsByArticleId(articleID);
    return comments;
  } catch (error) {
    // Gestion des erreurs : journalisation et re-lancement de l'erreur
    console.error("Error in getCommentsByArticleId service:", error);
    throw error;
  }
};
