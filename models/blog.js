import mongoose, { Schema, model, models } from "mongoose";

const BlogSchema = new Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  blog: {
    type: String,
    required: [true, "Blog content is required"],
  },
  tag: {
    type: String,
    required: [true, "Tag is required"],
  },
  likes: {
    type: Number,
    default: 0,
  },
  likedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Blog = models.Blog || model("Blog", BlogSchema);

export default Blog;
