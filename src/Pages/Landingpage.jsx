import React from "react";
import Navbar from "../Components/Navbar";
import Frontend from "./Frontend/Frontend";
import Header from "./Header/Header";
import About from "./About/About";
import Design from "./Design/Design";
import Fullstack from "./Fullstack/Fullstack";
import Work from "./Work";
import Certificate from "./Certificate";
import Contact from "./Contact";
import Footer from "../Components/Footer";

const Landingpage = () => {
  return (
    // Layout Utama
    <div className="w-full flex flex-col bg-black h-fit overflow-hidden font-manrope">
      {/* Navbar */}
      <Navbar />
      {/* Header */}
      <Header />
      {/* About */}
      <About />
      {/* Project Front End */}
      <Frontend />
      {/* Project Design & UI */}
      <Design />
      {/* Fullstack */}
      <Fullstack />
      {/* Work Experience */}
      <Work />
      {/* Certificate */}
      <Certificate />
      {/* Contact */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landingpage;
