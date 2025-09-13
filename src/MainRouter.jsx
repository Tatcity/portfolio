// src/MainRouter.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Services from "./components/Services";

export default function MainRouter() {
  return (
    <Routes>
      {/* Layout wraps all child pages */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
      </Route>
    </Routes>
  );
}
