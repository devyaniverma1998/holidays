"use client";
import { useState } from "react";

export default function FAQQue() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    { question: "What is study abroad?", answer: "Study abroad allows students to experience education and culture in another country while earning academic credit." },
    { question: "How can I apply for a study abroad program?", answer: "You can apply directly through the official program website or by contacting a study counsellor for assistance." },
    { question: "Do I need a visa to study abroad?", answer: "Visa requirements vary by destination. The program coordinators will guide you through the application process." },
    { question: "What is included in the program fee?", answer: "Program fees usually include tuition, accommodation, meals, and scheduled excursions, depending on your chosen destination." },
    { question: "Can I apply for a scholarship or financial aid?", answer: "Yes, many programs offer scholarships and payment plans. Check eligibility criteria on the program details page." },
    { question: "Is there an age limit for study abroad programs?", answer: "Most programs are open to students aged 16 and above, though some may have specific requirements." },
    { question: "Can I travel with friends?", answer: "Yes! You can apply together and request to stay in the same accommodation or attend classes together, if available." },
    { question: "How safe is studying abroad?", answer: "Safety is a top priority. Programs provide 24/7 local support, verified housing, and professional assistance in every destination." },
    { question: "Are meals included in the accommodation?", answer: "Yes, depending on your housing type. Some include breakfast and dinner, while others provide all meals." },
    { question: "Will I have free time to explore?", answer: "Absolutely! Programs include guided tours as well as free time for independent exploration." },
    { question: "What should I pack for my trip?", answer: "Pack weather-appropriate clothing, important travel documents, and essentials like chargers, medication, and toiletries." },
    { question: "Can I extend my stay after the program?", answer: "Yes, you can stay longer for personal travel, but you’ll need to manage your accommodation and visa independently." },
    { question: "Do I need travel insurance?", answer: "Yes, travel insurance is required for all participants and should cover health, emergencies, and lost luggage." },
    { question: "How big are the class sizes?", answer: "Class sizes are kept small to encourage participation and effective learning." },
    { question: "Will I receive a certificate after completing the program?", answer: "Yes, most programs provide a certificate of completion or academic transcript." },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4">
          {visibleFaqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-3 px-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100"
              >
                <span className=" font-medium text-gray-900">{faq.question}</span>
                <span
                  className={`text-2xl text-blue-600 transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                >
                  &gt;
                </span>
              </button>
              {openIndex === index && (
                <div className="py-2 px-4 text-gray-600 bg-white">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Read More Button */}
        {!showAll && faqs.length > 4 && (
          <div className="text-center mt-8">

            <button  
            onClick={() => setShowAll(true)} 
            className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold bg-gray-100 text-black hover:bg-gray-200 transition-colors">
              See More
            </button>

          </div>
        )}
      </section>
    </>
  );
}
