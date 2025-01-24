import React from 'react';
import { Github, Link } from 'lucide-react';

const ProjectCard = ({ 
  title = "New Project",
  description = "Project description here",
  image = "https://via.placeholder.com/400x300",
  technologies = ["Tech1", "Tech2"],
  githubLink = "https://github.com/...",
  liveLink = "https://..."
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 max-w-sm">
      {/* Project Image */}
      <div className="relative h-40 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 dark:text-white">{title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-1 mb-3">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs bg-gray-100 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex gap-3">
          {githubLink && (
            <a 
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center gap-1 text-sm text-gray-700 hover:text-black dark:text-white dark:hover:text-gray-700"
            >
              <Github size={16} />
              <span className="dark:text-white">Code</span>
            </a>
          )}
          {liveLink && (
            <a 
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center gap-1 text-sm text-gray-700 hover:text-black dark:text-white dark:hover:text-gray-700" 
            >
              <Link size={16} />
              <span className='dark:text-white'>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  // Array of project data
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React and Tailwind CSS, featuring responsive design and modern animations.",
      image: "https://via.placeholder.com/400x300",
      technologies: ["React", "Tailwind CSS", "Vite"],
      githubLink: "https://github.com/yourusername/portfolio",
      liveLink: "https://yourportfolio.com"
    },
    {
      title: "E-commerce Dashboard",
      description: "Admin dashboard for managing products, orders, and customer data with real-time updates.",
      image: "https://via.placeholder.com/400x300",
      technologies: ["React", "Node.js", "MongoDB"],
      githubLink: "https://github.com/yourusername/dashboard",
      liveLink: "https://dashboard-demo.com"
    },
    {
      title: "Weather App",
      description: "Real-time weather application with location-based forecasts and interactive maps.",
      image: "https://via.placeholder.com/400x300",
      technologies: ["React", "Weather API", "Maps"],
      githubLink: "https://github.com/yourusername/weather",
      liveLink: "https://weather-demo.com"
    }
  ];

  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">My Work</h2>
        
        {/* Grid layout for project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;


