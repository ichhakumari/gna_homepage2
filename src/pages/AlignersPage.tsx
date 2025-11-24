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

const AlignersPage = () => {
  const breadcrumbItems = [
  { label: 'Services', href: '/#services' },
  { label: 'Clear Aligners' }];

  const faqItems = [
  {
    question: "What are clear aligners and how do they work?",
    answer: "Clear aligners are transparent, removable orthodontic devices that gradually straighten teeth. Made from medical-grade plastic, they apply gentle pressure to move teeth into their desired positions. Each set of aligners is custom-made and worn for about 20-22 hours daily, with new aligners every 1-2 weeks."
  },
  {
    question: "How long does clear aligner treatment take in Hyderabad?",
    answer: "Clear aligner treatment typically takes 6-18 months depending on the complexity of your case. Simple misalignments may be corrected in as little as 6 months, while more complex cases may require up to 24 months. Our orthodontists in Hyderabad provide personalized treatment timelines during consultation."
  },
  {
    question: "Are clear aligners better than traditional braces?",
    answer: "Clear aligners offer several advantages including being nearly invisible, removable for eating and cleaning, more comfortable with no brackets or wires, and fewer office visits. However, traditional braces may be better for complex cases. Our specialists will recommend the best option for your specific needs."
  },
  {
    question: "What is the cost of clear aligners treatment in Hyderabad?",
    answer: "The cost of clear aligners varies based on treatment complexity and duration. At Gnathos Dental, we offer competitive pricing for premium aligner systems. We provide detailed cost estimates during consultation and offer flexible payment plans to make treatment affordable."
  },
  {
    question: "Can I eat and drink with clear aligners?",
    answer: "You should remove clear aligners when eating or drinking anything other than plain water. This prevents staining and damage to the aligners. One of the major advantages is that you can eat all your favorite foods without restrictions, unlike traditional braces."
  },
  {
    question: "How do I clean and maintain my clear aligners?",
    answer: "Clean your aligners daily with lukewarm water and a soft toothbrush. Use special cleaning crystals or denture cleaners for deep cleaning. Avoid hot water, colored soaps, or harsh chemicals. Always brush your teeth before putting aligners back in to maintain good oral hygiene."
  }];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Best Clear Aligners in Hyderabad | Gnathos Dental - Invisible Braces"
        description="Get the best clear aligners in Hyderabad at Gnathos Dental. Invisible braces for perfect teeth alignment. Expert orthodontists, latest technology. Book consultation today!"
        keywords="clear aligners Hyderabad, invisible braces, teeth alignment, orthodontist Hyderabad, clear aligner cost, invisible orthodontics, teeth straightening"
        canonical="https://gnathosdentalcare.com/aligners"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Gnathos Dental",
          "url": "https://www.gnathosdental.in/aligners",
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
                  ✨ Best Clear Aligners in Hyderabad
                </Badge>
                <h1 className="text-4xl lg:text-4xl font-bold text-gray-800 leading-tight">
                  Transform Your Smile
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent"> Invisibly </span>
                  <br />With Clear Aligners!
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                 Advanced Clear Aligners in Hyderabad for a Confident, Perfect Smile
Gnathos Dental Clinic offers cutting-edge clear aligner solutions that gently and precisely move your teeth into perfect alignment. With customised treatment plans, digital scanning, and continuous expert supervision, we ensure faster results and superior comfort. Choose us for modern, hassle-free clear aligners in Hyderabad and start your journey toward a beautifully aligned smile—without braces
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
                <img src="\GNA Dental\Aligners.png"
                alt="Clear Aligners Treatment - Invisible Braces"
                className="w-full h-full object-cover rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs Clear Aligners */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Who Needs Clear Aligners?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Clear aligners are perfect for various orthodontic conditions and lifestyle preferences.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Crooked Teeth</h3>
                </div>
                <p className="text-gray-600 text-sm">Straighten mildly to moderately crooked or misaligned teeth.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Gaps Between Teeth</h3>
                </div>
                <p className="text-gray-600 text-sm">Close unwanted spaces and gaps between your teeth.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Overbite/Underbite</h3>
                </div>
                <p className="text-gray-600 text-sm">Correct mild to moderate bite alignment issues.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Crowded Teeth</h3>
                </div>
                <p className="text-gray-600 text-sm">Create space and align overcrowded teeth effectively.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Open Bite</h3>
                </div>
                <p className="text-gray-600 text-sm">Correct open bite where front teeth don't meet properly.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Aesthetic Concerns</h3>
                </div>
                <p className="text-gray-600 text-sm">Improve smile aesthetics without visible metal braces.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clear Aligners vs Traditional Braces */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Clear Aligners vs Traditional Braces
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Compare the advantages of clear aligners over traditional metal braces.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Eye className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Nearly Invisible</h3>
                  <p className="text-gray-600">Clear aligners are virtually invisible, allowing you to smile confidently during treatment.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Removable Design</h3>
                  <p className="text-gray-600">Remove for eating, drinking, brushing, and special occasions - no dietary restrictions.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Greater Comfort</h3>
                  <p className="text-gray-600">No metal brackets or wires to cause irritation or mouth sores.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Fewer Office Visits</h3>
                  <p className="text-gray-600">Check-ups every 6-8 weeks compared to monthly adjustments with braces.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Smile className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Better Oral Hygiene</h3>
                  <p className="text-gray-600">Easy to maintain oral hygiene by removing aligners for brushing and flossing.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Predictable Results</h3>
                  <p className="text-gray-600">3D treatment planning shows expected results before starting treatment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Of Clear Aligners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Benefits Of Clear Aligners
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover why clear aligners are the preferred choice for modern orthodontic treatment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Discreet Treatment</h3>
                <p className="text-gray-600 text-sm">Transform your smile without anyone noticing you're wearing aligners.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">No Food Restrictions</h3>
                <p className="text-gray-600 text-sm">Enjoy all your favorite foods by simply removing the aligners.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Improved Comfort</h3>
                <p className="text-gray-600 text-sm">Smooth plastic aligners won't irritate your cheeks and gums.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Better Oral Health</h3>
                <p className="text-gray-600 text-sm">Remove aligners for thorough brushing and flossing.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Faster Results</h3>
                <p className="text-gray-600 text-sm">Many cases completed in 6-18 months versus 2-3 years with braces.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Enhanced Confidence</h3>
                <p className="text-gray-600 text-sm">Smile confidently throughout your treatment journey.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Professional Lifestyle</h3>
                <p className="text-gray-600 text-sm">Perfect for professionals who need to maintain their image.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Gradual Movement</h3>
                <p className="text-gray-600 text-sm">Gentle, controlled tooth movement reduces discomfort.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Digital Precision</h3>
                <p className="text-gray-600 text-sm">Computer-designed treatment plans for optimal results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology and Treatment Process */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Advanced Technology & Process
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              State-of-the-art technology and proven processes for successful aligner treatment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Microscope className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">3D Digital Scanning</h3>
                <p className="text-gray-600 text-sm">Precise digital impressions without messy traditional molds.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Virtual Treatment Plan</h3>
                <p className="text-gray-600 text-sm">See your future smile before treatment even begins.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Custom Manufacturing</h3>
                <p className="text-gray-600 text-sm">Each aligner custom-made for your unique tooth movement.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Progress Monitoring</h3>
                <p className="text-gray-600 text-sm">Regular check-ups to ensure optimal treatment progress.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clear Aligner Treatment Process */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Clear Aligner Treatment Process
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A simple 5-step process to transform your smile with clear aligners.
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
                <p className="text-gray-600 text-sm">Comprehensive examination and treatment suitability assessment.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    2
                  </div>
                  <h3 className="font-semibold text-gray-800">Digital Impressions</h3>
                </div>
                <p className="text-gray-600 text-sm">3D scanning to create precise digital models of your teeth.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    3
                  </div>
                  <h3 className="font-semibold text-gray-800">Treatment Planning</h3>
                </div>
                <p className="text-gray-600 text-sm">Custom treatment plan with virtual preview of your new smile.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    4
                  </div>
                  <h3 className="font-semibold text-gray-800">Aligner Delivery</h3>
                </div>
                <p className="text-gray-600 text-sm">Receive your custom aligners with detailed wearing instructions.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    5
                  </div>
                  <h3 className="font-semibold text-gray-800">Progress Monitoring</h3>
                </div>
                <p className="text-gray-600 text-sm">Regular check-ups to monitor progress and receive new aligners.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        title="Clear Aligners FAQs - Your Questions Answered"
        items={faqItems} />

      {/* Call to Action */}
      <CallToAction
        title="Ready for Your Clear Aligner Consultation?"
        description="Get the best clear aligners in Hyderabad for a perfect smile. Expert orthodontists, advanced technology, and affordable treatment plans."
        primaryButtonText="Book Free Consultation"
        secondaryButtonText="Call: +91 9955 708 885" />


    </div>);

};

export default AlignersPage;