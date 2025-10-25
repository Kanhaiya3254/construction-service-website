// Footer.jsx
import React from "react";
 // Make sure the file name matches exactly

export default function Footer() {
  return (
    <div className="site-footer">
      <div className="footer-inner">

        {/* About Section */}
        <div className="col">
          <img src="archastu.logo.png" alt="Logo" className="footer-logo" />
          <p className="about-text">
            Quality construction services with over 25 years of experience.
            Building excellence from foundation to finish.
          </p>

          <div className="social-icons">
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-twitter"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="col">
          <h4>Quick Links</h4>
          <ul>
            <li><i className="bi bi-arrow-right-short"></i><a href="#">Home</a></li>
            <li><i className="bi bi-arrow-right-short"></i><a href="#">Services</a></li>
            <li><i className="bi bi-arrow-right-short"></i><a href="#">Projects</a></li>
            <li><i className="bi bi-arrow-right-short"></i><a href="#">About Us</a></li>
            <li><i className="bi bi-arrow-right-short"></i><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="col">
          <h4>Services</h4>
          <ul>
            <li><i className="bi bi-arrow-right-short"></i>Residential Construction</li>
            <li><i className="bi bi-arrow-right-short"></i>Commercial Projects</li>
            <li><i className="bi bi-arrow-right-short"></i>Renovations</li>
            <li><i className="bi bi-arrow-right-short"></i>Interior Finishing</li>
            <li><i className="bi bi-arrow-right-short"></i>Site Development</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="col">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <i className="bi bi-geo-alt"></i>
              <span className="contact-text">
                123 Construction Ave,<br />Building City, ST 12345
              </span>
            </li>
            <li>
              <i className="bi bi-telephone-fill"></i>
              <span className="contact-text">(123) 456-7890</span>
            </li>
            <li>
              <i className="bi bi-envelope"></i>
              <span className="contact-text">info@archastu.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 Archastu Construction. All rights reserved.</p>
        <div className="bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </div>
  );
}
