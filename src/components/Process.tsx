import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description: 'We discuss your vision, requirements, timeline, and budget to create a detailed project roadmap.',
  },
  {
    number: '02',
    title: 'Design & Architecture',
    description: 'I design the system architecture, create mockups, and get your approval before development begins.',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Agile development with regular updates. You get access to progress reports and demo builds.',
  },
  {
    number: '04',
    title: 'Testing & Optimization',
    description: 'Comprehensive testing, bug fixes, performance optimization, and security hardening.',
  },
  {
    number: '05',
    title: 'Deployment & Support',
    description: 'Production deployment, monitoring setup, and ongoing support for any issues or improvements.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export default function Process() {
  return (
    <section id="process" className="py-16 sm:py-20 md:py-24 px-4 xs:px-4 sm:px-6 lg:px-8 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
        <div className="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="section-title text-4xl sm:text-5xl md:text-6xl">How It Works</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mt-4">
            A streamlined process to turn your idea into reality
          </p>
        </motion.div>

        {/* Desktop timeline - visible on lg and up */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden lg:grid grid-cols-5 gap-4 mb-20"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative"
            >
              <div className="card-dark h-full">
                <div className="text-4xl sm:text-5xl font-bold text-accent opacity-20 mb-2">
                  {step.number}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent to-transparent" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile & Tablet timeline - visible below lg */}
        <div className="lg:hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="card-dark"
              >
                <div className="text-4xl font-bold text-accent opacity-20 mb-2">
                  {step.number}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Vertical connector line for mobile/tablet */}
          <div className="relative mt-8 md:hidden">
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-primary to-accent" />
            <div className="ml-8 space-y-6">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  <div className="absolute -left-10 w-6 h-6 rounded-full bg-accent top-2" />
                  {index < steps.length - 1 && (
                    <div className="absolute -left-9 top-8 w-px h-6 bg-gradient-to-b from-primary to-accent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )}