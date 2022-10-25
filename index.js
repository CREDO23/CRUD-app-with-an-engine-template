const express = require("express");
require("dotenv").config();
const path = require("path");
const routes = require("./routes/post");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("veiw", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(routes);

app.listen(PORT, (error) => {
  if (error) console.log(error);

  console.log(`Server running on ${PORT}`);
});
