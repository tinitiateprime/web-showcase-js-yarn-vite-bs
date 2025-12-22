import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const searchData = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Services", path: "/services" },
  { title: "Catalog", path: "/catalog" },
  { title: "Profile", path: "/profile" },
  { title: "Login", path: "/login" },
  { title: "Signup", path: "/signup" },
  { title: "Dashboard", path: "/dashboard" },
  { title: "Analytics", path: "/analytics" },
  { title: "Security", path: "/security" },
  { title: "Comparison", path: "/comparison" },
  { title: "About1", path: "/about1" },
  { title: "Contact1", path: "/contact1" },
  { title: "Help", path: "/help" },
  { title: "services1", path: "/services1" },
  { title: "support", path: "/support" },
  { title: "settings", path: "/settings" },
  { title: "notification", path: "/notifications" },
  { title: "message", path: "/messages" },

];

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = searchData.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(value ? filtered : []);
  };

  const handleSearch = () => {
    const matched = searchData.find(
      (item) => item.title.toLowerCase() === searchTerm.toLowerCase()
    );
    if (matched) {
      navigate(matched.path);
      setSearchTerm("");
      setSuggestions([]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div style={{ textAlign: "center", marginBottom: "20px", position: "relative" }}>
      <div style={{ display: "inline-flex", gap: "0px", borderRadius: "8px", overflow: "hidden" }}>
        <input
          type="text"
          placeholder="Search pages like Home, About1, Dashboard..."
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          style={{
            padding: "10px 16px",
            fontSize: "14px",
            border: "1px solid #ccc",
            outline: "none",
            width: "300px",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "10px 16px",
            fontSize: "14px",
            border: "1px solid #2563eb",
            backgroundColor: "#2563eb",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>

      {suggestions.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "45px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#fff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            borderRadius: "8px",
            width: "300px",
            textAlign: "left",
            zIndex: 1000,
          }}
        >
          {suggestions.map((item, idx) => (
            <div
              key={idx}
              onClick={() => {
                navigate(item.path);
                setSearchTerm("");
                setSuggestions([]);
              }}
              style={{
                padding: "10px 16px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
                fontSize: "14px",
              }}
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
