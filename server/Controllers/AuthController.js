const User = require("../Models/UserModel.js");
const {createSecretToken} = require("../Utils/SecretToken.js")
const bcrypt = require("bcrypt");

module.exports.SignUp = async (req, res, next) => {
    try {
        const { email, username, password, createdAt } = req.body;
        const existingUser = await User.find({ email }).limit(1);
        if(existingUser) {
            return res.status(400).json({message: "User already exists"});
        }
        const user = new User({ email, username, password, createdAt });
        await user.save();
        const token = createSecretToken(user._id);
        res.cookie("token", token, {withCredentials: true, httpOnly: true });
        res.status(201).json({ message: "User signed in successfully", success: true, user });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};