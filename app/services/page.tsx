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
    MapPin,
    ArrowLeft
} from "lucide-react";

export default function Services() {
    return (
        <div className="min-h-screen bg-white">
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
                            <Link href="/">
                                <Image
                                    src="/yisa-logo.svg"
                                    alt="Yisa Finance Solutions"
                                    width={120}
                                    height={40}
                                    className="h-10 w-auto"
                                />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="hidden md:flex space-x-8"
                        >
                            <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors">
                                Home
                            </Link>
                            <Link href="/services" className="text-gray-900 hover:text-red-600 transition-colors">
                                Services
                            </Link>
                            <Link href="/about-us" className="text-gray-700 hover:text-red-600 transition-colors">
                                About Us
                            </Link>
                            <Link href="/contact-us" className="text-gray-700 hover:text-red-600 transition-colors">
                                Contact Us
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
                                Get Started
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-24 pb-12 bg-linear-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center text-red-600 hover:text-red-700 transition-colors mb-6"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Home
                        </Link>
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">
                            Our <span className="text-red-600">Financial Services</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive financial solutions tailored to meet your unique needs.
                            From home loans to commercial finance, we're here to support your financial journey.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <HomeIcon className="h-16 w-16 text-red-600" />,
                                title: "Home Loans",
                                description: "Tailored financing solutions designed to support various homeownership goals, from first-time buyers to seasoned property investors.",
                                features: [
                                    "First Home Buyer Loans",
                                    "Investment Property Loans",
                                    "Refinancing Options",
                                    "Construction Loans",
                                    "Low Doc Loans"
                                ]
                            },
                            {
                                icon: <Building2 className="h-16 w-16 text-red-600" />,
                                title: "Commercial Loans",
                                description: "Strategic financial support to fuel business growth, enhance operational efficiency, and manage cash flow effectively.",
                                features: [
                                    "Business Equipment Finance",
                                    "Commercial Property Loans",
                                    "Working Capital Loans",
                                    "Business Line of Credit",
                                    "Asset Finance"
                                ]
                            },
                            {
                                icon: <TrendingUp className="h-16 w-16 text-red-600" />,
                                title: "Development Finance",
                                description: "Comprehensive financing for developers tackling projects from residential housing to large commercial properties.",
                                features: [
                                    "Land Acquisition Finance",
                                    "Construction Finance",
                                    "Development Loans",
                                    "Project Finance",
                                    "Mezzanine Finance"
                                ]
                            },
                            {
                                icon: <Shield className="h-16 w-16 text-red-600" />,
                                title: "Personal Finance",
                                description: "Personal financial solutions to help you achieve your individual financial goals and secure your future.",
                                features: [
                                    "Personal Loans",
                                    "Car Loans",
                                    "Debt Consolidation",
                                    "Personal Line of Credit",
                                    "Bad Credit Loans"
                                ]
                            },
                            {
                                icon: <Users className="h-16 w-16 text-red-600" />,
                                title: "Financial Planning",
                                description: "Comprehensive financial planning services to help you build wealth and secure your financial future.",
                                features: [
                                    "Retirement Planning",
                                    "Investment Advice",
                                    "Insurance Planning",
                                    "Tax Planning",
                                    "Estate Planning"
                                ]
                            },
                            {
                                icon: <CheckCircle className="h-16 w-16 text-red-600" />,
                                title: "Loan Management",
                                description: "Ongoing support and management services to ensure your loans continue to work effectively for you.",
                                features: [
                                    "Loan Reviews",
                                    "Rate Negotiations",
                                    "Restructuring Services",
                                    "Portfolio Management",
                                    "Ongoing Support"
                                ]
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
                            >
                                <div className="mb-6">{service.icon}</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-gray-700">
                                            <CheckCircle className="h-4 w-4 text-red-600 mr-2 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            How We Work
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our streamlined process ensures you get the best financial solution efficiently.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-5 gap-8">
                        {[
                            {
                                step: "1",
                                title: "Initial Consultation",
                                description: "We discuss your financial goals and current situation"
                            },
                            {
                                step: "2",
                                title: "Financial Assessment",
                                description: "Comprehensive analysis of your financial position"
                            },
                            {
                                step: "3",
                                title: "Solution Design",
                                description: "Custom financial solutions tailored to your needs"
                            },
                            {
                                step: "4",
                                title: "Implementation",
                                description: "We handle all the paperwork and processes"
                            },
                            {
                                step: "5",
                                title: "Ongoing Support",
                                description: "Continuous support and regular reviews"
                            }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center 
                               justify-center text-2xl font-bold mx-auto mb-4">
                                    {step.step}
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-sm">{step.description}</p>
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
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-red-100 mb-8">
                            Contact us today for a free consultation and let us help you achieve your financial goals.
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
                                Contact Us Today
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
