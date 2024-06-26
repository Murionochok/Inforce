import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { ProductController } from "./controllers/index.js";

const app = express();

mongoose
  .connect(
    `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.uuqtosr.mongodb.net/inforce?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("DB Ok");
  })
  .catch((err) => {
    console.log("DB error: " + err);
  });

app.use("/img", express.static("img"));
app.use(express.json());
app.use(cors());

app.post("/product/create", ProductController.createProduct);
app.get("/", ProductController.getAll);
app.delete("/:id", ProductController.remove);
app.put(
  "/product/:id",
  ProductController.remove,
  ProductController.createProduct
);
app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server Ok");
});
