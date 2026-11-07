import React from 'react';

const skill = [
  {
    title: 'Frontend',
    icon: 'bi-window-stack',
    skills: [
      { name: 'HTML5', icon: 'devicon-html5-plain' },
      { name: 'CSS3', icon: 'devicon-css3-plain' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain' },
      { name: 'React.js', icon: 'devicon-react-original' },
      { name: 'Bootstrap', icon: 'devicon-bootstrap-plain' },
    ],
  },
  {
    title: 'Backend & Database',
    icon: 'bi-hdd-network',
    skills: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain' },
      { name: 'Express.js', icon: 'devicon-express-original' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
      { name: 'REST APIs', icon: 'bi bi-plug' },
    ],
  },
  {
    title: 'Languages & Tools',
    icon: 'bi-terminal',
    skills: [
      { name: 'Python', icon: 'devicon-python-plain' },
      { name: 'Java', icon: 'devicon-java-plain' },
      { name: 'DSA', icon: 'bi bi-diagram-3' },
      { name: 'Git', icon: 'devicon-git-plain' },
      { name: 'GitHub', icon: 'devicon-github-original' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section section-skills">
      <div className="container-narrow">
        <h2 className="reveal">
          Technical <span className="accent">Skills</span>
        </h2>
        <p className="small-muted reveal">
          Focused on the MERN stack and Python to build full-stack applications.
        </p>

        <div className="row g-4 mt-1">
          {skill.map((group) => (
            <div className="col-lg-4 col-md-6 reveal" key={group.title}>
              <div className="card-glass p-4 h-100 skill-card">
                <h5 className="mb-4">
                  <i className={`bi ${group.icon} me-2 accent`}></i>
                  {group.title}
                </h5>

                <div className="skill-grid">
                  {group.skills.map((skill) => (
                    <div className="skill-tile" key={skill.name}>
                      <i className={`${skill.icon} skill-icon`}></i>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card-glass p-4 mt-4 reveal d-flex flex-wrap align-items-center gap-3">
          <span className="small-muted">Currently learning</span>
          <span className="skill-pill">MERN Stack</span>
          <span className="skill-pill">Cloud Computing</span>
          <span className="skill-pill">Python Projects</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;