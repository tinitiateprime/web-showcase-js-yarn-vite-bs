import React, { useState } from "react";
import { User, Send, MessageSquare } from "lucide-react";

const Messages = () => {
  const [selected, setSelected] = useState(1);

  const conversations = [
    {
      id: 1,
      sender: "Support",
      preview: "Hello! How can we help you today?",
      messages: [
        { text: "Hello! How can we help you today?", from: "support" },
        { text: "I have an issue with my account.", from: "me" },
      ],
    },
    {
      id: 2,
      sender: "Billing",
      preview: "Your invoice is ready.",
      messages: [
        { text: "Your invoice is ready.", from: "billing" },
        { text: "Thanks, got it.", from: "me" },
      ],
    },
    {
      id: 3,
      sender: "Security",
      preview: "New login attempt detected.",
      messages: [
        { text: "New login attempt detected.", from: "security" },
        { text: "That was me, no worries.", from: "me" },
      ],
    },
  ];

  const active = conversations.find((c) => c.id === selected);

  return (
    <div className="container-fluid py-3" style={{ minHeight: "100vh" }}>
      <div className="row shadow rounded overflow-hidden" style={{ height: "80vh" }}>
        {/* LEFT PANEL */}
        <div className="col-md-4 bg-light border-end overflow-auto">
          <div className="p-3 border-bottom d-flex align-items-center gap-2 fw-bold text-primary">
            <MessageSquare size={20} />
            Messages
          </div>
          {conversations.map((conv) => (
            <div
              key={conv.id}
              onClick={() => setSelected(conv.id)}
              className={`p-3 border-bottom d-flex gap-2 align-items-center cursor-pointer ${
                selected === conv.id ? "bg-primary text-white" : "bg-white text-dark"
              }`}
              style={{
                transition: "background 0.3s ease",
                cursor: "pointer",
              }}
            >
              <User size={20} />
              <div>
                <div className="fw-semibold">{conv.sender}</div>
                <small>{conv.preview}</small>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT PANEL */}
        <div className="col-md-8 bg-white d-flex flex-column justify-content-between">
          <div className="p-3 border-bottom fw-bold d-flex align-items-center gap-2 text-primary">
            <User size={20} />
            {active.sender}
          </div>
          <div
            className="p-3 flex-grow-1 overflow-auto"
            style={{ background: "#f8f9fa" }}
          >
            {active.messages.map((m, index) => (
              <div
                key={index}
                className={`mb-3 d-flex ${
                  m.from === "me" ? "justify-content-end" : "justify-content-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-pill ${
                    m.from === "me" ? "bg-primary text-white" : "bg-light"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-top d-flex gap-2">
            <input
              type="text"
              className="form-control"
              placeholder="Type a message..."
            />
            <button className="btn btn-primary">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
