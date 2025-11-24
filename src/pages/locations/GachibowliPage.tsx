import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Star, Train, Car, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const GachibowliPage = () => {
  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                  Opening Soon - Gachibowli
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  Gnathos Dental
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Gachibowli</span>
                  <br />Clinic
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Get ready for world-class dental care in Gachibowli. Our new branch brings the same expert treatment and advanced technology closer to you.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                  <Phone className="w-4 h-4 mr-2" />
                  Pre-Register: +91 9955 708 885
                </Button>
                <Button size="lg" variant="outline">
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Location Updates
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=500&h=500&fit=crop&crop=center"
                alt="Gnathos Dental Gachibowli Clinic"
                className="w-full h-full object-cover rounded-2xl" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-green-400 fill-current" />
                  <span className="font-semibold">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Location Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              What to Expect at Our Gachibowli Clinic
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our upcoming Gachibowli location will feature the same high-quality care and advanced technology as our main Hitech City clinic.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Train className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Easy Connectivity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Strategic location with excellent metro connectivity and easy access from IT companies in Gachibowli.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Ample Parking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Dedicated parking space for patients with easy vehicle access and security.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Extended Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Flexible timing to accommodate IT professionals with early morning and late evening slots.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Planning */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Comprehensive Services Planned
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our Gachibowli clinic will offer the complete range of dental services with the latest technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-blue-600">Advanced Implants</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>3D guided implants</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Same day solutions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>All-on-4 treatment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-blue-600">Laser Dentistry</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Painless procedures</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Faster healing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Precise treatment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-blue-600">Digital Orthodontics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Clear aligners</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Digital planning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Invisible braces</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-blue-600">Cosmetic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Smile makeovers</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Whitening treatments</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Porcelain veneers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Service - Visit Main Clinic */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Visit Our Hitech City Clinic Meanwhile
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              While we prepare our Gachibowli location, experience the same quality care at our main Hitech City clinic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/locations/hitech-city">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                  Visit Hitech City Clinic
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Get Notified When We Open
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>);

};

export default GachibowliPage;