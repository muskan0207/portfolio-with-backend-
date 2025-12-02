const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");

router.post("/", async (req, res) => {
  try {
    const contactData = {
      ...req.body,
      ipAddress: req.ip,
      userAgent: req.headers["user-agent"]
    };

    const newContact = new Contact(contactData);
    await newContact.save();

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error saving contact:", err);
    res.status(500).json({ error: err.message || "Failed to save contact" });
  }
});

module.exports = router;
