import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Zap, Globe, Sparkles, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects', value: '50+', color: 'text-neon-purple', bgGradient: 'from-neon-purple to-neon-pink' },
    { icon: Zap, label: 'Years Experience', value: '5+', color: 'text-neon-pink', bgGradient: 'from-neon-pink to-neon-blue' },
    { icon: Globe, label: 'Happy Clients', value: '30+', color: 'text-neon-blue', bgGradient: 'from-neon-blue to-neon-cyan' },
    { icon: User, label: 'Technologies', value: '20+', color: 'text-neon-cyan', bgGradient: 'from-neon-cyan to-neon-purple' }
  ];

  const skills = [
    { name: 'Problem Solving', level: 95 },
    { name: 'Creative Design', level: 88 },
    { name: 'Team Collaboration', level: 92 },
    { name: 'Project Management', level: 85 }
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-neon-purple/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-neon-pink/20 rounded-full filter blur-3xl animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Sparkles className="text-neon-purple" size={24} />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text minecraft-text">
              About <span className="text-white">Me</span>
            </h2>
            <Sparkles className="text-neon-pink" size={24} />
          </motion.div>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="relative">
              {/* Main profile card */}
              <motion.div
                className="glass-effect pixel-border p-8 relative overflow-hidden group"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-neon-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-64 h-64 mx-auto glass-effect rounded-full flex items-center justify-center morph-shape mb-6">
                    <User size={120} className="text-white neon-text" />
                  </div>
                  
                  <motion.div
                    className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-neon-purple to-neon-pink rounded-full flex items-center justify-center shadow-neon-purple"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <Award size={32} className="text-white" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-cyan rounded-full flex items-center justify-center shadow-neon-blue"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Code size={24} className="text-white" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-10 -left-10 w-20 h-20 border-2 border-neon-purple/30 rotate-45 animate-spin-slow"
                whileHover={{ scale: 1.2, rotate: 180 }}
              ></motion.div>
              <motion.div
                className="absolute bottom-10 -right-10 w-16 h-16 border-2 border-neon-pink/30 rounded-full animate-bounce-slow"
                whileHover={{ scale: 1.2 }}
              ></motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 minecraft-text">
              Crafting Digital <span className="gradient-text">Experiences</span>
            </h3>
            
            <div className="space-y-4 mb-8">
              <motion.p
                className="text-lg text-white/90 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Hello! I'm a passionate full-stack developer who loves building robust web applications 
                with modern technologies. Just like in Minecraft, I enjoy starting with the basics and 
                building complex, beautiful structures block by block.
              </motion.p>
              
              <motion.p
                className="text-lg text-white/90 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                My journey in web development has been driven by curiosity and a desire to create 
                meaningful digital experiences. I specialize in React, Node.js, and modern web technologies, 
                always staying updated with the latest trends and best practices.
              </motion.p>
              
              <motion.p
                className="text-lg text-white/90 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or playing Minecraft to get inspiration for my next digital creation!
              </motion.p>
            </div>

            {/* Skills showcase */}
            <div className="glass-effect p-6 rounded-lg">
              <h4 className="text-xl font-bold text-white mb-4 minecraft-text">Core Skills</h4>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex justify-between">
                      <span className="text-white/80 minecraft-text">{skill.name}</span>
                      <span className="text-neon-purple minecraft-text">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-neon-purple to-neon-pink rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-effect p-6 rounded-lg pixel-border text-center group hover-glow relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -10 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1, type: "spring" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              <motion.div
                className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.bgGradient} rounded-full flex items-center justify-center shadow-lg`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <stat.icon size={32} className="text-white" />
              </motion.div>
              
              <div className="text-3xl font-bold text-white mb-2 minecraft-text">
                {stat.value}
              </div>
              <div className="text-white/80 minecraft-text">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
