import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
      image: '🛒',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '📋',
      technologies: ['React', 'TypeScript', 'Express', 'PostgreSQL'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and severe weather alerts.',
      image: '🌤️',
      technologies: ['React', 'API Integration', 'Chart.js'],
      category: 'frontend',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 4,
      title: 'Blog API',
      description: 'RESTful API for a blogging platform with user authentication, content management, and comment system.',
      image: '📝',
      technologies: ['Node.js', 'Express', 'JWT', 'MongoDB'],
      category: 'backend',
      github: 'https://github.com',
      live: null,
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern portfolio website with 3D animations, responsive design, and optimized performance.',
      image: '🎨',
      technologies: ['React', 'Three.js', 'Tailwind CSS'],
      category: 'frontend',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat application with private messaging, group chats, and file sharing capabilities.',
      image: '💬',
      technologies: ['Socket.io', 'React', 'Node.js', 'Redis'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const ProjectCard = ({ project, index }) => (
    <motion.div
      className="bg-minecraft-dirt/20 backdrop-blur-sm rounded-lg pixel-border overflow-hidden group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <div className="relative h-48 bg-minecraft-stone/30 flex items-center justify-center overflow-hidden">
        <div className="text-6xl animate-float">{project.image}</div>
        {project.featured && (
          <motion.div
            className="absolute top-4 right-4 bg-minecraft-green text-white px-3 py-1 rounded minecraft-text text-sm"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Featured
          </motion.div>
        )}
        <motion.div
          className="absolute inset-0 bg-minecraft-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="flex items-center justify-center h-full space-x-4">
            {project.github && (
              <motion.a
                href={project.github}
                className="bg-white text-minecraft-stone p-3 rounded-full"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live}
                className="bg-white text-minecraft-stone p-3 rounded-full"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink size={20} />
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 minecraft-text">
          {project.title}
        </h3>
        <p className="text-white/80 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-minecraft-green/20 text-minecraft-green px-2 py-1 rounded text-xs minecraft-text"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            {project.github && (
              <motion.a
                href={project.github}
                className="text-white/60 hover:text-minecraft-green transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <Github size={18} />
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live}
                className="text-white/60 hover:text-minecraft-green transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <ExternalLink size={18} />
              </motion.a>
            )}
          </div>
          <Tag size={16} className="text-white/40" />
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 bg-minecraft-grass/10">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 minecraft-text">
            Project <span className="text-minecraft-green">Showcase</span>
          </h2>
          <div className="w-24 h-1 bg-minecraft-green mx-auto"></div>
          <p className="text-lg text-white/80 mt-4 minecraft-text">
            Explore my digital creations and experiments
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-lg minecraft-text font-medium transition-all ${
                filter === category.id
                  ? 'bg-minecraft-green text-white pixel-border'
                  : 'bg-minecraft-stone/20 text-white/80 hover:bg-minecraft-stone/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-white/60 minecraft-text text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
