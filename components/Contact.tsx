"use client";

import React, { useState } from 'react';
import Reveal from './Reveal';
import { contactItems } from '@/lib/data';

export default function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [reqName, setReqName] = useState('');
  const [reqEmail, setReqEmail] = useState('');
  const [reqMsg, setReqMsg] = useState('');
  const ownerEmail = contactItems.find((i) => i.label === 'email')?.value || '';

  return (
    <section id="contact">
      <div className="endpoint-tag">
        <span className="method post">POST</span>
        <span className="route">/contact</span>
        <span className="status">ready</span>
      </div>
      <div className="section-head">
        <Reveal>
          <h2 className="title"><span className="hash">#</span>Contact</h2>
        </Reveal>
      </div>

      <Reveal className="contact-panel">
        <div className="contact-top">
          <p>
            Open to backend-heavy and full-stack roles where APIs, data, and reliability actually matter. Reach out
            directly — no forms, no gatekeeping.
          </p>
        </div>
        <div className="contact-grid">
          {/* Phone is not stored in the repo — always show a protected phone card */}
          <div className="contact-item phone-card">
            <span className="ci-label">phone</span>
            <span className="ci-value">Hidden — available by request</span>
            <div className="ci-actions">
              {!showForm && (
                <button className="request-phone btn btn-ghost" onClick={() => setShowForm(true)}>
                  Request phone
                </button>
              )}

              {showForm && (
                <form
                  className="phone-request-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const subject = encodeURIComponent('Request for phone number');
                    const body = encodeURIComponent(
                      `Name: ${reqName}\nEmail: ${reqEmail}\n\nMessage:\n${reqMsg}\n\nRequested from: ${typeof window !== 'undefined' ? window.location.href : ''}`
                    );
                    window.location.href = `mailto:${ownerEmail}?subject=${subject}&body=${body}`;
                    setShowForm(false);
                    setReqName('');
                    setReqEmail('');
                    setReqMsg('');
                  }}
                >
                  <input
                    type="text"
                    placeholder="Your name"
                    value={reqName}
                    onChange={(e) => setReqName(e.target.value)}
                    className="form-input"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    required
                    value={reqEmail}
                    onChange={(e) => setReqEmail(e.target.value)}
                    className="form-input"
                  />
                  <textarea
                    placeholder="Message (optional)"
                    value={reqMsg}
                    onChange={(e) => setReqMsg(e.target.value)}
                    className="form-input"
                  />
                  <div className="form-actions">
                    <button type="submit" className="btn btn-primary">Send request</button>
                    <button type="button" className="btn btn-ghost" onClick={() => setShowForm(false)}>
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {contactItems.map((item) =>
            item.href ? (
              <a
                className="contact-item"
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span className="ci-label">{item.label}</span>
                <span className="ci-value">{item.value}</span>
              </a>
            ) : (
              <div className="contact-item" key={item.label}>
                <span className="ci-label">{item.label}</span>
                <span className="ci-value">{item.value}</span>
              </div>
            )
          )}
        </div>
      </Reveal>
    </section>
  );
}
