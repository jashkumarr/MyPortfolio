import React, { useEffect, useRef } from 'react';
import SectionTitle from './SectionTitle';
import { EDUCATION } from '../constants/education';

const EducationSection: React.FC = () => {
  const itemsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const currentItems = itemsRef.current.filter((item): item is HTMLElement => item !== null);
    currentItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      currentItems.forEach((item) => {
        if(item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="education" className="min-h-screen flex flex-col justify-center py-16 md:py-20 overflow-x-hidden">
      <SectionTitle title="Education" subtitle="My academic background" />
      <div className="pro-timeline-container">
        {EDUCATION.map((edu, index) => (
          <article
            key={index}
            ref={(el) => { itemsRef.current[index] = el; }}
            className="pro-timeline-item"
            style={{ '--stagger-index': index } as React.CSSProperties}
          >
            <div className="pro-timeline-node" aria-hidden="true">
              <span className="text-xl">{edu.icon}</span>
            </div>
            <div className="pro-timeline-card">
              <p className="text-cyan-400 font-semibold mb-2 text-sm sm:text-base">{edu.year}</p>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{edu.degree}</h3>
              <p className="text-slate-300 mb-2 text-sm sm:text-base">
                {edu.institution}, {edu.location}
              </p>
              <p className="font-medium text-slate-200 text-sm sm:text-base">{edu.grade}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;