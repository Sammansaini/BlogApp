const express = require("express");
const router = express.Router();

//import controller
const {likePost, dislikePost} = require("../controllers/likeController");
const {createComment} = require('../controllers/commentController');
const { createPost, getAllPosts } = require("../controllers/postController");

//mapping routers
router.post("/posts/create", createPost);
router.post("/comments/create", createComment);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/dislike",dislikePost);

//export
module.exports = router;