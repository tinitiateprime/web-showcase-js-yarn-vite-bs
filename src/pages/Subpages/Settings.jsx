import React, { useState, useEffect } from "react";
import { Settings, Bell, Shield, Moon } from "lucide-react";

const SettingsPage = () => {
  const [show, setShow] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [secureLogin, setSecureLogin] = useState(true);

  // apply dark mode to the entire body
  useEffect(() => {
    document.body.classList.toggle("bg-dark", darkMode);
    document.body.classList.toggle("text-light", darkMode);
    document.body.classList.toggle("text-dark", !darkMode);
  }, [darkMode]);

  return (
    <div
      className="container py-5"
      style={{
        minHeight: "100vh",
        transition: "background-color 0.3s ease",
      }}
    >
      <div className="text-center mb-4">
        <h2
          className={`fw-bold d-flex justify-content-center align-items-center gap-2 ${
            darkMode ? "text-light" : "text-primary"
          }`}
        >
          <Settings size={28} />
          Settings
        </h2>
      </div>

      <div className="text-center">
        <button
          className="btn btn-primary px-4 py-2"
          onClick={() => setShow(true)}
        >
          Open Settings
        </button>
      </div>

      {/* Bootstrap Modal */}
      <div
        className={`modal fade ${show ? "show d-block" : ""}`}
        tabIndex="-1"
        role="dialog"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onClick={() => setShow(false)}
      >
        <div
          className="modal-dialog modal-dialog-centered"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className={`modal-content rounded-4 shadow ${
              darkMode ? "bg-dark text-light" : ""
            }`}
          >
            <div
              className={`modal-header ${
                darkMode ? "bg-secondary text-light" : "bg-primary text-white"
              }`}
            >
              <h5 className="modal-title">
                <Settings size={20} className="me-2" />
                Preferences
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShow(false)}
              ></button>
            </div>
            <div className="modal-body">
              {/* Setting 1 */}
              <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                <div className="d-flex align-items-center gap-2">
                  <Bell size={16} className="text-primary" />
                  <span>Enable Notifications</span>
                </div>
                <div className="form-check form-switch m-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={notifications}
                    onChange={() => setNotifications(!notifications)}
                  />
                </div>
              </div>

              {/* Setting 2 */}
              <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                <div className="d-flex align-items-center gap-2">
                  <Moon size={16} className="text-secondary" />
                  <span>Dark Mode</span>
                </div>
                <div className="form-check form-switch m-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                  />
                </div>
              </div>

              {/* Setting 3 */}
              <div className="d-flex justify-content-between align-items-center py-2">
                <div className="d-flex align-items-center gap-2">
                  <Shield size={16} className="text-success" />
                  <span>Secure Login</span>
                </div>
                <div className="form-check form-switch m-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={secureLogin}
                    onChange={() => setSecureLogin(!secureLogin)}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                onClick={() => setShow(false)}
              >
                Close
              </button>
              <button
                className="btn btn-primary"
                onClick={() => setShow(false)}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
