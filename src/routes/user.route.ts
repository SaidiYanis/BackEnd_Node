import { Router } from 'express'; // Import de l'objet Router depuis Express
import * as userController from '../controllers/user.controller'; // Import du contrôleur des utilisateurs
import { authMiddleware } from '../middlewares/auth.middleware'; // Import du middleware d'authentification
const router = Router(); // Création d'une instance de Router

// Définition des routes pour la gestion des utilisateurs
router.post('/', authMiddleware, userController.createUser); // Route pour créer un nouvel utilisateur
router.get('/', authMiddleware, userController.getUserByEmail); // Route pour récupérer un utilisateur par son adresse e-mail
router.patch('/:id', authMiddleware, userController.updateUser); // Route pour mettre à jour un utilisateur par son ID

export default router; // Exportation du routeur
