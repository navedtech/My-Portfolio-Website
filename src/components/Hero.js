import React from 'react';
import MyImage from '../assets/my-pic.jpg'; 

const Hero = () => {
  return (
    <header id="home" className="hero-section mt-3 position-relative overflow-hidden">
      <div className="container-narrow hero-grid">
        <div className="hero-left reveal">
          <h1 className="hero-title">
            Hi, I'm <span className="accent infinite-transition">Naved Ahmad Khan</span>
          </h1>
          <p className="lead mt-4">
            I have interested in web development, software engineering, and cloud computing. Passionate about learning new technologies and building user-friendly applications, I am seeking an opportunity to start my career as a Web Developer.
          </p>

          <div className="btn-row mt-4 d-flex gap-2">
            <a href="#projects" className="btn btn-primary btn-lg me-2">See my work</a>
            <a href="#contact" className="btn btn-outline-light btn-lg">Contact me</a>
          </div>

          <div className="hero-stats d-flex gap-4 mt-4">
            <div className="stat card-glass">
              <div className="stat-num">Bachlor of Computer Apllication</div>
              <div className="stat-label">RMLAU (2023-2026)</div>
            </div>
            <div className="stat card-glass">
              <div className="stat-num">5+</div>
              <div className="stat-label">Projects</div>
            </div>
          </div>
        </div>

        <div className="hero-right reveal">
          <div className="avatar-wrap">
            <img className="avatar" src={MyImage} alt="Your portrait" /> 
            <div className="avatar-glow"></div>
          </div>

          <div className="floating-card card-glass mt-4 w-75 mx-auto">
            <div className="d-flex align-items-center">
              <div className="me-2">
                <div className="small-muted">Learning</div>
                <div className="fw-semibold">MERN Technology</div>
              </div>
              <div className="ms-auto">
                <a href="#contact" className="btn btn-sm btn-accent">Hire me</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-bg-deco"></div>
    </header>
  );
};

export default Hero;