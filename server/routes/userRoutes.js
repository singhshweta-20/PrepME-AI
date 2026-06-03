// Instead of: all routes in index.js
// we separate them into files.

const express = require("express")

const router = express.Router()

const { loginUser, signupUser } = require("../controllers/userController")

router.post("/signup", signupUser)
router.post("/login", loginUser)

module.exports = router