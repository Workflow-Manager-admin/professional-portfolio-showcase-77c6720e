import React from 'react';

// PUBLIC_INTERFACE
const About = () => {
  /**
   * About section component displaying personal information and journey
   */
  return (
    <section className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <h3>My Story</h3>
              <p>
                I'm a passionate frontend developer with over 5 years of experience creating 
                digital experiences that make a difference. My journey in tech started with 
                curiosity about how websites work, and it has evolved into a deep love for 
                crafting beautiful, functional applications.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or hiking in the beautiful landscapes around San Francisco.
              </p>
            </div>
            
            <div className="about-card">
              <h3>What I Do</h3>
              <ul className="about-list">
                <li>🎨 Frontend Development</li>
                <li>🎯 UI/UX Design</li>
                <li>📱 Responsive Web Design</li>
                <li>⚡ Performance Optimization</li>
                <li>🔧 Technical Consultation</li>
                <li>🌱 Mentoring & Teaching</li>
              </ul>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">30+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Cups of Coffee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
