import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Database, Palette, Zap, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building responsive, fast, and modern web applications using cutting-edge technologies and best practices.',
      features: ['React/Vue/Angular', 'REST APIs', 'Progressive Web Apps', 'Performance Optimization'],
      color: 'text-minecraft-green',
      bgColor: 'bg-minecraft-green/20'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Creating cross-platform mobile applications that provide native-like experiences on both iOS and Android.',
      features: ['React Native', 'Flutter', 'Responsive Design', 'App Store Deployment'],
      color: 'text-minecraft-sand',
      bgColor: 'bg-minecraft-sand/20'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Designing scalable backend architectures with robust APIs, database management, and cloud integration.',
      features: ['Node.js/Python', 'MongoDB/PostgreSQL', 'Cloud Services', 'Microservices'],
      color: 'text-minecraft-water',
      bgColor: 'bg-minecraft-water/20'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Crafting intuitive and beautiful user interfaces with focus on user experience and accessibility.',
      features: ['Figma/Sketch', 'Prototyping', 'User Research', 'Design Systems'],
      color: 'text-minecraft-brown',
      bgColor: 'bg-minecraft-brown/20'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing web applications for maximum speed, efficiency, and search engine visibility.',
      features: ['Code Splitting', 'Lazy Loading', 'SEO Optimization', 'Core Web Vitals'],
      color: 'text-minecraft-green',
      bgColor: 'bg-minecraft-green/20'
    },
    {
      icon: Shield,
      title: 'Security & Testing',
      description: 'Implementing security best practices and comprehensive testing to ensure reliable applications.',
      features: ['Security Audits', 'Unit Testing', 'E2E Testing', 'CI/CD Pipelines'],
      color: 'text-minecraft-stone',
      bgColor: 'bg-minecraft-stone/20'
    }
  ];

  const ServiceCard = ({ service, index }) => (
    <motion.div
      className="bg-minecraft-dirt/20 backdrop-blur-sm rounded-lg pixel-border p-6 h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <motion.div
        className={`${service.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <service.icon size={32} className={service.color} />
      </motion.div>
      
      <h3 className={`text-xl font-bold text-white mb-3 minecraft-text ${service.color}`}>
        {service.title}
      </h3>
      
      <p className="text-white/80 mb-4 text-sm leading-relaxed">
        {service.description}
      </p>
      
      <ul className="space-y-2">
        {service.features.map((feature, idx) => (
          <motion.li
            key={idx}
            className="text-white/70 text-sm flex items-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
          >
            <span className="w-2 h-2 bg-minecraft-green rounded-full mr-2"></span>
            {feature}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <section id="services" className="py-20 bg-minecraft-stone/10">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 minecraft-text">
            Services I <span className="text-minecraft-green">Offer</span>
          </h2>
          <div className="w-24 h-1 bg-minecraft-green mx-auto"></div>
          <p className="text-lg text-white/80 mt-4 minecraft-text">
            Comprehensive solutions for your digital needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-minecraft-green/10 rounded-lg p-8 pixel-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 minecraft-text">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-white/80 mb-6 minecraft-text">
              Whether you need a complete web application, a mobile app, or just want to optimize 
              your existing project, I'm here to help turn your ideas into reality.
            </p>
            <motion.button
              className="minecraft-button px-8 py-4 text-white font-bold text-lg minecraft-text"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
