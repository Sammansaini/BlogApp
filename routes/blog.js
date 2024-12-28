const express = require("express");
const router = express.Router();

//import karlo controller ko
const { createPost, getAllPosts } = require("../controllers/postController");





//Mapping with controller kr lo
router.post("/post/create", createPost);
router.get("/posts", getAllPosts);







module.exports = router;