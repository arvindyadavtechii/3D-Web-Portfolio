import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Instagram, Code2, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Mail, href: 'mailto:hello@developer.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-minecraft-stone/20 backdrop-blur-sm border-t-2 border-minecraft-stone">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex items-center space-x-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-minecraft-green pixel-border flex items-center justify-center">
                <Code2 size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white minecraft-text">
                <span className="text-minecraft-green">{'<'}</span>
                <span className="text-minecraft-sand">Dev</span>
                <span className="text-minecraft-green">{'/>'}</span>
              </span>
            </motion.div>
            <p className="text-white/80 mb-4 minecraft-text">
              Building digital worlds one block at a time.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-minecraft-stone/30 rounded-lg flex items-center justify-center text-white/60 hover:text-minecraft-green hover:bg-minecraft-green/20 transition-all"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-white mb-4 minecraft-text">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-minecraft-green transition-colors minecraft-text"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-white mb-4 minecraft-text">
              Services
            </h3>
            <ul className="space-y-2">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Backend Development'].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                >
                  <span className="text-white/60 minecraft-text">
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold text-white mb-4 minecraft-text">
              Contact Info
            </h3>
            <div className="space-y-2">
              <p className="text-white/60 minecraft-text">
                hello@developer.com
              </p>
              <p className="text-white/60 minecraft-text">
                +1 (555) 123-4567
              </p>
              <p className="text-white/60 minecraft-text">
                San Francisco, CA
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-minecraft-stone/30 mt-8 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 minecraft-text mb-4 md:mb-0">
              © 2024 <span className="text-minecraft-green">Dev</span>. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-white/60 minecraft-text">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart size={16} className="text-red-500 fill-red-500" />
              </motion.div>
              <span>and lots of ☕</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
