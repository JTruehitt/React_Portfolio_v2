import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import { Center, Stack, Box, Cover } from './utils/LayoutComponents/layout.js';
import './main.css';
import './index.css';

function App() {
  return (
      <Router>
        <cover-l centered='center-l'>
          <Navbar />
          <center-l max="1200px">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </center-l>
          <Footer />
        </cover-l>
      </Router>
  );
}

export default App;
