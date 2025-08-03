const express = require("express");
const User = require("../models/User");
const Post = require("../models/Post");
const router = express.Router();

// Get user profile and their posts
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const posts = await Post.find({ authorId: user._id }).sort({ createdAt: -1 });

    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      bio: user.bio,
      createdAt: user.createdAt,
      posts,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
