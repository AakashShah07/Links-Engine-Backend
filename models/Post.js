const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  text: { type: String, required: true },
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  authorName: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Post", postSchema);
