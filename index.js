const express = require("express");
require("dotenv").config();
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.set("view engine", "pug");
app.set("veiws", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.send("App is running");
});

app.listen(PORT, (error) => {
  if (error) console.log(error);

  console.log(`Server running on ${PORT}`);
});
