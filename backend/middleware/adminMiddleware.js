const User = require("../models/User");

const adminMiddleware = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (user && user.isAdmin) {
      next();
    } else {
      res.status(403).json({ msg: "Admin access required" });
    }
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = adminMiddleware;
