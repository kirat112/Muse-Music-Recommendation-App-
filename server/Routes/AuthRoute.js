const {SignUp, LogIn} = require("../Controllers/AuthController.js")
const router = require("express").Router();

router.post("/signup", SignUp);
router.post("/login", LogIn);

module.exports = router;