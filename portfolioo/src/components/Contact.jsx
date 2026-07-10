import React, { useState } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Subject: "",
    Message: "",
  });

  const sanitizeInput = (input) => {
    return input.replace(/<script[^>]*>.*?<\/script>/gi, '')
                .replace(/<[^>]*>/g, '')
                .trim();
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phone.replace(/\s+/g, ''));
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    
    // Sanitize input
    value = sanitizeInput(value);
    
    // Format phone input
    if (name === "Phone") {
      value = value.replace(/\s+/g, "");
      if (/^\+\d{1,3}\d{10}$/.test(value)) {
        value = value.replace(/^(\+\d{1,3})(\d{10})$/, "$1 $2");
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Client-side validation
    if (!validateEmail(formData.Email)) {
      alert("❌ Please enter a valid email address.");
      return;
    }
    
    if (!validatePhone(formData.Phone)) {
      alert("❌ Please enter a valid phone number.");
      return;
    }
    
    if (formData.Message.length < 10) {
      alert("❌ Message must be at least 10 characters long.");
      return;
    }
    
    try {
      const apiUrl = process.env.REACT_APP_API_URL || "https://localhost:5000";
      const response = await fetch(`${apiUrl}/api/form`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ Name: "", Email: "", Phone: "", Subject: "", Message: "" });
        alert("✅ Message sent successfully!");
      } else {
        const errorData = await response.json();
        alert("❌ Failed: " + (errorData.error || "Something went wrong."));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Server error. Please try again.");
    }
  };

  return (
    <section className="contact-section">
      <h2 className="section-title">Contact <span>Me</span></h2>
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <input 
            type="text" 
            name="Name" 
            value={formData.Name} 
            onChange={handleChange} 
            placeholder="Full Name" 
            maxLength="50"
            required 
          />
          <input 
            type="email" 
            name="Email" 
            value={formData.Email} 
            onChange={handleChange} 
            placeholder="Email Address" 
            maxLength="100"
            required 
          />
          <input 
            type="tel" 
            name="Phone" 
            value={formData.Phone} 
            onChange={handleChange} 
            placeholder="Phone (+91 9876543210)" 
            maxLength="20"
            required 
          />
          <input 
            type="text" 
            name="Subject" 
            value={formData.Subject} 
            onChange={handleChange} 
            placeholder="Subject" 
            maxLength="100"
            required 
          />
          <textarea 
            name="Message" 
            value={formData.Message} 
            onChange={handleChange} 
            placeholder="Your Message" 
            rows="5" 
            maxLength="1000"
            required
          ></textarea>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;