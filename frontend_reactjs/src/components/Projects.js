import React, { useState } from 'react';

// PUBLIC_INTERFACE
const Projects = () => {
  /**
   * Projects section component showcasing portfolio work
   */
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A modern e-commerce solution with React, Node.js, and MongoDB',
      image: '🛒',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      image: '📋',
      category: 'web',
      technologies: ['React', 'Firebase', 'Material-UI'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with location-based forecasts',
      image: '🌤️',
      category: 'mobile',
      technologies: ['React Native', 'OpenWeather API'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Custom portfolio website with creative animations',
      image: '💼',
      category: 'web',
      technologies: ['React', 'CSS3', 'GSAP'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management',
      image: '📊',
      category: 'web',
      technologies: ['React', 'D3.js', 'Express'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Mobile app for tracking workouts and nutrition',
      image: '💪',
      category: 'mobile',
      technologies: ['React Native', 'SQLite'],
      liveUrl: '#',
      codeUrl: '#'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>
        
        <div className="project-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <span className="project-icon">{project.image}</span>
                <div className="project-overlay">
                  <div className="project-actions">
                    <a href={project.liveUrl} className="project-btn">
                      Live Demo
                    </a>
                    <a href={project.codeUrl} className="project-btn">
                      View Code
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
