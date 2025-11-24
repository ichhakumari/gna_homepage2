import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Scissors,
  Clock,
  Shield,
  Heart,
  CheckCircle,
  Users,
  AlertCircle,
  Award,
  Phone,
  Calendar } from
'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import CallToAction from '@/components/CallToAction';

export default function OralSurgeriesPage() {
  const breadcrumbItems = [
  { label: 'Services', href: '/services' },
  { label: 'Oral Surgeries', href: '/services/oral-surgeries' }];


  const oralSurgeryFAQs = [
  {
    question: "What types of oral surgeries do you perform?",
    answer: "We perform various oral surgeries including wisdom tooth extraction, tooth extractions, bone grafting, sinus lifts, corrective jaw surgery, treatment of oral pathology, and pre-prosthetic surgery to prepare for dental implants."
  },
  {
    question: "Is oral surgery painful?",
    answer: "Modern oral surgery techniques and anesthesia ensure minimal discomfort during procedures. We use local anesthesia, sedation options, and provide comprehensive pain management instructions for post-operative care to ensure your comfort throughout the process."
  },
  {
    question: "How long is the recovery time after oral surgery?",
    answer: "Recovery time varies depending on the type and complexity of the surgery. Simple extractions may require 3-7 days, while complex procedures like jaw surgery may take several weeks. We provide detailed post-operative care instructions to promote optimal healing."
  },
  {
    question: "What should I expect during oral surgery?",
    answer: "Before surgery, we'll review your medical history and explain the procedure. During surgery, you'll receive appropriate anesthesia for comfort. Post-surgery, we'll provide detailed care instructions and schedule follow-up appointments to monitor healing."
  },
  {
    question: "Are there any risks associated with oral surgery?",
    answer: "While oral surgery is generally safe, like any surgical procedure, there are minimal risks such as bleeding, infection, or temporary numbness. We discuss all potential risks and benefits with you beforehand and take every precaution to minimize complications."
  },
  {
    question: "How do I prepare for oral surgery?",
    answer: "Preparation includes following pre-operative instructions, arranging transportation, wearing comfortable clothing, and taking prescribed medications as directed. We'll provide you with a comprehensive pre-surgery checklist during your consultation."
  }];


  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
          <SEO
              title="Expert Oral Surgeries in Hyderabad | Gnathos Dental Care"
              description="Professional oral surgery services including wisdom tooth extraction, bone grafting, and corrective jaw surgery. Expert oral surgeons with advanced techniques for optimal results."
              keywords="oral surgery, wisdom tooth extraction, bone grafting, jaw surgery, tooth extraction, oral pathology, Hyderabad, Gnathos"
              canonical="https://www.gnathosdental.in/oral-surgeries"
              schema={{
                  "@context": "https://schema.org",
                  "@type": "LocalBusiness",
                  name: "Gnathos Dental",
                  url: "https://www.gnathosdental.in/oral-surgeries",
                  aggregateRating: {
                      "@type": "AggregateRating",
                      ratingValue: "4.9",
                      reviewCount: "850",
                  },
              }}
          />

          <div className="container mx-auto px-4 py-24 mt-8">
              <Breadcrumbs items={breadcrumbItems} />

              {/* Hero Section */}
              <div className="mb-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div>
                          <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                              Advanced Oral Surgery
                          </Badge>
                          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                              Expert Oral Surgery in 
                              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                                  {" "}
                                  Hyderabad
                              </span>
                               for Safe & Comfortable Care
                          </h1>
                          <p className="text-xl text-gray-600 mb-8">
                              Gnathos Dental Clinic offers specialised oral surgery services performed by experienced surgeons using advanced technology and gentle techniques. Whether you need tooth extractions, cyst removal, jaw correction, or surgical treatments for impacted teeth, our team ensures precision, safety, and a smooth recovery. Trust us for expert oral surgery in Hyderabad, where compassionate care meets world-class clinical expertise to restore your oral health with confidence.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4">
                              <Button
                                  asChild
                                  size="lg"
                                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                                  <Link to="/contact">
                                      <Calendar className="w-5 h-5 mr-2" />
                                      Book Consultation
                                  </Link>
                              </Button>
                              <Button variant="outline" size="lg" asChild>
                                  <Link to="tel:+919876543210">
                                      <Phone className="w-5 h-5 mr-2" />
                                      Call Now
                                  </Link>
                              </Button>
                          </div>
                      </div>
                      <div className="relative">
                          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-100 to-teal-100">
                              <img
                                  src="\GNA Dental\Oral- Surgery.png"
                                  alt="Modern Oral Surgery Procedure"
                                  className="w-full h-full object-cover"
                              />
                          </div>
                          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-lg">
                              <div className="flex items-center gap-3">
                                  <div className="bg-emerald-100 p-3 rounded-full">
                                      <Scissors className="w-6 h-6 text-emerald-600" />
                                  </div>
                                  <div>
                                      <p className="font-semibold text-gray-900">
                                          Advanced Techniques
                                      </p>
                                      <p className="text-sm text-gray-600">
                                          Minimally Invasive
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Who Needs Oral Surgery Section */}
              <section className="mb-16">
                  <div className="text-center mb-12">
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                          Who Needs Oral Surgery?
                      </h2>
                      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                          Oral surgery addresses various dental conditions that
                          cannot be treated with standard dental procedures.
                          Here's when surgical intervention becomes necessary.
                      </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                          <CardHeader>
                              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                  <Users className="w-6 h-6 text-emerald-600" />
                              </div>
                              <CardTitle>Impacted Teeth</CardTitle>
                          </CardHeader>
                          <CardContent>
                              <p className="text-gray-600">
                                  Wisdom teeth or other teeth that don't have
                                  enough space to emerge properly, causing pain
                                  and potential complications.
                              </p>
                          </CardContent>
                      </Card>

                      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                          <CardHeader>
                              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                  <Shield className="w-6 h-6 text-emerald-600" />
                              </div>
                              <CardTitle>Severe Tooth Damage</CardTitle>
                          </CardHeader>
                          <CardContent>
                              <p className="text-gray-600">
                                  Teeth that are severely damaged by trauma or
                                  decay and cannot be saved with root canal
                                  treatment.
                              </p>
                          </CardContent>
                      </Card>

                      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                          <CardHeader>
                              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                  <Heart className="w-6 h-6 text-emerald-600" />
                              </div>
                              <CardTitle>Jaw Problems</CardTitle>
                          </CardHeader>
                          <CardContent>
                              <p className="text-gray-600">
                                  TMJ disorders, jaw misalignment, or other
                                  structural issues affecting chewing, speaking,
                                  or breathing.
                              </p>
                          </CardContent>
                      </Card>

                      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                          <CardHeader>
                              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                  <AlertCircle className="w-6 h-6 text-emerald-600" />
                              </div>
                              <CardTitle>Oral Pathology</CardTitle>
                          </CardHeader>
                          <CardContent>
                              <p className="text-gray-600">
                                  Cysts, tumors, or other abnormal growths in
                                  the mouth that require surgical removal and
                                  evaluation.
                              </p>
                          </CardContent>
                      </Card>

                      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                          <CardHeader>
                              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                  <Award className="w-6 h-6 text-emerald-600" />
                              </div>
                              <CardTitle>Implant Preparation</CardTitle>
                          </CardHeader>
                          <CardContent>
                              <p className="text-gray-600">
                                  Bone grafting or sinus lifts needed to provide
                                  adequate bone structure for successful dental
                                  implant placement.
                              </p>
                          </CardContent>
                      </Card>

                      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                          <CardHeader>
                              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                              </div>
                              <CardTitle>Gum Disease</CardTitle>
                          </CardHeader>
                          <CardContent>
                              <p className="text-gray-600">
                                  Advanced periodontal disease requiring
                                  surgical intervention to restore gum and bone
                                  health.
                              </p>
                          </CardContent>
                      </Card>
                  </div>
              </section>

              {/* Signs You Need Treatment */}
              <section className="mb-16">
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 lg:p-12">
                      <div className="text-center mb-8">
                          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                              Signs You May Need Oral Surgery
                          </h2>
                          <p className="text-lg text-gray-600">
                              Don't ignore these warning signs that may indicate
                              the need for surgical intervention
                          </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-4">
                              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                                  <div className="bg-red-100 p-2 rounded-lg shrink-0">
                                      <AlertCircle className="w-5 h-5 text-red-600" />
                                  </div>
                                  <div>
                                      <h3 className="font-semibold text-gray-900">
                                          Persistent Pain
                                      </h3>
                                      <p className="text-gray-600">
                                          Chronic pain in jaw, teeth, or
                                          surrounding areas that doesn't improve
                                          with medication
                                      </p>
                                  </div>
                              </div>

                              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                                  <div className="bg-red-100 p-2 rounded-lg shrink-0">
                                      <AlertCircle className="w-5 h-5 text-red-600" />
                                  </div>
                                  <div>
                                      <h3 className="font-semibold text-gray-900">
                                          Swelling
                                      </h3>
                                      <p className="text-gray-600">
                                          Persistent swelling in face, jaw, or
                                          gums that may indicate infection or
                                          impaction
                                      </p>
                                  </div>
                              </div>

                              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                                  <div className="bg-red-100 p-2 rounded-lg shrink-0">
                                      <AlertCircle className="w-5 h-5 text-red-600" />
                                  </div>
                                  <div>
                                      <h3 className="font-semibold text-gray-900">
                                          Difficulty Eating
                                      </h3>
                                      <p className="text-gray-600">
                                          Problems chewing, biting, or opening
                                          your mouth due to jaw or tooth issues
                                      </p>
                                  </div>
                              </div>
                          </div>

                          <div className="space-y-4">
                              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                                  <div className="bg-red-100 p-2 rounded-lg shrink-0">
                                      <AlertCircle className="w-5 h-5 text-red-600" />
                                  </div>
                                  <div>
                                      <h3 className="font-semibold text-gray-900">
                                          Impacted Wisdom Teeth
                                      </h3>
                                      <p className="text-gray-600">
                                          Crowding, pain, or infection caused by
                                          wisdom teeth that cannot fully emerge
                                      </p>
                                  </div>
                              </div>

                              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                                  <div className="bg-red-100 p-2 rounded-lg shrink-0">
                                      <AlertCircle className="w-5 h-5 text-red-600" />
                                  </div>
                                  <div>
                                      <h3 className="font-semibold text-gray-900">
                                          Jaw Clicking
                                      </h3>
                                      <p className="text-gray-600">
                                          TMJ symptoms including clicking,
                                          popping, or locking of the jaw joint
                                      </p>
                                  </div>
                              </div>

                              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                                  <div className="bg-red-100 p-2 rounded-lg shrink-0">
                                      <AlertCircle className="w-5 h-5 text-red-600" />
                                  </div>
                                  <div>
                                      <h3 className="font-semibold text-gray-900">
                                          Unusual Growths
                                      </h3>
                                      <p className="text-gray-600">
                                          Any unusual lumps, bumps, or sores in
                                          your mouth that persist for more than
                                          two weeks
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>

              {/* Benefits Section */}
              <section className="mb-16">
                  <div className="text-center mb-12">
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                          Benefits of Expert Oral Surgery
                      </h2>
                      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                          Our advanced oral surgery techniques provide lasting
                          solutions for complex dental problems, improving both
                          your oral health and quality of life.
                      </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="text-center p-6">
                          <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Shield className="w-8 h-8 text-emerald-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                              Pain Relief
                          </h3>
                          <p className="text-gray-600">
                              Eliminates chronic pain and discomfort from dental
                              conditions that cannot be treated conservatively.
                          </p>
                      </div>

                      <div className="text-center p-6">
                          <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Heart className="w-8 h-8 text-emerald-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                              Improved Function
                          </h3>
                          <p className="text-gray-600">
                              Restores proper chewing, speaking, and jaw
                              function for better overall oral health and
                              comfort.
                          </p>
                      </div>

                      <div className="text-center p-6">
                          <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Award className="w-8 h-8 text-emerald-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                              Prevents Complications
                          </h3>
                          <p className="text-gray-600">
                              Prevents serious complications like infections,
                              cysts, or damage to adjacent teeth and structures.
                          </p>
                      </div>

                      <div className="text-center p-6">
                          <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                              <CheckCircle className="w-8 h-8 text-emerald-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                              Better Quality of Life
                          </h3>
                          <p className="text-gray-600">
                              Improves overall well-being by resolving painful
                              conditions and restoring oral function.
                          </p>
                      </div>
                  </div>
              </section>

              {/* Treatment Process */}
              <section className="mb-16">
                  <div className="text-center mb-12">
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                          Our Oral Surgery Process
                      </h2>
                      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                          We follow a comprehensive approach to ensure safe,
                          effective surgical outcomes with optimal patient
                          comfort and recovery.
                      </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                      <div className="relative">
                          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-100">
                              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-4">
                                  1
                              </div>
                              <h3 className="text-xl font-bold text-gray-900 mb-3">
                                  Initial Consultation
                              </h3>
                              <p className="text-gray-600">
                                  Comprehensive examination, X-rays, and 3D
                                  imaging to assess your condition and develop a
                                  treatment plan.
                              </p>
                          </div>
                          <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600"></div>
                      </div>

                      <div className="relative">
                          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-100">
                              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-4">
                                  2
                              </div>
                              <h3 className="text-xl font-bold text-gray-900 mb-3">
                                  Pre-Surgery Planning
                              </h3>
                              <p className="text-gray-600">
                                  Detailed surgical planning, medical clearance
                                  if needed, and pre-operative instructions for
                                  optimal outcomes.
                              </p>
                          </div>
                          <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600"></div>
                      </div>

                      <div className="relative">
                          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-100">
                              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-4">
                                  3
                              </div>
                              <h3 className="text-xl font-bold text-gray-900 mb-3">
                                  Surgery Day
                              </h3>
                              <p className="text-gray-600">
                                  Advanced surgical techniques with appropriate
                                  anesthesia and sedation options for your
                                  comfort and safety.
                              </p>
                          </div>
                          <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600"></div>
                      </div>

                      <div>
                          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-100">
                              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-4">
                                  4
                              </div>
                              <h3 className="text-xl font-bold text-gray-900 mb-3">
                                  Recovery & Follow-up
                              </h3>
                              <p className="text-gray-600">
                                  Comprehensive post-operative care with regular
                                  follow-ups to ensure proper healing and
                                  optimal results.
                              </p>
                          </div>
                      </div>
                  </div>
              </section>

              {/* FAQ Section */}
              <section className="mb-16">
                  <div className="text-center mb-12">
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                          Frequently Asked Questions
                      </h2>
                      <p className="text-lg text-gray-600">
                          Get answers to common questions about oral surgery
                          procedures and recovery
                      </p>
                  </div>
                  <FAQ faqs={oralSurgeryFAQs} />
              </section>

              {/* Call to Action */}
              <CallToAction />
          </div>
      </div>
  );

}