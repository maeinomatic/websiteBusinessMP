import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import SkillOrb from './three/SkillOrb'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 xs:pt-24 sm:pt-16 sm:pb-0 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-dark to-dark pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 xs:px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              Custom
              <br />
              <span className="gradient-text">Software Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed"
            >
              Full-stack development with React, .NET Core, and Python. I transform your vision into scalable, high-performance applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col xs:flex-row gap-3 sm:gap-4"
            >
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary w-full xs:w-auto"
              >
                Schedule Consultation
              </button>
              <button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary w-full xs:w-auto"
              >
                View Portfolio
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-8 sm:mt-12 flex flex-wrap gap-6 sm:gap-8 text-xs sm:text-sm"
            >
              <div>
                <div className="text-xl sm:text-2xl font-bold text-accent">50+</div>
                <div className="text-gray-400">Projects</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-accent">8+</div>
                <div className="text-gray-400">Years Exp</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-accent">100%</div>
                <div className="text-gray-400">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Three.js Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-64 xs:h-80 sm:h-96 md:h-[600px] relative hidden md:block"
          >
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <SkillOrb />
          </Canvas>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-xs sm:text-sm text-gray-400 mb-2">Scroll to explore</span>
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
