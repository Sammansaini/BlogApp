const mongoose = require('mongoose');

//route handler
const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    body:{
        type: String,
        required: true,
    },
    //likes ki array with its data
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
    }],
    //comments ki array with its data
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }]
});

//exports kra lo yha se
module.exports = mongoose.model("Post", postSchema);