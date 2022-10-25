const pool = require("../config/database");

const getPost = (req, res, next) => {
  const {id} = req.params

  pool.query(`SELECT * FROM posts WHERE id=$1` , [id], (err, result) => {
    if (err) next(err);
    console.log(result);
    res.render("editPost", { post: result?.rows[0] });
  });
};

const createPost = (req, res, next) => {
  const {content} = req.body

  pool.query(
    `INSERT INTO posts (content) VALUES ($1)`, [content],

    (err, result) => {
      if (err) next(err);
      if (result) res.redirect("/");
    }
  );
};

const getAllPosts = (req, res, next) => {
  pool.query(`SELECT * FROM posts`, (err, result) => {
    if (err) next(err);
    res.render("home", { posts: result?.rows });
  });
};

const deletePost = (req, res, next) => {
  const {id} = req.params

  pool.query(`DELETE FROM posts WHERE id=$1`, [id] , (err, result) => {
    if (err) next(err);
    if (result) res.redirect("/");
  });
};

const updatePost = (req, res, next) => {
  const {content} = req.body
  const {id} = req.params

  pool.query(
    `UPDATE posts SET content=$1 WHERE id=$2`, [content, id],
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
