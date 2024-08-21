import React from "react";
// components
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import About from "../components/About";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Work />
      <Contact />
    </>
  );
}

export default Home;
