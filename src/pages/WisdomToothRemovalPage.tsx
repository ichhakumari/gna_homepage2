import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star, Phone, Mail, ArrowLeft, Clock, Shield, Award, ArrowRight, Users, Microscope, Heart, Smile, AlertCircle, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import CallToAction from '@/components/CallToAction';

const WisdomToothRemovalPage = () => {
  const breadcrumbItems = [
  { label: 'Services', href: '/#services' },
  { label: 'Wisdom Tooth Removal' }];


  const faqItems = [
  {
    question: 'Is wisdom tooth removal a painful procedure?',
    answer: 'It is not painful at all since we use local or general anaesthesia based on the difficulty of extraction.'
  },
  {
    question: 'What if I have one or more impacted wisdom teeth?',
    answer: 'Our experienced maxillofacial surgeons specialize in complex impacted wisdom tooth extractions using advanced techniques to ensure safe removal.'
  },
  {
    question: 'Is it necessary to remove wisdom teeth?',
    answer: 'Not always, but removal is recommended when they cause pain, crowding, decay, or other dental issues. Our team will assess your specific case.'
  },
  {
    question: 'What is the right age to get your impacted wisdom tooth extracted?',
    answer: 'The ideal age is typically late teens to early twenties when the roots are not fully formed, making extraction easier and recovery faster.'
  },
  {
    question: 'Why do wisdom teeth happen?',
    answer: 'Wisdom teeth are evolutionary remnants from when our ancestors needed extra molars to chew coarse foods. Modern diets and smaller jaws make them largely unnecessary.'
  },
  {
    question: 'Will I be able to eat after wisdom teeth extraction?',
    answer: 'Yes, you\'ll start with soft foods and gradually return to normal diet within a few days to a week, following our post-operative care instructions.'
  }];


  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Best Wisdom Tooth Removal in Hyderabad | Gnathos Dental - Safe Extraction"
        description="Expert wisdom tooth removal in Hyderabad at Gnathos Dental. Painless extractions, experienced surgeons, and comprehensive post-operative care."
        keywords="wisdom tooth removal Hyderabad, tooth extraction, impacted wisdom teeth, oral surgery, dental extraction"
        canonical="https://gnathosdentalcare.com/wisdom-tooth-removal"
        schema={{
          '@type': 'MedicalProcedure',
          name: 'Wisdom Tooth Removal',
          description: 'Expert wisdom tooth extraction procedures in Hyderabad',
          howPerformed: 'Safe and painless wisdom tooth extraction by experienced oral surgeons'
        }} />


      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                  🦷 Best Wisdom Tooth Removal in Hyderabad
                </Badge>
                <h1 className="text-4xl lg:text-4xl font-bold text-gray-800 leading-tight">
                  Safe & Painless 
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent"> Wisdom Tooth </span>
                  Removal in Hyderabad

                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                 Get expert care for impacted or painful wisdom teeth with Gnathos Dental Clinic’s advanced, minimally invasive extraction procedures. Our experienced oral surgeons ensure a smooth, comfortable, and quick recovery experience using modern imaging, gentle techniques, and strict sterilization protocols. If you’re dealing with jaw pain, swelling, or repeated infections, consult our specialists for safe and reliable wisdom tooth removal in Hyderabad — where precise diagnosis meets compassionate care.
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
                <img src="\GNA Dental\Safe & Painless-Wisdom-Tooth-Removal.png"
                alt="Expert Wisdom Tooth Removal - Safe Extraction"
                className="w-full h-full object-cover rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Are Wisdom Teeth */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              What Are Wisdom Teeth?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Understanding wisdom teeth and why they often need to be removed.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Third Set of Molars</h3>
                </div>
                <p className="text-gray-600 text-sm">Wisdom teeth are the last molars to erupt, typically appearing in late teens or early twenties.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Evolutionary Remnants</h3>
                </div>
                <p className="text-gray-600 text-sm">Once useful for our ancestors who ate coarse foods, they're now largely unnecessary.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-gray-800">Often Problematic</h3>
                </div>
                <p className="text-gray-600 text-sm">Modern jaws are typically too small to accommodate wisdom teeth properly.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-orange-500" />
                  <h3 className="font-semibold text-gray-800">Impaction Issues</h3>
                </div>
                <p className="text-gray-600 text-sm">When wisdom teeth don't have enough space, they become impacted and cause problems.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-orange-500" />
                  <h3 className="font-semibold text-gray-800">Pain & Infection</h3>
                </div>
                <p className="text-gray-600 text-sm">Impacted wisdom teeth can cause severe pain, swelling, and infections.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-orange-500" />
                  <h3 className="font-semibold text-gray-800">Damage to Other Teeth</h3>
                </div>
                <p className="text-gray-600 text-sm">Can push against neighboring teeth, causing crowding and damage.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* When to Remove */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              When Should You Remove Wisdom Teeth?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Look for these signs that indicate you may need wisdom tooth removal.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <AlertCircle className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Persistent Pain</h3>
                  <p className="text-gray-600">Nagging pain at the back of your mouth that doesn't go away.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Swelling & Inflammation</h3>
                  <p className="text-gray-600">Swollen, tender, or bleeding gums around the wisdom tooth area.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Difficulty Cleaning</h3>
                  <p className="text-gray-600">Food and debris getting trapped, leading to decay or gum disease.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Smile className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Crowding</h3>
                  <p className="text-gray-600">Wisdom teeth pushing other teeth out of alignment.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Cyst Formation</h3>
                  <p className="text-gray-600">Cysts developing around impacted wisdom teeth, damaging bone.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Preventive Removal</h3>
                  <p className="text-gray-600">Removing asymptomatic impacted teeth to prevent future problems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Treatment Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our Wisdom Tooth Removal Process
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ensure safe extraction and optimal healing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    1
                  </div>
                  <h3 className="font-semibold text-gray-800">Initial Assessment</h3>
                </div>
                <p className="text-gray-600 text-sm">Comprehensive consultation with health assessment and X-rays.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    2
                  </div>
                  <h3 className="font-semibold text-gray-800">Anesthesia Selection</h3>
                </div>
                <p className="text-gray-600 text-sm">Choose the right anesthesia option based on complexity and patient comfort.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    3
                  </div>
                  <h3 className="font-semibold text-gray-800">Safe Extraction</h3>
                </div>
                <p className="text-gray-600 text-sm">Expert extraction using advanced techniques and equipment.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    4
                  </div>
                  <h3 className="font-semibold text-gray-800">Post-Op Care</h3>
                </div>
                <p className="text-gray-600 text-sm">Comprehensive post-operative instructions for optimal healing.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    5
                  </div>
                  <h3 className="font-semibold text-gray-800">Recovery Monitoring</h3>
                </div>
                <p className="text-gray-600 text-sm">Regular follow-up to ensure proper healing and recovery.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    6
                  </div>
                  <h3 className="font-semibold text-gray-800">Complete Recovery</h3>
                </div>
                <p className="text-gray-600 text-sm">Return to normal activities with restored oral health.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        title="Wisdom Tooth Removal FAQs - Your Questions Answered"
        items={faqItems} />


      {/* Call to Action */}
      <CallToAction
        title="Need Wisdom Tooth Removal?"
        description="Trust our experienced oral surgeons for safe, painless wisdom tooth extractions with comprehensive care and fast recovery."
        primaryButtonText="Book Extraction Consultation"
        secondaryButtonText="Call: +91 9955 708 885" />

    </div>);

};

export default WisdomToothRemovalPage;