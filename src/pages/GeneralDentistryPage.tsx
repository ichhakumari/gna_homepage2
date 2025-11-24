import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, Star, Phone, Mail, ArrowLeft, Clock, Shield, Award, ArrowRight, Users, Microscope, Heart, Smile, Zap, Eye, Target } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";

const GeneralDentistryPage = () => {
  const breadcrumbItems = [
  { label: 'Services', href: '/#services' },
  { label: 'General Dentistry' }];

  const faqItems = [
  {
    question: "How often should I visit the dentist for general check-ups?",
    answer: "For most patients, we recommend dental check-ups and cleanings every 6 months. However, some patients with specific oral health conditions may need more frequent visits. Our general dentistry team in Hyderabad will recommend the best schedule based on your individual oral health needs."
  },
  {
    question: "What services are included in general dentistry?",
    answer: "General dentistry includes preventive care like cleanings and exams, restorative treatments such as fillings and crowns, basic extractions, fluoride treatments, oral health education, and early detection of dental problems. At Gnathos Dental, we provide comprehensive general dental care for the whole family."
  },
  {
    question: "Is general dentistry suitable for children?",
    answer: "Absolutely! General dentistry includes family dentistry services for patients of all ages. We provide gentle, child-friendly dental care including preventive treatments, fluoride applications, dental sealants, and oral health education to help children develop good dental habits from an early age."
  },
  {
    question: "What can I expect during a routine dental check-up?",
    answer: "A routine dental check-up includes a thorough examination of your teeth, gums, and oral tissues, professional cleaning to remove plaque and tartar, oral cancer screening, X-rays if needed, and discussion of any treatment recommendations. We also provide personalized oral hygiene instructions."
  },
  {
    question: "Do you accept dental insurance for general dentistry services?",
    answer: "Yes, we accept most major dental insurance plans for general dentistry services. Our team will help verify your benefits and work with your insurance company to maximize your coverage. We also offer flexible payment options for treatments not covered by insurance."
  },
  {
    question: "Can general dentistry help prevent serious dental problems?",
    answer: "Yes! Preventive general dentistry is the best way to avoid serious dental problems. Regular check-ups, cleanings, and early treatment of minor issues can prevent costly and complex procedures later. Early detection and treatment save both your oral health and your budget."
  }];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Best General Dentistry in Hyderabad | Gnathos Dental - Family Dental Care"
        description="Comprehensive general dentistry services in Hyderabad. Family dental care, preventive treatments, cleanings, fillings & more. Book your dental check-up today!"
        keywords="general dentistry Hyderabad, family dentist, dental check-up, preventive dental care, dental cleaning, dental fillings, oral health"
        canonical="https://gnathosdentalcare.com/general-dentistry"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Gnathos Dental",
          "url": "https://www.gnathosdental.in/general-dentistry",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1000"
          }
        }} />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                  🦷 Best General Dentistry in Hyderabad
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  Comprehensive General Dental Care For Your
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent"> Entire Family</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Complete general dentistry services including preventive care, restorative treatments, and family dentistry to maintain optimal oral health for patients of all ages.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600">
                  Book Free Consultation
                </Button>
                <Button size="lg" variant="outline">
                  Emergency: +91 9955 708 885
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center">
                <img src="\GNA Dental\Dental-Care.png"
                alt="Comprehensive General Dental Care - Family Dentistry"
                className="w-full h-full object-cover rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs General Dentistry */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Who Needs General Dentistry?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              General dentistry is essential for maintaining optimal oral health for patients of all ages and backgrounds.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Regular Check-ups</h3>
                </div>
                <p className="text-gray-600 text-sm">Everyone needs routine dental exams and cleanings for preventive care.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Preventive Care</h3>
                </div>
                <p className="text-gray-600 text-sm">Patients wanting to prevent dental problems before they develop.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Early Detection</h3>
                </div>
                <p className="text-gray-600 text-sm">Early identification and treatment of dental issues saves time and money.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Family Dentistry</h3>
                </div>
                <p className="text-gray-600 text-sm">Comprehensive dental care for children, adults, and seniors.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Oral Health Education</h3>
                </div>
                <p className="text-gray-600 text-sm">Learning proper oral hygiene techniques and dietary guidance.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Emergency Care</h3>
                </div>
                <p className="text-gray-600 text-sm">Immediate treatment for dental emergencies and urgent care needs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our General Dentistry Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our General Dentistry Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive dental services to meet all your oral health needs in one convenient location.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Dental Cleanings</h3>
                  <p className="text-gray-600">Professional cleaning to remove plaque, tartar, and stains for optimal oral health.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Dental Fillings</h3>
                  <p className="text-gray-600">Tooth-colored composite fillings to restore cavities and maintain natural appearance.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Tooth Extractions</h3>
                  <p className="text-gray-600">Gentle removal of damaged or problematic teeth with minimal discomfort.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Preventive Care</h3>
                  <p className="text-gray-600">Regular check-ups, X-rays, and oral cancer screenings for early detection.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Smile className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Oral Examinations</h3>
                  <p className="text-gray-600">Comprehensive oral health assessments to identify and address potential issues.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Fluoride Treatments</h3>
                  <p className="text-gray-600">Professional fluoride applications to strengthen teeth and prevent decay.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Regular Dental Care */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Benefits of Regular Dental Care
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover why regular general dentistry visits are essential for maintaining optimal oral health and overall well-being.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Early Problem Detection</h3>
                <p className="text-gray-600 text-sm">Identify dental issues before they become serious and costly to treat.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Prevent Gum Disease</h3>
                <p className="text-gray-600 text-sm">Professional cleanings remove plaque and tartar that cause gingivitis and periodontitis.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Cavity Prevention</h3>
                <p className="text-gray-600 text-sm">Fluoride treatments and regular cleanings help prevent tooth decay.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Oral Cancer Screening</h3>
                <p className="text-gray-600 text-sm">Regular examinations include screening for oral cancer and other abnormalities.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Fresh Breath</h3>
                <p className="text-gray-600 text-sm">Professional cleanings remove bacteria that cause bad breath.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Cost Savings</h3>
                <p className="text-gray-600 text-sm">Preventive care costs much less than treating advanced dental problems.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Overall Health Benefits</h3>
                <p className="text-gray-600 text-sm">Good oral health is linked to better cardiovascular and overall health.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Brighter Smile</h3>
                <p className="text-gray-600 text-sm">Regular cleanings remove stains and keep your smile looking its best.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Peace of Mind</h3>
                <p className="text-gray-600 text-sm">Know that your oral health is being professionally monitored and maintained.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our General Dentistry Process */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our General Dentistry Process
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A systematic 6-step approach to ensure comprehensive dental care and optimal oral health outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    1
                  </div>
                  <h3 className="font-semibold text-gray-800">Initial Consultation</h3>
                </div>
                <p className="text-gray-600 text-sm">Comprehensive medical and dental history review, discussion of concerns and goals.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    2
                  </div>
                  <h3 className="font-semibold text-gray-800">Oral Examination</h3>
                </div>
                <p className="text-gray-600 text-sm">Thorough examination of teeth, gums, bite, and oral tissues for any abnormalities.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    3
                  </div>
                  <h3 className="font-semibold text-gray-800">Diagnostic Imaging</h3>
                </div>
                <p className="text-gray-600 text-sm">Digital X-rays and imaging as needed to identify hidden problems and plan treatment.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    4
                  </div>
                  <h3 className="font-semibold text-gray-800">Treatment Planning</h3>
                </div>
                <p className="text-gray-600 text-sm">Customized treatment plan discussion with priority recommendations and timeline.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    5
                  </div>
                  <h3 className="font-semibold text-gray-800">Treatment & Prevention</h3>
                </div>
                <p className="text-gray-600 text-sm">Professional cleaning, necessary treatments, and preventive care applications.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    6
                  </div>
                  <h3 className="font-semibold text-gray-800">Follow-up Care</h3>
                </div>
                <p className="text-gray-600 text-sm">Regular maintenance schedule and ongoing oral health monitoring for optimal results.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        title="General Dentistry FAQs - Your Questions Answered"
        items={faqItems} />

      {/* Call to Action */}
      <CallToAction
        title="Ready for Your General Dentistry Visit?"
        description="Experience comprehensive general dentistry care for your entire family. Professional, gentle, and affordable dental services in Hyderabad."
        primaryButtonText="Book Dental Check-up"
        secondaryButtonText="Call: +91 9955 708 885" />

    </div>);

};

export default GeneralDentistryPage;