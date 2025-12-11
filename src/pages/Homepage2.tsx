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
            <section ref={targetRef} className="relative h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="public/GNA Dental/homepage2/hero.jpeg"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />
                </div>

                <div className="container relative z-10 mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        style={{ opacity, scale }}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8 max-w-2xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Badge className="bg-gnathos-primary/10 text-gnathos-primary border-none px-4 py-1.5 text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm">
                                <Star className="w-3.5 h-3.5 mr-2 fill-gnathos-primary" />
                                Ranked #1 Dental Clinic
                            </Badge>
                            <h1 className="text-5xl lg:text-7xl font-bold text-black leading-[1.1] tracking-tight mb-6">
                                Re-Imagine Your <br />
                                <span className="text-gnathos-primary">
                                    Perfect Smile
                                </span>
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed font-medium">
                                Experience the future of dentistry. Painless, precise, and premium care tailored exclusively for you in Hyderabad.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link to="/contact">
                                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gray-900 text-white hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-xl shadow-gray-900/10">
                                    Book Your Visit
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-2 border-gray-900/10 hover:border-gnathos-primary hover:text-gnathos-primary bg-white/50 backdrop-blur-sm transition-all">
                                Virtual Consult
                            </Button>
                        </motion.div>

                        {/* Review Badge */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center gap-4 pt-4"
                        >
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-md">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Patient" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex text-gnathos-primary">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <p className="text-sm text-gray-700 font-medium">
                                    <span className="font-bold text-gray-900">500+</span> 5-Star Reviews
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Empty column for spacing since we have background image now, or we can use it for floating elements if we want, but keeping it empty for the "banner" look is fine or we can remove grid */}
                </div>
            </section>

            {/* Running Stats Marquee */}
            <div className="bg-gnathos-primary py-2 overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                <div className="flex whitespace-nowrap">
                    <motion.div
                        className="flex gap-8 items-center flex-shrink-0 min-w-full pl-8 absolute"
                        initial={{ x: "0%" }}
                        animate={{ x: "-100%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 60
                        }}
                    >
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="flex items-center gap-8 text-white font-bold text-lg uppercase tracking-wider">
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
                        className="flex gap-8 items-center flex-shrink-0 min-w-full pl-8 opacity-0" // Hidden duplicate for height
                    >
                        <div className="flex items-center gap-8 text-white font-bold text-lg uppercase tracking-wider">
                            <span>1000+ Happy Patients</span>
                            <span>15+ Years Experience</span>
                            <span>99% Success Rate</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Stunning Smiles Gallery */}
            <section className="py-10 bg-white overflow-hidden">
                <div className="container mx-auto px-2 lg:px-4">
                    <div className="text-center mb-8">
                        <h3 className="text-gnathos-primary font-bold text-xl uppercase tracking-wider mb-2">Over 1 Million+</h3>
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-black tracking-tight">
                            Happy Smiles
                        </h2>
                    </div>

                    <div className="flex justify-center mb-6">
                        <img
                            src="/GNA Dental/homepage2/smile.jpeg"
                            alt="Stunning Smiles"
                            className="w-full max-w-7xl h-auto rounded-3xl shadow-2xl"
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

                    <div className="flex justify-center mb-12 gap-4 flex-wrap">
                        <Link to="/contact">
                            <Button className="bg-gnathos-primary hover:bg-black text-white text-lg font-bold rounded-full px-10 py-5 shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                                Book An Appointment
                            </Button>
                        </Link>

                        <a href="https://wa.me/919955708885" target="_blank" rel="noopener noreferrer">
                            <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white text-lg font-bold rounded-full px-10 py-5 shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2">
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
            <section className="py-10 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-8">
                        <Badge className="bg-gnathos-primary/10 text-gnathos-primary hover:bg-gnathos-primary/20 mb-4 border-none">Our Expertise</Badge>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"><span className="text-gnathos-primary">Advanced</span> Dental Solutions</h2>
                        <p className="text-gray-600 text-lg">We merge art and science to create stunning smiles. Choose from our specialized treatments designed for your unique needs.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Dental Implant",
                                desc: "Permanent Tooth Replacement Solution. Restores reliability and natural look. Prevents bone loss.",
                                cta: "Book a consultation",
                                icon: "/GNA Dental/Excellence in-Dental-Care.png"
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
                                icon: "/GNA Dental/Dental-Care.png"
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
                                icon: "/GNA Dental/Aligners.png"
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group h-[320px] perspective-[1000px] cursor-pointer"
                            >
                                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl rounded-2xl">
                                    {/* Front Side */}
                                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden bg-black">
                                        <img src={service.icon} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                        <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                                            <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">{service.title}</h3>
                                            <div className="w-12 h-1 bg-gnathos-primary rounded-full mb-3"></div>
                                        </div>
                                    </div>

                                    {/* Back Side */}
                                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gnathos-primary rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center text-center text-white">
                                        <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                                        <p className="text-sm leading-relaxed mb-6 text-white/90">
                                            {service.desc}
                                        </p>
                                        <Button className="bg-white text-gnathos-primary hover:bg-gray-100 font-bold rounded-full text-xs px-6">
                                            {service.cta}
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-10 overflow-hidden bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                                <img src="https://thumbs.dreamstime.com/b/dental-ordination-chair-apparatus-clinic-interior-design-several-working-boxes-tools-equipment-well-equipped-showing-367441212.jpg" alt="Advanced Technology" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white p-3 rounded-xl shadow-xl max-w-[200px] z-10 border border-gray-100 hidden md:block">
                                <h4 className="text-sm font-bold mb-1 flex items-center text-gray-900">
                                    <Clock className="w-4 h-4 text-gnathos-primary mr-2" /> Same Day Implants
                                </h4>
                                <p className="text-[10px] text-gray-500 leading-tight">Advanced 'Immediate Loading' protocols: new teeth in 24 hours.</p>
                            </div>
                        </motion.div>

                        <div className="space-y-8">
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-black leading-tight tracking-tight">
                                World's Most <br />
                                <span className="text-gnathos-primary">Advanced Technology</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We invest in the best to give you the best. Our clinic is equipped with cutting-edge 3D Scanners, Microscopes, and Laser systems imported from Germany and the USA directly.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                                {[
                                    "3D Digital Smile Design",
                                    "Guided Implant Surgery",
                                    "Painless Laser Dentistry",
                                    "Class B Autoclave",
                                    "Microscope Root Canals"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-4 h-4 text-gnathos-primary" />
                                        </div>
                                        <span className="font-bold text-gray-800">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link to="/technology">
                                <Button className="bg-black hover:bg-gray-800 text-white text-lg font-bold rounded-full px-10 py-6 shadow-lg hover:shadow-xl transition-all mt-4">
                                    Explore Our Technology
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* Guaranteed Lowest Price Section */}
            <section className="py-10 bg-white relative overflow-hidden">
                <div className="container mx-auto px-2 max-w-3xl">
                    <div className="text-center mb-8 flex flex-col md:flex-row items-center justify-center gap-4">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-black">
                            Guaranteed <span className="text-gnathos-primary">Lowest Price</span>
                        </h2>
                        <div className="bg-black text-white rounded-full px-4 py-2 border-2 border-gnathos-primary shadow-lg flex items-center gap-2">
                            <div className="flex flex-col leading-none">
                                <span className="text-xs font-bold text-white">100%</span>
                                <span className="text-[10px] font-bold text-gnathos-primary">LOWEST PRICE</span>
                            </div>
                            <div className="flex text-gnathos-primary">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Center Discount Badge */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center justify-center bg-black text-white w-28 h-28 rounded-full shadow-2xl border-4 border-white transform hover:scale-110 transition-transform duration-300">
                            <span className="text-3xl font-extrabold leading-none drop-shadow-md text-gnathos-primary">70%</span>
                            <span className="text-sm font-bold uppercase tracking-wider">OFF</span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                            {[
                                { title: "Dental Implants", img: "/GNA Dental/Dental-Care.png" }, // Generic Image
                                { title: "Invisible Aligners", img: "/GNA Dental/Aligners.png" },
                                { title: "Teeth Whitening", img: "/GNA Dental/Restore-Your-Smile-With-Dental-Crowns.png" }, // Placeholder re-use
                                { title: "Smile Design / Veneers", img: "/GNA Dental/Excellence in-Dental-Care.png" }, // Placeholder re-use
                                { title: "TMJ & Orofacial Pain", img: "/GNA Dental/Safe & Painless-Wisdom-Tooth-Removal.png" }, // Placeholder re-use
                                { title: "Full Mouth Rehabilitation", img: "/GNA Dental/Save-Your-Natural-Tooth.png" } // Placeholder re-use
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-gray-50 hover:bg-white rounded-r-2xl rounded-l-md border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center overflow-hidden group h-24"
                                >
                                    <div className="w-24 h-full bg-gray-200 overflow-hidden shrink-0 relative">
                                        <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                    </div>
                                    <div className="p-4 flex-grow">
                                        <h3 className="text-base md:text-lg font-bold text-gray-800 group-hover:text-gnathos-primary transition-colors leading-tight">{item.title}</h3>
                                    </div>
                                    <div className="pr-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                                        <ArrowRight className="w-5 h-5 text-gnathos-primary" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <Link to="/contact">
                            <Button className="bg-black hover:bg-gray-900 text-white text-lg md:text-xl font-bold rounded-full px-10 py-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-3 mx-auto">
                                <span className="bg-gnathos-primary text-white p-1 rounded-full"><Phone className="w-4 h-4 fill-current" /></span>
                                Book An Appointment
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Our Work Section */}
            <section className="py-10 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-gnathos-primary mb-4 tracking-tight">
                            Our Work
                        </h2>
                        <div className="w-24 h-1 bg-black mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "All on 6 Implants", imgBefore: "/GNA Dental/homepage2/smile.jpeg", imgAfter: "/GNA Dental/Dental-Care.png" },
                            { title: "Full Mouth Reconstruction", imgBefore: "/GNA Dental/Save-Your-Natural-Tooth.png", imgAfter: "/GNA Dental/homepage2/hero.jpeg" },
                            { title: "Full Mouth Implants", imgBefore: "/GNA Dental/Excellence in-Dental-Care.png", imgAfter: "/GNA Dental/Restore-Your-Smile-With-Dental-Crowns.png" },
                            { title: "All on 4 Implants", imgBefore: "/GNA Dental/Safe & Painless-Wisdom-Tooth-Removal.png", imgAfter: "/GNA Dental/Save-Your-Natural-Tooth.png" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-3xl p-4 shadow-xl hover:-translate-y-2 transition-all duration-300"
                            >
                                {/* Before Image */}
                                <div className="relative rounded-2xl overflow-hidden mb-3 h-48">
                                    <img src={item.imgBefore} alt={`${item.title} Before`} className="w-full h-full object-cover" />
                                    <span className="absolute top-3 right-3 bg-white/95 px-3 py-1 rounded-full text-[10px] font-bold uppercase shadow-sm text-black tracking-wider">{item.title}</span>
                                    <span className="absolute bottom-3 right-3 bg-black text-white px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider shadow-sm">Before</span>
                                </div>

                                {/* After Image */}
                                <div className="relative rounded-2xl overflow-hidden h-48">
                                    <img src={item.imgAfter} alt={`${item.title} After`} className="w-full h-full object-cover" />
                                    <span className="absolute bottom-3 right-3 bg-gnathos-primary text-white px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider shadow-sm">After</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/contact">
                            <Button className="bg-gradient-to-r from-gnathos-primary to-emerald-500 hover:scale-105 text-white text-lg font-bold rounded-full px-10 py-5 shadow-2xl hover:shadow-3xl transition-all flex items-center gap-3 mx-auto">
                                <div className="bg-white text-gnathos-primary p-1.5 rounded-full"><Phone className="w-4 h-4 fill-current" /></div>
                                Book An Appointment
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>



            {/* Feature Split Section */}


            {/* Booking Banner */}
            <section className="py-20 bg-gnathos-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Smile?</h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">Join 10,000+ happy patients who trust Gnathos Dental for their oral health.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact">
                            <Button size="lg" className="bg-white text-gnathos-primary hover:bg-gray-100 border-none rounded-full h-14 px-10 text-lg font-bold shadow-lg">
                                Book Appointment
                            </Button>
                        </Link>
                        <a href="tel:+919955708885">
                            <Button size="lg" variant="outline" className="border-2 border-white/30 hover:bg-white/10 text-white rounded-full h-14 px-10 text-lg backdrop-blur-sm">
                                <Phone className="w-5 h-5 mr-2" /> Call Now
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Locations - Redesigned */}
            <section className="relative h-[600px] overflow-hidden group">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/GNA Dental/homepage2/hero.jpeg"
                        alt="Gnathos Dental Clinic"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20">
                    <div className="container mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-2xl"
                        >
                            <Badge className="bg-gnathos-primary text-white border-none mb-4 px-4 py-2 text-sm">Visit Us</Badge>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                                Hyderabad
                            </h2>

                            <div className="space-y-6 text-white/90">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Hitech City</h3>
                                    <p className="text-lg leading-relaxed text-white/80">
                                        Care Hospital, Near Cyberabad Police Commissionerate,<br />
                                        Jayabheri Pine Valley
                                    </p>
                                </div>

                                <div className="flex flex-col md:flex-row gap-8 md:gap-16 pt-4 border-t border-white/20">
                                    <div className="flex items-center gap-3">
                                        <div className="p-3 bg-white/10 rounded-full backdrop-blur-md">
                                            <Phone className="w-6 h-6 text-gnathos-primary" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-wider text-white/60 mb-1">Call Us</p>
                                            <p className="text-xl font-bold text-white">+91 9955 708 885</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="p-3 bg-white/10 rounded-full backdrop-blur-md">
                                            <Clock className="w-6 h-6 text-gnathos-primary" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-wider text-white/60 mb-1">Opening Hours</p>
                                            <p className="text-xl font-bold text-white">Mon-Sat: 10AM - 8PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* Complete Dental Care Solutions */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
                            Complete Dental <span className="text-gnathos-primary">Care Solutions</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            From cosmetic dentistry to emergency care, we provide comprehensive oral health solutions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Cosmetic Dentistry */}
                        <Card className="bg-white border-none shadow-xl hover:shadow-2xl transition-all duration-300">
                            <CardContent className="p-8">
                                <div className="w-16 h-16 bg-gnathos-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                                    <Star className="w-8 h-8 text-gnathos-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-center mb-6">Cosmetic Dentistry</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-gnathos-primary flex-shrink-0" />
                                        <span className="text-gray-700">Smile designing & makeovers</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-gnathos-primary flex-shrink-0" />
                                        <span className="text-gray-700">Dental bonding & veneers</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-gnathos-primary flex-shrink-0" />
                                        <span className="text-gray-700">Porcelain veneers</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* General Dentistry */}
                        <Card className="bg-white border-none shadow-xl hover:shadow-2xl transition-all duration-300">
                            <CardContent className="p-8">
                                <div className="w-16 h-16 bg-gnathos-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                                    <Shield className="w-8 h-8 text-gnathos-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-center mb-6">General Dentistry</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-gnathos-primary flex-shrink-0" />
                                        <span className="text-gray-700">Regular checkups & cleanings</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-gnathos-primary flex-shrink-0" />
                                        <span className="text-gray-700">Cavity fillings</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-gnathos-primary flex-shrink-0" />
                                        <span className="text-gray-700">Gum disease treatment</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Oral Surgery */}
                        <Card className="bg-white border-none shadow-xl hover:shadow-2xl transition-all duration-300">
                            <CardContent className="p-8">
                                <div className="w-16 h-16 bg-gnathos-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                                    <Activity className="w-8 h-8 text-gnathos-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-center mb-6">Oral Surgery</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-gnathos-primary flex-shrink-0" />
                                        <span className="text-gray-700">Wisdom tooth extraction</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-gnathos-primary flex-shrink-0" />
                                        <span className="text-gray-700">Dental implant surgery</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-gnathos-primary flex-shrink-0" />
                                        <span className="text-gray-700">Gum disease treatment</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Why Choose Gnathos Dental */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
                            Why Choose <span className="text-gnathos-primary">Gnathos Dental?</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We combine expertise, compassion, and cutting-edge technology to deliver exceptional dental care that exceeds your expectations.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {/* 24/7 Support */}
                        <div className="text-center group">
                            <div className="w-24 h-24 bg-black group-hover:bg-gnathos-primary rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300 shadow-xl">
                                <Phone className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">24/7 Customer Support</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We provide round-the-clock support to help our patients with any dental concerns, emergencies, and queries for complete peace of mind.
                            </p>
                        </div>

                        {/* Convenient Access */}
                        <div className="text-center group">
                            <div className="w-24 h-24 bg-black group-hover:bg-gnathos-primary rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300 shadow-xl">
                                <MapPin className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Convenient Access</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Multiple locations across Hyderabad with dedicated parking, metro connectivity, and flexible scheduling for working professionals.
                            </p>
                        </div>

                        {/* Affordable Excellence */}
                        <div className="text-center group">
                            <div className="w-24 h-24 bg-black group-hover:bg-gnathos-primary rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300 shadow-xl">
                                <Award className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Affordable Excellence</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We offer all types of dental treatments at competitive and affordable prices in Hyderabad without compromising on quality or care standards.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet Our Team */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
                            Meet Our <span className="text-gnathos-primary">Expert Dental Team</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Our experienced dental professionals are committed to providing top-quality care for a healthy and confident smile.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Dr. Navatha Mortha */}
                        <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 text-center p-8 border border-gray-100">
                            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                                <Users className="w-16 h-16 text-gray-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-1">Dr. Navatha Mortha</h3>
                            <p className="text-gnathos-primary font-bold text-sm uppercase tracking-wider mb-4">MDS Oral and Maxillofacial Surgeon</p>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Specialist in oral and maxillofacial surgery with expertise in complex dental procedures, wisdom tooth extraction, and facial trauma.
                            </p>
                        </div>

                        {/* Dr. Pratyusha */}
                        <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 text-center p-8 border border-gray-100">
                            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                                <Users className="w-16 h-16 text-gray-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-1">Dr. Pratyusha</h3>
                            <p className="text-gnathos-primary font-bold text-sm uppercase tracking-wider mb-4">BDS Consultant Dental Surgeon</p>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Clinical Superintendent & Head of Operations, ensuring excellent patient care, clinic management, and treatment coordination.
                            </p>
                        </div>

                        {/* Dr. Suresh PL */}
                        <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 text-center p-8 border border-gray-100">
                            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                                <Users className="w-16 h-16 text-gray-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-1">Dr. Suresh PL</h3>
                            <p className="text-gnathos-primary font-bold text-sm uppercase tracking-wider mb-4">MDS, MOMS RCPS (UK)</p>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Senior Consultant, Oral and Maxillofacial Surgeon.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <FAQ items={faqItems} />
        </div>
    );
};

export default Homepage2;