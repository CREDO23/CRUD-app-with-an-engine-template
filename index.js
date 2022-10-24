const express = require("express");
require("dotenv").config();
const path = require("path");
const pool = require("./config/database");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.static("public"));
app.use(express.json());

app.set("veiw", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("home", { titre: "Welcome !" });
});

app.get("/items", (req, res) => {
  res.render("items", { item: { content: "Slut les amis", id: 2455667 } });
});

app.listen(PORT, (error) => {
  if (error) console.log(error);

  console.log(`Server running on ${PORT}`);
});
