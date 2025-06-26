//components/ProjectCar
'use client';
import { FC } from 'react';
import { Code, Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  demo?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ title, description, technologies, image, github, demo }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-[#A0753A]/20 hover:border-[#A0753A]/50">
        <div className="h-48 bg-gradient-to-br from-[#A0753A]/20 to-gray-800 flex items-center justify-center">
            {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover" />
            ) : (
            <Code size={48} className="text-[#A0753A]" />
            )}
        </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#A0753A]/20 text-[#A0753A] rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-[#A0753A] transition-colors"
            >
              <Github size={16} />
              <span>Código</span>
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-[#A0753A] transition-colors"
            >
              <ExternalLink size={16} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
