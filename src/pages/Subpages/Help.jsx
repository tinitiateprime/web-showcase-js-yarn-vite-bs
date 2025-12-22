import React, { useState } from 'react';

const HelpPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const faqs = [
    {
      category: 'Account',
      question: 'How can I reset my password?',
      answer: 'Click "Forgot Password" on login and follow the email instructions.',
    },
    {
      category: 'Settings',
      question: 'Where can I change my email?',
      answer: 'Visit Account > Settings > Email to update it.',
    },
    {
      category: 'Support',
      question: 'How do I contact support?',
      answer: 'Use the chat icon or email support@example.com anytime.',
    },
    {
      category: 'Billing',
      question: 'How do I update payment details?',
      answer: 'Go to Billing section under your account dashboard.',
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const pageStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #0f2027, #203a43, #2c5364)',
    padding: '50px 15px',
    color: 'white',
  };

  const glassBox = {
    background: 'rgba(255,255,255,0.05)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '20px',
    padding: '30px',
  };

  const inputStyle = {
    backgroundColor: '#222',
    color: 'white',
    border: '1px solid #555',
    borderRadius: '10px',
  };

  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Request submitted! (Fake handler)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const toggle = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <div style={pageStyle}>
      <div className="container text-white">
        <div className="mb-5 text-center">
          <h1 className="display-5"><i className="bi bi-question-circle"></i> Help Center</h1>
          <p className="text-light">Find answers or contact our support team</p>
        </div>

        <div className="row g-4">
          {/* Left: FAQs */}
          <div className="col-md-6">
            <div style={glassBox}>
              <h4 className="mb-3">Frequently Asked Questions</h4>

              <input
                className="form-control form-control-sm mb-4"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={inputStyle}
              />

              <div className="accordion" id="faqAccordion">
                {filteredFaqs.map((faq, idx) => (
                  <div className="accordion-item bg-transparent border border-white mb-3 rounded" key={idx}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${activeIndex === idx ? '' : 'collapsed'} bg-dark text-white`}
                        onClick={() => toggle(idx)}
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.08)',
                          fontWeight: '500',
                        }}
                      >
                        <i className="bi bi-info-circle me-2"></i> {faq.question}
                        <span className="badge bg-secondary ms-auto">{faq.category}</span>
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${activeIndex === idx ? 'show' : ''}`}>
                      <div className="accordion-body text-light">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Submit Request Form */}
          <div className="col-md-6">
            <div style={glassBox}>
              <h4 className="mb-4"><i className="bi bi-envelope-plus"></i> Submit a Request</h4>

              <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="form-control"
                    style={inputStyle}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="form-control"
                    style={inputStyle}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleFormChange}
                    className="form-control"
                    style={inputStyle}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    className="form-control"
                    rows={4}
                    style={inputStyle}
                    required
                  />
                </div>

                <button className="btn btn-primary w-100" type="submit">
                  <i className="bi bi-send-check-fill me-2"></i> Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Contact Links */}
        <div className="text-center mt-5">
          <p className="text-white-50">Need more help? Reach out to us:</p>
          <div className="d-flex justify-content-center gap-4 fs-4">
            <a href="mailto:support@example.com" className="text-info"><i className="bi bi-envelope-fill"></i></a>
            <a href="https://twitter.com" className="text-info"><i className="bi bi-twitter"></i></a>
            <a href="https://linkedin.com" className="text-info"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
