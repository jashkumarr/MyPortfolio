import React from 'react';
import { INTERNSHIPS } from '../constants/internships';
import SectionTitle from './SectionTitle';

const InternshipsSection: React.FC = () => {
  return (
    <section id="internships" className="min-h-screen flex flex-col justify-center items-center py-16 md:py-20">
      <SectionTitle title="Internships" subtitle="My professional experience" />
      
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mt-8 w-full max-w-5xl px-4">
        {INTERNSHIPS.map((internship) => (
          <div 
            key={internship.company} 
            className="reveal-on-scroll internship-card-container md:flex-1"
          >
            <div className="internship-card-content flex flex-col p-6 h-full">
              <div className="flex items-start gap-4 mb-3">
                <div className="text-3xl text-cyan-400 pt-1">
                  <i className={internship.icon}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{internship.title}</h3>
                  <p className="font-semibold text-slate-300">{internship.company}</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-4 flex-grow">{internship.description}</p>
              <div className="flex flex-wrap gap-2">
                {internship.techStack.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-sm rounded-full">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InternshipsSection;