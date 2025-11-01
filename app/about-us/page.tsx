"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    Shield,
    Users,
    TrendingUp,
    Phone,
    Mail,
    MapPin,
    ArrowLeft,
    Award,
    Target,
    Heart
} from "lucide-react";

export default function AboutUs() {
    // Structured data for About Us
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Yisa Finance Solutions",
        "url": "https://yisafinance.com",
        "logo": "https://yisafinance.com/yisa-logo.svg",
        "description": "Expert financial services company with 15+ years experience, helping 500+ clients with $50M+ in successful loans. Specializing in home loans, commercial finance, and financial planning.",
        "foundingDate": "2009",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "customer service",
            "email": "info@yisafinance.com",
            "availableLanguage": "English"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Finance Street, Suite 456",
            "addressLocality": "Business District",
            "addressRegion": "State",
            "postalCode": "12345",
            "addressCountry": "US"
        },
        "sameAs": [
            "https://linkedin.com/company/yisafinance",
            "https://facebook.com/yisafinance",
            "https://instagram.com/yisafinance"
        ]
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
                            <Link href="/about-us" className="text-gray-900 hover:text-red-600 transition-colors">
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
                            About <span className="text-red-600">Yisa Finance Solutions</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            With years of experience and a commitment to excellence, we're dedicated to helping
                            you achieve your financial goals through personalized solutions and expert guidance.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Company Story */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Our Story
                            </h2>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    Founded with a vision to democratize financial services, Yisa Finance Solutions
                                    has grown from a small consultancy to a trusted partner for hundreds of individuals
                                    and businesses across the region.
                                </p>
                                <p>
                                    Our journey began with a simple belief: everyone deserves access to expert financial
                                    guidance that puts their interests first. This principle continues to guide everything
                                    we do, from our initial client consultations to our ongoing support services.
                                </p>
                                <p>
                                    Today, we're proud to have helped over 500 clients achieve their financial goals,
                                    facilitating over $50 million in successful loan approvals while maintaining
                                    our commitment to personalized service and ethical practices.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="bg-red-600 rounded-2xl p-8 text-white">
                                <h3 className="text-2xl font-bold mb-6">By the Numbers</h3>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <div className="text-3xl font-bold">500+</div>
                                        <div className="text-red-100">Happy Clients</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold">$50M+</div>
                                        <div className="text-red-100">Loans Facilitated</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold">15+</div>
                                        <div className="text-red-100">Years Combined Experience</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold">98%</div>
                                        <div className="text-red-100">Client Satisfaction</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            These fundamental principles guide our approach to client service and business operations.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Shield className="h-16 w-16 text-red-600" />,
                                title: "Integrity",
                                description: "We maintain the highest ethical standards in all our dealings, ensuring transparency and honesty in every interaction."
                            },
                            {
                                icon: <Heart className="h-16 w-16 text-red-600" />,
                                title: "Client-Centric",
                                description: "Your financial success is our priority. We listen, understand, and create solutions that truly serve your best interests."
                            },
                            {
                                icon: <Award className="h-16 w-16 text-red-600" />,
                                title: "Excellence",
                                description: "We strive for excellence in everything we do, from our service delivery to our expertise and market knowledge."
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-xl shadow-lg text-center"
                            >
                                <div className="mb-6 flex justify-center">{value.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We believe in a holistic approach to financial services, combining expertise with personalized attention.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Users className="h-12 w-12 text-red-600" />,
                                title: "Personalized Service",
                                description: "Every client receives tailored solutions designed specifically for their unique financial situation and goals."
                            },
                            {
                                icon: <Shield className="h-12 w-12 text-red-600" />,
                                title: "Transparency",
                                description: "Clear communication and honest advice. We explain everything in simple terms so you can make informed decisions."
                            },
                            {
                                icon: <TrendingUp className="h-12 w-12 text-red-600" />,
                                title: "Innovation",
                                description: "We leverage the latest technology and market insights to provide cutting-edge financial solutions."
                            },
                            {
                                icon: <Target className="h-12 w-12 text-red-600" />,
                                title: "Results-Focused",
                                description: "We measure our success by your success. Our goal is to deliver tangible results that matter to you."
                            },
                            {
                                icon: <Heart className="h-12 w-12 text-red-600" />,
                                title: "Long-term Relationships",
                                description: "We're not just here for one transaction. We build lasting partnerships that evolve with your needs."
                            },
                            {
                                icon: <Award className="h-12 w-12 text-red-600" />,
                                title: "Expert Guidance",
                                description: "Our team brings deep industry knowledge and experience to help you navigate complex financial decisions."
                            }
                        ].map((approach, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="mb-6 flex justify-center">{approach.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{approach.title}</h3>
                                <p className="text-gray-600">{approach.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
                        <p className="text-xl text-gray-600">
                            Don't just take our word for it - hear from some of our satisfied clients.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Sarah Johnson",
                                role: "First Home Buyer",
                                content: "Yisa Finance Solutions made my dream of homeownership a reality. Their guidance through the entire process was invaluable, and they found me a great rate!",
                                rating: 5
                            },
                            {
                                name: "Michael Chen",
                                role: "Business Owner",
                                content: "The team helped us secure the commercial loan we needed to expand our business. Their expertise and dedication were evident throughout the entire process.",
                                rating: 5
                            },
                            {
                                name: "Emma Williams",
                                role: "Property Investor",
                                content: "Professional, knowledgeable, and always available when I had questions. They've helped me build a strong investment portfolio over the years.",
                                rating: 5
                            }
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-xl shadow-lg"
                            >
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <div key={i} className="w-5 h-5 text-yellow-400 fill-current">★</div>
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                                <div className="border-t pt-4">
                                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                                </div>
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
                            Ready to Work Together?
                        </h2>
                        <p className="text-xl text-red-100 mb-8">
                            Let's discuss how we can help you achieve your financial goals.
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
