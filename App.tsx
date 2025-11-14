
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import InternshipsSection from './components/InternshipsSection';
import ProjectsSection from './components/ProjectsSection';
import InterestsSection from './components/InterestsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('is-visible');
              }, index * 150);
            });
            // Animate only once
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    // Cleanup observer on component unmount
    return () => sections.forEach((section) => {
      observer.unobserve(section);
    });
  }, []);


  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 md:px-12">
        <HeroSection />
        <EducationSection />
        <SkillsSection />
        <InternshipsSection />
        <ProjectsSection />
        <InterestsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
