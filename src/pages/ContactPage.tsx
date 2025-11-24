import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Users, Award, CheckCircle, Navigation, Car, Train, MessageCircle, Send, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactPage = () => {
  const { toast } = useToast();
  const phoneNumber = "+919955708885";
  const whatsappNumber = "919955708885";
  const email = "gnathosdentalcare@gmail.com";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form submitted:", data);

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours."
      });

      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = (message = "Hello! I would like to book an appointment at Gnathos Dental.") => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  const handleEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="bg-white">
      <SEO
        title="Contact Best Dental Clinic in Hyderabad | Gnathos Dental - Book Appointment"
        description="Contact Gnathos Dental, the best dental clinic in Hyderabad. Book your appointment for dental implants, root canal, cosmetic dentistry. Call +91 9955 708 885"
        keywords="contact dental clinic Hyderabad, book dental appointment, dental clinic phone number, Gnathos Dental contact, dental emergency Hyderabad"
        canonical="https://gnathosdentalcare.com/contact" />

     

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-emerald-400 to-teal-600 pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Get in touch with the best dental clinic in Hyderabad for expert dental care, advanced treatments, and personalized service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100"
              onClick={handlePhoneCall}>
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +91 9955 708 885
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-emerald-600 hover:bg-gray-100 "
              onClick={() => handleWhatsApp()}>
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Send Us a Message
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you within 24 hours. Our team is ready to help you with all your dental needs.
              </p>
            </div>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Contact Form</CardTitle>
                <CardDescription className="text-center">
                  Get in touch with us for appointments, queries, or emergency care
                </CardDescription>
              </CardHeader>
              <CardContent>
                
               <form accept-charset='UTF-8' action='https://app.formester.com/forms/SVpbfDL8d/submissions' method='POST' className="space-y-6">
  <div className="grid md:grid-cols-2 gap-6">
    <div className="space-y-2">
      <Label htmlFor="name">Full Name *</Label>
      <Input
                        id="name"
                        placeholder="Enter your full name"
                        required
                        {...register("name", {
                          required: "Full name is required",
                          minLength: {
                            value: 2,
                            message: "Name must be at least 2 characters long"
                          }
                        })}
                        className={errors.name ? "border-red-500" : ""} />

      {errors.name &&
                      <p className="text-red-500 text-sm">{errors.name.message}</p>
                      }
    </div>
    
    <div className="space-y-2">
      <Label htmlFor="phone">Phone Number *</Label>
      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your 10-digit phone number"
                        required
                        {...register("phone", {
                          required: "Phone number is required",
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Please enter a valid 10-digit phone number"
                          }
                        })}
                        className={errors.phone ? "border-red-500" : ""} />

      {errors.phone &&
                      <p className="text-red-500 text-sm">{errors.phone.message}</p>
                      }
    </div>
  </div>
  
  <div className="space-y-2">
    <Label htmlFor="email">Email Address</Label>
    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      {...register("email", {
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Please enter a valid email address"
                        }
                      })}
                      className={errors.email ? "border-red-500" : ""} />

    {errors.email &&
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                    }
  </div>
  
  <div className="space-y-2">
    <Label htmlFor="message">Message</Label>
    <Textarea
                      id="message"
                      placeholder="Tell us about your dental concerns or questions..."
                      rows={5}
                      {...register("message")}
                      className={errors.message ? "border-red-500" : ""} />

    {errors.message &&
                    <p className="text-red-500 text-sm">{errors.message.message}</p>
                    }
  </div>
  
  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600"
                    disabled={isSubmitting}>

    {isSubmitting ?
                    <>
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
        Sending...
      </> :
                    <>
        <Send className="w-4 h-4 mr-2" />
        Send Message
      </>
                    }
  </Button>
                </form>

              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the most convenient way to contact us. We're available through multiple channels to serve you better.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">Phone Call</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">Speak directly with our team for immediate assistance and appointment booking.</CardDescription>
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={handlePhoneCall}>

                  +91 9955 708 885
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">Quick messaging for appointment booking and dental queries on WhatsApp.</CardDescription>
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => handleWhatsApp()}>

                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">Send us detailed queries and we'll respond within 24 hours.</CardDescription>
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={handleEmail}>

                  gnathosdentalcare@gmail.com
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">Walk-in consultations available at all our Hyderabad locations.</CardDescription>
                <Button className="w-full" variant="outline">
                  Find Locations
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-10 h-10 text-red-600" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Dental Emergency? We're Here 24/7
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Don't let dental pain wait! Our emergency dental services are available round the clock for urgent dental care needs. Call us immediately for prompt treatment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white"
                  onClick={handlePhoneCall}>

                  <Phone className="w-5 h-5 mr-2" />
                  Emergency: +91 9955 708 885
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50"
                  onClick={() => handleWhatsApp("Emergency dental care needed! Please help.")}>

                  WhatsApp Emergency
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);

};

export default ContactPage;