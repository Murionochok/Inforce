import productModel from "../models/productModel.js";

export const getAll = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не вдалось отримати товари",
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const doc = new productModel({
      imageUrl: req.body.imageUrl,
      name: req.body.name,
      address: req.body.address,
      count: req.body.count,
      size: { width: req.body.width, height: req.body.height },
    });

    const post = await doc.save();

    res.json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не вдалось створити продукт",
    });
  }
};
