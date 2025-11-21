"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Mail, Phone, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/packages" },
  ];

  const policyLinks = [
    { name: "Website Ownership", href: "/policies/website-ownership" },
    { name: "Payment Gateway", href: "/policies/payment-gateway" },
    { name: "Database & Hosting", href: "/policies/database-hosting" },
    { name: "Source Code", href: "/policies/source-code" },
    { name: "Delivery & Handover", href: "/policies/delivery-handover" },
    { name: "Maintenance", href: "/policies/maintenance" },
    { name: "Client Contract", href: "/policies/client-contract" }
  ];

  const serviceLinks = [
    { name: "Starter Website", href: "/packages" },
    { name: "Business Site", href: "/packages" },
    { name: "Premium Ecommerce", href: "/packages" },
    { name: "Maintenance Plans", href: "/packages" }
  ];

  const openWhatsApp = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    const message = encodeURIComponent("Hi! I'm interested in your services. Can we discuss?");
    
    if (phoneNumber) {
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    }
  };

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-6 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Code2 className="w-8 h-8 text-[#e3f6fd]" />
              <span className="text-xl font-bold text-white">Digi-Crafters</span>
            </Link>
            <p className="text-[#e3f6fd] text-sm mb-4 leading-relaxed">
              We craft digital experiences that transform ideas into reality. 
              100% client ownership, complete transparency.
            </p>
            <div className="flex items-center gap-2 text-[#e3f6fd] text-sm mb-2">
              <Mail className="w-4 h-4" />
              <span>{process.env.NEXT_PUBLIC_EMAIL}</span>
            </div>
            <button 
              onClick={openWhatsApp}
              className="flex items-center gap-2 text-[#e3f6fd] text-sm hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-[#e3f6fd] hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-[#e3f6fd] hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Policies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-4 text-lg">Policies</h3>
            <ul className="space-y-2">
              {policyLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-[#e3f6fd] hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/policies"
                  className="text-[#e3f6fd] hover:text-white transition-colors text-sm font-medium flex items-center gap-1"
                >
                  View All Policies
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-6 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#e3f6fd] text-sm text-center md:text-left">
              © {currentYear} Digi-Crafters. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-[#e3f6fd] text-sm">
              <Link href="/policies" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Optimized Spacing */}
      <div className="block md:hidden pb-8"></div>
    </footer>
  );
};

export default Footer;