"use client";
import React from "react";
import { motion } from "framer-motion";
import { CreditCard, Check, ArrowLeft, Shield, Sparkles } from "lucide-react";
import Link from "next/link";

const PaymentGatewayPolicy = () => {
  const sections = [
    {
      title: "Client Responsibilities",
      items: [
        "Create the payment gateway account in your business name",
        "Provide required business documents for verification",
        "Share API keys securely through the payment gateway dashboard",
        "Manage settlements & refunds through your own account",
        "Handle disputes and financial approvals directly"
      ]
    },
    {
      title: "Our Responsibilities",
      items: [
        "Integrate the payment gateway into your website",
        "Configure checkout, webhooks, and success/failure pages",
        "Test transactions to ensure everything works smoothly",
        "Ensure data security during integration process",
        "Provide documentation on how to manage orders/payments"
      ]
    },
    {
      title: "What We Do NOT Do",
      items: [
        "Store your API keys outside the deployment environment",
        "Receive payments on behalf of clients",
        "Handle disputes or financial approvals",
        "Create payment accounts using our business name",
        "Access your settlement funds or financial data"
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
              <CreditCard className="w-4 h-4 text-[#b3e0f7]" />
              Payment Policy
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#e3f6fd] to-white bg-clip-text text-transparent">
            Payment Gateway Ownership Policy
          </h1>
          
          <p className="text-xl text-[#e3f6fd]">
            Payment gateway legally belongs to you. All payments go directly to your bank account with 100% security.
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
              Digi-Crafters integrates payment systems like Razorpay, Stripe, and PayPal. 
              The payment gateway account is created in your business name and legally belongs to you.
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

          {/* Security Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-6 bg-gradient-to-r from-[#e3f6fd]/10 to-white/10 border border-[#e3f6fd]/20 rounded-2xl text-center"
          >
            <div className="flex justify-center mb-4">
              <Sparkles className="w-8 h-8 text-[#e3f6fd]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Secure Money Flow</h3>
            <p className="text-[#e3f6fd]">
              This ensures that all payments go directly to your bank account, 
              keeping money flow 100% secure and under your control.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentGatewayPolicy;