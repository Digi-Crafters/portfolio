"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code2, Check, ArrowLeft, Shield, Sparkles } from "lucide-react";
import Link from "next/link";

const SourceCodePolicy = () => {
  const sections = [
    {
      title: "Client Owns (After Full Payment)",
      items: [
        "Final frontend source code",
        "Final backend source code",
        "All configurations & environment setup",
        "UI/UX assets created specifically for the project",
        "Complete project documentation",
        "Database schemas and migrations"
      ]
    },
    {
      title: "Digi-Crafters Owns",
      items: [
        "Reusable components (navigation bars, footers, etc.)",
        "Animations or UI kits used across projects",
        "Authentication templates and systems",
        "Internal utilities or helper functions",
        "Code libraries developed before your project",
        "Development tools and frameworks"
      ]
    },
    {
      title: "License & Usage Rights",
      items: [
        "Client receives lifetime license to use the final website",
        "Unlimited usage for their business purposes",
        "Freedom to modify and extend the code",
        "Ability to hire other developers for future work",
        "No recurring licensing fees"
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
              <Code2 className="w-4 h-4 text-[#b3e0f7]" />
              Source Code Policy
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#e3f6fd] to-white bg-clip-text text-transparent">
            Source Code Ownership Policy
          </h1>
          
          <p className="text-xl text-[#e3f6fd]">
            After full payment, you own the complete source code. We only retain reusable components for efficiency.
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
              We believe in complete transparency about code ownership. Once your project is paid in full, 
              you receive complete ownership of the source code developed specifically for your business.
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

          {/* License Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-6 bg-gradient-to-r from-[#e3f6fd]/10 to-white/10 border border-[#e3f6fd]/20 rounded-2xl text-center"
          >
            <div className="flex justify-center mb-4">
              <Sparkles className="w-8 h-8 text-[#e3f6fd]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Lifetime Usage License</h3>
            <p className="text-[#e3f6fd]">
              We grant the client a lifetime license to use the final website for their business, 
              ensuring complete freedom and control.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SourceCodePolicy;