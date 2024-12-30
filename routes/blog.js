const express = require("express");
const router = express.Router();

//import karlo controller ko
const { createPost, getAllPosts } = require("../controllers/postController");
const {createComment} = require("../controllers/commentController");



//Mapping with controller kr lo
router.post("/post/create", createPost);
router.get("/posts", getAllPosts);
router.post("/comments/create", createComment);






module.exports = router;