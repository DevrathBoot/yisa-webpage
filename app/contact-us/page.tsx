"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    Phone,
    Mail,
    MapPin,
    ArrowLeft,
    Clock,
    Send,
    CheckCircle
} from "lucide-react";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                message: ''
            });
        }, 3000);
    };

    // Structured data for Contact Us
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Yisa Finance Solutions",
        "description": "Contact Yisa Finance Solutions for expert financial advice and services. Phone, email, and office location information.",
        "mainEntity": {
            "@type": "Organization",
            "name": "Yisa Finance Solutions",
            "telephone": "+1-555-123-4567",
            "email": "info@yisafinance.com",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Finance Street, Suite 456",
                "addressLocality": "Business District",
                "addressRegion": "State",
                "postalCode": "12345",
                "addressCountry": "US"
            },
            "openingHours": [
                "Mo-Fr 09:00-18:00",
                "Sa 10:00-14:00"
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
                            <Link href="/services" className="text-gray-700 hover:text-red-600 transition-colors">
                                Services
                            </Link>
                            <Link href="/about-us" className="text-gray-700 hover:text-red-600 transition-colors">
                                About Us
                            </Link>
                            <Link href="/contact-us" className="text-gray-900 hover:text-red-600 transition-colors">
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
                            Get In <span className="text-red-600">Touch</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Ready to start your financial journey? We're here to help.
                            Contact us today for a free consultation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                Contact Information
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-red-600 p-3 rounded-lg">
                                        <Phone className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="font-semibold text-gray-900">Phone</h3>
                                        <p className="text-gray-600">+1 (555) 123-4567</p>
                                        <p className="text-sm text-gray-500">Mon-Fri 9am-6pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-red-600 p-3 rounded-lg">
                                        <Mail className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="font-semibold text-gray-900">Email</h3>
                                        <p className="text-gray-600">info@yisafinance.com</p>
                                        <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-red-600 p-3 rounded-lg">
                                        <MapPin className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="font-semibold text-gray-900">Office</h3>
                                        <p className="text-gray-600">123 Finance Street<br />Suite 456<br />Business District, City 12345</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-red-600 p-3 rounded-lg">
                                        <Clock className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="font-semibold text-gray-900">Business Hours</h3>
                                        <div className="text-gray-600">
                                            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                            <p>Saturday: 10:00 AM - 2:00 PM</p>
                                            <p>Sunday: Closed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                                <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
                                <p className="text-gray-600 text-sm">
                                    Need immediate assistance? Call us directly for urgent matters.
                                    For general inquiries, email or use the contact form and we'll get back to you promptly.
                                </p>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-xl shadow-lg"
                        >
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-8"
                                >
                                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                                    <p className="text-gray-600">
                                        Your message has been sent successfully. We'll get back to you within 24 hours.
                                    </p>
                                </motion.div>
                            ) : (
                                <>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                        Send us a Message
                                    </h2>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                                    placeholder="Your full name"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                                    placeholder="(555) 123-4567"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Service of Interest
                                                </label>
                                                <select
                                                    id="service"
                                                    name="service"
                                                    value={formData.service}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                                >
                                                    <option value="">Select a service</option>
                                                    <option value="home-loans">Home Loans</option>
                                                    <option value="commercial-loans">Commercial Loans</option>
                                                    <option value="development-finance">Development Finance</option>
                                                    <option value="personal-finance">Personal Finance</option>
                                                    <option value="financial-planning">Financial Planning</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={6}
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                                placeholder="Tell us about your financial goals or questions..."
                                            />
                                        </div>

                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full bg-red-600 text-white px-8 py-4 rounded-lg font-semibold 
                               hover:bg-red-700 transition-colors flex items-center justify-center
                               disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send className="ml-2 h-5 w-5" />
                                                </>
                                            )}
                                        </motion.button>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section (Placeholder) */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
                        <p className="text-gray-600">
                            Located in the heart of the business district, we're easily accessible by public transport and car.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gray-300 h-96 rounded-lg flex items-center justify-center"
                    >
                        <div className="text-center">
                            <MapPin className="h-16 w-16 text-gray-500 mx-auto mb-4" />
                            <p className="text-gray-500">Interactive map will be displayed here</p>
                            <p className="text-sm text-gray-400 mt-2">123 Finance Street, Suite 456, Business District</p>
                        </div>
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
