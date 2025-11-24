import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, Star, Phone, Mail, ArrowLeft, Clock, Shield, Award, ArrowRight, Users, Microscope, Heart, Smile, Zap, Eye, Target } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DentalImplantPage = () => {
  const breadcrumbItems = [
  { label: 'Services', href: '/#services' },
  { label: 'Dental Implants' }];

  const faqItems = [
  {
    question: "What are dental implants and how do they work?",
    answer: "Dental implants are titanium posts surgically placed into the jawbone to replace tooth roots. They provide a strong foundation for fixed or removable replacement teeth that are made to match your natural teeth. The implant fuses with your jawbone through a process called osseointegration, creating a stable base for the crown."
  },
  {
    question: "Am I a candidate for dental implants in Hyderabad?",
    answer: "Most adults with good general health and adequate jawbone density are candidates for dental implants. Our dental implant specialists in Hyderabad will evaluate your oral health, medical history, and jawbone condition through X-rays and examinations to determine if implants are right for you."
  },
  {
    question: "How long do dental implants last?",
    answer: "With proper care and maintenance, dental implants can last a lifetime. The crown on top may need replacement after 10-20 years due to normal wear, but the implant itself is designed to be a permanent solution. Regular dental check-ups and good oral hygiene are essential for longevity."
  },
  {
    question: "What is the cost of dental implants in Hyderabad?",
    answer: "The cost of dental implants varies based on the number of implants, type of restoration, and individual case complexity. At Gnathos Dental, we offer competitive pricing for the best dental implants in Hyderabad. We provide detailed cost estimates during consultation and offer flexible payment options."
  },
  {
    question: "Is the dental implant procedure painful?",
    answer: "Our dental implant procedures are performed under local anesthesia, making them virtually painless. Most patients experience minimal discomfort during and after the procedure. We use advanced techniques and provide comprehensive post-operative care instructions to ensure a comfortable recovery."
  },
  {
    question: "How long does the dental implant process take?",
    answer: "The complete dental implant process typically takes 3-6 months. This includes healing time for osseointegration. However, we offer same-day implants for suitable cases where temporary teeth can be placed immediately. The timeline varies based on individual healing and case complexity."
  }];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Best Dental Implants in Hyderabad | Gnathos Dental - Advanced Implant Center"
        description="Get the best dental implants in Hyderabad at Gnathos Dental. Advanced implant technology, expert surgeons, same-day implants available. Book consultation today! Affordable & painless procedures."
        keywords="best dental implants Hyderabad, dental implant center, single tooth implant, all on 4 implants, same day implants, dental implant cost Hyderabad, implant dentist"
        canonical="https://gnathosdentalcare.com/dentalimplant"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Gnathos Dental",
          "url": "https://www.gnathosdental.in/dental-implants",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1000"
          }
        }} />

      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                  🦷 Best Dental Implants in Hyderabad
                </Badge>
                <h1 className="text-4xl lg:text-4xl font-bold text-gray-800 leading-tight">
                    Regain Your 

                  <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent"> Smile </span>
                  <br />with the Best Dental Implant Treatment in Hyderabad
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                 At Gnathos Dental Clinic, we specialise in providing world-class dental implant solutions tailored to restore both function and confidence. Whether you’re missing a single tooth or need a full-arch replacement, our experienced implant team utilises the latest techniques and premium materials to deliver long-lasting, natural-looking results. Choose us for the best dental implant treatment in Hyderabad — where precision meets compassion and your smile is our top priority.
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
                <img src="\GNA Dental\Bridge-The-Gap In-Your-Smile.png"
                alt="Advanced Dental Implant Procedure - Expert Treatment"
                className="w-full h-full object-cover rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Who Needs Dental Implants */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Who Needs Dental Implants?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Dental implants are the ideal solution for various dental conditions and situations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Single Missing Tooth</h3>
                </div>
                <p className="text-gray-600 text-sm">Replace one missing tooth without affecting adjacent healthy teeth.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Multiple Missing Teeth</h3>
                </div>
                <p className="text-gray-600 text-sm">Support bridges or individual crowns for several missing teeth.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Complete Tooth Loss</h3>
                </div>
                <p className="text-gray-600 text-sm">Full arch restoration with implant-supported dentures.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Loose Dentures</h3>
                </div>
                <p className="text-gray-600 text-sm">Secure and stabilize ill-fitting or uncomfortable dentures.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Damaged Tooth Roots</h3>
                </div>
                <p className="text-gray-600 text-sm">Replace teeth with severely damaged or infected roots.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Bone Preservation</h3>
                </div>
                <p className="text-gray-600 text-sm">Prevent jawbone deterioration after tooth extraction.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* When Can You Get A Dental Implant */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              When Can You Get A Dental Implant?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Look for these signs and indications that suggest you're a good candidate for dental implants.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Adequate Bone Density</h3>
                  <p className="text-gray-600">Sufficient jawbone to support the implant or willingness to undergo bone grafting procedures.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Good Overall Health</h3>
                  <p className="text-gray-600">Healthy immune system and ability to heal properly after surgery.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Healthy Gums</h3>
                  <p className="text-gray-600">Free from periodontal disease or willing to undergo gum treatment first.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Commitment to Healing</h3>
                  <p className="text-gray-600">Willingness to follow post-operative instructions and attend follow-up appointments.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Smile className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Non-Smoker Status</h3>
                  <p className="text-gray-600">Non-smoking or willing to quit, as smoking can interfere with healing.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Age Consideration</h3>
                  <p className="text-gray-600">Completed jaw growth (typically 18+ years) and realistic expectations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Benefits Of Dental Implants */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Benefits Of Dental Implants
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover why dental implants are considered the gold standard for tooth replacement.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Natural Look and Feel</h3>
                <p className="text-gray-600 text-sm">Implants look, feel, and function like your natural teeth.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Preserve Facial Structure</h3>
                <p className="text-gray-600 text-sm">Prevent bone loss and maintain your facial appearance.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Protect Adjacent Teeth</h3>
                <p className="text-gray-600 text-sm">No need to alter healthy neighboring teeth.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Improved Eating and Speaking</h3>
                <p className="text-gray-600 text-sm">Restore full chewing function and clear speech.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Permanent Solution</h3>
                <p className="text-gray-600 text-sm">Last a lifetime with proper care and maintenance.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Enhanced Confidence</h3>
                <p className="text-gray-600 text-sm">Smile, laugh, and speak with complete confidence.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Easy Maintenance</h3>
                <p className="text-gray-600 text-sm">Care for them like natural teeth with regular brushing and flossing.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">No Dietary Restrictions</h3>
                <p className="text-gray-600 text-sm">Enjoy all your favorite foods without worry.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Cost-Effective Long Term</h3>
                <p className="text-gray-600 text-sm">One-time investment that lasts for decades.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities and Technology */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Facilities and Technology
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              State-of-the-art equipment and world-class facilities for the most advanced implant treatments.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Microscope className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">3D CT Imaging</h3>
                <p className="text-gray-600 text-sm">Precise 3D planning for optimal implant placement.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Laser Dentistry</h3>
                <p className="text-gray-600 text-sm">Minimally invasive procedures with faster healing.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Surgical Microscope</h3>
                <p className="text-gray-600 text-sm">Enhanced precision and accuracy in implant surgery.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Sterilization Center</h3>
                <p className="text-gray-600 text-sm">International standards for infection control.</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="font-medium">ISO 9001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="font-medium">NABH Accredited</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Premium Implant Brands</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach To Implant Dentistry */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our Approach To Implant Dentistry
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Personalized evaluation and treatment planning for optimal results and patient satisfaction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mb-2">
                  <Target className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">Comprehensive Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Detailed medical history, oral examination, and 3D imaging for precise treatment planning.</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">Multidisciplinary Team</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Collaboration between oral surgeons, periodontists, and prosthodontists for optimal outcomes.</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mb-2">
                  <Heart className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">Patient-Centered Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Customized treatment plans based on individual needs, preferences, and budget considerations.</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mb-2">
                  <Microscope className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">Advanced Diagnostics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Digital impressions, bone density analysis, and virtual treatment planning for predictable results.</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mb-2">
                  <Shield className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Use of premium implant systems with long-term clinical data and proven success rates.</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mb-2">
                  <Clock className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">Long-term Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Comprehensive follow-up care and maintenance programs to ensure implant longevity.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Dental Implant Process */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our Dental Implant Process
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A systematic 6-step approach to ensure successful implant placement and optimal healing.
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
                <p className="text-gray-600 text-sm">Comprehensive examination, medical history review, and treatment options discussion.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    2
                  </div>
                  <h3 className="font-semibold text-gray-800">3D Imaging & Planning</h3>
                </div>
                <p className="text-gray-600 text-sm">Advanced CT scans and digital planning for precise implant placement.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    3
                  </div>
                  <h3 className="font-semibold text-gray-800">Bone Grafting (if needed)</h3>
                </div>
                <p className="text-gray-600 text-sm">Bone augmentation procedures to ensure adequate bone volume for implant stability.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    4
                  </div>
                  <h3 className="font-semibold text-gray-800">Implant Placement</h3>
                </div>
                <p className="text-gray-600 text-sm">Surgical placement of titanium implant into the jawbone using guided surgery techniques.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    5
                  </div>
                  <h3 className="font-semibold text-gray-800">Healing & Integration</h3>
                </div>
                <p className="text-gray-600 text-sm">3-6 months healing period for osseointegration and temporary restoration if needed.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    6
                  </div>
                  <h3 className="font-semibold text-gray-800">Crown Placement</h3>
                </div>
                <p className="text-gray-600 text-sm">Final restoration placement and bite adjustment for optimal function and aesthetics.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <FAQ
        title="Dental Implant FAQs - Your Questions Answered"
        items={faqItems} />

      {/* Call to Action */}
      <CallToAction
        title="Ready for Your Dental Implant Consultation?"
        description="Get the best dental implants in Hyderabad at our advanced implant center. Expert surgeons, latest technology, and affordable prices."
        primaryButtonText="Book Implant Consultation"
        secondaryButtonText="Call: +91 9955 708 885" />


    </div>);

};

export default DentalImplantPage;