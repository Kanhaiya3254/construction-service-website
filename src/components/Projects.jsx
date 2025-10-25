// Projects.jsx
import React from "react";
 // Create a CSS file for project-specific styles

const projects = [
  {
    image: "Container (1).png",
    category: "Residential",
    title: "Modern Lakeside Villa",
    description: "Luxury 5-bedroom villa with panoramic lake views and sustainable features.",
  },
  {
    image: "Container (2).png",
    category: "Commercial",
    title: "Downtown Office Complex",
    description: "A 12-story modern office building with state-of-the-art facilities.",
  },
  {
    image: "Container (3).png",
    category: "Renovation",
    title: "Historic Home Renovation",
    description: "Complete restoration of a 100-year-old heritage home, preserving original features.",
  },
  {
    image: "Container (4).png",
    category: "Residential",
    title: "Suburban Family Home",
    description: "Custom-built 4-bedroom family home with energy-efficient design.",
  },
  {
    image: "Container (5).png",
    category: "Commercial",
    title: "Community Shopping Center",
    description: "A 25-unit retail development with modern amenities and ample parking space.",
  },
  {
    image: "Container (6).png",
    category: "Renovation",
    title: "Industrial Warehouse",
    description: "Transformation of an industrial warehouse into a modern office and creative space.",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="feature">
        <h1>Our Featured Projects</h1>
        <p>
          Take a look at some of our recent construction projects that showcase our quality and expertise
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div className="image-wrapper">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <p className={`tag ${project.category.toLowerCase()}`}>{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-link">
                View Project Details
                <svg
                  className="arrow-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all">
        <button>View All Projects</button>
      </div>
    </section>
  );
};

export default Projects;