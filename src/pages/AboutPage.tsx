import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Heart, Shield, Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import CallToAction from "@/components/CallToAction";

const AboutPage = () => {
  const stats = [
  { number: "10,000+", label: "Happy Patients", icon: "👥" },
  { number: "15+", label: "Years Experience", icon: "⏰" },
  { number: "5", label: "Star Rating", icon: "⭐" },
  { number: "4", label: "Clinic Locations", icon: "📍" }];


  const values = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "Every treatment plan is customized to meet individual patient needs and comfort levels."
  },
  {
    icon: Award,
    title: "Excellence in Treatment",
    description: "We maintain the highest standards of dental care using advanced technology and techniques."
  },
  {
    icon: Shield,
    title: "Safe & Sterile Environment",
    description: "State-of-the-art sterilization protocols ensure the safest treatment environment."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our team of experienced dentists and specialists are committed to your oral health."
  }];


  return (
    <div className="bg-white">
      <SEO
        title="About Gnathos Dental - Expert Dental Care in Hyderabad"
        description="Learn about Gnathos Dental's mission, values, and commitment to providing exceptional dental care in Hyderabad. Meet our expert team and discover our story."
        keywords="about gnathos dental, dental clinic hyderabad, expert dentists, dental care mission" />


      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "About" }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                  About Our Practice
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  Transforming Smiles,
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent"> Changing Lives</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  At Gnathos Dental, we believe that a healthy, beautiful smile has the power to transform lives. For over 15 years, we've been committed to providing exceptional dental care that combines advanced technology with compassionate treatment.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">


              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&h=500&fit=crop&crop=center"
                  alt="Gnathos Dental Team"
                  className="w-full h-full object-cover rounded-2xl" />

              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">5.0 Rating</span>
                </div>
                <div className="text-sm text-gray-600">1000+ Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) =>
            <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl lg:text-4xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From humble beginnings to becoming Hyderabad's trusted dental care provider
              </p>
            </div>

            <div className="space-y-8">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Founded on Care</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Gnathos Dental was founded with a simple yet powerful vision: to provide world-class dental care that's accessible, comfortable, and transformative. Our journey began with Dr. Venkat's passion for creating beautiful, healthy smiles.
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        What started as a small clinic in Hitech City has grown into a network of dental excellence, serving thousands of patients across Hyderabad with the same commitment to quality and care.
                      </p>
                    </div>
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop&crop=center"
                        alt="Dental clinic founding"
                        className="w-full h-64 object-cover rounded-lg" />

                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide every aspect of our dental practice and patient care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>);

            })}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-16 bg-gradient-to-br from-gray-50 to-emerald-50">
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
                <div className="w-24 h-24 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full mx-auto mb-4 overflow-hidden">
                  <img src="\GNA Dental\Icons\Dr-Naveetha.jpg"
                  alt="Dr. Navatha Mortha - Oral and Maxillofacial Surgeon" className="w-full h-full object-contain" />
                </div>
                <CardTitle className="text-xl">Dr. Navatha Mortha</CardTitle>
                <CardDescription className="text-emerald-600 font-medium">MDS Oral and Maxillofacial Surgeon</CardDescription>
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
                  <img src="/\GNA Dental\Icons\Dr-Suresh.jpg"
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

      {/* Mission Statement */}

      <CallToAction />
    </div>);

};

export default AboutPage;