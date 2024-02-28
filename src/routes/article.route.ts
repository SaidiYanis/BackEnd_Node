import { Router } from 'express';
import * as articleController from '../controllers/article.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
const router = Router();

router.post('/',authMiddleware, articleController.createArticle);
router.get('/', articleController.GetAllArticles);
router.get('/:id', articleController.GetArticleById);
router.patch('/:id',authMiddleware, articleController.UpdateArticle);
export default router;