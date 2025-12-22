import React, { useEffect, useState } from "react";
import { FaChartLine, FaUsers, FaDollarSign, FaTasks } from "react-icons/fa";
import { Doughnut, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Infographics = () => {
  const stats = [
    { label: "Users", value: 1250, icon: <FaUsers />, color: "#ff6f61" },
    { label: "Revenue", value: 34500, icon: <FaDollarSign />, color: "#6b5b95" },
    { label: "Tasks Completed", value: 320, icon: <FaTasks />, color: "#88b04b" },
    { label: "Growth", value: 12, icon: <FaChartLine />, color: "#f7cac9" },
  ];

  const [progress, setProgress] = useState(stats.map(() => 0));

  // Animate radial progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) =>
        prev.map((p, i) => (p < stats[i].value ? Math.min(p + stats[i].value / 50, stats[i].value) : p))
      );
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const doughnutData = {
    labels: stats.map((s) => s.label),
    datasets: [
      {
        data: stats.map((s) => s.value),
        backgroundColor: stats.map((s) => s.color),
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: stats.map((s) => s.label),
    datasets: [
      {
        label: "Values",
        data: stats.map((s) => s.value),
        backgroundColor: stats.map((s) => s.color),
        borderRadius: 8,
      },
    ],
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #ffe0b2, #b3e5fc)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "30px 20px",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: "26px",
          marginBottom: "30px",
          color: "#444",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        Dashboard Infographics
      </h2>

      {/* Stats Cards with Radial Progress */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "25px",
          justifyContent: "center",
        }}
      >
        {stats.map((stat, idx) => (
          <div
            key={idx}
            style={{
              background: "#fff",
              borderRadius: "15px",
              padding: "25px 30px",
              width: "180px",
              height: "180px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              color: stat.color,
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px) scale(1.05)";
              e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
            }}
          >
            {/* Radial progress SVG */}
            <svg width="80" height="80">
              <circle
                cx="40"
                cy="40"
                r="36"
                stroke="#eee"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="40"
                cy="40"
                r="36"
                stroke={stat.color}
                strokeWidth="8"
                fill="none"
                strokeDasharray={2 * Math.PI * 36}
                strokeDashoffset={2 * Math.PI * 36 * (1 - progress[idx] / stat.value)}
                strokeLinecap="round"
                transform="rotate(-90 40 40)"
              />
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="12"
                fill={stat.color}
              >
                {Math.round(progress[idx])}
              </text>
            </svg>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <div style={{ fontSize: "28px" }}>{stat.icon}</div>
              <p style={{ margin: "4px 0 0", fontSize: "14px", fontWeight: "500" }}>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div
        style={{
          marginTop: "50px",
          width: "95%",
          maxWidth: "900px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <div
          style={{
            width: "300px",
            height: "300px",
            background: "#fff",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            padding: "20px",
          }}
        >
          <Doughnut data={doughnutData} />
        </div>

        <div
          style={{
            width: "500px",
            height: "300px",
            background: "#fff",
            borderRadius: "15px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            padding: "20px",
          }}
        >
          <Bar data={barData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
        </div>
      </div>
    </div>
  );
};

export default Infographics;
