import jwt from "jsonwebtoken"; // Import du module JWT
import { jwtConfig } from "../configs/jwt.config"; // Import de la configuration JWT
import bcrypt from 'bcrypt'; // Import du module bcrypt pour le hachage des mots de passe

// Fonction pour générer un jeton d'accès
// @ts-ignore
export const generateAccessToken = (user) => {
  return jwt.sign(user, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
};

// Fonction pour générer un jeton de rafraîchissement
// @ts-ignore
export const generateRefreshToken = async (user) => {
  return jwt.sign(user, jwtConfig.refreshSecret, { expiresIn: jwtConfig.refreshExpiresIn });
};

// Fonction pour décoder un jeton d'accès
// @ts-ignore
export const decodeAccessToken = (token) => {
  try {
    const decodedToken = jwt.verify(token, jwtConfig.secret);
    return decodedToken;
  } catch (error) {
    return null; // En cas d'erreur de décodage, retourner null
  }
};

// Fonction pour décoder un jeton de rafraîchissement
// @ts-ignore
export const decodeRefreshToken = (token) => {  
  try {
    const decodedToken = jwt.verify(token, jwtConfig.refreshSecret);
    return decodedToken;
  } catch (error) {
    return null; // En cas d'erreur de décodage, retourner null
  }
};

// Fonction pour hacher un mot de passe
// @ts-ignore
export const hashPassword = (password) => {
  const saltRounds = 10; // Nombre de tours de hachage
  const salt = bcrypt.genSaltSync(saltRounds); // Générer un sel de hachage

  // Hacher le mot de passe avec le sel généré
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword; // Retourner le mot de passe haché
};

// Fonction pour comparer un mot de passe avec un mot de passe haché
// @ts-ignore
export const comparePassword = (password, hashedPassword) => {
  // Comparer le mot de passe fourni avec le mot de passe haché
  const isPasswordCorrect = bcrypt.compareSync(password, hashedPassword);
  return isPasswordCorrect; // Retourner true si les mots de passe correspondent, sinon false
};

// Fonction pour générer un jeton d'accès pour un administrateur
// @ts-ignore
export const generateAdminAccessToken = (admin) => {
  return jwt.sign(admin, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
};
