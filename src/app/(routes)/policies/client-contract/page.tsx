"use client";
import React from "react";
import { motion } from "framer-motion";
import { FileCheck, Check, ArrowLeft, Shield, Sparkles } from "lucide-react";
import Link from "next/link";

const ClientContractPolicy = () => {
  const sections = [
    {
      title: "1. Project Scope",
      items: [
        "Digi-Crafters will design and develop a website according to approved requirements",
        "All deliverables specified in the project proposal are included",
        "Any changes to scope require written approval and may affect timeline and cost"
      ]
    },
    {
      title: "2. Payment Terms",
      items: [
        "50% upfront payment before work begins",
        "50% balance payment before final delivery",
        "All payments are non-refundable once work has commenced",
        "Late payments may result in project pause or termination"
      ]
    },
    {
      title: "3. Deliverables",
      items: [
        "Fully responsive website as per approved design",
        "Deployment on client-owned hosting environment",
        "Payment gateway integration (if included in package)",
        "Admin/system dashboard (if included)",
        "Complete project documentation"
      ]
    },
    {
      title: "4. Ownership & Rights",
      items: [
        "Client owns final website after full payment completion",
        "Digi-Crafters retains ownership of reusable components and frameworks",
        "Client owns all data, accounts, and business information",
        "Source code handover upon project completion and payment"
      ]
    },
    {
      title: "5. Timeline & Milestones",
      items: [
        "Standard delivery: 7-30 days depending on package",
        "Timeline starts after upfront payment and content delivery",
        "Client delays in providing content may extend timeline",
        "Regular progress updates provided throughout project"
      ]
    },
    {
      title: "6. Revisions & Changes",
      items: [
        "2-3 rounds of revisions included in all packages",
        "Additional revisions billed at predetermined hourly rate",
        "Major scope changes require new quotation",
        "All change requests must be in writing"
      ]
    },
    {
      title: "7. Content Responsibility",
      items: [
        "Client provides all text, images, and business information",
        "Digi-Crafters not responsible for copyright issues with client-supplied content",
        "Client ensures all content is legally compliant",
        "Content approval required before publication"
      ]
    },
    {
      title: "8. Confidentiality",
      items: [
        "Both parties agree not to share sensitive business information",
        "Project details and business information kept confidential",
        "Non-disclosure agreement applies to all project communications",
        "Confidentiality survives project completion"
      ]
    },
    {
      title: "9. Maintenance & Support",
      items: [
        "Maintenance not included unless purchased separately",
        "Post-launch support period as specified in package",
        "Emergency support available under maintenance plans",
        "Standard bug fixes covered for 30 days after delivery"
      ]
    },
    {
      title: "10. Liability & Warranty",
      items: [
        "Digi-Crafters not responsible for hosting-related downtime",
        "Not liable for data loss due to client mismanagement",
        "Not responsible for payment gateway disputes",
        "Client responsible for legal compliance of their business",
        "90-day warranty on all development work"
      ]
    },
    {
      title: "11. Termination",
      items: [
        "Client may terminate project with written notice",
        "Advance payment non-refundable if work has commenced",
        "Work completed up to termination point belongs to Digi-Crafters unless paid",
        "Both parties may terminate for material breach"
      ]
    },
    {
      title: "12. Acceptance",
      items: [
        "Client has 7 days to report issues after final delivery",
        "Silence after 7 days constitutes acceptance",
        "Minor adjustments included during acceptance period",
        "Formal sign-off required for project completion"
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
              <FileCheck className="w-4 h-4 text-[#b3e0f7]" />
              Legal Agreement
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#e3f6fd] to-white bg-clip-text text-transparent">
            Client Contract
          </h1>
          
          <p className="text-xl text-[#e3f6fd]">
            Full legal agreement in simple language covering project scope, payments, timelines, and responsibilities.
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
              This agreement outlines the terms and conditions between Digi-Crafters and the client 
              for website development services. We believe in clear, simple language that protects both parties.
            </p>
          </div>

          {/* Contract Sections */}
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

          {/* Agreement Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-6 bg-gradient-to-r from-[#e3f6fd]/10 to-white/10 border border-[#e3f6fd]/20 rounded-2xl text-center"
          >
            <div className="flex justify-center mb-4">
              <Sparkles className="w-8 h-8 text-[#e3f6fd]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Clear & Fair Agreement</h3>
            <p className="text-[#e3f6fd]">
              We believe in fair terms that protect both parties and ensure successful project completion. 
              All terms are designed to be clear, reasonable, and focused on your success.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ClientContractPolicy;