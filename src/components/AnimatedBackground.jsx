import React from 'react';

const AnimatedBackground = () => {
  return (
    <>
      {/* Animated gradient orbs */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-pink rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-neon-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-neon-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-morph"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-start rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-bounce-slow"></div>
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Floating geometric shapes */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-neon-purple rotate-45 animate-spin-slow opacity-30"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-neon-pink animate-bounce-slow opacity-30"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 border-2 border-neon-blue rounded-full animate-pulse-glow opacity-30"></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-neon-cyan animate-wiggle opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 border-4 border-gradient-start rotate-12 animate-float opacity-25"></div>
      </div>

      {/* Aurora effect */}
      <div 
        className="fixed inset-0 z-0 opacity-10"
        style={{
          background: 'linear-gradient(135deg, transparent 0%, rgba(139, 92, 246, 0.1) 25%, rgba(236, 72, 153, 0.1) 50%, rgba(59, 130, 246, 0.1) 75%, transparent 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradient-shift 15s ease infinite'
        }}
      />
    </>
  );
};

export default AnimatedBackground;
