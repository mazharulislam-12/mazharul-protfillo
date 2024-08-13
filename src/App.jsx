import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Banner from "./Components/Banner/Banner";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import SkillSection from "./Components/SkillSection/SkillSection";
import ProjectSection from "./Components/ProjectSection/ProjectSection";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Home Route: এখানে পুরো ওয়েবসাইটটি দেখানো হবে */}
        <Route
          path="/"
          element={
            <div>
              <Banner />
              <About />
              <SkillSection />
              <ProjectSection />
              <Contact />
            </div>
          }
        />

        {/* অন্যান্য রাউটের জন্য নির্দিষ্ট পেজ দেখাবে */}
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<SkillSection />} />
        <Route path="/project" element={<ProjectSection />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
