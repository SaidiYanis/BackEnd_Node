import { Router } from "express"; // Import de l'objet Router depuis Express
import articleRoutes from "./article.route"; // Import des routes liées aux articles
import authRoutes from "./auth.route"; // Import des routes liées à l'authentification
import commentRoutes from "./comment.route"; // Import des routes liées aux commentaires
import userRoutes from "./user.route"; // Import des routes liées aux utilisateurs

const router = Router(); // Création d'une instance de Router

// Définition des routes principales de l'API
router.use('/v1/article', articleRoutes); // Montage des routes liées aux articles sous le préfixe /v1/article
router.use('/v1/auth', authRoutes); // Montage des routes liées à l'authentification sous le préfixe /v1/auth
router.use('/v1/user', userRoutes); // Montage des routes liées aux utilisateurs sous le préfixe /v1/user
router.use("/v1/comment", commentRoutes); // Montage des routes liées aux commentaires sous le préfixe /v1/comment

export default router; // Exportation du routeur configuré
