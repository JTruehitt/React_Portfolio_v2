import React from 'react';
import { Center, Stack, Box, Cover } from '../utils/LayoutComponents/layout.js';

const Footer = () => {
  return (
    <footer>
      <center-l andText>
      <p>© {new Date().getFullYear()} Jonathan Truehitt. All rights reserved.</p>
      </center-l>
    </footer>
  );
};

export default Footer;
