import { FC } from "react";
import Link from "next/link";
import { HStack, Image, Text } from "@chakra-ui/react";

export const Logo: FC = (): JSX.Element => {
  return (
    <HStack>
      <Link href="/">
        <Image
          src="https://it-artel.ua/wp-content/themes/it-artel/images/logos.svg"
          alt="iT Artel logo"
        />
      </Link>
      <Text fontSize="3xl" fontWeight="bold">
        • Test Task
      </Text>
    </HStack>
  );
};
