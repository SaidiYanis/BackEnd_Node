import * as jwtUtils from '../utils/jwt.utils'; // Import des utilitaires JWT
import * as userService from './user.service'; // Import du service utilisateur

// Fonction pour gérer le processus de connexion
export const login = async (email: string, password: string) => {
  try {
    // Récupération de l'utilisateur par email
    const user = await userService.getUserByEmail(email);
    if (!user) throw new Error('User not found');

    // Vérification du mot de passe
    const isPasswordCorrect = jwtUtils.comparePassword(password, user.password);
    if (!isPasswordCorrect) throw new Error('Incorrect password');

    // Génération du jeton d'accès et du jeton de rafraîchissement
    const accessToken = jwtUtils.generateAccessToken({ email: email });
    const refreshToken = await jwtUtils.generateRefreshToken({ email: email });
    
    // Retourne les jetons générés
    return { accessToken, refreshToken };
  } catch (error) {
    throw error;
  }
}

// Fonction pour gérer le processus de déconnexion
export const logout = async (token: string) => {
  try {
    // Ajout du jeton à une liste noire ou suppression du jeton des sessions actives
  } catch (error) {
    throw error;
  }
}
