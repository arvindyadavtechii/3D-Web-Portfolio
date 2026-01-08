import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Sparkles } from 'lucide-react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark-bg"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
    >
      <div className="relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-neon-purple/20 rounded-full filter blur-2xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-neon-pink/20 rounded-full filter blur-2xl animate-float-slow"></div>
        </div>

        <div className="relative z-10 text-center">
          {/* Main logo animation */}
          <motion.div
            className="relative inline-block mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", damping: 10 }}
          >
            <div className="w-24 h-24 mx-auto glass-effect pixel-border flex items-center justify-center morph-shape">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Code2 size={48} className="text-white neon-text" />
              </motion.div>
            </div>
            
            {/* Orbiting particles */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Sparkles size={16} className="text-neon-purple" />
              </div>
            </motion.div>
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <Sparkles size={12} className="text-neon-pink" />
              </div>
            </motion.div>
          </motion.div>

          {/* Loading text */}
          <motion.h2
            className="text-3xl font-bold gradient-text minecraft-text mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Loading Portfolio
          </motion.h2>

          {/* Progress bar */}
          <motion.div
            className="w-64 h-2 bg-white/10 rounded-full overflow-hidden mb-4"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </motion.div>

          {/* Progress percentage */}
          <motion.p
            className="text-white/60 minecraft-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            {progress}%
          </motion.p>

          {/* Loading dots animation */}
          <motion.div
            className="flex justify-center space-x-2 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-3 h-3 bg-neon-purple rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
