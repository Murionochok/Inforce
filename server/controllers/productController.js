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
      size: req.body.size,
      weight: req.body.weight,
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

export const remove = async (req, res, next) => {
  try {
    const productId = req.params.id;
    productModel
      .findOne({ _id: productId })
      .then((doc) => {
        if (!doc) {
          return res.status(404).json({
            message: "Продукт не знайдено",
          });
        }
        return doc.deleteOne();
      })
      .then(() => {
        res.json({
          success: true,
        });
        next();
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json({
          message: "Не вдалось видалити продукт",
        });
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Помилка під час видалення продукту",
    });
  }
};
