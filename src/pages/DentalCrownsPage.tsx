import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star, Phone, Mail, ArrowLeft, Clock, Shield, Award, ArrowRight, Users, Microscope, Heart, Smile, Crown, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import CallToAction from '@/components/CallToAction';

const DentalCrownsPage = () => {
  const breadcrumbItems = [
  { label: 'Services', href: '/#services' },
  { label: 'Dental Crowns & Bridges' }];


  const faqItems = [
  {
    question: 'What is the cost of Dental Crown and Bridge Treatment?',
    answer: 'The cost of dental crown and bridge treatment varies depending on the type of crown/bridge, complexity of the case, and individual requirements. Our team will provide a detailed cost estimate during your consultation.'
  },
  {
    question: 'How long do dental crowns and bridges last?',
    answer: 'With proper care and maintenance, dental crowns and bridges can last 10-15 years or even longer. Regular dental check-ups and good oral hygiene are essential for their longevity.'
  },
  {
    question: 'Is the dental crown procedure painful?',
    answer: 'The procedure is performed under local anesthesia to ensure your comfort. Most patients experience minimal discomfort during and after the treatment.'
  },
  {
    question: 'What are the different types of dental crowns available?',
    answer: 'We offer ceramic crowns for natural appearance and metal crowns for durability. Our dentist will recommend the best option based on your specific needs and the location of the tooth.'
  }];


  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Best Dental Crowns & Bridges in Hyderabad | Gnathos Dental - Restore Your Smile"
        description="Restore your smile with high-quality dental crowns and bridges in Hyderabad. Expert prosthodontists at Gnathos Dental offer ceramic and metal crowns with advanced technology."
        keywords="dental crowns Hyderabad, dental bridges, tooth restoration, ceramic crowns, metal crowns, prosthodontist"
        canonical="https://gnathosdentalcare.com/dental-crowns"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Gnathos Dental",
          "url": "https://www.gnathosdental.in/root-canal",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1100" }
        }} />


      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                  👑 Best Dental Crowns & Bridges in Hyderabad
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  Restore Your Smile With
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent"> Dental Crowns </span>
                  & Bridges
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Say goodbye to damaged or missing teeth with our premium dental crowns and bridges. Restore function, aesthetics, and confidence with lasting results.
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
                <img src="\GNA Dental\Restore-Your-Smile-With-Dental-Crowns.png"
                alt="Advanced Dental Crown Treatment - Expert Care"
                className="w-full h-full object-cover rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs Dental Crowns */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Who Needs Dental Crowns & Bridges?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Dental crowns and bridges are the ideal solution for various dental conditions and situations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Extensive Tooth Decay</h3>
                </div>
                <p className="text-gray-600 text-sm">Protect and restore severely decayed teeth with custom crowns.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Fractured or Broken Teeth</h3>
                </div>
                <p className="text-gray-600 text-sm">Restore strength and appearance of damaged teeth.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">After Root Canal</h3>
                </div>
                <p className="text-gray-600 text-sm">Protect and strengthen root canal treated teeth.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Missing Teeth</h3>
                </div>
                <p className="text-gray-600 text-sm">Replace missing teeth with natural-looking bridges.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Worn-out Teeth</h3>
                </div>
                <p className="text-gray-600 text-sm">Restore severely worn or damaged teeth to full function.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Cosmetic Enhancement</h3>
                </div>
                <p className="text-gray-600 text-sm">Improve smile aesthetics with beautiful, natural-looking crowns.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Types of Crowns */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Types Of Dental Crowns & Bridges
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer various types of crowns and bridges to suit different needs and preferences.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Crown className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Ceramic Crowns</h3>
                <p className="text-gray-600">Known for their natural appearance and biocompatibility. Metal-free option ideal for front teeth and patients with metal allergies.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Shield className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Metal Crowns</h3>
                <p className="text-gray-600">Superior strength and durability, perfect for back teeth that endure heavy chewing forces. Long-lasting solution.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Smile className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Traditional Bridges</h3>
                <p className="text-gray-600">Replace missing teeth by anchoring to adjacent healthy teeth, providing stable and natural-looking results.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Target className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Implant-Supported Bridges</h3>
                <p className="text-gray-600">The gold standard for replacing multiple missing teeth without affecting adjacent healthy teeth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Benefits Of Dental Crowns & Bridges
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover why dental crowns and bridges are considered excellent solutions for tooth restoration.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Restore Functionality</h3>
                <p className="text-gray-600 text-sm">Crowns and bridges restore full chewing function and clear speech.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Natural Appearance</h3>
                <p className="text-gray-600 text-sm">Look, feel, and function like your natural teeth.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Long-lasting Solution</h3>
                <p className="text-gray-600 text-sm">Durable restorations that can last 10-15 years with proper care.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Protect Weak Teeth</h3>
                <p className="text-gray-600 text-sm">Strengthen and protect damaged or root canal treated teeth.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Improved Confidence</h3>
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
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our Crown & Bridge Treatment Process
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ensure successful crown and bridge placement and optimal healing.
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
                <p className="text-gray-600 text-sm">Comprehensive examination and treatment planning discussion.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    2
                  </div>
                  <h3 className="font-semibold text-gray-800">Tooth Preparation</h3>
                </div>
                <p className="text-gray-600 text-sm">Careful tooth preparation and shaping for optimal crown fit.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    3
                  </div>
                  <h3 className="font-semibold text-gray-800">Impression Taking</h3>
                </div>
                <p className="text-gray-600 text-sm">Precise impressions for custom crown/bridge fabrication.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    4
                  </div>
                  <h3 className="font-semibold text-gray-800">Temporary Restoration</h3>
                </div>
                <p className="text-gray-600 text-sm">Temporary crown/bridge placement for protection and comfort.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    5
                  </div>
                  <h3 className="font-semibold text-gray-800">Final Placement</h3>
                </div>
                <p className="text-gray-600 text-sm">Permanent crown/bridge placement and bite adjustment.</p>
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
                <p className="text-gray-600 text-sm">Comprehensive follow-up and maintenance instructions.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        title="Dental Crown & Bridge FAQs - Your Questions Answered"
        items={faqItems} />


      {/* Call to Action */}
      <CallToAction
        title="Ready to Restore Your Smile?"
        description="Get expert dental crown and bridge treatment from our experienced prosthodontists. Schedule your consultation today!"
        primaryButtonText="Book Crown Consultation"
        secondaryButtonText="Call: +91 9955 708 885" />

    </div>);

};

export default DentalCrownsPage;