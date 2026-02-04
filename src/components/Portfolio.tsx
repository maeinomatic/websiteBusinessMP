import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import {
  ECommerceVisualization,
  IoTVisualization,
  AIVisualization,
  RacingVisualization,
  DnDVisualization,
  RealEstateVisualization,
} from './three/ProjectVisualizations'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React frontend and .NET Core backend',
    tech: ['React', '.NET Core', 'MSSQL', 'TypeScript'],
    link: '#',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    id: 2,
    title: 'IoT Firmware Suite',
    description: 'MicroPython embedded systems for ESP8266 devices',
    tech: ['Python', 'MicroPython', 'Arduino', 'C++'],
    link: '#',
    color: 'from-purple-600 to-pink-600',
  },
  {
    id: 3,
    title: 'AI Speech Processing',
    description: 'OpenAI integration for real-time speech-to-text conversion',
    tech: ['Python', 'FastAPI', 'OpenAI API', 'React'],
    link: '#',
    color: 'from-green-600 to-emerald-600',
  },
  {
    id: 4,
    title: 'Racing Sim Hardware',
    description: 'Arduino-based shifter controller for sim racing applications',
    tech: ['C++', 'Arduino', 'Hardware Integration'],
    link: '#',
    color: 'from-orange-600 to-red-600',
  },
  {
    id: 5,
    title: 'Task Management Dashboard',
    description: 'Web application for project task tracking with kanban board interface',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    link: '#',
    color: 'from-indigo-600 to-blue-600',
  },
  {
    id: 6,
    title: 'Real Estate Portal',
    description: 'Property listing platform with advanced search and filtering',
    tech: ['React', '.NET Core', 'Elasticsearch', 'Azure'],
    link: '#',
    color: 'from-cyan-600 to-blue-600',
  },
]

function getVisualization(projectId: number) {
  switch (projectId) {
    case 1:
      return <ECommerceVisualization />
    case 2:
      return <IoTVisualization />
    case 3:
      return <AIVisualization />
    case 4:
      return <RacingVisualization />
    case 5:
      return <DnDVisualization />
    case 6:
      return <RealEstateVisualization />
    default:
      return <ECommerceVisualization />
  }
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 sm:py-20 md:py-24 px-4 xs:px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark to-darkCard relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="section-title text-4xl sm:text-5xl md:text-6xl">Featured Projects</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mt-4">
            A selection of recent projects showcasing full-stack capabilities across various technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card content */}
              <a
                href={project.link}
                className="card-dark overflow-hidden cursor-pointer h-full flex flex-col relative z-10 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-accent/20"
              >
                {/* 3D Canvas - Main Visual Element */}
                <div className={`h-40 sm:h-44 bg-gradient-to-br ${project.color} rounded-t relative overflow-hidden group-hover:shadow-lg transition-shadow`}>
                  <Canvas
                    camera={{ position: [0, 0, 1.5], fov: 50 }}
                    style={{ width: '100%', height: '100%' }}
                  >
                    <ambientLight intensity={0.7} />
                    <pointLight position={[3, 3, 3]} intensity={1.2} color="#ffffff" />
                    <pointLight position={[-3, -3, -3]} intensity={0.6} color="#ffffff" />
                    {getVisualization(project.id)}
                  </Canvas>
                  {/* Subtle gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
                </div>

                {/* Content section */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-accent transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-400 mb-4 line-clamp-2 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-primary bg-opacity-30 text-accent px-2 py-1 rounded whitespace-nowrap group-hover:bg-opacity-50 transition-all"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Arrow indicator with animation */}
                  <div className="inline-block">
                    <svg className="w-5 h-5 text-accent group-hover:translate-x-2 group-hover:scale-125 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </a>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-gray-400 mb-6 text-sm sm:text-base">
            Want to see more? Check out my GitHub profile.
          </p>
          <a href="https://github.com/maeinomatic" target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm sm:text-base">
            View on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
