import { Flex, Heading, Text } from "@radix-ui/themes";
import { MoonIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f8f9fa] border-t px-4 py-6">
      <Flex width="100%" justify="center" align="center" className="min-h-40">
        <Flex align="center" direction="column" gap="2">
          <div className="textPrimary mr-2">
            <MoonIcon />
          </div>
          <Heading size="5" className="textPrimary">
            Sleeprestrict.com
          </Heading>
          <Text size="1" className="textPrimary">
            Copyright - Hearttec AS
          </Text>
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
