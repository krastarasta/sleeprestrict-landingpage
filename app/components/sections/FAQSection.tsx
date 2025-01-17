import * as Accordion from "@radix-ui/react-accordion";
import { Heading } from "@radix-ui/themes";
import { ChevronDownIcon } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is sleep restriction therapy?",
      answer:
        "Sleep restriction therapy is a behavioral treatment for insomnia that involves limiting the time spent in bed to the actual amount of sleep you need, improving sleep efficiency over time.",
    },
    {
      question: "Who can benefit from your course?",
      answer:
        "Our course is designed for individuals struggling with long-term sleep issues or insomnia, and it is also helpful for anyone seeking to improve their sleep quality.",
    },
    {
      question: "How does the sleep tracker work?",
      answer:
        "The sleep tracker allows you to log your sleep habits, monitor your progress, and adjust your sleep schedule according to the program's recommendations.",
    },
    {
      question: "Is this course scientifically backed?",
      answer:
        "Yes, the course is based on Cognitive Behavioral Therapy for Insomnia (CBTi), which is a proven, evidence-based approach to treating sleep disorders.",
    },
  ];

  return (
    <section className="px-6 py-12 ">
      <div className="max-w-4xl mx-auto">
        <Heading mb="3" size="7" align="center">
          Frequently Asked Questions
        </Heading>
        <Accordion.Root type="single" collapsible>
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg"
            >
              <Accordion.Trigger className="flex justify-between items-center w-full px-6 py-4 text-lg font-medium text-gray-800 focus:outline-none border-b border-gray-200  ">
                {faq.question}
                <ChevronDownIcon className="ml-2 h-5 w-5  text-gray-500" />
              </Accordion.Trigger>
              <Accordion.Content className="px-6 py-4 text-gray-600 ">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
};

export default FAQSection;
