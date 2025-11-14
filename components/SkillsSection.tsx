
import React from 'react';
import { SKILLS } from '../constants/skills';
import SectionTitle from './SectionTitle';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center py-16 md:py-20">
      <SectionTitle title="My Skills" subtitle="Technologies I work with" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            className="skill-card reveal-on-scroll flex flex-col items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-sm rounded-lg border border-slate-800/30 shadow-lg"
            style={{ '--skill-color': skill.color } as React.CSSProperties}
          >
            <i className={`${skill.iconClass} text-4xl sm:text-5xl mb-3`}></i>
            <h3 className="font-semibold text-center text-slate-200">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;