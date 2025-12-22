import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { dark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        backgroundColor: dark ? "#facc15" : "#1e293b",
        color: dark ? "#111827" : "#f9fafb",
        border: "none",
        padding: "10px 15px",
        borderRadius: "8px",
        cursor: "pointer",
        zIndex: 1000,
      }}
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
};

export default ThemeToggle;


