const Comment = require('../models/commentModel');
const Post = require('../models/postModel');

//business logic
exports.createComment = async (req, res) => {
    try{
        //fetch the data from the request body
        const {post, user, body} = req.body;
        //create a comment object 
        const comment = new Comment({
            post, user, body
        });

        //save the new comment into the database
        const savedComment = await comment.save();
        //find the post by id, add the new comment to ites comments array
        const updatePost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}}, {new: true})
                            .populate("comments")//agar populate nhi krenge to comments array me only ids hi dikhegi
                            .exec();             //populate karne se ids ke sath unki comment bhi delhegi in postman database ka pta nhi 
        
        res.json({
            post: updatePost,
        });
    }
    catch(error){
        return res.status(500).json({
            error: "error while creating comment",
        });

    }
};