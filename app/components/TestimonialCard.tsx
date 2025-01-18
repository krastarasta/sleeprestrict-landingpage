import { Avatar, Flex, Text } from "@radix-ui/themes";

interface Props {
  feedback: string;
  name: string;
  role: string;
}

const TestimonialCard = ({ feedback, name, role }: Props) => {
  return (
    <Flex
      direction="column"
      p="5"
      className="sm:w-80 sm:h-60 bg-[#fefefe] rounded-2xl col-span-1 "
    >
      <Flex justify="center" align="center" className=" flex-grow">
        <Text size="4" align="center" className="italic">
          {feedback}
        </Text>
      </Flex>
      <Flex align="center" gap="3" className="flex-col sm:flex-row mt-3">
        <Avatar fallback radius="full" size="5" />
        <Flex direction="column">
          <Text weight="medium" className="text-center sm:text-left">
            {name}
          </Text>
          <Text className="text-center sm:text-left">{role}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TestimonialCard;
