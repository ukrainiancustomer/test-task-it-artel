import { FC } from "react";
import { Text } from "@chakra-ui/react";

interface PageTitleProps {
  children: string;
}

export const PageTitle: FC<PageTitleProps> = ({ children }): JSX.Element => {
  return <Text fontSize="3xl">{children}</Text>;
};
