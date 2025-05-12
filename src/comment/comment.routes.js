import { Router } from "express";
import { addComment, getCommentsByPost } from "./comment.controller.js";
import { commentValidator, getCommentsValidator } from "../middlewares/comment-validators.js";

const router = Router();


router.post("/:postId/addcomment", commentValidator, addComment);
router.get("/:postId/comments", getCommentsValidator, getCommentsByPost);

export default router;