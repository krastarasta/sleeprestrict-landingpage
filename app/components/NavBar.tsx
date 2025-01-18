import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

//TODO: Extract the primary bg and primary text

const NavBar = () => {
  return (
    <nav className="py-5 bg-[#f8f9fa] ">
      <Flex justify="between" className="px-11 ">
        <Link href="/" className="flex items-center gap-3 ">
          <Text weight="medium" size="6" className="">
            Sleeprestrict.com
          </Text>
        </Link>
        <Flex align="center" justify="between" gap="4">
          <NavLinks />
        </Flex>
      </Flex>
    </nav>
  );
};

const NavLinks = () => {
  const links = [{ label: "Pre-order now", href: "/#" }];

  return (
    <ul className="flex space-x-10">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            className=" nav-link transition-transform transform hover:scale-110"
            href={link.href}
          >
            <Text weight="medium" size="4">
              {link.label}
            </Text>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
