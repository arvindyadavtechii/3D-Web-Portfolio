/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'minecraft-green': '#4CAF50',
        'minecraft-brown': '#8B4513',
        'minecraft-stone': '#808080',
        'minecraft-dirt': '#8B7355',
        'minecraft-grass': '#7CB342',
        'minecraft-water': '#1E88E5',
        'minecraft-sand': '#FDD835',
        'neon-purple': '#8B5CF6',
        'neon-pink': '#EC4899',
        'neon-blue': '#3B82F6',
        'neon-cyan': '#06B6D4',
        'dark-bg': '#0F0F23',
        'card-bg': 'rgba(255, 255, 255, 0.05)',
        'glass-bg': 'rgba(255, 255, 255, 0.1)',
        'gradient-start': '#667EEA',
        'gradient-middle': '#764BA2',
        'gradient-end': '#F093FB',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'minecraft-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
        'neon-gradient': 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #3B82F6 100%)',
        'aurora': 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
      },
      fontFamily: {
        'minecraft': ['VT323', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'rotate-slow': 'rotate 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'particle-float': 'particle-float 10s linear infinite',
        'neon-flicker': 'neon-flicker 3s ease-in-out infinite',
        'morph': 'morph 8s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-20px) rotate(2deg)' },
          '50%': { transform: 'translateY(-10px) rotate(-1deg)' },
          '75%': { transform: 'translateY(-30px) rotate(1deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-40px)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(139, 92, 246, 0.8), 0 0 80px rgba(139, 92, 246, 0.4)',
            transform: 'scale(1.05)'
          },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'particle-float': {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) rotate(720deg)', opacity: '0' },
        },
        'neon-flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon-purple': '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)',
        'neon-pink': '0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(236, 72, 153, 0.3)',
        'neon-blue': '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'inner-glow': 'inset 0 0 20px rgba(139, 92, 246, 0.1)',
      },
      backgroundSize: {
        '400%': '400% 400%',
      }
    },
  },
  plugins: [],
}
