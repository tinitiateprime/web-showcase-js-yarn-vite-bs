import React, { useState, useEffect } from "react";
import { Rocket, Layers, Shield, Users, Cloud, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home1 = () => {
  const navigate = useNavigate();

  // images array
  const images = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1920&q=80",
  ];

  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const features = [
    {
      icon: <Rocket size={38} color="#ffffff" />,
      title: "Rapid Learning",
      description: "Accelerate your skills with dynamic programs.",
      link: "/rapid-learning",
    },
    {
      icon: <Layers size={38} color="#ffffff" />,
      title: "Modular Programs",
      description: "Mix and match courses to suit your needs.",
      link: "/modular-programs",
    },
    {
      icon: <Shield size={38} color="#ffffff" />,
      title: "Secure Data",
      description: "Enterprise-grade protection for your data.",
      link: "/secure-data",
    },
    {
      icon: <Users size={38} color="#ffffff" />,
      title: "Global Community",
      description: "Connect with thousands of learners worldwide.",
      link: "/community",
    },
    {
      icon: <Cloud size={38} color="#ffffff" />,
      title: "Cloud Access",
      description: "Learn anywhere, anytime, on any device.",
      link: "/cloud-access",
    },
    {
      icon: <Zap size={38} color="#ffffff" />,
      title: "High Performance",
      description: "Fast, smooth and responsive experience.",
      link: "/performance",
    },
  ];

  // dark mode
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        backgroundImage: `url(${images[bgIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "50px 20px",
        position: "relative",
        transition: "background-image 0.5s ease-in-out",
        backgroundColor: dark ? "#121212" : "#f8f9fa",
        color: dark ? "#f8f9fa" : "#212529",
      }}
    >
      {/* overlay */}
      <div
        style={{
          background: dark ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.5)",
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDark((prev) => !prev)}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            backgroundColor: dark ? "#f8f9fa" : "#0d6efd",
            color: dark ? "#212529" : "#fff",
            border: "none",
            borderRadius: "50px",
            padding: "8px 16px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>

        {/* Hero */}
        <div
          style={{
            textAlign: "center",
            padding: "80px 20px 40px 20px",
          }}
        >
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "16px" }}>
            Welcome to Your Learning Hub 🚀
          </h1>
          <p style={{ fontSize: "1.1rem", marginBottom: "24px" }}>
            Your journey to professional growth starts here.
          </p>
          <button
            onClick={() => navigate("/get-started")}
            style={{
              backgroundColor: dark ? "#f8f9fa" : "#0d6efd",
              color: dark ? "#212529" : "#fff",
              border: "none",
              padding: "14px 28px",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
        </div>

        {/* Features */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
            marginTop: "40px",
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => navigate(feature.link)}
              style={{
                background: "rgba(255,255,255,0.15)",
                borderRadius: "16px",
                padding: "24px",
                textAlign: "center",
                backdropFilter: "blur(4px)",
                transition: "all 0.4s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <div style={{ marginBottom: "12px" }}>{feature.icon}</div>
              <h5 style={{ fontWeight: "bold", marginBottom: "8px" }}>{feature.title}</h5>
              <p style={{ fontSize: "14px", margin: 0 }}>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Highlight */}
        <div
          style={{
            background: "linear-gradient(135deg, #4facfe, #00f2fe)",
            color: "#fff",
            padding: "40px 20px",
            marginTop: "60px",
            borderRadius: "16px",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontWeight: "bold", marginBottom: "12px" }}>Why Choose Us?</h2>
          <p style={{ marginBottom: "20px" }}>
            We deliver technology, mentorship, and a global community to supercharge your success.
          </p>
          <button
            onClick={() => navigate("/learn-more")}
            style={{
              backgroundColor: "#fff",
              color: "#0d6efd",
              border: "none",
              fontWeight: "bold",
              padding: "12px 24px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home1;
