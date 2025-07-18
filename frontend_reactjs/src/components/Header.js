import React, { useState } from 'react';

// PUBLIC_INTERFACE
const Header = ({ theme, toggleTheme, activeSection, scrollToSection }) => {
  /**
   * Header component with navigation menu and theme toggle
   * @param {string} theme - Current theme (light/dark)
   * @param {function} toggleTheme - Function to toggle theme
   * @param {string} activeSection - Currently active section
   * @param {function} scrollToSection - Function to scroll to section
   */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  // PUBLIC_INTERFACE
  const handleNavClick = (sectionId) => {
    /**
     * Handles navigation item click
     * @param {string} sectionId - The section to navigate to
     */
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2>Portfolio</h2>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              {navItems.map(item => (
                <li key={item.id} className="nav-item">
                  <button
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span className="hamburger"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
