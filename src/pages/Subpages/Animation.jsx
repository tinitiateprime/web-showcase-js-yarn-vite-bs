// src/AnimationPage.jsx
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AnimationPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  // Simulated progress animation
  useEffect(() => {
    if (!isProcessing) return;

    setShowSuccess(false);
    setProgress(0);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsProcessing(false);
          setShowSuccess(true);
          return 100;
        }
        return prev + 5;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [isProcessing]);

  const handleRunDemo = () => {
    if (isProcessing) return;
    setIsProcessing(true);
  };

  return (
    <div className="min-vh-100 bg-light fade-in-page">
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            TINITIATE UI Animations
          </a>
          <span className="navbar-text text-muted small">
            Subtle micro-interactions in React + Bootstrap
          </span>
        </div>
      </nav>

      {/* Page Content */}
      <div className="container py-4">
        {/* Hero section */}
        <div className="row align-items-center gy-4 mb-4">
          <div className="col-lg-7">
            <h1 className="h3 mb-2">
              Animation & Micro-Interactions Demo
            </h1>
            <p className="text-muted mb-3">
              This page showcases smooth fade-ins, hover effects, and a
              controlled progress animation to make your React + Bootstrap UI
              feel more modern and responsive.
            </p>
            <div className="d-flex flex-wrap gap-2 align-items-center">
              <button
                type="button"
                className="btn btn-primary pulse-btn"
                onClick={handleRunDemo}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Running animation...
                  </>
                ) : (
                  <>▶ Run Demo Animation</>
                )}
              </button>
              <span className="text-muted small">
                Watch the progress bar and status card animate.
              </span>
            </div>
          </div>

          {/* Animated info card */}
          <div className="col-lg-5">
            <div className="card shadow-sm border-0 animate-card">
              <div className="card-body">
                <h2 className="h6 mb-2">Why animations?</h2>
                <p className="small text-muted mb-2">
                  Micro-interactions guide the user, provide feedback, and
                  reduce the feeling of “waiting” during operations.
                </p>
                <ul className="small mb-0 ps-3">
                  <li>Highlight important actions</li>
                  <li>Show loading and success states clearly</li>
                  <li>Add polish without being distracting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Progress + status */}
        <div className="row gy-4">
          {/* Progress panel */}
          <div className="col-lg-7">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <div className="d-flex justify-content-between mb-2">
                  <h2 className="h6 mb-0">Demo Task Progress</h2>
                  <span className="small text-muted">
                    {isProcessing
                      ? "Processing..."
                      : showSuccess
                      ? "Completed"
                      : "Idle"}
                  </span>
                </div>

                <div className="progress mb-2 animation-progress">
                  <div
                    className={
                      "progress-bar progress-bar-striped progress-bar-animated " +
                      (progress === 100 ? "bg-success" : "bg-primary")
                    }
                    role="progressbar"
                    style={{ width: `${progress}%` }}
                    aria-valuenow={progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {progress}%
                  </div>
                </div>

                <p className="small text-muted mb-0">
                  This uses a simple state-driven loop to increment progress and
                  Bootstrap&apos;s built-in progress bar animation.
                </p>
              </div>
            </div>
          </div>

          {/* Animated feature cards */}
          <div className="col-lg-5">
            <div className="row g-3">
              <div className="col-12">
                <div className="card border-0 shadow-sm animate-card">
                  <div className="card-body">
                    <h2 className="h6 mb-1">Hover feedback</h2>
                    <p className="small text-muted mb-0">
                      Cards gently lift and scale on hover, giving users a
                      clear visual indication that they are interactive.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="card border-0 shadow-sm animate-card">
                  <div className="card-body">
                    <h2 className="h6 mb-1">Entrance animation</h2>
                    <p className="small text-muted mb-0">
                      The whole page content fades in from the bottom using a
                      CSS <code>@keyframes</code> animation applied to the root
                      container.
                    </p>
                  </div>
                </div>
              </div>

              {showSuccess && (
                <div className="col-12">
                  <div className="alert alert-success mb-0 fade-in-soft">
                    ✅ Demo completed successfully! This alert also uses a
                    subtle fade-in animation.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-muted small mt-4 mb-0 text-center">
          Use these patterns in real modules like &quot;Submit payroll&quot;,
          &quot;Run report&quot;, or &quot;Generate training plan&quot; to make
          your app feel more alive.
        </p>
      </div>
    </div>
  );
}
