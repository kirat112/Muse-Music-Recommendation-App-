const {SignUp} = require("../Controllers/AuthController.js")
const router = require("express").Router();

router.post("/signup", SignUp);

module.exports = router;