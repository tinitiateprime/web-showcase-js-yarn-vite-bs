import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
  useEffect(() => {
    const icons = document.querySelectorAll(".bg-icon");
    icons.forEach((icon, i) => {
      icon.animate(
        [
          { transform: "translateY(0)" },
          { transform: "translateY(-20px)" },
          { transform: "translateY(0)" },
        ],
        {
          duration: 4000 + i * 300,
          iterations: Infinity,
          direction: "alternate",
        }
      );
    });
  }, []);

  const floatingEmojis = ["🔒", "📘", "🌟", "⚙️", "📱", "💡", "🛡️", "🧠", "🧩", "💾"];

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      {/* Background floating icons */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="bg-icon"
          style={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${20 + Math.random() * 40}px`,
            opacity: 0.08 + Math.random() * 0.2,
            color: "#ffffff",
            zIndex: 1,
            animation: "floatIcon 8s ease-in-out infinite",
            userSelect: "none",
          }}
        >
          {floatingEmojis[i % floatingEmojis.length]}
        </div>
      ))}

      {/* Login card */}
      <div
        className="shadow p-4 rounded"
        style={{
          width: "100%",
          maxWidth: "400px",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          zIndex: 2,
          animation: "fadeIn 1s ease-in-out",
          color: "#fff",
        }}
      >
        <h3 className="text-center mb-4 fw-bold">🔐 Login</h3>
        <form>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              style={{
                background: "rgba(255,255,255,0.2)",
                border: "none",
                color: "#fff",
              }}
              required
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              style={{
                background: "rgba(255,255,255,0.2)",
                border: "none",
                color: "#fff",
              }}
              required
            />
          </div>
          <button className="btn btn-light w-100 fw-semibold">Login</button>
        </form>
        <p className="text-center mt-3" style={{ fontSize: "0.9rem", color: "#ddd" }}>
          Don't have an account? <a href="#" style={{ color: "#fff" }}>Sign up</a>
        </p>
      </div>

      {/* Keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes floatIcon {
            0% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0); }
          }

          input::placeholder {
            color: #eee;
          }

          label {
            color: #fff;
          }
        `}
      </style>
    </div>
  );
};

export default LoginPage;
