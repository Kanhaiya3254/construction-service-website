// ContactForm.jsx
import React from "react";

export default function ContactForm() {
  return (
    <div className="contact-container">
      {/* LEFT SIDE - FORM */}
      <div className="contact-form">
        <div className="contact-header">
          <h2>Send Us a Message</h2>
        </div>

        <div className="form-group">
          <div className="input-field">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" />
          </div>

          <div className="input-field">
            <label>Email Address</label>
            <input type="email" placeholder="john@example.com" />
          </div>
        </div>

        <div className="input-field">
          <label>Phone Number</label>
          <input type="tel" placeholder="(123) 456-7890" />
        </div>

        <div className="input-field">
          <label>Project Type</label>
          <select>
            <option>Select Project Type</option>
          </select>
        </div>

        <div className="input-field">
          <label>Message (Optional)</label>
          <textarea placeholder="Tell us about your project..."></textarea>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </div>

      {/* RIGHT SIDE */}
      <div className="contact-right">
        {/* Contact Information Card */}
        <div className="contact-info-card">
          <h2>Contact Information</h2>
          <div className="info-item">
            <div className="icon-circle"><i className="bi bi-geo-alt"></i></div>
            <div>
              <h4>Our Office</h4>
              <p>123 Construction Ave, Building City, ST 12345</p>
            </div>
          </div>
          <div className="info-item">
            <div className="icon-circle"><i className="bi bi-telephone"></i></div>
            <div>
              <h4>Phone</h4>
              <p>(123) 456-7890</p>
            </div>
          </div>
          <div className="info-item">
            <div className="icon-circle"><i className="bi bi-envelope"></i></div>
            <div>
              <h4>Email</h4>
              <p>info@archastu.com</p>
            </div>
          </div>
          <div className="info-item">
            <div className="icon-circle"><i className="bi bi-stopwatch"></i></div>
            <div>
              <h4>Working Hours</h4>
              <p>Mon-Fri: 8:00 AM - 5:00 PM<br/>Sat: 9:00 AM - 1:00 PM</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Card */}
        <div className="why-card">
          <h2>Why Choose Us?</h2>
          <ul>
            <li><i className="bi bi-check-circle"></i> 25+ years of experience</li>
            <li><i className="bi bi-check-circle"></i> Licensed & insured professionals</li>
            <li><i className="bi bi-check-circle"></i> Transparent pricing</li>
            <li><i className="bi bi-check-circle"></i> 5-year workmanship warranty</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
