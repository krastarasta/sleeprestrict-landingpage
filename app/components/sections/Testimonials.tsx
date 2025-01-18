import { Flex, Heading } from "@radix-ui/themes";
import TestimonialCard from "../TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      feedback:
        "Sleepiest has been life-changing! The step-by-step plan helped me manage my insomnia and improve my sleep quality in weeks.",
      role: "Designer",
    },
    {
      name: "Dr. James P.",
      feedback:
        "As a physician, I recommend this app to my patients. It provides clear, evidence-based strategies for tackling chronic sleep issues.",
      role: "Medical Practitioner",
    },
    {
      name: "Liam K.",
      feedback:
        "The sleep tracker gave me insights into my patterns. The course is simple, engaging, and super effective!",
      role: "Entrepreneur",
    },
  ];

  return (
    <section className="px-6 py-12 ">
      <div className="max-w-4xl mx-auto">
        <Heading mb="3" size="7" align="center">
          Hear From Our Customers
        </Heading>
      </div>
      <Flex width="100%" justify="center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              feedback={testimonial.feedback}
              name={testimonial.name}
              role={testimonial.role}
            />
          ))}
        </div>
      </Flex>
    </section>
  );
};

export default Testimonials;
