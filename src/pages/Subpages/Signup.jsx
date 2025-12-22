import React from "react";

const LoginPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #2b5876, #4e4376)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Segoe UI, sans-serif",
        color: "#fff",
      }}
    >
      <div className="p-4 bg-dark rounded" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4">🔐 Login</h3>
        <form>
          <div className="mb-3">
            <label>Email</label>
            <input className="form-control" type="email" />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input className="form-control" type="password" />
          </div>
          <button className="btn btn-light w-100">Login</button>
        </form>
        <p className="text-center mt-3">
          Don't have an account?{" "}
          <a href="/signup" style={{ color: "#ffd700" }}>
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
