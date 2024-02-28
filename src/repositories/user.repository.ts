import exp from "constants"; // Import inutile, peut être supprimé
import { UserModel } from "../databases/models/user.model"; // Import du modèle d'utilisateur
import { UserCreation } from "../types/user"; // Import des types d'utilisateur
import { comparePassword, hashPassword } from '../utils/jwt.utils'; // Import des fonctions pour comparer et hasher les mots de passe

// Fonction pour créer un nouvel utilisateur
export const createUser = async (user: UserCreation) => {
  try {
    // Création d'un nouvel utilisateur en utilisant le modèle UserModel
    const newUser = await UserModel.create(user);
    return newUser;
  } catch (error) {
    throw error;
  }
}

// Fonction pour trouver un utilisateur par son adresse e-mail
export const findUserByEmail = async (email: string) => {
  try {
    // Recherche d'un utilisateur dans la base de données par son adresse e-mail
    const user = await UserModel.findOne({ email });
    return user;
  } catch (error) {
    throw error;
  }
}

// Fonction pour mettre à jour un utilisateur
export const updateUser = async (id: string, user: UserCreation) => {
  try {
    // Mise à jour de l'utilisateur dans la base de données en utilisant son ID
    const updatedUser = await UserModel.findByIdAndUpdate(id, user, { new: true });
    if (!updatedUser) {
      throw new Error('User not found');
    }
    // Vérification de la validité du mot de passe mis à jour en comparant avec le mot de passe existant
    const isPasswordValid = await comparePassword(user.password, updatedUser.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }
    return updatedUser;
  } catch (error) {
    throw error;
  }
}
