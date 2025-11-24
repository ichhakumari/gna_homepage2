import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, Users, Award, CheckCircle, Navigation, Car, Train } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";

const BanjaraHillsPage = () => {
  const faqItems = [
  {
    question: "Where is Gnathos Dental Banjara Hills located?",
    answer: "Our Banjara Hills clinic is conveniently located in the heart of Banjara Hills, one of Hyderabad's most prestigious areas. We are easily accessible from Road No. 12, with ample parking and close to major landmarks."
  },
  {
    question: "What dental services are available at Banjara Hills location?",
    answer: "We offer comprehensive dental services including dental implants, root canal treatment, cosmetic dentistry, orthodontics, teeth whitening, and emergency dental care at our Banjara Hills clinic."
  },
  {
    question: "Do you accept dental insurance at Banjara Hills clinic?",
    answer: "Yes, we accept most major dental insurance plans at our Banjara Hills location. Our team can help you understand your coverage and process claims for maximum benefits."
  },
  {
    question: "What are the clinic timings in Banjara Hills?",
    answer: "Our Banjara Hills clinic is open Monday to Saturday from 9:00 AM to 8:00 PM, and Sunday from 10:00 AM to 6:00 PM. We also provide emergency dental services 24/7."
  },
  {
    question: "Is parking available at Banjara Hills dental clinic?",
    answer: "Yes, we provide free parking for our patients at the Banjara Hills location. The clinic is also easily accessible by public transport and cab services."
  }];


  return (
    <div className="bg-white">
      <SEO
        title="Best Dental Clinic in Banjara Hills, Hyderabad | Gnathos Dental"
        description="Visit Gnathos Dental in Banjara Hills for expert dental care. Best dentist in Banjara Hills offering dental implants, root canal, cosmetic dentistry. Book appointment!"
        keywords="dental clinic Banjara Hills, dentist Banjara Hills Hyderabad, dental implants Banjara Hills, root canal Banjara Hills, cosmetic dentistry Banjara Hills"
        canonical="https://gnathosdentalcare.com/locations/banjara-hills"
        location={{
          name: "Banjara Hills",
          address: "Road No. 12, Banjara Hills, Hyderabad, Telangana 500034",
          phone: "+91 9955 708 885",
          latitude: 17.4126,
          longitude: 78.4486
        }} />


      <Breadcrumbs
        items={[
        { label: "Home", href: "/" },
        { label: "Locations", href: "/" },
        { label: "Banjara Hills", href: "/locations/banjara-hills" }]
        } />


      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                  Premium Dental Care in Banjara Hills
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  Best Dental Clinic in
                  <span className="bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent"> Banjara Hills</span>
                  <br />Hyderabad
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Experience world-class dental care at our state-of-the-art clinic in Banjara Hills. We provide comprehensive dental treatments with advanced technology and expert care in the heart of Hyderabad's most prestigious neighborhood.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-500 hover:from-green-700 hover:to-blue-600">
                  Book Appointment
                </Button>
                <Button size="lg" variant="outline">
                  <Link to="/contact">Get Directions</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">300+</div>
                  <div className="text-sm text-gray-600">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">5★</div>
                  <div className="text-sm text-gray-600">Google Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Care</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&h=500&fit=crop&crop=center"
                  alt="Best Dental Clinic in Banjara Hills Hyderabad"
                  className="w-full h-full object-cover rounded-2xl" />

              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span className="font-semibold">Banjara Hills</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services at Banjara Hills */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Dental Services in Banjara Hills
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental care with advanced technology and expert specialists at our Banjara Hills location.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=64&h=64&fit=crop&crop=center"
                    alt="Dental Implants Banjara Hills"
                    className="w-8 h-8 object-cover rounded" />

                </div>
                <CardTitle className="text-xl text-green-600">Dental Implants</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">Advanced dental implant procedures using latest 3D imaging technology for precise and comfortable treatment.</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwY3JvcHBlZCUyMGltYWdlJTIwb2YlMjBhJTIwZGVudGFsJTIwdG9vbCUyMG9yJTIwcmVsYXRlZCUyMG9iamVjdCUyQyUyMG9wdGltaXplZCUyMGZvciUyMGElMjA2NHg2NCUyMHBpeGVsJTIwZGlzcGxheS58ZW58MHx8fHwxNzQ5MzQ0NDY5fDA&ixlib=rb-4.1.0&q=80&w=200$w=64"
                    alt="Cosmetic Dentistry Banjara Hills"
                    className="w-8 h-8 object-cover rounded" />

                </div>
                <CardTitle className="text-xl text-green-600">Cosmetic Dentistry</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">Complete smile makeovers, teeth whitening, veneers, and cosmetic treatments for a perfect smile.</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=64&h=64&fit=crop&crop=center"
                    alt="Root Canal Banjara Hills"
                    className="w-8 h-8 object-cover rounded" />

                </div>
                <CardTitle className="text-xl text-green-600">Root Canal Treatment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">Painless root canal therapy using advanced laser technology and modern anesthesia techniques.</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwY3JvcHBlZCUyMGltYWdlJTIwb2YlMjBhJTIwZGVudGFsJTIwdG9vbCUyMG9yJTIwcmVsYXRlZCUyMG9iamVjdCUyQyUyMG9wdGltaXplZCUyMGZvciUyMGElMjA2NHg2NCUyMHBpeGVsJTIwZGlzcGxheS58ZW58MHx8fHwxNzQ5MzQ0NDY5fDA&ixlib=rb-4.1.0&q=80&w=200$w=64"
                    alt="Orthodontics Banjara Hills"
                    className="w-8 h-8 object-cover rounded" />

                </div>
                <CardTitle className="text-xl text-green-600">Orthodontics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">Invisible braces, traditional braces, and clear aligners for perfect teeth alignment at any age.</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=64&h=64&fit=crop&crop=center"
                    alt="Oral Surgery Banjara Hills"
                    className="w-8 h-8 object-cover rounded" />

                </div>
                <CardTitle className="text-xl text-green-600">Oral Surgery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">Expert oral and maxillofacial surgery including wisdom tooth extraction and complex procedures.</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=64&h=64&fit=crop&crop=center"
                    alt="Preventive Care Banjara Hills"
                    className="w-8 h-8 object-cover rounded" />

                </div>
                <CardTitle className="text-xl text-green-600">Preventive Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">Regular checkups, cleaning, fluoride treatments, and preventive care for optimal oral health.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Benefits */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Our Banjara Hills Clinic?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Located in the prestigious Banjara Hills area, our clinic offers premium dental care with unmatched convenience and accessibility.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Prime Location</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Conveniently located in the heart of Banjara Hills, easily accessible from all parts of Hyderabad with excellent connectivity.</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Easy Parking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Ample free parking space available for all patients. No hassle of finding parking in the busy Banjara Hills area.</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Premium Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>State-of-the-art dental facility with advanced equipment and experienced specialists providing world-class treatment.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Visit Our Banjara Hills Dental Clinic
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our Banjara Hills location offers easy access to premium dental care with modern facilities and expert dental team. Experience the convenience of top-quality dental treatment in Hyderabad's most sought-after neighborhood.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">Road No. 12, Banjara Hills, Hyderabad, Telangana 500034</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">+91 9955 708 885</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Timings</h4>
                    <p className="text-gray-600">Mon-Sat: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Train className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">How to Reach</h4>
                    <p className="text-gray-600">Near KBR Park, Close to Filmcity Metro Station</p>
                    <p className="text-gray-600">Easy access via Outer Ring Road</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Book Your Appointment</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Expert dental specialists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Advanced dental technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Flexible appointment timings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Emergency dental services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Insurance accepted</span>
                </div>
              </div>
              <div className="mt-6">
                <Button className="w-full bg-gradient-to-r from-green-600 to-blue-500 hover:from-green-700 hover:to-blue-600">
                  Book Appointment Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ items={faqItems} />

      {/* Call to Action */}
      <CallToAction />
    </div>);

};

export default BanjaraHillsPage;