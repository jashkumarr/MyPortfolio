
import React from 'react';
import { PROJECTS } from '../constants/projects';
import SectionTitle from './SectionTitle';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-16 md:py-20">
      <SectionTitle title="My Projects" subtitle="A selection of my work" />
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <div
            key={project.title}
            className="reveal-on-scroll bg-slate-900/40 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-800/30 shadow-lg transition-all duration-300 hover:shadow-cyan-500/20 hover:-translate-y-2 group"
          >
            <div className="relative overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-slate-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-sm rounded-full">{tag}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-grow text-center text-sm sm:text-base py-2 px-4 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition-colors duration-300">
                  <i className="fas fa-eye mr-2"></i> Live Demo
                </a>
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex-grow text-center text-sm sm:text-base py-2 px-4 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors duration-300">
                  <i className="fab fa-github mr-2"></i> View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;