"use client";
import React from "react";
import { motion } from "framer-motion";
import { Settings, Check, ArrowLeft, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

const MaintenancePolicy = () => {
  const plans = [
    {
      name: "Basic Maintenance",
      price: "₹1,500/month",
      features: [
        "Bug fixes and error resolution",
        "Security patches and updates",
        "Database monitoring and optimization",
        "Library/package updates",
        "Basic backup management",
        "Uptime monitoring",
        "Email support during business hours"
      ]
    },
    {
      name: "Standard Maintenance",
      price: "₹3,500/month",
      popular: true,
      features: [
        "Everything in Basic Plan",
        "Priority bug fixes (24-48 hour response)",
        "Advanced security monitoring",
        "Automated daily backups",
        "Performance optimization",
        "Minor text/image changes (up to 2 hours/month)",
        "Broken link fixing",
        "Phone + Email support"
      ]
    },
    {
      name: "Premium Maintenance",
      price: "₹6,500/month",
      features: [
        "Everything in Standard Plan",
        "Small feature updates and additions",
        "Advanced performance tuning",
        "24/7 website monitoring",
        "Emergency support (12-hour response)",
        "Monthly health and performance reports",
        "Third-party integration support",
        "Dedicated support manager"
      ]
    }
  ];

  const included = [
    "Bug fixes and troubleshooting",
    "Security patches and vulnerability fixes",
    "Database monitoring and optimization",
    "Library and package updates",
    "Backup management and restoration",
    "Minor text and image changes",
    "Broken link detection and fixing",
    "Website health checks and reporting"
  ];

  const notIncluded = [
    "New page creation or design",
    "New feature development",
    "Website redesigns",
    "Major functionality updates",
    "Backend or UI rebuilding",
    "Third-party platform upgrades",
    "Content writing and creation",
    "Marketing campaign setup"
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="relative z-10 container mx-auto px-6 py-12 max-w-6xl">
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
              <Settings className="w-4 h-4 text-[#b3e0f7]" />
              Maintenance Policy
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#e3f6fd] to-white bg-clip-text text-transparent">
            Website Maintenance Agreement
          </h1>
          
          <p className="text-xl text-[#e3f6fd] max-w-3xl mx-auto">
            Ongoing support options to keep your website secure, updated, and performing at its best.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Introduction */}
          <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-center">
            <p className="text-[#e3f6fd] text-lg">
              Keep your website running smoothly with our comprehensive maintenance plans. 
              Choose the level of support that matches your business needs.
            </p>
          </div>

          {/* Maintenance Plans */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Maintenance Plans</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className={`p-6 bg-white/5 backdrop-blur-md border rounded-2xl ${
                    plan.popular ? "border-[#e3f6fd] ring-2 ring-[#e3f6fd]" : "border-white/10"
                  }`}
                >
                  {plan.popular && (
                    <div className="flex justify-center mb-4">
                      <div className="flex items-center gap-1 px-4 py-1 bg-gradient-to-r from-[#e3f6fd] to-white text-black text-sm font-bold rounded-full">
                        <Zap className="w-3 h-3 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-3xl font-bold text-white">{plan.price}</p>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#e3f6fd] flex-shrink-0 mt-0.5" />
                        <span className="text-white text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* What's Included vs Not Included */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Check className="w-6 h-6 text-green-400" />
                What&apos; Included
              </h3>
              <ul className="space-y-3">
                {included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Settings className="w-6 h-6 text-amber-400" />
                Not Included (Extra)
              </h3>
              <ul className="space-y-3">
                {notIncluded.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Settings className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Support Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-6 bg-gradient-to-r from-[#e3f6fd]/10 to-white/10 border border-[#e3f6fd]/20 rounded-2xl text-center"
          >
            <div className="flex justify-center mb-4">
              <Sparkles className="w-8 h-8 text-[#e3f6fd]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Continuous Support</h3>
            <p className="text-[#e3f6fd]">
              Our maintenance plans ensure your website remains secure, fast, and up-to-date with the latest technologies and security standards.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MaintenancePolicy;