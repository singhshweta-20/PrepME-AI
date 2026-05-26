const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json())

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

app.post("/api/login", (req, res) => {
  console.log(req.body)

  res.json({
    message: "Login data received"
  })
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