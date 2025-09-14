import React from "react";
import Layout from "@theme/Layout";
import "./contact.scss";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:joseph.karasek@gmail.com";
  };

  return (
    <Layout
      title="Contact"
      description="Get in touch with Joe Karasek - Technical Lead and Design Technologist"
    >
      <main className="contact">
        <div className="container margin-vert--xl">
          <div className="contact__header">
            <h1 className="contact__title">Let's Connect</h1>
            <p className="contact__subtitle">
              I'm always interested in discussing new opportunities, 
              design systems, and innovative technology solutions.
            </p>
          </div>

          <div className="contact__content">
            <div className="contact__cta-grid">
              <div className="contact__cta contact__cta--primary">
                <div className="contact__cta-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="contact__cta-title">Send an Email</h3>
                <p className="contact__cta-description">
                  Reach out directly for project inquiries, collaboration opportunities, or just to say hello.
                </p>
                <button 
                  className="contact__cta-button contact__cta-button--primary"
                  onClick={handleEmailClick}
                  aria-label="Send email to joseph.karasek@gmail.com"
                >
                  Get in Touch
                </button>
              </div>

              <div className="contact__cta contact__cta--secondary">
                <div className="contact__cta-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="contact__cta-title">Connect on LinkedIn</h3>
                <p className="contact__cta-description">
                  Follow my professional journey, see my latest work, and connect for networking opportunities.
                </p>
                <a 
                  href="https://www.linkedin.com/in/joekarasek" 
                  target="_blank" 
                  rel="noreferrer"
                  className="contact__cta-button contact__cta-button--secondary"
                  aria-label="Connect with Joe Karasek on LinkedIn"
                >
                  Visit LinkedIn
                </a>
              </div>
            </div>

            <div className="contact__additional-info">
              <div className="contact__info-section">
                <h3 className="contact__info-title">What I'm interested in</h3>
                <ul className="contact__info-list">
                  <li>Design system architecture and strategy</li>
                  <li>Front-end engineering leadership roles</li>
                  <li>Technical consulting opportunities</li>
                  <li>Speaking engagements and workshops</li>
                  <li>Open source contributions</li>
                </ul>
              </div>

              <div className="contact__info-section">
                <h3 className="contact__info-title">Response time</h3>
                <p className="contact__info-text">
                  I typically respond to emails within 24-48 hours. For urgent matters, 
                  please mention it in the subject line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Contact;
