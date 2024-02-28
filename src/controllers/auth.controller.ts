import { Request, Response } from 'express';
import * as authService from '../services/auth.service';

// Fonction pour gérer la connexion d'un utilisateur
export const login = async (req: Request, res: Response) => {
  // Extraction de l'email et du mot de passe depuis le corps de la requête
  const { email, password } = req.body;
  try {
    // Appel du service d'authentification pour vérifier les informations d'identification de l'utilisateur
    const user = await authService.login(email, password);
    // Réponse avec les informations de l'utilisateur et un code de statut 200 (OK)
    res.status(200).send(user);
  } catch (error : any) {
    // En cas d'erreur lors de la connexion, renvoie une réponse avec un code de statut 500 (Internal Server Error) et le message d'erreur
    res.status(500).send(error.toString());
  }
}

// Fonction pour gérer la déconnexion d'un utilisateur
export const logout = async (req: Request, res: Response) => {
  // Vérification de la présence d'un jeton d'authentification dans l'en-tête de la requête
  if(!req.headers.authorization) return res.status(400).send('No token provided');
  // Extraction du jeton d'authentification de l'en-tête de la requête
  const token = req.headers.authorization.replace('Bearer ', '');
  // Vérification de la validité du jeton
  if (!token) return res.status(400).send('No token provided');

  try {
    // Appel du service d'authentification pour déconnecter l'utilisateur en utilisant le jeton
    await authService.logout(token);
    // Réponse avec un message indiquant que l'utilisateur est déconnecté et un code de statut 200 (OK)
    res.status(200).send('Logged out');
  } catch (error) {
    // En cas d'erreur lors de la déconnexion, renvoie une réponse avec un code de statut 500 (Internal Server Error) et un message d'erreur
    res.status(500).send('Error logging out');
  }
}

// Fonction pour rafraîchir le jeton d'authentification (à implémenter)

// Fonction pour récupérer la session de l'utilisateur (à implémenter)
