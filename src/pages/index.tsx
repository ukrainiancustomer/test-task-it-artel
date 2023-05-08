import { Inter } from "next/font/google";
import { Container, Heading, Stack, Text } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container as={Stack} maxW="1200px" py={10} textAlign="center" spacing={10}>
      <Heading as="h1" size="3xl">
        Вітаю! Дякую за ваш час!
      </Heading>
      <Heading size="xl">Буду вдячний за будь який фідбек!</Heading>
    </Container>
  );
}
