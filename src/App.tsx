import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import Services from './pages/Services';
import Contact from './pages/Contact';
import StartTransformation from './pages/StartTransformation';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/start-transformation" element={<StartTransformation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;