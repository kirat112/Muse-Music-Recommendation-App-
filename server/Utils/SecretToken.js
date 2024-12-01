require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.SECRET_TOKEN);
};

console.log(process.env.SECRET_TOKEN);