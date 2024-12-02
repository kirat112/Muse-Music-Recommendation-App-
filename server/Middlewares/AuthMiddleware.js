const User = require("../Models/UserModel.js");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.UserVerification = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
        }
        const verifiedUser = jwt.verify(token, process.env.SECRET_TOKEN);
        const user = await User.findById(verifiedUser.id);
        if (!user) {
        return res.status(401).json({ message: "Unauthorized" });
        }
        res.status(200).json({ message: "User verified successfully", user });
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized" });
    }
};