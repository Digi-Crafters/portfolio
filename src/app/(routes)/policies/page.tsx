"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Code2,
  Database,
  CreditCard,
  Truck,
  Settings,
  FileCheck,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Globe,
  Lock,
  Users,
} from "lucide-react";
import Link from "next/link";

const PoliciesPage = () => {
  const policies = [
    {
      id: 1,
      title: "Website Ownership Policy",
      description:
        "Complete transparency about what you own vs what we own. Final website, domain, hosting, and all assets belong to you.",
      icon: Shield,
      link: "/policies/website-ownership",
      features: [
        "Client owns final website design & content",
        "Domain name & hosting account ownership",
        "Database & customer data ownership",
        "Media assets provided by client",
        "Source code handover after payment",
      ],
      color: "from-blue-400 to-cyan-400",
    },
    {
      id: 2,
      title: "Payment Gateway Ownership Policy",
      description:
        "Payment gateway accounts legally belong to you. All payments go directly to your bank account with 100% security.",
      icon: CreditCard,
      link: "/policies/payment-gateway",
      features: [
        "Client creates & owns payment account",
        "Direct settlement to your bank",
        "We never store your API keys",
        "Full refund & dispute management control",
        "Integration & configuration by us",
      ],
      color: "from-green-400 to-emerald-400",
    },
    {
      id: 3,
      title: "Database & Hosting Ownership Policy",
      description:
        "You own all your data. We set up hosting and databases, but you maintain complete control and ownership.",
      icon: Database,
      link: "/policies/database-hosting",
      features: [
        "Client owns all database content",
        "Complete customer information ownership",
        "Hosting account in client's name",
        "Data privacy guaranteed",
        "Backup access after handover",
      ],
      color: "from-purple-400 to-pink-400",
    },
    {
      id: 4,
      title: "Source Code Ownership Policy",
      description:
        "After full payment, you own the complete source code. We only retain reusable components for efficiency.",
      icon: Code2,
      link: "/policies/source-code",
      features: [
        "Final frontend & backend code ownership",
        "UI/UX assets created for your project",
        "Lifetime license for business use",
        "Reusable components remain with us",
        "Complete documentation provided",
      ],
      color: "from-orange-400 to-red-400",
    },
    {
      id: 5,
      title: "Website Delivery & Handover",
      description:
        "Clear process of what you receive when your project is complete. Everything you need for full control.",
      icon: Truck,
      link: "/policies/delivery-handover",
      features: [
        "Complete website source code",
        "Hosting & DNS configuration",
        "Admin panel access",
        "Payment gateway integration",
        "Documentation & training",
      ],
      color: "from-teal-400 to-blue-400",
    },
    {
      id: 6,
      title: "Website Maintenance Agreement",
      description:
        "Ongoing support options to keep your website secure, updated, and performing at its best.",
      icon: Settings,
      link: "/policies/maintenance",
      features: [
        "Bug fixes & security patches",
        "Database monitoring",
        "Library & package updates",
        "Backup management",
        "Performance optimization",
      ],
      color: "from-indigo-400 to-purple-400",
    },
    {
      id: 7,
      title: "Client Contract",
      description:
        "Full legal agreement in simple language covering project scope, payments, timelines, and responsibilities.",
      icon: FileCheck,
      link: "/policies/client-contract",
      features: [
        "Clear project scope & deliverables",
        "Transparent payment terms",
        "Timeline commitments",
        "Revision policy",
        "Confidentiality & liability",
      ],
      color: "from-amber-400 to-orange-400",
    },
  ];

  const commitment = [
    {
      icon: Shield,
      title: "100% Transparency",
      description: "No hidden terms or surprise charges",
    },
    {
      icon: Lock,
      title: "Complete Ownership",
      description: "You own your digital assets completely",
    },
    {
      icon: Users,
      title: "Client-First Approach",
      description: "Your success is our priority",
    },
    {
      icon: Globe,
      title: "No Lock-in Period",
      description: "Freedom to choose what's best for you",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white pt-16 overflow-hidden">
      {/* Background elements - Fixed positioning */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-4 w-72 h-72 bg-white/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-4 w-72 h-72 bg-[#e3f6fd]/20 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8">
        {/* Header - Mobile optimized */}
        <motion.div
          className="text-center mb-12 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-xs font-medium">
              <Sparkles className="w-3 h-3 text-[#b3e0f7]" />
              Policies & Agreements
              <Sparkles className="w-3 h-3 text-[#b3e0f7]" />
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-[#e3f6fd] to-white bg-clip-text text-transparent leading-tight">
            Our Policies
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#e3f6fd] max-w-2xl mx-auto leading-relaxed px-2">
            Complete transparency in everything we do. Our policies ensure
            <span className="text-white font-semibold">
              {" "}
              you maintain 100% control and ownership
            </span>{" "}
            of your digital assets.
          </p>
        </motion.div>

        {/* Commitment Section - Mobile grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {commitment.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-4 sm:p-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl text-center"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#e3f6fd]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">
                {item.title}
              </h3>
              <p className="text-[#e3f6fd] text-xs sm:text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Policies Grid - Single column on mobile */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {policies.map((policy) => (
            <motion.div
              key={policy.id}
              variants={itemVariants}
              className="group relative p-4 sm:p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              {/* Header - Stack on mobile */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div
                  className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${policy.color} bg-opacity-10 w-12 h-12 sm:w-auto sm:h-auto flex items-center justify-center flex-shrink-0`}
                >
                  <policy.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#e3f6fd]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 leading-tight">
                    {policy.title}
                  </h3>
                  <p className="text-[#e3f6fd] text-sm sm:text-base leading-relaxed">
                    {policy.description}
                  </p>
                </div>
              </div>

              {/* Features - Compact on mobile */}
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {policy.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#e3f6fd] flex-shrink-0 mt-0.5" />
                    <span className="text-white text-xs sm:text-sm leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button - Full width on mobile */}
              <motion.a
                href={policy.link}
                className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white/5 border border-white/20 text-white rounded-lg sm:rounded-xl hover:bg-white/10 transition-all duration-300 group/btn text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View Full Policy</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
              </motion.a>

              {/* Hover Effect */}
              <div
                className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r ${policy.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA - Mobile optimized */}
        <motion.div
          className="text-center mt-12 sm:mt-16 p-4 sm:p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Have Questions About Our Policies?
          </h3>
          <p className="text-[#e3f6fd] text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
            We believe in complete transparency. If you have any questions about
            our policies or want clarification on any point, we&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <motion.a
              href="/#contact"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/5 border border-white/20 text-white rounded-lg sm:rounded-xl hover:bg-white/10 transition-all duration-300 text-sm sm:text-base text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
            <motion.a
              href="/packages"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#e3f6fd] to-white text-black font-semibold rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-300 text-sm sm:text-base text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Packages
            </motion.a>
          </div>
        </motion.div>

        {/* Quick Links - Mobile optimized */}
        <motion.div
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-[#e3f6fd] text-sm mb-3">Quick Navigation</p>
          <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm">
            <Link
              href="/"
              className="text-[#e3f6fd] hover:text-white transition-colors px-2 py-1"
            >
              Home
            </Link>
            <Link
              href="/packages"
              className="text-[#e3f6fd] hover:text-white transition-colors px-2 py-1"
            >
              Packages
            </Link>
            <Link
              href="/process"
              className="text-[#e3f6fd] hover:text-white transition-colors px-2 py-1"
            >
              Our Process
            </Link>
            <Link
              href="/contact"
              className="text-[#e3f6fd] hover:text-white transition-colors px-2 py-1"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PoliciesPage;