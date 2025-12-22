import React from "react";
import { LayoutDashboard, Book, TrendingUp, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom"; // for navigation
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div
      className="container-fluid py-4"
      style={{
        background: "linear-gradient(120deg, #e0f7fa, #ffffff)",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        {/* Dashboard header */}
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="d-flex align-items-center gap-2">
            <LayoutDashboard size={28} className="text-primary" />
            <h2 className="fw-bold text-primary m-0">Dashboard</h2>
          </div>
          <button className="btn btn-outline-primary">Settings</button>
        </div>

        {/* Stats summary */}
        <div className="row g-4 mb-4">
          <div className="col-md-4">
            <div className="bg-white border-start border-4 border-primary rounded shadow-sm p-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="fw-semibold text-muted">Courses Enrolled</h6>
                  <h4 className="fw-bold text-primary">10</h4>
                </div>
                <Book className="text-primary" size={32} />
              </div>
              <div className="progress mt-2" style={{ height: "5px" }}>
                <div
                  className="progress-bar bg-primary"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-white border-start border-4 border-success rounded shadow-sm p-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="fw-semibold text-muted">Avg Progress</h6>
                  <h4 className="fw-bold text-success">75%</h4>
                </div>
                <TrendingUp className="text-success" size={32} />
              </div>
              <div className="progress mt-2" style={{ height: "5px" }}>
                <div
                  className="progress-bar bg-success"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-white border-start border-4 border-warning rounded shadow-sm p-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="fw-semibold text-muted">Hours Studied</h6>
                  <h4 className="fw-bold text-warning">30 hrs</h4>
                </div>
                <Clock className="text-warning" size={32} />
              </div>
              <div className="progress mt-2" style={{ height: "5px" }}>
                <div
                  className="progress-bar bg-warning"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Chart / Activity section */}
        <div className="row g-4">
          <div className="col-md-8">
            <div className="bg-white rounded shadow-sm p-4 h-100">
              <h5 className="fw-bold mb-3">Learning Activity</h5>
              <div
                className="border rounded d-flex justify-content-center align-items-center"
                style={{
                  minHeight: "250px",
                  background:
                    "repeating-linear-gradient(45deg, #f0f0f0, #f0f0f0 10px, #ffffff 10px, #ffffff 20px)",
                  color: "#999",
                }}
              >
                {/* Placeholder for chart */}
                Chart coming soon...
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-white rounded shadow-sm p-4 h-100">
              <h5 className="fw-bold mb-3">Quick Actions</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0 ps-0">
                  <button
                    className="btn btn-outline-primary w-100"
                    onClick={() => navigate("/courses")}
                  >
                    📚 View All Courses
                  </button>
                </li>
                <li className="list-group-item border-0 ps-0">
                  <button
                    className="btn btn-outline-success w-100"
                    onClick={() => navigate("/progress")}
                  >
                    ✅ Check Progress
                  </button>
                </li>
                <li className="list-group-item border-0 ps-0">
                  <button
                    className="btn btn-outline-warning w-100"
                    onClick={() => navigate("/log-hours")}
                  >
                    🕒 Log Study Hours
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
