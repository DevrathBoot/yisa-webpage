"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Home as HomeIcon,
  Building2,
  TrendingUp,
  Shield,
  Users,
  CheckCircle,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import { homeContent, siteConfig } from "@/content";

export default function Home() {
  // Structured data for homepage using content config
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": siteConfig.siteName,
    "url": siteConfig.domain,
    "logo": `${siteConfig.domain}/yisa-logo.svg`,
    "description": siteConfig.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${siteConfig.address.street}, ${siteConfig.address.suite}`,
      "addressLocality": siteConfig.address.city,
      "addressRegion": siteConfig.address.state,
      "postalCode": siteConfig.address.zipCode,
      "addressCountry": siteConfig.address.country
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteConfig.phone.replace(/\s+/g, '-').replace(/[()]/g, ''),
      "contactType": "customer service",
      "email": siteConfig.email
    },
    "serviceArea": "Australia",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Financial Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Home Loans",
            "description": "Tailored financing solutions for homeownership goals"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Loans",
            "description": "Strategic financial support for business growth"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Development Finance",
            "description": "Comprehensive financing for development projects"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Image
                src="/yisa-logo.svg"
                alt="Yisa Finance Solutions"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex space-x-8"
            >
              <Link href="/" className="text-gray-900 hover:text-red-600 transition-colors">
                {homeContent.navigation.home}
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-red-600 transition-colors">
                {homeContent.navigation.services}
              </Link>
              <Link href="/about-us" className="text-gray-700 hover:text-red-600 transition-colors">
                {homeContent.navigation.about}
              </Link>
              <Link href="/contact-us" className="text-gray-700 hover:text-red-600 transition-colors">
                {homeContent.navigation.contact}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/contact-us"
                className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors"
              >
                {homeContent.navigation.cta}
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-linear-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {homeContent.hero.title}{" "}
                <span className="text-red-600">{homeContent.hero.titleHighlight}</span>{" "}
                {homeContent.hero.titleSuffix}
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                {homeContent.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact-us"
                    className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold 
                             hover:bg-red-700 transition-colors flex items-center justify-center"
                  >
                    {homeContent.hero.primaryCTA}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/services"
                    className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full 
                             font-semibold hover:border-red-600 hover:text-red-600 transition-colors 
                             flex items-center justify-center"
                  >
                    {homeContent.hero.secondaryCTA}
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-linear-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  {homeContent.stats.items.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold">{stat.number}</div>
                      <div className="text-red-100">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Yisa Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Yisa Financial Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Yisa Finance Solutions combines industry-leading financial insight with
              personalized strategies, empowering your business to achieve financial success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-12 w-12 text-red-600" />,
                title: "A Legacy of Trust and Excellence",
                description: "Recognized for deep industry knowledge and strong commitment to client success."
              },
              {
                icon: <Users className="h-12 w-12 text-red-600" />,
                title: "Commitment to Client Success",
                description: "Building long-term relationships with exceptional service and strategic advice."
              },
              {
                icon: <TrendingUp className="h-12 w-12 text-red-600" />,
                title: "Comprehensive Financial Solutions",
                description: "From personal planning to business solutions, we address all your financial needs."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <Link
              href="/services"
              className="text-red-600 font-semibold hover:text-red-700 transition-colors"
            >
              Know More →
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <HomeIcon className="h-16 w-16 text-red-600" />,
                title: "Home Loans",
                description: "Tailored financing solutions for various homeownership goals, from first-time buyers to property investors."
              },
              {
                icon: <Building2 className="h-16 w-16 text-red-600" />,
                title: "Commercial Loans",
                description: "Strategic financial support to fuel business growth and enhance operational efficiency."
              },
              {
                icon: <TrendingUp className="h-16 w-16 text-red-600" />,
                title: "Development Finance",
                description: "Comprehensive financing for developers tackling residential to commercial properties."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Understanding Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are dedicated to making your financial journey smooth and transparent.
              Here's how we collaborate with you to exceed your financial goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              "Initial Consultation",
              "Financial Assessment",
              "Solution Customization",
              "Implementation",
              "Ongoing Support"
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center 
                               justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-gray-900">{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              We are optimists who love to work together
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Ready to start your financial journey? Let's work together to achieve your goals.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact-us"
                className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold 
                         hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/yisa-logo.svg"
                alt="Yisa Finance Solutions"
                width={120}
                height={40}
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400">
                Expert financial guidance for your success.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/" className="text-gray-400 hover:text-white transition-colors block">
                  Home
                </Link>
                <Link href="/about-us" className="text-gray-400 hover:text-white transition-colors block">
                  About Us
                </Link>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors block">
                  Services
                </Link>
                <Link href="/contact-us" className="text-gray-400 hover:text-white transition-colors block">
                  Contact Us
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <div className="space-y-2 text-gray-400">
                <div>Home Loans</div>
                <div>Commercial Loans</div>
                <div>Development Finance</div>
                <div>Financial Planning</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  info@yisafinance.com
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  123 Finance St, City
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Yisa Finance Solutions. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
