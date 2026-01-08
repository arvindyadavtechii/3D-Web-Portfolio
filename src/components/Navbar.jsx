import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Technologies', 'Projects', 'Services', 'Contact'];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'glass-effect border-b border-white/10' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold minecraft-text relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="gradient-text">{'<'}</span>
            <span className="text-white">Dev</span>
            <span className="gradient-text">{'/>'}</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-purple to-neon-pink group-hover:w-full transition-all duration-300"></div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/80 hover:text-white transition-all duration-300 minecraft-text text-lg relative group py-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1 }}
              >
                {item}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-purple to-neon-pink group-hover:w-full transition-all duration-300"></div>
              </motion.a>
            ))}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden lg:flex space-x-4">
            <motion.a
              href="https://github.com"
              className="text-white/60 hover:text-neon-purple transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              className="text-white/60 hover:text-neon-blue transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:hello@developer.com"
              className="text-white/60 hover:text-neon-pink transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={20} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-white relative group"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative">
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="absolute -inset-2 bg-neon-purple/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden mt-4 glass-effect rounded-lg p-6 border border-white/10"
              initial={{ opacity: 0, height: 0, scale: 0.95 }}
              animate={{ opacity: 1, height: 'auto', scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-white/80 hover:text-white transition-all duration-300 minecraft-text text-xl py-3 px-4 rounded-lg hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  {item}
                </motion.a>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex space-x-6 mt-6 pt-6 border-t border-white/10 justify-center">
                <motion.a
                  href="https://github.com"
                  className="text-white/60 hover:text-neon-purple transition-colors"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  className="text-white/60 hover:text-neon-blue transition-colors"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="mailto:hello@developer.com"
                  className="text-white/60 hover:text-neon-pink transition-colors"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail size={24} />
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
