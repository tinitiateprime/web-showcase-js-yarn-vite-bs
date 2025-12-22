import React, { useState } from "react";
import { Bell, X } from "lucide-react";
import { Link } from "react-router-dom";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New message from support",
      time: "2 min ago",
      type: "info",
      link: "/support", // link for support page
    },
    {
      id: 2,
      title: "Your profile was updated",
      time: "15 min ago",
      type: "success",
      link: "/profile", // link for profile page
    },
    {
      id: 3,
      title: "New login from Chrome",
      time: "1 hour ago",
      type: "warning",
      link: "/security", // link for security page
    },
  ]);

  const handleDismiss = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div
      className="container py-5"
      style={{
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
        minHeight: "100vh",
      }}
    >
      <div className="text-center mb-4">
        <h2 className="fw-bold text-primary d-flex justify-content-center align-items-center gap-2">
          <Bell size={28} />
          Notifications
        </h2>
      </div>

      <div
        className="toast-container position-relative p-3 mx-auto"
        style={{ maxWidth: "600px" }}
      >
        {notifications.map((item) => (
          <Link
            to={item.link}
            key={item.id}
            style={{ textDecoration: "none" }}
          >
            <div
              className="toast show mb-3 shadow rounded-4 border-0"
              role="alert"
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                animation: "fadeIn 0.8s ease-in-out",
                cursor: "pointer",
              }}
            >
              <div className="toast-header d-flex justify-content-between align-items-center rounded-top-4 bg-light">
                <strong className="me-auto">
                  <span className="me-2">
                    <Bell size={16} className="text-primary" />
                  </span>
                  Notification
                </strong>
                <span
                  className={`badge bg-${
                    item.type === "info"
                      ? "primary"
                      : item.type === "success"
                      ? "success"
                      : "warning"
                  } text-white`}
                >
                  {item.type.toUpperCase()}
                </span>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary ms-2"
                  onClick={(e) => {
                    e.preventDefault(); // so link does not trigger
                    handleDismiss(item.id);
                  }}
                >
                  <X size={14} />
                </button>
              </div>
              <div className="toast-body fw-medium d-flex justify-content-between align-items-center">
                <span>{item.title}</span>
                <small className="text-muted">{item.time}</small>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Inline fade-in keyframes */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Notifications;
