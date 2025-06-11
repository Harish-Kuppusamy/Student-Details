const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// View all students
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.render("index", { students });
});

// Show add student form
router.get("/add", (req, res) => {
  res.render("add");
});

// Handle new student POST
router.post("/add", async (req, res) => {
  const { name, age, grade } = req.body;
  await Student.create({ name, age, grade });
  res.redirect("/");
});

// Show edit form
router.get("/edit/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.render("edit", { student });
});

// Handle edit POST
router.post("/edit/:id", async (req, res) => {
  const { name, age, grade } = req.body;
  await Student.findByIdAndUpdate(req.params.id, { name, age, grade });
  res.redirect("/");
});

// Delete student
router.get("/delete/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

module.exports = router;
