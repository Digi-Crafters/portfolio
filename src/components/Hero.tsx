"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Sparkles,
  ArrowRight,
  Zap,
  Globe,
  Palette,
  Smartphone,
  Database,
  Cloud,
  Users,
} from "lucide-react";

const HeroSection = () => {
  const [currentService, setCurrentService] = useState(0);

  // Use very light blue for some, white for others
  const services = [
    { icon: Code2, text: "Web Development", color: "text-[#e3f6fd]" },
    { icon: Smartphone, text: "Mobile Apps", color: "text-[#b3e0f7]" },
    { icon: Palette, text: "UI/UX Design", color: "text-white" },
    { icon: Database, text: "Backend Systems", color: "text-[#e3f6fd]" },
    { icon: Cloud, text: "Cloud Solutions", color: "text-[#b3e0f7]" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [services.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
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
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background Elements */}
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
            ease: "easeInOut",
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
            ease: "easeInOut",
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
            ease: "easeInOut",
          }}
        />

        {/* Floating Icons */}
        {[
          { left: "15%", top: "20%" },
          { left: "70%", top: "25%" },
          { left: "30%", top: "60%" },
          { left: "80%", top: "70%" },
          { left: "50%", top: "80%" },
          { left: "10%", top: "75%" },
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10"
            style={pos}
            variants={floatingVariants}
            animate="animate"
            transition={{
              delay: i * 0.5,
              duration: 3 + i * 0.5,
              repeat: Infinity,
            }}
          >
            {React.createElement(services[i % services.length].icon, {
              size: 24 + i * 4,
            })}
          </motion.div>
        ))}
        {/* Free online image for visual interest */}
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.04\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />

      {/* Main Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 py-20 lg:py-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header Badge */}
          <motion.div
            className="flex justify-center mb-8"
            variants={itemVariants}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium">
              <Sparkles className="w-4 h-4 text-[#b3e0f7]" />
              Premium Development Solutions
              <Sparkles className="w-4 h-4 text-[#b3e0f7]" />
            </div>
          </motion.div>
          
          

          {/* Main Title */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              <motion.span
                className="inline-block bg-gradient-to-r from-white via-[#e3f6fd] to-white bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Digi-Crafters
              </motion.span>
            </h1>

            <motion.p
              className="text-xl md:text-2xl text-[#e3f6fd] max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Where innovation meets expertise. We craft digital experiences
              that
              <span className="text-white font-semibold">
                {" "}
                transform ideas into reality
              </span>
            </motion.p>
          </motion.div>

          {/* Dynamic Service Display */}
          <motion.div
            className="flex justify-center mb-16"
            variants={itemVariants}
          >
            <div className="flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
              <span className="text-[#b3e0f7] text-lg">We specialize in</span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentService}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  {React.createElement(services[currentService].icon, {
                    className: `w-6 h-6 ${services[currentService].color}`,
                  })}
                  <span
                    className={`text-lg font-semibold ${services[currentService].color}`}
                  >
                    {services[currentService].text}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            variants={itemVariants}
          >
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-[#e3f6fd] to-white text-black font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#e3f6fd]/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openWhatsApp} // Add this onClick handler
            >
              <motion.div className="absolute inset-0 bg-gradient-to-r from-[#e3f6fd] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.button>

            <motion.button
              className="group px-8 py-4 border-2 border-[#e3f6fd]/30 text-[#e3f6fd] font-semibold rounded-xl backdrop-blur-sm hover:bg-[#e3f6fd]/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
            >
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                View Our Work
              </div>
            </motion.button>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={itemVariants}
          >
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized performance and quick delivery times",
                color: "from-yellow-400 to-orange-500",
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Remote collaboration with clients worldwide",
                color: "from-green-400 to-blue-500",
              },
              {
                icon: Sparkles,
                title: "Premium Quality",
                description: "Cutting-edge solutions with attention to detail",
                color: "from-purple-400 to-pink-500",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group relative p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r from-white via-[#e3f6fd] to-white mb-4`}
                >
                  <feature.icon className="w-6 h-6 text-[#b3e0f7]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#e3f6fd] leading-relaxed">
                  {feature.description}
                </p>
                {/* Hover Effect Gradient */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-white via-[#e3f6fd] to-white opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            {[
              { number: "5+", label: "Domains" },
              { number: "10+", label: "Projects Served" },
              { number: "100%", label: "Customisation" },
              { number: "24*7", label: "Availability" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-white mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-[#e3f6fd] text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-[#e3f6fd]/30 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-[#e3f6fd]/60 rounded-full mt-2"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-20 text-6xl"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Code2 className="text-white/10" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-20 text-4xl"
        animate={{
          rotate: [360, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="text-white/10" />
      </motion.div>
    </div>
  );
};

export default HeroSection;
