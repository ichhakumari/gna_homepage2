import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Star, Users, Award, Heart, CheckCircle, Clock, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";

const HomePage = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqItems = [
    {
      question: "What makes Gnathos Dental the best dental clinic in Hyderabad?",
      answer: "Gnathos Dental is recognized as the best dental clinic in Hyderabad due to our advanced technology, expert team of specialists, painless treatments, and comprehensive care. We offer world-class dental services with 15+ years of experience and have treated over 1000+ happy patients."
    },
    {
      question: "Do you provide painless dental treatments?",
      answer: "Yes, we specialize in painless dental treatments using advanced laser technology, modern anesthesia techniques, and gentle procedures. Our patients experience minimal discomfort during treatments like root canal, dental implants, and extractions."
    },
    {
      question: "What dental services do you offer in Hyderabad?",
      answer: "We offer comprehensive dental services including dental implants, root canal treatment, dental crowns, wisdom tooth extraction, smile designing, cosmetic dentistry, and general dentistry. All treatments are performed using the latest technology."
    },
    {
      question: "Do you accept dental insurance?",
      answer: "Yes, we accept most major dental insurance plans. Our team can help you understand your coverage and maximize your benefits. We also offer flexible payment options and affordable treatment plans."
    },
    {
      question: "How do I book an appointment at Gnathos Dental?",
      answer: "You can book an appointment by calling us at +91 9955 708 885, emailing gnathosdentalcare@gmail.com, or visiting our clinic. We offer convenient scheduling including early morning and late evening appointments for working professionals."
    },
    {
      question: "Do you provide emergency dental care?",
      answer: "Yes, we provide 24/7 emergency dental care for urgent situations like severe tooth pain, dental trauma, or infections. Our experienced team is always ready to help you during dental emergencies."
    }];


  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Gnathos Dental",
    "description": "Gnathos Dental is one of the best dental clinic in Hyderabad offering advanced dental treatments including implants, root canal, orthodontics, cosmetic dentistry, and emergency care.",
    "url": "https://www.gnathosdental.in/",
    "telephone": "090006 66476",
    "image": "https://www.gnathosdental.in/path-to-image.jpg",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "CARE Hospitals, Old Mumbai Hwy, near Cyberabad Police Commissionerate, Jayabheri Pine Valley, HITEC City",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500032",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "17.4435",
      "longitude": "78.3772"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://facebook.com/",
      "https://instagram.com/",
      "https://linkedin.com/"
    ],
    "hasMap": "https://maps.app.goo.gl/fhikENYGKsNqhsxT7"
  };

  return (
    <div className="bg-white">
      <SEO
        title="Best Dental Clinic in Hyderabad | Gnathos Dental - Painless & Advanced Treatments"
        description="Gnathos Dental - Best dental clinic in Hyderabad offering painless dental implants, root canal, crowns & cosmetic dentistry. 15+ years experience, 1000+ happy patients. Book appointment today!"
        keywords="best dental clinic in Hyderabad, dental implants Hyderabad, painless root canal, dental crowns, cosmetic dentistry, Gnathos Dental, Hitech City dentist"
        canonical="https://gnathosdentalcare.com/"
        schema={schemaData} />

      {/* Hero Section */}
      <section id="home" className="pt-20 lg:pt-24 pb-16 bg-gradient-to-br from-gnathos-primary/5 via-white to-gnathos-secondary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent shadow bg-gnathos-primary/10 text-gnathos-primary hover:bg-gnathos-primary/20">
                  Best Dental Clinic in Hyderabad
                </Badge>
                <h1 className="text-4xl lg:text-4xl font-bold text-gray-800 leading-tight">
                  Welcome to Gnathos Dental – The Best Dental Clinic in Hyderabad
                </h1>
                {/* <h2 className="text-3xl lg:text-4xl font-bold text-gray-600 leading-tight mt-4">
                  Your Perfect Smile Starts Here in Hyderabad
                </h2> */}
                <p> At Gnathos Dental, we believe every smile deserves world-class care. Recognized as one of the best dental clinics in Hyderabad, we combine advanced dental technology, experienced specialists, and a patient-first approach to deliver exceptional dental experiences. Our mission is simple — to help you achieve a healthy, confident, and beautiful smile that lasts a lifetime.</p>
                <p> Located in the heart of Gachibowli, Hyderabad, Gnathos Dental is a modern, fully equipped dental centre offering comprehensive services in cosmetic dentistry, orthodontics, dental implants, root canal treatment, smile design, and preventive care. Every treatment we provide is customized to meet your specific dental needs, ensuring comfort, precision, and lasting results.</p>
                <p>
                  Our team of skilled dentists and specialists are dedicated to maintaining the highest standards of safety and hygiene while using state-of-the-art technology to ensure painless and effective dental care. From routine checkups to complex smile makeovers, Gnathos Dental offers a seamless blend of professionalism, compassion, and innovation.
                </p>

              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-gnathos-primary to-gnathos-secondary hover:from-gnathos-primary-dark hover:to-gnathos-secondary-dark">
                    Book Appointment
                  </Button>
                </Link>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('services')}>
                  View Services
                </Button>
              </div>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gnathos-primary">1000+</div>
                  <div className="text-sm text-gray-600">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gnathos-primary">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gnathos-primary">99%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center">
                <img src="\GNA Dental\Dental-Care.png"
                  alt="Best Dental Clinic in Hyderabad - Gnathos Dental"
                  className="w-full h-full object-cover rounded-2xl" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="\GNA Dental\Excellence in-Dental-Care.png"
                alt="Advanced Dental Care in Hyderabad"
                className="w-full h-96 object-cover rounded-2xl shadow-lg" />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                  Excellence in Dental Care Since 2009
                </h2>
                <h3 className="text-xl text-blue-600 font-semibold mb-4">
                  For Us, Excellence Is Not A Choice But A Commitment!
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  At Gnathos Dental, the best dental clinic in Hyderabad, we are committed to delivering exceptional dental care with advanced treatments and a patient-first approach. Whether you need pain relief, smile enhancement, braces, or dental implants, our expert team ensures painless and precise solutions using cutting-edge technology.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
                  <div className="text-sm text-gray-600">Hyderabad Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">80%</div>
                  <div className="text-sm text-gray-600">Smile Transformations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Care</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Latest 3D imaging & laser technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Personalized treatment plans</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Comprehensive oral hygiene guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Ongoing support & follow-up care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* Services Section */}
      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our Best Dental Services in Hyderabad
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental treatments with advanced technology and expert care for all your oral health needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Dental Implant */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <img src="/GNA Dental/Icons/Dental-Implants.png" alt="Best Dental Implants in Hyderabad" className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl group-hover:text-gnathos-primary transition-colors">Dental Implant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  Permanent tooth replacement solution.
                </p>
                <Link to="/dental-implants" className="inline-flex items-center text-gnathos-primary hover:text-gnathos-primary-dark mt-3 text-sm font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Root Canal */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <img src="/GNA Dental/Icons/Root-Canal.png" alt="Painless Root Canal Treatment" className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl group-hover:text-gnathos-primary transition-colors">Root Canal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  Save your natural tooth.
                </p>
                <Link to="/root-canal" className="inline-flex items-center text-gnathos-primary hover:text-gnathos-primary-dark mt-3 text-sm font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Dental Crowns & Bridges */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <img src="/GNA Dental/Icons/Dental-Crowns.png" alt="Dental Crowns & Bridges" className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl group-hover:text-gnathos-primary transition-colors">Dental Crowns & Bridges</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  Restore damaged teeth with custom crowns and bridges.
                </p>
                <Link to="/dental-crowns-bridges" className="inline-flex items-center text-gnathos-primary hover:text-gnathos-primary-dark mt-3 text-sm font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Oral Surgeries */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <img src="/GNA Dental/Icons/Dental-Implants.png" alt="Oral Surgeries" className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl group-hover:text-gnathos-primary transition-colors">Oral Surgeries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  Advanced surgical procedures for complex dental conditions.
                </p>
                <Link to="/oral-surgeries" className="inline-flex items-center text-gnathos-primary hover:text-gnathos-primary-dark mt-3 text-sm font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Wisdom Tooth Removal */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <img src="/GNA Dental/Icons/Wisdom-Tooth.png" alt="Wisdom Tooth Removal" className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl group-hover:text-gnathos-primary transition-colors">Wisdom Tooth Removal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  Safe extraction of wisdom teeth.
                </p>
                <Link to="/wisdom-tooth-removal" className="inline-flex items-center text-gnathos-primary hover:text-gnathos-primary-dark mt-3 text-sm font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            {/* General Dentistry */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <img src="/GNA Dental/Icons/Dental-Implants.png" alt="General Dentistry" className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl group-hover:text-gnathos-primary transition-colors">General Dentistry</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  Comprehensive dental care for the entire family.
                </p>
                <Link to="/general-dentistry" className="inline-flex items-center text-gnathos-primary hover:text-gnathos-primary-dark mt-3 text-sm font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Laser Dentistry */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <img src="/GNA Dental/Icons/Dental-Implants.png" alt="Laser Dentistry" className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl group-hover:text-gnathos-primary transition-colors">Laser Dentistry</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  Advanced laser treatments for precise dental care.
                </p>
                <Link to="/laser-dentistry" className="inline-flex items-center text-gnathos-primary hover:text-gnathos-primary-dark mt-3 text-sm font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Aligners */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <img src="/GNA Dental/Icons/Dental-Implants.png" alt="Aligners" className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl group-hover:text-gnathos-primary transition-colors">Aligners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  Invisible braces for perfect smile alignment.
                </p>
                <Link to="/aligners" className="inline-flex items-center text-gnathos-primary hover:text-gnathos-primary-dark mt-3 text-sm font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Additional Services Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Complete Dental Care Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From cosmetic dentistry to emergency care, we provide comprehensive oral health solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">Cosmetic Dentistry</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Smile designing & makeovers</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Dental bonding & veneers</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Porcelain veneers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">General Dentistry</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Regular checkups & cleanings</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Cavity fillings</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Gum disease treatment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">Oral Surgery</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Wisdom tooth extraction</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Dental implant surgery</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Gum disease treatment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Locations Section */}


      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Gnathos Dental?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine expertise, compassion, and cutting-edge technology to deliver exceptional dental care that exceeds your expectations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">24/7 Customer Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>We provide round-the-clock support to help our patients with any dental concerns, emergencies, and queries for complete peace of mind.</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Convenient Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Multiple locations across Hyderabad with dedicated parking, metro connectivity, and flexible scheduling for working professionals.</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Affordable Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>We offer all types of dental treatments at competitive and affordable prices in Hyderabad without compromising on quality or care standards.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Expert Dental Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced dental professionals are committed to providing top-quality care for a healthy and confident smile.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mx-auto mb-4 overflow-hidden">
                  <img src="\GNA Dental\Icons\Dr-Naveetha.jpg"
                    alt="Dr. Navatha Mortha - Oral and Maxillofacial Surgeon" className="w-full h-full object-contain" />
                </div>
                <CardTitle className="text-xl">Dr. Navatha Mortha</CardTitle>
                <CardDescription className="text-blue-600 font-medium">MDS Oral and Maxillofacial Surgeon</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Specialist in oral and maxillofacial surgery with expertise in complex dental procedures, wisdom tooth extraction, and facial trauma.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mx-auto mb-4 overflow-hidden">
                  <img src="\GNA Dental\Icons\Dr-Pratyusha.jpg"
                    alt="Dr. Pratyusha - Consultant Dental Surgeon" className="w-full h-full object-contain" />
                </div>
                <CardTitle className="text-xl">Dr. Pratyusha</CardTitle>
                <CardDescription className="text-blue-600 font-medium">BDS Consultant Dental Surgeon</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Clinical Superintendent & Head of Operations, ensuring excellent patient care, clinic management, and treatment coordination.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mx-auto mb-4 overflow-hidden">
                  <img src="\GNA Dental\Icons\Dr-Suresh.jpg"
                    alt="Dr. Suresh PL - Senior Dental Surgeon" className="w-full h-full object-contain" />
                </div>
                <CardTitle className="text-xl">Dr. Suresh PL</CardTitle>
                <CardDescription className="text-blue-600 font-medium">MDS, MOMS RCPS (UK)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Senior Consultant, Oral and Maxillofacial Surgeon  TMJ Specialist.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Call to Action */}
      <CallToAction />

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                  Visit the Best Dental Clinic in Hyderabad
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Experience world-class dental care at Gnathos Dental. Our state-of-the-art facility and expert team are ready to give you the perfect smile you deserve.
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Our  Location</h3>
                  <p className="text-gray-600">Care Hospital, Near Cyberabad Police Commissionerate, Jayabheri Pine Valley, Hitech City, Hyderabad, 500032</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Contact Numbers</h3>
                  <a href="tel:+919955708885" className="text-gray-600">+91 9955 708 885</a>

                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Email Us</h3>
                  <a href="mailto:gnathosdentalcare@gmail.com" className="text-gray-600">gnathosdentalcare@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose Gnathos Dental?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Advanced hospital-grade dental clinic</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Specialized care for patients with diabetes & heart disease</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">1000+ happy patients and glowing reviews</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Prime locations across Hyderabad</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Flexible timings for working professionals</span>
                </div>
              </div>
              <div className="mt-6">
                <Link to="/contact">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                    Schedule Your Visit Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <FAQ items={faqItems} />
    </div>

  );



};

export default HomePage;