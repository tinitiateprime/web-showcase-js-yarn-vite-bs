import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(to right,rgb(253, 221, 15), #6366f1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "24px",
    color: "#fff",
    fontFamily: "sans-serif",
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    maxWidth: "600px",
    width: "100%",
    padding: "32px",
    color: "#1f2937",
    boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
    animation: "fadeIn 0.6s ease",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "16px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
  };

  const buttonStyle = {
    width: "100%",
    backgroundColor: "#3b82f6",
    color: "#fff",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  };

  const infoStyle = {
    marginTop: "24px",
    fontSize: "14px",
    color: "#374151",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", textAlign: "center" }}>
          Contact Us
        </h2>
        <p style={{ marginBottom: "24px", textAlign: "center", color: "#6b7280" }}>
          We'd love to hear from you! Fill out the form below to get in touch.
        </p>

        <form>
          <input type="text" placeholder="Your Name" style={inputStyle} />
          <input type="email" placeholder="Your Email" style={inputStyle} />
          <textarea placeholder="Your Message" style={{ ...inputStyle, height: "100px" }} />
          <button type="submit" style={buttonStyle}>
            <Send size={16} /> Send Message
          </button>
        </form>

        <div style={infoStyle}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
            <Phone size={16} color="#3b82f6" style={{ marginRight: "8px" }} />
            <span>+91 9876543210</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
            <Mail size={16} color="#3b82f6" style={{ marginRight: "8px" }} />
            <span>support@example.com</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <MapPin size={16} color="#3b82f6" style={{ marginRight: "8px" }} />
            <span>Hyderabad, India</span>
          </div>
        </div>
      </div>

      {/* Inline animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Contact;
