const express = require("express");
const router = express.Router();
const { getProducts, getProductById, createProduct } = require("../controllers/productController");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

router.get("/", getProducts);
router.get("/:id", getProductById);

// فقط کاربر ادمین می‌تواند محصول جدید اضافه کند
router.post("/", authMiddleware, adminMiddleware, createProduct);

module.exports = router;
