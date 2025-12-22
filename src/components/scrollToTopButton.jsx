import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "20px",
        backgroundColor: "#1e40af",
        color: "#fff",
        border: "none",
        padding: "10px 14px",
        borderRadius: "50%",
        fontSize: "18px",
        cursor: "pointer",
        zIndex: 999,
      }}
    >
      ⬆
    </button>
  );
};

export default ScrollToTopButton;
