import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // using lucide icons

const faqs = [
   {
      question: "Q. Why should I choose 100xDevs?",
      answer:
         "No compromises. With 100xDevs, you don't have to choose between different tutors and random tutorials. Get the power of building production-ready applications.",
   },
   {
      question: "Q. Who will be teaching me?",
      answer:
         "⁠Learn from the best. Harkirat is the top instructor in India for remote work, open source, and landing jobs.",
   },
   {
      question: "Q. Is 100xDevs suitable for beginners?",
      answer:
         "Yes, 100xDevs is perfect for beginners. Start from the basics and advance to complex technologies through projects.",
   },
   {
      question: "Q. Will I get additional course materials than recordings?",
      answer:
         "⁠Yes, revisions are made easy. Stop worrying about noting down timestamps and revisiting the recordings. Get access to well-documented slides for all the lessons.",
   },
   {
      question: "Q. How will 100xDevs help me grow as a developer?",
      answer:
         "Learn, build, and ship — without the fear of missing out. Reach your inflection point and become a self-sufficient developer in just a few months.",
   },
   {
      question: "Q. How can I get my doubts resolved quickly?",
      answer:
         "Personal TAs are available to help you get your doubts solved. Get it fixed by asking in the Discord community!",
   },
   {
      question: "Q. Are there hands-on assignments?",
      answer:
         "Definitely. We craft assignments to ensure a hands-on learning experience.",
   },
];

const Faq = () => {
   const [openIndex, setOpenIndex] = useState(null); 

   const toggleFaq = (index) => {
      setOpenIndex(openIndex === index ? null : index);
   };

   return (
      <section className="py-10 px-6  text-white">
         <div className="max-w-3xl mx-auto">
            <h2 className=" flex justify-center items-center text-center  text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
               {faqs.map((faq, index) => {
                  const isOpen = index === openIndex;
                  return (
                     <div
                        key={index}
                        className="border border-gray-700 rounded-xl p-4 transition-all duration-300"
                     >
                        <div
                           className="flex justify-between items-center cursor-pointer"
                           onClick={() => toggleFaq(index)}
                        >
                           <h3 className="text-lg font-semibold">{faq.question}</h3>
                           <span
                              className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                 }`}
                           >
                              {isOpen ? (
                                 <ChevronUp className="w-5 h-5" />
                              ) : (
                                 <ChevronDown className="w-5 h-5" />
                              )}
                           </span>
                        </div>
                        {isOpen && (
                           <p className="mt-3 text-gray-300 transition-all duration-300">
                              {faq.answer}
                           </p>
                        )}
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default Faq;
