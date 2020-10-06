const mongoose = require("mongoose");

const postBody = {
    displayName:String,
    timestamp:String,
    photoURL:String,
    post_image:String,
    post_message:String,
    likes:Number,
    comments:{
        type:[]
    }
};
const PostSchema = mongoose.Schema(postBody);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
