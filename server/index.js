import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

const user = "ivanfedoniukkn2021";
const password = "1w2q3r4e3";

mongoose
  .connect(
    `mongodb+srv://${user}:${password}@cluster0.uuqtosr.mongodb.net/inforce?retryWrites=true&w=majority`
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

app.get("/", (req, res) => {
  res.status = 200;
  res.end("Hello");
});

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server Ok");
});
