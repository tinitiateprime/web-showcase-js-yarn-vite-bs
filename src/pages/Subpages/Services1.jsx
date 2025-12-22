import React from "react";
import {
  BookOpen,
  Award,
  Users,
  Briefcase,
  CheckCircle,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <BookOpen size={42} />,
      title: "Online Courses",
      badge: "Top Pick",
      description:
        "Flexible, engaging courses to grow your skills at your own pace.",
      color: "linear-gradient(135deg, #4facfe, #00f2fe)",
    },
    {
      icon: <Award size={42} />,
      title: "Certification Programs",
      badge: "Verified",
      description:
        "Get certified with recognized programs and stand out in your field.",
      color: "linear-gradient(135deg, #43e97b, #38f9d7)",
    },
    {
      icon: <Users size={42} />,
      title: "Personal Mentorship",
      badge: "1:1 Support",
      description:
        "Personalized guidance with mentors who care about your growth.",
      color: "linear-gradient(135deg, #f093fb, #f5576c)",
    },
    {
      icon: <Briefcase size={42} />,
      title: "Corporate Training",
      badge: "Team Plan",
      description:
        "Custom workshops to level up your team’s performance together.",
      color: "linear-gradient(135deg, #5ee7df, #b490ca)",
    },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f8fafc, #e2e8f0)",
        minHeight: "100vh",
        padding: "40px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "10px",
            color: "#0d6efd",
          }}
        >
          <CheckCircle size={28} style={{ marginRight: "8px" }} />
          Our Services
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#6c757d",
            marginBottom: "40px",
          }}
        >
          Professional solutions to unlock your true potential
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: service.color,
                color: "white",
                borderRadius: "16px",
                padding: "24px",
                textAlign: "center",
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                transition: "all 0.4s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.filter = "brightness(1.1) saturate(1.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.filter = "brightness(1) saturate(1)";
              }}
            >
              <div style={{ marginBottom: "10px" }}>{service.icon}</div>
              <h5 style={{ fontWeight: "bold", marginBottom: "6px" }}>
                {service.title}
              </h5>
              <span
                style={{
                  display: "inline-block",
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1))",
                  padding: "4px 12px",
                  borderRadius: "12px",
                  marginBottom: "8px",
                  fontSize: "12px",
                }}
              >
                {service.badge}
              </span>
              <p style={{ fontSize: "13px", margin: "0" }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
