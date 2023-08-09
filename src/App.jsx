import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Layout from './components/Layout';
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
          {/* <Layout> */}
          <center-l>
            <Routes>
              <Route path="/" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </center-l>
          {/* </Layout> */}
          <Footer />
        </cover-l>
      </Router>
  );
}

export default App;
