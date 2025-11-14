import React from 'react';
import { INTERESTS } from '../constants/interests';
import SectionTitle from './SectionTitle';

const InterestsSection: React.FC = () => {
  return (
    <section id="interests" className="min-h-screen flex flex-col justify-center items-center py-16 md:py-20">
      <SectionTitle title="Interests" subtitle="What I enjoy doing" />
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {INTERESTS.map((interest) => (
          <div
            key={interest.name}
            className="reveal-on-scroll interest-card-container w-64 h-64"
          >
            <div className="interest-card-content flex flex-col items-center justify-center text-center p-6 sm:p-8 h-full">
              <i className={`${interest.icon} text-cyan-400 text-5xl sm:text-6xl mb-4`}></i>
              <p className="font-semibold text-lg sm:text-xl text-slate-200">{interest.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InterestsSection;
