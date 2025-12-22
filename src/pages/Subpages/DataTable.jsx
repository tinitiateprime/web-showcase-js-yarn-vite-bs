import React, { useState } from "react";
import { FaUser, FaUserShield, FaUserCog, FaTh, FaBars } from "react-icons/fa";

const DataTable = () => {
  const initialData = [
    { id: 1, name: "Eswar Reddy", email: "eswar@example.com", role: "Admin" },
    { id: 2, name: "Siri", email: "Siri@example.com", role: "User" },
    { id: 3, name: "John Doe", email: "john@example.com", role: "Moderator" },
    { id: 4, name: "Jane Smith", email: "jane@example.com", role: "User" },
  ];

  const roles = ["All", "Admin", "Moderator", "User"];

  const [data] = useState(initialData);
  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState("All");
  const [view, setView] = useState("list");

  const filteredData = data.filter((row) => {
    const matchesSearch =
      row.name.toLowerCase().includes(search.toLowerCase()) ||
      row.email.toLowerCase().includes(search.toLowerCase()) ||
      row.role.toLowerCase().includes(search.toLowerCase());
    const matchesRole = filterRole === "All" || row.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const roleIcon = (role) => {
    if (role === "Admin") return <FaUserShield />;
    if (role === "Moderator") return <FaUserCog />;
    return <FaUser />;
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #dceefb, #f0f4c3)", // lighter background
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "30px 20px",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <h2 style={{ color: "#333", marginBottom: "15px", fontSize: "22px" }}>User Info Cards</h2>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search by name, email, or role..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "90%",
          maxWidth: "800px",
          padding: "10px 12px",
          marginBottom: "15px",
          borderRadius: "10px",
          border: "none",
          outline: "none",
          fontSize: "14px",
          boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
        }}
      />

      {/* Role filter buttons */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "15px" }}>
        {roles.map((role) => (
          <button
            key={role}
            onClick={() => setFilterRole(role)}
            style={{
              padding: "8px 12px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              background: filterRole === role ? "#81c784" : "rgba(0,0,0,0.1)",
              color: "#333",
              fontWeight: "bold",
              fontSize: "12px",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              if (filterRole !== role) e.currentTarget.style.background = "rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              if (filterRole !== role) e.currentTarget.style.background = "rgba(0,0,0,0.1)";
            }}
          >
            {role}
          </button>
        ))}

        {/* View toggle buttons */}
        <button
          onClick={() => setView("list")}
          style={{
            padding: "8px 10px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            background: view === "list" ? "#aed581" : "rgba(0,0,0,0.1)",
            color: "#333",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "12px",
          }}
        >
          <FaBars /> List
        </button>
        <button
          onClick={() => setView("grid")}
          style={{
            padding: "8px 10px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            background: view === "grid" ? "#aed581" : "rgba(0,0,0,0.1)",
            color: "#333",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "12px",
          }}
        >
          <FaTh /> Grid
        </button>
      </div>

      {/* Cards container */}
      <div
        style={{
          width: "90%",
          maxWidth: "1000px",
          display: "flex",
          flexDirection: view === "list" ? "column" : "row",
          flexWrap: view === "grid" ? "wrap" : "nowrap",
          gap: "15px",
        }}
      >
        {filteredData.map((row) => (
          <div
            key={row.id}
            style={{
              background: "linear-gradient(135deg, #fff9c4, #ffe0b2)",
              borderRadius: "12px",
              padding: "15px 18px",
              color: "#333",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flex: view === "grid" ? "0 1 calc(33% - 15px)" : "1 1 100%",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer",
              fontSize: "13px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ fontSize: "20px" }}>{roleIcon(row.role)}</div>
              <div>
                <h3 style={{ margin: 0, fontSize: "14px" }}>{row.name}</h3>
                <p style={{ margin: "3px 0 0", fontSize: "12px", opacity: 0.8 }}>{row.email}</p>
              </div>
            </div>
            <div
              style={{
                background: "rgba(0,0,0,0.05)",
                padding: "4px 10px",
                borderRadius: "10px",
                fontWeight: "bold",
                fontSize: "12px",
                textTransform: "uppercase",
              }}
            >
              {row.role}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataTable;

