import { FC } from "react";
import NextLink from "next/link";
import { links } from "./Navigation.data";
import { FlexProps, HStack, Link } from "@chakra-ui/react";

interface INavigation extends FlexProps {}

export const Navigation: FC<INavigation> = (): JSX.Element => {
  return (
    <HStack textTransform="uppercase" spacing={4}>
      {links.map((link) => (
        <Link
          as={NextLink}
          key={link.id}
          href={link.href}
          target={link?.target ?? "_self"}
        >
          {link.title}
        </Link>
      ))}
    </HStack>
  );
};
