import React, { useState } from "react";
import "./Contact.css";

const sanitize = (v) =>
  v.replace(/<script[^>]*>.*?<\/script>/gi, "").replace(/<[^>]*>/g, "").trim();

const validateEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
const validatePhone = (p) => /^\+?[1-9]\d{1,14}$/.test(p.replace(/\s+/g, ""));

const INITIAL = { Name: "", Email: "", Phone: "", Subject: "", Message: "" };

const Contact = () => {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.Name.trim()) e.Name = "Name is required";
    if (!validateEmail(form.Email)) e.Email = "Enter a valid email";
    if (!validatePhone(form.Phone)) e.Phone = "Enter a valid phone number";
    if (!form.Subject.trim()) e.Subject = "Subject is required";
    if (form.Message.length < 10) e.Message = "Message must be at least 10 characters";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: sanitize(value) }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setStatus("sending");
    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const res = await fetch(`${apiUrl}/api/form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm(INITIAL);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <div className="section-container">
        <div className="contact__layout">
          {/* Left */}
          <div className="contact__left">
            <p className="section-label">Contact</p>
            <h2 className="section-heading" id="contact-heading">
              Have a project or opportunity in mind?{" "}
              <span>Let's build something useful.</span>
            </h2>
            <p className="contact__sub">
              I'm open to full-time roles, freelance projects, and interesting
              conversations about technology. Reach out — I respond promptly.
            </p>

            <div className="contact__links">
              <a
                href="https://www.linkedin.com/in/muskan-gupta-755473247"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
                aria-label="LinkedIn profile"
              >
                <i className="bx bxl-linkedin" aria-hidden="true"></i>
                <span>LinkedIn</span>
                <i className="bx bx-link-external contact__link-ext" aria-hidden="true"></i>
              </a>
              <a
                href="https://github.com/muskan-gupta"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
                aria-label="GitHub profile"
              >
                <i className="bx bxl-github" aria-hidden="true"></i>
                <span>GitHub</span>
                <i className="bx bx-link-external contact__link-ext" aria-hidden="true"></i>
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1VJQcVK5nq3Oln3sJtTWvazzngR_nmQhZ"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
                aria-label="Download Resume"
              >
                <i className="bx bx-file" aria-hidden="true"></i>
                <span>Resume PDF</span>
                <i className="bx bx-download contact__link-ext" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="contact__form-wrap">
            {status === "success" ? (
              <div className="contact__success" role="alert">
                <div className="contact__success-icon">
                  <i className="bx bx-check" aria-hidden="true"></i>
                </div>
                <h3>Message sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  className="btn-outline"
                  onClick={() => setStatus(null)}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                className="contact__form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >
                <div className="contact__row">
                  <div className="contact__field">
                    <label htmlFor="contact-name" className="contact__label">
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="Name"
                      value={form.Name}
                      onChange={handleChange}
                      placeholder="Your name"
                      maxLength={50}
                      className={errors.Name ? "contact__input contact__input--error" : "contact__input"}
                      aria-describedby={errors.Name ? "name-error" : undefined}
                      aria-invalid={!!errors.Name}
                    />
                    {errors.Name && (
                      <span id="name-error" className="contact__error" role="alert">
                        {errors.Name}
                      </span>
                    )}
                  </div>
                  <div className="contact__field">
                    <label htmlFor="contact-email" className="contact__label">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="Email"
                      value={form.Email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      maxLength={100}
                      className={errors.Email ? "contact__input contact__input--error" : "contact__input"}
                      aria-describedby={errors.Email ? "email-error" : undefined}
                      aria-invalid={!!errors.Email}
                    />
                    {errors.Email && (
                      <span id="email-error" className="contact__error" role="alert">
                        {errors.Email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="contact__row">
                  <div className="contact__field">
                    <label htmlFor="contact-phone" className="contact__label">
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="Phone"
                      value={form.Phone}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                      maxLength={20}
                      className={errors.Phone ? "contact__input contact__input--error" : "contact__input"}
                      aria-describedby={errors.Phone ? "phone-error" : undefined}
                      aria-invalid={!!errors.Phone}
                    />
                    {errors.Phone && (
                      <span id="phone-error" className="contact__error" role="alert">
                        {errors.Phone}
                      </span>
                    )}
                  </div>
                  <div className="contact__field">
                    <label htmlFor="contact-subject" className="contact__label">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="Subject"
                      value={form.Subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      maxLength={100}
                      className={errors.Subject ? "contact__input contact__input--error" : "contact__input"}
                      aria-describedby={errors.Subject ? "subject-error" : undefined}
                      aria-invalid={!!errors.Subject}
                    />
                    {errors.Subject && (
                      <span id="subject-error" className="contact__error" role="alert">
                        {errors.Subject}
                      </span>
                    )}
                  </div>
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-message" className="contact__label">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="Message"
                    value={form.Message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    maxLength={1000}
                    className={errors.Message ? "contact__input contact__textarea contact__input--error" : "contact__input contact__textarea"}
                    aria-describedby={errors.Message ? "message-error" : undefined}
                    aria-invalid={!!errors.Message}
                  />
                  {errors.Message && (
                    <span id="message-error" className="contact__error" role="alert">
                      {errors.Message}
                    </span>
                  )}
                </div>

                {status === "error" && (
                  <div className="contact__form-error" role="alert">
                    <i className="bx bx-error-circle" aria-hidden="true"></i>
                    Something went wrong. Please try again or reach out on LinkedIn.
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-primary contact__submit"
                  disabled={status === "sending"}
                  aria-busy={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      <i className="bx bx-loader-alt contact__spinner" aria-hidden="true"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="bx bx-send" aria-hidden="true"></i>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
