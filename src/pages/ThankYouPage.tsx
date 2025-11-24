import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

const ThankYouPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className=" bg-gradient-to-br from-blue-50 to-white">
      <SEO
        title="Thank You - Gnathos Multispeciality Dental Clinic"
        description="Thank you for submitting your details. We will contact you soon." />

      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="p-12 shadow-xl bg-white/80 backdrop-blur-sm border-0">
            <div className="space-y-8">
              {/* Success Icon */}
              <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>

              {/* Thank You Message */}
              <div className="space-y-4">
                <h1 className="text-4xl font-bold text-gray-900">
                  Thank You!
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We have successfully received your details and appreciate you contacting us.
                </p>
                <p className="text-lg text-gray-500">
                  Our team will review your information and get back to you shortly. 
                  We look forward to helping you with your dental care needs.
                </p>
              </div>

             

              {/* Action Buttons */}
              <div className="space-y-4">
                <Button
                  onClick={handleGoHome}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">

                  <Home className="w-5 h-5 mr-2" />
                  Return to Home
                </Button>
                
                <p className="text-sm text-gray-500">
                  Need immediate assistance? Call us at{' '}
                  <a href="tel:+919876543210" className="text-blue-600 hover:underline font-semibold">
                    +91 98765 43210
                  </a>
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-100 opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-green-100 opacity-20"></div>
        </div>
      </div>
    </div>);

};

export default ThankYouPage;