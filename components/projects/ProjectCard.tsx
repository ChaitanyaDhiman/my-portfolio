import { ExternalLink, Github } from 'lucide-react';
import React, { ReactNode, ComponentType } from 'react';

interface ProjectCard {
  title: string;
  description: string;
  tech: string[];
  image: string;
  demo: string;
  github: string;
  compact: boolean;

}

export default function ProjectCard({ title, description, tech, image, demo, github, compact }: ProjectCard) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all overflow-hidden group">
      <div className="bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-blue-600/20 h-48 flex items-center justify-center text-6xl">
        {image}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 mb-4 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span key={t} className="px-3 py-1 bg-white/10 rounded-full text-xs">{t}</span>
          ))}
        </div>
        <div className="flex gap-4">
          {demo && (
            <a href={demo} className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm">
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          {github && (
            <a href={github} className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors text-sm">
              <Github size={16} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}