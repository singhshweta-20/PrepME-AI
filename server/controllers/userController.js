// This file now contains: business logic
// Meaning: actual backend operations.

const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const signupUser = async (req, res) => {

  try {

    const { email, password } = req.body

    const existingUser = await User.findOne({ email })

    if (existingUser) {

      return res.status(400).json({
        message: "User already exists"
      })

    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new User({
      name: "Shweta",
      email,
      password: hashedPassword
    })

    await newUser.save()

    res.json({
      message: "User saved in database"
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      message: "Server error"
    })
  }

}


const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body

    const user =
      await User.findOne({ email })

    if (!user) {

      return res.status(400).json({
        message: "User not found"
      })

    }

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      )

    if (!isMatch) {

      return res.status(400).json({
        message: "Invalid password"
      })

    }

    const token = jwt.sign({
        userId: user._id,
        email: user.email
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h"
      }
    )

    res.json({
      message: "Login successful",
      token
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      message: "Server error"
    })

  }

}

const getProfile =
  async (req, res) => {

    res.json({
      message: "Protected route accessed",
      user: req.user
    })

}

module.exports = {
  signupUser,
  loginUser,
  getProfile
}