import { Button } from '@/components/ui/button';
import { Phone, Mail, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CallToActionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  showIcons?: boolean;
}

const CallToAction = ({
  title = "Ready for Your Dental Treatment?",
  description = "Book your consultation today and experience world-class dental care at Gnathos Dental.",
  primaryButtonText = "Book Appointment",
  secondaryButtonText = "Call Now: +91 9955 708 885",
  showIcons = true
}: CallToActionProps) => {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate('/contact');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:gnathosdentalcare@gmail.com';
  };

  return (
    <section className="py-16 bg-gradient-to-r from-gnathos-primary to-gnathos-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-gnathos-primary hover:bg-gray-100 font-semibold"
              onClick={handleBookAppointment}>
              {showIcons && <Calendar className="w-4 h-4 mr-2" />}
              {primaryButtonText}
            </Button>

            <a href="tel:+919955708885">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-gnathos-primary hover:bg-gray-100 hover:text-black font-semibold">
                {showIcons && <Phone className="w-4 h-4 mr-2" />}
                {secondaryButtonText}
              </Button>
            </a>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90">
            <div
              className="flex items-center space-x-2 cursor-pointer hover:text-white transition-colors"
              onClick={handleEmailClick}>
              <Mail className="w-4 h-4" />
              <span>gnathosdentalcare@gmail.com</span>
            </div>
            
          </div>
        </div>
      </div>
    </section>);

};

export default CallToAction;