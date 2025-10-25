import React from "react";
import "./ConstructionPage.css";

export default function ConstructionPage() {
  return (
    <div className="construction-page">
      <video autoPlay muted loop className="bg-video">
        <source src="video.mp4" type="video/mp4" />
      </video>

      <div className="overlay">
        {/* Left side content */}
        <div className="left-content">
         <div className="badges">
  <div className="badge-image">
    <img src="Vector 3.png" alt="Affordable" />
    <p>Affordable</p>
  </div>
  <div className="badge-image">
    <img src="Vector 3.png" alt="Accurate" />
    <p>Accurate</p>
  </div>
  <div className="badge-image">
    <img src="Vector 3.png" alt="Reliable" />
    <p>Reliable</p>
  </div>
</div>

          <h2 className="headline">Know the Price Before You Build</h2>
        </div>

        {/* Right side form */}
        <div className="form-container">
          <h2>Enter your details</h2>
          <form className="estimate-form">
            <input type="text" placeholder="Enter your full name" required />
            <input type="text" placeholder="Enter your number" required />
            <input type="text" placeholder="Enter area in Sqft" required />
            <select required>
              <option value="">No. of floors</option>
              <option>1</option>
              <option>2</option>
              
            </select>
            <select required>
              <option value="">Basement</option>
              <option>Yes</option>
              <option>No</option>
            </select>
            <select required>
              <option value="">Modern concept</option>
              <option>Yes</option>
              <option>No</option>
            </select>
            <button type="submit">Get estimate</button>
          </form>
        </div>
      </div>
    </div>
  );
}
