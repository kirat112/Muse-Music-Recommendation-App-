const User = require("../Models/UserModel.js");
const { createSecretToken } = require("../Utils/SecretToken.js");
const bcrypt = require("bcrypt");

module.exports.SignUp = async (req, res, next) => {
  try {
    const { email, username, password, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = new User({ email, username, password, createdAt });
    await user.save();
    const token = createSecretToken({
      id: user._id,
      email: user.email,
      username: user.username,
    });
    // res.cookie("token", token, { withCredentials: true, httpOnly: true });
    res.status(201).json({
      message: "User signed in successfully",
      token: token,
      success: true,
      user,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports.LogIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "Please provide email and password" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const token = createSecretToken({
      id: user._id,
      email: user.email,
      username: user.username,
    });
    // res.cookie("token", token, {withCredentials:true, httpOnly:true});
    res.status(201).json({
      message: "User Logged In Successfully",
      token: token,
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
