import React, { useState } from "react";
import { Mail, Phone, HelpCircle, Send } from "lucide-react";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // for toast

const SupportPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple validation
    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // everything ok
    setError("");
    setSuccess(true);

    // clear form
    setName("");
    setEmail("");
    setMessage("");

    // show toast
    const toastEl = document.getElementById("supportToast");
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
  };

  return (
    <div
      className="container py-5"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
      }}
    >
      <div className="text-center mb-5">
        <h2 className="fw-bold text-primary d-flex justify-content-center align-items-center gap-2">
          <HelpCircle size={28} />
          Support
        </h2>
        <p className="text-muted">
          We’re here to help. Contact us or check our FAQs below.
        </p>
      </div>

      <div className="row g-4">
        {/* Contact Form */}
        <div className="col-md-6">
          <div className="card shadow rounded-4 border-0 p-4">
            <h5 className="fw-bold mb-3">
              <Mail className="me-2 text-primary" />
              Contact Support
            </h5>
            <form onSubmit={handleSubmit} noValidate>
              {error && (
                <div className="alert alert-danger py-2">{error}</div>
              )}
              <div className="mb-3">
                <label className="form-label fw-semibold">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Describe your issue..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button
                className="btn btn-primary d-flex align-items-center gap-2"
                type="submit"
              >
                <Send size={16} />
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* FAQs */}
        <div className="col-md-6">
          <div className="card shadow rounded-4 border-0 p-4">
            <h5 className="fw-bold mb-3">
              <Phone className="me-2 text-success" />
              FAQs
            </h5>
            <div className="accordion" id="faqAccordion">
              <div className="accordion-item border-0 mb-2">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq1"
                  >
                    How do I reset my password?
                  </button>
                </h2>
                <div
                  id="faq1"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    You can reset your password from your profile settings
                    page. Look for the "Change Password" option.
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 mb-2">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq2"
                  >
                    How can I contact technical support?
                  </button>
                </h2>
                <div
                  id="faq2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Use the contact form on this page, or email us at
                    support@example.com.
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq3"
                  >
                    Where can I see my support tickets?
                  </button>
                </h2>
                <div
                  id="faq3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    You can track support tickets from your account dashboard
                    under the "My Support" section.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast container */}
      <div
        className="position-fixed bottom-0 end-0 p-3"
        style={{ zIndex: 9999 }}
      >
        <div
          id="supportToast"
          className="toast align-items-center text-white bg-success border-0"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">
              Your message was sent successfully!
            </div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
