import React, { useState } from "react";
import "../styles/contact.css"; // Assuming you have a CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Subject: "",
    Message: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;

    // Format phone input with country code and spacing
    if (name === "Phone") {
      value = value.replace(/\s+/g, ""); // remove all spaces
      if (/^\+\d{1,3}\d{10}$/.test(value)) {
        value = value.replace(/^(\+\d{1,3})(\d{10})$/, "$1 $2");
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/api/form`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
          <input type="text" name="Name" value={formData.Name} onChange={handleChange} placeholder="Full Name" required />
          <input type="email" name="Email" value={formData.Email} onChange={handleChange} placeholder="Email Address" required />
          <input type="tel" name="Phone" value={formData.Phone} onChange={handleChange} placeholder="Phone (+91 9876543210)" required />
          <input type="text" name="Subject" value={formData.Subject} onChange={handleChange} placeholder="Subject" required />
          <textarea name="Message" value={formData.Message} onChange={handleChange} placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
