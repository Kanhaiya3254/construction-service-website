// Services.jsx
import React from "react";
 // Make sure file name matches exactly

const Service = () => {
  return (
    <section className="service-section">
      <div className="service">
        <h1>Our Construction Services</h1>
        <p>
          We offer a comprehensive range of construction services to meet all your <br />
          building needs
        </p>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <img src="Frame (1).png" className="service-icon" alt="Residential Construction" />
          <h3>Residential Construction</h3>
          <p>
            Custom homes built to your <br /> specifications with quality <br /> materials and expert <br /> craftsmanship
          </p>
        </div>

        <div className="service-card">
          <img src="Frame (2).png" className="service-icon" alt="Commercial Projects" />
          <h3>Commercial Projects</h3>
          <p>
            Office buildings, retail spaces, <br /> and industrial facilities built on <br />
            time and within budget
          </p>
        </div>

        <div className="service-card">
          <img src="Group 8801.png" className="service-icon" alt="Renovations" />
          <h3>Renovations</h3>
          <p>
            Transform your existing space <br /> with our comprehensive <br /> renovation and
            remodeling <br /> services
          </p>
        </div>

        <div className="service-card">
          <img src="Group 8802.png" className="service-icon" alt="Interior Finishing" />
          <h3>Interior Finishing</h3>
          <p>
            Expert interior work including <br /> drywall, painting, flooring, and <br />
            custom cabinetry
          </p>
        </div>

        <div className="service-card">
          <img src="Frame (3).png" className="service-icon" alt="Site Development" />
          <h3>Site Development</h3>
          <p>
            Complete site preparation <br /> including excavation, grading, <br /> and
            infrastructure development
          </p>
        </div>

        <div className="service-card">
          <img src="Frame (4).png" className="service-icon" alt="Architectural Design" />
          <h3>Architectural Design</h3>
          <p>
            Collaborative design services to <br /> bring your vision to life with <br />
            practical, beautiful solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
