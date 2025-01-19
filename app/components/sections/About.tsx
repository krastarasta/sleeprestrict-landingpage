import { Flex, Heading, Text } from "@radix-ui/themes";

//TODO: Adjust do small screen sizes and add an image

const About = () => {
  const cardData = [
    {
      title: "1. Proven Method",
      description:
        "Our approach is rooted in CBTi, the gold standard for managing insomnia, backed by decades of research.",
    },
    {
      title: "2. Personalized Tracker",
      description:
        "Track your progress with an intuitive sleep tracker designed to guide you through the process step-by-step.",
    },
    {
      title: "3. Expert Guidance",
      description:
        "Learn with engaging videos and actionable insights tailored to help you take control of your sleep.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 text-gray-800 relative overflow-hidden">
      <Flex direction="column" gap="5">
        <div className="max-w-5xl mx-auto text-center">
          <Heading mb="3" size="7" align="center" className="">
            Why Sleeprestriction?
          </Heading>
          <Text size="4" className="text-gray-600">
            A better night's sleep is just a few steps away.
            Sleeprestriction.com provides science-backed tools and a
            step-by-step plan to help you tackle long-term sleep issues and
            insomnia with Cognitive Behavioral Therapy for Insomnia (CBTi).
          </Text>
        </div>
        <div className="relative grid grid-cols-5 gap-2  max-w-5xl mx-auto z-10">
          <Flex
            justify="center"
            align="center"
            className="col-span-3 rounded-xl overflow-hidden"
          >
            <div className="h-full w-full bg-purple-200"></div>
          </Flex>
          <Flex direction="column" className="col-span-2">
            {cardData.map((card, index) => (
              <div
                key={index}
                className=" p-6 rounded-lg   transition transform hover:scale-105 relative"
              >
                <Heading size="5" className="mb-3 ">
                  {card.title}
                </Heading>
                <Text color="gray">{card.description}</Text>
              </div>
            ))}
          </Flex>
        </div>
      </Flex>
    </section>
  );
};

export default About;
