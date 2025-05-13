import { useState } from "react";

const faqs = [
  {
    question: "How does it work?",
    answer:
      "Our citizen engagement platform allows users to report incidents, request and receive information, and participate in civic decision-making. It provides a seamless and user-friendly experience to empower citizens and enhance government transparency.",
  },
  {
    question: "Is it free?",
    answer: "Yes, our platform is completely free to use.",
  },
  {
    question: "How can I join?",
    answer: "You can sign up using your email or social media account.",
  },
  {
    question: "Can I report anonymously?",
    answer:
      "Absolutely. You can report incidents anonymously without revealing your identity.",
  },
  {
    question: "How is my data used?",
    answer:
      "We only use your data to improve the platform experience. No data is shared externally.",
  },
  {
    question: "Is there a mobile application?",
    answer: "Yes, we have apps available for both iOS and Android devices.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-[#121212] text-white py-15 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">FAQs</h2>
        <p className="text-center text-white gray-400 mb-8">
          Find answers to common questions about our citizen engagement platform
          and its features.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#292D32] rounded-md overflow-hidden text-[#EDEDED]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 py-4 text-left text-white font-medium"
              >
                <span className="">{faq.question}</span>
                <span className="text-2xl">
                  {openIndex === index ? "×" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-300 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
