import React from 'react';

const projectsData = [
  {
    title: 'AI Interview platform',
    description: 'An AI-powered interview platform for conducting your interviews. Built with React, Node.js, Express, MongoDB and OpenAI API.',
    liveLink: 'https://aiinterview-owch.onrender.com/',
    sourceLink: 'https://github.com/navedtech/AiInterview',
    image: 'https://images.unsplash.com/photo-1678227547330-7b17f29fd1ff?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  },
  {
    title: 'Track Weather',
    description: 'Create a weather app with using of API in JavaScript.',
    liveLink: 'https://navedtech.github.io/Weather-App/',
    sourceLink: '#',
    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=000',
  },
  {
    title: 'E-Commerce UI',
    description: 'Product listing, filtering and UI interactions built with Bootstrap & custom CSS.',
    liveLink: '#',
    sourceLink: '#',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=000',
  },
   {
    title: 'School Fees Management System',
    description: 'School Fees Portal for managing student fees and payments. Built with React, nextJs and mongoDB.',
    liveLink: 'https://school-fees-system.vercel.app/',
    sourceLink: '#',
    image: 'https://plus.unsplash.com/premium_photo-1661575494254-dabfa7101804?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Portfolio Site (This)',
    description: 'Modern portfolio with animations, smooth scroll and theme toggle.',
    liveLink: '#',
    sourceLink: '#',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=000',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section section-projects mt-3">
      <div className="container-narrow">
        <h2 className="reveal">Projects</h2>
        <div className="row g-4 mt-3">
          {projectsData.map((project, index) => (
            <div className="col-md-6 col-lg-4 reveal" key={index}>
              <article className="project-card">
                <div className="project-media">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-body p-3">
                  <h5>{project.title}</h5>
                  <p className="small-muted">{project.description}</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <a href={project.liveLink} className="link">
                      {project.title === 'Portfolio Site (This)' ? 'Preview' : 'Live demo'}
                    </a>
                    <a href={project.sourceLink} className="link">
                      {project.title === 'Portfolio Site (This)' ? 'Code' : 'Source'}
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;