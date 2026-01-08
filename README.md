# Minecraft Portfolio Website

A modern, responsive portfolio website with a Minecraft theme and 3D elements, built with React, Vite, and Tailwind CSS.

## Features

- 🎮 **Minecraft Theme**: Unique pixelated design inspired by Minecraft
- 🎨 **3D Elements**: Interactive 3D animations and floating cubes
- 📱 **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Modern Tech Stack**: React 18, Vite, Tailwind CSS, Framer Motion
- 🌟 **Smooth Animations**: Engaging micro-interactions and transitions
- 📧 **Contact Form**: Functional contact form with validation
- 🎯 **Project Showcase**: Filterable portfolio with project details
- 💼 **Services Section**: Comprehensive services overview
- 🛠️ **Tech Stack**: Animated skill bars and technology display

## Sections

1. **Hero Section**: 3D animated landing page with floating Minecraft cubes
2. **About**: Personal information with animated statistics
3. **Technologies**: Skill categories with progress bars
4. **Projects**: Filterable project showcase with live demos
5. **Services**: Services offered with detailed features
6. **Contact**: Contact form and contact information
7. **Footer**: Social media links and quick navigation

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd minecraft-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
```

## Technologies Used

- **React 18**: UI framework
- **Vite**: Build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **React Router Dom**: Client-side routing

## Customization

### Colors
The Minecraft theme colors are defined in `tailwind.config.js`:
- `minecraft-green`: Primary green color
- `minecraft-brown`: Wood/brown accents
- `minecraft-stone`: Gray/stone elements
- `minecraft-dirt`: Background dirt color
- `minecraft-grass`: Grass green
- `minecraft-water`: Water blue
- `minecraft-sand`: Sand yellow

### Fonts
The site uses the VT323 font for the Minecraft aesthetic, loaded from Google Fonts.

### Animations
Custom animations are defined in `tailwind.config.js`:
- `float`: Gentle floating animation
- `rotate-slow`: Continuous rotation
- `pulse-slow`: Slow pulsing effect

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Navigation bar
│   ├── Hero.jsx         # Landing page with 3D elements
│   ├── About.jsx        # About section
│   ├── Technologies.jsx # Tech stack display
│   ├── Projects.jsx     # Project showcase
│   ├── Services.jsx     # Services section
│   ├── Contact.jsx      # Contact form
│   └── Footer.jsx       # Footer with social links
├── App.jsx              # Main app component
├── main.jsx             # App entry point
└── index.css            # Global styles
```

## Features Details

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Adaptive layouts for all screen sizes
- Touch-friendly interactions on mobile

### 3D Elements
- Canvas-based floating cubes animation
- CSS 3D transforms for depth effects
- Parallax scrolling effects
- Interactive hover states

### Performance
- Optimized animations with GPU acceleration
- Lazy loading for images
- Code splitting with Vite
- Minimal bundle size

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Android Chrome)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ and lots of ☕
