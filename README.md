# Martin's Business Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Vite, Three.js, and Tailwind CSS. Features interactive 3D visualizations, smooth animations, and a fully functional contact experience.

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js** 16+ 
- **npm** 8+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/maeinomatic/websiteBusinessMP.git
   cd websiteBusinessMP
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5176`

### Available Scripts

- **`npm run dev`** - Start development server with hot module replacement (HMR)
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check code quality

## 📁 Project Structure

```
src/
├── components/
│   ├── three/              # 3D visualizations
│   │   ├── SkillOrb.tsx    # Interactive hero skill visualization
│   │   ├── PortfolioCard3D.tsx   # Portfolio cards with 3D backgrounds
│   │   └── ProjectVisualizations.tsx  # Project-specific 3D scenes
│   ├── sections/
│   │   ├── Hero.tsx        # Landing section with SkillOrb
│   │   ├── Portfolio.tsx   # Portfolio grid with 3D cards
│   │   ├── Skills.tsx      # Skills section
│   │   ├── About.tsx       # About section
│   │   └── Contact.tsx     # Contact section
│   ├── Navigation.tsx      # Header/navbar component
│   └── Footer.tsx          # Footer component
├── App.tsx                 # Main app component
├── index.css              # Global styles
└── main.tsx               # Entry point
```

## 🛠 Tech Stack

- **React** 18.3.1 - UI library
- **TypeScript** 5.9.3 - Type safety
- **Vite** 5.4.10 - Build tool & dev server
- **Tailwind CSS** 3.4.1 - Styling
- **Three.js** 0.182.0 - 3D graphics
- **React Three Fiber** 8.15.0 - React renderer for Three.js
- **Framer Motion** 12.31.0 - Animations

## 🎨 Key Features

### Interactive Components
- **SkillOrb** - 3D rotating skill orb with hover interactions and particle effects
- **Portfolio Cards** - Each card has a unique 3D canvas visualization
- **Project Visualizations**:
  - E-Commerce: Product shelf system
  - AI Speech: Voice waveform with microphone
  - IoT: Webserver with temperature/humidity sensors
  - Task Manager: Interactive kanban board
  - Real Estate: Property listing grid

### Design Features
- **Fully Responsive** - Mobile, tablet, and desktop layouts
- **Cross-Browser Support** - Chrome, Firefox, Safari, Edge
- **Smooth Animations** - Framer Motion + Three.js animations
- **3D Interactions** - Hover effects, particle systems, dynamic rotations
- **Accessibility** - ARIA labels and semantic HTML

## 🔗 Functional Links

- **Schedule Consultation** - Smooth scroll to contact section
- **View Portfolio** - Smooth scroll to portfolio section
- **Send Message** - Opens contact form
- **LinkedIn** - Links to profile: linkedin.com/in/martin-potozki-400319125/

## 💡 Development Tips

### Adding New Components
1. Create component in `src/components/`
2. Use TypeScript for type safety
3. Leverage Tailwind CSS for responsive design
4. Use Framer Motion for animations

### Working with 3D
- 3D components go in `src/components/three/`
- Use React Three Fiber hooks: `useFrame`, `useThree`, `useRef`
- Keep canvas components wrapped in `<Canvas>` from `@react-three/fiber`

### Styling
- Use Tailwind CSS utility classes
- Custom animations in `index.css`
- Responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`

### Running Lint
Before committing, ensure no lint errors:
```bash
npm run lint
```

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Output files are in the `dist/` directory
```

## 🐛 Troubleshooting

**Port already in use?**
```bash
# The dev server will try the next available port automatically
npm run dev
```

**Peer dependency warnings?**
```bash
# Already handled with --legacy-peer-deps flag
npm install --legacy-peer-deps
```

**Build fails?**
```bash
# Clear node_modules and reinstall
rm -r node_modules
npm install --legacy-peer-deps
npm run build
```

## 📝 Notes

- Keep imports organized and clean
- Run lint before pushing changes
- Test responsive design on multiple screen sizes
- Check 3D performance on lower-end devices
