import React from "react";
import {
  BarChart2,
  TrendingUp,
  Users,
  Activity,
  CheckCircle,
} from "lucide-react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// register chart components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const AnalyticsPage = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Visits",
        data: [120, 190, 150, 220, 300, 250, 400],
        backgroundColor: "#0d6efd",
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div
      className="container-fluid py-4"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,rgb(140, 245, 149), #e0f7fa)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="d-flex align-items-center gap-2">
            <BarChart2 size={28} className="text-primary" />
            <h2 className="fw-bold text-primary m-0">Analytics</h2>
          </div>
          <button className="btn btn-outline-primary">Export</button>
        </div>

        {/* Summary stats panels */}
        <div className="row g-4 mb-4">
          <div className="col-md-3">
            <div className="bg-white rounded shadow-sm p-3 border-start border-4 border-primary">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <h6 className="text-muted fw-semibold">Active Users</h6>
                <Users size={20} className="text-primary" />
              </div>
              <h4 className="fw-bold">1,200</h4>
              <small className="text-success">+8% this week</small>
            </div>
          </div>
          <div className="col-md-3">
            <div className="bg-white rounded shadow-sm p-3 border-start border-4 border-success">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <h6 className="text-muted fw-semibold">Conversions</h6>
                <CheckCircle size={20} className="text-success" />
              </div>
              <h4 className="fw-bold">340</h4>
              <small className="text-success">+12% this month</small>
            </div>
          </div>
          <div className="col-md-3">
            <div className="bg-white rounded shadow-sm p-3 border-start border-4 border-warning">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <h6 className="text-muted fw-semibold">Bounce Rate</h6>
                <Activity size={20} className="text-warning" />
              </div>
              <h4 className="fw-bold">35%</h4>
              <small className="text-danger">-2% this week</small>
            </div>
          </div>
          <div className="col-md-3">
            <div className="bg-white rounded shadow-sm p-3 border-start border-4 border-info">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <h6 className="text-muted fw-semibold">Session Duration</h6>
                <TrendingUp size={20} className="text-info" />
              </div>
              <h4 className="fw-bold">4m 20s</h4>
              <small className="text-success">+5% this week</small>
            </div>
          </div>
        </div>

        {/* Chart + Insights */}
        <div className="row g-4">
          <div className="col-md-8">
            <div className="bg-white rounded shadow-sm p-4 h-100">
              <h5 className="fw-bold mb-3">Traffic Overview</h5>
              <Bar data={data} options={options} />
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-white rounded shadow-sm p-4 h-100">
              <h5 className="fw-bold mb-3">Key Insights</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0 ps-0">
                  ✅ 8% increase in active users this week
                </li>
                <li className="list-group-item border-0 ps-0">
                  ✅ Conversion rates improved 12% this month
                </li>
                <li className="list-group-item border-0 ps-0">
                  ⚠️ Bounce rate slightly decreased to 35%
                </li>
                <li className="list-group-item border-0 ps-0">
                  ✅ Session duration up by 5%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
