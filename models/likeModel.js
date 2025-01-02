//import mongoose for schema
const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", // reference to post model
    },
    user: {
        type: String,
        required: true,
    }
});

//export kra lo
module.exports = mongoose.model("Like", likeSchema);