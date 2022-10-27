const pool = require("../config/database");

const getPost = (req, res, next) => {
  pool.query(`SELECT * FROM posts WHERE id=${req.params.id}`, (err, result) => {
    if (err) next(err);
    console.log(result);
    res.render("editPost", { post: result.rows[0] });
  });
};

const createPost = (req, res, next) => {
  pool.query(
    `INSERT INTO posts (content) VALUES ('${req.body.content}')`,
    (err, result) => {
      if (err) next(err);
      if (result) res.redirect("/");
    }
  );
};

const getAllPosts = (req, res, next) => {
  pool.query(`SELECT * FROM posts `, (err, result) => {
    if (err) next(err);
    res.render("home", { posts: result?.rows });
  });
};

const deletePost = (req, res, next) => {
  pool.query(`DELETE FROM posts WHERE id=${req.params.id}`, (err, result) => {
    if (err) next(err);
    if (result) res.redirect("/");
  });
};

const updatePost = (req, res, next) => {
  pool.query(
    `UPDATE posts SET content='${req.body.content}' WHERE id=${req.params.id}`,
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
