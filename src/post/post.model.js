import { Schema, model } from 'mongoose';

const PostSchema = new Schema({
    title: {
        type: String,
        required: [true , 'Title is required'],
        maxLenghth: [100, 'Title must be less than 100 characters'],
        unique: true,
    },
    description: {
        type: String,
        maxLength: [1000, 'Description must be less than 1000 characters'],
        required: [true, 'Description is required'],
    },
    course:{
        type: String,
        enum: ['Technology', 'Workshop', 'Supervised Practice'],
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    status:{
        type: Boolean,
        default: true
    },
}, 
{
    timestamps: true,
    versionKey: false
})

PostSchema.methods.toJSON = function() {
    const { __v, _id, ...post } = this.toObject();
    post.pid = _id;
    return post;
};


export default model('Post', PostSchema);