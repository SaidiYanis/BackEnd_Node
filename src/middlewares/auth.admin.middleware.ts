import * as jwtUtils from '../utils/jwt.utils'; // Importation des utilitaires JWT
import { Request, Response, NextFunction } from 'express'; // Importation des types Request, Response et NextFunction depuis Express

// Middleware d'authentification
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    // Vérification de la présence d'un jeton d'accès dans l'en-tête Authorization de la requête
    if (!req.headers.authorization) return res.status(400).send('No token provided');
    
    // Extraction du jeton d'accès du format "Bearer <token>"
    const token = req.headers.authorization.replace('Bearer ', '');
    if (!token) return res.status(400).send('No token provided');

    // Décodage du jeton d'accès pour obtenir les informations de l'utilisateur
    const decodedToken = jwtUtils.decodeAccessToken(token);
    if (!decodedToken) return res.status(401).send('Invalid token');

    // Attribution des informations de l'utilisateur à l'objet req pour une utilisation ultérieure dans les routes
    req.user = decodedToken;

    // Poursuite de la chaîne middleware
    next();
  } catch (error) {
    // En cas d'erreur lors de l'authentification, renvoie une réponse avec un code de statut 500 (Internal Server Error)
    res.status(500).send('Error authenticating');
  }
}
