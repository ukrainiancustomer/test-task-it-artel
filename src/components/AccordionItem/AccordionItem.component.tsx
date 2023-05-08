import { FC, ReactNode } from "react";
import {
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  AccordionItem as ChakraAccordionItem,
  Stack,
} from "@chakra-ui/react";

export interface IAccordionItem {
  title: string;
  children: ReactNode;
}

export const AccordionItem: FC<IAccordionItem> = ({
  title,
  children,
}): JSX.Element => {
  return (
    <ChakraAccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel>
        <Stack spacing={4}>{children}</Stack>
      </AccordionPanel>
    </ChakraAccordionItem>
  );
};
