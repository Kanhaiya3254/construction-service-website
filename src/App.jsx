import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Booking from "./components/Booking";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ConstructionPage from "./components/ConstructionPage";
import "./App.css";

export default function App() {
  const [showConstruction, setShowConstruction] = useState(false);

  return (
    <>
      <Navbar
        onConstructionClick={() => setShowConstruction(true)}
        onLogoClick={() => setShowConstruction(false)} // 👈 clicking logo returns home
      />

      {showConstruction ? (
        <ConstructionPage />
      ) : (
        <>
          <Hero />
          <Services />
          <Booking />
          <Projects />
          <Testimonials />
          <ContactForm />
          <Footer />
        </>
      )}
    </>
  );
}
