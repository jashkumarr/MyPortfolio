import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2">{title}</h2>
      <p className="text-base sm:text-lg text-cyan-400 font-medium">{subtitle}</p>
      <div className="mt-4 w-24 h-1 bg-cyan-500 mx-auto rounded"></div>
    </div>
  );
};

export default SectionTitle;