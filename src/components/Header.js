import React from 'react';

const Header = ({ currentTheme, toggleTheme }) => {
  // Note: Bootstrap JS (data-bs-toggle, data-bs-target) will work
  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav-glass fixed-top">
      <div className="container-fluid container-narrow">
        <a className="navbar-brand fw-bold" href="#home">NAVED PORTFOLIO</a>
        
        <button 
          
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#mainNav"
          aria-controls="mainNav" // Added accessibility attributes
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            <li className="nav-item ms-lg-3">
              {/* Theme toggle logic will be added in Step 5 */}
              <button onClick={toggleTheme} className="btn btn-sm btn-outline-light">
                {currentTheme === 'light' ? (
                        <i className="bi bi-moon-stars-fill"></i> // Dark mode icon
                    ) : (
                        <i className="bi bi-brightness-high-fill"></i> // Light mode icon
                    )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;