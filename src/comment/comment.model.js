import { Schema, model } from 'mongoose';

const CommentSchema = new Schema({
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post', 
        required: [true, "The post is required"]
    },
    username: {
        type: String,
        required: [true, 'The username is required'],
        maxLength: [50, 'The username must be less than 50 characters'],
    },
    comment: {
        type: String,
        required: [true, 'The comment is required'],
        maxLength: [500, 'The comment must be less than 500 characters'],
    },
    dataComment: {
        type: Date,
        default: Date.now  
    }
}, {
    timestamps: true, 
    versionKey: false
});

CommentSchema.methods.toJSON = function() {
    const { __v, _id, ...comment } = this.toObject();
    comment.cid = _id;  
    return comment;
};

export default model('Comment', CommentSchema);