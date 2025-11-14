
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect for scroll-based background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect for IntersectionObserver and hash management
  useEffect(() => {
    // Set initial active link from URL hash if present
    const currentHash = window.location.hash.replace('#', '');
    if (currentHash) {
      setActiveLink(currentHash);
    }
    
    const sections = document.querySelectorAll('section[id]');
    const sectionVisibility = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionVisibility.set(entry.target.id, entry.intersectionRatio);
        });
        
        let mostVisibleId = '';
        let maxRatio = 0;
        
        sectionVisibility.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisibleId = id;
          }
        });
        
        if (mostVisibleId) {
            setActiveLink(mostVisibleId);
        }
      },
      {
        // Create a threshold array from 0.0 to 1.0.
        // This makes the observer fire for every percentage point of visibility change,
        // allowing us to accurately determine which section is most visible.
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    sections.forEach((section) => {
      sectionVisibility.set(section.id, 0);
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#internships', label: 'Internships' },
    { href: '#projects', label: 'Projects' },
    { href: '#interests', label: 'Interests' },
    { href: '#contact', label: 'Contact' },
  ];
  
  const resumeLink = { href: 'https://drive.google.com/file/d/1VU-FymKy38KZne3UNQJl_4A207jEPgdU/view?usp=sharing', label: 'Resume', isButton: true };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.substring(1);
    const element = document.getElementById(sectionId);
    
    if (element) {
      const headerOffset = 100; // From CSS scroll-margin-top
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveLink(sectionId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/70 backdrop-blur-xl shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 md:px-12 py-4 flex justify-between items-center">
        <a 
          href="#about"
          onClick={(e) => handleLinkClick(e, '#about')}
          className="text-2xl sm:text-3xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer">
          PORTFOLIO
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`nav-link-pro font-semibold tracking-wider uppercase ${
                activeLink === link.href.substring(1) ? 'active' : ''
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={resumeLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-semibold text-white bg-cyan-600 rounded-md hover:bg-cyan-700 transition-colors duration-300 flex items-center gap-2"
          >
            <i className="fa-solid fa-download"></i>
            {resumeLink.label}
          </a>
        </nav>
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-slate-300"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-180' : ''}`}></i>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav id="mobile-menu" className="md:hidden bg-black/80 backdrop-blur-sm pb-4">
          <ul className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    handleLinkClick(e, link.href);
                    setIsMenuOpen(false);
                  }}
                  className={`block py-2 transition-colors duration-300 text-lg ${
                    activeLink === link.href.substring(1) ? 'text-cyan-300 font-bold' : 'text-slate-300 hover:text-cyan-300'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={resumeLink.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center gap-2 mt-2 py-2 px-6 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition-colors duration-300 text-lg"
              >
                <i className="fa-solid fa-download"></i>
                {resumeLink.label}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;