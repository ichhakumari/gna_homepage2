import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItem[];
  faqs?: FAQItem[];
}

const FAQ = ({ title = "Frequently Asked Questions", items, faqs }: FAQProps) => {
  const faqItems = items || faqs || [];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about our dental services and treatments.
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) =>
          <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-0">
                <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}>

                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {item.question}
                  </h3>
                  {openIndex === index ?
                <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" /> :

                <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                }
                </button>
                {openIndex === index &&
              <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
              }
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>);

};

export default FAQ;