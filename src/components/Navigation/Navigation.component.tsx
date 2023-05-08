import { FC } from "react";
import Link from "next/link";
import { links } from "./Navigation.data";
import { FlexProps, HStack } from "@chakra-ui/react";

interface INavigation extends FlexProps {}

export const Navigation: FC<INavigation> = (): JSX.Element => {
  return (
    <HStack textTransform="uppercase" spacing={4}>
      {links.map((link) => (
        <Link key={link.id} href={link.href} target={link?.target ?? "_self"}>
          {link.title}
        </Link>
      ))}
    </HStack>
  );
};
