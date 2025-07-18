import React, { useState, useEffect } from 'react';

// PUBLIC_INTERFACE
const Hero = ({ scrollToSection }) => {
  /**
   * Hero section component with animated introduction and call-to-action
   * @param {function} scrollToSection - Function to scroll to specific section
   */
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Frontend Developer', 'UI/UX Designer', 'Creative Problem Solver', 'Tech Enthusiast'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="greeting">Hello, I'm</span>
              <span className="name">Alex Johnson</span>
            </h1>
            
            <div className="role-container">
              <span className="role-label">I'm a </span>
              <span className="role-animated" key={currentRole}>
                {roles[currentRole]}
              </span>
            </div>
            
            <p className="hero-description">
              Passionate about creating beautiful, functional, and user-friendly digital experiences. 
              I love turning complex problems into simple, elegant solutions.
            </p>
            
            <div className="hero-actions">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="profile-card">
              <div className="profile-image">
                <div className="image-placeholder">
                  <span>👨‍💻</span>
                </div>
              </div>
              <div className="profile-info">
                <h3>Alex Johnson</h3>
                <p>Based in San Francisco</p>
                <div className="social-links">
                  <a href="#" className="social-link">💼</a>
                  <a href="#" className="social-link">🐙</a>
                  <a href="#" className="social-link">🐦</a>
                  <a href="#" className="social-link">📧</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
