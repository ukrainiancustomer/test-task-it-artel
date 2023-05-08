import { FC } from "react";
import { Logo } from "@/components";
import { Navigation } from "@/components";
import { Container, FlexProps, HStack } from "@chakra-ui/react";

interface IHeader extends FlexProps {}

export const Header: FC<IHeader> = (): JSX.Element => {
  return (
    <HStack
      position="sticky"
      top="0"
      left="0"
      bgColor="white"
      boxShadow="0px 1px 5px 0px rgba(0,0,0,0.75);"
      zIndex={99}
    >
      <Container as={HStack} p={4} justifyContent="space-between" maxW="1200px">
        <Logo />
        <Navigation />
      </Container>
    </HStack>
  );
};
