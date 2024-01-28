const Router = require("express");
const { register, login } = require("../controllers/authController");

const authRouter = Router();

// Register
authRouter.post("/register", register);

// Login
authRouter.post("/login", login);

module.exports = authRouter;
