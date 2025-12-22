// src/FormPage.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function FormPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    experience: "",
    preferredMode: "",
    startMonth: "",
    notes: "",
    agree: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple required-field check (frontend only)
    if (!form.fullName || !form.email || !form.program || !form.agree) {
      alert("Please fill the required fields and accept the terms.");
      setSubmitted(false);
      return;
    }

    // In real app: send to API here
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  return (
    <div className="min-vh-100 bg-light">
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            TINITIATE Enquiry
          </a>
          <span className="navbar-text text-muted small">
            Professional training enquiry form
          </span>
        </div>
      </nav>

      {/* Page content */}
      <div className="container py-4">
        {/* Header */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8">
            <h1 className="h3 mb-2">Training Program Enquiry</h1>
            <p className="text-muted mb-0">
              Share a few details and our team will contact you with batch
              timings, syllabus, and fees.
            </p>
          </div>
        </div>

        {/* Success message */}
        {submitted && (
          <div className="row justify-content-center mb-3">
            <div className="col-lg-8">
              <div className="alert alert-success mb-0" role="alert">
                ✅ Thank you, <strong>{form.fullName}</strong>! Your enquiry has
                been submitted. We will reach out to you shortly.
              </div>
            </div>
          </div>
        )}

        {/* Form Card */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <h2 className="h5 mb-3">Your details</h2>
                <form onSubmit={handleSubmit} noValidate>
                  {/* Name + Email */}
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="fullName"
                        placeholder="Enter your full name"
                        value={form.fullName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="name@example.com"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="row g-3 mt-1">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        placeholder="+91 9XXXXXXXXX"
                        value={form.phone}
                        onChange={handleChange}
                      />
                      <div className="form-text">
                        Optional, but helps us reach you faster via WhatsApp or
                        call.
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <h2 className="h5 mb-3">Program preferences</h2>

                  {/* Program + Mode */}
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Program Interested In{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select"
                        name="program"
                        value={form.program}
                        onChange={handleChange}
                      >
                        <option value="">Select a program</option>
                        <option value="java-fullstack">
                          Java Full-Stack Developer
                        </option>
                        <option value="python-data">
                          Python Data Engineering
                        </option>
                        <option value="powerbi-sql">
                          Power BI & SQL Reporting
                        </option>
                        <option value="aws-cloud">
                          AWS Cloud Fundamentals
                        </option>
                        <option value="other">Other / Not sure</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Preferred Mode
                      </label>
                      <select
                        className="form-select"
                        name="preferredMode"
                        value={form.preferredMode}
                        onChange={handleChange}
                      >
                        <option value="">Select mode</option>
                        <option value="online-live">Online – Live</option>
                        <option value="online-self">
                          Online – Self-paced + Doubt Support
                        </option>
                        <option value="classroom">
                          Classroom (Onsite / Campus)
                        </option>
                        <option value="no-preference">No preference</option>
                      </select>
                    </div>
                  </div>

                  {/* Experience level */}
                  <div className="mt-3">
                    <label className="form-label fw-semibold">
                      Your Experience Level
                    </label>
                    <div className="d-flex flex-wrap gap-3">
                      {["Student", "Fresher", "Working Professional"].map(
                        (label) => {
                          const value = label.toLowerCase().replace(" ", "-");
                          return (
                            <div className="form-check" key={value}>
                              <input
                                className="form-check-input"
                                type="radio"
                                name="experience"
                                id={`exp-${value}`}
                                value={value}
                                checked={form.experience === value}
                                onChange={handleChange}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`exp-${value}`}
                              >
                                {label}
                              </label>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>

                  {/* Start month */}
                  <div className="mt-3">
                    <label className="form-label fw-semibold">
                      Tentative Start Month
                    </label>
                    <input
                      type="month"
                      className="form-control"
                      name="startMonth"
                      value={form.startMonth}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Notes */}
                  <div className="mt-3">
                    <label className="form-label fw-semibold">
                      Additional Notes / Questions
                    </label>
                    <textarea
                      className="form-control"
                      rows="4"
                      name="notes"
                      placeholder="Share your goals, timing preference, or any specific questions..."
                      value={form.notes}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Terms */}
                  <div className="form-check mt-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="agree"
                      name="agree"
                      checked={form.agree}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="agree">
                      I agree to be contacted by TINITIATE over email/phone for
                      this enquiry. <span className="text-danger">*</span>
                    </label>
                  </div>

                  {/* Submit */}
                  <div className="d-flex justify-content-end mt-4">
                    <button type="submit" className="btn btn-primary px-4">
                      Submit Enquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Small footer note */}
            <p className="text-muted small mt-3 mb-0 text-center">
              We respect your privacy. Your details are used only for counselling
              and will not be shared with third parties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
