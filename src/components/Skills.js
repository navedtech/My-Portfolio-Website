import React from 'react';
// We will handle progress bar animation in Step 5

const skillsData = [
  { name: 'HTML & CSS', progress: 75 },
  { name: 'JavaScript', progress: 60 },
  { name: 'Bootstrap / Tailwind', progress: 50 },
];

const Skills = () => {
  return (
    <section id="skills" className="section section-skills">
      <div className="container-narrow">
        <h2 className="reveal">Skills</h2>
        <div className="row g-4 mt-2">
          <div className="col-md-6 reveal">
            <div className="card-glass p-4">
              {skillsData.map((skill) => (
                <div className="skill-line mb-3" key={skill.name}>
                  <div className="skill-head d-flex justify-content-between">
                    <span>{skill.name}</span>
                    <span>{skill.progress}%</span>
                  </div>
                  <div className="progress progress-rounded">
                    {/* data-progress is used for animation logic in the custom hook */}
                    <div 
                      className="progress-bar" 
                      data-progress={skill.progress} 
                      style={{ width: '0%' }} 
                    /> 
                  </div>
                </div>
              ))}
              <div className="small-muted mt-2">Other: Git · Java · Python · DSA</div>
            </div>
          </div>

          <div className="col-md-6 reveal">
            <div className="card-glass p-4 h-100 d-flex flex-column justify-content-center">
              <h5 className="mb-3">What I building</h5>
              <p className="small-muted">Progressive web apps, accessible components, animations with CSS & Web Animations API, small frontend Tic Tak Toe game , weather app etc.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;