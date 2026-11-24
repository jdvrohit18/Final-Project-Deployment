const express = require("express");
const Blog = require("../models/Blog");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author", "name").sort({ createdAt: -1 });
    res.json(blogs);
  } catch {
    res.status(500).json({ message: "Unable to fetch blogs." });
  }
});

router.post("/", protect, async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) return res.status(400).json({ message: "Title and content are required." });
    const blog = await Blog.create({ title: title.trim(), content, author: req.user.id });
    res.status(201).json({ message: "Blog created successfully.", blog });
  } catch {
    res.status(500).json({ message: "Unable to create blog." });
  }
});
module.exports = router;
