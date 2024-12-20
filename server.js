const dotenv = require("dotenv")
dotenv.config()
const express = require('express')
const app = express()
const mongoose = require("mongoose")
const trackRouter = require("./controllers/tracks")
const cors = require("cors")

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on("connected", () => {
  console.log(
    `Your App Is Connected Now With ${mongoose.connection.name} database`
  )
})

app.use(express.json())
app.use(cors("http://localhost:5173"))
app.use("/track", trackRouter)
app.listen(process.env.PORT, () => {
  console.log("Your Express App Is Ready Now!")
})
