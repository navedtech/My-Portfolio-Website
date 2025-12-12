import React from 'react';

const About = () => {
  return (
    <section id="about" className="section section-about mt-5">
      <div className="container-narrow">
        <div className="row align-items-center g-4">
          <div className="col-lg-6 reveal">
            <h2>About <span className="accent">me</span></h2>
            <p className="small-muted">
              I'm a front-end developer based in Uttar Pradesh, India.I enjoy learning new technologies and improving my skills. Currently, I'm focused on mastering the MERN stack to build full-stack applications.
            </p>

            <ul className="about-list">
              <li><i className="bi bi-check-circle-fill me-2 accent"></i> Responsive & mobile-first layouts</li>
              <li><i className="bi bi-check-circle-fill me-2 accent"></i> Clean, maintainable JS and CSS</li>
              <li><i className="bi bi-check-circle-fill me-2 accent"></i> Performance & accessibility focused</li>
            </ul>

            <div className="mt-4">
              <a href="#projects" className="btn btn-outline-light m-2">View projects</a>
              <a href="https://drive.google.com/file/d/1OuCYYcVDDOj9cn0gCvkq_1KkeBnpw1qr/view?usp=sharing" className="btn btn-accent m-2">Download CV</a>
            </div>
          </div>

          <div className="col-lg-6 reveal">
            <div className="card-glass p-4">
              <h5 className="mb-3">Quick contact</h5>
              <div className="small-muted">Email</div>
              <div className="fw-medium mb-2">getnavedkhan01@gmail.com</div>
              <div className="small-muted">Location</div>
              <div className="fw-medium">Sultanpur, India</div>

              <div className="mt-3">
                <a className="social m-2" href="https://github.com/navedtech" aria-label="GitHub"><i className="bi bi-github"></i></a>
                <a className="social m-2" href="https://www.linkedin.com/in/naved-khan-57aa00287" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                <a className="social m-2" href="#" aria-label="Twitter"><i className="bi bi-twitter"></i></a>
                <a className="social m-2" href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;