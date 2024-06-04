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
    width: { type: Number, required: true },
    height: { type: Number, required: true },
  },
  comments: {
    type: Array,
    required: true,
    default: [],
  },
});

export default mongoose.model("products", ProductSchema);
