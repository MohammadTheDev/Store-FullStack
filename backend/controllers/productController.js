const Product = require("../models/Product");

// دریافت همه محصولات با امکان فیلتر دسته‌بندی
exports.getProducts = async (req, res) => {
  try {
    const { category } = req.query;
    let filter = {};

    if (category) filter.category = category;

    const products = await Product.find(filter);
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

// دریافت محصول بر اساس ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ msg: "Product not found" });

    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

exports.createProduct = async (req, res) => {
  const { name, category, image, price, description } = req.body;

  try {
    const product = new Product({ name, category, image, price, description });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
