'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Zap } from 'lucide-react';

// Service data
const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies to establish your digital presence.',
    icon: '💻',
    features: [
      'Responsive design for all devices',
      'E-commerce integration',
      'SEO optimization'
    ]
  },
  {
    id: 2,
    title: 'Digital Transformation',
    description: 'Modernize your business with digital solutions that streamline operations and enhance customer experience.',
    icon: '🚀',
    features: [
      'Process automation',
      'Digital payment systems',
      'Cloud integration'
    ]
  },
  {
    id: 3,
    title: 'E-Commerce Solutions',
    description: 'Complete online store development with secure payment processing and inventory management.',
    icon: '🛒',
    features: [
      'Shopping cart functionality',
      'Product management',
      'Order tracking system'
    ]
  },
  {
    id: 4,
    title: 'Mobile Applications',
    description: 'Cross-platform mobile apps that help you connect with customers on the go.',
    icon: '📱',
    features: [
      'iOS and Android compatible',
      'Push notifications',
      'Offline functionality'
    ]
  },
  {
    id: 5,
    title: 'Digital Marketing',
    description: 'Boost your online visibility with targeted strategies that drive traffic and conversions.',
    icon: '📊',
    features: [
      'Social media campaigns',
      'Google Ads management',
      'Analytics reporting'
    ]
  },
  {
    id: 6,
    title: 'Brand Identity',
    description: 'Create a cohesive digital identity that reflects your business values and attracts customers.',
    icon: '🎨',
    features: [
      'Logo & visual design',
      'Brand guidelines',
      'Marketing materials'
    ]
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 md:px-8 lg:px-16 bg-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* White gradients as orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.18, 0.08, 0.18],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Subtle blue orb */}
        <motion.div 
          className="absolute top-1/3 right-1/3 w-64 h-64 bg-[#e3f6fd]/30 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.04\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium">
              <Sparkles className="w-4 h-4 text-[#b3e0f7]" />
              Comprehensive Digital Solutions
              <Sparkles className="w-4 h-4 text-[#b3e0f7]" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-[#e3f6fd] to-white bg-clip-text text-transparent">
            Our Services
          </h2>
          
          <p className="text-lg max-w-2xl mx-auto text-[#e3f6fd]">
            We help businesses of all sizes establish and enhance their digital presence with 
            <span className="text-white font-semibold"> cutting-edge solutions</span>
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-lg group relative"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#e3f6fd]/5 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="p-6 relative z-10">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-white via-[#e3f6fd] to-white mb-5">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                
                <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="mb-4 text-[#e3f6fd]">{service.description}</p>
                
                <ul className="text-sm space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-[#e3f6fd]">
                      <Zap className="w-4 h-4 mr-2 text-white/70" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  className="group px-5 py-2 border-2 border-[#e3f6fd]/30 text-[#e3f6fd] font-semibold rounded-xl backdrop-blur-sm hover:bg-[#e3f6fd]/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.button>
              </div>
              
              {/* Hover Effect Gradient */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white via-[#e3f6fd] to-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-20 text-center p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="text-3xl font-semibold mb-6 text-white">
            Ready to Transform Your Business?
          </h3>
          <p className="mb-8 max-w-2xl mx-auto text-[#e3f6fd]">
            Let&apos;s discuss how we can help your business thrive in the digital world with tailored solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-[#e3f6fd] to-white text-black font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#e3f6fd]/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#e3f6fd] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="relative flex items-center gap-2">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.button>

            <motion.button
              className="group px-8 py-4 border-2 border-[#e3f6fd]/30 text-[#e3f6fd] font-semibold rounded-xl backdrop-blur-sm hover:bg-[#e3f6fd]/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                View Our Portfolio
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-20 text-6xl"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1] 
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "linear" 
        }}
      >
        <Sparkles className="text-white/10" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 left-20 text-4xl"
        animate={{ 
          rotate: [360, 0],
          y: [0, -20, 0] 
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <Zap className="text-white/10" />
      </motion.div>
    </section>
  );
};

export default Services;