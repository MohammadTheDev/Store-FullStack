import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth.js"; // مسیر دقیق فایل auth.js

const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:5173" })); // اگر فرانت اینجاست
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// اتصال به دیتابیس و راه‌اندازی سرور
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/simple-store";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));

import User from "./models/User.js"; // فقط اگر با ESModules هستی

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});
