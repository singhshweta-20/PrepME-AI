const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const User = require("./models/User")

const app = express()

app.use(cors())
app.use(express.json())

// console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected")
  })
  .catch((error) => {
    console.log(error)
  })

app.get("/", (req, res) => {
  res.send("Backend is running")
})

// app.post("/api/login", (req, res) => {
//   console.log(req.body)

//   res.json({
//     message: "Login data received"
//   })
// })
app.post("/api/login", async (req, res) => {

  try {

    const newUser = new User({
      name: "Shweta",
      email: req.body.email,
      password: req.body.password
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

})

app.listen(5000, () => {
  console.log("Server running on port 5000")
})







// const express = require("express")
// const cors = require("cors")

// const app = express()

// app.use(cors())
// app.use(express.json())


// app.get("/", (req, res) => {
//   res.send("Backend is running")     //Request sent to client - so this is displayed on browser
// })

// app.get("/api/message", (req, res) => {
//   res.json({
//     message: "Hello from backend"
//   })
// })

// app.post("/api/login", (req, res) => {
//   console.log(req.body)

//   res.json({
//     message: "Login data received"
//   })
// })

// app.listen(5000, () => {
//   console.log("Server running on port 5000")    // print on server log
// })