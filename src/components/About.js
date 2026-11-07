import React from 'react';

const CV_LINK =
  'https://drive.google.com/file/d/1KExK2OdtEqZyNLjZXMuLDWXFabJaZz9Y/view?usp=drive_link';

const highlights = [
  {
    icon: 'bi-phone',
    title: 'Responsive Design',
    text: 'Mobile-first layouts that look good on every screen.',
  },
  {
    icon: 'bi-code-slash',
    title: 'Clean Code',
    text: 'Readable, maintainable JavaScript and CSS.',
  },
  {
    icon: 'bi-lightning-charge',
    title: 'Performance',
    text: 'Fast-loading pages with accessibility in mind.',
  },
  {
    icon: 'bi-layers',
    title: 'MERN Stack',
    text: 'Learning to build complete full-stack applications.',
  },
];

const socials = [
  { label: 'GitHub', icon: 'bi-github', href: 'https://github.com/navedtech' },
  {
    label: 'LinkedIn',
    icon: 'bi-linkedin',
    href: 'https://www.linkedin.com/in/naved-khan-57aa00287',
  },
  { label: 'Email', icon: 'bi-envelope-fill', href: 'mailto:getnavedkhan01@gmail.com' },
];

const About = () => {
  return (
    <section id="about" className="section section-about mt-5">
      <div className="container-narrow">
        <h2 className="reveal">
          About <span className="accent">me</span>
        </h2>

        <div className="row align-items-start g-4 mt-1">
          {/* Left: intro + highlights */}
          <div className="col-lg-7 reveal">
            <p className="about-intro">
              I'm a Web Developer from Uttar Pradesh, India. I enjoy learning new
              technologies, solving problems and turning ideas into clean, user-friendly
              applications.
            </p>
            <p className="small-muted">
              I'm currently focused on mastering the <strong>MERN stack</strong> (MongoDB,
              Express, React, Node.js) and <strong>Python</strong> to build full-stack
              applications, and I'm looking for an opportunity to start my career as a
              Web Developer.
            </p>

            <div className="row g-3 mt-2">
              {highlights.map((item) => (
                <div className="col-sm-6" key={item.title}>
                  <div className="about-highlight card-glass h-100">
                    <span className="about-icon">
                      <i className={`bi ${item.icon}`}></i>
                    </span>
                    <div>
                      <div className="fw-semibold">{item.title}</div>
                      <div className="small-muted about-highlight-text">{item.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="d-flex flex-wrap gap-2 mt-4">
              <a href="#projects" className="btn btn-outline-light">
                <i className="bi bi-grid me-2"></i>View projects
              </a>
              <a
                href={CV_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn btn-accent"
              >
                <i className="bi bi-download me-2"></i>Download CV
              </a>
            </div>
          </div>

          {/* Right: education + contact */}
          <div className="col-lg-5 reveal">
            <div className="card-glass p-4 mb-4">
              <h5 className="mb-3">
                <i className="bi bi-mortarboard-fill me-2 accent"></i>Education
              </h5>
              <div className="fw-semibold">Bachelor of Computer Application</div>
              <div className="small-muted">RMLAU · 2023 – 2026</div>
            </div>

            <div className="card-glass p-4">
              <h5 className="mb-3">
                <i className="bi bi-person-lines-fill me-2 accent"></i>Quick contact
              </h5>

              <div className="about-contact-row">
                <i className="bi bi-envelope accent"></i>
                <a href="mailto:getnavedkhan01@gmail.com" className="about-link">
                  getnavedkhan01@gmail.com
                </a>
              </div>
              <div className="about-contact-row">
                <i className="bi bi-geo-alt accent"></i>
                <span>Sultanpur, Uttar Pradesh, India</span>
              </div>

              <div className="d-flex gap-2 mt-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    className="social"
                    href={s.href}
                    aria-label={s.label}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                  >
                    <i className={`bi ${s.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;