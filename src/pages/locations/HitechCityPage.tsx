import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Star, Car, Users, Award, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";

const HitechCityPage = () => {
  const breadcrumbItems = [
  { label: 'Locations', href: '/#locations' },
  { label: 'Hitech City Clinic' }];


  const faqItems = [
  {
    question: "What services are available at the Hitech City clinic?",
    answer: "Our Hitech City clinic offers all dental services including dental implants, root canal treatment, dental crowns, wisdom tooth extraction, orthodontics, cosmetic dentistry, and emergency care. It's our flagship location with the most advanced equipment."
  },
  {
    question: "What are the working hours of Hitech City clinic?",
    answer: "We're open Monday-Saturday: 9:00 AM - 8:00 PM, Sunday: 10:00 AM - 6:00 PM. We also provide 24/7 emergency care for urgent dental situations."
  },
  {
    question: "Is parking available at the Hitech City location?",
    answer: "Yes, we have ample dedicated parking available at our Hitech City clinic. The location is also easily accessible by metro and public transport."
  },
  {
    question: "Do you accept walk-in patients at Hitech City?",
    answer: "While we prefer appointments to ensure minimal waiting time, we do accept walk-in patients for emergency cases. For regular treatments, booking an appointment is recommended."
  }];


  return (
    <div className="bg-white">
      <SEO
        title="Gnathos Dental Hitech City | Best Dental Clinic in Hitech City Hyderabad"
        description="Visit Gnathos Dental Hitech City - Premier dental clinic in Hyderabad's IT hub. Advanced treatments, expert doctors, convenient location. Book appointment today!"
        keywords="dental clinic Hitech City, dentist Hitech City Hyderabad, dental implants Hitech City, root canal Hitech City, Gnathos Dental Hitech City"
        canonical="https://gnathosdentalcare.com/locations/hitech-city"
        location={{
          name: 'Hitech City',
          address: 'Care Hospital, Near Cyberabad Police Commissionerate, Jayabheri Pine Valley, Hitech City, Hyderabad, 500032',
          phone: '+91 9955 708 885',
          latitude: 17.4399,
          longitude: 78.3908
        }} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  Main Clinic - Hitech City
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  Gnathos Dental
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Hitech City</span>
                  <br />Clinic
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our flagship clinic in the heart of Hyderabad's IT hub. Experience world-class dental care with advanced technology, expert dentists, and state-of-the-art facilities.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                  <Phone className="w-4 h-4 mr-2" />
                  Call: +91 9955 708 885
                </Button>
                <Button size="lg" variant="outline">
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </div>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5000+</div>
                  <div className="text-sm text-gray-600">Patients Treated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Expert Doctors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">4.9</div>
                  <div className="text-sm text-gray-600">Google Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&h=500&fit=crop&crop=center"
                alt="Gnathos Dental Hitech City Clinic"
                className="w-full h-full object-cover rounded-2xl" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">Best in Hitech City</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About Our Hitech City Clinic</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Located in the prestigious Care Hospital campus, our Hitech City clinic is the flagship location of Gnathos Dental. This state-of-the-art facility combines the best of dental technology with the expertise of our renowned dental specialists.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Being situated in Hyderabad's premier IT corridor, we understand the unique needs of working professionals and offer flexible scheduling, including early morning and late evening appointments. Our clinic is equipped with the latest dental technology including 3D imaging, laser dentistry, and digital smile design systems.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Advanced Technology</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Latest 3D CBCT imaging, laser dentistry, digital impressions, and computer-guided implant placement for precision treatment.
                    </CardDescription>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Expert Team</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Board-certified specialists in all dental fields including oral surgery, endodontics, orthodontics, and cosmetic dentistry.
                    </CardDescription>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                      <Car className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Easy Access</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Convenient location with ample parking, metro connectivity, and easy access from all parts of Hyderabad.
                    </CardDescription>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Flexible Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Extended hours to accommodate working professionals with early morning and late evening appointments available.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <Card className="border-0 shadow-lg sticky top-24">
                <CardHeader>
                  <CardTitle className="text-xl">Visit Our Hitech City Clinic</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800 mb-1">Address</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Care Hospital, Near Cyberabad Police Commissionerate,<br />
                        Jayabheri Pine Valley, Hitech City,<br />
                        Hyderabad, Telangana 500032
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Phone</p>
                      <p className="text-gray-600">+91 9955 708 885</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800 mb-1">Working Hours</p>
                      <div className="text-gray-600 text-sm space-y-1">
                        <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                        <p>Sunday: 10:00 AM - 6:00 PM</p>
                        <p className="text-red-500 font-medium">24/7 Emergency Care</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 mb-3">
                      Book Appointment
                    </Button>
                    <Button variant="outline" className="w-full">
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Services Available at Hitech City Clinic
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental care under one roof with the latest technology and expert specialists.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-blue-600">Dental Implants</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Single tooth implants</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>All-on-4 implants</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Same day implants</span>
                  </li>
                </ul>
                <Link to="/dental-implants" className="inline-flex items-center text-blue-600 hover:text-blue-700 mt-3 font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-blue-600">Root Canal</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Laser root canal</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Single sitting treatment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Painless procedure</span>
                  </li>
                </ul>
                <Link to="/root-canal" className="inline-flex items-center text-blue-600 hover:text-blue-700 mt-3 font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-blue-600">Orthodontics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Invisible braces</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Clear aligners</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Metal braces</span>
                  </li>
                </ul>
                <Link to="/locations/madhapur" className="inline-flex items-center text-blue-600 hover:text-blue-700 mt-3 font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-blue-600">Cosmetic Dentistry</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Smile designing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Teeth whitening</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Veneers</span>
                  </li>
                </ul>
                <Link to="/locations/kondapur" className="inline-flex items-center text-blue-600 hover:text-blue-700 mt-3 font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose This Location */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Our Hitech City Clinic?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Prime Location</h3>
              <p className="text-gray-600">
                Located in the heart of Hyderabad's IT hub, easily accessible from Gachibowli, Madhapur, and Kondapur.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Hospital-Grade Facility</h3>
              <p className="text-gray-600">
                Located within Care Hospital campus, ensuring the highest standards of hygiene and emergency care support.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Our most experienced specialists practice at this location, offering the highest level of dental expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        title="Hitech City Clinic FAQs"
        items={faqItems} />


      {/* Call to Action */}
      <CallToAction
        title="Visit Our Hitech City Clinic Today"
        description="Experience world-class dental care at our flagship Hitech City location. Advanced technology, expert specialists, and convenient parking available."
        primaryButtonText="Book Appointment"
        secondaryButtonText="Call: +91 9955 708 885" />


    </div>);

};

export default HitechCityPage;