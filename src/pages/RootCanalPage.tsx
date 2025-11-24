import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star, Phone, Mail, ArrowLeft, Clock, Shield, Award, ArrowRight, Users, Microscope, Heart, Smile, Zap, Eye, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import CallToAction from '@/components/CallToAction';

const RootCanalPage = () => {
  const breadcrumbItems = [
  { label: 'Services', href: '/#services' },
  { label: 'Root Canal Treatment' }];


  const faqItems = [
  {
    question: 'Is root canal treatment painful?',
    answer: 'Modern root canal procedures are virtually painless. We use advanced local anesthesia techniques to ensure your comfort throughout the treatment. Most patients experience relief from pain after the procedure.'
  },
  {
    question: 'How long does a root canal take?',
    answer: 'Most root canal treatments can be completed in 1-2 visits, depending on the complexity of the case. Each appointment typically takes 60-90 minutes.'
  },
  {
    question: 'What is the success rate of root canal treatment?',
    answer: 'Root canal treatment has a very high success rate of over 95%. With proper care, a root canal treated tooth can last a lifetime.'
  },
  {
    question: 'What are the alternatives to root canal treatment?',
    answer: 'The main alternative is tooth extraction followed by replacement with a dental implant, bridge, or partial denture. However, saving your natural tooth with root canal treatment is usually the best option.'
  },
  {
    question: 'How much does root canal treatment cost in Hyderabad?',
    answer: 'The cost varies depending on the tooth location and complexity. We provide detailed cost estimates during consultation and offer flexible payment options.'
  },
  {
    question: 'What should I expect after root canal treatment?',
    answer: 'You may experience mild discomfort for a few days, which can be managed with over-the-counter pain medication. Most patients return to normal activities the next day.'
  }];


  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Best Root Canal Treatment in Hyderabad | Gnathos Dental - Save Your Tooth"
        description="Expert root canal treatment in Hyderabad at Gnathos Dental. Painless procedures, experienced endodontists, and advanced technology to save your natural teeth."
        keywords="root canal treatment Hyderabad, endodontist, painless root canal, tooth pain relief, dental infection treatment"
        canonical="https://gnathosdentalcare.com/root-canal"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Gnathos Dental",
          "url": "https://www.gnathosdental.in/root-canal",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1100"
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
                  🛠️ Best Root Canal Treatment in Hyderabad
                </Badge>
                <h1 className="text-4xl lg:text-4xl font-bold text-gray-800 leading-tight">
                  Pain-Free 

                  <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent"> Root Canal </span>
                  Treatment in Hyderabad
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  At Gnathos Dental Clinic, we specialise in gentle and advanced root canal procedures that save your natural tooth while eliminating pain and infection. Our expert endodontists use cutting-edge rotary technology, digital imaging, and precise techniques to ensure a comfortable, quick, and highly successful treatment experience. If you’re suffering from severe toothache or sensitivity, trust us for reliable and pain-free root canal treatment in Hyderabad, designed to restore your oral health with care and precision.
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
                <img src="\GNA Dental\Save-Your-Natural-Tooth.png"
                alt="Advanced Root Canal Treatment - Expert Care"
                className="w-full h-full object-cover rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs Root Canal */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Who Needs Root Canal Treatment?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Root canal treatment is recommended when the inner pulp of your tooth becomes infected or severely damaged.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Severe Tooth Pain</h3>
                </div>
                <p className="text-gray-600 text-sm">Intense, throbbing pain when chewing or applying pressure to the tooth.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Prolonged Sensitivity</h3>
                </div>
                <p className="text-gray-600 text-sm">Lingering pain to hot or cold temperatures that doesn't go away.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Deep Decay</h3>
                </div>
                <p className="text-gray-600 text-sm">Extensive decay that has reached the tooth's inner pulp.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Dental Trauma</h3>
                </div>
                <p className="text-gray-600 text-sm">Injury to the tooth that has damaged the pulp, even without visible cracks.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Gum Swelling</h3>
                </div>
                <p className="text-gray-600 text-sm">Swelling and tenderness in nearby gums, sometimes with pus discharge.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Tooth Discoloration</h3>
                </div>
                <p className="text-gray-600 text-sm">Darkening of the tooth, indicating pulp death or damage.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* When You Need Treatment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Signs You Need Root Canal Treatment
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Look for these warning signs that suggest you may need endodontic treatment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Persistent Pain</h3>
                  <p className="text-gray-600">Constant, severe tooth pain that doesn't respond to pain medication.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Temperature Sensitivity</h3>
                  <p className="text-gray-600">Extreme sensitivity to hot or cold that lingers long after exposure.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Swelling</h3>
                  <p className="text-gray-600">Swelling in the face, neck, or lymph nodes near the affected tooth.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Night Pain</h3>
                  <p className="text-gray-600">Severe pain that wakes you up at night or gets worse when lying down.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Smile className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Pressure Pain</h3>
                  <p className="text-gray-600">Pain when chewing, biting down, or touching the tooth.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Abscess Formation</h3>
                  <p className="text-gray-600">Pus-filled pocket forming at the root tip, causing severe infection.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Benefits of Root Canal */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Benefits Of Root Canal Treatment
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover why root canal treatment is the preferred option for saving infected teeth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Save Natural Tooth</h3>
                <p className="text-gray-600 text-sm">Preserve your natural tooth instead of extraction and replacement.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Pain Relief</h3>
                <p className="text-gray-600 text-sm">Eliminate severe tooth pain and infection immediately.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Cost-Effective</h3>
                <p className="text-gray-600 text-sm">More affordable than tooth extraction and replacement options.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Normal Function</h3>
                <p className="text-gray-600 text-sm">Maintain normal chewing and biting efficiency.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Prevent Spread</h3>
                <p className="text-gray-600 text-sm">Stop infection from spreading to other teeth or jawbone.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Long-lasting Results</h3>
                <p className="text-gray-600 text-sm">Root canal treated teeth can last a lifetime with proper care.</p>
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
              Our Root Canal Treatment Process
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ensure successful treatment and optimal healing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    1
                  </div>
                  <h3 className="font-semibold text-gray-800">Diagnosis & X-rays</h3>
                </div>
                <p className="text-gray-600 text-sm">Comprehensive examination and digital X-rays to assess the condition.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    2
                  </div>
                  <h3 className="font-semibold text-gray-800">Local Anesthesia</h3>
                </div>
                <p className="text-gray-600 text-sm">Complete numbing of the area to ensure a painless procedure.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    3
                  </div>
                  <h3 className="font-semibold text-gray-800">Pulp Removal</h3>
                </div>
                <p className="text-gray-600 text-sm">Careful removal of infected or damaged pulp tissue from root canals.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    4
                  </div>
                  <h3 className="font-semibold text-gray-800">Canal Cleaning</h3>
                </div>
                <p className="text-gray-600 text-sm">Thorough cleaning and shaping of root canals with advanced instruments.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    5
                  </div>
                  <h3 className="font-semibold text-gray-800">Filling & Sealing</h3>
                </div>
                <p className="text-gray-600 text-sm">Filling the cleaned canals with biocompatible material and sealing.</p>
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
                <p className="text-gray-600 text-sm">Final restoration with a crown to protect and strengthen the tooth.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        title="Root Canal Treatment FAQs - Your Questions Answered"
        items={faqItems} />


      {/* Call to Action */}
      <CallToAction
        title="Ready for Root Canal Treatment?"
        description="Get expert endodontic treatment from our experienced specialists. Save your natural tooth with modern, painless procedures."
        primaryButtonText="Book Root Canal Consultation"
        secondaryButtonText="Call: +91 9955 708 885" />

    </div>);

};

export default RootCanalPage;