"use client";
import React from "react";
import { motion } from "framer-motion";
import { Truck, Check, ArrowLeft, Shield, Key } from "lucide-react";
import Link from "next/link";

const DeliveryHandoverPolicy = () => {
  const sections = [
    {
      title: "Delivered Items",
      items: [
        "Complete website source code",
        "Hosting setup and configuration",
        "DNS configuration and management",
        "Admin panel (if included in package)",
        "Payment gateway integration",
        "Database setup and migration",
        "Complete documentation bundle",
        "All project assets and resources"
      ]
    },
    {
      title: "Credentials Handover",
      items: [
        "Hosting account access",
        "Content Management System (CMS) login",
        "Admin dashboard credentials",
        "Payment gateway dashboard access",
        "Domain registrar account details",
        "Third-party service accounts"
      ]
    },
    {
      title: "What We Do During Handover",
      items: [
        "Final check of all pages and functionality",
        "Performance optimization and testing",
        "SEO essentials implementation",
        "Bug fixing and quality assurance",
        "Backup generation and setup",
        "Optional training session",
        "Documentation walkthrough"
      ]
    },
    {
      title: "After Handover Completion",
      items: [
        "Client receives full ownership rights",
        "All admin passwords and access credentials",
        "Support period activation (if included)",
        "Project documentation delivery",
        "Post-launch checklist",
        "Maintenance recommendations"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="relative z-10 container mx-auto px-6 py-12 max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            href="/policies" 
            className="inline-flex items-center gap-2 text-[#e3f6fd] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Policies
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium">
              <Truck className="w-4 h-4 text-[#b3e0f7]" />
              Delivery Policy
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#e3f6fd] to-white bg-clip-text text-transparent">
            Website Delivery & Handover
          </h1>
          
          <p className="text-xl text-[#e3f6fd]">
            Clear process of what you receive when your project is complete. Everything you need for full control.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Introduction */}
          <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
            <p className="text-[#e3f6fd] text-lg">
              Our delivery process ensures you receive everything needed to manage and grow your online presence. 
              We provide complete transparency and full access to all your digital assets.
            </p>
          </div>

          {/* Policy Sections */}
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-[#e3f6fd]" />
                {section.title}
              </h2>
              
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#e3f6fd] flex-shrink-0 mt-0.5" />
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Completion Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-6 bg-gradient-to-r from-[#e3f6fd]/10 to-white/10 border border-[#e3f6fd]/20 rounded-2xl text-center"
          >
            <div className="flex justify-center mb-4">
              <Key className="w-8 h-8 text-[#e3f6fd]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Complete Control Handover</h3>
            <p className="text-[#e3f6fd]">
              After handover, you have full ownership rights and complete control over your website and all associated assets.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default DeliveryHandoverPolicy;