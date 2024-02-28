import mongoose from "mongoose";
import { ArticleEpicSchema } from "../schemas/article.schema"; // Importation du schéma de l'article épique

// Définition du modèle MongoDB pour les articles épiques en utilisant le schéma correspondant
export const ArticleEpicModel = mongoose.model('article', ArticleEpicSchema)
// export const ArticleClassiqueModel = mongoose.model('Article', ArticleClassiqueSchema)
