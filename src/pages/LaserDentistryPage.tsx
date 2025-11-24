import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, Star, Phone, Mail, ArrowLeft, Clock, Shield, Award, ArrowRight, Users, Microscope, Heart, Smile, Zap, Eye, Target, Lightbulb, Scissors, Waves } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";

const LaserDentistryPage = () => {
  const breadcrumbItems = [
  { label: 'Services', href: '/#services' },
  { label: 'Laser Dentistry' }];

  const faqItems = [
  {
    question: "What is laser dentistry and how does it work?",
    answer: "Laser dentistry uses focused light beams to perform various dental procedures. The laser energy precisely removes or reshapes tissue, sterilizes areas, and promotes healing. It's minimally invasive, often painless, and reduces the need for traditional dental tools like drills and scalpels."
  },
  {
    question: "Is laser dentistry painful?",
    answer: "Laser dentistry is typically much more comfortable than traditional methods. Most procedures require little to no anesthesia, as the laser seals nerve endings and blood vessels simultaneously. Patients often experience minimal to no discomfort during and after treatment."
  },
  {
    question: "What procedures can be performed with laser dentistry in Hyderabad?",
    answer: "At Gnathos Dental, we use lasers for cavity detection and treatment, gum disease therapy, soft tissue procedures, teeth whitening, root canal treatment, biopsy procedures, and frenectomy. Lasers can also be used for crown lengthening and gum contouring."
  },
  {
    question: "How long does laser dental treatment take?",
    answer: "Laser dental procedures are often faster than traditional methods. Simple procedures like cavity treatment or gum contouring can take 15-30 minutes, while more complex treatments may take 45-90 minutes. The precise nature of lasers often reduces treatment time significantly."
  },
  {
    question: "What are the benefits of laser dentistry over traditional methods?",
    answer: "Laser dentistry offers reduced pain, minimal bleeding, faster healing, reduced need for anesthesia, precise treatment, sterilization of treated areas, minimal swelling, and often no need for sutures. Recovery time is typically much shorter than traditional procedures."
  },
  {
    question: "Are there any risks or side effects with laser dentistry?",
    answer: "Laser dentistry is very safe when performed by trained professionals. Potential side effects are minimal and may include temporary sensitivity or mild discomfort. Our laser specialists at Gnathos Dental are highly trained in safe laser techniques and protocols."
  }];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Advanced Laser Dentistry in Hyderabad | Gnathos Dental - Painless Laser Treatments"
        description="Experience advanced laser dentistry in Hyderabad at Gnathos Dental. Painless, precise laser treatments for gums, cavities & more. Latest laser technology. Book consultation today!"
        keywords="laser dentistry Hyderabad, painless dental treatment, soft tissue laser, hard tissue laser, laser gum therapy, laser cavity treatment, advanced laser dentistry"
        canonical="https://gnathosdentalcare.com/laser-dentistry"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Gnathos Dental",
          "url": "https://www.gnathosdental.in/laser-dentistry",
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
                  ⚡ Advanced Laser Dentistry in Hyderabad
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  Experience The Future Of
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent"> Painless </span>
                  <br />Dental Treatment!
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Revolutionary laser technology for precise, comfortable, and faster dental treatments with minimal pain and quick healing.
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
               <img src="\GNA Dental\laser-technology.png"
                alt="Clear Aligners Treatment - Invisible Braces"
                className="w-full h-full object-cover rounded-2xl" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What is Laser Dentistry */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              What is Laser Dentistry?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Laser dentistry uses focused light beams to perform precise dental procedures with minimal pain and faster healing times.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Lightbulb className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Soft Tissue Lasers</h3>
                </div>
                <p className="text-gray-600 text-sm">Used for gum treatments, crown lengthening, and periodontal therapy with precision.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Zap className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Hard Tissue Lasers</h3>
                </div>
                <p className="text-gray-600 text-sm">Effective for cavity detection, tooth preparation, and enamel modifications.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Waves className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Diode Lasers</h3>
                </div>
                <p className="text-gray-600 text-sm">Ideal for bacterial reduction, pain relief, and accelerated healing processes.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Precise Treatment</h3>
                </div>
                <p className="text-gray-600 text-sm">Pinpoint accuracy targeting only affected areas while preserving healthy tissue.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Sterilization</h3>
                </div>
                <p className="text-gray-600 text-sm">Simultaneously sterilizes the treatment area, reducing infection risk.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Faster Healing</h3>
                </div>
                <p className="text-gray-600 text-sm">Promotes faster tissue regeneration and reduces recovery time significantly.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Laser Dentistry Procedures */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Laser Dentistry Procedures We Offer
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of laser dental treatments for optimal oral health and comfort.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Laser Gum Therapy</h3>
                  <p className="text-gray-600">Treatment of gum disease, periodontal pockets, and gingivitis with minimal discomfort.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Cavity Treatment</h3>
                  <p className="text-gray-600">Precise removal of decay and preparation of teeth for fillings without drilling noise.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Smile className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Gum Contouring</h3>
                  <p className="text-gray-600">Reshaping of gum line for improved smile aesthetics and crown lengthening procedures.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Scissors className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Frenectomy</h3>
                  <p className="text-gray-600">Painless removal of restrictive tissue (tongue-tie or lip-tie) for improved function.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Star className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Teeth Whitening</h3>
                  <p className="text-gray-600">Laser-activated whitening for faster, more effective results with lasting brightness.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Root Canal Therapy</h3>
                  <p className="text-gray-600">Enhanced root canal cleaning and disinfection with improved success rates.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Microscope className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Biopsy Procedures</h3>
                  <p className="text-gray-600">Precise tissue sampling for diagnosis with minimal trauma and faster healing.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Pain Management</h3>
                  <p className="text-gray-600">Laser therapy for TMJ disorders, muscle pain, and post-treatment discomfort relief.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Of Laser Dentistry */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Benefits Of Laser Dentistry
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of modern laser technology in dental care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Minimal Pain</h3>
                <p className="text-gray-600 text-sm">Reduced need for anesthesia and significantly less discomfort during treatment.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Faster Healing</h3>
                <p className="text-gray-600 text-sm">Accelerated tissue regeneration and shorter recovery periods.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Precise Treatment</h3>
                <p className="text-gray-600 text-sm">Pinpoint accuracy preserving maximum healthy tissue.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Reduced Bleeding</h3>
                <p className="text-gray-600 text-sm">Laser seals blood vessels during treatment, minimizing bleeding.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Sterilization</h3>
                <p className="text-gray-600 text-sm">Simultaneous disinfection reduces risk of post-treatment infection.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">No Vibration</h3>
                <p className="text-gray-600 text-sm">Silent operation without the noise and vibration of traditional drills.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Less Swelling</h3>
                <p className="text-gray-600 text-sm">Minimal post-operative swelling and inflammation.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">No Sutures Needed</h3>
                <p className="text-gray-600 text-sm">Most procedures don't require stitches, improving comfort.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Increased Comfort</h3>
                <p className="text-gray-600 text-sm">More comfortable experience during and after treatment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology and Equipment */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Advanced Laser Technology
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              State-of-the-art laser systems for comprehensive dental care and optimal patient comfort.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Diode Lasers</h3>
                <p className="text-gray-600 text-sm">For soft tissue procedures and bacterial reduction.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Waves className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Er:YAG Lasers</h3>
                <p className="text-gray-600 text-sm">For hard tissue ablation and cavity preparation.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">CO2 Lasers</h3>
                <p className="text-gray-600 text-sm">For precise soft tissue surgery and coagulation.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Safety Protocols</h3>
                <p className="text-gray-600 text-sm">Comprehensive safety measures and protective equipment.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Our Laser Dentistry */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Gnathos For Laser Dentistry?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Leading laser dental specialists in Hyderabad with advanced technology and expert care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">Expert Laser Specialists</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Highly trained dentists with extensive experience in laser dentistry techniques.</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mb-2">
                  <Zap className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">Latest Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>State-of-the-art laser systems for safe, effective, and comfortable treatments.</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mb-2">
                  <Heart className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">Patient Comfort</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Focus on minimizing discomfort and anxiety with gentle, painless procedures.</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mb-2">
                  <Shield className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">Safety Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Strict adherence to safety protocols and international sterilization standards.</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mb-2">
                  <Target className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">Comprehensive Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Full range of laser procedures for all your dental needs under one roof.</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">Personalized Treatment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Customized laser treatment plans based on individual needs and conditions.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        title="Laser Dentistry FAQs - Your Questions Answered"
        items={faqItems} />

      {/* Call to Action */}
      <CallToAction
        title="Ready to Experience Painless Laser Dentistry?"
        description="Discover the future of dental care with advanced laser treatments in Hyderabad. Minimal pain, faster healing, and superior results."
        primaryButtonText="Book Laser Consultation"
        secondaryButtonText="Call: +91 9955 708 885" />

    </div>);

};

export default LaserDentistryPage;