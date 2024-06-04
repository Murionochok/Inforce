import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

export default mongoose.model("comments", CommentSchema);
