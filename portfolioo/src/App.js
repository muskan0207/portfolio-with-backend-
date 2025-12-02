import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/main/Main";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/style.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* 1️⃣ First Page - Only Bitmoji */}
        <Route path="/" element={<Main />} />

        {/* 2️⃣ Home Page & Other Pages - With Navbar & Footer */}
        <Route
          path="/home"
          element={
            <>
              <Nav />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Nav />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Nav />
              <Services />
              <Footer />
            </>
          }
        />
        <Route
          path="/skills"
          element={
            <>
              <Nav />
              <Skill />
              <Footer />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <Nav />
              <Projects />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Nav />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
