const Post = require('../models/postModel');

exports.createPost = async (req, res) => {
    try {
        //data fetch kro request ki body se 
        const { title, body } = req.body;
        //object banao for post
        const post = new Post({
            title, body,
        });
        //database me entry dalo -> its has two methods 
        //first jo toto app me sikha tha and 
        //second is save method
        const savedPost = await post.save();

        res.json({
            post: savedPost,
        });
    }
    catch {
        return res.status(500).json({
            error:"Error while creating post in the database",
        });
    }
};

//get all post with its like and comments
exports.getAllPosts = async (req, res) => {
    try{
        const posts = await Post.find().populate("comments").populate("likes").exec();
        res.json({
            posts,
        });
    }
    catch{
        return res.status(400).json({
            error:"Error while fetching all post with comments and likes",
        });
    }
}