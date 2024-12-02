const {SignUp, LogIn} = require("../Controllers/AuthController.js");
const { UserVerification } = require("../Middlewares/AuthMiddleware.js");
const router = require("express").Router();

router.post("/signup", SignUp);
router.post("/login", LogIn);
router.post("/", UserVerification);

module.exports = router;