import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Landingpage from "./Pages/Landingpage";
import Frontend from "./Pages/Frontend/Frontend";
import About from "./Pages/About/About";
import Header from "./Pages/Header/Header";
import Design from "./Pages/Design/Design";
import Fullstack from "./Pages/Fullstack/Fullstack";
import Certificate from "./Pages/Certificate";
import Contact from "./Pages/Contact";
import Work from "./Pages/Work";
import Footer from "./Components/Footer";
import Rafaelnetwork from "./Pages/Frontend/Rafaelnetwork";
import Meshcode from "./Pages/Frontend/Meshcode";
import Ilventory from "./Pages/Frontend/Ilventory";
import Planahead from "./Pages/Frontend/Planahead";
import Danaamal from "./Pages/Frontend/Danaamal";
import Tujuhkonser from "./Pages/Design/Tujuhkonser";
import Medicineteddy from "./Pages/Design/Medicineteddy";
import Socialmedia from "./Pages/Design/Socialmedia";
import Bumem from "./Pages/Design/Bumem";
import Rukur from "./Pages/Design/Rukur";
import Maufe from "./Pages/Design/Maufe";
import Notes from "./Pages/Fullstack/Notes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/About" element={<About />} />
        <Route path="/Design" element={<Design />} />
        <Route path="/Fullstack" element={<Fullstack />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Certificate" element={<Certificate />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Footer" element={<Footer />} />
        {/* Frontend */}
        <Route path="/Frontend" element={<Frontend />} />
        <Route path="/Rafaelnetwork" element={<Rafaelnetwork />} />
        <Route path="/Meshcode" element={<Meshcode />} />
        <Route path="/Ilventory" element={<Ilventory />} />
        <Route path="/Planahead" element={<Planahead />} />
        <Route path="/Danaamal" element={<Danaamal />} />
        {/* Design */}
        <Route path="/Tujuhkonser" element={<Tujuhkonser />} />
        <Route path="/Medicineteddy" element={<Medicineteddy />} />
        <Route path="/Socialmedia" element={<Socialmedia />} />
        <Route path="/Bumem" element={<Bumem />} />
        <Route path="/Rukur" element={<Rukur />} />
        <Route path="/Maufe" element={<Maufe />} />
        {/* Fullstack */}
        <Route path="/Notes" element={<Notes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
