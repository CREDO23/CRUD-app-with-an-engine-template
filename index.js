const express = require("express");
require("dotenv").config();
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.set("veiw", path.join(__dirname, "views"));
app.set("view engine", "pug");

// app.get("/", (req, res) => {
//   res.send("App is running");
// });

app.get("/", (req, res)=>{
  res.render("home", {titre : "Welcome to CRUD-App!"})
});

app.listen(PORT, (error) => {
  if (error) console.log(error);

  console.log(`Server running on ${PORT}`);
});
