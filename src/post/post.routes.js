import { Router } from "express";
import { 
    addPost, 
    getPosts, 
    updatePost, 
    deletePost, 
    getPostsByCourse,
} from "./post.controller.js";
import { postValidator, updatePostValidator } from "../middlewares/post-validators.js";

const router = Router();

router.post("/addPost", postValidator, addPost); 
router.get("/", getPosts); 
router.put("/update/:postId", updatePostValidator, updatePost); 
router.delete("/delete/:postId", deletePost); 
router.get("/course/:course", getPostsByCourse); 

export default router;