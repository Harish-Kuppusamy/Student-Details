const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const studentRoutes = require("./routes/studentRoutes");




const app = express();
const PORT = 3000;
app.use(express.static("public"));
mongoose
  .connect("mongodb://127.0.0.1:27017/STUDENTDB2")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("DB Error:", err));

app.set("view engine", "ejs"); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", studentRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
