import React, { useState } from 'react';

// PUBLIC_INTERFACE
const Skills = () => {
  /**
   * Skills section component displaying technical skills and proficiency
   */
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'JavaScript', level: 85, icon: '🟨' },
        { name: 'TypeScript', level: 80, icon: '🔷' },
        { name: 'CSS3', level: 90, icon: '🎨' },
        { name: 'HTML5', level: 95, icon: '🌐' },
        { name: 'Vue.js', level: 75, icon: '💚' }
      ]
    },
    backend: {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 80, icon: '💚' },
        { name: 'Express', level: 75, icon: '🚀' },
        { name: 'MongoDB', level: 70, icon: '🍃' },
        { name: 'PostgreSQL', level: 65, icon: '🐘' },
        { name: 'REST APIs', level: 85, icon: '🔗' },
        { name: 'GraphQL', level: 60, icon: '🎯' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 85, icon: '🔀' },
        { name: 'Docker', level: 70, icon: '🐳' },
        { name: 'Webpack', level: 75, icon: '📦' },
        { name: 'Jest', level: 80, icon: '🧪' },
        { name: 'Figma', level: 85, icon: '🎨' },
        { name: 'AWS', level: 65, icon: '☁️' }
      ]
    }
  };

  return (
    <section className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>
        
        <div className="skills-content">
          <div className="skill-categories">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                className={`category-btn ${activeCategory === key ? 'active' : ''}`}
                onClick={() => setActiveCategory(key)}
              >
                {category.title}
              </button>
            ))}
          </div>
          
          <div className="skills-grid">
            {skillCategories[activeCategory].skills.map(skill => (
              <div key={skill.name} className="skill-card">
                <div className="skill-header">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <h4 className="skill-name">{skill.name}</h4>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                </div>
                
                <div className="skill-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
