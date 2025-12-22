// src/SearchPage.jsx
import React, { useState, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MOCK_DATA = [
  {
    id: 1,
    title: "Employee Management System",
    description: "CRUD app for managing employees, roles, and departments.",
    category: "Project",
    status: "Active",
    updatedAt: "2025-11-01",
  },
  {
    id: 2,
    title: "Spring Boot Training Module",
    description: "Beginner to advanced course outline with practice labs.",
    category: "Training",
    status: "Draft",
    updatedAt: "2025-10-20",
  },
  {
    id: 3,
    title: "React + Vite Boilerplate",
    description: "Starter template for building modern SPAs with Vite.",
    category: "Template",
    status: "Active",
    updatedAt: "2025-09-15",
  },
  {
    id: 4,
    title: "AWS IAM Tutorial",
    description:
      "Full guide with console and CLI examples for IAM users, groups, and roles.",
    category: "Documentation",
    status: "Archived",
    updatedAt: "2025-08-10",
  },
];

export default function SearchPage() {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [sortBy, setSortBy] = useState("recent");

  const filteredResults = useMemo(() => {
    let results = [...MOCK_DATA];

    // Text search (title + description)
    if (searchText.trim() !== "") {
      const term = searchText.toLowerCase();
      results = results.filter(
        (item) =>
          item.title.toLowerCase().includes(term) ||
          item.description.toLowerCase().includes(term)
      );
    }

    // Category filter
    if (category !== "All") {
      results = results.filter((item) => item.category === category);
    }

    // Status filter
    if (status !== "All") {
      results = results.filter((item) => item.status === status);
    }

    // Sort
    if (sortBy === "recent") {
      results.sort(
        (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
      );
    } else if (sortBy === "title") {
      results.sort((a, b) => a.title.localeCompare(b.title));
    }

    return results;
  }, [searchText, category, status, sortBy]);

  return (
    <div className="min-vh-100 bg-light">
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            TINITIATE Search
          </a>
          <span className="navbar-text text-muted small">
            Professional Search Interface
          </span>
        </div>
      </nav>

      {/* Page Content */}
      <div className="container py-4">
        {/* Page Header */}
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
          <div>
            <h1 className="h3 mb-1">Search Repository</h1>
            <p className="text-muted mb-0">
              Quickly find projects, tutorials, templates and documentation.
            </p>
          </div>
          <div className="text-end">
            <span className="badge bg-primary">
              Total items: {MOCK_DATA.length}
            </span>
          </div>
        </div>

        {/* Filters Card */}
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <div className="row g-3 align-items-end">
              {/* Search box */}
              <div className="col-12 col-md-5">
                <label className="form-label fw-semibold">Search</label>
                <div className="input-group">
                  <span className="input-group-text">
                    🔍
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by title or description..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                </div>
              </div>

              {/* Category filter */}
              <div className="col-6 col-md-2">
                <label className="form-label fw-semibold">Category</label>
                <select
                  className="form-select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>All</option>
                  <option>Project</option>
                  <option>Training</option>
                  <option>Template</option>
                  <option>Documentation</option>
                </select>
              </div>

              {/* Status filter */}
              <div className="col-6 col-md-2">
                <label className="form-label fw-semibold">Status</label>
                <select
                  className="form-select"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option>All</option>
                  <option>Active</option>
                  <option>Draft</option>
                  <option>Archived</option>
                </select>
              </div>

              {/* Sort by */}
              <div className="col-12 col-md-3">
                <label className="form-label fw-semibold">Sort by</label>
                <select
                  className="form-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="recent">Most Recent</option>
                  <option value="title">Title (A–Z)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results summary */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <p className="mb-0 text-muted small">
            Showing <strong>{filteredResults.length}</strong> result
            {filteredResults.length !== 1 ? "s" : ""}.
          </p>
          {searchText && (
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm"
              onClick={() => {
                setSearchText("");
                setCategory("All");
                setStatus("All");
                setSortBy("recent");
              }}
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Results list */}
        {filteredResults.length === 0 ? (
          <div className="text-center py-5 text-muted">
            <h2 className="h5 mb-2">No results found</h2>
            <p className="mb-0">
              Try changing the search text or removing some filters.
            </p>
          </div>
        ) : (
          <div className="row g-3">
            {filteredResults.map((item) => (
              <div className="col-12" key={item.id}>
                <div className="card shadow-sm border-0">
                  <div className="card-body d-flex flex-column flex-md-row justify-content-between">
                    <div>
                      <h2 className="h5 mb-1">{item.title}</h2>
                      <p className="mb-2 text-muted small">
                        {item.description}
                      </p>
                      <div className="d-flex flex-wrap gap-2">
                        <span className="badge bg-secondary">
                          {item.category}
                        </span>
                        <span
                          className={
                            "badge " +
                            (item.status === "Active"
                              ? "bg-success"
                              : item.status === "Draft"
                              ? "bg-warning text-dark"
                              : "bg-dark")
                          }
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 mt-md-0 text-md-end">
                      <div className="text-muted small">
                        Last updated:{" "}
                        {new Date(item.updatedAt).toLocaleDateString()}
                      </div>
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-sm mt-2"
                      >
                        View details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
