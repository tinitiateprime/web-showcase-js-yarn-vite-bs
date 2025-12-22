import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const navLinks = [
  { path: "/", label: "🏠 Home", subRoutes: [{ path: "/Home1", label: "🏠 Home1" }] },
  { path: "/profile", label: "👤 Profile" },
  { path: "/login", label: "🔑 Login" },
  { path: "/signup", label: "📝 Signup" },
  { path: "/catalog", label: "📚 Catalog" },
  { path: "/services", label: "🛠 Services", subRoutes: [{ path: "/services1", label: "🛠 Services1" }] },
  { path: "/search", label: "🔍 Search" },
  { path: "/comparison", label: "📊 Comparison" },
  { path: "/comparisontable", label: "📑 Comparison Table" },
  { path: "/forms", label: "📝 Forms" },
  { path: "/datatable", label: "📋 Data Table" },
  { path: "/infographics", label: "📈 Infographics" },
  { path: "/audio", label: "🎵 Audio" },
  { path: "/video", label: "🎬 Video" },
  { path: "/animation", label: "🎞️ Animation" },
  { path: "/dragdrop", label: "🖱️ Drag & Drop" },
  { path: "/editor", label: "✏️ Online Editor" },
  { path: "/shoppingcart", label: "🛒 Shopping Cart" },
  { path: "/calendar", label: "📅 Calendar" },
  { path: "/dashboard", label: "📊 Dashboard" },
  { path: "/analytics", label: "📈 Analytics" },
  { path: "/security", label: "🔒 Security" },
  { path: "/about", label: "ℹ️ About", subRoutes: [{ path: "/about1", label: "ℹ️ About1" }] },
  { path: "/contact", label: "📞 Contact", subRoutes: [{ path: "/contact1", label: "📞 Contact1" }] },
  { path: "/help", label: "❓ Help" }
];

const LeftSidebar = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState();

  useEffect(() => {
    const activeParent = navLinks.find(link =>
      link.subRoutes?.some(sub => sub.path === location.pathname)
    );
    if (activeParent) {
      setOpenMenu(activeParent.label);
    }
  }, [location.pathname]);

  const handleToggle = (label) => {
    setOpenMenu((prev) => (prev === label ? null : label));
  };

  return (
    <div
      className="p-2"
      style={{
        height: "200vh",
        width:"300px",
        background: "linear-gradient(135deg,rgb(73, 186, 211) 0%,rgb(149, 23, 151) 100%)",
        color: "white",
        fontSize: "16px",
      }}
    >
      <h6 className="text-center mb-3">📌 Navigation</h6>
      <div className="d-flex flex-column gap-3">
        {navLinks.map((link, index) => (
          <div key={index}>
            {link.subRoutes ? (
              <>
                <div
                  className="d-flex justify-content-between align-items-center py-1 px-2 rounded"
                  style={{
                    backgroundColor:
                      location.pathname === link.path ? "#334155" : "transparent",
                    cursor: "pointer",
                  }}
                  onClick={() => handleToggle(link.label)}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#334155"}
                  onMouseLeave={(e) => {
                    if (location.pathname !== link.path)
                      e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <Link
                    to={link.path}
                    className="text-decoration-none text-white flex-grow-1"
                  >
                    {link.label}
                  </Link>
                  <span
                    style={{
                      transition: "transform 0.3s ease",
                      transform: openMenu === link.label ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <ChevronDown size={16} />
                  </span>
                </div>
                {openMenu === link.label && (
                  <div className="ms-2 d-flex flex-column">
                    {link.subRoutes.map((sub, subIndex) => (
                      <Link
                        key={subIndex}
                        to={sub.path}
                        className="text-decoration-none text-white py-1 px-2"
                        style={{
                          backgroundColor:
                            location.pathname === sub.path ? "#475569" : "#334155",
                          borderRadius: "6px",
                          marginTop: "2px",
                        }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                to={link.path}
                className="text-decoration-none text-white py-1 px-2 rounded"
                style={{
                  backgroundColor:
                    location.pathname === link.path ? "#334155" : "transparent",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#334155")
                }
                onMouseLeave={(e) => {
                  if (location.pathname !== link.path)
                    e.target.style.backgroundColor = "transparent";
                }}
              >
                {link.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
