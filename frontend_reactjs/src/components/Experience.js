import React from 'react';

// PUBLIC_INTERFACE
const Experience = () => {
  /**
   * Experience section component displaying work history and education
   */
  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern React patterns.',
      achievements: [
        'Improved application performance by 40%',
        'Led team of 5 developers',
        'Implemented CI/CD pipeline'
      ]
    },
    {
      id: 2,
      type: 'work',
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      location: 'San Francisco, CA',
      description: 'Developed responsive web applications using React and modern JavaScript frameworks.',
      achievements: [
        'Built 3 major product features',
        'Reduced bundle size by 30%',
        'Mentored 2 junior developers'
      ]
    },
    {
      id: 3,
      type: 'work',
      title: 'Junior Web Developer',
      company: 'WebAgency Pro',
      period: '2019 - 2020',
      location: 'Oakland, CA',
      description: 'Created custom websites and web applications for various clients using modern web technologies.',
      achievements: [
        'Delivered 15+ client projects',
        'Achieved 98% client satisfaction',
        'Learned React and Node.js'
      ]
    },
    {
      id: 4,
      type: 'education',
      title: 'Bachelor of Computer Science',
      company: 'UC Berkeley',
      period: '2015 - 2019',
      location: 'Berkeley, CA',
      description: 'Focused on software engineering, data structures, and algorithms.',
      achievements: [
        'Graduated Magna Cum Laude',
        'President of Computer Science Club',
        'Built award-winning capstone project'
      ]
    }
  ];

  return (
    <section className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">My professional journey</p>
        </div>
        
        <div className="timeline">
          {experiences.map(exp => (
            <div key={exp.id} className={`timeline-item ${exp.type}`}>
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <div className="timeline-meta">
                    <span className="timeline-company">{exp.company}</span>
                    <span className="timeline-period">{exp.period}</span>
                    <span className="timeline-location">{exp.location}</span>
                  </div>
                </div>
                
                <p className="timeline-description">{exp.description}</p>
                
                <ul className="timeline-achievements">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
