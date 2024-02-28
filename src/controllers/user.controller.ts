import { Request, Response } from 'express';
import * as userService from '../services/user.service';
import { UserCreation } from '../types/user'; // Import du type UserCreation
import * as userRepository from '../repositories/user.repository';

// Contrôleur pour créer un nouvel utilisateur
export const createUser = async (req: Request, res: Response) => {
  // Affichage des détails de la requête dans la console à des fins de débogage
  console.log('req', req)
  console.log('req.body', req.body);
  
  // Extraction des données de l'utilisateur depuis le corps de la requête
  const user = req.body;
  try {
    // Appel du service pour créer un nouvel utilisateur avec les données fournies
    const newUser = await userService.createUser(user);
    // Réponse avec le nouvel utilisateur créé et un code de statut 201 (Created)
    res.status(201).send(newUser);
  } catch (error: any) {
    // En cas d'erreur lors de la création de l'utilisateur, renvoie une réponse avec un code de statut 500 (Internal Server Error) et le message d'erreur
    res.status(500).send(error.toString());
  }
}

// Contrôleur pour récupérer un utilisateur par son email
export const getUserByEmail = async (req: Request, res: Response) => {
  // Extraction de l'email depuis les paramètres de la requête
  const email = req.query.email;
  try {
    // Appel du service pour récupérer l'utilisateur correspondant à l'email spécifié
    const user = await userService.getUserByEmail(email);
    // Réponse avec l'utilisateur trouvé et un code de statut 200 (OK)
    res.status(200).send(user);
  } catch (error: any) {
    // En cas d'erreur lors de la récupération de l'utilisateur, renvoie une réponse avec un code de statut 500 (Internal Server Error) et le message d'erreur
    res.status(500).send(error.toString());
  }
}

// Contrôleur pour mettre à jour un utilisateur
export const updateUser = async (req: Request, res: Response) => {
  // Extraction de l'ID de l'utilisateur depuis les paramètres de la requête
  const id = req.params.id;
  // Extraction du mot de passe depuis les paramètres de la requête
  const password = req.query.password;
  // Extraction des données de l'utilisateur depuis le corps de la requête
  const user: UserCreation = req.body;
  try {
    // Appel du repository pour mettre à jour l'utilisateur avec les nouvelles données
    const updatedUser = await userRepository.updateUser(id, user);
    // Réponse avec l'utilisateur mis à jour et un code de statut 200 (OK)
    res.status(200).send(updatedUser);
  } catch (error: any) {
    // En cas d'erreur lors de la mise à jour de l'utilisateur, renvoie une réponse avec un code de statut 500 (Internal Server Error) et le message d'erreur
    res.status(500).send(error.toString());
  }
}
