import { CommentModel } from "../databases/models/comment.model"; // Import du modèle de commentaire
import { CommentCreation, CommentFinal } from "../types/comment"; // Import des types de commentaire

// Fonction pour créer un nouveau commentaire
export const createComment = async (commentData: CommentCreation) => {
  try {
    // Création d'un nouveau commentaire en utilisant le modèle CommentModel
    const newComment = await CommentModel.create(commentData);
    return newComment;
  } catch (error) {
    // En cas d'erreur, affichage de l'erreur dans la console et renvoi de l'erreur
    console.error("Error in createComment repository:", error);
    throw error;
  }
};

// Fonction pour trouver les commentaires par ID d'article
export const findCommentsByArticleId = async (articleID: string) => {
  try {
    // Recherche des commentaires associés à l'ID de l'article spécifié
    const comments = await CommentModel.find({ articleID }).exec();
    return comments;
  } catch (error) {
    // En cas d'erreur, affichage de l'erreur dans la console et renvoi de l'erreur
    console.error("Error in findCommentsByArticleId repository:", error);
    throw error;
  }
};
