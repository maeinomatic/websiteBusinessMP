import { motion } from 'framer-motion'

const services = [
  {
    id: 1,
    title: 'Starter',
    price: '$500 - $1,500',
    duration: '1-2 weeks',
    description: 'Small features, bug fixes, landing pages',
    features: [
      'Landing page design',
      'API integration',
      'React components',
      'Responsive design',
    ],
    cta: 'Get Started',
  },
  {
    id: 2,
    title: 'Professional',
    price: '$2,000 - $5,000',
    duration: '3-6 weeks',
    description: 'Full applications, complex features',
    features: [
      'Full-stack web app',
      'Database design',
      'Backend API',
      'Performance optimization',
      'Testing & QA',
    ],
    cta: 'Get Started',
    featured: true,
  },
  {
    id: 3,
    title: 'Enterprise',
    price: 'Custom Pricing',
    duration: '6+ weeks',
    description: 'Large-scale systems, architecture design',
    features: [
      'Scalable platforms',
      'System redesigns',
      'Technical consulting',
      'Team augmentation',
      'Priority support',
    ],
    cta: 'Get in Touch',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 px-4 xs:px-4 sm:px-6 lg:px-8 bg-dark relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="section-title text-4xl sm:text-5xl md:text-6xl">Service Packages</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mt-4">
            Flexible pricing for projects of any size. Each package includes ongoing support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`card-dark relative ${service.featured ? 'ring-2 ring-accent md:scale-105' : ''}`}
            >
              {service.featured && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-accent text-dark px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-xl sm:text-2xl font-bold mb-2">{service.title}</h3>
              <div className="mb-4">
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">{service.price}</div>
                <p className="text-gray-400 text-xs sm:text-sm">{service.duration}</p>
              </div>

              <p className="text-sm sm:text-base text-gray-300 mb-6">{service.description}</p>

              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 sm:gap-3">
                    <svg className="w-4 sm:w-5 h-4 sm:h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full ${service.featured ? 'btn-primary' : 'btn-secondary'} text-sm sm:text-base`}
              >
                {service.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Add-ons section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 md:mt-24 pt-12 sm:pt-16 border-t border-primary border-opacity-20"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">Add-Ons</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: 'Priority Support', price: '$200-500/mo' },
              { label: 'Additional Revisions', price: '$200/round' },
              { label: 'Deployment & DevOps', price: '$300-800' },
              { label: 'Performance Optimization', price: '$400-1000' },
            ].map((addon) => (
              <div key={addon.label} className="bg-darkCard rounded-lg p-4 sm:p-6 text-center border border-primary border-opacity-10 hover:border-opacity-30 transition-all duration-200">
                <p className="font-semibold text-sm sm:text-base mb-2">{addon.label}</p>
                <p className="text-accent text-xs sm:text-sm">{addon.price}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
