import React, { useState } from "react";
// If you already import Bootstrap in main.jsx, you can remove this line:
import "bootstrap/dist/css/bootstrap.min.css";

const Editor = () => {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const handleClear = () => {
    setText("");
    setCopied(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error("Copy failed", e);
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="container" style={{ maxWidth: "900px" }}>
        <div className="card shadow-sm border-0">
          {/* Header */}
          <div className="card-header bg-white d-flex justify-content-between align-items-center">
            <div>
              <h2 className="h5 mb-0">✏️ Online Editor</h2>
              <small className="text-muted">
                Type your notes, snippets, or content here.
              </small>
            </div>
            <span className="badge bg-primary-subtle text-primary border border-primary-subtle">
              {text.length} chars
            </span>
          </div>

          {/* Toolbar */}
          <div className="card-body border-bottom py-2">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
              <div className="small text-muted">
                <span className="fw-semibold">Mode:</span> Plain text
              </div>
              <div className="d-flex gap-2">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  onClick={handleClear}
                  disabled={!text}
                >
                  Clear
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-primary"
                  onClick={handleCopy}
                  disabled={!text}
                >
                  {copied ? "Copied ✅" : "Copy"}
                </button>
              </div>
            </div>
          </div>

          {/* Editor area */}
          <div className="card-body p-0">
            <textarea
              className="form-control border-0 rounded-0"
              rows="12"
              placeholder="Start typing here..."
              style={{
                resize: "vertical",
                fontFamily:
                  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                fontSize: "0.9rem",
                backgroundColor: "#0b1120",
                color: "#e5e7eb",
              }}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          {/* Footer */}
          <div className="card-footer bg-white d-flex justify-content-between align-items-center">
            <small className="text-muted">
              Tip: You can reuse this editor for notes, code snippets, or
              student answers.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
