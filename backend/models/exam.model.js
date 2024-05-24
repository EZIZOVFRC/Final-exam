
const mongoose = require("mongoose")

const exam = mongoose.model("exam", new mongoose.Schema({
    title: {
        type: String
    },
    image: {
        type: String
    },
    price: {
        type: Number
    },
    desc: {
        type: String
    },
}))

module.exports = { exam }
