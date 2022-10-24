const { pool } = require("../config/database");

const getPost = (req, res, next) => {
  pool.query(`SELECT * FROM posts WHERE ID=${req.params.id}`, (err, result) => {
    if (err) next(err);
    res.render("post", { post: result.rows });
  });
};

const createPost = (req, res, next) => {
  pool.query(
    `INSERT INTO posts (body) VALUES (${req.body.content})`,
    (err, res) => {
      if (err) next(err);
      if (result) res.redirect("/");
    }
  );
};

const getAllPosts = (req, res, next) => {
  pool.query(`SELECT * FROM posts`, (err, result) => {
    if (err) next(err);
    res.render("posts", { posts: result.rows });
  });
};

const deletePost = (req, res, next) => {
  pool.query(`DELETE FROM posts WHERE ID=${req.params.id}`, (err, result) => {
    if (err) next(err);
    if (result) res.redirect("/");
  });
};

const updatePost = (req, res, next) => {
  pool.query(
    `UPDATE posts SET body=${req.body.content} WHERE ID=${req.params.id}`,
    (err, result) => {
      if (err) next(err);
      if (result) res.redirect("/");
    }
  );
};

module.exports = {
  getPost,
  getAllPosts,
  deletePost,
  updatePost,
  createPost,
};
