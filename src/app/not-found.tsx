"use client";
import React from "react";
import { easeInOut, motion } from "framer-motion";
import { Home, Search, Zap } from "lucide-react";

const NotFound = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeInOut },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center px-4">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: easeInOut,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-80 h-80 bg-white/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.18, 0.08, 0.18],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: easeInOut,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#e3f6fd]/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: easeInOut,
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.04\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 404 Number */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative inline-block">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-9xl sm:text-[150px] md:text-[200px] font-black bg-gradient-to-r from-[#e3f6fd] via-white to-[#e3f6fd] bg-clip-text text-transparent select-none leading-none"
              >
                404
              </motion.div>
              <motion.div
                className="absolute inset-0 text-9xl sm:text-[150px] md:text-[200px] font-black text-[#e3f6fd]/20 blur-xl select-none leading-none"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                404
              </motion.div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Page Not Found
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-[#e3f6fd] mb-8 max-w-xl mx-auto px-4"
          >
            Oops! We couldn&apos;t find the page you&apos;re looking for. It
            might have been moved or doesn&apos;t exist. Let&apos;s get you back
            on track.
          </motion.p>
          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4 mb-12"
          >
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 sm:py-4 bg-gradient-to-r from-[#e3f6fd] to-white text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-[#e3f6fd]/30 transition-all flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </motion.a>
            <motion.a
              href="/packages"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 sm:py-4 bg-white/5 text-white border border-white/20 font-semibold rounded-xl hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Explore Packages
            </motion.a>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-[#e3f6fd] text-sm mb-8">Quick Links</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-4">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/#about" },
                { label: "Packages", href: "/packages" },
                { label: "Contact", href: "/#contact" },
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ scale: 1.05, color: "#ffffff" }}
                  className="py-2 px-4 bg-white/5 border border-white/10 rounded-lg text-[#e3f6fd] hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Squares Animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              variants={floatingVariants}
              animate="animate"
              className="absolute w-2 h-2 bg-[#e3f6fd]/30 rounded-full"
              style={{
                left: `${20 + i * 25}%`,
                top: `${30 + i * 15}%`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
