const express = require("express")
const router = express.Router()
const userController = require("../controllers/auth.controller")
const {authMiddleware} = require("../middlewares/authMiddleware")

router.get(
    "/profile",
    authMiddleware,
    userController.profile
)

router.post(
    "/register",
    userController.registerUser
)

router.post(
    "/login",
    userController.loginUser
)

module.exports = router