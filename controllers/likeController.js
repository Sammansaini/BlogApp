//import the models
const Post = require("../models/postModel");
const Like = require("../models/likeModel");

// like a post
exports.likePost = async (req, res) =>{
    try{
        const {post, user} = req.body;
        const like = new Like({
            post, user,
        });
        const savedLike = await like.save();

        //update the post jiska ye like h
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: savedLike._id}}, {new: true})
        .populate("likes").exec();

        res.json({
            post: updatedPost,
        });
    }
    catch{
        return res.status(500).json({
            error: "Error while fetching post",
        });
    }
}

exports.dislikePost = async (req, res) =>{
    try{
        const {post, like} = req.body;
        //find the like with its id and delete this like
        const deleteLike = await Like.findOneAndDelete({post:post, _id:like});


        //update the post because that like will be deleted
        const updatedPost = await Post.findByIdAndUpdate(post,{$pull: {likes:deleteLike._id}},{new:true});

        res.json({
            post: updatedPost,
        });
    }
    catch{
        return res.status(500).json({
            error: "Error while fetching post",
        });
    }
}
