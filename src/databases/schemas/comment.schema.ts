import mongoose from "mongoose";

export const CommentSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  articleID: {
    type: String,
    required: true,
  },
  commentContent: {
    type: String,
    required: true,
  },
});
