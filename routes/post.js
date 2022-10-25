const router = require("express").Router();
const postControllers = require("../controllers/post");

router.get("/", postControllers.getAllPosts);

router.get("/posts/:id", postControllers.getPost);

router.post("/", postControllers.createPost);

router.post("/posts/edit/:id", postControllers.updatePost);

router.post("/posts/delete/:id", postControllers.deletePost);

module.exports = router;
