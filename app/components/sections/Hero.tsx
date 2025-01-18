import { Button, Container, Flex, Heading, Text } from "@radix-ui/themes";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full h-full pt-10">
      <Container>
        <Flex direction="column" justify="center" align="center" gap="6" px="8">
          <Heading align="center" size="9" className="textPrimary">
            Overcome Insomnia with Proven Sleep Restriction Techniques!
          </Heading>
          <Text align="center" size="5" className="textPrimary">
            Learn from evidence-based methods and track your progress with our
            Sleep Restriction Tracker.
          </Text>
          <Flex gap="5" align="center">
            <Button color="violet" size="4">
              Pre-order the course now!
            </Button>
          </Flex>
          <Flex
            align="center"
            justify="center"
            className="w-full rounded-xl bg-black aspect-video relative justify-center items-center"
          >
            <div className=" bg-slate-400 p-4 rounded-full">
              <Play className="w-10 h-10 text-white" />
            </div>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Hero;
