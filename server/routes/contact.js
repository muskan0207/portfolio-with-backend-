const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");
const validator = require('validator');

// Input sanitization function
const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  return validator.escape(input.trim());
};

// Validation middleware
const validateContactData = (req, res, next) => {
  const { Name, Email, Phone, Subject, Message } = req.body;
  
  // Required fields check
  if (!Name || !Email || !Phone || !Subject || !Message) {
    return res.status(400).json({ error: "All fields are required" });
  }
  
  // Email validation
  if (!validator.isEmail(Email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }
  
  // Phone validation
  if (!validator.isMobilePhone(Phone.replace(/\s+/g, ''), 'any')) {
    return res.status(400).json({ error: "Invalid phone number" });
  }
  
  // Length validations
  if (Name.length > 50 || Subject.length > 100 || Message.length > 1000) {
    return res.status(400).json({ error: "Input exceeds maximum length" });
  }
  
  if (Message.length < 10) {
    return res.status(400).json({ error: "Message too short" });
  }
  
  next();
};

router.post("/", validateContactData, async (req, res) => {
  try {
    // Sanitize all inputs
    const sanitizedData = {
      Name: sanitizeInput(req.body.Name),
      Email: sanitizeInput(req.body.Email),
      Phone: sanitizeInput(req.body.Phone),
      Subject: sanitizeInput(req.body.Subject),
      Message: sanitizeInput(req.body.Message),
      ipAddress: req.ip,
      userAgent: req.headers["user-agent"],
      timestamp: new Date()
    };

    const newContact = new Contact(sanitizedData);
    await newContact.save();

    res.status(200).json({ success: true, message: "Contact saved successfully" });
  } catch (err) {
    console.error("Error saving contact:", err);
    res.status(500).json({ error: "Failed to save contact" });
  }
});

module.exports = router;