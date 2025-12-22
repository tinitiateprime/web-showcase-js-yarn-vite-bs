import React, { useState } from "react";
import { Lock, ShieldCheck, LogIn, LogOut } from "lucide-react";

const SecurityPage = () => {
  const [twoFAEnabled, setTwoFAEnabled] = useState(true);

  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "linear-gradient(135deg, #f0f4f8, #ffffff)",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        {/* header */}
        <div className="mb-4 d-flex align-items-center gap-2">
          <ShieldCheck size={28} className="text-primary" />
          <h2 className="fw-bold m-0">Account Security</h2>
        </div>

        <div className="row g-4">
          {/* 2FA toggle */}
          <div className="col-md-6">
            <div className="bg-white shadow-sm rounded p-4 border-start border-4 border-primary h-100">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="fw-semibold">Two-Factor Authentication</h5>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    checked={twoFAEnabled}
                    onChange={() => setTwoFAEnabled(!twoFAEnabled)}
                  />
                </div>
              </div>
              <p className="text-muted mb-0">
                {twoFAEnabled
                  ? "2FA is currently enabled for your account."
                  : "2FA is currently disabled."}
              </p>
            </div>
          </div>

          {/* change password */}
          <div className="col-md-6">
            <div className="bg-white shadow-sm rounded p-4 border-start border-4 border-warning h-100">
              <h5 className="fw-semibold mb-3">Change Password</h5>
              <form>
                <div className="mb-2">
                  <label className="form-label">Current Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="••••••••"
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="••••••••"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Confirm New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="••••••••"
                  />
                </div>
                <button type="submit" className="btn btn-warning w-100">
                  Update Password
                </button>
              </form>
            </div>
          </div>

          {/* activity log */}
          <div className="col-md-12">
            <div className="bg-white shadow-sm rounded p-4 border-start border-4 border-success">
              <h5 className="fw-semibold mb-3">Login Activity</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                  <div>
                    <LogIn className="text-success me-2" size={18} />
                    Login from Chrome on Windows
                  </div>
                  <small className="text-muted">2 hours ago</small>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                  <div>
                    <LogIn className="text-success me-2" size={18} />
                    Login from Safari on iPhone
                  </div>
                  <small className="text-muted">Yesterday</small>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                  <div>
                    <LogOut className="text-danger me-2" size={18} />
                    Logged out from Chrome
                  </div>
                  <small className="text-muted">3 days ago</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
