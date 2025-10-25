// Testimonials.jsx
import React from "react"; // Make sure the file name matches exactly

const testimonials = [
  {
    name: "Michael Johnson",
    role: "Homeowner",
    image: "Image (6).png",
    rating: 5,
    text: "The team at Archastu exceeded all our expectations. They built our dream home on time and within budget. The attention to detail was impressive, and they were always responsive to our questions and concerns.",
  },
  {
    name: "Sarah Williams",
    role: "Business Owner",
    image: "Image (7).png",
    rating: 5,
    text: "We hired Archastu for our office renovation project, and we couldn’t be happier with the results. Their team was professional, efficient, and kept disruption to our business operations minimal.",
  },
  {
    name: "David Thompson",
    role: "Real Estate Developer",
    image: "Image (8).png",
    rating: 4,
    text: "I've worked with many construction companies over the years, and Archastu stands out for their quality, reliability, and integrity. They're my go-to contractor for all development projects.",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <p className="subtitle">
        Don't just take our word for it. Hear from our satisfied clients about their experience working with us.
      </p>

      <div className="testimonials-container">
        {testimonials.map((testimonial, idx) => (
          <div className="testimonial-card" key={idx}>
            <div className="stars">
              {Array.from({ length: 5 }, (_, i) => (
                <i
                  key={i}
                  className={`bi ${i < testimonial.rating ? "bi-star-fill" : "bi-star"}`}
                ></i>
              ))}
            </div>
            <p>{testimonial.text}</p>
            <div className="client-info">
              <img src={testimonial.image} alt={testimonial.name} />
              <div>
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
