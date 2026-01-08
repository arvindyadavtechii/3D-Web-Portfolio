import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Download, ArrowDown, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Enhanced 3D cubes with rotation and depth
    class Cube3D {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 100;
        this.size = Math.random() * 40 + 20;
        this.speedX = (Math.random() - 0.5) * 1;
        this.speedY = Math.random() * 3 + 2;
        this.rotationX = Math.random() * Math.PI * 2;
        this.rotationY = Math.random() * Math.PI * 2;
        this.rotationZ = Math.random() * Math.PI * 2;
        this.rotationSpeedX = (Math.random() - 0.5) * 0.02;
        this.rotationSpeedY = (Math.random() - 0.5) * 0.02;
        this.rotationSpeedZ = (Math.random() - 0.5) * 0.02;
        this.color = ['#8B5CF6', '#EC4899', '#3B82F6', '#06B6D4'][Math.floor(Math.random() * 4)];
        this.opacity = Math.random() * 0.6 + 0.4;
        this.glowIntensity = Math.random() * 20 + 10;
      }

      update() {
        this.x += this.speedX;
        this.y -= this.speedY;
        this.rotationX += this.rotationSpeedX;
        this.rotationY += this.rotationSpeedY;
        this.rotationZ += this.rotationSpeedZ;
        
        // Add wave motion
        this.x += Math.sin(this.y * 0.01) * 1;
        
        if (this.y < -100 || this.x < -100 || this.x > canvas.width + 100) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        
        // Apply 3D rotation simulation
        const scale = Math.abs(Math.cos(this.rotationY)) * 0.8 + 0.2;
        ctx.scale(scale, scale);
        
        // Enhanced glow effect
        ctx.shadowBlur = this.glowIntensity;
        ctx.shadowColor = this.color;
        
        // Draw cube faces with 3D effect
        const size = this.size;
        const depth = size * 0.3;
        
        // Front face
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fillRect(-size/2, -size/2, size, size);
        
        // Top face (lighter)
        ctx.fillStyle = this.adjustBrightness(this.color, 30);
        ctx.beginPath();
        ctx.moveTo(-size/2, -size/2);
        ctx.lineTo(-size/2 + depth, -size/2 - depth);
        ctx.lineTo(size/2 + depth, -size/2 - depth);
        ctx.lineTo(size/2, -size/2);
        ctx.closePath();
        ctx.fill();
        
        // Right face (darker)
        ctx.fillStyle = this.adjustBrightness(this.color, -30);
        ctx.beginPath();
        ctx.moveTo(size/2, -size/2);
        ctx.lineTo(size/2 + depth, -size/2 - depth);
        ctx.lineTo(size/2 + depth, size/2 - depth);
        ctx.lineTo(size/2, size/2);
        ctx.closePath();
        ctx.fill();
        
        // Inner glow
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.fillRect(-size/4, -size/4, size/2, size/2);
        
        // Pixel border
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1;
        ctx.globalAlpha = this.opacity * 0.5;
        ctx.strokeRect(-size/2, -size/2, size, size);
        
        ctx.restore();
      }

      adjustBrightness(color, percent) {
        const num = parseInt(color.replace('#', ''), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) + amt;
        const G = (num >> 8 & 0x00FF) + amt;
        const B = (num & 0x0000FF) + amt;
        return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
          (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
          (B < 255 ? B < 1 ? 0 : B : 255))
          .toString(16).slice(1);
      }
    }

    // Create enhanced cubes
    const cubes = [];
    const cubeCount = 20;
    
    for (let i = 0; i < cubeCount; i++) {
      cubes.push(new Cube3D());
    }

    // Connection lines with gradient
    function drawConnections() {
      for (let i = 0; i < cubes.length; i++) {
        for (let j = i + 1; j < cubes.length; j++) {
          const dx = cubes[i].x - cubes[j].x;
          const dy = cubes[i].y - cubes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const gradient = ctx.createLinearGradient(
              cubes[i].x, cubes[i].y, cubes[j].x, cubes[j].y
            );
            gradient.addColorStop(0, cubes[i].color);
            gradient.addColorStop(1, cubes[j].color);
            
            ctx.beginPath();
            ctx.moveTo(cubes[i].x, cubes[i].y);
            ctx.lineTo(cubes[j].x, cubes[j].y);
            ctx.strokeStyle = gradient;
            ctx.globalAlpha = 0.2 * (1 - distance / 150);
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    }

    const animate = () => {
      // Create trail effect
      ctx.fillStyle = 'rgba(15, 15, 35, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      cubes.forEach(cube => {
        cube.update();
        cube.draw();
      });
      
      drawConnections();
      
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated icon with enhanced effects */}
          <motion.div
            className="relative inline-block mb-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="relative">
              <div className="w-32 h-32 mx-auto glass-effect pixel-border flex items-center justify-center morph-shape">
                <Code2 size={64} className="text-white neon-text" />
              </div>
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 bg-neon-purple rounded-full animate-pulse-glow"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-6 h-6 bg-neon-pink rounded-full animate-pulse-glow"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </div>
          </motion.div>
          
          {/* Enhanced title with gradient text */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 minecraft-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="gradient-text">Full Stack</span>
            <span className="block text-white mt-2">Developer</span>
          </motion.h1>
          
          {/* Enhanced subtitle with icons */}
          <motion.div
            className="flex items-center justify-center space-x-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Sparkles className="text-neon-purple animate-pulse" size={24} />
            <p className="text-2xl md:text-3xl text-white minecraft-text">
              Building Digital Worlds
            </p>
            <Zap className="text-neon-pink animate-pulse" size={24} />
          </motion.div>
          
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-12 minecraft-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="gradient-text">One Block at a Time</span>
          </motion.p>
          
          {/* Enhanced buttons with better effects */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              className="minecraft-button px-10 py-5 text-white font-bold text-xl minecraft-text relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
            
            <motion.button
              className="glass-effect px-10 py-5 text-white font-bold text-xl minecraft-text border-2 border-neon-blue hover-glow relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={24} className="inline mr-3" />
              <span className="relative z-10">Download CV</span>
              <div className="absolute inset-0 bg-neon-blue opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Enhanced scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center space-y-2">
            <ArrowDown size={32} className="text-white neon-text" />
            <div className="w-1 h-16 bg-gradient-to-b from-neon-purple to-transparent animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
