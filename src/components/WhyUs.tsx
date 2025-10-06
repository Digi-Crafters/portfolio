'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  BarChart2,
  Award,
  CheckCircle,
  TrendingUp,
  Sparkles,
  Globe
} from 'lucide-react';

const WhyUs = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const steps = [
    {
      id: 1,
      icon: Briefcase,
      title: "You Have a Business",
      content: "You've built something people already love — a hotel, a bakery, a brand. Your service has quality, but your reach is limited to word of mouth and walk-ins. Imagine your brand being seen by thousands of customers searching online.",
      highlights: [
        "Established physical business",
        "Limited digital presence",
        "Ready to expand your reach"
      ],
      color: "from-[#e3f6fd] to-white"
    },
    {
      id: 2,
      icon: BarChart2,
      title: "The Challenges You Face",
      content: "Google shows options, but your website makes the decision happen. Without an online presence, customers often choose competitors who appear first. Every day offline means missed bookings, missed sales, and missed growth.",
      highlights: [
        "Invisible to online searches",
        "Losing to digital competitors",
        "Missing growth opportunities"
      ],
      color: "from-white to-[#e3f6fd]"
    },
    {
      id: 3,
      icon: Award,
      title: "Our Specialties – Why Choose Us",
      content: "Custom, easy-to-manage websites designed to showcase your unique business. Mobile-friendly & SEO-optimized, so you show up where customers are searching. Affordable & growth-focused, with ongoing support to help your business thrive online.",
      highlights: [
        "Custom, user-friendly websites",
        "Mobile-first & SEO optimized",
        "Affordable with ongoing support"
      ],
      color: "from-[#e3f6fd] to-white"
    }
  ];
  const openWhatsApp = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    const message = encodeURIComponent(
      "Hi! I'm interested in starting a project with Digi-Crafters. Can we discuss?"
    );

    if (phoneNumber) {
      // WhatsApp Web/App URL format
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappURL, "_blank");
    } else {
      console.error("WhatsApp number not found in environment variables");
      // Fallback - you could show an alert or redirect to contact form
      alert(
        "WhatsApp contact not available. Please contact us through other means."
      );
    }
  };
  return (
    <section id="why-us" className="py-20 px-4 md:px-8 lg:px-16 bg-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* White gradients as orbs */}
        <motion.div 
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/20 rounded-full blur-3xl"
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

      <div className="container mx-auto max-w-6xl relative">
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
              Value Proposition
              <Sparkles className="w-4 h-4 text-[#b3e0f7]" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-[#e3f6fd] to-white bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          
          <p className="text-lg max-w-2xl mx-auto text-[#e3f6fd]">
            We understand your business journey and
            <span className="text-white font-semibold"> deliver solutions that drive real results</span>
          </p>
        </motion.div>

        {/* Cards Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className={`relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden ${
                activeCard === step.id ? 'ring-2 ring-[#e3f6fd]' : ''
              }`}
              onMouseEnter={() => setActiveCard(step.id)}
              onMouseLeave={() => setActiveCard(null)}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {/* Card top accent line */}
              <div className={`h-1 w-full bg-gradient-to-r ${step.color}`}></div>
              
              <div className="p-8">
                {/* Icon and step number */}
                <div className="flex justify-between items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-[#e3f6fd]" />
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-lg font-bold text-white">
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {step.title}
                </h3>
                
                <p className="text-[#e3f6fd] mb-8">
                  {step.content}
                </p>
                
                {/* Highlights */}
                <ul className="space-y-3">
                  {step.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#e3f6fd] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card number - decorative watermark */}
              <div className="absolute -bottom-8 -right-8 text-[140px] font-bold text-white/5 select-none">
                {step.id}
              </div>
              
              {/* Hover effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-[#e3f6fd]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === step.id ? 0.1 : 0 }}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xl text-[#e3f6fd] max-w-3xl mx-auto mb-8">
            Ready to transform your business with a digital presence that attracts new customers and builds your brand?
          </p>
          
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-[#e3f6fd] to-white text-black font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#e3f6fd]/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openWhatsApp}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#e3f6fd] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative">Start Your Digital Journey</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-20 text-6xl opacity-10"
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
        <Globe className="text-white" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 left-20 text-4xl opacity-10"
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
        <TrendingUp className="text-white" />
      </motion.div>
    </section>
  );
};

export default WhyUs;