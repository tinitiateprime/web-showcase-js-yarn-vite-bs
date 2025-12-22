
import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, BarChart2, LayoutDashboard, ShieldCheck } from "lucide-react";
import SearchBox from "../../components/SearchBox"; // ✅ Import the search box

const links = [
  {
    title: "Dashboard",
    description: "Quick access to your learning hub",
    icon: <LayoutDashboard size={36} color="#3b82f6" />,
    path: "/dashboard",
    image: "https://source.unsplash.com/random/300x200?dashboard",
  },
  {
    title: "Catalog",
    description: "Browse available courses",
    icon: <BookOpen size={36} color="#8b5cf6" />,
    path: "/catalog",
    image: "https://source.unsplash.com/random/300x200?education",
  },
  {
    title: "Analytics",
    description: "Track learning progress",
    icon: <BarChart2 size={36} color="#10b981" />,
    path: "/analytics",
    image: "https://source.unsplash.com/random/300x200?analytics",
  },
  {
    title: "Security",
    description: "Manage privacy settings",
    icon: <ShieldCheck size={36} color="#f59e0b" />,
    path: "/security",
    image: "https://source.unsplash.com/random/300x200?security",
  },
];

const Home = () => {
  return (
    <div
      style={{
        height: "100vh",            // full viewport
        overflow: "hidden",         // prevent page scroll
        background: "linear-gradient(to right,rgb(241, 99, 239),rgb(80, 243, 191))",
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
          padding: "32px",
          flex: "1",
          overflowY: "auto",       // scroll only this content
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "12px",
            color: "#fff",
          }}
        >
          Welcome to <span style={{ color: "#fca5a5" }}>Tinitiate</span>
        </h1>
        <p style={{ color: "#e0f2fe", fontSize: "14px", marginBottom: "24px" }}>
          Discover resources and manage your learning journey with ease.
        </p>

        {/* Search box */}
        <SearchBox />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {links.map((link, idx) => (
            <Link to={link.path} key={idx} style={{ textDecoration: "none" }}>
              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
                }}
              >
                <img
                  src={link.image}
                  alt={link.title}
                  style={{ width: "100%", height: "160px", objectFit: "cover" }}
                />
                <div style={{ padding: "16px", textAlign: "left" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                      gap: "10px",
                    }}
                  >
                    {link.icon}
                    <h2 style={{ fontSize: "18px", fontWeight: "600", margin: 0 }}>
                      {link.title}
                    </h2>
                  </div>
                  <p style={{ fontSize: "14px", color: "#6b7280" }}>{link.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
