import React, { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import WhatIBuild from "./components/WhatIBuild";
import Projects from "./components/Projects";
import EngineeringMindset from "./components/EngineeringMindset";
import BackendSystems from "./components/BackendSystems";
import TechStack from "./components/TechStack";
import ExperienceTimeline from "./components/ExperienceTimeline";
import RecruiterSnapshot from "./components/RecruiterSnapshot";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CommandPalette from "./components/CommandPalette";
import useScrollReveal from "./hooks/useScrollReveal";
import "./styles/global.css";

function App() {
  const [cmdOpen, setCmdOpen] = useState(false);
  useScrollReveal();

  return (
    <>
      <Nav onCommandOpen={() => setCmdOpen(true)} />
      <main>
        <Hero />
        <div className="reveal"><WhatIBuild /></div>
        <div className="reveal"><Projects /></div>
        <div className="reveal"><EngineeringMindset /></div>
        <div className="reveal"><BackendSystems /></div>
        <div className="reveal"><TechStack /></div>
        <div className="reveal"><ExperienceTimeline /></div>
        <div className="reveal"><RecruiterSnapshot /></div>
        <div className="reveal"><Contact /></div>
      </main>
      <Footer />
      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />
    </>
  );
}

export default App;
