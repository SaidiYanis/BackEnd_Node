import { Router } from "express";
import * as commentController from "../controllers/comment.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.post("/",authMiddleware,commentController.createComment);
router.get("/:articleID", commentController.getCommentsByArticleId);

export default router;