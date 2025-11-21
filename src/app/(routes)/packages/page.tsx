"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Check, 
  Star, 
  ArrowRight,
  Sparkles,
  Code2,
  Users,
  Crown,
  Zap,
  Calendar,
  Palette,
  Database,
  Cloud,
  Shield,
  Globe,
  FileText,
  HeadphonesIcon
} from "lucide-react";

const PackagesPage = () => {
  const [activeTab, setActiveTab] = useState("packages");

  const packages = [
    {
      id: 1,
      name: "Starter Website",
      price: "₹10,000",
      originalPrice: "₹15,000",
      description: "Perfect for small businesses, personal brands, creators, and basic portfolio websites",
      popular: false,
      icon: Code2,
      delivery: "5-10 days",
      pages: "3-5 pages",
      bestFor: "Small businesses, personal brands, creators",
      features: [
        "3-5 Pages (Home, About, Services, Contact)",
        "Built using Next.js + React",
        "Fully Mobile Responsive",
        "Animations & Interactions",
        "Contact Form Integration",
        "SEO Setup (Title, Description, OG tags)",
        "Deployment + Hosting Setup",
        "Domain Configuration",
        "Speed Optimized"
      ],
      includes: [
        "Source Code Ownership",
        "Lifetime Website Usage",
        "1 Month Basic Support",
        "Documentation"
      ]
    },
    {
      id: 2,
      name: "Business Site",
      price: "₹25,000",
      originalPrice: "₹40,000",
      description: "For gyms, salons, influencers, consultants, professionals, and mid-size businesses",
      popular: true,
      icon: Users,
      delivery: "10-14 days",
      pages: "6-12 pages",
      bestFor: "Gyms, Salons, Consultants, Professionals,Cafes",
      features: [
        "6-12 Custom Pages",
        "Custom UI Sections & Design",
        "Blog or Gallery System",
        "Booking/Appointment System",
        "Social Media Integration",
        "Advanced SEO + On-page Optimization",
        "Speed Optimized Build",
        "Basic Admin Panel (CMS)",
        "Payment Gateway Setup (Razorpay/Stripe)",
        "Lead Generation Forms",
        "Performance Monitoring",
        "SSL Certificate"
      ],
      includes: [
        "Full Source Code Ownership",
        "Admin Panel Access",
        "2 Months Support",
        "Complete Documentation",
        "Training Session"
      ]
    },
    {
      id: 3,
      name: "Premium Ecommerce",
      price: "₹50,000",
      originalPrice: "₹80,000",
      description: "Complete ecommerce solutions for influencers with digital products, shops, and online stores",
      popular: false,
      icon: Crown,
      delivery: "20-30 days",
      pages: "Custom Pages",
      bestFor: "Ecommerce Stores, Digital Products, Brands",
      features: [
        "Full Custom UX/UI Design",
        "Complete Ecommerce Store",
        "Product Management System",
        "Shopping Cart + Checkout",
        "Payment Gateway Integration",
        "User Login System (Auth)",
        "Order Management Dashboard",
        "Inventory Management",
        "Reviews & Rating System",
        "Advanced Animations",
        "Custom Backend (Node.js/Express)",
        "API Integrations",
        "Blog + CMS Integration",
        "Advanced SEO Setup",
        "Multi-language Support Ready"
      ],
      includes: [
        "Complete Source Code",
        "Database Ownership",
        "3 Months Premium Support",
        "Advanced Documentation",
        "Priority Updates",
        "Performance Optimization"
      ]
    }
  ];

  const addons = [
    { 
      name: "Logo + Brand Kit", 
      price: "₹5,000 – ₹15,000", 
      icon: Palette,
      description: "Professional logo design with complete brand identity guidelines",
      features: ["Logo Design", "Color Palette", "Typography", "Brand Guidelines"]
    },
    { 
      name: "Copywriting", 
      price: "₹2,000 per page", 
      icon: FileText,
      description: "Professional website content writing that converts visitors",
      features: ["SEO Optimized", "Conversion Focused", "Brand Voice", "Unlimited Revisions"]
    },
    { 
      name: "Custom Dashboard", 
      price: "₹15,000 – ₹40,000", 
      icon: Database,
      description: "Advanced admin dashboard for business management",
      features: ["Analytics", "User Management", "Content Management", "Reporting"]
    },
    { 
      name: "Booking System", 
      price: "₹8,000 – ₹20,000", 
      icon: Calendar,
      description: "Custom appointment booking and scheduling system",
      features: ["Calendar Integration", "Email Notifications", "Payment Integration", "CRM Features"]
    },
    { 
      name: "Payment Gateway", 
      price: "₹5,000 – ₹15,000", 
      icon: Cloud,
      description: "Advanced payment gateway integration beyond basic setup",
      features: ["Multiple Gateways", "Subscription Management", "Refund System", "Advanced Analytics"]
    },
    { 
      name: "SEO Month 1", 
      price: "₹10,000 – ₹25,000", 
      icon: Zap,
      description: "First month intensive SEO optimization and setup",
      features: ["Keyword Research", "On-page SEO", "Technical SEO", "Performance Report"]
    }
  ];

  const maintenancePlans = [
    {
      name: "Basic Maintenance",
      price: "₹1,500/month",
      icon: Shield,
      features: [
        "Bug Fixes & Error Resolution",
        "Security Patches & Updates",
        "Database Monitoring",
        "Library/Package Updates",
        "Basic Backup Management",
        "Uptime Monitoring",
        "Email Support"
      ]
    },
    {
      name: "Standard Maintenance",
      price: "₹3,500/month",
      icon: HeadphonesIcon,
      popular: true,
      features: [
        "Everything in Basic Plan",
        "Priority Bug Fixes",
        "Advanced Security Monitoring",
        "Automated Backups",
        "Performance Optimization",
        "Content Updates (Minor)",
        "Broken Link Fixing",
        "Phone + Email Support"
      ]
    },
    {
      name: "Premium Maintenance",
      price: "₹6,500/month",
      icon: Crown,
      features: [
        "Everything in Standard Plan",
        "Small Feature Updates",
        "Advanced Performance Tuning",
        "24/7 Monitoring",
        "Emergency Support",
        "Monthly Health Reports",
        "Third-party Integration Support",
        "Dedicated Support Manager"
      ]
    }
  ];

  const policies = [
    {
      title: "100% Ownership",
      description: "You own everything - website, domain, hosting, and data",
      icon: Shield
    },
    {
      title: "No Lock-in",
      description: "No contracts forcing you to stay. Freedom to choose",
      icon: Globe
    },
    {
      title: "Source Code",
      description: "Complete source code handover after payment",
      icon: Code2
    },
    {
      title: "Transparent Pricing",
      description: "No hidden costs. Everything included in the package",
      icon: FileText
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  const openWhatsApp = (packageName: string, isAddon: boolean = false) => {
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    const message = encodeURIComponent(
      isAddon 
        ? `Hi! I'm interested in the ${packageName} add-on service. Can we discuss more?`
        : `Hi! I'm interested in the ${packageName} package. Can we discuss more details?`
    );

    if (phoneNumber) {
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappURL, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-16 overflow-hidden">
      {/* Background elements - Fixed for mobile */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-4 w-72 h-72 bg-white/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-4 w-72 h-72 bg-[#e3f6fd]/20 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8">
        {/* Header - Mobile optimized */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-xs font-medium">
              <Sparkles className="w-3 h-3 text-[#b3e0f7]" />
              Complete Pricing & Packages
              <Sparkles className="w-3 h-3 text-[#b3e0f7]" />
            </div>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-[#e3f6fd] to-white bg-clip-text text-transparent leading-tight">
            Our Packages
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-[#e3f6fd] max-w-2xl mx-auto leading-relaxed px-2">
            Choose the perfect solution for your business. Everything you need to succeed online, 
            with <span className="text-white font-semibold">100% transparency and ownership</span>.
          </p>
        </motion.div>

        {/* Navigation Tabs - Mobile scrollable */}
        <motion.div 
          className="flex overflow-x-auto pb-2 mb-8 sm:mb-12 gap-2 sm:gap-4 scrollbar-hide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {["packages", "addons", "maintenance"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-shrink-0 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeTab === tab
                  ? "bg-gradient-to-r from-[#e3f6fd] to-white text-black"
                  : "bg-white/5 text-white border border-white/20 hover:bg-white/10"
              }`}
            >
              {tab === "packages" && "Packages"}
              {tab === "addons" && "Add-ons"}
              {tab === "maintenance" && "Maintenance"}
            </button>
          ))}
        </motion.div>

        {/* Main Packages */}
        {activeTab === "packages" && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 sm:space-y-12"
          >
            {/* Trust Policies - Mobile grid */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto"
              variants={containerVariants}
            >
              {policies.map((policy, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-4 sm:p-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl text-center"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                    <policy.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#e3f6fd]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">
                    {policy.title}
                  </h3>
                  <p className="text-[#e3f6fd] text-xs sm:text-sm leading-relaxed">
                    {policy.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Packages Grid - Single column on mobile */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
              variants={containerVariants}
            >
              {packages.map((pkg) => (
                <motion.div
                  key={pkg.id}
                  variants={itemVariants}
                  className={`relative group bg-white/5 backdrop-blur-md border rounded-xl sm:rounded-2xl overflow-hidden ${
                    pkg.popular 
                      ? "border-[#e3f6fd] ring-1 sm:ring-2 ring-[#e3f6fd]" 
                      : "border-white/10"
                  }`}
                >
                  {/* Popular Badge - Mobile optimized */}
                  {pkg.popular && (
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-[#e3f6fd] to-white text-black text-xs font-bold rounded-full">
                        <Star className="w-3 h-3 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="p-4 sm:p-6">
                    {/* Header - Stack on mobile */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <pkg.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#e3f6fd]" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 leading-tight">
                          {pkg.name}
                        </h3>
                        <p className="text-[#e3f6fd] text-xs sm:text-sm">
                          {pkg.bestFor}
                        </p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-4 sm:mb-6">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                          {pkg.price}
                        </span>
                        <span className="text-[#e3f6fd] text-sm sm:text-base line-through">
                          {pkg.originalPrice}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[#e3f6fd]">
                        <span>📅 {pkg.delivery}</span>
                        <span>📄 {pkg.pages}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[#e3f6fd] text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                      {pkg.description}
                    </p>

                    {/* Features - Compact on mobile */}
                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      <h4 className="text-white font-semibold text-sm sm:text-base">
                        What&apos;s Included:
                      </h4>
                      {pkg.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 sm:gap-3">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#e3f6fd] flex-shrink-0 mt-0.5" />
                          <span className="text-white text-xs sm:text-sm leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Ownership Info */}
                    <div className="space-y-2 mb-6 sm:mb-8">
                      <h4 className="text-white font-semibold text-sm sm:text-base">
                        You Receive:
                      </h4>
                      {pkg.includes.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                          <span className="text-[#e3f6fd] text-xs sm:text-sm">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      className={`w-full py-3 sm:py-4 font-semibold rounded-lg sm:rounded-xl transition-all duration-300 text-sm sm:text-base ${
                        pkg.popular
                          ? "bg-gradient-to-r from-[#e3f6fd] to-white text-black"
                          : "bg-white/5 text-white border border-white/20 hover:bg-white/10"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => openWhatsApp(pkg.name)}
                    >
                      <div className="flex items-center justify-center gap-2">
                        Get {pkg.name}
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Addons Tab */}
        {activeTab === "addons" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Enhance Your Package
              </h2>
              <p className="text-[#e3f6fd] text-sm sm:text-base max-w-2xl mx-auto px-2">
                Add these services to any package for a complete digital solution
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
              {addons.map((addon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-4 sm:p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl">
                      <addon.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#e3f6fd]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                        {addon.name}
                      </h3>
                      <p className="text-[#e3f6fd] font-semibold text-sm sm:text-base">
                        {addon.price}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-[#e3f6fd] text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                    {addon.description}
                  </p>
                  
                  <div className="space-y-2 mb-4 sm:mb-6">
                    {addon.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#e3f6fd]" />
                        <span className="text-white text-xs sm:text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    className="w-full py-2.5 sm:py-3 bg-white/5 border border-white/20 text-white rounded-lg sm:rounded-xl hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openWhatsApp(addon.name, true)}
                  >
                    Add This Service
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Maintenance Tab */}
        {activeTab === "maintenance" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Ongoing Support & Maintenance
              </h2>
              <p className="text-[#e3f6fd] text-sm sm:text-base max-w-2xl mx-auto px-2">
                Keep your website secure, updated, and performing at its best
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
              {maintenancePlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`p-4 sm:p-6 lg:p-8 bg-white/5 backdrop-blur-md border rounded-xl sm:rounded-2xl ${
                    plan.popular ? "border-[#e3f6fd] ring-1 sm:ring-2 ring-[#e3f6fd]" : "border-white/10"
                  }`}
                >
                  {plan.popular && (
                    <div className="flex justify-center mb-3 sm:mb-4">
                      <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-[#e3f6fd] to-white text-black text-xs font-bold rounded-full">
                        <Star className="w-3 h-3 fill-current" />
                        Recommended
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                      <plan.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#e3f6fd]" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      {plan.price}
                    </p>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 sm:gap-3">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#e3f6fd] flex-shrink-0 mt-0.5" />
                        <span className="text-white text-xs sm:text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    className="w-full mt-6 sm:mt-8 py-3 sm:py-4 bg-gradient-to-r from-[#e3f6fd] to-white text-black font-semibold rounded-lg sm:rounded-xl text-sm sm:text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openWhatsApp(plan.name)}
                  >
                    Get {plan.name}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Bottom CTA - Mobile optimized */}
        <motion.div 
          className="text-center mt-12 sm:mt-16 p-4 sm:p-6 lg:p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Ready to Start Your Project?
          </h3>
          <p className="text-[#e3f6fd] text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s discuss your requirements and find the perfect solution for your business
          </p>
          <motion.button
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#e3f6fd] to-white text-black font-semibold rounded-lg sm:rounded-xl text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openWhatsApp("Custom Package")}
          >
            <div className="flex items-center justify-center gap-2">
              Get Free Consultation
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default PackagesPage;  