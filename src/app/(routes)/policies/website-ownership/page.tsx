"use client";
import React from "react";
import { motion } from "framer-motion";
import { Shield, Check, ArrowLeft, FileText, Sparkles } from "lucide-react";
import Link from "next/link";

const WebsiteOwnershipPolicy = () => {
  const sections = [
    {
      title: "Client Ownership",
      items: [
        "Final website (design + content)",
        "Domain name registration",
        "Hosting account access",
        "Payment gateway accounts",
        "Database & customer data",
        "Media assets provided by client (logo, photos, videos, text)",
        "Admin access to all business tools"
      ]
    },
    {
      title: "Digi-Crafters Ownership",
      items: [
        "Internal tools, frameworks, and reusable UI components",
        "Pre-built code modules developed for efficiency",
        "Custom libraries that are not unique to the project",
        "Reusable animations or templates we use across clients"
      ]
    },
    {
      title: "Shared Ownership",
      items: [
        "Custom components specifically built for your website",
        "Client can use them freely for their business",
        "We may reuse them in other projects with modifications"
      ]
    },
    {
      title: "Transfer of Ownership",
      items: [
        "Upon full payment completion",
        "Source code is handed over completely",
        "Hosting & domain are transferred to your account",
        "All admin credentials are shared",
        "Third-party services connected to client-owned accounts"
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
              <Shield className="w-4 h-4 text-[#b3e0f7]" />
              Ownership Policy
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#e3f6fd] to-white bg-clip-text text-transparent">
            Website Ownership Policy
          </h1>
          
          <p className="text-xl text-[#e3f6fd]">
            Complete transparency about what you own vs what we own. Your digital assets belong to you.
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
              At Digi-Crafters, we believe every business should have complete control over its digital assets. 
              This policy outlines what the client owns, what we own, and how ownership is transferred.
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
                <FileText className="w-6 h-6 text-[#e3f6fd]" />
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

          {/* Guarantee Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-6 bg-gradient-to-r from-[#e3f6fd]/10 to-white/10 border border-[#e3f6fd]/20 rounded-2xl text-center"
          >
            <div className="flex justify-center mb-4">
              <Sparkles className="w-8 h-8 text-[#e3f6fd]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">100% Transparency Guarantee</h3>
            <p className="text-[#e3f6fd]">
              This ensures complete client control and ownership of all your digital assets. 
              No hidden terms, no surprises.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WebsiteOwnershipPolicy;