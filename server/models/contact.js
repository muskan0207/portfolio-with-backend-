const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true },
  Phone: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^\+\d{1,3}\s?\d{10}$/.test(v); // Accepts "+91 9876543210" or "+919876543210"
      },
      message: (props) =>
        `${props.value} is not a valid phone number! Use format: +91 9876543210`,
    },
  },
  Subject: { type: String, required: true },
  Message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Contact", contactSchema);
