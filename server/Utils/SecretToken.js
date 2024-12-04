require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (...data) => {
  return jwt.sign(...data, process.env.SECRET_TOKEN);
};

