'use strict'

import Post from './post.model.js';

export const addPost = async (req, res) => {
    try {
        const data = req.body;
        
        const post = new Post({
            ...data 
        });

        await post.save();

        res.status(200).json({
            success: true,
            message: "Post created successfully",
            post
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating post",
            error: error.message
        });
    }
}

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ date: -1 });

        res.status(200).json({
            success: true,
            posts
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error getting posts",
            error: error.message
        });
    }
}

export const updatePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const data = req.body;

        const post = await Post.findByIdAndUpdate(postId, data, { new: true });

        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Post updated successfully",
            post
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating post",
            error: error.message
        });
    }
}

export const deletePost = async (req, res) => {
    try {
        const { postId } = req.params;

        const post = await Post.findByIdAndDelete(postId);
        
        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Post deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting post",
            error: error.message
        });
    }
}


export const getPostsByCourse = async (req, res) => {
    try {
        const { course } = req.params;

        const posts = await Post.find({ course }).sort({ date: -1 });

        res.status(200).json({
            success: true,
            posts
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error getting posts by course",
            error: error.message
        });
    }
}