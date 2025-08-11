import { Github, Link } from 'lucide-react';
import PropTypes from 'prop-types';

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

ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string),
  githubLink: PropTypes.string,
  liveLink: PropTypes.string,
};

const ProjectsSection = () => {
  // Array of project data
  const projects = [
    {
      title: "Fastest Lap",
      description: "A web application to track and analyze lap times for racing enthusiasts, featuring real-time data visualization.",
      image: "https://via.placeholder.com/400x300",
      technologies: ["Typescript","React", "Tailwind CSS", "Vite","Supabase"],
      githubLink: "https://github.com/Noahsparkes/Fastest-Lap",
      liveLink: "https://fastest-lap-ruby.vercel.app/"
    },
    {
      title: "Age Calculator",
      description: "A simple web application to calculate age based on birthdate input.",
      image: "https://via.placeholder.com/400x300",
      technologies: ["JavaScript", "HTML", "CSS"],
      githubLink: "https://github.com/Noahsparkes/Age-calculator-app",
      liveLink: "https://heroic-bunny-0c7e28.netlify.app/"
    },
    {
      title: "Random Quote Generator",
      description: "A web application that fetches and displays random quotes from an API.",
      image: "https://via.placeholder.com/400x300",
      technologies: ["TypeScript", "Vite","React", " REST API"],
      githubLink: "https://github.com/Noahsparkes/Random-quote-generator",
      liveLink: "https://random-quote-generator-tau-sepia.vercel.app/"
    }
  ];

  return (
    <section className="py-12 " id='projects'>
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



