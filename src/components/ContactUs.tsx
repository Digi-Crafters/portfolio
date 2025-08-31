'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Send,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  ExternalLink,
  ArrowRight,
  Zap
} from 'lucide-react';

const ContactUs = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  // WhatsApp phone number - replace with your actual number
  const whatsappNumber = '1234567890'; // Format: international format without + or spaces

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {
      name: '',
      email: '',
      message: '',
    };
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Format the message for WhatsApp
      const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
      
      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }
  };

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

  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 bg-black text-white relative overflow-hidden">
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
              Get In Touch
              <Sparkles className="w-4 h-4 text-[#b3e0f7]" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-[#e3f6fd] to-white bg-clip-text text-transparent">
            Contact Us
          </h2>
          
          <p className="text-lg max-w-2xl mx-auto text-[#e3f6fd]">
            Ready to bring your ideas to life? Reach out and 
            <span className="text-white font-semibold"> let&apos;s create something amazing together</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 relative overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <form onSubmit={handleSubmit}>
              <motion.div className="mb-6" variants={itemVariants}>
                <label htmlFor="name" className="block text-[#e3f6fd] mb-2 text-sm">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-white/10 border ${formErrors.name ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#e3f6fd] transition-all duration-300`}
                  placeholder="John Doe"
                />
                {formErrors.name && <p className="text-red-400 text-xs mt-1">{formErrors.name}</p>}
              </motion.div>

              <motion.div className="mb-6" variants={itemVariants}>
                <label htmlFor="email" className="block text-[#e3f6fd] mb-2 text-sm">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-white/10 border ${formErrors.email ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#e3f6fd] transition-all duration-300`}
                  placeholder="john@example.com"
                />
                {formErrors.email && <p className="text-red-400 text-xs mt-1">{formErrors.email}</p>}
              </motion.div>

              <motion.div className="mb-6" variants={itemVariants}>
                <label htmlFor="subject" className="block text-[#e3f6fd] mb-2 text-sm">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#e3f6fd] transition-all duration-300"
                  placeholder="Project Inquiry"
                />
              </motion.div>

              <motion.div className="mb-6" variants={itemVariants}>
                <label htmlFor="message" className="block text-[#e3f6fd] mb-2 text-sm">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full bg-white/10 border ${formErrors.message ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#e3f6fd] transition-all duration-300`}
                  placeholder="Tell us about your project..."
                ></textarea>
                {formErrors.message && <p className="text-red-400 text-xs mt-1">{formErrors.message}</p>}
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  className="group relative w-full px-6 py-4 bg-gradient-to-r from-[#e3f6fd] to-white text-black font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#e3f6fd]/25 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#e3f6fd] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative flex items-center gap-2">
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </span>
                </motion.button>
                <p className="text-center text-xs text-[#e3f6fd]/60 mt-4">
                  * By clicking Send, you&apos;ll be redirected to WhatsApp to complete your message
                </p>
              </motion.div>
            </form>

            {/* Decorative Elements */}
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-r from-[#e3f6fd]/30 to-white/10 rounded-full blur-3xl opacity-20" />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 mb-8"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">Let&apos;s Connect</h3>
              <p className="text-[#e3f6fd] mb-8">
                We&apos;re available to answer your questions and discuss your project needs. Reach out to us through any of these channels.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-white/10 rounded-lg mr-4">
                    <MessageSquare className="w-5 h-5 text-[#e3f6fd]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">WhatsApp</h4>
                    <p className="text-[#e3f6fd]">+1 (123) 456-7890</p>
                    <a 
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm flex items-center gap-1 text-[#b3e0f7] mt-1 hover:underline"
                    >
                      Message directly <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-white/10 rounded-lg mr-4">
                    <Phone className="w-5 h-5 text-[#e3f6fd]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <p className="text-[#e3f6fd]">+1 (123) 456-7890</p>
                    <p className="text-sm text-[#e3f6fd]/70">Monday-Friday, 9AM-5PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-white/10 rounded-lg mr-4">
                    <Mail className="w-5 h-5 text-[#e3f6fd]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-[#e3f6fd]">contact@digicrafters.com</p>
                    <p className="text-sm text-[#e3f6fd]/70">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-white/10 rounded-lg mr-4">
                    <MapPin className="w-5 h-5 text-[#e3f6fd]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Office</h4>
                    <p className="text-[#e3f6fd]">123 Digital Avenue</p>
                    <p className="text-[#e3f6fd]">Tech City, TC 10101</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-4 text-white">Ready for a Quick Chat?</h3>
              <p className="text-[#e3f6fd] mb-6">
                Skip the form and get in touch instantly through WhatsApp
              </p>
              <motion.a
                href={`https://wa.me/${whatsappNumber}?text=Hi%20Digi-Crafters%2C%20I%27m%20interested%20in%20your%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-4 bg-[#25d366] text-black font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#25d366]/25"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageSquare className="w-5 h-5" />
                Chat on WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
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
        <Zap className="text-white/10" />
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
        <Sparkles className="text-white/10" />
      </motion.div>
    </section>
  );
};

export default ContactUs;