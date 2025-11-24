import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Star, Building, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const MadhapurPage = () => {
  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                  Planned - Madhapur
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  Gnathos Dental
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Madhapur</span>
                  <br />Clinic
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Bringing advanced dental care to the heart of Madhapur's financial district. Stay tuned for our upcoming clinic serving the corporate community.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                  <Phone className="w-4 h-4 mr-2" />
                  Express Interest: +91 9955 708 885
                </Button>
                <Button size="lg" variant="outline">
                  <MapPin className="w-4 h-4 mr-2" />
                  Subscribe for Updates
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop&crop=center"
                alt="Gnathos Dental Madhapur Clinic"
                className="w-full h-full object-cover rounded-2xl" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Building className="w-5 h-5 text-orange-400" />
                  <span className="font-semibold">Financial District</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision for Madhapur */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our Vision for Madhapur
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Strategically located to serve the bustling financial and corporate district with premium dental care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Corporate Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Tailored services for the corporate community with executive packages and flexible scheduling.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Premium Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Luxurious clinic design with VIP treatment rooms and concierge services for busy professionals.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Express Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Quick consultation slots and same-day treatments for urgent dental needs of working professionals.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Planned Services */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Executive Dental Services Planned
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Premium dental care designed for the corporate lifestyle with focus on aesthetics and quick recovery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">Executive Smile Packages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Complete smile makeovers</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Digital smile design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Express whitening sessions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Same-day crown solutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">VIP Treatment Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Private treatment suites</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Concierge appointment booking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Corporate wellness programs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Executive health packages</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Alternative */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Experience Premium Care Today
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              While we finalize our Madhapur location, enjoy the same premium services at our Hitech City flagship clinic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/locations/hitech-city">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                  Book at Hitech City
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Get Madhapur Updates
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>);

};

export default MadhapurPage;