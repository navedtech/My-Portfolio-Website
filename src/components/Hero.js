import React, { useState, useEffect } from 'react';
import MyImage from '../assets/my-pic.jpg';

const ROLES = [
  'Web Developer',
  'MERN Stack Developer',
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

const stats = [
  { num: 'BCA', label: 'RMLAU · 2023 – 2026' },
  { num: '5+', label: 'Projects built' },
  { num: 'MERN', label: 'Currently learning' },
];

/* Typing effect: type -> pause -> delete -> next role */
const useTypewriter = (words, typeSpeed = 90, deleteSpeed = 50, pause = 1500) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let delay = deleting ? deleteSpeed : typeSpeed;

    if (!deleting && text === current) delay = pause;

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText(
          deleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
};

const Hero = () => {
  const role = useTypewriter(ROLES);

  return (
    <header
      id="home"
      className="hero-section mt-3 position-relative overflow-hidden"
    >
      <div className="container-narrow hero-grid">
        {/* Left */}
        <div className="hero-left reveal">
          <span className="hero-badge">
            <span className="hero-dot"></span> Open to work
          </span>

          <h1 className="hero-title mt-3">
            Hi, I'm{' '}
            <span className="accent infinite-transition">Naved Ahmad Khan</span>
          </h1>

          <h3 className="hero-role">
            I'm a <span className="accent">{role}</span>
            <span className="hero-cursor">|</span>
          </h3>

          <p className="lead mt-3">
            I'm interested in web development, software engineering and cloud
            computing. Passionate about learning new technologies and building
            user-friendly applications, I'm looking for an opportunity to start my
            career as a Web Developer.
          </p>

          <div className="btn-row mt-4 d-flex flex-wrap gap-2">
            <a href="#projects" className="btn btn-primary btn-lg">
              <i className="bi bi-grid me-2"></i>See my work
            </a>
            <a href="#contact" className="btn btn-outline-light btn-lg">
              <i className="bi bi-chat-dots me-2"></i>Contact me
            </a>
          </div>

          <div className="hero-socials d-flex gap-2 mt-4">
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

          <div className="hero-stats d-flex flex-wrap gap-3 mt-4">
            {stats.map((s) => (
              <div className="stat card-glass" key={s.label}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="hero-right reveal">
          <div className="avatar-wrap position-relative">
            <img className="avatar" src={MyImage} alt="Naved Ahmad Khan" />
            <div className="avatar-glow"></div>
          </div>

          <div className="floating-card card-glass mt-4 w-75 mx-auto">
            <div className="d-flex align-items-center">
              <div className="me-2">
                <div className="small-muted">Currently learning</div>
                <div className="fw-semibold">MERN Stack</div>
              </div>
              <div className="ms-auto">
                <a href="#contact" className="btn btn-sm btn-accent">
                  Hire me
                </a>
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