import { Link } from "react-router-dom";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Facebook,
    Instagram,
    Youtube,
} from "lucide-react";

const Footer = () => {
    const services = [
        { name: "Dental Implants", path: "/dental-implants" },
        { name: "Root Canal Treatment", path: "/root-canal" },
        { name: "Dental Crowns", path: "/dental-crowns" },
        { name: "Wisdom Tooth Extraction", path: "/wisdom-tooth" },
    ];

    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Our Services", path: "/dental-implants" },
        { name: "Blog", path: "https://gnathosdental.in/blogs/" },
        { name: "Contact Us", path: "/contact" },
    ];

    const locations = [
        { name: "Hitech City", path: "/locations/hitech-city" },
        { name: "Gachibowli", path: "/locations/gachibowli" },
        { name: "Madhapur", path: "/locations/madhapur" },
        { name: "Kondapur", path: "/locations/kondapur" },
        { name: "Banjara Hills", path: "/locations/banjara-hills" },
    ];

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-2 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center space-x-3">
                            <div className="h-12 w-auto">
                                <img
                                    src="\GNA Dental\Icons\logo.png"
                                    alt="Gnathos Dental"
                                    className="h-full w-auto object-contain filter brightness-0 invert"
                                />
                            </div>
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            The best dental clinic in Hyderabad, providing
                            advanced, painless, and affordable dental care with
                            a focus on precision, hygiene, and patient comfort.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.facebook.com/p/Gnathos-Dental-Clinic-100083936883629/"
                                className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/gnathosdental_/"
                                className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.youtube.com/@GnathosDentall"
                                className="text-gray-400 hover:text-white transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>

                        <div className="space-y-3">
                            {quickLinks.map((link) => (
                                <div key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Our Services */}
                   <div>
                        <h4 className="font-semibold mb-6 text-lg">Our Services</h4>

                        <div className="space-y-3">
                            {services.map((service) => (
                                <div key={service.path}>
                                    <Link
                                        to={service.path}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {service.name}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold mb-6 text-lg">
                            Contact Information
                        </h4>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-gnathos-primary mt-1 flex-shrink-0" />
                                <div className="text-gray-400">
                                    <p className="font-medium text-white mb-1">
                                        Location
                                    </p>
                                    <p className="text-sm leading-relaxed">
                                        Care Hospital, Near Cyberabad Police
                                        Commissionerate,
                                        <br />
                                        Jayabheri Pine Valley, Hitech City,
                                        <br />
                                        Hyderabad, 500032
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-gnathos-primary flex-shrink-0" />
                                <div className="text-gray-400">
                                    <p className="font-medium text-white">
                                        Appointments
                                    </p>
                                    <p>+91 9955 708 885</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-gnathos-primary flex-shrink-0" />
                                <div className="text-gray-400">
                                    <p className="font-medium text-white">
                                        Email
                                    </p>
                                    <p>gnathosdentalcare@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Google Map */}
                <div className="mt-4">
                    <h4 className="font-semibold mb-4 text-lg text-center">
                        Find Us on Map
                    </h4>
                    <div className="w-fully overflow-hidden rounded-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.25176871577!2d78.40804555!3d17.4123487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9375638b0421%3A0xd31461d7ddbffc51!2sGnathos%20Dental!5e0!3m2!1sen!2sin!4v1762326688690!5m2!1sen!2sin"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-fully"
                        />
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-4 pt-4">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                        <div className="text-center md:text-left">
                            <p className="text-gray-400">
                                &copy; {new Date().getFullYear()} Gnathos
                                Dental. All rights reserved.
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                Best dental clinic in Hyderabad - Advanced,
                                Painless, Affordable
                            </p>
                        </div>
                        
                        <div className="flex space-x-6 text-sm text-gray-400">
                            {/* <Link
                                to="/privacy"
                                className="hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link
                                to="/terms"
                                className="hover:text-white transition-colors">
                                Terms of Service
                            </Link> */}
                            <Link
                                to="/sitemap.xml"
                                className="hover:text-white transition-colors">
                                Sitemap
                            </Link>
                        </div>
                        <div className="flex space-x-6 text-sm text-gray-400">
                            <a href="https://brandingpioneers.com/">Made and Design by Branding Pioneers</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;