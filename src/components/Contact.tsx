import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectScope: 'medium',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission to email service
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', projectScope: 'medium', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 xs:px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-darkCard to-dark relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="section-title text-4xl sm:text-5xl md:text-6xl">Let's Work Together</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mt-4">
            Have a project in mind? Let's discuss your requirements and create something amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Quick Links</h3>
                <div className="space-y-3 sm:space-y-4">
                  <a href="mailto:contact@example.com" className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-accent bg-opacity-10 rounded-lg flex items-center justify-center group-hover:bg-opacity-20 transition-colors flex-shrink-0">
                      <svg className="w-5 sm:w-6 h-5 sm:h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-gray-400">Email</p>
                      <p className="text-sm sm:text-base text-white group-hover:text-accent transition-colors truncate">contact@example.com</p>
                    </div>
                  </a>

                  <a href="https://github.com/maeinomatic" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-accent bg-opacity-10 rounded-lg flex items-center justify-center group-hover:bg-opacity-20 transition-colors flex-shrink-0">
                      <svg className="w-5 sm:w-6 h-5 sm:h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-gray-400">GitHub</p>
                      <p className="text-sm sm:text-base text-white group-hover:text-accent transition-colors truncate">github.com/maeinomatic</p>
                    </div>
                  </a>

                  <a href="https://linkedin.com/in/martin-potozki-400319125/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-accent bg-opacity-10 rounded-lg flex items-center justify-center group-hover:bg-opacity-20 transition-colors flex-shrink-0">
                      <svg className="w-5 sm:w-6 h-5 sm:h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-gray-400">LinkedIn</p>
                      <p className="text-sm sm:text-base text-white group-hover:text-accent transition-colors truncate">Martin Potozki</p>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Technologies</h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {['React', '.NET Core', 'Python', 'TypeScript', 'Node.js', 'Azure', 'PostgreSQL', 'Docker'].map(tech => (
                    <div key={tech} className="bg-primary bg-opacity-20 rounded-lg px-3 sm:px-4 py-2 text-xs sm:text-sm text-center hover:bg-opacity-30 transition-colors">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <form onSubmit={handleSubmit} className="card-dark">
              <div className="mb-4 sm:mb-6">
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-dark border border-primary border-opacity-30 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="mb-4 sm:mb-6">
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-dark border border-primary border-opacity-30 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="mb-4 sm:mb-6">
                <label htmlFor="projectScope" className="block text-xs sm:text-sm font-medium mb-2">
                  Project Scope
                </label>
                <select
                  id="projectScope"
                  name="projectScope"
                  value={formData.projectScope}
                  onChange={handleChange}
                  className="w-full bg-dark border border-primary border-opacity-30 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base text-white focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="small">Small (Starter)</option>
                  <option value="medium">Medium (Professional)</option>
                  <option value="large">Large (Enterprise)</option>
                  <option value="consulting">Consulting</option>
                </select>
              </div>

              <div className="mb-4 sm:mb-6">
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-2">
                  Project Description
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-dark border border-primary border-opacity-30 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              {submitted && (
                <div className="mb-6 p-3 sm:p-4 bg-green-500 bg-opacity-20 border border-green-500 rounded-lg text-green-400 text-xs sm:text-sm">
                  Thank you! I'll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                className="btn-primary w-full text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
