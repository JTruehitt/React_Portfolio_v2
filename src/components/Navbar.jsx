import React from 'react';
import { Link } from 'react-router-dom';
import { Cluster } from '../utils/LayoutComponents/layout.js';

const Navbar = () => {
  return (
    <nav>
      <cluster-l space="1rem" justify="flex-end">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </cluster-l>
    </nav>
  );
};

export default Navbar;
