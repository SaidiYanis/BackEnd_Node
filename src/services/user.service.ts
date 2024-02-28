import * as userRepository from '../repositories/user.repository';
import * as jwtUtils from '../utils/jwt.utils';
import { UserCreation } from '../types/user.d';
// @ts-ignore
// Fonction pour créer un nouvel utilisateur
export const createUser = async (user) => {
    // Vérifier si l'utilisateur existe déjà
    const isExistingUser = await userRepository.findUserByEmail(user.email);
    if (isExistingUser) throw new Error('User already exists')
    // Hasher le mot de passe avant de l'enregistrer
    user.password = jwtUtils.hashPassword(user.password);
    try {
        // Créer le nouvel utilisateur en utilisant le référentiel
        const newUser = await userRepository.createUser(user);
        return newUser;
    }
    catch (error) {
        throw error;
    }
}
// @ts-ignore
// Fonction pour récupérer un utilisateur par email
export const getUserByEmail = async (email) => {
    try {
        // Récupérer l'utilisateur par email en utilisant le référentiel
        const user = await userRepository.findUserByEmail(email);
        return user;
    }
    catch (error) {
        throw error;
    }
}
// Fonction pour mettre à jour un utilisateur
export const updatedUser = async (id: string, user: UserCreation ) => {    
    try {
        // Mettre à jour l'utilisateur en utilisant le référentiel
        const updatedUser = await userRepository.updateUser(id, user);
        return updatedUser;
    }
    catch (error) {
        throw error;
    }
}