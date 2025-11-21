"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Star,
  ArrowRight,
  Sparkles,
  Code2,
  Users,
  Crown,
  Zap
} from "lucide-react";

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [, setHoveredCard] = useState<number | null>(null);

  const packages = [
    {
      id: 1,
      name: "Starter",
      price: "₹15,000",
      originalPrice: "₹25,000",
      description: "Perfect for small businesses and personal brands",
      popular: false,
      icon: Code2,
      features: [
        "3-5 Pages Website",
        "Next.js + React",
        "Mobile Responsive",
        "Basic Animations",
        "Contact Form",
        "Basic SEO Setup",
        "Deployment + Hosting",
        "5-7 Days Delivery",
      ],
    },
    {
      id: 2,
      name: "Business",
      price: "₹30,000",
      originalPrice: "₹60,000",
      description: "For growing businesses needing professional presence",
      popular: true,
      icon: Users,
      features: [
        "6-12 Pages Website",
        "Custom UI Sections",
        "Blog/Gallery System",
        "Booking/Appointment",
        "Admin Panel (CMS)",
        "Payment Gateway",
        "SEO Optimization",
        "10-14 Days Delivery",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: "₹60,000",
      originalPrice: "₹1,20,000",
      description: "Complete ecommerce & custom solutions",
      popular: false,
      icon: Crown,
      features: [
        "Full Custom UX/UI",
        "Ecommerce Store",
        "Custom Backend",
        "Login System (Auth)",
        "API Integrations",
        "Blog + CMS",
        "Advanced Animations",
        "1-Month Support",
        "20-30 Days Delivery",
      ],
    },
  ];

  const addons = [
    { name: "Logo + Brand Kit", price: "₹5,000 - ₹15,000", icon: Code2 },
    { name: "Copywriting", price: "₹2,000/page", icon: Users },
    { name: "Custom Dashboard", price: "₹15,000 - ₹40,000", icon: Crown },
    { name: "Booking System", price: "₹8,000 - ₹20,000", icon: Zap },
    { name: "Payment Gateway", price: "₹5,000 - ₹15,000", icon: Sparkles },
    { name: "SEO Month 1", price: "₹10,000 - ₹25,000", icon: Check },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { y: -8, transition: { duration: 0.3 } },
  };

  const openWhatsApp = (packageName: string) => {
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "1234567890";
    const message = encodeURIComponent(
      `Hi! I'm interested in the ${packageName} package. Can we discuss more details?`
    );
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  const selectedPkg = selectedPackage
    ? packages.find((p) => p.id === selectedPackage)
    : null;

  return (
    <section
      id="packages"
      className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-black text-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-white/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 bg-white/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.18, 0.08, 0.18] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-[#e3f6fd]/30 rounded-full blur-2xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.04\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-xs sm:text-sm font-medium">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#b3e0f7]" />
              Pricing Plans
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#b3e0f7]" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-white via-[#e3f6fd] to-white bg-clip-text text-transparent">
            Choose Your Package
          </h2>

          <p className="text-base sm:text-lg max-w-2xl mx-auto text-[#e3f6fd] px-2">
            Transparent pricing with{" "}
            <span className="text-white font-semibold">100% ownership</span> and
            no hidden costs. Start small or go big.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {packages.map((pkg, index) => {
            const isSelected = selectedPackage === pkg.id;
            return (
              <motion.div
                key={pkg.id}
                variants={cardVariants}
                className={`relative group cursor-pointer transition-all duration-300 ${
                  isSelected ? "md:col-span-1 lg:col-span-1" : ""
                }`}
                onMouseEnter={() => setHoveredCard(pkg.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedPackage(isSelected ? null : pkg.id)}
                whileHover="hover"
              >
                <div
                  className={`h-full bg-white/5 backdrop-blur-md border rounded-2xl overflow-visible transition-all duration-300 ${
                    isSelected
                      ? "border-[#e3f6fd] ring-2 ring-[#e3f6fd] bg-white/10 shadow-lg shadow-[#e3f6fd]/20"
                      : pkg.popular
                      ? "border-white/20 ring-2 ring-[#e3f6fd]/50"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  {/* Card top accent */}
                  <div
                    className={`h-1 w-full bg-gradient-to-r from-[#e3f6fd] to-white transition-opacity duration-300 ${
                      isSelected
                        ? "opacity-100"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  ></div>

                  {/* Popular Badge */}
                  {pkg.popular && (
                    <motion.div
                      className="absolute top-6 right-6 z-20"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: index * 0.15 + 0.2,
                        type: "spring",
                        stiffness: 180,
                      }}
                    >
                      <div className="relative">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-[#e3f6fd] to-transparent rounded-full opacity-30 blur"
                        />
                        <div className="relative px-4 py-2 bg-gradient-to-r from-[#e3f6fd] via-white to-[#b3e0f7] text-black text-xs font-bold rounded-full flex items-center gap-2 shadow-xl border-2 border-white/40 backdrop-blur-xl">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <Star className="w-3.5 h-3.5 fill-black" />
                          </motion.div>
                          Most Popular
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div className="p-6 sm:p-7 md:p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4 md:mb-6">
                      <div>
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 flex items-center justify-center mb-3 md:mb-4">
                          <pkg.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#e3f6fd]" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {pkg.name}
                        </h3>
                      </div>
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#e3f6fd] flex items-center justify-center"
                        >
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                        </motion.div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-[#e3f6fd] text-sm md:text-base mb-4 md:mb-6">
                      {pkg.description}
                    </p>

                    {/* Price */}
                    <div className="mb-6 md:mb-8 pb-4 md:pb-6 border-b border-white/10">
                      <div className="flex items-baseline gap-2 md:gap-3">
                        <span className="text-3xl sm:text-4xl font-bold text-white">
                          {pkg.price}
                        </span>
                        <span className="text-[#e3f6fd] line-through text-sm md:text-base">
                          {pkg.originalPrice}
                        </span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 flex-1">
                      {pkg.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start text-sm md:text-base"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: isSelected ? i * 0.05 : 0 }}
                        >
                          <Check className="w-4 h-4 md:w-5 md:h-5 text-[#e3f6fd] mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-white/90">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <motion.button
                      className={`w-full py-3 sm:py-4 font-semibold rounded-xl backdrop-blur-sm border transition-all duration-300 group text-sm md:text-base ${
                        isSelected
                          ? "bg-gradient-to-r from-[#e3f6fd] to-white text-black border-transparent shadow-lg shadow-[#e3f6fd]/30"
                          : pkg.popular
                          ? "bg-gradient-to-r from-[#e3f6fd]/20 to-white/10 text-white border-[#e3f6fd]/50 hover:bg-gradient-to-r hover:from-[#e3f6fd]/30 hover:to-white/20"
                          : "bg-white/5 text-white border-white/20 hover:bg-white/10"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        openWhatsApp(pkg.name);
                      }}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {isSelected ? "Selected" : "Get Started"}
                        <ArrowRight
                          className={`w-4 h-4 transition-transform ${
                            isSelected
                              ? "rotate-90"
                              : "group-hover:translate-x-1"
                          }`}
                        />
                      </div>
                    </motion.button>
                  </div>

                  {/* Card watermark */}
                  <div className="absolute -bottom-8 -right-8 text-8xl sm:text-[120px] md:text-[140px] font-bold text-white/5 select-none pointer-events-none">
                    {pkg.id}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Selected Package Summary */}
        <AnimatePresence>
          {selectedPkg && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-12 md:mb-16 p-4 sm:p-6 md:p-8 bg-gradient-to-r from-[#e3f6fd]/10 to-white/5 border border-[#e3f6fd]/30 rounded-2xl backdrop-blur-md"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-[#e3f6fd] text-sm mb-1">You selected:</p>
                  <p className="text-white text-lg md:text-xl font-semibold">
                    {selectedPkg.name} Package - {selectedPkg.price}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openWhatsApp(selectedPkg.name)}
                  className="px-6 md:px-8 py-3 bg-gradient-to-r from-[#e3f6fd] to-white text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-[#e3f6fd]/30 transition-all w-full sm:w-auto"
                >
                  Contact on WhatsApp
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Addons Section */}
        <motion.div
          className="text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            Additional Services
          </h3>
          <p className="text-[#e3f6fd] text-sm md:text-base max-w-2xl mx-auto px-2">
            Enhance your package with these popular add-ons
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {addons.map((addon, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-4 sm:p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-2 md:p-3 bg-white/10 rounded-xl flex-shrink-0">
                  <addon.icon className="w-5 h-5 md:w-6 md:h-6 text-[#e3f6fd]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-semibold text-sm md:text-base mb-1 truncate">
                    {addon.name}
                  </h4>
                  <p className="text-[#e3f6fd] text-xs md:text-sm">
                    {addon.price}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="text-center pt-8 md:pt-12 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8 text-[#e3f6fd] text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 md:w-5 md:h-5 text-[#e3f6fd]" />
              <span>100% Client Ownership</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 md:w-5 md:h-5 text-[#e3f6fd]" />
              <span>No Lock-in Period</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 md:w-5 md:h-5 text-[#e3f6fd]" />
              <span>Source Code Handover</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;
