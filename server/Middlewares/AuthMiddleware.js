const User = require("../Models/UserModel.js");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.AuthMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  try {
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const verifiedUser = jwt.verify(token, process.env.SECRET_TOKEN);
    // res.status(200).json({ message: "User verified successfully", verifiedUser });
    req.user = verifiedUser;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized User" });
  }
};
