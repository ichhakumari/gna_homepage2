import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Phone, MapPin, Clock, Star, Shield, Smile } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const isActivePath = (path: string) => location.pathname === path;

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  const services = [
  { name: "Dental Implant", path: "/dental-implant", description: "Permanent tooth replacement solution", icon: "🦷" },
  { name: "Root Canal", path: "/root-canal", description: "Save your natural tooth", icon: "🔧" },
  { name: "Dental Crowns & Bridges", path: "/dental-crowns", description: "Restore damaged teeth with custom crowns and bridges", icon: "🦷" },
  { name: "Oral Surgeries", path: "/oral-surgeries", description: "Advanced surgical procedures for complex dental conditions", icon: "🦷" },
  { name: "Wisdom Tooth Removal", path: "/wisdom-tooth-removal", description: "Safe extraction of wisdom teeth", icon: "🦷" },
  { name: "General Dentistry", path: "/general-dentistry", description: "Comprehensive dental care for the entire family", icon: "🦷" },
  { name: "Laser Dentistry", path: "/laser-dentistry", description: "Advanced laser treatments for precise dental care", icon: "⚡" },
  { name: "Aligners", path: "/aligners", description: "Invisible braces for perfect smile alignment", icon: "✨" }];


  return (
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
          <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-8">
              <Link to="/" className="flex items-center space-x-3">
                  <div className="h-12 w-auto">
                      <img
                          src="\GNA Dental\Icons\logo.png"
                          alt="Gnathos Dental"
                          className="h-full w-auto object-contain"
                      />
                  </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex space-x-8 items-center">
                  <Link
                      to="/"
                      className={`transition-colors hover:text-gnathos-primary ${
                          isActivePath("/")
                              ? "text-gnathos-primary font-medium"
                              : "text-gray-600"
                      }`}>
                      Home
                  </Link>

                  <Link
                      to="/about"
                      className={`transition-colors hover:text-gnathos-primary ${
                          isActivePath("/about")
                              ? "text-gnathos-primary font-medium"
                              : "text-gray-600"
                      }`}>
                      About Us
                  </Link>

                  {/* Services Dropdown */}
                  <div className="relative group" ref={servicesRef}>
                      <button
                          className="flex items-center space-x-1 text-gray-600 hover:text-gnathos-primary transition-colors font-medium"
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          onMouseEnter={() => setIsServicesOpen(true)}>
                          <span>Our Services</span>
                          <ChevronDown
                              className={`w-4 h-4 transition-transform ${
                                  isServicesOpen ? "rotate-180" : ""
                              }`}
                          />
                      </button>
                      {isServicesOpen && (
                          <div
                              className="absolute top-full left-0 mt-2 w-[700px] bg-white border rounded-xl shadow-2xl py-6 z-50 -translate-x-1/3"
                              onMouseEnter={() => setIsServicesOpen(true)}
                              onMouseLeave={() =>
                                  setTimeout(
                                      () => setIsServicesOpen(false),
                                      300
                                  )
                              }>
                              <div className="px-6">
                                  <h3 className="font-bold text-gray-900 text-lg border-b border-gray-100 pb-2 mb-4">
                                      Our Services
                                  </h3>
                                  <div className="grid grid-cols-2 gap-2">
                                      {services.map((service) => (
                                          <Link
                                              key={service.path}
                                              to={service.path}
                                              className={`group block p-2.5 rounded-lg transition-all hover:bg-gradient-to-r hover:from-gnathos-primary/10 hover:to-gnathos-secondary/10 ${
                                                  isActivePath(service.path)
                                                      ? "bg-gradient-to-r from-gnathos-primary/10 to-gnathos-secondary/10 text-gnathos-primary"
                                                      : ""
                                              }`}
                                              onClick={() =>
                                                  setIsServicesOpen(false)
                                              }>
                                              <div className="flex items-start space-x-2.5">
                                                  <span className="text-xl mt-0.5">
                                                      {service.icon}
                                                  </span>
                                                  <div>
                                                      <div
                                                          className={`font-semibold text-sm transition-colors group-hover:text-gnathos-primary ${
                                                              isActivePath(
                                                                  service.path
                                                              )
                                                                  ? "text-gnathos-primary"
                                                                  : "text-gray-900"
                                                          }`}>
                                                          {service.name}
                                                      </div>
                                                      <div className="text-xs text-gray-500 mt-1">
                                                          {service.description}
                                                      </div>
                                                  </div>
                                              </div>
                                          </Link>
                                      ))}
                                  </div>
                              </div>
                          </div>
                      )}
                  </div>

                  {/* Updated Blog Link - External URL */}
                  <a
                      href="https://gnathosdental.in/blogs/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-gnathos-primary text-gray-600">
                      Blog
                  </a>

                  <Link
                      to="/contact"
                      className={`transition-colors hover:text-gnathos-primary ${
                          isActivePath("/contact")
                              ? "text-gnathos-primary font-medium"
                              : "text-gray-600"
                      }`}>
                      Contact Us
                  </Link>
              </nav>

              {/* Mobile Menu Button */}
              <div className="flex items-center space-x-4">
                  <Link to="/contact">
                      <Button className="bg-gradient-to-r from-gnathos-primary to-gnathos-primary-light hover:from-gnathos-primary-dark hover:to-gnathos-primary">
                          Book Appointment
                      </Button>
                  </Link>
                  <button
                      className="lg:hidden"
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                      {isMobileMenuOpen ? (
                          <X className="w-6 h-6" />
                      ) : (
                          <Menu className="w-6 h-6" />
                      )}
                  </button>
              </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
              <div className="lg:hidden bg-white border-t shadow-lg">
                  <div className="container mx-auto px-4 py-6 space-y-6 max-h-[80vh] overflow-y-auto">
                      <Link
                          to="/"
                          className={`block py-2 transition-colors hover:text-gnathos-primary ${
                              isActivePath("/")
                                  ? "text-gnathos-primary font-medium"
                                  : "text-gray-600"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}>
                          Home
                      </Link>

                      <Link
                          to="/about"
                          className={`block py-2 transition-colors hover:text-gnathos-primary ${
                              isActivePath("/about")
                                  ? "text-gnathos-primary font-medium"
                                  : "text-gray-600"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}>
                          About Us
                      </Link>

                      <div>
                          <div className="font-medium text-gray-800 mb-3">
                              Our Services
                          </div>
                          <div className="space-y-2 ml-4">
                              {services.map((service) => (
                                  <Link
                                      key={service.path}
                                      to={service.path}
                                      className={`block py-1 transition-colors hover:text-gnathos-primary ${
                                          isActivePath(service.path)
                                              ? "text-gnathos-primary font-medium"
                                              : "text-gray-600"
                                      }`}
                                      onClick={() =>
                                          setIsMobileMenuOpen(false)
                                      }>
                                      <div className="flex items-center space-x-2">
                                          <span>{service.icon}</span>
                                          <span>{service.name}</span>
                                      </div>
                                  </Link>
                              ))}
                          </div>
                      </div>

                      {/* Updated Mobile Blog Link - External URL */}
                      <a
                          href="https://gnathosdental.in/blogs/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block py-2 transition-colors hover:text-gnathos-primary text-gray-600"
                          onClick={() => setIsMobileMenuOpen(false)}>
                          Blog
                      </a>

                      <Link
                          to="/contact"
                          className={`block py-2 transition-colors hover:text-gnathos-primary ${
                              isActivePath("/contact")
                                  ? "text-gnathos-primary font-medium"
                                  : "text-gray-600"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}>
                          Contact Us
                      </Link>

                      {/* Emergency Contact in Mobile */}
                      <div className="border-t border-gray-100 pt-4 mt-6">
                          <div className="bg-gradient-to-r from-gnathos-secondary/10 to-gnathos-primary/10 rounded-lg p-4">
                              <div className="text-gnathos-primary font-bold text-lg mb-2">
                                  Emergency Contact
                              </div>
                              <div className="space-y-2">
                                  <div className="flex items-center space-x-2 text-gray-700">
                                      <Phone className="w-4 h-4 text-gnathos-primary" />
                                      <a
                                          href="tel:+919955708885"
                                          className="font-medium">
                                          +91 9955 708 885
                                      </a>
                                  </div>
                                  <div className="text-sm text-gnathos-primary font-medium">
                                      24/7 Emergency Available
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          )}
      </header>
  );


};

export default Navigation;