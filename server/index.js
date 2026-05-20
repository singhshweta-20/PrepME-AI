const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.send("Backend is running")     //Request sent to client - so this is displayed on browser
})

app.get("/api/message", (req, res) => {
  res.json({
    message: "Hello from backend"
  })
})

app.listen(5000, () => {
  console.log("Server running on port 5000")    // print on server log
})