// Instead of: all routes in index.js
// we separate them into files.

const express = require("express")

const router = express.Router()

const { loginUser, signupUser, getProfile, createNote, getNotes } = require("../controllers/userController")
const authMiddleware = require("../middleware/authMiddleware")

router.post("/signup", signupUser)
router.post("/login", loginUser)
router.get("/profile", authMiddleware, getProfile)
router.post("/notes", authMiddleware, createNote)
router.get("/notes", authMiddleware, getNotes)

module.exports = router