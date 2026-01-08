import React from 'react';
import { motion } from 'framer-motion';

const Technologies = () => {
  const categories = [
    {
      title: 'Frontend',
      color: 'text-minecraft-green',
      bgColor: 'bg-minecraft-green/20',
      technologies: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 }
      ]
    },
    {
      title: 'Backend',
      color: 'text-minecraft-sand',
      bgColor: 'bg-minecraft-sand/20',
      technologies: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'REST APIs', level: 90 }
      ]
    },
    {
      title: 'Tools & Others',
      color: 'text-minecraft-water',
      bgColor: 'bg-minecraft-water/20',
      technologies: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'Figma', level: 75 },
        { name: 'Webpack', level: 70 },
        { name: 'Vite', level: 85 }
      ]
    }
  ];

  const SkillBar = ({ name, level, color }) => (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium minecraft-text">{name}</span>
        <span className="text-white/80 minecraft-text">{level}%</span>
      </div>
      <div className="w-full bg-minecraft-stone/30 rounded-full h-3 overflow-hidden">
        <motion.div
          className={`h-full ${color} relative`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section id="technologies" className="py-20 bg-minecraft-stone/10">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 minecraft-text">
            Tech <span className="text-minecraft-green">Stack</span>
          </h2>
          <div className="w-24 h-1 bg-minecraft-green mx-auto"></div>
          <p className="text-lg text-white/80 mt-4 minecraft-text">
            My arsenal of digital building blocks
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-minecraft-dirt/20 backdrop-blur-sm p-6 rounded-lg pixel-border"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.div
                className={`${category.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <span className={`text-2xl font-bold ${category.color} minecraft-text`}>
                  {category.title[0]}
                </span>
              </motion.div>
              
              <h3 className={`text-2xl font-bold text-white mb-6 text-center minecraft-text ${category.color}`}>
                {category.title}
              </h3>
              
              <div className="space-y-1">
                {category.technologies.map((tech) => (
                  <SkillBar
                    key={tech.name}
                    name={tech.name}
                    level={tech.level}
                    color={category.bgColor}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="inline-flex flex-wrap gap-3 justify-center">
            {['React', 'Node.js', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'Git'].map((tech) => (
              <motion.span
                key={tech}
                className="bg-minecraft-green/20 text-minecraft-green px-4 py-2 rounded-lg minecraft-text border-2 border-minecraft-green"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(124, 179, 66, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
