import mongoose from "mongoose";

export const ArticleEpicSchema = new mongoose.Schema({
  
  title: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  theme: {
    type: String,
    required: true
  }
})