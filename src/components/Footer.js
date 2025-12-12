import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamic year in React

  return (
    <footer className="footer text-center py-4 mt-5 card-glass">
      <h4 className="footer-title">Connect with me</h4>

      <div className="social-icons">
        <a href="https://github.com/navedtech" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
        <a href="https://www.linkedin.com/in/naved-khan-57aa00287" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
      </div>

      <p className="footer-text">Thank you for visiting my portfolio </p>
      <p className="footer-copy">© {currentYear} Naved — All Rights Reserved </p>
    </footer>
  );
};

export default Footer;