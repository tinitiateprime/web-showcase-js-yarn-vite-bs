import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import useScrollReveal from "../utils/useScrollReveal";

const team = [
  {
    name: "Eswar Kumar",
    role: "🌟 Founder & CEO",
    bio: "Eswar is a visionary leader with 10+ years of experience in edtech and entrepreneurship.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    email: "eswar@example.com",
    linkedin: "https://www.linkedin.com/in/eswarkumar",
  },
  {
    name: "Priya Sharma",
    role: "🧠 Content Strategist",
    bio: "Priya drives our content with creativity and strategy, crafting impactful learning materials.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    email: "priya@example.com",
    linkedin: "https://www.linkedin.com/in/priyasharma",
  },
  {
    name: "Ankit Reddy",
    role: "👨‍💻 Lead Developer",
    bio: "Ankit leads our development team, ensuring top performance and clean code.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    email: "ankit@example.com",
    linkedin: "https://www.linkedin.com/in/ankitreddy",
  },
];

const About = () => {
  const aboutRef = useRef();
  const teamRef = useRef();
  const [darkMode, setDarkMode] = useState(true);
  const [selectedMember, setSelectedMember] = useState(null);

  useScrollReveal(aboutRef);
  useScrollReveal(teamRef);

  const toggleMode = () => setDarkMode(!darkMode);

  const animatedStars = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  top: Math.random() * 90 + "%",
  left: Math.random() * 90 + "%",
  size: Math.random() * 15 + 10, // size between 10px - 25px
}));


  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        background: darkMode
          ? "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
          : "linear-gradient(135deg, #fdfbfb, #ebedee)",
        color: darkMode ? "#fff" : "#111",
        transition: "0.4s",
      }}
    >
      {/* 🌙 Toggle Switch */}
      <div style={{ position: "absolute", top: 20, right: 30, zIndex: 10 }}>
        <button
          onClick={toggleMode}
          style={{
            padding: "8px 14px",
            background: darkMode ? "#fff" : "#222",
            color: darkMode ? "#222" : "#fff",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
            boxShadow: "0 0 8px rgba(0,0,0,0.3)",
          }}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

      {/* 🔁 Star Effect */}
      {darkMode && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage:
              "radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 10px 10px",
            opacity: 0.1,
            zIndex: 0,
          }}
        />
      )}

      <div style={{ padding: "40px", position: "relative", zIndex: 1 }}>
        {/* 📘 Intro */}
        <div ref={aboutRef} style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>🌟 About Us</h1>
          <p
            style={{
              fontSize: "18px",
              maxWidth: "800px",
              margin: "auto",
              lineHeight: "1.8",
              opacity: darkMode ? 0.95 : 0.8,
            }}
          >
            We're on a mission to make learning magical ✨ — combining technology, creativity, and community.
          </p>
          <Link to="/contact">
            <button
              style={{
                marginTop: "20px",
                backgroundColor: darkMode ? "#fff" : "#222",
                color: darkMode ? "#222" : "#fff",
                padding: "12px 24px",
                borderRadius: "30px",
                fontWeight: "bold",
                border: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                cursor: "pointer",
              }}
            >
              📩 Contact Us
            </button>
          </Link>
        </div>

        {/* 👥 Team Cards */}
        <div ref={teamRef}>
          <h3 style={{ fontSize: "28px", marginBottom: "20px", textAlign: "center" }}>
            👨‍👩‍👧‍👦 Our Team
          </h3>
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {team.map((member, i) => (
              <div
                key={i}
                onClick={() => setSelectedMember(member)}
                style={{
                  background: darkMode ? "rgba(255,255,255,0.1)" : "#f1f5f9",
                  color: darkMode ? "#fff" : "#111",
                  backdropFilter: darkMode ? "blur(6px)" : "none",
                  borderRadius: "12px",
                  padding: "20px",
                  width: "240px",
                  textAlign: "center",
                  cursor: "pointer",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    marginBottom: "10px",
                    border: "3px solid #fff",
                  }}
                />
                <h5 style={{ margin: "10px 0 6px" }}>{member.name}</h5>
                <p style={{ fontSize: "14px", margin: 0 }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🧩 Modal */}
      {selectedMember && (
        <div
          onClick={() => setSelectedMember(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: darkMode ? "#1e293b" : "#fff",
              color: darkMode ? "#f1f5f9" : "#111",
              padding: "30px",
              borderRadius: "10px",
              maxWidth: "400px",
              textAlign: "center",
              position: "relative",
            }}
          >
            <button
              onClick={() => setSelectedMember(null)}
              style={{
                position: "absolute",
                top: 10,
                right: 15,
                background: "transparent",
                color: darkMode ? "#fff" : "#000",
                fontSize: "18px",
                border: "none",
                cursor: "pointer",
              }}
            >
              ✖
            </button>
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                marginBottom: "10px",
                border: "3px solid #fff",
              }}
            />
            <h3>{selectedMember.name}</h3>
            <p>{selectedMember.role}</p>
            <p style={{ fontSize: "14px" }}>{selectedMember.bio}</p>
            <p>
              📧 <a href={`mailto:${selectedMember.email}`}>{selectedMember.email}</a>
              <br />
              🔗 <a href={selectedMember.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
