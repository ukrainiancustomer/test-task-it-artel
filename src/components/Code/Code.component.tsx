import { FC } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

export interface ICode {
  language: string;
  children: string;
}

export const Code: FC<ICode> = ({ language, children }): JSX.Element => {
  return <SyntaxHighlighter language={language}>{children}</SyntaxHighlighter>;
};
