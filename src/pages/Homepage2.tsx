import { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, Shield, Award, CheckCircle, MapPin, Phone, Clock, Users, ArrowUpRight, MessageCircle, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import SEO from "@/components/SEO";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";

const Homepage2 = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    const services = [
        {
            title: "Dental Implants",
            description: "Permanent, natural-looking tooth replacement customized for you.",
            icon: "/GNA Dental/Icons/Dental-Implants.png",
            link: "/dental-implants"
        },
        {
            title: "Smile Design",
            description: "Digital smile makeovers that transform your confidence instantly.",
            icon: "/GNA Dental/Icons/Dental-Crowns.png",
            link: "/dental-crowns"
        },
        {
            title: "Invisible Aligners",
            description: "Clear, comfortable aligners for a perfectly straight smile.",
            icon: "/GNA Dental/Icons/Wisdom-Tooth.png",
            link: "/aligners"
        },
        {
            title: "Laser Dentistry",
            description: "Painless, precise treatments with advanced laser technology.",
            icon: "/GNA Dental/Icons/Root-Canal.png",
            link: "/laser-dentistry"
        }
    ];

    const stats = [
        { label: "Happy Patients", value: "10k+" },
        { label: "Years Experience", value: "15+" },
        { label: "Success Rate", value: "99%" },
        { label: "Awards Won", value: "12+" },
    ];

    const faqItems = [
        {
            question: "Why is Gnathos Dental considering the best?",
            answer: "We combine 15+ years of expertise with world-class technology like 3D scanning and Laser dentistry to provide painless, precision treatments."
        },
        {
            question: "Do you offer Lifetime Warranty?",
            answer: "Yes, we are confident in our quality. We offer warranties on premium dental implants and ceramic crowns, ensuring your smile lasts a lifetime."
        },
        {
            question: "Is the treatment painful?",
            answer: "Absolutely not. We specialize in 'Painless Dentistry' using advanced anesthesia and laser techniques to ensure maximum comfort."
        },
        {
            question: "How can I book a consultation?",
            answer: "You can book instantly online or call us at +91 9955 708 885. We act as your personal dental concierge."
        }
    ];

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": "Gnathos Dental",
        "description": "Premium dental clinic in Hyderabad offering advanced implants, smile design, and painless dentistry.",
        "url": "https://www.gnathosdental.in/homepage2",
        "telephone": "090006 66476",
        "priceRange": "₹₹",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "CARE Hospitals, Old Mumbai Hwy, HITEC City",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "postalCode": "500032",
            "addressCountry": "IN"
        }
    };

    return (
        <div className="bg-white overflow-hidden">
            <SEO
                title="Gnathos Dental | Premium Dental Care in Hyderabad"
                description="Experience world-class painless dentistry. Implants, Aligners, and Smile Makeovers by top experts in Hyderabad."
                keywords="luxury dentist hyderabad, best dental implants, invisible aligners, smile makeover"
                canonical="https://gnathosdentalcare.com/homepage2"
                schema={schemaData}
            />

            {/* Hero Section - Banner Style */}
            <section ref={targetRef} className="relative min-h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden py-12 sm:py-0">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="GNA Dental/homepage2/hero.jpeg"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/30 sm:from-white/95 sm:via-white/80 sm:to-transparent" />
                </div>

                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <motion.div
                        style={{ opacity, scale }}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-6 sm:space-y-8 max-w-2xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Badge className="bg-gnathos-primary/10 text-gnathos-primary border-none px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 sm:mb-6 backdrop-blur-sm">
                                <Star className="w-3 sm:w-3.5 h-3 sm:h-3.5 mr-2 fill-gnathos-primary" />
                                Ranked #1 Dental Clinic
                            </Badge>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-[1.1] tracking-tight mb-4 sm:mb-6">
                                Re-Imagine Your <br />
                                <span className="text-gnathos-primary">
                                    Perfect Smile
                                </span>
                            </h1>
                            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
                                Experience the future of dentistry. Painless, precise, and premium care tailored exclusively for you in Hyderabad.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                        >
                            <Link to="/contact" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg rounded-full bg-gray-900 text-white hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-xl shadow-gray-900/10">
                                    Book Your Visit
                                    <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
                                </Button>
                            </Link>
                            <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg rounded-full border-2 border-gray-900/10 hover:border-gnathos-primary hover:text-gnathos-primary bg-white/50 backdrop-blur-sm transition-all">
                                Virtual Consult
                            </Button>
                        </motion.div>

                        {/* Review Badge */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center gap-3 sm:gap-4 pt-2 sm:pt-4"
                        >
                            <div className="flex -space-x-3 sm:-space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-md">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Patient" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex text-gnathos-primary">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 sm:w-4 h-3 sm:h-4 fill-current" />)}
                                </div>
                                <p className="text-xs sm:text-sm text-gray-700 font-medium">
                                    <span className="font-bold text-gray-900">500+</span> 5-Star Reviews
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Empty column for spacing since we have background image now, or we can use it for floating elements if we want, but keeping it empty for the "banner" look is fine or we can remove grid */}
                </div>
            </section>

            {/* Running Stats Marquee */}
            <div className="bg-gnathos-primary py-2 sm:py-3 overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                <div className="flex whitespace-nowrap">
                    <motion.div
                        className="flex gap-4 sm:gap-8 items-center flex-shrink-0 min-w-full pl-4 sm:pl-8 absolute"
                        initial={{ x: "0%" }}
                        animate={{ x: "-100%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 60
                        }}
                    >
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="flex items-center gap-4 sm:gap-8 text-white font-bold text-sm sm:text-base lg:text-lg uppercase tracking-wider">
                                <span>1000+ Happy Patients</span>
                                <span className="text-white">•</span>
                                <span>15+ Years Experience</span>
                                <span className="text-white">•</span>
                                <span>99% Success Rate</span>
                                <span className="text-white">•</span>
                            </div>
                        ))}
                    </motion.div>
                    <motion.div
                        className="flex gap-4 sm:gap-8 items-center flex-shrink-0 min-w-full pl-4 sm:pl-8 opacity-0" // Hidden duplicate for height
                    >
                        <div className="flex items-center gap-4 sm:gap-8 text-white font-bold text-sm sm:text-base lg:text-lg uppercase tracking-wider">
                            <span>1000+ Happy Patients</span>
                            <span>15+ Years Experience</span>
                            <span>99% Success Rate</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Awards & Recognition Section */}
            <section className="py-12 sm:py-16 bg-gradient-to-br from-teal-50/30 via-white to-gray-50 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gnathos-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-teal-500/5 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Main Award Banner */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8 sm:mb-12"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 text-gray-900">
                            Awarded as the
                        </h2>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gnathos-primary to-teal-600 mb-4 px-4 leading-tight pb-1">
                            Best Dental Clinic in Hyderabad
                        </h3>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-2">
                            <Award className="w-6 sm:w-8 h-6 sm:h-8 text-gnathos-primary" />
                            <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 text-center px-4">
                                We won! The Prestigious Patient Service Award
                            </p>
                        </div>
                        <p className="text-gray-600 text-base sm:text-lg px-4">
                            Awarded in recognition of excellence in patient experience
                        </p>
                    </motion.div>

                    {/* Warranty & Price Guarantee Badges */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-12 sm:mb-16 px-4"
                    >
                        {/* Lifetime Warranty */}
                        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-full px-6 sm:px-8 py-3 sm:py-4 flex items-center gap-3 sm:gap-4 shadow-2xl border-2 border-gnathos-primary/20 hover:scale-105 transition-transform w-full sm:w-auto max-w-sm">
                            <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gnathos-primary rounded-full flex items-center justify-center flex-shrink-0">
                                <Award className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                            </div>
                            <div className="text-left">
                                <p className="text-lg sm:text-xl md:text-2xl font-bold">Lifetime Warranty</p>
                                <p className="text-xs sm:text-sm text-gray-300">On All Treatments</p>
                            </div>
                        </div>

                        {/* Lowest Price */}
                        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-full px-6 sm:px-8 py-3 sm:py-4 flex items-center gap-3 sm:gap-4 shadow-2xl border-2 border-gnathos-primary/20 hover:scale-105 transition-transform w-full sm:w-auto max-w-sm">
                            <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gnathos-primary rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <p className="text-lg sm:text-xl md:text-2xl font-bold">Lowest Price</p>
                                <p className="text-xs sm:text-sm text-gray-300">Guaranteed</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Yearly Awards Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto mb-8 sm:mb-16"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                            {/* 2021 Award */}
                            <div className="text-center">
                                <div className="mb-2 sm:mb-4">
                                    <img
                                        src="/GNA Dental/homepage2/2021.png"
                                        alt="Best Dental Clinic in India 2021"
                                        className="w-full h-24 sm:h-32 md:h-40 object-contain"
                                    />
                                </div>
                                <h4 className="font-bold text-gray-900 text-xs sm:text-sm mb-1">Excellence Summit</h4>
                                <p className="text-[10px] sm:text-xs text-gray-600">Forbes India</p>
                            </div>

                            {/* 2022 Award */}
                            <div className="text-center">
                                <div className="mb-2 sm:mb-4">
                                    <img
                                        src="/GNA Dental/homepage2/2022.png"
                                        alt="Best Dental Clinic in India 2022"
                                        className="w-full h-24 sm:h-32 md:h-40 object-contain"
                                    />
                                </div>
                                <h4 className="font-bold text-gray-900 text-xs sm:text-sm mb-1">Asia Healthcare</h4>
                                <p className="text-[10px] sm:text-xs text-gray-600">Award</p>
                            </div>

                            {/* 2023 Award */}
                            <div className="text-center">
                                <div className="mb-2 sm:mb-4">
                                    <img
                                        src="/GNA Dental/homepage2/2023.png"
                                        alt="Best Dental Clinic in India 2023"
                                        className="w-full h-24 sm:h-32 md:h-40 object-contain"
                                    />
                                </div>
                                <h4 className="font-bold text-gray-900 text-xs sm:text-sm mb-1">International</h4>
                                <p className="text-[10px] sm:text-xs text-gray-600">Business Award</p>
                            </div>

                            {/* 2024 Award */}
                            <div className="text-center">
                                <div className="mb-2 sm:mb-4">
                                    <img
                                        src="/GNA Dental/homepage2/2024.png"
                                        alt="Best Dental Clinic in India 2024"
                                        className="w-full h-24 sm:h-32 md:h-40 object-contain"
                                    />
                                </div>
                                <h4 className="font-bold text-gray-900 text-xs sm:text-sm mb-1">International</h4>
                                <p className="text-[10px] sm:text-xs text-gray-600">Excellence Award</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* Stunning Smiles Gallery */}
            <section className="py-12 sm:py-16 bg-white overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-6 sm:mb-8">
                        <h3 className="text-gnathos-primary font-bold text-lg sm:text-xl uppercase tracking-wider mb-2">Over 1 Million+</h3>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight">
                            Happy Smiles
                        </h2>
                    </div>

                    <div className="flex justify-center mb-6">
                        <img
                            src="/GNA Dental/homepage2/smiles_.png"
                            alt="Stunning Smiles"
                            className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl"
                        />
                    </div>

                    {/* <div className="w-full text-justify mb-10 space-y-6 mt-8 px-[20px]">
                        <p className="text-gray-600 leading-relaxed text-base">
                            At Gnathos Dental, we believe every smile deserves world-class care. Recognized as one of the best dental clinics in Hyderabad, we combine advanced dental technology, experienced specialists, and a patient-first approach to deliver exceptional dental experiences. Our mission is simple — to help you achieve a healthy, confident, and beautiful smile that lasts a lifetime.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-base">
                            Located in the heart of Gachibowli, Hyderabad, Gnathos Dental is a modern, fully equipped dental centre offering comprehensive services in cosmetic dentistry, orthodontics, dental implants, root canal treatment, smile design, and preventive care. Every treatment we provide is customized to meet your specific dental needs, ensuring comfort, precision, and lasting results.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-base">
                            Our team of skilled dentists and specialists are dedicated to maintaining the highest standards of safety and hygiene while using state-of-the-art technology to ensure painless and effective dental care. From routine checkups to complex smile makeovers, Gnathos Dental offers a seamless blend of professionalism, compassion, and innovation.
                        </p>
                    </div> */}

                    <div className="flex justify-center mb-8 sm:mb-12 gap-3 sm:gap-4 flex-wrap px-4">
                        <Link to="/contact" className="w-full sm:w-auto">
                            <Button className="w-full sm:w-auto bg-gnathos-primary hover:bg-black text-white text-base sm:text-lg font-bold rounded-full px-8 sm:px-10 py-4 sm:py-5 shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                                Book An Appointment
                            </Button>
                        </Link>

                        <a href="https://wa.me/919955708885" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <Button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white text-base sm:text-lg font-bold rounded-full px-8 sm:px-10 py-4 sm:py-5 shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2">
                                <MessageCircle className="w-5 h-5 fill-current" />
                                WhatsApp Us
                            </Button>
                        </a>
                    </div>

                    {/* <div className="flex flex-wrap justify-center gap-4">
                        <div className="bg-black text-white px-6 py-3 rounded-l-full rounded-r-lg shadow-lg flex items-center cursor-pointer hover:scale-105 transition-transform">
                            <div className="bg-white/20 p-2 rounded-full mr-3">
                                <ArrowRight className="w-5 h-5 text-white" />
                            </div>
                            <div className="text-left">
                                <p className="text-xs font-bold uppercase">Free</p>
                                <p className="text-sm font-bold">Video Consult</p>
                            </div>
                        </div>

                        <div className="bg-gnathos-primary text-white px-6 py-3 rounded-l-lg rounded-r-full shadow-lg flex items-center cursor-pointer hover:scale-105 transition-transform">
                            <div className="bg-white/20 p-2 rounded-full mr-3">
                                <Clock className="w-5 h-5 text-white" />
                            </div>
                            <div className="text-left">
                                <p className="text-xs font-bold uppercase">Request</p>
                                <p className="text-sm font-bold">Price List</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>

            {/* Services Showcase - Flip Card Design */}
            <section className="py-12 sm:py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
                        <Badge className="bg-gnathos-primary/10 text-gnathos-primary hover:bg-gnathos-primary/20 mb-4 border-none">Our Expertise</Badge>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"><span className="text-gnathos-primary">Advanced</span> Dental Solutions</h2>
                        <p className="text-gray-600 text-base sm:text-lg">We merge art and science to create stunning smiles. Choose from our specialized treatments designed for your unique needs.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {[
                            {
                                title: "Dental Implant",
                                desc: "Permanent Tooth Replacement Solution. Restores reliability and natural look. Prevents bone loss.",
                                cta: "Book a consultation",
                                icon: "GNA Dental/homepage2/Dental Implant.jpg"
                            },
                            {
                                title: "Painless Root Canal",
                                desc: "Save Your Natural Tooth. Relieves pain and eliminates infection using advanced rotary instruments.",
                                cta: "Schedule appointment",
                                icon: "/GNA Dental/Save-Your-Natural-Tooth.png"
                            },
                            {
                                title: "Crowns & Bridges",
                                desc: "Restore Damaged Teeth. Custom-made to strengthen weakened teeth and replace missing ones.",
                                cta: "Restore your smile",
                                icon: "/GNA Dental/Restore-Your-Smile-With-Dental-Crowns.png"
                            },
                            {
                                title: "Oral Surgeries",
                                desc: "Advanced Dental Surgical Care. Safe procedures for complex conditions including cyst removal.",
                                cta: "Consult specialists",
                                icon: "/GNA Dental/Oral- Surgery.png"
                            },
                            {
                                title: "Wisdom Tooth Removal",
                                desc: "Safe & Comfortable Extraction. Minimally invasive techniques for impacted or infected teeth.",
                                cta: "Get expert removal",
                                icon: "/GNA Dental/Safe & Painless-Wisdom-Tooth-Removal.png"
                            },
                            {
                                title: "General Dentistry",
                                desc: "Complete Family Dental Care. Routine check-ups, cleanings, and preventive treatments.",
                                cta: "Book routine check-up",
                                icon: "GNA Dental/homepage2/general.jpg"
                            },
                            {
                                title: "Laser Dentistry",
                                desc: "Precise & Comfortable Treatment. Ideal for gum reshaping and cavity removal with minimal bleeding.",
                                cta: "Discover laser benefits",
                                icon: "/GNA Dental/laser-technology.png"
                            },
                            {
                                title: "Aligners",
                                desc: "Invisible Braces for a Perfect Smile. Comfortable, discreet way to straighten teeth without metal.",
                                cta: "Start your journey",
                                icon: "GNA Dental/homepage2/Aligners.jpg"
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group h-[280px] sm:h-[320px] perspective-[1000px] cursor-pointer"
                            >
                                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl rounded-2xl">
                                    {/* Front Side */}
                                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden bg-black">
                                        <img src={service.icon} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                        <div className="absolute inset-0 flex flex-col items-center justify-end p-4 sm:p-6 text-center">
                                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 drop-shadow-md">{service.title}</h3>
                                            <div className="w-12 h-1 bg-gnathos-primary rounded-full mb-3"></div>
                                        </div>
                                    </div>

                                    {/* Back Side */}
                                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gnathos-primary rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col items-center justify-center text-center text-white">
                                        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{service.title}</h3>
                                        <p className="text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 text-white/90">
                                            {service.desc}
                                        </p>
                                        <Button className="bg-white text-gnathos-primary hover:bg-gray-100 font-bold rounded-full text-xs px-4 sm:px-6">
                                            {service.cta}
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 sm:py-20 lg:py-24 overflow-hidden bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative order-2 lg:order-1"
                        >
                            <div className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl h-[400px] sm:h-[500px] lg:h-[600px]">
                                <img src="GNA Dental/Excellence in-Dental-Care.png" alt="Advanced Technology" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 md:bottom-8 md:-right-8 bg-white p-3 sm:p-4 rounded-xl shadow-xl max-w-[180px] sm:max-w-[200px] z-10 border border-gray-100 hidden sm:block">
                                <h4 className="text-xs sm:text-sm font-bold mb-1 flex items-center text-gray-900">
                                    <Clock className="w-3 sm:w-4 h-3 sm:h-4 text-gnathos-primary mr-2" /> Same Day Implants
                                </h4>
                                <p className="text-[9px] sm:text-[10px] text-gray-500 leading-tight">Advanced 'Immediate Loading' protocols: new teeth in 24 hours.</p>
                            </div>
                        </motion.div>

                        <div className="space-y-8 sm:space-y-10 order-1 lg:order-2">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black leading-tight tracking-tight">
                                World's Most <br />
                                <span className="text-gnathos-primary">Advanced Technology</span>
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                We invest in the best to give you the best. Our clinic is equipped with cutting-edge 3D Scanners, Microscopes, and Laser systems imported from Germany and the USA directly.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-y-4 sm:gap-y-5 gap-x-4 sm:gap-x-8">
                                {[
                                    "3D Digital Smile Design",
                                    "Guided Implant Surgery",
                                    "Painless Laser Dentistry",
                                    "Class B Autoclave",
                                    "Microscope Root Canals"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 sm:gap-3">
                                        <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-gnathos-primary" />
                                        </div>
                                        <span className="font-bold text-gray-800 text-sm sm:text-base">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link to="/technology">
                                <Button className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white text-base sm:text-lg font-bold rounded-full px-8 sm:px-10 py-5 sm:py-6 shadow-lg hover:shadow-xl transition-all mt-6">
                                    Explore Our Technology
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* Guaranteed Lowest Price Section */}
            {/* <section className="py-8 sm:py-10 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
                    <div className="text-center mb-6 sm:mb-8">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">
                            Guaranteed <span className="text-gnathos-primary">Lowest Price</span>
                        </h2>
                    </div>

                    <div className="relative">
                        
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center justify-center bg-black text-white w-24 sm:w-28 h-24 sm:h-28 rounded-full shadow-2xl border-4 border-white transform hover:scale-110 transition-transform duration-300">
                            <span className="text-2xl sm:text-3xl font-extrabold leading-none drop-shadow-md text-gnathos-primary">70%</span>
                            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">OFF</span>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 sm:gap-x-8 sm:gap-y-6">
                            {[
                                { title: "Dental Implants", img: "/GNA Dental/homepage2/dental-implants.jpg" }, // Generic Image
                                { title: "Invisible Aligners", img: "/GNA Dental/homepage2/invisible-aligners.jpg" },
                                { title: "Teeth Whitening", img: "/GNA Dental/homepage2/teeth-whitening.jpg" }, // Placeholder re-use
                                { title: "Smile Design / Veneers", img: "/GNA Dental/homepage2/smile-design-veneers.jpg" }, // Placeholder re-use
                                { title: "TMJ & Orofacial Pain", img: "/GNA Dental/homepage2/tmj-orofacial-pain.jpg" }, // Placeholder re-use
                                { title: "Full Mouth Rehabilitation", img: "/GNA Dental/homepage2/full-mouth-rehabilitation.jpg" } // Placeholder re-use
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-gray-50 hover:bg-white rounded-r-2xl rounded-l-md border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center overflow-hidden group h-20 sm:h-24"
                                >
                                    <div className="w-20 sm:w-24 h-full bg-gray-200 overflow-hidden shrink-0 relative">
                                        <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                    </div>
                                    <div className="p-3 sm:p-4 flex-grow">
                                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 group-hover:text-gnathos-primary transition-colors leading-tight">{item.title}</h3>
                                    </div>
                                    <div className="pr-3 sm:pr-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                                        <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 text-gnathos-primary" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center mt-6 sm:mt-8">
                        <Link to="/contact" className="w-full sm:w-auto inline-block">
                            <Button className="w-full sm:w-auto bg-black hover:bg-gray-900 text-white text-base sm:text-lg md:text-xl font-bold rounded-full px-8 sm:px-10 py-5 sm:py-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3 mx-auto">
                                <span className="bg-gnathos-primary text-white p-1 rounded-full"><Phone className="w-4 h-4 fill-current" /></span>
                                Book An Appointment
                            </Button>
                        </Link>
                    </div>
                </div>
            </section> */}

            {/* Our Work Section */}
            <section className="py-12 sm:py-16 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-6 sm:mb-8">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gnathos-primary mb-4 tracking-tight">
                            Our Work
                        </h2>
                        <div className="w-20 sm:w-24 h-1 bg-black mx-auto rounded-full"></div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {[
                            { title: "All on 6 Implants", imgBefore: "/GNA Dental/homepage2/before1.png", imgAfter: "/GNA Dental/homepage2/after1.png" },
                            { title: "Full Mouth Reconstruction", imgBefore: "/GNA Dental/homepage2/before2.png", imgAfter: "/GNA Dental/homepage2/after2.png" },
                            { title: "Full Mouth Implants", imgBefore: "/GNA Dental/homepage2/before3_.png", imgAfter: "/GNA Dental/homepage2/after3.png" },
                            { title: "All on 4 Implants", imgBefore: "/GNA Dental/homepage2/before4.png", imgAfter: "/GNA Dental/homepage2/after4.png" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-xl hover:-translate-y-2 transition-all duration-300"
                            >
                                {/* Before Image */}
                                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden mb-2 sm:mb-3 h-40 sm:h-48">
                                    <img src={item.imgBefore} alt={`${item.title} Before`} className="w-full h-full object-cover" />
                                    <span className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/95 px-2 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-bold uppercase shadow-sm text-black tracking-wider">{item.title}</span>
                                    <span className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 bg-black text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[9px] sm:text-[10px] font-bold uppercase tracking-wider shadow-sm">Before</span>
                                </div>

                                {/* After Image */}
                                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-40 sm:h-48">
                                    <img src={item.imgAfter} alt={`${item.title} After`} className="w-full h-full object-cover" />
                                    <span className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 bg-gnathos-primary text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[9px] sm:text-[10px] font-bold uppercase tracking-wider shadow-sm">After</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-8 sm:mt-12">
                        <Link to="/contact" className="w-full sm:w-auto inline-block">
                            <Button className="w-full sm:w-auto bg-gradient-to-r from-gnathos-primary to-emerald-500 hover:scale-105 text-white text-base sm:text-lg font-bold rounded-full px-8 sm:px-10 py-4 sm:py-5 shadow-2xl hover:shadow-3xl transition-all flex items-center justify-center gap-3 mx-auto">
                                <div className="bg-white text-gnathos-primary p-1.5 rounded-full"><Phone className="w-4 h-4 fill-current" /></div>
                                Book An Appointment
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>



            {/* Feature Split Section */}


            {/* Booking Banner */}
            <section className="py-16 sm:py-20 bg-gnathos-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10" />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Transform Your Smile?</h2>
                    <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">Join 10,000+ happy patients who trust Gnathos Dental for their oral health.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
                        <Link to="/contact" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto bg-white text-gnathos-primary hover:bg-gray-100 border-none rounded-full h-12 sm:h-14 px-8 sm:px-10 text-base sm:text-lg font-bold shadow-lg">
                                Book Appointment
                            </Button>
                        </Link>
                        <a href="tel:+919955708885" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto border-2 border-white bg-transparent hover:bg-white hover:text-gnathos-primary text-white rounded-full h-12 sm:h-14 px-8 sm:px-10 text-base sm:text-lg backdrop-blur-sm flex items-center justify-center gap-2 font-bold transition-all">
                                <Phone className="w-5 h-5" />
                                <span>Call Now</span>
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Locations - Redesigned */}
            <section className="py-12 sm:py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="relative h-[500px] sm:h-[600px] overflow-hidden rounded-2xl sm:rounded-3xl group">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src="GNA Dental/homepage2/x.png"
                                alt="Gnathos Dental Clinic"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 w-full py-6 sm:py-8 md:py-16 px-6 sm:px-8 md:px-16 z-20">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="max-w-2xl"
                            >
                                <Badge className="bg-gnathos-primary text-white border-none mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">Visit Us</Badge>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 tracking-tight">
                                    Hyderabad
                                </h2>

                                <div className="space-y-4 sm:space-y-6 text-white/90">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Hitech City</h3>
                                        <p className="text-base sm:text-lg leading-relaxed text-white/80">
                                            Care Hospital, Near Cyberabad Police Commissionerate,<br className="hidden sm:block" />
                                            Jayabheri Pine Valley
                                        </p>
                                    </div>

                                    <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-16 pt-4 border-t border-white/20">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 sm:p-3 bg-white/10 rounded-full backdrop-blur-md">
                                                <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-gnathos-primary" />
                                            </div>
                                            <div>
                                                <p className="text-xs uppercase tracking-wider text-white/60 mb-1">Call Us</p>
                                                <p className="text-lg sm:text-xl font-bold text-white">+91 9955 708 885</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="p-2 sm:p-3 bg-white/10 rounded-full backdrop-blur-md">
                                                <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-gnathos-primary" />
                                            </div>
                                            <div>
                                                <p className="text-xs uppercase tracking-wider text-white/60 mb-1">Opening Hours</p>
                                                <p className="text-lg sm:text-xl font-bold text-white">Mon-Sat: 10AM - 8PM</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Complete Dental Care Solutions */}
            <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gnathos-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-teal-500/5 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                    <div className="text-center mb-12 sm:mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Badge className="bg-gnathos-primary/10 text-gnathos-primary hover:bg-gnathos-primary/20 mb-4 border-none px-4 py-1.5">
                                Our Services
                            </Badge>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-4">
                                Complete Dental <span className="text-gnathos-primary">Care Solutions</span>
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                                From cosmetic dentistry to emergency care, we provide comprehensive oral health solutions.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                        {/* Cosmetic Dentistry */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <Card className="bg-gradient-to-br from-white to-teal-50/30 border-none shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 overflow-hidden relative">
                                {/* Gradient Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gnathos-primary/0 to-gnathos-primary/0 group-hover:from-gnathos-primary/5 group-hover:to-transparent transition-all duration-500"></div>

                                <CardContent className="p-8 relative z-10">
                                    <div className="relative mb-6 mx-auto w-20 h-20">
                                        {/* Glow Effect */}
                                        <div className="absolute inset-0 bg-gnathos-primary/20 rounded-2xl blur-xl group-hover:bg-gnathos-primary/40 transition-all duration-500"></div>
                                        {/* Icon Container */}
                                        <div className="relative w-20 h-20 bg-gradient-to-br from-gnathos-primary to-teal-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                                            <Star className="w-10 h-10 text-white" />
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-center mb-2 text-gray-900 group-hover:text-gnathos-primary transition-colors duration-300">
                                        Cosmetic Dentistry
                                    </h3>
                                    <div className="w-12 h-1 bg-gradient-to-r from-gnathos-primary to-teal-500 mx-auto mb-6 rounded-full"></div>

                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3 group/item">
                                            <div className="w-6 h-6 rounded-full bg-gnathos-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-gnathos-primary/20 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-gnathos-primary" />
                                            </div>
                                            <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">Smile designing & makeovers</span>
                                        </li>
                                        <li className="flex items-center gap-3 group/item">
                                            <div className="w-6 h-6 rounded-full bg-gnathos-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-gnathos-primary/20 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-gnathos-primary" />
                                            </div>
                                            <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">Dental bonding & veneers</span>
                                        </li>
                                        <li className="flex items-center gap-3 group/item">
                                            <div className="w-6 h-6 rounded-full bg-gnathos-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-gnathos-primary/20 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-gnathos-primary" />
                                            </div>
                                            <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">Porcelain veneers</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* General Dentistry */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Card className="bg-gradient-to-br from-white to-teal-50/30 border-none shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 overflow-hidden relative">
                                {/* Gradient Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gnathos-primary/0 to-gnathos-primary/0 group-hover:from-gnathos-primary/5 group-hover:to-transparent transition-all duration-500"></div>

                                <CardContent className="p-8 relative z-10">
                                    <div className="relative mb-6 mx-auto w-20 h-20">
                                        {/* Glow Effect */}
                                        <div className="absolute inset-0 bg-gnathos-primary/20 rounded-2xl blur-xl group-hover:bg-gnathos-primary/40 transition-all duration-500"></div>
                                        {/* Icon Container */}
                                        <div className="relative w-20 h-20 bg-gradient-to-br from-gnathos-primary to-teal-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                                            <Shield className="w-10 h-10 text-white" />
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-center mb-2 text-gray-900 group-hover:text-gnathos-primary transition-colors duration-300">
                                        General Dentistry
                                    </h3>
                                    <div className="w-12 h-1 bg-gradient-to-r from-gnathos-primary to-teal-500 mx-auto mb-6 rounded-full"></div>

                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3 group/item">
                                            <div className="w-6 h-6 rounded-full bg-gnathos-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-gnathos-primary/20 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-gnathos-primary" />
                                            </div>
                                            <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">Regular checkups & cleanings</span>
                                        </li>
                                        <li className="flex items-center gap-3 group/item">
                                            <div className="w-6 h-6 rounded-full bg-gnathos-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-gnathos-primary/20 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-gnathos-primary" />
                                            </div>
                                            <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">Cavity fillings</span>
                                        </li>
                                        <li className="flex items-center gap-3 group/item">
                                            <div className="w-6 h-6 rounded-full bg-gnathos-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-gnathos-primary/20 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-gnathos-primary" />
                                            </div>
                                            <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">Gum disease treatment</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Oral Surgery */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <Card className="bg-gradient-to-br from-white to-teal-50/30 border-none shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 overflow-hidden relative">
                                {/* Gradient Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gnathos-primary/0 to-gnathos-primary/0 group-hover:from-gnathos-primary/5 group-hover:to-transparent transition-all duration-500"></div>

                                <CardContent className="p-8 relative z-10">
                                    <div className="relative mb-6 mx-auto w-20 h-20">
                                        {/* Glow Effect */}
                                        <div className="absolute inset-0 bg-gnathos-primary/20 rounded-2xl blur-xl group-hover:bg-gnathos-primary/40 transition-all duration-500"></div>
                                        {/* Icon Container */}
                                        <div className="relative w-20 h-20 bg-gradient-to-br from-gnathos-primary to-teal-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                                            <Activity className="w-10 h-10 text-white" />
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-center mb-2 text-gray-900 group-hover:text-gnathos-primary transition-colors duration-300">
                                        Oral Surgery
                                    </h3>
                                    <div className="w-12 h-1 bg-gradient-to-r from-gnathos-primary to-teal-500 mx-auto mb-6 rounded-full"></div>

                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3 group/item">
                                            <div className="w-6 h-6 rounded-full bg-gnathos-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-gnathos-primary/20 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-gnathos-primary" />
                                            </div>
                                            <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">Wisdom tooth extraction</span>
                                        </li>
                                        <li className="flex items-center gap-3 group/item">
                                            <div className="w-6 h-6 rounded-full bg-gnathos-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-gnathos-primary/20 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-gnathos-primary" />
                                            </div>
                                            <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">Dental implant surgery</span>
                                        </li>
                                        <li className="flex items-center gap-3 group/item">
                                            <div className="w-6 h-6 rounded-full bg-gnathos-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-gnathos-primary/20 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-gnathos-primary" />
                                            </div>
                                            <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">Gum disease treatment</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Gnathos Dental */}
            <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-teal-50/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
                            Why Choose <span className="text-gnathos-primary relative">Us?
                                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gnathos-primary to-transparent"></div>
                            </span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                        {/* Left Side - Feature Cards */}
                        <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                            {/* Feature 1 */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex items-start gap-5 group hover:-translate-x-2"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <Clock className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gnathos-primary transition-colors">Less Time in the Chair</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        Advanced technology and efficient procedures ensure faster treatments without compromising quality, saving you valuable time.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Feature 2 */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex items-start gap-5 group hover:-translate-x-2"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <Activity className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gnathos-primary transition-colors">More Efficient</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        Streamlined processes and state-of-the-art equipment deliver superior results with minimal visits and maximum comfort.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Feature 3 */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex items-start gap-5 group hover:-translate-x-2"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <Award className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gnathos-primary transition-colors">Longer Lasting</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        Premium materials and expert craftsmanship ensure your dental work stands the test of time with lifetime warranties.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Feature 4 */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex items-start gap-5 group hover:-translate-x-2"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <Star className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gnathos-primary transition-colors">More Comfortable Experience</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        Painless dentistry with advanced anesthesia techniques and a calming environment for stress-free treatments.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Side - Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative order-1 lg:order-2"
                        >
                            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-8 border-gnathos-primary/20 group h-[400px] sm:h-[500px] lg:h-[600px]">
                                <img
                                    src="https://thumbs.dreamstime.com/b/dental-ordination-chair-apparatus-clinic-interior-design-several-working-boxes-tools-equipment-well-equipped-showing-367441212.jpg"
                                    alt="Modern Dental Clinic"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                {/* Decorative Corner Elements */}
                                <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 border-t-4 border-r-4 border-gnathos-primary rounded-tr-2xl sm:rounded-tr-3xl"></div>
                                <div className="absolute bottom-0 left-0 w-16 sm:w-24 h-16 sm:h-24 border-b-4 border-l-4 border-gnathos-primary rounded-bl-2xl sm:rounded-bl-3xl"></div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 border-2 border-gnathos-primary/20 hidden sm:block">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gnathos-primary rounded-full flex items-center justify-center">
                                        <CheckCircle className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xl sm:text-2xl font-bold text-gray-900">1000+</p>
                                        <p className="text-xs sm:text-sm text-gray-600">Happy Patients</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Meet Our Team */}
            <section className="py-16 sm:py-20 bg-gradient-to-br from-white via-gray-50 to-teal-50/20 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-gnathos-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-teal-500/5 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                    <div className="text-center mb-12 sm:mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Badge className="bg-gnathos-primary/10 text-gnathos-primary hover:bg-gnathos-primary/20 mb-4 border-none px-4 py-1.5">
                                Our Experts
                            </Badge>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                                Meet Our <span className="text-gnathos-primary">Expert Dental Team</span>
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                                Our experienced dental professionals are committed to providing top-quality care for a healthy and confident smile.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                        {/* Dr. Navatha Mortha */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-[450px] border border-gray-100 hover:-translate-y-2">
                                {/* Background Image */}
                                <img
                                    src="/GNA Dental/Icons/Dr-Naveetha.jpg"
                                    alt="Dr. Navatha Mortha"
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* Minimal Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                                        Dr. Navatha Mortha
                                    </h3>
                                    <div className="w-16 h-1 bg-gradient-to-r from-gnathos-primary to-teal-500 mb-3 rounded-full"></div>
                                    <p className="text-xs uppercase tracking-wider mb-3 font-semibold text-gnathos-primary bg-white/90 inline-block px-3 py-1.5 rounded-full">
                                        MDS Oral and Maxillofacial Surgeon
                                    </p>
                                    <p className="text-sm leading-relaxed text-white/90">
                                        Specialist in oral and maxillofacial surgery with expertise in complex dental procedures, wisdom tooth extraction, and facial trauma.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Dr. Pratyusha */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-[450px] border border-gray-100 hover:-translate-y-2">
                                {/* Background Image */}
                                <img
                                    src="/GNA Dental/Icons/Dr-Pratyusha.jpg"
                                    alt="Dr. Pratyusha"
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* Minimal Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                                        Dr. Pratyusha
                                    </h3>
                                    <div className="w-16 h-1 bg-gradient-to-r from-gnathos-primary to-teal-500 mb-3 rounded-full"></div>
                                    <p className="text-xs uppercase tracking-wider mb-3 font-semibold text-gnathos-primary bg-white/90 inline-block px-3 py-1.5 rounded-full">
                                        BDS Consultant Dental Surgeon
                                    </p>
                                    <p className="text-sm leading-relaxed text-white/90">
                                        Clinical Superintendent & Head of Operations, ensuring excellent patient care, clinic management, and treatment coordination.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Dr. Suresh PL */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="group"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-[450px] border border-gray-100 hover:-translate-y-2">
                                {/* Background Image */}
                                <img
                                    src="/GNA Dental/Icons/Dr-Suresh.jpg"
                                    alt="Dr. Suresh PL"
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* Minimal Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                                        Dr. Suresh PL
                                    </h3>
                                    <div className="w-16 h-1 bg-gradient-to-r from-gnathos-primary to-teal-500 mb-3 rounded-full"></div>
                                    <p className="text-xs uppercase tracking-wider mb-3 font-semibold text-gnathos-primary bg-white/90 inline-block px-3 py-1.5 rounded-full">
                                        MDS, MOMS RCPS (UK)
                                    </p>
                                    <p className="text-sm leading-relaxed text-white/90">
                                        Senior Consultant, Oral and Maxillofacial Surgeon.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            <FAQ items={faqItems} />
        </div>
    );
};

export default Homepage2;