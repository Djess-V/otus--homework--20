import React, { FC } from "react";
import "./paragraph.css";

interface IParagraphProps {
  text: string;
}

export const Paragraph: FC<IParagraphProps> = ({ text }) => {
  return (
    <p className="paragraph" data-testid="paragraph-test">
      {text}
    </p>
  );
};
