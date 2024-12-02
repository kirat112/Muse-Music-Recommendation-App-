require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (...data) => {
  console.log(data);
  return jwt.sign(...data, process.env.SECRET_TOKEN);
};

console.log(process.env.SECRET_TOKEN);
