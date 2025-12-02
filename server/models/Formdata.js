const mongoose = require("mongoose")

const FormdataSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        required: true
    },
    Subject: {
        type: String,
        required: true
    },
    Message: {
        type: String,
        required: true
    }
}
)
const Formdata= mongoose.model("Formdata", FormdataSchema)
module.exports = Formdata;