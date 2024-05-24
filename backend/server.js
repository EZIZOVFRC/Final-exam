
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()
require("dotenv").config()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.sec).then(() => {
    console.log("qosuldu")
})

app.listen(8080, () => {
    console.log("isleyir")
})

const examRouter = require("./routes/exam.routes");
app.use("/api/exam", examRouter);
