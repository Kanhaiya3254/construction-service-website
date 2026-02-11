// Hero.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css"; // Make sure this path is correct

const images = [
  "Rectangle 198.png",
  "Rectangle 199.png",
  "Rectangle 200.png",
  "Rectangle 201.png",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Automatically change slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      {/* Slideshow */}
      <div className="center-image">
        <AnimatePresence>
          <motion.img
            key={index}
            src={images[index]}
            alt={`Hero ${index + 1}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="slideshow-image"
          />
        </AnimatePresence>

        {/* Bottom Cards */}
        <div className="bottom-cards">
          <div className="card">
            <h3>Construction</h3>
            <p>
              Build your dream space with <br /> trusted professionals.
            </p>
            <button>Get estimate</button>
          </div>
          <div className="card">
            <h3>Interior design</h3>
            <p>
              Build your dream space with <br /> trusted professionals.
            </p>
            <button>Get Design</button>
          </div>
          <div className="card">
            <h3>Architecture</h3>
            <p>
              Build your dream space with <br /> trusted professionals.
            </p>
            <button>Show package</button>
          </div>
        </div>

        {/* Optional extra image */}
        <div className="app">
          <div className="hero">
            <img
              src="Group 3.png"
              alt="Architecture Design"
              className="hero-image"
            />
          </div>
        </div>
      </div>

      {/* Overlay Text */}
      <div className="hero-text">
        <p>
          India's First On-Demand Construction <br /> & Interior Platform
        </p>
      </div>
      <div className="text">
        <p>
          On demand construction, architecture & interior design consultancy.
          Simple <br /> fast & affordable
        </p>
      </div>

      {/* Search Section */}
      <div className="text1">
        <h3>Search for best architect</h3>
      </div>
      <div className="search-bar">
        {/* Project Location */}
        <div className="search-field">
          <img src="Frame.png" alt="location icon" />
          <input type="text" placeholder="Project location" />
        </div>

        {/* Specialist Type */}
        <div className="search-field">
          <img src="Frame.png" alt="specialist icon" />
          <select>
            <option>Type of specialist</option>
          </select>
        </div>

        {/* Search Button */}
        <button className="search-btn">Search</button>
      </div>
    </section>
  );
}
