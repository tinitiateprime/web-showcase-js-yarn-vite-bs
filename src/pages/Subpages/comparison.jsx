// src/ComparisonPage.jsx
import React, { useState, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PROGRAMS = [
  {
    id: 1,
    name: "Java Full-Stack Developer",
    category: "Full-Stack",
    difficulty: "Intermediate",
    duration: "6 months",
    mode: "Online + Weekend Classroom",
    price: "₹35,000",
    projects: "3 end-to-end projects",
    certification: "TINITIATE Certificate",
    status: "Active",
    updatedAt: "2025-11-01",
  },
  {
    id: 2,
    name: "Python Data Engineering",
    category: "Data Engineering",
    difficulty: "Intermediate–Advanced",
    duration: "5 months",
    mode: "Online Live",
    price: "₹40,000",
    projects: "Data pipeline + ETL project",
    certification: "TINITIATE Certificate",
    status: "Active",
    updatedAt: "2025-10-20",
  },
  {
    id: 3,
    name: "Power BI & SQL Reporting",
    category: "Analytics",
    difficulty: "Beginner–Intermediate",
    duration: "3 months",
    mode: "Online + Self-paced Labs",
    price: "₹28,000",
    projects: "Reporting dashboard project",
    certification: "TINITIATE Certificate",
    status: "Active",
    updatedAt: "2025-09-15",
  },
  {
    id: 4,
    name: "AWS Cloud Fundamentals",
    category: "Cloud",
    difficulty: "Beginner",
    duration: "2.5 months",
    mode: "Online Live",
    price: "₹25,000",
    projects: "Mini cloud deployment",
    certification: "TINITIATE Certificate",
    status: "Upcoming",
    updatedAt: "2025-08-10",
  },
];

const FEATURE_ROWS = [
  { key: "category", label: "Category" },
  { key: "difficulty", label: "Difficulty Level" },
  { key: "duration", label: "Program Duration" },
  { key: "mode", label: "Mode of Delivery" },
  { key: "price", label: "Fee (Indicative)" },
  { key: "projects", label: "Hands-on Projects" },
  { key: "certification", label: "Certification" },
  { key: "status", label: "Status" },
  { key: "updatedAt", label: "Last Updated" },
];

export default function ComparisonPage() {
  const [selectedIds, setSelectedIds] = useState([]);

  const handleToggleProgram = (id, checked) => {
    if (checked) {
      if (selectedIds.length >= 3) {
        alert("You can compare up to 3 programs at a time.");
        return;
      }
      setSelectedIds((prev) => [...prev, id]);
    } else {
      setSelectedIds((prev) => prev.filter((x) => x !== id));
    }
  };

  const comparedPrograms = useMemo(() => {
    if (selectedIds.length === 0) {
      // Default: show first 3 programs
      return PROGRAMS.slice(0, 3);
    }
    return PROGRAMS.filter((p) => selectedIds.includes(p.id));
  }, [selectedIds]);

  return (
    <div className="min-vh-100 bg-light">
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            TINITIATE Programs
          </a>
          <span className="navbar-text text-muted small">
            Side-by-side comparison
          </span>
        </div>
      </nav>

      {/* Page Content */}
      <div className="container py-4">
        {/* Header */}
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
          <div>
            <h1 className="h3 mb-1">Compare Training Programs</h1>
            <p className="text-muted mb-0">
              Select up to <strong>3 programs</strong> to compare features,
              duration, and pricing side-by-side.
            </p>
          </div>
          <div className="text-end">
            <span className="badge bg-primary">
              Total programs: {PROGRAMS.length}
            </span>
          </div>
        </div>

        {/* Selection Panel */}
        <div className="card shadow-sm mb-4">
          <div className="card-header bg-white">
            <h2 className="h6 mb-0">Select programs to compare</h2>
          </div>
          <div className="card-body">
            <div className="row g-3">
              {PROGRAMS.map((program) => {
                const checked = selectedIds.includes(program.id);
                return (
                  <div
                    key={program.id}
                    className="col-12 col-md-6 col-lg-3 d-flex"
                  >
                    <div className="border rounded-3 p-3 w-100 bg-light">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`program-${program.id}`}
                          checked={checked}
                          onChange={(e) =>
                            handleToggleProgram(program.id, e.target.checked)
                          }
                        />
                        <label
                          className="form-check-label fw-semibold"
                          htmlFor={`program-${program.id}`}
                        >
                          {program.name}
                        </label>
                      </div>
                      <div className="mt-2 small text-muted">
                        {program.category} • {program.duration}
                      </div>
                      <div className="mt-1">
                        <span className="badge bg-secondary me-1">
                          {program.difficulty}
                        </span>
                        <span
                          className={
                            "badge " +
                            (program.status === "Active"
                              ? "bg-success"
                              : "bg-warning text-dark")
                          }
                        >
                          {program.status}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-3 small text-muted d-flex justify-content-between">
              <span>
                Selected: <strong>{selectedIds.length}</strong> / 3
              </span>
              <span>
                Tip: Uncheck all to see the default top 3 programs compared.
              </span>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="card shadow-sm">
          <div className="card-header bg-white d-flex justify-content-between align-items-center">
            <h2 className="h6 mb-0">Comparison overview</h2>
            <span className="small text-muted">
              Comparing <strong>{comparedPrograms.length}</strong> program
              {comparedPrograms.length !== 1 ? "s" : ""}.
            </span>
          </div>

          <div className="table-responsive">
            <table className="table mb-0 align-middle">
              <thead className="table-light">
                <tr>
                  <th scope="col" style={{ minWidth: "180px" }}>
                    Feature
                  </th>
                  {comparedPrograms.map((program) => (
                    <th
                      scope="col"
                      key={program.id}
                      className="text-center"
                      style={{ minWidth: "220px" }}
                    >
                      <div className="fw-semibold">{program.name}</div>
                      <div className="small text-muted">
                        {program.category}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURE_ROWS.map((row) => (
                  <tr key={row.key}>
                    <th scope="row" className="fw-semibold">
                      {row.label}
                    </th>
                    {comparedPrograms.map((program) => {
                      let value = program[row.key];

                      if (row.key === "updatedAt") {
                        value = new Date(value).toLocaleDateString();
                      }

                      return (
                        <td key={program.id} className="text-center">
                          {value}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footnote */}
        <p className="text-muted small mt-3 mb-0">
          * All details are indicative and can be customized based on client or
          batch requirements.
        </p>
      </div>
    </div>
  );
}
