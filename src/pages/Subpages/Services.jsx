import React, { useEffect, useState } from "react";
import ServiceCard from "../../components/ServiceCard";
import StatBox from "../../components/StatBox";
import VideoBackground from "../../components/VideoBackground";
import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaUserTie } from "react-icons/fa";

const Services = () => {
  const [stats, setStats] = useState({ web: 0, mobile: 0, uiux: 0, consulting: 0 });

  useEffect(() => {
    const targets = { web: 80, mobile: 50, uiux: 60, consulting: 40 };
    const interval = setInterval(() => {
      setStats((prev) => {
        const updated = { ...prev };
        for (let key in updated) {
          if (updated[key] < targets[key]) updated[key]++;
        }
        return updated;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { icon: FaLaptopCode, title: "Web Development", desc: "Responsive and scalable web apps." },
    { icon: FaMobileAlt, title: "Mobile Apps", desc: "Cross-platform Android & iOS apps." },
    { icon: FaPaintBrush, title: "UI/UX Design", desc: "User-centered beautiful designs." },
    { icon: FaUserTie, title: "IT Consulting", desc: "Strategy and technology guidance." },
  ];

  return (
    <div style={{ position: "relative", minHeight: "100vh", padding: "4rem 2rem", color: "white", textAlign: "center" }}>
      <VideoBackground />
      <div style={{ position: "relative", zIndex: 2, maxWidth: "1100px", margin: "auto" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Our Services</h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          Explore our specialized offerings crafted for your success.
        </p>

        {/* Service Cards */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem", marginBottom: "4rem" }}>
          {services.map((srv, idx) => (
            <ServiceCard key={idx} icon={srv.icon} title={srv.title} desc={srv.desc} />
          ))}
        </div>

        {/* Stats */}
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "2rem", marginBottom: "3rem" }}>
          <StatBox number={stats.web} label="Web Projects" />
          <StatBox number={stats.mobile} label="Mobile Apps" />
          <StatBox number={stats.uiux} label="Designs" />
          <StatBox number={stats.consulting} label="Consulting Clients" />
        </div>

        {/* Contact CTA */}
        <div>
          <h2>Let's Collaborate</h2>
          <p>Reach out to build something amazing together.</p>
          <button style={{
            marginTop: "1rem",
            padding: "0.75rem 2rem",
            backgroundColor: "#06b6d4",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            cursor: "pointer"
          }}
            onClick={() => alert("Redirecting to contact page...")}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
