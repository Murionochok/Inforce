import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  size: {
    type: Object,
    required: true,
  },
  comments: {
    type: Array,
    required: true,
    default: [],
  },
  weight: {
    type: String,
    required: true,
  },
});

export default mongoose.model("products", ProductSchema);
