import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import Skills from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
