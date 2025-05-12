import Comment from './comment.model.js';
import Post from '../post/post.model.js';

export const addComment = async (req, res) => {
    try {
        const { postId } = req.params;
        const { username, comment } = req.body;

        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found"
            });
        }

        const newComment = new Comment({
            username,
            comment,
            post: postId
        });

        await newComment.save();

        res.status(201).json({
            success: true,
            message: "Comment added successfully",
            comment: newComment
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error adding comment",
            error: error.message
        });
    }
}

export const getCommentsByPost = async (req, res) => {
    try {
        const { postId } = req.params;

        const comments = await Comment.find({ post: postId })
            .populate('post', 'title description')
            .sort({ createdAt: -1 });

        if (comments.length === 0) {
            return res.status(200).json({
                success: true,
                message: "No comments found for this post",
                comments: []
            });
        }

        res.status(200).json({
            success: true,
            comments
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching comments",
            error: error.message
        });
    }
}