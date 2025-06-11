const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const studentRoutes = require("./routes/studentRoutes");




const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
mongoose
  .connect("mongodb+srv://ksharishcs:Hrxz@cluster0.dzr7anj.mongodb.net/STUDENTDB2?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("DB Error:", err));

app.set("view engine", "ejs"); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", studentRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
