import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cluster } from '../utils/LayoutComponents/layout.js';

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <nav>
      <cluster-l role='list' space="1rem" justify="flex-end">
        <li className={currentPage === 'home' ? 'active' : ''}>
          <Link to="/" onClick={() => setCurrentPage('home')}>Home</Link>
        </li>
        <li className={currentPage === 'about' ? 'active' : ''}>
          <Link to="/about" onClick={() => setCurrentPage('about')}>About</Link>
        </li>
        <li className={currentPage === 'projects' ? 'active' : ''}>
          <Link to="/projects" onClick={() => setCurrentPage('projects')}>Projects</Link>
        </li>
        <li className={currentPage === 'contact' ? 'active' : ''}>
          <Link to="/contact" onClick={() => setCurrentPage('contact')}>Contact</Link>
        </li>
      </cluster-l>
    </nav>
  );
};

export default Navbar;
